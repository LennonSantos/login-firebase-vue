import Vue from 'vue'
import VueFire from 'vuefire'

import store from './vuex/store'

import LsbLogin from './components/LsbLogin.vue'
import LsbProfile from './components/LsbProfile.vue'
import LsbForm from './components/LsbForm.vue'
import LsbGastos from './components/LsbGastos.vue'

import {auth} from './components/firebase';

Vue.use(VueFire)

new Vue({
  el: '#app',
  store,
  components: {LsbLogin, LsbProfile, LsbForm, LsbGastos},
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