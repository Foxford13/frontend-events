<template>
  <div class="show container">
    <h1 >{{event.title}}</h1>
    <p>From: {{event.dateFrom.split('T')[0]}}</p>
    <p>To: {{event.dateTo.split('T')[0]}}</p>
    <p>{{event.location}}</p>
    <p>{{event.description}}</p>
  </div>
</template>

<script>
export default {
  name: 'show',
  data () {
    return {
      event: ''
    }
  },
  methods: {
    fetchEvent(id) {
      this.$http.get('http://localhost:7000/api/events/' + id)
      .then(function(response){
        this.event = response.body;
      });
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
