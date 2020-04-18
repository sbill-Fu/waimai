<template>
  <div class="test">
    <scroll>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p class="t">2</p>
    </scroll>
  </div>
</template>

<script>
  import scroll from '@/base/scroll';

  export default {
    data() {
      return {};
    },
    components: {
      scroll
    }
  };
</script>

<style lang="scss" scoped>
  .test {
    height: 100%;
  }
  .t {
    height: 1000px;
  }
</style>
