import Vue from 'vue'
import app from './App'
import router from './router'
import './lib/mui/css/mui.min.css'

import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

new Vue({
  el: '#app',
  router,
  render: c => c(app)
})
