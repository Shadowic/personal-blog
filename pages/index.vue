<template>
  <div class="container">
    <Slider :images="images" />
    <div class="content">
      <div class="content__top">
        <div class="content__icon">
          <img src="~assets/content-icon.png" />
        </div>
        <div class="content__subtitle">Welcome to Ruinenberg</div>
        <h1 class="content__title">Travels <span>Worth</span> Retelling</h1>
        <p class="content__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus
          tristique augue, rhoncus aliquam ipsum. Donec id dolor a neque.
        </p>
      </div>
      <div class="content__body">
        <Albums @open-img="openImg" :albumLink="indexContent" />
      </div>
      <div class="content__bottom">
        <div class="content__bottom__wrapper">
          <div class="content__bottom__title">Shadowic</div>
          <div class="content__bottom__undertitle">Personal blog</div>
          <div class="content__bottom__p">
            This is Shadowic's personal blog created with love and proud for my
            resume as html-coder where you can read some travel stories and
            experiences, or looking for some ceramic stuff.
            <svg class="svg-dotted-line">
              <line x1="0" y1="50%" x2="100%" y2="50%" />
            </svg>
          </div>
          <div class="social">
            <div class="fb" />
            <div class="tw" />
            <div class="inst" />
            <div class="pin" />
            <div class="smthng" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Albums from './Albums'

export default {
  components: {
    Albums,
  },
  data() {
    return {
      images: [],
    }
  },
  async fetch() {
    const response = await fetch(
      process.env.baseUrl + `/data/sliderContent.json`
    )
    if (response.status !== 200) {
      this.error = 'Не удалось получить картинки'
    }
    this.images = await response.json()
  },
  methods: {
    openImg(img) {
      this.opened = true
    },
  },
}
</script>
<style lang="scss" scoped>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  padding-left: 588px;
}
.content {
  &__top {
    background: url('assets/content-background.jpg');
    padding: 6% 2% 200px 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  &__icon {
    width: 94px;
    height: 99px;
    margin-bottom: 10px;
    img {
      width: 100%;
    }
  }
  &__subtitle {
    margin-top: 37px;
    color: #3b4d55;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.2em;
    line-height: 1em;
    text-transform: uppercase;
  }
  &__title {
    background: url('~assets/content-title-background.jpg') center/cover;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'PlayfairDisplay Semi-bold', serif;
    color: #1c2522;
    font-size: 75px;
    line-height: 1.133em;
    margin: 25px 0;
    word-wrap: break-word;
    span {
      font-style: italic;
    }
  }
  &__description {
    font-family: 'Dosis', sans-serif;
    padding: 0 13%;
    font-size: 19px;
    color: #1c2522;
    margin: 17px 0 0;
  }
  &__bottom {
    width: 100%;
    color: #919a99;
    text-align: center;
    line-height: 1.67em;
    margin-top: 150px;
    &__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: background 0.3s, border 0.3s, border-radius 0.3s,
        box-shadow 0.3s;
      margin: 50px 0;
      padding: 0% 21%;
    }
    &__title {
      font-family: 'PlayfairDisplay Semi-bold', serif;
      color: #1c2522;
      font-size: 30px;
      margin-bottom: 20px;
    }
    &__undertitle {
      margin-bottom: 20px;
    }
    &__p {
      position: relative;
      margin-bottom: 20px;
      padding-bottom: 40px;
    }
  }
}
.svg-dotted-line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  stroke: #79a2ac;
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-dasharray: 0.4px, 5px;
  stroke-dashoffset: -2;
}
.social {
  display: flex;
  & > div {
    position: relative;
    width: 20px;
    height: 20px;
    margin-right: 20px;
    cursor: pointer;
    &::after {
      font-family: Eleganticons, serif;
      position: absolute;
    }
  }
  .fb::after {
    content: '\e093';
  }
  .tw::after {
    content: '\e094';
  }
  .inst::after {
    content: '\e09a';
  }
  .pin::after {
    content: '\e095';
  }
  .smthng::after {
    content: '\e0dc';
  }
}
</style>
