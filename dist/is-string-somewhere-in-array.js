"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var isStringSomewhereInArray = function isStringSomewhereInArray(el, arr) {
  return arr.some(function (a) {
    return el.toLowerCase().includes(a.toLowerCase()) || a.toLowerCase().includes(el.toLowerCase());
  });
};

exports.default = isStringSomewhereInArray;