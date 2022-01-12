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
 * The HorizontalVelocity model module.
 * @module model/HorizontalVelocity
 * @version 1.1.0-alpha.4
 */
var HorizontalVelocity = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HorizontalVelocity</code>.
   * Horizontal velocity.
   * @alias module:model/HorizontalVelocity
   * @param hSpeed {Number} Indicates value of horizontal speed.
   * @param bearing {Number} Indicates value of angle.
   */
  function HorizontalVelocity(hSpeed, bearing) {
    _classCallCheck(this, HorizontalVelocity);

    HorizontalVelocity.initialize(this, hSpeed, bearing);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HorizontalVelocity, null, [{
    key: "initialize",
    value: function initialize(obj, hSpeed, bearing) {
      obj['hSpeed'] = hSpeed;
      obj['bearing'] = bearing;
    }
    /**
     * Constructs a <code>HorizontalVelocity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HorizontalVelocity} obj Optional instance to populate.
     * @return {module:model/HorizontalVelocity} The populated <code>HorizontalVelocity</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HorizontalVelocity();

        if (data.hasOwnProperty('hSpeed')) {
          obj['hSpeed'] = _ApiClient["default"].convertToType(data['hSpeed'], 'Number');
        }

        if (data.hasOwnProperty('bearing')) {
          obj['bearing'] = _ApiClient["default"].convertToType(data['bearing'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return HorizontalVelocity;
}();
/**
 * Indicates value of horizontal speed.
 * @member {Number} hSpeed
 */


HorizontalVelocity.prototype['hSpeed'] = undefined;
/**
 * Indicates value of angle.
 * @member {Number} bearing
 */

HorizontalVelocity.prototype['bearing'] = undefined;
var _default = HorizontalVelocity;
exports["default"] = _default;