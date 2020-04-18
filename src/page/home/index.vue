<template>
  <div class="home">
    <scroll :data="data">
      <home-header></home-header>
      <home-slide></home-slide>
      <home-category></home-category>
      <store @loaded="storeGeted"></store>
    </scroll>
  </div>
</template>

<script>
  import HomeHeader from './header';
  import HomeCategory from './category';
  import store from './store';
  import HomeSlide from './slide';
  import scroll from '@/base/scroll';

  export default {
    data() {
      return {
        data: []
      };
    },
    components: {
      HomeHeader,
      HomeCategory,
      store,
      HomeSlide,
      scroll
    },
    methods: {
      storeGeted(data) {
        this.data = data;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .home {
    height: 100%;
  }
</style>
