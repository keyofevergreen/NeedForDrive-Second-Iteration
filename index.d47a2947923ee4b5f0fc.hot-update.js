/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./node_modules/@restart/hooks/esm/useTimeout.js":
/*!*******************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useTimeout.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useTimeout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _useMounted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMounted */ "./node_modules/@restart/hooks/esm/useMounted.js");
/* harmony import */ var _useWillUnmount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useWillUnmount */ "./node_modules/@restart/hooks/esm/useWillUnmount.js");



/*
 * Browsers including Internet Explorer, Chrome, Safari, and Firefox store the
 * delay as a 32-bit signed integer internally. This causes an integer overflow
 * when using delays larger than 2,147,483,647 ms (about 24.8 days),
 * resulting in the timeout being executed immediately.
 *
 * via: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
 */

var MAX_DELAY_MS = Math.pow(2, 31) - 1;

function setChainedTimeout(handleRef, fn, timeoutAtMs) {
  var delayMs = timeoutAtMs - Date.now();
  handleRef.current = delayMs <= MAX_DELAY_MS ? setTimeout(fn, delayMs) : setTimeout(function () {
    return setChainedTimeout(handleRef, fn, timeoutAtMs);
  }, MAX_DELAY_MS);
}
/**
 * Returns a controller object for setting a timeout that is properly cleaned up
 * once the component unmounts. New timeouts cancel and replace existing ones.
 *
 *
 *
 * ```tsx
 * const { set, clear } = useTimeout();
 * const [hello, showHello] = useState(false);
 * //Display hello after 5 seconds
 * set(() => showHello(true), 5000);
 * return (
 *   <div className="App">
 *     {hello ? <h3>Hello</h3> : null}
 *   </div>
 * );
 * ```
 */


function useTimeout() {
  var isMounted = (0,_useMounted__WEBPACK_IMPORTED_MODULE_1__["default"])(); // types are confused between node and web here IDK

  var handleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,_useWillUnmount__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    return clearTimeout(handleRef.current);
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var clear = function clear() {
      return clearTimeout(handleRef.current);
    };

    function set(fn, delayMs) {
      if (delayMs === void 0) {
        delayMs = 0;
      }

      if (!isMounted()) return;
      clear();

      if (delayMs <= MAX_DELAY_MS) {
        // For simplicity, if the timeout is short, just set a normal timeout.
        handleRef.current = setTimeout(fn, delayMs);
      } else {
        setChainedTimeout(handleRef, fn, Date.now() + delayMs);
      }
    }

    return {
      set: set,
      clear: clear
    };
  }, []);
}

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Toast.js");
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
  const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
      onClose: () => setShow(false),
      show: show,
      delay: 3000,
      autohide: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Header, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
          src: "holder.js/20x20?text=%20",
          className: "rounded me-2",
          alt: ""
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("strong", {
          className: "me-auto",
          children: "Bootstrap"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("small", {
          children: "11 mins ago"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Body, {
        children: "Woohoo, you're reading this text in a Toast!"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Routes, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
        path: "car",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_EditRouter_EditRouter__WEBPACK_IMPORTED_MODULE_8__["default"], {}),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
          index: true,
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_CarEdit_CarEdit__WEBPACK_IMPORTED_MODULE_1__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
          path: ":carId",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_CarEdit_CarEdit__WEBPACK_IMPORTED_MODULE_1__["default"], {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
        path: "order-status",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_EditRouter_EditRouter__WEBPACK_IMPORTED_MODULE_8__["default"], {}),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
          index: true,
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_OrderStatusEdit_OrderStatusEdit__WEBPACK_IMPORTED_MODULE_2__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
          path: ":orderStatusId",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_OrderStatusEdit_OrderStatusEdit__WEBPACK_IMPORTED_MODULE_2__["default"], {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
        path: "category",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_EditRouter_EditRouter__WEBPACK_IMPORTED_MODULE_8__["default"], {}),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
          index: true,
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_CategoryEdit_CategoryEdit__WEBPACK_IMPORTED_MODULE_3__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
          path: ":categoryId",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_CategoryEdit_CategoryEdit__WEBPACK_IMPORTED_MODULE_3__["default"], {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
        path: "point",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_EditRouter_EditRouter__WEBPACK_IMPORTED_MODULE_8__["default"], {}),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
          index: true,
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_PointEdit_PointEdit__WEBPACK_IMPORTED_MODULE_4__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
          path: ":pointId",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_PointEdit_PointEdit__WEBPACK_IMPORTED_MODULE_4__["default"], {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
        path: "city",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_EditRouter_EditRouter__WEBPACK_IMPORTED_MODULE_8__["default"], {}),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
          index: true,
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_CityEdit_CityEdit__WEBPACK_IMPORTED_MODULE_5__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
          path: ":cityId",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_CityEdit_CityEdit__WEBPACK_IMPORTED_MODULE_5__["default"], {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
        path: "rate",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_EditRouter_EditRouter__WEBPACK_IMPORTED_MODULE_8__["default"], {}),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
          index: true,
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_RateEdit_RateEdit__WEBPACK_IMPORTED_MODULE_6__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
          path: ":rateId",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_RateEdit_RateEdit__WEBPACK_IMPORTED_MODULE_6__["default"], {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
        path: "rate-types",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_EditRouter_EditRouter__WEBPACK_IMPORTED_MODULE_8__["default"], {}),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
          index: true,
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_RateTypesEdit_RateTypesEdit__WEBPACK_IMPORTED_MODULE_7__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
          path: ":rateTypesId",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_RateTypesEdit_RateTypesEdit__WEBPACK_IMPORTED_MODULE_7__["default"], {})
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Toast.js":
/*!***************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Toast.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _restart_hooks_useTimeout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @restart/hooks/useTimeout */ "./node_modules/@restart/hooks/esm/useTimeout.js");
/* harmony import */ var _ToastFade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ToastFade */ "./node_modules/react-bootstrap/esm/ToastFade.js");
/* harmony import */ var _ToastHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ToastHeader */ "./node_modules/react-bootstrap/esm/ToastHeader.js");
/* harmony import */ var _ToastBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ToastBody */ "./node_modules/react-bootstrap/esm/ToastBody.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _ToastContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ToastContext */ "./node_modules/react-bootstrap/esm/ToastContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










