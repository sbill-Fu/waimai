<template>
  <div class="category-content clearfix">
    <div class="category-item"
      v-for="(item, index) in data"
      :key="'category'+index"
    >
      <img :src="item.url" class="category-item-icon">
      <p class="category-item-name">{{item.name}}</p>
    </div>
  </div>
</template>

<script>
  import {getCategory} from '@/api/category.js';

  export default {
    data() {
      return {
        data: [],
        name: 'name'
      };
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
