<template>
  <div class="album" :class="getAlbumClass()">
    <div class="album__description">
      <div class="album__top">
        <p v-if="date.length > 0" class="album__date">
          <time datetime="2001-05-01">{{ date }}</time>
        </p>
        <div v-if="date.length > 0" class="border__dots">
          <div
            v-for="(item, index) in 5"
            :key="index"
            class="border__dot"
          ></div>
        </div>
        <p class="album__tag" v-html="tag" />
      </div>
      <p
        class="album__title"
        @mouseover="addClassHovered"
        @mouseleave="removeClassHovered"
        v-html="title"
      />
      <div
        class="album-button"
        @mouseover.prevent="addClassHovered"
        @mouseleave.prevent="removeClassHovered"
      >
        <nuxt-link
          :to="localePath(`/${albumCode}/${pageCode}`)"
          class="album-button__link"
        >
          <span style="position: relative">
            <span v-html="btnText" />
            <span class="album-button__dots">
              <span class="album-button__dots-p1">
                <span
                  v-for="(item, index) in 40"
                  :key="index"
                  class="album-button__dot"
                />
              </span>
              <span class="album-button__dots-p2">
                <span
                  v-for="(item, index) in 40"
                  :key="index"
                  class="album-button__dot"
                />
              </span>
            </span>
          </span>
          <svg
            width="18"
            height="8"
            viewBox="0 0 18 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.3536 4.41239C17.5488 4.21713 17.5488 3.90055 17.3536 3.70528L14.1716 0.523304C13.9763 0.328042 13.6597 0.328042 13.4645 0.523304C13.2692 0.718566 13.2692 1.03515 13.4645 1.23041L16.2929 4.05884L13.4645 6.88726C13.2692 7.08253 13.2692 7.39911 13.4645 7.59437C13.6597 7.78963 13.9763 7.78963 14.1716 7.59437L17.3536 4.41239ZM0 4.55884H17V3.55884H0V4.55884Z"
              fill="#858585"
            />
          </svg>
        </nuxt-link>
      </div>
    </div>
    <div
      class="album__image-container"
      @mouseover="addClassHovered"
      @mouseleave="removeClassHovered"
    >
      <nuxt-link
        :to="localePath(`/${albumCode}/${pageCode}`)"
        class="album__image"
      >
        <img :src="cover" alt="album cover" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tag: {
      default: '',
      type: String,
    },
    title: {
      default: '',
      type: String,
    },
    btnText: {
      default: '',
      type: String,
    },
    albumCode: {
      default: '',
      type: String,
    },
    date: {
      default: '',
      type: String,
    },
    pageCode: {
      default: '',
      type: String,
    },
    cover: {
      default: '',
      type: String,
    },
  },
  data() {
    return {
      blockClass: '',
    }
  },
  methods: {
    addClassHovered() {
      this.blockClass = 'hovered'
    },
    removeClassHovered() {
      this.blockClass = ''
    },
    getAlbumClass() {
      return `${this.blockClass}`
    },
  },
}
</script>

<style lang="scss" scoped>
@keyframes runningLine {
  0% {
    transform: translateX(20%);
  }
  100% {
    transform: translateX(120%);
  }
}

@keyframes runningLineReverse {
  0% {
    transform: translateX(-180%);
  }
  100% {
    transform: translateX(-80%);
  }
}
.border {
  &__dots {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5px 0;
  }
  &__dot {
    background-color: $herbal;
    width: 1px;
    height: 1px;
    border-radius: 50%;
  }
}
.album {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  &__top {
    display: flex;
    gap: 7px;
    font-size: 10px;
    @include md {
      gap: 12px;
      font-size: 12px;
    }
    @include lg {
      gap: 0.5vw;
      font-size: 0.8vw;
    }
  }
  &__description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 0 1 50%;
    padding: 48px 20px;
    color: $bokara;
    position: relative;
    z-index: 5;
    @include lg {
      padding: 4vw;
    }
  }
  &__title {
    font-family: $accent-font;
    font-size: 22px;
    font-weight: 600;
    transition: color 0.25s ease-in-out;
    //text-transform: lowercase;
    width: fit-content;
    margin-top: 12px;
    @include md {
      font-size: 28px;
      margin-top: 18px;
    }
    @include lg {
      font-size: 2vw;
      margin-top: 0.75vw;
      .hovered & {
        color: $ocean;
      }
    }
  }
  &-button {
    width: fit-content;
    margin-top: 10px;
    @include md {
      margin-top: 18px;
    }
    @include lg {
      margin-top: 1.5vw;
    }
    &__link {
      display: flex;
      align-items: center;
      font-size: 12px;
      gap: 6px;
      @include md {
        font-size: 14px;
        gap: 8px;
      }
      @include lg {
        font-size: 0.75vw;
        gap: 0.5vw;
      }
      svg {
        width: 14px;
        @include md {
          width: 16px;
        }
        @include lg {
          width: 0.8vw;
        }
      }
    }
    &__dots {
      display: flex;
      gap: 1px;
      width: 100%;
      position: absolute;
      bottom: -4px;
      overflow: hidden;
      &-p1,
      &-p2 {
        display: flex;
        gap: 3px;
      }
      @include lg {
        .hovered &-p1 {
          animation: 5s infinite linear runningLine;
        }
        .hovered &-p2 {
          animation: 5s infinite linear runningLineReverse;
        }
      }
    }
    &__dot {
      background-color: $herbal;
      width: 1px;
      height: 1px;
      border-radius: 50%;
    }
  }
  &__image-container {
    overflow: hidden;
    @include md {
      position: absolute;
      inset: 0;
      z-index: 0;
    }
  }
  @include md {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 350px;
    &:nth-child(3n + 1) {
      .album__image-container {
        left: 50%;
      }
    }
    &:nth-child(3n + 2) {
      flex-direction: row-reverse;
      .album__image-container {
        right: 50%;
      }
    }
    &:nth-child(3) {
      .album__description {
        color: $white;
      }
      .album__tag {
        border-color: $white;
      }
      .album-button__dot {
        background-color: $white;
      }
      .album-button__link svg path {
        fill: $white;
      }
    }
  }
  &__image {
    display: flex;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: 1s cubic-bezier(0.17, 0.59, 0.05, 0.96);
      @include lg {
        transform: scale(1.02);
        .hovered & {
          transform: scale(1);
          filter: saturate(1.15);
        }
      }
    }
  }
}
</style>
