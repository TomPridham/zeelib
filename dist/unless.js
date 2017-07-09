"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var unless = function unless(cond, fn) {
  return !cond ? fn() : null;
};

exports.default = unless;