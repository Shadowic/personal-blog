<template>
  <div class="album">
    <background-word :title="description.title" />
    <div class="album__title">{{ description.title }}</div>
    <div class="grid-container">
      <div
        v-for="(image, imageIndex) in 40"
        :key="imageIndex"
        class="grid-item animation-target"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: {
        title: 'album title',
      },
    }
  },
  mounted() {
    this.isAnimated()
  },
  methods: {
    isAnimated() {
      window.onload = () => {
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 1.0,
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
.album {
  width: 100%;
  max-width: 1200px;
  margin: 60px auto 30px;
  padding: 0 20px;
  position: relative;
  &__title {
    font-family: 'Caveat', cursive;
    font-weight: 600;
    color: #332d23;
    font-size: 33px;
    line-height: 1.212em;
    padding-top: 15px;
    padding-left: 20px;
    margin-bottom: 70px;
    position: relative;
    z-index: 1;
    @include sm- {
      position: absolute;
      top: 0;
      padding: 3%;
    }
  }
  @include lg- {
    margin: 20px auto;
  }
  @include sm- {
    width: 90vw;
    margin: 60px auto;
  }
  /deep/.background {
    @include md {
      top: -44px;
    }
    @include sm {
      top: -20px;
    }
  }
}
.grid-container {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(16, 1fr);
  grid-auto-rows: 40px;
  grid-gap: 30px 25px;
  margin-bottom: 20px;
  @include sm- {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 120px;
  }
  @include xs- {
    grid-gap: 16px;
    grid-auto-rows: 40px;
  }
}
[class^='grid-item'] {
  position: relative;
  border-radius: 12px;
  &:nth-child(7n + 1) {
    grid-area: span 3 / span 4;
    background: center / cover no-repeat url('/imgs/IMG_9484.jpg');
  }
  &:nth-child(7n + 2) {
    grid-area: span 4 / span 4;
    background: center / cover no-repeat url('/imgs/IMG_9408.jpg');
  }
  &:nth-child(7n + 3) {
    grid-area: span 3 / span 4;
    background: center / cover no-repeat url('/imgs/IMG_9542.jpg');
  }
  &:nth-child(7n + 4) {
    grid-area: span 5 / span 4;
    background: center / cover no-repeat url('/imgs/IMG_9547.jpg');
  }
  &:nth-child(7n + 5) {
    grid-area: span 5 / span 4;
    background: center / cover no-repeat url('/imgs/IMG_9542.jpg');
  }
  &:nth-child(7n + 6) {
    grid-area: span 4 / span 4;
    background: center / cover no-repeat url('/imgs/IMG_9484.jpg');
  }
  &:nth-child(7n + 7) {
    grid-area: span 3 / span 4;
    background: center / cover no-repeat url('/imgs/IMG_9547.jpg');
  }
}
</style>
