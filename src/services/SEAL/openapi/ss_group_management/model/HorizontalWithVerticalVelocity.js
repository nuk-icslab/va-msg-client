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
 * The HorizontalWithVerticalVelocity model module.
 * @module model/HorizontalWithVerticalVelocity
 * @version 1.1.0-alpha.4
 */
var HorizontalWithVerticalVelocity = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HorizontalWithVerticalVelocity</code>.
   * Horizontal and vertical velocity.
   * @alias module:model/HorizontalWithVerticalVelocity
   * @param hSpeed {Number} Indicates value of horizontal speed.
   * @param bearing {Number} Indicates value of angle.
   * @param vSpeed {Number} Indicates value of vertical speed.
   * @param vDirection {module:model/VerticalDirection} 
   */
  function HorizontalWithVerticalVelocity(hSpeed, bearing, vSpeed, vDirection) {
    _classCallCheck(this, HorizontalWithVerticalVelocity);

    HorizontalWithVerticalVelocity.initialize(this, hSpeed, bearing, vSpeed, vDirection);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HorizontalWithVerticalVelocity, null, [{
    key: "initialize",
    value: function initialize(obj, hSpeed, bearing, vSpeed, vDirection) {
      obj['hSpeed'] = hSpeed;
      obj['bearing'] = bearing;
      obj['vSpeed'] = vSpeed;
      obj['vDirection'] = vDirection;
    }
    /**
     * Constructs a <code>HorizontalWithVerticalVelocity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HorizontalWithVerticalVelocity} obj Optional instance to populate.
     * @return {module:model/HorizontalWithVerticalVelocity} The populated <code>HorizontalWithVerticalVelocity</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HorizontalWithVerticalVelocity();

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
      }

      return obj;
    }
  }]);

  return HorizontalWithVerticalVelocity;
}();
/**
 * Indicates value of horizontal speed.
 * @member {Number} hSpeed
 */


HorizontalWithVerticalVelocity.prototype['hSpeed'] = undefined;
/**
 * Indicates value of angle.
 * @member {Number} bearing
 */

HorizontalWithVerticalVelocity.prototype['bearing'] = undefined;
/**
 * Indicates value of vertical speed.
 * @member {Number} vSpeed
 */

HorizontalWithVerticalVelocity.prototype['vSpeed'] = undefined;
/**
 * @member {module:model/VerticalDirection} vDirection
 */

HorizontalWithVerticalVelocity.prototype['vDirection'] = undefined;
var _default = HorizontalWithVerticalVelocity;
exports["default"] = _default;