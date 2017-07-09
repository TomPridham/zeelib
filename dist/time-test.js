'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var timeTest = function timeTest(n, cb) {
  console.time('time');
  var r = cb(n);
  console.timeEnd('time');
  return r;
};

exports.default = timeTest;