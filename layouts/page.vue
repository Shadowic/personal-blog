<template>
  <div class="wrapper">
    <HeaderMobile v-if="navbar" :navbar="navbar" />
    <HeaderDefault v-if="navbar" :navbar="navbar" />
    <div class="page-content">
      <Nuxt />
    </div>
    <kinesis-container class="kinesis-wrap">
      <div class="bottom-container">
        <kinesis-element
          class="kinesis-element"
          type="translate"
          :strength="-20"
        >
          <div class="background-fill background-fill__back" />
        </kinesis-element>
        <kinesis-element class="kinesis-element" type="scale" :strength="1">
          <div class="background-fill background-fill__forward" />
        </kinesis-element>
        <Footer v-if="footer" :footer="footer" />
      </div>
    </kinesis-container>
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
        title: 'Nunc ut volutpat purus',
        subtitle: 'Pellentesque ac commodo tellus',
        description:
          'uspendisse dolor ligula, semper in diam vitae, interdum sagittis tortor. Mauris id gravida enim. Pellentesque eget turpis placerat risus consequat varius malesuada a nulla.',
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
.kinesis-wrap {
  display: flex;
  flex-direction: column;
}
.bottom-container {
  flex: 0 0 auto;
  position: relative;
  min-height: 260px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @include lg {
    min-height: 450px;
  }
}
.kinesis-element {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
}
.background-fill {
  width: 100%;
  height: 100%;
  &__back {
    clip-path: polygon(0 24%, 100% 10%, 100% 100%, 0% 100%);
    background-color: $herbal;
  }
  &__forward {
    clip-path: polygon(0 0%, 100% 28%, 100% 100%, 0% 100%);
    background-color: $champagne;
  }
}
</style>
