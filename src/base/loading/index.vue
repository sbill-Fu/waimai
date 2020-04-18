<template>
  <div class="loading-container">
    <img src="./img/loading.gif">
    <span class="loading-text">加载中...</span>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    }
  };
</script>

<style lang="scss" scoped>
  .loading-container {
    text-align: center;

    .loading-text {
      font-size: 11px;
      color: gray;
    }
  }
</style>
