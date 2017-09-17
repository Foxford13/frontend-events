<template>
  <div class="events container">
    <Alert v-if="alert" v-bind:message="alert" />
    <h1 class="page-header">Events</h1>
    <div class="row">
      <div class="col col-md-3  col-md-offset-1 " v-for="event in events">
        <div class="event-card">
          <h5>{{event.title}}</h5>
          <p>From: {{event.dateFrom.split('T')[0]}}</p>
          <p>To: {{event.dateTo.split('T')[0]}}</p>
          <p>{{event.location}}</p>
          <router-link class="btn btn-default" v-bind:to="'/event/' + event.id">View</router-link>
        </div>
      </div>
    </div>
</div>
</template>

<script>

import Alert from './Alert';


export default {
  name: 'events',
  data () {
    return {
      events: [],
      alert: ''
    }
  },
  methods: {
    fetchEvents(){
      this.$http.get('http://localhost:7000/api/events')
      .then(function(response){
        this.events = response.body;
      });
    }
  },
  created: function(){
    if(this.$route.query.alert){
      this.alert = this.$route.query.alert;
    }
    this.fetchEvents();
  },
  updated: function(){
    this.fetchEvents();
  },
  components: {
    Alert
  }
}
</script

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.events {
  margin-top: 50px;
}
.event-card {
  border: 1px solid black;
  border-radius: 10px;
  margin-top: 15px;
  padding: 15px;
  height:200px;
}


</style>
