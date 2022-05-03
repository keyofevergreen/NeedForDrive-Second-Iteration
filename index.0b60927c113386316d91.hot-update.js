/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/store/OrderStatus/actions.ts":
/*!******************************************!*\
  !*** ./src/store/OrderStatus/actions.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "requestOrderStatuses": () => (/* binding */ requestOrderStatuses),
/* harmony export */   "requestOrderStatusesSuccess": () => (/* binding */ requestOrderStatusesSuccess),
/* harmony export */   "requestOrderStatusesError": () => (/* binding */ requestOrderStatusesError),
/* harmony export */   "requestOrderStatus": () => (/* binding */ requestOrderStatus),
/* harmony export */   "requestOrderStatusSuccess": () => (/* binding */ requestOrderStatusSuccess),
/* harmony export */   "requestOrderStatusError": () => (/* binding */ requestOrderStatusError)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const requestOrderStatuses = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Order statuses is fetching...');
const requestOrderStatusesSuccess = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Order statuses has already fetched');
const requestOrderStatusesError = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Order statuses fetched with error');
const requestOrderStatus = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Order status is fetching...');
const requestOrderStatusSuccess = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Order status has already fetched');
const requestOrderStatusError = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Order status fetched with error');

/***/ }),

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
  orderStatusByIdError: null
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
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (orderStatusReducer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f870ac45e7b5b640a713")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.0b60927c113386316d91.hot-update.js.map