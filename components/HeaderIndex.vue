<template>
  <div ref="indexHeader" class="header" :class="{ open: showNavbar }">
    <div class="fixed-area">
      <nuxt-link :to="localePath(navbar.Menu[0].url)" class="fixed-area__top"
        ><div
          :style="{
            backgroundImage: `url(${navbar.logo.data.attributes.url})`,
          }"
          class="logo"
      /></nuxt-link>
      <Burger :opened="showNavbar" @onClickBurger="showNavbar = !showNavbar" />
      <div class="fixed-area__bottom">
        <LangTumbler />
      </div>
    </div>
    <div class="sliding-area">
      <div class="sliding-area__top">
        <nuxt-link :to="localePath(navbar.Menu[0].url)" class="title">{{
          navbar.title
        }}</nuxt-link>
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
.header {
  background: #fbfbfb;
  position: fixed;
  height: 100%;
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
  padding: 68px 0 40px;
  transition: 0.8s cubic-bezier(0.5, 0.09, 0, 0.97);
  animation: gradient-in 0.25s linear both;
  .open & {
    animation: gradient-out 0.25s linear both;
    animation-delay: 0.1s;
  }
  &__top {
    animation: fade-in 0.25s 0.35s linear both;
    .logo {
      width: 60px;
      height: 60px;
      background: center/cover;
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
  }
  &__bottom {
    color: #fff;
    opacity: 0.9;
    font-size: 10px;
    min-height: 50px;
    justify-content: flex-end;
  }
}
.title {
  font-size: 55px;
  font-family: 'Caveat', cursive;
  color: $bokara;
}
.subtitle {
  color: $ziggurat;
  letter-spacing: 0.32em;
  text-indent: 0.17em;
  font-size: 12px;
}
</style>
