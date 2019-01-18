import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueMaterial from "vue-material";
import { MdButton, MdCard } from "vue-material/dist/components";
import "vue-material/dist/vue-material.css";
import "./registerServiceWorker";

Vue.use(VueMaterial);
Vue.use(MdButton);
Vue.use(MdCard);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
