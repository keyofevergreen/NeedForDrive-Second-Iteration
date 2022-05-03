/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/utils/helpers/hooks.ts":
/*!************************************!*\
  !*** ./src/utils/helpers/hooks.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useConvertFile": () => (/* binding */ useConvertFile),
/* harmony export */   "useUploadedEntity": () => (/* binding */ useUploadedEntity)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _store_OrderStatus_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/OrderStatus/actions */ "./src/store/OrderStatus/actions.ts");




const useConvertFile = () => {
  return file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = error => reject(error);
  });
};
const useUploadedEntity = (entityId, uploadedEntity, path) => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (uploadedEntity && !entityId) {
      navigate(`/edit/${path}`);
      dispatch((0,_store_OrderStatus_actions__WEBPACK_IMPORTED_MODULE_2__.clearUploadedOrderStatusData)());
    }
  }, [uploadedEntity]);
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("61030fca7894177a428d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.496d93d56c316089e698.hot-update.js.map