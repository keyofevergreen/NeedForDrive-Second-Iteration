/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/store/Points/actions.ts":
/*!*************************************!*\
  !*** ./src/store/Points/actions.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "requestPoints": () => (/* binding */ requestPoints),
/* harmony export */   "requestPointsSuccess": () => (/* binding */ requestPointsSuccess),
/* harmony export */   "requestPointsError": () => (/* binding */ requestPointsError),
/* harmony export */   "requestPoint": () => (/* binding */ requestPoint),
/* harmony export */   "requestPointSuccess": () => (/* binding */ requestPointSuccess),
/* harmony export */   "requestPointError": () => (/* binding */ requestPointError)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const requestPoints = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Points is fetching...');
const requestPointsSuccess = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Points has already fetched');
const requestPointsError = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Points fetched with error');
const requestPoint = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Point is fetching...');
const requestPointSuccess = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Point has already fetched');
const requestPointError = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Point fetched with error');

/***/ }),

/***/ "./src/store/Points/reducer.ts":
/*!*************************************!*\
  !*** ./src/store/Points/reducer.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/store/Points/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const pointsReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createReducer)({
  points: null,
  loading: false,
  error: null,
  pointById: null,
  pointByIdLoading: false,
  pointByIdError: null
}, {
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestPoints.type]: state => _objectSpread(_objectSpread({}, state), {}, {
    points: null,
    loading: true,
    error: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestPointsSuccess.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    points: payload,
    loading: false,
    error: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestPointsError.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    points: null,
    loading: false,
    error: payload
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestPoint.type]: state => _objectSpread(_objectSpread({}, state), {}, {
    pointById: null,
    pointByIdLoading: true,
    pointByIdError: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestPointSuccess.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    pointById: payload,
    pointByIdLoading: false,
    pointByIdError: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestPointError.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    pointById: null,
    pointByIdLoading: false,
    pointByIdError: payload
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pointsReducer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("31549a3c99204ea043b1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.f32f9245a99dd1bbb314.hot-update.js.map