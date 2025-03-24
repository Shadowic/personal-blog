<template>
  <!-- Dynamic routes with params -->
  <!--<NuxtLink :to="{ name: 'posts-id', params: { id: 123 } }">Post 123</NuxtLink>-->
  <div class="test-page">
    <h1>Something new is coming soon</h1>
    <FlyingCircles />
    <ImageComparisonSlider />
  </div>
</template>

<script>
import FlyingCircles from '@/components/test/FlyingCircles'
import ImageComparisonSlider from '@/components/test/ImageComparisonSlider'
export default {
  name: 'TestPage',
  components: { ImageComparisonSlider, FlyingCircles },
}
</script>

<style lang="scss" scoped>
.test-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  h1 {
    font-size: 60px;
    color: #221e17;
    margin-top: 70px;
  }
}
</style>
