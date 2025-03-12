<template>
  <div class="container">
    <div class="albums">
      <AlbumCeramic
        v-for="(album, index) in limitedAlbums"
        :key="index"
        :title="$t(album.title)"
        :caption="$t(album.caption)"
        :description="$t(album.description)"
        :has-button="album.button"
        :button-text="$t(album.buttonText)"
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
      isTablet: false,
      filteredAlbums: [],
    }
  },
  fetch() {
    try {
      this.filteredAlbums = albums.filter(
        (album) => album.albumCode === 'ceramicon'
      )

      if (this.filteredAlbums.length === 0) {
        throw new Error('Альбомы не найдены')
      }
    } catch (err) {
      this.$nuxt.error({ statusCode: 404, message: err.message })
    }
  },
  computed: {
    limitedAlbums() {
      return this.filteredAlbums.map((album) => ({
        ...album,
        imagesPreview: this.isTablet
          ? album.imagesPreview.slice(0, 3)
          : album.imagesPreview,
      }))
    },
  },
  mounted() {
    this.checkIfTablet()
    window.addEventListener('resize', this.checkIfTablet)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkIfTablet)
  },
  methods: {
    checkIfTablet() {
      this.isTablet = window.innerWidth >= 744 && window.innerWidth <= 991
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
