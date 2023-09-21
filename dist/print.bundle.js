"use strict";
(self["webpackChunkchumeng"] = self["webpackChunkchumeng"] || []).push([["print"],{

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printMe),
/* harmony export */   test: () => (/* binding */ test)
/* harmony export */ });
function printMe() {
  console.log('I get called from print.js!');
}


function test(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      let r = arr[j].some(item => arr[j+1].includes(item));
      if (r === true) {
        return [i,j+1]
      }
    }
  }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/print.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxrQkFBa0IsYUFBYTtBQUMvQixvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2h1bWVuZy8uL3NyYy9wcmludC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludE1lKCkge1xyXG4gIGNvbnNvbGUubG9nKCdJIGdldCBjYWxsZWQgZnJvbSBwcmludC5qcyEnKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0ZXN0KGFycikge1xyXG4gIGxldCBsZW4gPSBhcnIubGVuZ3RoO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuIC0gMTsgaSsrKSB7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbiAtIDEgLSBpOyBqKyspIHtcclxuICAgICAgbGV0IHIgPSBhcnJbal0uc29tZShpdGVtID0+IGFycltqKzFdLmluY2x1ZGVzKGl0ZW0pKTtcclxuICAgICAgaWYgKHIgPT09IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gW2ksaisxXVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9