"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var getTerminalRows = function getTerminalRows() {
  return process.stdout.rows;
};

exports.default = getTerminalRows;