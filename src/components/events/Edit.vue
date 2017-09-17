<template>
  <div class="wrapper">
    <section class="new">
      <div class="row">
        <div class="col-md-6 col-md-push-3">
          <div class="panel panel-default">
            <div class="panel-body">
              <h1 class="page-header">Edit Event</h1>
              <Alert v-if="alert" v-bind:message="alert" />
              <form v-on:submit="editEvent()">

                <h4>Event Info</h4>

                <div class="form-group">
                  <label>Event Name</label>
                  <input class="form-control" type="text" name="eventName" placeholder="Event name" v-model="event.title">
                </div>

                <div class="form-group">
                  <label>Date From</label>
                  <input class="form-control" type="date" name="dateFrom" placeholder="Date From" v-model="event.dateFrom">
                </div>

                <div class="form-group">
                  <label>Date To</label>
                  <input class="form-control" type="date" name="dateTo" placeholder="Date To" v-model="event.dateTo">
                </div>

                <div class="form-group">
                  <label>Location</label>
                  <input class="form-control" type="text" name="location" placeholder="Location" v-model="event.location">
                </div>

                <div class="form-group">
                  <label>Event Descriptionn</label>
                  <textarea class="form-control" type="text" name="description" placeholder="Description" v-model="event.description"></textarea>
                </div>

                <button type="submit" class="button btn-primary">Submit</button>

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
  name: 'edit',
  data () {
    return {
      event: {dateFrom: '', dateTo: ''},
      alert: ''
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
       this.alert = 'Please fill in all the fields'
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
