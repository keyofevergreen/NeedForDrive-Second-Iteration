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
  getEntities: async (name, config, id) => {
    const url = id ? `/db/${name}/${id}` : `/db/${name}`;
    return _http__WEBPACK_IMPORTED_MODULE_0__["default"].get(url, config);
  },
  postEntity: async (name, body) => {
    console.log(body);
    return _http__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/db/${name}`, body);
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tableService);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4b73901a0df430562152")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.1148920f2a6fc09a4027.hot-update.js.map