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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_store_Category_thunks__WEBPACK_IMPORTED_MODULE_2__.fetchCategories)());
  }, []);
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("23268262e32d18f3105d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.45b27cd2cb8cb515a98f.hot-update.js.map