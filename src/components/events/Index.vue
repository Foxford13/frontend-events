<template>
  <div class="events container">
    <Alert v-if="alert" v-bind:message="alert" />
    <h1>Events</h1>
    <input class="form-control" placeholder="Search by title" v-model="filterInput" type="text" name="" value="">
    <br />
    <div class="row">
      <div class="col col-md-3" v-for="event in filterBy(events, filterInput)">
        <div class="event-card">
          <h5>{{event.title}}</h5>
          <p>From: {{event.dateFrom}}</p>
          <p>To: {{event.dateTo}}</p>
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
      event: {dateFrom: '', dateTo: ''},
      alert: '',
      filterInput: ''
    }
  },
  methods: {
    fetchEvents(){
      this.$http.get('http://localhost:7000/api/events')
      .then(function(response){
        this.events = response.body;
      });
    },
    filterBy(list, value) {
      value = value.charAt(0).toUpperCase() + value.slice(1);
      return list.filter(function(event) {
        return event.title.indexOf(value) > -1

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
<style lang="sass">
  @import '../../assets/css/bootstrap.css'
  @import '../../assets/css/style.css'

</style>
