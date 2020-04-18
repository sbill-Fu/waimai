<template>
  <div class="home">
    <home-header></home-header>
    <home-slide></home-slide>
    <home-category></home-category>
    <store></store>
  </div>
</template>

<script>
  import HomeHeader from './header';
  import HomeCategory from './category';
  import store from './store';
  import HomeSlide from './slide';

  export default {
    data() {
      return {
      };
    },
    components: {
      HomeHeader,
      HomeCategory,
      store,
      HomeSlide
    }
  };
</script>
