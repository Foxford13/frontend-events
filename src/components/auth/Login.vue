<template>
  <div class="wrapper">
    <section class="login">
      <div class="row">
        <div class="col-md-6 col-md-push-3">
          <div class="panel panel-default">
            <div class="panel-body">
              <h1 >Login User</h1>
              <Alert v-if="alert" v-bind:message="alert" />
              <form v-on:submit.prevent="loginFormSubmit()">


                <div class="form-group">
                  <label>Email</label>
                  <input class="form-control" type="text" name="email" placeholder="Email" v-model="email">
                </div>

                <div class="form-group">
                  <label>Password</label>
                  <input class="form-control" type="password" name="email" placeholder="Password" v-model="password">
                </div>


                <button class="btn btn-primary" type="submit" name="button">Login</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import router from '@/main'
import store from '@/store'
import Alert from '../interceptors/Alert';




export default {
  name: 'login',
  data () {
    return {
      loader: false,
      infoError: false,
      email: '',
      password: '',
      username: '',
      alert: ''
    }
  },
  beforeCreate () {
    if (store.state.isLogged) {
      this.$router.push('/')
    }
  },
  methods: {
    loginFormSubmit (response) {
      if(!this.email || !this.password) {
        this.alert = 'Please fill in all required fields'
      } else {
        this.$http.post('http://localhost:7000/api/login', {
          email: this.email,
          password: this.password
        }, response)

        .then((response) => {
          localStorage.setItem('token', response.body.token)
          store.commit('LOGIN_USER')
          this.$router.push({path: '/', query: { alert: 'Welcome back ' + this.email}})

        })
      }
    }
  },
  components: {
    Alert
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  @import '../../assets/css/bootstrap.css'

</style>
