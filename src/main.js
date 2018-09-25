import Vue from 'vue'
import app from 'App'

var vm = new Vue({
  el: '#app',
  render: c => c(app)
})