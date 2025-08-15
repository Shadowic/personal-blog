<template>
  <main>
    <div class="albums">
      <ParticlesBackground />
      <div class="container">
        <TheHeading>
          <template #heading><span v-html="t(index.title)"></span></template>
        </TheHeading>
        <div class="hero">
          <div class="hero__main">
            <p class="hero__subtitle" v-html="t(index.subtitle)" />
            <p class="hero__description" v-html="t(index.description)" />
          </div>
          <div class="hero__cover">
            <img :src="index.cover.data.attributes.formats.medium.url" width="1280" height="853" alt="cover photo" />
          </div>
        </div>
        <div class="albums__main">
          <div class="albums__main-bg" />
          <div v-for="(album, index) in filteredAlbums" :key="index" class="albums__item">
            <img
              :src="album.imageMain"
              width="100"
              height="100"
              :alt="t(album.title)"
              draggable="false"
            />
            <div class="albums__item-previews">
              <img
                v-for="(preview, i) in album.imagesPreview"
                :key="i"
                :src="preview"
                width="100"
                height="100"
                :alt="t(album.title)"
                draggable="false"
              />
            </div>
            <h2
              v-if="album.title"
              v-html="t(album.title)"
              class="albums__item-title"
            />
            <p
              v-if="album.caption"
              v-html="t(album.caption)"
              class="albums__item-caption"
            />
            <p
              v-if="album.description"
              v-html="t(album.description)"
              class="albums__item-description"
            />
            <TheButton
              v-if="album.button"
              @click="goToAlbumList(album.albumCode)"
              class="albums__item-btn"
            >
              <template #button>{{ t(album.buttonText) }}</template>
            </TheButton>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import ParticlesBackground from '../components/additionals/ParticlesBackground.vue';
import TheHeading from "../components/TheHeading.vue";
import { computed } from 'vue';
import albums from '../data/albums.json';
import index from '../data/index.json';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import TheButton from "../components/TheButton.vue";
const { t, te } = useI18n();
const filteredAlbums = computed(() => albums.filter(album => album.isOnIndex));
const router = useRouter();

const goToAlbumList = (albumCode: any) => {
  router.push({
    name: 'filtered-albums',
    params: {
      albumCode
    },
  });
};
</script>

<style lang="scss">
.albums .particles-container {
  background-color: #020a1d;
}
</style>

<style lang="scss" scoped>
@use '../assets/variables' as *;
.hero {
  position: relative;
  color: #d0d8db;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  &__main {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  &__description {
    font-size: 1.1rem;
    line-height: 1.6;
  }
  &__cover {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.albums {
  min-height: 100vh;
  padding-inline: 10px;
  &__main {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 58px 36px;
    position: relative;
    margin-top: 88px;
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
    flex-direction: column;
    align-items: flex-start;
    padding: 12px 12px 36px;
    background-color: #1c294375;
    border-radius: 16px;
    color: $ocean;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 12px;
    }
    &-previews {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px 8px;
      margin-top: 12px;
      img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 4px;
      }
    }
    &-title {
      font-family: 'DM Sans', sans-serif;
      font-size: 24px;
      margin-top: 24px;
    }
    &-caption {
      font-size: 14px;
      margin-top: 12px;
    }
    &-description {
      font-size: 16px;
      margin-top: 22px;
    }
    &-btn {
      margin-top: 40px;
    }
  }
}
</style>
