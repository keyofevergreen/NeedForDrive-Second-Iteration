/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/pages/Order/Order.tsx":
/*!***********************************!*\
  !*** ./src/pages/Order/Order.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks */ "./src/pages/Order/hooks.ts");
/* harmony import */ var _hooks_useResize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useResize */ "./src/hooks/useResize.ts");
/* harmony import */ var _components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ContentContainer/ContentContainer */ "./src/components/ContentContainer/ContentContainer.tsx");
/* harmony import */ var _components_OrderItem_OrderItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/OrderItem/OrderItem */ "./src/pages/Order/components/OrderItem/OrderItem.tsx");
/* harmony import */ var _components_TableFilter_TableFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/TableFilter/TableFilter */ "./src/components/TableFilter/TableFilter.tsx");
/* harmony import */ var _components_OrderFilters_OrderFilters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/OrderFilters/OrderFilters */ "./src/pages/Order/components/OrderFilters/OrderFilters.tsx");
/* harmony import */ var _components_Spin_Spin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Spin/Spin */ "./src/components/Spin/Spin.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");














const Order = () => {
  const isResponsive = (0,_hooks_useResize__WEBPACK_IMPORTED_MODULE_3__["default"])(1, 1440);
  const [cityFilter, setCityFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Все города');
  const [dateFilter, setDateFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('За все время');
  const [orderStatusFilter, setOrderStatusFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Все заказы');
  const [isFullTankFilter, setFullTankFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isNeedChildChairFilter, setNeedChildChairFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isRightWheelFilter, setRightWheelFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    cityId: cityFilter,
    orderStatusId: orderStatusFilter,
    date: dateFilter,
    isFullTank: isFullTankFilter,
    isNeedChildChair: isNeedChildChairFilter,
    isRightWheel: isRightWheelFilter
  });
  const [orders, ordersLoading] = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useOrder)(filters, page);
  const [submitStatusId, setSubmitStatusId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  const submitFilter = () => {
    setFilters({
      cityId: cityFilter,
      orderStatusId: orderStatusFilter,
      date: dateFilter,
      isFullTank: isFullTankFilter,
      isNeedChildChair: isNeedChildChairFilter,
      isRightWheel: isRightWheelFilter
    });
    setPage(0);
  };

  const resetFilter = () => {
    setFilters({
      cityId: 'Все города',
      orderStatusId: 'Все заказы',
      date: 'За все время',
      isFullTank: false,
      isNeedChildChair: false,
      isRightWheel: false
    });
    setCityFilter('Все города');
    setOrderStatusFilter('Все заказы');
    setDateFilter('За все время');
    setFullTankFilter(false);
    setNeedChildChairFilter(false);
    setRightWheelFilter(false);
    setPage(0);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("title", {
        children: "Need For Drive - \u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta", {
        name: "description",
        content: "Home page"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "\u0417\u0430\u043A\u0430\u0437\u044B",
      page: page,
      itemCount: orders === null || orders === void 0 ? void 0 : orders.count,
      onSetPage: setPage,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_TableFilter_TableFilter__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onSubmitFilter: submitFilter,
        onResetFilter: resetFilter,
        isFiltered: filters.cityId !== 'Все города' || filters.orderStatusId !== 'Все заказы' || filters.date !== 'За все время' || filters.isFullTank !== false || filters.isNeedChildChair !== false || filters.isRightWheel !== false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_OrderFilters_OrderFilters__WEBPACK_IMPORTED_MODULE_7__["default"], {
          dateFilter: dateFilter,
          setDateFilter: setDateFilter,
          cityFilter: cityFilter,
          setCityFilter: setCityFilter,
          orderStatusFilter: orderStatusFilter,
          setOrderStatusFilter: setOrderStatusFilter,
          setFullTankFilter: setFullTankFilter,
          isFullTankFilter: isFullTankFilter,
          setNeedChildChairFilter: setNeedChildChairFilter,
          isNeedChildChairFilter: isNeedChildChairFilter,
          setRightWheelFilter: setRightWheelFilter,
          isRightWheelFilter: isRightWheelFilter
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "table-container",
        children: [orders && !ordersLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
          hover: true,
          borderless: true,
          responsive: isResponsive,
          style: {
            tableLayout: 'fixed'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tbody", {
            children: [orders && orders.data.map(order => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_OrderItem_OrderItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              order: order,
              filters: filters,
              page: page
            }, order.id)), orders && orders.data.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("tr", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "\u041F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"
              })
            })]
          })
        }), ordersLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Spin_Spin__WEBPACK_IMPORTED_MODULE_8__["default"], {})]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Order);

/***/ }),

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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/ButtonGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_CheckMark_component_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/CheckMark.component.svg */ "./src/assets/CheckMark.component.svg");
/* harmony import */ var _assets_CloseIcon_component_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/CloseIcon.component.svg */ "./src/assets/CloseIcon.component.svg");
/* harmony import */ var _store_Edit_thunks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../store/Edit/thunks */ "./src/store/Edit/thunks.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










const cx = (classnames__WEBPACK_IMPORTED_MODULE_2___default());

