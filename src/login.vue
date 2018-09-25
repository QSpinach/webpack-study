<template>
<div>
  <span>这是login，{{msg}}</span>
  <button @click="show">show</button>
</div>
</template>

<script>
  export default {
    name: 'Login',
    data: () => {
      return {
        msg: '呵呵哒'
      }
    },
    methods: {
      show: ()=> {
        console.log('show')
      }
    }
  }
</script>

<style>

</style>
