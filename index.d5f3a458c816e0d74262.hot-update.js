/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/pages/Edit/components/CategoryEdit/CategoryEdit.tsx":
/*!*****************************************************************!*\
  !*** ./src/pages/Edit/components/CategoryEdit/CategoryEdit.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ContentContainer/ContentContainer */ "./src/components/ContentContainer/ContentContainer.tsx");
/* harmony import */ var _components_FormBody_FormBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/FormBody/FormBody */ "./src/components/FormBody/FormBody.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _utils_helpers_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/helpers/hooks */ "./src/utils/helpers/hooks.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks */ "./src/pages/Edit/components/CategoryEdit/hooks.ts");
/* harmony import */ var _components_InputErrorMessageProvider_InputErrorMessageProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/InputErrorMessageProvider/InputErrorMessageProvider */ "./src/components/InputErrorMessageProvider/InputErrorMessageProvider.tsx");
/* harmony import */ var _Categories_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Categories/hooks */ "./src/pages/Categories/hooks.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const CategoryEdit = () => {
  var _errors$name, _errors$description;

  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useNavigate)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const {
    categoryId
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useParams)();
  const {
    register,
    handleSubmit,
    setValue,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_11__.useForm)({
    defaultValues: {
      name: '',
      description: ''
    }
  });
  const [categories, categoriesLoading] = (0,_Categories_hooks__WEBPACK_IMPORTED_MODULE_8__.useCategory)();
  const categoryUploading = (0,_utils_helpers_hooks__WEBPACK_IMPORTED_MODULE_5__.useUploadedEntity)(categoryId, 'city');
  const fetchCategoryLoading = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__.useCategoryById)(categoryId, setValue);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("title", {
        children: "Need For Drive - \u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta", {
        name: "description",
        content: "Home page"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_FormBody_FormBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
          title: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Group, {
            controlId: "categoryName",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Label, {
              children: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_InputErrorMessageProvider_InputErrorMessageProvider__WEBPACK_IMPORTED_MODULE_7__["default"], {
              errorMessage: (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Control, _objectSpread(_objectSpread({
                type: "text",
                placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
                "aria-describedby": "categoryName"
              }, register('name', {
                required: 'Это поле не должно быть пустым',
                validate: value => !categories.find(category => value.toLowerCase() === category.name.toLowerCase()) || 'Такая категория уже есть в системе'
              })), {}, {
                isInvalid: !!errors.name
              }))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Group, {
            controlId: "categoryDescription",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Label, {
              children: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_InputErrorMessageProvider_InputErrorMessageProvider__WEBPACK_IMPORTED_MODULE_7__["default"], {
              errorMessage: (_errors$description = errors.description) === null || _errors$description === void 0 ? void 0 : _errors$description.message,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Control, _objectSpread(_objectSpread({
                size: "sm",
                as: "textarea",
                rows: 4,
                "aria-describedby": "categoryDescription"
              }, register('description', {
                required: 'Это поле не должно быть пустым'
              })), {}, {
                isInvalid: !!errors.description
              }))
            })]
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryEdit);

/***/ }),

/***/ "./src/pages/Edit/components/CategoryEdit/hooks.ts":
/*!*********************************************************!*\
  !*** ./src/pages/Edit/components/CategoryEdit/hooks.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCategoryById": () => (/* binding */ useCategoryById)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_Category_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store/Category/thunks */ "./src/store/Category/thunks.ts");



const useCategoryById = (categoryId, setValue) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    categoryById,
    categoryByIdLoading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.category);

  const setValuesToForm = async category => {
    setValue('name', category.name, {
      shouldDirty: true
    });
    setValue('description', category.description, {
      shouldDirty: true
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (categoryId) {
      dispatch((0,_store_Category_thunks__WEBPACK_IMPORTED_MODULE_2__.fetchCategory)(categoryId));
    }
  }, [categoryId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (categoryById && categoryId) {
      setValuesToForm(categoryById);
    }
  }, [categoryById]);
  return categoryByIdLoading;
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c0357e919ec4ef37a77e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.d5f3a458c816e0d74262.hot-update.js.map