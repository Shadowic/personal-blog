<template>
  <div>
    <div v-if="error" class="error">{{ error }}</div>
    <Album v-for="(album, index) in albums" :key="index" :album="album" />
  </div>
</template>

<script>
export default {
  props: {
    isShownOnIndex: {
      type: Boolean,
      default: null,
    },
    category: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      error: null,
      albums: [],
    }
  },
  async fetch() {
    const response = await fetch(process.env.baseUrl + `/data/albums.json`)
    if (response.status !== 200) {
      this.error = 'Не удалось выгрузить альбомы'
    }

    const albums = await response.json()

    if (this.isShownOnIndex) {
      for (let i = 0; i < albums.length; i++) {
        if (albums[i].shownOnIndexPage === true) {
          this.albums.push(albums[i])
        }
      }
    }

    for (let i = 0; i < albums.length; i++) {
      if (albums[i].category === this.category) {
        this.albums.push(albums[i])
      }
    }
  },
}
</script>
