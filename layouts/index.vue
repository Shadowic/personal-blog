<template>
  <div>
    <HeaderMobile class="header__mobile" />
    <HeaderIndex class="header__desktop" />
    <Nuxt />
  </div>
</template>

<style lang="scss" scoped>
.header {
  &__mobile {
    display: none;
    @include sm- {
      display: block;
    }
  }
  &__desktop {
    display: block;
    @include sm- {
      display: none;
    }
  }
}
</style>
