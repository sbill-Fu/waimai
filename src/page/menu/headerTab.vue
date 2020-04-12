<template>
  <div class="tab-bar">
    <a
      v-for="(item, index) in items"
      :key="'tab'+index"
      class="tab-item"
      :class="item.key"
      href="###"
    >
      {{item.text}}
    </a>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            key: 'menu',
            text: '点菜'
          },
          {
            key: 'comment',
            text: '评价'
          },
          {
            key: 'restanurant',
            text: '商家'
          }
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>
  .tab-bar {
    font-size: 16px;
    display: flex;
    border-bottom: 1px solid #f0f0f0;
    margin-top: 64px;
  }
  .tab-bar .tab-item {
    flex: 1;
    height: 45px;
    line-height: 45px;
    position: relative;
    color: #666;
    text-align: center;
    text-decoration: none;
  }
  .tab-bar .tab-item.active:after {
    content: '';
    display: block;
    height: 4px;
    width: 60px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    background-color: #ffd161;
  }

</style>
