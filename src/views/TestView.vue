<script setup lang="ts">
import ParticlesBackground from '../components/additionals/ParticlesBackground.vue'
import TheHeading from '../components/TheHeading.vue'
import HeadingIcon from '../components/additionals/IconHeading.vue'
import { ref, onMounted } from 'vue'
import { useGalleryAPI } from '../../services/api'

const {
  albums,
  albumImages,
  isLoading,
  error,
  fetchAlbums,
  fetchAlbumImages
} = useGalleryAPI()

const imagesLoading = ref(false)

onMounted(async () => {
  try {
    imagesLoading.value = true
    await fetchAlbums()

    for (const album of albums.value) {
      await fetchAlbumImages(album.name)
    }
  } catch (err) {
    console.error('Failed to load data:', err)
  } finally {
    imagesLoading.value = false
  }
})
</script>

<template>
  <main class="test">
    <ParticlesBackground />
    <div class="container">
      <TheHeading>
        <template #icon>
          <HeadingIcon />
        </template>
        <template #heading>It's <b>test</b> page</template>
        <template #caption>test page content</template>
      </TheHeading>
      <div class="test__main">
        <div v-if="isLoading || imagesLoading" class="loading">Loading...</div>
        <div v-else-if="error" class="error">{{ error }}</div>

        <div v-else>
          <div class="albums">
            <div
              v-for="album in albums"
              :key="album.name"
              class="albums__item"
            >
              <h3>{{ album.name }}</h3>
              <div class="albums__item-imgs">
                <div
                  v-for="image in albumImages[album.name] || []"
                  :key="image.key"
                  class="albums__item-img"
                >
                  <img
                    :src="image.previewUrl || image.url"
                    :alt="`Image from ${album.name}`"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.test .particles-container {
  background-color: #020a1d;
}
</style>

<style lang="scss" scoped>
.test__main {
  position: relative;
  color: #d0d8db;
}

.albums {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @include md {
    grid-template-columns: repeat(3, 1fr);
  }
  @include xl {
    grid-template-columns: repeat(4, 1fr);
  }
}

.albums__item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.albums__item-imgs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.albums__item-img {
  width: 100%;
  padding-bottom: 64%;
  position: relative;
}

.albums__item-img img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
