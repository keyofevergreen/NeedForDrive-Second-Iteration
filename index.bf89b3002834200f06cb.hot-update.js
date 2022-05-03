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
    setValue('rateTypeId', rate.rateTypeId || 'Выберите тип тарифа', {
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
/******/ 	__webpack_require__.h = () => ("ee30b1cf17786e09aa37")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.bf89b3002834200f06cb.hot-update.js.map