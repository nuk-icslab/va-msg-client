"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GeographicalCoordinates = _interopRequireDefault(require("./GeographicalCoordinates"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PointAltitudeAllOf model module.
 * @module model/PointAltitudeAllOf
 * @version 1.1.0-alpha.4
 */
var PointAltitudeAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PointAltitudeAllOf</code>.
   * @alias module:model/PointAltitudeAllOf
   * @param point {module:model/GeographicalCoordinates} 
   * @param altitude {Number} Indicates value of altitude.
   */
  function PointAltitudeAllOf(point, altitude) {
    _classCallCheck(this, PointAltitudeAllOf);

    PointAltitudeAllOf.initialize(this, point, altitude);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PointAltitudeAllOf, null, [{
    key: "initialize",
    value: function initialize(obj, point, altitude) {
      obj['point'] = point;
      obj['altitude'] = altitude;
    }
    /**
     * Constructs a <code>PointAltitudeAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PointAltitudeAllOf} obj Optional instance to populate.
     * @return {module:model/PointAltitudeAllOf} The populated <code>PointAltitudeAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PointAltitudeAllOf();

        if (data.hasOwnProperty('point')) {
          obj['point'] = _GeographicalCoordinates["default"].constructFromObject(data['point']);
        }

        if (data.hasOwnProperty('altitude')) {
          obj['altitude'] = _ApiClient["default"].convertToType(data['altitude'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return PointAltitudeAllOf;
}();
/**
 * @member {module:model/GeographicalCoordinates} point
 */


PointAltitudeAllOf.prototype['point'] = undefined;
/**
 * Indicates value of altitude.
 * @member {Number} altitude
 */

PointAltitudeAllOf.prototype['altitude'] = undefined;
var _default = PointAltitudeAllOf;
exports["default"] = _default;