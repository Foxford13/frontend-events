<template>
  <div class="wrapper">
    <section class="login">
      <div class="row">
        <div class="col-md-6 col-md-push-3">
          <div class="panel panel-default">
            <div class="panel-body">

              <h1 >Register User</h1>
              <Alert v-if="alert" v-bind:message="alert" />

              <form v-on:submit.prevent="registerFormSubmit()">

                <div class="form-group">
                  <label>Email</label>
                  <input class="form-control" type="text" name="email" placeholder="Email" v-model="email">
                </div>

                <div class="form-group">
                  <label>Username</label>
                  <input class="form-control" type="text" name="username" placeholder="Username" v-model="username">
                </div>

                <div class="form-group">
                  <label>Password</label>
                  <input class="form-control" type="password" name="email" placeholder="Password" v-model="password">
                </div>
                <div class="form-group">
                  <label>Password Confirmation</label>
                  <input class="form-control" type="password" name="email" placeholder="Password Confirmation" v-model="passwordConfirmation">
                </div>

                <button class="btn btn-primary" type="submit" name="button">Register</button>

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
  name: 'register',
  data () {
    return {
      loader: false,
      infoError: false,
      email: '',
      username: '',
      password: '',
      passwordConfirmation: '',
      alert: ''
    }
  },
  beforeCreate () {
    if (store.state.isLogged) {
      this.$router.push('/')
    }
  },
  methods: {
    registerFormSubmit () {
      const userData = {
        email: this.email,
        password: this.password,
        username: this.username,
        passwordConfirmation: this.passwordConfirmation
      }
      this.loader = true
      this.infoError = false
      if(!this.email || !this.password || !this.username || (this.password != this.passwordConfirmation)) {
        this.alert = 'Please fill in all required fields'
      } else {
        this.$http.post('http://localhost:7000/api/register', userData)
        .catch((response) => {
          console.log(response)
        })
        .then(() => {
          this.$router.push('/login')
        }, () => {
          this.infoError = true
          this.loader = false
          this.password = ''
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
  @import '../../assets/css/style.css'
  </style>
