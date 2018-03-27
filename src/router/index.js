import Vue from 'vue'
import Router from 'vue-router'
//home
import homeComponent from 'pages/home'
//404
import noPageComponent from 'pages/error/404'
//login
import loginComponent from 'pages/login'
//view page warp component
import viewPageComponent from 'pages/App'

import userComponent from 'pages/users'

import authorComponent from 'pages/authority'

import peopleMangeComponent from 'pages/peoples'

import filesManageComponent from 'pages/files'

import menuManageComponent from 'pages/menuM'

import logsManageComponent from 'pages/logsM'

import sysManageComponent from 'pages/sysM'

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({
  showSpinner: false
}) // NProgress Configuration


Vue.use(Router)

const routes = [{
  path: '/404',
  name: 'notPage',
  component: noPageComponent
}, {
  path: '/login',
  name: 'login',
  component: loginComponent,
  meta: {
    title: '登录'
  }
}, {
  path: '/admin',
  component: viewPageComponent,
  meta: {
    title: '首页'
  },
  children: [{
    path: '/',
    name: 'admin',
    component: homeComponent
  }, {
    path: 'user',
    name: 'user',
    component: userComponent,
    meta: {
      title: '用户管理'
    }
  }, {
    path: 'authority',
    name: 'authority',
    component: authorComponent,
    meta: {
      title: '权限管理'
    },
    children: [{
      path: 'test1'
    }, {
      path: 'test2',
      meta: {
        title: 'test2管理'
      }
    }, {
      path: 'test3',
      meta: {
        title: 'test3管理'
      }
    }]
  }, {
    path: 'peopleManage',
    name: 'peopleManage',
    component: peopleMangeComponent,
    meta: {
      title: '人员管理'
    }
  }, {
    path: 'filesManage',
    name: 'filesManage',
    component: filesManageComponent,
    meta: {
      title: '文件管理'
    }
  }, {
    path: 'menuManage',
    name: 'menuManage',
    component: menuManageComponent,
    meta: {
      title: '菜单管理'
    }
  }, {
    path: 'logsManage',
    name: 'logsManage',
    component: logsManageComponent,
    meta: {
      title: '日志管理'
    }
  }, {
    path: 'sysManage',
    name: 'sysManage',
    component: sysManageComponent,
    meta: {
      title: '系统管理'
    }
  }]

}]

const router = new Router({
  routes,
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => (savedPosition || {
    x: 0,
    y: 0
  }),
})

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  next();
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})

export default router
