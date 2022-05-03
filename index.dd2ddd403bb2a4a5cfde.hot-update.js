/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/utils/helpers/fetchLocalImage.ts":
/*!**********************************************!*\
  !*** ./src/utils/helpers/fetchLocalImage.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fetchLocalImage = async (path, name) => {
  return fetch(path).then(r => r.blob()).then(imageBlob => {
    const image = new File([imageBlob], name);
    const dt = new DataTransfer();
    dt.items.add(image);
    return dt.files;
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchLocalImage);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6cb50d5249d9b8fba396")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.dd2ddd403bb2a4a5cfde.hot-update.js.map