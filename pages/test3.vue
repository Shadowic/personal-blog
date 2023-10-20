<template>
  <div class="test3">
    <ImageComparisonSlider />
  </div>
</template>

<script>
import ImageComparisonSlider from '@/components/test/ImageComparisonSlider'
export default {
  name: 'Test3',
  components: { ImageComparisonSlider },
  layout: 'empty-page',
}
</script>

<style>
.test3 {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
