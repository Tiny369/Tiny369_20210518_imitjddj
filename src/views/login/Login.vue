<template>
<!-- 登录页面 -->
  <div class="loginContainer">
    <img class="login__head" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
    <input class="login__usernameInput" type="text" placeholder="请输入手机号">
    <input class="login__pwInput" type="text" placeholder="请输入密码">
    <div class="login__btn">登陆</div>
    <div class="login__register">立即注册</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="scss" scoped>
  // 登录容器
  .loginContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    // 头像
    .login__head {
      width: 66px;
      height: 66px;
      margin-bottom: 66px;
    }
    // 帐号和密码输入框
    input {
      width: 295px;
      height: 48px;
      margin-bottom: 16px;
      border: 1px solid #DFDFDF;
      outline: none;
      padding-left: 16px;
      box-sizing: border-box;
      font-size: 16px;
      color: #7C7C7C;
    }
    // 登录按钮
    .login__btn {
      width: 295px;
      height: 48px;
      background-color: #0091FF;
      border-radius: 5px;
      text-align: center;
      line-height: 48px;
      color: white;
      font-size: 16px;
      font-family: "PingFangSC-Regular";
      margin: 16px 0;
    }
    // 注册链接
    .login__register {
      font-size: 14px;
      font-family: "PingFangSC-Regular";
      color: #919191;
    }
  }
</style>
