<template>
  <div class="menu-container">
  <!--头部开始-->
    <div class="nav">
        <i @click="backHome" class="iconfont icon-left-arrow"></i>
        <h4 class="title">深圳麦当劳前海二餐厅</h4>
    </div>
    <!--头部结束-->
    <!--tabbar开始-->
    <header-tab></header-tab>
    <!--tabbar结束-->
    <div
      class="menu-inner"
    >
        <left
          ref="left"
          @switch-tab="switchTab"
          @foodDataGeted="dealFoodData"
          @clearedcart="updateRight"
        ></left>
        <div class="right-content">
            <!-- <p ref="rightTitle" class="right-title">热销</p> -->
              <right
                ref="right"
                @minusCount="minusCount"
                @addCount="addCount"
                :foodData="foodData"
                @switchTab="switchLeftTab"
              >
              </right>
        </div>
        <shop-bar
          :foodData="foodData"
          ref="shopBar"
          @toggleTop="toggleTop"
          @updateRight="updateRight"
          @clearCart="clearCart"
        ></shop-bar>
        <div v-if="showMask" class="mask" @click="toggleBottom"></div>
    </div>
  </div>
</template>

<script>
  import left from './left';
  import right from './right';
  import ShopBar from './shopBar';
  import HeaderTab from './headerTab';
  // import {getFoodList} from '@/api/menu.js';

  export default {
    data() {
      return {
        data: {},
        foodData: {},
        showMask: false
      };
    },
    components: {
      left,
      right,
      ShopBar,
      HeaderTab
    },
    methods: {
      switchTab(data, index) {
        // left 组件穿过来的data，是food_spu_tags[index],是个对象
        // data.spus 又是个数组，数组中的每一项是个对象
        // data.spus[index].chooseCount 这样才可以获取到数量
        // 美团项目中的 food_spu_tags 就是传递到这里的 data
        this.data = data;
        this.$refs.right.switchTab(index);
        // this.$refs.rightTitle.innerText = data.name;
        // console.log(data);
      },
      switchLeftTab(index) {
        this.$refs.left.activeIndex(index);
        // this.$refs.rightTitle.innerText = this.foodData.food_spu_tags[index].name;
      },
      dealFoodData(data) {
        // left 组件获取到数据后，触发事件的处理函数，为了将数据传递给 shopBar
        // 这里的数据是原始数据，是个对象
        this.foodData = data;
      },
      minusCount(item, preChooseNum) {
        this.$refs.shopBar.minusCount(item, preChooseNum);
      },
      addCount(item, preChooseNum) {
        this.$refs.shopBar.addCount(item, preChooseNum);
      },
      toggleTop() {
        this.showMask = !this.showMask;
      },
      toggleBottom() {
        this.$refs.shopBar.toggleTop();
      },
      updateRight() {
        this.$refs.right.forceUpdate();
      },
      clearCart() {
        this.$refs.left.clearCart();
      },
      backHome() {
        this.$router.push('/index');
      }
    }
  };
</script>

<style lang="scss" scoped>
  .menu-container {
    height: 100%;
    overflow: hidden;
  }
  .nav {
    display: flex;
    height: 64px;
    border-bottom: 1px solid #b2b2b2;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 99;
    background-color: #fff;

    .icon-left-arrow {
      line-height: 64px;
      padding-left: 4px;
      font-size: 20px;
    }

    .title {
      display: inline-block;
      flex: 1;
      align-items: center;
      font-size: 17px;
      color: #2f2f2f;
      text-align: center;
      line-height: 64px;
    }
  }
  // .nav .back-icon {
  //   width: 27px;
  //   height: 27px;
  //   position: absolute;
  //   top: 23px;
  //   left: 10px;
  //   background-image: url("./img/back.png");
  //   background-size: cover;
  // }

  .menu-inner {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    top: 110px;
    display: flex;
    overflow: hidden;
    z-index: 100;
    background-color: #f5f5f5;
  }
  .right-content {
    flex: 1;
    margin-left: 10px;
    height: 100%;
    padding-bottom: 50px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
   .right-title {
    font-size: 13px;
    color: #333;
    margin-top: 10px;
    padding-left: 4px;
    border-left: 2px solid #ffd161;
  }
  .mask {
    position: absolute;
    z-index: 50; // 盖住 right 组件的商品，同时又小于底部的 shop-bar
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(0,0,0,.7);
  }
</style>
