import imagesReindex from './../services/imagesReindex'

test('should build empty images array', () => {
  expect(imagesReindex([])).toStrictEqual([])
})

test('should build empty images array', () => {
  const input = [
    {
      blockType: '1',
      thumbnail: 'small1.jpg',
      image: 'big1.jpg',
    },
    {
      blockType: '1',
      thumbnail: 'small1.jpg',
      image: 'big1.jpg',
    },
    {
      blockType: '1',
      thumbnail: 'small1.jpg',
      image: 'big1.jpg',
    },
    {
      blockType: '1',
      thumbnail: 'small1.jpg',
      image: 'big1.jpg',
    },
    {
      blockType: '1',
      thumbnail: 'small1.jpg',
      image: 'big1.jpg',
    },
    {
      blockType: '2',
      thumbnail: 'small2.jpg',
      image: 'big2.jpg',
    },
    {
      blockType: '2',
      thumbnail: 'small2.jpg',
      image: 'big2.jpg',
    },
  ]
  const output = [
    {
      blockType: '1',
      images: [
        {
          blockType: '1',
          thumbnail: 'small1.jpg',
          image: 'big1.jpg',
          index: 0,
        },
        {
          blockType: '1',
          thumbnail: 'small1.jpg',
          image: 'big1.jpg',
          index: 1,
        },
        {
          blockType: '1',
          thumbnail: 'small1.jpg',
          image: 'big1.jpg',
          index: 2,
        },
        {
          blockType: '1',
          thumbnail: 'small1.jpg',
          image: 'big1.jpg',
          index: 3,
        },
        {
          blockType: '1',
          thumbnail: 'small1.jpg',
          image: 'big1.jpg',
          index: 4,
        },
      ],
    },
    {
      blockType: '2',
      images: [
        {
          blockType: '2',
          thumbnail: 'small2.jpg',
          image: 'big2.jpg',
          index: 5,
        },
        {
          blockType: '2',
          thumbnail: 'small2.jpg',
          image: 'big2.jpg',
          index: 6,
        },
      ],
    },
  ]
  expect(imagesReindex(input)).toStrictEqual(output)
})
