import Vue from 'vue'
import Router from 'vue-router'

import Account from '@/pages/Account'
import GoodsList from '@/pages/GoodsList'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/account',
    name: 'account',
    component: Account,
    children: [{
      path: 'login',
      component: Login
    }, {
      path: 'register',
      component: Register
    }],
  }, {
    path: '/goodslist',
    name: 'goodslist',
    component: GoodsList
  }]
})