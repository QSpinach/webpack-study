import Vue from 'vue'
import app from './App'
import router from './router'

// 全部引入
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'

// Vue.use(MintUI)

// 按需引入
import { Button, Cell } from 'mint-ui'
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)

import './lib/mui/css/mui.min.css'

new Vue({
  el: '#app',
  router,
  render: c => c(app)
})