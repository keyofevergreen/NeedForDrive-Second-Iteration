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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/InputGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/ButtonGroup.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _Categories_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Categories/hooks */ "./src/pages/Categories/hooks.ts");
/* harmony import */ var _utils_helpers_imageOnErrorHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/helpers/imageOnErrorHandler */ "./src/utils/helpers/imageOnErrorHandler.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks */ "./src/pages/Edit/components/CarEdit/hooks.ts");
/* harmony import */ var _utils_helpers_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utils/helpers/hooks */ "./src/utils/helpers/hooks.ts");
/* harmony import */ var _utils_helpers_OnlyNumberValidate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utils/helpers/OnlyNumberValidate */ "./src/utils/helpers/OnlyNumberValidate.ts");
/* harmony import */ var _store_Cars_thunks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../store/Cars/thunks */ "./src/store/Cars/thunks.ts");
/* harmony import */ var _components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/ContentContainer/ContentContainer */ "./src/components/ContentContainer/ContentContainer.tsx");
/* harmony import */ var _components_InputsContainer_InputsContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/InputsContainer/InputsContainer */ "./src/components/InputsContainer/InputsContainer.tsx");
/* harmony import */ var _components_InputErrorMessageProvider_InputErrorMessageProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/InputErrorMessageProvider/InputErrorMessageProvider */ "./src/components/InputErrorMessageProvider/InputErrorMessageProvider.tsx");
/* harmony import */ var _components_MyProgressBar_MyProgressBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/MyProgressBar/MyProgressBar */ "./src/pages/Edit/components/CarEdit/components/MyProgressBar/MyProgressBar.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles.module.scss */ "./src/pages/Edit/components/CarEdit/styles.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















