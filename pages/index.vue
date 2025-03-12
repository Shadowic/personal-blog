<template>
  <div class="index-page">
    <HeaderMobile v-if="navbar" :navbar="navbar" />
    <HeaderIndex v-if="navbar" :navbar="navbar" />
    <Slider :slider="slider.data" class="index__slider" />
    <div class="index__content">
      <div class="content__top">
        <img
          src="imgs/leaves_lg.svg"
          draggable="false"
          width="600"
          height="490"
          class="content__bg-leaves content__bg-leaves__lg"
          :class="animations3"
        />
        <div :class="animations" class="content__icon">
          <img
            :src="index.logo.data.attributes.url"
            draggable="false"
            width="100"
            height="100"
          />
        </div>
        <p
          :class="animations1"
          class="content__subtitle"
          v-html="$t(index.subtitle)"
        />
        <h1
          :class="animations2"
          class="content__title"
          v-html="$t(index.title)"
        />
        <div class="content__descr-block">
          <p
            :class="animations3"
            class="content__description"
            v-html="index.description"
          />
          <img
            src="imgs/leaves_sm.svg"
            draggable="false"
            width="257"
            height="174"
            class="content__bg-leaves content__bg-leaves__sm"
            :class="animations3"
          />
        </div>
        <ScrollDownIcon />
      </div>
      <div :class="animations3" class="content__body">
        <div class="content__body-top">
          <BackgroundWord
            :title="$t(index.feed_title)"
            class="content__body-bgword"
          />
          <p class="content__body-title" v-html="$t(index.feed_subtitle)" />
        </div>
        <div class="index__albums">
          <AlbumIndex
            v-for="(album, indexkey) in filteredAlbums"
            :key="indexkey"
            :tag="$t(album.albumCode)"
            :title="$t(album.title)"
            :btn-text="$t(album.buttonText)"
            :album-code="$t(album.albumCode)"
            :date="$t(album.caption)"
            :page-code="album.pageCode"
            :cover="album.imageMain"
            class="animation-target"
          />
        </div>
      </div>
      <FooterIndex
        v-if="footer"
        :title="footer.title"
        :subtitle="$t(footer.subtitle)"
        :description="$t(footer.description)"
        :links="footer.links"
      />
    </div>
  </div>
</template>

<script>
import index from 'static/index.json'
import navbar from 'static/navbar.json'
import slider from 'static/indexslider.json'
import albums from 'static/albums.json'
import footer from 'static/footer.json'

