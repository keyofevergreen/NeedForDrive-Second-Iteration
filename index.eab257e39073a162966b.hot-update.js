/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/pages/Categories/hooks.ts":
/*!***************************************!*\
  !*** ./src/pages/Categories/hooks.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCategory": () => (/* binding */ useCategory),
/* harmony export */   "useSearchSortedCategory": () => (/* binding */ useSearchSortedCategory)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_Category_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/Category/thunks */ "./src/store/Category/thunks.ts");



const useCategory = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    category,
    loading,
    error
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.category);
  const {
    uploadedEntity
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.uploadedEntity);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_store_Category_thunks__WEBPACK_IMPORTED_MODULE_2__.fetchCategories)());
  }, [uploadedEntity]);
  return [category, loading, error];
};
const useSearchSortedCategory = categories => {
  const {
    searchSort
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.search);

  if (categories) {
    return categories.filter(category => {
      return category.name.toLowerCase().includes(searchSort.toLowerCase());
    });
  }

  return [];
};

/***/ }),

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



const useCities = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    cities,
    loading,
    error
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.cities);
  const {
    uploadedEntity
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.uploadedEntity);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_store_Cities_thunks__WEBPACK_IMPORTED_MODULE_2__.fetchCities)());
  }, [uploadedEntity]);
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
/******/ 	__webpack_require__.h = () => ("672d5fd142637abae452")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.eab257e39073a162966b.hot-update.js.map