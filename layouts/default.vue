<template>
  <div>
    <headroom speed="450" easing="cubic-bezier(0.17, 0.59, 0.05, 0.96)">
      <!--      <HeaderDefault />-->
    </headroom>
    <HeaderMobile />
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
