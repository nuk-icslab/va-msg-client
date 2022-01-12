"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CivicAddress = _interopRequireDefault(require("./CivicAddress"));

var _GeographicArea = _interopRequireDefault(require("./GeographicArea"));

var _NetworkAreaInfo = _interopRequireDefault(require("./NetworkAreaInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The LocationArea5G model module.
 * @module model/LocationArea5G
 * @version 1.1.0-alpha.4
 */
var LocationArea5G = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LocationArea5G</code>.
   * Represents a user location area when the UE is attached to 5G.
   * @alias module:model/LocationArea5G
   */
  function LocationArea5G() {
    _classCallCheck(this, LocationArea5G);

    LocationArea5G.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LocationArea5G, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LocationArea5G</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocationArea5G} obj Optional instance to populate.
     * @return {module:model/LocationArea5G} The populated <code>LocationArea5G</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LocationArea5G();

        if (data.hasOwnProperty('geographicAreas')) {
          obj['geographicAreas'] = _ApiClient["default"].convertToType(data['geographicAreas'], [_GeographicArea["default"]]);
        }

        if (data.hasOwnProperty('civicAddresses')) {
          obj['civicAddresses'] = _ApiClient["default"].convertToType(data['civicAddresses'], [_CivicAddress["default"]]);
        }

        if (data.hasOwnProperty('nwAreaInfo')) {
          obj['nwAreaInfo'] = _NetworkAreaInfo["default"].constructFromObject(data['nwAreaInfo']);
        }
      }

      return obj;
    }
  }]);

  return LocationArea5G;
}();
/**
 * Identifies a list of geographic area of the user where the UE is located.
 * @member {Array.<module:model/GeographicArea>} geographicAreas
 */


LocationArea5G.prototype['geographicAreas'] = undefined;
/**
 * Identifies a list of civic addresses of the user where the UE is located.
 * @member {Array.<module:model/CivicAddress>} civicAddresses
 */

LocationArea5G.prototype['civicAddresses'] = undefined;
/**
 * @member {module:model/NetworkAreaInfo} nwAreaInfo
 */

LocationArea5G.prototype['nwAreaInfo'] = undefined;
var _default = LocationArea5G;
exports["default"] = _default;