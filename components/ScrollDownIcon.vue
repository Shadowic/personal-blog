<template>
  <div class="main-scroll-icon">
    <span class="scroll-down-icon" :class="{ ready: animateMouse }">
      <span />
      <b>
        <i />
      </b>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animate: {
        type: Boolean,
        default: false,
      },
      animateMouse: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.animateMouse = true
    }, 1100)
  },
}
</script>

<style lang="scss">
.main-scroll-icon {
  position: absolute;
  bottom: 24px;
  @include lg {
    margin-top: 10vh;
  }
}
@keyframes scroll-down-icon-move {
  0% {
    transform: translateY(0);
  }
  55% {
    transform: translateY(0);
  }
  60% {
    transform: translateY(40%);
  }
  62% {
    transform: translateY(25%);
  }
  68% {
    transform: translateY(40%);
  }
  75% {
    transform: translateY(0);
  }
}
.scroll-down-icon {
  display: block;
  opacity: 0;
  margin: 0 auto;
  transform: translateY(60px);
  position: relative;
  span {
    display: block;
    width: 14px;
    height: 23px;
    border-radius: 7px;
    box-sizing: border-box;
    border: 1px solid #919a9965;
    margin: 0 auto 8px;
    @include lg {
      width: 20px;
      height: 34px;
      border-radius: 10px;
      border: 2px solid #919a9965;
    }
    &::before {
      content: '';
      display: block;
      width: 1px;
      height: 0;
      background: #919a9965;
      margin: 6px auto;
      @include lg {
        width: 2px;
        margin: 4px auto;
      }
    }
  }
  b {
    display: block;
    width: 1px;
    height: 12px;
    margin: 0 auto;
    position: relative;
    transition: transform 0.45s cubic-bezier(0.32, 0, 0.24, 1) 0.15s;
    opacity: 0;
    animation: 6s ease 3s infinite scroll-down-icon-move;
    @include lg {
      width: 2px;
      height: 20px;
      margin: 8px auto 0;
    }
    &::before {
      content: '';
      display: block;
      width: 1px;
      height: 0;
      position: absolute;
      bottom: -1px;
      transform: rotate(-135deg);
      -webkit-transform-origin: 50% 99%;
      transform-origin: 50% 99%;
      background: #919a9965;
      opacity: 0;
      @include lg {
        width: 2px;
      }
    }
    &::after {
      content: '';
      display: block;
      width: 1px;
      height: 0;
      position: absolute;
      bottom: -1px;
      -webkit-transform-origin: 50% 99%;
      transform-origin: 50% 99%;
      transform: rotate(135deg);
      background: #919a9965;
      opacity: 0;
      @include lg {
        width: 2px;
      }
    }
    i {
      display: block;
      width: 1px;
      height: 0;
      transform-origin: 50% 0;
      background: #919a9965;
      @include lg {
        width: 2px;
      }
    }
  }
  &.ready {
    opacity: 1;
    transition: transform 0.5s ease, opacity 0.2s ease-out;
    transform: translateY(0);
    span {
      &::before {
        transition: height 0.3s ease 0.3s;
        height: 5px;
        @include lg {
          height: 7px;
        }
      }
    }
    b {
      opacity: 1;
      i {
        transition: height 0.2s ease 0.4s;
        height: 100%;
      }
      &::before {
        opacity: 1;
        height: 7px;
        transition: height 0.45s cubic-bezier(0.26, 0, 0.87, 0.32) 0.4s,
          transform 0.35s cubic-bezier(0.36, 0, 0.26, 1) 0.7s,
          opacity 0s ease 0.6s;
        transform: rotate(-45deg);
        @include lg {
          height: 11px;
        }
      }
      &::after {
        opacity: 1;
        height: 7px;
        transition: height 0.45s cubic-bezier(0.26, 0, 0.87, 0.32) 0.4s,
          transform 0.35s cubic-bezier(0.36, 0, 0.26, 1) 0.7s,
          opacity 0s ease 0.6s;
        transform: rotate(45deg);
        @include lg {
          height: 11px;
        }
      }
    }
  }
  &:hover {
    b {
      transform: translateY(8px);
      transition: inherit;
    }
  }
}
</style>
