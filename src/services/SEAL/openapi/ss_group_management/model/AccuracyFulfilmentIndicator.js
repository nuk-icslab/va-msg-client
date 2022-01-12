"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccuracyFulfilmentIndicatorAnyOf = _interopRequireDefault(require("./AccuracyFulfilmentIndicatorAnyOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The AccuracyFulfilmentIndicator model module.
 * @module model/AccuracyFulfilmentIndicator
 * @version 1.1.0-alpha.4
 */
var AccuracyFulfilmentIndicator = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccuracyFulfilmentIndicator</code>.
   * Indicates fulfilment of requested accuracy.
   * @alias module:model/AccuracyFulfilmentIndicator
   * @implements module:model/AccuracyFulfilmentIndicatorAnyOf
   */
  function AccuracyFulfilmentIndicator() {
    _classCallCheck(this, AccuracyFulfilmentIndicator);

    _AccuracyFulfilmentIndicatorAnyOf["default"].initialize(this);

    AccuracyFulfilmentIndicator.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccuracyFulfilmentIndicator, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AccuracyFulfilmentIndicator</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccuracyFulfilmentIndicator} obj Optional instance to populate.
     * @return {module:model/AccuracyFulfilmentIndicator} The populated <code>AccuracyFulfilmentIndicator</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccuracyFulfilmentIndicator();

        _AccuracyFulfilmentIndicatorAnyOf["default"].constructFromObject(data, obj);
      }

      return obj;
    }
  }]);

  return AccuracyFulfilmentIndicator;
}(); // Implement AccuracyFulfilmentIndicatorAnyOf interface:


var _default = AccuracyFulfilmentIndicator;
exports["default"] = _default;