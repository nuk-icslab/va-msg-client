/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import Dev from "../pages/Dev";
import Chat from "../pages/Chat";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/dev",
      name: "Dev",
      component: Dev,
    },
    {
      path: "/",
      name: "Chat",
      component: Chat,
    },
  ],
});
