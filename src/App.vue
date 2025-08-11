<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LangSwitcher from "./components/LangSwitcher.vue";
</script>

<template>
  <header class="header">
    <div class="container">
      <ul class="header__content">
        <li class="header__content-item active">
          <RouterLink to="/">Main</RouterLink>
        </li>
        <li class="header__content-item">
          <RouterLink :to="{ name: 'all-albums' }">Albums</RouterLink>
        </li>
        <li class="header__content-item">
          <RouterLink :to="{ name: 'test-page' }">Test page</RouterLink>
        </li>
        <li class="header__content-item">
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
        </li>
      </ul>
      <LangSwitcher />
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss">
.header {
  display: flex;
  position: relative;
  z-index: 9999;
  transition: background 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out;
  font-family: 'DM Sans', sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    margin: 0 auto;
    padding: 24px 24px 0;
    list-style: none;
    color: #a28154;
    position: relative;
    transition: color 0.3s ease-in-out;
    &:first-child::before,
    &:first-child::after {
      content: '';
      display: block;
      width: 24px;
      height: 1.5px;
      background-color: #a28154;
      position: absolute;
      bottom: 0.5px;
      transition: background-color 0.3s ease-in-out;
    }
    &:first-child::before {
      left: 0;
    }
    &:first-child::after {
      right: 0;
    }
  }
  &__content-item {
    padding: 12px 24px 12px;
    border-bottom: 1.5px solid #a28154;
    transition: border-color 0.3s ease-in-out;
    &:has(a.router-link-active.router-link-exact-active) {
      border: 1.5px solid #a28154;
      border-bottom-color: transparent;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
  }
}

//.headroom--not-top,
//.headroom--top .headroom--not-bottom {
//  .header {
//    background: #020a1d40;
//    backdrop-filter: blur(25px);
//    padding-bottom: 12px;
//  }
//  .header__content {
//    color: #c5ad8b;
//  }
//  .header__content::before,
//  .header__content::after {
//    background-color: transparent;
//  }
//  .header__content-item {
//    border-color: transparent;
//  }
//}
</style>
