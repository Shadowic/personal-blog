<template>
  <div class="about">
    <div
      class="profile-img"
      :style="{ backgroundImage: `url(${about.cover.data.attributes.url})` }"
    />
    <div class="info">
      <BackgroundWord :title="about.page_title" />
      <div class="name">{{ about.title }}</div>
      <div class="caption">{{ about.subtitle }}</div>
      <div class="description" v-html="about.description" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi, i18n }) {
    try {
      const result = await $strapi.$http.$get(
        `/api/about-page?locale=${i18n.locale}`
      )
      const about = result.data.attributes
      return {
        about,
      }
    } catch (e) {
      console.log(e)
      return {}
    }
  },
}
</script>

<style lang="scss">
.description {
  p {
    font-size: 15px;
    & + p {
      margin-top: 20px;
    }
  }
}
</style>

<style lang="scss" scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 1300px;
  margin: 0 auto;
  padding: 80px 110px 0;
  line-height: 1.647em;
  color: $dark-cyan;
  @include md {
    padding: 30px 50px 0;
  }
  @include sm {
    padding: 10px 50px 0;
  }
  @include sm- {
    padding: 60px;
    flex-direction: column;
    align-items: center;
  }
  /deep/.background {
    position: absolute;
    color: $ziggurat;
    opacity: 0.1;
    top: -75px;
    @include md {
      top: -10px;
      left: 40px;
    }
    @include sm {
      top: 20px;
      left: 20px;
    }
    @include sm- {
      top: 0;
      right: 0;
      text-align: right;
    }
  }
}
.profile-img {
  border-radius: 50%;
  background: center/cover;
  background-color: $ziggurat;
  margin: 90px 60px 0 0;
  flex: 1 1 0;
  //position: relative;
  //z-index: 1;
  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }
  @include sm- {
    width: 100%;
    max-width: 350px;
    margin: 30px 0 0;
  }
}
.info {
  flex: 1.3 1 0;
  position: relative;
  //z-index: 1;
}
.name {
  font-family: 'Caveat', cursive;
  font-weight: 900;
  color: $bokara;
  opacity: 0.85;
  font-size: 50px;
  line-height: 1.212em;
  margin: 25px 0 5px;
  letter-spacing: 0.1em;
}
.caption {
  font-size: 10px;
  color: $ocean;
  letter-spacing: 0.2em;
  line-height: 1em;
  text-transform: uppercase;
  margin-bottom: 45px;
}
.description {
  margin-bottom: 60px;
}
</style>
