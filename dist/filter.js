'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _isArrayLike=require('./is-array-like'),_isArrayLike2=_interopRequireDefault(_isArrayLike),_each=require('./each'),_each2=_interopRequireDefault(_each);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function filter(a,b){var c=(0,_isArrayLike2.default)(a),d=c?[]:{};return(0,_each2.default)(a,function(a,e){b(a,e)&&(c&&(e=d.length),d[e]=a)}),d}exports.default=filter;