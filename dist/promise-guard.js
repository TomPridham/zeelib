'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var promiseGuard=function(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:new Error(a+' was false');return Promise[a()?'resolve':'reject'](b)};exports.default=promiseGuard;