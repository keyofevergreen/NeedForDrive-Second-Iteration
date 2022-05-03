/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/components/Alert/Alert.tsx":
/*!****************************************!*\
  !*** ./src/components/Alert/Alert.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _pages_Edit_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/Edit/styles.module.scss */ "./src/pages/Edit/styles.module.scss");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Toast.js");
/* harmony import */ var _assets_CheckMark_component_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/CheckMark.component.svg */ "./src/assets/CheckMark.component.svg");
/* harmony import */ var _assets_CloseIcon_component_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/CloseIcon.component.svg */ "./src/assets/CloseIcon.component.svg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








const Alert = ({
  show,
  onClose,
  alertMessage
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    show: show,
    className: _pages_Edit_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]["success-alert-message"],
    delay: 3000,
    onClose: () => onClose(false),
    autohide: true,
    animation: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"].Body, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_assets_CheckMark_component_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: `Успех! ${alertMessage}`
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        type: "button",
        onClick: () => onClose(false),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_assets_CloseIcon_component_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {})
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alert);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2a051170ef6a1097f2a4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.15e3bbf55ca93f732057.hot-update.js.map