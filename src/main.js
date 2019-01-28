import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueMaterial from "vue-material";
import { MdButton, MdCard } from "vue-material/dist/components";
import "vue-material/dist/vue-material.css";
import "./registerServiceWorker";
import store from "./store";

Vue.use(VueMaterial);
Vue.use(MdButton);
Vue.use(MdCard);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
