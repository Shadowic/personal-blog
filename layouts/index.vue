<template>
  <div>
    <HeaderMobile
      v-if="navbar"
      ref="header"
      :navbar="navbar"
      class="header__mobile"
    />
    <HeaderIndex
      v-if="navbar"
      ref="header"
      :navbar="navbar"
      class="header__desktop"
    />
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
  watch: {
    '$route.query': '$fetch',
  },
  mounted() {
    this.addAnimationClass()
  },
  methods: {
    addAnimationClass() {
      this.$refs.header.$el.classList.add('animated__fadeInDown', 'delay5')
    },
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
