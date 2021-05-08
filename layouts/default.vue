<template>
  <div>
    <HeaderMobile class="header__mobile" />
    <div class="header__desktop">
      <headroom :speed="450" easing="cubic-bezier(0.17, 0.59, 0.05, 0.96)">
        <HeaderDefault />
      </headroom>
    </div>
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import { headroom } from 'vue-headroom'

export default {
  components: {
    headroom,
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
