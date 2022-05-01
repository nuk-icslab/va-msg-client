/*
 * @babel/polyfill has been deprecated after Babel 7.4.0
 * The following is the solution from https://babeljs.io/docs/en/babel-polyfill
 */
import "core-js/stable";
import "regenerator-runtime/runtime";
const axios = require("axios");
import seal_config from "./config";

export default class LocationManagement {
  constructor() {}

  init(userId) {
    this.userId = userId;
    if ("geolocation" in navigator) {
      /* geolocation is available */
      this.watchID = navigator.geolocation.watchPosition(
        this.watchLocation.bind(this)
      );
    } else {
      /* geolocation IS NOT available */
      console.warning("Geolocation is not avaliable");
    }
  }
  async watchLocation(pos) {
    let lat = pos.coords.latitude;
    let lng = pos.coords.longitude;
    let req_str = `${seal_config.base_url}/ss-lm/location/${this.userId}`;
    let response = await axios.post(req_str, {
      lng,
      lat,
    });
  }
}
