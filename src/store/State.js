import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = new Vuex.Store({
  state: {
    authenId: null,
    facebookId: null,
    personId: null,
    testState: null
  }
});

export default state;