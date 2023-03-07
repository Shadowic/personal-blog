<template>
  <div class="album">
    <background-word :title="description.title" />
    <div class="album__title">{{ description.title }}</div>
    <div class="grid-container">
      <div
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        class="grid-item animation-target"
        @click="openImage(imageIndex)"
      >
        <img :src="getImageUrl(image, 'medium')" :alt="image.id" />
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
export default {
  async asyncData({ $strapi, i18n, params, error }) {
    try {
      const result = await $strapi.$http.$get(
        `/api/albums/slug/${params.album}?locale=${i18n.locale}`
      )
      const album = result.data.attributes.photos.data
      const photos = result.data.attributes.photo_items.data
      const description = result.data.attributes
      return {
        album,
        photos,
        description,
      }
    } catch (e) {
      console.log(e)
      return {}
    }
  },
  data() {
    return {
      openedImgIndex: -1,
    }
  },
  computed: {
    images() {
      if (Array.isArray(this.album) && this.album.length > 0) {
        return this.album
      }
      if (Array.isArray(this.photos) && this.photos.length > 0) {
        return this.photos
      }
      return []
    },
    countImgs() {
      return this.images.length
    },
    isPhotoWithSidebar() {
      return this.photos.length > 0
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
    getImageUrl(albumItemOrImage, imgSize) {
      if (this.isPhotoWithSidebar) {
        return albumItemOrImage.attributes.photo.data.attributes.formats[
          imgSize
        ].url
      }
      return albumItemOrImage.attributes.formats[imgSize].url
    },
  },
}
</script>

<style lang="scss" scoped>
.animation-target {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}
.album {
  width: 100%;
  max-width: 1200px;
  margin: 60px auto 30px;
  padding: 0 20px;
  position: relative;
  &__title {
    font-family: 'Caveat', cursive;
    font-weight: 600;
    color: $green-dark;
    font-size: 33px;
    line-height: 1.212em;
    padding-top: 15px;
    padding-left: 20px;
    margin-bottom: 50px;
    position: relative;
    z-index: 1;
    @include sm- {
      position: absolute;
      top: 0;
      padding: 3%;
    }
  }
  @include lg- {
    margin: 20px auto;
  }
  @include sm- {
    width: 90vw;
    margin: 60px auto;
  }
  /deep/.background {
    @include md {
      top: -44px;
    }
    @include sm {
      top: -20px;
    }
  }
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 240px;
  grid-gap: 20px;
  margin-bottom: 20px;
  @include sm- {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 120px;
  }
}
[class^='grid-item'] {
  position: relative;
}
.grid-item {
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    min-height: 100px;
    clip-path: inset(0 0 0 0);
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  &:hover {
    cursor: pointer;
    img {
      filter: contrast(110%) brightness(103%);
      transform: scale(0.97);
      clip-path: inset(1% 1% 1% 1%);
    }
  }
  &:nth-child(20n + 1) {
    grid-column: auto / span 1;
    grid-row: auto / span 1;
  }
  &:nth-child(20n + 2) {
    grid-column: auto / span 1;
    grid-row: auto / span 2;
  }
  &:nth-child(20n + 3) {
    grid-column: auto / span 1;
    grid-row: auto / span 1;
  }
  &:nth-child(20n + 4) {
    grid-column: auto / span 1;
    grid-row: auto / span 1;
  }
  &:nth-child(20n + 5) {
    grid-column: auto / span 1;
    grid-row: auto / span 1;
  }
  &:nth-child(20n + 6) {
    grid-column: auto / span 2;
    grid-row: auto / span 1;
  }
  &:nth-child(20n + 7) {
    grid-column: auto / span 1;
    grid-row: auto / span 1;
  }
  &:nth-child(20n + 8) {
    grid-column: auto / span 1;
    grid-row: auto / span 1;
  }
  &:nth-child(20n + 9) {
    grid-column: auto / span 1;
    grid-row: auto / span 1;
  }
  &:nth-child(20n + 10) {
    grid-column: auto / span 1;
    grid-row: auto / span 1;
  }
  &:nth-child(20n + 11) {
    grid-column: auto / span 1;
    grid-row: auto / span 1;
  }
  &:nth-child(20n + 12) {
    grid-column: auto / span 2;
    grid-row: auto / span 1;
  }
  &:nth-child(20n + 13) {
    grid-column: auto / span 1;
    grid-row: auto / span 2;
  }
  &:nth-child(20n + 14) {
    grid-column: auto / span 2;
    grid-row: auto / span 1;
  }
  &:nth-child(20n + 15) {
    grid-column: auto / span 1;
    grid-row: auto / span 1;
  }
  &:nth-child(20n + 16) {
    grid-column: auto / span 1;
    grid-row: auto / span 1;
  }
  &:nth-child(20n + 17) {
    grid-column: auto / span 1;
    grid-row: auto / span 1;
  }
  &:nth-child(20n + 18) {
    grid-column: auto / span 1;
    grid-row: auto / span 1;
  }
  &:nth-child(20n + 19) {
    grid-column: auto / span 1;
    grid-row: auto / span 2;
  }
  &:nth-child(20n + 20) {
    grid-column: auto / span 2;
    grid-row: auto / span 1;
  }
}
</style>
