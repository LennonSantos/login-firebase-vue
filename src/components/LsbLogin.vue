<template>
  <div>
      <div class="row">
        <div class="col-md-12">
          <button @click="login" class="btn btn-primary pull-left" v-if="!logged">Login with Gmail</button>
          <button @click="logout" class="btn btn-danger pull-right" v-if="logged">Logout</button> 
        </div>
      </div>
      <br>
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