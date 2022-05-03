/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/store/Points/actions.ts":
/*!*************************************!*\
  !*** ./src/store/Points/actions.ts ***!
  \*************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\dany2\\WebstormProjects\\NeedForDrive-Second-Iteration\\src\\store\\Points\\actions.ts: Identifier 'requestPoints' has already been declared. (9:13)\n\n\u001b[0m \u001b[90m  7 |\u001b[39m \u001b[36mexport\u001b[39m \u001b[36mconst\u001b[39m requestPointsError \u001b[33m=\u001b[39m createAction\u001b[33m<\u001b[39m\u001b[33mnumber\u001b[39m\u001b[33m>\u001b[39m(\u001b[32m'Points fetched with error'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  8 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  9 |\u001b[39m \u001b[36mexport\u001b[39m \u001b[36mconst\u001b[39m requestPoints \u001b[33m=\u001b[39m createAction(\u001b[32m'Points is fetching...'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m              \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 10 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 11 |\u001b[39m \u001b[36mexport\u001b[39m \u001b[36mconst\u001b[39m requestPointsSuccess \u001b[33m=\u001b[39m createAction\u001b[33m<\u001b[39m\u001b[33mobject\u001b[39m\u001b[33m>\u001b[39m(\u001b[32m'Points has already fetched'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 12 |\u001b[39m\u001b[0m\n    at Object._raise (C:\\Users\\dany2\\WebstormProjects\\NeedForDrive-Second-Iteration\\node_modules\\@babel\\parser\\lib\\index.js:569:17)\n    at Object.raiseWithData (C:\\Users\\dany2\\WebstormProjects\\NeedForDrive-Second-Iteration\\node_modules\\@babel\\parser\\lib\\index.js:562:17)\n    at Object.raise (C:\\Users\\dany2\\WebstormProjects\\NeedForDrive-Second-Iteration\\node_modules\\@babel\\parser\\lib\\index.js:523:17)\n    at TypeScriptScopeHandler.checkRedeclarationInScope (C:\\Users\\dany2\\WebstormProjects\\NeedForDrive-Second-Iteration\\node_modules\\@babel\\parser\\lib\\index.js:1731:12)\n    at TypeScriptScopeHandler.declareName (C:\\Users\\dany2\\WebstormProjects\\NeedForDrive-Second-Iteration\\node_modules\\@babel\\parser\\lib\\index.js:1697:12)\n    at TypeScriptScopeHandler.declareName (C:\\Users\\dany2\\WebstormProjects\\NeedForDrive-Second-Iteration\\node_modules\\@babel\\parser\\lib\\index.js:7616:11)\n    at Object.checkLVal (C:\\Users\\dany2\\WebstormProjects\\NeedForDrive-Second-Iteration\\node_modules\\@babel\\parser\\lib\\index.js:11154:24)\n    at Object.checkLVal (C:\\Users\\dany2\\WebstormProjects\\NeedForDrive-Second-Iteration\\node_modules\\@babel\\parser\\lib\\index.js:10081:15)\n    at Object.parseVarId (C:\\Users\\dany2\\WebstormProjects\\NeedForDrive-Second-Iteration\\node_modules\\@babel\\parser\\lib\\index.js:14213:10)\n    at Object.parseVarId (C:\\Users\\dany2\\WebstormProjects\\NeedForDrive-Second-Iteration\\node_modules\\@babel\\parser\\lib\\index.js:9857:11)");

/***/ }),

/***/ "./src/store/Points/thunks.ts":
/*!************************************!*\
  !*** ./src/store/Points/thunks.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchPoints": () => (/* binding */ fetchPoints),
/* harmony export */   "fetchPoint": () => (/* binding */ fetchPoint)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/store/Points/actions.ts");
/* harmony import */ var _ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorProvider/actions */ "./src/store/ErrorProvider/actions.ts");


const fetchPoints = config => async (dispatch, getState, {
  services
}) => {
  try {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestPoints)());
    const {
      data
    } = await services.table.getEntities('point', config);
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestPointsSuccess)(data));
  } catch (error) {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestPointsError)(error.response.status));
    dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addToErrorHandler)(error.response.status));
  }
};
const fetchPoint = pointId => async (dispatch, getState, {
  services
}) => {
  try {
    dispatch(requestPoint());
    const {
      data
    } = await services.table.getEntities('point', {}, pointId);
    dispatch(requestPointSuccess(data.data));
  } catch (error) {
    dispatch(requestPointError(error.response.status));
    dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addToErrorHandler)(error.response.status));
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f32f9245a99dd1bbb314")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.1ef9b81244545dd04de8.hot-update.js.map