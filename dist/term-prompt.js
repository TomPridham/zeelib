'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _readline = require('readline');

var termPrompt = function termPrompt(question, isYesDefault) {
  return new Promise(function (resolve) {
    var rlInterface = (0, _readline.createInterface)({
      input: process.stdin,
      output: process.stdout
    });

    var hint = isYesDefault ? '[Y/n]' : '[y/N]';
    var message = question + ' ' + hint + '\n';

    rlInterface.question(message, function (answer) {
      rlInterface.close();

      var useDefault = answer.trim().length === 0;
      if (useDefault) return resolve(isYesDefault);

      var isYes = answer.match(/^(yes|y)$/i);
      return resolve(isYes);
    });
  });
};

exports.default = termPrompt;