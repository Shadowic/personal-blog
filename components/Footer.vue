<template>
  <div class="content__bottom">
    <div class="content__bottom__wrapper">
      <div class="content__bottom__title">{{ footer.title }}</div>
      <div class="content__bottom__undertitle">{{ footer.subtitle }}</div>
      <div class="content__bottom__p">
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
.content__bottom {
  width: 100%;
  color: #919a99;
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
    color: $bokara;
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

  &__undertitle {
    margin-bottom: 25px;
    color: $ziggurat;
  }

  &__p {
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
  stroke: $ziggurat;
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
