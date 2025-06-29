<template>
  <div>
    <HeaderNew />
    <div class="test5">
      <ParticlesBackground />
      <div class="test5__main">
        <h1 class="test5__title">Ceramicon, bitte</h1>
        <div class="test5__albums">
          <div class="test5__albums-bg" />
          <div v-for="(item, i) in 24" :key="i" class="test5__album">
            <img src="/imgs/IMG_0003.webp" alt="photo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.test5 .particles-container {
  background-color: #020a1d;
}
</style>

<style lang="scss" scoped>
.test5 {
  min-height: 100vh;
  padding: 96px 10px;
  &__main {
    position: relative;
    max-width: 1140px;
    padding-inline: 10px;
    margin: 0 auto;
  }
  &__title {
    font-family: 'DM Sans', sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
    font-size: 8vw;
    color: #a28154;
  }
  &__albums {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 58px 36px;
    position: relative;
    margin-top: 22px;
    @include md- {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  &__albums-bg {
    position: absolute;
    inset: 0;
    border-radius: 24px;
    background: rgba(2, 10, 29, 0.25);
    backdrop-filter: blur(5px);
  }
  &__album {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 12px 36px;
    background-color: #1c294375;
    border-radius: 16px;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 12px;
    }
  }
}
</style>
