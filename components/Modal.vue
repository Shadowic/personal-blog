<template>
  <div v-if="image" class="modal">
    <div class="modal__bg" @click.prevent="closeImage"></div>
    <div class="modal__content">
      <div class="modal__top">
        <div class="image-counter">
          <span class="image-counter__current">{{ openedImgIndex + 1 }}</span>
          &nbsp;/&nbsp;
          <span class="image-counter__total">{{ countImgs }}</span>
        </div>
        <div class="modal-close" @click.prevent="closeImage" />
      </div>
      <div class="modal__main">
        <div class="content" :class="{ imgLoaded: isImgLoaded }">
          <div class="content__img">
            <img
              :src="image"
              alt="image of album"
              draggable="false"
              @load="onImgLoad"
            />
            <div class="arrows__mobile">
              <div
                class="arrow__mobile arrow__mobile__left"
                @click.prevent="prevImage"
              />
              <div class="arrow__mobile" @click.prevent="nextImage" />
            </div>
          </div>
          <div v-if="showSidebar" class="sidebar">
            <div class="item-title">{{ title }}</div>
            <div class="item-description">
              {{ description }}
            </div>
            <div class="item-price">
              <span>цена:</span>
              <span>{{ price }} рэ</span>
            </div>
          </div>
        </div>
        <span v-if="!isImgLoaded" class="loader" />
      </div>
      <div class="modal__bottom">
        <div class="arrows arrows__left" @click.prevent="prevImage">
          <div class="arrow arrow__left" />
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
        <div class="arrows arrows__right" @click.prevent="nextImage">
          <div class="arrow arrow__right" />
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
      default: null,
    },
    openedImgIndex: {
      type: Number,
      default: null,
    },
    countImgs: {
      type: Number,
      default: null,
    },
    showSidebar: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isPrevClicked: false,
      isNextClicked: false,
      isImgLoaded: false,
    }
  },
  watch: {
    image(newVal) {
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
    onImgLoad() {
      this.isImgLoaded = true
    },
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
    getCurrentLocale() {
      return this.$i18n.localeProperties.code
    },
    getSidebarContent(key) {
      return this.getCurrentLocale() === 'ru'
        ? this.image.sidebar[key].ru
        : this.image.sidebar[key].en
    },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 999;
  inset: 0;
}
.modal__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.modal__content {
  background: rgba(0, 0, 0, 0.85);
  padding: 30px 20px;
  border: unset;
  height: 100svh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @include lg {
    padding: 40px 60px;
  }
}
.modal-close {
  position: relative;
  width: 26px;
  height: 26px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.modal-close::before,
.modal-close::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  height: 100%;
  width: 1px;
  border-radius: 2px;
  background-color: $white;
}
.modal-close::before {
  transform: rotate(45deg);
}
.modal-close::after {
  transform: rotate(-45deg);
}
@keyframes scissors-before {
  0%,
  75% {
    transform: rotate(45deg);
  }
  10% {
    transform: rotate(90deg);
  }
}
@keyframes scissors-after {
  0%,
  75% {
    transform: rotate(-45deg);
  }
  10% {
    transform: rotate(-90deg);
  }
}
.modal-close:hover::before {
  animation: 0.4s ease-out scissors-before forwards;
}
.modal-close:hover::after {
  animation: 0.4s ease-out scissors-after forwards;
}
.image-counter {
  display: flex;
  color: $champagne;
  font-size: 18px;
  &__current {
    color: $sunflower;
  }
}
.modal__top,
.modal__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
}
.modal__main {
  text-align: center;
  margin: 20px 0;
  .content {
    width: 100%;
    height: 100%;
    max-height: 75vh;
    display: flex;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease-in-out;
    &__img {
      position: relative;
      flex: 1 1 0;
    }
  }
  .imgLoaded {
    opacity: 1;
    visibility: visible;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    vertical-align: middle;
  }
  .loader {
    position: absolute;
    top: 50%;
    left: calc(50% - 100px);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: block;
    margin: 15px auto;
    color: $white;
    box-sizing: border-box;
    animation: shadowRolling 2s linear infinite;
  }
  .sidebar {
    width: 30%;
    background-color: $white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 35px;
    overflow-y: auto;
    margin-left: 30px;
    .item-title {
      font-family: $accent-font;
      line-height: 1.212em;
      color: $green-dark;
      font-weight: 600;
      font-size: 33px;
      margin-bottom: 10px;
    }
    .item-description {
      font-family: 'Montserrat Semi-bold', sans-serif;
      font-size: 15px;
      line-height: 1.75;
      font-weight: 300;
      margin: 10px 0;
    }
    .item-price {
      font-size: 16px;
      font-weight: 600;
      margin-top: 10px;
      display: flex;
      justify-content: flex-end;
      span + span {
        margin-left: 20px;
      }
    }
  }
}
.modal__main::before {
  top: 50%;
  left: 250px;
  transform: rotate(-45deg);
}
.modal__main::after {
  top: 50%;
  right: 250px;
  transform: rotate(135deg);
}
@keyframes shadowRolling {
  0% {
    box-shadow: 0 0 #d4c8b200, 0 0 #d4c8b200, 0 0 #d4c8b200, 0 0 #d4c8b200;
  }
  12% {
    box-shadow: 100px 0 #d4c8b2, 0 0 #d4c8b200, 0 0 #d4c8b200, 0 0 #d4c8b200;
  }
  25% {
    box-shadow: 110px 0 #d4c8b2, 100px 0 #d4c8b2, 0 0 #d4c8b200, 0 0 #d4c8b200;
  }
  36% {
    box-shadow: 120px 0 #d4c8b2, 110px 0 #d4c8b2, 100px 0 #d4c8b2, 0 0 #d4c8b200;
  }
  50% {
    box-shadow: 130px 0 #d4c8b2, 120px 0 #d4c8b2, 110px 0 #d4c8b2,
      100px 0 #d4c8b2;
  }
  62% {
    box-shadow: 200px 0 #d4c8b200, 130px 0 #d4c8b2, 120px 0 #d4c8b2,
      110px 0 #d4c8b2;
  }
  75% {
    box-shadow: 200px 0 #d4c8b200, 200px 0 #d4c8b200, 130px 0 #d4c8b2,
      120px 0 #d4c8b2;
  }
  87% {
    box-shadow: 200px 0 #d4c8b200, 200px 0 #d4c8b200, 200px 0 #d4c8b200,
      130px 0 #d4c8b2;
  }
  100% {
    box-shadow: 200px 0 #d4c8b200, 200px 0 #d4c8b200, 200px 0 #d4c8b200,
      200px 0 #d4c8b200;
  }
}
.arrow {
  width: 12px;
  height: 12px;
  border-top: 2px solid $white;
  border-left: 2px solid $white;
  opacity: 0.75;
  &__left {
    transform: translate(6px) rotate(-45deg) skew(-12deg, -12deg);
  }
  &__right {
    transform: translate(-6px) rotate(135deg) skew(-12deg, -12deg);
  }
  &::before,
  &::after {
    position: absolute;
    width: 17px;
    height: 17px;
    content: '';
    left: -20px;
    top: -20px;
    border-top: 1px solid $white;
    border-left: 3px solid $white;
    transition: all 0.25s ease-out;
    opacity: 0.9;
  }
  &::after {
    width: 7px;
    height: 7px;
    left: 15px;
    top: 15px;
    border-top: 2.5px solid $white;
    border-left: 1px solid $white;
    opacity: 0.5;
  }
  &__mobile {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: $white;
    opacity: 0.4;
    display: flex;
    justify-content: center;
    align-items: center;
    &::after {
      display: block;
      content: '';
      width: 35%;
      height: 35%;
      transform: rotate(45deg) translate(-15%, 15%);
      border-top: 2px solid $white;
      border-right: 2px solid $white;
      opacity: 0.6;
    }
    &__left {
      &::after {
        transform: rotate(-135deg) translate(-15%, 15%);
      }
    }
  }
}
.arrows {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  height: 42px;
  cursor: pointer;
  &:hover {
    .arrow::before,
    .arrow::after {
      left: -3px;
      top: -3px;
      opacity: 0;
    }
  }
  &__mobile {
    display: none;
  }
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
  animation: pagination-container--animation-prev ease-in-out 0.3s forwards;
}

.transition_next .pagination-container {
  animation: pagination-container--animation-next ease-in-out 0.3s forwards;
}

.little-dot {
  width: 4px;
  height: 4px;
  background: $champagne;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  margin: 0 5px;
  position: relative;
  z-index: 2;
}

.little-dot__first,
.little-dot__last {
  z-index: 1;
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
  //right: 3px;
  transform: translate(-100%, -50%);
  z-index: 2;
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
  //right: auto;
  //left: 3px;
}
</style>
