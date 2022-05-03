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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ContentContainer/ContentContainer */ "./src/components/ContentContainer/ContentContainer.tsx");
/* harmony import */ var _components_InputsContainer_InputsContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/InputsContainer/InputsContainer */ "./src/components/InputsContainer/InputsContainer.tsx");
/* harmony import */ var _components_InputErrorMessageProvider_InputErrorMessageProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/InputErrorMessageProvider/InputErrorMessageProvider */ "./src/components/InputErrorMessageProvider/InputErrorMessageProvider.tsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks */ "./src/pages/Edit/components/OrderStatusEdit/hooks.ts");
/* harmony import */ var _store_OrderStatus_thunks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../store/OrderStatus/thunks */ "./src/store/OrderStatus/thunks.ts");
/* harmony import */ var _utils_helpers_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utils/helpers/hooks */ "./src/utils/helpers/hooks.ts");
/* harmony import */ var _CarEdit_styles_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../CarEdit/styles.module.scss */ "./src/pages/Edit/components/CarEdit/styles.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const OrderStatusEdit = () => {
  var _errors$name;

  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useNavigate)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    orderStatusId
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useParams)();
  const {
    register,
    handleSubmit,
    setValue,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_12__.useForm)({
    defaultValues: {
      name: ''
    }
  });
  const orderStatusUploading = (0,_utils_helpers_hooks__WEBPACK_IMPORTED_MODULE_8__.useUploadedEntity)(orderStatusId, 'order-status');
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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("title", {
        children: "Need For Drive - \u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u0437\u0430\u043A\u0430\u0437\u0430"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("meta", {
        name: "description",
        content: "Home page"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u0437\u0430\u043A\u0430\u0437\u0430",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
        noValidate: true,
        autoComplete: "off",
        onSubmit: handleSubmit(data => {
          onSubmit(data);
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_InputsContainer_InputsContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u0437\u0430\u043A\u0430\u0437\u0430",
          isCreateTable: !orderStatusId,
          isSubmitting: orderStatusUploading,
          isLoading: orderStatusByIdLoading,
          className: _CarEdit_styles_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"]["car-form-container"],
          onDelete: onDeleteOrderStatus,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"].Group, {
            controlId: "carName",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"].Label, {
              children: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u0443\u0441\u0430"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_InputErrorMessageProvider_InputErrorMessageProvider__WEBPACK_IMPORTED_MODULE_5__["default"], {
              errorMessage: (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"].Control, _objectSpread(_objectSpread({
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

/***/ "./src/store/Edit/actions.ts":
/*!***********************************!*\
  !*** ./src/store/Edit/actions.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uploadEntity": () => (/* binding */ uploadEntity),
/* harmony export */   "uploadEntitySuccess": () => (/* binding */ uploadEntitySuccess),
/* harmony export */   "uploadEntityError": () => (/* binding */ uploadEntityError),
/* harmony export */   "clearUploadedEntityData": () => (/* binding */ clearUploadedEntityData)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const uploadEntity = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Entity is posting...');
const uploadEntitySuccess = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Entity has already posted');
const uploadEntityError = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Entity not posted');
const clearUploadedEntityData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Clear uploaded entity response data...');

/***/ }),

/***/ "./src/store/Edit/reducer.ts":
/*!***********************************!*\
  !*** ./src/store/Edit/reducer.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/store/Edit/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const uploadedEntityReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createReducer)({
  uploadedEntity: null,
  uploadedEntityLoading: false,
  uploadedEntityError: null
}, {
  [_actions__WEBPACK_IMPORTED_MODULE_0__.uploadEntity.type]: state => _objectSpread(_objectSpread({}, state), {}, {
    uploadedEntity: null,
    uploadedEntityLoading: true,
    uploadedEntityError: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.uploadEntitySuccess.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    uploadedEntity: payload,
    uploadedEntityLoading: false,
    uploadedEntityError: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.uploadEntityError.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    uploadedEntity: null,
    uploadedEntityLoading: false,
    uploadedEntityError: payload
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.clearUploadedEntityData.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    uploadedEntity: null,
    uploadedEntityLoading: false,
    uploadedEntityError: null
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uploadedEntityReducer);

/***/ }),

/***/ "./src/store/OrderStatus/thunks.ts":
/*!*****************************************!*\
  !*** ./src/store/OrderStatus/thunks.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchOrderStatuses": () => (/* binding */ fetchOrderStatuses),
/* harmony export */   "fetchOrderStatus": () => (/* binding */ fetchOrderStatus),
/* harmony export */   "createOrderStatus": () => (/* binding */ createOrderStatus),
/* harmony export */   "editOrderStatus": () => (/* binding */ editOrderStatus),
/* harmony export */   "deleteOrderStatus": () => (/* binding */ deleteOrderStatus)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/store/OrderStatus/actions.ts");
/* harmony import */ var _ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorProvider/actions */ "./src/store/ErrorProvider/actions.ts");
/* harmony import */ var _Edit_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Edit/actions */ "./src/store/Edit/actions.ts");



