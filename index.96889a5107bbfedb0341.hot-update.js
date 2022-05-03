/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/pages/Edit/components/CarEdit/CarEdit.tsx":
/*!*******************************************************!*\
  !*** ./src/pages/Edit/components/CarEdit/CarEdit.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/InputGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _Categories_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Categories/hooks */ "./src/pages/Categories/hooks.ts");
/* harmony import */ var _components_CarCard_CarCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/CarCard/CarCard */ "./src/pages/Edit/components/CarEdit/components/CarCard/CarCard.tsx");
/* harmony import */ var _components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/ContentContainer/ContentContainer */ "./src/components/ContentContainer/ContentContainer.tsx");
/* harmony import */ var _components_InputsContainer_InputsContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/InputsContainer/InputsContainer */ "./src/components/InputsContainer/InputsContainer.tsx");
/* harmony import */ var _components_InputErrorMessageProvider_InputErrorMessageProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/InputErrorMessageProvider/InputErrorMessageProvider */ "./src/components/InputErrorMessageProvider/InputErrorMessageProvider.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.module.scss */ "./src/pages/Edit/components/CarEdit/styles.module.scss");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks */ "./src/pages/Edit/components/CarEdit/hooks.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const CarEdit = () => {
  var _errors$description, _errors$thumbnail, _errors$name, _errors$categoryId, _errors$colors;

  const {
    carId
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useParams)();
  const [colorValue, setColorValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [categories, categoriesLoading] = (0,_Categories_hooks__WEBPACK_IMPORTED_MODULE_2__.useCategory)();
  const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [response, responseLoading] = (0,_hooks__WEBPACK_IMPORTED_MODULE_8__.useSaveCar)(form, !!carId);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    getFieldState,
    formState: {
      errors
    },
    formState
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_11__.useForm)({
    defaultValues: {
      name: '',
      categoryId: 'Выберите категорию',
      description: '',
      colors: [],
      thumbnail: null
    }
  });
  const {
    ref
  } = register('colors', {
    validate: value => value.length > 0 || 'Добавьте хотя бы один цвет'
  });
  const currentCar = watch('name');
  const currentImage = watch('thumbnail');
  const currentCategory = watch('categoryId');
  const colorsCheckboxes = watch('colors');

  const addColor = () => {
    const currentColors = getValues('colors');
    setValue('colors', [...currentColors, colorValue], {
      shouldValidate: true,
      shouldDirty: true
    });
    setColorValue('');
  };

  const deleteColor = colorForDelete => {
    const currentColors = getValues('colors');
    setValue('colors', currentColors.filter(color => color !== colorForDelete), {
      shouldDirty: true
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("title", {
        children: "Need For Drive - \u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta", {
        name: "description",
        content: "Home page"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F",
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"]["car-edit-container-wrap"],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
        noValidate: true,
        autoComplete: "off",
        onSubmit: handleSubmit(data => {
          console.log(data);
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"]["car-edit"],
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_CarCard_CarCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
            image: currentImage,
            carName: currentCar,
            category: currentCategory,
            categories: categories,
            descriptionError: (_errors$description = errors.description) === null || _errors$description === void 0 ? void 0 : _errors$description.message,
            descriptionRegister: register('description', {
              required: 'Это поле не должно быть пустым'
            }),
            imageError: (_errors$thumbnail = errors.thumbnail) === null || _errors$thumbnail === void 0 ? void 0 : _errors$thumbnail.message,
            imageRegister: register('thumbnail', {
              required: 'Выберите изображение автомобиля'
            }),
            progressBarFields: [getFieldState('name', formState), getFieldState('categoryId', formState), getFieldState('colors', formState), getFieldState('thumbnail', formState), getFieldState('description', formState)]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_InputsContainer_InputsContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
            title: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F",
            isCreateTable: !carId,
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"]["car-form-container"],
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Group, {
              controlId: "carName",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Label, {
                children: "\u041C\u043E\u0434\u0435\u043B\u044C \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_InputErrorMessageProvider_InputErrorMessageProvider__WEBPACK_IMPORTED_MODULE_6__["default"], {
                errorMessage: (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Control, _objectSpread(_objectSpread({
                  type: "text",
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043C\u043E\u0434\u0435\u043B\u044C",
                  "aria-describedby": "carName"
                }, register('name', {
                  required: 'Это поле не должно быть пустым'
                })), {}, {
                  isInvalid: !!errors.name
                }))
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Group, {
              controlId: "categoryName",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Label, {
                children: "\u0422\u0438\u043F \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_InputErrorMessageProvider_InputErrorMessageProvider__WEBPACK_IMPORTED_MODULE_6__["default"], {
                errorMessage: (_errors$categoryId = errors.categoryId) === null || _errors$categoryId === void 0 ? void 0 : _errors$categoryId.message,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Select, _objectSpread(_objectSpread({
                  size: "sm",
                  disabled: categoriesLoading,
                  "aria-describedby": "categoryName"
                }, register('categoryId', {
                  required: 'Это поле не должно быть пустым',
                  validate: value => value !== 'Выберите категорию' || 'Вы не выбрали категорию'
                })), {}, {
                  isInvalid: !!errors.categoryId,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("option", {
                    value: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E",
                    children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E"
                  }), categories && categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("option", {
                    value: category.id,
                    children: category.name
                  }, category.id))]
                }))
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Group, {
              controlId: "CarColors",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Label, {
                children: "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_InputErrorMessageProvider_InputErrorMessageProvider__WEBPACK_IMPORTED_MODULE_6__["default"], {
                errorMessage: (_errors$colors = errors.colors) === null || _errors$colors === void 0 ? void 0 : _errors$colors.message,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
                  className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"]["form__colors-input-group"],
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Control, {
                    type: "text",
                    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0432\u0435\u0442",
                    "aria-describedby": "CarColors",
                    value: colorValue,
                    ref: ref,
                    onChange: e => setColorValue(e.target.value),
                    isInvalid: !!errors.colors
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
                    variant: "outline-primary",
                    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"]["form__colors-add-button"],
                    onClick: addColor,
                    disabled: colorValue.length === 0,
                    children: "Add Color"
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"]["form__colors-checkbox"],
                children: colorsCheckboxes.map((color, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Check, {
                  type: "checkbox",
                  label: color,
                  onClick: () => deleteColor(color),
                  defaultChecked: true
                }, `color-${index}`))
              })]
            })]
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarEdit);

/***/ }),

/***/ "./src/pages/Edit/components/CarEdit/hooks.ts":
/*!****************************************************!*\
  !*** ./src/pages/Edit/components/CarEdit/hooks.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSaveCar": () => (/* binding */ useSaveCar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_Cars_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store/Cars/thunks */ "./src/store/Cars/thunks.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const useSaveCar = (form, isEdit) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    postCar,
    postLoading,
    postError
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.cars);
  const [body, setBody] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setBody(_objectSpread(_objectSpread({}, form), {}, {
      thumbnail: form.thumbnail[0]
    }));
  }, [form]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (body !== null) {
      if (isEdit) {
        console.log('hm');
      } else {
        dispatch((0,_store_Cars_thunks__WEBPACK_IMPORTED_MODULE_2__.createCar)(body));
      }
    }
  }, [body]);
  return [postCar, postLoading, postError];
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6202e32c30fbeaa19d7d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.96889a5107bbfedb0341.hot-update.js.map