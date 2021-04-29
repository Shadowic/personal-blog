<template>
  <div class="album">
    <div v-if="error" class="error">{{ error }}</div>
    <background-word :title="this.$route.params.album" />
    <div class="album__title">{{ this.$route.params.album }}</div>
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
      :image="getCurrentImg()"
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
    getCurrentImg() {
      if (this.openedImgIndex > -1) {
        const foundImage = this.findImageByIndex(this.openedImgIndex)

        return foundImage
      }
      return null
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
  max-width: 1200px;
  margin: 60px auto;
  position: relative;
  &__title {
    font-family: 'PlayfairDisplay Semi-bold', serif;
    font-weight: 600;
    color: #1c2522;
    font-size: 33px;
    line-height: 1.212em;
    padding-top: 15px;
    padding-left: 20px;
    margin-bottom: 50px;
    @include sm- {
      position: absolute;
      top: 0;
      padding: 3%;
    }
  }
  @include sm- {
    width: 90vw;
    margin: 60px auto;
  }
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-bottom: 20px;
  @include sm- {
    grid-template-columns: repeat(2, 1fr);
  }
}
[class^='grid-item'] {
  min-height: 2.5em;
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
      clip-path: inset(5% 5% 5% 5%);
    }
  }
}

.block__type-1,
.block__type-4,
.block__type-5 {
  min-height: 500px;
}
.block__type-5 {
  @include sm- {
    min-height: 320px;
  }
}
.block__type-2,
.block__type-3 {
  min-height: 250px;
  @include sm- {
    min-height: 150px;
  }
}

.block__type-1 .grid-item:nth-child(1) {
  grid-area: 1/1/2/2;
  @include sm- {
    grid-area: 1/1/2/2;
  }
}
.block__type-1 .grid-item:nth-child(2) {
  grid-area: 1/2/3/3;
  @include sm- {
    grid-area: 1/2/2/3;
  }
}
.block__type-1 .grid-item:nth-child(3) {
  grid-area: 1/3/2/4;
  @include sm- {
    grid-area: 2/1/3/3;
  }
}
.block__type-1 .grid-item:nth-child(4) {
  grid-area: 2/1/3/2;
  @include sm- {
    grid-area: 3/1/4/2;
  }
}
.block__type-1 .grid-item:nth-child(5) {
  grid-area: 2/3/3/4;
  @include sm- {
    grid-area: 3/2/4/3;
  }
}
.block__type-2 .grid-item:nth-child(1) {
  grid-area: 1/1/2/3;
  @include sm- {
    grid-area: 1/1/2/2;
  }
}
.block__type-2 .grid-item:nth-child(2) {
  grid-area: 1/3/2/4;
  @include sm- {
    grid-area: 1/2/2/3;
  }
}
.block__type-3 .grid-item:nth-child(1) {
  grid-area: 1/1/2/2;
  @include sm- {
    grid-area: 1/1/2/2;
  }
}
.block__type-3 .grid-item:nth-child(2) {
  grid-area: 1/2/2/4;
  @include sm- {
    grid-area: 1/2/2/3;
  }
}
.block__type-4 .grid-item:nth-child(1) {
  grid-area: 1/1/3/2;
  @include sm- {
    grid-area: 1/1/2/3;
  }
}
.block__type-4 .grid-item:nth-child(2) {
  grid-area: 1/2/2/4;
  @include sm- {
    grid-area: 2/1/3/2;
  }
}
.block__type-4 .grid-item:nth-child(3) {
  grid-area: 2/2/3/3;
  @include sm- {
    grid-area: 2/2/3/3;
  }
}
.block__type-4 .grid-item:nth-child(4) {
  grid-area: 2/3/3/4;
  @include sm- {
    grid-area: 3/1/4/3;
  }
}
.block__type-5 .grid-item:nth-child(1) {
  grid-area: 1/1/2/2;
  @include sm- {
    grid-area: 1/1/2/2;
  }
}
.block__type-5 .grid-item:nth-child(2) {
  grid-area: 1/2/2/3;
  @include sm- {
    grid-area: 1/2/2/3;
  }
}
.block__type-5 .grid-item:nth-child(3) {
  grid-area: 1/3/3/4;
  @include sm- {
    grid-area: 2/1/3/2;
  }
}
.block__type-5 .grid-item:nth-child(4) {
  grid-area: 2/1/3/3;
  @include sm- {
    grid-area: 2/2/3/3;
  }
}
</style>
