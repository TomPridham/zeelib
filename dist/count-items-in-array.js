"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var countItemsInArray=function(a){return a.reduce(function(b,a){return b[a]++?0:b[a]=1,b},{})};exports.default=countItemsInArray;