"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var foldl1 = function foldl1(f, a) {
  var s = a[0];
  for (var i = 1; i < a.length; i++) {
    s = f(s, a[i]);
  }
  return s;
};

exports.default = foldl1;