const Toast = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(({
  bsPrefix,
  className,
  transition: Transition = _ToastFade__WEBPACK_IMPORTED_MODULE_4__["default"],
  show = true,
  animation = true,
  delay = 5000,
  autohide = false,
  onClose,
  bg,
  ...props
}, ref) => {
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__.useBootstrapPrefix)(bsPrefix, 'toast'); // We use refs for these, because we don't want to restart the autohide
  // timer in case these values change.

  const delayRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(delay);
  const onCloseRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onClose);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    delayRef.current = delay;
    onCloseRef.current = onClose;
  }, [delay, onClose]);
  const autohideTimeout = (0,_restart_hooks_useTimeout__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const autohideToast = !!(autohide && show);
  const autohideFunc = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (autohideToast) {
      onCloseRef.current == null ? void 0 : onCloseRef.current();
    }
  }, [autohideToast]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Only reset timer if show or autohide changes.
    autohideTimeout.set(autohideFunc, delayRef.current);
  }, [autohideTimeout, autohideFunc]);
  const toastContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    onClose
  }), [onClose]);
  const hasAnimation = !!(Transition && animation);

  const toast = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", { ...props,
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(bsPrefix, className, bg && `bg-${bg}`, !hasAnimation && (show ? 'show' : 'hide')),
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true"
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ToastContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
    value: toastContext,
    children: hasAnimation && Transition ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Transition, {
      in: show,
      unmountOnExit: true,
      children: toast
    }) : toast
  });
});
Toast.displayName = 'Toast';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(Toast, {
  Body: _ToastBody__WEBPACK_IMPORTED_MODULE_7__["default"],
  Header: _ToastHeader__WEBPACK_IMPORTED_MODULE_8__["default"]
}));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/ToastBody.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/ToastBody.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/esm/createWithBsPrefix.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__["default"])('toast-body'));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/ToastContext.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/ToastContext.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const ToastContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose() {}

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToastContext);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/ToastFade.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/ToastFade.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group/Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Fade */ "./node_modules/react-bootstrap/esm/Fade.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




const fadeStyles = {
  [react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_2__.ENTERING]: 'showing',
  [react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_2__.EXITING]: 'showing show'
};
const ToastFade = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Fade__WEBPACK_IMPORTED_MODULE_3__["default"], { ...props,
  ref: ref,
  transitionClasses: fadeStyles
}));
ToastFade.displayName = 'ToastFade';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToastFade);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/ToastHeader.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/ToastHeader.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _CloseButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CloseButton */ "./node_modules/react-bootstrap/esm/CloseButton.js");
/* harmony import */ var _ToastContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ToastContext */ "./node_modules/react-bootstrap/esm/ToastContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









const defaultProps = {
  closeLabel: 'Close',
  closeButton: true
};
const ToastHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  closeLabel,
  closeVariant,
  closeButton,
  className,
  children,
  ...props
}, ref) => {
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.useBootstrapPrefix)(bsPrefix, 'toast-header');
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_ToastContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const handleClick = (0,_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_2__["default"])(e => {
    context == null ? void 0 : context.onClose == null ? void 0 : context.onClose(e);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    ref: ref,
    ...props,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(bsPrefix, className),
    children: [children, closeButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_CloseButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
      "aria-label": closeLabel,
      variant: closeVariant,
      onClick: handleClick,
      "data-dismiss": "toast"
    })]
  });
});
ToastHeader.displayName = 'ToastHeader';
ToastHeader.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToastHeader);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a52745dee2b086b18fda")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.d47a2947923ee4b5f0fc.hot-update.js.map