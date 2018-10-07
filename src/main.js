import Vue from 'vue'
import app from './App'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

// import { Header, Swipe, SwipeItem, Lazyload, Button } from 'mint-ui';

// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'


Vue.use(VueResource)
// Vue.use(Lazyload);

// 设置请求的根路径
Vue.http.options.root = 'http://rap2api.taobao.org/app/mock/86300';

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'


// 安装 图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
// Vue.use(VuePreview, {
//   mainClass: 'pswp--minimal--dark',
//   barsSize: {top: 0, bottom: 0},
//   captionEl: false,
//   fullscreenEl: false,
//   shareEl: false,
//   bgOpacity: 0.85,
//   tapToClose: true,
//   tapToToggleControls: false
// })


new Vue({
  el: '#app',
  router,
  store,
  render: c => c(app)
})
