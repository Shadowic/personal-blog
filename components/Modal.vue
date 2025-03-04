<template>
  <div v-if="image" class="modal">
    <div class="modal__bg" @click.prevent="closeImage" />
    <div class="modal__content">
      <div class="modal__top">
        <div class="image-counter">
          <span class="image-counter__current">{{ openedImgIndex + 1 }}</span>
          &nbsp;/&nbsp;
          <span class="image-counter__total">{{ countImgs }}</span>
        </div>
        <div class="modal-close" @click.prevent="closeImage" />
      </div>
      <span v-if="!isImgLoaded" class="loader" />
      <div
        class="modal__main"
        :class="{ imgLoaded: isImgLoaded, 'has-sidebar': isSidebarShown }"
      >
        <div class="modal__img">
          <img
            :src="image"
            alt="image of album"
            draggable="false"
            @load="onImgLoad"
          />
        </div>
        <div v-if="isSidebarShown" class="modal__sidebar">
          <div class="modal__sidebar-title">{{ title }}</div>
          <div class="modal__sidebar-price">
            <span>цена:</span>
            <span>{{ price }}</span>
          </div>
          <div class="modal__sidebar-description">
            {{ description }}
          </div>
          <nuxt-link to="/" class="button modal__sidebar-button">
            <span>кликнуть</span>
          </nuxt-link>
        </div>
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
      isSidebarShown: false,
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
  z-index: 99999;
  inset: 0;
}
.modal__bg {
  display: none;
  position: absolute;
  inset: 0;
  z-index: 0;
  @include lg {
    display: block;
  }
}
.modal__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.85);
  height: 100%;
  padding: 30px 20px;
  @include lg {
    padding: 40px 60px;
  }
}
.modal-close {
  position: relative;
  width: 26px;
  height: 26px;
  cursor: pointer;
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
  transition: transform 0.3s ease-in-out;
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
}
.modal__main {
  display: flex;
  flex: 1;
  max-width: 1920px;
  max-height: 70vh;
  max-height: 70svh;
  overflow-y: auto;
  margin: 20px auto;
  scrollbar-color: $sunflower $white;
  scrollbar-width: thin;
  opacity: 0;
  position: relative;
  visibility: hidden;
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  &.imgLoaded {
    opacity: 1;
    visibility: visible;
  }
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
.modal__sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: $white;
  padding: 24px 20px;
  scrollbar-color: $sunflower $white;
  scrollbar-width: thin;
  @include md {
    flex: 1;
    overflow-y: auto;
  }
  @include lg {
    padding: 48px 40px;
  }
  &-title {
    font-family: $accent-font;
    font-size: 24px;
    line-height: 1.4em;
    color: $green-dark;
    @include lg {
      font-size: 36px;
    }
  }
  &-description {
    font-family: $base-font;
    font-size: 14px;
    line-height: 1.4;
    margin-top: 14px;
    @include lg {
      font-size: 18px;
      margin-block: 18px 24px;
    }
  }
  &-price {
    display: flex;
    gap: 8px;
    margin-top: 6px;
    font-family: $base-font;
    font-size: 14px;
    @include lg {
      font-size: 18px;
      margin-top: 8px;
    }
  }
  &-button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0;
    margin: 24px auto 0;
    background-color: $sunflower;
    color: $white;
    width: fit-content;
    min-width: 140px;
    min-height: 36px;
    padding: 8px 40px;
    border-radius: 8px;
    font-size: 12px;
    line-height: 1.42;
    text-transform: uppercase;
    @include lg {
      margin-top: auto;
      min-width: 180px;
      padding: 22px 48px;
      border-radius: 12px;
      font-size: 16px;
    }
  }
}
.modal__img {
  display: flex;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.modal__main.has-sidebar {
  flex-direction: column;
  @include md {
    flex-direction: row;
    max-height: 50vh;
    max-height: 50svh;
  }
  .modal__img {
    max-height: 320px;
    @include md {
      flex: 0 1 67%;
      max-height: unset;
    }
  }
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
    transition: 0.25s ease-out;
    transition-property: left, top, opacity;
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
}
.arrows {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  height: 42px;
  cursor: pointer;
  z-index: 2;
  &:hover {
    .arrow::before,
    .arrow::after {
      left: -3px;
      top: -3px;
      opacity: 0;
    }
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
