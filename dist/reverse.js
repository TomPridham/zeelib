"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var reverse = function reverse(items) {
  var result = [];
  for (var i = items.length - 1; i >= 0; i--) {
    result.push(items[i]);
  }
  return result;
};

exports.default = reverse;