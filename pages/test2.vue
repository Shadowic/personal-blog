<template>
  <div class="test2">
    <h1>Something new is coming soon</h1>
    <div class="circles">
      <div
        class="circles__item"
        @click="movingCircle()"
        @mouseover="clickedCircleId = '1'"
      >
        <div ref="c1" class="circle circle-one" />
      </div>
      <div
        class="circles__item"
        @click="movingCircle()"
        @mouseover="clickedCircleId = '2'"
      >
        <div ref="c2" class="circle circle-two" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test2',
  data() {
    return {
      isCircleHovered: false,
      clickedCircleId: '',
    }
  },
  methods: {
    movingCircle() {
      this.isCircleHovered = true
      console.log('clickedCircleId', this.clickedCircleId)
      this.$refs.c1.style.right = 'calc(-50% + 35px)'
      this.$refs.c1.style.width = '200px'
      this.$refs.c1.style.height = '200px'
      this.$refs.c1.style.animation = 'unset'
      this.$refs.c2.style.right = 'calc(50% + 87px)'
      this.$refs.c2.style.width = '200px'
      this.$refs.c2.style.height = '200px'
      this.$refs.c2.style.animation = 'unset'
    },
  },
}
</script>

<style lang="scss" scoped>
@keyframes flowing {
  0% {
    top: 60%;
  }
  50% {
    top: 40%;
  }
  100% {
    top: 60%;
  }
}
.test2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 60px;
    color: #221e17;
    margin-top: 50px;
  }
}
.circles {
  display: flex;
  gap: 50px;
  margin-top: 50px;
  &__item {
    border: 1px solid rgba(100, 139, 140, 0.35);
    width: 25vw;
    height: 25vw;
    position: relative;
  }
}
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  right: calc(50% - 50px);
  transform: translateY(-50%);
  cursor: pointer;
  transition: right 1s ease-in-out, left 1s ease-in-out, width 1s ease-in-out,
    height 1s ease-in-out;
  &.circle-hovered {
    animation: unset;
    top: 50%;
    width: 200px;
    height: 200px;
  }
  &-one {
    background-color: #d8aa90;
    animation: 4s infinite ease-in-out reverse flowing;
  }
  &-two {
    background-color: #5f7374;
    animation: 4s infinite ease-in-out reverse flowing;
  }
}
</style>
