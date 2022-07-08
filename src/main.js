import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入bootstrap.css
import "../node_modules/bootstrap/dist/css/bootstrap.css"
// 引入iconfont.css
import "./assets/fonts/iconfont.css"

// 引入axios并进行配置
import axios from "axios";
axios.defaults.baseURL='https://www.escook.cn';
Vue.prototype.$axios=axios;

Vue.directive('gfocus',{
  inserted(el){
    el.focus();
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
