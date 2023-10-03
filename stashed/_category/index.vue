<template>
  <div class="container">
    <background-word :title="category.attributes.title" />
    <div class="title-mobile">{{ category.attributes.title }}</div>
    <AlbumsList
      :albums="category.attributes.albums.data"
      :code="category.attributes.code"
      class="albums-list"
    />
  </div>
</template>

<script>
export default {
  transition: {
    name: 'change-route',
    mode: 'out-in',
  },
  // async asyncData({ $strapi, i18n, params, error }) {
  //   try {
  //     const result = await $strapi.$http.$get(
  //       `/api/categories?filters[code]=${params.category}&locale=${i18n.locale}`
  //     )
  //     const categories = result.data
  //
  //     if (categories.length === 1) {
  //       return {
  //         category: categories[0],
  //       }
  //     }
  //
  //     error({ statusCode: 404, message: 'Category not found' })
  //   } catch (e) {
  //     console.log(e)
  //     return {}
  //   }
  // },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
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
}
.title-mobile {
  display: none;
  @include sm- {
    display: block;
    position: absolute;
    top: 10px;
    padding: 3%;
    font-size: 8vw;
    font-family: 'Caveat', cursive;
  }
}
</style>
