/* eslint-disable */
/*
 * @babel/polyfill has been deprecated after Babel 7.4.0
 * The following is the solution from https://babeljs.io/docs/en/babel-polyfill
 */
import "core-js/stable";
import "regenerator-runtime/runtime";

import Vue from "vue";
import VueRouter from "vue-router";
import router from "./router";
import App from "./App";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SealIM from "./services/SEAL/IdentityManagement";
import SealGM from "./services/SEAL/GroupManagement";
import ObjectClient from "./services/ObjectVAL";

Vue.use(VueRouter);
Vue.prototype.seal = {
  im: new SealIM(),
  gm: new SealGM(),
};
Vue.prototype.val = {
  obj: new ObjectClient(),
};

Vue.mixin({
  data() {
    return {
      signedIn: true,
      val_user_id: "",
    };
  },
  beforeMount: async function () {
    try {
      this.signedIn = await this.seal.im.checkSignedIn();
      this.val_user_id = (await this.seal.im.getProfile())["sub"];
    } catch (err) {
      console.log(err);
    }
  },
});

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});

// router.beforeEach(async function (to, from, next) {
//   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
//   if (requiresAuth) {
//     try {
//       let current_role = await this.seal.im.getRole();
//       if (to.meta.role == current_role) {
//         next();
//       } else {
//         next("/accessdenied");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   } else {
//     next();
//   }
// });
