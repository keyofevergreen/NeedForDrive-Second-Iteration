/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_Auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/Auth/actions */ "./src/store/Auth/actions.ts");
/* harmony import */ var _pages_Auth_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Auth/Auth */ "./src/pages/Auth/Auth.tsx");
/* harmony import */ var _pages_Index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Index */ "./src/pages/Index/index.tsx");
/* harmony import */ var _pages_Order_Order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Order/Order */ "./src/pages/Order/Order.tsx");
/* harmony import */ var _pages_CarsList_CarsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/CarsList/CarsList */ "./src/pages/CarsList/CarsList.tsx");
/* harmony import */ var _assets_styles_global_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/styles/global.scss */ "./src/assets/styles/global.scss");
/* harmony import */ var _pages_CitiesList_CitiesList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/CitiesList/CitiesList */ "./src/pages/CitiesList/CitiesList.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");













const App = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    token,
    isAuth
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.auth);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_store_Auth_actions__WEBPACK_IMPORTED_MODULE_2__.setAuth)(!!localStorage.getItem('token')));
  }, [token]);

  if (isAuth) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_pages_Index__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Routes, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
          index: true,
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_pages_Order_Order__WEBPACK_IMPORTED_MODULE_5__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
          path: "cars",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_pages_CarsList_CarsList__WEBPACK_IMPORTED_MODULE_6__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
          path: "city",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_pages_CitiesList_CitiesList__WEBPACK_IMPORTED_MODULE_8__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
          path: "*",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Navigate, {
            to: "/"
          })
        })]
      })
    });
  }

  if (!isAuth) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_pages_Auth_Auth__WEBPACK_IMPORTED_MODULE_3__["default"], {});
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ae594fb5e6da07a3a5b3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.77c57dc43fbc6936414f.hot-update.js.map