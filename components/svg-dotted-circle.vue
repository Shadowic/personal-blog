<template>
  <svg class="circle-svg" :class="svgCircleClass">
    <circle r="46%" cx="50%" cy="50%" />
  </svg>
</template>
<script>
export default {
  props: {
    svgCircleClass: {
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
@keyframes circled {
  to {
    transform: rotate(360deg);
  }
}
.circle-svg {
  width: 100%;
  height: 100%;
  stroke-linecap: round;
  stroke-dasharray: 0.1%, 11.4%;
  fill: none;
  stroke: currentColor;
  stroke-width: 2px;
  overflow: visible;
  color: rgb(145, 154, 153);
}
.circle-svg__hovered {
  color: #79a2ac;
  circle {
    animation: circled 4s linear infinite;
    transform-origin: center;
  }
}
</style>
