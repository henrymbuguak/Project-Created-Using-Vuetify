import Vue from 'vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'
import App from './App'
import router from './router'
import {store} from './store'
import FilterDate from './filters/date'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', FilterDate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
