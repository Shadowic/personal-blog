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
        <p data-aos="zoom-out-up" data-aos-duration="1000" class="title">
          {{ about.title }}
        </p>
        <BackgroundWord :title="about.page_title" class="background-word" />
        <p
          data-aos="zoom-out-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          class="subtitle"
        >
          {{ about.subtitle }}
        </p>
      </div>
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
                  url: '/imgs/IMG_0773.jpg',
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
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  grid-template-areas:
    'photo header'
    'photo description';
  max-width: 1280px;
  margin: 0 auto;
  .background-word {
    position: absolute;
    color: $herbal;
    opacity: 0.08;
    top: -15px;
    left: 5px;
  }
}
.about__cover {
  grid-area: photo;
  border-radius: 50%;
  overflow: hidden;
  aspect-ratio: 1/1;
  max-width: 32vw;
  justify-self: center;
  margin-top: 3.5vw;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.about__title {
  grid-area: header;
  position: relative;
}
.title {
  font-family: $accent-font;
  font-weight: 900;
  color: $bokara;
  opacity: 0.85;
  font-size: 50px;
  line-height: 1.212em;
  letter-spacing: 0.1em;
}
.subtitle {
  grid-area: header;
  font-size: 0.75vw;
  color: $ocean;
  letter-spacing: 0.2em;
  line-height: 1.4em;
  text-transform: uppercase;
  margin-top: 4px;
  max-width: 28vw;
}
.description {
  grid-area: description;
  line-height: 1.4;
  text-indent: 2vw;
}
</style>
