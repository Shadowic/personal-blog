<template>
  <div class="test2">
    <h1>Something new is coming soon</h1>
    <FlyingCircles />
    <Curtain />
  </div>
</template>

<script>
import FlyingCircles from '@/components/test/FlyingCircles'
import Curtain from '@/components/test/Curtain'
export default {
  name: 'Test2',
  components: { Curtain, FlyingCircles },
}
</script>

<style lang="scss" scoped>
.test2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 60px;
    color: #221e17;
    margin-top: 70px;
  }
}
</style>
