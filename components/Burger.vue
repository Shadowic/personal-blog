<template>
  <div
    class="burger"
    @click="$emit('onClickBurger')"
    @mouseover="addClassHovered"
    @mouseleave="removeClassHovered"
  >
    <span class="burger-stripe" />
    <svg-dotted-circle :svg-circle-class="svgCircleAddedClass" />
  </div>
</template>

<script>
export default {
  props: {
    opened: {
      required: true,
      type: Boolean,
    },
  },
  data() {
    return {
      svgCircleAddedClass: '',
    }
  },
  methods: {
    addClassHovered() {
      this.svgCircleAddedClass = 'circle-svg__hovered'
    },
    removeClassHovered() {
      this.svgCircleAddedClass = ''
    },
  },
}
</script>

<style lang="scss" scoped>
.burger {
  cursor: pointer;
  position: relative;
  width: 48px;
  height: 48px;
  &-stripe {
    display: block;
    width: 24px;
    height: 3px;
    background-color: rgb(145, 154, 153);
    position: absolute;
    top: calc(50% - 6px);
    left: calc(50% - 12px);
    transition: all 0.3s ease;
    .open & {
      transform: translateY(5px) rotate(45deg);
    }
    &::before {
      content: '';
      display: block;
      height: 3px;
      background-color: rgb(145, 154, 153);
      transform: translateY(9px);
      transition: all 0.3s ease;
      .open & {
        transform: translateY(1px) rotate(-90deg);
      }
    }
  }
  &:hover &-stripe {
    background-color: $ziggurat;
    &::before {
      background-color: $ziggurat;
    }
  }
}
</style>
