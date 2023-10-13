<template>
  <div class="test2">
    <h1>Something new is coming soon</h1>
    <div class="circles">
      <div class="circles__item">
        <div
          ref="c1"
          class="circle circle-one"
          @mouseover="setHoveredCircleId('c1')"
          @mouseleave="resetHoveredCircleId()"
          @click="moving('c1')"
        />
      </div>
      <div class="circles__item">
        <div
          ref="c2"
          class="circle circle-two"
          @mouseover="setHoveredCircleId('c2')"
          @mouseleave="resetHoveredCircleId()"
          @click="moving('c2')"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test2',
  data() {
    return {
      hoveredCircleId: '',
      clickedCircleId: '',
    }
  },
  methods: {
    setHoveredCircleId(id) {
      if (this.hoveredCircleId === '') {
        this.hoveredCircleId = id
        if (this.hoveredCircleId === 'c1') {
          this.$refs.c1.classList.add('circle--increased')
          this.$refs.c2.classList.add('circle--decreased')
        } else if (this.hoveredCircleId === 'c2') {
          this.$refs.c2.classList.add('circle--increased')
          this.$refs.c1.classList.add('circle--decreased')
        }
      }
    },
    resetHoveredCircleId() {
      this.hoveredCircleId = ''
      this.$refs.c1.classList.remove('circle--increased', 'circle--decreased')
      this.$refs.c2.classList.remove('circle--increased', 'circle--decreased')
    },
    moving(id) {
      this.clickedCircleId = id
      if (this.clickedCircleId === 'c1') {
        this.$refs.c1.classList.add(
          'circle--increased',
          'circle--left-centered'
        )
        this.$refs.c1.style.right = 'calc(-50% + 83px)'
      } else if (this.clickedCircleId === 'c2') {
        this.$refs.c2.classList.add(
          'circle--increased',
          'circle--right-centered'
        )
        this.$refs.c2.style.left = 'calc(-50% + 81px)'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
$width: 100px;
$height: 100px;

@keyframes flowing {
  0% {
    top: 40%;
  }
  50% {
    top: 60%;
  }
  100% {
    top: 40%;
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
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.circle {
  width: $width;
  height: $height;
  border-radius: 50%;
  position: absolute;
  transform: translateY(-50%);
  cursor: pointer;
  transition: right 0.5s ease-in-out, top 1s ease-in-out, width 0.5s ease-in-out,
    height 0.5s ease-in-out;
  animation: 4s infinite ease-in-out reverse flowing;
  &.circle--unanimated {
    animation: unset;
    top: 50%;
  }
  &.circle--increased {
    width: $height * 1.5;
    height: $height * 1.5;
  }
  &.circle--decreased {
    width: $height * 0.75;
    height: $height * 0.75;
  }
  &.circle--left-centered {
    right: calc(-50% + 25px);
  }
  &.circle--right-centered {
    left: calc(-50% + 25px);
  }
  &-one {
    background-color: #d8aa90;
  }
  &-two {
    background-color: #5f7374;
  }
}
</style>
