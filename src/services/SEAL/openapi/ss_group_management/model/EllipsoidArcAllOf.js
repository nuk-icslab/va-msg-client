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
 * The EllipsoidArcAllOf model module.
 * @module model/EllipsoidArcAllOf
 * @version 1.1.0-alpha.4
 */
var EllipsoidArcAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EllipsoidArcAllOf</code>.
   * @alias module:model/EllipsoidArcAllOf
   * @param point {module:model/GeographicalCoordinates} 
   * @param innerRadius {Number} Indicates value of the inner radius.
   * @param uncertaintyRadius {Number} Indicates value of uncertainty.
   * @param offsetAngle {Number} Indicates value of angle.
   * @param includedAngle {Number} Indicates value of angle.
   * @param confidence {Number} Indicates value of confidence.
   */
  function EllipsoidArcAllOf(point, innerRadius, uncertaintyRadius, offsetAngle, includedAngle, confidence) {
    _classCallCheck(this, EllipsoidArcAllOf);

    EllipsoidArcAllOf.initialize(this, point, innerRadius, uncertaintyRadius, offsetAngle, includedAngle, confidence);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EllipsoidArcAllOf, null, [{
    key: "initialize",
    value: function initialize(obj, point, innerRadius, uncertaintyRadius, offsetAngle, includedAngle, confidence) {
      obj['point'] = point;
      obj['innerRadius'] = innerRadius;
      obj['uncertaintyRadius'] = uncertaintyRadius;
      obj['offsetAngle'] = offsetAngle;
      obj['includedAngle'] = includedAngle;
      obj['confidence'] = confidence;
    }
    /**
     * Constructs a <code>EllipsoidArcAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EllipsoidArcAllOf} obj Optional instance to populate.
     * @return {module:model/EllipsoidArcAllOf} The populated <code>EllipsoidArcAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EllipsoidArcAllOf();

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

  return EllipsoidArcAllOf;
}();
/**
 * @member {module:model/GeographicalCoordinates} point
 */


EllipsoidArcAllOf.prototype['point'] = undefined;
/**
 * Indicates value of the inner radius.
 * @member {Number} innerRadius
 */

EllipsoidArcAllOf.prototype['innerRadius'] = undefined;
/**
 * Indicates value of uncertainty.
 * @member {Number} uncertaintyRadius
 */

EllipsoidArcAllOf.prototype['uncertaintyRadius'] = undefined;
/**
 * Indicates value of angle.
 * @member {Number} offsetAngle
 */

EllipsoidArcAllOf.prototype['offsetAngle'] = undefined;
/**
 * Indicates value of angle.
 * @member {Number} includedAngle
 */

EllipsoidArcAllOf.prototype['includedAngle'] = undefined;
/**
 * Indicates value of confidence.
 * @member {Number} confidence
 */

EllipsoidArcAllOf.prototype['confidence'] = undefined;
var _default = EllipsoidArcAllOf;
exports["default"] = _default;