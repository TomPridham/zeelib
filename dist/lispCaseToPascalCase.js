"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var lispCaseToPascalCase=function(a){var b=a.toLowerCase().replace(/-[a-z]/g,function(d){return d.slice(1).toUpperCase()});return b.charAt(0).toUpperCase()+b.slice(1)};exports.default=lispCaseToPascalCase;