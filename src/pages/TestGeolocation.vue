<template>
  <div class="col-lg-6 mx-auto">
    <pre>{{ config }}</pre>
    <a href="#" class="btn btn-primary" role="button" @click="fetchData">
      Refresh
    </a>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "Home",
  data() {
    return {
      config: "",
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      if (this.val_user_id === undefined) return;
      let { data } = await axios.get(
        `https://ch.val.5gsvc/config/${this.val_user_id}`
      );
      this.config = JSON.stringify(data, null, " ");
    },
  },
};
</script>