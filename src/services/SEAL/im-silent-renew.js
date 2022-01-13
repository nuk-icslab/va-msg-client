/* eslint-disable */
import Oidc from "oidc-client";

console.debug("trying to renew the acess_token");
new Oidc.UserManager().signinSilentCallback();
