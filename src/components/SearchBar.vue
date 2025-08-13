<template>
  <div class="search-bar">
    <button
      v-for="(code, index) in albumCodes"
      :key="index"
      class="tab"
      :class="{ active: activeTab === index }"
      @click="chooseTab(code, index)"
    >
      {{ code }}
    </button>
    <button
      class="tab"
      :class="{ active: activeTab === null }"
      @click="resetFilter"
    >
      reset
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  albumCodes: string[];
}>();

const emit = defineEmits<{
  (e: 'select', code: string | null): void;
}>();

const activeTab = ref<number | null>(null);

const chooseTab = (code: string, index: number) => {
  activeTab.value = index;
  emit('select', code);  // Отправляем выбранный код
};

const resetFilter = () => {
  activeTab.value = null;
  emit('select', null);  // Сбрасываем фильтр (показываем всё)
};
</script>

<style lang="scss" scoped>
.search-bar {
  position: relative;
  display: flex;
  gap: 16px;
}
.tab {
  padding: 10px 20px;
  background-color: #6f8c96;
  color: #d0d8db;
  border-radius: 12px;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  &:hover {
    background-color: #6f8c9685;
  }
  &.active {
    background-color: #d8aa90;
  }
}
</style>
