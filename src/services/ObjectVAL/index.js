import { io } from "socket.io-client";
import config from "./config";

export default class ObjectClient {
  constructor() {
    this.subscribe_list = {};
    this.socket = io(config.val_url, {
      autoConnect: false,
    });
    this.socket.onAny((event, ...args) => {
      console.debug(`[socket.io][${event}]`, args);
    });
    this.socket.on("message", this.onMessage.bind(this));
    this.socket.on("rejected", (data) => {
      console.error(data);
    });
    this.socket.io.on("reconnect", () => {
      // Subscribe again when reconnected
      console.info("VAL reconnected.");
      for (let group_id in this.subscribe_list) {
        console.info(`  Subscribe to channel ${group_id}`);
        // If we emit an event immediately after reconnecting, it will be lost.
        // My guess is the corresponding handler has not been registered on the server.
        // [TODO] setTimeout is a bad solution
        window.setTimeout(() => {
          this.subscribe(group_id, null);
        }, 100);
      }
    });

    // [TODO] Enable HTTPS with self-signed certification
    // , {
    //   transports: ["websocket"],
    //   rejectUnauthorized: false,
    // }
  }
  connect(access_token, user_id) {
    this.access_token = access_token;
    this.user_id = user_id;
    this.socket.auth = { access_token };
    this.socket.connect();
  }
  onMessage(data) {
    let { group_id } = data;
    if (group_id in this.subscribe_list) {
      this.subscribe_list[group_id](data);
    }
  }
  subscribe(group_id, callback) {
    if (callback !== null) this.subscribe_list[group_id] = callback;
    this.socket.emit("subscribe", { group_id });
  }
  unsubscribe(group_id) {
    if (group_id === "") return;
    delete this.subscribe_list[group_id];
    this.socket.emit("unsubscribe", { group_id });
  }
  publish(group_id, payload) {
    this.socket.emit("message", {
      group_id,
      payload,
    });
  }
}
