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

/***/ "./src/store/Category/thunks.ts":
/*!**************************************!*\
  !*** ./src/store/Category/thunks.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchCategories": () => (/* binding */ fetchCategories)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/store/Category/actions.ts");
/* harmony import */ var _ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorProvider/actions */ "./src/store/ErrorProvider/actions.ts");


const fetchCategories = () => async (dispatch, getState, {
  services
}) => {
  try {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestCategories)());
    const {
      data
    } = await services.table.getEntities('category', {});
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestCategoriesSuccess)(data.data));
  } catch (error) {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestCategoriesError)(error.response.status));
    dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addToErrorHandler)(error.response.status));
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("45b27cd2cb8cb515a98f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.9c2cd69275f26d252128.hot-update.js.map