'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var nco = function nco(variable, defaultValue) {
  return variable === null || typeof variable === 'undefined' ? defaultValue : variable;
};

exports.default = nco;