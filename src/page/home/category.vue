<template>
  <div class="category-content clearfix">
    <loading></loading>
    <div class="category-item-wrap">
      <div class="category-item"
        v-for="(item, index) in data"
        :key="'category'+index"
      >
        <img :src="item.url" class="category-item-icon">
        <p class="category-item-name">{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {getCategory} from '@/api/category.js';
  import loading from '@/components/loading';

  export default {
    data() {
      return {
        data: [],
        name: 'name'
      };
    },
    components: {
      loading
    },
    created() {
      getCategory().then(res => {
        this.data = res.splice(0, 8);
        // console.log('r: ', res);
      });
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/_mixins.scss';

  .category-content {
    padding-bottom: 10px;

    .category-item {
      float: left;
      width: 25%;
      padding-top: 14px;
      font-size: 13px;
      @include flex-center(column);

      &-icon {
        width: 47px;
      }

      &-name {
        margin-top: 14px;
      }
    }

  }
</style>
