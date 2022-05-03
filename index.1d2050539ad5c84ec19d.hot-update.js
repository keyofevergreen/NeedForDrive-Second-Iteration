/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

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
  postError: null
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
/* harmony export */   "createCar": () => (/* binding */ createCar)
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
const createCar = config => {
  return async (dispatch, getState, {
    services
  }) => {
    try {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.postCar)());
      const {
        data
      } = await services.table.getEntities('car', config);
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.postCarSuccess)(data));
    } catch (error) {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.postCarError)(error.response.status));
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
  getEntities: async (name, config) => {
    return _http__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/db/${name}`, config);
  },
  getEntities: async (name, config) => {
    return _http__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/db/${name}`);
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tableService);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("67e99d7aa27b1f681ee6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.1d2050539ad5c84ec19d.hot-update.js.map