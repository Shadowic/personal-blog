<template>
  <button class="button" @click="$emit('click')">
    <slot name="button"></slot>
  </button>
</template>

<script setup lang="ts">
defineEmits(['click'])
</script>

<style lang="scss" scoped>
.button {
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
