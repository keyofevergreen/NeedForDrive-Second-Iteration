/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/pages/Edit/components/RateTypesEdit/RateTypesEdit.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/Edit/components/RateTypesEdit/RateTypesEdit.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ContentContainer/ContentContainer */ "./src/components/ContentContainer/ContentContainer.tsx");
/* harmony import */ var _components_FormBody_FormBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/FormBody/FormBody */ "./src/components/FormBody/FormBody.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _utils_helpers_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/helpers/hooks */ "./src/utils/helpers/hooks.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks */ "./src/pages/Edit/components/RateTypesEdit/hooks.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");














const RateTypesEdit = () => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const {
    rateTypeId
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useParams)();
  const {
    register,
    handleSubmit,
    setValue,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)({
    defaultValues: {
      name: ''
    }
  });
  const rateTypeUploading = (0,_utils_helpers_hooks__WEBPACK_IMPORTED_MODULE_5__.useUploadedEntity)(rateTypeId, 'rate-types');
  const fetchRateTypeLoading = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__.useRateTypeById)(rateTypeId, setValue);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("title", {
        children: "Need For Drive - \u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0442\u0438\u043F\u0430 \u0442\u0430\u0440\u0438\u0444\u0430"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("meta", {
        name: "description",
        content: "Home page"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0442\u0438\u043F\u0430 \u0442\u0430\u0440\u0438\u0444\u0430",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components_FormBody_FormBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0442\u0438\u043F\u0430 \u0442\u0430\u0440\u0438\u0444\u0430",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Group, {
          controlId: "rateTypeName",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Label, {
            children: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u0438\u043F\u0430 \u0442\u0430\u0440\u0438\u0444\u0430"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "input-wrap",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Control, {
              type: "text",
              placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
              "aria-describedby": "rateTypeName"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Group, {
          controlId: "rateTypeName",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Label, {
            children: ["\u0415\u0434\u0438\u043D\u0438\u0446\u0430 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("strong", {
              children: "7 \u0434\u043D\u0435\u0439"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "input-wrap",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Control, {
              type: "text",
              placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0435\u0434\u0438\u043D\u0438\u0446\u0443 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F",
              "aria-describedby": "rateTypeName"
            })
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RateTypesEdit);

/***/ }),

/***/ "./src/pages/Edit/components/RateTypesEdit/hooks.ts":
/*!**********************************************************!*\
  !*** ./src/pages/Edit/components/RateTypesEdit/hooks.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useRateTypeById": () => (/* binding */ useRateTypeById)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_RateTypes_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store/RateTypes/thunks */ "./src/store/RateTypes/thunks.ts");



const useRateTypeById = (rateTypeId, setValue) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    rateTypeById,
    rateTypeByIdLoading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.rateTypes);

  const setValuesToForm = async rateType => {
    setValue('name', rateType.name, {
      shouldDirty: true
    });
    setValue('unit', rateType === null || rateType === void 0 ? void 0 : rateType.unit, {
      shouldDirty: true
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (rateTypeId) {
      dispatch((0,_store_RateTypes_thunks__WEBPACK_IMPORTED_MODULE_2__.fetchRateType)(rateTypeId));
    }
  }, [rateTypeId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (rateTypeById && rateTypeId) {
      setValuesToForm(rateTypeById);
    }
  }, [rateTypeById]);
  return rateTypeByIdLoading;
};

/***/ }),

/***/ "./src/store/RateTypes/thunks.ts":
/*!***************************************!*\
  !*** ./src/store/RateTypes/thunks.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchRateTypes": () => (/* binding */ fetchRateTypes),
/* harmony export */   "fetchRateType": () => (/* binding */ fetchRateType)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/store/RateTypes/actions.ts");
/* harmony import */ var _ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorProvider/actions */ "./src/store/ErrorProvider/actions.ts");


const fetchRateTypes = config => async (dispatch, getState, {
  services
}) => {
  try {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestRateTypes)());
    const {
      data
    } = await services.table.getEntities('rateType', config);
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestRateTypesSuccess)(data));
  } catch (error) {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestRateTypesError)(error.response.status));
    dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addToErrorHandler)(error.response.status));
  }
};
const fetchRateType = rateTypeId => async (dispatch, getState, {
  services
}) => {
  try {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestRateType)());
    const {
      data
    } = await services.table.getEntities('rateType', {}, rateTypeId);
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestRateTypeSuccess)(data.data));
  } catch (error) {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestRateTypeError)(error.response.status));
    dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addToErrorHandler)(error.response.status));
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c1fb13731a508594c143")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.6ce1fed0f9131f04fcdd.hot-update.js.map