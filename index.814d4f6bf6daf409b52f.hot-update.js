/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/pages/CarsList/CarsList.tsx":
/*!*****************************************!*\
  !*** ./src/pages/CarsList/CarsList.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var _components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ContentContainer/ContentContainer */ "./src/components/ContentContainer/ContentContainer.tsx");
/* harmony import */ var _components_CarItem_CarItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/CarItem/CarItem */ "./src/pages/CarsList/components/CarItem/CarItem.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






const cars = [{
  name: 'Ford Focus',
  category: 'Спорт',
  colors: ['Белый', 'Синий', 'Черный'],
  priceMin: 3000,
  priceMax: 12000,
  tank: 100,
  number: 'RUS215ER',
  id: 1
}];

const CarsList = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "\u0410\u0432\u0442\u043E\u043F\u0430\u0440\u043A",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "entity-header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "entity-header__options",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Select, {
          size: "sm",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
            children: "\u0412\u0441\u0435 \u043C\u0430\u0448\u0438\u043D\u044B"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
            children: "Ford"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
            children: "Porsche"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Select, {
          size: "sm",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
            children: "\u0412\u0441\u0435 \u043A\u043B\u0430\u0441\u0441\u044B"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
            children: "\u042D\u043A\u043E\u043D\u043E\u043C"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
            children: "\u042D\u043A\u043E\u043D\u043E\u043C+"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
            children: "\u0421\u043F\u043E\u0440\u0442"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Select, {
          size: "sm",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
            children: "\u041B\u044E\u0431\u043E\u0439 \u0437\u0430\u043F\u0430\u0441 \u0442\u043E\u043F\u043B\u0438\u0432\u0430"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
            children: "\u0417\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
            children: "\u041D\u0435\u0437\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Select, {
          size: "sm",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
            children: "\u041B\u044E\u0431\u043E\u0439 \u0446\u0432\u0435\u0442"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
            children: "\u041A\u0440\u0430\u0441\u043D\u044B\u0435"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
            children: "\u0421\u0438\u043D\u0438\u0435"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "entity-header__buttons",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
          variant: "danger",
          size: "sm",
          type: "button",
          children: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
          variant: "primary",
          size: "sm",
          type: "button",
          children: "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
      hover: true,
      borderless: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            children: "\u041C\u043E\u0434\u0435\u043B\u044C"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            children: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            children: "\u0426\u0432\u0435\u0442\u0430"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            children: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0430\u0440\u0435\u043D\u0434\u044B"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            children: "\u0422\u043E\u043F\u043B\u0438\u0432\u043E"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            children: "\u041D\u043E\u043C\u0435\u0440"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tbody", {
        children: cars.map(car => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_CarItem_CarItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
          name: car.name,
          category: car.category,
          colors: car.colors,
          priceMin: car.priceMin,
          priceMax: car.priceMax,
          tank: car.tank,
          number: car.number
        }, car.id))
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarsList);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ef308b771e664c892398")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.814d4f6bf6daf409b52f.hot-update.js.map