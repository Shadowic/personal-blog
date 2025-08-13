<template>
  <div class="language-switcher">
    <button
      v-for="lang in availableLocales"
      :key="lang"
      @click="changeLanguage(lang)"
    >
      {{ lang }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale, availableLocales } = useI18n();

type AppLocale = typeof availableLocales[number];

const changeLanguage = (lang: AppLocale) => {
  locale.value = lang;
};
</script>

<style lang="scss" scoped>
.language-switcher {
  position: absolute;
  top: 30px;
  left: 40px;
  display: flex;
  gap: 22px;
  button {
    height: fit-content;
    padding: 10px 20px;
    background-color: #6f8c96;
    color: #d0d8db;
    border-radius: 12px;
    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
    &:hover {
      background-color: #6f8c9685;
    }
  }
}
</style>
