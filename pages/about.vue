<template>
  <div class="container">
    <div class="about">
      <div
        class="about__cover"
        data-aos="zoom-out-up"
        data-aos-duration="1000"
        data-aos-delay="150"
      >
        <img
          :src="about.cover.data.attributes.formats.medium.url"
          alt="photo"
          width="360"
          height="240"
        />
      </div>
      <div class="about__title">
        <BackgroundWord :title="about.page_title" class="about__title-bgword" />
        <p data-aos="zoom-out-up" data-aos-duration="1000" class="title">
          {{ about.title }}
        </p>
      </div>
      <p
        data-aos="zoom-out-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        class="subtitle"
      >
        {{ about.subtitle }}
      </p>
      <p
        data-aos="zoom-out-up"
        data-aos-duration="1000"
        data-aos-delay="110"
        class="description"
        v-html="about.description"
      />
    </div>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  layout: 'page',
  transition: {
    name: 'change-route',
    mode: 'out-in',
  },
  data() {
    return {
      about: {
        page_title: "It's me, Stan",
        title: 'Lorem Ipsum',
        subtitle:
          'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed erat fringilla mi gravida lacinia et ac est. Nullam sed diam scelerisque, dapibus nulla sit amet, pulvinar mi. Vestibulum ultricies lacinia fermentum. Nam et felis eu risus pretium interdum non non diam. Mauris sollicitudin nunc imperdiet, viverra augue non, molestie elit. Proin maximus pulvinar mauris, vel vestibulum nulla. Donec neque turpis, congue eget mi quis, gravida porttitor dui. Sed feugiat scelerisque facilisis. Vestibulum bibendum nibh vitae magna pretium, sed consectetur mauris volutpat.\n' +
          '\n' +
          'Nulla id enim odio. Aliquam eu dignissim tortor, semper sagittis lorem. Etiam urna enim, tristique eu neque sed, volutpat volutpat sem. Vestibulum ut mauris eu neque ultricies finibus. Morbi tempus at metus ut pellentesque. Aenean tellus nulla, condimentum eu mollis non, dictum in arcu. In eget turpis et felis eleifend viverra vel ut lorem. In elementum libero ante, et euismod nunc porttitor eget. Vivamus vitae ullamcorper sem. Aliquam diam est, dapibus in mi non, scelerisque fermentum augue. Proin volutpat purus turpis, in pretium sem commodo ac. Praesent at sagittis urna. Morbi vel dignissim erat. Mauris ullamcorper sed nisi sed porttitor. Mauris nulla felis, tincidunt vel tristique at, euismod vel sapien. Quisque vitae tristique dui.',
        cover: {
          data: {
            attributes: {
              formats: {
                medium: {
                  url: '/imgs/IMG_0773.webp',
                },
              },
            },
          },
        },
      },
    }
  },
  mounted() {
    AOS.init()
  },
  // async asyncData({ $strapi, i18n }) {
  //   try {
  //     const result = await $strapi.$http.$get(
  //       `/api/about-page?locale=${i18n.locale}`
  //     )
  //     const about = result.data.attributes
  //     return {
  //       about,
  //     }
  //   } catch (e) {
  //     console.log(e)
  //     return {}
  //   }
  // },
}
</script>

<style lang="scss" scoped>
.about {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-areas:
    'photo'
    'header'
    'subtitle'
    'description';
  max-width: 1280px;
  margin: 0 auto;
  @include md {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      '. header'
      'photo subtitle'
      'photo description';
    grid-gap: 0 20px;
  }
  @include lg {
    grid-gap: 0 52px;
  }
}
.about__cover {
  grid-area: photo;
  border-radius: 50%;
  overflow: hidden;
  aspect-ratio: 1/1;
  justify-self: center;
  max-width: 420px;
  @include md {
    max-width: 100%;
  }
  @include lg {
    max-width: 540px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.about__title {
  grid-area: header;
  position: relative;
  margin: 24px 0 0 12px;
  .background-word {
    position: absolute;
    font-size: 28px;
    top: -16px;
    left: -16px;
    z-index: 0;
    @include md {
      font-size: 32px;
      top: 22px;
      left: 18px;
    }
  }
}
.title {
  font-family: $accent-font;
  color: $bokara;
  opacity: 0.85;
  font-size: 26px;
  line-height: 1.4em;
  letter-spacing: 0.025em;
  @include md {
    font-size: 36px;
  }
  @include lg {
    font-size: 48px;
  }
}
.subtitle {
  grid-area: subtitle;
  color: $ocean;
  font-size: 12px;
  letter-spacing: 0.025em;
  line-height: 1.4em;
  text-transform: uppercase;
  margin-top: 8px;
  @include md {
    font-size: 14px;
    margin-top: 14px;
  }
  @include lg {
    font-size: 16px;
    max-width: 480px;
  }
}
.description {
  grid-area: description;
  text-indent: 2vw;
  line-height: 1.4;
  font-size: 14px;
  margin-top: 24px;
  @include md {
    font-size: 16px;
  }
  @include lg {
    font-size: 18px;
  }
}
</style>
