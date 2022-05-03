/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _components_CarEdit_CarEdit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/CarEdit/CarEdit */ "./src/pages/Edit/components/CarEdit/CarEdit.tsx");
/* harmony import */ var _components_OrderStatusEdit_OrderStatusEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/OrderStatusEdit/OrderStatusEdit */ "./src/pages/Edit/components/OrderStatusEdit/OrderStatusEdit.tsx");
/* harmony import */ var _components_CategoryEdit_CategoryEdit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/CategoryEdit/CategoryEdit */ "./src/pages/Edit/components/CategoryEdit/CategoryEdit.tsx");
/* harmony import */ var _components_PointEdit_PointEdit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/PointEdit/PointEdit */ "./src/pages/Edit/components/PointEdit/PointEdit.tsx");
/* harmony import */ var _components_CityEdit_CityEdit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/CityEdit/CityEdit */ "./src/pages/Edit/components/CityEdit/CityEdit.tsx");
/* harmony import */ var _components_RateEdit_RateEdit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/RateEdit/RateEdit */ "./src/pages/Edit/components/RateEdit/RateEdit.tsx");
/* harmony import */ var _components_RateTypesEdit_RateTypesEdit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/RateTypesEdit/RateTypesEdit */ "./src/pages/Edit/components/RateTypesEdit/RateTypesEdit.tsx");
/* harmony import */ var _components_EditRouter_EditRouter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/EditRouter/EditRouter */ "./src/pages/Edit/components/EditRouter/EditRouter.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");













const Edit = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Routes, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
      path: "car",
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_EditRouter_EditRouter__WEBPACK_IMPORTED_MODULE_8__["default"], {}),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        index: true,
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_CarEdit_CarEdit__WEBPACK_IMPORTED_MODULE_1__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: "car/:carId",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_CarEdit_CarEdit__WEBPACK_IMPORTED_MODULE_1__["default"], {})
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
      path: "order-status",
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_OrderStatusEdit_OrderStatusEdit__WEBPACK_IMPORTED_MODULE_2__["default"], {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
      path: "order-status/:orderStatusId",
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_OrderStatusEdit_OrderStatusEdit__WEBPACK_IMPORTED_MODULE_2__["default"], {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
      path: "category",
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_CategoryEdit_CategoryEdit__WEBPACK_IMPORTED_MODULE_3__["default"], {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
      path: "category/:categoryId",
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_CategoryEdit_CategoryEdit__WEBPACK_IMPORTED_MODULE_3__["default"], {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
      path: "point",
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_PointEdit_PointEdit__WEBPACK_IMPORTED_MODULE_4__["default"], {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
      path: "point/:pointId",
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_PointEdit_PointEdit__WEBPACK_IMPORTED_MODULE_4__["default"], {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
      path: "city",
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_CityEdit_CityEdit__WEBPACK_IMPORTED_MODULE_5__["default"], {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
      path: "rate",
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_RateEdit_RateEdit__WEBPACK_IMPORTED_MODULE_6__["default"], {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
      path: "rate-types",
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_RateTypesEdit_RateTypesEdit__WEBPACK_IMPORTED_MODULE_7__["default"], {})
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/pages/Edit/components/EditRouter/EditRouter.tsx":
/*!*************************************************************!*\
  !*** ./src/pages/Edit/components/EditRouter/EditRouter.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




const EditRouter = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Outlet, {});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditRouter);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("63b61c5e87ca3d61fd78")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.6535b2b92599479db528.hot-update.js.map