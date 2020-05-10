<template>
  <div
    class="left-bar"
  >
    <div
      class="left-item"
      v-for="(item, index) in data"
      :class="{'active': index==itemIndex}"
      :key="'left-item'+index"
      @click="changeMenuTab($event, index, item)"
    >
      <div class="item-text">
        <img v-if="item.icon" class="item-icon" :src="item.icon" />
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
  import {getFoodList} from '@/api/menu.js';

  export default {
    data() {
      return {
        data: [],
        itemIndex: -1
      };
    },
    props: {
      jsonData: {
        type: Object,
        default: () => {
          return {};
        }
      }
    },
    created() {
      getFoodList().then(res => {
        this.data = res.food_spu_tags;
        this.$emit('foodDataGeted', res); // 触发事件，让父组件传值给 shopBar 渲染模板
        this.changeMenuTab('_', 0, this.data[0]);
      });
    },
    methods: {
      changeMenuTab(e, index, item) {
        this.activeIndex(index);
        this.$emit('switch-tab', item, index); // 触发事件，最终交给 right 组件渲染模板的
      },
      clearCart() {
        // 底部组件清空购物车的时候，需要将数据中的所有 chooseCount = 0，因为数据是在这个组件获取的
        // 怀疑由 点击加载 改成 点击跳转 之后，这个不需要了？
        this.data.forEach(item => {
          item.spus.forEach(_item => {
            if (_item.chooseCount > 0) {
              console.log('count: ', _item.chooseCount);
              _item.chooseCount = 0;
            }
          });
        });
        this.$emit('clearedcart');
      },
      activeIndex(index) {
        // itemIndex 和 index 相等的话，就添加类 active
        this.itemIndex = index;
      }
    }
  };
</script>

<style lang="scss" scoped>
   .left-bar {
    width: 85px;
    background-color: #efefef;
    overflow: auto;
    height: 100%;
    -webkit-overflow-scrolling: touch;
  }
   .left-bar {
    padding-bottom: 85px;
  }
   .left-item {
    font-size: 14px;
    color: #656565;
    text-align: center;
    height: 60px;
    border-bottom: 1px solid #bfbfbf;
    display: flex;
    justify-content: center;
  }
   .left-item.active {
    background-color: #fff;
  }
   .item-text {
    line-height: 20px;
    align-self: center;
    text-align: center;
  }
   .item-icon {
    width: 20px;
    height: 20px;
    display: inline-block;
    vertical-align: -4px;
    margin-right: 6px;
  }
   .right-list {
    height: 100%;
  }
   .right-list-inner {
    font-size: 16px;
    padding-bottom: 85px;
  }
   .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }

</style>
