'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectToString = require('./object-to-string');

var _objectToString2 = _interopRequireDefault(_objectToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDomElement = function isDomElement(v) {
  return (0, _objectToString2.default)(v).slice(8, 12) === 'HTML';
};

exports.default = isDomElement;