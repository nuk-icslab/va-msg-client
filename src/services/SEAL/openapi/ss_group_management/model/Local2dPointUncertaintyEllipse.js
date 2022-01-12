"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GADShape = _interopRequireDefault(require("./GADShape"));

var _Local2dPointUncertaintyEllipseAllOf = _interopRequireDefault(require("./Local2dPointUncertaintyEllipseAllOf"));

var _LocalOrigin = _interopRequireDefault(require("./LocalOrigin"));

var _RelativeCartesianLocation = _interopRequireDefault(require("./RelativeCartesianLocation"));

var _SupportedGADShapes = _interopRequireDefault(require("./SupportedGADShapes"));

var _UncertaintyEllipse = _interopRequireDefault(require("./UncertaintyEllipse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Local2dPointUncertaintyEllipse model module.
 * @module model/Local2dPointUncertaintyEllipse
 * @version 1.1.0-alpha.4
 */
var Local2dPointUncertaintyEllipse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Local2dPointUncertaintyEllipse</code>.
   * Local 2D point with uncertainty ellipse
   * @alias module:model/Local2dPointUncertaintyEllipse
   * @extends module:model/GADShape
   * @implements module:model/GADShape
   * @implements module:model/Local2dPointUncertaintyEllipseAllOf
   * @param shape {module:model/SupportedGADShapes} 
   * @param localOrigin {module:model/LocalOrigin} 
   * @param point {module:model/RelativeCartesianLocation} 
   * @param uncertaintyEllipse {module:model/UncertaintyEllipse} 
   * @param confidence {Number} Indicates value of confidence.
   */
  function Local2dPointUncertaintyEllipse(shape, localOrigin, point, uncertaintyEllipse, confidence) {
    _classCallCheck(this, Local2dPointUncertaintyEllipse);

    _GADShape["default"].initialize(this, shape);

    _Local2dPointUncertaintyEllipseAllOf["default"].initialize(this, localOrigin, point, uncertaintyEllipse, confidence);

    Local2dPointUncertaintyEllipse.initialize(this, shape, localOrigin, point, uncertaintyEllipse, confidence);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Local2dPointUncertaintyEllipse, null, [{
    key: "initialize",
    value: function initialize(obj, shape, localOrigin, point, uncertaintyEllipse, confidence) {
      obj['localOrigin'] = localOrigin;
      obj['point'] = point;
      obj['uncertaintyEllipse'] = uncertaintyEllipse;
      obj['confidence'] = confidence;
    }
    /**
     * Constructs a <code>Local2dPointUncertaintyEllipse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Local2dPointUncertaintyEllipse} obj Optional instance to populate.
     * @return {module:model/Local2dPointUncertaintyEllipse} The populated <code>Local2dPointUncertaintyEllipse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Local2dPointUncertaintyEllipse();

        _GADShape["default"].constructFromObject(data, obj);

        _GADShape["default"].constructFromObject(data, obj);

        _Local2dPointUncertaintyEllipseAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('localOrigin')) {
          obj['localOrigin'] = _LocalOrigin["default"].constructFromObject(data['localOrigin']);
        }

        if (data.hasOwnProperty('point')) {
          obj['point'] = _RelativeCartesianLocation["default"].constructFromObject(data['point']);
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

  return Local2dPointUncertaintyEllipse;
}();
/**
 * @member {module:model/LocalOrigin} localOrigin
 */


Local2dPointUncertaintyEllipse.prototype['localOrigin'] = undefined;
/**
 * @member {module:model/RelativeCartesianLocation} point
 */

Local2dPointUncertaintyEllipse.prototype['point'] = undefined;
/**
 * @member {module:model/UncertaintyEllipse} uncertaintyEllipse
 */

Local2dPointUncertaintyEllipse.prototype['uncertaintyEllipse'] = undefined;
/**
 * Indicates value of confidence.
 * @member {Number} confidence
 */

Local2dPointUncertaintyEllipse.prototype['confidence'] = undefined; // Implement GADShape interface:

/**
 * @member {module:model/SupportedGADShapes} shape
 */

_GADShape["default"].prototype['shape'] = undefined; // Implement Local2dPointUncertaintyEllipseAllOf interface:

/**
 * @member {module:model/LocalOrigin} localOrigin
 */

_Local2dPointUncertaintyEllipseAllOf["default"].prototype['localOrigin'] = undefined;
/**
 * @member {module:model/RelativeCartesianLocation} point
 */

_Local2dPointUncertaintyEllipseAllOf["default"].prototype['point'] = undefined;
/**
 * @member {module:model/UncertaintyEllipse} uncertaintyEllipse
 */

_Local2dPointUncertaintyEllipseAllOf["default"].prototype['uncertaintyEllipse'] = undefined;
/**
 * Indicates value of confidence.
 * @member {Number} confidence
 */

_Local2dPointUncertaintyEllipseAllOf["default"].prototype['confidence'] = undefined;
var _default = Local2dPointUncertaintyEllipse;
exports["default"] = _default;