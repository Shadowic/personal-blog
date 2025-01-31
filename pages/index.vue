<template>
  <div class="index-page">
    <HeaderMobile v-if="navbar" :navbar="navbar" class="header__mobile" />
    <HeaderIndex v-if="navbar" :navbar="navbar" class="header__desktop" />
    <Slider :slider="slider.data" class="index__slider" />
    <div class="index__content">
      <div class="content__top">
        <img
          src="imgs/leaves_lg.svg"
          draggable="false"
          width="600"
          height="490"
          class="content__bg-leaves bg-leaves__lg"
          :class="animations3"
        />
        <div
          :class="animations"
          class="content__icon"
          :style="{ backgroundImage: `url(${index.logo.data.attributes.url})` }"
        />
        <p
          :class="animations1"
          class="content__subtitle"
          v-html="index.welcome"
        />
        <h1 :class="animations2" class="content__title" v-html="index.title" />
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
            class="content__bg-leaves bg-leaves__sm"
            :class="animations3"
          />
        </div>
        <ScrollDownIcon />
      </div>
      <div :class="animations3" class="content__body">
        <BackgroundWord :title="index.feed_title" />
        <p class="content__body-title" v-html="index.feed_subtitle" />
        <div class="index__albums">
          <AlbumIndex
            v-for="(album, index) in albums.data"
            :key="index"
            :album="album"
            :code="album.attributes.category.data.attributes.code"
            class="animation-target"
          />
        </div>
      </div>
      <Footer v-if="footer" :footer="footer" />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'index',
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
      navbar: {
        Menu: [
          {
            url: '/cakes',
            title: 'cakes',
          },
          {
            url: '/common-album',
            title: 'common album',
          },
          {
            url: '/test1',
            title: 'test1',
          },
          {
            url: 'test2',
            title: 'test2',
          },
          {
            url: '/about',
            title: 'about',
          },
        ],
        logo: {
          data: {
            attributes: {
              url: '/imgs/logo.png',
            },
          },
        },
        subtitle: 'Personal blog',
        caption: 'made',
        caption2: 'with 404',
      },
      index: {
        logo: {
          data: {
            attributes: {
              url: '/imgs/logo.png',
            },
          },
        },
        welcome: 'Personal blog',
        title: 'Путешествия, о&nbsp;которых хочется рассказать',
        description:
          'Добро пожаловать! Welcome! ¡Bienvenidos! Herzlich&nbsp;willkommen! Bienvenue! Benvenuti! Bem-vindos!',
        feed_title: 'Maecenas sit',
        feed_subtitle: 'Amet semper tortor',
      },
      albums: {
        data: [
          {
            attributes: {
              title: 'Керамика, созданная с душой',
              code: 'ceramicon',
              date: 'may 2020',
              category: {
                data: {
                  attributes: {
                    code: 'ceramicon',
                  },
                },
              },
              cover: {
                data: {
                  attributes: {
                    formats: {
                      medium: {
                        url: '/imgs/IMG_9408.jpg',
                      },
                    },
                  },
                },
              },
            },
          },
          {
            attributes: {
              title: 'Натюрморты, пока домашние всё не сожрали',
              code: 'cakes',
              date: 'feb 2017',
              category: {
                data: {
                  attributes: {
                    code: 'cakes',
                  },
                },
              },
              cover: {
                data: {
                  attributes: {
                    formats: {
                      medium: {
                        url: '/imgs/IMG_9484.jpg',
                      },
                    },
                  },
                },
              },
            },
          },
          {
            attributes: {
              title: 'Фото еды, которые типа как в Пинтерест',
              code: 'foooood',
              date: 'june 2024',
              category: {
                data: {
                  attributes: {
                    code: 'foooood',
                  },
                },
              },
              cover: {
                data: {
                  attributes: {
                    formats: {
                      medium: {
                        url: '/imgs/IMG_9542.jpg',
                      },
                    },
                  },
                },
              },
            },
          },
        ],
      },
      slider: {
        data: [
          {
            attributes: {
              title: 'eat',
              description:
                'Nulla id enim odio. Aliquam eu dignissim tortor, semper sagittis lorem. Etiam urna enim, tristique eu neque sed, volutpat volutpat sem. Vestibulum ut mauris eu neque ultricies finibus.',
              cover: {
                data: {
                  attributes: {
                    url: '/imgs/IMG_9408.jpg',
                  },
                },
              },
            },
          },
          {
            attributes: {
              title: 'pray',
              description:
                'Morbi tempus at metus ut pellentesque. Aenean tellus nulla, condimentum eu mollis non, dictum in arcu. In eget turpis et felis eleifend viverra vel ut lorem. In elementum libero ante, et euismod nunc porttitor eget. ',
              cover: {
                data: {
                  attributes: {
                    url: '/imgs/IMG_9484.jpg',
                  },
                },
              },
            },
          },
          {
            attributes: {
              title: 'live',
              description:
                'Vivamus vitae ullamcorper sem. Aliquam diam est, dapibus in mi non, scelerisque fermentum augue. Proin volutpat purus turpis, in pretium sem commodo ac.',
              cover: {
                data: {
                  attributes: {
                    url: '/imgs/IMG_9542.jpg',
                  },
                },
              },
            },
          },
        ],
      },
      footer: {
        title: 'Nunc ut volutpat purus',
        subtitle: 'Pellentesque ac commodo tellus',
        description:
          'uspendisse dolor ligula, semper in diam vitae, interdum sagittis tortor. Mauris id gravida enim. Pellentesque eget turpis placerat risus consequat varius malesuada a nulla.',
        links: [
          {
            is_shown: true,
            id: 0,
            url: '/',
            title: 'coffee',
            icon: {
              data: {
                attributes: {
                  url: '/svgs/coffee-cup.svg',
                },
              },
            },
          },
          {
            is_shown: true,
            id: 1,
            url: '/',
            title: 'github',
            icon: {
              data: {
                attributes: {
                  url: '/svgs/github.svg',
                },
              },
            },
          },
          {
            is_shown: false,
            id: 2,
            url: '/',
            title: 'loupe',
            icon: {
              data: {
                attributes: {
                  url: '/svgs/loupe.svg',
                },
              },
            },
          },
          {
            is_shown: true,
            id: 3,
            url: '/',
            title: 'insta',
            icon: {
              data: {
                attributes: {
                  url: '/svgs/pinterest.svg',
                },
              },
            },
          },
          {
            is_shown: true,
            id: 4,
            url: '/',
            title: 'insta',
            icon: {
              data: {
                attributes: {
                  url: '/svgs/telegram.svg',
                },
              },
            },
          },
        ],
      },
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
.animation-target {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}
.header {
  &__mobile {
    display: none;
    @include sm- {
      display: block;
    }
  }
  &__desktop {
    display: block;
    flex-shrink: 0;
    @include sm- {
      display: none;
    }
  }
}
.index-page {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;

  @include sm- {
    position: relative;
    flex-direction: column;
  }
}

