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
  path: '/',
  // redirect: '/home',
    component: viewPageComponent,
}]
export default new Router({
  routes,
  mode: 'hash'
})
