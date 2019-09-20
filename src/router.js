import Vue from "vue";
import Router from "vue-router";
import Home from "./App.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Душевная Мастерская | Главная",
      component: Home
    },
    // {
    //   path: "/bears",
    //   name: "Душевная Мастерская | Медведи",
    //   component: () =>
    //     import("./pages/bears.vue")
    // }
  ]
});
