"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var lexSort = function lexSort(a, b) {
  return a === b ? 0 : a > b ? 1 : -1;
};

exports.default = lexSort;