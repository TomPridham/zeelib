"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var getScrollBarWidth = function getScrollBarWidth() {
  return window.innerWidth - window.document.documentElement.clientWidth;
};

exports.default = getScrollBarWidth;