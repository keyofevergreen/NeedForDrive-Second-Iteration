/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/store/Cars/actions.ts":
/*!***********************************!*\
  !*** ./src/store/Cars/actions.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "requestCars": () => (/* binding */ requestCars),
/* harmony export */   "requestCarsSuccess": () => (/* binding */ requestCarsSuccess),
/* harmony export */   "requestCarsError": () => (/* binding */ requestCarsError),
/* harmony export */   "requestCar": () => (/* binding */ requestCar),
/* harmony export */   "requestCarSuccess": () => (/* binding */ requestCarSuccess),
/* harmony export */   "requestCarError": () => (/* binding */ requestCarError)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const requestCars = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Cars is fetching...');
const requestCarsSuccess = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Cars has already fetched');
const requestCarsError = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Cars fetched with error');
const requestCar = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Car is fetching...');
const requestCarSuccess = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Car has already fetched');
const requestCarError = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Car fetched with error');

/***/ }),

/***/ "./src/store/Cars/reducer.ts":
/*!***********************************!*\
  !*** ./src/store/Cars/reducer.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/store/Cars/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const carsReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createReducer)({
  cars: null,
  loading: false,
  error: null,
  carById: null,
  carByIdLoading: false,
  carByIdError: null
}, {
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestCars.type]: state => _objectSpread(_objectSpread({}, state), {}, {
    cars: null,
    loading: true,
    error: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestCarsSuccess.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    cars: payload,
    loading: false,
    error: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestCarsError.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    cars: null,
    loading: false,
    error: payload
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestCar.type]: state => _objectSpread(_objectSpread({}, state), {}, {
    carById: null,
    carByIdLoading: true,
    carByIdError: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestCarSuccess.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    carById: payload,
    carByIdLoading: false,
    carByIdError: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestCarError.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    carById: null,
    carByIdLoading: false,
    carByIdError: payload
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carsReducer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("58dac2ed7994304d2938")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.0f6207ac545d88cdb7d8.hot-update.js.map