"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var getHeight = function getHeight() {
  return window.innerHeight || window.document.documentElement.clientHeight;
};

exports.default = getHeight;