const OrderItemStatusButtons = ({
  currentOrderStatus,
  filters,
  page,
  orderId
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const [editMode, setEditMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    orderStatus,
    loading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.orderStatus);

  const onSubmitStatus = () => {
    dispatch((0,_store_Edit_thunks__WEBPACK_IMPORTED_MODULE_5__.editEntity)({}, 'order', orderId, `Заказ №${orderId}, `));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: cx('order-item-status-edit-btn', {
      'edit-mode': editMode
    }),
    children: [!editMode && currentOrderStatus.name === 'Новые' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        size: "sm",
        variant: "outline-primary",
        children: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        size: "sm",
        variant: "outline-danger",
        children: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
      })]
    }), !editMode && currentOrderStatus.name !== 'Новые' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        size: "sm",
        variant: "outline-danger",
        children: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        size: "sm",
        variant: "outline-primary",
        onClick: () => setEditMode(true),
        children: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"
      })]
    }), editMode && currentOrderStatus.name !== 'Новые' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Select, {
        size: "sm",
        disabled: loading,
        className: "status-edit-select",
        children: orderStatus && orderStatus.map(status => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
          value: status.id,
          children: status.name
        }, status.id))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        size: "sm",
        variant: "outline-primary",
        className: "submit-btn",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_assets_CheckMark_component_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        size: "sm",
        variant: "outline-danger",
        className: "cancel-btn",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_assets_CloseIcon_component_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {})
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderItemStatusButtons);

/***/ }),

/***/ "./src/store/OrderStatus/actions.ts":
/*!******************************************!*\
  !*** ./src/store/OrderStatus/actions.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "requestOrderStatuses": () => (/* binding */ requestOrderStatuses),
/* harmony export */   "requestOrderStatusesSuccess": () => (/* binding */ requestOrderStatusesSuccess),
/* harmony export */   "requestOrderStatusesError": () => (/* binding */ requestOrderStatusesError),
/* harmony export */   "requestOrderStatus": () => (/* binding */ requestOrderStatus),
/* harmony export */   "requestOrderStatusSuccess": () => (/* binding */ requestOrderStatusSuccess),
/* harmony export */   "requestOrderStatusError": () => (/* binding */ requestOrderStatusError),
/* harmony export */   "setSubmittedStatusId": () => (/* binding */ setSubmittedStatusId),
/* harmony export */   "setCanceledStatusId": () => (/* binding */ setCanceledStatusId)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const requestOrderStatuses = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Order statuses is fetching...');
const requestOrderStatusesSuccess = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Order statuses has already fetched');
const requestOrderStatusesError = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Order statuses fetched with error');
const requestOrderStatus = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Order status is fetching...');
const requestOrderStatusSuccess = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Order status has already fetched');
const requestOrderStatusError = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Order status fetched with error');
const setSubmittedStatusId = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Submitted status is setting');
const setCanceledStatusId = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Canceled status is setting');

/***/ }),

/***/ "./src/store/OrderStatus/reducer.ts":
/*!******************************************!*\
  !*** ./src/store/OrderStatus/reducer.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/store/OrderStatus/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const orderStatusReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createReducer)({
  orderStatus: null,
  loading: false,
  error: null,
  orderStatusById: null,
  orderStatusByIdLoading: false,
  orderStatusByIdError: null,
  submitStatusId: null,
  cancelStatusId: null
}, {
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestOrderStatuses.type]: state => _objectSpread(_objectSpread({}, state), {}, {
    orderStatus: null,
    loading: true,
    error: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestOrderStatusesSuccess.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    orderStatus: payload,
    loading: false,
    error: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestOrderStatusesError.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    orderStatus: null,
    loading: false,
    error: payload
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestOrderStatus.type]: state => _objectSpread(_objectSpread({}, state), {}, {
    orderStatusById: null,
    orderStatusByIdLoading: true,
    orderStatusByIdError: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestOrderStatusSuccess.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    orderStatusById: payload,
    orderStatusByIdLoading: false,
    orderStatusByIdError: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestOrderStatusError.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    orderStatusById: null,
    orderStatusByIdLoading: false,
    orderStatusByIdError: payload
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.setSubmittedStatusId.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    submitStatusId: payload
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.setCanceledStatusId.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    cancelStatusId: payload
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (orderStatusReducer);

/***/ }),

/***/ "./src/store/OrderStatus/thunks.ts":
/*!*****************************************!*\
  !*** ./src/store/OrderStatus/thunks.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchOrderStatuses": () => (/* binding */ fetchOrderStatuses),
/* harmony export */   "fetchOrderStatus": () => (/* binding */ fetchOrderStatus)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/store/OrderStatus/actions.ts");
/* harmony import */ var _ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorProvider/actions */ "./src/store/ErrorProvider/actions.ts");


const fetchOrderStatuses = () => async (dispatch, getState, {
  services
}) => {
  try {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestOrderStatuses)());
    const {
      data
    } = await services.table.getEntities('orderStatus', {});
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestOrderStatusesSuccess)(data.data));
    const submitStatus = data.data.find(status => status.name === 'Подтвержденные');
    const cancelStatus = data.data.find(status => status.name === 'Отмененные');
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.setSubmittedStatusId)(submitStatus.id));
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.setCanceledStatusId)(cancelStatus.id));
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("53aea499dca54407247d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.f6226fc0a4def88aa8fd.hot-update.js.map