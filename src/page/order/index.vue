<template>
  <div class="order-container">
    <div class="header">订单</div>
    <content-list></content-list>
  </div>
</template>

<script>
  import ContentList from './contentList';

  export default {
    data() {
      return {};
    },
    components: {
      ContentList
    }
  };
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 64px;
    background-color: #fff;
    border-bottom: 1px solid #b2b2b2;
    font-size: 17px;
    color: #333;
    text-align: center;
    line-height: 64px;
    font-weight: bold;
  }
</style>
