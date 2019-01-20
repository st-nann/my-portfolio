// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import { store } from './vuex/store.js'
import VueClipboards from 'vue-clipboard2'
import colors from 'vuetify/es5/util/colors'
import './stylus/main.styl'
import 'babel-polyfill'

Vue.use(Vuetify, {
  theme: {
    primary: '#022169',
    secondary: '#163275',
    lightgrey: '#e3e7ef',
    lightblue: '#6477A3',
    greybody: '#f2f4f7',
    pink: '#d81e72',
    info: colors.blue.base,
    warning: colors.amber.base,
    error: colors.red.base,
    success: colors.green.base
  }
})
Vue.use(VueClipboards)

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
