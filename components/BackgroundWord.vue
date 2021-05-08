<template>
  <div class="background">
    <span
      v-for="(letter, index) in titleLetters"
      :key="index"
      :style="`transition-delay: ${index / 5}s`"
      class="background__letter"
      :class="letterClass"
      >{{ letter }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      letterClass: '',
    }
  },
  computed: {
    titleLetters() {
      return this.title.replace(' ', '\u00A0').split('')
    },
  },
  mounted() {
    setTimeout(() => {
      this.letterClass = 'shown'
    }, 100)
  },
}
</script>

<style lang="scss" scoped>
.background {
  display: flex;
  color: rgb(249, 250, 247);
  font-size: 9vw;
  z-index: -1;
  font-family: 'PlayfairDisplay Semi-bold', serif;
  font-weight: 700;
  line-height: 1.4em;
  position: absolute;
  top: -88px;
  left: 0;
  padding: 2% 1%;
  &__letter {
    display: inline-block;
    visibility: hidden;
    opacity: 0;
    transform: translateX(30px);
    transition: transform 1s cubic-bezier(0.23, 0.51, 0.15, 0.9), opacity 0.3s;
  }
  .shown {
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
  }
  @include sm- {
    position: relative;
    top: 0;
    font-size: 14vw;
    line-height: 1em;
  }
}
</style>
