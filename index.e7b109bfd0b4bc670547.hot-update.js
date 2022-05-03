/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

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
const createCar = newCar => {
  return async (dispatch, getState, {
    services
  }) => {
    try {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.uploadCar)());
      const {
        data
      } = await services.table.postEntity('car', newCar);
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.uploadCarSuccess)(data));
      dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addSuccessAlert)('Машина сохранена'));
    } catch (error) {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.uploadCarError)(error.response.status));
      dispatch((0,_ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__.addToErrorHandler)(error.response.status));
    }
  };
};
const editCar = (car, id) => {
  return async (dispatch, getState, {
    services
  }) => {
    try {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_0__.uploadCar)());
      const {
        data
      } = await services.table.putEntity('car', car, id);
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
/******/ 	__webpack_require__.h = () => ("28b2941f2c64c70d16a5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.e7b109bfd0b4bc670547.hot-update.js.map