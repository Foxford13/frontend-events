<template>
  <div class="alert alert-warning alert-dismissible" role="alert">

     <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'alert',
  props: ['message'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.alert {
  height: 50px;
}
</style>
