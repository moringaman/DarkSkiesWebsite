import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
// import MyUid from '../helpers/uid.js'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {
    signUpStatus: false,
    duplicateAddress: false
  },
  mutations: {
    setSignUpStatus (state, payload) {
      state.signUpStatus = payload
    },
    setDuplicateAddress (state, payload) {
      state.duplicateAddress = payload
      // setTimeout(() => {
      //   state.duplicateAddress = false
      // }, 3000)
    }
  },
  actions: {
    PostSignUpData ({commit}, payload) {
      // var uid = MyUid()
      // console.log(payload)
      firebase.database().ref('subscribers/').orderByChild('emailAddress').equalTo(payload)
      .once('value', snapshot => {
        const userData = snapshot.val()
        if (userData) {
          commit('setDuplicateAddress', true)
          return false
        } else {
          firebase.database()
            .ref('subscribers/').push({
              emailAddress: payload
            })
          commit('setSignUpStatus', true)
          return true
        }
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  getters: {
    signUpStatus (state) {
      return state.signUpStatus
    },
    duplicateAddress (state) {
      return state.duplicateAddress
    }
  }

})
