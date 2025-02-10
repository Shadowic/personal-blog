<template>
  <div class="container">
    <div class="albums-v2">
      <Albumv2
        v-for="(album, index) in albums"
        :key="index"
        :title="album.title"
        :description="album.description"
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
  data() {
    return {
      albums: [
        {
          title: 'Дрезден',
          description:
            'Дрезден&nbsp;&mdash; это город, где история сплетается с&nbsp;роскошью. Прогуляйтесь по&nbsp;Цвингеру, восхищаясь его архитектурой, окунитесь в&nbsp;мир искусства в&nbsp;Альбертинуме, пройдитесь по&nbsp;берегу Эльбы, любуясь панорамой города,&nbsp;&mdash; и&nbsp;вы&nbsp;поймете, почему Дрезден называют &quot;Флоренцией на&nbsp;Эльбе&quot;.Дрезден&nbsp;&mdash; это город, где история сплетается с&nbsp;роскошью. Прогуляйтесь по&nbsp;Цвингеру, восхищаясь его архитектурой, окунитесь в&nbsp;мир искусства в&nbsp;Альбертинуме, пройдитесь по&nbsp;берегу Эльбы, любуясь панорамой города,&nbsp;&mdash; и&nbsp;вы&nbsp;поймете, почему Дрезден называют &quot;Флоренцией на&nbsp;Эльбе&quot;.Дрезден&nbsp;&mdash; это город, где история сплетается с&nbsp;роскошью. Прогуляйтесь по&nbsp;Цвингеру, восхищаясь его архитектурой, окунитесь в&nbsp;мир искусства в&nbsp;Альбертинуме, пройдитесь по&nbsp;берегу Эльбы, любуясь панорамой города,&nbsp;&mdash; и&nbsp;вы&nbsp;поймете, почему Дрезден называют &quot;Флоренцией на&nbsp;Эльбе&quot;.Дрезден&nbsp;&mdash; это город, где история сплетается с&nbsp;роскошью. Прогуляйтесь по&nbsp;Цвингеру, восхищаясь его архитектурой, окунитесь в&nbsp;мир искусства в&nbsp;Альбертинуме, пройдитесь по&nbsp;берегу Эльбы, любуясь панорамой города,&nbsp;&mdash; и&nbsp;вы&nbsp;поймете, почему Дрезден называют &quot;Флоренцией на&nbsp;Эльбе&quot;.Дрезден&nbsp;&mdash; это город, где история сплетается с&nbsp;роскошью. Прогуляйтесь по&nbsp;Цвингеру, восхищаясь его архитектурой, окунитесь в&nbsp;мир искусства в&nbsp;Альбертинуме, пройдитесь по&nbsp;берегу Эльбы, любуясь панорамой города,&nbsp;&mdash; и&nbsp;вы&nbsp;поймете, почему Дрезден называют &quot;Флоренцией на&nbsp;Эльбе&laquo;.Дрезден&nbsp;&mdash; это город, где история сплетается с&nbsp;роскошью. Прогуляйтесь по&nbsp;Цвингеру, восхищаясь его архитектурой, окунитесь в&nbsp;мир искусства в&nbsp;Альбертинуме, пройдитесь по&nbsp;берегу Эльбы, любуясь панорамой города,&nbsp;&mdash; и&nbsp;вы&nbsp;поймете, почему Дрезден называют &laquo;Флоренцией на&nbsp;Эльбе&raquo;.',
          button: true,
          buttonText: 'перейти',
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
          description:
            'Бердин&nbsp;&mdash; это место, где история встречается с&nbsp;природой. Здесь вы&nbsp;можете увидеть руины древних крепостей, пройтись по&nbsp;лесам, полным грибов и&nbsp;ягод, и&nbsp;полюбоваться красотой нетронутой природы. Бердин&nbsp;&mdash; это идеальное место для тех, кто хочет отдохнуть от&nbsp;шума города и&nbsp;погрузиться в&nbsp;атмосферу спокойствия и&nbsp;красоты.',
          button: true,
          buttonText: 'button',
          imageMain: '/imgs/IMG_9547.jpg',
          imagesPreview: [
            '/imgs/IMG_9408.jpg',
            '/imgs/IMG_9484.jpg',
            '/imgs/IMG_9542.jpg',
            '/imgs/IMG_9408.jpg',
          ],
        },
        {
          title: 'Гейдельберг',
          description:
            'Гейдельберг&nbsp;&mdash; это место, где история и&nbsp;современность сплетаются в&nbsp;единое целое. Здесь вы&nbsp;найдете очаровательные средневековые улочки, монументальные замки и&nbsp;современные архитектурные шедевры. Прогулка по&nbsp;Гейдельбергу&nbsp;&mdash; это увлекательное путешествие во&nbsp;времени, где каждый уголок хранит свои секреты и&nbsp;легенды.',
          button: true,
          buttonText: 'перейти',
          imageMain: '/imgs/IMG_9547.jpg',
          imagesPreview: [
            '/imgs/IMG_9408.jpg',
            '/imgs/IMG_9484.jpg',
            '/imgs/IMG_9542.jpg',
            '/imgs/IMG_9408.jpg',
            '/imgs/IMG_9542.jpg',
          ],
        },
        {
          title: 'дрезден',
          description:
            'Бердин&nbsp;&mdash; это место, где история встречается с&nbsp;природой. Здесь вы&nbsp;можете увидеть руины древних крепостей, пройтись по&nbsp;лесам, полным грибов и&nbsp;ягод, и&nbsp;полюбоваться красотой нетронутой природы. Бердин&nbsp;&mdash; это идеальное место для тех, кто хочет отдохнуть от&nbsp;шума города и&nbsp;погрузиться в&nbsp;атмосферу спокойствия и&nbsp;красоты.Гейдельберг&nbsp;&mdash; это место, где история и&nbsp;современность сплетаются в&nbsp;единое целое. Здесь вы&nbsp;найдете очаровательные средневековые улочки, монументальные замки и&nbsp;современные архитектурные шедевры. Прогулка по&nbsp;Гейдельбергу&nbsp;&mdash; это увлекательное путешествие во&nbsp;времени, где каждый уголок хранит свои секреты и&nbsp;легенды.Дрезден&nbsp;&mdash; это город, где история сплетается с&nbsp;роскошью. Прогуляйтесь по&nbsp;Цвингеру, восхищаясь его архитектурой, окунитесь в&nbsp;мир искусства в&nbsp;Альбертинуме, пройдитесь по&nbsp;берегу Эльбы, любуясь панорамой города,&nbsp;&mdash; и&nbsp;вы&nbsp;поймете, почему Дрезден называют &laquo;Флоренцией на&nbsp;Эльбе&raquo;.',
          button: true,
          buttonText: 'button',
          imageMain: '/imgs/IMG_9547.jpg',
          imagesPreview: [
            '/imgs/IMG_9408.jpg',
            '/imgs/IMG_9484.jpg',
            '/imgs/IMG_9542.jpg',
            '/imgs/IMG_9408.jpg',
            '/imgs/IMG_9542.jpg',
          ],
        },
      ],
    }
  },
  mounted() {
    this.isAnimated()
  },
  methods: {
    isAnimated() {
      window.onload = () => {
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 1.0,
        }

        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const animationTarget = entry.target
              animationTarget.style.opacity = '1'
              observer.unobserve(animationTarget)
            }
          })
        }, options)

        const arr = document.querySelectorAll('.animation-target')
        arr.forEach((i) => {
          observer.observe(i)
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.animation-target {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}
.albums-v2 {
  display: flex;
  flex-direction: column;
  gap: 24px;
  @include md {
    gap: 56px;
  }
  @include lg {
    gap: 86px;
  }
}
</style>
