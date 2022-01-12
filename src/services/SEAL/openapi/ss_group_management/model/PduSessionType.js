"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PduSessionTypeAnyOf = _interopRequireDefault(require("./PduSessionTypeAnyOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PduSessionType model module.
 * @module model/PduSessionType
 * @version 1.1.0-alpha.4
 */
var PduSessionType = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PduSessionType</code>.
   * PduSessionType indicates the type of a PDU session. It shall comply with the provisions defined in table 5.4.3.3-1.
   * @alias module:model/PduSessionType
   * @implements module:model/PduSessionTypeAnyOf
   */
  function PduSessionType() {
    _classCallCheck(this, PduSessionType);

    _PduSessionTypeAnyOf["default"].initialize(this);

    PduSessionType.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PduSessionType, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PduSessionType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PduSessionType} obj Optional instance to populate.
     * @return {module:model/PduSessionType} The populated <code>PduSessionType</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PduSessionType();

        _PduSessionTypeAnyOf["default"].constructFromObject(data, obj);
      }

      return obj;
    }
  }]);

  return PduSessionType;
}(); // Implement PduSessionTypeAnyOf interface:


var _default = PduSessionType;
exports["default"] = _default;