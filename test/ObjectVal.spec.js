import "regenerator-runtime/runtime";
import "core-js/stable";

const assert = require("assert");
import ObjectClient from "../src/services/ObjectVAL";

const test_callback = (msg) => {
  console.log(msg);
};

describe("ObjectClient", () => {
  let obj_client = new ObjectClient();
  let group_id = "TestGroup";
  let user_id = "TestUser";
  it("subscribe", async () => {
    obj_client.subscribe(user_id, group_id, test_callback);
  });
  it("publish", async () => {
    obj_client.publish(user_id, group_id, "Test Message");
  });
  it("unsubscribe", async () => {
    obj_client.unsubscribe(user_id, group_id);
  });
  it("publish after unsubscribe", async () => {
    obj_client.publish(user_id, group_id, "Test Message");
  });
});
