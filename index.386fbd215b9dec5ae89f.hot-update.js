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
/* harmony export */   "useSaveCar": () => (/* binding */ useSaveCar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_Cars_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store/Cars/thunks */ "./src/store/Cars/thunks.ts");



const useSaveCar = (form, isEdit) => {
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
      formData.append('thumbnail', form.thumbnail[0]);
      form.colors.forEach(color => {
        formData.append('colors', color);
      });
      formData.append('categoryId', form.categoryId);
      setBody(formData);
    }
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
  return [postLoading];
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
/* harmony export */   "createCar": () => (/* binding */ createCar)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/store/Cars/actions.ts");
/* harmony import */ var _ErrorProvider_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorProvider/actions */ "./src/store/ErrorProvider/actions.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");



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
/******/ 	__webpack_require__.h = () => ("6764e68909f38b5c2365")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.386fbd215b9dec5ae89f.hot-update.js.map