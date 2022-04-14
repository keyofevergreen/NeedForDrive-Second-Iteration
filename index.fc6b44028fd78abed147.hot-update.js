/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/components/Router/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Router/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Router": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



const Router = ({
  basename,
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.HashRouter, {
    basename: basename,
    children: children
  });
};
Router.defaultProps = {
  basename: '/'
};

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/global */ "./src/types/global.ts");
/* harmony import */ var _types_global__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_types_global__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! history */ "./node_modules/history/index.js");
/* harmony import */ var _components_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Router */ "./src/components/Router/index.tsx");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/store */ "./src/store/store.ts");
/* harmony import */ var _utils_services_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/services/services */ "./src/utils/services/services.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* eslint-disable import/no-import-module-exports */









const history = (0,history__WEBPACK_IMPORTED_MODULE_8__.createBrowserHistory)();
const store = (0,_store_store__WEBPACK_IMPORTED_MODULE_5__["default"])({
  history,
  services: (0,_utils_services_services__WEBPACK_IMPORTED_MODULE_6__["default"])()
});
(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
  store: store,
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Router__WEBPACK_IMPORTED_MODULE_3__.Router, {
    basename:  false ? 0 : '/',
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {})
  })
}), document.getElementById('root'));

if (true) {
  module.hot.accept();
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e75ebb2893feadf24ad8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.fc6b44028fd78abed147.hot-update.js.map