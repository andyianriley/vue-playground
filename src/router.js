import Vue from "vue";
import Router from "vue-router";

const Home = () => import("./components/Home.vue");
const Currency = () => import("./components/Currency.vue");
const StarWars = () => import("./components/StarWars.vue");
const Counter = () => import("./components/Counter.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/coins/:id", name: "Currency", component: Currency },
    { path: "/star-wars", name: "StarWars", component: StarWars },
    { path: "/counter", name: "Counter", component: Counter }
  ]
});
