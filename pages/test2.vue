<template>
  <div class="test2">
    <h1>Something new is coming soon</h1>
    <FlyingCircles />
    <ImageComparisonSlider />
  </div>
</template>

<script>
import FlyingCircles from '@/components/test/FlyingCircles'
import ImageComparisonSlider from '@/components/test/ImageComparisonSlider'
export default {
  name: 'Test2',
  components: { ImageComparisonSlider, FlyingCircles },
}
</script>

<style lang="scss" scoped>
.test2 {
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
