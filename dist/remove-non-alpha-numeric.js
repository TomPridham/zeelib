'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var removeNonAlphaNumeric = function removeNonAlphaNumeric(str) {
  return str.replace(/[^A-Za-z0-9 ]+/g, '');
};

exports.default = removeNonAlphaNumeric;