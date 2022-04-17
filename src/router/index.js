/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import Dev from "../pages/Dev";
import Chat from "../pages/Chat";
import NewGroup from "../pages/NewGroup";
import TestGeolocation from "../pages/TestGeolocation.vue";

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
    {
      path: "/new",
      name: "NewGroup",
      component: NewGroup,
    },
    {
      path: "/geotest",
      name: "TestGeolocation",
      component: TestGeolocation,
    },
  ],
});
