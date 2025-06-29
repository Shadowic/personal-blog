<template>
  <headroom :speed="450" easing="cubic-bezier(0.17, 0.59, 0.05, 0.96)">
    <div class="header-new">
      <div class="container">
        <ul class="header-new__content">
          <li class="header-new__content-item active">
            <nuxt-link to="/">Main</nuxt-link>
          </li>
          <li class="header-new__content-item">
            <nuxt-link to="/">Albums</nuxt-link>
          </li>
          <li class="header-new__content-item">
            <nuxt-link to="/">Album</nuxt-link>
          </li>
          <li class="header-new__content-item">
            <nuxt-link to="/">About</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </headroom>
</template>

<script>
import { headroom } from 'vue-headroom'

export default {
  components: {
    headroom,
  },
}
</script>

<style lang="scss">
.header-new {
  transition: background 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out;
  font-family: 'DM Sans', sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    margin: 0 auto;
    padding: 24px 24px 0;
    list-style: none;
    color: #a28154;
    position: relative;
    transition: color 0.3s ease-in-out;
    &:first-child::before,
    &:first-child::after {
      content: '';
      display: block;
      width: 24px;
      height: 1.5px;
      background-color: #a28154;
      position: absolute;
      bottom: 0.5px;
      transition: background-color 0.3s ease-in-out;
    }
    &:first-child::before {
      left: 0;
    }
    &:first-child::after {
      right: 0;
    }
  }
  &__content-item {
    padding: 12px 24px 12px;
    border-bottom: 1.5px solid #a28154;
    transition: border-color 0.3s ease-in-out;
    &.active {
      border: 1.5px solid #a28154;
      border-bottom-color: transparent;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
  }
}

.headroom--not-top,
.headroom--top .headroom--not-bottom {
  .header-new {
    background: #020a1d40;
    backdrop-filter: blur(25px);
    padding-bottom: 12px;
  }
  .header-new__content {
    color: #c5ad8b;
  }
  .header-new__content::before,
  .header-new__content::after {
    background-color: transparent;
  }
  .header-new__content-item {
    border-color: transparent;
  }
}
</style>
