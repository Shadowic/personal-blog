<template>
  <div class="container">
    <background-word :title="$t($route.params.category)" />
    <AlbumsList album-link="albums" :category="$route.params.category" />
  </div>
</template>
<i18n>
{
  "ru": {
    "ceramic": "Керамика",
    "travel": "Путешествия",
    "flowers": "Цветы"
  },
  "en": {
    "ceramic": "Ceramic",
    "travel": "Travel",
    "flowers": "flowers"
  }
}
</i18n>
<style lang="scss" scoped>
.container {
  max-width: 1200px;
  padding-left: 80px;
  margin: 80px auto 50px;
  position: relative;
}
/deep/ .hovered .album__image-cover,
/deep/ .album__cover:hover .album__image-cover {
  transform: scale(1);
  clip-path: inset(5% 5% 5% 5%);
}
</style>
