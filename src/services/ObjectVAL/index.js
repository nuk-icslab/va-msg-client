import { io } from "socket.io-client";
import config from "./config";

export default class ObjectClient {
  constructor() {
    this.subscribe_list = {};
    this.socket = io(config.val_url, { autoConnect: false });
    this.socket.onAny((event, ...args) => {
      console.debug(`[socket.io][${event}]`, args);
    });
    this.socket.on("message", this.onMessage.bind(this));
    this.socket.connect();
    // [TODO] Enable HTTPS with self-signed certification
    // , {
    //   transports: ["websocket"],
    //   rejectUnauthorized: false,
    // }
  }
  onMessage(msg) {
    let { group_id } = msg;
    if (group_id in this.subscribe_list) {
      this.subscribe_list[group_id](msg);
    }
  }
  subscribe(user_id, group_id, callback) {
    this.subscribe_list[group_id] = callback;
    this.socket.emit("subscribe", { user_id, group_id });
  }
  unsubscribe(user_id, group_id) {
    delete this.subscribe_list[group_id];
    this.socket.emit("unsubscribe", { user_id, group_id });
  }
  publish(user_id, group_id, message) {
    this.socket.emit("message", {
      user_id,
      group_id,
      message,
      time: new Date().toISOString(),
    });
  }
}
