import Vue from 'vue'
import app from './App'
import router from './router'
import VueResource from 'vue-resource'
import './lib/mui/css/mui.min.css'

import { Header, Swipe, SwipeItem, Lazyload } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.use(VueResource)
Vue.use(Lazyload);

new Vue({
  el: '#app',
  router,
  render: c => c(app)
})
