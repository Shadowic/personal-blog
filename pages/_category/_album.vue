<template>
  <div class="container">
    <div class="gallery">
      <div
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        class="gallery-item animation-target"
        @click="openImage(imageIndex)"
      >
        <img
          :src="getImageUrl(image, 'medium')"
          :alt="image.id"
          draggable="false"
        />
      </div>
    </div>
    <Modal
      :image="getCurrentImg()"
      :opened-img-index="openedImgIndex"
      :count-imgs="countImgs"
      :show-sidebar="isPhotoWithSidebar"
      :title="getCurrentImageProperty('title')"
      :description="getCurrentImageProperty('description')"
      :price="getCurrentImageProperty('price')"
      @close="closeImage"
      @prevImg="prevImage"
      @nextImg="nextImage"
    />
  </div>
</template>

<script>
import rawImages from 'static/albums.json'

export default {
  layout: 'page',
  transition: {
    name: 'change-route',
    mode: 'out-in',
  },
  // async asyncData({ $strapi, i18n, params, error }) {
  //   try {
  //     const result = await $strapi.$http.$get(
  //       `/api/albums/slug/${params.album}?locale=${i18n.locale}`
  //     )
  //     const album = result.data.attributes.photos.data
  //     const photos = result.data.attributes.photo_items.data
  //     const description = result.data.attributes
  //     return {
  //       album,
  //       photos,
  //       description,
  //     }
  //   } catch (e) {
  //     console.log(e)
  //     return {}
  //   }
  // },
  data() {
    return {
      openedImgIndex: -1,
      albumData: [],
    }
  },
  fetch() {
    const { category, album } = this.$route.params

    const albumData = rawImages.find(
      (item) => item.albumCode === category && item.pageCode === album
    )

    if (!albumData) {
      this.$nuxt.error({ statusCode: 404, message: 'Album not found' })
      return
    }

    this.albumData = albumData
  },
  computed: {
    images() {
      return this.albumData?.imagesGallery || []
    },
    countImgs() {
      return this.images.length
    },
    isPhotoWithSidebar() {
      return this.albumData?.photos?.length > 0
    },
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
    getCurrentImg() {
      if (this.openedImgIndex > -1) {
        const foundImage = this.findImageByIndex(this.openedImgIndex)

        return this.getImageUrl(foundImage, 'large')
      }
      return null
    },
    getCurrentImageProperty(property) {
      if (this.openedImgIndex > -1 && this.isPhotoWithSidebar) {
        const foundImage = this.findImageByIndex(this.openedImgIndex)
        return foundImage.attributes[property]
      }
      return null
    },
    openImage(imageIndex) {
      this.openedImgIndex = imageIndex
    },
    closeImage() {
      this.openedImgIndex = -1
    },
    prevImage() {
      this.openedImgIndex = this.openedImgIndex - 1
      if (this.openedImgIndex < 0) {
        this.openedImgIndex = this.countImgs - 1
      }
    },
    nextImage() {
      this.openedImgIndex = this.openedImgIndex + 1
      if (this.openedImgIndex + 1 > this.countImgs) {
        this.openedImgIndex = 0
      }
    },
    findImageByIndex(index) {
      return this.images[index]
    },
    // getImageUrl(albumItemOrImage, imgSize) {
    //   if (this.isPhotoWithSidebar) {
    //     return albumItemOrImage.attributes.photo.data.attributes.formats[
    //       imgSize
    //     ].url
    //   }
    //   return albumItemOrImage.attributes.formats[imgSize].url
    // },
    getImageUrl(albumItemOrImage) {
      return albumItemOrImage
    },
  },
}
</script>

