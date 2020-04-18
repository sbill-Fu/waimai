<template>
  <swiper :options="swiperOption">
    <swiper-slide
      v-for="(item, index) in imgs"
      :key="'slide'+index"
    >
      <img :src="item.url" class="slide-img">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  import 'swiper/dist/css/swiper.css';

  export default {
    data() {
      return {
        imgs: [
          {url: require('@/page/home/img/炒鸡.jpg')},
          {url: require('@/page/home/img/美食.jpg')},
          {url: require('@/page/home/img/面包.jpg')}
        ],
        swiperOption: {}
      };
    },
    components: {
      swiper,
      swiperSlide
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        this.swiperOption = {
          autoplay: {
            delay: 10000,
            disableOnInteraction: false
          },
          loop: true,
          // direction: 'vertical',
          pagination: {
            el: '.swiper-pagination'
          }
        };
      }
    }
  };
</script>

<style lang="scss" scoped>
  .swiper-container {
    width: 100%;
    height: 250px;
    padding-top: 42px;

    .slide-img {
      width: 100%;
    }
  }
</style>
