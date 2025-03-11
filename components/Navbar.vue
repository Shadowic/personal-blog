<template>
  <div class="navbar">
    <nuxt-link
      v-for="(navitem, index) in navbar.Menu"
      :key="index"
      :to="localePath(navitem.url)"
      class="nav__item"
      :class="{ active: isActive(navitem.url) }"
      @click.native="$emit('onLinkClick')"
      >{{ $t(navitem.title) }}</nuxt-link
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
  methods: {
    isActive(url) {
      const currentRoute = this.$route.path
      if (url === '/') {
        return currentRoute === this.localePath(url)
      } else {
        return currentRoute.startsWith(this.localePath(url))
      }
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
  transition: color 0.2s ease-in-out,
    transform 0.5s cubic-bezier(0.24, 0.55, 0.2, 0.91) 0.1s;
  cursor: pointer;
  &:nth-child(2) {
    transition: color 0.2s ease-in-out,
      transform 0.5s cubic-bezier(0.24, 0.55, 0.2, 0.91) 0.3s;
  }
  &:nth-child(3) {
    transition: color 0.2s ease-in-out,
      transform 0.5s cubic-bezier(0.24, 0.55, 0.2, 0.91) 0.4s;
  }
  &:nth-child(4) {
    transition: color 0.2s ease-in-out,
      transform 0.5s cubic-bezier(0.24, 0.55, 0.2, 0.91) 0.5s;
  }
  &:nth-child(5) {
    transition: color 0.2s ease-in-out,
      transform 0.5s cubic-bezier(0.24, 0.55, 0.2, 0.91) 0.6s;
  }
  &:nth-child(6) {
    transition: color 0.2s ease-in-out,
      transform 0.5s cubic-bezier(0.24, 0.55, 0.2, 0.91) 0.7s;
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
  }
  &.active {
    color: $ziggurat;
  }
}
</style>
