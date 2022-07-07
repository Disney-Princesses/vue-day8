import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/fonts/iconfont.css'

import axios from 'axios'
axios.defaults.baseURL = 'https://www.escook.cn'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.directive('focus', {
  inserted(el) {
    el.focus()
  }
})
Vue.directive('isShow', {
  inserted(el, binding, vnode) {
    // console.log(el, binding, vnode);
    // console.log(binding.value);
    if (!vnode.context.newList.includes(binding.value)) {
      el.style.display = 'none';
    }
  }
})



new Vue({
  render: h => h(App),
}).$mount('#app')
