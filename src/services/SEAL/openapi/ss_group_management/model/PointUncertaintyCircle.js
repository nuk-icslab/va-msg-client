"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GADShape = _interopRequireDefault(require("./GADShape"));

var _GeographicalCoordinates = _interopRequireDefault(require("./GeographicalCoordinates"));

var _PointUncertaintyCircleAllOf = _interopRequireDefault(require("./PointUncertaintyCircleAllOf"));

var _SupportedGADShapes = _interopRequireDefault(require("./SupportedGADShapes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PointUncertaintyCircle model module.
 * @module model/PointUncertaintyCircle
 * @version 1.1.0-alpha.4
 */
var PointUncertaintyCircle = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PointUncertaintyCircle</code>.
   * Ellipsoid point with uncertainty circle.
   * @alias module:model/PointUncertaintyCircle
   * @extends module:model/GADShape
   * @implements module:model/GADShape
   * @implements module:model/PointUncertaintyCircleAllOf
   * @param shape {module:model/SupportedGADShapes} 
   * @param point {module:model/GeographicalCoordinates} 
   * @param uncertainty {Number} Indicates value of uncertainty.
   */
  function PointUncertaintyCircle(shape, point, uncertainty) {
    _classCallCheck(this, PointUncertaintyCircle);

    _GADShape["default"].initialize(this, shape);

    _PointUncertaintyCircleAllOf["default"].initialize(this, point, uncertainty);

    PointUncertaintyCircle.initialize(this, shape, point, uncertainty);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PointUncertaintyCircle, null, [{
    key: "initialize",
    value: function initialize(obj, shape, point, uncertainty) {
      obj['point'] = point;
      obj['uncertainty'] = uncertainty;
    }
    /**
     * Constructs a <code>PointUncertaintyCircle</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PointUncertaintyCircle} obj Optional instance to populate.
     * @return {module:model/PointUncertaintyCircle} The populated <code>PointUncertaintyCircle</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PointUncertaintyCircle();

        _GADShape["default"].constructFromObject(data, obj);

        _GADShape["default"].constructFromObject(data, obj);

        _PointUncertaintyCircleAllOf["default"].constructFromObject(data, obj);

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

  return PointUncertaintyCircle;
}();
/**
 * @member {module:model/GeographicalCoordinates} point
 */


PointUncertaintyCircle.prototype['point'] = undefined;
/**
 * Indicates value of uncertainty.
 * @member {Number} uncertainty
 */

PointUncertaintyCircle.prototype['uncertainty'] = undefined; // Implement GADShape interface:

/**
 * @member {module:model/SupportedGADShapes} shape
 */

_GADShape["default"].prototype['shape'] = undefined; // Implement PointUncertaintyCircleAllOf interface:

/**
 * @member {module:model/GeographicalCoordinates} point
 */

_PointUncertaintyCircleAllOf["default"].prototype['point'] = undefined;
/**
 * Indicates value of uncertainty.
 * @member {Number} uncertainty
 */

_PointUncertaintyCircleAllOf["default"].prototype['uncertainty'] = undefined;
var _default = PointUncertaintyCircle;
exports["default"] = _default;