const fetchOrderStatuses = () => async (dispatch, getState, {
  services
}) => {
  try {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestOrderStatuses)());
    const {
      data
    } = await services.table.getEntities('orderStatus', {});
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestOrderStatusesSuccess)(data.data));
  } catch (error) {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestOrderStatusesError)(error.response.status));
    dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addToErrorHandler)(error.response.status));
  }
};
const fetchOrderStatus = orderStatusId => async (dispatch, getState, {
  services
}) => {
  try {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestOrderStatus)());
    const {
      data
    } = await services.table.getEntities('orderStatus', {}, orderStatusId);
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestOrderStatusSuccess)(data.data));
  } catch (error) {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestOrderStatusError)(error.response.status));
    dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addToErrorHandler)(error.response.status));
  }
};
const createOrderStatus = newOrderStatus => async (dispatch, getState, {
  services
}) => {
  try {
    dispatch((0,_Edit_actions__WEBPACK_IMPORTED_MODULE_2__.uploadEntity)());
    const {
      data
    } = await services.table.postEntity('orderStatus', newOrderStatus);
    dispatch((0,_Edit_actions__WEBPACK_IMPORTED_MODULE_2__.uploadEntitySuccess)(data.data));
    dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addSuccessAlert)('Статус заказа создан'));
  } catch (error) {
    dispatch((0,_Edit_actions__WEBPACK_IMPORTED_MODULE_2__.uploadEntityError)(error.response.status));
    dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addToErrorHandler)(error.response.status));
  }
};
const editOrderStatus = (newOrderStatus, orderStatusId) => async (dispatch, getState, {
  services
}) => {
  try {
    dispatch((0,_Edit_actions__WEBPACK_IMPORTED_MODULE_2__.uploadEntity)());
    const {
      data
    } = await services.table.putEntity('orderStatus', newOrderStatus, orderStatusId);
    dispatch((0,_Edit_actions__WEBPACK_IMPORTED_MODULE_2__.uploadEntitySuccess)(data.data));
    dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addSuccessAlert)('Статус заказа сохранен'));
  } catch (error) {
    dispatch((0,_Edit_actions__WEBPACK_IMPORTED_MODULE_2__.uploadEntityError)(error.response.status));
    dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addToErrorHandler)(error.response.status));
  }
};
const deleteOrderStatus = orderStatusId => {
  return async (dispatch, getState, {
    services
  }) => {
    try {
      dispatch((0,_Edit_actions__WEBPACK_IMPORTED_MODULE_2__.uploadEntity)());
      const {
        data
      } = await services.table.deleteEntity('orderStatus', orderStatusId);
      dispatch((0,_Edit_actions__WEBPACK_IMPORTED_MODULE_2__.uploadEntitySuccess)(data.data));
      dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addSuccessAlert)('Статус заказа удален'));
    } catch (error) {
      dispatch((0,_Edit_actions__WEBPACK_IMPORTED_MODULE_2__.uploadEntityError)(error.response.status));
      dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addToErrorHandler)(error.response.status));
    }
  };
};

