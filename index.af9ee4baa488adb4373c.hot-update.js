/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/pages/Edit/components/OrderStatusEdit/hooks.ts":
/*!************************************************************!*\
  !*** ./src/pages/Edit/components/OrderStatusEdit/hooks.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useOrderStatusById": () => (/* binding */ useOrderStatusById)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_Cars_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store/Cars/thunks */ "./src/store/Cars/thunks.ts");



const useOrderStatusById = (orderStatusId, setValue) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    orderStatusById,
    orderStatusByIdLoading,
    orderStatusByIdError
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.orderStatus);

  const setValuesToForm = async orderStatus => {
    setValue('name', orderStatus.name, {
      shouldDirty: true
    });
    console.log(orderStatus);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (orderStatusId) {
      dispatch((0,_store_Cars_thunks__WEBPACK_IMPORTED_MODULE_2__.fetchCar)(orderStatusId));
    }
  }, [orderStatusId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (orderStatusById && orderStatusId) {
      setValuesToForm(orderStatusById);
    }
  }, [orderStatusById]);
  return [orderStatusById, orderStatusByIdLoading];
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5dcfb1ca20b8bda1d76a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.af9ee4baa488adb4373c.hot-update.js.map