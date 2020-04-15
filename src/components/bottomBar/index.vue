<template>
  <div class="bottom-bar">
    <router-link
      v-for="(item, index) in data"
      :key="'bottom'+index"
      class="btn-item"
      :class="item.key"
      :href="item.key+'.html'"
      :to="'/'+item.key"
    >
      <div class="tab-icon"></div>
      <div class="btn-name">{{item.text}}</div>
    </router-link>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            key: 'index',
            text: '首页'
          },
          {
            key: 'order',
            text: '订单'
          },
          {
            key: 'my',
            text: '我的'
          }
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>
  .router-link-active {
    color: #000 !important;
  }
  .bottom-bar {
    position: fixed;
    bottom: 0;
    z-index: 50;
    width: 100%;
    height: 50px;
    display: flex;
    border-top: 1px solid #b6b6b6;
    background-color: rgba(246, 246, 246, 0.95);
  }
  .bottom-bar .btn-item {
    text-decoration: none;
    flex: 1;
    font-size: 11px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #999;
  }
  .bottom-bar .btn-item .tab-icon {
    margin-bottom: 4px;
    width: 25px;
    height: 25px;
    background-size: cover;
  }
  .bottom-bar .btn-item.active {
    color: #000;
  }
  .bottom-bar .btn-item.my.active .tab-icon {
    background-image: url("./img/myIconActive.png");
  }
  .bottom-bar .btn-item.my .tab-icon {
    background-image: url("./img/myIcon.png");
  }
  .bottom-bar .btn-item.order .tab-icon {
    background-image: url("./img/orderIcon.png");
  }
  .bottom-bar .btn-item.order.active .tab-icon {
    background-image: url("./img/orderIconActive.png");
  }
  .bottom-bar .btn-item.index .tab-icon {
    background-image: url("./img/homeIcon.png");
  }
  .bottom-bar .btn-item.index.active .tab-icon {
    background-image: url("./img/homeIconActive.png");
  }

</style>
