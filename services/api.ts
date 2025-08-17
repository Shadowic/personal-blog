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
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001'
  const albums = ref<Album[]>([])
  const albumImages = ref<Record<string, Image[]>>({})
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const fetchAlbums = async () => {
    try {
      isLoading.value = true
      error.value = null

      const response = await fetch(`${apiBaseUrl}/api/albums`, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      albums.value = await response.json()
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

      const response = await fetch(`${apiBaseUrl}/api/albums/${encodeURIComponent(albumName)}/images`, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
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
