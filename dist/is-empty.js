'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _isString=require('./is-string'),_isString2=_interopRequireDefault(_isString),_isArrayLike=require('./is-array-like'),_isArrayLike2=_interopRequireDefault(_isArrayLike),_isObject=require('./is-object'),_isObject2=_interopRequireDefault(_isObject),_isNullOrUndefined=require('./is-null-or-undefined'),_isNullOrUndefined2=_interopRequireDefault(_isNullOrUndefined);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var isEmpty=function(a){return!!(0,_isNullOrUndefined2.default)(a)||((0,_isString2.default)(a)?/^\s*$/.test(a):(0,_isArrayLike2.default)(a)?!a.length:(0,_isObject2.default)(a)?!Object.keys(a).length:!a)};exports.default=isEmpty;