"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LocationArea5G = _interopRequireDefault(require("./LocationArea5G"));

var _LocationInfo = _interopRequireDefault(require("./LocationInfo"));

var _PduSessionType = _interopRequireDefault(require("./PduSessionType"));

var _ValTargetUe = _interopRequireDefault(require("./ValTargetUe"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The VALGroupDocument model module.
 * @module model/VALGroupDocument
 * @version 1.1.0-alpha.4
 */
var VALGroupDocument = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VALGroupDocument</code>.
   * Represents details of the VAL group document information.
   * @alias module:model/VALGroupDocument
   * @param valGroupId {String} The VAL group idenitity.
   */
  function VALGroupDocument(valGroupId) {
    _classCallCheck(this, VALGroupDocument);

    VALGroupDocument.initialize(this, valGroupId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VALGroupDocument, null, [{
    key: "initialize",
    value: function initialize(obj, valGroupId) {
      obj['valGroupId'] = valGroupId;
    }
    /**
     * Constructs a <code>VALGroupDocument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VALGroupDocument} obj Optional instance to populate.
     * @return {module:model/VALGroupDocument} The populated <code>VALGroupDocument</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VALGroupDocument();

        if (data.hasOwnProperty('valGroupId')) {
          obj['valGroupId'] = _ApiClient["default"].convertToType(data['valGroupId'], 'String');
        }

        if (data.hasOwnProperty('grpDesc')) {
          obj['grpDesc'] = _ApiClient["default"].convertToType(data['grpDesc'], 'String');
        }

        if (data.hasOwnProperty('members')) {
          obj['members'] = _ApiClient["default"].convertToType(data['members'], [_ValTargetUe["default"]]);
        }

        if (data.hasOwnProperty('valGrpConf')) {
          obj['valGrpConf'] = _ApiClient["default"].convertToType(data['valGrpConf'], 'String');
        }

        if (data.hasOwnProperty('valServiceIds')) {
          obj['valServiceIds'] = _ApiClient["default"].convertToType(data['valServiceIds'], ['String']);
        }

        if (data.hasOwnProperty('suppFeat')) {
          obj['suppFeat'] = _ApiClient["default"].convertToType(data['suppFeat'], 'String');
        }

        if (data.hasOwnProperty('resUri')) {
          obj['resUri'] = _ApiClient["default"].convertToType(data['resUri'], 'String');
        }

        if (data.hasOwnProperty('locInfo')) {
          obj['locInfo'] = _LocationInfo["default"].constructFromObject(data['locInfo']);
        }

        if (data.hasOwnProperty('addLocInfo')) {
          obj['addLocInfo'] = _LocationArea5G["default"].constructFromObject(data['addLocInfo']);
        }

        if (data.hasOwnProperty('extGrpId')) {
          obj['extGrpId'] = _ApiClient["default"].convertToType(data['extGrpId'], 'String');
        }

        if (data.hasOwnProperty('com5GLanType')) {
          obj['com5GLanType'] = _PduSessionType["default"].constructFromObject(data['com5GLanType']);
        }
      }

      return obj;
    }
  }]);

  return VALGroupDocument;
}();
/**
 * The VAL group idenitity.
 * @member {String} valGroupId
 */


VALGroupDocument.prototype['valGroupId'] = undefined;
/**
 * The text description of the VAL group.
 * @member {String} grpDesc
 */

VALGroupDocument.prototype['grpDesc'] = undefined;
/**
 * The list of VAL User IDs or VAL UE IDs, which are members of the VAL group.
 * @member {Array.<module:model/ValTargetUe>} members
 */

VALGroupDocument.prototype['members'] = undefined;
/**
 * Configuration data for the VAL group.
 * @member {String} valGrpConf
 */

VALGroupDocument.prototype['valGrpConf'] = undefined;
/**
 * The list of VAL services enabled on the group.
 * @member {Array.<String>} valServiceIds
 */

VALGroupDocument.prototype['valServiceIds'] = undefined;
/**
 * A string used to indicate the features supported by an API that is used as defined in clause 6.6 in 3GPP TS 29.500. The string shall contain a bitmask indicating supported features in hexadecimal representation Each character in the string shall take a value of \"0\" to \"9\", \"a\" to \"f\" or \"A\" to \"F\" and shall represent the support of 4 features as described in table 5.2.2-3. The most significant character representing the highest-numbered features shall appear first in the string, and the character representing features 1 to 4 shall appear last in the string. The list of features and their numbering (starting with 1) are defined separately for each API. If the string contains a lower number of characters than there are defined features for an API, all features that would be represented by characters that are not present in the string are not supported
 * @member {String} suppFeat
 */

VALGroupDocument.prototype['suppFeat'] = undefined;
/**
 * string providing an URI formatted according to IETF RFC 3986.
 * @member {String} resUri
 */

VALGroupDocument.prototype['resUri'] = undefined;
/**
 * @member {module:model/LocationInfo} locInfo
 */

VALGroupDocument.prototype['locInfo'] = undefined;
/**
 * @member {module:model/LocationArea5G} addLocInfo
 */

VALGroupDocument.prototype['addLocInfo'] = undefined;
/**
 * string containing a local identifier followed by \"@\" and a domain identifier. Both the local identifier and the domain identifier shall be encoded as strings that do not contain any \"@\" characters. See Clauses 4.6.2 and 4.6.3 of 3GPP TS 23.682 for more information.
 * @member {String} extGrpId
 */

VALGroupDocument.prototype['extGrpId'] = undefined;
/**
 * @member {module:model/PduSessionType} com5GLanType
 */

VALGroupDocument.prototype['com5GLanType'] = undefined;
var _default = VALGroupDocument;
exports["default"] = _default;