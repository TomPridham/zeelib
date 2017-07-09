"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var isAlphaNumeric = function isAlphaNumeric(str) {
  return (/[0-9a-zA-Z]+/.test(str)
  );
};

exports.default = isAlphaNumeric;