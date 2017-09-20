<template>
  <div class="show container">
    <h1 >{{event.title}}</h1>
    <p>From: {{event.dateFrom.split('T')[0]}}</p>
    <p>To: {{event.dateTo.split('T')[0]}}</p>
    <p>{{event.location}}</p>
    <p>{{event.description}}</p>
    <p>{{event.id}}</p>
    <button v-if="buttonsShow()" v-on:click="deleteEvent(event.id)" class="btn btn-danger" type="button" name="button">Delete</button>
    <router-link v-if="buttonsShow()" class="btn btn-primary" onloadedmetadata="" v-bind:to="'/edit/' + event.id">Edit</router-link>
  </div>
</template>

<script>
import store from '@/store'

const authUser = store.state.isLogged
const authToken = localStorage.getItem('token')

export default {
  name: 'show',
  data () {
    return {
      event: {dateFrom: '', dateTo: ''}
    }
  },
  methods: {
    fetchEvent(id) {
      this.$http.get('http://localhost:7000/api/events/' + id)
      .then(function(response){
        this.event = response.body;
      });
    },
    deleteEvent(id) {
      console.log(222);
      this.$http.delete('http://localhost:7000/api/events/' + id, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(function(response){
        this.$router.push({path: '/', query: {alert: 'Event Deleted'}})
      });

    },
    buttonsShow() {
      const authUser = store.state.isLogged
      const authToken = localStorage.getItem('token')
      if (authUser && authToken) {
        return true
      }
    }
  },
  created() {
    this.fetchEvent(this.$route.params.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
