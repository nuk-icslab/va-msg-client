"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InvalidParam = _interopRequireDefault(require("./InvalidParam"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ProblemDetails model module.
 * @module model/ProblemDetails
 * @version 1.1.0-alpha.4
 */
var ProblemDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProblemDetails</code>.
   * Represents additional information and details on an error response.
   * @alias module:model/ProblemDetails
   */
  function ProblemDetails() {
    _classCallCheck(this, ProblemDetails);

    ProblemDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProblemDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProblemDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProblemDetails} obj Optional instance to populate.
     * @return {module:model/ProblemDetails} The populated <code>ProblemDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProblemDetails();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'Number');
        }

        if (data.hasOwnProperty('detail')) {
          obj['detail'] = _ApiClient["default"].convertToType(data['detail'], 'String');
        }

        if (data.hasOwnProperty('instance')) {
          obj['instance'] = _ApiClient["default"].convertToType(data['instance'], 'String');
        }

        if (data.hasOwnProperty('cause')) {
          obj['cause'] = _ApiClient["default"].convertToType(data['cause'], 'String');
        }

        if (data.hasOwnProperty('invalidParams')) {
          obj['invalidParams'] = _ApiClient["default"].convertToType(data['invalidParams'], [_InvalidParam["default"]]);
        }

        if (data.hasOwnProperty('supportedFeatures')) {
          obj['supportedFeatures'] = _ApiClient["default"].convertToType(data['supportedFeatures'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ProblemDetails;
}();
/**
 * string providing an URI formatted according to IETF RFC 3986.
 * @member {String} type
 */


ProblemDetails.prototype['type'] = undefined;
/**
 * A short, human-readable summary of the problem type. It should not change from occurrence to occurrence of the problem.
 * @member {String} title
 */

ProblemDetails.prototype['title'] = undefined;
/**
 * The HTTP status code for this occurrence of the problem.
 * @member {Number} status
 */

ProblemDetails.prototype['status'] = undefined;
/**
 * A human-readable explanation specific to this occurrence of the problem.
 * @member {String} detail
 */

ProblemDetails.prototype['detail'] = undefined;
/**
 * string providing an URI formatted according to IETF RFC 3986.
 * @member {String} instance
 */

ProblemDetails.prototype['instance'] = undefined;
/**
 * A machine-readable application error cause specific to this occurrence of the problem. This IE should be present and provide application-related error information, if available.
 * @member {String} cause
 */

ProblemDetails.prototype['cause'] = undefined;
/**
 * Description of invalid parameters, for a request rejected due to invalid parameters.
 * @member {Array.<module:model/InvalidParam>} invalidParams
 */

ProblemDetails.prototype['invalidParams'] = undefined;
/**
 * A string used to indicate the features supported by an API that is used as defined in clause 6.6 in 3GPP TS 29.500. The string shall contain a bitmask indicating supported features in hexadecimal representation Each character in the string shall take a value of \"0\" to \"9\", \"a\" to \"f\" or \"A\" to \"F\" and shall represent the support of 4 features as described in table 5.2.2-3. The most significant character representing the highest-numbered features shall appear first in the string, and the character representing features 1 to 4 shall appear last in the string. The list of features and their numbering (starting with 1) are defined separately for each API. If the string contains a lower number of characters than there are defined features for an API, all features that would be represented by characters that are not present in the string are not supported
 * @member {String} supportedFeatures
 */

ProblemDetails.prototype['supportedFeatures'] = undefined;
var _default = ProblemDetails;
exports["default"] = _default;