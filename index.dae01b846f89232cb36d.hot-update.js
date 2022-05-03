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
    postCar,
    postLoading,
    postError
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.cars);

  if (postCar && !postError) {
    navigate('/cars');
    dispatch((0,_store_Cars_actions__WEBPACK_IMPORTED_MODULE_4__.clearUploadedCarData)());
  }

  return postLoading;
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

/***/ "./src/store/Cars/actions.ts":
/*!***********************************!*\
  !*** ./src/store/Cars/actions.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "requestCars": () => (/* binding */ requestCars),
/* harmony export */   "requestCarsSuccess": () => (/* binding */ requestCarsSuccess),
/* harmony export */   "requestCarsError": () => (/* binding */ requestCarsError),
/* harmony export */   "requestCar": () => (/* binding */ requestCar),
/* harmony export */   "requestCarSuccess": () => (/* binding */ requestCarSuccess),
/* harmony export */   "requestCarError": () => (/* binding */ requestCarError),
/* harmony export */   "uploadCar": () => (/* binding */ uploadCar),
/* harmony export */   "uploadCarSuccess": () => (/* binding */ uploadCarSuccess),
/* harmony export */   "uploadCarError": () => (/* binding */ uploadCarError),
/* harmony export */   "clearUploadedCarData": () => (/* binding */ clearUploadedCarData)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const requestCars = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Cars is fetching...');
const requestCarsSuccess = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Cars has already fetched');
const requestCarsError = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Cars fetched with error');
const requestCar = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Car is fetching...');
const requestCarSuccess = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Car has already fetched');
const requestCarError = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Car fetched with error');
const uploadCar = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Car is posting...');
const uploadCarSuccess = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Car has already posted');
const uploadCarError = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Car not posted');
const clearUploadedCarData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Clear posted car data...');

/***/ }),

/***/ "./src/store/Cars/reducer.ts":
/*!***********************************!*\
  !*** ./src/store/Cars/reducer.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/store/Cars/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const carsReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createReducer)({
  cars: null,
  loading: false,
  error: null,
  uploadedCar: null,
  uploadedCarLoading: false,
  uploadedCarError: null,
  carById: null,
  carByIdLoading: false,
  carByIdError: null
}, {
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestCars.type]: state => _objectSpread(_objectSpread({}, state), {}, {
    cars: null,
    loading: true,
    error: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestCarsSuccess.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    cars: payload,
    loading: false,
    error: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestCarsError.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    cars: null,
    loading: false,
    error: payload
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestCar.type]: state => _objectSpread(_objectSpread({}, state), {}, {
    carById: null,
    carByIdLoading: true,
    carByIdError: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestCarSuccess.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    carById: payload,
    carByIdLoading: false,
    carByIdError: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.requestCarError.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    carById: null,
    carByIdLoading: false,
    carByIdError: payload
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.uploadCar.type]: state => _objectSpread(_objectSpread({}, state), {}, {
    uploadedCar: null,
    uploadedCarLoading: true,
    uploadedCarError: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.uploadCarSuccess.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    uploadedCar: payload,
    uploadedCarLoading: false,
    uploadedCarError: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.uploadCarError.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    uploadedCar: null,
    uploadedCarLoading: false,
    uploadedCarError: payload
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.clearUploadedCarData.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    uploadedCar: null,
    uploadedCarLoading: false,
    uploadedCarError: null
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carsReducer);

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
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.postCar)());
      const {
        data
      } = await services.table.postEntity('car', body);
      await console.log(data);
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.postCarSuccess)(data));
    } catch (error) {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.postCarError)(error.response.status));
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a983f83bb426e15b6340")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.dae01b846f89232cb36d.hot-update.js.map