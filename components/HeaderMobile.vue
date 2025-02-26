<template>
  <div class="header-mobile" :class="{ open: showNavbar }">
    <div class="fixed-area">
      <Burger :opened="showNavbar" @onClickBurger="showNavbar = !showNavbar" />
      <div class="fixed-area__bottom">
        <LangTumbler />
      </div>
    </div>
    <div class="sliding-area">
      <div class="sliding-area__top">
        <img
          :src="navbar.logo.data.attributes.url"
          alt="logo"
          width="96"
          height="96"
          class="logo"
        />
        <div class="subtitle">{{ navbar.subtitle }}</div>
      </div>
      <Navbar :navbar="navbar" @onLinkClick="closeNav" />
      <div class="sliding-area__bottom">
        <div>{{ navbar.caption }}</div>
        <div>{{ navbar.caption2 }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    navbar: {
      type: Object,
      default: null,
    },
  },
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

<style lang="scss">
.header-mobile .nav__item {
  font-size: 12px;
  @include md {
    font-size: 14px;
  }
}
</style>

<style lang="scss" scoped>
.header-mobile {
  display: block;
  background: #cfbeac75;
  position: fixed;
  height: 48px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  @include lg {
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
  backdrop-filter: blur(25px);
  &__bottom {
    text-align: center;
    color: $ziggurat;
    animation: fade-in 0.25s 0.35s linear both;
    .open & {
      animation: fade-out 0.25s linear both;
    }
    span:hover {
      color: $green-dark;
      cursor: pointer;
    }
  }
}
.sliding-area {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  background-image: url('../assets/imgs/header-slide.jpg');
  background-color: #fafafa;
  background-size: cover;
  background-position: bottom;
  padding: 68px 64px 24px;
  position: fixed;
  transition: transform 0.6s cubic-bezier(0.5, 0.09, 0, 0.97),
    visibility 0.6s cubic-bezier(0.5, 0.09, 0, 0.97);
  visibility: hidden;
  z-index: -1;
  left: 0;
  top: -100%;
  width: 100%;
  @include md {
    padding: 96px 64px 36px;
  }
  .open & {
    visibility: visible;
    transform: translate(0, 100%);
  }
  &__top,
  &__bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__bottom {
    color: #fff;
    font-size: 13px;
    min-height: 110px;
    justify-content: flex-end;
  }
}
.logo {
  width: 36px;
  height: 36px;
  object-fit: contain;
  @include md {
    width: 40px;
    height: 40px;
  }
}
.subtitle {
  color: $ziggurat;
  font-size: 10px;
  letter-spacing: 0.032em;
  margin-top: 4px;
  @include md {
    font-size: 12px;
  }
}
</style>
