<template>
  <swiper :options="swiperOption" ref="swiper">
    <swiper-slide
      v-for="(_data, index) in data"
      :key="'right'+index"
    >
      <div class="right-list-container">
        <div
          v-for="(item, idx) in _data"
          :key="'right-list'+idx"
          :data-id="item.id"
          class="menu-item"
        >
            <img class="img" v-lazy="item.picture" />
            <div class="menu-item-right">
                <p class="item-title">{{item.name}}</p>
                <p class="item-desc two-line">{{item.description}}</p>
                <p class="item-zan">{{item.praise_content}}</p>
                <p class="item-price">{{'￥' + item.min_price}}<span class="unit">/{{item.unit}}</span></p>
            </div>
            <div class="select-content">
                <div @click="minusCount($event, item)" class="minus"></div>
                <div ref="chooseCount" class="count">{{item.chooseCount ? item.chooseCount : 0}}</div>
                <div @click="plusCount($event, item)" class="plus"></div>
            </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
  // import {getFoodList} from '@/api/menu.js';
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  import 'swiper/dist/css/swiper.css';
  import scroll from '@/base/scroll';

  export default {
    data() {
      return {
        data: [],
        tabIndex: [], // 如果当前tab已经请求过了，就不需要重复加载数据了
        swiperOption: {},
        activeIndex: -1
      };
    },
    components: {
      scroll,
      swiper,
      swiperSlide
    },
    props: {
      foodData: {
        type: [Array, Object],
        default: () => []
      }
    },
    watch: {
      foodData(data) {
        // data 是个对象
        // data.food_spu_tags 是个数组，元素是对象
        // data.food_spu_tags.spus 是数组
        data.food_spu_tags.forEach((item) => this.data.push(item.spus));
      }
    },
    created() {
      this.init();
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
      transitionEnd() {
        // 由于滑动时会有惯性，因为惯性滑动的距离是不会被 sliderMove 监听到的
        // 所以在停止滑动的时候，再判断滚动条的位置
        const swiper = this.$refs.swiper.swiper;
        if (this.activeIndex === swiper.activeIndex) return;
        this.activeIndex = swiper.activeIndex;
        this.$emit('switchTab', swiper.activeIndex);
      },
      scroll() {
        const swiper = this.$refs.swiper.swiper;
        // console.log(swiper.translate);
        // console.log('indexpre: ', swiper.activeIndex);
        if (this.activeIndex === swiper.activeIndex) return;
        this.activeIndex = swiper.activeIndex;
        this.$emit('switchTab', swiper.activeIndex);
      },
      switchTab(index) {
        // 因为首次加载页面的时候，右边要有值，所以直接请求第一个tab热销的数据
        // 左边点击切换 tab 的时候，如果点击的是第一个tab，就不需要覆盖掉 data 的值了
        this.$refs.swiper.swiper.slideTo(index);
        this.activeIndex = index;
      },
      minusCount(e, item) {
        // 点击减号后，将 count 的值减1
        if (typeof item.chooseCount === 'number' && item.chooseCount > 0) {
          var preChooseNum = item.chooseCount;
          item.chooseCount--;
          this.$forceUpdate(); // item.chooseCount 的值变后，需要强制刷新一下才有效果
          this.$emit('minusCount', item, preChooseNum); // 点击之后，count可能会变化，触发事件给 shopBar 处理，看看总价是否发生了变化
        }
      },
      plusCount(e, item) {
        // item.chooseCount 的初始值可能不是数字，而是 undefined 什么的
        if (typeof item.chooseCount !== 'number') {
          item.chooseCount = 0;
        }
        var preChooseNum = item.chooseCount;
        item.chooseCount++;
        this.$forceUpdate(); // 强制刷新
        this.$emit('addCount', item, preChooseNum);
      },
      forceUpdate() {
        this.$forceUpdate();
      }
    }
  };
</script>

<style lang="scss" scoped>
  // 这个将滚动条去掉的样式没有生效
  ::-webkit-scrollbar {
    display:none
  }

  .swiper-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    height: auto;
  }

  // .right-list-container {
  //   height: 100%;
  // }
  .menu-item {
    display: flex;
    padding-top: 0.6666666667rem;
    padding-bottom: 0.6666666667rem;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
  }
  .menu-item .img {
    width: 1.6533333333rem;
    height: 1.6533333333rem;
    margin-right: 0.2666666667rem;
  }
  .menu-item .menu-item-right {
    flex: 1;
  }
  .menu-item .item-title {
    font-size: 0.4266666667rem;
    color: #2f2f2f;
  }
  .menu-item .item-desc, .menu-item .item-zan {
    color: #a9a9a9;
    font-size: 0.32rem;
    margin-top: 0.16rem;
    line-height: 0.3733333333rem;
    padding-right: 0.1066666667rem;
  }
  .menu-item .item-desc.item-desc, .menu-item .item-zan.item-desc {
    line-height: 0.4533333333rem;
  }
  .menu-item .item-price {
    margin-top: 0.2666666667rem;
    color: #fe4d3d;
    font-size: 0.48rem;
  }
  .menu-item .unit {
    color: #a9a9a9;
    font-size: 0.32rem;
  }
  .menu-item .select-content {
    position: absolute;
    right: 0.24rem;
    bottom: 0.56rem;
    display: flex;
  }
  .menu-item .plus {
    width: 0.6666666667rem;
    height: 0.6666666667rem;
    background-size: 100% 100%;
    background-image: url("./img/plus.png");
  }
  .menu-item .minus {
    width: 0.6666666667rem;
    height: 0.6666666667rem;
    background-size: 100% 100%;
    background-image: url("./img/minus.png");
  }
  .menu-item .count {
    font-size: 0.4rem;
    color: #2f2f2f;
    width: 0.5333333333rem;
    height: 0.6666666667rem;
    line-height: 0.6666666667rem;
    margin-left: 0.0533333333rem;
    margin-right: 0.0533333333rem;
    text-align: center;
  }

</style>
