/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/pages/OrderStatus/hooks.ts":
/*!****************************************!*\
  !*** ./src/pages/OrderStatus/hooks.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useOrderStatuses": () => (/* binding */ useOrderStatuses),
/* harmony export */   "useSortedOrderStatus": () => (/* binding */ useSortedOrderStatus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_OrderStatus_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/OrderStatus/thunks */ "./src/store/OrderStatus/thunks.ts");



const statusOrderAlerts = ['Статус заказа сохранен', 'Статус заказа создан', 'Статус заказа удален'];
const useOrderStatuses = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    orderStatus,
    loading,
    error
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.orderStatus);
  const {
    successAlertMessage
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.uploadedEntity);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (statusOrderAlerts.includes(successAlertMessage)) {
      dispatch((0,_store_OrderStatus_thunks__WEBPACK_IMPORTED_MODULE_2__.fetchOrderStatuses)());
    }
  }, [successAlertMessage]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_store_OrderStatus_thunks__WEBPACK_IMPORTED_MODULE_2__.fetchOrderStatuses)());
  }, []);
  return [orderStatus, loading, error];
};
const useSortedOrderStatus = orderStatuses => {
  const {
    searchSort
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.search);

  if (orderStatuses) {
    return orderStatuses.filter(orderStatus => {
      return orderStatus.name.toLowerCase().includes(searchSort.toLowerCase());
    });
  }

  return [];
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c3db1513cc3c2c78b769")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.6db5ca56ecfc186d3021.hot-update.js.map