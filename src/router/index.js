// 引入路由VueRouter构造函数
import Vue from "vue";
import VueRouter from "vue-router";
// 引入路由组件
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import Search from "@/pages/Search";
// 调用该路由插件
Vue.use(VueRouter);
// 配置路由 暴露router实例对象 路由器
// 1.配置路由关系
const routes = [
  {
    // 组件name属性 params传参使用
    name: "Home",
    // 路由地址
    path: "/home",
    // 组件 其实就是一个对象
    component: Home,
    meta: {
      showFooter: true,
    },
  },
  {
    name: "Search",
    path: "/search/:keyword",
    component: Search,
    meta: {
      showFooter: true,
    },
  },
  {
    name: "Register",
    path: "/register",
    component: Register,
    meta: {
      showFooter: false,
    },
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
    meta: {
      showFooter: false,
    },
  },
  // 路由重定向 默认或者失败的时候会定向到该路由
  // switch选择机制最后执行重定向
  {
    path: "*",
    redirect: "/home",
  },
];
// 2.组装该路由关系的路由器
const router = new VueRouter({
  routes,
});

export default router;
