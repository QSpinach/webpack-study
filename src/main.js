import Vue from 'vue'
import app from './App'
import router from './router'

new Vue({
  el: '#app',
  router,
  render: c => c(app)
})