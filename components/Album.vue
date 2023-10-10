<template>
  <div class="album" :class="getAlbumClass()">
    <div
      data-aos="zoom-in-right"
      data-aos-duration="1000"
      class="album__outline"
    >
      <div class="album__outline-top">
        <div class="album__date">
          {{ formattingDate(album.attributes.date) }}
        </div>
        <div class="album__title">{{ album.attributes.title }}</div>
      </div>
      <nuxt-link
        :to="localePath(`/${code}/${album.attributes.code}`)"
        class="album__description"
        @mouseover.native="addClassHovered"
        @mouseleave.native="removeClassHovered"
        v-html="album.attributes.description"
      />
      <nuxt-link
        :to="localePath(`/${code}/${album.attributes.code}`)"
        class="btn"
        @mouseover.native="addClassHovered"
        @mouseleave.native="removeClassHovered"
      >
        <span
          >{{ $t('discover') }}
          <arrow />
          <svg class="svg-dotted-line">
            <line x1="0" y1="50%" x2="100%" y2="50%" />
          </svg>
        </span>
      </nuxt-link>
    </div>
    <div
      data-aos="zoom-in-left"
      data-aos-duration="1000"
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

<style lang="scss">
.albums-list {
  .album.hovered .album__image-cover {
    transform: scale(1.04);
    clip-path: inset(2% 2% 2% 2%);
  }
}
</style>

<style lang="scss" scoped>
@keyframes animate-svg-line {
  to {
    stroke-dashoffset: -1000;
  }
}
.album {
  display: flex;
  align-items: center;
  width: 100%;
  height: 350px;
  position: relative;
  justify-content: space-between;
  @include sm- {
    flex-direction: column-reverse;
    height: auto;
  }
  &:not(:last-child) {
    margin-bottom: 80px;
  }
  &:first-child {
    margin-top: 20px;
  }
  &:nth-child(2n) {
    display: flex;
    flex-direction: row-reverse;
    @include sm- {
      flex-direction: column-reverse;
      height: auto;
    }
  }
  &__outline {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    padding: 25px 5%;
    border: 2px solid #ab9877;
    height: 100%;
    .album:nth-child(5n - 4) & {
      border-radius: 80px 80px 0 80px;
    }
    .album:nth-child(5n - 3) & {
      border-radius: 0 80px 0 80px;
    }
    .album:nth-child(5n - 2) & {
      border-radius: 80px 0 80px 0;
    }
    .album:nth-child(5n - 1) & {
      border-radius: 0 80px 80px 0;
    }
    .album:nth-child(5n) & {
      border-radius: 80px 0 80px 80px;
    }
    &-top,
    .btn {
      margin: 8px 0 3px;
      color: #625744;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.2em;
      line-height: 1em;
      text-transform: uppercase;
      display: flex;
      vertical-align: middle;
    }
    .btn {
      margin-top: 50px;
      transition: color 0.2s ease-out;
      width: fit-content;
      span {
        position: relative;
        /deep/ .arrow {
          fill: #625744;
          width: 10px;
          transform: translateY(4px);
          transition: all 0.2s ease-out;
        }
      }
      .hovered &,
      &:hover {
        cursor: pointer;
        & span::after {
          transform: translateX(2px);
        }
        /deep/ .arrow {
          transform: translate(4px, 4px);
        }
      }
    }
    @include sm- {
      width: 100%;
    }
  }
  &__date {
    display: block;
    margin: 0 10px 6px 0;
    padding: 0 11px 0 0;
    position: relative;
    transition: color 0.2s ease-out;
    &:hover {
      color: #494133;
    }
    &::after {
      height: 100%;
      width: 2px;
      content: '';
      display: block;
      position: absolute;
      right: 0;
      background: repeating-linear-gradient(
        0deg,
        #625744,
        #625744 2px,
        transparent 2px,
        transparent 4px
      );
      top: 0;
    }
  }
  &__title {
    margin-right: 0;
    padding-right: 0;
    transition: color 0.2s ease-out;
    &:hover {
      color: #494133;
    }
  }
  &__description {
    font-family: 'Caveat', cursive;
    color: #494133;
    font-size: 44px;
    font-weight: 600;
    line-height: 1.212em;
    word-wrap: break-word;
    transition: all 0.25s ease-in-out;
    width: fit-content;
    &:hover {
      cursor: pointer;
    }
    .hovered & {
      color: #625744;
    }
  }
  &__cover {
    width: calc(50% - 10px);
    height: 100%;
    overflow: hidden;
    @include sm- {
      width: 100%;
      height: 300px;
    }
    .album:nth-child(5n - 4) & {
      border-radius: 120px 80px 120px 80px;
    }
    .album:nth-child(5n - 3) & {
      border-radius: 80px 60px 140px 80px;
    }
    .album:nth-child(5n - 2) & {
      border-radius: 80px 120px 140px 80px;
    }
    .album:nth-child(5n - 1) & {
      border-radius: 60px 120px 80px 120px;
    }
    .album:nth-child(5n) & {
      border-radius: 100px 60px 60px 120px;
    }
  }
  &__image-cover {
    width: 100%;
    height: 100%;
    background: center/cover;
    display: block;
    transform: scale(1.06);
    transition: transform 1s cubic-bezier(0.17, 0.59, 0.05, 0.96),
      clip-path 1s cubic-bezier(0.17, 0.59, 0.05, 0.96);
    clip-path: inset(0 0 0 0);
  }
}
.svg-dotted-line {
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 4px;
  stroke: #625744;
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-dasharray: 0.4px, 5px;
  stroke-dashoffset: -2;
  transition: stroke 0.2s ease-out;
  .hovered &,
  .btn:hover & {
    animation: animate-svg-line 40s linear infinite;
    width: 105%;
  }
}
</style>
