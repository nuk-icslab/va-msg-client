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
 * The PlmnId model module.
 * @module model/PlmnId
 * @version 1.1.0-alpha.4
 */
var PlmnId = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PlmnId</code>.
   * When PlmnId needs to be converted to string (e.g. when used in maps as key), the string shall be composed of three digits \&quot;mcc\&quot; followed by \&quot;-\&quot; and two or three digits \&quot;mnc\&quot;.
   * @alias module:model/PlmnId
   * @param mcc {String} Mobile Country Code part of the PLMN, comprising 3 digits, as defined in clause 9.3.3.5 of 3GPP TS 38.413.
   * @param mnc {String} Mobile Network Code part of the PLMN, comprising 2 or 3 digits, as defined in clause 9.3.3.5 of 3GPP TS 38.413.
   */
  function PlmnId(mcc, mnc) {
    _classCallCheck(this, PlmnId);

    PlmnId.initialize(this, mcc, mnc);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PlmnId, null, [{
    key: "initialize",
    value: function initialize(obj, mcc, mnc) {
      obj['mcc'] = mcc;
      obj['mnc'] = mnc;
    }
    /**
     * Constructs a <code>PlmnId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PlmnId} obj Optional instance to populate.
     * @return {module:model/PlmnId} The populated <code>PlmnId</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PlmnId();

        if (data.hasOwnProperty('mcc')) {
          obj['mcc'] = _ApiClient["default"].convertToType(data['mcc'], 'String');
        }

        if (data.hasOwnProperty('mnc')) {
          obj['mnc'] = _ApiClient["default"].convertToType(data['mnc'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PlmnId;
}();
/**
 * Mobile Country Code part of the PLMN, comprising 3 digits, as defined in clause 9.3.3.5 of 3GPP TS 38.413.
 * @member {String} mcc
 */


PlmnId.prototype['mcc'] = undefined;
/**
 * Mobile Network Code part of the PLMN, comprising 2 or 3 digits, as defined in clause 9.3.3.5 of 3GPP TS 38.413.
 * @member {String} mnc
 */

PlmnId.prototype['mnc'] = undefined;
var _default = PlmnId;
exports["default"] = _default;