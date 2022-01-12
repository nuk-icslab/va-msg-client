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
 * The UncertaintyEllipse model module.
 * @module model/UncertaintyEllipse
 * @version 1.1.0-alpha.4
 */
var UncertaintyEllipse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UncertaintyEllipse</code>.
   * Ellipse with uncertainty.
   * @alias module:model/UncertaintyEllipse
   * @param semiMajor {Number} Indicates value of uncertainty.
   * @param semiMinor {Number} Indicates value of uncertainty.
   * @param orientationMajor {Number} Indicates value of orientation angle.
   */
  function UncertaintyEllipse(semiMajor, semiMinor, orientationMajor) {
    _classCallCheck(this, UncertaintyEllipse);

    UncertaintyEllipse.initialize(this, semiMajor, semiMinor, orientationMajor);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UncertaintyEllipse, null, [{
    key: "initialize",
    value: function initialize(obj, semiMajor, semiMinor, orientationMajor) {
      obj['semiMajor'] = semiMajor;
      obj['semiMinor'] = semiMinor;
      obj['orientationMajor'] = orientationMajor;
    }
    /**
     * Constructs a <code>UncertaintyEllipse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UncertaintyEllipse} obj Optional instance to populate.
     * @return {module:model/UncertaintyEllipse} The populated <code>UncertaintyEllipse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UncertaintyEllipse();

        if (data.hasOwnProperty('semiMajor')) {
          obj['semiMajor'] = _ApiClient["default"].convertToType(data['semiMajor'], 'Number');
        }

        if (data.hasOwnProperty('semiMinor')) {
          obj['semiMinor'] = _ApiClient["default"].convertToType(data['semiMinor'], 'Number');
        }

        if (data.hasOwnProperty('orientationMajor')) {
          obj['orientationMajor'] = _ApiClient["default"].convertToType(data['orientationMajor'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return UncertaintyEllipse;
}();
/**
 * Indicates value of uncertainty.
 * @member {Number} semiMajor
 */


UncertaintyEllipse.prototype['semiMajor'] = undefined;
/**
 * Indicates value of uncertainty.
 * @member {Number} semiMinor
 */

UncertaintyEllipse.prototype['semiMinor'] = undefined;
/**
 * Indicates value of orientation angle.
 * @member {Number} orientationMajor
 */

UncertaintyEllipse.prototype['orientationMajor'] = undefined;
var _default = UncertaintyEllipse;
exports["default"] = _default;