<template>
  <section class="comparison">
    <h2>image comparison slider</h2>
    <div ref="container" class="image-container">
      <img src="imgs/IMG_9408.jpg" alt="Original Image" draggable="false" />
      <div ref="topImage" class="resize-image" />
      <div
        ref="handle"
        class="handle"
        @mousedown="startDrag(e)"
        @touchstart="startDrag(e)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32px"
          height="32px"
          viewBox="0 0 32 32"
        >
          <polygon fill="#fff" points="13,21 8,16 13,11 " />
          <polygon fill="#fff" points="19,11 24,16 19,21 " />
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ImageComparisonSlider',
  mounted() {
    this.$refs.topImage.classList.add('is-visible')
    this.$refs.handle.classList.add('is-visible')
  },
  methods: {
    startDrag(e) {
      const handle = this.$refs.handle
      const topImage = this.$refs.topImage
      const container = this.$refs.container

      const containerLeftPosition = container.getBoundingClientRect().left
      const containerWidth = container.offsetWidth
      const minVal = handle.offsetWidth / 2 + 10
      const maxVal = containerWidth - handle.offsetWidth / 2 - 10

      container.addEventListener('mousemove', drag)
      container.addEventListener('touchmove', drag)
      container.addEventListener('mouseup', stopDrag)
      container.addEventListener('touchend', stopDrag)

      function drag(e) {
        e.preventDefault()
        const cursorPos = getCursorPos(e)

        let newValue = cursorPos - containerLeftPosition

        if (newValue < minVal) {
          newValue = minVal
        } else if (newValue > maxVal) {
          newValue = maxVal
        }

        handle.style.left = newValue + 'px'
        topImage.style.width = newValue + 'px'
      }
      function getCursorPos(e) {
        if (e.type === 'touchstart' || e.type === 'touchmove') {
          return e.touches[0].pageX
        } else {
          return e.pageX
        }
      }
      function stopDrag() {
        container.removeEventListener('mousemove', drag)
        container.removeEventListener('touchmove', drag)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.comparison {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 780px;
  padding: 0 40px;
  margin-top: 70px;
}
.image-container {
  width: 100%;
  margin-top: 70px;
  position: relative;
}
img {
  display: block;
  max-width: 100%;
}
.resize-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  overflow: hidden;
  background: top left no-repeat url('/imgs/IMG_9542.jpg');
  background-size: auto 100%;
  &.is-visible {
    width: 50%;
    animation: bounce-in 0.75s;
  }
}
.handle {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 44px;
  border-radius: 50%;
  background-color: #5f7374;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -22px;
  margin-top: -22px;
  cursor: move;
  opacity: 1;
  &.is-visible {
    animation: ease-in-out 0.75s forwards fade-in;
  }
}
@keyframes bounce-in {
  0% {
    width: 0;
  }
  60% {
    width: 55%;
  }
  100% {
    width: 50%;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
    transform: translate3d(0, 0, 0) scale(0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
}
</style>
