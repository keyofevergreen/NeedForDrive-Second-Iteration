/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/pages/RateTypes/hooks.ts":
/*!**************************************!*\
  !*** ./src/pages/RateTypes/hooks.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useRateTypes": () => (/* binding */ useRateTypes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_RateTypes_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/RateTypes/thunks */ "./src/store/RateTypes/thunks.ts");



const useRateTypes = (name, page) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    rateTypes,
    loading,
    error
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.rateTypes);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const config = {
      params: {
        page,
        limit: page ? 10 : 1000
      }
    };
    config.params['sort[createdAt]'] = -1;

    if (name && name !== 'Все тарифы') {
      config.params.name = name;
    }

    dispatch((0,_store_RateTypes_thunks__WEBPACK_IMPORTED_MODULE_2__.fetchRateTypes)(config));
  }, [name, page]);
  return [rateTypes, loading, error];
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c9039a0a474616d3b6fb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.2dead4a042f556e4fafe.hot-update.js.map