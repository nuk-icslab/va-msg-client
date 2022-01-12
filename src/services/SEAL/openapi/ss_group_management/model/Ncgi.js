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
 * The Ncgi model module.
 * @module model/Ncgi
 * @version 1.1.0-alpha.4
 */
var Ncgi = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Ncgi</code>.
   * Contains the NCGI (NR Cell Global Identity), as described in 3GPP 23.003
   * @alias module:model/Ncgi
   * @param plmnId {module:model/PlmnId} 
   * @param nrCellId {String} 36-bit string identifying an NR Cell Id as specified in clause 9.3.1.7 of 3GPP TS 38.413, in hexadecimal representation. Each character in the string shall take a value of \"0\" to \"9\", \"a\" to \"f\" or \"A\" to \"F\" and shall represent 4 bits. The most significant character representing the 4 most significant bits of the Cell Id shall appear first in the string, and the character representing the 4 least significant bit of the Cell Id shall appear last in the string.
   */
  function Ncgi(plmnId, nrCellId) {
    _classCallCheck(this, Ncgi);

    Ncgi.initialize(this, plmnId, nrCellId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Ncgi, null, [{
    key: "initialize",
    value: function initialize(obj, plmnId, nrCellId) {
      obj['plmnId'] = plmnId;
      obj['nrCellId'] = nrCellId;
    }
    /**
     * Constructs a <code>Ncgi</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Ncgi} obj Optional instance to populate.
     * @return {module:model/Ncgi} The populated <code>Ncgi</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Ncgi();

        if (data.hasOwnProperty('plmnId')) {
          obj['plmnId'] = _PlmnId["default"].constructFromObject(data['plmnId']);
        }

        if (data.hasOwnProperty('nrCellId')) {
          obj['nrCellId'] = _ApiClient["default"].convertToType(data['nrCellId'], 'String');
        }

        if (data.hasOwnProperty('nid')) {
          obj['nid'] = _ApiClient["default"].convertToType(data['nid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Ncgi;
}();
/**
 * @member {module:model/PlmnId} plmnId
 */


Ncgi.prototype['plmnId'] = undefined;
/**
 * 36-bit string identifying an NR Cell Id as specified in clause 9.3.1.7 of 3GPP TS 38.413, in hexadecimal representation. Each character in the string shall take a value of \"0\" to \"9\", \"a\" to \"f\" or \"A\" to \"F\" and shall represent 4 bits. The most significant character representing the 4 most significant bits of the Cell Id shall appear first in the string, and the character representing the 4 least significant bit of the Cell Id shall appear last in the string.
 * @member {String} nrCellId
 */

Ncgi.prototype['nrCellId'] = undefined;
/**
 * This represents the Network Identifier, which together with a PLMN ID is used to identify an SNPN (see 3GPP TS 23.003 and 3GPP TS 23.501 clause 5.30.2.1).
 * @member {String} nid
 */

Ncgi.prototype['nid'] = undefined;
var _default = Ncgi;
exports["default"] = _default;