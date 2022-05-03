/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/utils/helpers/getBase64.ts":
/*!****************************************!*\
  !*** ./src/utils/helpers/getBase64.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getBase64 = async (file, cb) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = () => cb(new File(reader.result, file.name));

  reader.onerror = error => console.log('Error: ', error);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBase64);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c4f683b1786f27b7a2d0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.dae0d4998bfbe75f64a4.hot-update.js.map