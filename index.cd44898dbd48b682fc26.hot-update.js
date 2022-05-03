/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/components/TableItem/TableItem.tsx":
/*!************************************************!*\
  !*** ./src/components/TableItem/TableItem.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _SettingButton_SettingButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SettingButton/SettingButton */ "./src/components/SettingButton/SettingButton.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






const TableItem = ({
  columns,
  id,
  pathToEditPage
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
    children: [columns.map((columnData, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
      children: columnData
    }, `${columnData}-${index}`)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
        to: `/edit/${pathToEditPage}/${id}`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_SettingButton_SettingButton__WEBPACK_IMPORTED_MODULE_1__["default"], {})
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableItem);

/***/ }),

/***/ "./src/pages/OrderStatus/OrderStatus.tsx":
/*!***********************************************!*\
  !*** ./src/pages/OrderStatus/OrderStatus.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _hooks_useResize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useResize */ "./src/hooks/useResize.ts");
/* harmony import */ var _components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ContentContainer/ContentContainer */ "./src/components/ContentContainer/ContentContainer.tsx");
/* harmony import */ var _components_TableItem_TableItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/TableItem/TableItem */ "./src/components/TableItem/TableItem.tsx");
/* harmony import */ var _components_Spin_Spin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Spin/Spin */ "./src/components/Spin/Spin.tsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks */ "./src/pages/OrderStatus/hooks.ts");
/* harmony import */ var _components_AddTableItemLink_AddTableItemLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/AddTableItemLink/AddTableItemLink */ "./src/components/AddTableItemLink/AddTableItemLink.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");













const OrderStatus = () => {
  const isResponsive = (0,_hooks_useResize__WEBPACK_IMPORTED_MODULE_2__["default"])(1, 1024);
  const [orderStatus, orderStatusLoading] = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__.useOrderStatuses)();
  const sortedOrderStatuses = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__.useSortedOrderStatus)(orderStatus);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("title", {
        children: "Need For Drive - \u0421\u0442\u0430\u0442\u0443\u0441\u044B \u0437\u0430\u043A\u0430\u0437\u043E\u0432"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta", {
        name: "description",
        content: "Home page"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "\u0421\u0442\u0430\u0442\u0443\u0441\u044B \u0437\u0430\u043A\u0430\u0437\u043E\u0432",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "table-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_AddTableItemLink_AddTableItemLink__WEBPACK_IMPORTED_MODULE_7__["default"], {
          to: "/edit/order-status"
        }), orderStatus && !orderStatusLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
          hover: true,
          borderless: true,
          responsive: isResponsive,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("tr", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                children: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u0443\u0441\u0430"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tbody", {
            children: [sortedOrderStatuses.map(status => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_TableItem_TableItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
              id: status.id,
              columns: [status.name],
              pathToEditPage: "order-status"
            }, status.id)), sortedOrderStatuses.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("tr", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
                children: "\u041F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"
              })
            })]
          })]
        }), orderStatusLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Spin_Spin__WEBPACK_IMPORTED_MODULE_5__["default"], {})]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderStatus);

/***/ }),

/***/ "./src/pages/Points/Points.tsx":
/*!*************************************!*\
  !*** ./src/pages/Points/Points.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks */ "./src/pages/Points/hooks.ts");
/* harmony import */ var _Cities_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Cities/hooks */ "./src/pages/Cities/hooks.ts");
/* harmony import */ var _hooks_useResize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useResize */ "./src/hooks/useResize.ts");
/* harmony import */ var _components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ContentContainer/ContentContainer */ "./src/components/ContentContainer/ContentContainer.tsx");
/* harmony import */ var _components_TableFilter_TableFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/TableFilter/TableFilter */ "./src/components/TableFilter/TableFilter.tsx");
/* harmony import */ var _components_TableItem_TableItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/TableItem/TableItem */ "./src/components/TableItem/TableItem.tsx");
/* harmony import */ var _components_Spin_Spin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Spin/Spin */ "./src/components/Spin/Spin.tsx");
/* harmony import */ var _components_AddTableItemLink_AddTableItemLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/AddTableItemLink/AddTableItemLink */ "./src/components/AddTableItemLink/AddTableItemLink.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");















const Points = () => {
  const isResponsive = (0,_hooks_useResize__WEBPACK_IMPORTED_MODULE_4__["default"])(1, 1024);
  const [cities, citiesLoading] = (0,_Cities_hooks__WEBPACK_IMPORTED_MODULE_3__.useCities)();
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [cityFilter, setCityFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Все города');
  const [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Все города');
  const [points, pointsLoading] = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.usePoints)(filters, page);

  const submitFilter = () => {
    setFilters(cityFilter);
    setPage(0);
  };

  const resetFilter = () => {
    setFilters(null);
    setCityFilter('Все города');
    setPage(0);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("title", {
        children: "Need For Drive - \u041F\u0443\u043D\u043A\u0442\u044B \u0432\u044B\u0434\u0430\u0447\u0438"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("meta", {
        name: "description",
        content: "Home page"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "\u041F\u0443\u043D\u043A\u0442\u044B \u0432\u044B\u0434\u0430\u0447\u0438",
      page: page,
      itemCount: points === null || points === void 0 ? void 0 : points.count,
      onSetPage: setPage,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_TableFilter_TableFilter__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onSubmitFilter: submitFilter,
        onResetFilter: resetFilter,
        isFiltered: filters && filters !== 'Все города',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Select, {
          size: "sm",
          value: cityFilter,
          onChange: e => setCityFilter(e.target.value),
          disabled: citiesLoading,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("option", {
            value: "\u0412\u0441\u0435 \u0433\u043E\u0440\u043E\u0434\u0430",
            children: "\u0412\u0441\u0435 \u0433\u043E\u0440\u043E\u0434\u0430"
          }), cities && cities.map(city => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("option", {
            value: city.id,
            children: city.name
          }, city.id))]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "table-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_AddTableItemLink_AddTableItemLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          to: "/edit/point"
        }), points && !pointsLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
          hover: true,
          borderless: true,
          responsive: isResponsive,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("th", {
                children: "\u041F\u0443\u043D\u043A\u0442 \u0432\u044B\u0434\u0430\u0447\u0438"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("th", {
                children: "\u0410\u0434\u0440\u0435\u0441"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("th", {
                children: "\u0413\u043E\u0440\u043E\u0434"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("tbody", {
            children: [points.data.map(point => {
              var _point$cityId;

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_TableItem_TableItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
                columns: [point.name, point.address, ((_point$cityId = point.cityId) === null || _point$cityId === void 0 ? void 0 : _point$cityId.name) || 'Не указан'],
                id: point.id,
                pathToEditPage: "point"
              }, point.id);
            }), points.data.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("tr", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("td", {
                children: "\u041F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"
              })
            })]
          })]
        }), pointsLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Spin_Spin__WEBPACK_IMPORTED_MODULE_8__["default"], {})]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Points);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f8d7f3ba44f7f44a010d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.cd44898dbd48b682fc26.hot-update.js.map