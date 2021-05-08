<template>
  <div class="default-header">
    <Navbar class="open" />
    <LangTumbler />
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.default-header {
  background: #f6f7f2;
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
    span {
      &:hover,
      &:focus,
      &:active {
        color: #79a2ac;
      }
    }
    @include sm {
      position: relative;
      width: 65px;
      right: 10px;
    }
  }
}
</style>
