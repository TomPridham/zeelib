"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Returns elements that pass predicate,
 * until failure (ignores matches after failure)
 */

var takeWhile = function takeWhile(pred, arr) {
  var stop = arr.length;
  arr.some(function (n, idx) {
    return pred(n, idx) ? false : (stop = idx, true);
  });
  return arr.slice(0, stop);
};

exports.default = takeWhile;