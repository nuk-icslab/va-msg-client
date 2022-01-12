"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccuracyFulfilmentIndicator = _interopRequireDefault(require("./AccuracyFulfilmentIndicator"));

var _CivicAddress = _interopRequireDefault(require("./CivicAddress"));

var _GeographicArea = _interopRequireDefault(require("./GeographicArea"));

var _LdrType = _interopRequireDefault(require("./LdrType"));

var _MinorLocationQoS = _interopRequireDefault(require("./MinorLocationQoS"));

var _PositioningMethod = _interopRequireDefault(require("./PositioningMethod"));

var _VelocityEstimate = _interopRequireDefault(require("./VelocityEstimate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The LocationInfo model module.
 * @module model/LocationInfo
 * @version 1.1.0-alpha.4
 */
var LocationInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LocationInfo</code>.
   * Represents the user location information.
   * @alias module:model/LocationInfo
   */
  function LocationInfo() {
    _classCallCheck(this, LocationInfo);

    LocationInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LocationInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LocationInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocationInfo} obj Optional instance to populate.
     * @return {module:model/LocationInfo} The populated <code>LocationInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LocationInfo();

        if (data.hasOwnProperty('ageOfLocationInfo')) {
          obj['ageOfLocationInfo'] = _ApiClient["default"].convertToType(data['ageOfLocationInfo'], 'Number');
        }

        if (data.hasOwnProperty('cellId')) {
          obj['cellId'] = _ApiClient["default"].convertToType(data['cellId'], 'String');
        }

        if (data.hasOwnProperty('enodeBId')) {
          obj['enodeBId'] = _ApiClient["default"].convertToType(data['enodeBId'], 'String');
        }

        if (data.hasOwnProperty('routingAreaId')) {
          obj['routingAreaId'] = _ApiClient["default"].convertToType(data['routingAreaId'], 'String');
        }

        if (data.hasOwnProperty('trackingAreaId')) {
          obj['trackingAreaId'] = _ApiClient["default"].convertToType(data['trackingAreaId'], 'String');
        }

        if (data.hasOwnProperty('plmnId')) {
          obj['plmnId'] = _ApiClient["default"].convertToType(data['plmnId'], 'String');
        }

        if (data.hasOwnProperty('twanId')) {
          obj['twanId'] = _ApiClient["default"].convertToType(data['twanId'], 'String');
        }

        if (data.hasOwnProperty('geographicArea')) {
          obj['geographicArea'] = _GeographicArea["default"].constructFromObject(data['geographicArea']);
        }

        if (data.hasOwnProperty('civicAddress')) {
          obj['civicAddress'] = _CivicAddress["default"].constructFromObject(data['civicAddress']);
        }

        if (data.hasOwnProperty('positionMethod')) {
          obj['positionMethod'] = _PositioningMethod["default"].constructFromObject(data['positionMethod']);
        }

        if (data.hasOwnProperty('qosFulfilInd')) {
          obj['qosFulfilInd'] = _AccuracyFulfilmentIndicator["default"].constructFromObject(data['qosFulfilInd']);
        }

        if (data.hasOwnProperty('ueVelocity')) {
          obj['ueVelocity'] = _VelocityEstimate["default"].constructFromObject(data['ueVelocity']);
        }

        if (data.hasOwnProperty('ldrType')) {
          obj['ldrType'] = _LdrType["default"].constructFromObject(data['ldrType']);
        }

        if (data.hasOwnProperty('achievedQos')) {
          obj['achievedQos'] = _MinorLocationQoS["default"].constructFromObject(data['achievedQos']);
        }
      }

      return obj;
    }
  }]);

  return LocationInfo;
}();
/**
 * Unsigned integer identifying a period of time in units of minutes.
 * @member {Number} ageOfLocationInfo
 */


LocationInfo.prototype['ageOfLocationInfo'] = undefined;
/**
 * Indicates the Cell Global Identification of the user which identifies the cell the UE is registered.
 * @member {String} cellId
 */

LocationInfo.prototype['cellId'] = undefined;
/**
 * Indicates the eNodeB in which the UE is currently located.
 * @member {String} enodeBId
 */

LocationInfo.prototype['enodeBId'] = undefined;
/**
 * Identifies the Routing Area Identity of the user where the UE is located.
 * @member {String} routingAreaId
 */

LocationInfo.prototype['routingAreaId'] = undefined;
/**
 * Identifies the Tracking Area Identity of the user where the UE is located.
 * @member {String} trackingAreaId
 */

LocationInfo.prototype['trackingAreaId'] = undefined;
/**
 * Identifies the PLMN Identity of the user where the UE is located.
 * @member {String} plmnId
 */

LocationInfo.prototype['plmnId'] = undefined;
/**
 * Identifies the TWAN Identity of the user where the UE is located.
 * @member {String} twanId
 */

LocationInfo.prototype['twanId'] = undefined;
/**
 * @member {module:model/GeographicArea} geographicArea
 */

LocationInfo.prototype['geographicArea'] = undefined;
/**
 * @member {module:model/CivicAddress} civicAddress
 */

LocationInfo.prototype['civicAddress'] = undefined;
/**
 * @member {module:model/PositioningMethod} positionMethod
 */

LocationInfo.prototype['positionMethod'] = undefined;
/**
 * @member {module:model/AccuracyFulfilmentIndicator} qosFulfilInd
 */

LocationInfo.prototype['qosFulfilInd'] = undefined;
/**
 * @member {module:model/VelocityEstimate} ueVelocity
 */

LocationInfo.prototype['ueVelocity'] = undefined;
/**
 * @member {module:model/LdrType} ldrType
 */

LocationInfo.prototype['ldrType'] = undefined;
/**
 * @member {module:model/MinorLocationQoS} achievedQos
 */

LocationInfo.prototype['achievedQos'] = undefined;
var _default = LocationInfo;
exports["default"] = _default;