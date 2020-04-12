<template>
  <div class="shop-bar">
    <div class="choose-content" v-if="topShow">
      <div class="content-top">
          <div @click="clearChooseData" class="clear-car">清空购物车</div>
      </div>
      <div class="choose-item-container">
        <div
          v-for="(item, idx) in topItems"
          :key="'chooseItem'+idx"
          :data-id="item.id"
          class="choose-item"
        >
          <div class="item-name">{{item.name}}</div>
          <div class="price">¥<span class="total">{{getPrice(item.min_price,item.chooseCount)}}</span></div>
          <div class="select-content">
              <div @click="selfMinusCount(item, item.chooseCount)" class="minus"></div>
              <div ref="chooseCount" class="count">{{item.chooseCount}}</div>
              <div @click="selfAddCount(item, item.chooseCount)" class="plus"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom-content">
        <div @click="toggleTop" class="shop-icon">
            <div v-show="showNum" class="dot-num" >{{showNum}}</div>
        </div>
        <div class="price-content">
            <p class="total-price">¥<span class="total-price-span">{{totalPrice}}</span></p>
            <p class="other-price">另需配送&nbsp;¥<span class="shipping-fee">{{shipping_fee}}</span></p>
        </div>
        <div class="submit-btn">去结算</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        totalPrice: 0,
        showNum: 0,
        topShow: false,
        shipping_fee: 0,
        topItems: []
      };
    },
    props: {
      foodData: {
        type: Object,
        default: () => {}
      }
    },
    created() {
      console.log('created');
    },
    methods: {
      getPrice(price, count) {
        var r = price * count;
        return r;
      },
      minusCount(item, preChooseNum) {
        this.totalPrice -= item.min_price * (preChooseNum - item.chooseCount);
        this.showNum--;
        if (item.chooseCount === 0) {
          console.log('pop');
          this.topItems.pop(item);
        }
      },
      addCount(item, preChooseNum) {
        this.totalPrice += item.min_price * (item.chooseCount - preChooseNum);
        this.showNum++;
        if (item.chooseCount === 1) {
          console.log('push');
          this.topItems.push(item);
        }
      },
      toggleTop() {
        this.$emit('toggleTop');
        this.topShow = !this.topShow;
      },
      selfMinusCount(item, preChooseNum) {
        if (item.chooseCount === 1) {
          // 先将项目移除掉，后面再将 chooseCount - 1
          this.removeArrEle(this.topItems, item);
        }
        item.chooseCount--;
        this.totalPrice -= item.min_price * (preChooseNum - item.chooseCount);
        this.showNum--;
        this.$emit('updateRight');
      },
      selfAddCount(item, preChooseNum) {
        this.showNum++;
        item.chooseCount++;
        this.totalPrice += item.min_price * (item.chooseCount - preChooseNum);
        this.$emit('updateRight');
      },
      removeArrEle(arr, el) {
        var idx = arr.indexOf(el);
        arr.splice(idx, 1);
      },
      clearChooseData() {
        this.topItems = [];
        this.showNum = 0;
        this.totalPrice = 0;
        this.$emit('clearCart'); // 触发事件，告知shop-bar已经清除购物车，right组件也应该将已选择的商品清零
      }
    },
    watch: {
      foodData(data) {
        this.shipping_fee = this.foodData.poi_info.shipping_fee;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .shop-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }
  .shop-bar .bottom-content {
    height: 50px;
    display: flex;
    background-color: rgba(51, 51, 51, 0.9);
  }
  .shop-bar .shop-icon {
    width: 55px;
    height: 56px;
    background-image: url("./img/shop-icon.png");
    background-size: cover;
    margin-top: -15px;
    margin-left: 12px;
    position: relative;
  }
  .shop-bar .price-content {
    flex: 1;
    padding-top: 8px;
    padding-left: 7px;
  }
  .shop-bar .total-price {
    font-size: 20px;
    color: #fff;
  }
  .shop-bar .other-price {
    font-size: 12px;
    color: #999;
    margin-top: 2px;
  }
  .shop-bar .dot-num {
    position: absolute;
    background-color: #fb4e44;
    width: 15px;
    height: 15px;
    font-size: 12px;
    color: #fff;
    border: 1px solid #fff;
    top: 2px;
    right: 0;
    border-radius: 50%;
    text-align: center;
    line-height: 16px;
  }
  .shop-bar .submit-btn {
    width: 110px;
    height: 100%;
    background-color: #ffd161;
    color: #333;
    font-size: 16px;
    line-height: 50px;
    text-align: center;
  }
  .shop-bar .choose-content {
    background-color: #fff;
  }
  .shop-bar .content-top {
    height: 35px;
    background-color: #f4f4f4;
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .shop-bar .clear-car {
    margin-left: 10px;
    margin-right: 5px;
  }
  .shop-bar .clear-car:before {
    content: '';
    width: 13px;
    height: 13px;
    display: block;
    background-image: url("./img/clear.jpeg");
    background-size: cover;
    float: left;
    margin: -1px;
    margin-right: 2px;
  }
  .shop-bar .choose-item {
    display: flex;
    font-size: 15px;
    color: #2f2f2f;
    height: 35px;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
  }
  .shop-bar .choose-item .price {
    margin-left: 5px;
    margin-right: 25px;
  }
  .shop-bar .item-name {
    flex: 1;
    padding-left: 10px;
  }
  .shop-bar .select-content {
    position: relative;
    display: flex;
    margin-right: 8px;
  }
  .shop-bar .plus {
    width: 25px;
    height: 25px;
    background-size: 100% 100%;
    background-image: url("./img/plus.png");
  }
  .shop-bar .minus {
    width: 25px;
    height: 26px;
    background-size: 100% 100%;
    background-image: url("./img/minus.png");
  }
  .shop-bar .count {
    font-size: 15px;
    color: #2f2f2f;
    width: 20px;
    height: 25px;
    line-height: 25px;
    margin-left: 2px;
    margin-right: 2px;
    text-align: center;
  }

</style>
