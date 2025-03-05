<template>
  <div class="album" :class="getAlbumClass()">
    <div class="album__cover">
      <img :src="imageMain" alt="album cover" width="300" height="200" />
    </div>
    <div class="album__description">
      <div class="album__description-content">
        <p class="album__title" v-html="title"></p>
        <p class="album__text" v-html="description"></p>
        <nuxt-link
          v-if="hasButton"
          :to="localePath(`/ceramicon/${pageCode}`)"
          class="btn album__btn"
        >
          <span v-html="buttonText"></span>
        </nuxt-link>
      </div>
    </div>
    <div class="swiper">
      <div class="swiper-wrapper album__preview">
        <div
          v-for="(image, index) in imagesPreview"
          :key="index"
          class="swiper-slide album__preview-item"
        >
          <img :src="image" alt="album cover" width="300" height="200" />
        </div>
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

import Swiper from 'swiper'

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
    hasButton: {
      required: false,
      type: Boolean,
    },
    buttonText: {
      required: false,
      default: '',
      type: String,
    },
    pageCode: {
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

    this.swiper = new Swiper('.swiper', {
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 8,
      autoHeight: true,
      allowTouchMove: true,
      observer: true,
      observeSlideChildren: true,
      breakpoints: {
        // when window width is >= 744px
        744: {
          enabled: false,
          spaceBetween: 0,
          autoHeight: false,
        },
      },
    })
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
.swiper {
  grid-area: previews;
}

.album {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(280px, auto) auto;
  grid-auto-rows: auto;
  grid-template-areas: 'cover' 'previews' 'description';
  gap: 12px;
  &__cover {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
    grid-area: cover;
    position: relative;
    @include md {
      border-radius: 18px;
    }
    @include lg {
      border-radius: 24px;
    }
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__description {
    grid-area: description;
    @include md {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 15px;
      align-items: center;
      &-content {
        grid-column: 2 / -1;
      }
    }
    @include lg {
      gap: 30px;
    }
  }
  &__title {
    font-size: 24px;
    line-height: 1.4;
    letter-spacing: 0.04em;
    @include md- {
      margin-top: 12px;
      text-align: center;
    }
    @include md {
      font-size: 36px;
    }
    @include lg {
      font-size: 54px;
    }
  }
  &__text {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    margin-top: 12px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 7;
    @include md {
      font-size: 18px;
      -webkit-line-clamp: 5;
    }
    @include lg {
      font-size: 22px;
      -webkit-line-clamp: 15;
      margin-top: 32px;
    }
  }
  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 36px;
    background-color: $sunflower;
    color: $white;
    width: fit-content;
    min-width: 140px;
    min-height: 36px;
    padding: 8px 40px;
    border-radius: 8px;
    font-size: 12px;
    line-height: 1.42;
    text-transform: uppercase;
    @include md- {
      margin-inline: auto;
    }
    @include lg {
      min-width: 375px;
      min-height: 64px;
      border-radius: 16px;
      font-size: 24px;
    }
  }
  &__preview {
    display: flex;
    height: 100%;
    @include md {
      display: grid;
      grid-template-columns: repeat(9, 1fr);
      grid-auto-rows: 145px;
      gap: 15px;
    }
    @include lg {
      grid-template-columns: repeat(14, 1fr);
      grid-auto-rows: 394px;
      gap: 30px;
    }
    &-item {
      overflow: hidden;
      width: 100%;
      max-width: 136px;
      height: 130px;
      border-radius: 10px;
      flex: none;
      @include md {
        max-width: unset;
        height: 100%;
        border-radius: 18px;
      }
      @include lg {
        border-radius: 24px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  @include md-lg {
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: minmax(305px, auto) auto;
    grid-template-areas:
      'cover cover cover cover description description description description description'
      'previews previews previews previews previews previews previews previews previews';
    gap: 15px;
    &:nth-child(2n) {
      grid-template-areas:
        'description description description description description cover cover cover cover'
        'previews previews previews previews previews previews previews previews previews';
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
    }
  }
  @include lg {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: minmax(690px, auto) auto;
    grid-template-areas:
      'cover description'
      'previews previews'
      'previews previews';
    gap: 30px;
    &:nth-child(2n) {
      grid-template-areas:
        'description cover'
        'previews previews'
        'previews previews';
      .album__description-content {
        grid-column: 1 / -2;
      }
    }
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
