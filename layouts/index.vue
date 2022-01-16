<template>
  <div>
    <HeaderMobile v-if="navbar" :navbar="navbar" class="header__mobile" />
    <HeaderIndex v-if="navbar" :navbar="navbar" class="header__desktop" />
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbar: null,
    }
  },
  async fetch() {
    try {
      const result = await this.$strapi.$http.$get(
        `/api/navbar?locale=${this.$i18n.locale}`
      )
      this.navbar = result.data.attributes
    } catch (e) {}
  },
}
</script>

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
