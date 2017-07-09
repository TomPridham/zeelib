'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var alphaNumericOnly = function alphaNumericOnly(str) {
  return str.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ');
};

exports.default = alphaNumericOnly;