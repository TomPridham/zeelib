"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var not = function not(a) {
  return function (b) {
    return a !== b;
  };
};

exports.default = not;