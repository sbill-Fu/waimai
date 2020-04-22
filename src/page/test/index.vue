<template>
  <div class="test">
    <div class="left-container">
      <left></left>
    </div>
    <div class="right-container">
      <right></right>
    </div>
  </div>
</template>

<script>
  import scroll from '@/base/scroll';
  import left from './left';
  import right from './right';

  export default {
    data() {
      return {};
    },
    components: {
      scroll,
      left,
      right
    }
  };
</script>

<style lang="scss" scoped>
  .test {
    height: 100%;
    display: flex;
  }
  .left-container {
    width: 30%;
    height: 3000px;
    background-color: yellow;
  }
  .right-container {
    flex: 1;
    background-color: gray;
  }
</style>
