/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/pages/Order/components/OrderFilters/OrderFilters.tsx":
/*!******************************************************************!*\
  !*** ./src/pages/Order/components/OrderFilters/OrderFilters.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/subDays/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/subMonths/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getTime/index.js");
/* harmony import */ var _Cities_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Cities/hooks */ "./src/pages/Cities/hooks.ts");
/* harmony import */ var _OrderStatus_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../OrderStatus/hooks */ "./src/pages/OrderStatus/hooks.ts");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./src/pages/Order/components/OrderFilters/styles.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









const TODAY = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])();
const LAST_WEEK = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(TODAY, 7);
const LAST_MONTH = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(TODAY, 1);
const dateFilterOptions = [{
  id: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(TODAY),
  name: 'За день'
}, {
  id: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(LAST_WEEK),
  name: 'За неделю'
}, {
  id: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(LAST_MONTH),
  name: 'За месяц'
}];

const OrderFilters = ({
  dateFilter,
  setDateFilter,
  cityFilter,
  setCityFilter,
  orderStatusFilter,
  setOrderStatusFilter,
  setFullTankFilter,
  isFullTankFilter,
  setNeedChildChairFilter,
  isNeedChildChairFilter,
  setRightWheelFilter,
  isRightWheelFilter
}) => {
  const [cities, citiesLoading] = (0,_Cities_hooks__WEBPACK_IMPORTED_MODULE_1__.useCities)();
  const [orderStatus, orderStatusLoading] = (0,_OrderStatus_hooks__WEBPACK_IMPORTED_MODULE_2__.useOrderStatuses)();
  const filters = [{
    id: 1,
    value: dateFilter,
    defaultValue: 'За все время',
    onChange: setDateFilter,
    options: dateFilterOptions
  }, {
    id: 2,
    value: cityFilter,
    defaultValue: 'Все города',
    disabled: citiesLoading,
    onChange: setCityFilter,
    options: cities
  }, {
    id: 3,
    value: orderStatusFilter,
    defaultValue: 'Все заказы',
    disabled: orderStatusLoading,
    onChange: setOrderStatusFilter,
    options: orderStatus
  }];
  const checkboxes = [{
    label: 'Полный бак',
    value: isFullTankFilter,
    onChange: setFullTankFilter
  }, {
    label: 'Детское кресло',
    value: isNeedChildChairFilter,
    onChange: setNeedChildChairFilter
  }, {
    label: 'Правый руль',
    value: isRightWheelFilter,
    onChange: setRightWheelFilter
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [filters.map(filter => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Select, {
      size: "sm",
      value: filter.value,
      onChange: e => filter.onChange(e.target.value),
      disabled: filter.disabled,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
        value: filter.defaultValue,
        children: filter.defaultValue
      }), filter.options && filter.options.map(option => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
        value: option.id,
        children: option.name
      }, option.id))]
    }, filter.id)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["checkbox-wrap"],
      children: checkboxes.map(checkbox => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Check, {
        type: "checkbox",
        label: checkbox.label,
        onChange: () => checkbox.onChange(!checkbox.value),
        checked: checkbox.value
      }, checkbox.label))
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderFilters);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("415b5df455700525be2e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.96ef0bcb36f5654acb7f.hot-update.js.map