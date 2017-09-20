<template>

</template>


<script>
import router from '@/main'
import store from '@/store'

export default {
  name: 'logout',
  
  mounted () {
    localStorage.removeItem('token')
    store.commit('LOGOUT_USER')
    this.$router.push('login')
  }
}
</script>
