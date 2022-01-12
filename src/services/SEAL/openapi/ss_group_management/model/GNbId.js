"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GNbId model module.
 * @module model/GNbId
 * @version 1.1.0-alpha.4
 */
var GNbId = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GNbId</code>.
   * Provides the G-NB identifier.
   * @alias module:model/GNbId
   * @param bitLength {Number} Unsigned integer representing the bit length of the gNB ID as defined in clause 9.3.1.6 of 3GPP TS 38.413 [11], within the range 22 to 32.
   * @param gNBValue {String} This represents the identifier of the gNB. The value of the gNB ID shall be encoded in hexadecimal representation. Each character in the string shall take a value of \"0\" to \"9\", \"a\" to \"f\" or \"A\" to \"F\" and shall represent 4 bits. The padding 0 shall be added to make multiple nibbles, the most significant character representing the padding 0 if required together with the 4 most significant bits of the gNB ID shall appear first in the string, and the character representing the 4 least significant bit of the gNB ID shall appear last in the string. 
   */
  function GNbId(bitLength, gNBValue) {
    _classCallCheck(this, GNbId);

    GNbId.initialize(this, bitLength, gNBValue);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GNbId, null, [{
    key: "initialize",
    value: function initialize(obj, bitLength, gNBValue) {
      obj['bitLength'] = bitLength;
      obj['gNBValue'] = gNBValue;
    }
    /**
     * Constructs a <code>GNbId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GNbId} obj Optional instance to populate.
     * @return {module:model/GNbId} The populated <code>GNbId</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GNbId();

        if (data.hasOwnProperty('bitLength')) {
          obj['bitLength'] = _ApiClient["default"].convertToType(data['bitLength'], 'Number');
        }

        if (data.hasOwnProperty('gNBValue')) {
          obj['gNBValue'] = _ApiClient["default"].convertToType(data['gNBValue'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GNbId;
}();
/**
 * Unsigned integer representing the bit length of the gNB ID as defined in clause 9.3.1.6 of 3GPP TS 38.413 [11], within the range 22 to 32.
 * @member {Number} bitLength
 */


GNbId.prototype['bitLength'] = undefined;
/**
 * This represents the identifier of the gNB. The value of the gNB ID shall be encoded in hexadecimal representation. Each character in the string shall take a value of \"0\" to \"9\", \"a\" to \"f\" or \"A\" to \"F\" and shall represent 4 bits. The padding 0 shall be added to make multiple nibbles, the most significant character representing the padding 0 if required together with the 4 most significant bits of the gNB ID shall appear first in the string, and the character representing the 4 least significant bit of the gNB ID shall appear last in the string. 
 * @member {String} gNBValue
 */

GNbId.prototype['gNBValue'] = undefined;
var _default = GNbId;
exports["default"] = _default;