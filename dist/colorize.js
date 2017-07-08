'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('util');

/**
 * Basic set of fns to add colors to console output in Node.
 * Options:
 * bold, italic, underline, inverse,
 * white, grey, black, blue, cyan, green, magenta, red, yellow
 * @example
 * console.log(colorize.bold(colorize.blue('foo'))) // => '\'\\u001b[34mfoo\\u001b[39m\''
 */

var colorize = function colorize(color, text) {
  var codes = _util.inspect.colors[color];
  return '\x1B[' + codes[0] + 'm' + text + '\x1B[' + codes[1] + 'm';
};

var colors = function colors() {
  var val = {};
  Object.keys(_util.inspect.colors).forEach(function (color) {
    val[color] = function (text) {
      return colorize(color, text);
    };
  });
  return val;
};

exports.default = colors();