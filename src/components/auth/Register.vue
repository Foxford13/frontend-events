<template>
  <div class="wrapper">
    <section class="register">
      <div class="row">
        <div class="col-md-6 col-md-push-3">
          <div class="panel panel-default">
            <div class="panel-body">
              <h1>Register User</h1>

              <form v-on:submit.prevent="registerFormSubmit()">
              <Alert v-if="alert" v-bind:message="alert" />

                <div class="form-group">
                  <label>Email</label>
                  <input class="form-control" type="text" name="email" placeholder="Email" v-model="register.email">
                </div>
                <div class="form-group">
                  <label>Username</label>
                  <input class="form-control" type="text" name="email" placeholder="Username" v-model="register.username">
                </div>

                <div class="form-group">
                  <label>Password</label>
                  <input class="form-control" type="password" name="email" placeholder="Password" v-model="register.password">
                </div>

                <div class="form-group">
                  <label>Password Confirmation</label>
                  <input class="form-control" type="password" name="email" placeholder="Password" v-model="register.passwordConfirmation">
                </div>

                <button type="submit" class="button btn-primary">Register</button>

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
  name: 'register',
  data () {
    return {
      register: {
        email: 'q',
        password: 'q'
      },
      alert: ''
    }
  },
  methods: {
    registerFormSubmit(e){

      if(!this.register.email || !this.register.username || !this.register.password || !this.register.passwordConfirmation ) {
       this.alert = 'Please fill in all the fields'
      } else {
        let registerUser = {
          email: this.register.email,
          username: this.register.username,
          password: this.register.password,
          passwordConfirmation: this.register.password,
        }
        this.$http.post('http://localhost:7000/api/register', registerUser)
        .then(function(response) {
          this.$router.push({path: '/', query: { alert: 'You have just registered' }});
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
