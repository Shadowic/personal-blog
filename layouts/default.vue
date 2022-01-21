<template>
  <div class="wrapper">
    <HeaderMobile v-if="navbar" :navbar="navbar" class="header__mobile" />
    <div class="header header__desktop">
      <headroom :speed="450" easing="cubic-bezier(0.17, 0.59, 0.05, 0.96)">
        <HeaderDefault v-if="navbar" :navbar="navbar" />
      </headroom>
    </div>
    <Nuxt class="content" />
    <Footer v-if="footer" class="footer" :footer="footer" />
    <div class="background-fill background-fill__blue"></div>
    <div class="background-fill background-fill__pink"></div>
  </div>
</template>

<script>
import { headroom } from 'vue-headroom'

export default {
  components: {
    headroom,
  },
  data() {
    return {
      footer: null,
      navbar: null,
    }
  },
  async fetch() {
    try {
      const [footer, navbar] = await Promise.all([
        this.$strapi.$http.$get(`/api/footer?locale=${this.$i18n.locale}`),
        this.$strapi.$http.$get(`/api/navbar?locale=${this.$i18n.locale}`),
      ])
      this.footer = footer.data.attributes
      this.navbar = navbar.data.attributes
    } catch (e) {}
  },
  watch: {
    '$route.query': '$fetch',
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
}
.content {
  flex: 1 0 auto;
  position: relative;
  z-index: 101;
}
.footer {
  flex: 0 0 auto;
  position: relative;
  z-index: 1;
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
.background-fill {
  width: 100%;
  height: 100vh;
  position: absolute;
  bottom: 0;
  z-index: 0;
  &__blue {
    clip-path: polygon(0 64%, 100% 50%, 100% 100%, 0% 100%);
    background-color: #f2f6f7;
  }
  &__pink {
    clip-path: polygon(0 40%, 100% 62%, 100% 100%, 0% 100%);
    background-color: #fdf8ef;
  }
}
</style>
