"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var isFloat = function isFloat(n) {
  return (n | 0) !== n;
};

exports.default = isFloat;