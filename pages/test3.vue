<template>
  <div class="test3"><IncreasingImages /></div>
</template>

<script>
import IncreasingImages from '@/components/test/IncreasingImages'
export default {
  name: 'Test3',
  components: { IncreasingImages },
}
</script>

<style>
.test3 {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
