<template>
  <div class="container">
    <div class="albums">
      <AlbumCommon
        v-for="(album, index) in limitedAlbums"
        :key="index"
        :title="album.title"
        :caption="album.caption"
        :description="album.description"
        :has-button="true"
        :button-text="album.buttonText"
        :button-link="album.buttonLink"
        :album-code="album.albumCode"
        :page-code="album.pageCode"
        :image-main="album.imageMain"
        :images-preview="album.imagesPreview"
      />
    </div>
  </div>
</template>

<script>
import albums from 'static/albums.json'

export default {
  layout: 'page',
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
    return {
      isDesktop: false,
      albums,
    }
  },
  computed: {
    limitedAlbums() {
      return this.albums.map((album) => ({
        ...album,
        imagesPreview: this.isDesktop
          ? album.imagesPreview.slice(0, 3)
          : album.imagesPreview,
      }))
    },
  },
  mounted() {
    this.checkIfDesktop()
    window.addEventListener('resize', this.checkIfDesktop)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkIfDesktop)
  },
  methods: {
    checkIfDesktop() {
      this.isDesktop = window.innerWidth >= 992
    },
  },
}
</script>

<style lang="scss" scoped>
.albums {
  display: flex;
  flex-direction: column;
  gap: 40px;
  @include md {
    gap: 88px;
  }
  @include lg {
    gap: 96px;
  }
}
</style>
