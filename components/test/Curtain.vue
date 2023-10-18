<template>
  <section class="curtain">
    <h2>here will be curtain soon</h2>
    <div class="main"></div>
  </section>
</template>

<script>
export default {
  name: 'Curtain',
}
</script>

<style lang="scss" scoped>
.curtain {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 70px;
}
.main {
  width: 100%;
  max-width: 780px;
  padding: 0 40px;
  height: 380px;
  margin-top: 70px;
  border: 1px solid crimson;
}
</style>
