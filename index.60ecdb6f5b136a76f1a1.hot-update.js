/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/utils/services/Table/service.ts":
/*!*********************************************!*\
  !*** ./src/utils/services/Table/service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../http */ "./src/http/index.ts");


const tableService = () => ({
  getEntities: async (name, config) => {
    return _http__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/db/${name}`, config);
  },
  postEntity: async (name, body) => {
    console.log(body);
    return _http__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/db/${name}`, body, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tableService);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("36a82dc0219ac04ad8ec")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.60ecdb6f5b136a76f1a1.hot-update.js.map