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

Vue.use(Router)

const routes = [{
  path: '/404',
  name: 'notPage',
  component: noPageComponent
}, {
  path: '/login',
  name: 'login',
  component: loginComponent
}, {
  path: '/admin',
  name: 'admin',
  component: viewPageComponent,
  children: [{
    path: '/',
    component: homeComponent
  }, {
    path: 'user',
    component: userComponent
  }, {
    path: 'authority',
    name: 'authority',
    component: authorComponent
  }, {
    path: 'peopleManage',
    component: peopleMangeComponent
  }, {
    path: 'filesManage',
    component: filesManageComponent
  }, {
    path: 'menuManage',
    component: menuManageComponent
  }, {
    path: 'logsManage',
    component: logsManageComponent
  }]
}]
export default new Router({
  routes,
  mode: 'history'
})
