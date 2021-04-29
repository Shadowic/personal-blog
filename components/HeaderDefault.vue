<template>
  <div class="default-header">
    <Navbar class="open" />
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
}
</style>
