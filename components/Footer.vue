<template>
  <div class="footer">
    <div class="footer__wrapper">
      <div class="footer__title">{{ footer.title }}</div>
      <div class="footer__subtitle">{{ footer.subtitle }}</div>
      <div class="footer__text">
        {{ footer.description }}
        <svg class="svg-dotted-line">
          <line x1="0" y1="50%" x2="100%" y2="50%" />
        </svg>
      </div>
      <div class="social">
        <a
          v-for="link in getShownLinks()"
          :key="link.id"
          :href="link.url"
          target="_blank"
          :class="link.title"
        >
          <img :src="link.icon.data.attributes.url" draggable="false" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    footer: {
      type: Object,
    },
  },
  methods: {
    getShownLinks() {
      return this.footer.links.filter((e) => e.is_shown)
    },
  },
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  color: #625744;
  text-align: center;
  line-height: 1.6em;
  font-size: 12px;
  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: background 0.3s, border 0.3s, border-radius 0.3s,
      box-shadow 0.3s;
    padding: 30px 21% 50px;
  }

  &__title {
    font-family: 'Caveat', cursive;
    color: #443c2f;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 0.1em;
    margin-bottom: 5px;
    @include sm {
      font-size: 22px;
      margin-bottom: 10px;
    }
    @include xs- {
      font-size: 22px;
    }
  }

  &__subtitle {
    margin-bottom: 25px;
  }

  &__text {
    position: relative;
    margin-bottom: 25px;
    padding-bottom: 40px;
    max-width: 1100px;
  }
}
.svg-dotted-line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0 25%;
  height: 4px;
  stroke: #443c2f;
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-dasharray: 0.4px, 5px;
  stroke-dashoffset: -2;
}

.social {
  display: flex;

  & > a {
    position: relative;
    width: 20px;
    height: 20px;
    margin-right: 20px;
    cursor: pointer;
    line-height: 1.2em;
    path {
      transition: all 0.25s ease-in-out;
    }
    &:hover {
      path {
        fill: $ziggurat;
      }
    }
  }
}
</style>
