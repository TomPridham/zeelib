'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var isPromise = function isPromise(a) {
  return a && typeof a.then === 'function';
};

exports.default = isPromise;