import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import apollo from "./apollo";

Vue.config.productionTip = false;

new Vue({
  provide: apollo.provide(),
  router,
  store,
  render: h => h(App)
}).$mount("#app");
