"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var isPow2 = function isPow2(n) {
  return 1 << n.toString(2).length - 1 === n;
};

exports.default = isPow2;