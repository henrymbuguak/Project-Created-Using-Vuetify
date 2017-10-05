import Vue from 'vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import {store} from './store'
import FilterDate from './filters/date'
import Alert from './components/shared/Alert.vue'
import EditMeetupDetailsDialog from './components/Meetup/Edit/EditMeetUps.vue'
import EditMeetupDateDialog from './components/Meetup/Edit/EditMeetUpDate.vue'
import RegisterDialog from './components/Meetup/Registration/RegisterDialogue.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', FilterDate)
Vue.component('app-alert', Alert)
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog)
Vue.component('app-edit-meetup-date-dialog', EditMeetupDateDialog)
Vue.component('app-register-meetup-dialog', RegisterDialog)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCg_A1Ow6-lmHAXsDWWmjK76C5kOA8FitI',
      authDomain: 'dev-meetup-5fd44.firebaseapp.com',
      databaseURL: 'https://dev-meetup-5fd44.firebaseio.com',
      projectId: 'dev-meetup-5fd44',
      storageBucket: 'dev-meetup-5fd44.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadedMeetups')
  }
})
