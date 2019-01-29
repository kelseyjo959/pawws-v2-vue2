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
    setPets(state, payload) {
      state.pets = payload;
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
        commit("setPets", response.data);
      } catch (error) {
        commit("setPets", []);
      }
    },
    test() {
      console.log("test");
    }
  }
});
