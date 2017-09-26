// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import eventsIndex from './components/events/Index'
import eventsNew from './components/events/New'
import eventsShow from './components/events/Show'
import eventsEdit from './components/events/Edit'

import login from './components/auth/Login'
import logout from './components/auth/Logout'
import register from './components/auth/Register'

import store from '@/store'


Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(BootstrapVue);


//any user has acess to secure route if they are authenticated and have a token
Vue.config.productionTip = false


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/login', component: login, name: 'login'},
    {path: '/logout', component: logout, name: 'logout'},
    {path: '/register', component: register, name: 'register' },

    {path: '/', component: eventsIndex, name: 'index'},
    {path: '/new', component: eventsNew, name: 'new', meta: { requiresAuth: true }},
    {path: '/event/:id', component: eventsShow, name: 'show'},
    {path: '/edit/:id', component: eventsEdit, meta: { requiresAuth: true }}
  ]
})

console.log('main ' + localStorage.getItem('token'))


router.beforeEach((to, from, next) => {
  const authUser = store.state.isLogged
  const authToken = localStorage.getItem('token')

  if (to.meta.requiresAuth) {
    console.log('meta' + ' ' + to.meta.requiresAuth)
    if (authUser && authToken) {
        console.log('Login new trans')
      next()
    } else {
        console.log('Login no trans')
      next({path: '/login'})
    }
  }
  next()
})

new Vue({
  router,
  template: `<app></app>`,
  components: { App }
}).$mount('#app')
