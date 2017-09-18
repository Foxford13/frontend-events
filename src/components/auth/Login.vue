<template>
  <div class="wrapper">
    <section class="login">
      <div class="row">
        <div class="col-md-6 col-md-push-3">
          <div class="panel panel-default">
            <div class="panel-body">
              <h1 >Login User</h1>

              <form v-on:submit.prevent="loginFormSubmit()">
              <Alert v-if="alert" v-bind:message="alert" />

                <div class="form-group">
                  <label>Email</label>
                  <input class="form-control" type="text" name="email" placeholder="Email" v-model="login.email">
                </div>

                <div class="form-group">
                  <label>Password</label>
                  <input class="form-control" type="password" name="email" placeholder="Password" v-model="login.password">
                </div>

                <button type="submit" class="button btn-primary">Login</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import Alert from './Alert'
export default {
  name: 'login',
  data () {
    return {
      login: {
        email: 'q',
        password: 'q'
      },
      alert: ''
    }
  },
  methods: {
    loginFormSubmit(e){

      if(!this.login.email || !this.login.password ) {
       this.alert = 'Please fill in all the fields'
      } else {
        let loginUser = {
          email: this.login.email,
          password: this.login.password
        }
        const authUser = {}
        this.$http.post('http://localhost:7000/api/login', loginUser)
        .then(function(response) {
          console.log(response.body.token)
          localStorage.setItem('token', response.body.token)
    

          this.$router.push({path: '/', query: { alert: 'You are logged in' }});
        });
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
this.infoError = false
