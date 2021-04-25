<template>
  <div class="album" :class="getAlbumClass()">
    <div class="album__outline">
      <div class="album__outline-top">
        <div class="album__date">{{ album.date }}</div>
        <div class="album__title">{{ album.title }}</div>
      </div>
      <nuxt-link
        :to="`/album/${album.id}`"
        class="album__description"
        @mouseover="addClassHovered"
        @mouseleave="removeClassHovered"
        v-html="
          getCurrentLocale() === 'ru' ? album.description : album.descriptionEn
        "
      />
      <nuxt-link
        :to="`/album/${album.id}`"
        class="btn"
        @mouseover="addClassHovered"
        @mouseleave="removeClassHovered"
      >
        <span
          >discover
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
        :to="`/album/${album.id}`"
        class="album__image-cover"
        :style="{ backgroundImage: `url(${album.cover})` }"
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
  },
  data() {
    return {
      blockClass: '',
    }
  },
  methods: {
    getCurrentLocale() {
      return this.$i18n.localeProperties.code
    },
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
  align-items: center;
  width: 100%;
  height: 350px;
  position: relative;
}
.album:nth-child(2n) {
  display: flex;
  flex-direction: row-reverse;
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
    color: #79a2ac;
    font-size: 10px;
    letter-spacing: 0.2em;
    line-height: 1em;
    text-transform: uppercase;
    display: flex;
    vertical-align: middle;
  }
  .btn {
    margin-top: 50px;
    transition: color 0.2s ease-out;
    text-decoration: none;
    span {
      position: relative;
      &::after {
        font-family: Eleganticons, serif;
        content: '\24';
        font-size: 1.3em;
        height: 1em;
        line-height: 1.3em;
        position: absolute;
        right: -1.3em;
        top: calc(50% - 0.5em);
        transition: transform 0.2s;
        width: 1em;
      }
    }
    .hovered &,
    &:hover {
      color: #1c2522;
      cursor: pointer;
      & span::after {
        transform: translateX(2px);
      }
    }
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
  stroke: #79a2ac;
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-dasharray: 0.4px, 5px;
  stroke-dashoffset: -2;
  transition: stroke 0.2s ease-out;
  .hovered &,
  .btn:hover & {
    stroke: #1c2522;
    animation: animate-svg-line 40s linear infinite;
  }
}
.album__date {
  display: block;
  margin: 0 10px 6px 0;
  padding: 0 11px 0 0;
  position: relative;
  transition: color 0.2s ease-out;
  &:hover {
    color: #1c2522;
    cursor: pointer;
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
      #79a2ac,
      #79a2ac 2px,
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
    color: #1c2522;
    cursor: pointer;
  }
}
.album__description {
  font-family: 'PlayfairDisplay Semi-bold', serif;
  color: #1c2522;
  font-size: 33px;
  line-height: 1.212em;
  word-wrap: break-word;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
}
.album__cover {
  width: 50%;
  height: 100%;
  overflow: hidden;
}
.album__image-cover {
  width: 100%;
  height: 100%;
  background: center/cover;
  display: block;
  transform: scale(1.04);
  transition: 1s cubic-bezier(0.17, 0.59, 0.05, 0.96);
  clip-path: inset(0 0 0 0);
  .hovered &,
  .album__cover:hover & {
    transform: scale(1);
  }
}
</style>
