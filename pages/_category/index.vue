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
      isDesktop: false,
      albums: [
        {
          title: 'Дрезден',
          caption: 'сентябрь 2019',
          description:
            'Дрезден&nbsp;&mdash; это город, где история сплетается с&nbsp;роскошью. Прогуляйтесь по&nbsp;Цвингеру, восхищаясь его архитектурой, окунитесь в&nbsp;мир искусства в&nbsp;Альбертинуме, пройдитесь по&nbsp;берегу Эльбы, любуясь панорамой города,&nbsp;&mdash; и&nbsp;вы&nbsp;поймете, почему Дрезден называют &quot;Флоренцией на&nbsp;Эльбе&quot;.Дрезден&nbsp;&mdash; это город, где история сплетается с&nbsp;роскошью. Прогуляйтесь по&nbsp;Цвингеру, восхищаясь его архитектурой, окунитесь в&nbsp;мир искусства в&nbsp;Альбертинуме, пройдитесь по&nbsp;берегу Эльбы, любуясь панорамой города,&nbsp;&mdash; и&nbsp;вы&nbsp;поймете, почему Дрезден называют &quot;Флоренцией на&nbsp;Эльбе&quot;.Дрезден&nbsp;&mdash; это город, где история сплетается с&nbsp;роскошью. Прогуляйтесь по&nbsp;Цвингеру, восхищаясь его архитектурой, окунитесь в&nbsp;мир искусства в&nbsp;Альбертинуме, пройдитесь по&nbsp;берегу Эльбы, любуясь панорамой города,&nbsp;&mdash; и&nbsp;вы&nbsp;поймете, почему Дрезден называют &quot;Флоренцией на&nbsp;Эльбе&quot;.Дрезден&nbsp;&mdash; это город, где история сплетается с&nbsp;роскошью. Прогуляйтесь по&nbsp;Цвингеру, восхищаясь его архитектурой, окунитесь в&nbsp;мир искусства в&nbsp;Альбертинуме, пройдитесь по&nbsp;берегу Эльбы, любуясь панорамой города,&nbsp;&mdash; и&nbsp;вы&nbsp;поймете, почему Дрезден называют &quot;Флоренцией на&nbsp;Эльбе&quot;.Дрезден&nbsp;&mdash; это город, где история сплетается с&nbsp;роскошью. Прогуляйтесь по&nbsp;Цвингеру, восхищаясь его архитектурой, окунитесь в&nbsp;мир искусства в&nbsp;Альбертинуме, пройдитесь по&nbsp;берегу Эльбы, любуясь панорамой города,&nbsp;&mdash; и&nbsp;вы&nbsp;поймете, почему Дрезден называют &quot;Флоренцией на&nbsp;Эльбе&laquo;.Дрезден&nbsp;&mdash; это город, где история сплетается с&nbsp;роскошью. Прогуляйтесь по&nbsp;Цвингеру, восхищаясь его архитектурой, окунитесь в&nbsp;мир искусства в&nbsp;Альбертинуме, пройдитесь по&nbsp;берегу Эльбы, любуясь панорамой города,&nbsp;&mdash; и&nbsp;вы&nbsp;поймете, почему Дрезден называют &laquo;Флоренцией на&nbsp;Эльбе&raquo;.',
          button: true,
          buttonText: 'перейти',
          albumCode: 'travel',
          imageMain: '/imgs/IMG_9547.jpg',
          imagesPreview: [
            '/imgs/IMG_9408.jpg',
            '/imgs/IMG_9484.jpg',
            '/imgs/IMG_9542.jpg',
            '/imgs/IMG_9408.jpg',
            '/imgs/IMG_9484.jpg',
            '/imgs/IMG_9542.jpg',
          ],
        },
        {
          title: 'бердин',
          caption: 'ферваль 2017',
          description:
            'Бердин&nbsp;&mdash; это место, где история встречается с&nbsp;природой. Здесь вы&nbsp;можете увидеть руины древних крепостей, пройтись по&nbsp;лесам, полным грибов и&nbsp;ягод, и&nbsp;полюбоваться красотой нетронутой природы. Бердин&nbsp;&mdash; это идеальное место для тех, кто хочет отдохнуть от&nbsp;шума города и&nbsp;погрузиться в&nbsp;атмосферу спокойствия и&nbsp;красоты.',
          button: true,
          buttonText: 'button',
          albumCode: 'cakes',
          imageMain: '/imgs/IMG_9547.jpg',
          imagesPreview: [
            '/imgs/IMG_9408.jpg',
            '/imgs/IMG_9484.jpg',
            '/imgs/IMG_9542.jpg',
            '/imgs/IMG_9408.jpg',
            '/imgs/IMG_9484.jpg',
            '/imgs/IMG_9542.jpg',
          ],
        },
        {
          title: 'Гейдельберг',
          caption: 'ферваль 2017',
          description:
            'Гейдельберг&nbsp;&mdash; это место, где история и&nbsp;современность сплетаются в&nbsp;единое целое. Здесь вы&nbsp;найдете очаровательные средневековые улочки, монументальные замки и&nbsp;современные архитектурные шедевры. Прогулка по&nbsp;Гейдельбергу&nbsp;&mdash; это увлекательное путешествие во&nbsp;времени, где каждый уголок хранит свои секреты и&nbsp;легенды.',
          button: true,
          buttonText: 'перейти',
          albumCode: 'travel',
          imageMain: '/imgs/IMG_9547.jpg',
          imagesPreview: [
            '/imgs/IMG_9408.jpg',
            '/imgs/IMG_9484.jpg',
            '/imgs/IMG_9542.jpg',
            '/imgs/IMG_9408.jpg',
            '/imgs/IMG_9484.jpg',
            '/imgs/IMG_9542.jpg',
          ],
        },
        {
          title: 'дрезден',
          caption: 'март 2016',
          description:
            'Бердин&nbsp;&mdash; это место, где история встречается с&nbsp;природой. Здесь вы&nbsp;можете увидеть руины древних крепостей, пройтись по&nbsp;лесам, полным грибов и&nbsp;ягод, и&nbsp;полюбоваться красотой нетронутой природы. Бердин&nbsp;&mdash; это идеальное место для тех, кто хочет отдохнуть от&nbsp;шума города и&nbsp;погрузиться в&nbsp;атмосферу спокойствия и&nbsp;красоты.Гейдельберг&nbsp;&mdash; это место, где история и&nbsp;современность сплетаются в&nbsp;единое целое. Здесь вы&nbsp;найдете очаровательные средневековые улочки, монументальные замки и&nbsp;современные архитектурные шедевры. Прогулка по&nbsp;Гейдельбергу&nbsp;&mdash; это увлекательное путешествие во&nbsp;времени, где каждый уголок хранит свои секреты и&nbsp;легенды.Дрезден&nbsp;&mdash; это город, где история сплетается с&nbsp;роскошью. Прогуляйтесь по&nbsp;Цвингеру, восхищаясь его архитектурой, окунитесь в&nbsp;мир искусства в&nbsp;Альбертинуме, пройдитесь по&nbsp;берегу Эльбы, любуясь панорамой города,&nbsp;&mdash; и&nbsp;вы&nbsp;поймете, почему Дрезден называют &laquo;Флоренцией на&nbsp;Эльбе&raquo;.',
          button: true,
          buttonText: 'button',
          albumCode: 'cake',
          imageMain: '/imgs/IMG_9547.jpg',
          imagesPreview: [
            '/imgs/IMG_9408.jpg',
            '/imgs/IMG_9484.jpg',
            '/imgs/IMG_9542.jpg',
            '/imgs/IMG_9408.jpg',
            '/imgs/IMG_9484.jpg',
            '/imgs/IMG_9542.jpg',
          ],
        },
      ],
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
