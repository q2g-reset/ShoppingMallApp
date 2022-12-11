import Vue from "vue";
import App from "./App.vue";
// 引入配置好的vuerouter构造的router 路由器
import router from "./router";
// import store from './store'

Vue.config.productionTip = false;

new Vue({
  // 使用该路由器
  router,
  // store,
  render: (h) => h(App),
}).$mount("#app");
