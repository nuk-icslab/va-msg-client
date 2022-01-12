"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GeographicalCoordinates = _interopRequireDefault(require("./GeographicalCoordinates"));

var _UncertaintyEllipse = _interopRequireDefault(require("./UncertaintyEllipse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PointAltitudeUncertaintyAllOf model module.
 * @module model/PointAltitudeUncertaintyAllOf
 * @version 1.1.0-alpha.4
 */
var PointAltitudeUncertaintyAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PointAltitudeUncertaintyAllOf</code>.
   * @alias module:model/PointAltitudeUncertaintyAllOf
   * @param point {module:model/GeographicalCoordinates} 
   * @param altitude {Number} Indicates value of altitude.
   * @param uncertaintyEllipse {module:model/UncertaintyEllipse} 
   * @param uncertaintyAltitude {Number} Indicates value of uncertainty.
   * @param confidence {Number} Indicates value of confidence.
   */
  function PointAltitudeUncertaintyAllOf(point, altitude, uncertaintyEllipse, uncertaintyAltitude, confidence) {
    _classCallCheck(this, PointAltitudeUncertaintyAllOf);

    PointAltitudeUncertaintyAllOf.initialize(this, point, altitude, uncertaintyEllipse, uncertaintyAltitude, confidence);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PointAltitudeUncertaintyAllOf, null, [{
    key: "initialize",
    value: function initialize(obj, point, altitude, uncertaintyEllipse, uncertaintyAltitude, confidence) {
      obj['point'] = point;
      obj['altitude'] = altitude;
      obj['uncertaintyEllipse'] = uncertaintyEllipse;
      obj['uncertaintyAltitude'] = uncertaintyAltitude;
      obj['confidence'] = confidence;
    }
    /**
     * Constructs a <code>PointAltitudeUncertaintyAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PointAltitudeUncertaintyAllOf} obj Optional instance to populate.
     * @return {module:model/PointAltitudeUncertaintyAllOf} The populated <code>PointAltitudeUncertaintyAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PointAltitudeUncertaintyAllOf();

        if (data.hasOwnProperty('point')) {
          obj['point'] = _GeographicalCoordinates["default"].constructFromObject(data['point']);
        }

        if (data.hasOwnProperty('altitude')) {
          obj['altitude'] = _ApiClient["default"].convertToType(data['altitude'], 'Number');
        }

        if (data.hasOwnProperty('uncertaintyEllipse')) {
          obj['uncertaintyEllipse'] = _UncertaintyEllipse["default"].constructFromObject(data['uncertaintyEllipse']);
        }

        if (data.hasOwnProperty('uncertaintyAltitude')) {
          obj['uncertaintyAltitude'] = _ApiClient["default"].convertToType(data['uncertaintyAltitude'], 'Number');
        }

        if (data.hasOwnProperty('confidence')) {
          obj['confidence'] = _ApiClient["default"].convertToType(data['confidence'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return PointAltitudeUncertaintyAllOf;
}();
/**
 * @member {module:model/GeographicalCoordinates} point
 */


PointAltitudeUncertaintyAllOf.prototype['point'] = undefined;
/**
 * Indicates value of altitude.
 * @member {Number} altitude
 */

PointAltitudeUncertaintyAllOf.prototype['altitude'] = undefined;
/**
 * @member {module:model/UncertaintyEllipse} uncertaintyEllipse
 */

PointAltitudeUncertaintyAllOf.prototype['uncertaintyEllipse'] = undefined;
/**
 * Indicates value of uncertainty.
 * @member {Number} uncertaintyAltitude
 */

PointAltitudeUncertaintyAllOf.prototype['uncertaintyAltitude'] = undefined;
/**
 * Indicates value of confidence.
 * @member {Number} confidence
 */

PointAltitudeUncertaintyAllOf.prototype['confidence'] = undefined;
var _default = PointAltitudeUncertaintyAllOf;
exports["default"] = _default;