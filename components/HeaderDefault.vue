<template>
  <div class="header-default">
    <div class="container">
      <div class="header__content">
        <nuxt-link to="/">Shadowic</nuxt-link>
        <Navbar :navbar="navbar" class="open header__navbar" />
        <LangTumbler />
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
}
</script>

<style lang="scss">
.header-default {
  background: #cfbeac55;
  backdrop-filter: blur(15px);
  .header__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 80px;
    padding: 10px 0;
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
</style>
