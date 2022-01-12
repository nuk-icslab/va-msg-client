<template>
  <div class="col-lg-6 mx-auto">
    <form>
      <div class="form-group">
        <label for="group_id">Group ID</label>
        <input
          type="text"
          class="form-control"
          id="group_id"
          placeholder="Enter group ID"
          v-model="group_id"
        />
      </div>
      <div class="form-group">
        <label for="user_ids">Members' ID. Separated by newline.</label>
        <textarea
          class="form-control"
          id="user_ids"
          rows="3"
          v-model="members"
        ></textarea>
      </div>
      <button type="button" class="btn btn-primary" @click="createGroup()">
        Create Group
      </button>
      <div class="text-success ml-3 d-inline-block" v-if="succeed">Succeed</div>
    </form>
  </div>
</template>

<script>
const SsGroupManagement = require("../services/SEAL/openapi/ss_group_management/index.js");
export default {
  name: "Home",
  data() {
    return {
      group_id: "",
      members: "",
      succeed: false,
    };
  },
  methods: {
    createGroup: async function () {
      let new_group = new SsGroupManagement.VALGroupDocument();
      new_group["valGroupId"] = this.group_id;
      let members = this.members.split("\n");
      new_group["members"] = [];
      for (let m of members) {
        let new_val_user = new SsGroupManagement.ValTargetUe();
        new_val_user["valUserId"] = m;
        new_group["members"].push(new_val_user);
      }
      let result = await this.seal.gm.groupDocumentsPost(new_group);
      console.log(result);
      this.succeed = true;
      window.setTimeout(() => {
        this.succeed = false;
      }, 1000);
    },
  },
};
</script>