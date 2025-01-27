<template>
  <div class="album" :class="getAlbumClass()">
    <div class="album__description">
      <div class="album__date">{{ album.attributes.date }}</div>
      <div class="album__tag">
        {{ album.attributes.category.data.attributes.code }}
      </div>
      <div class="album__title">{{ album.attributes.title }}</div>
      <button class="button button__open">открыть</button>
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
  height: 350px;
  &__description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
  }
  &__title {
    margin-right: 0;
    padding-right: 0;
    font-family: $accent-font;
    color: $bokara;
    font-size: 2vw;
    font-weight: 600;
    transition: all 0.25s ease-in-out;
    text-transform: lowercase;
    .hovered & {
      color: $ocean;
    }
  }
  &__image-container {
    flex: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    @include sm- {
      height: 300px;
    }
  }
  &__image {
    display: flex;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      background: center/cover;
      transform: scale(1.02);
      transition: 1s cubic-bezier(0.17, 0.59, 0.05, 0.96);
      .hovered & {
        transform: scale(1);
        filter: saturate(1.15);
      }
    }
  }
}
</style>
