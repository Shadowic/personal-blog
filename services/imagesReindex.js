const blocksConfig = {
  1: 5,
  2: 2,
  3: 2,
  4: 4,
  5: 4,
  6: 3,
}

export default function imagesReindex(inputArray) {
  const output = []

  for (let i = 0; i < inputArray.length; i++) {
    const item = inputArray[i]
    item.index = i

    const existingBlockTypeInOutput = findAvailableBlock(output, item.blockType)

    if (existingBlockTypeInOutput) {
      existingBlockTypeInOutput.images.push(item)
    } else {
      output.push({ blockType: item.blockType, images: [item] })
    }
  }

  return output
}

function findAvailableBlock(output, blockType) {
  for (let i = 0; i < output.length; i++) {
    const block = output[i]
    if (
      block.blockType === blockType &&
      block.images.length < blocksConfig[block.blockType]
    ) {
      return block
    }
  }
  return null
}

// in component
// computed: {
//   images() {
//     return this.album
//   },
//   blocks() {
//     return imagesReindex(this.images)
//   },
//   countImgs() {
//     return this.images.length
//   },
// },
// methods: {
//   getCurrentImg() {
//     if (this.openedImgIndex > -1) {
//       const foundImage = this.findImageByIndex(this.openedImgIndex)
//
//       return foundImage
//     }
//     return null
//   },
//   openImage(image) {
//     this.openedImgIndex = image.index
//   },
//   closeImage() {
//     this.openedImgIndex = -1
//   },
//   prevImage() {
//     this.openedImgIndex = this.openedImgIndex - 1
//     if (this.openedImgIndex < 0) {
//       this.openedImgIndex = this.countImgs - 1
//     }
//   },
//   nextImage() {
//     this.openedImgIndex = this.openedImgIndex + 1
//     if (this.openedImgIndex + 1 > this.countImgs) {
//       this.openedImgIndex = 0
//     }
//   },
//   findImageByIndex(index) {
//     for (let i = 0; i < this.blocks.length; i++) {
//       for (let j = 0; j < this.blocks[i].images.length; j++) {
//         const currentImage = this.blocks[i].images[j]
//         if (currentImage.index === index) {
//           return currentImage
//         }
//       }
//     }
//   },
// },
