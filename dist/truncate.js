'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var truncate = function truncate(str, limit) {
  var tail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '…';

  if (str.length > limit) {
    limit = limit - tail.length;
    return '' + str.substr(0, limit) + tail;
  }
  return str;
};

exports.default = truncate;