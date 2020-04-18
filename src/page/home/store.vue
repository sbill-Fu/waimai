<template>
  <div class="store-container">
    <h4 class="store-title">
      <span class="store-title-line"></span>
      <span>附近商家</span>
      <span class="store-title-line"></span>
    </h4>
    <div class="store-warp">
      <loading v-if="!data.length"></loading>
      <div class="store-content scale-1px"
        v-for="(item, index) in data"
        :key="'content' + index"
      >
        <img v-lazy="item.pic_url" class="store-item-img">
        <div class="store-brand store-brand-pin" v-if="item.brand_type">品牌</div>
        <div class="store-brand store-brand-xin" v-else>新到</div>
        <div class="store-item-info">
          <p class="store-item-title">{{item.name}}</p>
          <div class="store-item-desc clearfix">
            <div class="store-score">
              <div class="store-star-container">
                <div
                  class="store-star store-fullstar"
                  v-for="(star, i) in get_fullstar(item.wm_poi_score)"
                  :key="'fullstar'+i"
                ></div>
                <div
                  class="store-star store-halfstar"
                  v-for="(star, i) in get_halfstar(item.wm_poi_score)"
                  :key="'halfstar'+i"
                ></div>
                <div
                  class="store-star store-nullstar"
                  v-for="(star, i) in get_nullstar(item.wm_poi_score)"
                  :key="'nullstar'+i"
                ></div>
              </div>
            </div>
            <div class="store-count">月售{{item.month_sale_num > 999 ? '999+' : item.month_sale_num}}</div>
            <div class="store-distance">{{item.distance}}</div>
            <div class="store-time">{{item.mt_delivery_time}}</div>
          </div>
          <div class="store-item-price">
            <div class="store-item-preprice">{{item.min_price_tip}}</div>
            <div class="store-item-flag" v-if="item.delivery_type">美团专送</div>
          </div>
          <div class="store-item-others">
            <div class="store-other-info"
              v-for="(other, idx) in item.discounts2"
              :key="'other' + idx"
            >
              <img v-lazy="other.icon_url" class="store-other-tag">
              <div class="store-other-content">{{other.info}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getContentList} from '@/api/content';
  import loading from '@/base/loading';

  export default {
    data() {
      return {
        data: [],
        fullstar: 0,
        halfstar: 0,
        nullstar: 0

      };
    },
    components: {
      loading
    },
    created() {
      getContentList().then(res => {
        setTimeout(() => {
          this.data = res;
          this.$emit('loaded', this.data);
        }, 1500);
        // this.data = res;
      });

      // getStars(this.data.)
    },
    methods: {
      get_fullstar(score) {
        // console.log('getStar');
        var _score = score.toString();
        var scoreArray = _score.split('.');
        // 满星个数
        return parseInt(scoreArray[0]);
      },
      get_halfstar(score) {
        // console.log('getStar');
        var _score = score.toString();
        var scoreArray = _score.split('.');
        // 半星个数
        return parseInt(scoreArray[1]) >= 5 ? 1 : 0;
      },
      get_nullstar(score) {
        // console.log('getStar');
        var _score = score.toString();
        var scoreArray = _score.split('.');
        var fullstar = parseInt(scoreArray[0]);
        var halfstar = parseInt(scoreArray[1]) >= 5 ? 1 : 0;
        // 0星个数
        return 5 - fullstar - halfstar;
      },
      testCall() {
        console.log('call');
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/_mixins.scss';

  .store-container {
    overflow: hidden;
    padding-bottom: 50px;

    .store-title {
      text-align: center;
      font-size: 16px;
      margin-top: 14px;
      margin-bottom: 5px;

      &-line {
        display: inline-block;
        border-bottom: 1px solid #949494;
        height: 1px;
        width: 30px;
        margin-left: 4px;
        margin-right: 4px;
        margin-bottom: 4px;
      }
    }

    .store-content {
      display: flex;
      padding-top: 15px;
      padding-bottom: 15px;
      margin-left: 10px;
      margin-right: 10px;
      color: #656565;

      .store-item-img {
        width: 86px;
        height: 65px;
        border: 1px solid #e4e4e4;
      }
      .store-item-info {
        flex: 1;
        margin-left: 7px;
        overflow: hidden;
      }
      .store-brand {
        position: absolute;
        left: 1px;
        top: 16px;
        font-size: 12px;
        padding: 2px;
        color: #fff;
      }
      .store-brand-pin {
        background-color: #ffa627;
      }
      .store-brand-xin {
        background-color: #21c56c;
      }
      .store-item-title {
        margin-top: 3px;
        font-size: 16px;
        font-weight: 500;
        color: #333;
      }
      .store-item-desc {
        margin-top: 13px;
        font-size: 12px;
      }
      .store-score {
        float: left;
      }
      .store-count {
        float: left;
        margin-left: 5px;
      }
      .store-time {
        float: right;
      }
      .store-distance {
        float: right;
      }
      .store-item-price {
        margin-top: 10px;
        font-size: 12px;
        height: 24px;
      }
      .store-item-flag {
        float: right;
        background-color: #ffd161;
        color: #000;
        padding: 3px;
        border-radius: 3px;
      }
      .store-other-info {
        color: #898989;
        margin-top: 7px;
        font-size: 12px;
        display: flex;
      }
      .store-other-tag {
        width: 14px;
        height: 14px;
      }
      .store-other-content {
        vertical-align: 3px;
        margin-left: 3px;
        height: 14px;
        width: 230px;
      }
      .store-item-preprice {
        float: left;
      }
    }
    .store-content:after {
      // 因为每一个商家项目后面，都有一个伪类，是一根线，这里要给线添加上颜色
      background-color: #e4e4e4;
    }

    .store-star-container {
      .store-star {
        width: 10px;
        height: 10px;
        float: left;
        background-size: cover;
      }
      .store-fullstar {
        background-image: url("./img/fullstar.png");
      }
      .store-halfstar {
        background-image: url("./img/halfstar.png");
      }
      .store-nullstar {
        background-image: url("./img/gray-star.png");
      }
    }
  }
</style>
