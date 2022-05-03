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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_Cars_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store/Cars/thunks */ "./src/store/Cars/thunks.ts");
/* harmony import */ var _utils_helpers_fetchLocalImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/helpers/fetchLocalImage */ "./src/utils/helpers/fetchLocalImage.ts");
/* harmony import */ var _utils_helpers_toBase64__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/helpers/toBase64 */ "./src/utils/helpers/toBase64.ts");






const useSaveCar = (form, carId) => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    postCar,
    postLoading,
    postError
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.cars);
  const [body, setBody] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (form) {
      const carImage = form.thumbnail[0];
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
      formData.append('thumbnail', carImage, carImage.name);
      (0,_utils_helpers_toBase64__WEBPACK_IMPORTED_MODULE_4__["default"])(form.thumbnail[0]).then(result => {
        console.log(result); // // @ts-ignore
        // formData.append('thumbnail', result);
        // formData.get('thumbnail');
      }).catch(e => console.log(e)); // setBody(formData);
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
  }, [body]); // useEffect(() => {
  //   if (postCar) {
  //     navigate('/cars');
  //   }
  // }, [postCar]);

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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4995cabcd575150fcc14")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.22afb4e7944042a56af0.hot-update.js.map