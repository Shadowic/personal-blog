<template>
  <headroom :speed="450" easing="cubic-bezier(0.17, 0.59, 0.05, 0.96)">
    <div class="header-default">
      <div class="container">
        <div class="header__content">
          <nuxt-link to="/">Shadowic</nuxt-link>
          <Navbar :navbar="navbar" class="open header__navbar" />
          <LangTumbler />
        </div>
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
  props: {
    navbar: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss">
.header-default {
  transition: background 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out;
  display: none;
  @include lg {
    display: flex;
  }
  .header__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 80px;
    padding: 10px 0;
    border-bottom: 1px solid $herbal;
    transition: border-color 0.3s ease-in-out;
  }
  .header__navbar {
    flex-direction: row;
    .nav__item {
      margin-inline: 20px;
    }
  }
  .lang-tumbler {
    position: absolute;
    right: 50px;
    @include sm {
      position: relative;
      width: 65px;
      right: 10px;
    }
  }
}

.headroom--not-top,
.headroom--top .headroom--not-bottom {
  .header-default {
    background: #cfbeac45;
    backdrop-filter: blur(25px);
  }
  .header__content {
    border-color: transparent;
  }
}
</style>
