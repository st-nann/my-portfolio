/**
 * Created by St.Nann on 29-Jul-17.
 */
const state = {
  showSidebar: null
}

const getters = {}

const mutations = {
  toggleSidebar (state) {
    state.showSidebar = !state.showSidebar
  },
  hiddenSider (state) {
    state.showSidebar = false
  }
}

const actions = {
  toggleSidebar ({ commit }) {
    commit('toggleSidebar')
  },
  hiddenSider ({ commit }) {
    commit('hiddenSider')
  }
}

export default {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations,
  namespaced: true
}
