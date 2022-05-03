/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/components/InputsContainer/InputsContainer.tsx":
/*!************************************************************!*\
  !*** ./src/components/InputsContainer/InputsContainer.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/InputsContainer/styles.module.scss");
/* harmony import */ var _Spin_Spin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Spin/Spin */ "./src/components/Spin/Spin.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









const cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default().bind(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]);

const InputsContainer = ({
  children,
  title,
  className,
  onSubmit,
  onDelete,
  isCreateTable,
  isSubmitting,
  isLoading
}) => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: cx('form-container', className),
    children: [!isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
          children: title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].form,
          children: children
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]["form-btn-line"],
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
            variant: "primary",
            size: "sm",
            type: "submit",
            disabled: isSubmitting,
            children: [isCreateTable && (!isSubmitting ? 'Создать' : 'Создаем...'), !isCreateTable && (!isSubmitting ? 'Сохранить' : 'Сохраняем...')]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
            variant: "light",
            size: "sm",
            onClick: () => navigate(-1),
            children: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
          })]
        }), !isCreateTable && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "danger",
          size: "sm",
          disabled: isSubmitting,
          children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"
        })]
      })]
    }), isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Spin_Spin__WEBPACK_IMPORTED_MODULE_3__["default"], {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputsContainer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0b820ee602ef43bb9af0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.6430510409f63df62a13.hot-update.js.map