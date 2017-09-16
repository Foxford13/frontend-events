<template>
  <div class="events container">

    <h1 class="page-header">Events</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Event Name: </th>
          <th>From: </th>
          <th>To: </th>
          <th>Location: </th>
          <th>Description: </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="event in events">
          <td>{{event.title}}</td>
          <td>{{event.dateFrom}}</td>
          <td>{{event.dateTo}}</td>
          <td>{{event.location}}</td>
          <td>{{event.description}}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: 'events',
  data () {
    return {
      events: []

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
    this.fetchEvents();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
