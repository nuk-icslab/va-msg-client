/* eslint-disable */
/*
 * @babel/polyfill has been deprecated after Babel 7.4.0
 * The following is the solution from https://babeljs.io/docs/en/babel-polyfill
 */
import "core-js/stable";
import "regenerator-runtime/runtime";
import Oidc from "oidc-client";
import seal_config from "./config";

var mgr = new Oidc.UserManager({
  userStore: new Oidc.WebStorageStateStore(),
  authority: `${seal_config.base_url}/oidc`,
  client_id: seal_config.im.client_id,
  redirect_uri: window.location.origin + "/callback.html",
  scope: seal_config.im.scope,
  client_secret: seal_config.im.client_secret,
  response_type: "code",
  response_mode: "query",
  post_logout_redirect_uri: window.location.origin + "/index.html",
  silent_redirect_uri: window.location.origin + "/silent-renew.html",
  accessTokenExpiringNotificationTime: 10,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
});

Oidc.Log.logger = console;
Oidc.Log.level = Oidc.Log.INFO;

mgr.events.addUserLoaded(function (user) {
  console.log("New User Loaded：", arguments);
  console.log("Acess_token: ", user.access_token);
});

mgr.events.addAccessTokenExpiring(function () {
  console.log("AccessToken Expiring：", arguments);
});

mgr.events.addAccessTokenExpired(async function () {
  console.log("AccessToken Expired：", arguments);
  alert("Session expired. Going out!");
  try {
    let resp = await mgr.signoutRedirect();
    console.log("signed out", resp);
  } catch (err) {
    console.log(err);
  }
});

mgr.events.addSilentRenewError(function () {
  console.error("Silent Renew Error：", arguments);
});

mgr.events.addUserSignedOut(async function () {
  alert("Going out!");
  console.log("UserSignedOut：", arguments);
  try {
    let resp = await mgr.signoutRedirect();
    console.log("signed out", resp);
  } catch (err) {
    console.log(err);
  }
});

export default class IdentityManagement {
  // Renew the token manually
  renewToken() {
    let self = this;
    return new Promise(async (resolve, reject) => {
      try {
        let user = await mgr.signinSilent();
        if (user == null) {
          self.signIn(null);
        } else {
          return resolve(user);
        }
      } catch (err) {
        console.log(err);
        return reject(err);
      }
    });
  }

  // Get the user who is logged in
  getUser() {
    return mgr.getUser();
  }

  // Check if there is any user logged in
  checkSignedIn() {
    return new Promise(async (resolve, reject) => {
      try {
        let user = await mgr.getUser();
        if (user === null) {
          return resolve(false);
        } else {
          return resolve(true);
        }
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  }

  // Redirect of the current window to the authorization endpoint.
  signIn() {
    try {
      mgr.signinRedirect();
    } catch (err) {
      console.log(err);
    }
  }

  // Redirect of the current window to the end session endpoint
  async signOut() {
    try {
      let resp = mgr.signoutRedirect();
      console.log("signed out", resp);
    } catch (err) {
      console.log(err);
    }
  }

  // Get the profile of the user logged in
  getProfile() {
    return new Promise(async (resolve, reject) => {
      try {
        let user = await mgr.getUser();
        if (user === null) {
          return resolve(null);
        } else {
          return resolve(user.profile);
        }
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  }

  // Get the token id
  getIdToken() {
    return new Promise(async (resolve, reject) => {
      try {
        let user = await mgr.getUser();
        if (user === null) {
          return resolve(null);
        } else {
          return resolve(user.id_token);
        }
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  }

  // Get the session state
  getSessionState() {
    return new Promise(async (resolve, reject) => {
      try {
        let user = await mgr.getUser();
        if (user === null) {
          return resolve(null);
        } else {
          return resolve(user.session_state);
        }
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  }

  // Get the access token of the logged in user
  getAcessToken() {
    return new Promise(async (resolve, reject) => {
      try {
        let user = await mgr.getUser();
        if (user === null) {
          return resolve(null);
        } else {
          return resolve(user.access_token);
        }
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  }

  // Takes the scopes of the logged in user
  getScopes() {
    return new Promise(async (resolve, reject) => {
      try {
        let user = await mgr.getUser();
        if (user === null) {
          return resolve(null);
        } else {
          return resolve(user.scopes);
        }
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  }

  // Get the user roles logged in
  getRole() {
    return new Promise(async (resolve, reject) => {
      try {
        let user = await mgr.getUser();
        if (user === null) {
          return resolve(null);
        } else {
          return resolve(user.profile.role);
        }
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  }

  signinRedirectCallback() {
    return mgr.signinRedirectCallback();
  }
}
