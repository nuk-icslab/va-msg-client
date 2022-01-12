"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ProblemDetails = _interopRequireDefault(require("../model/ProblemDetails"));

var _VALGroupDocument = _interopRequireDefault(require("../model/VALGroupDocument"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Default service.
* @module api/DefaultApi
* @version 1.1.0-alpha.4
*/
var DefaultApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DefaultApi. 
  * @alias module:api/DefaultApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DefaultApi(apiClient) {
    _classCallCheck(this, DefaultApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the groupDocumentsGet operation.
   * @callback module:api/DefaultApi~groupDocumentsGetCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/VALGroupDocument>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieves VAL group documents satisfying filter criteria
   * @param {Object} opts Optional parameters
   * @param {String} opts.valGroupId String identifying the VAL group.
   * @param {String} opts.valServiceId String identifying the Val service.
   * @param {module:api/DefaultApi~groupDocumentsGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/VALGroupDocument>}
   */


  _createClass(DefaultApi, [{
    key: "groupDocumentsGet",
    value: function groupDocumentsGet(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'val-group-id': opts['valGroupId'],
        'val-service-id': opts['valServiceId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['oAuth2ClientCredentials'];
      var contentTypes = [];
      var accepts = ['application/json', 'application/problem+json'];
      var returnType = [_VALGroupDocument["default"]];
      return this.apiClient.callApi('/group-documents', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the groupDocumentsGroupDocIdDelete operation.
     * @callback module:api/DefaultApi~groupDocumentsGroupDocIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a VAL Group.
     * @param {String} groupDocId String identifying an individual VAL group document resource.
     * @param {module:api/DefaultApi~groupDocumentsGroupDocIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "groupDocumentsGroupDocIdDelete",
    value: function groupDocumentsGroupDocIdDelete(groupDocId, callback) {
      var postBody = null; // verify the required parameter 'groupDocId' is set

      if (groupDocId === undefined || groupDocId === null) {
        throw new Error("Missing the required parameter 'groupDocId' when calling groupDocumentsGroupDocIdDelete");
      }

      var pathParams = {
        'groupDocId': groupDocId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oAuth2ClientCredentials'];
      var contentTypes = [];
      var accepts = ['application/problem+json'];
      var returnType = null;
      return this.apiClient.callApi('/group-documents/{groupDocId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the groupDocumentsGroupDocIdGet operation.
     * @callback module:api/DefaultApi~groupDocumentsGroupDocIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VALGroupDocument} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves VAL group information satisfying filter criteria.
     * @param {String} groupDocId String identifying an individual VAL group document resource.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.groupMembers When set to true indicates the group management server to send the members list information of the VAL group.
     * @param {Boolean} opts.groupConfiguration When set to true indicates the group management server to send the group configuration information of the VAL group.
     * @param {module:api/DefaultApi~groupDocumentsGroupDocIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VALGroupDocument}
     */

  }, {
    key: "groupDocumentsGroupDocIdGet",
    value: function groupDocumentsGroupDocIdGet(groupDocId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'groupDocId' is set

      if (groupDocId === undefined || groupDocId === null) {
        throw new Error("Missing the required parameter 'groupDocId' when calling groupDocumentsGroupDocIdGet");
      }

      var pathParams = {
        'groupDocId': groupDocId
      };
      var queryParams = {
        'group-members': opts['groupMembers'],
        'group-configuration': opts['groupConfiguration']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['oAuth2ClientCredentials'];
      var contentTypes = [];
      var accepts = ['application/json', 'application/problem+json'];
      var returnType = _VALGroupDocument["default"];
      return this.apiClient.callApi('/group-documents/{groupDocId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the groupDocumentsGroupDocIdPut operation.
     * @callback module:api/DefaultApi~groupDocumentsGroupDocIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VALGroupDocument} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates an individual VAL group document.
     * @param {String} groupDocId String identifying an individual VAL group document resource
     * @param {module:model/VALGroupDocument} vALGroupDocument VAL group document to be updated in Group management server.
     * @param {module:api/DefaultApi~groupDocumentsGroupDocIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VALGroupDocument}
     */

  }, {
    key: "groupDocumentsGroupDocIdPut",
    value: function groupDocumentsGroupDocIdPut(groupDocId, vALGroupDocument, callback) {
      var postBody = vALGroupDocument; // verify the required parameter 'groupDocId' is set

      if (groupDocId === undefined || groupDocId === null) {
        throw new Error("Missing the required parameter 'groupDocId' when calling groupDocumentsGroupDocIdPut");
      } // verify the required parameter 'vALGroupDocument' is set


      if (vALGroupDocument === undefined || vALGroupDocument === null) {
        throw new Error("Missing the required parameter 'vALGroupDocument' when calling groupDocumentsGroupDocIdPut");
      }

      var pathParams = {
        'groupDocId': groupDocId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oAuth2ClientCredentials'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'application/problem+json'];
      var returnType = _VALGroupDocument["default"];
      return this.apiClient.callApi('/group-documents/{groupDocId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the groupDocumentsPost operation.
     * @callback module:api/DefaultApi~groupDocumentsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VALGroupDocument} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new VAL group document.
     * @param {module:model/VALGroupDocument} vALGroupDocument 
     * @param {module:api/DefaultApi~groupDocumentsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VALGroupDocument}
     */

  }, {
    key: "groupDocumentsPost",
    value: function groupDocumentsPost(vALGroupDocument, callback) {
      var postBody = vALGroupDocument; // verify the required parameter 'vALGroupDocument' is set

      if (vALGroupDocument === undefined || vALGroupDocument === null) {
        throw new Error("Missing the required parameter 'vALGroupDocument' when calling groupDocumentsPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oAuth2ClientCredentials'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'application/problem+json'];
      var returnType = _VALGroupDocument["default"];
      return this.apiClient.callApi('/group-documents', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return DefaultApi;
}();

exports["default"] = DefaultApi;