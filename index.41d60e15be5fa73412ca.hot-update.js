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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_Edit_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/Edit/actions */ "./src/store/Edit/actions.ts");




const useConvertFile = () => {
  return file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = error => reject(error);
  });
};
const useUploadedEntity = (entityId, entity) => {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  const {
    pathname
  } = location;
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    uploadedEntity,
    uploadedEntityLoading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.uploadedEntity);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (uploadedEntity && !entityId) {
      console.log(uploadedEntity);
      navigate(`/edit/${entity}/${uploadedEntity.id}`);
    }
  }, [uploadedEntity]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_store_Edit_actions__WEBPACK_IMPORTED_MODULE_2__.clearUploadedEntityData)());
  }, [pathname]);
  return uploadedEntityLoading;
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f0c88d920f61c097b5d0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.41d60e15be5fa73412ca.hot-update.js.map