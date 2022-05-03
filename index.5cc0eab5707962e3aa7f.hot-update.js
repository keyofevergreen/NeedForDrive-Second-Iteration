/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/pages/Edit/components/PointEdit/hooks.ts":
/*!******************************************************!*\
  !*** ./src/pages/Edit/components/PointEdit/hooks.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePointsById": () => (/* binding */ usePointsById)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_Points_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store/Points/thunks */ "./src/store/Points/thunks.ts");



const usePointsById = (pointId, setValue) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    pointById,
    pointByIdLoading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.points);

  const setValuesToForm = async orderStatus => {
    setValue('name', orderStatus.name, {
      shouldDirty: true
    });
    setValue('address', orderStatus.address, {
      shouldDirty: true
    });
    setValue('cityId', orderStatus.cityId.id, {
      shouldDirty: true
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (pointId) {
      dispatch((0,_store_Points_thunks__WEBPACK_IMPORTED_MODULE_2__.fetchPoint)(pointId));
    }
  }, [pointId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (pointById && pointId) {
      setValuesToForm(pointById);
    }
  }, [pointById]);
  return pointByIdLoading;
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("47916348da67ab151af6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.5cc0eab5707962e3aa7f.hot-update.js.map