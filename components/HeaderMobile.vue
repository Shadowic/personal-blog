<template>
  <div class="header" :class="{ open: showNavbar }">
    <div class="fixed-area">
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
  position: fixed;
  height: 60px;
  top: 0;
  left: 0;
  width: 100%;
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
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  &__bottom {
    text-align: center;
    color: #79a2ac;
    animation: fade-in 0.25s 0.35s linear both;
    .open & {
      animation: fade-out 0.25s linear both;
    }
    span:hover {
      color: #1c2522;
      cursor: pointer;
    }
  }
}
.sliding-area {
  background-image: url('assets/photo-1.jpg');
  background-color: #fafafa;
  background-size: cover;
  background-position: bottom;
  padding: 68px 65px 40px 65px;
  position: fixed;
  transition: 0.8s cubic-bezier(0.5, 0.09, 0, 0.97);
  visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  z-index: -1;
  left: 0;
  top: -100%;
  width: 100%;
  .open & {
    visibility: visible;
    transform: translate(0, 100%);
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
/deep/ .circle-svg {
  display: none;
}
/deep/ .navbar {
  .nav__item {
    transform: translateY(-40px);
  }
}
</style>
