<template>
  <div class="error-page">
    <div class="container">
      <div class="code-number">404</div>
      <div class="message__title">The Page You Are Looking Is Not Found</div>
      <div class="message__text">
        The page you are looking for does not exist. It may have been moved, or
        removed altogether. Perhaps you can return back to the site's homepage
        and and see if you can find what you are looking for.
      </div>
      <nuxt-link to="/">
        <div class="btn">
          <span>back to home</span>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
}
.container {
  max-width: 1230px;
}
.code-number {
  color: #f5f4f0;
  display: inline-block;
  font-family: 'PlayfairDisplay Semi-bold', serif;
  font-size: 230px;
  font-weight: 700;
  line-height: 0.23em;
  position: relative;
  top: 22px;
  z-index: -1;
}
.message__title {
  color: #3b4d55;
  font-family: 'PlayfairDisplay Semi-bold', serif;
  font-size: 33px;
  line-height: 1.212em;
  margin: 25px 0;
}
.message__text {
  font-family: Dosis, sans-serif;
  font-size: 17px;
  color: #6f8c96;
  max-width: 65%;
  display: block;
  margin: 23px auto 0;
  line-height: 1.647em;
}
.btn {
  display: inline-block;
  margin-top: 41px;
  color: #79a2ac;
  background-color: transparent;
  border: 1px solid #79a2ac;
  vertical-align: middle;
  width: auto;
  font-size: 10px;
  line-height: 2em;
  font-weight: 500;
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
    color: #fff;
    background-color: #3b4d55;
    border-color: #3b4d55;
  }
  span {
    position: relative;
    color: inherit;
    &::after {
      color: currentColor;
      content: '\24';
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
