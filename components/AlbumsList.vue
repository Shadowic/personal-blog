<template>
  <div class="albums">
    <div v-if="error" class="error">{{ error }}</div>
    <Album v-for="(album, index) in albums" :key="index" :album="album" />
  </div>
</template>

<script>
export default {
  props: {
    albumLink: {
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
    const response = await fetch(
      process.env.baseUrl + `/data/${albumLink}.json`
    )
    if (response.status !== 200) {
      this.error = 'Не удалось выгрузить альбомы'
    }
    this.albums = await response.json()
  },
}
</script>

<style lang="scss" scoped>
.albums {
  display: flex;
  flex-direction: column;
}
</style>
