<template>
  <div class="test2">
    <h1>Something new is coming soon</h1>
    <div class="circles">
      <div
        class="circles__item"
        @mouseover="setHoveredCircleId('c1')"
        @mouseleave="resetHoveredCircleId()"
        @click="setIdMoveToCenter('c1')"
      >
        <div ref="c1" class="circle circle-one" />
      </div>
      <div
        class="circles__item"
        @mouseover="setHoveredCircleId('c2')"
        @mouseleave="resetHoveredCircleId()"
        @click="setIdMoveToCenter('c2')"
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
      clickedCircleId: '',
    }
  },
  methods: {
    setHoveredCircleId(id) {
      if (this.clickedCircleId === '') {
        this.clickedCircleId = id
        this.$refs.c1.classList.add('circle--increased')
      }
    },
    resetHoveredCircleId() {
      this.clickedCircleId = ''
      this.$refs.c1.classList.remove('circle--increased')
    },
    // if (this.clickedCircleId === 'с1') {
    //   this.$refs.c1.style.right = 'calc(-50% + 35px)'
    // }
    // if (this.clickedCircleId === 'с2') {
    // }
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
  transition: right 1s ease-in-out, width 1s ease-in-out, height 1s ease-in-out;
  animation: 4s infinite ease-in-out reverse flowing;
  &.circle--unanimated {
    animation: unset;
    top: 50%;
  }
  &.circle--increased {
    width: 200px;
    height: 200px;
  }
  &.circle--from-left-centered {
    right: calc(-50% + 35px);
  }
  &.circle--from-right-centered {
    right: calc(50% + 87px);
  }
  &-one {
    background-color: #d8aa90;
  }
  &-two {
    background-color: #5f7374;
  }
}
</style>
