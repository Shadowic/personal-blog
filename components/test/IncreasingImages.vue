<template>
  <section class="increasing">
    <h2>increasing images</h2>
    <div class="images">
      <div
        v-for="(item, id) in data"
        :key="id"
        class="images-item"
        @mouseover="setHoveredItemId(id, $event)"
        @click="rmAnim($event)"
      >
        <img :src="item" alt="img" draggable="false" />
      </div>
    </div>
    <p>click on image to reset</p>
  </section>
</template>

<script>
export default {
  name: 'IncreasingImages',
  data() {
    return {
      data: ['/imgs/IMG_9484.jpg', '/imgs/IMG_9547.jpg', '/imgs/IMG_9542.jpg'],
    }
  },
  methods: {
    setHoveredItemId(id, e) {
      const el = e.currentTarget
      el.classList.remove('animBack')
      el.classList.add('animated')
      el.style.zIndex = '10'

      el.addEventListener('animationend', listener, false)

      function listener(el) {
        if (el.type === 'animationend') {
          console.log('animationend')
        }
      }
    },
    rmAnim(e) {
      const el = e.currentTarget
      el.classList.remove('animated')
      el.classList.add('animBack')
    },
  },
}
</script>

<style lang="scss" scoped>
@keyframes increasing {
  0% {
    clip-path: circle(100px at 50% 30%);
  }
  15% {
    clip-path: circle(100px at 60% 25%);
  }
  30% {
    clip-path: circle(100px at 40% 35%);
  }
  45% {
    clip-path: circle(100px at 60% 25%);
  }
  65% {
    clip-path: circle(100px at 50% 50%);
  }
  100% {
    clip-path: circle(100% at 50% 50%);
  }
}
@keyframes decreasing {
  0% {
    clip-path: circle(100% at 50% 50%);
  }
  50% {
    clip-path: circle(100px at 50% 50%);
  }
  100% {
    clip-path: circle(100px at 50% 30%);
  }
}
.increasing {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 780px;
  padding: 0 40px;
  margin-top: 70px;
}
.images {
  width: 100%;
  max-width: 940px;
  padding: 62.5% 20px 0;
  margin-top: 50px;
  position: relative;
  border: 1px solid crimson;
  &-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    &:nth-child(1) {
      clip-path: circle(100px at 120px 120px);
    }
    &:nth-child(2) {
      clip-path: circle(100px at 50% 30%);
    }
    &:nth-child(3) {
      clip-path: circle(100px at 580px 120px);
    }
    &.animated {
      animation: 3s forwards increasing;
    }
    &.animBack {
      animation: 2s forwards decreasing;
    }
  }
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
