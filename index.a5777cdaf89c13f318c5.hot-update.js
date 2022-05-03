/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/pages/Cars/Cars.tsx":
/*!*********************************!*\
  !*** ./src/pages/Cars/Cars.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks */ "./src/pages/Cars/hooks.ts");
/* harmony import */ var _Categories_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Categories/hooks */ "./src/pages/Categories/hooks.ts");
/* harmony import */ var _hooks_useResize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useResize */ "./src/hooks/useResize.ts");
/* harmony import */ var _components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ContentContainer/ContentContainer */ "./src/components/ContentContainer/ContentContainer.tsx");
/* harmony import */ var _components_CarItem_CarItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/CarItem/CarItem */ "./src/pages/Cars/components/CarItem/CarItem.tsx");
/* harmony import */ var _components_Spin_Spin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Spin/Spin */ "./src/components/Spin/Spin.tsx");
/* harmony import */ var _components_TableFilter_TableFilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/TableFilter/TableFilter */ "./src/components/TableFilter/TableFilter.tsx");
/* harmony import */ var _components_CarFilters_CarFilters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/CarFilters/CarFilters */ "./src/pages/Cars/components/CarFilters/CarFilters.tsx");
/* harmony import */ var _components_AddTableItemLink_AddTableItemLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/AddTableItemLink/AddTableItemLink */ "./src/components/AddTableItemLink/AddTableItemLink.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
















const Cars = () => {
  const isResponsive = (0,_hooks_useResize__WEBPACK_IMPORTED_MODULE_4__["default"])(1, 1024);
  const [categories, categoriesLoading] = (0,_Categories_hooks__WEBPACK_IMPORTED_MODULE_3__.useCategory)();
  const [categoryFilter, setCategoryFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Все категории');
  const [tankFilter, setTankFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Любой запас топлива');
  const [lowerPriceFilter, setLowerPriceFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [higherPriceFilter, setHigherPriceFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(999999);
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    categoryId: 'Все категории',
    tank: 'Любой запас топлива',
    lowerPrice: 0,
    higherPrice: 999999
  });
  const [cars, carsLoading, carsError] = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useCars)(filters, page);

  const submitFilter = () => {
    setFilters({
      categoryId: categoryFilter,
      tank: tankFilter,
      lowerPrice: lowerPriceFilter,
      higherPrice: higherPriceFilter
    });
    setPage(0);
  };

  const resetFilter = () => {
    setFilters({
      categoryId: 'Все категории',
      tank: 'Любой запас топлива',
      lowerPrice: 0,
      higherPrice: 999999
    });
    setLowerPriceFilter(0);
    setHigherPriceFilter(999999);
    setCategoryFilter('Все категории');
    setTankFilter('Любой запас топлива');
    setPage(0);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("title", {
        children: "Need For Drive - \u0421\u043F\u0438\u0441\u043E\u043A \u0430\u0432\u0442\u043E"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("meta", {
        name: "description",
        content: "Home page"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "\u0421\u043F\u0438\u0441\u043E\u043A \u0430\u0432\u0442\u043E",
      page: page,
      itemCount: cars === null || cars === void 0 ? void 0 : cars.count,
      onSetPage: setPage,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_TableFilter_TableFilter__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onSubmitFilter: submitFilter,
        onResetFilter: resetFilter,
        isFiltered: filters.categoryId !== 'Все категории' || filters.tank !== 'Любой запас топлива' || filters.lowerPrice !== 0 || filters.higherPrice !== 999999,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_CarFilters_CarFilters__WEBPACK_IMPORTED_MODULE_9__["default"], {
          categories: categories,
          categoriesFilter: categoryFilter,
          setCategoriesFilter: setCategoryFilter,
          categoriesLoading: categoriesLoading,
          tankFilter: tankFilter,
          setTankFilter: setTankFilter,
          lowerPriceFilter: lowerPriceFilter,
          setLowerPriceFilter: setLowerPriceFilter,
          higherPriceFilter: higherPriceFilter,
          setHigherPriceFilter: setHigherPriceFilter
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "table-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_AddTableItemLink_AddTableItemLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
          to: "/edit/car"
        }), cars && !carsLoading && !carsError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
          hover: true,
          borderless: true,
          responsive: isResponsive,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("th", {
                children: "\u041C\u043E\u0434\u0435\u043B\u044C"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("th", {
                children: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("th", {
                children: "\u0426\u0432\u0435\u0442\u0430"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("th", {
                children: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0430\u0440\u0435\u043D\u0434\u044B, \u20BD"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("th", {
                children: "\u0422\u043E\u043F\u043B\u0438\u0432\u043E"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("th", {
                children: "\u041D\u043E\u043C\u0435\u0440"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("tbody", {
            children: [cars.data.map(car => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_CarItem_CarItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
              id: car.id,
              name: car.name,
              category: car.categoryId,
              colors: car.colors,
              priceMin: car.priceMin,
              priceMax: car.priceMax,
              tank: car.tank,
              number: car.number
            }, car.id)), cars.data.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("tr", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("td", {
                children: "\u041F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"
              })
            })]
          })]
        }), carsLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Spin_Spin__WEBPACK_IMPORTED_MODULE_7__["default"], {})]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cars);

/***/ }),

/***/ "./src/pages/Cars/components/CarItem/CarItem.tsx":
/*!*******************************************************!*\
  !*** ./src/pages/Cars/components/CarItem/CarItem.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SettingButton_SettingButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/SettingButton/SettingButton */ "./src/components/SettingButton/SettingButton.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







const CarItem = ({
  name,
  category,
  colors,
  priceMin,
  priceMax,
  tank,
  number,
  id
}) => {
  const categoryString = category.name.charAt(0).toUpperCase() + category.name.slice(1);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
      className: "capitalize",
      children: name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
      children: category ? categoryString : 'Не указана'
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
      className: "capitalize",
      style: {
        maxWidth: '200px'
      },
      children: colors.join(', ')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        children: `от ${priceMin}`
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        children: `до ${priceMax}`
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
      children: tank ? `${tank}%` : 'Неизвестно'
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(number ? 'uppercase' : ''),
      children: number ? `${number}` : 'Не указан'
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
        to: `/edit/car/${id}`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_SettingButton_SettingButton__WEBPACK_IMPORTED_MODULE_2__["default"], {})
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarItem);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("086fb67f961982c38ae8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.a5777cdaf89c13f318c5.hot-update.js.map