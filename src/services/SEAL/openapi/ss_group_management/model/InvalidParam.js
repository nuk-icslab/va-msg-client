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
 * The InvalidParam model module.
 * @module model/InvalidParam
 * @version 1.1.0-alpha.4
 */
var InvalidParam = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvalidParam</code>.
   * Represents the description of invalid parameters, for a request rejected due to invalid parameters.
   * @alias module:model/InvalidParam
   * @param param {String} Attribute's name encoded as a JSON Pointer, or header's name.
   */
  function InvalidParam(param) {
    _classCallCheck(this, InvalidParam);

    InvalidParam.initialize(this, param);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InvalidParam, null, [{
    key: "initialize",
    value: function initialize(obj, param) {
      obj['param'] = param;
    }
    /**
     * Constructs a <code>InvalidParam</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvalidParam} obj Optional instance to populate.
     * @return {module:model/InvalidParam} The populated <code>InvalidParam</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvalidParam();

        if (data.hasOwnProperty('param')) {
          obj['param'] = _ApiClient["default"].convertToType(data['param'], 'String');
        }

        if (data.hasOwnProperty('reason')) {
          obj['reason'] = _ApiClient["default"].convertToType(data['reason'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InvalidParam;
}();
/**
 * Attribute's name encoded as a JSON Pointer, or header's name.
 * @member {String} param
 */


InvalidParam.prototype['param'] = undefined;
/**
 * A human-readable reason, e.g. \"must be a positive integer\".
 * @member {String} reason
 */

InvalidParam.prototype['reason'] = undefined;
var _default = InvalidParam;
exports["default"] = _default;