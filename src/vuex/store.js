/**
 * Created by St.Nann on 29-Jul-17.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import layout from './modules/layout'
import loading from './modules/loading'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    layout: layout,
    loading: loading
  }
})
