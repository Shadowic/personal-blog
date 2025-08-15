import { useI18n } from 'vue-i18n';
import { onMounted, watch } from 'vue';

export default function usePersistLocale() {
  const { locale, availableLocales } = useI18n();
  const LOCALE_STORAGE_KEY = 'user-locale';

  const getSavedLocale = () => {
    try {
      return localStorage.getItem(LOCALE_STORAGE_KEY);
    } catch (e) {
      console.error('LocalStorage access error:', e);
      return null;
    }
  };

  onMounted(() => {
    const savedLocale = getSavedLocale();
    if (savedLocale && availableLocales.includes(savedLocale)) {
      locale.value = savedLocale;
    }
  });

  watch(locale, (newLocale) => {
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
      document.documentElement.lang = newLocale;
    } catch (e) {
      console.error('Failed to save locale:', e);
    }
  });

  return { locale };
}
