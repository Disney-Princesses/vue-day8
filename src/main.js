import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import "bootstrap/dist/css/bootstrap.css";
import "./assets/fonts/iconfont.css";
import axios from "axios";
axios.defaults.baseURL = "https://www.escook.cn";
Vue.prototype.$axios = axios;
Vue.directive("focus", {
  inserted(el) {
    el.focus();
  },
});

Vue.directive('person', {
  inserted(el,bind){
    // console.log(bind);
    if(bind.value == 0){
      el.style.display = 'none'
    }else {
      el.style.display = 'inline-block'
    }
  },
  update(el,bind){
    if(bind.value == 0){
      el.style.display = 'none'
    }else {
      el.style.display = 'inline-block'
    }
  }
})

new Vue({
  render: (h) => h(App),
}).$mount("#app");
