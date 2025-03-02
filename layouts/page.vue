<template>
  <div class="wrapper">
    <HeaderMobile v-if="navbar" :navbar="navbar" />
    <HeaderDefault v-if="navbar" :navbar="navbar" />
    <div class="page-content">
      <Nuxt />
    </div>
    <Footer v-if="footer" :footer="footer" />
  </div>
</template>

<script>
export default {
  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
  },
  data() {
    return {
      // footer: null,
      // navbar: null,
      navbar: {
        Menu: [
          {
            url: '/',
            title: 'main page',
          },
          {
            url: '/cakes',
            title: 'cakes',
          },
          {
            url: '/ceramic-album',
            title: 'ceramic album',
          },
          {
            url: '/test1',
            title: 'test1',
          },
          {
            url: '/test2',
            title: 'test2',
          },
          {
            url: '/about',
            title: 'about',
          },
        ],
        logo: {
          data: {
            attributes: {
              url: '/imgs/logo.png',
            },
          },
        },
        subtitle: 'Welcome!',
        caption: 'visit',
        caption2: 'please',
      },
      footer: {
        title: 'Morbi finibus',
        subtitle: '2024',
        links: [
          {
            is_shown: true,
            id: 0,
            url: '/',
            title: 'coffee',
            icon: {
              data: {
                attributes: {
                  url: '/svgs/coffee-cup.svg',
                },
              },
            },
          },
          {
            is_shown: true,
            id: 1,
            url: '/',
            title: 'github',
            icon: {
              data: {
                attributes: {
                  url: '/svgs/github.svg',
                },
              },
            },
          },
          {
            is_shown: false,
            id: 2,
            url: '/',
            title: 'loupe',
            icon: {
              data: {
                attributes: {
                  url: '/svgs/loupe.svg',
                },
              },
            },
          },
          {
            is_shown: true,
            id: 3,
            url: '/',
            title: 'insta',
            icon: {
              data: {
                attributes: {
                  url: '/svgs/pinterest.svg',
                },
              },
            },
          },
          {
            is_shown: true,
            id: 4,
            url: '/',
            title: 'insta',
            icon: {
              data: {
                attributes: {
                  url: '/svgs/telegram.svg',
                },
              },
            },
          },
        ],
      },
    }
  },
  // async fetch() {
  //   try {
  //     const [footer, navbar] = await Promise.all([
  //       this.$strapi.$http.$get(`/api/footer?locale=${this.$i18n.locale}`),
  //       this.$strapi.$http.$get(`/api/navbar?locale=${this.$i18n.locale}`),
  //     ])
  //     this.footer = footer.data.attributes
  //     this.navbar = navbar.data.attributes
  //   } catch (e) {}
  // },
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  min-height: 100svh;
}
.page-content {
  display: flex;
  flex: 1 0 auto;
  margin-block: 78px;
}
</style>
