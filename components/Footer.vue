<template>
  <div class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__title">{{ titlesub }}</div>
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
        <div class="footer__subtitle">{{ year }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titlesub: {
      required: false,
      default: '',
      type: String,
    },
    year: {
      required: false,
      default: '',
      type: String,
    },
    links: {
      required: false,
      default: () => [],
      type: Array,
    },
  },
  methods: {
    getShownLinks() {
      return this.links.filter((e) => e.is_shown)
    },
  },
}
</script>

<style lang="scss" scoped>
.footer {
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 24px;
    @include lg {
      padding-block: 2vw;
    }
  }
  &__title {
    font-family: $base-font;
    font-size: 14px;
    letter-spacing: 0.025em;
    @include md {
      font-size: 18px;
    }
  }
  &__subtitle {
    display: none;
    @include md {
      display: inline-block;
      font-size: 18px;
    }
  }
}
.social {
  display: flex;
  gap: 20px;
  @include md {
    gap: 24px;
  }
  @include lg {
    gap: 2vw;
  }
  &__item {
    display: flex;
    width: 14px;
    height: 14px;
    cursor: pointer;
    transition: filter 0.3s ease-in-out;
    @include md {
      width: 18px;
      height: 18px;
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
