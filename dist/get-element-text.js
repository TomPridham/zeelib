'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var getElementText=function(a){var b=a.tagName.toLowerCase();return'select'===b?a.textContent:'textarea'===b||'input'===b?a.value:''};exports.default=getElementText;