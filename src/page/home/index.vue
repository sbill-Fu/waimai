<template>
  <div class="home">
    <scroll
      :data="data"
      @showTopIcon="showTopIcon"
      @hideTopIcon="hideTopIcon"
      ref="swiper"
    >
      <home-header></home-header>
      <home-slide></home-slide>
      <home-category></home-category>
      <store @loaded="storeGeted"></store>
    </scroll>
    <transition name="fade">
      <div v-show="showTop" class="back-top" @click="backToTop">
        <i class="iconfont icon-top"></i>
      </div>
    </transition>
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
        data: [],
        showTop: false
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
      },
      showTopIcon() {
        this.showTop = true;
      },
      hideTopIcon() {
        this.showTop = false;
      },
      backToTop() {
        const swiper = this.$refs.swiper;
        swiper.backToTop();
      }
    }
  };
</script>

<style lang="scss" scoped>
  .home {
    height: 100%;
  }
  .icon-top {
    position: fixed;
    right: 39px;
    bottom: 82px;
    font-size: 33px;
    background: lightgray;
    border-radius: 32px;
    z-index: 9999;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-to {
    opacity: 1;
  }
</style>
