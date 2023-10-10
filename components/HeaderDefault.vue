<template>
  <div class="default-header">
    <Navbar :navbar="navbar" class="open" />
    <LangTumbler />
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
.default-header {
  background: #ddd5c899;
  backdrop-filter: blur(15px);
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  .navbar {
    flex-direction: row;
  }
  /deep/ .nav__item {
    margin: 0 37px;
    &:first-child {
      display: none;
    }
  }
  /deep/ .lang-tumbler {
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
