/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/pages/Edit/components/RateTypesEdit/hooks.ts":
/*!**********************************************************!*\
  !*** ./src/pages/Edit/components/RateTypesEdit/hooks.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useRateTypeById": () => (/* binding */ useRateTypeById)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_RateTypes_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store/RateTypes/thunks */ "./src/store/RateTypes/thunks.ts");



const useRateTypeById = (rateTypeId, setValue) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    rateTypeById,
    rateTypeByIdLoading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.rateTypes);

  const setValuesToForm = async rateType => {
    setValue('name', rateType.name, {
      shouldDirty: true
    });
    setValue('unit', rateType.unit, {
      shouldDirty: true
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (rateTypeId) {
      dispatch((0,_store_RateTypes_thunks__WEBPACK_IMPORTED_MODULE_2__.fetchRateType)(rateTypeId));
    }
  }, [rateTypeId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (rateTypeById && rateTypeId) {
      setValuesToForm(rateTypeById);
    }
  }, [rateTypeById]);
  return rateTypeByIdLoading;
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9768c556fa5c29cdd960")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.e81b6f8cabffd577cf4d.hot-update.js.map