const CarEdit = () => {
  var _errors$thumbnail, _errors$description, _errors$name, _errors$categoryId, _errors$colors, _errors$number, _errors$priceMin, _errors$priceMax, _errors$tank;

  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    carId
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useParams)();
  const converter = (0,_utils_helpers_hooks__WEBPACK_IMPORTED_MODULE_6__.useConvertFile)();
  const uploadLoading = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useUploadedCar)(carId);
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
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_16__.useForm)({
    defaultValues: {
      name: '',
      categoryId: 'Выберите категорию',
      description: '',
      colors: [],
      thumbnail: null,
      number: '',
      priceMin: '',
      priceMax: '',
      tank: ''
    }
  });
  register('colors', {
    validate: value => value.length > 0 || 'Добавьте хотя бы один цвет'
  });
  register('thumbnail', {
    required: 'Выберите изображение автомобиля'
  });
  const [car, carLoading] = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useCarById)(carId, setValue);
  const [colorValue, setColorValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [categories, categoriesLoading] = (0,_Categories_hooks__WEBPACK_IMPORTED_MODULE_3__.useCategory)();
  const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [selectedImage, setSelectedImage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const currentCar = watch('name');
  const currentImage = watch('thumbnail');
  const currentCategory = watch('categoryId');
  const colorsCheckboxes = watch('colors');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (categories) {
      const currCategoryObject = categories.find(c => c.id === currentCategory);
      setSelectedCategory(currCategoryObject === null || currCategoryObject === void 0 ? void 0 : currCategoryObject.name);
    }
  }, [currentCategory]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _currentImage$;

    if (currentImage && (_currentImage$ = currentImage[0]) !== null && _currentImage$ !== void 0 && _currentImage$.name) {
      setSelectedImage(URL.createObjectURL(currentImage[0]));
    }
  }, [currentImage]);

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

  const onSubmit = async data => {
    const carImage = data.thumbnail[0];
    const path = await converter(carImage);

    const newCar = _objectSpread(_objectSpread({}, data), {}, {
      thumbnail: {
        size: carImage.size,
        originalname: carImage.name,
        mimetype: carImage.type,
        path: path.toString()
      }
    });

    if (newCar && carId) {
      dispatch((0,_store_Cars_thunks__WEBPACK_IMPORTED_MODULE_8__.editCar)(newCar, carId));
    } else if (newCar) dispatch((0,_store_Cars_thunks__WEBPACK_IMPORTED_MODULE_8__.createCar)(newCar));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("title", {
        children: "Need For Drive - \u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("meta", {
        name: "description",
        content: "Home page"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
      title: "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F",
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"]["car-edit-container-wrap"],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
        noValidate: true,
        autoComplete: "off",
        onSubmit: handleSubmit(data => {
          onSubmit(data);
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"]["car-edit"],
          children: [(!carId || carId && car && !carLoading) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"]["car-edit__card"],
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("img", {
              src: selectedImage ? selectedImage : '',
              alt: "car-name",
              onError: _utils_helpers_imageOnErrorHandler__WEBPACK_IMPORTED_MODULE_4__.imageOnErrorHandler
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"]["car-edit__details"],
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h2", {
                children: currentCar
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
                children: selectedCategory && selectedCategory.length > 0 ? selectedCategory : 'Категория не выбрана'
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"]["car-edit__file-input-container"],
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_InputErrorMessageProvider_InputErrorMessageProvider__WEBPACK_IMPORTED_MODULE_11__["default"], {
                errorMessage: (_errors$thumbnail = errors.thumbnail) === null || _errors$thumbnail === void 0 ? void 0 : _errors$thumbnail.message,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"].Control, {
                  type: "file",
                  accept: "image/png, image/jpeg",
                  onChange: e => setValue('thumbnail', e.target.files, {
                    shouldDirty: true
                  }),
                  isInvalid: !!errors.thumbnail
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_MyProgressBar_MyProgressBar__WEBPACK_IMPORTED_MODULE_12__["default"], {
              formStates: [getFieldState('name', formState), getFieldState('categoryId', formState), getFieldState('colors', formState), getFieldState('thumbnail', formState), getFieldState('description', formState), getFieldState('number', formState), getFieldState('priceMin', formState), getFieldState('priceMax', formState)]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"].Group, {
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"]["car-edit__description-textarea"],
              controlId: "carDescription",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"].Label, {
                children: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_InputErrorMessageProvider_InputErrorMessageProvider__WEBPACK_IMPORTED_MODULE_11__["default"], {
                errorMessage: (_errors$description = errors.description) === null || _errors$description === void 0 ? void 0 : _errors$description.message,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"].Control, _objectSpread(_objectSpread({
                  as: "textarea",
                  rows: 4,
                  "aria-describedby": "carDescription",
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
                }, register('description', {
                  required: 'Это поле не должно быть пустым'
                })), {}, {
                  isInvalid: !!errors.description
                }))
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_components_InputsContainer_InputsContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
            title: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F",
            isCreateTable: !carId,
            isSubmitting: uploadLoading,
            isLoading: carLoading,
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"]["car-form-container"],
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"].Group, {
              controlId: "carName",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"].Label, {
                children: "\u041C\u043E\u0434\u0435\u043B\u044C \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_InputErrorMessageProvider_InputErrorMessageProvider__WEBPACK_IMPORTED_MODULE_11__["default"], {
                errorMessage: (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"].Control, _objectSpread(_objectSpread({
                  type: "text",
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043C\u043E\u0434\u0435\u043B\u044C",
                  "aria-describedby": "carName"
                }, register('name', {
                  required: 'Это поле не должно быть пустым'
                })), {}, {
                  isInvalid: !!errors.name
                }))
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"].Group, {
              controlId: "categoryName",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"].Label, {
                children: "\u0422\u0438\u043F \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_InputErrorMessageProvider_InputErrorMessageProvider__WEBPACK_IMPORTED_MODULE_11__["default"], {
                errorMessage: (_errors$categoryId = errors.categoryId) === null || _errors$categoryId === void 0 ? void 0 : _errors$categoryId.message,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"].Select, _objectSpread(_objectSpread({
                  size: "sm",
                  disabled: categoriesLoading,
                  "aria-describedby": "categoryName"
                }, register('categoryId', {
                  required: 'Это поле не должно быть пустым',
                  validate: value => value !== 'Выберите категорию' || 'Вы не выбрали категорию'
                })), {}, {
                  isInvalid: !!errors.categoryId,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("option", {
                    value: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E",
                    children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E"
                  }), categories && categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("option", {
                    value: category.id,
                    children: category.name
                  }, category.id))]
                }))
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"].Group, {
              controlId: "CarColors",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"].Label, {
                children: "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_InputErrorMessageProvider_InputErrorMessageProvider__WEBPACK_IMPORTED_MODULE_11__["default"], {
                errorMessage: (_errors$colors = errors.colors) === null || _errors$colors === void 0 ? void 0 : _errors$colors.message,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"]["form__colors-input-group"],
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"].Control, {
                    type: "text",
                    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0432\u0435\u0442",
                    "aria-describedby": "CarColors",
                    value: colorValue,
                    onChange: e => setColorValue(e.target.value),
                    isInvalid: !!errors.colors
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
                    variant: "outline-primary",
                    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"]["form__colors-add-button"],
                    onClick: addColor,
                    disabled: colorValue.length === 0,
                    children: "Add Color"
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"]["form__colors-checkbox"],
                children: colorsCheckboxes.map((color, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"].Check, {
                  type: "checkbox",
                  label: color,
                  onClick: () => deleteColor(color),
                  defaultChecked: true
                }, `color-${index}`))
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"].Group, {
              controlId: "carNumber",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"].Label, {
                children: "\u041D\u043E\u043C\u0435\u0440 \u043C\u0430\u0448\u0438\u043D\u044B"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_InputErrorMessageProvider_InputErrorMessageProvider__WEBPACK_IMPORTED_MODULE_11__["default"], {
                errorMessage: (_errors$number = errors.number) === null || _errors$number === void 0 ? void 0 : _errors$number.message,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"].Control, _objectSpread(_objectSpread({
                  type: "text",
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440",
                  "aria-describedby": "carNumber"
                }, register('number', {
                  required: 'Это поле не должно быть пустым',
                  onChange: e => setValue('number', e.target.value.toUpperCase()),
                  minLength: {
                    value: 6,
                    message: 'Номер должен быть длинной от 6 до 8 символов'
                  },
                  maxLength: {
                    value: 8,
                    message: 'Номер должен быть длинной от 6 до 8 символов'
                  }
                })), {}, {
                  isInvalid: !!errors.number
                }))
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"].Group, {
              controlId: "priceRange",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"].Label, {
                children: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0430\u0440\u0435\u043D\u0434\u044B, \u20BD"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_InputErrorMessageProvider_InputErrorMessageProvider__WEBPACK_IMPORTED_MODULE_11__["default"], {
                errorMessage: ((_errors$priceMin = errors.priceMin) === null || _errors$priceMin === void 0 ? void 0 : _errors$priceMin.message) || ((_errors$priceMax = errors.priceMax) === null || _errors$priceMax === void 0 ? void 0 : _errors$priceMax.message),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"].Control, _objectSpread(_objectSpread({
                    type: "text",
                    placeholder: "\u041E\u0442 1000 \u20BD",
                    "aria-describedby": "priceRange",
                    className: "input-range"
                  }, register('priceMin', {
                    required: 'Эти поля не должны быть пустыми',
                    validate: {
                      notEqualPriceMax: value => Number(value) !== Number(getValues('priceMax')) || 'Начальная цена должна быть меньше конечной',
                      lessThanPriceMax: value => Number(value) < Number(getValues('priceMax')) || 'Начальная цена не может превышать конечную'
                    }
                  })), {}, {
                    isInvalid: !!(errors.priceMin || errors.priceMax),
                    onKeyDown: e => (0,_utils_helpers_OnlyNumberValidate__WEBPACK_IMPORTED_MODULE_7__["default"])(e)
                  })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"].Control, _objectSpread(_objectSpread({
                    type: "text",
                    placeholder: "\u0414\u043E 5000 \u20BD",
                    "aria-describedby": "priceRange",
                    className: "input-range"
                  }, register('priceMax', {
                    required: 'Эти поля не должны быть пустыми'
                  })), {}, {
                    isInvalid: !!(errors.priceMin || errors.priceMax),
                    onKeyDown: e => (0,_utils_helpers_OnlyNumberValidate__WEBPACK_IMPORTED_MODULE_7__["default"])(e)
                  }))]
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"].Group, {
              controlId: "carTank",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"].Label, {
                children: "\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u0442\u043E\u043F\u043B\u0438\u0432\u0430, %"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_InputErrorMessageProvider_InputErrorMessageProvider__WEBPACK_IMPORTED_MODULE_11__["default"], {
                errorMessage: (_errors$tank = errors.tank) === null || _errors$tank === void 0 ? void 0 : _errors$tank.message,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"].Control, _objectSpread(_objectSpread({
                  type: "text",
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440",
                  "aria-describedby": "carTank"
                }, register('tank', {
                  required: 'Это поле не должно быть пустым',
                  maxLength: {
                    value: 3,
                    message: 'Уровень топлива не должен превышать 100%'
                  },
                  validate: value => Number(value) <= 100 || 'Уровень топлива не должен превышать 100%'
                })), {}, {
                  onKeyDown: e => (0,_utils_helpers_OnlyNumberValidate__WEBPACK_IMPORTED_MODULE_7__["default"])(e),
                  isInvalid: !!errors.tank
                }))
              })]
            })]
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarEdit);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("38b02254db10e63c37bc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.fa045aa45b2267fe1621.hot-update.js.map