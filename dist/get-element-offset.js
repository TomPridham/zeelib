"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var getElementOffset = function getElementOffset(el) {
  var r = el.getBoundingClientRect();
  var d = document.documentElement;
  var w = window;
  var top = r.top + w.pageYOffset - (d && d.clientTop || 0);
  var left = r.left + w.pageXOffset - (d && d.clientLeft || 0);
  return { top: top, left: left };
};

exports.default = getElementOffset;