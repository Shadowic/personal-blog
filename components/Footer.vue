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
        <img
          :src="link.icon.data.attributes.url"
          width="24"
          height="24"
          draggable="false"
          alt="social link icon"
        />
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
  padding: 20px;
  @include md {
    padding: 4vw 12.5vw 2vw;
  }
  &__title {
    font-family: $accent-font;
    color: $herbal;
    font-size: 14px;
    letter-spacing: 0.03em;
    @include md {
      font-size: 2vw;
    }
  }
  &__subtitle {
    font-size: 10px;
    margin-top: 6px;
    @include md {
      font-size: 0.9vw;
      margin-top: 2vw;
    }
  }
  &__text {
    font-size: 8px;
    margin-top: 14px;
    max-width: 240px;
    text-align: center;
    @include md {
      font-size: 0.9vw;
      max-width: 48vw;
      margin-top: 2vw;
    }
  }
  &__breakline {
    display: flex;
    gap: 4px;
    margin-top: 16px;
    @include md {
      gap: 0.75vw;
      margin-top: 4vw;
    }
    &-item {
      width: 1.5px;
      height: 1.5px;
      border-radius: 50%;
      background-color: $herbal;
      @include md {
        width: 2px;
        height: 2px;
      }
    }
  }
}
.social {
  display: flex;
  gap: 12px;
  margin-top: 16px;
  @include md {
    gap: 2.5vw;
    margin-top: 1.5vw;
  }
  &__item {
    display: flex;
    width: 12px;
    height: 12px;
    cursor: pointer;
    transition: filter 0.3s ease-in-out;
    @include md {
      width: 1.5vw;
      height: 1.5vw;
    }
    &:hover {
      filter: invert(66%) sepia(36%) saturate(209%) hue-rotate(144deg)
        brightness(65%) contrast(67%);
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
