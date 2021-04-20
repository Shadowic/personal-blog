<template>
  <div class="container">
    <Slider :images="images" class="index__slider" />
    <div class="content">
      <div class="content__top">
        <div class="content__icon">
          <svg
            enable-background="new 0 0 64 64"
            height="512"
            viewBox="0 0 64 64"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m56.562 32c3.838-1.755 6.438-5.634 6.438-10 0-2.437-.819-4.795-2.299-6.703.855-4.309 1.299-8.447 1.299-12.297 0-.552-.447-1-1-1-3.849 0-7.987.443-12.297 1.298-1.909-1.48-4.266-2.298-6.703-2.298-4.367 0-8.245 2.6-10 6.438-1.755-3.838-5.633-6.438-10-6.438-2.437 0-4.795.818-6.703 2.298-4.31-.855-8.448-1.298-12.297-1.298-.553 0-1 .448-1 1 0 3.85.444 7.988 1.299 12.298-1.481 1.908-2.299 4.265-2.299 6.702 0 4.366 2.6 8.245 6.438 10-3.838 1.755-6.438 5.634-6.438 10 0 2.437.819 4.795 2.299 6.703-.855 4.309-1.299 8.447-1.299 12.297 0 .552.447 1 1 1 3.849 0 7.987-.443 12.297-1.298 1.909 1.48 4.266 2.298 6.703 2.298 4.367 0 8.245-2.6 10-6.438 1.755 3.838 5.633 6.438 10 6.438 2.437 0 4.795-.818 6.703-2.298 4.31.855 8.448 1.298 12.297 1.298.553 0 1-.448 1-1 0-3.85-.444-7.988-1.299-12.298 1.481-1.908 2.299-4.265 2.299-6.702 0-4.366-2.6-8.245-6.438-10zm4.438 10c0 2.127-.754 4.184-2.122 5.792-.023.027-.045.057-.065.087-1.361 1.571-3.199 2.599-5.201 2.964 1.084-2.893-.191-7.265-3.443-11.555 2.666-.985 4.303-2.976 4.718-5.805 3.599 1.218 6.113 4.631 6.113 8.517zm-24.169-5.169c2.672 1.649 5.935 3.169 8.919 3.169.817 0 1.579-.062 2.297-.172 3.588 4.422 4.965 9.169 3.137 11.253l-.065.076c-.038.025-.075.053-.109.083-2.015 1.775-6.758.394-11.181-3.193.109-.717.171-1.48.171-2.297 0-2.983-1.52-6.246-3.169-8.919zm-4.831 16.169c-3.981 0-6-2.439-6-7.25 0-4.48 4.25-10.091 6-12.212 1.75 2.121 6 7.732 6 12.212 0 4.811-2.019 7.25-6 7.25zm-8-7.25c0 .816.062 1.579.172 2.297-4.422 3.586-9.169 4.966-11.253 3.136l-.077-.068c-.024-.037-.052-.073-.082-.106-1.773-2.014-.394-6.76 3.193-11.181.718.11 1.48.172 2.297.172 2.984 0 6.247-1.52 8.919-3.169-1.649 2.673-3.169 5.936-3.169 8.919zm-11.184-32.831.065-.076c.038-.025.075-.053.109-.083 2.016-1.773 6.759-.394 11.181 3.193-.109.717-.171 1.48-.171 2.297 0 2.983 1.52 6.247 3.169 8.92-2.672-1.65-5.935-3.17-8.919-3.17-.817 0-1.579.062-2.297.172-3.587-4.421-4.965-9.169-3.137-11.253zm19.184-1.919c3.981 0 6 2.439 6 7.25 0 4.48-4.25 10.091-6 12.212-1.75-2.121-6-7.732-6-12.212 0-4.811 2.019-7.25 6-7.25zm8 7.25c0-.816-.062-1.579-.172-2.297 4.422-3.586 9.169-4.966 11.253-3.136l.077.068c.024.037.052.073.082.106 1.773 2.014.394 6.76-3.193 11.181-.718-.11-1.48-.172-2.297-.172-2.984 0-6.247 1.52-8.919 3.169 1.649-2.673 3.169-5.936 3.169-8.919zm5.75 19.75c-4.48 0-10.092-4.25-12.213-6 2.119-1.75 7.726-6 12.213-6 4.811 0 7.25 2.019 7.25 6s-2.439 6-7.25 6zm-27.5-12c4.48 0 10.092 4.25 12.213 6-2.119 1.75-7.726 6-12.213 6-4.811 0-7.25-2.019-7.25-6s2.439-6 7.25-6zm36.636 4.517c-.415-2.829-2.052-4.819-4.718-5.805 3.246-4.282 4.522-8.646 3.448-11.539 1.989.376 3.836 1.381 5.194 2.946.021.031.043.061.067.089 1.369 1.608 2.123 3.665 2.123 5.792 0 3.886-2.514 7.299-6.114 8.517zm4.107-16.984c-1.717-1.419-3.817-2.288-6.045-2.481-.193-2.229-1.062-4.328-2.481-6.046 3.312-.591 6.509-.936 9.523-.996-.061 3.014-.406 6.211-.997 9.523zm-16.993-10.533c2.127 0 4.184.753 5.793 2.122.026.023.055.044.084.064 1.572 1.362 2.601 3.2 2.966 5.203-2.894-1.084-7.265.191-11.555 3.443-.985-2.666-2.976-4.304-5.805-4.719 1.218-3.599 4.632-6.113 8.517-6.113zm-25.793 2.122c1.609-1.369 3.666-2.122 5.793-2.122 3.885 0 7.299 2.514 8.517 6.113-2.829.415-4.819 2.053-5.805 4.719-4.289-3.252-8.661-4.527-11.555-3.443.365-2.002 1.393-3.84 2.964-5.201.029-.021.059-.043.086-.066zm-2.674-.116c-1.419 1.718-2.288 3.817-2.481 6.046-2.228.193-4.328 1.062-6.045 2.481-.591-3.312-.936-6.509-.997-9.523 3.014.061 6.21.405 9.523.996zm-10.533 16.994c0-2.127.754-4.184 2.122-5.792.023-.027.045-.057.065-.087 1.362-1.571 3.199-2.599 5.201-2.964-1.084 2.893.191 7.265 3.443 11.555-2.666.985-4.303 2.976-4.718 5.805-3.599-1.218-6.113-4.631-6.113-8.517zm6.114 11.483c.415 2.829 2.052 4.819 4.718 5.805-3.252 4.29-4.527 8.662-3.443 11.555-2.001-.365-3.839-1.393-5.199-2.962-.021-.031-.043-.061-.067-.089-1.369-1.608-2.123-3.665-2.123-5.792 0-3.886 2.514-7.299 6.114-8.517zm-4.107 16.984c1.717 1.419 3.817 2.288 6.045 2.481.193 2.229 1.062 4.328 2.481 6.046-3.313.591-6.509.936-9.523.996.061-3.014.406-6.211.997-9.523zm16.993 10.533c-2.127 0-4.184-.753-5.793-2.122-.026-.023-.055-.044-.084-.064-1.573-1.363-2.602-3.204-2.967-5.209.677.254 1.427.393 2.247.393 2.683 0 6.021-1.342 9.308-3.833.985 2.668 2.976 4.306 5.806 4.721-1.218 3.6-4.632 6.114-8.517 6.114zm25.793-2.122c-1.609 1.369-3.666 2.122-5.793 2.122-3.885 0-7.299-2.514-8.517-6.113 2.83-.415 4.821-2.054 5.806-4.721 3.287 2.492 6.624 3.833 9.308 3.833.82 0 1.57-.139 2.247-.393-.364 2.004-1.393 3.844-2.965 5.207-.029.02-.059.042-.086.065zm2.674.116c1.419-1.718 2.288-3.817 2.481-6.046 2.228-.193 4.328-1.062 6.045-2.481.591 3.311.936 6.508.997 9.523-3.014-.061-6.21-.405-9.523-.996z"
            />
          </svg>
        </div>
        <div class="content__subtitle">{{ $t('welcome') }}</div>
        <h1 class="content__title">Travels <span>Worth</span> Retelling</h1>
        <p class="content__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus
          tristique augue, rhoncus aliquam ipsum. Donec id dolor a neque.
        </p>
      </div>
      <div class="content__body">
        <BackgroundWord :title="$t('latest')" />
        <div class="content__body__title">{{ $t('featured') }}</div>
        <AlbumsList :is-shown-on-index="true" class="index__albums" />
      </div>
      <div class="content__bottom">
        <div class="content__bottom__wrapper">
          <div class="content__bottom__title">Shadowic</div>
          <div class="content__bottom__undertitle">Личный блог</div>
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

