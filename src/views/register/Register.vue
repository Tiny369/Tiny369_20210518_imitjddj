<template>
<!-- 注册页面 -->
  <div class="registerContainer">
    <img class="register__head" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
    <input class="register__usernameInput" type="text" placeholder="请输入手机号" v-model="userRegInfo.username">
    <input class="register__pwInput" type="password" placeholder="请输入密码" v-model="userRegInfo.password">
    <input class="register__pwInput" type="password" placeholder="确认密码" v-model="userRegInfo.passwordConfirm">
    <div class="register__btn" @click="handleRegister">注册</div>
    <div class="register__toLogin" @click="toLogin">已有账号去登陆</div>
    <Toast v-if="isShowToast" :toastMessage="toastMessage" />
  </div>
</template>

<script type="text/ecmascript-6">
  import request from '../../util/request.js'
  import Toast from '../../components/Toast.vue'
  export default {
    name:"Register",
    components:{
      Toast
    },
    data() {
      return {
        userRegInfo:{
          username:'',
          password:'',
          passwordConfirm:''
        },
        isShowToast:false,
        toastMessage:''
      }
    },
    methods: {
      // 注册点击事件
      async handleRegister (){
        let { username,password,passwordConfirm } = this.userRegInfo
        if(!username.trim()){
          return this.ToastMS('请输入帐号')
        }else if(!password.trim()){
          return this.ToastMS('请输入密码')
        }else if(!passwordConfirm.trim()){
          return this.ToastMS('请确认密码')
        }
        try {
          let result = await request('/api/user/register',this.userRegInfo,'post',{'Content-Type': 'application/json'})
          if(result.errno === 0){
            this.ToastMS('注册成功')
            setTimeout(() => {
              this.$router.push( { name:"Login"} )
            }, 900);    
          }else{
            this.ToastMS('注册失败')
          }
        } catch (error) {
          this.ToastMS('请求失败')
        }
      },
      ToastMS (message){
        this.isShowToast = true
        this.toastMessage = message
        setTimeout(() => {
          this.isShowToast = false
          this.toastMessage = ''
        }, 1200);
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
