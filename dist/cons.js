"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var cons = function cons(el, arr) {
  var l = arr.length;
  var b = Array(l + 1);
  b[0] = el;
  for (var i = 0; i < l; ++i) {
    b[i + 1] = arr[i];
  }
  return b;
};

exports.default = cons;