.index__slider {
  opacity: 0;
  flex: 0 1 38.542%;
  @include sm- {
    position: relative;
    left: 0;
    width: 100%;
    height: 100vh;
  }
  .arrows,
  .slider__caption {
    @include sm- {
      display: none;
    }
  }
}

.background {
  position: absolute;
  top: -110px;
  left: 10px;
  @include md {
    top: -65px;
  }
  @include md- {
    top: -45px;
  }
  @include xs- {
    top: -35px;
  }
}

.index__content {
  flex: 1;
  overflow-y: auto;
}

.content {
  &__bg-leaves {
    display: none;
    @include -sm {
      display: inline-block;
      position: absolute;
      height: auto;
      &.bg-leaves__lg {
        width: 30vw;
        top: 0;
        right: 0;
      }
      &.bg-leaves__sm {
        width: 16vw;
        top: 0;
        left: 0;
      }
    }
  }

  &__top {
    padding: 10vh 1vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
    @include sm- {
      padding: calc(60px + 10%) 2% 60px;
    }
  }

  &__icon {
    flex: 0 0 auto;
    display: block;
    width: 5vw;
    padding-top: 5vw;
    background: center/contain;
    opacity: 0;
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
    margin-top: 12px;
    color: $green-dark;
    font-size: 0.77vw;
    font-weight: 600;
    letter-spacing: 0.2em;
    line-height: 1em;
    text-transform: uppercase;
    opacity: 0;
    @include sm- {
      font-size: 10px;
    }
  }

  &__title {
    background: url('static/imgs/IMG_0773.jpg') center/cover;
    background-color: $herbal;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: $accent-font;
    color: $green-dark;
    font-size: 6vw;
    line-height: 0.8em;
    margin: 25px 0;
    word-wrap: break-word;
    padding-bottom: 30px;
    opacity: 0;

    span {
      font-style: italic;
    }
    @include xs {
      font-size: 9vw;
      line-height: 1.2;
      margin: 20px 0;
    }
    @include xs- {
      font-size: 18vw;
      background-color: #fdf8ef;
    }
  }

  &__descr-block {
    margin-top: 7vh;
    position: relative;
  }

  &__description {
    font-family: $accent-font;
    font-size: 1.5vw;
    padding: 0 13%;
    color: $green-dark;
    line-height: 1.63em;
    opacity: 0;
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
    opacity: 0;

    &-title {
      display: block;
      font-family: $accent-font;
      font-weight: 700;
      color: $green-dark;
      font-size: 2.4vw;
      line-height: 1.2;
      margin: 60px 0 40px;
      padding: 0 60px;
      position: relative;
      z-index: 1;
      @include md {
        margin: 40px 0 30px;
      }
      @include sm {
        font-size: 26px;
        margin: 30px 0;
        padding: 0 40px;
      }
      @include sm- {
        margin: 60px 0 30px;
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
