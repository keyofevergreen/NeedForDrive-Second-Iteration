/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/pages/Edit/components/RateEdit/hooks.ts":
/*!*****************************************************!*\
  !*** ./src/pages/Edit/components/RateEdit/hooks.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useRateById": () => (/* binding */ useRateById)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_Rates_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store/Rates/thunks */ "./src/store/Rates/thunks.ts");



const useRateById = (rateId, setValue) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    rateById,
    rateByIdLoading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.rates);

  const setValuesToForm = async rate => {
    console.log(rate);
    setValue('price', rate.price, {
      shouldDirty: true
    });
    setValue('rateTypeId', (rate === null || rate === void 0 ? void 0 : rate.rateTypeId.id) || 'Выберите тип тарифа', {
      shouldDirty: true
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (rateId) {
      dispatch((0,_store_Rates_thunks__WEBPACK_IMPORTED_MODULE_2__.fetchRate)(rateId));
    }
  }, [rateId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (rateById && rateId) {
      setValuesToForm(rateById);
    }
  }, [rateById]);
  return rateByIdLoading;
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9882db234a883a209f62")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.ee30b1cf17786e09aa37.hot-update.js.map