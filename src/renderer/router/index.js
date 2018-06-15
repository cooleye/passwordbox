import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/login';
import Main from '@/components/main';
import Regist from '@/components/regist';

import Welcom from '@/components/welcom';
import About from '@/components/about';


Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      component: Welcom
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/main',
      component: Main
    },
    {
      path: '/regist',
      component: Regist
    },
    {
      path: '/about',
      component: About
    }
  ]
})

export default router;