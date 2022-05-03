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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/ProgressBar.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/InputGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ContentContainer/ContentContainer */ "./src/components/ContentContainer/ContentContainer.tsx");
/* harmony import */ var _components_FormContainer_FormContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/FormContainer/FormContainer */ "./src/components/FormContainer/FormContainer.tsx");
/* harmony import */ var _assets_carsDefaultImage_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/carsDefaultImage.png */ "./src/assets/carsDefaultImage.png");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ "./src/pages/Edit/components/CarEdit/styles.module.scss");
/* harmony import */ var _Categories_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Categories/hooks */ "./src/pages/Categories/hooks.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const CarEdit = () => {
  var _errors$car, _errors$car2, _errors$category, _errors$category2, _errors$colorsArray, _errors$colorsArray2;

  const {
    carId
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useParams)();
  const [colorValue, setColorValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [categories, categoriesLoading] = (0,_Categories_hooks__WEBPACK_IMPORTED_MODULE_6__.useCategory)();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    getFieldState,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)({
    defaultValues: {
      car: '',
      category: 'Выберите категорию',
      colorsArray: []
    }
  });
  register('colorsArray', {
    validate: value => value.length > 0 || 'Добавьте хотя бы один цвет'
  });
  const currentCar = watch('car');
  const currentCategory = watch('category');
  const colorsCheckBoxes = watch('colorsArray');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (categories) {
      const currCategoryObject = categories.find(category => category.id === currentCategory);
      setSelectedCategory(currCategoryObject === null || currCategoryObject === void 0 ? void 0 : currCategoryObject.name);
    }
  }, [currentCategory]);

  const addColor = () => {
    const currentColors = getValues('colorsArray');
    setValue('colorsArray', [...currentColors, colorValue], {
      shouldValidate: true
    });
    setColorValue('');
  };

  const deleteColor = colorForDelete => {
    const currentColors = getValues('colorsArray');
    setValue('colorsArray', currentColors.filter(color => color !== colorForDelete));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const allStates = [getFieldState('car'), etFieldState('category'), getFieldState('colorsArray')]; // const progressBarStates: any[] = [errors.car, errors.category, errors.colorsArray];
    //
    // console.log('Количество стейтов', progressBarStates.length)
    // console.log('Заполненные стейты', progressBarStates.filter((state) => state.))
  }, [errors]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("title", {
        children: "Need For Drive - \u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("meta", {
        name: "description",
        content: "Home page"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_ContentContainer_ContentContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F",
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["car-edit-container-wrap"],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["car-edit"],
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["car-edit__card"],
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
            src: _assets_carsDefaultImage_png__WEBPACK_IMPORTED_MODULE_4__,
            alt: "car-name"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["car-edit__details"],
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h2", {
              children: currentCar
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
              children: selectedCategory && selectedCategory.length > 0 ? selectedCategory : 'Категория не выбрана'
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Control, {
            type: "file",
            size: "sm",
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["car-edit__file-input"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["car-edit__progress-wrap"],
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["car-edit__progress-details"],
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                children: "\u0417\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043E"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                children: "75%"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
              now: 75,
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["car-edit__progress"]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Group, {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["car-edit__description-textarea"],
            controlId: "carDescription",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Label, {
              children: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Control, {
              as: "textarea",
              rows: 4,
              "aria-describedby": "carDescription",
              defaultValue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components_FormContainer_FormContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
          title: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F",
          isCreateTable: !carId,
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["car-form-container"],
          onSubmit: handleSubmit(data => {
            console.log(data);
          }),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Group, {
            controlId: "carName",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Label, {
              children: "\u041C\u043E\u0434\u0435\u043B\u044C \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "input-wrap",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Control, _objectSpread(_objectSpread({
                type: "text",
                placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043C\u043E\u0434\u0435\u043B\u044C",
                "aria-describedby": "carName"
              }, register('car', {
                required: 'Это поле не должно быть пустым'
              })), {}, {
                isInvalid: !!errors.car
              })), ((_errors$car = errors.car) === null || _errors$car === void 0 ? void 0 : _errors$car.message) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Text, {
                id: "username",
                bsPrefix: "input-message",
                children: (_errors$car2 = errors.car) === null || _errors$car2 === void 0 ? void 0 : _errors$car2.message
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Group, {
            controlId: "categoryName",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Label, {
              children: "\u0422\u0438\u043F \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "input-wrap",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Select, _objectSpread(_objectSpread({
                size: "sm",
                disabled: categoriesLoading,
                "aria-describedby": "pointCity"
              }, register('category', {
                required: 'Это поле не должно быть пустым',
                validate: value => value !== 'Выберите категорию' || 'Вы не выбрали категорию'
              })), {}, {
                isInvalid: !!errors.category,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("option", {
                  value: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E",
                  children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E"
                }), categories && categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("option", {
                  value: category.id,
                  children: category.name
                }, category.id))]
              })), ((_errors$category = errors.category) === null || _errors$category === void 0 ? void 0 : _errors$category.message) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Text, {
                id: "username",
                bsPrefix: "input-message",
                children: (_errors$category2 = errors.category) === null || _errors$category2 === void 0 ? void 0 : _errors$category2.message
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Group, {
            controlId: "CarColors",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Label, {
              children: "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "input-wrap",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
                className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["form__colors-input-group"],
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Control, {
                  type: "text",
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0432\u0435\u0442",
                  "aria-describedby": "CarColors",
                  value: colorValue,
                  onChange: e => setColorValue(e.target.value),
                  isInvalid: !!errors.colorsArray
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
                  variant: "outline-primary",
                  className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["form__colors-add-button"],
                  onClick: addColor,
                  disabled: colorValue.length === 0,
                  children: "Add Color"
                })]
              }), ((_errors$colorsArray = errors.colorsArray) === null || _errors$colorsArray === void 0 ? void 0 : _errors$colorsArray.message) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Text, {
                id: "username",
                bsPrefix: "input-message",
                children: (_errors$colorsArray2 = errors.colorsArray) === null || _errors$colorsArray2 === void 0 ? void 0 : _errors$colorsArray2.message
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["form__colors-checkbox"],
              children: colorsCheckBoxes.map((color, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Check, {
                type: "checkbox",
                label: color,
                onClick: () => deleteColor(color),
                checked: true
              }, `color-${index}`))
            })]
          })]
        })]
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
/******/ 	__webpack_require__.h = () => ("47597c388bc24be1e17c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.505df5955c64ec91b1bb.hot-update.js.map