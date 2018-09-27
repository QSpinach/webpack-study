import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Member from '@/pages/Member'
import Setting from '@/pages/Setting'
import Shopping from '@/pages/Shopping'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: Home,
  }, {
    path: '/member',
    name: 'member',
    component: Member,
  }, {
    path: '/setting',
    name: 'setting',
    component: Setting,
  }, {
    path: '/shopping',
    name: 'shopping',
    component: Shopping,
  }],
  linkActiveClass: 'mui-active'
})