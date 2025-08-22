import { ref } from 'vue'

interface Album {
  name: string
  url: string
}

interface Image {
  key: string
  url: string
  previewUrl: string
  lastModified?: Date
  size?: number
}

export function useGalleryAPI() {
  // Для Docker: используем имя сервиса 'backend' вместо localhost
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ||
    `http://${window.location.hostname}:3001`

  console.log('API Base URL:', apiBaseUrl)

  const albums = ref<Album[]>([])
  const albumImages = ref<Record<string, Image[]>>({})
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const fetchAlbums = async () => {
    try {
      isLoading.value = true
      error.value = null
      const url = `${apiBaseUrl}/api/albums`
      console.log('Fetching albums from URL:', url)

      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      console.log('Response status:', response.status)
      console.log('Response headers:', Object.fromEntries(response.headers.entries()))

      if (!response.ok) {
        const text = await response.text()
        console.log('Response text (first 200 chars):', text.substring(0, 200))
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const contentType = response.headers.get('content-type')
      console.log('Content-Type:', contentType)

      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text()
        console.log('Non-JSON response (first 200 chars):', text.substring(0, 200))
        throw new Error(`Expected JSON but got: ${contentType}`)
      }

      albums.value = await response.json()
      console.log('Successfully fetched albums:', albums.value.length)
    } catch (err) {
      error.value = (err as Error).message
      console.error('Failed to fetch albums:', err)
    } finally {
      isLoading.value = false
    }
  }

  const fetchAlbumImages = async (albumName: string) => {
    try {
      isLoading.value = true
      error.value = null
      console.log('Fetching images from:', `${apiBaseUrl}/api/albums/${encodeURIComponent(albumName)}/images`)

      const response = await fetch(`${apiBaseUrl}/api/albums/${encodeURIComponent(albumName)}/images`, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const contentType = response.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error(`Expected JSON but got: ${contentType}`)
      }

      const images: Image[] = await response.json()

      const imagesWithCorrectPreviewUrl = images.map(image => ({
        ...image,
        previewUrl: `${apiBaseUrl}/api/images/preview?key=${encodeURIComponent(image.key)}&w=300&h=300`
      }))

      albumImages.value[albumName] = imagesWithCorrectPreviewUrl
      return imagesWithCorrectPreviewUrl
    } catch (err) {
      error.value = (err as Error).message
      console.error(`Failed to fetch images for album ${albumName}:`, err)
      return []
    } finally {
      isLoading.value = false
    }
  }

  return {
    albums,
    albumImages,
    isLoading,
    error,
    fetchAlbums,
    fetchAlbumImages
  }
}
