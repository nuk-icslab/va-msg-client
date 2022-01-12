import "regenerator-runtime/runtime";
import "core-js/stable";

const assert = require("assert");
import GroupManagement from "../src/services/SEAL/GroupManagement";
const SsGroupManagement = require("../src/services/SEAL/openapi/ss_group_management/index.js");

describe("GroupManagement", () => {
  let gm = new GroupManagement();
  let new_group_name = "Test GM-C";
  it("groupDocumentsPost", async () => {
    let new_group = new SsGroupManagement.VALGroupDocument();
    new_group["valGroupId"] = new_group_name;
    new_group["members"] = [new SsGroupManagement.ValTargetUe()];
    new_group["members"][0]["valUserId"] = "ifTNT";
    let result = await gm.groupDocumentsPost(new_group);
    assert.strictEqual(result["valGroupId"], new_group_name);
  });
  it("groupDocumentsGet", async () => {
    let result = await gm.groupDocumentsGet({
      valGroupId: new_group_name,
    });
    assert.strictEqual(result[0]["valGroupId"], new_group_name);
  });
  it("groupDocumentsGroupDocIdGet", async () => {
    let result = await gm.groupDocumentsGroupDocIdGet(new_group_name);
    assert.strictEqual(result["valGroupId"], new_group_name);
  });
  it("groupDocumentsGroupDocIdPut", async () => {
    let new_group = new SsGroupManagement.VALGroupDocument();
    new_group["valGroupId"] = new_group_name;
    new_group["members"] = [
      new SsGroupManagement.ValTargetUe(),
      new SsGroupManagement.ValTargetUe(),
    ];
    new_group["members"][0]["valUserId"] = "ifTNT";
    new_group["members"][1]["valUserId"] = "ifTNT2";
    let result = await gm.groupDocumentsGroupDocIdPut(
      new_group_name,
      new_group
    );
    assert.strictEqual(result["valGroupId"], new_group_name);
  });
  it("groupDocumentsGroupDocIdDelete", async () => {
    let result = await gm.groupDocumentsGroupDocIdDelete(new_group_name);
    assert.strictEqual(1, 1);
  });
});
