/* eslint-disable */
import axios from "axios";
import Mgr from "./SecurityService";
import "babel-polyfill";

const baseUrl = "http://localhost:9000/api/";
var user = new Mgr();

export default class ApiService {
  async defineHeaderAxios() {
    await user.getAcessToken().then(
      (acessToken) => {
        axios.defaults.headers.common["Authorization"] = "Bearer " + acessToken;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  async getAll(api) {
    await this.defineHeaderAxios();
    return axios
      .get(baseUrl + api)
      .then((response) => response.data)
      .catch((err) => {
        console.error(err);
      });
  }
}
