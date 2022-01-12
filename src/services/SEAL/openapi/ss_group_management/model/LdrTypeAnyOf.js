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
* Enum class LdrTypeAnyOf.
* @enum {}
* @readonly
*/
var LdrTypeAnyOf = /*#__PURE__*/function () {
  function LdrTypeAnyOf() {
    _classCallCheck(this, LdrTypeAnyOf);

    _defineProperty(this, "UE_AVAILABLE", "UE_AVAILABLE");

    _defineProperty(this, "PERIODIC", "PERIODIC");

    _defineProperty(this, "ENTERING_INTO_AREA", "ENTERING_INTO_AREA");

    _defineProperty(this, "LEAVING_FROM_AREA", "LEAVING_FROM_AREA");

    _defineProperty(this, "BEING_INSIDE_AREA", "BEING_INSIDE_AREA");

    _defineProperty(this, "MOTION", "MOTION");
  }

  _createClass(LdrTypeAnyOf, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>LdrTypeAnyOf</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/LdrTypeAnyOf} The enum <code>LdrTypeAnyOf</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);

  return LdrTypeAnyOf;
}();

exports["default"] = LdrTypeAnyOf;