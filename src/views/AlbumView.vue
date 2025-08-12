<template>
  <main class="album">
    <ParticlesBackground />
    <div class="container">
      <TheHeading>
        <template #heading><b>{{ t(currentAlbum?.title) }},</b> bitte</template>
        <template #caption><span v-html="t(currentAlbum?.description)" /></template>
      </TheHeading>
      <div class="album__main">
        <div class="album__main-bg" />
        <div v-for="(image, index) in currentAlbum?.imagesGallery" :key="index" class="album__item">
          <img
            :key="index"
            :src="image"
            width="100"
            height="100"
            :alt="'Image ' + index"
            draggable="false"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import ParticlesBackground from '../components/additionals/ParticlesBackground.vue';
import TheHeading from "../components/TheHeading.vue";
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import albums from '../data/albums.json';
import { useI18n } from 'vue-i18n';
const { t, te } = useI18n();

const route = useRoute();

const currentAlbum = computed(() => {
  return albums.find(
    (album) =>
      album.albumCode === route.params.albumCode &&
      album.pageCode === route.params.pageCode
  ) ?? {
    title: 'Unknown Album',
    description: '',
    imagesGallery: []
  };
});
</script>

<style lang="scss">
.album .particles-container {
  background-color: #020a1d;
}
</style>

<style lang="scss" scoped>
.album {
  min-height: 100vh;
  padding-inline: 10px;
  &__main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem 2rem;
    position: relative;
    margin-top: 22px;
  }
  &__main-bg {
    position: absolute;
    inset: 0;
    border-radius: 24px;
    background: rgba(2, 10, 29, 0.25);
    backdrop-filter: blur(5px);
  }
  &__item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 12px 36px;
    background-color: #1c294375;
    border-radius: 16px;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 12px;
    }
  }
}
</style>
