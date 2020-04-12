<template>
  <div class="my">
        <!--头部栏-->
        <div class="header">
            <img class="avatar" src="http://i.waimai.meituan.com/static/img/default-avatar.png"/>
            <p class="nickname">美团小骑手 &gt;</p>
        </div>
        <!--内容表单区域-->
        <div class="content">
            <ul class="items">
                <li class="address">
                    收货地址管理
                </li>
                <li class="money">
                    商家代金券
                </li>
            </ul>
            <ul class="items">
                <li class="email">
                    意见反馈
                </li>
                <li class="question">
                    常见问题
                </li>
            </ul>
            <p class="tel">客服电话:&nbsp;101-097-77</p>
            <p class="time">服务时间:&nbsp;9:00-23:00</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
  .my .header {
    width: 100%;
    height: 160px;
    background-image: url("./img/header.png");
    background-size: cover;
    overflow: hidden;
  }
  .my .avatar {
    width: 72px;
    height: 72px;
    margin: 0 auto;
    display: block;
    margin-top: 25px;
    border: 3px solid rgba(255, 255, 255, 0.4);
    border-radius: 50%;
  }
  .my .nickname {
    color: #333;
    font-size: 16px;
    text-align: center;
    margin-top: 15px;
  }
  .my .content {
    min-height: 507px;
    background-color: #eee;
  }
  .my .items {
    border-bottom: 10px solid #eee;
    background-color: #fff;
  }
  .my .items li {
    height: 45px;
    font-size: 14px;
    line-height: 45px;
    position: relative;
    padding-left: 26px;
    margin-left: 15px;
    border-bottom: 1px solid #e4e4e4;
  }
  .my .items li:last-child {
    border: none;
  }
  .my .items li:before {
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
  .my .items li:after {
    content: '>';
    display: block;
    width: 16px;
    height: 16px;
    position: absolute;
    top: 0;
    right: 9px;
    color: #aaa;
  }
  .my .items .address:before {
    background-image: url("./img/address.png");
  }
  .my .items .money:before {
    background-image: url("./img/money.png");
  }
  .my .items .email:before {
    background-image: url("./img/email.png");
  }
  .my .items .question:before {
    background-image: url("./img/question.png");
  }
  .my .tel {
    font-size: 15px;
    color: #ffb000;
    text-align: center;
    height: 46px;
    line-height: 46px;
    background-color: #fff;
  }
  .my .time {
    font-size: 14px;
    text-align: center;
    margin-top: 13px;
    color: #999;
  }
</style>
