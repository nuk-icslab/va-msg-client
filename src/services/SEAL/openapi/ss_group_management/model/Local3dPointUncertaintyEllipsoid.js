"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GADShape = _interopRequireDefault(require("./GADShape"));

var _Local3dPointUncertaintyEllipsoidAllOf = _interopRequireDefault(require("./Local3dPointUncertaintyEllipsoidAllOf"));

var _LocalOrigin = _interopRequireDefault(require("./LocalOrigin"));

var _RelativeCartesianLocation = _interopRequireDefault(require("./RelativeCartesianLocation"));

var _SupportedGADShapes = _interopRequireDefault(require("./SupportedGADShapes"));

var _UncertaintyEllipsoid = _interopRequireDefault(require("./UncertaintyEllipsoid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Local3dPointUncertaintyEllipsoid model module.
 * @module model/Local3dPointUncertaintyEllipsoid
 * @version 1.1.0-alpha.4
 */
var Local3dPointUncertaintyEllipsoid = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Local3dPointUncertaintyEllipsoid</code>.
   * Local 3D point with uncertainty ellipsoid
   * @alias module:model/Local3dPointUncertaintyEllipsoid
   * @extends module:model/GADShape
   * @implements module:model/GADShape
   * @implements module:model/Local3dPointUncertaintyEllipsoidAllOf
   * @param shape {module:model/SupportedGADShapes} 
   * @param localOrigin {module:model/LocalOrigin} 
   * @param point {module:model/RelativeCartesianLocation} 
   * @param uncertaintyEllipsoid {module:model/UncertaintyEllipsoid} 
   * @param confidence {Number} Indicates value of confidence.
   */
  function Local3dPointUncertaintyEllipsoid(shape, localOrigin, point, uncertaintyEllipsoid, confidence) {
    _classCallCheck(this, Local3dPointUncertaintyEllipsoid);

    _GADShape["default"].initialize(this, shape);

    _Local3dPointUncertaintyEllipsoidAllOf["default"].initialize(this, localOrigin, point, uncertaintyEllipsoid, confidence);

    Local3dPointUncertaintyEllipsoid.initialize(this, shape, localOrigin, point, uncertaintyEllipsoid, confidence);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Local3dPointUncertaintyEllipsoid, null, [{
    key: "initialize",
    value: function initialize(obj, shape, localOrigin, point, uncertaintyEllipsoid, confidence) {
      obj['localOrigin'] = localOrigin;
      obj['point'] = point;
      obj['uncertaintyEllipsoid'] = uncertaintyEllipsoid;
      obj['confidence'] = confidence;
    }
    /**
     * Constructs a <code>Local3dPointUncertaintyEllipsoid</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Local3dPointUncertaintyEllipsoid} obj Optional instance to populate.
     * @return {module:model/Local3dPointUncertaintyEllipsoid} The populated <code>Local3dPointUncertaintyEllipsoid</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Local3dPointUncertaintyEllipsoid();

        _GADShape["default"].constructFromObject(data, obj);

        _GADShape["default"].constructFromObject(data, obj);

        _Local3dPointUncertaintyEllipsoidAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('localOrigin')) {
          obj['localOrigin'] = _LocalOrigin["default"].constructFromObject(data['localOrigin']);
        }

        if (data.hasOwnProperty('point')) {
          obj['point'] = _RelativeCartesianLocation["default"].constructFromObject(data['point']);
        }

        if (data.hasOwnProperty('uncertaintyEllipsoid')) {
          obj['uncertaintyEllipsoid'] = _UncertaintyEllipsoid["default"].constructFromObject(data['uncertaintyEllipsoid']);
        }

        if (data.hasOwnProperty('confidence')) {
          obj['confidence'] = _ApiClient["default"].convertToType(data['confidence'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Local3dPointUncertaintyEllipsoid;
}();
/**
 * @member {module:model/LocalOrigin} localOrigin
 */


Local3dPointUncertaintyEllipsoid.prototype['localOrigin'] = undefined;
/**
 * @member {module:model/RelativeCartesianLocation} point
 */

Local3dPointUncertaintyEllipsoid.prototype['point'] = undefined;
/**
 * @member {module:model/UncertaintyEllipsoid} uncertaintyEllipsoid
 */

Local3dPointUncertaintyEllipsoid.prototype['uncertaintyEllipsoid'] = undefined;
/**
 * Indicates value of confidence.
 * @member {Number} confidence
 */

Local3dPointUncertaintyEllipsoid.prototype['confidence'] = undefined; // Implement GADShape interface:

/**
 * @member {module:model/SupportedGADShapes} shape
 */

_GADShape["default"].prototype['shape'] = undefined; // Implement Local3dPointUncertaintyEllipsoidAllOf interface:

/**
 * @member {module:model/LocalOrigin} localOrigin
 */

_Local3dPointUncertaintyEllipsoidAllOf["default"].prototype['localOrigin'] = undefined;
/**
 * @member {module:model/RelativeCartesianLocation} point
 */

_Local3dPointUncertaintyEllipsoidAllOf["default"].prototype['point'] = undefined;
/**
 * @member {module:model/UncertaintyEllipsoid} uncertaintyEllipsoid
 */

_Local3dPointUncertaintyEllipsoidAllOf["default"].prototype['uncertaintyEllipsoid'] = undefined;
/**
 * Indicates value of confidence.
 * @member {Number} confidence
 */

_Local3dPointUncertaintyEllipsoidAllOf["default"].prototype['confidence'] = undefined;
var _default = Local3dPointUncertaintyEllipsoid;
exports["default"] = _default;