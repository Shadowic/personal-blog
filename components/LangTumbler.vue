<template>
  <div class="lang-tumbler">
    <nuxt-link :to="switchLocalePath('ru')">ру</nuxt-link>
    /
    <nuxt-link :to="switchLocalePath('en')">en</nuxt-link>
  </div>
  <!--    <span @click="$i18n.setLocale('ru')">ру</span>-->
  <!--    <span @click="$i18n.setLocale('en')">en</span>-->
</template>
<style lang="scss" scoped>
.lang-tumbler {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  line-height: 1em;
  color: #919a99;
  @include sm- {
    font-size: 14px;
  }
}
span {
  display: inline-block;
  cursor: pointer;
  transition: all 0.2s ease-out;
  transform: translateY(-1px);
  &:hover,
  &:focus,
  &:active {
    color: dimgray;
  }
}
</style>
