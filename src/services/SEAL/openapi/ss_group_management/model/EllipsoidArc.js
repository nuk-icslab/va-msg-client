"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EllipsoidArcAllOf = _interopRequireDefault(require("./EllipsoidArcAllOf"));

var _GADShape = _interopRequireDefault(require("./GADShape"));

var _GeographicalCoordinates = _interopRequireDefault(require("./GeographicalCoordinates"));

var _SupportedGADShapes = _interopRequireDefault(require("./SupportedGADShapes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The EllipsoidArc model module.
 * @module model/EllipsoidArc
 * @version 1.1.0-alpha.4
 */
var EllipsoidArc = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EllipsoidArc</code>.
   * Ellipsoid Arc.
   * @alias module:model/EllipsoidArc
   * @extends module:model/GADShape
   * @implements module:model/GADShape
   * @implements module:model/EllipsoidArcAllOf
   * @param shape {module:model/SupportedGADShapes} 
   * @param point {module:model/GeographicalCoordinates} 
   * @param innerRadius {Number} Indicates value of the inner radius.
   * @param uncertaintyRadius {Number} Indicates value of uncertainty.
   * @param offsetAngle {Number} Indicates value of angle.
   * @param includedAngle {Number} Indicates value of angle.
   * @param confidence {Number} Indicates value of confidence.
   */
  function EllipsoidArc(shape, point, innerRadius, uncertaintyRadius, offsetAngle, includedAngle, confidence) {
    _classCallCheck(this, EllipsoidArc);

    _GADShape["default"].initialize(this, shape);

    _EllipsoidArcAllOf["default"].initialize(this, point, innerRadius, uncertaintyRadius, offsetAngle, includedAngle, confidence);

    EllipsoidArc.initialize(this, shape, point, innerRadius, uncertaintyRadius, offsetAngle, includedAngle, confidence);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EllipsoidArc, null, [{
    key: "initialize",
    value: function initialize(obj, shape, point, innerRadius, uncertaintyRadius, offsetAngle, includedAngle, confidence) {
      obj['point'] = point;
      obj['innerRadius'] = innerRadius;
      obj['uncertaintyRadius'] = uncertaintyRadius;
      obj['offsetAngle'] = offsetAngle;
      obj['includedAngle'] = includedAngle;
      obj['confidence'] = confidence;
    }
    /**
     * Constructs a <code>EllipsoidArc</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EllipsoidArc} obj Optional instance to populate.
     * @return {module:model/EllipsoidArc} The populated <code>EllipsoidArc</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EllipsoidArc();

        _GADShape["default"].constructFromObject(data, obj);

        _GADShape["default"].constructFromObject(data, obj);

        _EllipsoidArcAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('point')) {
          obj['point'] = _GeographicalCoordinates["default"].constructFromObject(data['point']);
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

        if (data.hasOwnProperty('confidence')) {
          obj['confidence'] = _ApiClient["default"].convertToType(data['confidence'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return EllipsoidArc;
}();
/**
 * @member {module:model/GeographicalCoordinates} point
 */


EllipsoidArc.prototype['point'] = undefined;
/**
 * Indicates value of the inner radius.
 * @member {Number} innerRadius
 */

EllipsoidArc.prototype['innerRadius'] = undefined;
/**
 * Indicates value of uncertainty.
 * @member {Number} uncertaintyRadius
 */

EllipsoidArc.prototype['uncertaintyRadius'] = undefined;
/**
 * Indicates value of angle.
 * @member {Number} offsetAngle
 */

EllipsoidArc.prototype['offsetAngle'] = undefined;
/**
 * Indicates value of angle.
 * @member {Number} includedAngle
 */

EllipsoidArc.prototype['includedAngle'] = undefined;
/**
 * Indicates value of confidence.
 * @member {Number} confidence
 */

EllipsoidArc.prototype['confidence'] = undefined; // Implement GADShape interface:

/**
 * @member {module:model/SupportedGADShapes} shape
 */

_GADShape["default"].prototype['shape'] = undefined; // Implement EllipsoidArcAllOf interface:

/**
 * @member {module:model/GeographicalCoordinates} point
 */

_EllipsoidArcAllOf["default"].prototype['point'] = undefined;
/**
 * Indicates value of the inner radius.
 * @member {Number} innerRadius
 */

_EllipsoidArcAllOf["default"].prototype['innerRadius'] = undefined;
/**
 * Indicates value of uncertainty.
 * @member {Number} uncertaintyRadius
 */

_EllipsoidArcAllOf["default"].prototype['uncertaintyRadius'] = undefined;
/**
 * Indicates value of angle.
 * @member {Number} offsetAngle
 */

_EllipsoidArcAllOf["default"].prototype['offsetAngle'] = undefined;
/**
 * Indicates value of angle.
 * @member {Number} includedAngle
 */

_EllipsoidArcAllOf["default"].prototype['includedAngle'] = undefined;
/**
 * Indicates value of confidence.
 * @member {Number} confidence
 */

_EllipsoidArcAllOf["default"].prototype['confidence'] = undefined;
var _default = EllipsoidArc;
exports["default"] = _default;