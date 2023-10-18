<template>
  <section class="comparison">
    <h2>here will be image comparison slider soon</h2>
    <div ref="container" class="image-container">
      <img src="imgs/IMG_9408.jpg" alt="Original Image" draggable="false" />
      <div ref="topImage" class="resize-image">
        <img src="imgs/IMG_9542.jpg" alt="Modified Image" draggable="false" />
      </div>
      <div
        ref="handle"
        class="handle"
        @mousedown="startDrag()"
        @touchstart="startDrag()"
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
      // const handle = this.$refs.handle
      // const container = this.$refs.container
      // const topImage = this.$refs.topImage

      this.$refs.handle.classList.add('draggable')
      this.$refs.topImage.classList.add('resizable')

      const dragWidth = this.$refs.handle.offsetWidth
      // const xPosition =
      //   this.$refs.handle.getBoundingClientRect().left + dragWidth
      console.log('dragWidth', dragWidth)
      console.log('xPosition', this.$refs.handle.getBoundingClientRect().left)
      // const containerOffset = container.getBoundingClientRect().left
      // const containerWidth = container.offsetWidth
      // const minLeft = containerOffset + 10
      // const maxLeft = containerOffset + containerWidth - dragWidth - 10

      document.addEventListener('mouseup', this.stopDrag)
      document.addEventListener('touchend', this.stopDrag)
    },
    stopDrag() {
      this.$refs.handle.classList.remove('draggable')
      this.$refs.topImage.classList.remove('resizable')
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
  border: 1px solid crimson;
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
  opacity: 0;
  transform: translate3d(0, 0, 0) scale(0);
  &.is-visible {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
    transition: transform 0.3s 0.7s, opacity 0s 0.7s;
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
</style>
