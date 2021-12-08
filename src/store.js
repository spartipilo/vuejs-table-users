import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataReceived: {},
    dataEdited: {},
    indexUsersNow: Number,
  },
  getters: {
    getData: (state) => {
      return state.dataReceived;
    },
    getDataEdited: (state) => {
      return state.dataEdited;
    },
  },
  mutations: {
    setData: (state, payload) => {
      state.dataReceived = payload;
    },
    setDataEdited: (state, payload) => {
      state.dataEdited = payload;
    },
  },
  actions: {},
});
