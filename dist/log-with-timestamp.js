'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


function logWithTimestamp() {
  var date = new Date();
  var timestamp = date.getDate() + '/' + date.getMonth() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '.' + date.getMilliseconds();
  var message = Array.prototype.slice.call(arguments);
  message.unshift('--');
  message.unshift(timestamp);
  console.log.apply(console, message);
}

exports.default = logWithTimestamp;