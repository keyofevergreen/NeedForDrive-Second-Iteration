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
/* harmony export */   "useOrderStatusById": () => (/* binding */ useOrderStatusById),
/* harmony export */   "useUploadedOrderStatus": () => (/* binding */ useUploadedOrderStatus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_OrderStatus_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store/OrderStatus/thunks */ "./src/store/OrderStatus/thunks.ts");
/* harmony import */ var _store_OrderStatus_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../store/OrderStatus/actions */ "./src/store/OrderStatus/actions.ts");




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
      dispatch((0,_store_OrderStatus_thunks__WEBPACK_IMPORTED_MODULE_2__.fetchOrderStatus)(orderStatusId));
    }
  }, [orderStatusId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (orderStatusById && orderStatusId) {
      setValuesToForm(orderStatusById);
    }
  }, [orderStatusById]);
  return orderStatusByIdLoading;
};
const useUploadedOrderStatus = (orderStatusId, navigate) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    uploadedOrderStatus,
    uploadedOrderStatusLoading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.orderStatus);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (uploadedOrderStatus && !orderStatusId) {
      navigate(`/edit/order-status/${uploadedOrderStatus.id}`);
      dispatch((0,_store_OrderStatus_actions__WEBPACK_IMPORTED_MODULE_3__.clearUploadedOrderStatusData)());
    }
  }, [uploadedOrderStatus]);
  return uploadedOrderStatusLoading;
};

/***/ }),

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



const useOrderStatuses = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    orderStatus,
    loading,
    error,
    uploadedOrderStatus
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.orderStatus);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_store_OrderStatus_thunks__WEBPACK_IMPORTED_MODULE_2__.fetchOrderStatuses)());
  }, [uploadedOrderStatus]);
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
/******/ 	__webpack_require__.h = () => ("31b6bf3f283f5f421ec1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.521b91676d227414e59a.hot-update.js.map