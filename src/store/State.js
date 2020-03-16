import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = new Vuex.Store({
  state: {
    authenId: "",
    facebookId: "",
    personId: "",
    testState: ""
  }
});

export default state;