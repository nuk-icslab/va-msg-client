/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/Home";
import AccessDenied from "../pages/AccessDenied";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        requiresAuth: false,
      },
    },{
      path: "/accessdenied",
      name: "AccessDenied",
      component: AccessDenied,
      meta: {
        requiresAuth: false,
      },
    },
  ],
});
