<template>
  <div class="container">
    <div class="albums">
      <AlbumCeramic
        v-for="(album, index) in limitedAlbums"
        :key="index"
        :title="album.title"
        :caption="album.caption"
        :description="album.description"
        :has-button="album.button"
        :button-text="album.buttonText"
        :button-link="album.buttonLink"
        :album-code="album.albumCode"
        :image-main="album.imageMain"
        :images-preview="album.imagesPreview"
      />
    </div>
  </div>
</template>

<script>
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
      albums: [
        {
          title: 'Фужер',
          description:
            'Фужер, словно хрустальный цветок, раскрывает свои лепестки для благородного вина. Из&nbsp;тонкого стекла, с&nbsp;изящной ножкой и&nbsp;широким ободком, он&nbsp;создан для того, чтобы подчеркнуть красоту и&nbsp;аромат напитка. В&nbsp;его глубине, играя на&nbsp;свету, вино раскрывает свои оттенки и&nbsp;вкусы, а&nbsp;фужер становится не&nbsp;просто посудой, а&nbsp;настоящим произведением искусства.',
          button: true,
          buttonText: 'перейти к фужерам',
          albumCode: 'fuzher',
          imageMain: '/imgs/IMG_0001.webp',
          imagesPreview: [
            '/imgs/IMG_0001.webp',
            '/imgs/IMG_0001.webp',
            '/imgs/IMG_0001.webp',
            '/imgs/IMG_0001.webp',
            '/imgs/IMG_0001.webp',
            '/imgs/IMG_0001.webp',
          ],
        },
        {
          title: 'Чашка',
          description:
            'Эта чашка&nbsp;&mdash; уютный уголок для ваших любимых напитков. С&nbsp;ее&nbsp;теплыми стенками и&nbsp;изящным ободком, она дарит комфорт и&nbsp;уют, а&nbsp;аромат чая или кофе становится еще более пленительным. В&nbsp;ее&nbsp;глубине&nbsp;&mdash; раскрываются вкусы напитков, а&nbsp;уютные вечера становятся более теплыми и&nbsp;комфортными.',
          button: true,
          buttonText: 'перейти к чашкам',
          albumCode: 'cakes',
          imageMain: '/imgs/IMG_0002.webp',
          imagesPreview: [
            '/imgs/IMG_0002.webp',
            '/imgs/IMG_0002.webp',
            '/imgs/IMG_0002.webp',
            '/imgs/IMG_0002.webp',
          ],
        },
        {
          title: 'Тарелка',
          description:
            'Эта тарелка&nbsp;&mdash; не&nbsp;просто пустая поверхность. Она&nbsp;&mdash; холст для кулинарного шедевра, где каждый ингредиент играет свою роль. Гладкая, изящная, с&nbsp;тонким ободком, она подчеркивает красоту и&nbsp;свежесть блюда, а&nbsp;ее&nbsp;размер идеально подходит для наслаждения каждой порцией. На&nbsp;ней&nbsp;&mdash; оживает праздничный стол, а&nbsp;кулинарные шедевры обретают свою завершенность.',
          button: true,
          buttonText: 'перейти к тарелкам',
          albumCode: 'travel',
          imageMain: '/imgs/IMG_0003.webp',
          imagesPreview: [
            '/imgs/IMG_0003.webp',
            '/imgs/IMG_0003.webp',
            '/imgs/IMG_0003.webp',
            '/imgs/IMG_0003.webp',
            '/imgs/IMG_0003.webp',
          ],
        },
        {
          title: 'Кружка',
          description:
            'Эта кружка - не просто сосуд для напитков, а настоящий друг по утрам и вечерам. Сделана из крепкой керамики, она хранит тепло напитка и дарит уют, а яркий рисунок на ее поверхности поднимает настроение. Неважно, пьете ли вы кофе, чай или просто воду, эта кружка сделает ваш ритуал приятнее и комфортнее.',
          button: true,
          buttonText: 'перейти к кружкам',
          albumCode: 'cake',
          imageMain: '/imgs/IMG_0004.webp',
          imagesPreview: [
            '/imgs/IMG_0004.webp',
            '/imgs/IMG_0004.webp',
            '/imgs/IMG_0004.webp',
            '/imgs/IMG_0004.webp',
            '/imgs/IMG_0004.webp',
          ],
        },
      ],
    }
  },
  computed: {
    limitedAlbums() {
      return this.albums.map((album) => ({
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