<style lang="scss" scoped>
//.animation-target {
//  opacity: 0;
//  transition: opacity 1s ease-in-out;
//}
.gallery {
  display: grid;
  grid-auto-rows: 64px;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8px;
  @include md {
    grid-auto-rows: 65px;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
  }
  @include lg {
    grid-auto-rows: 90px;
    grid-template-columns: repeat(14, 1fr);
    grid-gap: 30px;
  }
}
.gallery-item {
  border-radius: 10px;
  overflow: hidden;
  grid-row: span 2;
  @include md- {
    &:nth-child(6n + 1),
    &:nth-child(6n + 5) {
      grid-row: span 3;
    }
  }
  @include md {
    &:nth-child(28n + 1) {
      grid-row: span 4;
    }
    &:nth-child(28n + 2) {
      grid-row: span 2;
    }
    &:nth-child(28n + 3) {
      grid-row: span 3;
    }
    &:nth-child(28n + 4) {
      grid-row: span 2;
    }
    &:nth-child(28n + 5) {
      grid-row: span 3;
    }
    &:nth-child(28n + 6) {
      grid-column: span 2;
      grid-row: span 3;
    }
    &:nth-child(28n + 7) {
      grid-row: span 5;
    }
    &:nth-child(28n + 8) {
      grid-row: span 3;
    }
    &:nth-child(28n + 9) {
      grid-row: span 3;
    }
    &:nth-child(28n + 10) {
      grid-row: span 5;
    }
    &:nth-child(28n + 11) {
      grid-row: span 4;
    }
    &:nth-child(28n + 12) {
      grid-row: span 3;
    }
    &:nth-child(28n + 13) {
      grid-row: span 3;
      grid-column: span 2;
    }
    &:nth-child(28n + 14) {
      grid-row: span 4;
    }
    &:nth-child(28n + 15) {
      grid-row: span 4;
    }
    &:nth-child(28n + 16) {
      grid-row: span 4;
    }
    &:nth-child(28n + 17) {
      grid-row: span 2;
    }
    &:nth-child(28n + 18) {
      grid-row: span 3;
      grid-column: span 2;
    }
    &:nth-child(28n + 19) {
      grid-row: span 3;
    }
    &:nth-child(28n + 20) {
      grid-row: span 5;
    }
    &:nth-child(28n + 21) {
      grid-row: span 2;
    }
    &:nth-child(28n + 22) {
      grid-row: span 4;
    }
    &:nth-child(28n + 23) {
      grid-row: span 3;
    }
    &:nth-child(28n + 24) {
      grid-row: span 2;
    }
    &:nth-child(28n + 25) {
      grid-row: span 3;
      grid-column: span 2;
    }
    &:nth-child(28n + 26) {
      grid-row: span 5;
    }
    &:nth-child(28n + 27) {
      grid-row: span 3;
    }
    &:nth-child(28n + 28) {
      grid-row: span 3;
    }
  }
  @include lg {
    &:nth-child(28n + 1) {
      grid-row: span 7;
      grid-column: span 5;
    }
    &:nth-child(28n + 2) {
      grid-row: span 4;
      grid-column: span 4;
    }
    &:nth-child(28n + 3) {
      grid-row: span 5;
      grid-column: span 5;
    }
    &:nth-child(28n + 4) {
      grid-row: span 3;
      grid-column: span 4;
    }
    &:nth-child(28n + 5) {
      grid-row: span 4;
      grid-column: span 5;
    }
    &:nth-child(28n + 6) {
      grid-row: span 4;
      grid-column: span 9;
    }
    &:nth-child(28n + 7) {
      grid-row: span 8;
      grid-column: span 5;
    }
    &:nth-child(28n + 8) {
      grid-row: span 5;
      grid-column: span 5;
    }
    &:nth-child(28n + 9) {
      grid-row: span 6;
      grid-column: span 4;
    }
    &:nth-child(28n + 10) {
      grid-row: span 8;
      grid-column: span 5;
    }
    &:nth-child(28n + 11) {
      grid-row: span 6;
      grid-column: span 4;
    }
    &:nth-child(28n + 12) {
      grid-row: span 6;
      grid-column: span 5;
    }
    &:nth-child(28n + 13) {
      grid-row: span 4;
      grid-column: span 9;
    }
    &:nth-child(28n + 14) {
      grid-row: span 6;
      grid-column: span 5;
    }
    &:nth-child(28n + 15) {
      grid-row: span 7;
      grid-column: span 5;
    }
    &:nth-child(28n + 16) {
      grid-row: span 7;
      grid-column: span 4;
    }
    &:nth-child(28n + 17) {
      grid-row: span 4;
      grid-column: span 5;
    }
    &:nth-child(28n + 18) {
      grid-row: span 4;
      grid-column: span 10;
    }
    &:nth-child(28n + 19) {
      grid-row: span 4;
      grid-column: span 4;
    }
    &:nth-child(28n + 20) {
      grid-row: span 8;
      grid-column: span 4;
    }
    &:nth-child(28n + 21) {
      grid-row: span 4;
      grid-column: span 6;
    }
    &:nth-child(28n + 22) {
      grid-row: span 6;
      grid-column: span 4;
    }
    &:nth-child(28n + 23) {
      grid-row: span 4;
      grid-column: span 6;
    }
    &:nth-child(28n + 24) {
      grid-row: span 4;
      grid-column: span 4;
    }
    &:nth-child(28n + 25) {
      grid-row: span 4;
      grid-column: span 10;
    }
    &:nth-child(28n + 26) {
      grid-row: span 8;
      grid-column: span 4;
    }
    &:nth-child(28n + 27) {
      grid-row: span 6;
      grid-column: span 4;
    }
    &:nth-child(28n + 28) {
      grid-row: span 6;
      grid-column: span 6;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
