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
            class="content__bg-leaves content__bg-leaves__sm"
            :class="animations3"
          />
        </div>
        <ScrollDownIcon />
      </div>
      <div :class="animations3" class="content__body">
        <div class="content__body-top">
          <BackgroundWord
            :title="index.feed_title"
            class="content__body-bgword"
          />
          <p class="content__body-title" v-html="index.feed_subtitle" />
        </div>
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
      <FooterIndex v-if="footer" :footer="footer" />
    </div>
  </div>
</template>

<script>
export default {
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
            url: '/',
            title: 'main page',
          },
          {
            url: '/cakes',
            title: 'cakes',
          },
          {
            url: '/ceramic-album',
            title: 'ceramic album',
          },
          {
            url: '/test1',
            title: 'test1',
          },
          {
            url: '/test2',
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
        subtitle: 'Welcome!',
        caption: 'visit',
        caption2: 'please',
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
    background: url('static/imgs/IMG_0773.jpg') center/cover;
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