export default {
  asyncData() {
    const allAlbums = [...albums]

    const filteredAlbums = allAlbums.filter((album) => album.isOnIndex)

    return {
      index,
      navbar,
      slider,
      albums,
      footer,
      filteredAlbums,
    }
  },
  // async asyncData({ $strapi, i18n, params, error }) {
  //   try {
  //     const [indexdata, slider, albums, footerdata] = await Promise.all([
  //       $strapi.$http.$get(`/api/index-page?locale=${i18n.locale}`),
  //       $strapi.$http.$get(`/api/index-sliders?locale=${i18n.locale}`),
  //       $strapi.$http.$get(
  //         `/api/albums?filters[is_on_index_shown]=true&locale=${i18n.locale}`
  //       ),
  //       $strapi.$http.$get(`/api/footer?locale=${i18n.locale}`),
  //     ])
  //     const index = indexdata.data.attributes
  //     const footer = footerdata.data.attributes
  //     return {
  //       index,
  //       slider,
  //       albums,
  //       footer,
  //     }
  //   } catch (error) {
  //     return {
  //       index: {},
  //       slider: [],
  //       albums: [],
  //       footer: {},
  //     }
  //   }
  // },
  data() {
    return {
      animations: '',
      animations1: '',
      animations2: '',
      animations3: '',
    }
  },
  // async fetch() {
  //   try {
  //     const result = await this.$strapi.$http.$get(
  //       `/api/navbar?locale=${this.$i18n.locale}`
  //     )
  //     this.navbar = result.data.attributes
  //   } catch (e) {}
  // },
  watch: {
    '$route.query': '$fetch',
  },
  mounted() {
    this.addAnimationClass()
    this.isAnimated()
  },
  methods: {
    addAnimationClass() {
      this.animations = 'animated__fadeInDown'
      this.animations1 = 'animated__fadeInDown delay1'
      this.animations2 = 'animated__fadeInDown delay2'
      this.animations3 = 'animated__fadeInDown delay3'
    },
    isAnimated() {
      window.onload = () => {
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.75,
        }

        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const animationTarget = entry.target
              animationTarget.style.opacity = '1'
              observer.unobserve(animationTarget)
            }
          })
        }, options)

        const arr = document.querySelectorAll('.animation-target')
        arr.forEach((i) => {
          observer.observe(i)
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
//.animation-target {
//  opacity: 0;
//  transition: opacity 1s ease-in-out;
//}
.index-page {
  display: flex;
  flex-direction: column;
  position: relative;
  @include lg {
    flex-direction: row;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.index__slider {
  height: 100vh;
  height: 100svh;
  opacity: 0;
  @include lg {
    height: 100%;
    flex: 0 1 38.542%;
  }
}
.index__content {
  flex: 1;
  overflow-y: auto;
  display: contents;
  @include lg {
    display: block;
  }
}
.index__albums {
  @include md- {
    margin-top: 48px;
  }
}
.content {
  &__bg-leaves {
    display: none;
    @include lg {
      display: inline-block;
      position: absolute;
    }
    &__lg {
      top: 0;
      right: 0;
    }
    &__sm {
      left: -10vw;
      bottom: -5vw;
    }
  }

  &__top {
    padding: 48px 20px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
    min-height: 100svh;
    overflow-x: hidden;
    position: absolute;
    inset: 0 0 auto;
    @include lg {
      position: relative;
      padding: 10vh 1vw;
    }
  }

  &__icon {
    width: 48px;
    height: auto;
    opacity: 0;
    margin-top: -48px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    @include md {
      width: 56px;
    }
    @include lg {
      width: 4vw;
      margin-top: 0;
    }
  }

  &__subtitle {
    color: $green-dark;
    font-size: 8px;
    font-weight: 600;
    letter-spacing: 0.2em;
    line-height: 1em;
    text-transform: uppercase;
    opacity: 0;
    margin-top: 5px;
    @include md {
      font-size: 10px;
      color: $champagne;
    }
    @include lg {
      font-size: 0.7vw;
      margin-top: 10px;
      color: $green-dark;
    }
  }

  &__title {
    background: url('static/imgs/IMG_0773.webp') center/cover;
    background-color: $herbal;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: $accent-font;
    color: $green-dark;
    line-height: 0.8em;
    word-wrap: break-word;
    font-size: 36px;
    margin-top: 24px;
    opacity: 0;
    max-width: 620px;
    @include md {
      font-size: 48px;
      margin-top: 36px;
    }
    @include lg {
      font-size: 5vw;
      max-width: 44vw;
    }
  }

  &__descr-block {
    margin-top: 18px;
    position: relative;
    @include md {
      margin-top: 28px;
    }
    @include lg {
      margin-top: 7vh;
    }
  }

  &__description {
    font-family: $accent-font;
    font-size: 12px;
    color: $champagne;
    line-height: 1.63em;
    max-width: 360px;
    opacity: 0;
    @include md {
      font-size: 14px;
    }
    @include lg {
      font-size: 1.25vw;
      color: $green-dark;
      max-width: 26vw;
    }
  }

  &__body {
    position: relative;
    opacity: 0;
    &-top {
      display: inline-block;
      position: relative;
    }
    &-bgword {
      font-size: 28px;
      position: absolute;
      top: 16px;
      left: 16px;
      z-index: 0;
      @include md {
        font-size: 32px;
        top: 22px;
        left: 18px;
      }
    }
    &-title {
      display: block;
      font-family: $accent-font;
      font-size: 28px;
      font-weight: 700;
      line-height: 1.2;
      color: $bokara;
      margin: 28px 0 0 28px;
      position: relative;
      z-index: 1;
      @include md {
        font-size: 32px;
        margin: 32px 0 12px 32px;
      }
      @include lg {
        font-size: 2.4vw;
      }
    }
  }
}
</style>
