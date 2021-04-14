<template>
  <div class="album">
    <div v-if="error" class="error">{{ error }}</div>
    <div
      v-for="(blockTypes, index) in blocks"
      :key="index"
      class="grid-container"
      :class="`block__type-${blockTypes.blockType}`"
    >
      <div
        v-for="(image, imageIndex) in blockTypes.images"
        :key="imageIndex"
        class="grid-item"
        @click="openImage(image)"
      >
        <img :src="image.image" alt="img 1" />
      </div>
    </div>
    <!--    block__type-1 5-->
    <!--    block__type-2 2-->
    <!--    block__type-3 2-->
    <!--    block__type-4 4-->
    <!--    block__type-5 4-->
    <Modal
      :image="getCurrentImgSrc()"
      :opened-img-index="openedImgIndex"
      :count-imgs="countImgs"
      @close="closeImage"
      @prevImg="prevImage"
      @nextImg="nextImage"
    />
  </div>
</template>

<script>
import imagesReindex from '../../services/imagesReindex'

export default {
  data() {
    return {
      error: null,
      images: [],
      openedImgIndex: -1,
    }
  },
  async fetch() {
    const albumId = this.$route.params.album

    const response = await fetch(process.env.baseUrl + `/data/${albumId}.json`)
    if (response.status !== 200) {
      this.error = 'Не удалось получить картинки'
    }
    this.images = await response.json()
  },
  computed: {
    blocks() {
      return imagesReindex(this.images)
    },
    countImgs() {
      return this.images.length
    },
  },
  methods: {
    getCurrentImgSrc() {
      if (this.openedImgIndex > -1) {
        const foundImage = this.findImageByIndex(this.openedImgIndex)

        return foundImage.image
      }
      return ''
    },
    openImage(image) {
      this.openedImgIndex = image.index
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
      for (let i = 0; i < this.blocks.length; i++) {
        for (let j = 0; j < this.blocks[i].images.length; j++) {
          const currentImage = this.blocks[i].images[j]
          if (currentImage.index === index) {
            return currentImage
          }
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.album {
  width: 1200px;
  margin: 100px auto 0;
}
.open + .album {
  transform: scale(0.92);
  transition: transform 0.2s 0.36s ease-out;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-bottom: 20px;
}
[class^='grid-item'] {
  min-height: 2.5em;
  position: relative;
}
.grid-item img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  min-height: 100px;
  transition: all 0.2s ease-in-out;
  &:hover {
    filter: contrast(110%) brightness(103%);
  }
}
.block__type-1,
.block__type-4,
.block__type-5 {
  min-height: 500px;
}
.block__type-2,
.block__type-3 {
  min-height: 250px;
}
.block__type-1 .grid-item:nth-child(1) {
  grid-area: 1/1/2/2;
}
.block__type-1 .grid-item:nth-child(2) {
  grid-area: 1/2/3/3;
}
.block__type-1 .grid-item:nth-child(3) {
  grid-area: 1/3/2/4;
}
.block__type-1 .grid-item:nth-child(4) {
  grid-area: 2/1/3/2;
}
.block__type-1 .grid-item:nth-child(5) {
  grid-area: 2/3/3/4;
}
.block__type-2 .grid-item:nth-child(1) {
  grid-area: 1/1/2/3;
}
.block__type-2 .grid-item:nth-child(2) {
  grid-area: 1/3/2/4;
}
.block__type-3 .grid-item:nth-child(1) {
  grid-area: 1/1/2/2;
}
.block__type-3 .grid-item:nth-child(2) {
  grid-area: 1/2/2/4;
}
.block__type-4 .grid-item:nth-child(1) {
  grid-area: 1/1/3/2;
}
.block__type-4 .grid-item:nth-child(2) {
  grid-area: 1/2/2/4;
}
.block__type-4 .grid-item:nth-child(3) {
  grid-area: 2/2/3/3;
}
.block__type-4 .grid-item:nth-child(4) {
  grid-area: 2/3/3/4;
}
.block__type-5 .grid-item:nth-child(1) {
  grid-area: 1/1/2/2;
}
.block__type-5 .grid-item:nth-child(2) {
  grid-area: 1/2/2/3;
}
.block__type-5 .grid-item:nth-child(3) {
  grid-area: 1/3/3/4;
}
.block__type-5 .grid-item:nth-child(4) {
  grid-area: 2/1/3/3;
}
</style>
