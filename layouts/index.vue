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
      // navbar: null,
      navbar: {
        Menu: [
          {
            url: '/cakes',
            title: 'cakes',
          },
          {
            url: '/test1',
            title: 'test1',
          },
          {
            url: 'test2',
            title: 'test2',
          },
          {
            url: '/',
            title: 'nothing yet',
          },
          {
            url: '/about',
            title: 'about',
          },
        ],
        logo: {
          data: {
            attributes: {
              url: '/imgs/IMG_9408.jpg',
            },
          },
        },
        subtitle: 'Welcome!',
        caption: 'visit',
        caption2: 'please',
      },
    }
  },
  // async fetch() {
  //   try {
  //     const result = await this.$strapi.$http.$get(
  //       `/api/navbar?locale=${this.$i18n.locale}`
  //     )
  //     this.navbar = result.data.attributes
  //   } catch (e) {}
  // },
  watch: {
    '$route.query': '$fetch',
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
