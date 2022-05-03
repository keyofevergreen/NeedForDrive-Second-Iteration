/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/pages/Edit/components/RateEdit/RateEdit.tsx":
/*!*********************************************************!*\
  !*** ./src/pages/Edit/components/RateEdit/RateEdit.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ContentContainer/ContentContainer */ "./src/components/ContentContainer/ContentContainer.tsx");
/* harmony import */ var _RateTypes_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../RateTypes/hooks */ "./src/pages/RateTypes/hooks.ts");
/* harmony import */ var _utils_helpers_OnlyNumberValidate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/helpers/OnlyNumberValidate */ "./src/utils/helpers/OnlyNumberValidate.ts");
/* harmony import */ var _components_FormBody_FormBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/FormBody/FormBody */ "./src/components/FormBody/FormBody.tsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hooks */ "./src/pages/Edit/components/RateEdit/hooks.ts");
/* harmony import */ var _utils_helpers_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utils/helpers/hooks */ "./src/utils/helpers/hooks.ts");
/* harmony import */ var _components_InputErrorMessageProvider_InputErrorMessageProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/InputErrorMessageProvider/InputErrorMessageProvider */ "./src/components/InputErrorMessageProvider/InputErrorMessageProvider.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const RateEdit = () => {
  var _errors$rateTypeId;

  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useNavigate)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    rateId
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useParams)();
  const {
    register,
    handleSubmit,
    setValue,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_12__.useForm)({
    defaultValues: {
      price: '',
      rateTypeId: 'Выберите тип тарифа'
    }
  });
  const [rateTypes, rateTypesLoading] = (0,_RateTypes_hooks__WEBPACK_IMPORTED_MODULE_4__.useRateTypes)();
  const rateUploading = (0,_utils_helpers_hooks__WEBPACK_IMPORTED_MODULE_8__.useUploadedEntity)(rateId, 'point');
  const fetchRateLoading = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__.useRateById)(rateId, setValue);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("title", {
        children: "Need For Drive - \u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0442\u0430\u0440\u0438\u0444\u0430"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("meta", {
        name: "description",
        content: "Home page"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0442\u0430\u0440\u0438\u0444\u0430",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components_FormBody_FormBody__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0442\u0430\u0440\u0438\u0444\u0430",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"].Group, {
          controlId: "carName",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"].Label, {
            children: "\u0422\u0438\u043F \u0442\u0430\u0440\u0438\u0444\u0430"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_InputErrorMessageProvider_InputErrorMessageProvider__WEBPACK_IMPORTED_MODULE_9__["default"], {
            errorMessage: (_errors$rateTypeId = errors.rateTypeId) === null || _errors$rateTypeId === void 0 ? void 0 : _errors$rateTypeId.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"].Select, _objectSpread(_objectSpread({
              size: "sm",
              disabled: rateTypesLoading
            }, register('rateTypeId', {
              required: 'Это поле не должно быть пустым',
              validate: value => value !== 'Выберите тип тарифа' || 'Вы не выбрали тип тарифа'
            })), {}, {
              isInvalid: !!errors.rateTypeId,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("option", {
                value: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043F \u0442\u0430\u0440\u0438\u0444\u0430",
                children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043F"
              }), rateTypes && rateTypes.data.map(rateType => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("option", {
                value: rateType.id,
                children: `${rateType.name} - ${rateType.unit}`
              }, rateType.id))]
            }))
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"].Group, {
          controlId: "ratePrice",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"].Label, {
            children: "\u0426\u0435\u043D\u0430, \u20BD"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            className: "input-wrap",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"].Control, {
              type: "text",
              placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0435\u043D\u0443",
              "aria-describedby": "ratePrice",
              onKeyDown: e => (0,_utils_helpers_OnlyNumberValidate__WEBPACK_IMPORTED_MODULE_5__["default"])(e)
            })
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RateEdit);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("73bb773c64b1efaa6ac4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.798da571e32b6b9de6e5.hot-update.js.map