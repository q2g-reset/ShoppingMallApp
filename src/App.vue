<template>
  <div id="app">
    <Header></Header>
    <section>
      <router-link to="/home">首页</router-link>
      <router-link to="/search">搜索</router-link>
      <router-link to="/login">登陆</router-link>
      <router-link to="/register">注册</router-link>
      <router-view></router-view>
    </section>
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header/index.vue";
import Footer from "@/components/Footer";
export default {
  components: { Header, Footer },
  // mounted() {
  //   console.log(this.$route.meta.showFooter);
  // },
  // updated() {
  //   console.log(this.$route.meta.showFooter);
  // },
};
</script>

<style></style>
