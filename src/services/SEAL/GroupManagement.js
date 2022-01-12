/*
 * @babel/polyfill has been deprecated after Babel 7.4.0
 * The following is the solution from https://babeljs.io/docs/en/babel-polyfill
 */
import "core-js/stable";
import "regenerator-runtime/runtime";
const axios = require("axios");

const SsGroupManagement = require("./openapi/ss_group_management/index.js");
import seal_config from "./config";

// [WARNING] Ignore the self-signed certifications for development
// Should be remove in the production enviroment
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

let api_client = new SsGroupManagement.ApiClient(
  `${seal_config.base_url}/ss-gm/v1`
);
let api = new SsGroupManagement.DefaultApi(api_client);

export default class GroupManagement {
  groupDocumentsGet(opts) {
    return new Promise((resolve, reject) => {
      api.groupDocumentsGet(opts, (error, data, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  }
  groupDocumentsPost(valGroupDocument) {
    return new Promise((resolve, reject) => {
      api.groupDocumentsPost(valGroupDocument, (error, data, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  }
  groupDocumentsGroupDocIdDelete(groupDocId) {
    return new Promise((resolve, reject) => {
      api.groupDocumentsGroupDocIdDelete(
        groupDocId,
        (error, data, response) => {
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        }
      );
    });
  }
  groupDocumentsGroupDocIdGet(groupDocId, opts) {
    return new Promise((resolve, reject) => {
      api.groupDocumentsGroupDocIdGet(
        groupDocId,
        opts,
        (error, data, response) => {
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        }
      );
    });
  }
  groupDocumentsGroupDocIdPut(groupDocId, valGroupDocument) {
    return new Promise((resolve, reject) => {
      api.groupDocumentsGroupDocIdPut(
        groupDocId,
        valGroupDocument,
        (error, data, response) => {
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        }
      );
    });
  }
  groupGetByUserId(userId) {
    return new Promise(async (resolve, reject) => {
      try {
        if (userId === "") {
          resolve([]);
          return;
        }
        let req_str = `${seal_config.base_url}/gm/${userId}`;
        let response = await axios.get(req_str);
        response = response.data;
        resolve(response);
      } catch (e) {
        console.log(e);
        reject(e);
      }
    });
  }
}
