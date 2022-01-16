<template>
  <div class="navbar">
    <nuxt-link
      :to="localePath(navbar.Menu[0].url)"
      class="nav__item"
      @click.native="$emit('onLinkClick')"
      >{{ navbar.Menu[0].title }}</nuxt-link
    >
    <nuxt-link
      :to="localePath(navbar.Menu[1].url)"
      class="nav__item"
      @click.native="$emit('onLinkClick')"
      >{{ navbar.Menu[1].title }}</nuxt-link
    >
    <nuxt-link
      :to="localePath(navbar.Menu[2].url)"
      class="nav__item"
      @click.native="$emit('onLinkClick')"
      >{{ navbar.Menu[2].title }}</nuxt-link
    >
    <nuxt-link
      :to="localePath(navbar.Menu[0].url)"
      @click.native="$emit('onLinkClick')"
      ><div class="symbol"
    /></nuxt-link>
    <nuxt-link
      :to="localePath(navbar.Menu[3].url)"
      class="nav__item"
      @click.native="$emit('onLinkClick')"
      >{{ navbar.Menu[3].title }}</nuxt-link
    >
    <nuxt-link
      :to="localePath(navbar.Menu[4].url)"
      class="nav__item"
      @click.native="$emit('onLinkClick')"
      >{{ navbar.Menu[4].title }}</nuxt-link
    >
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
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.nav__item {
  color: $green-dark;
  margin: 17px 0;
  opacity: 0;
  font-size: 12px;
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
  &:nth-child(6) {
    transition-delay: 0.7s;
  }
  .open & {
    opacity: 1;
    transform: translateY(0);
    transition-duration: 1s;
  }
  &:hover,
  &:focus,
  &:active {
    color: $ziggurat;
    transition: color 0.2s ease-out;
  }
  @include xs {
    font-size: 16px;
    margin: 20px 0;
  }
  @include xs- {
    font-size: 12px;
  }
}
.symbol {
  width: 80px;
  height: 80px;
  background: url('../assets/imgs/logo.png') center/cover;
  margin: 0 10px;
}
</style>
