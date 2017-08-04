<template>
  <div>
      <button @click="login" class="btn btn-primary" v-if="!logged">Login with Gmail</button>
      <button @click="logout" class="btn btn-danger" v-if="logged">Logout</button>
  </div>
</template>
<script>
import {provider} from './firebase';
import {auth} from './firebase';

export default {
  data () {
    return {    
    }
  }, 
  methods: {
    login: function() {
      auth.signInWithPopup(provider).then(result => {   
        this.$store.commit('update_user', result.user.providerData[0]);       
      }).catch(error => {
        this.$store.commit('update_error', error.message);
      });
    },
    logout: function() {
      auth.signOut().then( 
      () => { 
        // logout success
      }, 
      error => {
        this.$store.commit('update_error', error);
      });
    }
  }, 
  computed: {
    logged () {
      return this.$store.getters.isLogged
    }
  }
}
</script>
<style>
</style>