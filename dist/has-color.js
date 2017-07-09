'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var isWin = function isWin() {
  return process.platform === 'win32';
};

var isColor = function isColor() {
  var termColor = /^screen|^xterm|^vt100|color|ansi|cygwin|linux/i;
  return !!process.env.COLORTERM || termColor.test(process.env.TERM || '');
};

var hasColor = function hasColor() {
  return isWin() || isColor();
};

exports.default = hasColor;