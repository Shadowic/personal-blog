<template>
  <div class="slider">
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
        <div class="slider__name" v-html="image.attributes.title" />
        <div
          class="slider__description"
          v-html="image.attributes.description"
        />
      </div>
      <div class="back" />
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
    }
  },
  mounted() {
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
  },
}
</script>

<style lang="scss" scoped>
.back {
  width: 100%;
  height: 50vh;
  position: absolute;
  bottom: 0;
  z-index: 10;
  background: linear-gradient(#0f0b0800, #0f0b0850, #0f0b0870, #0f0b0870);
}
.slider {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  line-height: 1;
  &__container {
    width: 100%;
    height: 100%;
    position: absolute;
    // opacity: 0.8;
  }
  &__caption {
    opacity: 0;
    position: absolute;
    bottom: 80px;
    z-index: 30;
    color: #fff;
    padding: 45px;
  }
  &__name {
    font-family: 'Caveat', cursive;
    font-size: 75px;
    margin-bottom: 20px;
    opacity: 0;
    transform: translateX(-40px);
    @include md {
      font-size: 48px;
    }
    @include sm {
      font-size: 36px;
    }
  }
  &__description {
    font-size: 15px;
    line-height: 1.5em;
    font-weight: 800;
    opacity: 0;
    transform: translateX(-40px);
    @include md {
      font-size: 14px;
    }
    @include sm {
      font-size: 12px;
    }
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
      opacity: 1;
      transition: opacity 1.5s ease-in-out;
      .slider__caption-top,
      .slider__name,
      .slider__description {
        opacity: 1;
        transform: translateX(0);
        transition: all 1s ease-in-out;
        transition-delay: 0.3s;
      }
      .slider__name {
        transition-delay: 0.2s;
      }
      .slider__description {
        transition-delay: 0.55s;
      }
    }
  }
}
.arrows {
  position: absolute;
  bottom: 45px;
  left: 40px;
  display: flex;
  z-index: 50;
}
@keyframes circled {
  to {
    transform: rotate(360deg);
  }
}
.arrow {
  cursor: pointer;
  position: relative;
  width: 30px;
  height: 30px;
  margin: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    position: absolute;
    content: '';
    width: 30px;
    height: 30px;
    border: 2px dotted #fff;
    border-radius: 50%;
  }
  &__left {
    transform: rotate(180deg);
    margin-right: 20px;
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
  /deep/ .arrow {
    fill: #fff;
    width: 14px;
  }
}
</style>
