import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 全局自定义指令，获取焦点
Vue.directive('focusl',{
  inserted(el) {
    el.focus()
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
