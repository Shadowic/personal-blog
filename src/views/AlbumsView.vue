<template>
  <div class="albums">
    <ParticlesBackground />
    <div class="container">
      <TheHeading>
        <template #heading><b>Albums,</b> bitte</template>
      </TheHeading>
      <SearchBar
        v-if="route.name === 'all-albums'"
        :album-codes="albumCodes"
        @select="filterAlbums"
      />
      <div class="albums__main">
        <div class="albums__main-bg" />
        <div v-for="(album, index) in displayedAlbums" :key="index" class="albums__item">
          <img
            :src="album.imageMain"
            width="100"
            height="100"
            :alt="t(album.title)"
            draggable="false"
          />
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
          <button
            v-if="album.button"
            v-html="t(album.buttonText)"
            class="albums__item-btn"
            @click="goToAlbum(album)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ParticlesBackground from '../components/additionals/ParticlesBackground.vue';
import TheHeading from "../components/TheHeading.vue";
import albums from '../data/albums.json';
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import SearchBar from "../components/SearchBar.vue";
const { t, te } = useI18n();

const router = useRouter();
const route = useRoute();

const currentFilter = ref<string | null>(null);

const displayedAlbums = computed(() => {
  if (route.name !== 'all-albums') {
    return albums.filter(a => a.albumCode === route.params.albumCode);
  }
  if (currentFilter.value) {
    return albums.filter(a => a.albumCode === currentFilter.value);
  }
  return albums;
});

const albumCodes = computed(() => {
  return [...new Set(albums.map(album => album.albumCode))];
});

const filterAlbums = (code: string | null) => {
  currentFilter.value = code;
};

const goToAlbum = (album: any) => {
  router.push({
    name: 'album',
    params: {
      albumCode: album.albumCode,
      pageCode: album.pageCode,
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

.albums {
  min-height: 100vh;
  padding-inline: 10px;
  &__main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 58px 36px;
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
    flex-direction: column;
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
      padding: 8px 18px;
      background-color: #778069;
      border-radius: 8px;
      margin-top: 24px;
      width: fit-content;
      color: #d0d8db;
    }
  }
}
</style>
