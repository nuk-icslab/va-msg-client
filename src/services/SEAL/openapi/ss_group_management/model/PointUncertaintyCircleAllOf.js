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
 * The PointUncertaintyCircleAllOf model module.
 * @module model/PointUncertaintyCircleAllOf
 * @version 1.1.0-alpha.4
 */
var PointUncertaintyCircleAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PointUncertaintyCircleAllOf</code>.
   * @alias module:model/PointUncertaintyCircleAllOf
   * @param point {module:model/GeographicalCoordinates} 
   * @param uncertainty {Number} Indicates value of uncertainty.
   */
  function PointUncertaintyCircleAllOf(point, uncertainty) {
    _classCallCheck(this, PointUncertaintyCircleAllOf);

    PointUncertaintyCircleAllOf.initialize(this, point, uncertainty);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PointUncertaintyCircleAllOf, null, [{
    key: "initialize",
    value: function initialize(obj, point, uncertainty) {
      obj['point'] = point;
      obj['uncertainty'] = uncertainty;
    }
    /**
     * Constructs a <code>PointUncertaintyCircleAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PointUncertaintyCircleAllOf} obj Optional instance to populate.
     * @return {module:model/PointUncertaintyCircleAllOf} The populated <code>PointUncertaintyCircleAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PointUncertaintyCircleAllOf();

        if (data.hasOwnProperty('point')) {
          obj['point'] = _GeographicalCoordinates["default"].constructFromObject(data['point']);
        }

        if (data.hasOwnProperty('uncertainty')) {
          obj['uncertainty'] = _ApiClient["default"].convertToType(data['uncertainty'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return PointUncertaintyCircleAllOf;
}();
/**
 * @member {module:model/GeographicalCoordinates} point
 */


PointUncertaintyCircleAllOf.prototype['point'] = undefined;
/**
 * Indicates value of uncertainty.
 * @member {Number} uncertainty
 */

PointUncertaintyCircleAllOf.prototype['uncertainty'] = undefined;
var _default = PointUncertaintyCircleAllOf;
exports["default"] = _default;