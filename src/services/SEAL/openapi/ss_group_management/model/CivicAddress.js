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
 * The CivicAddress model module.
 * @module model/CivicAddress
 * @version 1.1.0-alpha.4
 */
var CivicAddress = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CivicAddress</code>.
   * Indicates a Civic address.
   * @alias module:model/CivicAddress
   */
  function CivicAddress() {
    _classCallCheck(this, CivicAddress);

    CivicAddress.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CivicAddress, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CivicAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CivicAddress} obj Optional instance to populate.
     * @return {module:model/CivicAddress} The populated <code>CivicAddress</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CivicAddress();

        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');
        }

        if (data.hasOwnProperty('A1')) {
          obj['A1'] = _ApiClient["default"].convertToType(data['A1'], 'String');
        }

        if (data.hasOwnProperty('A2')) {
          obj['A2'] = _ApiClient["default"].convertToType(data['A2'], 'String');
        }

        if (data.hasOwnProperty('A3')) {
          obj['A3'] = _ApiClient["default"].convertToType(data['A3'], 'String');
        }

        if (data.hasOwnProperty('A4')) {
          obj['A4'] = _ApiClient["default"].convertToType(data['A4'], 'String');
        }

        if (data.hasOwnProperty('A5')) {
          obj['A5'] = _ApiClient["default"].convertToType(data['A5'], 'String');
        }

        if (data.hasOwnProperty('A6')) {
          obj['A6'] = _ApiClient["default"].convertToType(data['A6'], 'String');
        }

        if (data.hasOwnProperty('PRD')) {
          obj['PRD'] = _ApiClient["default"].convertToType(data['PRD'], 'String');
        }

        if (data.hasOwnProperty('POD')) {
          obj['POD'] = _ApiClient["default"].convertToType(data['POD'], 'String');
        }

        if (data.hasOwnProperty('STS')) {
          obj['STS'] = _ApiClient["default"].convertToType(data['STS'], 'String');
        }

        if (data.hasOwnProperty('HNO')) {
          obj['HNO'] = _ApiClient["default"].convertToType(data['HNO'], 'String');
        }

        if (data.hasOwnProperty('HNS')) {
          obj['HNS'] = _ApiClient["default"].convertToType(data['HNS'], 'String');
        }

        if (data.hasOwnProperty('LMK')) {
          obj['LMK'] = _ApiClient["default"].convertToType(data['LMK'], 'String');
        }

        if (data.hasOwnProperty('LOC')) {
          obj['LOC'] = _ApiClient["default"].convertToType(data['LOC'], 'String');
        }

        if (data.hasOwnProperty('NAM')) {
          obj['NAM'] = _ApiClient["default"].convertToType(data['NAM'], 'String');
        }

        if (data.hasOwnProperty('PC')) {
          obj['PC'] = _ApiClient["default"].convertToType(data['PC'], 'String');
        }

        if (data.hasOwnProperty('BLD')) {
          obj['BLD'] = _ApiClient["default"].convertToType(data['BLD'], 'String');
        }

        if (data.hasOwnProperty('UNIT')) {
          obj['UNIT'] = _ApiClient["default"].convertToType(data['UNIT'], 'String');
        }

        if (data.hasOwnProperty('FLR')) {
          obj['FLR'] = _ApiClient["default"].convertToType(data['FLR'], 'String');
        }

        if (data.hasOwnProperty('ROOM')) {
          obj['ROOM'] = _ApiClient["default"].convertToType(data['ROOM'], 'String');
        }

        if (data.hasOwnProperty('PLC')) {
          obj['PLC'] = _ApiClient["default"].convertToType(data['PLC'], 'String');
        }

        if (data.hasOwnProperty('PCN')) {
          obj['PCN'] = _ApiClient["default"].convertToType(data['PCN'], 'String');
        }

        if (data.hasOwnProperty('POBOX')) {
          obj['POBOX'] = _ApiClient["default"].convertToType(data['POBOX'], 'String');
        }

        if (data.hasOwnProperty('ADDCODE')) {
          obj['ADDCODE'] = _ApiClient["default"].convertToType(data['ADDCODE'], 'String');
        }

        if (data.hasOwnProperty('SEAT')) {
          obj['SEAT'] = _ApiClient["default"].convertToType(data['SEAT'], 'String');
        }

        if (data.hasOwnProperty('RD')) {
          obj['RD'] = _ApiClient["default"].convertToType(data['RD'], 'String');
        }

        if (data.hasOwnProperty('RDSEC')) {
          obj['RDSEC'] = _ApiClient["default"].convertToType(data['RDSEC'], 'String');
        }

        if (data.hasOwnProperty('RDBR')) {
          obj['RDBR'] = _ApiClient["default"].convertToType(data['RDBR'], 'String');
        }

        if (data.hasOwnProperty('RDSUBBR')) {
          obj['RDSUBBR'] = _ApiClient["default"].convertToType(data['RDSUBBR'], 'String');
        }

        if (data.hasOwnProperty('PRM')) {
          obj['PRM'] = _ApiClient["default"].convertToType(data['PRM'], 'String');
        }

        if (data.hasOwnProperty('POM')) {
          obj['POM'] = _ApiClient["default"].convertToType(data['POM'], 'String');
        }

        if (data.hasOwnProperty('usageRules')) {
          obj['usageRules'] = _ApiClient["default"].convertToType(data['usageRules'], 'String');
        }

        if (data.hasOwnProperty('method')) {
          obj['method'] = _ApiClient["default"].convertToType(data['method'], 'String');
        }

        if (data.hasOwnProperty('providedBy')) {
          obj['providedBy'] = _ApiClient["default"].convertToType(data['providedBy'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CivicAddress;
}();
/**
 * @member {String} country
 */


CivicAddress.prototype['country'] = undefined;
/**
 * @member {String} A1
 */

CivicAddress.prototype['A1'] = undefined;
/**
 * @member {String} A2
 */

CivicAddress.prototype['A2'] = undefined;
/**
 * @member {String} A3
 */

CivicAddress.prototype['A3'] = undefined;
/**
 * @member {String} A4
 */

CivicAddress.prototype['A4'] = undefined;
/**
 * @member {String} A5
 */

CivicAddress.prototype['A5'] = undefined;
/**
 * @member {String} A6
 */

CivicAddress.prototype['A6'] = undefined;
/**
 * @member {String} PRD
 */

CivicAddress.prototype['PRD'] = undefined;
/**
 * @member {String} POD
 */

CivicAddress.prototype['POD'] = undefined;
/**
 * @member {String} STS
 */

CivicAddress.prototype['STS'] = undefined;
/**
 * @member {String} HNO
 */

CivicAddress.prototype['HNO'] = undefined;
/**
 * @member {String} HNS
 */

CivicAddress.prototype['HNS'] = undefined;
/**
 * @member {String} LMK
 */

CivicAddress.prototype['LMK'] = undefined;
/**
 * @member {String} LOC
 */

CivicAddress.prototype['LOC'] = undefined;
/**
 * @member {String} NAM
 */

CivicAddress.prototype['NAM'] = undefined;
/**
 * @member {String} PC
 */

CivicAddress.prototype['PC'] = undefined;
/**
 * @member {String} BLD
 */

CivicAddress.prototype['BLD'] = undefined;
/**
 * @member {String} UNIT
 */

CivicAddress.prototype['UNIT'] = undefined;
/**
 * @member {String} FLR
 */

CivicAddress.prototype['FLR'] = undefined;
/**
 * @member {String} ROOM
 */

CivicAddress.prototype['ROOM'] = undefined;
/**
 * @member {String} PLC
 */

CivicAddress.prototype['PLC'] = undefined;
/**
 * @member {String} PCN
 */

CivicAddress.prototype['PCN'] = undefined;
/**
 * @member {String} POBOX
 */

CivicAddress.prototype['POBOX'] = undefined;
/**
 * @member {String} ADDCODE
 */

CivicAddress.prototype['ADDCODE'] = undefined;
/**
 * @member {String} SEAT
 */

CivicAddress.prototype['SEAT'] = undefined;
/**
 * @member {String} RD
 */

CivicAddress.prototype['RD'] = undefined;
/**
 * @member {String} RDSEC
 */

CivicAddress.prototype['RDSEC'] = undefined;
/**
 * @member {String} RDBR
 */

CivicAddress.prototype['RDBR'] = undefined;
/**
 * @member {String} RDSUBBR
 */

CivicAddress.prototype['RDSUBBR'] = undefined;
/**
 * @member {String} PRM
 */

CivicAddress.prototype['PRM'] = undefined;
/**
 * @member {String} POM
 */

CivicAddress.prototype['POM'] = undefined;
/**
 * @member {String} usageRules
 */

CivicAddress.prototype['usageRules'] = undefined;
/**
 * @member {String} method
 */

CivicAddress.prototype['method'] = undefined;
/**
 * @member {String} providedBy
 */

CivicAddress.prototype['providedBy'] = undefined;
var _default = CivicAddress;
exports["default"] = _default;