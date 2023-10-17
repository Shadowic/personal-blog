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
            zIndex: lastClickedId === 'c1' ? zIndexCircle + 1 : zIndexCircle,
            right: `${c1RightCirclePosition}`,
          }"
          @mouseover="setHoveredCircleId('c1')"
          @mouseleave="resetHoveredCircleId()"
          @click="moving('c1'), setClickedId('c1')"
        />
      </div>
      <div
        class="circles__center"
        :class="[
          { 'type-one': clickedCircleId === 'c1' },
          { 'type-two': clickedCircleId === 'c2' },
        ]"
      >
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
          class="circles__center-caption"
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
          <p class="circles__center-text">
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
            zIndex: lastClickedId === 'c2' ? zIndexCircle + 1 : zIndexCircle,
            left: `${c2LeftCirclePosition}`,
          }"
          @mouseover="setHoveredCircleId('c2')"
          @mouseleave="resetHoveredCircleId()"
          @click="moving('c2'), setClickedId('c2')"
        />
      </div>
    </div>
    <div class="reset-button">
      <button @click="resetState()">reset</button>
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
      lastClickedId: '',
      c1RightCirclePosition: '',
      c2LeftCirclePosition: '',
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
  mounted() {
    const rposition = this.$refs.c1.offsetLeft + 'px'
    this.c1RightCirclePosition = rposition
    const lposition = this.$refs.c2.offsetLeft + 'px'
    this.c2LeftCirclePosition = lposition
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
    setClickedId(id) {
      this.lastClickedId = id
    },
    resetState() {
      this.clickedCircleId = ''
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
      transition: opacity 0.5s 0.25s ease-in-out, left 0.75s ease-in-out,
        right 0.75s ease-in-out, top 0.75s ease-in-out, bottom 0.75s ease-in-out;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
    &-caption {
      display: flex;
      flex-direction: column;
      gap: 20px;
      position: absolute;
      opacity: 0;
      width: 300px;
      transition: opacity 0.5s 0.25s ease-in-out, left 0.75s ease-in-out,
        right 0.75s ease-in-out;
      left: -150px;
      right: -150px;
    }
    &-title {
      font-size: 24px;
    }
    &-text {
      font-size: 16px;
    }
    &.type-two {
      .circles__center-item.item-outed {
        opacity: 1;
      }
      .circles__center-item:nth-child(1) {
        top: -150px;
        left: unset;
        right: unset;
      }
      .circles__center-item:nth-child(2) {
        top: -115px;
        left: -115px;
        right: unset;
      }
      .circles__center-item:nth-child(3) {
        top: unset;
        left: -150px;
        right: unset;
        bottom: unset;
      }
      .circles__center-item:nth-child(4) {
        top: unset;
        left: -115px;
        bottom: -115px;
      }
      .circles__center-item:nth-child(5) {
        top: unset;
        left: unset;
        right: unset;
        bottom: -150px;
      }
      .circles__center-caption.item-outed {
        opacity: 1;
        left: unset;
        right: -420px;
      }
    }
    &.type-one {
      .circles__center-item.item-outed {
        opacity: 1;
      }
      .circles__center-item:nth-child(1) {
        top: -150px;
        left: unset;
        right: unset;
      }
      .circles__center-item:nth-child(2) {
        top: -115px;
        left: unset;
        right: -115px;
      }
      .circles__center-item:nth-child(3) {
        top: unset;
        left: unset;
        right: -150px;
        bottom: unset;
      }
      .circles__center-item:nth-child(4) {
        top: unset;
        left: unset;
        right: -115px;
        bottom: -115px;
      }
      .circles__center-item:nth-child(5) {
        top: unset;
        left: unset;
        right: unset;
        bottom: -150px;
      }
      .circles__center-caption.item-outed {
        opacity: 1;
        left: -420px;
        right: unset;
      }
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
  transition: left 0.5s ease-in-out, right 0.5s ease-in-out,
    top 0.5s ease-in-out, width 0.5s ease-in-out, height 0.5s ease-in-out;
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
    cursor: unset;
    right: -31.5% !important;
  }
  &.circle--right-centered {
    cursor: unset;
    left: -32.5% !important;
  }
  &-one {
    background-color: #d8aa90;
  }
  &-two {
    background-color: #5f7374;
  }
}
.reset-button {
  margin-top: 50px;
  button {
    border: 1px solid rgba(100, 139, 140, 0.35);
    outline: none;
    background: none;
    padding: 8px 30px;
    border-radius: 12px;
  }
}
</style>
