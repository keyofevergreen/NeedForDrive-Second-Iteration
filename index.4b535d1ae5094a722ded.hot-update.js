/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/pages/Edit/components/CarEdit/components/CarCard/CarCard.tsx":
/*!**************************************************************************!*\
  !*** ./src/pages/Edit/components/CarEdit/components/CarCard/CarCard.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var _utils_helpers_imageOnErrorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utils/helpers/imageOnErrorHandler */ "./src/utils/helpers/imageOnErrorHandler.ts");
/* harmony import */ var _components_InputErrorMessageProvider_InputErrorMessageProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../components/InputErrorMessageProvider/InputErrorMessageProvider */ "./src/components/InputErrorMessageProvider/InputErrorMessageProvider.tsx");
/* harmony import */ var _MyProgressBar_MyProgressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MyProgressBar/MyProgressBar */ "./src/pages/Edit/components/CarEdit/components/MyProgressBar/MyProgressBar.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles.module.scss */ "./src/pages/Edit/components/CarEdit/styles.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const CarCard = props => {
  const {
    image,
    carName,
    category,
    imageError,
    imageRegister,
    descriptionError,
    descriptionRegister,
    progressBarFields
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["car-edit"],
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["car-edit__card"],
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
        src: image && image.length > 0 ? URL.createObjectURL(image[0]) : '',
        alt: "car-name",
        onError: _utils_helpers_imageOnErrorHandler__WEBPACK_IMPORTED_MODULE_1__.imageOnErrorHandler
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["car-edit__details"],
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
          children: carName
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          children: category && category.length > 0 ? category : 'Категория не выбрана'
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["car-edit__file-input-container"],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_InputErrorMessageProvider_InputErrorMessageProvider__WEBPACK_IMPORTED_MODULE_2__["default"], {
          errorMessage: imageError,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Control, _objectSpread(_objectSpread({
            type: "file",
            accept: "image/png, image/jpeg"
          }, imageRegister), {}, {
            isInvalid: !!imageError
          }))
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_MyProgressBar_MyProgressBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        formStates: progressBarFields
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Group, {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["car-edit__description-textarea"],
        controlId: "carDescription",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Label, {
          children: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_InputErrorMessageProvider_InputErrorMessageProvider__WEBPACK_IMPORTED_MODULE_2__["default"], {
          errorMessage: descriptionError,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Control, _objectSpread(_objectSpread({
            as: "textarea",
            rows: 4,
            "aria-describedby": "carDescription",
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
          }, descriptionRegister), {}, {
            isInvalid: !!descriptionError
          }))
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarCard);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ca6ab09cce472577a70d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.4b535d1ae5094a722ded.hot-update.js.map