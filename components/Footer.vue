<template>
  <div class="footer">
    <div class="footer__wrapper">
      <div class="footer__title">{{ footer.title }}</div>
      <div class="footer__subtitle">{{ footer.subtitle }}</div>
      <div class="footer__text">
        {{ footer.description }}
      </div>
      <div class="footer__breakline">
        <div v-for="(item, i) in 30" :key="i" class="footer__breakline-item" />
      </div>
      <address class="social">
        <a
          v-for="link in getShownLinks()"
          :key="link.id"
          :href="link.url"
          target="_blank"
          :class="link.title"
        >
          <img :src="link.icon.data.attributes.url" draggable="false" />
        </a>
      </address>
    </div>
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
  width: 100%;
  height: 100%;
  color: #625744;
  text-align: center;
  line-height: 1.6em;
  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    position: relative;
    z-index: 10;
    align-items: center;
    transition: background 0.3s, border 0.3s, border-radius 0.3s,
      box-shadow 0.3s;
    padding: 90px 21% 30px;
  }

  &__title {
    font-family: $accent-font;
    color: #443c2f;
    font-size: 42px;
    font-weight: 500;
    letter-spacing: 0.001em;
    margin-bottom: 15px;
    @include sm {
      font-size: 22px;
      margin-bottom: 10px;
    }
    @include xs- {
      font-size: 22px;
    }
  }

  &__subtitle {
    margin-bottom: 25px;
    font-size: 14px;
  }

  &__text {
    position: relative;
    margin-bottom: 40px;
    max-width: 768px;
    font-size: 16px;
  }

  &__breakline {
    display: flex;
    gap: 6px;
    margin-bottom: 40px;
    &-item {
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background-color: #2a2725;
    }
  }
}
.social {
  display: flex;
  gap: 32px;

  & > a {
    position: relative;
    width: 26px;
    height: 26px;
    cursor: pointer;
    line-height: 1;
    transition: filter 0.2s ease-in-out;
    &:hover {
      filter: invert(66%) sepia(36%) saturate(239%) hue-rotate(144deg)
        brightness(85%) contrast(97%);
    }
  }
}
</style>
