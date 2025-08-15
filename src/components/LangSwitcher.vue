<template>
  <div class="language-switcher">
    <TheButton
      v-for="lang in availableLocales"
      :key="lang"
      @click="changeLanguage(lang)"
      :active="locale === lang"
    >
      <template #button>{{ lang }}</template>
    </TheButton>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import usePersistLocale from '../composables/usePersistLocale';
import TheButton from "./TheButton.vue";

const { locale } = usePersistLocale();
const { availableLocales } = useI18n();

type AppLocale = typeof availableLocales[number];

const changeLanguage = (lang: string) => {
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
}
</style>
