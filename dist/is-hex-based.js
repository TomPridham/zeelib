'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _getHexRegex=require('./get-hex-regex'),_getHexRegex2=_interopRequireDefault(_getHexRegex);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var isHexBased=function(a){return(0,_getHexRegex2.default)().test(a)};exports.default=isHexBased;