"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LdrTypeAnyOf = _interopRequireDefault(require("./LdrTypeAnyOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The LdrType model module.
 * @module model/LdrType
 * @version 1.1.0-alpha.4
 */
var LdrType = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LdrType</code>.
   * Indicates LDR types.
   * @alias module:model/LdrType
   * @implements module:model/LdrTypeAnyOf
   */
  function LdrType() {
    _classCallCheck(this, LdrType);

    _LdrTypeAnyOf["default"].initialize(this);

    LdrType.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LdrType, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LdrType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LdrType} obj Optional instance to populate.
     * @return {module:model/LdrType} The populated <code>LdrType</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LdrType();

        _LdrTypeAnyOf["default"].constructFromObject(data, obj);
      }

      return obj;
    }
  }]);

  return LdrType;
}(); // Implement LdrTypeAnyOf interface:


var _default = LdrType;
exports["default"] = _default;