'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var getReferrer = function getReferrer() {
  return document.referrer || '';
};

exports.default = getReferrer;