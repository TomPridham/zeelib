"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var lispCaseToCamelCase = function lispCaseToCamelCase(str) {
  return str.toLowerCase().replace(/-[a-z]/g, function (match) {
    return match.slice(1).toUpperCase();
  });
};

exports.default = lispCaseToCamelCase;