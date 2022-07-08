import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 全局自定义指令，获取焦点
Vue.directive('focusl',{
  inserted(el) {
    el.focus()
  }
})

Vue.directive('person',{
  inserted(el,bind) {
    console.log(bind);
    if(bind.value==0) {
      el.style.display='none'
    } else {
      el.style.display='block'
    }
  },
  update(el,bind) {
    if(bind.value==0) {
      el.style.display='none'
    } else {
      el.style.display='block'
    }
  }
})

// 引入bootStrap.css和字体图标样式
import "bootstrap/dist/css/bootstrap.css"
import "./assets/fonts/iconfont.css"
import axios from 'axios'
axios.defaults.baseURL='https://www.escook.cn'
Vue.prototype.$axios=axios

new Vue({
  render: h => h(App),
}).$mount('#app')
