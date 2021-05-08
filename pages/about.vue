<template>
  <div class="about">
    <div class="profile-img" />
    <div class="info">
      <BackgroundWord :title="$t('about me')" />
      <div class="name">Shadowic</div>
      <div class="caption">{{ $t('undertitle') }}</div>
      <div class="description">
        <p>{{ $t('text1') }}</p>
        <p>{{ $t('text2') }}</p>
      </div>
      <div class="bottom">
        <div class="bottom__block">
          <div class="titles">{{ $t('destination') }}</div>
          <div class="texts">
            {{ $t('destination') }}
          </div>
        </div>
        <div class="bottom__block">
          <div class="titles">{{ $t('country') }}</div>
          <div class="texts">
            {{ $t('country') }}
          </div>
        </div>
        <div class="bottom__block">
          <div class="titles">{{ $t('favourite movie') }}</div>
          <div class="texts">
            {{ $t('favourite movie') }}
          </div>
        </div>
        <div class="bottom__block">
          <div class="titles">{{ $t('favourite book') }}</div>
          <div class="texts">
            {{ $t('favourite book') }}
          </div>
        </div>
        <div class="bottom__block">
          <div class="titles">{{ $t('music inspiration') }}</div>
          <div class="texts">
            {{ $t('music inspiration') }}
          </div>
        </div>
        <div class="bottom__block">
          <div class="titles">{{ $t('quote') }}</div>
          <div class="texts">
            {{ $t('quote') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "ru": {
    "about me":"Обо мне",
    "undertitle":"энтузиаст",
    "text1":"Идейные соображения высшего порядка, а также реализация намеченных плановых заданий позволяет оценить значение новых предложений. Повседневная практика показывает, что новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Товарищи! консультация с широким активом представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач. Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности требуют определения и уточнения соответствующий условий активизации. Таким образом консультация с широким активом требуют от нас анализа направлений прогрессивного развития.",
    "text2":"Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.",
    "destination":"цель",
    "country":"страна",
    "favourite movie":"фэйворит муви",
    "favourite book":"фэйворит бук",
    "music inspiration":"музыка, которая вдохновляет",
    "quote":"цитатка"
  },
  "en": {
    "about me":"About me",
    "undertitle":"enthusiast",
    "text1":"Lorem ipsum dolor sit amet, lacus eu erat integer bibendum rutrum, sed arcu molestie, in quis ornare, rhoncus sceleris nam feugiat nibhleo. Ac suspendisse turpis posuere, cursus fames eu eget dolorem sapien. Eget cras urna nam, ultricies proin interdum facilisis arcu, eget sed enim nam, sit tpede nonummy viverra dolor",
    "text2":"Lorem ipsum dolor sit amet, lacus eu erat integer bibendum rutrum, sed arcu molestie, in quis ornare, rhoncus sceleris nam feugiat nibhleo. Ac suspendisse turpis posuere, cursus fames eu eget dolorem sapien. Eget cras urna nam, ultricies proin interdum facilisis arcu, eget sed enim nam, sit tpede nonummy viverra dolor",
    "destination":"destination",
    "country":"country",
    "favourite movie":"favourite movie",
    "favourite book":"favourite book",
    "music inspiration":"music inspiration",
    "quote":"quote"
  }
}
</i18n>

<style lang="scss" scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 1300px;
  margin: 0 auto;
  padding: 100px 110px 0;
  line-height: 1.647em;
  color: #6f8c96;
  @include sm- {
    padding: 60px;
    flex-direction: column;
    align-items: center;
  }
  /deep/.background {
    position: absolute;
    top: -75px;
    @include sm- {
      top: 53px;
      right: 0;
      text-align: right;
    }
  }
}
.profile-img {
  border-radius: 50%;
  background: url('static/imgs/IMG_0773.JPG') center/cover;
  background-color: #79a2ac;
  margin: 90px 60px 0 0;
  flex: 1 1 0;
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
}
.name {
  font-family: 'PlayfairDisplay Semi-bold', serif;
  color: #1c2522;
  font-size: 33px;
  line-height: 1.212em;
  margin: 25px 0 15px;
  letter-spacing: 0.1em;
}
.caption {
  font-size: 10px;
  color: #79a2ac;
  letter-spacing: 0.2em;
  line-height: 1em;
  text-transform: uppercase;
  margin-bottom: 25px;
}
.description {
  margin-bottom: 60px;
  font-family: 'Dosis', sans-serif;
  p {
    margin: 20px 0;
    font-size: 17px;
  }
}
.titles {
  font-family: playfair display, serif;
  color: #1c2522;
  font-size: 19px;
  line-height: 1.368em;
}
.texts {
  font-family: 'Dosis', sans-serif;
}
.bottom {
  display: flex;
  flex-wrap: wrap;
  &__block {
    width: 50%;
    padding: 0% 10% 5% 0%;
  }
}
</style>
