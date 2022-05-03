/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/pages/Cars/hooks.ts":
/*!*********************************!*\
  !*** ./src/pages/Cars/hooks.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCars": () => (/* binding */ useCars)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_Cars_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/Cars/thunks */ "./src/store/Cars/thunks.ts");



const useCars = (sorts, page) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    cars,
    loading,
    error
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.cars);
  const {
    uploadedEntity
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.uploadedEntity);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const {
      categoryId,
      tank,
      lowerPrice,
      higherPrice
    } = sorts;
    const config = {
      params: {
        page,
        limit: 10
      }
    };
    config.params['priceMin[$gt]'] = lowerPrice;
    config.params['priceMax[$lt]'] = higherPrice;

    if (categoryId && categoryId !== 'Все категории') {
      config.params['categoryId[id]'] = categoryId;
    }

    if (tank && tank !== 'Любой запас топлива') {
      if (tank === '100') {
        config.params.tank = tank;
      } else {
        config.params['tank[$gt]'] = tank;
      }
    }

    dispatch((0,_store_Cars_thunks__WEBPACK_IMPORTED_MODULE_2__.fetchCars)(config));
  }, [sorts, page, uploadedEntity]);
  return [cars, loading, error];
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d1e88564261e1eacb0de")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.7c9967a174d3a8af6aa9.hot-update.js.map