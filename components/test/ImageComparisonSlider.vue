<template>
  <section class="comparison">
    <!--    <h2>image comparison slider</h2>-->
    <div ref="container" class="image-container">
      <img src="imgs/IMG_9408.jpg" alt="Original Image" draggable="false" />
      <div ref="topImage" class="resize-image">
        <!--        <img src="imgs/IMG_9542.jpg" alt="Modified Image" draggable="false" />-->
      </div>
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
      // const container = this.$refs.container

      // const containerLeftPosition = container.getBoundingClientRect().left
      // const containerRightPosition = container.getBoundingClientRect().right

      handle.addEventListener('mousemove', drag)
      handle.addEventListener('touchmove', drag)
      handle.addEventListener('mouseup', stopDrag)
      handle.addEventListener('touchend', stopDrag)

      const handleCenterPoint = handle.offsetLeft + handle.offsetWidth / 2

      console.log('drag', handleCenterPoint)
      console.log('aaa', e.pageX)

      // function getCursorPos(e) {
      //   if (e.type === 'touchstart' || e.type === 'touchmove') {
      //     return e.touches[0].pageX
      //   } else {
      //     return e.pageX
      //   }
      // }
      // console.log('aaa', getCursorPos())

      function drag(e) {
        console.log('drag')
        e.preventDefault()

        const newValue = 45 + '%'

        handle.style.left = newValue
        topImage.style.width = newValue
      }
      function stopDrag() {
        console.log('stopDrag')
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
