<template>
  <div class="footer">
    <div class="footer__title">{{ footer.title }}</div>
    <div class="footer__subtitle">{{ footer.subtitle }}</div>
    <div class="footer__text">
      {{ footer.description }}
    </div>
    <div class="footer__breakline">
      <div v-for="(item, i) in 16" :key="i" class="footer__breakline-item" />
    </div>
    <address class="social">
      <a
        v-for="link in getShownLinks()"
        :key="link.id"
        :href="link.url"
        target="_blank"
        class="social__item"
        :class="link.title"
      >
        <img :src="link.icon.data.attributes.url" draggable="false" />
      </a>
    </address>
  </div>
</template>

<script>
export default {
  props: {
    footer: {
      type: Object,
    },
  },
  methods: {
    getShownLinks() {
      return this.footer.links.filter((e) => e.is_shown)
    },
  },
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  padding: 4vw 12.5vw 2vw;

  &__title {
    font-family: $accent-font;
    color: $herbal;
    font-size: 2vw;
    letter-spacing: 0.03em;
  }

  &__subtitle {
    margin-top: 2vw;
    font-size: 0.9vw;
  }

  &__text {
    margin-top: 2vw;
    max-width: 48vw;
    font-size: 0.9vw;
    text-align: center;
  }

  &__breakline {
    display: flex;
    gap: 0.75vw;
    margin-top: 4vw;
    &-item {
      width: 2px;
      height: 2px;
      border-radius: 50%;
      background-color: $herbal;
    }
  }
}
.social {
  display: flex;
  gap: 2.5vw;
  margin-top: 1.5vw;
  &__item {
    width: 1.5vw;
    height: 1.5vw;
    cursor: pointer;
    transition: filter 0.3s ease-in-out;
    &:hover {
      filter: invert(66%) sepia(36%) saturate(209%) hue-rotate(144deg)
        brightness(65%) contrast(67%);
    }
  }
}
</style>
