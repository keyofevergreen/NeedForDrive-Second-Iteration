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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/ButtonGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







const OrderItemStatusButtons = ({
  currentOrderStatus
}) => {
  const [editMode, setEditMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    orderStatus,
    loading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.orderStatus);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [currentOrderStatus.name === 'Новые' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
        size: "sm",
        variant: "outline-primary",
        children: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
        size: "sm",
        variant: "outline-danger",
        children: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
      })]
    }), currentOrderStatus.name !== 'Новые' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"].Select, {
        size: "sm",
        disabled: loading,
        children: orderStatus && orderStatus.map(status => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          value: status.id,
          children: status.name
        }, status.id))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
        size: "sm",
        variant: "outline-danger",
        children: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderItemStatusButtons);

/***/ }),

/***/ "./src/pages/Order/components/OrderItem/OrderItem.tsx":
/*!************************************************************!*\
  !*** ./src/pages/Order/components/OrderItem/OrderItem.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _utils_helpers_imageOnErrorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/helpers/imageOnErrorHandler */ "./src/utils/helpers/imageOnErrorHandler.ts");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./src/pages/Order/components/OrderItem/styles.module.scss");
/* harmony import */ var _OrderItemStatusButtons_OrderItemStatusButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../OrderItemStatusButtons/OrderItemStatusButtons */ "./src/pages/Order/components/OrderItemStatusButtons/OrderItemStatusButtons.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









const OrderItem = ({
  order,
  filters,
  page
}) => {
  var _carId$thumbnail;

  const {
    carId,
    cityId,
    pointId,
    dateFrom,
    dateTo,
    color,
    price,
    isFullTank,
    isNeedChildChair,
    isRightWheel,
    orderStatusId
  } = order;
  const checkboxes = [{
    label: 'Полный бак',
    value: isFullTank
  }, {
    label: 'Детское кресло',
    value: isNeedChildChair
  }, {
    label: 'Правый руль',
    value: isRightWheel
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cols,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]["order-item__img"],
        src: carId === null || carId === void 0 ? void 0 : (_carId$thumbnail = carId.thumbnail) === null || _carId$thumbnail === void 0 ? void 0 : _carId$thumbnail.path,
        alt: carId === null || carId === void 0 ? void 0 : carId.name,
        onError: _utils_helpers_imageOnErrorHandler__WEBPACK_IMPORTED_MODULE_1__.imageOnErrorHandler,
        crossOrigin: "anonymous",
        referrerPolicy: "origin"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cols,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]["order-item__details"],
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
            children: `${carId !== null && carId !== void 0 && carId.name ? carId === null || carId === void 0 ? void 0 : carId.name.toUpperCase() : 'Машина не указана'} `
          }), "\u0432", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
            children: ` ${cityId === null || cityId === void 0 ? void 0 : cityId.name}`
          }), ",", ` ${pointId !== null && pointId !== void 0 && pointId.address ? pointId === null || pointId === void 0 ? void 0 : pointId.address : 'улица не указана'}`]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: `${dateFrom ? (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(dateFrom), 'dd.MM.yyyy HH:mm') : 'Не указано'}
              —
              ${dateTo ? (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(dateTo), 'dd.MM.yyyy HH:mm') : 'Не указано'}`
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]["order-item__colors"],
          children: ["\u0426\u0432\u0435\u0442:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
            children: ` ${color}`
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cols,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]["order-item__options"],
        children: checkboxes.map((checkbox, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Check, {
          type: "checkbox",
          id: `checkbox-${index}`,
          label: checkbox.label,
          defaultChecked: checkbox.value,
          disabled: true
        }, checkbox.label))
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cols,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]["order-item__price"],
        children: `${price} ₽`
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cols,
      children: orderStatusId === null || orderStatusId === void 0 ? void 0 : orderStatusId.name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cols,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_OrderItemStatusButtons_OrderItemStatusButtons__WEBPACK_IMPORTED_MODULE_3__["default"], {
        currentOrderStatus: orderStatusId
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderItem);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f5b290bd7c80a5038497")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.983a8255226c82ea93a2.hot-update.js.map