/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/pages/Edit/components/CarEdit/hooks.ts":
/*!****************************************************!*\
  !*** ./src/pages/Edit/components/CarEdit/hooks.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSaveCar": () => (/* binding */ useSaveCar),
/* harmony export */   "useCarById": () => (/* binding */ useCarById)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_Cars_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store/Cars/thunks */ "./src/store/Cars/thunks.ts");
/* harmony import */ var _utils_helpers_fetchLocalImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/helpers/fetchLocalImage */ "./src/utils/helpers/fetchLocalImage.ts");
/* harmony import */ var _utils_helpers_getBase64__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/helpers/getBase64 */ "./src/utils/helpers/getBase64.ts");
/* harmony import */ var _utils_helpers_dateUrlToFile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/helpers/dateUrlToFile */ "./src/utils/helpers/dateUrlToFile.ts");








const getForm = async (form, setBody) => {
  const formData = new FormData();
  formData.append('name', form.name);
  formData.append('description', form.description);
  formData.append('priceMin', form.priceMin);
  formData.append('priceMax', form.priceMax);
  formData.append('number', form.number);
  form.colors.forEach(color => {
    formData.append('colors', color);
  });
  formData.append('categoryId', form.categoryId);
  const base64Image = await (0,_utils_helpers_getBase64__WEBPACK_IMPORTED_MODULE_4__["default"])(form.thumbnail[0], result => {
    formData.append('thumbnail', (0,_utils_helpers_dateUrlToFile__WEBPACK_IMPORTED_MODULE_5__["default"])(result, form.thumbnail[0].name));
    console.log((0,_utils_helpers_dateUrlToFile__WEBPACK_IMPORTED_MODULE_5__["default"])(result, form.thumbnail[0].name));
  }); // await setBody(formData);
};

const useSaveCar = (form, carId) => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    postCar,
    postLoading,
    postError
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.cars);
  const [body, setBody] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (form) {
      getForm(form, setBody);
    }
  }, [form]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (body !== null) {
      if (carId) {
        console.log('hm');
      } else {
        dispatch((0,_store_Cars_thunks__WEBPACK_IMPORTED_MODULE_2__.createCar)(body));
      }
    }
  }, [body]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (postCar) {
      navigate('/cars');
    }
  }, [postCar]);
  return [postLoading];
};
const useCarById = (carId, setValue) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    carById,
    carByIdLoading,
    carByIdError
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.cars);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (carId) {
      dispatch((0,_store_Cars_thunks__WEBPACK_IMPORTED_MODULE_2__.fetchCar)(carId));
    }
  }, [carId]);

  const setValuesToForm = async () => {
    var _car$categoryId, _car$number;

    const car = carById;
    const carImage = await (0,_utils_helpers_fetchLocalImage__WEBPACK_IMPORTED_MODULE_3__["default"])(car.thumbnail.path, car.thumbnail.originalname);
    await setValue('thumbnail', carImage, {
      shouldDirty: true
    });
    setValue('name', car === null || car === void 0 ? void 0 : car.name, {
      shouldDirty: true
    });
    setValue('categoryId', car === null || car === void 0 ? void 0 : (_car$categoryId = car.categoryId) === null || _car$categoryId === void 0 ? void 0 : _car$categoryId.id, {
      shouldDirty: true
    });
    setValue('description', car === null || car === void 0 ? void 0 : car.description, {
      shouldDirty: true
    });
    setValue('colors', car === null || car === void 0 ? void 0 : car.colors, {
      shouldDirty: true
    });
    setValue('name', car === null || car === void 0 ? void 0 : car.name, {
      shouldDirty: true
    });
    setValue('number', car === null || car === void 0 ? void 0 : (_car$number = car.number) === null || _car$number === void 0 ? void 0 : _car$number.toUpperCase(), {
      shouldDirty: true
    });
    setValue('priceMin', car.priceMin.toString(), {
      shouldDirty: true
    });
    setValue('priceMax', car.priceMax.toString(), {
      shouldDirty: true
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (carById && carId) {
      setValuesToForm();
    }
  }, [carById]);
  return [carByIdLoading, carByIdError];
};

/***/ }),

/***/ "./src/utils/helpers/dateUrlToFile.ts":
/*!********************************************!*\
  !*** ./src/utils/helpers/dateUrlToFile.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const dataUrlToFile = (dataUrl, filename) => {
  const arr = dataUrl.split(',');

  if (arr.length < 2) {
    return undefined;
  }

  const mimeArr = arr[0].match(/:(.*?);/);

  if (!mimeArr || mimeArr.length < 2) {
    return undefined;
  }

  const mime = mimeArr[1];
  const buff = Buffer.from(arr[1], 'base64');
  return new File([buff], filename, {
    type: mime
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataUrlToFile);

/***/ }),

/***/ "./src/utils/helpers/getBase64.ts":
/*!****************************************!*\
  !*** ./src/utils/helpers/getBase64.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getBase64 = async (file, cb) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = () => cb(reader.result);

  reader.onerror = error => console.log('Error: ', error);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBase64);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d8ac291b7783305e3816")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.2d25cdbb2740d84433fd.hot-update.js.map