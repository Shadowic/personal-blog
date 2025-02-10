<template>
  <div class="album" :class="getAlbumClass()">
    <div class="album__cover">
      <img :src="imageMain" alt="album cover" width="300" height="200" />
    </div>
    <div class="album__description">
      <div class="album__description-content">
        <p class="album__title" v-html="title"></p>
        <p class="album__text" v-html="description"></p>
      </div>
    </div>
    <div class="album__preview">
      <div
        v-for="(image, index) in imagesPreview"
        :key="index"
        class="album__preview-item"
      >
        <img :src="image" alt="album cover" width="300" height="200" />
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "ru": {
    "discover": "открыть"
  },
  "en": {
    "discover": "discover"
  }
}
</i18n>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  props: {
    title: {
      required: true,
      default: '',
      type: String,
    },
    description: {
      required: false,
      default: '',
      type: String,
    },
    imageMain: {
      required: true,
      default: '/imgs/IMG_9547.jpg',
      type: String,
    },
    imagesPreview: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      blockClass: '',
    }
  },
  mounted() {
    AOS.init()
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
    formattingDate(dateString) {
      const options = {
        month: 'long',
      }

      const date = new Date(dateString)
      return `${date.toLocaleDateString(
        this.$i18n.locale === 'ru' ? 'ru-RU' : 'en-EN',
        options
      )} ${date.getFullYear()}`
    },
  },
}
</script>

<style lang="scss" scoped>
.album {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'cover' 'previews' 'description';
  gap: 24px;
  @include md {
    grid-auto-rows: minmax(280px, auto) auto;
    gap: 15px;
  }
  &__cover {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
    grid-area: cover;
    @include md {
      border-radius: 24px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__description {
    grid-area: description;
    @include md {
      display: grid;
      align-items: center;
    }
    @include lg {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 30px;
      &-content {
        grid-column: 2 / -1;
      }
    }
  }
  &__title {
    font-size: 24px;
    line-height: 1.4;
    letter-spacing: 0.04em;
    @include xs {
      text-align: center;
    }
    @include lg {
      font-size: 54px;
    }
  }
  &__caption {
    display: none;
    @include lg {
      display: inline;
      font-size: 32px;
      margin-top: 8px;
    }
  }
  &__text {
    //max-height: 420px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 20px;
    margin-top: 32px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    @include lg {
      font-size: 22px;
      -webkit-line-clamp: 15;
    }
  }
  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    background-color: $sunflower;
    color: $white;
    width: fit-content;
    min-width: 140px;
    min-height: 36px;
    padding: 8px 40px;
    border-radius: 8px;
    font-size: 14px;
    line-height: 1.42;
    text-transform: uppercase;
    @include xs {
      margin-inline: auto;
    }
    @include lg {
      min-width: 375px;
      min-height: 82px;
      padding: 21px 114px;
      border-radius: 16px;
      font-size: 28px;
    }
  }
  &__preview {
    display: grid;
    //alarm
    grid-template-columns: repeat(100, 1fr);
    gap: 8px;
    grid-area: previews;
    width: 100%;
    overflow-x: hidden;
    @include md {
      grid-template-columns: repeat(9, 1fr);
      gap: 15px;
    }
    @include lg {
      grid-template-columns: repeat(14, 1fr);
      grid-auto-rows: 394px;
      gap: 30px;
    }
    &-item {
      overflow: hidden;
      width: 136px;
      height: 130px;
      border-radius: 10px;
      @include md {
        width: 100%;
        height: 100%;
        border-radius: 24px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  @include md {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'cover description'
      'previews previews';
  }
  @include md-lg {
    &:nth-child(2n) {
      grid-template-areas:
        'description cover'
        'previews previews';
      .album__description-content {
        grid-column: 1 / -2;
      }
    }
    &:nth-child(4n + 1) {
      .album__preview-item:nth-child(1) {
        grid-column: span 3;
      }
      .album__preview-item:nth-child(2) {
        grid-column: 6 / span 2;
      }
      .album__preview-item:nth-child(3) {
        grid-column: span 2;
      }
      .album__preview-item:nth-child(4) {
        display: none;
      }
      .album__preview-item:nth-child(5) {
        display: none;
      }
      .album__preview-item:nth-child(6) {
        display: none;
      }
    }
    &:nth-child(4n + 2) {
      .album__preview-item:nth-child(1) {
        grid-column: span 2;
      }
      .album__preview-item:nth-child(2) {
        grid-column: 5 / span 3;
      }
      .album__preview-item:nth-child(3) {
        grid-column: span 2;
      }
      .album__preview-item:nth-child(4) {
        display: none;
      }
    }
    &:nth-child(4n + 3) {
      .album__preview-item:nth-child(1) {
        grid-column: span 2;
      }
      .album__preview-item:nth-child(2) {
        grid-column: span 2;
      }
      .album__preview-item:nth-child(3) {
        grid-column: 7 / span 3;
      }
      .album__preview-item:nth-child(4) {
        display: none;
      }
      .album__preview-item:nth-child(5) {
        display: none;
      }
    }
    &:nth-child(4n + 4) {
      .album__preview-item:nth-child(1) {
        grid-column: span 2;
      }
      .album__preview-item:nth-child(2) {
        grid-column: span 3;
      }
      .album__preview-item:nth-child(3) {
        grid-column: 8 / span 2;
      }
      .album__preview-item:nth-child(4) {
        display: none;
      }
      .album__preview-item:nth-child(5) {
        display: none;
      }
    }
  }
  @include lg {
    grid-auto-rows: minmax(690px, auto) auto;
    gap: 30px;
    &:nth-child(4n + 1) {
      .album__preview-item:nth-child(1) {
        grid-column: span 4;
      }
      .album__preview-item:nth-child(2) {
        grid-column: 9 / span 3;
      }
      .album__preview-item:nth-child(3) {
        grid-column: span 3;
      }
      .album__preview-item:nth-child(4) {
        grid-column: span 4;
      }
      .album__preview-item:nth-child(5) {
        grid-column: span 4;
      }
      .album__preview-item:nth-child(6) {
        grid-column: span 6;
      }
    }
    &:nth-child(4n + 2) {
      .album__preview-item:nth-child(1) {
        grid-column: span 4;
        grid-row: span 2;
      }
      .album__preview-item:nth-child(2) {
        grid-column: span 7;
      }
      .album__preview-item:nth-child(3) {
        grid-column: span 4;
      }
      .album__preview-item:nth-child(4) {
        grid-column: 12 / span 3;
      }
    }
    &:nth-child(4n + 3) {
      .album__preview-item:nth-child(1) {
        grid-column: span 4;
      }
      .album__preview-item:nth-child(2) {
        grid-column: 8 / span 4;
      }
      .album__preview-item:nth-child(3) {
        grid-column: span 3;
      }
      .album__preview-item:nth-child(4) {
        grid-column: 5 / span 3;
      }
      .album__preview-item:nth-child(5) {
        grid-column: span 7;
      }
    }
    &:nth-child(4n + 4) {
      .album__preview-item:nth-child(1) {
        grid-column: span 3;
      }
      .album__preview-item:nth-child(2) {
        grid-column: span 4;
      }
      .album__preview-item:nth-child(3) {
        grid-column: 11 / span 4;
      }
      .album__preview-item:nth-child(4) {
        grid-column: span 7;
      }
      .album__preview-item:nth-child(5) {
        grid-column: span 3;
      }
    }
  }
}
</style>
