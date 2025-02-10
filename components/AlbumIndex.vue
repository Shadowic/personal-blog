<template>
  <div class="album" :class="getAlbumClass()">
    <div class="album__description">
      <div class="album__top">
        <p class="album__date">
          <time datetime="2001-05-01">{{ album.attributes.date }}</time>
        </p>
        <p class="album__tag">
          {{ album.attributes.category.data.attributes.code }}
        </p>
      </div>
      <p class="album__title">{{ album.attributes.title }}</p>
      <button class="button button__open">
        <span>открыть</span>
        <svg
          width="18"
          height="8"
          viewBox="0 0 18 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.3536 4.41239C17.5488 4.21713 17.5488 3.90055 17.3536 3.70528L14.1716 0.523304C13.9763 0.328042 13.6597 0.328042 13.4645 0.523304C13.2692 0.718566 13.2692 1.03515 13.4645 1.23041L16.2929 4.05884L13.4645 6.88726C13.2692 7.08253 13.2692 7.39911 13.4645 7.59437C13.6597 7.78963 13.9763 7.78963 14.1716 7.59437L17.3536 4.41239ZM0 4.55884H17V3.55884H0V4.55884Z"
            fill="#858585"
          />
        </svg>
      </button>
    </div>
    <div
      class="album__image-container"
      @mouseover="addClassHovered"
      @mouseleave="removeClassHovered"
    >
      <nuxt-link
        :to="localePath(`/${code}/${album.attributes.code}`)"
        class="album__image"
      >
        <img
          :src="album.attributes.cover.data.attributes.formats.medium.url"
          alt="album cover"
        />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    album: {
      required: true,
      type: Object,
    },
    albumType: {
      default: '',
      type: String,
    },
    code: {
      default: '',
      type: String,
    },
    backgroundImage: {
      default: '',
      type: String,
    },
  },
  data() {
    return {
      blockClass: '',
    }
  },
  methods: {
    addClassHovered() {
      this.blockClass = 'hovered'
    },
    removeClassHovered() {
      this.blockClass = ''
    },
    getAlbumClass() {
      return `${this.blockClass} ${this.albumType}`
    },
  },
}
</script>

<style lang="scss" scoped>
.album {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 350px;
  position: relative;
  &__top {
    display: flex;
    gap: 12px;
  }
  //&__date {
  //}
  &__tag {
    border-left: 1px dotted $bokara;
    padding-left: 12px;
  }
  &__description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 0 1 50%;
    position: relative;
    z-index: 10;
    padding: 2vw 4vw;
    color: $bokara;
  }
  &__title {
    font-family: $accent-font;
    font-size: 2vw;
    font-weight: 600;
    transition: all 0.25s ease-in-out;
    text-transform: lowercase;
    margin-top: 0.5vw;
    .hovered & {
      color: $ocean;
    }
  }
  &__image-container {
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
  }
  &:nth-child(3n + 1) {
    .album__image-container {
      left: 50%;
    }
  }
  &:nth-child(3n + 2) {
    flex-direction: row-reverse;
    .album__image-container {
      right: 50%;
    }
  }
  &:nth-child(3) {
    .album__description {
      color: $white;
    }
    .album__tag {
      border-color: $white;
    }
  }
  &__image {
    display: flex;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transform: scale(1.02);
      transition: 1s cubic-bezier(0.17, 0.59, 0.05, 0.96);
      .hovered & {
        transform: scale(1);
        filter: saturate(1.15);
      }
    }
  }
  .button__open {
    margin-top: 1vw;
    span {
      text-decoration: underline dotted;
      text-underline-offset: 4px;
    }
  }
}
</style>
