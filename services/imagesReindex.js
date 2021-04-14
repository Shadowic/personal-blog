export default function imagesReindex(inputArray) {
  const output = []

  for (let i = 0; i < inputArray.length; i++) {
    const item = inputArray[i]
    item.index = i

    const existingBlockTypeInOutput = output.find(
      (itemOutput) => itemOutput.blockType === item.blockType
    )

    if (existingBlockTypeInOutput) {
      existingBlockTypeInOutput.images.push(item)
    } else {
      output.push({ blockType: item.blockType, images: [item] })
    }
  }

  return output
}
