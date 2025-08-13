<template>
  <div class="search-bar">
    <TheButton
      v-for="(code, index) in albumCodes"
      :key="index"
      :class="{ active: activeTab === index }"
      @click="chooseTab(code, index)"
    >
      <template #button>{{ code }}</template>
    </TheButton>
    <TheButton
      :class="{ active: activeTab === null }"
      @click="resetFilter"
    >
      <template #button>reset</template>
    </TheButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TheButton from "./TheButton.vue";

defineProps<{
  albumCodes: string[];
}>();

const emit = defineEmits<{
  (e: 'select', code: string | null): void;
}>();

const activeTab = ref<number | null>(null);

const chooseTab = (code: string, index: number) => {
  activeTab.value = index;
  emit('select', code);
};

const resetFilter = () => {
  activeTab.value = null;
  emit('select', null);
};
</script>

<style lang="scss" scoped>
.search-bar {
  position: relative;
  display: flex;
  gap: 16px;
}
</style>
