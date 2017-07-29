/**
 * Created by St.Nann on 29-Jul-17.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import layout from './modules/layout'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    layout: layout
  }
})
