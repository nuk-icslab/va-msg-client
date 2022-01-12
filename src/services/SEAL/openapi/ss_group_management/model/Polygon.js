"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GADShape = _interopRequireDefault(require("./GADShape"));

var _GeographicalCoordinates = _interopRequireDefault(require("./GeographicalCoordinates"));

var _PolygonAllOf = _interopRequireDefault(require("./PolygonAllOf"));

var _SupportedGADShapes = _interopRequireDefault(require("./SupportedGADShapes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Polygon model module.
 * @module model/Polygon
 * @version 1.1.0-alpha.4
 */
var Polygon = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Polygon</code>.
   * Polygon.
   * @alias module:model/Polygon
   * @extends module:model/GADShape
   * @implements module:model/GADShape
   * @implements module:model/PolygonAllOf
   * @param shape {module:model/SupportedGADShapes} 
   * @param pointList {Array.<module:model/GeographicalCoordinates>} List of points.
   */
  function Polygon(shape, pointList) {
    _classCallCheck(this, Polygon);

    _GADShape["default"].initialize(this, shape);

    _PolygonAllOf["default"].initialize(this, pointList);

    Polygon.initialize(this, shape, pointList);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Polygon, null, [{
    key: "initialize",
    value: function initialize(obj, shape, pointList) {
      obj['pointList'] = pointList;
    }
    /**
     * Constructs a <code>Polygon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Polygon} obj Optional instance to populate.
     * @return {module:model/Polygon} The populated <code>Polygon</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Polygon();

        _GADShape["default"].constructFromObject(data, obj);

        _GADShape["default"].constructFromObject(data, obj);

        _PolygonAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('pointList')) {
          obj['pointList'] = _ApiClient["default"].convertToType(data['pointList'], [_GeographicalCoordinates["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Polygon;
}();
/**
 * List of points.
 * @member {Array.<module:model/GeographicalCoordinates>} pointList
 */


Polygon.prototype['pointList'] = undefined; // Implement GADShape interface:

/**
 * @member {module:model/SupportedGADShapes} shape
 */

_GADShape["default"].prototype['shape'] = undefined; // Implement PolygonAllOf interface:

/**
 * List of points.
 * @member {Array.<module:model/GeographicalCoordinates>} pointList
 */

_PolygonAllOf["default"].prototype['pointList'] = undefined;
var _default = Polygon;
exports["default"] = _default;