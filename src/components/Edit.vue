<template>
  <div class="edit container">
    <h1 class="page-header">Edit Event</h1>
    <form v-on:submit="editEvent">

      <h4>Event Info</h4>

      <div class="form-group">
        <label>Event Name</label>
        <input type="text" name="eventName" placeholder="Event name" v-model="event.title">
      </div>

      <div class="form-group">
        <label>Date From</label>
        <input type="text" name="dateFrom" placeholder="Date From" v-model="event.dateFrom.split('T')[0]">
      </div>

      <div class="form-group">
        <label>Date To</label>
        <input type="text" name="dateTo" placeholder="Date To" v-model="event.dateTo.split('T')[0]">
      </div>

      <div class="form-group">
        <label>Location</label>
        <input type="text" name="location" placeholder="Location" v-model="event.location">
      </div>

      <div class="form-group">
        <label>Event Descriptionn</label>
        <input type="text" name="description" placeholder="Description" v-model="event.description">
      </div>

      <button type="submit" class="button btn-primary">Update</button>

    </form>
  </div>
</template>


<script>

export default {
  name: 'edit',
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
    editEvent(e){
      if(!this.event.title || !this.event.dateFrom || !this.event.dateTo || !this.event.location || !this.event.description) {

      } else {
        let updateEvent = {
          title: this.event.title,
          dateFrom: this.event.dateFrom,
          dateTo: this.event.dateTo,
          location: this.event.location,
          description: this.event.description
        }

        this.$http.put('http://localhost:7000/api/events/' + this.$route.params.id, updateEvent)
        .then(function(response) {
          this.$router.push({path: '/', query: { alert: 'Event Edited' }});
        });
        e.preventDefault();
      }
      e.preventDefault();
    }
  },
  created: function() {
    this.fetchEvent(this.$route.params.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
