"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GADShape = _interopRequireDefault(require("./GADShape"));

var _GeographicalCoordinates = _interopRequireDefault(require("./GeographicalCoordinates"));

var _PointUncertaintyEllipseAllOf = _interopRequireDefault(require("./PointUncertaintyEllipseAllOf"));

var _SupportedGADShapes = _interopRequireDefault(require("./SupportedGADShapes"));

var _UncertaintyEllipse = _interopRequireDefault(require("./UncertaintyEllipse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PointUncertaintyEllipse model module.
 * @module model/PointUncertaintyEllipse
 * @version 1.1.0-alpha.4
 */
var PointUncertaintyEllipse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PointUncertaintyEllipse</code>.
   * Ellipsoid point with uncertainty ellipse.
   * @alias module:model/PointUncertaintyEllipse
   * @extends module:model/GADShape
   * @implements module:model/GADShape
   * @implements module:model/PointUncertaintyEllipseAllOf
   * @param shape {module:model/SupportedGADShapes} 
   * @param point {module:model/GeographicalCoordinates} 
   * @param uncertaintyEllipse {module:model/UncertaintyEllipse} 
   * @param confidence {Number} Indicates value of confidence.
   */
  function PointUncertaintyEllipse(shape, point, uncertaintyEllipse, confidence) {
    _classCallCheck(this, PointUncertaintyEllipse);

    _GADShape["default"].initialize(this, shape);

    _PointUncertaintyEllipseAllOf["default"].initialize(this, point, uncertaintyEllipse, confidence);

    PointUncertaintyEllipse.initialize(this, shape, point, uncertaintyEllipse, confidence);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PointUncertaintyEllipse, null, [{
    key: "initialize",
    value: function initialize(obj, shape, point, uncertaintyEllipse, confidence) {
      obj['point'] = point;
      obj['uncertaintyEllipse'] = uncertaintyEllipse;
      obj['confidence'] = confidence;
    }
    /**
     * Constructs a <code>PointUncertaintyEllipse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PointUncertaintyEllipse} obj Optional instance to populate.
     * @return {module:model/PointUncertaintyEllipse} The populated <code>PointUncertaintyEllipse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PointUncertaintyEllipse();

        _GADShape["default"].constructFromObject(data, obj);

        _GADShape["default"].constructFromObject(data, obj);

        _PointUncertaintyEllipseAllOf["default"].constructFromObject(data, obj);

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

  return PointUncertaintyEllipse;
}();
/**
 * @member {module:model/GeographicalCoordinates} point
 */


PointUncertaintyEllipse.prototype['point'] = undefined;
/**
 * @member {module:model/UncertaintyEllipse} uncertaintyEllipse
 */

PointUncertaintyEllipse.prototype['uncertaintyEllipse'] = undefined;
/**
 * Indicates value of confidence.
 * @member {Number} confidence
 */

PointUncertaintyEllipse.prototype['confidence'] = undefined; // Implement GADShape interface:

/**
 * @member {module:model/SupportedGADShapes} shape
 */

_GADShape["default"].prototype['shape'] = undefined; // Implement PointUncertaintyEllipseAllOf interface:

/**
 * @member {module:model/GeographicalCoordinates} point
 */

_PointUncertaintyEllipseAllOf["default"].prototype['point'] = undefined;
/**
 * @member {module:model/UncertaintyEllipse} uncertaintyEllipse
 */

_PointUncertaintyEllipseAllOf["default"].prototype['uncertaintyEllipse'] = undefined;
/**
 * Indicates value of confidence.
 * @member {Number} confidence
 */

_PointUncertaintyEllipseAllOf["default"].prototype['confidence'] = undefined;
var _default = PointUncertaintyEllipse;
exports["default"] = _default;