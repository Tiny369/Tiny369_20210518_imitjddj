import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import Login from './views/login/Login.vue'
import Register from './views/register/Register.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      name:'Home',
      component:Home
    },
    {
      path:'/register',
      name:'Register',
      component:Register,
      // 路由守卫
      beforeEnter(to,from,next){
        localStorage.isLogin ? next({ name:"Home" }) : next()
      }
    },
    {
      path:'/login',
      name:'Login',
      component:Login,
      // 路由守卫
      beforeEnter(to,from,next){
        /* let { isLogin } = localStorage
        if(isLogin){
          next({ name:"Home" })
        }
        next() */
        localStorage.isLogin ? next({ name:"Home" }) : next()
      }
    },
   
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')

  ]
})

// 全局前置守卫
router.beforeEach((to,from,next) => {
  // 读取本地存储的isLogin属性值
 /*  let { isLogin } = localStorage
  if(isLogin || to.path === "/login"){
    next()
  }else{
    next({ path:'/login' })
  } */
  (localStorage.isLogin || to.path === "/login" || to.path === "/register") ? next() : next({ path:'/login' })
  next()

/*   let { isLogin } = localStorage
  if(!isLogin && (to.path !== "/login" && to.path !== "/register")){
    next({ path:'/login' })
  }else{
    next()
  }
 */
  
})


export default router


