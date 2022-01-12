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
 * The PointUncertaintyEllipseAllOf model module.
 * @module model/PointUncertaintyEllipseAllOf
 * @version 1.1.0-alpha.4
 */
var PointUncertaintyEllipseAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PointUncertaintyEllipseAllOf</code>.
   * @alias module:model/PointUncertaintyEllipseAllOf
   * @param point {module:model/GeographicalCoordinates} 
   * @param uncertaintyEllipse {module:model/UncertaintyEllipse} 
   * @param confidence {Number} Indicates value of confidence.
   */
  function PointUncertaintyEllipseAllOf(point, uncertaintyEllipse, confidence) {
    _classCallCheck(this, PointUncertaintyEllipseAllOf);

    PointUncertaintyEllipseAllOf.initialize(this, point, uncertaintyEllipse, confidence);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PointUncertaintyEllipseAllOf, null, [{
    key: "initialize",
    value: function initialize(obj, point, uncertaintyEllipse, confidence) {
      obj['point'] = point;
      obj['uncertaintyEllipse'] = uncertaintyEllipse;
      obj['confidence'] = confidence;
    }
    /**
     * Constructs a <code>PointUncertaintyEllipseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PointUncertaintyEllipseAllOf} obj Optional instance to populate.
     * @return {module:model/PointUncertaintyEllipseAllOf} The populated <code>PointUncertaintyEllipseAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PointUncertaintyEllipseAllOf();

        if (data.hasOwnProperty('point')) {
          obj['point'] = _GeographicalCoordinates["default"].constructFromObject(data['point']);
        }

        if (data.hasOwnProperty('uncertaintyEllipse')) {
          obj['uncertaintyEllipse'] = _UncertaintyEllipse["default"].constructFromObject(data['uncertaintyEllipse']);
        }

        if (data.hasOwnProperty('confidence')) {
          obj['confidence'] = _ApiClient["default"].convertToType(data['confidence'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return PointUncertaintyEllipseAllOf;
}();
/**
 * @member {module:model/GeographicalCoordinates} point
 */


PointUncertaintyEllipseAllOf.prototype['point'] = undefined;
/**
 * @member {module:model/UncertaintyEllipse} uncertaintyEllipse
 */

PointUncertaintyEllipseAllOf.prototype['uncertaintyEllipse'] = undefined;
/**
 * Indicates value of confidence.
 * @member {Number} confidence
 */

PointUncertaintyEllipseAllOf.prototype['confidence'] = undefined;
var _default = PointUncertaintyEllipseAllOf;
exports["default"] = _default;