<template>
  <div class="order-list">
    <div
      class="order-item"
      v-for="(item, index) in data"
      :key="'order'+index"
    >
        <div class="order-item-inner">
            <img class="order-img" v-lazy="item.poi_pic" />
            <div class="order-right">
                <div class="order-right-top">
                    <p class="order-name one-line">{{item.poi_name}}</p>
                    <div class="arrow"></div>
                    <div class="order-state">{{item.status_description}}</div>
                </div>
                <div class="order-right-bottom">
                  <div
                    class="order-right-bottom-wrap"
                    v-for="(_item, idx) in item.product_list"
                    :key="'product'+idx"
                  >
                    <div class="order-prod">
                      {{_item.product_name}}
                      <div class="order-prod-count">{{'x'+_item.product_count}}</div>
                    </div>
                    <div v-if="idx+1 == (item.product_list.length)" class="order-prod">
                      <span>...</span>
                      <div class="order-total-count ">
                          总计{{_item.product_count}}+个菜，实付
                          <span class="order-total-price">¥{{item.total}}</span>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <div v-if="!item.is_comment" class="order-evaluation clearfix">
            <div class="order-evaluation-btn">评价</div>
        </div>
    </div>
  </div>
</template>

<script>
  import {getOrderList} from '@/api/order.js';

  export default {
    data() {
      return {
        data: []
      };
    },
    created() {
      getOrderList().then(res => {
        this.data = res;
        console.log('data: ', this.data);
      });
    }
  };
</script>

<style lang="scss" scoped>
  .order-list {
    padding-bottom: 60px;

    .order-item {
      border-top: 13px solid #efefef;

      &-inner {
        display: flex;
        padding-bottom: 18px;
        border-bottom: 1px solid #e0e0e0;
      }

      .order-img {
        width: 40px;
        height: 40px;
        margin-top: 8px;
        margin-left: 16px;
        border-radius: 50%;
      }

      .order-right {
        flex: 1;
        margin-left: 15px;
      }
      .order-right-top {
        height: 55px;
        padding-top: 2px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #e0e0e0;
      }
      .order-name {
        font-size: 16px;
        width: 180px;
        height: 16px;
        font-weight: 600;
      }
      .arrow {
        width: 8px;
        height: 8px;
        border: 1px solid #999;
        border-width: 1px 1px 0 0;
        transform: rotate(45deg);
        -webkit-transform: 45deg;
      }
      .order-state {
        margin-left: 40px;
        font-size: 14px;
        color: #999;
      }
      .order-prod {
        font-size: 14px;
        color: #666;
        margin-top: 12px;
      }
      .order-prod-count {
        float: right;
        margin-right: 15px;
      }
      .order-total-count  {
        float: right;
        margin-right: 15px;
        font-size: 12px;
      }
      .order-total-price {
        font-size: 14px;
        color: #151515;
        margin-left: 2px;
        letter-spacing: 1px;
      }
      .order-evaluation {
        padding-top: 10px;
        padding-bottom: 10px;
      }
      .order-evaluation-btn {
        float: right;
        width: 100px;
        height: 32px;
        color: #6b450a;
        background-color: #ffd161;
        font-size: 14px;
        line-height: 32px;
        text-align: center;
        margin-right: 10px;
      }
    }
  }

</style>
