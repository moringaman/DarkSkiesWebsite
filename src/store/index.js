import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
// import MyUid from '../helpers/uid.js'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {
    signUpStatus: false
  },
  mutations: {
    setSignUpStatus (state, payload) {
      state.signUpStatus = payload
    }
  },
  actions: {
    PostSignUpData ({commit}, payload) {
      // var uid = MyUid()
      firebase.database()
          .ref('subscribers/').push(payload)
          .then(result => {
            commit('setSignUpStatus', true)
          })
    }
  },
  getters: {
    signUpStatus (state) {
      return state.signUpStatus
    }
  }

})
