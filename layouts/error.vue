<template>
  <div class="error-page">
    <p class="message">Ohhh you've lost, but no panic</p>
    <nuxt-link :to="localePath('/')" class="btn">
      <span> back to the right way </span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: ['error'],
}
</script>

<style lang="scss" scoped>
.error-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100vh;
  height: 100svh;
  background: url('~assets/imgs/error2.jpg') center/cover;
  overflow: hidden;
}
.message {
  color: $white;
  font-family: $accent-font;
  font-size: 40px;
  line-height: 1.4em;
  margin-top: 200px;
  @include lg {
    margin-top: 280px;
  }
}
.btn {
  display: inline-block;
  margin-top: 20px;
  color: $white;
  background-color: transparent;
  border: 0.5px solid $white;
  vertical-align: middle;
  width: auto;
  font-size: 14px;
  line-height: 2em;
  font-weight: 900;
  border-radius: 0;
  outline: 0;
  box-sizing: border-box;
  transition: color 0.2s ease-out, background-color 0.2s ease-out,
    border-color 0.2s ease-out;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  padding: 14px 55px 14px 48px;
  backdrop-filter: blur(24px);
  &:hover {
    color: $dark-cyan;
    background-color: $white;
  }
  span {
    position: relative;
    color: inherit;
    &::after {
      color: currentColor;
      content: '\2708';
      font-family: Eleganticons, sans-serif;
      font-size: 1.3em;
      height: 1em;
      line-height: 1em;
      position: absolute;
      right: -1.3em;
      top: calc(50% - 0.5em);
      transition: transform 0.2s;
      width: 1em;
    }
  }
  @include lg {
    margin-top: 32px;
  }
}
</style>
