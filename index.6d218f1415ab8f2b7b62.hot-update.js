/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/store/OrderStatus/reducer.ts":
/*!******************************************!*\
  !*** ./src/store/OrderStatus/reducer.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/store/OrderStatus/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const orderStatusReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createReducer)({
  orderStatus: null,
  loading: false,
  error: null,
  orderStatusById: null,
  orderStatusByIdLoading: false,
  orderStatusByIdError: null,
  uploadedOrderStatus: null,
  uploadedOrderStatusLoading: false,
  uploadedOrderStatusError: null
}, {
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestOrderStatuses.type]: state => _objectSpread(_objectSpread({}, state), {}, {
    orderStatus: null,
    loading: true,
    error: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestOrderStatusesSuccess.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    orderStatus: payload,
    loading: false,
    error: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestOrderStatusesError.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    orderStatus: null,
    loading: false,
    error: payload
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestOrderStatus.type]: state => _objectSpread(_objectSpread({}, state), {}, {
    orderStatusById: null,
    orderStatusByIdLoading: true,
    orderStatusByIdError: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestOrderStatusSuccess.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    orderStatusById: payload,
    orderStatusByIdLoading: false,
    orderStatusByIdError: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestOrderStatusError.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    orderStatusById: null,
    orderStatusByIdLoading: false,
    orderStatusByIdError: payload
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.uploadOrderStatus.type]: state => _objectSpread(_objectSpread({}, state), {}, {
    uploadedOrderStatus: null,
    uploadedOrderStatusLoading: true,
    uploadedOrderStatusError: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.uploadOrderStatusSuccess.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    uploadedOrderStatus: payload,
    uploadedOrderStatusLoading: false,
    uploadedOrderStatusError: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.uploadOrderStatusError.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    uploadedOrderStatus: null,
    uploadedOrderStatusLoading: false,
    uploadedOrderStatusError: payload
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (orderStatusReducer);

/***/ }),

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
/* harmony export */   "editOrderStatus": () => (/* binding */ editOrderStatus)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/store/OrderStatus/actions.ts");
/* harmony import */ var _ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorProvider/actions */ "./src/store/ErrorProvider/actions.ts");


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
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.uploadOrderStatus)());
    const {
      data
    } = await services.table.postEntity('orderStatus', newOrderStatus);
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.uploadOrderStatusSuccess)(data.data));
    dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addSuccessAlert)('Статус заказа создан'));
  } catch (error) {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.uploadOrderStatusError)(error.response.status));
    dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addToErrorHandler)(error.response.status));
  }
};
const editOrderStatus = (newOrderStatus, orderStatusId) => async (dispatch, getState, {
  services
}) => {
  try {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.uploadOrderStatus)());
    const {
      data
    } = await services.table.putEntity('orderStatus', newOrderStatus, orderStatusId);
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.uploadOrderStatusSuccess)(data.data));
    dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addSuccessAlert)('Статус заказа сохранен'));
  } catch (error) {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.uploadOrderStatusError)(error.response.status));
    dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addToErrorHandler)(error.response.status));
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a48f721c8a2bbfa957a1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.6d218f1415ab8f2b7b62.hot-update.js.map