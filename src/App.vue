<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark ">

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item"><router-link to="/" class="nav-link">Home </router-link></li>
        </ul>

        <ul v-if="userLoggedIn()" class="navbar-nav">
          <li  class="nav-item"><router-link to="/new" class="nav-link">New</router-link></li>
        </ul>

        <ul v-if="!userLoggedIn()" class="navbar-nav navbar-right">
          <li class="nav-item"><router-link to="/register" class="nav-link">Register</router-link></li>
        </ul>

        <ul v-if="!userLoggedIn()" class="navbar-nav navbar-right">
          <li class="nav-item"><router-link to="/login" class="nav-link">Login</router-link></li>
        </ul>

        <ul v-if="userLoggedIn()" class="navbar-nav navbar-right">
          <li  class="nav-item"><router-link to="/logout" class="nav-link">Logout</router-link></li>
        </ul>

      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  methods: {
    userLoggedIn() {
      const authUser = store.state.isLogged
      const authToken = localStorage.getItem('token')
      if (authUser && authToken) {
        return true
      }
    }
  }
}
</script>

<style>

</style>
