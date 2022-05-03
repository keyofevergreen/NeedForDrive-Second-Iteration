/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/assets/CheckMark.component.svg":
/*!********************************************!*\
  !*** ./src/assets/CheckMark.component.svg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _path;

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}



var SvgCheckMarkcomponent = function SvgCheckMarkcomponent(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    width: 9,
    height: 7,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2.598 5.128.691 3.107l-.649.683L2.598 6.5 8.085.683 7.44 0 2.598 5.128Z",
    fill: "#17C671"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgCheckMarkcomponent);

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
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Body, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_assets_CheckMark_component_svg__WEBPACK_IMPORTED_MODULE_11__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
          children: `Успех! ${alertMessage}`
        })]
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
/******/ 	__webpack_require__.h = () => ("ebf45ea60fc0076c4113")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.b2ffb79a96980742eae0.hot-update.js.map