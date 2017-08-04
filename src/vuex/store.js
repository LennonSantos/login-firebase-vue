import Vue from 'vue'  
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({  
    state: {
        logged: false,
        error: '',
        user: [],
    },
    getters: {
        isLogged: state => {
            return state.logged;
        },
        getUser: state => {
            return state.user;
        },
        getError: state => {
            return state.error;
        }
    },
    mutations: {
        update_logged (state, value) {
            state.logged = value;
        },
        update_user (state, obj) {
            state.user = obj;
        },
        update_error (state, value) {
            state.error = value;
        }
    }
})