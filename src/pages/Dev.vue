<template>
  <!--eslint-disable-->
  <div>
    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <h6
                class="
                  sidebar-heading
                  d-flex
                  justify-content-between
                  align-items-center
                  px-3
                  mt-4
                  mb-1
                  text-muted
                "
              >
                <span>Group Management</span>
                <a class="d-flex align-items-center text-muted">
                  <span data-feather="plus-circle"></span>
                </a>
              </h6>
              <li class="nav-item">
                <!-- <a class="nav-link" @click="getAll('values')" href="#">
                  GetAll
                </a> -->
                <a
                  class="nav-link"
                  @click="groupDocumentsPost('Test GM-C')"
                  href="#"
                >
                  groupDocumentsPost
                </a>
                <a
                  class="nav-link"
                  @click="groupDocumentsGet('Test GM-C')"
                  href="#"
                >
                  groupDocumentsGet
                </a>
              </li>
            </ul>
            <h6
              class="
                sidebar-heading
                d-flex
                justify-content-between
                align-items-center
                px-3
                mt-4
                mb-1
                text-muted
              "
            >
              <span>Token Information</span>
              <a class="d-flex align-items-center text-muted">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <a class="nav-link" @click="getToken()" href="#"> Token </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="getTokenProfile()" href="#">
                  Token Profile
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="getTokenId()" href="#">
                  Id Token
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="getTokenSessionState()" href="#">
                  Session State
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="getAccessToken()" href="#">
                  Access Token
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="getTokenScopes()" href="#">
                  Scopes
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="renewToken()" href="#">
                  Force Access Token Renewal
                </a>
              </li>
            </ul>
            <h6
              class="
                sidebar-heading
                d-flex
                justify-content-between
                align-items-center
                px-3
                mt-4
                mb-1
                text-muted
              "
            >
              <span>Router Protection</span>
              <a class="d-flex align-items-center text-muted">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <a class="nav-link" href="#/payinguser"> PayingUser </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/freeuser"> FreeUser </a>
              </li>
            </ul>
          </div>
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div
            class="
              d-flex
              justify-content-between
              flex-wrap flex-md-nowrap
              align-items-center
              pt-3
              pb-2
              mb-3
              border-bottom
            "
          >
            <h1 class="h2">API</h1>
          </div>
          <pre id="resultsApi"></pre>

          <br />

          <h2>Information of Token</h2>
          <div class="table-responsive">
            <pre id="resultsToken"></pre>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
const SsGroupManagement = require("../services/SEAL/openapi/ss_group_management/index.js");
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    groupDocumentsPost: async function (new_group_name) {
      let new_group = new SsGroupManagement.VALGroupDocument();
      new_group["valGroupId"] = new_group_name;
      new_group["members"] = [new SsGroupManagement.ValTargetUe()];
      new_group["members"][0]["valUserId"] = this.val_user_id;
      let result = await this.seal.gm.groupDocumentsPost(new_group);
      this.logApi(result);
    },
    groupDocumentsGet: async function (group_name) {
      let result = await this.seal.gm.groupDocumentsGet({
        valGroupId: group_name,
      });
      this.logApi(result);
    },
    getToken() {
      let self = this;
      this.seal.im.getUser().then(
        (token) => {
          self.logToken(token);
        },
        (err) => {
          console.error(err);
        }
      );
    },
    getTokenId() {
      let self = this;
      this.seal.im.getIdToken().then(
        (tokenId) => {
          self.logToken(tokenId);
        },
        (err) => {
          console.error(err);
        }
      );
    },
    getTokenSessionState() {
      let self = this;
      this.seal.im.getSessionState().then(
        (sessionState) => {
          self.logToken(sessionState);
        },
        (err) => {
          console.error(err);
        }
      );
    },
    getAccessToken() {
      let self = this;
      this.seal.im.getAcessToken().then(
        (acessToken) => {
          self.logToken(acessToken);
        },
        (err) => {
          console.error(err);
        }
      );
    },
    getTokenScopes() {
      let self = this;
      this.seal.im.getScopes().then(
        (scopes) => {
          self.logToken(scopes);
        },
        (err) => {
          console.error(err);
        }
      );
    },
    getTokenProfile() {
      let self = this;
      this.seal.im.getProfile().then(
        (tokenProfile) => {
          self.logToken(tokenProfile);
        },
        (err) => {
          console.error(err);
        }
      );
    },
    renewToken() {
      let self = this;
      this.seal.im.renewToken().then(
        (newToken) => {
          self.logToken(newToken);
        },
        (err) => {
          console.error(err);
        }
      );
    },
    logApi() {
      document.getElementById("resultsApi").innerText = "";

      Array.prototype.forEach.call(arguments, function (msg) {
        if (msg instanceof Error) {
          msg = "Error: " + msg.message;
        } else if (typeof msg !== "string") {
          msg = JSON.stringify(msg, null, 2);
        }
        document.getElementById("resultsApi").innerHTML += msg + "\r\n";
      });
    },
    logToken() {
      document.getElementById("resultsToken").innerText = "";

      Array.prototype.forEach.call(arguments, function (msg) {
        if (msg instanceof Error) {
          msg = "Error: " + msg.message;
        } else if (typeof msg !== "string") {
          msg = JSON.stringify(msg, null, 2);
        }
        document.getElementById("resultsToken").innerHTML += msg + "\r\n";
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  font-size: 0.875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

/*
 * Sidebar
 */
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
}

/*
 * Content
 */
[role="main"] {
  padding-top: 48px; /* Space for fixed navbar */
}

/*
 * Navbar
 */
.navbar-brand {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
}

.navbar .form-control {
  padding: 0.75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
}

/*
 * Utilities
 */
.border-top {
  border-top: 1px solid #e5e5e5;
}
.border-bottom {
  border-bottom: 1px solid #e5e5e5;
}
</style>
