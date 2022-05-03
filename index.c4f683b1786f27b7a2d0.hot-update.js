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
const dataUrlToFile = (dataUrl, filename) => {
  const arr = dataUrl.split(',');

  if (arr.length < 2) {
    return undefined;
  }

  const mimeArr = arr[0].match(/:(.*?);/);

  if (!mimeArr || mimeArr.length < 2) {
    return undefined;
  }

  const mime = mimeArr[1];
  const buff = Buffer.from(arr[1], 'base64');
  return new File([buff], filename, {
    type: mime
  });
};

const getBase64 = async (file, cb) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = () => cb(dataUrlToFile(reader.result, file.name));

  reader.onerror = error => console.log('Error: ', error);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBase64);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2d25cdbb2740d84433fd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.c4f683b1786f27b7a2d0.hot-update.js.map