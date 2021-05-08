<template>
  <div class="content__bottom">
    <div class="content__bottom__wrapper">
      <div class="content__bottom__title">Shadowic</div>
      <div class="content__bottom__undertitle">{{ $t('caption') }}</div>
      <div class="content__bottom__p">
        {{ $t('description') }}
        <svg class="svg-dotted-line">
          <line x1="0" y1="50%" x2="100%" y2="50%" />
        </svg>
      </div>
      <div class="social">
        <a
          href="https://www.instagram.com/shadowic_ceramic/"
          target="_blank"
          class="inst"
        >
          <img src="~assets/svgs/instagram.svg" />
        </a>
        <a
          href="https://www.pinterest.de/Shadowic03/"
          target="_blank"
          class="pin"
        >
          <img src="~assets/svgs/pinterest.svg" />
        </a>
        <a href="https://github.com/Shadowic" target="_blank" class="github">
          <img src="~assets/svgs/github.svg" />
        </a>
        <a href="https://t.me/shadowic" target="_blank" class="smthng">
          <img src="~assets/svgs/telegram.svg" />
        </a>
        <a href="" class="smthng">
          <img src="~assets/svgs/coffee-cup.svg" />
        </a>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "ru": {
    "caption": "Личный блог",
    "description": "Добро пожаловать в мой личный блог, созданный с целью представить мои навыки в качестве верстальщика, а также показать вам несколько удивительных мест нашей планеты и мои творения в керамическом деле"
  },
  "en": {
    "caption": "Personal blog",
    "description": "This is Shadowic's personal blog created with love and proud for my resume as html-coder where you can read some travel stories and experiences, or looking for some ceramic stuff."
  }
}
</i18n>

<style lang="scss" scoped>
.content__bottom {
  width: 100%;
  color: #919a99;
  text-align: center;
  line-height: 1.67em;
  font-size: 14px;
  @include sm {
    font-size: 11px;
  }
  @include xs- {
    font-size: 12px;
  }

  &__wrapper {
    display: flex;
    background: url('../assets/imgs/1111.jpg') left/cover;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: background 0.3s, border 0.3s, border-radius 0.3s,
      box-shadow 0.3s;
    padding: 50px 21%;
  }

  &__title {
    font-family: 'PlayfairDisplay Semi-bold', serif;
    color: #1c2522;
    font-size: 26px;
    margin-bottom: 20px;
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
  }

  &__p {
    position: relative;
    margin-bottom: 25px;
    padding-bottom: 40px;
  }
}
.svg-dotted-line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  stroke: #79a2ac;
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
  }
}
</style>
