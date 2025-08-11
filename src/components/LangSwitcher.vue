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
  position: relative;
  display: flex;
  gap: 22px;
  button {
    height: fit-content;
    padding: 8px 22px;
    border-radius: 8px;
    background-color: #778069;
  }
}
</style>
