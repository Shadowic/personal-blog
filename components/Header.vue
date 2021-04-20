<template>
  <div class="header" :class="{ open: showNavbar }">
    <div class="fixed-area">
      <nuxt-link to="/" class="fixed-area__top">S</nuxt-link>
      <div
        class="burger"
        @click="showNavbar = !showNavbar"
        @mouseover="addClassHovered"
        @mouseleave="removeClassHovered"
      >
        <span class="burger-stripe" />
        <svg-dotted-circle :svg-circle-class="svgCircleAddedClass" />
      </div>
      <div class="fixed-area__bottom">Blog</div>
    </div>
    <div class="sliding-area">
      <div class="sliding-area__top">
        <div class="title">Shadowic</div>
        <div class="subtitle">{{ $t('personal blog') }}</div>
      </div>
      <div class="navbar">
        <nuxt-link to="/" class="nav__item" @click.native="closeNav">{{
          $t('main page')
        }}</nuxt-link>
        <nuxt-link
          to="/albums/travel"
          class="nav__item"
          @click.native="closeNav"
          >{{ $t('travel') }}</nuxt-link
        >
        <nuxt-link
          to="/albums/ceramic"
          class="nav__item"
          @click.native="closeNav"
          >{{ $t('ceramic') }}</nuxt-link
        >
        <nuxt-link
          to="/albums/flowers"
          class="nav__item"
          @click.native="closeNav"
          >{{ $t('flowers') }}</nuxt-link
        >
        <nuxt-link to="/about" class="nav__item" @click.native="closeNav">{{
          $t('about me')
        }}</nuxt-link>
      </div>
      <div class="sliding-area__bottom">
        <div>{{ $t('Copyright und so weiter') }}</div>
        <div>{{ $t('made with proud') }}</div>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "ru": {
    "personal blog": "личный блог",
    "main page": "главная",
    "travel": "путешествия",
    "ceramic": "керамика",
    "flowers": "цветы",
    "about me": "обо мне",
    "Copyright und so weiter": "копирайты и тэдэ",
    "made with proud": "сделано с лубовью"
  },
  "en": {
    "personal blog": "personal blog",
    "main page": "main page",
    "travel": "travel",
    "ceramic": "ceramic",
    "flowers": "flowers",
    "about me": "about me",
    "Copyright und so weiter": "Copyright und so weiter",
    "made with proud": "made with proud"
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      showNavbar: false,
      svgCircleAddedClass: '',
    }
  },
  methods: {
    addClassHovered() {
      this.svgCircleAddedClass = 'circle-svg__hovered'
    },
    removeClassHovered() {
      this.svgCircleAddedClass = ''
    },
    closeNav() {
      this.showNavbar = false
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  background: #f6f7f2;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 80px;
  z-index: 100;
}
@keyframes fade-in {
  from {
    opacity: 0;
    visibility: hidden;
  }
  to {
    opacity: 1;
    visibility: visible;
  }
}
@keyframes fade-out {
  from {
    opacity: 1;
    visibility: visible;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
}
.fixed-area {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 68px 0 40px;
  &__top {
    font-size: 40px;
    text-align: center;
    text-decoration: none;
    color: #79a2ac;
    animation: fade-in 0.25s 0.35s linear both;
    .open & {
      animation: fade-out 0.25s linear both;
    }
    &:hover {
      color: #1c2522;
    }
    &::after {
      height: 2px;
      width: 48px;
      content: '';
      display: block;
      transform: translateY(10px);
      background: repeating-linear-gradient(
        90deg,
        #919a99,
        #919a99 2px,
        transparent 2px,
        transparent 4px
      );
    }
  }
  &__bottom {
    text-align: center;
    color: #79a2ac;
    animation: fade-in 0.25s 0.35s linear both;
    .open & {
      animation: fade-out 0.25s linear both;
    }
    &:hover {
      color: #1c2522;
    }
    &::before {
      height: 2px;
      width: 48px;
      content: '';
      display: block;
      transform: translateY(-10px);
      background: repeating-linear-gradient(
        90deg,
        #919a99,
        #919a99 2px,
        transparent 2px,
        transparent 4px
      );
    }
  }
}
.navbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.nav__item {
  text-decoration: none;
  color: #1c2522;
  margin: 17px 0;
  opacity: 0;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.2em;
  line-height: 1em;
  text-transform: uppercase;
  transform: translateY(10px);
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.24, 0.55, 0.2, 0.91);
  cursor: pointer;
  &:nth-child(2) {
    transition-delay: 0.3s;
  }
  &:nth-child(3) {
    transition-delay: 0.4s;
  }
  &:nth-child(4) {
    transition-delay: 0.5s;
  }
  &:nth-child(5) {
    transition-delay: 0.6s;
  }
  .open & {
    opacity: 1;
    transform: translateY(0);
    transition-duration: 1s;
  }
  &:hover,
  &:focus,
  &:active {
    color: #79a2ac;
    transition: color 0.2s ease-out;
  }
}
.burger {
  cursor: pointer;
  position: relative;
  width: 48px;
  height: 48px;
  &-stripe {
    display: block;
    width: 24px;
    height: 3px;
    background-color: rgb(145, 154, 153);
    position: absolute;
    top: calc(50% - 6px);
    left: calc(50% - 12px);
    transition: all 0.3s ease;
    .open & {
      transform: translateY(5px) rotate(45deg);
    }
    &::before {
      content: '';
      display: block;
      height: 3px;
      background-color: rgb(145, 154, 153);
      transform: translateY(9px);
      transition: all 0.3s ease;
      .open & {
        transform: translateY(1px) rotate(-90deg);
      }
    }
  }
  &:hover &-stripe {
    background-color: #79a2ac;
    &::before {
      background-color: #79a2ac;
    }
  }
}
@keyframes circled {
  to {
    transform: rotate(360deg);
  }
}
.circle-svg {
  width: 100%;
  height: 100%;
  stroke-linecap: round;
  stroke-dasharray: 0.1%, 11.4%;
  fill: none;
  stroke: currentColor;
  stroke-width: 2px;
  overflow: visible;
  color: rgb(145, 154, 153);
  &:hover {
    color: #79a2ac;
    circle {
      animation: circled 4s linear infinite;
      transform-origin: center;
    }
  }
}
.sliding-area {
  background-image: url('assets/photo-1.jpg');
  background-color: #fafafa;
  background-size: cover;
  left: -405px;
  padding: 68px 65px 40px 65px;
  position: fixed;
  top: 0;
  transition: 0.8s cubic-bezier(0.5, 0.09, 0, 0.97);
  visibility: hidden;
  width: 325px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  z-index: -1;
  .open & {
    transform: translateX(405px);
    visibility: visible;
  }
  &__top,
  &__bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__bottom {
    color: #919a99;
  }
}
.title {
  font-size: 40px;
}
.subtitle {
  color: #79a2ac;
  letter-spacing: 0.34em;
  text-indent: 0.17em;
}
</style>
