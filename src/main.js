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
    offwhite: '#f4efe9',
    lightgrey: '#dfe0e0',
    yellow: '#f1e7b7',
    cinnamon: '#e0b265',
    lightblue: '#d6eff8',
    darkblue: '#3f4559',
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
