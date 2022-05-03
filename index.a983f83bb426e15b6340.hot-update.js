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
/* harmony export */   "useSuccessfullySavedCar": () => (/* binding */ useSuccessfullySavedCar),
/* harmony export */   "useCarById": () => (/* binding */ useCarById)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_Cars_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store/Cars/thunks */ "./src/store/Cars/thunks.ts");
/* harmony import */ var _utils_helpers_fetchLocalImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/helpers/fetchLocalImage */ "./src/utils/helpers/fetchLocalImage.ts");
/* harmony import */ var _store_Cars_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../store/Cars/actions */ "./src/store/Cars/actions.ts");






const useSuccessfullySavedCar = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
  const {
    uploadedCar,
    uploadedCarLoading,
    uploadedCarError
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.cars);

  if (uploadedCar && !uploadedCarError) {
    navigate('/cars');
    dispatch((0,_store_Cars_actions__WEBPACK_IMPORTED_MODULE_4__.clearUploadedCarData)());
  }

  return uploadedCarLoading;
};
const useCarById = (carId, setValue) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    carById,
    carByIdLoading,
    carByIdError
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.cars);

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
    if (carId) {
      dispatch((0,_store_Cars_thunks__WEBPACK_IMPORTED_MODULE_2__.fetchCar)(carId));
    }
  }, [carId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (carById && carId) {
      setValuesToForm();
    }
  }, [carById]);
  return [carById, carByIdLoading];
};

/***/ }),

/***/ "./src/store/Cars/thunks.ts":
/*!**********************************!*\
  !*** ./src/store/Cars/thunks.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchCars": () => (/* binding */ fetchCars),
/* harmony export */   "fetchCar": () => (/* binding */ fetchCar),
/* harmony export */   "createCar": () => (/* binding */ createCar),
/* harmony export */   "editCar": () => (/* binding */ editCar)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/store/Cars/actions.ts");
/* harmony import */ var _ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorProvider/actions */ "./src/store/ErrorProvider/actions.ts");


const fetchCars = config => async (dispatch, getState, {
  services
}) => {
  try {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestCars)());
    const {
      data
    } = await services.table.getEntities('car', config);
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestCarsSuccess)(data));
  } catch (error) {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestCarsError)(error.response.status));
    dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addToErrorHandler)(error.response.status));
  }
};
const fetchCar = id => async (dispatch, getState, {
  services
}) => {
  try {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestCar)());
    const {
      data
    } = await services.table.getEntities('car', {}, id);
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestCarSuccess)(data.data));
  } catch (error) {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestCarError)(error.response.status));
    dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addToErrorHandler)(error.response.status));
  }
};
const createCar = body => {
  return async (dispatch, getState, {
    services
  }) => {
    try {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.uploadCar)());
      const {
        data
      } = await services.table.postEntity('car', body);
      await console.log(data);
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.uploadCarSuccess)(data));
    } catch (error) {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.uploadCarError)(error.response.status));
      dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addToErrorHandler)(error.response.status));
    }
  };
};
const editCar = body => {
  return async (dispatch, getState, {
    services
  }) => {
    try {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.uploadCar)());
      const {
        data
      } = await services.table.postEntity('car', body);
      await console.log(data);
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.uploadCarSuccess)(data));
    } catch (error) {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.uploadCarError)(error.response.status));
      dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addToErrorHandler)(error.response.status));
    }
  };
};

/***/ }),

/***/ "./src/utils/services/Table/service.ts":
/*!*********************************************!*\
  !*** ./src/utils/services/Table/service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../http */ "./src/http/index.ts");


const tableService = () => ({
  getEntities: async (name, config, id) => {
    const url = id ? `/db/${name}/${id}` : `/db/${name}`;
    return _http__WEBPACK_IMPORTED_MODULE_0__["default"].get(url, config);
  },
  postEntity: async (name, body) => {
    return _http__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/db/${name}`, body);
  },
  putEntity: async (name, body, id) => {
    return _http__WEBPACK_IMPORTED_MODULE_0__["default"].put(`/db/${name}/${id}`, body);
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tableService);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0494ada30fd433a119cd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.a983f83bb426e15b6340.hot-update.js.map