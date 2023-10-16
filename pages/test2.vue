<template>
  <div class="test2">
    <h1>Something new is coming soon</h1>
    <div class="circles">
      <div class="circles__item">
        <div
          ref="c1"
          class="circle circle-one"
          :class="[
            {
              'circle--increased':
                hoveredCircleId === 'c1' || clickedCircleId === 'c1',
            },
            {
              'circle--decreased':
                hoveredCircleId === 'c2' || clickedCircleId === 'c2',
            },
            { 'circle--unanimated': clickedCircleId !== '' },
            { 'circle--left-centered': clickedCircleId !== '' },
          ]"
          :style="{
            zIndex: clickedCircleId === 'c1' ? zIndexCircle + 1 : zIndexCircle,
          }"
          @mouseover="setHoveredCircleId('c1')"
          @mouseleave="resetHoveredCircleId()"
          @click="moving('c1')"
        />
      </div>
      <div class="circles__center">
        <div
          class="circles__center-item"
          :class="{ 'item-outed': clickedCircleId !== '' }"
        />
        <div
          class="circles__center-item"
          :class="{ 'item-outed': clickedCircleId !== '' }"
        />
        <div
          class="circles__center-item"
          :class="{ 'item-outed': clickedCircleId !== '' }"
        />
        <div
          class="circles__center-item"
          :class="{ 'item-outed': clickedCircleId !== '' }"
        />
        <div
          class="circles__center-item"
          :class="{ 'item-outed': clickedCircleId !== '' }"
        />
        <div
          class="circles__center-text"
          :class="{ 'item-outed': clickedCircleId !== '' }"
        >
          <h2 class="circles__center-title">
            <span v-if="clickedCircleId === 'c1'">
              {{ data.leftCircleData.title }}
            </span>
            <span v-if="clickedCircleId === 'c2'">
              {{ data.rightCircleData.title }}
            </span>
          </h2>
          <p class="circles__center-caption">
            <span v-if="clickedCircleId === 'c1'">
              {{ data.leftCircleData.text }}
            </span>
            <span v-if="clickedCircleId === 'c2'">
              {{ data.rightCircleData.text }}
            </span>
          </p>
        </div>
      </div>
      <div class="circles__item">
        <div
          ref="c2"
          class="circle circle-two"
          :class="[
            {
              'circle--increased':
                hoveredCircleId === 'c2' || clickedCircleId === 'c2',
            },
            {
              'circle--decreased':
                hoveredCircleId === 'c1' || clickedCircleId === 'c1',
            },
            { 'circle--unanimated': clickedCircleId !== '' },
            { 'circle--right-centered': clickedCircleId !== '' },
          ]"
          :style="{
            zIndex: clickedCircleId === 'c2' ? zIndexCircle + 1 : zIndexCircle,
          }"
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
      zIndexCircle: 5,
      data: {
        leftCircleData: {
          title: 'Left circle is clicked',
          text: 'Sed sed lacinia lorem. Vivamus ultricies mi lectus, a accumsan justo imperdiet gravida. Maecenas dictum placerat dolor. Aliquam erat volutpat. Donec pulvinar vitae massa iaculis rhoncus.',
        },
        rightCircleData: {
          title: 'Right circle is clicked',
          text: 'Nam fringilla, nisi sed dignissim laoreet, sapien erat euismod tortor, et feugiat est magna non tortor. Duis tempus id massa vitae placerat. Pellentesque pretium interdum elit sed ullamcorper. Nam sit amet pellentesque quam.',
        },
      },
    }
  },
  methods: {
    setHoveredCircleId(id) {
      if (this.hoveredCircleId === '') {
        this.hoveredCircleId = id
      }
    },
    resetHoveredCircleId() {
      this.hoveredCircleId = ''
    },
    moving(id) {
      this.clickedCircleId = id
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
  justify-content: center;
  align-items: center;
  gap: 25px;
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
  &__center {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1px;
    height: 1px;
    &-item {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #79a2ac;
      position: absolute;
      opacity: 0;
      transition: opacity 0.5s ease-in-out, left 1s ease-in-out,
        right 1s ease-in-out, top 1s ease-in-out, bottom 1s ease-in-out;
      &.item-outed {
        opacity: 1;
        &:nth-child(1) {
          top: -150px;
        }
        &:nth-child(2) {
          top: -115px;
          left: -115px;
        }
        &:nth-child(3) {
          left: -150px;
        }
        &:nth-child(4) {
          left: -115px;
          bottom: -115px;
        }
        &:nth-child(5) {
          bottom: -150px;
        }
      }
    }
    &-text {
      display: flex;
      flex-direction: column;
      gap: 20px;
      position: absolute;
      opacity: 0;
      width: 300px;
      &.item-outed {
        opacity: 1;
        right: -420px;
      }
    }
    &-title {
      font-size: 24px;
    }
    &-caption {
      font-size: 16px;
    }
  }
}
.circle {
  width: $width;
  height: $height;
  border-radius: 50%;
  position: absolute;
  transform: translateY(-50%);
  cursor: pointer;
  transition: left 2s ease-in-out, right 2s ease-in-out, top 1s ease-in-out,
    width 0.5s ease-in-out, height 0.5s ease-in-out;
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
    right: -31.5%;
  }
  &.circle--right-centered {
    left: -32.5%;
  }
  &-one {
    background-color: #d8aa90;
  }
  &-two {
    background-color: #5f7374;
  }
}
</style>
