/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/store/Edit/actions.ts":
/*!***********************************!*\
  !*** ./src/store/Edit/actions.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uploadEntity": () => (/* binding */ uploadEntity),
/* harmony export */   "uploadEntitySuccess": () => (/* binding */ uploadEntitySuccess),
/* harmony export */   "uploadEntityError": () => (/* binding */ uploadEntityError),
/* harmony export */   "clearUploadedEntityData": () => (/* binding */ clearUploadedEntityData),
/* harmony export */   "addSuccessAlert": () => (/* binding */ addSuccessAlert),
/* harmony export */   "clearSuccessAlert": () => (/* binding */ clearSuccessAlert)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const uploadEntity = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Entity is posting...');
const uploadEntitySuccess = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Entity has already posted');
const uploadEntityError = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Entity not posted');
const clearUploadedEntityData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Clear uploaded entity response data...');
const addSuccessAlert = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Success alert has set');
const clearSuccessAlert = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Success alert cleared');

/***/ }),

/***/ "./src/store/Edit/reducer.ts":
/*!***********************************!*\
  !*** ./src/store/Edit/reducer.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/store/Edit/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const uploadedEntityReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createReducer)({
  uploadedEntity: null,
  uploadedEntityLoading: false,
  uploadedEntityError: null,
  successAlertMessage: null
}, {
  [_actions__WEBPACK_IMPORTED_MODULE_0__.uploadEntity.type]: state => _objectSpread(_objectSpread({}, state), {}, {
    uploadedEntity: null,
    uploadedEntityLoading: true,
    uploadedEntityError: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.uploadEntitySuccess.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    uploadedEntity: payload,
    uploadedEntityLoading: false,
    uploadedEntityError: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.uploadEntityError.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    uploadedEntity: null,
    uploadedEntityLoading: false,
    uploadedEntityError: payload
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.clearUploadedEntityData.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    uploadedEntity: null,
    uploadedEntityLoading: false,
    uploadedEntityError: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.addSuccessAlert.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    successAlertMessage: payload
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.clearSuccessAlert.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    successAlertMessage: null
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uploadedEntityReducer);

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
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (errorHandlerReducer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("74d03d8a3064574d1b1f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.b64263b59fc8b2c00704.hot-update.js.map