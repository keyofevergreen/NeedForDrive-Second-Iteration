/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/pages/CarsList/components/CarItem/CarItem.tsx":
/*!***********************************************************!*\
  !*** ./src/pages/CarsList/components/CarItem/CarItem.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./src/pages/CarsList/components/CarItem/styles.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





const CarItem = ({
  name,
  category,
  colors,
  priceMin,
  priceMax,
  tank,
  number
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
      children: name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
      children: category
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].colors,
        children: colors
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
      children: `от ${priceMin} до ${priceMax}`
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
      children: `${tank}%`
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
      children: number
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarItem);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("91467694115783695916")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.00f25b507e8638528af0.hot-update.js.map