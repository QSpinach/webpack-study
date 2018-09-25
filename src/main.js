import Vue from 'vue'
import Login from './login.vue'

var vm = new Vue({
  el: '#app',
  data: function(){
    return {
      msg: "123",
    }
  },
  components: {
    Login,
  },
  template: '<Login/>'
})


console.log(vm);