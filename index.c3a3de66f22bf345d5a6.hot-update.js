/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./node_modules/@teamsupercell/typings-for-css-modules-loader/src/index.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[3]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./src/pages/CarsList/components/CarItem/styles.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@teamsupercell/typings-for-css-modules-loader/src/index.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[3]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./src/pages/CarsList/components/CarItem/styles.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".car-item___Ybf1y {\n  display: flex;\n  gap: 20px;\n  padding: 14px 22px;\n}", "",{"version":3,"sources":["webpack://./src/pages/CarsList/components/CarItem/styles.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,SAAA;EACA,kBAAA;AACF","sourcesContent":[".car-item {\n  display: flex;\n  gap: 20px;\n  padding: 14px 22px;\n\n  .car-item__name {\n    \n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"car-item": "car-item___Ybf1y"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]["car-item"],
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]["car-item__name"],
      children: name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      children: category
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]["car-item__colors"],
      children: colors.map(color => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        children: color
      }, color))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        children: `от ${priceMin}`
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        children: `до ${priceMax}`
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      children: tank
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
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
/******/ 	__webpack_require__.h = () => ("6a22e17f7bb483f7ddaf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.c3a3de66f22bf345d5a6.hot-update.js.map