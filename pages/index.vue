<template>
  <div class="container">
    <Slider :images="images" class="index__slider" />
    <div class="content">
      <div class="content__top">
        <div class="content__icon" />
        <div class="content__subtitle">{{ $t('welcome') }}</div>
        <h1 class="content__title" v-html="$t('title')" />
        <p class="content__description">
          {{ $t('description') }}
        </p>
      </div>
      <div class="content__body">
        <BackgroundWord :title="$t('latest')" />
        <div class="content__body__title">{{ $t('featured') }}</div>
        <AlbumsList :is-shown-on-index="true" class="index__albums" />
      </div>
      <Footer />
    </div>
  </div>
</template>

<i18n>
{
  "ru": {
    "welcome": "личный блог",
    "title": "Путешествия, планы, <span>мечты</span>, и немного керамики",
    "description": "Добро пожаловать",
    "latest": "Последнее",
    "featured": "Последние альбомы"
  },
  "en": {
    "welcome": "welcome to",
    "title": "Travellings, plans, <span>dreams</span> and some ceramic stuff",
    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'",
    "latest": "Latest",
    "featured": "Latest albums"
  }
}
</i18n>

<script>
export default {
  layout: 'index',
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

    // -----------
    /*
    fetch(process.env.baseUrl + `/data/sliderContent.json`)
      .then(function (response) {
        if (response.status !== 200) {
          this.error = 'Не удалось получить картинки'
        }

        return response.json()
          .then(function(json) {
            this.images = json
          })
      })
     */
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
    @include sm- {
      position: relative;
      left: 0;
      width: 100%;
      height: 100vh;
    }
    /deep/.arrows,
    /deep/.slider__caption {
      @include sm- {
        display: none;
      }
    }
  }

  /deep/ .index__albums {
    display: flex;
    flex-wrap: wrap;

    .album {
      width: 50%;
      flex-direction: column;
      padding: 0 20px;
      margin: 0 0 120px;

      &:nth-child(2n) {
        margin-top: -95px;
        @include sm- {
          margin-top: 0;
        }
      }

      &__outline {
        position: absolute;
        background-color: #fff;
        padding: 20px;
        bottom: -10%;
        width: calc(100% - 80px);
        z-index: 1;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);

        &-top {
          display: none;
        }

        @include sm {
          bottom: -50%;
        }
      }

      &__description {
        font-size: 1.4vw;
        @include sm {
          font-size: 14px;
        }
        @include xs {
          font-size: 22px;
        }
        @include xs- {
          font-size: 16px;
        }
      }

      &__cover {
        width: 100%;
      }

      .btn {
        display: none;
      }
      @include sm {
        height: 200px;
      }
      @include sm- {
        height: 300px;
        width: 100%;
        margin: 0 0 80px;
      }
    }
  }
  @include sm- {
    flex-direction: column;
  }
  /deep/.background {
    position: absolute;
    top: -110px;
    left: 10px;
    @include sm {
      top: -75px;
    }
    @include xs {
      top: -45px;
    }
    @include xs- {
      top: -25px;
    }
  }
}

.content {
  padding-left: calc(40% + 80px);

  &__top {
    background: url('../assets/imgs/index-top2.jpg') center / cover;
    padding: 5% 2% 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    @include sm- {
      background: transparent;
      height: 100vh;
      padding: 0 2%;
    }
  }

  &__icon {
    width: 95px;
    height: 95px;
    background: url('~assets/imgs/logo.png') center/cover;
    transform: translateY(15px);
    @include sm {
      width: 60px;
      height: 60px;
    }
    @include xs- {
      width: 60px;
      height: 60px;
    }
  }

  &__subtitle {
    margin-top: 37px;
    color: #3b4d55;
    font-size: 0.9vw;
    font-weight: 600;
    letter-spacing: 0.2em;
    line-height: 1em;
    text-transform: uppercase;
    @include sm- {
      font-size: 10px;
    }
  }

  &__title {
    background: url('static/imgs/IMG_0141.JPG') center/cover;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'PlayfairDisplay Semi-bold', serif;
    color: #1c2522;
    font-size: 4.2vw;
    line-height: 1.133em;
    margin: 25px 0;
    word-wrap: break-word;

    /deep/ span {
      font-style: italic;
    }
    @include xs {
      font-size: 9vw;
      line-height: 1.2;
      margin: 20px 0;
    }
    @include xs- {
      font-size: 10vw;
    }
  }

  &__description {
    font-family: 'Dosis', sans-serif;
    font-size: 1.2vw;
    padding: 0 13%;
    color: #1c2522;
    margin: 17px 0 0;
    line-height: 1.63em;
    @include md {
      font-size: 16px;
    }
    @include sm {
      font-size: 14px;
    }
    @include sm- {
      font-size: 16px;
    }
  }

  &__body {
    position: relative;

    &__title {
      display: block;
      font-family: 'PlayfairDisplay Semi-bold', serif;
      font-weight: 600;
      color: #1c2522;
      font-size: 2.4vw;
      line-height: 1.212em;
      margin: 70px 0 30px;
      padding: 0 55px;
      width: min-content;
      @include sm {
        font-size: 26px;
        padding: 0 40px;
      }
      @include sm- {
        margin: 30px 0;
        padding: 0 30px;
        width: max-content;
        font-size: 32px;
      }
      @include xs- {
        font-size: 22px;
      }
    }

    @include sm {
      margin-top: -10px;
    }
  }
  @include sm- {
    position: absolute;
    top: 0;
    width: 100%;
    padding: 0;
  }
}
</style>
