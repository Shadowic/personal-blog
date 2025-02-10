<template>
  <div class="navbar">
    <nuxt-link
      v-for="(navitem, index) in navbar.Menu"
      :key="index"
      :to="localePath(navitem.url)"
      class="nav__item"
      @click.native="$emit('onLinkClick')"
      >{{ navitem.title }}</nuxt-link
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

<style lang="scss">
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
  font-size: 14px;
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
}
</style>
