'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var escapeHtml = function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
};

exports.default = escapeHtml;