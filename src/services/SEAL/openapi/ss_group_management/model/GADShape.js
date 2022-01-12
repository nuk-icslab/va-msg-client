"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SupportedGADShapes = _interopRequireDefault(require("./SupportedGADShapes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GADShape model module.
 * @module model/GADShape
 * @version 1.1.0-alpha.4
 */
var GADShape = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GADShape</code>.
   * Common base type for GAD shapes.
   * @alias module:model/GADShape
   * @param shape {module:model/SupportedGADShapes} 
   */
  function GADShape(shape) {
    _classCallCheck(this, GADShape);

    GADShape.initialize(this, shape);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GADShape, null, [{
    key: "initialize",
    value: function initialize(obj, shape) {
      obj['shape'] = shape;
    }
    /**
     * Constructs a <code>GADShape</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GADShape} obj Optional instance to populate.
     * @return {module:model/GADShape} The populated <code>GADShape</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GADShape();

        if (data.hasOwnProperty('shape')) {
          obj['shape'] = _SupportedGADShapes["default"].constructFromObject(data['shape']);
        }
      }

      return obj;
    }
  }]);

  return GADShape;
}();
/**
 * @member {module:model/SupportedGADShapes} shape
 */


GADShape.prototype['shape'] = undefined;
var _default = GADShape;
exports["default"] = _default;