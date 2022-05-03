/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/pages/Edit/components/PointEdit/PointEdit.tsx":
/*!***********************************************************!*\
  !*** ./src/pages/Edit/components/PointEdit/PointEdit.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ContentContainer/ContentContainer */ "./src/components/ContentContainer/ContentContainer.tsx");
/* harmony import */ var _Cities_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Cities/hooks */ "./src/pages/Cities/hooks.ts");
/* harmony import */ var _components_InputsContainer_InputsContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/InputsContainer/InputsContainer */ "./src/components/InputsContainer/InputsContainer.tsx");
/* harmony import */ var _utils_helpers_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utils/helpers/hooks */ "./src/utils/helpers/hooks.ts");
/* harmony import */ var _components_InputErrorMessageProvider_InputErrorMessageProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/InputErrorMessageProvider/InputErrorMessageProvider */ "./src/components/InputErrorMessageProvider/InputErrorMessageProvider.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const PointEdit = () => {
  var _errors$name, _errors$address, _errors$cityId;

  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useNavigate)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    pointId
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useParams)();
  const {
    register,
    handleSubmit,
    setValue,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_10__.useForm)({
    defaultValues: {
      name: '',
      address: '',
      cityId: 'Выберите город'
    }
  });
  const [cities, citiesLoading] = (0,_Cities_hooks__WEBPACK_IMPORTED_MODULE_4__.useCities)();
  const pointUploading = (0,_utils_helpers_hooks__WEBPACK_IMPORTED_MODULE_6__.useUploadedEntity)(pointId, 'point');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("title", {
        children: "Need For Drive - \u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u043F\u0443\u043D\u043A\u0442\u0430 \u0432\u044B\u0434\u0430\u0447\u0438"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta", {
        name: "description",
        content: "Home page"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u043F\u0443\u043D\u043A\u0442\u0430 \u0432\u044B\u0434\u0430\u0447\u0438",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
        noValidate: true,
        autoComplete: "off",
        onSubmit: handleSubmit(data => {
          console.log(data);
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_components_InputsContainer_InputsContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
          title: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u0443\u043D\u043A\u0442\u0430 \u0432\u044B\u0434\u0430\u0447\u0438",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_InputErrorMessageProvider_InputErrorMessageProvider__WEBPACK_IMPORTED_MODULE_7__["default"], {
            errorMessage: (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Group, {
              controlId: "pointName",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Label, {
                children: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "input-wrap",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Control, _objectSpread(_objectSpread({
                  type: "text",
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
                  "aria-describedby": "pointName"
                }, register('name', {
                  required: 'Это поле не должно быть пустым'
                })), {}, {
                  isInvalid: !!errors.name
                }))
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_InputErrorMessageProvider_InputErrorMessageProvider__WEBPACK_IMPORTED_MODULE_7__["default"], {
            errorMessage: (_errors$address = errors.address) === null || _errors$address === void 0 ? void 0 : _errors$address.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Group, {
              controlId: "pointAddress",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Label, {
                children: "\u0410\u0434\u0440\u0435\u0441"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "input-wrap",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Control, _objectSpread(_objectSpread({
                  type: "text",
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441",
                  "aria-describedby": "pointAddress"
                }, register('address', {
                  required: 'Это поле не должно быть пустым'
                })), {}, {
                  isInvalid: !!errors.address
                }))
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_InputErrorMessageProvider_InputErrorMessageProvider__WEBPACK_IMPORTED_MODULE_7__["default"], {
            errorMessage: (_errors$cityId = errors.cityId) === null || _errors$cityId === void 0 ? void 0 : _errors$cityId.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Group, {
              controlId: "pointsCity",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Label, {
                children: "\u0413\u043E\u0440\u043E\u0434"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "input-wrap",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Select, _objectSpread(_objectSpread({
                  size: "sm",
                  disabled: citiesLoading,
                  "aria-describedby": "pointsCity"
                }, register('cityId', {
                  required: 'Это поле не должно быть пустым',
                  validate: value => value !== 'Выберите город' || 'Вы не выбрали город'
                })), {}, {
                  isInvalid: !!errors.cityId,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                    value: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043E\u0440\u043E\u0434",
                    children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043E\u0440\u043E\u0434"
                  }), cities && cities.map(city => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                    value: city.id,
                    children: city.name
                  }, city.id))]
                }))
              })]
            })
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PointEdit);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9920c7777404b87c0e7d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.51a370c2e3fa9101afac.hot-update.js.map