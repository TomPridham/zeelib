"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Get the greatest common diviser of all arguments
 */

function greatestCommonDivisor() /*: number*/ {
  var i = arguments.length;
  var a = arguments[--i];
  while (a && i) {
    var b = arguments[--i];
    while (b) {
      var c = a % b;
      a = b;
      b = c;
    }
  }
  return a;
}

exports.default = greatestCommonDivisor;