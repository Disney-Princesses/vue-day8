import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


import "bootstrap/dist/css/bootstrap.css"
import "./assets/fonts/iconfont.css"

import axios from 'axios'
axios.defaults.baseURL = 'https://www.escook.cn'
Vue.prototype.$axios = axios

// 封装自定义指令
Vue.directive('foucs',{
  inserted(val) {
    val.focus()
  }
})


new Vue({
  render: h => h(App),
}).$mount('#app')
