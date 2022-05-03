/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/pages/Edit/components/CityEdit/hooks.ts":
/*!*****************************************************!*\
  !*** ./src/pages/Edit/components/CityEdit/hooks.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCityById": () => (/* binding */ useCityById)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_Cities_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store/Cities/thunks */ "./src/store/Cities/thunks.ts");



const useCityById = (cityId, setValue) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    cityById,
    cityByIdLoading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.cities);

  const setValuesToForm = async city => {
    setValue('name', city.name, {
      shouldDirty: true
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (cityId) {
      dispatch((0,_store_Cities_thunks__WEBPACK_IMPORTED_MODULE_2__.fetchCity)(cityId));
    }
  }, [cityId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (cityById && cityId) {
      setValuesToForm(cityById);
    }
  }, [cityById]);
  return cityByIdLoading;
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("314088309112357fa91b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.bb843d2820cb7ab7fb4c.hot-update.js.map