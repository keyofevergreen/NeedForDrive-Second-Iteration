/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/pages/Order/components/OrderItemStatusButtons/OrderItemStatusButtons.tsx":
/*!**************************************************************************************!*\
  !*** ./src/pages/Order/components/OrderItemStatusButtons/OrderItemStatusButtons.tsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/ButtonGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







const OrderItemStatusButtons = ({
  currentOrderStatus
}) => {
  const [editMode, setEditMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    orderStatus,
    loading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.orderStatus);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "order-item-status-edit-btn",
    children: [!editMode && currentOrderStatus.name === 'Новые' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
        size: "sm",
        variant: "outline-primary",
        children: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
        size: "sm",
        variant: "outline-danger",
        children: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
      })]
    }), !editMode && currentOrderStatus.name !== 'Новые' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
        size: "sm",
        variant: "outline-danger",
        children: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
        size: "sm",
        variant: "outline-primary",
        children: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"
      })]
    }), editMode && currentOrderStatus.name !== 'Новые' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"].Select, {
        size: "sm",
        disabled: loading,
        children: orderStatus && orderStatus.map(status => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          value: status.id,
          children: status.name
        }, status.id))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
        size: "sm",
        variant: "outline-primary",
        children: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
        size: "sm",
        variant: "outline-danger",
        children: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderItemStatusButtons);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("df6e8126d0d25cf27ac9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.a2c9ba0b4de105918d9c.hot-update.js.map