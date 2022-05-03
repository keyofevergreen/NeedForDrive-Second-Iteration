/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/store/RateTypes/actions.ts":
/*!****************************************!*\
  !*** ./src/store/RateTypes/actions.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "requestRateTypes": () => (/* binding */ requestRateTypes),
/* harmony export */   "requestRateTypesSuccess": () => (/* binding */ requestRateTypesSuccess),
/* harmony export */   "requestRateTypesError": () => (/* binding */ requestRateTypesError),
/* harmony export */   "requestRateType": () => (/* binding */ requestRateType),
/* harmony export */   "requestRateTypeSuccess": () => (/* binding */ requestRateTypeSuccess),
/* harmony export */   "requestRateTypeError": () => (/* binding */ requestRateTypeError)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const requestRateTypes = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Rates types is fetching...');
const requestRateTypesSuccess = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Rates types has already fetched');
const requestRateTypesError = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Rates types fetched with error');
const requestRateType = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Rate type is fetching...');
const requestRateTypeSuccess = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Rate type has already fetched');
const requestRateTypeError = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Rate type fetched with error');

/***/ }),

/***/ "./src/store/RateTypes/reducer.ts":
/*!****************************************!*\
  !*** ./src/store/RateTypes/reducer.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/store/RateTypes/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const rateTypesReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createReducer)({
  rateTypes: null,
  loading: false,
  error: null,
  rateTypeById: null,
  rateTypeByIdLoading: false,
  rateTypeByIdError: null
}, {
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestRateTypes.type]: state => _objectSpread(_objectSpread({}, state), {}, {
    rateTypes: null,
    loading: true,
    error: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestRateTypesSuccess.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    rateTypes: payload,
    loading: false,
    error: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestRateTypesError.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    rateTypes: null,
    loading: false,
    error: payload
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestRateType.type]: state => _objectSpread(_objectSpread({}, state), {}, {
    rateTypeById: null,
    rateTypeByIdLoading: true,
    rateTypeByIdError: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestRateTypeSuccess.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    rateTypeById: payload,
    rateTypeByIdLoading: false,
    rateTypeByIdError: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestRateTypeError.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    rateTypeById: null,
    rateTypeByIdLoading: false,
    rateTypeByIdError: payload
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rateTypesReducer);

/***/ }),

/***/ "./src/store/RateTypes/thunks.ts":
/*!***************************************!*\
  !*** ./src/store/RateTypes/thunks.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchRateTypes": () => (/* binding */ fetchRateTypes),
/* harmony export */   "fetchRateTypeById": () => (/* binding */ fetchRateTypeById)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/store/RateTypes/actions.ts");
/* harmony import */ var _ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorProvider/actions */ "./src/store/ErrorProvider/actions.ts");


const fetchRateTypes = config => async (dispatch, getState, {
  services
}) => {
  try {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestRateTypes)());
    const {
      data
    } = await services.table.getEntities('rateType', config);
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestRateTypesSuccess)(data));
  } catch (error) {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestRateTypesError)(error.response.status));
    dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addToErrorHandler)(error.response.status));
  }
};
const fetchRateTypeById = rateTypeId => async (dispatch, getState, {
  services
}) => {
  try {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestRateType)());
    const {
      data
    } = await services.table.getEntities('rateType', {}, rateTypeId);
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestRateTypeSuccess)(data.data));
  } catch (error) {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestRateTypeError)(error.response.status));
    dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addToErrorHandler)(error.response.status));
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ba4d32798943fe785027")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.672d5fd142637abae452.hot-update.js.map