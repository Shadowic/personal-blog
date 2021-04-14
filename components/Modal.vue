<template>
  <div v-if="image" class="modal">
    <div class="modal-close" @click.prevent="closeImage" />
    <div class="modal-counter">
      <div>{{ openedImgIndex + 1 }}</div>
      &nbsp;/&nbsp;
      <div>{{ countImgs }}</div>
    </div>
    <div class="modal-centered">
      <div class="arrows arrows__left" @click.prevent="prevImage">
        <div class="arrow arrow__left" />
      </div>
      <div class="modal-content"><img :src="image" alt="img 1" /></div>
      <div class="arrows arrows__right" @click.prevent="nextImage">
        <div class="arrow arrow__right" />
      </div>
      <div
        class="pagination-wrapper"
        :class="{
          transition_prev: isPrevClicked,
          transition_next: isNextClicked,
        }"
      >
        <div class="pagination-container">
          <div class="little-dot little-dot__first" />
          <div class="little-dot">
            <div class="big-dot-container">
              <div class="big-dot" />
            </div>
          </div>
          <div class="little-dot little-dot__last" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: '',
    },
    openedImgIndex: {
      type: Number,
      default: null,
    },
    countImgs: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      isPrevClicked: false,
      isNextClicked: false,
    }
  },
  watch: {
    opened(newVal) {
      document.querySelector('body').style.overflow = newVal ? 'hidden' : 'auto'
    },
  },
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 27) {
        this.$emit('close')
      }
      if (e.keyCode === 37) {
        this.$emit('prevImg')
      }
      if (e.keyCode === 39) {
        this.$emit('nextImg')
      }
    })
  },
  methods: {
    closeImage() {
      this.$emit('close', !this.openedImage)
    },
    prevImage() {
      this.$emit('prevImg')
      this.isPrevClicked = true
      setTimeout(() => (this.isPrevClicked = false), 500)
    },
    nextImage() {
      this.$emit('nextImg')
      this.isNextClicked = true
      setTimeout(() => (this.isNextClicked = false), 500)
    },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  outline: 0;
  z-index: 100;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.8);
}
.modal-close {
  position: absolute;
  right: 150px;
  top: 100px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.modal-close::before,
.modal-close::after {
  position: absolute;
  left: 14px;
  top: -5px;
  content: '';
  height: 42px;
  width: 4px;
  border-radius: 5px;
  background-color: #fff;
}
.modal-close::before {
  transform: rotate(45deg);
}
.modal-close::after {
  transform: rotate(-45deg);
}
@keyframes scissors-before {
  0%,
  100% {
    transform: rotate(45deg);
  }
  50% {
    transform: rotate(90deg);
    height: 30px;
    top: -2px;
  }
}
@keyframes scissors-after {
  0%,
  100% {
    transform: rotate(-45deg);
  }
  50% {
    transform: rotate(-90deg);
    height: 30px;
    top: -2px;
  }
}
.modal-close:hover::before {
  animation: 0.4s linear scissors-before forwards;
}
.modal-close:hover::after {
  animation: 0.4s linear scissors-after forwards;
}
.modal-counter {
  position: absolute;
  left: 150px;
  top: 100px;
  display: flex;
  color: #fff;
  font-size: 26px;
}
.modal-centered {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 750px;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
}
.modal-content {
  text-align: center;
  img {
    width: 100%;
    vertical-align: middle;
  }
}
.modal-content::before {
  top: 50%;
  left: 250px;
  transform: rotate(-45deg);
}
.modal-content::after {
  top: 50%;
  right: 250px;
  transform: rotate(135deg);
}
.arrow {
  width: 25px;
  height: 25px;
  border-top: 3px solid rgba(255, 255, 255, 0.75);
  border-left: 3px solid rgba(255, 255, 255, 0.75);
  &__left {
    transform: rotate(-45deg) skew(-12deg, -12deg);
  }
  &__right {
    transform: rotate(135deg) skew(-12deg, -12deg);
  }
  &::before,
  &::after {
    position: absolute;
    width: 25px;
    height: 25px;
    content: '';
    left: -20px;
    top: -20px;
    border-top: 4px solid #fff;
    border-left: 4px solid #fff;
    transition: all 0.3s ease-in-out;
  }
  &::after {
    left: 15px;
    top: 15px;
    border-top: 2px solid rgba(255, 255, 255, 0.5);
    border-left: 2px solid rgba(255, 255, 255, 0.5);
  }
}
.arrows {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 70px;
  height: 42px;
  cursor: pointer;
  &__left {
    left: -150px;
  }
  &__right {
    right: -150px;
  }
  &:hover {
    .arrow::before,
    .arrow::after {
      left: -3px;
      top: -3px;
    }
  }
}
.pagination-wrapper {
  font-size: 0;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translateY(150px);
  text-align: center;
}

@keyframes pagination-container--animation-prev {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(18px);
  }
}

@keyframes pagination-container--animation-next {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-18px);
  }
}

.transition_prev .pagination-container {
  animation: pagination-container--animation-prev 0.3s forwards;
}

.transition_next .pagination-container {
  animation: pagination-container--animation-next 0.3s forwards;
}

.little-dot {
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 100%;
  display: inline-block;
  vertical-align: middle;
  margin: 0 6px;
  position: relative;
  z-index: 10;
}

.little-dot__first,
.little-dot__last {
  z-index: 5;
}

@keyframes slideLeft {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-18px);
  }
}

.transition_prev .little-dot__first {
  animation: slideLeft 0.4s 0.3s forwards cubic-bezier(0.165, 0.84, 0.44, 1);
}

@keyframes little-dot__first--animation {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.transition_next .little-dot__first {
  animation: little-dot__last--animation 0.3s forwards;
}

@keyframes little-dot__last--animation {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.transition_prev .little-dot__last {
  animation: little-dot__last--animation 0.3s forwards;
}

@keyframes slideRight {
  0% {
    transform: translateX(0);
    opacity: 1;
  }

  100% {
    transform: translateX(18px);
    opacity: 1;
  }
}

.transition_next .little-dot__last {
  animation: slideRight 0.4s 0.3s forwards cubic-bezier(0.165, 0.84, 0.44, 1);
}

.big-dot {
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background: #f6af54;
  position: absolute;
  top: 50%;
  right: -6px;
  transform: translateY(-50%);
}

.transition_next .big-dot {
  right: auto;
  left: -6px;
}

.big-dot-container {
  width: 18px;
  height: 18px;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  right: 3px;
  transform: translateY(-50%);
  z-index: 10;
}

@keyframes big-dot-container--animation-prev {
  0% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(-50%) rotate(-179deg);
  }
}

@keyframes big-dot-container--animation-next {
  0% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(-50%) rotate(-181deg);
  }
}

.transition_prev .big-dot-container {
  animation: big-dot-container--animation-prev 0.3s forwards;
}

.transition_next .big-dot-container {
  animation: big-dot-container--animation-next 0.3s forwards;
  right: auto;
  left: 3px;
}
</style>
