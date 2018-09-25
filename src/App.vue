<template>
  <div>
    <h1>这是APP组件</h1>
    <mt-button type="default" @click="showT">default</mt-button>
    <router-link to="/account">account</router-link>
    <router-link to="/goodslist">goodslist</router-link>
    <router-view/>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  name: "app",
  data: () => {
    return {};
  },
  methods: {
    showT() {
      // Toast('提示信息');
      // Toast({
      //   message: "提示",
      //   position: "bottom",
      //   duration: 5000
      // });
      Toast({
        message: "操作成功",
        iconClass: "icon icon-success"
      });
    }
  }
};
</script>

<style>
</style>

