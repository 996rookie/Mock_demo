import Vue from "vue";
import App from "./App.vue";
import "./mock/jichuyufa.js";
import "./mock/index.js";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
