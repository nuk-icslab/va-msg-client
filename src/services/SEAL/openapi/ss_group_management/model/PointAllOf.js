"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GeographicalCoordinates = _interopRequireDefault(require("./GeographicalCoordinates"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PointAllOf model module.
 * @module model/PointAllOf
 * @version 1.1.0-alpha.4
 */
var PointAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PointAllOf</code>.
   * @alias module:model/PointAllOf
   * @param point {module:model/GeographicalCoordinates} 
   */
  function PointAllOf(point) {
    _classCallCheck(this, PointAllOf);

    PointAllOf.initialize(this, point);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PointAllOf, null, [{
    key: "initialize",
    value: function initialize(obj, point) {
      obj['point'] = point;
    }
    /**
     * Constructs a <code>PointAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PointAllOf} obj Optional instance to populate.
     * @return {module:model/PointAllOf} The populated <code>PointAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PointAllOf();

        if (data.hasOwnProperty('point')) {
          obj['point'] = _GeographicalCoordinates["default"].constructFromObject(data['point']);
        }
      }

      return obj;
    }
  }]);

  return PointAllOf;
}();
/**
 * @member {module:model/GeographicalCoordinates} point
 */


PointAllOf.prototype['point'] = undefined;
var _default = PointAllOf;
exports["default"] = _default;