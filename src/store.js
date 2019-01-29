import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    pets: []
  },
  mutations: {
    setPetState(state, responseData) {
      state.pets = responseData;
    }
  },
  actions: {
    async getPets({ commit }) {
      try {
        let response = await axios.get(`http://localhost:3000/getPets`, {
          headers: {
            screenSize: window.width,
            shelter: "",
            count: 0
          }
        });
        commit("setPetState", response.data);
      } catch (error) {
        commit("setPetState", []);
      }
    }
  }
});
