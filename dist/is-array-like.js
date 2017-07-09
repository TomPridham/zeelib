'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isNumber = require('./is-number');

var _isNumber2 = _interopRequireDefault(_isNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isArrayLike = function isArrayLike(v) {
  return v && (0, _isNumber2.default)(v.length);
};

exports.default = isArrayLike;