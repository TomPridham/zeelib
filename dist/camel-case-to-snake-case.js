'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var camelCaseToSnakeCase = function camelCaseToSnakeCase(str) {
  return str.replace(/[A-Z]/g, function (match) {
    return '_' + match.toLowerCase();
  }).toLowerCase();
};

exports.default = camelCaseToSnakeCase;