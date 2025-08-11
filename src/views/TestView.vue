<script setup lang="ts">
import ParticlesBackground from '../components/additionals/ParticlesBackground.vue';
import TheHeading from '../components/TheHeading.vue'
import HeadingIcon from '../components/additionals/IconHeading.vue'
</script>

<template>
  <main class="about">
    <ParticlesBackground />
    <div class="container">
      <TheHeading>
        <template #icon>
          <HeadingIcon />
        </template>
        <template #heading>It's <span>test</span> page</template>
        <template #caption>test page content</template>
      </TheHeading>
      <div class="album__main">
        <div class="album__main-bg" />
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
</style>
