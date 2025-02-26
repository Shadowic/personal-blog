<template>
  <div ref="indexHeader" class="header-index" :class="{ open: showNavbar }">
    <div class="fixed-area">
      <div class="fixed-area__top">
        <img
          :src="navbar.logo.data.attributes.url"
          alt="logo"
          width="96"
          height="96"
          class="fixed-area__top-logo"
        />
      </div>
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
          class="sliding-area__top-logo"
        />
        <p v-html="navbar.subtitle" />
      </div>
      <Navbar :navbar="navbar" @onLinkClick="closeNav" />
      <small class="sliding-area__bottom">
        <span>{{ navbar.caption }}</span>
        <span>{{ navbar.caption2 }}</span>
      </small>
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
  mounted() {
    this.addAnimationClass()
  },
  methods: {
    closeNav() {
      this.showNavbar = false
    },
    addAnimationClass() {
      this.$refs.indexHeader.classList.add('animated__fadeInDown', 'delay2')
    },
  },
}
</script>

<style lang="scss" scoped>
.header-index {
  display: none;
  background: #fbfbfb;
  width: 80px;
  z-index: 100;
  @include lg {
    display: block;
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
@keyframes gradient-in {
  from {
    background: transparent;
  }
  to {
    background: linear-gradient(#fdf8ef 0%, #f7e0bc 100%);
  }
}
@keyframes gradient-out {
  from {
    background: linear-gradient(#fdf8ef 0%, #f7e0bc 100%);
  }
  to {
    background: transparent;
  }
}
.fixed-area {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-block: 78px 40px;
  transition: 0.8s cubic-bezier(0.5, 0.09, 0, 0.97);
  animation: gradient-in 0.25s linear both;
  .open & {
    animation: gradient-out 0.25s linear both;
    animation-delay: 0.1s;
  }
  &__top {
    animation: fade-in 0.25s 0.15s linear both;
    &-logo {
      width: 56px;
      height: auto;
      max-height: 72px;
      object-fit: contain;
    }
    &::after {
      height: 2px;
      width: 48px;
      content: '';
      display: block;
      transform: translateY(6px);
      margin: 0 auto;
      background: repeating-linear-gradient(
        90deg,
        #919a99,
        #919a99 2px,
        transparent 2px,
        transparent 4px
      );
    }
    .open & {
      animation: fade-out 0.25s linear both;
    }
  }
  &__bottom {
    text-align: center;
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
  }
}
.sliding-area {
  background: url('../assets/imgs/header-slide.jpg') bottom/cover;
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
    font-family: $base-font;
    font-weight: 600;
  }
  &__top {
    color: $ziggurat;
    letter-spacing: 0.12em;
    font-size: 0.8vw;
  }
  &__bottom {
    color: $white;
    font-size: 1vw;
  }
  &__top-logo {
    width: 72px;
    height: auto;
    max-height: 72px;
    object-fit: contain;
  }
}
</style>
