<template>
  <div class="hex-grid__container">
    <ul class="hex-grid__list">
      <li v-for="(item, i) in 15" :key="i" class="hex-grid__item">
        <div class="hex-grid__content">{{ item }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Test2',
}
</script>

<style lang="scss">
$block: '.hex-grid';

@mixin grid-item($amount) {
  @for $i from 1 through $amount {
    &:nth-of-type(#{$amount}n + #{$i}) {
      grid-column: #{$i + $i - 1} / span 3;
      @if $i % 2 == 0 {
        grid-row: calc(var(--counter) + var(--counter) - 1) / span 2;
      }
    }
  }

  @for $i from 1 through 20 {
    &:nth-of-type(n + #{$i * $amount + 1}) {
      --counter: #{$i + 1};
    }
  }
}

#{$block} {
  display: flex;
  justify-content: center;

  &__container {
    background-color: #d8aa90;
    min-height: 100vh;
    min-height: 100svh;
  }

  &__list {
    --amount: 5;

    position: relative;
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(var(--amount), 1fr 2fr) 1fr;
    grid-gap: 2.5rem 5rem;
  }

  &__item {
    position: relative;
    grid-column: 1 / span 3;
    grid-row: calc(var(--counter) + var(--counter)) / span 2;
    filter: drop-shadow(0 0 10px rgba(#444, 0.08));
    height: 0;
    padding-bottom: 90%;
  }

  &__content {
    position: absolute;
    height: 100%;
    width: 100%;
    font-size: 1.125rem;
    color: #111;
    background-color: white;
    clip-path: polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 25%;
    text-decoration: none;
    text-align: center;
    transition: transform 0.24s ease-out;
  }
}

@media screen and (min-width: 1440px) {
  #{$block} {
    &__list {
      --amount: 5;
      --counter: 1;
    }

    &__item {
      @include grid-item(5);
    }
  }
}

@media screen and (min-width: 1120px) and (max-width: 1439px) {
  #{$block} {
    &__list {
      --amount: 4;
      --counter: 1;
    }

    &__item {
      @include grid-item(4);
    }
  }
}

@media screen and (min-width: 840px) and (max-width: 1119px) {
  #{$block} {
    &__list {
      --amount: 3;
      --counter: 1;

      grid-gap: 1.5rem 3rem;
    }

    &__item {
      @include grid-item(3);
    }
  }
}

@media screen and (min-width: 480px) and (max-width: 839px) {
  #{$block} {
    &__list {
      --amount: 2;
      --counter: 1;

      grid-gap: 1.5rem 3rem;
    }

    &__item {
      @include grid-item(2);
    }
  }
}

@media screen and (max-width: 479px) {
  #{$block} {
    &__list {
      --amount: 1;

      grid-gap: 1.5rem 3rem;
    }
  }
}
</style>
