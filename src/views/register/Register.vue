<template>
<!-- 注册页面 -->
  <div class="registerContainer">
    <img class="register__head" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
    <input class="register__usernameInput" type="text" placeholder="请输入手机号">
    <input class="register__pwInput" type="text" placeholder="请输入密码">
    <input class="register__pwInput" type="text" placeholder="确认密码">
    <div class="register__btn" @click="handleRegister">注册</div>
    <div class="register__toLogin" @click="toLogin">已有账号去登陆</div>
  </div>
</template>

<script type="text/ecmascript-6">
import router from 'vue-router'
  export default {
    name:"Register",
    methods: {
        // 注册点击事件
        handleRegister (){

        },
        // 已有账号去登陆
        toLogin (){
            this.$router.push( { name:"Login"} )
        }
    },
  }
</script>

<style lang="scss" scoped>
  // 注册容器
  .registerContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    // 头像
    .register__head {
      width: 66px;
      height: 66px;
      margin-bottom: 66px;
    }
    // 帐号/密码/去人密码输入框
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
    // 注册按钮
    .register__btn {
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
    // 已有账号去登陆
    .register__toLogin {
      font-size: 14px;
      font-family: "PingFangSC-Regular";
      color: #919191;
    }
  }
</style>
