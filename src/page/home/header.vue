<template>
  <div class="header">
    <div class="header-search">
      <div class="header-location">
          <div class="header-location-icon"></div>
          <div class="header-location-text">郑州市</div>
      </div>
      <div class="header-search-btn">
          <p class="header-search-holder">鸡翅</p>
      </div>
    </div>
    <img class="header-img" :src="headerImg">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        headerImg: require('@/assets/img/header.jpg')
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/_mixins.scss';

  .header {
    position: relative;

    &-img {
      width: 100%;
      height: 178px;
    }

    &-search {
      width: 100%;
      height: 40px;
      position: absolute;
      @include flex-center();
      padding-top: 14px;

      .header-location {
        margin-right: 20px;
        border-radius: 13px;
        background-color: rgba(0, 0, 0, 0.33);
        height: 28px;
        width: 92px;

        &-icon {
          display: inline-block;
          width: 15px;
          height: 20px;
          vertical-align: 10px;
          margin-left: 6px;
          background-image: url('img/locationIcon.png');
          background-size: cover;
        }
        &-text {
          position: relative;
          display: inline-block;
          font-size: 14px;
          color: #fff;
          vertical-align: 15px;
        }
        .header-location-text:after {
          content: '';
          display: block;
          position: absolute;
          width: 14px;
          height: 14px;
          background-image: url("img/arrowIcon.png");
          background-size: cover;
          right: -15px;
          top: 1px;
        }
      }
      &-btn {
        position: relative;
        width: 170px;
        height: 30px;
        background-color: #fff;
        border-radius: 0.5333333333rem;
        .header-search-holder {
          color: #a9a9a9;
          font-size: 14px;
          height: 100%;
          line-height: 30px;
          margin-left: 28px;
        }
      }
      .header-search-btn:before {
        content: '';
        display: block;
        position: absolute;
        width: 14px;
        height: 14px;
        background-image: url("img/searchIcon.png");
        background-size: cover;
        top: 7px;
        left: 10px;
      }
    }
  }
</style>
