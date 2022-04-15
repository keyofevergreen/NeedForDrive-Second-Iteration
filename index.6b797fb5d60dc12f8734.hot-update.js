/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/pages/CitiesList/CitiesList.tsx":
/*!*********************************************!*\
  !*** ./src/pages/CitiesList/CitiesList.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var _hooks_useResize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useResize */ "./src/hooks/useResize.ts");
/* harmony import */ var _components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ContentContainer/ContentContainer */ "./src/components/ContentContainer/ContentContainer.tsx");
/* harmony import */ var _components_CityItem_CityItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/CityItem/CityItem */ "./src/pages/CitiesList/components/CityItem/CityItem.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








const cities = ['Санкт-Петербург', 'Ульяновск', 'Москва'];

const CitiesList = () => {
  const isResponsive = (0,_hooks_useResize__WEBPACK_IMPORTED_MODULE_1__["default"])(1, 1024);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "\u0421\u043F\u0438\u0441\u043E\u043A \u0433\u043E\u0440\u043E\u0434\u043E\u0432",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "entity-header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "entity-header__options",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"].Select, {
            size: "sm",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
              children: "\u0412\u0441\u0435 \u0433\u043E\u0440\u043E\u0434\u0430"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
              children: "\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
              children: "\u0423\u043B\u044C\u044F\u043D\u043E\u0432\u0441\u043A"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "entity-header__buttons",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
            variant: "danger",
            size: "sm",
            type: "button",
            children: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
            variant: "primary",
            size: "sm",
            type: "button",
            children: "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "table-container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
          hover: true,
          borderless: true,
          responsive: isResponsive,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tr", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
                children: "\u0413\u043E\u0440\u043E\u0434"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tbody", {
            children: cities.map(city => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_CityItem_CityItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
              city: city
            }, city))
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "\u0421\u043F\u0438\u0441\u043E\u043A \u0433\u043E\u0440\u043E\u0434\u043E\u0432",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "entity-header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "entity-header__options",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"].Select, {
            size: "sm",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
              children: "\u0412\u0441\u0435 \u0433\u043E\u0440\u043E\u0434\u0430"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
              children: "\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
              children: "\u0423\u043B\u044C\u044F\u043D\u043E\u0432\u0441\u043A"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "entity-header__buttons",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
            variant: "danger",
            size: "sm",
            type: "button",
            children: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
            variant: "primary",
            size: "sm",
            type: "button",
            children: "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "table-container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
          hover: true,
          borderless: true,
          responsive: isResponsive,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tr", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
                children: "\u0413\u043E\u0440\u043E\u0434"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tbody", {
            children: cities.map(city => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_CityItem_CityItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
              city: city
            }, city))
          })]
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CitiesList);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("77bba508eebf413ba33a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.6b797fb5d60dc12f8734.hot-update.js.map