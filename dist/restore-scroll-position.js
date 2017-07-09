"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var restoreScrollPosition = function restoreScrollPosition(_ref) {
  var scrollX = _ref.scrollX,
      scrollY = _ref.scrollY;
  return window.scrollTo(scrollX, scrollY);
};

exports.default = restoreScrollPosition;