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
 * The ValTargetUe model module.
 * @module model/ValTargetUe
 * @version 1.1.0-alpha.4
 */
var ValTargetUe = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ValTargetUe</code>.
   * Represents information identifying a VAL user ID or a VAL UE ID.
   * @alias module:model/ValTargetUe
   */
  function ValTargetUe() {
    _classCallCheck(this, ValTargetUe);

    ValTargetUe.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ValTargetUe, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ValTargetUe</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValTargetUe} obj Optional instance to populate.
     * @return {module:model/ValTargetUe} The populated <code>ValTargetUe</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ValTargetUe();

        if (data.hasOwnProperty('valUserId')) {
          obj['valUserId'] = _ApiClient["default"].convertToType(data['valUserId'], 'String');
        }

        if (data.hasOwnProperty('valUeId')) {
          obj['valUeId'] = _ApiClient["default"].convertToType(data['valUeId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ValTargetUe;
}();
/**
 * Unique identifier of a VAL user.
 * @member {String} valUserId
 */


ValTargetUe.prototype['valUserId'] = undefined;
/**
 * Unique identifier of a VAL UE.
 * @member {String} valUeId
 */

ValTargetUe.prototype['valUeId'] = undefined;
var _default = ValTargetUe;
exports["default"] = _default;