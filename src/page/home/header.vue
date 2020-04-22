<template>
  <div class="header">
    <div class="header-search">
      <div class="header-location">
          <i class="iconfont icon-location"></i>
          <div class="header-location-text">
            <span>郑州市</span>
            <i class="iconfont icon-right-arrow"></i>
          </div>
      </div>
      <div class="header-search-btn">
        <i class="iconfont icon-search"></i>
        <p class="header-search-holder">鸡翅</p>
      </div>
    </div>
    <!-- <img class="header-img" :src="headerImg"> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // headerImg: require('@/assets/img/header.jpg')
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/_mixins.scss';

  // .icon-location {
  //   color: red;
  // }

  .header {
    position: relative;
    background-color: lightgray;
    // overflow: hidden;
    height: 50px;

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

        .icon-location {
          display: inline-block;
          width: 15px;
          height: 20px;
          font-size: 25px;
          vertical-align: 10px;
          margin-left: 6px;
          color: #fff;
          font-weight: 100;
        }
        &-text {
          position: relative;
          display: inline-block;
          font-size: 14px;
          color: #fff;
          vertical-align: 15px;

          .icon-right-arrow {
            font-size: 13px;
          }
        }
      }
      &-btn {
        position: relative;
        width: 170px;
        height: 30px;
        background-color: #fff;
        border-radius: 0.5333333333rem;
        .header-search-holder {
          display: inline-block;
          vertical-align: 15px;
          color: #a9a9a9;
          font-size: 14px;
          height: 100%;
          line-height: 30px;
          margin-left: 28px;
        }

        .icon-search {
          font-size: 28px;
          line-height: 30px;
          padding-left: 6px;
          vertical-align: 10px;
          color: gray;
        }
      }
      // .header-search-btn:before {
      //   content: '';
      //   display: block;
      //   position: absolute;
      //   width: 14px;
      //   height: 14px;
      //   background-image: url("img/searchIcon.png");
      //   background-size: cover;
      //   top: 7px;
      //   left: 10px;
      // }
    }
  }
</style>
