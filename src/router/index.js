import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Member from '@/pages/Member'
import Setting from '@/pages/Setting'
import Shopping from '@/pages/Shopping'
import NewsList from '@/pages/NewList'
import NewInfo from '@/pages/NewInfo'
import PhotoList from '@/pages/PhotoList'
import PhotoInfo from '@/pages/PhotoInfo'

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
  }, {
    path: '/home/newslist',
    component: NewsList
  }, {
    path: '/home/newsinfo/:id',
    component: NewInfo
  }, {
    path: '/home/photolist',
    component: PhotoList
  }, {
    path: '/home/photoinfo/:id',
    component: PhotoInfo
  }],
  linkActiveClass: 'mui-active'
})