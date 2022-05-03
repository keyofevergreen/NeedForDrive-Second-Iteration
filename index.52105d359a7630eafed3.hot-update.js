/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/store/ErrorProvider/actions.ts":
/*!********************************************!*\
  !*** ./src/store/ErrorProvider/actions.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToErrorHandler": () => (/* binding */ addToErrorHandler),
/* harmony export */   "resetErrorHandler": () => (/* binding */ resetErrorHandler),
/* harmony export */   "addSuccessAlert": () => (/* binding */ addSuccessAlert),
/* harmony export */   "clearSuccessAlert": () => (/* binding */ clearSuccessAlert)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const addToErrorHandler = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Error added to error handler');
const resetErrorHandler = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Error handler is reset');
const addSuccessAlert = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Success alert has set');
const clearSuccessAlert = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Success alert cleared');

/***/ }),

/***/ "./src/store/ErrorProvider/reducer.ts":
/*!********************************************!*\
  !*** ./src/store/ErrorProvider/reducer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/store/ErrorProvider/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const errorHandlerReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createReducer)({
  errors: [],
  successAlert: null
}, {
  [_actions__WEBPACK_IMPORTED_MODULE_0__.addToErrorHandler.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    errors: [...state.errors, payload]
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.resetErrorHandler.type]: state => _objectSpread(_objectSpread({}, state), {}, {
    errors: []
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.addSuccessAlert.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    successAlert: payload
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.clearSuccessAlert.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    successAlert: null
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (errorHandlerReducer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("005b7c76869cfa9d36f9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.52105d359a7630eafed3.hot-update.js.map