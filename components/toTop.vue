<template>
  <button v-if="showButton" id="myBtn" class="to-top" @click="scrollToTop">
    <svg
      height="24"
      width="24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.01 512.01"
    >
      <path
        d="M505.755,358.256L271.088,123.589c-8.341-8.341-21.824-8.341-30.165,0L6.256,358.256c-8.341,8.341-8.341,21.824,0,30.165
			s21.824,8.341,30.165,0l219.584-219.584l219.584,219.584c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251
			C514.096,380.08,514.096,366.597,505.755,358.256z"
      />
    </svg>
  </button>
</template>

<script>
export default {
  data() {
    return {
      showButton: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 120) {
        this.showButton = true
      } else {
        this.showButton = false
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.to-top {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 24px;
  bottom: 24px;
  background: #cfbeac45;
  backdrop-filter: blur(25px);
  padding: 16px;
  border-radius: 50%;
  overflow: hidden;
  @include md {
    right: 36px;
    bottom: 36px;
  }
  @include lg {
    right: 48px;
    bottom: 48px;
  }
  svg {
    width: 8px;
    height: auto;
    fill: $champagne;
    @include md {
      width: 12px;
    }
    @include lg {
      width: 16px;
    }
  }
}
</style>
