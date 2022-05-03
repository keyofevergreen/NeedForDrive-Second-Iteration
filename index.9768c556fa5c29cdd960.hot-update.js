/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/pages/RateTypes/RateTypes.tsx":
/*!*******************************************!*\
  !*** ./src/pages/RateTypes/RateTypes.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _hooks_useResize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useResize */ "./src/hooks/useResize.ts");
/* harmony import */ var _components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ContentContainer/ContentContainer */ "./src/components/ContentContainer/ContentContainer.tsx");
/* harmony import */ var _components_TableFilter_TableFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/TableFilter/TableFilter */ "./src/components/TableFilter/TableFilter.tsx");
/* harmony import */ var _components_TableItem_TableItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/TableItem/TableItem */ "./src/components/TableItem/TableItem.tsx");
/* harmony import */ var _components_Spin_Spin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Spin/Spin */ "./src/components/Spin/Spin.tsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hooks */ "./src/pages/RateTypes/hooks.ts");
/* harmony import */ var _components_AddTableItemLink_AddTableItemLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/AddTableItemLink/AddTableItemLink */ "./src/components/AddTableItemLink/AddTableItemLink.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");













const filterOptions = ['Все тарифы', 'Поминутно', 'Суточный', 'Недельный', 'Недельный (Акция!)', 'Месячный', '3 месяца', 'Годовой'];

const RateTypes = () => {
  const isResponsive = (0,_hooks_useResize__WEBPACK_IMPORTED_MODULE_2__["default"])(1, 1024);
  const [nameFilter, setNameFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Все тарифы');
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(nameFilter);
  const [rateTypes, loading] = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__.useRateTypes)(filters, page);

  const submitFilter = () => {
    setFilters(nameFilter);
  };

  const resetFilter = () => {
    setFilters('Все тарифы');
    setNameFilter('Все тарифы');
    setPage(0);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("title", {
        children: "Need For Drive - \u0422\u0438\u043F\u044B \u0442\u0430\u0440\u0438\u0444\u043E\u0432"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta", {
        name: "description",
        content: "Home page"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "\u0422\u0438\u043F\u044B \u0442\u0430\u0440\u0438\u0444\u043E\u0432",
      page: page,
      itemCount: rateTypes === null || rateTypes === void 0 ? void 0 : rateTypes.count,
      onSetPage: setPage,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_TableFilter_TableFilter__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onSubmitFilter: submitFilter,
        onResetFilter: resetFilter,
        isFiltered: filters !== 'Все тарифы',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Select, {
          size: "sm",
          value: nameFilter,
          onChange: e => setNameFilter(e.target.value),
          children: filterOptions.map(option => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("option", {
            value: option,
            children: option
          }, option))
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "table-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_AddTableItemLink_AddTableItemLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
          to: "/edit/rate-type"
        }), rateTypes && !loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
          hover: true,
          borderless: true,
          responsive: isResponsive,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("tr", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("th", {
                children: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("tbody", {
            children: [rateTypes && rateTypes.data.map(rateType => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_TableItem_TableItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              columns: [rateType.name, rateType.unit],
              id: rateType.id,
              editPageLink: "rate-type"
            }, rateType.id)), rateTypes && rateTypes.data.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("tr", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
                children: "\u041F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"
              })
            })]
          })]
        }), loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Spin_Spin__WEBPACK_IMPORTED_MODULE_6__["default"], {})]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RateTypes);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2dead4a042f556e4fafe")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.9768c556fa5c29cdd960.hot-update.js.map