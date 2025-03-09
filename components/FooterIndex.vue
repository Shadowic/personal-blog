<template>
  <div class="footer">
    <div class="footer__title" v-html="title" />
    <div class="footer__subtitle" v-html="subtitle" />
    <div class="footer__text" v-html="description" />
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
    title: {
      required: false,
      default: '',
      type: String,
    },
    subtitle: {
      required: false,
      default: '',
      type: String,
    },
    description: {
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px 20px;
  @include lg {
    padding: 4vw 12.5vw 2vw;
  }
  &__title {
    font-family: $accent-font;
    color: $herbal;
    font-size: 18px;
    letter-spacing: 0.03em;
    @include md {
      font-size: 22px;
    }
    @include lg {
      font-size: 1.9vw;
    }
  }
  &__subtitle {
    font-size: 10px;
    margin-top: 4px;
    @include md {
      font-size: 12px;
      margin-top: 8px;
    }
    @include lg {
      font-size: 0.9vw;
      margin-top: 0.35vw;
    }
  }
  &__text {
    font-size: 8px;
    margin-top: 20px;
    max-width: 240px;
    text-align: center;
    @include md {
      font-size: 10px;
      max-width: 360px;
      margin-top: 24px;
    }
    @include lg {
      font-size: 0.9vw;
      max-width: 48vw;
      margin-top: 2vw;
    }
  }
  &__breakline {
    display: flex;
    gap: 4px;
    margin-top: 20px;
    @include md {
      gap: 6px;
      margin-top: 28px;
    }
    @include lg {
      gap: 0.75vw;
      margin-top: 2.8vw;
    }
    &-item {
      width: 1.5px;
      height: 1.5px;
      border-radius: 50%;
      background-color: $herbal;
      @include lg {
        width: 2px;
        height: 2px;
      }
    }
  }
}
.social {
  display: flex;
  gap: 20px;
  margin-top: 28px;
  @include md {
    gap: 24px;
    margin-top: 32px;
  }
  @include lg {
    gap: 2.5vw;
    margin-top: 3vw;
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
    @include lg {
      width: 1.6vw;
      height: 1.6vw;
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
