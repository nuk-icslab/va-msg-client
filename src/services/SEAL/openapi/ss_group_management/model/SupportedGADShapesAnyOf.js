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
* Enum class SupportedGADShapesAnyOf.
* @enum {}
* @readonly
*/
var SupportedGADShapesAnyOf = /*#__PURE__*/function () {
  function SupportedGADShapesAnyOf() {
    _classCallCheck(this, SupportedGADShapesAnyOf);

    _defineProperty(this, "POINT", "POINT");

    _defineProperty(this, "POINT_UNCERTAINTY_CIRCLE", "POINT_UNCERTAINTY_CIRCLE");

    _defineProperty(this, "POINT_UNCERTAINTY_ELLIPSE", "POINT_UNCERTAINTY_ELLIPSE");

    _defineProperty(this, "POLYGON", "POLYGON");

    _defineProperty(this, "POINT_ALTITUDE", "POINT_ALTITUDE");

    _defineProperty(this, "POINT_ALTITUDE_UNCERTAINTY", "POINT_ALTITUDE_UNCERTAINTY");

    _defineProperty(this, "ELLIPSOID_ARC", "ELLIPSOID_ARC");

    _defineProperty(this, "LOCAL_2D_POINT_UNCERTAINTY_ELLIPSE", "LOCAL_2D_POINT_UNCERTAINTY_ELLIPSE");

    _defineProperty(this, "LOCAL_3D_POINT_UNCERTAINTY_ELLIPSOID", "LOCAL_3D_POINT_UNCERTAINTY_ELLIPSOID");
  }

  _createClass(SupportedGADShapesAnyOf, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>SupportedGADShapesAnyOf</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/SupportedGADShapesAnyOf} The enum <code>SupportedGADShapesAnyOf</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);

  return SupportedGADShapesAnyOf;
}();

exports["default"] = SupportedGADShapesAnyOf;