<i18n>
{
  "ru": {
    "latest": "Последнее",
    "featured": "Последние Альбомы",
    "welcome": "добро пожаловать"
  },
  "en": {
    "latest": "Latest",
    "featured": "Latest Albums",
    "welcome": "welcome to"
  }
}
</i18n>

<script>
export default {
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
}
</script>
<style lang="scss" scoped>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  .index__slider {
    left: 80px;
    width: 40%;
  }
  /deep/ .index__albums {
    display: flex;
    flex-wrap: wrap;
    .album {
      width: 50%;
      flex-direction: column;
      padding: 0 20px;
      margin: 0 0 40px;
      &:nth-child(2n) {
        margin-top: -95px;
      }
      &__outline {
        position: absolute;
        background-color: #fff;
        padding: 20px;
        bottom: -10%;
        width: calc(100% - 80px);
        z-index: 1;
        &-top {
          display: none;
        }
      }
      &__description {
        font-size: 21px;
      }
      &__cover {
        width: 100%;
      }
      .btn {
        display: none;
      }
    }
  }
}
.content {
  padding-left: calc(40% + 80px);
  &__top {
    background: url('assets/content-background.jpg');
    padding: 5% 2% 200px 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  &__icon {
    width: 60px;
    height: 99px;
    margin-bottom: 10px;
    svg {
      transform: rotate(45deg);
      width: 100%;
      height: inherit;
      fill: #79a2ac;
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
    font-size: 19px;
    padding: 0 13%;
    color: #1c2522;
    margin: 17px 0 0;
  }
  &__body {
    position: relative;
    &__title {
      display: block;
      font-family: 'PlayfairDisplay Semi-bold', serif;
      font-weight: 600;
      color: #1c2522;
      font-size: 33px;
      line-height: 1.212em;
      margin: 50px 0 30px;
      padding: 0 20px;
      width: min-content;
    }
  }
  &__bottom {
    width: 100%;
    color: #919a99;
    text-align: center;
    line-height: 1.67em;
    margin-top: 70px;
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
