"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VerticalDirection = _interopRequireDefault(require("./VerticalDirection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The HorizontalWithVerticalVelocityAndUncertainty model module.
 * @module model/HorizontalWithVerticalVelocityAndUncertainty
 * @version 1.1.0-alpha.4
 */
var HorizontalWithVerticalVelocityAndUncertainty = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HorizontalWithVerticalVelocityAndUncertainty</code>.
   * Horizontal and vertical velocity with speed uncertainty.
   * @alias module:model/HorizontalWithVerticalVelocityAndUncertainty
   * @param hSpeed {Number} Indicates value of horizontal speed.
   * @param bearing {Number} Indicates value of angle.
   * @param vSpeed {Number} Indicates value of vertical speed.
   * @param vDirection {module:model/VerticalDirection} 
   * @param hUncertainty {Number} Indicates value of speed uncertainty.
   * @param vUncertainty {Number} Indicates value of speed uncertainty.
   */
  function HorizontalWithVerticalVelocityAndUncertainty(hSpeed, bearing, vSpeed, vDirection, hUncertainty, vUncertainty) {
    _classCallCheck(this, HorizontalWithVerticalVelocityAndUncertainty);

    HorizontalWithVerticalVelocityAndUncertainty.initialize(this, hSpeed, bearing, vSpeed, vDirection, hUncertainty, vUncertainty);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HorizontalWithVerticalVelocityAndUncertainty, null, [{
    key: "initialize",
    value: function initialize(obj, hSpeed, bearing, vSpeed, vDirection, hUncertainty, vUncertainty) {
      obj['hSpeed'] = hSpeed;
      obj['bearing'] = bearing;
      obj['vSpeed'] = vSpeed;
      obj['vDirection'] = vDirection;
      obj['hUncertainty'] = hUncertainty;
      obj['vUncertainty'] = vUncertainty;
    }
    /**
     * Constructs a <code>HorizontalWithVerticalVelocityAndUncertainty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HorizontalWithVerticalVelocityAndUncertainty} obj Optional instance to populate.
     * @return {module:model/HorizontalWithVerticalVelocityAndUncertainty} The populated <code>HorizontalWithVerticalVelocityAndUncertainty</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HorizontalWithVerticalVelocityAndUncertainty();

        if (data.hasOwnProperty('hSpeed')) {
          obj['hSpeed'] = _ApiClient["default"].convertToType(data['hSpeed'], 'Number');
        }

        if (data.hasOwnProperty('bearing')) {
          obj['bearing'] = _ApiClient["default"].convertToType(data['bearing'], 'Number');
        }

        if (data.hasOwnProperty('vSpeed')) {
          obj['vSpeed'] = _ApiClient["default"].convertToType(data['vSpeed'], 'Number');
        }

        if (data.hasOwnProperty('vDirection')) {
          obj['vDirection'] = _VerticalDirection["default"].constructFromObject(data['vDirection']);
        }

        if (data.hasOwnProperty('hUncertainty')) {
          obj['hUncertainty'] = _ApiClient["default"].convertToType(data['hUncertainty'], 'Number');
        }

        if (data.hasOwnProperty('vUncertainty')) {
          obj['vUncertainty'] = _ApiClient["default"].convertToType(data['vUncertainty'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return HorizontalWithVerticalVelocityAndUncertainty;
}();
/**
 * Indicates value of horizontal speed.
 * @member {Number} hSpeed
 */


HorizontalWithVerticalVelocityAndUncertainty.prototype['hSpeed'] = undefined;
/**
 * Indicates value of angle.
 * @member {Number} bearing
 */

HorizontalWithVerticalVelocityAndUncertainty.prototype['bearing'] = undefined;
/**
 * Indicates value of vertical speed.
 * @member {Number} vSpeed
 */

HorizontalWithVerticalVelocityAndUncertainty.prototype['vSpeed'] = undefined;
/**
 * @member {module:model/VerticalDirection} vDirection
 */

HorizontalWithVerticalVelocityAndUncertainty.prototype['vDirection'] = undefined;
/**
 * Indicates value of speed uncertainty.
 * @member {Number} hUncertainty
 */

HorizontalWithVerticalVelocityAndUncertainty.prototype['hUncertainty'] = undefined;
/**
 * Indicates value of speed uncertainty.
 * @member {Number} vUncertainty
 */

HorizontalWithVerticalVelocityAndUncertainty.prototype['vUncertainty'] = undefined;
var _default = HorizontalWithVerticalVelocityAndUncertainty;
exports["default"] = _default;