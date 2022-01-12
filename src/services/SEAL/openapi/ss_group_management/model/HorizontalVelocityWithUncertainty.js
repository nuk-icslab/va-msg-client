"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The HorizontalVelocityWithUncertainty model module.
 * @module model/HorizontalVelocityWithUncertainty
 * @version 1.1.0-alpha.4
 */
var HorizontalVelocityWithUncertainty = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HorizontalVelocityWithUncertainty</code>.
   * Horizontal velocity with speed uncertainty.
   * @alias module:model/HorizontalVelocityWithUncertainty
   * @param hSpeed {Number} Indicates value of horizontal speed.
   * @param bearing {Number} Indicates value of angle.
   * @param hUncertainty {Number} Indicates value of speed uncertainty.
   */
  function HorizontalVelocityWithUncertainty(hSpeed, bearing, hUncertainty) {
    _classCallCheck(this, HorizontalVelocityWithUncertainty);

    HorizontalVelocityWithUncertainty.initialize(this, hSpeed, bearing, hUncertainty);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HorizontalVelocityWithUncertainty, null, [{
    key: "initialize",
    value: function initialize(obj, hSpeed, bearing, hUncertainty) {
      obj['hSpeed'] = hSpeed;
      obj['bearing'] = bearing;
      obj['hUncertainty'] = hUncertainty;
    }
    /**
     * Constructs a <code>HorizontalVelocityWithUncertainty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HorizontalVelocityWithUncertainty} obj Optional instance to populate.
     * @return {module:model/HorizontalVelocityWithUncertainty} The populated <code>HorizontalVelocityWithUncertainty</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HorizontalVelocityWithUncertainty();

        if (data.hasOwnProperty('hSpeed')) {
          obj['hSpeed'] = _ApiClient["default"].convertToType(data['hSpeed'], 'Number');
        }

        if (data.hasOwnProperty('bearing')) {
          obj['bearing'] = _ApiClient["default"].convertToType(data['bearing'], 'Number');
        }

        if (data.hasOwnProperty('hUncertainty')) {
          obj['hUncertainty'] = _ApiClient["default"].convertToType(data['hUncertainty'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return HorizontalVelocityWithUncertainty;
}();
/**
 * Indicates value of horizontal speed.
 * @member {Number} hSpeed
 */


HorizontalVelocityWithUncertainty.prototype['hSpeed'] = undefined;
/**
 * Indicates value of angle.
 * @member {Number} bearing
 */

HorizontalVelocityWithUncertainty.prototype['bearing'] = undefined;
/**
 * Indicates value of speed uncertainty.
 * @member {Number} hUncertainty
 */

HorizontalVelocityWithUncertainty.prototype['hUncertainty'] = undefined;
var _default = HorizontalVelocityWithUncertainty;
exports["default"] = _default;