<template>
  <div class="container">
    <Slider :slider="slider.data" class="index__slider" />
    <div class="content">
      <div class="content__top">
        <div
          :class="animations"
          class="content__icon"
          :style="{ backgroundImage: `url(${index.logo.data.attributes.url})` }"
        />
        <div :class="animations1" class="content__subtitle">
          {{ index.welcome }}
        </div>
        <h1 :class="animations2" class="content__title" v-html="index.title" />
        <p :class="animations3" class="content__description">
          {{ index.description }}
        </p>
        <ScrollDownIcon />
      </div>
      <div :class="animations3" class="content__body">
        <BackgroundWord :title="index.feed_title" />
        <div class="content__body__title">{{ index.feed_subtitle }}</div>
        <div class="index__albums">
          <!--          <AlbumIndex-->
          <!--            v-for="(album, index) in albums.data"-->
          <!--            :key="index"-->
          <!--            :album="album"-->
          <!--            :code="album.attributes.category.data.attributes.code"-->
          <!--            class="animation-target"-->
          <!--          />-->
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
      index: {
        logo: {
          data: {
            attributes: {
              url: '/imgs/IMG_9408.jpg',
            },
          },
        },
        welcome: 'Ut fringilla,',
        title: 'Morbi eget magna ipsum.',
        description:
          'Morbi finibus vulputate lorem, ut iaculis tortor egestas sed. Etiam volutpat vitae ligula dignissim mattis. Etiam sed quam in turpis maximus venenatis id eget lectus. Suspendisse potenti.',
        feed_title: 'Maecenas sit',
        feed_subtitle: 'Amet semper tortor',
      },
      albums: {
        data: {
          attributes: {
            title: 'Cakes',
            code: 'cakes',
            // blockClass: '1',
            // albumType: '1',
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
                      url: '/imgs/IMG_9408.jpg',
                    },
                  },
                },
              },
            },
          },
        },
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
.container {
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;

  .index__slider {
    left: 80px;
    width: 40%;
    opacity: 0;
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

  @include sm- {
    flex-direction: column;
  }
  /deep/.background {
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
}

.content {
  padding-left: calc(40% + 80px);

  &__top {
    padding: 10vh 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    overflow-x: hidden;
    @include sm- {
      padding: calc(60px + 10%) 2% 60px;
    }
  }

  &__icon {
    width: 95px;
    height: 95px;
    background: center/cover;
    transform: translateY(15px);
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
    margin-top: 22px;
    color: $ocean;
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
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Caveat', cursive;
    color: $green-dark;
    font-size: 8.4vw;
    line-height: 0.8em;
    margin: 25px 0;
    word-wrap: break-word;
    padding-bottom: 30px;
    opacity: 0;

    /deep/ span {
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

  &__description {
    font-family: 'Caveat', cursive;
    font-size: 1.5vw;
    padding: 0 13%;
    color: $green-dark;
    margin-top: 7%;
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

    &__title {
      display: block;
      font-family: 'Caveat', cursive;
      font-weight: 700;
      color: $green-dark;
      font-size: 2.4vw;
      line-height: 1.212em;
      margin: 60px 0 40px;
      padding: 0 60px;
      width: min-content;
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
