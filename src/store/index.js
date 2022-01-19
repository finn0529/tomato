import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    workSound: 'alarm.mp3',
    BreakSound: 'alarm.mp3',
    items: []
  },
  mutations: {
    selectWorkSound (state, data) {
      state.workSound = data
    },
    selectBreakSound (state, data) {
      state.BreakSound = data
    },
    additem (state, data) {
      state.items.push({
        name: data,
        edit: false,
        model: data
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
