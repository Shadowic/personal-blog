<template>
  <div class="wrapper">
    <HeaderMobile v-if="navbar" :navbar="navbar" class="header__mobile" />
    <div class="header header__desktop">
      <headroom :speed="450" easing="cubic-bezier(0.17, 0.59, 0.05, 0.96)">
        <HeaderDefault v-if="navbar" :navbar="navbar" />
      </headroom>
    </div>
    <kinesis-container class="kinesis-wrap">
      <Nuxt class="content" />
      <div class="bottom-container">
        <kinesis-element
          class="kinesis-element"
          type="translate"
          :strength="-20"
        >
          <div class="background-fill background-fill__blue" />
        </kinesis-element>
        <kinesis-element class="kinesis-element" type="scale" :strength="1">
          <div class="background-fill background-fill__pink" />
        </kinesis-element>
        <Footer v-if="footer" class="footer" :footer="footer" />
      </div>
    </kinesis-container>
  </div>
</template>

<script>
import { headroom } from 'vue-headroom'

export default {
  components: {
    headroom,
  },
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
              url: '/imgs/IMG_9408.jpg',
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
}
.kinesis-wrap {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
}
.content {
  flex: 1 0 auto;
  position: relative;
  z-index: 101;
}
.bottom-container {
  flex: 0 0 auto;
  position: relative;
  height: 40vh;
}
.footer {
  position: absolute;
  bottom: 0;
}
.header {
  flex: 0 0 auto;
  z-index: 100;
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
.kinesis-element {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
}
.background-fill {
  width: 100%;
  height: 100%;
  &__blue {
    clip-path: polygon(0 24%, 100% 10%, 100% 100%, 0% 100%);
    background-color: #f2f6f7;
  }
  &__pink {
    clip-path: polygon(0 0%, 100% 28%, 100% 100%, 0% 100%);
    background-color: #e5e0d6;
  }
}
</style>
