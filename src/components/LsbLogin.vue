<template>
  <div>
      <h1>Login with firebase and vuejs</h1>
      <p>* Enable popup</p>
      <button @click="login" class="btn btn-primary pull-center" v-if="!logged">Login with Gmail</button>
      <button @click="logout" class="btn btn-danger pull-center" v-if="logged">Logout</button>
      <hr>
      <h2>{{userData.displayName}}</h2>
      <img v-bind:src="userData.photoURL" v-if="logged" alt="imagem profile">
      <pre>{{userData}}</pre>
  </div>
</template>
<script>
import {provider} from './firebase';
import {auth} from './firebase';

export default {
  data () {
    return {   
      userData: [],
      userError: [],  
      logged: false
    }
  }, 
  methods: {
    login: function() {
      auth.signInWithPopup(provider).then(result => {
        this.userData = result.user.providerData[0];           
      }).catch(error => {
        this.userError = error.message;
      });
    },
    logout: function() {
      auth.signOut().then( 
      () => { 
        this.logged = false;
       }, 
      error => {
        this.userError = error;
      });
    }
  }, 
  created: function() {
    auth.onAuthStateChanged( user => {
      if (user) {
        this.userData = user.providerData[0];
        this.logged = true;
      } else {
        this.userData = [];
        this.logged = false;        
      }
    });
  }
}
</script>
<style>
</style>