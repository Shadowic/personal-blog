<script setup lang="ts">
import ParticlesBackground from '../components/additionals/ParticlesBackground.vue';
import TheHeading from '../components/TheHeading.vue'
import HeadingIcon from '../components/additionals/IconHeading.vue'
import about from '../data/about.json';
import { useI18n } from 'vue-i18n';
const { t, te } = useI18n();
</script>

<template>
  <main class="about">
    <ParticlesBackground />
    <div class="container">
      <TheHeading v-if="about.title">
        <template #icon>
          <HeadingIcon />
        </template>
        <template #heading><span v-html="t(about.title)"></span></template>
        <template #caption><span v-html="t(about.subtitle)"></span></template>
      </TheHeading>
      <div class="about__main">
        <p class="about__description" v-html="t(about.description)" />
        <div class="about__cover">
          <img :src="about.cover.data.attributes.formats.medium.url" width="1280" height="853" alt="cover photo" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.about .particles-container {
  background-color: #020a1d;
}
</style>

<style lang="scss" scoped>
.about {
  &__main {
    position: relative;
    color: #d0d8db;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
</style>
