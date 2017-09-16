// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import Events from './components/Events'
import About from './components/About'
import New from './components/New'


Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(BootstrapVue);


Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Events},
    {path: '/about', component: About},
    {path: '/new', component: New}
  ]
})



/* eslint-disable no-new */
new Vue({
  router,
  template: `
  <div id="app">
  <nav class="navbar navbar-expand-md navbar-dark bg-dark ">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item"><router-link to="/" class="nav-link">Home </router-link></li>
            <li class="nav-item"><router-link to="/about" class="nav-link">About </router-link></li>
          </ul>

          <ul class="navbar-nav mr-autonavbar-right">
            <li class="nav-item"><router-link to="/new" class="nav-link">New</router-link></li>
          </ul>

        </div>
      </nav>
  <router-view></router-view>
  </div>
  `

}).$mount('#app')
