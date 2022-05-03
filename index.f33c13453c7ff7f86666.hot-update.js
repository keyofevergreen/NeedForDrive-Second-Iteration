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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_Cars_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store/Cars/thunks */ "./src/store/Cars/thunks.ts");



const useSaveCar = (form, carId) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    postCar,
    postLoading,
    postError
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.cars);
  const [body, setBody] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (form) {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('description', form.description);
      formData.append('priceMin', form.priceMin);
      formData.append('priceMax', form.priceMax);
      formData.append('number', form.number);
      formData.append('thumbnail', form.thumbnail);
      form.colors.forEach(color => {
        formData.append('colors', color);
      });
      formData.append('categoryId', form.categoryId);
      setBody(formData);
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (carById) {
      var _car$categoryId;

      const car = carById;
      setValue('name', car.name);
      setValue('categoryId', car === null || car === void 0 ? void 0 : (_car$categoryId = car.categoryId) === null || _car$categoryId === void 0 ? void 0 : _car$categoryId.id);
      setValue('description', car.description);
      setValue('colors', car.colors);
      setValue('name', car.name);
      const blob = fetch(car.thumbnail.path).then(r => r.blob()).then(imageBlob => {
        const carImage = new File([imageBlob], car.thumbnail.originalname);
        setValue('thumbnail', carImage);
      });
    }
  }, [carById]);
  return [carByIdLoading, carByIdError];
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
/* harmony export */   "postCar": () => (/* binding */ postCar),
/* harmony export */   "postCarSuccess": () => (/* binding */ postCarSuccess),
/* harmony export */   "postCarError": () => (/* binding */ postCarError)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const requestCars = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Cars is fetching...');
const requestCarsSuccess = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Cars has already fetched');
const requestCarsError = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Cars fetched with error');
const requestCar = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Car is fetching...');
const requestCarSuccess = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Car has already fetched');
const requestCarError = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Car fetched with error');
const postCar = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Car is posting...');
const postCarSuccess = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Car has already posted');
const postCarError = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('Car not posted');

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
  postCar: null,
  postLoading: false,
  postError: null,
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
  [_actions__WEBPACK_IMPORTED_MODULE_0__.postCar.type]: state => _objectSpread(_objectSpread({}, state), {}, {
    postCar: null,
    postLoading: true,
    postError: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.postCarSuccess.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    postCar: payload,
    postLoading: false,
    postError: null
  }),
  [_actions__WEBPACK_IMPORTED_MODULE_0__.postCarError.type]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    postCar: null,
    postLoading: false,
    postError: payload
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
/* harmony export */   "createCar": () => (/* binding */ createCar)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
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
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestCars)());
    const {
      data
    } = await services.table.getEntities('car', {}, id);
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestCarsSuccess)(data.data));
  } catch (error) {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.requestCarsError)(error.response.status));
    dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addToErrorHandler)(error.response.status));
  }
};
const createCar = body => {
  return async (dispatch, getState, {
    services
  }) => {
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();

    try {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.postCar)());
      const {
        data
      } = await services.table.postEntity('car', body);
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.postCarSuccess)(data));
      navigate('/cars');
    } catch (error) {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.postCarError)(error.response.status));
      dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addToErrorHandler)(error.response.status));
    }
  };
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7e13e5fa829117888cc0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.f33c13453c7ff7f86666.hot-update.js.map