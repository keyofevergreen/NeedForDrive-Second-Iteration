/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/pages/Edit/components/RateEdit/RateEdit.tsx":
/*!*********************************************************!*\
  !*** ./src/pages/Edit/components/RateEdit/RateEdit.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ContentContainer/ContentContainer */ "./src/components/ContentContainer/ContentContainer.tsx");
/* harmony import */ var _RateTypes_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../RateTypes/hooks */ "./src/pages/RateTypes/hooks.ts");
/* harmony import */ var _utils_helpers_OnlyNumberCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/helpers/OnlyNumberCheck */ "./src/utils/helpers/OnlyNumberCheck.ts");
/* harmony import */ var _components_FormContainer_FormContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/FormContainer/FormContainer */ "./src/components/FormContainer/FormContainer.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











const RateEdit = () => {
  const [rateTypes, loading] = (0,_RateTypes_hooks__WEBPACK_IMPORTED_MODULE_3__.useRateTypes)();
  const [selectedRateType, setSelectedRateType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Выберите тип тарифа');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("title", {
        children: "Need For Drive - \u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0442\u0430\u0440\u0438\u0444\u0430"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("meta", {
        name: "description",
        content: "Home page"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0442\u0430\u0440\u0438\u0444\u0430",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_FormContainer_FormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0442\u0430\u0440\u0438\u0444\u0430",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Group, {
          controlId: "carName",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Label, {
            children: "\u0422\u0438\u043F \u0442\u0430\u0440\u0438\u0444\u0430"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Select, {
            size: "sm",
            value: selectedRateType,
            onChange: e => setSelectedRateType(e.target.value),
            disabled: loading,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
              value: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043F \u0442\u0430\u0440\u0438\u0444\u0430",
              children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043F"
            }), rateTypes && rateTypes.data.map(rateType => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
              value: rateType.id,
              children: `${rateType.name} - ${rateType.unit}`
            }, rateType.id))]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Group, {
          controlId: "ratePrice",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Label, {
            children: "\u0426\u0435\u043D\u0430, \u20BD"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "input-wrap",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Control, {
              type: "text",
              placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0435\u043D\u0443",
              "aria-describedby": "ratePrice",
              onKeyDown: e => (0,_utils_helpers_OnlyNumberCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(e)
            })
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RateEdit);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b3139606d048f42797a7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.6c5af4818da8ae0b6127.hot-update.js.map