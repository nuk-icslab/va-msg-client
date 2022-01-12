"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PlmnId = _interopRequireDefault(require("./PlmnId"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Tai model module.
 * @module model/Tai
 * @version 1.1.0-alpha.4
 */
var Tai = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Tai</code>.
   * Contains the tracking area identity as described in 3GPP 23.003
   * @alias module:model/Tai
   * @param plmnId {module:model/PlmnId} 
   * @param tac {String} 2 or 3-octet string identifying a tracking area code as specified in clause 9.3.3.10 of 3GPP TS 38.413, in hexadecimal representation. Each character in the string shall take a value of \"0\" to \"9\", \"a\" to \"f\" or \"A\" to \"F\" and shall represent 4 bits. The most significant character representing the 4 most significant bits of the TAC shall appear first in the string, and the character representing the 4 least significant bit of the TAC shall appear last in the string.
   */
  function Tai(plmnId, tac) {
    _classCallCheck(this, Tai);

    Tai.initialize(this, plmnId, tac);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Tai, null, [{
    key: "initialize",
    value: function initialize(obj, plmnId, tac) {
      obj['plmnId'] = plmnId;
      obj['tac'] = tac;
    }
    /**
     * Constructs a <code>Tai</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Tai} obj Optional instance to populate.
     * @return {module:model/Tai} The populated <code>Tai</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Tai();

        if (data.hasOwnProperty('plmnId')) {
          obj['plmnId'] = _PlmnId["default"].constructFromObject(data['plmnId']);
        }

        if (data.hasOwnProperty('tac')) {
          obj['tac'] = _ApiClient["default"].convertToType(data['tac'], 'String');
        }

        if (data.hasOwnProperty('nid')) {
          obj['nid'] = _ApiClient["default"].convertToType(data['nid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Tai;
}();
/**
 * @member {module:model/PlmnId} plmnId
 */


Tai.prototype['plmnId'] = undefined;
/**
 * 2 or 3-octet string identifying a tracking area code as specified in clause 9.3.3.10 of 3GPP TS 38.413, in hexadecimal representation. Each character in the string shall take a value of \"0\" to \"9\", \"a\" to \"f\" or \"A\" to \"F\" and shall represent 4 bits. The most significant character representing the 4 most significant bits of the TAC shall appear first in the string, and the character representing the 4 least significant bit of the TAC shall appear last in the string.
 * @member {String} tac
 */

Tai.prototype['tac'] = undefined;
/**
 * This represents the Network Identifier, which together with a PLMN ID is used to identify an SNPN (see 3GPP TS 23.003 and 3GPP TS 23.501 clause 5.30.2.1).
 * @member {String} nid
 */

Tai.prototype['nid'] = undefined;
var _default = Tai;
exports["default"] = _default;