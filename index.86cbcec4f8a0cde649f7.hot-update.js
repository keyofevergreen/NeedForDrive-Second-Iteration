/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./node_modules/@teamsupercell/typings-for-css-modules-loader/src/index.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[3]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./src/pages/Edit/styles.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@teamsupercell/typings-for-css-modules-loader/src/index.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[3]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./src/pages/Edit/styles.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".success-alert-message___FUTuN {\n  border-radius: 0;\n  border: none;\n  width: 100%;\n}\n.success-alert-message___FUTuN .toast-header {\n  background-color: var(--green);\n  color: #fff;\n  font-size: 13px;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 27px;\n}\n.success-alert-message___FUTuN .toast-header svg {\n  height: 10px;\n}\n.success-alert-message___FUTuN .toast-header svg path {\n  fill: #fff;\n}\n.success-alert-message___FUTuN .toast-header span {\n  margin-left: 10px;\n}", "",{"version":3,"sources":["webpack://./src/pages/Edit/styles.module.scss"],"names":[],"mappings":"AAAA;EACE,gBAAA;EACA,YAAA;EACA,WAAA;AACF;AAEI;EACE,8BAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,SAAA;EACA,kBAAA;AAAN;AACM;EACE,YAAA;AACR;AAAQ;EACE,UAAA;AAEV;AACM;EACE,iBAAA;AACR","sourcesContent":[".success-alert-message {\n  border-radius: 0;\n  border: none;\n  width: 100%;\n\n  :global {\n    .toast-header {\n      background-color: var(--green);\n      color: #fff;\n      font-size: 13px;\n      border: none;\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      padding: 14px 27px;\n      svg {\n        height: 10px;\n        path {\n          fill: #fff;\n        }\n      }\n      span {\n        margin-left: 10px;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"success-alert-message": "success-alert-message___FUTuN"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/Edit/Edit.tsx":
/*!*********************************!*\
  !*** ./src/pages/Edit/Edit.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Toast.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_CarEdit_CarEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/CarEdit/CarEdit */ "./src/pages/Edit/components/CarEdit/CarEdit.tsx");
/* harmony import */ var _components_OrderStatusEdit_OrderStatusEdit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/OrderStatusEdit/OrderStatusEdit */ "./src/pages/Edit/components/OrderStatusEdit/OrderStatusEdit.tsx");
/* harmony import */ var _components_CategoryEdit_CategoryEdit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/CategoryEdit/CategoryEdit */ "./src/pages/Edit/components/CategoryEdit/CategoryEdit.tsx");
/* harmony import */ var _components_PointEdit_PointEdit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/PointEdit/PointEdit */ "./src/pages/Edit/components/PointEdit/PointEdit.tsx");
/* harmony import */ var _components_CityEdit_CityEdit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/CityEdit/CityEdit */ "./src/pages/Edit/components/CityEdit/CityEdit.tsx");
/* harmony import */ var _components_RateEdit_RateEdit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/RateEdit/RateEdit */ "./src/pages/Edit/components/RateEdit/RateEdit.tsx");
/* harmony import */ var _components_RateTypesEdit_RateTypesEdit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/RateTypesEdit/RateTypesEdit */ "./src/pages/Edit/components/RateTypesEdit/RateTypesEdit.tsx");
/* harmony import */ var _components_EditRouter_EditRouter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/EditRouter/EditRouter */ "./src/pages/Edit/components/EditRouter/EditRouter.tsx");
/* harmony import */ var _store_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/ErrorProvider/actions */ "./src/store/ErrorProvider/actions.ts");
/* harmony import */ var _assets_CheckMark_component_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/CheckMark.component.svg */ "./src/assets/CheckMark.component.svg");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles.module.scss */ "./src/pages/Edit/styles.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



















const Edit = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [alertMessage, setAlertMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    successAlert
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.errorHandler);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (successAlert) {
      setAlertMessage(successAlert);
      setShow(true);
      dispatch((0,_store_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_10__.clearSuccessAlert)());
    }
  }, [successAlert]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
      show: show,
      onClose: () => setShow(false),
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"]["success-alert-message"],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Header, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_assets_CheckMark_component_svg__WEBPACK_IMPORTED_MODULE_11__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
            children: `Успех! ${alertMessage}`
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Routes, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
        path: "car",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_EditRouter_EditRouter__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
          index: true,
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_CarEdit_CarEdit__WEBPACK_IMPORTED_MODULE_2__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
          path: ":carId",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_CarEdit_CarEdit__WEBPACK_IMPORTED_MODULE_2__["default"], {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
        path: "order-status",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_EditRouter_EditRouter__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
          index: true,
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_OrderStatusEdit_OrderStatusEdit__WEBPACK_IMPORTED_MODULE_3__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
          path: ":orderStatusId",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_OrderStatusEdit_OrderStatusEdit__WEBPACK_IMPORTED_MODULE_3__["default"], {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
        path: "category",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_EditRouter_EditRouter__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
          index: true,
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_CategoryEdit_CategoryEdit__WEBPACK_IMPORTED_MODULE_4__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
          path: ":categoryId",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_CategoryEdit_CategoryEdit__WEBPACK_IMPORTED_MODULE_4__["default"], {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
        path: "point",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_EditRouter_EditRouter__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
          index: true,
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_PointEdit_PointEdit__WEBPACK_IMPORTED_MODULE_5__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
          path: ":pointId",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_PointEdit_PointEdit__WEBPACK_IMPORTED_MODULE_5__["default"], {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
        path: "city",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_EditRouter_EditRouter__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
          index: true,
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_CityEdit_CityEdit__WEBPACK_IMPORTED_MODULE_6__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
          path: ":cityId",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_CityEdit_CityEdit__WEBPACK_IMPORTED_MODULE_6__["default"], {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
        path: "rate",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_EditRouter_EditRouter__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
          index: true,
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_RateEdit_RateEdit__WEBPACK_IMPORTED_MODULE_7__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
          path: ":rateId",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_RateEdit_RateEdit__WEBPACK_IMPORTED_MODULE_7__["default"], {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
        path: "rate-types",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_EditRouter_EditRouter__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
          index: true,
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_RateTypesEdit_RateTypesEdit__WEBPACK_IMPORTED_MODULE_8__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
          path: ":rateTypesId",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_RateTypesEdit_RateTypesEdit__WEBPACK_IMPORTED_MODULE_8__["default"], {})
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dce2ae5c146be1515f20")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.86cbcec4f8a0cde649f7.hot-update.js.map