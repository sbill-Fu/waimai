<template>
  <div class="personal">
        <!--头部栏-->
        <div class="personal-header">
            <img class="personal-avatar" src="http://i.waimai.meituan.com/static/img/default-avatar.png"/>
            <p class="personal-nickname">美团小骑手 &gt;</p>
        </div>
        <!--内容表单区域-->
        <div class="personal-content">
            <ul class="personal-content-items">
                <li class="personal-content-address">
                    收货地址管理
                </li>
                <li class="personal-content-money">
                    商家代金券
                </li>
            </ul>
            <ul class="personal-content-items">
                <li class="personal-content-email">
                    意见反馈
                </li>
                <li class="personal-content-question">
                    常见问题
                </li>
            </ul>
            <p class="personal-tel">客服电话:&nbsp;101-097-77</p>
            <p class="personal-time">服务时间:&nbsp;9:00-23:00</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
  .personal {
    &-header {
      width: 100%;
      height: 160px;
      background-image: url("./img/header.png");
      background-size: cover;
      overflow: hidden;
    }

    &-avatar {
      width: 72px;
      height: 72px;
      margin: 0 auto;
      display: block;
      margin-top: 25px;
      border: 3px solid rgba(255, 255, 255, 0.4);
      border-radius: 50%;
    }
    &-nickname {
      color: #333;
      font-size: 16px;
      text-align: center;
      margin-top: 15px;
    }
    &-content {
      min-height: 507px;
      background-color: #eee;
    }
    &-content-items {
      border-bottom: 10px solid #eee;
      background-color: #fff;
    }
    &-content-items li {
      height: 45px;
      font-size: 14px;
      line-height: 45px;
      position: relative;
      padding-left: 26px;
      margin-left: 15px;
      border-bottom: 1px solid #e4e4e4;
    }
    &-content-items li:last-child {
      border: none;
    }
    &-content-items li:before {
      content: '';
      display: block;
      width: 16px;
      height: 16px;
      position: absolute;
      top: 50%;
      left: 1px;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      background-size: cover;
    }
    &-content-items li:after {
      content: '>';
      display: block;
      width: 16px;
      height: 16px;
      position: absolute;
      top: 0;
      right: 9px;
      color: #aaa;
    }
    &-content-items .personal-content-address:before {
      background-image: url("./img/address.png");
    }
    &-content-items .personal-content-money:before {
      background-image: url("./img/money.png");
    }
    &-content-items .personal-content-email:before {
      background-image: url("./img/email.png");
    }
    &-content-items .personal-content-question:before {
      background-image: url("./img/question.png");
    }
    &-tel {
      font-size: 15px;
      color: #ffb000;
      text-align: center;
      height: 46px;
      line-height: 46px;
      background-color: #fff;
    }
    &-time {
      font-size: 14px;
      text-align: center;
      margin-top: 13px;
      color: #999;
    }
  }
</style>
