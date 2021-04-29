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
        />
        <a
          href="https://www.pinterest.de/Shadowic03/"
          target="_blank"
          class="pin"
        />
        <a href="https://github.com/Shadowic" target="_blank" class="github" />
        <a href="https://gitlab.com/Shadowic" target="_blank" class="gitlab" />
        <a href="" class="smthng" />
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

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: background 0.3s, border 0.3s, border-radius 0.3s,
      box-shadow 0.3s;
    margin: 50px 0;
    padding: 0% 21%;
  }

  &__title {
    font-family: 'PlayfairDisplay Semi-bold', serif;
    color: #1c2522;
    font-size: 30px;
    margin-bottom: 20px;
  }

  &__undertitle {
    margin-bottom: 20px;
  }

  &__p {
    position: relative;
    margin-bottom: 20px;
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

    &::after {
      font-family: Eleganticons, serif;
      position: absolute;
      left: 1px;
    }
  }

  .inst::after {
    content: '\e09a';
  }

  .pin::after {
    content: '\e095';
  }

  .github::after {
    content: '\e091';
  }

  .gitlab::after {
    content: '\e092';
  }

  .smthng::after {
    content: '\e0dc';
  }
}
</style>
