/* eslint-disable */
import Oidc from "oidc-client";

console.log("trying to renew the acess_token");
new Oidc.UserManager().signinSilentCallback();
