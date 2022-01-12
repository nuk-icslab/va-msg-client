"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EllipsoidArc = _interopRequireDefault(require("./EllipsoidArc"));

var _GeographicalCoordinates = _interopRequireDefault(require("./GeographicalCoordinates"));

var _Point = _interopRequireDefault(require("./Point"));

var _PointAltitude = _interopRequireDefault(require("./PointAltitude"));

var _PointAltitudeUncertainty = _interopRequireDefault(require("./PointAltitudeUncertainty"));

var _PointUncertaintyCircle = _interopRequireDefault(require("./PointUncertaintyCircle"));

var _PointUncertaintyEllipse = _interopRequireDefault(require("./PointUncertaintyEllipse"));

var _Polygon = _interopRequireDefault(require("./Polygon"));

var _SupportedGADShapes = _interopRequireDefault(require("./SupportedGADShapes"));

var _UncertaintyEllipse = _interopRequireDefault(require("./UncertaintyEllipse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GeographicArea model module.
 * @module model/GeographicArea
 * @version 1.1.0-alpha.4
 */
var GeographicArea = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GeographicArea</code>.
   * Geographic area specified by different shape.
   * @alias module:model/GeographicArea
   * @implements module:model/Point
   * @implements module:model/PointUncertaintyCircle
   * @implements module:model/PointUncertaintyEllipse
   * @implements module:model/Polygon
   * @implements module:model/PointAltitude
   * @implements module:model/PointAltitudeUncertainty
   * @implements module:model/EllipsoidArc
   * @param shape {module:model/SupportedGADShapes} 
   * @param point {module:model/GeographicalCoordinates} 
   * @param uncertainty {Number} Indicates value of uncertainty.
   * @param uncertaintyEllipse {module:model/UncertaintyEllipse} 
   * @param confidence {Number} Indicates value of confidence.
   * @param pointList {Array.<module:model/GeographicalCoordinates>} List of points.
   * @param altitude {Number} Indicates value of altitude.
   * @param uncertaintyAltitude {Number} Indicates value of uncertainty.
   * @param innerRadius {Number} Indicates value of the inner radius.
   * @param uncertaintyRadius {Number} Indicates value of uncertainty.
   * @param offsetAngle {Number} Indicates value of angle.
   * @param includedAngle {Number} Indicates value of angle.
   */
  function GeographicArea(shape, point, uncertainty, uncertaintyEllipse, confidence, pointList, altitude, uncertaintyAltitude, innerRadius, uncertaintyRadius, offsetAngle, includedAngle) {
    _classCallCheck(this, GeographicArea);

    _Point["default"].initialize(this, shape, point);

    _PointUncertaintyCircle["default"].initialize(this, shape, point, uncertainty);

    _PointUncertaintyEllipse["default"].initialize(this, shape, point, uncertaintyEllipse, confidence);

    _Polygon["default"].initialize(this, shape, pointList);

    _PointAltitude["default"].initialize(this, shape, point, altitude);

    _PointAltitudeUncertainty["default"].initialize(this, shape, point, altitude, uncertaintyEllipse, uncertaintyAltitude, confidence);

    _EllipsoidArc["default"].initialize(this, shape, point, innerRadius, uncertaintyRadius, offsetAngle, includedAngle, confidence);

    GeographicArea.initialize(this, shape, point, uncertainty, uncertaintyEllipse, confidence, pointList, altitude, uncertaintyAltitude, innerRadius, uncertaintyRadius, offsetAngle, includedAngle);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GeographicArea, null, [{
    key: "initialize",
    value: function initialize(obj, shape, point, uncertainty, uncertaintyEllipse, confidence, pointList, altitude, uncertaintyAltitude, innerRadius, uncertaintyRadius, offsetAngle, includedAngle) {
      obj['shape'] = shape;
      obj['point'] = point;
      obj['uncertainty'] = uncertainty;
      obj['uncertaintyEllipse'] = uncertaintyEllipse;
      obj['confidence'] = confidence;
      obj['pointList'] = pointList;
      obj['altitude'] = altitude;
      obj['uncertaintyAltitude'] = uncertaintyAltitude;
      obj['innerRadius'] = innerRadius;
      obj['uncertaintyRadius'] = uncertaintyRadius;
      obj['offsetAngle'] = offsetAngle;
      obj['includedAngle'] = includedAngle;
    }
    /**
     * Constructs a <code>GeographicArea</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GeographicArea} obj Optional instance to populate.
     * @return {module:model/GeographicArea} The populated <code>GeographicArea</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GeographicArea();

        _Point["default"].constructFromObject(data, obj);

        _PointUncertaintyCircle["default"].constructFromObject(data, obj);

        _PointUncertaintyEllipse["default"].constructFromObject(data, obj);

        _Polygon["default"].constructFromObject(data, obj);

        _PointAltitude["default"].constructFromObject(data, obj);

        _PointAltitudeUncertainty["default"].constructFromObject(data, obj);

        _EllipsoidArc["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('shape')) {
          obj['shape'] = _SupportedGADShapes["default"].constructFromObject(data['shape']);
        }

        if (data.hasOwnProperty('point')) {
          obj['point'] = _GeographicalCoordinates["default"].constructFromObject(data['point']);
        }

        if (data.hasOwnProperty('uncertainty')) {
          obj['uncertainty'] = _ApiClient["default"].convertToType(data['uncertainty'], 'Number');
        }

        if (data.hasOwnProperty('uncertaintyEllipse')) {
          obj['uncertaintyEllipse'] = _UncertaintyEllipse["default"].constructFromObject(data['uncertaintyEllipse']);
        }

        if (data.hasOwnProperty('confidence')) {
          obj['confidence'] = _ApiClient["default"].convertToType(data['confidence'], 'Number');
        }

        if (data.hasOwnProperty('pointList')) {
          obj['pointList'] = _ApiClient["default"].convertToType(data['pointList'], [_GeographicalCoordinates["default"]]);
        }

        if (data.hasOwnProperty('altitude')) {
          obj['altitude'] = _ApiClient["default"].convertToType(data['altitude'], 'Number');
        }

        if (data.hasOwnProperty('uncertaintyAltitude')) {
          obj['uncertaintyAltitude'] = _ApiClient["default"].convertToType(data['uncertaintyAltitude'], 'Number');
        }

        if (data.hasOwnProperty('innerRadius')) {
          obj['innerRadius'] = _ApiClient["default"].convertToType(data['innerRadius'], 'Number');
        }

        if (data.hasOwnProperty('uncertaintyRadius')) {
          obj['uncertaintyRadius'] = _ApiClient["default"].convertToType(data['uncertaintyRadius'], 'Number');
        }

        if (data.hasOwnProperty('offsetAngle')) {
          obj['offsetAngle'] = _ApiClient["default"].convertToType(data['offsetAngle'], 'Number');
        }

        if (data.hasOwnProperty('includedAngle')) {
          obj['includedAngle'] = _ApiClient["default"].convertToType(data['includedAngle'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return GeographicArea;
}();
/**
 * @member {module:model/SupportedGADShapes} shape
 */


GeographicArea.prototype['shape'] = undefined;
/**
 * @member {module:model/GeographicalCoordinates} point
 */

GeographicArea.prototype['point'] = undefined;
/**
 * Indicates value of uncertainty.
 * @member {Number} uncertainty
 */

GeographicArea.prototype['uncertainty'] = undefined;
/**
 * @member {module:model/UncertaintyEllipse} uncertaintyEllipse
 */

GeographicArea.prototype['uncertaintyEllipse'] = undefined;
/**
 * Indicates value of confidence.
 * @member {Number} confidence
 */

GeographicArea.prototype['confidence'] = undefined;
/**
 * List of points.
 * @member {Array.<module:model/GeographicalCoordinates>} pointList
 */

GeographicArea.prototype['pointList'] = undefined;
/**
 * Indicates value of altitude.
 * @member {Number} altitude
 */

GeographicArea.prototype['altitude'] = undefined;
/**
 * Indicates value of uncertainty.
 * @member {Number} uncertaintyAltitude
 */

GeographicArea.prototype['uncertaintyAltitude'] = undefined;
/**
 * Indicates value of the inner radius.
 * @member {Number} innerRadius
 */

GeographicArea.prototype['innerRadius'] = undefined;
/**
 * Indicates value of uncertainty.
 * @member {Number} uncertaintyRadius
 */

GeographicArea.prototype['uncertaintyRadius'] = undefined;
/**
 * Indicates value of angle.
 * @member {Number} offsetAngle
 */

GeographicArea.prototype['offsetAngle'] = undefined;
/**
 * Indicates value of angle.
 * @member {Number} includedAngle
 */

GeographicArea.prototype['includedAngle'] = undefined; // Implement Point interface:

/**
 * @member {module:model/SupportedGADShapes} shape
 */

_Point["default"].prototype['shape'] = undefined;
/**
 * @member {module:model/GeographicalCoordinates} point
 */

_Point["default"].prototype['point'] = undefined; // Implement PointUncertaintyCircle interface:

/**
 * @member {module:model/SupportedGADShapes} shape
 */

_PointUncertaintyCircle["default"].prototype['shape'] = undefined;
/**
 * @member {module:model/GeographicalCoordinates} point
 */

_PointUncertaintyCircle["default"].prototype['point'] = undefined;
/**
 * Indicates value of uncertainty.
 * @member {Number} uncertainty
 */

_PointUncertaintyCircle["default"].prototype['uncertainty'] = undefined; // Implement PointUncertaintyEllipse interface:

/**
 * @member {module:model/SupportedGADShapes} shape
 */

_PointUncertaintyEllipse["default"].prototype['shape'] = undefined;
/**
 * @member {module:model/GeographicalCoordinates} point
 */

_PointUncertaintyEllipse["default"].prototype['point'] = undefined;
/**
 * @member {module:model/UncertaintyEllipse} uncertaintyEllipse
 */

_PointUncertaintyEllipse["default"].prototype['uncertaintyEllipse'] = undefined;
/**
 * Indicates value of confidence.
 * @member {Number} confidence
 */

_PointUncertaintyEllipse["default"].prototype['confidence'] = undefined; // Implement Polygon interface:

/**
 * @member {module:model/SupportedGADShapes} shape
 */

_Polygon["default"].prototype['shape'] = undefined;
/**
 * List of points.
 * @member {Array.<module:model/GeographicalCoordinates>} pointList
 */

_Polygon["default"].prototype['pointList'] = undefined; // Implement PointAltitude interface:

/**
 * @member {module:model/SupportedGADShapes} shape
 */

_PointAltitude["default"].prototype['shape'] = undefined;
/**
 * @member {module:model/GeographicalCoordinates} point
 */

_PointAltitude["default"].prototype['point'] = undefined;
/**
 * Indicates value of altitude.
 * @member {Number} altitude
 */

_PointAltitude["default"].prototype['altitude'] = undefined; // Implement PointAltitudeUncertainty interface:

/**
 * @member {module:model/SupportedGADShapes} shape
 */

_PointAltitudeUncertainty["default"].prototype['shape'] = undefined;
/**
 * @member {module:model/GeographicalCoordinates} point
 */

_PointAltitudeUncertainty["default"].prototype['point'] = undefined;
/**
 * Indicates value of altitude.
 * @member {Number} altitude
 */

_PointAltitudeUncertainty["default"].prototype['altitude'] = undefined;
/**
 * @member {module:model/UncertaintyEllipse} uncertaintyEllipse
 */

_PointAltitudeUncertainty["default"].prototype['uncertaintyEllipse'] = undefined;
/**
 * Indicates value of uncertainty.
 * @member {Number} uncertaintyAltitude
 */

_PointAltitudeUncertainty["default"].prototype['uncertaintyAltitude'] = undefined;
/**
 * Indicates value of confidence.
 * @member {Number} confidence
 */

_PointAltitudeUncertainty["default"].prototype['confidence'] = undefined; // Implement EllipsoidArc interface:

/**
 * @member {module:model/SupportedGADShapes} shape
 */

_EllipsoidArc["default"].prototype['shape'] = undefined;
/**
 * @member {module:model/GeographicalCoordinates} point
 */

_EllipsoidArc["default"].prototype['point'] = undefined;
/**
 * Indicates value of the inner radius.
 * @member {Number} innerRadius
 */

_EllipsoidArc["default"].prototype['innerRadius'] = undefined;
/**
 * Indicates value of uncertainty.
 * @member {Number} uncertaintyRadius
 */

_EllipsoidArc["default"].prototype['uncertaintyRadius'] = undefined;
/**
 * Indicates value of angle.
 * @member {Number} offsetAngle
 */

_EllipsoidArc["default"].prototype['offsetAngle'] = undefined;
/**
 * Indicates value of angle.
 * @member {Number} includedAngle
 */

_EllipsoidArc["default"].prototype['includedAngle'] = undefined;
/**
 * Indicates value of confidence.
 * @member {Number} confidence
 */

_EllipsoidArc["default"].prototype['confidence'] = undefined;
var _default = GeographicArea;
exports["default"] = _default;