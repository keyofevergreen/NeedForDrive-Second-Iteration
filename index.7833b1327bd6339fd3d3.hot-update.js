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

  reader.onload = function () {
    cb(reader.result);
  };

  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBase64);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("48fa9acc27803de2bef4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.7833b1327bd6339fd3d3.hot-update.js.map