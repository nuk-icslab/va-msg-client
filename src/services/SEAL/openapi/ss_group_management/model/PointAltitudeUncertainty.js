"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GADShape = _interopRequireDefault(require("./GADShape"));

var _GeographicalCoordinates = _interopRequireDefault(require("./GeographicalCoordinates"));

var _PointAltitudeUncertaintyAllOf = _interopRequireDefault(require("./PointAltitudeUncertaintyAllOf"));

var _SupportedGADShapes = _interopRequireDefault(require("./SupportedGADShapes"));

var _UncertaintyEllipse = _interopRequireDefault(require("./UncertaintyEllipse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PointAltitudeUncertainty model module.
 * @module model/PointAltitudeUncertainty
 * @version 1.1.0-alpha.4
 */
var PointAltitudeUncertainty = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PointAltitudeUncertainty</code>.
   * Ellipsoid point with altitude and uncertainty ellipsoid.
   * @alias module:model/PointAltitudeUncertainty
   * @extends module:model/GADShape
   * @implements module:model/GADShape
   * @implements module:model/PointAltitudeUncertaintyAllOf
   * @param shape {module:model/SupportedGADShapes} 
   * @param point {module:model/GeographicalCoordinates} 
   * @param altitude {Number} Indicates value of altitude.
   * @param uncertaintyEllipse {module:model/UncertaintyEllipse} 
   * @param uncertaintyAltitude {Number} Indicates value of uncertainty.
   * @param confidence {Number} Indicates value of confidence.
   */
  function PointAltitudeUncertainty(shape, point, altitude, uncertaintyEllipse, uncertaintyAltitude, confidence) {
    _classCallCheck(this, PointAltitudeUncertainty);

    _GADShape["default"].initialize(this, shape);

    _PointAltitudeUncertaintyAllOf["default"].initialize(this, point, altitude, uncertaintyEllipse, uncertaintyAltitude, confidence);

    PointAltitudeUncertainty.initialize(this, shape, point, altitude, uncertaintyEllipse, uncertaintyAltitude, confidence);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PointAltitudeUncertainty, null, [{
    key: "initialize",
    value: function initialize(obj, shape, point, altitude, uncertaintyEllipse, uncertaintyAltitude, confidence) {
      obj['point'] = point;
      obj['altitude'] = altitude;
      obj['uncertaintyEllipse'] = uncertaintyEllipse;
      obj['uncertaintyAltitude'] = uncertaintyAltitude;
      obj['confidence'] = confidence;
    }
    /**
     * Constructs a <code>PointAltitudeUncertainty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PointAltitudeUncertainty} obj Optional instance to populate.
     * @return {module:model/PointAltitudeUncertainty} The populated <code>PointAltitudeUncertainty</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PointAltitudeUncertainty();

        _GADShape["default"].constructFromObject(data, obj);

        _GADShape["default"].constructFromObject(data, obj);

        _PointAltitudeUncertaintyAllOf["default"].constructFromObject(data, obj);

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

  return PointAltitudeUncertainty;
}();
/**
 * @member {module:model/GeographicalCoordinates} point
 */


PointAltitudeUncertainty.prototype['point'] = undefined;
/**
 * Indicates value of altitude.
 * @member {Number} altitude
 */

PointAltitudeUncertainty.prototype['altitude'] = undefined;
/**
 * @member {module:model/UncertaintyEllipse} uncertaintyEllipse
 */

PointAltitudeUncertainty.prototype['uncertaintyEllipse'] = undefined;
/**
 * Indicates value of uncertainty.
 * @member {Number} uncertaintyAltitude
 */

PointAltitudeUncertainty.prototype['uncertaintyAltitude'] = undefined;
/**
 * Indicates value of confidence.
 * @member {Number} confidence
 */

PointAltitudeUncertainty.prototype['confidence'] = undefined; // Implement GADShape interface:

/**
 * @member {module:model/SupportedGADShapes} shape
 */

_GADShape["default"].prototype['shape'] = undefined; // Implement PointAltitudeUncertaintyAllOf interface:

/**
 * @member {module:model/GeographicalCoordinates} point
 */

_PointAltitudeUncertaintyAllOf["default"].prototype['point'] = undefined;
/**
 * Indicates value of altitude.
 * @member {Number} altitude
 */

_PointAltitudeUncertaintyAllOf["default"].prototype['altitude'] = undefined;
/**
 * @member {module:model/UncertaintyEllipse} uncertaintyEllipse
 */

_PointAltitudeUncertaintyAllOf["default"].prototype['uncertaintyEllipse'] = undefined;
/**
 * Indicates value of uncertainty.
 * @member {Number} uncertaintyAltitude
 */

_PointAltitudeUncertaintyAllOf["default"].prototype['uncertaintyAltitude'] = undefined;
/**
 * Indicates value of confidence.
 * @member {Number} confidence
 */

_PointAltitudeUncertaintyAllOf["default"].prototype['confidence'] = undefined;
var _default = PointAltitudeUncertainty;
exports["default"] = _default;