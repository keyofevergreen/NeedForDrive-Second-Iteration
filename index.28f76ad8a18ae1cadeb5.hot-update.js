/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/ButtonGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_CheckMark_component_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/CheckMark.component.svg */ "./src/assets/CheckMark.component.svg");
/* harmony import */ var _assets_CloseIcon_component_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/CloseIcon.component.svg */ "./src/assets/CloseIcon.component.svg");
/* harmony import */ var _store_Edit_thunks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../store/Edit/thunks */ "./src/store/Edit/thunks.ts");
/* harmony import */ var _store_Order_thunks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../store/Order/thunks */ "./src/store/Order/thunks.ts");
/* harmony import */ var _getAxiosConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../getAxiosConfig */ "./src/pages/Order/getAxiosConfig.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












const cx = (classnames__WEBPACK_IMPORTED_MODULE_2___default());

const OrderItemStatusButtons = ({
  currentOrderStatus,
  filters,
  page,
  order
}) => {
  const {
    id,
    carId,
    cityId,
    pointId,
    orderStatusId
  } = order;
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    orderStatus,
    loading,
    submitStatusId,
    cancelStatusId
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.orderStatus);
  const {
    successAlertMessage
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.uploadedEntity);
  const [editMode, setEditMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [orderStatusValue, setOrderStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(orderStatusId.id);

  const onSubmitStatus = () => {
    dispatch((0,_store_Edit_thunks__WEBPACK_IMPORTED_MODULE_5__.editEntity)({
      orderStatusId: submitStatusId
    }, 'order', id, `Заказ №${id.substr(0, 6)}, ${carId.name} в ${cityId.name} на ${pointId.address} сохранен`));
  };

  const onCancelStatus = () => {
    dispatch((0,_store_Edit_thunks__WEBPACK_IMPORTED_MODULE_5__.editEntity)({
      orderStatusId: cancelStatusId
    }, 'order', id, `Заказ №${id.substr(0, 6)}, ${carId.name} в ${cityId.name} на ${pointId.address} отменен`));
  };

  const onEditStatus = () => {
    dispatch((0,_store_Edit_thunks__WEBPACK_IMPORTED_MODULE_5__.editEntity)({
      orderStatusId: orderStatusValue
    }, 'order', id, `Статус заказа №${id.substr(0, 6)}, ${carId.name} в ${cityId.name} на ${pointId.address} изменен`));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (successAlertMessage) {
      const config = (0,_getAxiosConfig__WEBPACK_IMPORTED_MODULE_7__["default"])(filters, page);
      dispatch((0,_store_Order_thunks__WEBPACK_IMPORTED_MODULE_6__.fetchOrder)(config));
    }
  }, [successAlertMessage]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: cx('order-item-status-edit-btn', {
      'edit-mode': editMode
    }),
    children: [!editMode && currentOrderStatus.name === 'Новые' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
        size: "sm",
        variant: "outline-primary",
        onClick: () => onSubmitStatus(),
        children: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
        size: "sm",
        variant: "outline-danger",
        onClick: () => onCancelStatus(),
        children: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
      })]
    }), !editMode && currentOrderStatus.name !== 'Новые' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
        size: "sm",
        variant: "outline-danger",
        onClick: () => onCancelStatus(),
        children: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
        size: "sm",
        variant: "outline-primary",
        onClick: () => setEditMode(true),
        children: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"
      })]
    }), editMode && currentOrderStatus.name !== 'Новые' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Select, {
        size: "sm",
        value: orderStatusValue,
        onChange: e => setOrderStatus(e.target.value),
        disabled: loading,
        className: "status-edit-select",
        children: orderStatus && orderStatus.map(status => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
          value: status.id,
          children: status.name
        }, status.id))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
        size: "sm",
        variant: "outline-primary",
        className: "submit-btn",
        disabled: orderStatusValue === orderStatusId.id,
        onClick: () => onEditStatus(),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_assets_CheckMark_component_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
        size: "sm",
        variant: "outline-danger",
        className: "cancel-btn",
        onClick: () => setEditMode(false),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_assets_CloseIcon_component_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {})
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderItemStatusButtons);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("936793b40e298b89c833")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.28f76ad8a18ae1cadeb5.hot-update.js.map