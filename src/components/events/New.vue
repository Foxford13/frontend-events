<template>
  <div class="new container">
    <h1 class="page-header">New Event</h1>
    <Alert v-if="alert" v-bind:message="alert" />
    <form v-on:submit="createEvent">

      <h4>Event Info</h4>

      <div class="form-group">
        <label>Event Name</label>
        <input type="text" name="eventName" placeholder="Event name" v-model="event.title">
      </div>

      <div class="form-group">
        <label>Date From</label>
        <input type="date" name="dateFrom" placeholder="Date From" v-model="event.dateFrom">
      </div>

      <div class="form-group">
        <label>Date To</label>
        <input type="date" name="dateTo" placeholder="Date To" v-model="event.dateTo">
      </div>

      <div class="form-group">
        <label>Location</label>
        <input type="text" name="location" placeholder="Location" v-model="event.location">
      </div>

      <div class="form-group">
        <label>Event Descriptionn</label>
        <input type="text" name="description" placeholder="Description" v-model="event.description">
      </div>

      <button type="submit" class="button btn-primary">Submit</button>

    </form>
  </div>
</template>


<script>

import Alert from './Alert'

export default {
  name: 'new',
  data () {
    return {
      event: {},
      alert: ''
    }
  },
  methods: {
    createEvent(e){
      if(!this.event.title || !this.event.dateFrom || !this.event.dateTo || !this.event.location || !this.event.description) {
        this.alert = 'Please fill in all required fields'
      } else {
        let newEvent = {
          title: this.event.title,
          dateFrom: this.event.dateFrom,
          dateTo: this.event.dateTo,
          location: this.event.location,
          description: this.event.description
        }
        this.$http.post('http://localhost:7000/api/events', newEvent)
        .then(function(response) {
          this.$router.push({path: '/', query: { alert: 'Event Added' }});
        });
        e.preventDefault();
      }
      e.preventDefault();
    }
  },
  components: {
    Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
