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
  margin-top: auto;
}
.scroll-down-icon {
  display: block;
  width: 64px;
  height: 64px;
  opacity: 0;
  margin: 0 auto;
  transform: translateY(60px);
  span {
    display: block;
    width: 20px;
    height: 34px;
    border-radius: 10px;
    box-sizing: border-box;
    border: 2px solid #919a9955;
    margin: 0 auto 8px;
    &::before {
      content: '';
      display: block;
      width: 2px;
      height: 0;
      background: #919a9955;
      margin: 6px auto;
    }
  }
  b {
    display: block;
    width: 2px;
    height: 20px;
    margin: 8px auto 0;
    position: relative;
    transition: transform 0.45s cubic-bezier(0.32, 0, 0.24, 1) 0.15s;
    opacity: 0;
    &::before {
      content: '';
      display: block;
      width: 2px;
      height: 0;
      position: absolute;
      bottom: -1px;
      transform: rotate(-135deg);
      -webkit-transform-origin: 50% 99%;
      transform-origin: 50% 99%;
      background: #919a9955;
      opacity: 0;
    }
    &::after {
      content: '';
      display: block;
      width: 2px;
      height: 0;
      position: absolute;
      bottom: -1px;
      -webkit-transform-origin: 50% 99%;
      transform-origin: 50% 99%;
      transform: rotate(135deg);
      background: #919a9955;
      opacity: 0;
    }
    i {
      display: block;
      width: 2px;
      height: 0;
      transform-origin: 50% 0;
      background: #919a9955;
    }
  }
  &.ready {
    opacity: 1;
    transition: transform 0.5s ease, opacity 0.2s ease-out;
    transform: translateY(0);
    span {
      &::before {
        transition: height 0.3s ease 0.3s;
        height: 7px;
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
        height: 11px;
        transition: height 0.45s cubic-bezier(0.26, 0, 0.87, 0.32) 0.4s,
          transform 0.35s cubic-bezier(0.36, 0, 0.26, 1) 0.7s,
          opacity 0s ease 0.6s;
        transform: rotate(-45deg);
      }
      &::after {
        opacity: 1;
        height: 11px;
        transition: height 0.45s cubic-bezier(0.26, 0, 0.87, 0.32) 0.4s,
          transform 0.35s cubic-bezier(0.36, 0, 0.26, 1) 0.7s,
          opacity 0s ease 0.6s;
        transform: rotate(45deg);
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
