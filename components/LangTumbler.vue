<template>
  <div class="lang-tumbler">
    <span @click="$i18n.setLocale('ru')">ру</span>
    /
    <span @click="$i18n.setLocale('en')">en</span>
  </div>
</template>
<style lang="scss" scoped>
.lang-tumbler {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  line-height: 1em;
  @include sm- {
    font-size: 14px;
  }
}
span {
  display: inline-block;
  cursor: pointer;
  transition: all 0.2s ease-out;
  transform: translateY(-1px);
}
</style>
