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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* Enum class PositioningMethodAnyOf.
* @enum {}
* @readonly
*/
var PositioningMethodAnyOf = /*#__PURE__*/function () {
  function PositioningMethodAnyOf() {
    _classCallCheck(this, PositioningMethodAnyOf);

    _defineProperty(this, "CELLID", "CELLID");

    _defineProperty(this, "ECID", "ECID");

    _defineProperty(this, "OTDOA", "OTDOA");

    _defineProperty(this, "BAROMETRIC_PRESSURE", "BAROMETRIC_PRESSURE");

    _defineProperty(this, "WLAN", "WLAN");

    _defineProperty(this, "BLUETOOTH", "BLUETOOTH");

    _defineProperty(this, "MBS", "MBS");

    _defineProperty(this, "MOTION_SENSOR", "MOTION_SENSOR");

    _defineProperty(this, "DL_TDOA", "DL_TDOA");

    _defineProperty(this, "DL_AOD", "DL_AOD");

    _defineProperty(this, "MULTI-RTT", "MULTI-RTT");

    _defineProperty(this, "NR_ECID", "NR_ECID");

    _defineProperty(this, "UL_TDOA", "UL_TDOA");

    _defineProperty(this, "UL_AOA", "UL_AOA");

    _defineProperty(this, "NETWORK_SPECIFIC", "NETWORK_SPECIFIC");
  }

  _createClass(PositioningMethodAnyOf, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>PositioningMethodAnyOf</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/PositioningMethodAnyOf} The enum <code>PositioningMethodAnyOf</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);

  return PositioningMethodAnyOf;
}();

exports["default"] = PositioningMethodAnyOf;