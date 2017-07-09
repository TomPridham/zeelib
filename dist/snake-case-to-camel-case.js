"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var snakeCaseToCamelCase = function snakeCaseToCamelCase(str) {
  return str.replace(/(_\w)/g, function (match) {
    return match[1].toUpperCase();
  });
};

exports.default = snakeCaseToCamelCase;