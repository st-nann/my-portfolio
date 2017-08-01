/**
 * Created by St.Nann on 01-Aug-17.
 */
const state = {
  loading: true
}

const getters = {}

const mutations = {
  showLoading (state) {
    state.loading = false
  },
  noLoading (state) {
    state.loading = true
  }
}

const actions = {
  showLoading ({ commit }) {
    commit('showLoading')
  },
  noLoading ({ commit }) {
    commit('noLoading')
  }
}

export default {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations,
  namespaced: true
}
