<template>
  <div class="main">
    <div class="banner" />
    <div class="content">
      <h1 class="content__title">Neque porro quisquam est qui dolorem ipsum</h1>
      <p class="content__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed
        erat fringilla mi gravida lacinia et ac est. Nullam sed diam
        scelerisque, dapibus nulla sit amet, pulvinar mi. Vestibulum ultricies
        lacinia fermentum. Nam et felis eu risus pretium interdum non non diam.
        Mauris sollicitudin nunc imperdiet, viverra augue non, molestie elit.
        Proin maximus pulvinar mauris, vel vestibulum nulla. Donec neque turpis,
        congue eget mi quis, gravida porttitor dui. Sed feugiat scelerisque
        facilisis. Vestibulum bibendum nibh vitae magna pretium, sed consectetur
        mauris volutpat.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClipPathEffects',
  mounted() {
    this.effect()
  },
  methods: {
    effect() {
      const pos = document.documentElement

      let prevX = null
      let prevY = null

      pos.addEventListener('mousemove', (e) => {
        const currX = e.clientX
        const currY = e.clientY

        if (prevX && prevY) {
          const speedX = Math.abs(currX - prevX)
          const speedY = Math.abs(currY - prevY)

          const clipPathSize = Math.min(speedX, speedY) * 7.5 + 50

          pos.style.setProperty('--x', e.clientX + 'px')
          pos.style.setProperty('--y', e.clientY + 'px')
          pos.style.setProperty('--clip-path-size', clipPathSize + 'px')
        }

        prevX = currX
        prevY = currY
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-color: #ab274f75;
}
.banner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: center/cover url('/imgs/IMG_9542.jpg');
  transition: 0.2s;
  z-index: 0;
  clip-path: circle(var(--clip-path-size, 75px) at var(--x) var(--y));
  &:active {
    clip-path: circle(400px at var(--x) var(--y));
  }
}
.content {
  position: relative;
  max-width: 1100px;
  z-index: 1;
  color: #fff;
  mix-blend-mode: overlay;
  pointer-events: none;
  user-select: none;
  &__title {
    font-size: 40px;
  }
  &__text {
    font-size: 18px;
    margin-top: 20px;
  }
}
</style>
