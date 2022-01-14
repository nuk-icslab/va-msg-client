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
      for (let group_id in this.subscribe_list) {
        this.subscribe(group_id, this.subscribe_list[group_id]);
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
    this.subscribe_list[group_id] = callback;
    this.socket.emit("subscribe", { user_id: this.user_id, group_id });
  }
  unsubscribe(group_id) {
    delete this.subscribe_list[group_id];
    this.socket.emit("unsubscribe", { user_id: this.user_id, group_id });
  }
  publish(group_id, payload) {
    this.socket.emit("message", {
      user_id: this.user_id,
      group_id,
      payload,
    });
  }
}
