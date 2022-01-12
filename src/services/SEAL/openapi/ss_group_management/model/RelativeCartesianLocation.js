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
 * The RelativeCartesianLocation model module.
 * @module model/RelativeCartesianLocation
 * @version 1.1.0-alpha.4
 */
var RelativeCartesianLocation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelativeCartesianLocation</code>.
   * Relative Cartesian Location
   * @alias module:model/RelativeCartesianLocation
   * @param x {Number} string with format \"float\" as defined in OpenAPI.
   * @param y {Number} string with format \"float\" as defined in OpenAPI.
   */
  function RelativeCartesianLocation(x, y) {
    _classCallCheck(this, RelativeCartesianLocation);

    RelativeCartesianLocation.initialize(this, x, y);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelativeCartesianLocation, null, [{
    key: "initialize",
    value: function initialize(obj, x, y) {
      obj['x'] = x;
      obj['y'] = y;
    }
    /**
     * Constructs a <code>RelativeCartesianLocation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelativeCartesianLocation} obj Optional instance to populate.
     * @return {module:model/RelativeCartesianLocation} The populated <code>RelativeCartesianLocation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelativeCartesianLocation();

        if (data.hasOwnProperty('x')) {
          obj['x'] = _ApiClient["default"].convertToType(data['x'], 'Number');
        }

        if (data.hasOwnProperty('y')) {
          obj['y'] = _ApiClient["default"].convertToType(data['y'], 'Number');
        }

        if (data.hasOwnProperty('z')) {
          obj['z'] = _ApiClient["default"].convertToType(data['z'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return RelativeCartesianLocation;
}();
/**
 * string with format \"float\" as defined in OpenAPI.
 * @member {Number} x
 */


RelativeCartesianLocation.prototype['x'] = undefined;
/**
 * string with format \"float\" as defined in OpenAPI.
 * @member {Number} y
 */

RelativeCartesianLocation.prototype['y'] = undefined;
/**
 * string with format \"float\" as defined in OpenAPI.
 * @member {Number} z
 */

RelativeCartesianLocation.prototype['z'] = undefined;
var _default = RelativeCartesianLocation;
exports["default"] = _default;