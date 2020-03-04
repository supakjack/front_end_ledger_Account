import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const State = new Vuex.Store({
  state: {
    userID: 0,
    accessToken:""
  },
  mutations: {
    setUserID(state, userID) {
      state.userID = userID;
    },
    setAccessToken(state, accessToken) {
      state.accessToken = accessToken;
    }
  }
});

export default State;
//
