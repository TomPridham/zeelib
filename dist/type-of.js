'use strict';var _typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a},_isArray=require('./is-array'),_isArray2=_interopRequireDefault(_isArray),_isDate=require('./is-date'),_isDate2=_interopRequireDefault(_isDate);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var typeOf=function(b){return'object'===('undefined'==typeof b?'undefined':_typeof(b))?null===b?'null':b&&1===b.nodeType?'dom':(0,_isArray2.default)(b)?'array':(0,_isDate2.default)(b)?'date':'object':'undefined'==typeof b?'undefined':_typeof(b)};exports.default=typeOf;