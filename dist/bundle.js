!function(e){var c={};function t(r){if(c[r])return c[r].exports;var n=c[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=c,t.d=function(r,n,e){t.o(r,n)||Object.defineProperty(r,n,{enumerable:!0,get:e})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var c in n)t.d(e,c,function(r){return n[r]}.bind(null,c));return e},t.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(n,"a",n),n},t.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},t.p="",t(t.s="./src/main.js")}({"./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _romanNumeral_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./romanNumeral.js */ "./src/romanNumeral.js");\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcz9mMDZjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBMEQiLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJvbWFuTnVtZXJhbENvbnZlcnRlciB9IGZyb20gJy4vcm9tYW5OdW1lcmFsLmpzJztcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main.js\n')},"./src/romanNumeral.js":
/*!*****************************!*\
  !*** ./src/romanNumeral.js ***!
  \*****************************/
/*! exports provided: romanNumeralConverter */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "romanNumeralConverter", function() { return romanNumeralConverter; });\n\r\nconst numberDict = {I: 1, V: 5, X: 10, L: 50, C: 100, M:1000};\r\nconst arabicNumber = 0;\r\n\r\nconst romanNumeralConverter = (romanNumber) => {\r\n  // termination condition\r\n  if (romanNumber.length === 0) {\r\n    return 0;\r\n  }\r\n  // base condition\r\n  // if () {\r\n  // } else {\r\n      // if (romanNumber[0] < romanNumber[1]) {\r\n\r\n      // }\r\n\r\n    // console.log(number);\r\n\r\n\r\n  // }\r\n\r\n\r\n\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm9tYW5OdW1lcmFsLmpzPzUyODciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBOztBQUVBOzs7QUFHQTs7OztBQUlBIiwiZmlsZSI6Ii4vc3JjL3JvbWFuTnVtZXJhbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCBudW1iZXJEaWN0ID0ge0k6IDEsIFY6IDUsIFg6IDEwLCBMOiA1MCwgQzogMTAwLCBNOjEwMDB9O1xyXG5jb25zdCBhcmFiaWNOdW1iZXIgPSAwO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvbWFuTnVtZXJhbENvbnZlcnRlciA9IChyb21hbk51bWJlcikgPT4ge1xyXG4gIC8vIHRlcm1pbmF0aW9uIGNvbmRpdGlvblxyXG4gIGlmIChyb21hbk51bWJlci5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuICAvLyBiYXNlIGNvbmRpdGlvblxyXG4gIC8vIGlmICgpIHtcclxuICAvLyB9IGVsc2Uge1xyXG4gICAgICAvLyBpZiAocm9tYW5OdW1iZXJbMF0gPCByb21hbk51bWJlclsxXSkge1xyXG5cclxuICAgICAgLy8gfVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKG51bWJlcik7XHJcblxyXG5cclxuICAvLyB9XHJcblxyXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/romanNumeral.js\n')}});