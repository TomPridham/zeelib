"use strict";Object.defineProperty(exports,"__esModule",{value:true});var isInstalled=function isInstalled(pkgName){try{require.resolve(pkgName);return true}catch(e){return false}};exports.default=isInstalled;