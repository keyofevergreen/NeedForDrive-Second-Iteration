/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/store/Category/actions.ts":
/*!***************************************!*\
  !*** ./src/store/Category/actions.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "requestCategories": () => (/* binding */ requestCategories),
/* harmony export */   "requestCategoriesSuccess": () => (/* binding */ requestCategoriesSuccess),
/* harmony export */   "requestCategoriesError": () => (/* binding */ requestCategoriesError),
/* harmony export */   "requestCategory": () => (/* binding */ requestCategory),
/* harmony export */   "requestCategorySuccess": () => (/* binding */ requestCategorySuccess),
/* harmony export */   "requestCategoryError": () => (/* binding */ requestCategoryError)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const requestCategories = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Categories is fetching...');
const requestCategoriesSuccess = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Categories has already fetched');
const requestCategoriesError = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Categories fetched with error');
const requestCategory = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Category is fetching...');
const requestCategorySuccess = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Category has already fetched');
const requestCategoryError = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Category fetched with error');

/***/ }),

/***/ "./src/store/Category/reducer.ts":
/*!***************************************!*\
  !*** ./src/store/Category/reducer.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/store/Category/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const categoryReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createReducer)({
  category: null,
  loading: false,
  error: null,
  categoryById: null,
  categoryByIdLoading: false,
  categoryByIdError: null
}, {
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestCategories.type]: state => _objectSpread(_objectSpread({}, state), {}, {
    category: null,
    loading: true,
    error: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestCategoriesSuccess.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    category: payload,
    loading: false,
    error: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestCategoriesError.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    category: null,
    loading: false,
    error: payload
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestCategory.type]: state => _objectSpread(_objectSpread({}, state), {}, {
    categoryById: null,
    categoryByIdLoading: true,
    categoryByIdError: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestCategorySuccess.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    categoryById: payload,
    categoryByIdLoading: false,
    categoryByIdError: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestCategoryError.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    categoryById: null,
    categoryByIdLoading: false,
    categoryByIdError: payload
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categoryReducer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9c2cd69275f26d252128")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.faffb9edfa18b780f479.hot-update.js.map