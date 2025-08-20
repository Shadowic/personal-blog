<script setup lang="ts">
import ParticlesBackground from '../components/additionals/ParticlesBackground.vue';
import TheHeading from '../components/TheHeading.vue'
import about from '../data/about.json';
import { useI18n } from 'vue-i18n';
const { t, te } = useI18n();
</script>

<template>
  <main class="about">
    <ParticlesBackground />
    <div class="container">
      <TheHeading v-if="about.title">
        <template #heading><span v-html="t(about.title)"></span></template>
        <template #caption><span v-html="t(about.subtitle)"></span></template>
      </TheHeading>
      <div class="about__main">
        <p class="about__description" v-html="t(about.description)" />
        <div class="about__cover">
          <div>
            <div class="about__cover-wrap">
              <img
                :src="about.cover.data.attributes.formats.medium.url"
                width="1280"
                height="853"
                alt="cover photo"
                class="about__cover-img"
              />
            </div>
          </div>
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
    grid-template-columns: 1fr;
    gap: 36px;
    @include md {
      grid-template-columns: 1fr minmax(160px, 33%);
    }
  }
  &__description {
    font-size: 1.1rem;
    line-height: 1.6;
  }
  &__cover {
    max-width: 340px;
    align-self: center;
    order: -1;
    @include md {
      order: unset;
    }
    &-wrap {
      border-radius: 50%;
      overflow: hidden;
      position: relative;
      padding-bottom: 100%;
    }
    &-img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
