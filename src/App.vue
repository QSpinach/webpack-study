<template>
  <div>
    <h1>这是APP组件</h1>
    <router-link to="/account">account</router-link>
    <router-link to="/goodslist">goodslist</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => {
    return {}
  }
}
</script>

<style>

</style>

