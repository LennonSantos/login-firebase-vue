import Vue from 'vue'
import store from './vuex/store'

import LsbLogin from './components/LsbLogin.vue'
import LsbProfile from './components/LsbProfile.vue'

import {auth} from './components/firebase';


new Vue({
  el: '#app',
  store,
  components: {LsbLogin, LsbProfile},
  created: function() {
    auth.onAuthStateChanged( user => {
      if (user) {
        this.$store.commit('update_user', user.providerData[0]);               
        this.$store.commit('update_logged', true);
        this.$store.commit('update_error', "");        
      } else {
        this.$store.commit('update_user', []);               
        this.$store.commit('update_logged', false);
      }
    });
  },
})