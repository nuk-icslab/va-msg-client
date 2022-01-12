"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LocalOrigin = _interopRequireDefault(require("./LocalOrigin"));

var _RelativeCartesianLocation = _interopRequireDefault(require("./RelativeCartesianLocation"));

var _UncertaintyEllipse = _interopRequireDefault(require("./UncertaintyEllipse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Local2dPointUncertaintyEllipseAllOf model module.
 * @module model/Local2dPointUncertaintyEllipseAllOf
 * @version 1.1.0-alpha.4
 */
var Local2dPointUncertaintyEllipseAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Local2dPointUncertaintyEllipseAllOf</code>.
   * @alias module:model/Local2dPointUncertaintyEllipseAllOf
   * @param localOrigin {module:model/LocalOrigin} 
   * @param point {module:model/RelativeCartesianLocation} 
   * @param uncertaintyEllipse {module:model/UncertaintyEllipse} 
   * @param confidence {Number} Indicates value of confidence.
   */
  function Local2dPointUncertaintyEllipseAllOf(localOrigin, point, uncertaintyEllipse, confidence) {
    _classCallCheck(this, Local2dPointUncertaintyEllipseAllOf);

    Local2dPointUncertaintyEllipseAllOf.initialize(this, localOrigin, point, uncertaintyEllipse, confidence);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Local2dPointUncertaintyEllipseAllOf, null, [{
    key: "initialize",
    value: function initialize(obj, localOrigin, point, uncertaintyEllipse, confidence) {
      obj['localOrigin'] = localOrigin;
      obj['point'] = point;
      obj['uncertaintyEllipse'] = uncertaintyEllipse;
      obj['confidence'] = confidence;
    }
    /**
     * Constructs a <code>Local2dPointUncertaintyEllipseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Local2dPointUncertaintyEllipseAllOf} obj Optional instance to populate.
     * @return {module:model/Local2dPointUncertaintyEllipseAllOf} The populated <code>Local2dPointUncertaintyEllipseAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Local2dPointUncertaintyEllipseAllOf();

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

  return Local2dPointUncertaintyEllipseAllOf;
}();
/**
 * @member {module:model/LocalOrigin} localOrigin
 */


Local2dPointUncertaintyEllipseAllOf.prototype['localOrigin'] = undefined;
/**
 * @member {module:model/RelativeCartesianLocation} point
 */

Local2dPointUncertaintyEllipseAllOf.prototype['point'] = undefined;
/**
 * @member {module:model/UncertaintyEllipse} uncertaintyEllipse
 */

Local2dPointUncertaintyEllipseAllOf.prototype['uncertaintyEllipse'] = undefined;
/**
 * Indicates value of confidence.
 * @member {Number} confidence
 */

Local2dPointUncertaintyEllipseAllOf.prototype['confidence'] = undefined;
var _default = Local2dPointUncertaintyEllipseAllOf;
exports["default"] = _default;