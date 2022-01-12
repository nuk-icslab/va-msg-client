<template>
  <!--eslint-disable-->
  <div>
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand ml-3 mr-auto" role="button" href="#/">
        5G Instant Messaging
      </a>
      <span class="navbar-text disabled" v-if="signedIn">
        VAL User: {{ val_user_id }}
      </span>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap" v-if="signedIn">
          <a class="nav-link" @click="seal.im.signOut()">Sign out</a>
        </li>
      </ul>
    </nav>
    <div class="content mt-5">
      <router-view v-if="signedIn" />
    </div>
    <div class="mx-auto col-md-6 col-sm-10 mt-5" v-if="!signedIn">
      <p class="alert alert-primary text-center">
        Welcome to the 5G vertical application demo.<br />
        To move forward, please sign-in.
      </p>
      <div class="d-flex justify-content-center">
        <a
          href="#"
          class="btn btn-primary"
          role="button"
          @click="seal.im.signIn()"
        >
          Sign-in
        </a>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "App",
};
</script>
