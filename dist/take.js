"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var take = function take(num, arr) {
  var alen = arr.length;
  if (num > alen) return arr;
  var a1 = [];
  for (var i = 0; i < num && i < alen; i++) {
    a1.push(arr[i]);
  }
  return a1;
};

exports.default = take;