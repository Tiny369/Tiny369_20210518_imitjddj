<template>
<!-- 登录页面 -->
  <div class="loginContainer">
    <img class="login__head" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
    <input class="login__usernameInput" type="text" placeholder="请输入手机号" v-model="userInfo.username">
    <input class="login__pwInput" type="text" placeholder="请输入密码" v-model="userInfo.password">
    <div class="login__btn" @click="handleLogin">登陆</div>
    <div class="login__register" @click="toRegister">立即注册</div>
    <Toast v-if="isShowToast" :toastMessage="toastMessage" />
  </div>
</template>

<script type="text/ecmascript-6">
// import axios from 'axios'
import request from '../../util/request.js'
import Toast from '../../components/Toast.vue'
  export default {
    name:"Login",
    components:{
      Toast
    },
    data() {
      return {
        // 用户信息（帐号密码）
        userInfo:{
          username:'',
          password:'',
        },
        // 是否显示弹框
        isShowToast:false,
        // 弹框内容
        toastMessage:''
      }
    },
    methods: {
      // 点击登录按钮
      async handleLogin (){
        /* 
          axios.defaults.baseURL = 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/user/login'
          axios.defaults.headers.post['Content-Type'] = 'application/json';
          axios.post('/api/user/login',{
            username:'username',
            password:'password'
          }).then(() => {
            alert('成功')
          }).catch(() => {
            alert('失败')
          }) 
        */
        /* 
          axios.post('/api/user/login',this.userInfo)
            .then( () => alert('成功') )
            .catch( () => alert('失败') ) 
        */

        try {
          let result = await request('/api/user/login',this.userInfo,'post',{'Content-Type': 'application/json'})
          console.log(result);
          if(result.errno === 0){
            localStorage.isLogin = true     // 添加本地存储isLogin属性的值
            this.$router.push( { name:"Home"} )    // 跳转至首页
          }else{
            // alert('登陆失败')
            this.ToastMS('登陆失败')
          }
        } catch (error) {
          // alert('请求失败')
          this.ToastMS('请求失败')
        }

      /*   // 添加本地存储isLogin属性的值
        localStorage.isLogin = true
        setTimeout(() => {
          // 跳转至首页
          this.$router.push( { name:"Home"} )
        }, 1000); */
      },
      // 弹框提示函数封装
      ToastMS (message){
        this.isShowToast = true
        this.toastMessage = message
        setTimeout(() => {
          this.isShowToast = false
          this.toastMessage = ''
        }, 1200);
      },

      // 立即注册
      toRegister (){
        this.$router.push( { name:"Register"} )
      }
    },
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
