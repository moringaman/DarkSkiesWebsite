import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import axios from 'axios'
// import MyUid from '../helpers/uid.js'

const API_URI = 'https://serene-ravine-93776.herokuapp.com'

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
    PostSignUpData ({ commit }, payload) {
      // var uid = MyUid()
      // console.log(payload)
      firebase
        .database()
        .ref('subscribers/')
        .orderByChild('emailAddress')
        .equalTo(payload.email)
        .once('value', snapshot => {
          const userData = snapshot.val()
          if (userData) {
            commit('setDuplicateAddress', true)
            return false
          } else {
            firebase
              .database()
              .ref('subscribers/')
              .push({
                emailAddress: payload.email,
                signUpDate: payload.signUpDate
              })
            axios.post(API_URI + '/subs', { emailAddress: payload.email,
              signUpDate: payload.signUpDate
            })
            commit('setSignUpStatus', true)
            // return true
          }
        })
        .catch(err => {
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
