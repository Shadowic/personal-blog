<template>
  <div class="error-page">
    <div class="container">
      <div class="message">I think, you've lost</div>
      <nuxt-link :to="localePath('/')">
        <div class="btn">
          <span>back to the right way</span>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty-page',
}
</script>

<style lang="scss" scoped>
.error-page {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  background: url('~assets/imgs/error2.jpg') center/cover;
}
.message {
  color: #fff;
  font-family: 'Caveat', cursive;
  font-size: 40px;
  line-height: 1.212em;
  margin-top: 200px;
}
.btn {
  display: inline-block;
  margin-top: 20px;
  color: #fff;
  background-color: transparent;
  border: 1px solid #fff;
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
  &:hover {
    color: $dark-cyan;
    background-color: #fff;
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
}
</style>
