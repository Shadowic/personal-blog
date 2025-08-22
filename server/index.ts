import express from 'express';
import cors from 'cors';
import { S3Client, GetObjectCommand, HeadObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { Readable } from 'node:stream';
import dotenv from 'dotenv';
import NodeCache from 'node-cache';
import sharp from 'sharp';

// Конфигурация
dotenv.config();
const cache = new NodeCache({ stdTTL: 3600 });
const PORT = process.env.PORT || 3001;
const BUCKET_NAME = 'b01de1b4-shadowic-space-images';

const apiBaseUrl = process.env.API_BASE_URL || `http://localhost:${PORT}`;

// Инициализация S3 клиента
const s3Client = new S3Client({
  region: 'ru-1',
  endpoint: 'https://s3.timeweb.cloud',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
  },
  forcePathStyle: true,
  tls: true
});

const app = express();

// Middleware
app.use(cors({
  origin: ['https://shadowic.space', 'http://localhost:3000'],
  credentials: true
}))
app.use(express.json());

// Обработка потокового чтения из S3
async function streamToBuffer(stream: any): Promise<Buffer> {
  const chunks: Buffer[] = [];
  return new Promise((resolve, reject) => {
    stream.on('data', (chunk: Buffer) => chunks.push(chunk));
    stream.on('error', reject);
    stream.on('end', () => resolve(Buffer.concat(chunks)));
  });
}

// Генерация preview
const generatePreview = async (imageKey: string, width = 300, height = 300) => {
  const cacheKey = `preview_${imageKey}_${width}x${height}`;
  const cached = cache.get<Buffer>(cacheKey);
  if (cached) return cached;

  try {
    const { Body } = await s3Client.send(new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: imageKey
    }));

    if (!Body) throw new Error('Image not found');

    // Используем transformToByteArray для конвертации потока в Buffer
    const byteArray = await Body.transformToByteArray();
    const imageBuffer = Buffer.from(byteArray);

    const previewBuffer = await sharp(imageBuffer)
      .resize(width, height, {
        fit: sharp.fit.inside,
        withoutEnlargement: true
      })
      .jpeg({ quality: 80 })
      .toBuffer();

    cache.set(cacheKey, previewBuffer);
    return previewBuffer;
  } catch (error) {
    console.error(`Preview generation error for ${imageKey}:`, error);
    throw error;
  }
};

// Endpoints
app.get('/api/albums', async (req, res) => {
  try {
    const data = await s3Client.send(new ListObjectsV2Command({
      Bucket: BUCKET_NAME,
      Delimiter: '/'
    }));

    const albums = (data.CommonPrefixes || []).map(prefix => ({
      name: prefix.Prefix?.replace('/', '') || 'unnamed',
      url: `https://${BUCKET_NAME}.s3.timeweb.cloud/${prefix.Prefix}`
    }));

    res.json(albums);
  } catch (error) {
    console.error('Albums error:', error);
    res.status(500).json({ error: 'Failed to fetch albums' });
  }
});

app.get('/api/albums/:albumName/images', async (req, res) => {
  try {
    const { albumName } = req.params;

    if (!/^[a-zA-Z0-9_-]+$/.test(albumName)) {
      return res.status(400).json({ error: 'Invalid album name' });
    }

    const data = await s3Client.send(new ListObjectsV2Command({
      Bucket: BUCKET_NAME,
      Prefix: `${albumName}/`
    }));

    const images = (data.Contents || [])
      .filter(item => item.Key && !item.Key.endsWith('/'))
      .map(item => ({
        key: item.Key!,
        url: `https://${BUCKET_NAME}.s3.timeweb.cloud/${item.Key}`,
        previewUrl: `${apiBaseUrl}/api/images/preview?key=${encodeURIComponent(item.Key!)}&w=300&h=300`,
        lastModified: item.LastModified,
        size: item.Size
      }));

    res.json(images);
  } catch (error) {
    console.error('Images error:', error);
    res.status(500).json({ error: 'Failed to fetch images' });
  }
});

app.get('/api/images/preview', async (req, res) => {
  try {
    const { key, w, h } = req.query;

    if (!key || typeof key !== 'string') {
      return res.status(400).json({ error: 'Missing image key' });
    }

    const imageKey = decodeURIComponent(key);
    const width = parseInt(w as string) || 300;
    const height = parseInt(h as string) || 300;

    // Проверка существования файла
    try {
      await s3Client.send(new HeadObjectCommand({
        Bucket: BUCKET_NAME,
        Key: imageKey
      }));
    } catch (err) {
      return res.status(404).json({ error: 'Image not found' });
    }

    const preview = await generatePreview(imageKey, width, height);

    res.set('Content-Type', 'image/jpeg');
    res.send(preview);
  } catch (error) {
    console.error('Preview error:', error);
    res.status(500).json({
      error: 'Failed to generate preview',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Endpoints:');
  console.log(`- GET /api/albums`);
  console.log(`- GET /api/albums/:albumName/images`);
  console.log(`- GET /api/images/preview?key=IMAGE_KEY&w=WIDTH&h=HEIGHT`);
});
