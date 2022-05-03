/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/components/FilterByPriceRange/FilterByPriceRange.tsx":
/*!******************************************************************!*\
  !*** ./src/components/FilterByPriceRange/FilterByPriceRange.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/ButtonGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




const lowerPriceOptions = [1000, 3000, 5000, 10000];
const higherPriceOptions = [5000, 10000, 25000, 55000, 300000];

const FilterByPriceRange = ({
  lowerPriceFilter,
  setLowerPriceFilter,
  higherPriceFilter,
  setHigherPriceFilter
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Select, {
      size: "sm",
      className: "range-select",
      onChange: e => setLowerPriceFilter(Number(e.target.value)),
      value: lowerPriceFilter,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
        value: "0",
        children: "\u041E\u0442 0 \u20BD"
      }), lowerPriceOptions.map((lowerPricem, index) => {
        if (higherPriceFilter > lowerPriceFilter) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
            value: lowerPriceFilter,
            children: `От ${lowerPriceFilter} ₽`
          }, index);
        }

        return null;
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Select, {
      size: "sm",
      className: "range-select",
      onChange: e => setHigherPriceFilter(Number(e.target.value)),
      value: higherPriceFilter,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
        value: "99999999",
        children: "\u0414\u043E \u221E"
      }), higherPriceOptions.map((highPricem, index) => {
        if (lowerPriceFilter < higherPriceFilter) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
            value: higherPriceFilter,
            children: `До ${higherPriceFilter} ₽`
          }, index);
        }

        return null;
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterByPriceRange);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ea418582f2e0f34405c8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.b830f42ec03addc27331.hot-update.js.map