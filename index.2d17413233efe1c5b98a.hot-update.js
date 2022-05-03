/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/pages/Rates/Rates.tsx":
/*!***********************************!*\
  !*** ./src/pages/Rates/Rates.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks */ "./src/pages/Rates/hooks.ts");
/* harmony import */ var _hooks_useResize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useResize */ "./src/hooks/useResize.ts");
/* harmony import */ var _components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ContentContainer/ContentContainer */ "./src/components/ContentContainer/ContentContainer.tsx");
/* harmony import */ var _components_TableFilter_TableFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/TableFilter/TableFilter */ "./src/components/TableFilter/TableFilter.tsx");
/* harmony import */ var _components_TableItem_TableItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/TableItem/TableItem */ "./src/components/TableItem/TableItem.tsx");
/* harmony import */ var _components_FilterByPriceRange_FilterByPriceRange__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/FilterByPriceRange/FilterByPriceRange */ "./src/components/FilterByPriceRange/FilterByPriceRange.tsx");
/* harmony import */ var _components_Spin_Spin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Spin/Spin */ "./src/components/Spin/Spin.tsx");
/* harmony import */ var _components_AddTableItemLink_AddTableItemLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/AddTableItemLink/AddTableItemLink */ "./src/components/AddTableItemLink/AddTableItemLink.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");















const Rates = () => {
  const isResponsive = (0,_hooks_useResize__WEBPACK_IMPORTED_MODULE_3__["default"])(1, 1024);
  const [lowerPriceFilter, setLowerPriceFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [higherPriceFilter, setHigherPriceFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(999999);
  const [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [rates, loading, ratesError] = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useRates)(filters, page);

  const submitFilter = () => {
    setFilters([lowerPriceFilter, higherPriceFilter]);
    setPage(0);
  };

  const resetFilter = () => {
    setLowerPriceFilter(0);
    setHigherPriceFilter(999999);
    setFilters(null);
    setPage(0);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("title", {
        children: "Need For Drive - \u0422\u0430\u0440\u0438\u0444\u044B"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("meta", {
        name: "description",
        content: "Home page"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "\u0422\u0430\u0440\u0438\u0444\u044B",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_TableFilter_TableFilter__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onSubmitFilter: submitFilter,
        onResetFilter: resetFilter,
        isFiltered: filters !== null && !(lowerPriceFilter === 0 && higherPriceFilter === 999999),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_FilterByPriceRange_FilterByPriceRange__WEBPACK_IMPORTED_MODULE_7__["default"], {
          lowerPriceFilter: lowerPriceFilter,
          setLowerPriceFilter: setLowerPriceFilter,
          higherPriceFilter: higherPriceFilter,
          setHigherPriceFilter: setHigherPriceFilter
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "table-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_AddTableItemLink_AddTableItemLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          to: "/edit/rate"
        }), rates && !loading && !ratesError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
          hover: true,
          borderless: true,
          responsive: isResponsive,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("th", {
                children: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("th", {
                children: "\u0415\u0434\u0438\u043D\u0438\u0446\u0430 \u0432\u0440\u0435\u043C\u0435\u043D\u0438"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("th", {
                children: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C, \u20BD"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("tbody", {
            children: [rates.data.map(rate => {
              var _rate$rateTypeId, _rate$rateTypeId2;

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_TableItem_TableItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
                columns: [(_rate$rateTypeId = rate.rateTypeId) === null || _rate$rateTypeId === void 0 ? void 0 : _rate$rateTypeId.name, (_rate$rateTypeId2 = rate.rateTypeId) === null || _rate$rateTypeId2 === void 0 ? void 0 : _rate$rateTypeId2.unit, rate.price],
                id: rate.id,
                editPageLink: "rate"
              }, rate.id);
            }), rates.data.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("tr", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("td", {
                children: "\u041F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"
              })
            })]
          })]
        }), loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Spin_Spin__WEBPACK_IMPORTED_MODULE_8__["default"], {})]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rates);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5e18a076c44dd3a65ffd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.2d17413233efe1c5b98a.hot-update.js.map