<template>
  <div class="album" :class="getAlbumClass()">
    <div class="album__outline">
      <div class="album__title">{{ album.attributes.title }}</div>
    </div>
    <div
      class="album__cover"
      @mouseover="addClassHovered"
      @mouseleave="removeClassHovered"
    >
      <nuxt-link
        :to="localePath(`/${code}/${album.attributes.code}`)"
        class="album__image-cover"
        :style="{
          backgroundImage: `url(${album.attributes.cover.data.attributes.formats.medium.url})`,
        }"
      />
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

<style lang="scss">
.index__albums {
  display: flex;
  flex-wrap: wrap;
}
</style>

<style lang="scss" scoped>
.album {
  display: flex;
  align-items: center;
  width: 50%;
  height: 350px;
  position: relative;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 20px;
  margin: 0 0 160px;
  &:nth-child(2n) {
    margin-top: -95px;
    @include sm- {
      flex-direction: column-reverse;
      height: auto;
    }
    @include sm- {
      margin-top: 0;
    }
  }
  &:not(:last-child) {
    margin-bottom: 80px;
  }
  &:first-child {
    margin-top: 20px;
  }
  @include sm {
    height: 200px;
  }
  @include sm- {
    flex-direction: column-reverse;
    height: 300px;
    width: 100%;
    margin: 0 0 80px;
  }
}
.album__outline {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(100% - 80px);
  padding: 20px;
  background-color: #fff;
  position: absolute;
  bottom: -10%;
  z-index: 3;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  pointer-events: none;
  transition: all 0.3s ease-in-out;
  @include sm {
    bottom: -50%;
  }
  @include sm- {
    width: 100%;
  }
}
.album__title {
  margin-right: 0;
  padding-right: 0;
  font-family: 'Caveat', cursive;
  color: $bokara;
  font-size: 2vw;
  font-weight: 600;
  transition: all 0.25s ease-in-out;
  text-transform: lowercase;
  .hovered & {
    color: $ocean;
  }
}
.album__cover {
  width: 100%;
  height: 100%;
  overflow: hidden;
  @include sm- {
    width: 100%;
    height: 300px;
  }
}
.album__image-cover {
  width: 100%;
  height: 100%;
  background: center/cover;
  display: block;
  transform: scale(1.02);
  transition: 1s cubic-bezier(0.17, 0.59, 0.05, 0.96);
  .hovered & {
    transform: scale(1);
    filter: saturate(1.15);
  }
}
</style>
