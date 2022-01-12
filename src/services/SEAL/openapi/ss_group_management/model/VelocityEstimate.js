"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _HorizontalVelocity = _interopRequireDefault(require("./HorizontalVelocity"));

var _HorizontalVelocityWithUncertainty = _interopRequireDefault(require("./HorizontalVelocityWithUncertainty"));

var _HorizontalWithVerticalVelocity = _interopRequireDefault(require("./HorizontalWithVerticalVelocity"));

var _HorizontalWithVerticalVelocityAndUncertainty = _interopRequireDefault(require("./HorizontalWithVerticalVelocityAndUncertainty"));

var _VerticalDirection = _interopRequireDefault(require("./VerticalDirection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The VelocityEstimate model module.
 * @module model/VelocityEstimate
 * @version 1.1.0-alpha.4
 */
var VelocityEstimate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VelocityEstimate</code>.
   * Velocity estimate.
   * @alias module:model/VelocityEstimate
   * @implements module:model/HorizontalVelocity
   * @implements module:model/HorizontalWithVerticalVelocity
   * @implements module:model/HorizontalVelocityWithUncertainty
   * @implements module:model/HorizontalWithVerticalVelocityAndUncertainty
   * @param hSpeed {Number} Indicates value of horizontal speed.
   * @param bearing {Number} Indicates value of angle.
   * @param vSpeed {Number} Indicates value of vertical speed.
   * @param vDirection {module:model/VerticalDirection} 
   * @param hUncertainty {Number} Indicates value of speed uncertainty.
   * @param vUncertainty {Number} Indicates value of speed uncertainty.
   */
  function VelocityEstimate(hSpeed, bearing, vSpeed, vDirection, hUncertainty, vUncertainty) {
    _classCallCheck(this, VelocityEstimate);

    _HorizontalVelocity["default"].initialize(this, hSpeed, bearing);

    _HorizontalWithVerticalVelocity["default"].initialize(this, hSpeed, bearing, vSpeed, vDirection);

    _HorizontalVelocityWithUncertainty["default"].initialize(this, hSpeed, bearing, hUncertainty);

    _HorizontalWithVerticalVelocityAndUncertainty["default"].initialize(this, hSpeed, bearing, vSpeed, vDirection, hUncertainty, vUncertainty);

    VelocityEstimate.initialize(this, hSpeed, bearing, vSpeed, vDirection, hUncertainty, vUncertainty);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VelocityEstimate, null, [{
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
     * Constructs a <code>VelocityEstimate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VelocityEstimate} obj Optional instance to populate.
     * @return {module:model/VelocityEstimate} The populated <code>VelocityEstimate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VelocityEstimate();

        _HorizontalVelocity["default"].constructFromObject(data, obj);

        _HorizontalWithVerticalVelocity["default"].constructFromObject(data, obj);

        _HorizontalVelocityWithUncertainty["default"].constructFromObject(data, obj);

        _HorizontalWithVerticalVelocityAndUncertainty["default"].constructFromObject(data, obj);

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

  return VelocityEstimate;
}();
/**
 * Indicates value of horizontal speed.
 * @member {Number} hSpeed
 */


VelocityEstimate.prototype['hSpeed'] = undefined;
/**
 * Indicates value of angle.
 * @member {Number} bearing
 */

VelocityEstimate.prototype['bearing'] = undefined;
/**
 * Indicates value of vertical speed.
 * @member {Number} vSpeed
 */

VelocityEstimate.prototype['vSpeed'] = undefined;
/**
 * @member {module:model/VerticalDirection} vDirection
 */

VelocityEstimate.prototype['vDirection'] = undefined;
/**
 * Indicates value of speed uncertainty.
 * @member {Number} hUncertainty
 */

VelocityEstimate.prototype['hUncertainty'] = undefined;
/**
 * Indicates value of speed uncertainty.
 * @member {Number} vUncertainty
 */

VelocityEstimate.prototype['vUncertainty'] = undefined; // Implement HorizontalVelocity interface:

/**
 * Indicates value of horizontal speed.
 * @member {Number} hSpeed
 */

_HorizontalVelocity["default"].prototype['hSpeed'] = undefined;
/**
 * Indicates value of angle.
 * @member {Number} bearing
 */

_HorizontalVelocity["default"].prototype['bearing'] = undefined; // Implement HorizontalWithVerticalVelocity interface:

/**
 * Indicates value of horizontal speed.
 * @member {Number} hSpeed
 */

_HorizontalWithVerticalVelocity["default"].prototype['hSpeed'] = undefined;
/**
 * Indicates value of angle.
 * @member {Number} bearing
 */

_HorizontalWithVerticalVelocity["default"].prototype['bearing'] = undefined;
/**
 * Indicates value of vertical speed.
 * @member {Number} vSpeed
 */

_HorizontalWithVerticalVelocity["default"].prototype['vSpeed'] = undefined;
/**
 * @member {module:model/VerticalDirection} vDirection
 */

_HorizontalWithVerticalVelocity["default"].prototype['vDirection'] = undefined; // Implement HorizontalVelocityWithUncertainty interface:

/**
 * Indicates value of horizontal speed.
 * @member {Number} hSpeed
 */

_HorizontalVelocityWithUncertainty["default"].prototype['hSpeed'] = undefined;
/**
 * Indicates value of angle.
 * @member {Number} bearing
 */

_HorizontalVelocityWithUncertainty["default"].prototype['bearing'] = undefined;
/**
 * Indicates value of speed uncertainty.
 * @member {Number} hUncertainty
 */

_HorizontalVelocityWithUncertainty["default"].prototype['hUncertainty'] = undefined; // Implement HorizontalWithVerticalVelocityAndUncertainty interface:

/**
 * Indicates value of horizontal speed.
 * @member {Number} hSpeed
 */

_HorizontalWithVerticalVelocityAndUncertainty["default"].prototype['hSpeed'] = undefined;
/**
 * Indicates value of angle.
 * @member {Number} bearing
 */

_HorizontalWithVerticalVelocityAndUncertainty["default"].prototype['bearing'] = undefined;
/**
 * Indicates value of vertical speed.
 * @member {Number} vSpeed
 */

_HorizontalWithVerticalVelocityAndUncertainty["default"].prototype['vSpeed'] = undefined;
/**
 * @member {module:model/VerticalDirection} vDirection
 */

_HorizontalWithVerticalVelocityAndUncertainty["default"].prototype['vDirection'] = undefined;
/**
 * Indicates value of speed uncertainty.
 * @member {Number} hUncertainty
 */

_HorizontalWithVerticalVelocityAndUncertainty["default"].prototype['hUncertainty'] = undefined;
/**
 * Indicates value of speed uncertainty.
 * @member {Number} vUncertainty
 */

_HorizontalWithVerticalVelocityAndUncertainty["default"].prototype['vUncertainty'] = undefined;
var _default = VelocityEstimate;
exports["default"] = _default;