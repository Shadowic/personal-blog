<template>
  <div :class="animations3" class="slider">
    <div
      v-for="(image, index) in slider"
      :key="index"
      class="slider__container"
      :class="index === currentImageIndex ? 'active' : ''"
    >
      <img
        :src="`${image.attributes.cover.data.attributes.url}`"
        class="slider__image"
      />
      <div class="slider__caption">
        <h2 class="slider__title" v-html="image.attributes.title" />
        <p class="slider__description" v-html="image.attributes.description" />
      </div>
      <div class="background-gradient" />
    </div>
    <div class="arrows">
      <div class="arrow arrow__left" @click.prevent="prevImage">
        <arrow />
      </div>
      <div class="arrow arrow__right" @click.prevent="nextImage">
        <arrow />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slider: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      currentImageIndex: 0,
      animations3: '',
    }
  },
  mounted() {
    this.addAnimationClass()
    setInterval(() => this.nextImage(), 5000)
  },
  methods: {
    prevImage() {
      if (this.currentImageIndex - 1 < 0) {
        this.currentImageIndex = this.slider.length - 1
      } else {
        this.currentImageIndex--
      }
    },
    nextImage() {
      if (this.currentImageIndex + 1 < this.slider.length) {
        this.currentImageIndex++
      } else {
        this.currentImageIndex = 0
      }
    },
    addAnimationClass() {
      this.animations3 = 'animated__fadeInDown delay3'
    },
  },
}
</script>

<style lang="scss" scoped>
.background-gradient {
  width: 100%;
  height: 50vh;
  position: absolute;
  bottom: 0;
  z-index: 10;
  background: linear-gradient(#0f0b0800, #0f0b0850, #0f0b0870, #0f0b0870);
}
.slider {
  position: relative;
  &__container {
    width: 100%;
    height: 100%;
    position: absolute;
    // opacity: 0.8;
  }
  &__caption {
    display: none;
    opacity: 0;
    position: absolute;
    bottom: 5vw;
    left: 0;
    right: 0;
    z-index: 30;
    color: $champagne;
    padding: 2.1vw;
    @include md {
      display: block;
    }
  }
  &__title {
    font-family: $accent-font;
    font-size: 4vw;
    margin-bottom: 1vw;
    opacity: 0;
    transform: translateX(-40px);
  }
  &__description {
    font-size: 1vw;
    line-height: 1.5em;
    font-weight: 800;
    opacity: 0;
    transform: translateX(-40px);
  }
  .slider__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 10;
    opacity: 0;
    transition: opacity 1.5s ease-in-out;
  }
  &__container.active {
    .slider__image {
      opacity: 0.75;
      transition: opacity 1.5s ease-in-out;
    }
    .slider__caption {
      opacity: 0.8;
      transition: opacity 1.5s ease-in-out;
      .slider__title,
      .slider__description {
        opacity: 0.8;
        transform: translateX(0);
        transition: 1s ease-in-out;
        transition-property: opacity, transform;
      }
      .slider__title {
        transition-delay: 0.2s;
      }
      .slider__description {
        transition-delay: 0.55s;
      }
    }
  }
}
.arrows {
  display: none;
  position: absolute;
  bottom: 2.1vw;
  left: 2.1vw;
  gap: 20px;
  z-index: 50;
  @include md {
    display: flex;
  }
}
@keyframes circled {
  to {
    transform: rotate(360deg);
  }
}
.arrow {
  cursor: pointer;
  position: relative;
  width: 2.25vw;
  height: 2.25vw;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border: 2px dotted $champagne;
    border-radius: 50%;
  }
  &__left {
    transform: rotate(180deg);
    &:hover {
      &::after {
        animation: circled 4s linear infinite reverse;
      }
    }
  }
  &__right:hover {
    &::after {
      animation: circled 4s linear infinite;
    }
  }
  .svg-arrow {
    fill: $champagne;
    width: 40%;
    height: auto;
  }
}
</style>
