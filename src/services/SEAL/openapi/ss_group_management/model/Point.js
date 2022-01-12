"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GADShape = _interopRequireDefault(require("./GADShape"));

var _GeographicalCoordinates = _interopRequireDefault(require("./GeographicalCoordinates"));

var _PointAllOf = _interopRequireDefault(require("./PointAllOf"));

var _SupportedGADShapes = _interopRequireDefault(require("./SupportedGADShapes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Point model module.
 * @module model/Point
 * @version 1.1.0-alpha.4
 */
var Point = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Point</code>.
   * Ellipsoid Point.
   * @alias module:model/Point
   * @extends module:model/GADShape
   * @implements module:model/GADShape
   * @implements module:model/PointAllOf
   * @param shape {module:model/SupportedGADShapes} 
   * @param point {module:model/GeographicalCoordinates} 
   */
  function Point(shape, point) {
    _classCallCheck(this, Point);

    _GADShape["default"].initialize(this, shape);

    _PointAllOf["default"].initialize(this, point);

    Point.initialize(this, shape, point);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Point, null, [{
    key: "initialize",
    value: function initialize(obj, shape, point) {
      obj['point'] = point;
    }
    /**
     * Constructs a <code>Point</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Point} obj Optional instance to populate.
     * @return {module:model/Point} The populated <code>Point</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Point();

        _GADShape["default"].constructFromObject(data, obj);

        _GADShape["default"].constructFromObject(data, obj);

        _PointAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('point')) {
          obj['point'] = _GeographicalCoordinates["default"].constructFromObject(data['point']);
        }
      }

      return obj;
    }
  }]);

  return Point;
}();
/**
 * @member {module:model/GeographicalCoordinates} point
 */


Point.prototype['point'] = undefined; // Implement GADShape interface:

/**
 * @member {module:model/SupportedGADShapes} shape
 */

_GADShape["default"].prototype['shape'] = undefined; // Implement PointAllOf interface:

/**
 * @member {module:model/GeographicalCoordinates} point
 */

_PointAllOf["default"].prototype['point'] = undefined;
var _default = Point;
exports["default"] = _default;