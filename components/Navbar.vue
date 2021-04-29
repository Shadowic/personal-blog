<template>
  <div class="navbar">
    <nuxt-link to="/" class="nav__item" @click.native="$emit('onLinkClick')">{{
      $t('main page')
    }}</nuxt-link>
    <nuxt-link
      to="/albums/travel"
      class="nav__item"
      @click.native="$emit('onLinkClick')"
      >{{ $t('travel') }}</nuxt-link
    >
    <nuxt-link
      to="/albums/ceramic"
      class="nav__item"
      @click.native="$emit('onLinkClick')"
      >{{ $t('ceramic') }}</nuxt-link
    >
    <nuxt-link to="/" @click.native="$emit('onLinkClick')"
      ><div class="symbol"
    /></nuxt-link>
    <nuxt-link
      to="/albums/flowers"
      class="nav__item"
      @click.native="$emit('onLinkClick')"
      >{{ $t('flowers') }}</nuxt-link
    >
    <nuxt-link
      to="/about"
      class="nav__item"
      @click.native="$emit('onLinkClick')"
      >{{ $t('about me') }}</nuxt-link
    >
  </div>
</template>

<i18n>
{
  "ru": {
    "main page": "главная",
    "travel": "путешествия",
    "ceramic": "керамика",
    "flowers": "цветы",
    "about me": "обо мне"
  },
  "en": {
    "main page": "main page",
    "travel": "travel",
    "ceramic": "ceramic",
    "flowers": "flowers",
    "about me": "about me"
  }
}
</i18n>

<script></script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.nav__item {
  color: #1c2522;
  margin: 17px 0;
  opacity: 0;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.2em;
  line-height: 1em;
  text-transform: uppercase;
  transform: translateY(10px);
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.24, 0.55, 0.2, 0.91);
  cursor: pointer;
  &:nth-child(2) {
    transition-delay: 0.3s;
  }
  &:nth-child(3) {
    transition-delay: 0.4s;
  }
  &:nth-child(4) {
    transition-delay: 0.5s;
  }
  &:nth-child(5) {
    transition-delay: 0.6s;
  }
  &:nth-child(6) {
    transition-delay: 0.7s;
  }
  .open & {
    opacity: 1;
    transform: translateY(0);
    transition-duration: 1s;
  }
  &:hover,
  &:focus,
  &:active {
    color: #79a2ac;
    transition: color 0.2s ease-out;
  }
}
.symbol {
  width: 80px;
  height: 80px;
  background: url('assets/logo.png') center/cover;
  margin: 0 10px;
}
</style>
