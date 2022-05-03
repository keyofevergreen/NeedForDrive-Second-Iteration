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
/* harmony export */   "useUploadedCar": () => (/* binding */ useUploadedCar),
/* harmony export */   "useCarById": () => (/* binding */ useCarById)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_Cars_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store/Cars/thunks */ "./src/store/Cars/thunks.ts");
/* harmony import */ var _utils_helpers_fetchLocalImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/helpers/fetchLocalImage */ "./src/utils/helpers/fetchLocalImage.ts");
/* harmony import */ var _store_Cars_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../store/Cars/actions */ "./src/store/Cars/actions.ts");






const useUploadedCar = carId => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
  const {
    uploadedCar,
    uploadedCarLoading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.cars);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (uploadedCar && !carId) {
      navigate(`/edit/car/${uploadedCar.id}`);
      dispatch((0,_store_Cars_actions__WEBPACK_IMPORTED_MODULE_4__.clearUploadedCarData)());
    }
  }, [uploadedCar]);
  return uploadedCarLoading;
};
const useCarById = (carId, setValue) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    carById,
    carByIdLoading,
    carByIdError
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.cars);

  const setValuesToForm = async () => {
    var _carById$categoryId, _carById$number;

    const carImage = await (0,_utils_helpers_fetchLocalImage__WEBPACK_IMPORTED_MODULE_3__["default"])(carById.thumbnail.path, carById.thumbnail.originalname);
    await setValue('thumbnail', carImage, {
      shouldDirty: true
    });
    setValue('name', carById === null || carById === void 0 ? void 0 : carById.name, {
      shouldDirty: true
    });
    setValue('categoryId', carById === null || carById === void 0 ? void 0 : (_carById$categoryId = carById.categoryId) === null || _carById$categoryId === void 0 ? void 0 : _carById$categoryId.id, {
      shouldDirty: true
    });
    setValue('description', carById === null || carById === void 0 ? void 0 : carById.description, {
      shouldDirty: true
    });
    w;
    setValue('colors', carById === null || carById === void 0 ? void 0 : carById.colors, {
      shouldDirty: true
    });
    setValue('name', carById === null || carById === void 0 ? void 0 : carById.name, {
      shouldDirty: true
    });
    setValue('number', carById === null || carById === void 0 ? void 0 : (_carById$number = carById.number) === null || _carById$number === void 0 ? void 0 : _carById$number.toUpperCase(), {
      shouldDirty: true
    });
    setValue('priceMin', carById.priceMin.toString(), {
      shouldDirty: true
    });
    setValue('priceMax', carById.priceMax.toString(), {
      shouldDirty: true
    });
    setValue('tank', carById.tank.toString(), {
      shouldDirty: true
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (carId) {
      dispatch((0,_store_Cars_thunks__WEBPACK_IMPORTED_MODULE_2__.fetchCar)(carId));
    }
  }, [carId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (carById && carId) {
      setValuesToForm();
    }
  }, [carById]);
  return [carById, carByIdLoading];
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a088ac4f8bb406e20084")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.fda74dcb8cdf9a1c98d1.hot-update.js.map