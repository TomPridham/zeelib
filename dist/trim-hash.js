'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var trimHash = function trimHash(str) {
  return typeof str === 'string' ? str.replace('#', '') : str;
};

exports.default = trimHash;