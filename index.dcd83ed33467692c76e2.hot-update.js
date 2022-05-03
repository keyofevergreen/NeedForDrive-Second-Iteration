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
        path: ":carId",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_CarEdit_CarEdit__WEBPACK_IMPORTED_MODULE_1__["default"], {})
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
      path: "order-status",
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_EditRouter_EditRouter__WEBPACK_IMPORTED_MODULE_8__["default"], {}),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        index: true,
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_OrderStatusEdit_OrderStatusEdit__WEBPACK_IMPORTED_MODULE_2__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: ":orderStatusId",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_OrderStatusEdit_OrderStatusEdit__WEBPACK_IMPORTED_MODULE_2__["default"], {})
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
      path: "category",
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_EditRouter_EditRouter__WEBPACK_IMPORTED_MODULE_8__["default"], {}),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        index: true,
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_CategoryEdit_CategoryEdit__WEBPACK_IMPORTED_MODULE_3__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: ":categoryId",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_CategoryEdit_CategoryEdit__WEBPACK_IMPORTED_MODULE_3__["default"], {})
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
      path: "point",
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_EditRouter_EditRouter__WEBPACK_IMPORTED_MODULE_8__["default"], {}),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        index: true,
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_PointEdit_PointEdit__WEBPACK_IMPORTED_MODULE_4__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: ":pointId",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_PointEdit_PointEdit__WEBPACK_IMPORTED_MODULE_4__["default"], {})
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
      path: "city",
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_EditRouter_EditRouter__WEBPACK_IMPORTED_MODULE_8__["default"], {}),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        index: true,
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_CityEdit_CityEdit__WEBPACK_IMPORTED_MODULE_5__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: ":cityId",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_CityEdit_CityEdit__WEBPACK_IMPORTED_MODULE_5__["default"], {})
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
      path: "rate",
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_EditRouter_EditRouter__WEBPACK_IMPORTED_MODULE_8__["default"], {}),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        index: true,
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_RateEdit_RateEdit__WEBPACK_IMPORTED_MODULE_6__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: ":rateId",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_RateEdit_RateEdit__WEBPACK_IMPORTED_MODULE_6__["default"], {})
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
      path: "rate-types",
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_EditRouter_EditRouter__WEBPACK_IMPORTED_MODULE_8__["default"], {}),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        index: true,
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_RateTypesEdit_RateTypesEdit__WEBPACK_IMPORTED_MODULE_7__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: ":rateTypesId",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_RateTypesEdit_RateTypesEdit__WEBPACK_IMPORTED_MODULE_7__["default"], {})
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/pages/Edit/components/RateTypesEdit/RateTypesEdit.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/Edit/components/RateTypesEdit/RateTypesEdit.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ContentContainer/ContentContainer */ "./src/components/ContentContainer/ContentContainer.tsx");
/* harmony import */ var _components_FormContainer_FormContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/FormContainer/FormContainer */ "./src/components/FormContainer/FormContainer.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









const RateTypesEdit = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("title", {
        children: "Need For Drive - \u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0442\u0438\u043F\u0430 \u0442\u0430\u0440\u0438\u0444\u0430"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
        name: "description",
        content: "Home page"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0442\u0438\u043F\u0430 \u0442\u0430\u0440\u0438\u0444\u0430",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_FormContainer_FormContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0442\u0438\u043F\u0430 \u0442\u0430\u0440\u0438\u0444\u0430",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"].Group, {
          controlId: "rateTypeName",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"].Label, {
            children: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u0438\u043F\u0430 \u0442\u0430\u0440\u0438\u0444\u0430"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "input-wrap",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"].Control, {
              type: "text",
              placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
              "aria-describedby": "rateTypeName"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"].Group, {
          controlId: "rateTypeName",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"].Label, {
            children: ["\u0415\u0434\u0438\u043D\u0438\u0446\u0430 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
              children: "7 \u0434\u043D\u0435\u0439"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "input-wrap",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"].Control, {
              type: "text",
              placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0435\u0434\u0438\u043D\u0438\u0446\u0443 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F",
              "aria-describedby": "rateTypeName"
            })
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RateTypesEdit);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2231afe9f09d7c88fe31")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.dcd83ed33467692c76e2.hot-update.js.map