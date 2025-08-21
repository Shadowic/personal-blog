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
          <div class="albums__item-cover">
            <img
              :src="album.imageMain"
              width="100"
              height="100"
              :alt="t(album.title)"
              draggable="false"
              class="albums__item-image"
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
            class="albums__item-btn"
            @click="goToAlbum(album)"
          >
            <template #button>{{ t(album.buttonText) }}</template>
          </TheButton>
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
import TheButton from "../components/TheButton.vue";
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
  &__main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px 12px;
    position: relative;
    margin-top: 22px;
    @include md {
      grid-template-columns: repeat(3, 1fr);
      gap: 58px 36px;
    }
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
    color: var(--color-text);
    hyphens: auto;
    &-cover {
      width: 100%;
      overflow: hidden;
      border-radius: 12px;
      position: relative;
      padding-bottom: 75%;
    }
    &-image {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
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
      font-size: 1rem;
      margin-block: 12px 24px;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &-btn {
      margin-top: auto;
      @include md {
        margin-top: 40px;
      }
    }
  }
}
</style>
