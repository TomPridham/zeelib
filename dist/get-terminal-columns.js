"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var getTerminalColumns = function getTerminalColumns() {
  return process.stdout.columns;
};

exports.default = getTerminalColumns;