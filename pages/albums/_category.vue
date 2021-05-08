<template>
  <div class="container">
    <background-word :title="$t($route.params.category)" />
    <div class="title-mobile">{{ $t($route.params.category) }}</div>
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
  margin: 60px auto;
  padding: 0 20px;
  position: relative;
  /deep/ .album:not(:last-child) {
    @include sm- {
      margin-bottom: 25px;
    }
  }
  /deep/ .album__cover {
    @include xs- {
      height: 200px;
    }
  }
  /deep/ .album__description {
    @include xs- {
      font-size: 22px;
    }
  }
  /deep/ .album__outline .btn {
    @include sm- {
      display: none;
    }
  }
  @include sm- {
    margin-bottom: 0;
  }
  /deep/ .background {
    padding: 5% 1%;
  }
}
.title-mobile {
  display: none;
  @include sm- {
    display: block;
    position: absolute;
    top: 10px;
    padding: 3%;
    font-size: 8vw;
    font-family: 'PlayfairDisplay Semi-bold', serif;
  }
}
/deep/ .hovered .album__image-cover,
/deep/ .album__cover:hover .album__image-cover {
  transform: scale(1);
  clip-path: inset(5% 5% 5% 5%);
}
</style>
