<template>
  <div>
    <Album
      v-for="(album, index) in albums"
      :key="index"
      :album="album"
      :code="code"
    />
  </div>
</template>

<script>
export default {
  props: {
    albums: {
      type: Array,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
  },
}
</script>
