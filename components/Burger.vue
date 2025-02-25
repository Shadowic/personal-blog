<template>
  <div
    class="burger"
    @click="$emit('onClickBurger')"
    @mouseover="addClassHovered"
    @mouseleave="removeClassHovered"
  >
    <div class="burger-stripe" />
    <div class="burger-stripe" />
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
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 36px;
  height: 36px;
  @include md {
    width: 48px;
    height: 48px;
  }
  &-stripe {
    position: absolute;
    width: 18px;
    height: 1.5px;
    background-color: rgb(145, 154, 153);
    transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
    @include md {
      width: 24px;
      height: 3px;
    }
    &:nth-child(1) {
      transform: translateY(-3px);
      @include md {
        transform: translateY(-4px);
      }
    }
    &:nth-child(2) {
      transform: translateY(3px);
      @include md {
        transform: translateY(4px);
      }
    }
    .open &:nth-child(1) {
      transform: translateY(0) rotate(45deg);
    }
    .open &:nth-child(2) {
      transform: translateY(0) rotate(-45deg);
    }
  }
  &:hover &-stripe {
    background-color: $ziggurat;
  }
}
</style>
