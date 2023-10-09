<template>
  <div class="test1">
    <div class="hero">
      <div data-aos="fade-up" class="hero__background">
        <img :src="heroData.cover" alt="image" draggable="false" />
      </div>
      <div class="hero__content-wrap">
        <div data-aos="fade-up" data-aos-delay="300" class="hero__content">
          <div class="hero__blur" />
          <h1 class="hero__title">{{ heroData.title }}</h1>
          <p class="hero__text">
            {{ heroData.text }}
          </p>
        </div>
      </div>
    </div>
    <div class="test1__container">
      <div class="main">
        <div v-for="(item, i) in mainData" :key="i" class="main__item">
          <div data-aos="fade-up-right" class="main__item-cover">
            <img :src="item.cover" alt="image" draggable="false" />
          </div>
          <div
            data-aos="fade-up-left"
            data-aos-delay="300"
            class="main__item-caption"
          >
            <h2 class="main__item-title">{{ item.title }}</h2>
            <p class="main__item-text">{{ item.text }}</p>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" class="line-break" />
      <div data-aos="flip-down" class="citate">
        <p class="citate__text">
          {{ citateData.text }}
        </p>
        <h2 class="citate__title">{{ citateData.author }}</h2>
      </div>
      <div data-aos="zoom-in" class="line-break" />
      <div class="gallery">
        <div
          v-for="(item, i) in galleryData"
          :key="i"
          data-aos="zoom-in"
          class="gallery-item"
        >
          <img :src="item" alt="image" draggable="false" />
        </div>
      </div>
      <div data-aos="zoom-in" class="line-break" />
    </div>
    <div class="gusset">
      <div data-aos="zoom-in-up" class="gusset__background">
        <img :src="gussetData.coverBack" alt="image" draggable="false" />
      </div>
      <div class="gusset__main container">
        <div data-aos="zoom-in-up" class="gusset__cover">
          <img :src="gussetData.coverForw" alt="image" draggable="false" />
        </div>
        <div data-aos="zoom-in-up" class="gusset__caption">
          <p class="gusset__caption-subtitle">{{ gussetData.subtitle }}</p>
          <h2 class="gusset__caption-title">{{ gussetData.title }}</h2>
          <p class="gusset__caption-text">
            {{ gussetData.text }}
          </p>
        </div>
      </div>
    </div>
    <div class="test1__container additional">
      <h2 data-aos="flip-down" class="additional__title">
        {{ additionalData.title }}
      </h2>
      <p data-aos="flip-down" class="additional__text">
        {{ additionalData.text }}
      </p>
    </div>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  name: 'Test1',
  data() {
    return {
      heroData: {
        cover: '/imgs/IMG_9542.jpg',
        title: 'Maecenas est nisl',
        text: 'Duis id augue a ante dignissim accumsan vitae vel nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      },
      mainData: [
        {
          id: 1,
          cover: '/imgs/IMG_9408.jpg',
          title: 'Maecenas est nisl',
          text: 'Duis id augue a ante dignissim accumsan vitae vel nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        },
        {
          id: 2,
          cover: '/imgs/IMG_9408.jpg',
          title: 'Maecenas est nisl',
          text: 'Duis id augue a ante dignissim accumsan vitae vel nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        },
        {
          id: 3,
          cover: '/imgs/IMG_9408.jpg',
          title: 'Maecenas est nisl',
          text: 'Duis id augue a ante dignissim accumsan vitae vel nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        },
      ],
      citateData: {
        text: '"Duis id augue a ante dignissim accumsan vitae vel nisi. Orci varius natoque penatibus et magnis dis parturient".',
        author: 'Maecenas est nisl',
      },
      galleryData: [
        '/imgs/IMG_9542.jpg',
        '/imgs/IMG_9547.jpg',
        '/imgs/IMG_9408.jpg',
        '/imgs/IMG_9484.jpg',
        '/imgs/IMG_9484.jpg',
        '/imgs/IMG_9408.jpg',
        '/imgs/IMG_9547.jpg',
        '/imgs/IMG_9542.jpg',
      ],
      gussetData: {
        coverBack: '/imgs/IMG_9542.jpg',
        coverForw: '/imgs/IMG_9408.jpg',
        subtitle: 'aptent taciti sociosqu',
        title: 'Class aptent taciti sociosqu',
        text: 'Maecenas id rhoncus velit. Nulla viverra urna eget ipsum cursus, sed interdum nisl facilisis. Etiam porttitor orci leo, ut commodo justo efficitur sed. Aliquam erat volutpat. Aenean mi sapien, luctus varius viverra sed, mollis ac magna.',
      },
      additionalData: {
        title: 'Class aptent taciti sociosqu',
        text: 'Maecenas id rhoncus velit. Nulla viverra urna eget ipsum cursus, sed interdum nisl facilisis. Etiam porttitor orci leo, ut commodo justo efficitur sed. Aliquam erat volutpat. Aenean mi sapien, luctus varius viverra sed, mollis ac magna.',
      },
    }
  },
  mounted() {
    AOS.init()
  },
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.test1 {
  display: flex;
  flex-direction: column;
  &__container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto 60px;
    padding: 0 20px;
  }
}
.hero {
  width: 100%;
  height: 75vh;
  position: relative;
  @include sm- {
    height: 90vh;
  }
  &__background {
    width: 100%;
    height: 100%;
  }
  //var1 centered
  //&__content {
  //  width: 100%;
  //  max-width: 640px;
  //  position: absolute;
  //  z-index: 10;
  //  color: #fdf8ef;
  //  left: 0;
  //  right: 0;
  //  top: 50%;
  //  transform: translateY(-50%);
  //  margin: 0 auto;
  //  text-align: center;
  //  padding: 0 20px;
  //}
  //&__title {
  //  font-size: 58px;
  //  text-transform: uppercase;
  //  @include sm- {
  //    font-size: 46px;
  //  }
  //}
  //&__text {
  //  font-size: 20px;
  //  line-height: 1.35;
  //  margin-top: 20px;
  //  @include sm- {
  //    font-size: 18px;
  //    margin-top: 18px;
  //  }
  //}
  //var2 with blur
  &__content-wrap {
    width: 100%;
    max-width: 1200px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 50px;
    margin: 0 auto;
    padding: 0 40px;
    z-index: 10;
  }
  &__content {
    display: flex;
    align-items: center;
    position: relative;
    gap: 50px;
    padding: 30px 20px;
    color: #fdf8ef;
    @include sm- {
      flex-direction: column;
      gap: 25px;
    }
    @include xs- {
      gap: 20px;
    }
  }
  &__title {
    font-size: 64px;
    flex: 1 0 auto;
    z-index: 10;
    @include lg- {
      font-size: 56px;
    }
    @include md- {
      font-size: 36px;
    }
    @include xs- {
      font-size: 28px;
    }
  }
  &__text {
    font-size: 20px;
    line-height: 1.35;
    max-width: 45%;
    z-index: 10;
    @include md- {
      font-size: 18px;
    }
    @include sm- {
      max-width: unset;
      text-align: center;
    }
    @include xs- {
      font-size: 16px;
    }
  }
  &__blur {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    z-index: 0;
    border-radius: 20px;
  }
}
.main {
  display: flex;
  flex-direction: column;
  gap: 120px;
  margin-top: 120px;
  padding-bottom: 60px;
  @include md- {
    gap: 80px;
    margin-top: 80px;
    padding-bottom: 30px;
  }
  @include xs- {
    gap: 40px;
    margin-top: 40px;
  }
  &__item-caption {
    background-color: #fdf8ef;
    position: relative;
    max-width: 50%;
    margin-left: -50px;
    z-index: 5;
    padding: 50px 40px;
    border-radius: 16px;
    @include md- {
      padding: 40px 30px;
    }
    @include sm- {
      max-width: 350px;
      margin-left: 0;
      margin-top: -50px;
    }
    @include xs- {
      padding: 35px 20px;
    }
  }
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    @include -sm {
      &:nth-child(even) {
        flex-direction: row-reverse;
        .main__item-caption {
          margin-left: 0;
          margin-right: -50px;
        }
      }
    }
    @include sm- {
      flex-direction: column;
    }
  }
  &__item-cover {
    width: 500px;
    height: 500px;
    background-color: #f7e0bc;
    position: relative;
    z-index: 0;
    @include lg- {
      width: 400px;
      height: 400px;
    }
    @include sm- {
      width: 100%;
      max-width: 400px;
    }
    @include xs- {
      height: 300px;
    }
  }
  &__item-title {
    font-size: 28px;
    line-height: 1;
    text-transform: uppercase;
    @include md- {
      font-size: 24px;
    }
    @include xs- {
      font-size: 20px;
    }
  }
  &__item-text {
    font-size: 18px;
    line-height: 1.8;
    margin-top: 20px;
    @include md- {
      font-size: 16px;
      margin-top: 16px;
    }
    @include xs- {
      font-size: 14px;
    }
  }
}
.line-break {
  width: 150px;
  height: 2px;
  background-color: #2a2725;
  margin: 60px auto 0;
  @include xs- {
    margin: 30px auto 0;
  }
}
.citate {
  text-align: center;
  margin-top: 60px;
  @include xs- {
    margin-top: 30px;
  }
  &__text {
    font-size: 20px;
    line-height: 1;
  }
  &__title {
    font-size: 24px;
    line-height: 1;
    font-style: italic;
    margin-top: 30px;
  }
}
.gallery {
  display: grid;
  grid-template-columns: repeat(34, auto);
  grid-template-rows: repeat(4, 150px);
  grid-auto-flow: row dense;
  gap: 10px;
  margin-top: 120px;
  padding-bottom: 30px;
  @include xs- {
    margin-top: 60px;
    gap: 5px;
  }
  &-item {
    min-height: 50px;
    &:nth-child(1) {
      grid-column: span 15;
      grid-row: span 2;
      @include sm- {
        grid-column: span 26;
        grid-row: span 1;
      }
    }
    &:nth-child(2) {
      grid-column: span 5;
      grid-row: span 2;
      @include sm- {
        grid-column: span 8;
        grid-row: span 1;
      }
    }
    &:nth-child(3) {
      grid-column: span 9;
      grid-row: span 4;
      @include sm- {
        grid-column: span 24;
        grid-row: span 1;
      }
    }
    &:nth-child(4) {
      grid-column: span 5;
      grid-row: span 1;
      @include sm- {
        grid-column: span 10;
        grid-row: span 1;
      }
    }
    &:nth-child(5) {
      grid-column: span 12;
      grid-row: span 2;
      @include sm- {
        grid-column: span 14;
        grid-row: span 1;
      }
    }
    &:nth-child(6) {
      grid-column: span 8;
      grid-row: span 2;
      @include sm- {
        grid-column: span 20;
        grid-row: span 3;
      }
    }
    &:nth-child(7) {
      grid-column: span 5;
      grid-row: span 2;
      @include sm- {
        grid-column: span 14;
        grid-row: span 1;
      }
    }
    &:nth-child(8) {
      grid-column: span 5;
      grid-row: span 1;
      @include sm- {
        grid-column: span 14;
        grid-row: span 1;
      }
    }
  }
}
.gusset {
  margin-top: 30px;
  &__background {
    width: 100%;
    height: 50vh;
  }
  &__main {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -400px;
    padding: 0 20px;
    @include lg- {
      margin-top: -300px;
    }
    @include md- {
      margin-top: -200px;
    }
    @include sm- {
      margin-top: -100px;
    }
    @include xs- {
      flex-direction: column-reverse;
      padding: 0;
    }
  }
  &__cover {
    width: 600px;
    height: 600px;
    flex-shrink: 0;
    @include lg- {
      width: 500px;
      height: 500px;
    }
    @include md- {
      width: 350px;
      height: 350px;
    }
    @include sm- {
      width: 280px;
      height: 280px;
    }
    @include xs- {
      width: 100%;
      height: 300px;
    }
  }
  &__caption {
    display: flex;
    flex-direction: column;
    padding: 50px 40px 40px;
    background-color: #fdf8ef;
    margin-left: -50px;
    max-width: 500px;
    gap: 25px;
    @include md- {
      padding: 40px 30px 30px;
      max-width: 400px;
      gap: 16px;
    }
    @include sm- {
      padding: 30px 20px 20px;
      gap: 10px;
    }
    @include xs- {
      margin: 0;
    }
    &-subtitle {
      font-size: 16px;
      line-height: 1;
      @include md- {
        font-size: 14px;
      }
    }
    &-title {
      font-size: 24px;
      line-height: 1;
      @include md- {
        font-size: 20px;
      }
      @include sm- {
        font-size: 18px;
      }
    }
    &-text {
      font-size: 20px;
      line-height: 1.45;
      @include md- {
        font-size: 16px;
      }
      @include sm- {
        font-size: 14px;
      }
    }
  }
}
.additional {
  margin: 120px auto;
  &__title {
    text-align: center;
  }
  &__text {
    text-align: center;
    margin-top: 30px;
  }
}
</style>
