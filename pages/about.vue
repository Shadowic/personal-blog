<template>
  <div class="about">
    <div
      class="profile-img"
      data-aos="zoom-out-up"
      data-aos-duration="1000"
      data-aos-delay="150"
      :style="{
        backgroundImage: `url(${about.cover.data.attributes.formats.medium.url})`,
      }"
    />
    <div class="info">
      <BackgroundWord :title="about.page_title" />
      <div data-aos="zoom-out-up" data-aos-duration="1000" class="name">
        {{ about.title }}
      </div>
      <div
        data-aos="zoom-out-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        class="caption"
      >
        {{ about.subtitle }}
      </div>
      <div
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

<style lang="scss">
.description {
  p {
    font-size: 15px;
    & + p {
      margin-top: 20px;
    }
  }
}
</style>

<style lang="scss" scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 1300px;
  margin: 0 auto;
  padding: 80px 110px 0;
  line-height: 1.647em;
  color: $dark-cyan;
  @include md {
    padding: 30px 50px 0;
  }
  @include sm {
    padding: 10px 50px 0;
  }
  @include sm- {
    padding: 60px;
    flex-direction: column;
    align-items: center;
  }
  /deep/.background {
    position: absolute;
    color: $ziggurat;
    opacity: 0.1;
    top: -75px;
    @include md {
      top: -10px;
      left: 40px;
    }
    @include sm {
      top: 20px;
      left: 20px;
    }
    @include sm- {
      top: 0;
      right: 0;
      text-align: right;
    }
  }
}
.profile-img {
  border-radius: 50%;
  background: center/cover;
  margin: 90px 60px 0 0;
  flex: 1 1 0;
  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }
  @include sm- {
    width: 100%;
    max-width: 350px;
    margin: 30px 0 0;
  }
}
.info {
  flex: 1.3 1 0;
  position: relative;
}
.name {
  font-family: 'Caveat', cursive;
  font-weight: 900;
  color: $bokara;
  opacity: 0.85;
  font-size: 50px;
  line-height: 1.212em;
  margin: 25px 0 5px;
  letter-spacing: 0.1em;
}
.caption {
  font-size: 10px;
  color: $ocean;
  letter-spacing: 0.2em;
  line-height: 1em;
  text-transform: uppercase;
  margin-bottom: 45px;
}
.description {
  margin-bottom: 60px;
}
</style>