/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _utils_environments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/environments */ "./src/utils/environments.ts");
/* harmony import */ var _Auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Auth/reducer */ "./src/store/Auth/reducer.ts");
/* harmony import */ var _Order_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Order/reducer */ "./src/store/Order/reducer.ts");
/* harmony import */ var _Cities_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cities/reducer */ "./src/store/Cities/reducer.ts");
/* harmony import */ var _Cars_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Cars/reducer */ "./src/store/Cars/reducer.ts");
/* harmony import */ var _OrderStatus_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OrderStatus/reducer */ "./src/store/OrderStatus/reducer.ts");
/* harmony import */ var _RateTypes_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RateTypes/reducer */ "./src/store/RateTypes/reducer.ts");
/* harmony import */ var _Points_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Points/reducer */ "./src/store/Points/reducer.ts");
/* harmony import */ var _Category_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Category/reducer */ "./src/store/Category/reducer.ts");
/* harmony import */ var _Rates_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Rates/reducer */ "./src/store/Rates/reducer.ts");
/* harmony import */ var _Search_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Search/reducer */ "./src/store/Search/reducer.ts");
/* harmony import */ var _ErrorProvider_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ErrorProvider/reducer */ "./src/store/ErrorProvider/reducer.ts");
/* harmony import */ var _Edit_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Edit/reducer */ "./src/store/Edit/reducer.ts");















const createStore = ({
  services,
  initialState,
  history
}) => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_13__.configureStore)({
  reducer: {
    auth: _Auth_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
    order: _Order_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
    cars: _Cars_reducer__WEBPACK_IMPORTED_MODULE_4__["default"],
    cities: _Cities_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
    points: _Points_reducer__WEBPACK_IMPORTED_MODULE_7__["default"],
    rates: _Rates_reducer__WEBPACK_IMPORTED_MODULE_9__["default"],
    rateTypes: _RateTypes_reducer__WEBPACK_IMPORTED_MODULE_6__["default"],
    orderStatus: _OrderStatus_reducer__WEBPACK_IMPORTED_MODULE_5__["default"],
    category: _Category_reducer__WEBPACK_IMPORTED_MODULE_8__["default"],
    search: _Search_reducer__WEBPACK_IMPORTED_MODULE_10__["default"],
    errorHandler: _ErrorProvider_reducer__WEBPACK_IMPORTED_MODULE_11__["default"],
    uploadedEntity: _Edit_reducer__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  devTools: (0,_utils_environments__WEBPACK_IMPORTED_MODULE_0__.isDevelopment)(),
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    immutableCheck: true,
    serializableCheck: false,
    thunk: {
      extraArgument: {
        history,
        services
      }
    }
  }),
  preloadedState: initialState || {}
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createStore);

/***/ }),

/***/ "./src/utils/helpers/hooks.ts":
/*!************************************!*\
  !*** ./src/utils/helpers/hooks.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useConvertFile": () => (/* binding */ useConvertFile),
/* harmony export */   "useUploadedEntity": () => (/* binding */ useUploadedEntity)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_Edit_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/Edit/actions */ "./src/store/Edit/actions.ts");




const useConvertFile = () => {
  return file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = error => reject(error);
  });
};
const useUploadedEntity = (entityId, path) => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    uploadedEntity,
    uploadedEntityLoading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.uploadedEntity);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (uploadedEntity && !entityId) {
      navigate(`/edit/${path}/${entityId}`);
      dispatch((0,_store_Edit_actions__WEBPACK_IMPORTED_MODULE_2__.clearUploadedEntityData)());
    }
  }, [uploadedEntity]);
  return uploadedEntityLoading;
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7c1dd7eeaf7bc4c0d293")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.12268111b782b8b9648c.hot-update.js.map