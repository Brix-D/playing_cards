import Vue from 'vue';
import Vuex from 'vuex';
import field from './field';
Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {},
  mutations: {},
  actions: {},
  modules: {
    field,
  },
});
