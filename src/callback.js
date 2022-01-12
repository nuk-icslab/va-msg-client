/* eslint-disable */
import IdentityManagement from "services/SEAL/IdentityManagement.js";
let mgr = new IdentityManagement();

mgr
  .signinRedirectCallback()
  .then(function(user) {
    window.location.href = "/";
  })
  .catch(function(err) {
    console.log(err);
  });
