'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _getIsBrowser=require('./getIsBrowser'),_getIsBrowser2=_interopRequireDefault(_getIsBrowser);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var setTitle=function(a){(0,_getIsBrowser2.default)()?window.title=a:process.title=a};exports.default=setTitle;