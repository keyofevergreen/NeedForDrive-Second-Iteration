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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Toast.js");
/* harmony import */ var _store_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/ErrorProvider/actions */ "./src/store/ErrorProvider/actions.ts");
/* harmony import */ var _assets_CheckMark_component_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/CheckMark.component.svg */ "./src/assets/CheckMark.component.svg");
/* harmony import */ var _assets_CloseIcon_component_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/CloseIcon.component.svg */ "./src/assets/CloseIcon.component.svg");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/Alert/styles.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










const Alert = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [alertMessage, setAlertMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    successAlert
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.errorHandler);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (successAlert) {
      setAlertMessage(successAlert);
      setShow(true);
      dispatch((0,_store_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_2__.clearSuccessAlert)());
    }
  }, [successAlert]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    show: show,
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["success-alert-message"],
    delay: 3000,
    onClose: () => setShow(false),
    autohide: true,
    animation: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Body, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_assets_CheckMark_component_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          children: `Успех! ${alertMessage}`
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
        type: "button",
        onClick: () => setShow(false),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_assets_CloseIcon_component_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {})
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
/******/ 	__webpack_require__.h = () => ("2599d683e3801a2f26a7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.0b4e2626dd9e959805cc.hot-update.js.map