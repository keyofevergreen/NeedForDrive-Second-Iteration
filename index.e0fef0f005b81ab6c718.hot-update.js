/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

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
  [_actions__WEBPACK_IMPORTED_MODULE_0__.clearUploadedEntityData.type]: state => _objectSpread(_objectSpread({}, state), {}, {
    uploadedEntity: null,
    uploadedEntityLoading: false,
    uploadedEntityError: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.addSuccessAlertMessage.type]: state => _objectSpread(_objectSpread({}, state), {}, {
    successAlertMessage: payload
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.clearSuccessAlertMessage.type]: state => _objectSpread(_objectSpread({}, state), {}, {
    successAlertMessage: null
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uploadedEntityReducer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("70e228552741dd527734")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.e0fef0f005b81ab6c718.hot-update.js.map