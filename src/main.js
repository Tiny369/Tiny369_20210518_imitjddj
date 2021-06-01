import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'lib-flexible/flexible'

import 'normalize.css'
// import './style/base.scss'
// import './style/iconfont.css'
import './style/index.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


/* 
import { createApp } from 'vue'
createApp(App).use(router).use(store).mount('#app') 
*/