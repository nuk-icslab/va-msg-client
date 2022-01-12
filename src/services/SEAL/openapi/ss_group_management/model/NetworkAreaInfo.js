"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Ecgi = _interopRequireDefault(require("./Ecgi"));

var _GlobalRanNodeId = _interopRequireDefault(require("./GlobalRanNodeId"));

var _Ncgi = _interopRequireDefault(require("./Ncgi"));

var _Tai = _interopRequireDefault(require("./Tai"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The NetworkAreaInfo model module.
 * @module model/NetworkAreaInfo
 * @version 1.1.0-alpha.4
 */
var NetworkAreaInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NetworkAreaInfo</code>.
   * Describes a network area information in which the NF service consumer requests the number of UEs.
   * @alias module:model/NetworkAreaInfo
   */
  function NetworkAreaInfo() {
    _classCallCheck(this, NetworkAreaInfo);

    NetworkAreaInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NetworkAreaInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NetworkAreaInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkAreaInfo} obj Optional instance to populate.
     * @return {module:model/NetworkAreaInfo} The populated <code>NetworkAreaInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NetworkAreaInfo();

        if (data.hasOwnProperty('ecgis')) {
          obj['ecgis'] = _ApiClient["default"].convertToType(data['ecgis'], [_Ecgi["default"]]);
        }

        if (data.hasOwnProperty('ncgis')) {
          obj['ncgis'] = _ApiClient["default"].convertToType(data['ncgis'], [_Ncgi["default"]]);
        }

        if (data.hasOwnProperty('gRanNodeIds')) {
          obj['gRanNodeIds'] = _ApiClient["default"].convertToType(data['gRanNodeIds'], [_GlobalRanNodeId["default"]]);
        }

        if (data.hasOwnProperty('tais')) {
          obj['tais'] = _ApiClient["default"].convertToType(data['tais'], [_Tai["default"]]);
        }
      }

      return obj;
    }
  }]);

  return NetworkAreaInfo;
}();
/**
 * Contains a list of E-UTRA cell identities.
 * @member {Array.<module:model/Ecgi>} ecgis
 */


NetworkAreaInfo.prototype['ecgis'] = undefined;
/**
 * Contains a list of NR cell identities.
 * @member {Array.<module:model/Ncgi>} ncgis
 */

NetworkAreaInfo.prototype['ncgis'] = undefined;
/**
 * Contains a list of NG RAN nodes.
 * @member {Array.<module:model/GlobalRanNodeId>} gRanNodeIds
 */

NetworkAreaInfo.prototype['gRanNodeIds'] = undefined;
/**
 * Contains a list of tracking area identities.
 * @member {Array.<module:model/Tai>} tais
 */

NetworkAreaInfo.prototype['tais'] = undefined;
var _default = NetworkAreaInfo;
exports["default"] = _default;