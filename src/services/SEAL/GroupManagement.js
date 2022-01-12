const SsGroupManagement = require("./openapi/ss_group_management/index.js");
import seal_config from "./config";

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
}
