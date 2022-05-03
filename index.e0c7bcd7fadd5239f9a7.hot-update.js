/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/pages/Cities/hooks.ts":
/*!***********************************!*\
  !*** ./src/pages/Cities/hooks.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCities": () => (/* binding */ useCities),
/* harmony export */   "useSearchSortedCities": () => (/* binding */ useSearchSortedCities)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_Cities_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/Cities/thunks */ "./src/store/Cities/thunks.ts");



const citiesAlerts = ['Статус заказа сохранен', 'Статус заказа создан', 'Статус заказа удален'];
const useCities = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    cities,
    loading,
    error
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.cities);
  const {
    successAlertMessage
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.uploadedEntity);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (citiesAlerts.includes(successAlertMessage)) {
      dispatch((0,_store_Cities_thunks__WEBPACK_IMPORTED_MODULE_2__.fetchCities)());
    }
  }, [successAlertMessage]);
  return [cities, loading, error];
};
const useSearchSortedCities = cities => {
  const {
    searchSort
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.search);

  if (cities) {
    return cities.filter(city => {
      return city.name.toLowerCase().includes(searchSort.toLowerCase());
    });
  }

  return [];
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0c60ad71bed52fc436f2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.e0c7bcd7fadd5239f9a7.hot-update.js.map