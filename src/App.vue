<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LangSwitcher from "./components/LangSwitcher.vue";
import Coffee from "./components/svgs/coffee.vue";
import Github from "./components/svgs/github.vue";
import Loupe from "./components/svgs/loupe.vue";
import Pinterest from "./components/svgs/pinterest.vue";
import Telegram from "./components/svgs/tg.vue";
import Coffee_cup from "./components/svgs/coffee_cup.vue";
import Heart from "./components/svgs/heart.vue";

const socialLinks = [
  {
    icon: Coffee,
    url: 'https://shadowic.space',
    title: 'Buy me a coffee :)'
  },
  {
    icon: Github,
    url: 'https://shadowic.space',
    title: 'GitHub profile'
  },
  {
    icon: Loupe,
    url: 'https://shadowic.space',
    title: 'Loupe profile'
  },
  {
    icon: Pinterest,
    url: 'https://shadowic.space',
    title: 'Pinterest profile'
  },
  {
    icon: Telegram,
    url: 'https://shadowic.space',
    title: 'Telegram profile'
  },
]
</script>

<template>
  <header class="header">
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
  </header>

  <div class="container" style="position: relative; z-index: 1; margin-top: 24px;">
    <LangSwitcher />
  </div>

  <RouterView />

  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__caption">
          Made with <coffee_cup class="footer__caption-coffee"></coffee_cup> and <heart class="footer__caption-heart"></heart>
        </div>
        <ul class="footer__links">
          <li v-for="link in socialLinks" :key="link.url">
            <a
              :href="link.url"
              :title="link.title"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__link"
            >
              <component :is="link.icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.header {
  display: flex;
  position: relative;
  z-index: 9999;
  transition: background 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out;
  font-family: 'DM Sans', sans-serif;
  font-optical-sizing: auto;
  font-size: 1rem;
  font-weight: 600;
  font-style: normal;
  overflow: hidden;
  &__content {
    display: flex;
    justify-content: center;
    align-items: stretch;
    width: fit-content;
    margin: 0 auto;
    padding: 12px 12px 0;
    color: var(--color-heading);
    position: relative;
    transition: color 0.3s ease-in-out;
    @include sm {
      padding: 24px 24px 0;
    }
    &:first-child::before,
    &:first-child::after {
      content: '';
      display: block;
      width: 20px;
      height: 1.5px;
      background-color: var(--color-border);
      position: absolute;
      bottom: 0;
      transition: background-color 0.3s ease-in-out;
      @include sm {
        width: 24px;
      }
    }
    &:first-child::before {
      left: -8px;
      @include sm {
        left: 0;
      }
    }
    &:first-child::after {
      right: -8px;
      @include sm {
        right: 0;
      }
    }
  }
  &__content-item {
    padding: 8px 12px 8px;
    border-bottom: 1.5px solid var(--color-border);
    transition: border-color 0.3s ease-in-out;
    align-content: center;
    text-align: center;
    @include sm {
      padding: 12px 24px 12px;
    }
    &:has(a.router-link-active.router-link-exact-active) {
      border: 1.5px solid var(--color-border);
      border-bottom-color: transparent;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
  }
}
.footer {
  position: relative;
  display: flex;
  font-family: 'DM Sans', sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  padding: 36px 0 48px;
  &__caption {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--color-text);
    &-coffee {
      width: 25px;
      height: 25px;
      transform: translateY(-2px);
    }
    &-heart {
      width: 20px;
      height: 20px;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
  &__links {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  &__link {
    display: flex;
    width: 20px;
    height: 20px;
    svg {
      transition: filter 0.3s ease-in-out;
      fill: var(--color-text);
      will-change: filter;
    }
    &:hover svg {
      filter: brightness(0) saturate(100%) invert(55%) sepia(7%) saturate(2902%) hue-rotate(308deg) brightness(86%) contrast(77%);
    }
  }
}
</style>
