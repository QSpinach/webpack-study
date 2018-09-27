<template>
  <div>
    <!-- 顶部Header区域 -->
    <mt-header fixed title="fixed top"></mt-header>
    <!-- 中间RouterView区域 -->
    <div class="app-container">
      <transition appear mode="out-in" name="fade">
        <router-view />
      </transition>
    </div>
    <!-- 底部Tabbar区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopping">
        <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">购物</span>
      </router-link>
      <router-link class="mui-tab-item" to="/setting">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow: hidden;
}
.fade-enter-active, .fade-leave-active {
  transform: translateX(0px);
  transition: all .3s ease;
}
.fade-enter {
  opacity: 0;
  transform: translateX(100%)
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>

