/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/store/Rates/actions.ts":
/*!************************************!*\
  !*** ./src/store/Rates/actions.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "requestRates": () => (/* binding */ requestRates),
/* harmony export */   "requestRatesSuccess": () => (/* binding */ requestRatesSuccess),
/* harmony export */   "requestRatesError": () => (/* binding */ requestRatesError),
/* harmony export */   "requestRate": () => (/* binding */ requestRate),
/* harmony export */   "requestRateSuccess": () => (/* binding */ requestRateSuccess),
/* harmony export */   "requestRateError": () => (/* binding */ requestRateError)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const requestRates = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Rates is fetching...');
const requestRatesSuccess = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Rates has already fetched');
const requestRatesError = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Rates fetched with error');
const requestRate = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Rate is fetching...');
const requestRateSuccess = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Rate has already fetched');
const requestRateError = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Rate fetched with error');

/***/ }),

/***/ "./src/store/Rates/reducer.ts":
/*!************************************!*\
  !*** ./src/store/Rates/reducer.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/store/Rates/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const rateReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createReducer)({
  rates: null,
  loading: false,
  error: null,
  rateById: null,
  rateByIdLoading: false,
  rateByIdError: null
}, {
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestRates.type]: state => _objectSpread(_objectSpread({}, state), {}, {
    rates: null,
    loading: true,
    error: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestRatesSuccess.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    rates: payload,
    loading: false,
    error: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestRatesError.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    rates: null,
    loading: false,
    error: payload
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestRate.type]: state => _objectSpread(_objectSpread({}, state), {}, {
    rateById: null,
    rateByIdLoading: true,
    rateByIdError: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestRateSuccess.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    rateById: payload,
    rateByIdLoading: false,
    rateByIdError: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestRateError.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    rateById: null,
    rateByIdLoading: false,
    rateByIdError: payload
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rateReducer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a02df7a1173b7d60ac09")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.4ac5905830eee11e935b.hot-update.js.map