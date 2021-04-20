<template>
  <div class="about">
    <div class="container">
      <div class="profile-img" />
      <div class="info">
        <BackgroundWord :title="$t('about me')" />
        <div class="name">Shadowic</div>
        <div class="caption">{{ $t('undertitle') }}</div>
        <div class="description">
          <p>
            Lorem ipsum dolor sit amet, nec admodum intellegat tteu, ad vim
            solum percipitur, duo in ullum pertinax it nihil ceteros consequat
            pro, sed in debetpersequeris. Mei an dico vide, modus homero
            tacimates ex has lorem ispum sit dolor text
          </p>
          <p>
            Lorem ipsum dolor sit amet, lacus eu erat integer bibendum rutrum,
            sed arcu molestie, in quis ornare, rhoncus sceleris nam feugiat nibh
            leo. Ac suspendisse turpis posuere, cursus fames eu eget dolorem
            sapien. Eget cras urna nam, ultricies proin interdum facilisis arcu,
            eget sed enim nam, sit tpede nonummy viverra dolor
          </p>
        </div>
        <div class="bottom">
          <div class="bottom__block">
            <div class="titles">Destination:</div>
            <div class="texts">
              Lorem ipsum dolor sit amet, nec admodum intellegat eu, ad vim
              solum percipitu...
            </div>
          </div>
          <div class="bottom__block">
            <div class="titles">Country:</div>
            <div class="texts">
              Lorem ipsum dolor sit amet, nec admodum intellegat eu, ad vim
              solum percipitu...
            </div>
          </div>
          <div class="bottom__block">
            <div class="titles">Author to read:</div>
            <div class="texts">
              Lorem ipsum dolor sit amet, nec admodum intellegat eu, ad vim
              solum percipitu...
            </div>
          </div>
          <div class="bottom__block">
            <div class="titles">Favourite book:</div>
            <div class="texts">
              Lorem ipsum dolor sit amet, nec admodum intellegat eu, ad vim
              solum percipitu...
            </div>
          </div>
          <div class="bottom__block">
            <div class="titles">Music inspiration:</div>
            <div class="texts">
              Lorem ipsum dolor sit amet, nec admodum intellegat eu, ad vim
              solum percipitu...
            </div>
          </div>
          <div class="bottom__block">
            <div class="titles">Quote:</div>
            <div class="texts">
              Lorem ipsum dolor sit amet, nec admodum intellegat eu, ad vim
              solum percipitu...
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "ru": {
    "about me": "Обо мне",
    "undertitle": "энтузиаст"
  },
  "en": {
    "about me": "About me",
    "undertitle": "enthusiast"
  }
}
</i18n>

<style lang="scss" scoped>
.about {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
}
.container {
  display: flex;
  max-width: 1300px;
  margin: 0 auto;
  padding-left: 80px;
  line-height: 1.647em;
  color: #6f8c96;
}
.profile-img {
  height: 500px;
  border-radius: 50%;
  background: url('~static/imgs/235924633_3616.jpg') center/cover;
  background-color: #79a2ac;
  margin-top: 30px;
  margin-right: 60px;
  flex: 1 1 0;
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
  margin: 25px 0 5px;
  letter-spacing: 0.1em;
}
.caption {
  font-size: 10px;
  color: #79a2ac;
  letter-spacing: 0.2em;
  line-height: 1em;
  text-transform: uppercase;
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
