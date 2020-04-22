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
    <router-link class="btn-item home" to="/index">
      <i class="iconfont icon-home"></i>
      <span class="btn-name">首页</span>
    </router-link>
    <router-link class="btn-item order" to="/order">
      <i class="iconfont icon-order"></i>
      <span class="btn-name">订单</span>
    </router-link>
    <router-link class="btn-item my" to="/my">
      <i class="iconfont icon-personal"></i>
      <span class="btn-name">我的</span>
    </router-link>
  </div>

</template>

<style lang="scss" scoped>
  .iconfont  {
    font-size: 25px;
  }
  .router-link-active {
    color: red !important;
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
</style>
