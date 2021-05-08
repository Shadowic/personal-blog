<template>
  <div class="header" :class="{ open: showNavbar }">
    <div class="fixed-area">
      <nuxt-link to="/" class="fixed-area__top"><div class="logo" /></nuxt-link>
      <Burger :opened="showNavbar" @onClickBurger="showNavbar = !showNavbar" />
      <div class="fixed-area__bottom">
        <LangTumbler />
      </div>
    </div>
    <div class="sliding-area">
      <div class="sliding-area__top">
        <nuxt-link to="/" class="title">Shadowic</nuxt-link>
        <div class="subtitle">{{ $t('personal blog') }}</div>
      </div>
      <Navbar @onLinkClick="closeNav" />
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
    "Copyright und so weiter": "копирайты и тэдэ",
    "made with proud": "сделано с лубовью"
  },
  "en": {
    "personal blog": "personal blog",
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
    }
  },
  methods: {
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
  /deep/ .symbol {
    display: none;
  }
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
    animation: fade-in 0.25s 0.35s linear both;
    .logo {
      width: 60px;
      height: 60px;
      background: url('../assets/imgs/logo.png') center/cover;
      &::after {
        height: 2px;
        width: 48px;
        content: '';
        display: block;
        transform: translateY(70px);
        margin: 0 auto;
        background: repeating-linear-gradient(
          90deg,
          #919a99,
          #919a99 2px,
          transparent 2px,
          transparent 4px
        );
      }
    }
    .open & {
      animation: fade-out 0.25s linear both;
    }
    &:hover {
      color: #1c2522;
    }
  }
  &__bottom {
    text-align: center;
    color: #79a2ac;
    animation: fade-in 0.25s 0.35s linear both;
    .open & {
      animation: fade-out 0.25s linear both;
    }
    &::before {
      height: 2px;
      width: 48px;
      content: '';
      display: block;
      transform: translateY(-10px);
      margin: 0 auto;
      background: repeating-linear-gradient(
        90deg,
        #919a99,
        #919a99 2px,
        transparent 2px,
        transparent 4px
      );
    }
    span:hover {
      color: #1c2522;
      cursor: pointer;
    }
    /deep/ .lang-tumbler span {
      &:hover,
      &:focus,
      &:active {
        color: dimgray;
      }
    }
  }
}
.sliding-area {
  background: url('../assets/imgs/header-sliding2.jpg') bottom/cover;
  background-color: #fafafa;
  left: -405px;
  padding: 72px 65px 40px 65px;
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
    color: #fff;
    opacity: 0.9;
    font-size: 10px;
  }
}
.title {
  font-size: 40px;
  font-family: 'PlayfairDisplay Semi-bold', serif;
}
.subtitle {
  color: #79a2ac;
  letter-spacing: 0.34em;
  text-indent: 0.17em;
  font-size: 12px;
}
</style>
