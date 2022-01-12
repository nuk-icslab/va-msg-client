"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GNbId = _interopRequireDefault(require("./GNbId"));

var _PlmnId = _interopRequireDefault(require("./PlmnId"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GlobalRanNodeId model module.
 * @module model/GlobalRanNodeId
 * @version 1.1.0-alpha.4
 */
var GlobalRanNodeId = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GlobalRanNodeId</code>.
   * One of the six attributes n3IwfId, gNbIdm, ngeNbId, wagfId, tngfId, eNbId shall be present.
   * @alias module:model/GlobalRanNodeId
   */
  function GlobalRanNodeId() {
    _classCallCheck(this, GlobalRanNodeId);

    GlobalRanNodeId.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GlobalRanNodeId, null, [{
    key: "initialize",
    value: function initialize(obj) {
      obj['plmnId'] = plmnId;
    }
    /**
     * Constructs a <code>GlobalRanNodeId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GlobalRanNodeId} obj Optional instance to populate.
     * @return {module:model/GlobalRanNodeId} The populated <code>GlobalRanNodeId</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GlobalRanNodeId();

        if (data.hasOwnProperty('plmnId')) {
          obj['plmnId'] = _PlmnId["default"].constructFromObject(data['plmnId']);
        }

        if (data.hasOwnProperty('n3IwfId')) {
          obj['n3IwfId'] = _ApiClient["default"].convertToType(data['n3IwfId'], 'String');
        }

        if (data.hasOwnProperty('gNbId')) {
          obj['gNbId'] = _GNbId["default"].constructFromObject(data['gNbId']);
        }

        if (data.hasOwnProperty('ngeNbId')) {
          obj['ngeNbId'] = _ApiClient["default"].convertToType(data['ngeNbId'], 'String');
        }

        if (data.hasOwnProperty('wagfId')) {
          obj['wagfId'] = _ApiClient["default"].convertToType(data['wagfId'], 'String');
        }

        if (data.hasOwnProperty('tngfId')) {
          obj['tngfId'] = _ApiClient["default"].convertToType(data['tngfId'], 'String');
        }

        if (data.hasOwnProperty('nid')) {
          obj['nid'] = _ApiClient["default"].convertToType(data['nid'], 'String');
        }

        if (data.hasOwnProperty('eNbId')) {
          obj['eNbId'] = _ApiClient["default"].convertToType(data['eNbId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GlobalRanNodeId;
}();
/**
 * @member {module:model/PlmnId} plmnId
 */


GlobalRanNodeId.prototype['plmnId'] = undefined;
/**
 * This represents the identifier of the N3IWF ID as specified in clause 9.3.1.57 of 3GPP TS 38.413 in hexadecimal representation. Each character in the string shall take a value of \"0\" to \"9\", \"a\" to \"f\" or \"A\" to \"F\" and shall represent 4 bits. The most significant character representing the 4 most significant bits of the N3IWF ID shall appear first in the string, and the character representing the 4 least significant bit of the N3IWF ID shall appear last in the string.
 * @member {String} n3IwfId
 */

GlobalRanNodeId.prototype['n3IwfId'] = undefined;
/**
 * @member {module:model/GNbId} gNbId
 */

GlobalRanNodeId.prototype['gNbId'] = undefined;
/**
 * This represents the identifier of the ng-eNB ID as specified in clause 9.3.1.8 of 3GPP TS 38.413. The value of the ng-eNB ID shall be encoded in hexadecimal representation. Each character in the string shall take a value of \"0\" to \"9\", \"a\" to \"f\" or \"A\" to \"F\" and shall represent 4 bits. The padding 0 shall be added to make multiple nibbles, so the most significant character representing the padding 0 if required together with the 4 most significant bits of the ng-eNB ID shall appear first in the string, and the character representing the 4 least significant bit of the ng-eNB ID (to form a nibble) shall appear last in the string.
 * @member {String} ngeNbId
 */

GlobalRanNodeId.prototype['ngeNbId'] = undefined;
/**
 * This represents the identifier of the W-AGF ID as specified in clause 9.3.1.162 of 3GPP TS 38.413 in hexadecimal representation. Each character in the string shall take a value of \"0\" to \"9\", \"a\" to \"f\" or \"A\" to \"F\" and shall represent 4 bits. The most significant character representing the 4 most significant bits of the W-AGF ID shall appear first in the string, and the character representing the 4 least significant bit of the W-AGF ID shall appear last in the string.
 * @member {String} wagfId
 */

GlobalRanNodeId.prototype['wagfId'] = undefined;
/**
 * This represents the identifier of the TNGF ID as specified in clause 9.3.1.161 of 3GPP TS 38.413 in hexadecimal representation. Each character in the string shall take a value of \"0\" to \"9\", \"a\" to \"f\" or \"A\" to \"F\" and shall represent 4 bits. The most significant character representing the 4 most significant bits of the TNGF ID shall appear first in the string, and the character representing the 4 least significant bit of the TNGF ID shall appear last in the string.
 * @member {String} tngfId
 */

GlobalRanNodeId.prototype['tngfId'] = undefined;
/**
 * This represents the Network Identifier, which together with a PLMN ID is used to identify an SNPN (see 3GPP TS 23.003 and 3GPP TS 23.501 clause 5.30.2.1).
 * @member {String} nid
 */

GlobalRanNodeId.prototype['nid'] = undefined;
/**
 * This represents the identifier of the eNB ID as specified in clause 9.2.1.37 of 3GPP TS 36.413. The string shall be formatted with the following pattern '^('MacroeNB-[A-Fa-f0-9]{5}|LMacroeNB-[A-Fa-f0-9]{6}|SMacroeNB-[A-Fa-f0-9]{5}|HomeeNB-[A-Fa-f0-9]{7})$' The value of the eNB ID shall be encoded in hexadecimal representation. Each character in the string shall take a value of \"0\" to \"9\", \"a\" to \"f\" or \"A\" to \"F\" and shall represent 4 bits. The padding 0 shall be added to make multiple nibbles, so the most significant character representing the padding 0 if required together with the 4 most significant bits of the eNB ID shall appear first in the string, and the character representing the 4 least significant bit of the eNB ID (to form a nibble) shall appear last in the string.
 * @member {String} eNbId
 */

GlobalRanNodeId.prototype['eNbId'] = undefined;
var _default = GlobalRanNodeId;
exports["default"] = _default;