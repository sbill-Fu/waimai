<template>
  <swiper :options="swiperOption" ref="swiper">
    <swiper-slide>
      <slot></slot>
    </swiper-slide>
    <div class="swiper-scrollbar" slot="scrollbar"></div>
  </swiper>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  import 'swiper/dist/css/swiper.css';

  export default {
    data() {
      return {
        swiperOption: {}
      };
    },
    props: {
      data: {
        type: [Object, Array]
      }
    },
    watch: {
      data() {
        this.$refs.swiper.swiper.update();
      }
    },
    created() {
      this.init();
    },
    components: {
      swiper,
      swiperSlide
    },
    methods: {
      init() {
        this.swiperOption = {
          direction: 'vertical',
          slidesPerView: 'auto',
          freeMode: true,
          setWrapperSize: true,
          scrollbar: {
            el: '.swiper-scrollbar',
            hide: true
          },
          on: {
            sliderMove: this.scroll,
            transitionEnd: this.transitionEnd
          }
        };
      },
      scroll() {
        const swiper = this.$refs.swiper.swiper;
        if ((-swiper.translate) > swiper.height) {
          this.$emit('showTopIcon');
        } else {
          this.$emit('hideTopIcon');
        }
      },
      transitionEnd() {
        const swiper = this.$refs.swiper.swiper;
        if ((-swiper.translate) > swiper.height) {
          this.$emit('showTopIcon');
          setTimeout(() => {
            this.$emit('hideTopIcon');
          }, 3000);
        } else {
          this.$emit('hideTopIcon');
        }
      },
      backToTop() {
        const swiper = this.$refs.swiper.swiper;
        swiper.slideTo(0, 500);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .swiper-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    height: auto;
  }
</style>
