// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {config} from './helpers/firebaseConf'
import * as VueGoogleMaps from 'vue2-google-maps'
import {store} from './store'
import firebase from 'firebase'
Vue.config.productionTip = false

Vue.use(VueGoogleMaps,
  {
    load: {
      key: 'AIzaSyDysON6Twe-naM9LG-5xQ7fMXaRd3rXgss',
      libraries: 'places, drawing, visualization' // This is required if you use the Autocomplete plugin
    }
  })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  created () {
    firebase.initializeApp(config)
  },
  store,
  template: '<App/>',
  components: { App }
})
