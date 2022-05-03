/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/store/Rates/thunks.ts":
/*!***********************************!*\
  !*** ./src/store/Rates/thunks.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchRates": () => (/* binding */ fetchRates),
/* harmony export */   "fetchRate": () => (/* binding */ fetchRate)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/store/Rates/actions.ts");
/* harmony import */ var _ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorProvider/actions */ "./src/store/ErrorProvider/actions.ts");


const fetchRates = config => async (dispatch, getState, {
  services
}) => {
  try {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestRates)());
    const {
      data
    } = await services.table.getEntities('rate', config);
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestRatesSuccess)(data));
  } catch (error) {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestRatesError)(error.response.status));
    dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addToErrorHandler)(error.response.status));
  }
};
const fetchRate = rateId => async (dispatch, getState, {
  services
}) => {
  try {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestRate)());
    const {
      data
    } = await services.table.getEntities('rate', {}, rateId);
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestRateSuccess)(data.data));
  } catch (error) {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestRateError)(error.response.status));
    dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addToErrorHandler)(error.response.status));
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7c34989728ae6cbd11db")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.64b910f2aac9d52e417d.hot-update.js.map