<template>
  <div class="list-content">
    <h4 class="list-title">
      <span class="title-line"></span>
      <span>附近商家</span>
      <span class="title-line"></span>
    </h4>
    <div class="list-wrap">
      <div class="r-item-content scale-1px"
        v-for="(item, index) in data"
        :key="'content' + index"
      >
        <img :src="item.pic_url" class="item-img">
        <div class="brand brand-pin" v-if="item.brand_type">品牌</div>
        <div class="brand brand-xin" v-else>新到</div>
        <div class="item-info-content">
          <p class="item-title">{{item.name}}</p>
          <div class="item-desc clearfix">
            <div class="item-score">
              <div class="star-score">
                <div
                  class="star fullstar"
                  v-for="(star, i) in get_fullstar(item.wm_poi_score)"
                  :key="'fullstar'+i"
                ></div>
                <div
                  class="star halfstar"
                  v-for="(star, i) in get_halfstar(item.wm_poi_score)"
                  :key="'halfstar'+i"
                ></div>
                <div
                  class="star nullstar"
                  v-for="(star, i) in get_nullstar(item.wm_poi_score)"
                  :key="'nullstar'+i"
                ></div>
              </div>
            </div>
            <div class="item-count">月售{{item.month_sale_num > 999 ? '999+' : item.month_sale_num}}</div>
            <div class="item-distance">{{item.distance}}</div>
            <div class="item-time">{{item.mt_delivery_time}}</div>
          </div>
          <div class="item-price">
            <div class="item-pre-price">{{item.min_price_tip}}</div>
            <div class="item-meituan-flag" v-if="item.delivery_type">美团专送</div>
          </div>
          <div class="item-others">
            <div class="other-info"
              v-for="(other, idx) in item.discounts2"
              :key="'other' + idx"
            >
              <img :src="other.icon_url" class="other-tag">
              <div class="other-content">{{other.info}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getContentList} from '@/api/content';

  export default {
    data() {
      return {
        data: [],
        fullstar: 0,
        halfstar: 0,
        nullstar: 0

      };
    },
    created() {
      getContentList().then(res => {
        this.data = res;
        console.log('content: ', this.data);
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
  .list-content {
    overflow: hidden;
    padding-bottom: 50px;

    .list-title {
      text-align: center;
      font-size: 16px;
      margin-top: 14px;
      margin-bottom: 5px;
    }

    .title-line {
      display: inline-block;
      border-bottom: 1px solid #949494;
      height: 1px;
      width: 30px;
      margin-left: 4px;
      margin-right: 4px;
      margin-bottom: 4px;
    }
  }

  .r-item-content {
    display: flex;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-left: 10px;
    margin-right: 10px;
    color: #656565;
  }
  .r-item-content:after {
    background-color: #e4e4e4;
  }
  .r-item-content .item-img {
    width: 86px;
    height: 65px;
    border: 1px solid #e4e4e4;
  }
  .r-item-content .item-info-content {
    flex: 1;
    margin-left: 7px;
    overflow: hidden;
  }
  .r-item-content .brand {
    position: absolute;
    left: 1px;
    top: 16px;
    font-size: 12px;
    padding: 2px;
    color: #fff;
  }
  .r-item-content .brand-pin {
    background-color: #ffa627;
  }
  .r-item-content .brand-xin {
    background-color: #21c56c;
  }
  .r-item-content .item-title {
    margin-top: 3px;
    font-size: 16px;
    font-weight: 500;
    color: #333;
  }
  .r-item-content .item-desc {
    margin-top: 13px;
    font-size: 12px;
  }
  .r-item-content .item-score {
    float: left;
  }
  .r-item-content .item-count {
    float: left;
    margin-left: 5px;
  }
  .r-item-content .item-time {
    float: right;
  }
  .r-item-content .item-distance {
    float: right;
  }
  .r-item-content .item-price {
    margin-top: 10px;
    font-size: 12px;
    height: 24px;
  }
  .r-item-content .item-meituan-flag {
    float: right;
    background-color: #ffd161;
    color: #000;
    padding: 3px;
    border-radius: 3px;
  }
  .r-item-content .other-info {
    color: #898989;
    margin-top: 7px;
    font-size: 12px;
    display: flex;
  }
  .r-item-content .other-tag {
    width: 14px;
    height: 14px;
  }
  .r-item-content .other-content {
    vertical-align: 3px;
    margin-left: 3px;
    height: 14px;
    width: 230px;
  }
  .r-item-content .item-pre-price {
    float: left;
  }

  .star-score .star {
    width: 10px;
    height: 10px;
    float: left;
    background-size: cover;
  }
  .star-score .fullstar {
    background-image: url("./img/fullstar.png");
  }
  .star-score .halfstar {
    background-image: url("./img/halfstar.png");
  }
  .star-score .nullstar {
    background-image: url("./img/gray-star.png");
  }
</style>
