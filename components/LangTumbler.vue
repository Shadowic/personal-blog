<template>
  <div class="lang-tumbler">
    <span @click="$i18n.setLocale('ru')">ру</span>
    /
    <span @click="$i18n.setLocale('en')">en</span>
  </div>
</template>
<style lang="scss" scoped>
span {
  cursor: pointer;
  &:hover {
    color: #6f8c96;
    font-weight: 600;
  }
}
</style>
