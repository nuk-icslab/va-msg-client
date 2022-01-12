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
 * The LocalOrigin model module.
 * @module model/LocalOrigin
 * @version 1.1.0-alpha.4
 */
var LocalOrigin = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LocalOrigin</code>.
   * Indicates a Local origin in a reference system
   * @alias module:model/LocalOrigin
   */
  function LocalOrigin() {
    _classCallCheck(this, LocalOrigin);

    LocalOrigin.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LocalOrigin, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LocalOrigin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocalOrigin} obj Optional instance to populate.
     * @return {module:model/LocalOrigin} The populated <code>LocalOrigin</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LocalOrigin();

        if (data.hasOwnProperty('coordinateId')) {
          obj['coordinateId'] = _ApiClient["default"].convertToType(data['coordinateId'], 'String');
        }

        if (data.hasOwnProperty('point')) {
          obj['point'] = _GeographicalCoordinates["default"].constructFromObject(data['point']);
        }
      }

      return obj;
    }
  }]);

  return LocalOrigin;
}();
/**
 * @member {String} coordinateId
 */


LocalOrigin.prototype['coordinateId'] = undefined;
/**
 * @member {module:model/GeographicalCoordinates} point
 */

LocalOrigin.prototype['point'] = undefined;
var _default = LocalOrigin;
exports["default"] = _default;