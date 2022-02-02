<template>
  <div class="album" :class="getAlbumClass()">
    <div class="album__outline">
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
    transform: scale(1.02);
    clip-path: inset(2% 2% 2% 2%);
  }
}
</style>

<style lang="scss" scoped>
.album {
  display: flex;
  align-items: center;
  width: 100%;
  height: 350px;
  position: relative;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 80px;
  }
  &:first-child {
    margin-top: 20px;
  }
  @include sm- {
    flex-direction: column-reverse;
    height: auto;
  }
}
.album:nth-child(2n) {
  display: flex;
  flex-direction: row-reverse;
  @include sm- {
    flex-direction: column-reverse;
    height: auto;
  }
}
.album__outline {
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  padding: 25px 5%;
  &-top,
  .btn {
    margin: 8px 0 3px;
    color: $ziggurat;
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
        fill: $ziggurat;
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
@keyframes animate-svg-line {
  to {
    stroke-dashoffset: -1000;
  }
}
.svg-dotted-line {
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 4px;
  stroke: $ziggurat;
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
.album__date {
  display: block;
  margin: 0 10px 6px 0;
  padding: 0 11px 0 0;
  position: relative;
  transition: color 0.2s ease-out;
  &:hover {
    color: $green-dark;
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
      $ziggurat,
      $ziggurat 2px,
      transparent 2px,
      transparent 4px
    );
    top: 0;
  }
}
.album__title {
  margin-right: 0;
  padding-right: 0;
  transition: color 0.2s ease-out;
  &:hover {
    color: $green-dark;
  }
}
.album__description {
  font-family: 'Caveat', cursive;
  color: $bokara;
  font-size: 35px;
  font-weight: 600;
  line-height: 1.212em;
  word-wrap: break-word;
  transition: all 0.25s ease-in-out;
  width: fit-content;
  &:hover {
    cursor: pointer;
  }
  .hovered & {
    color: $ziggurat;
  }
}
.album__cover {
  width: calc(50% - 10px);
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
  transform: scale(1.04);
  transition: 1s cubic-bezier(0.17, 0.59, 0.05, 0.96);
  clip-path: inset(0 0 0 0);
}
</style>
