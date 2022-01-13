/* eslint-disable */
import IdentityManagement from "./IdentityManagement.js";
let mgr = new IdentityManagement();

mgr
  .signinRedirectCallback()
  .then(function (user) {
    window.location.href = "/";
  })
  .catch(function (err) {
    console.error(err);
  });
