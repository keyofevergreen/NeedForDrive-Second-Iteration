/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/store/OrderStatus/thunks.ts":
/*!*****************************************!*\
  !*** ./src/store/OrderStatus/thunks.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchOrderStatuses": () => (/* binding */ fetchOrderStatuses),
/* harmony export */   "fetchOrderStatus": () => (/* binding */ fetchOrderStatus),
/* harmony export */   "createOrderStatus": () => (/* binding */ createOrderStatus),
/* harmony export */   "editOrderStatus": () => (/* binding */ editOrderStatus),
/* harmony export */   "deleteOrderStatus": () => (/* binding */ deleteOrderStatus)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/store/OrderStatus/actions.ts");
/* harmony import */ var _ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorProvider/actions */ "./src/store/ErrorProvider/actions.ts");
/* harmony import */ var _Edit_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Edit/actions */ "./src/store/Edit/actions.ts");



const fetchOrderStatuses = () => async (dispatch, getState, {
  services
}) => {
  try {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestOrderStatuses)());
    const {
      data
    } = await services.table.getEntities('orderStatus', {});
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestOrderStatusesSuccess)(data.data));
  } catch (error) {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestOrderStatusesError)(error.response.status));
    dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addToErrorHandler)(error.response.status));
  }
};
const fetchOrderStatus = orderStatusId => async (dispatch, getState, {
  services
}) => {
  try {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestOrderStatus)());
    const {
      data
    } = await services.table.getEntities('orderStatus', {}, orderStatusId);
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestOrderStatusSuccess)(data.data));
  } catch (error) {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestOrderStatusError)(error.response.status));
    dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addToErrorHandler)(error.response.status));
  }
};
const createOrderStatus = newOrderStatus => async (dispatch, getState, {
  services
}) => {
  try {
    dispatch((0,_Edit_actions__WEBPACK_IMPORTED_MODULE_2__.uploadEntity)());
    const {
      data
    } = await services.table.postEntity('orderStatus', newOrderStatus);
    dispatch((0,_Edit_actions__WEBPACK_IMPORTED_MODULE_2__.uploadEntitySuccess)(data.data));
    dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addSuccessAlert)('Статус заказа создан'));
  } catch (error) {
    dispatch((0,_Edit_actions__WEBPACK_IMPORTED_MODULE_2__.uploadEntityError)(error.response.status));
    dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addToErrorHandler)(error.response.status));
  }
};
const editOrderStatus = (newOrderStatus, orderStatusId) => async (dispatch, getState, {
  services
}) => {
  try {
    dispatch((0,_Edit_actions__WEBPACK_IMPORTED_MODULE_2__.uploadEntity)());
    const {
      data
    } = await services.table.putEntity('orderStatus', newOrderStatus, orderStatusId);
    dispatch((0,_Edit_actions__WEBPACK_IMPORTED_MODULE_2__.uploadEntitySuccess)(data.data));
    dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addSuccessAlert)('Статус заказа сохранен'));
  } catch (error) {
    dispatch((0,_Edit_actions__WEBPACK_IMPORTED_MODULE_2__.uploadEntityError)(error.response.status));
    dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addToErrorHandler)(error.response.status));
  }
};
const deleteOrderStatus = orderStatusId => {
  return async (dispatch, getState, {
    services
  }) => {
    try {
      dispatch((0,_Edit_actions__WEBPACK_IMPORTED_MODULE_2__.uploadEntity)());
      const {
        data
      } = await services.table.deleteEntity('orderStatus', orderStatusId);
      dispatch((0,_Edit_actions__WEBPACK_IMPORTED_MODULE_2__.uploadEntitySuccess)(data.data));
      dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addSuccessAlert)('Статус заказа удален'));
    } catch (error) {
      dispatch((0,_Edit_actions__WEBPACK_IMPORTED_MODULE_2__.uploadEntityError)(error.response.status));
      dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addToErrorHandler)(error.response.status));
    }
  };
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1dd67d0577feda1e2b5f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.319e364cc3c19101e520.hot-update.js.map