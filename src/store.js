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
  actions: {
    getPets() {
      this.axios
        .get("http://localhost:3000/getPets", {
          headers: {
            screenSize: window.innerWidth,
            shelter: "",
            count: 0
          }
        })
        .then(res => {
          this.pets = res.data;
        })
        .catch(error => console.log(error));
    },
    test() {
      console.log("test");
    }
  }
});
