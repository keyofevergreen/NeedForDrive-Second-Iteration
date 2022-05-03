/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/pages/Edit/components/OrderStatusEdit/OrderStatusEdit.tsx":
/*!***********************************************************************!*\
  !*** ./src/pages/Edit/components/OrderStatusEdit/OrderStatusEdit.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ContentContainer/ContentContainer */ "./src/components/ContentContainer/ContentContainer.tsx");
/* harmony import */ var _components_InputsContainer_InputsContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/InputsContainer/InputsContainer */ "./src/components/InputsContainer/InputsContainer.tsx");
/* harmony import */ var _components_InputErrorMessageProvider_InputErrorMessageProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/InputErrorMessageProvider/InputErrorMessageProvider */ "./src/components/InputErrorMessageProvider/InputErrorMessageProvider.tsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks */ "./src/pages/Edit/components/OrderStatusEdit/hooks.ts");
/* harmony import */ var _store_OrderStatus_thunks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../store/OrderStatus/thunks */ "./src/store/OrderStatus/thunks.ts");
/* harmony import */ var _CarEdit_styles_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../CarEdit/styles.module.scss */ "./src/pages/Edit/components/CarEdit/styles.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const OrderStatusEdit = () => {
  var _errors$name;

  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useNavigate)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    orderStatusId
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useParams)();
  const uploadOrderStatusLoading = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__.useUploadedOrderStatus)(orderStatusId, navigate);
  const {
    register,
    handleSubmit,
    setValue,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_11__.useForm)({
    defaultValues: {
      name: ''
    }
  });
  const orderStatusByIdLoading = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__.useOrderStatusById)(orderStatusId, setValue);

  const onSubmit = async data => {
    if (orderStatusId) {
      dispatch((0,_store_OrderStatus_thunks__WEBPACK_IMPORTED_MODULE_7__.editOrderStatus)(data, orderStatusId));
    } else dispatch((0,_store_OrderStatus_thunks__WEBPACK_IMPORTED_MODULE_7__.createOrderStatus)(data));
  };

  const onDeleteOrderStatus = () => {
    if (orderStatusId) {
      dispatch((0,_store_OrderStatus_thunks__WEBPACK_IMPORTED_MODULE_7__.deleteOrderStatus)(orderStatusId));
      navigate('/order-status');
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("title", {
        children: "Need For Drive - \u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u0437\u0430\u043A\u0430\u0437\u0430"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta", {
        name: "description",
        content: "Home page"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u0437\u0430\u043A\u0430\u0437\u0430",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
        noValidate: true,
        autoComplete: "off",
        onSubmit: handleSubmit(data => {
          onSubmit(data);
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_InputsContainer_InputsContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u0437\u0430\u043A\u0430\u0437\u0430",
          isCreateTable: !orderStatusId,
          isSubmitting: uploadOrderStatusLoading,
          isLoading: orderStatusByIdLoading,
          className: _CarEdit_styles_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"]["car-form-container"],
          onDelete: onDeleteOrderStatus,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Group, {
            controlId: "carName",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Label, {
              children: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u0443\u0441\u0430"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_InputErrorMessageProvider_InputErrorMessageProvider__WEBPACK_IMPORTED_MODULE_5__["default"], {
              errorMessage: (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Control, _objectSpread(_objectSpread({
                type: "text",
                placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
                "aria-describedby": "carName"
              }, register('name', {
                required: 'Это поле не должно быть пустым'
              })), {}, {
                isInvalid: !!errors.name
              }))
            })]
          })
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderStatusEdit);

/***/ }),

/***/ "./src/pages/Edit/components/OrderStatusEdit/hooks.ts":
/*!************************************************************!*\
  !*** ./src/pages/Edit/components/OrderStatusEdit/hooks.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useOrderStatusById": () => (/* binding */ useOrderStatusById),
/* harmony export */   "useUploadedOrderStatus": () => (/* binding */ useUploadedOrderStatus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_OrderStatus_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store/OrderStatus/thunks */ "./src/store/OrderStatus/thunks.ts");
/* harmony import */ var _store_OrderStatus_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../store/OrderStatus/actions */ "./src/store/OrderStatus/actions.ts");




const useOrderStatusById = (orderStatusId, setValue) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    orderStatusById,
    orderStatusByIdLoading,
    orderStatusByIdError
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.orderStatus);

  const setValuesToForm = async orderStatus => {
    setValue('name', orderStatus.name, {
      shouldDirty: true
    });
    console.log(orderStatus);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (orderStatusId) {
      dispatch((0,_store_OrderStatus_thunks__WEBPACK_IMPORTED_MODULE_2__.fetchOrderStatus)(orderStatusId));
    }
  }, [orderStatusId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (orderStatusById && orderStatusId) {
      setValuesToForm(orderStatusById);
    }
  }, [orderStatusById]);
  return orderStatusByIdLoading;
};
const useUploadedOrderStatus = (orderStatusId, navigate) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    uploadedOrderStatus,
    uploadedOrderStatusLoading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.orderStatus);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (uploadedOrderStatus && !orderStatusId) {
      navigate(`/edit/car/${uploadedOrderStatus.id}`);
      dispatch((0,_store_OrderStatus_actions__WEBPACK_IMPORTED_MODULE_3__.clearUploadedOrderStatusData)());
    }
  }, [uploadedOrderStatus]);
  return uploadedOrderStatusLoading;
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7d6102d962363ccdf85e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.380c5e6cc413d2b81c9b.hot-update.js.map