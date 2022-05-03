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
/* harmony export */   "useCarById": () => (/* binding */ useCarById)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_Cars_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store/Cars/thunks */ "./src/store/Cars/thunks.ts");
/* harmony import */ var _utils_helpers_fetchLocalImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/helpers/fetchLocalImage */ "./src/utils/helpers/fetchLocalImage.ts");




const useCarById = (carId, setValue) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    carById,
    carByIdLoading,
    carByIdError
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.cars);

  const setValuesToForm = async car => {
    var _car$categoryId, _car$number;

    const carImage = await (0,_utils_helpers_fetchLocalImage__WEBPACK_IMPORTED_MODULE_3__["default"])(car.thumbnail.path, car.thumbnail.originalname);
    await setValue('thumbnail', carImage, {
      shouldDirty: true
    });
    setValue('name', car === null || car === void 0 ? void 0 : car.name, {
      shouldDirty: true
    });
    setValue('categoryId', car === null || car === void 0 ? void 0 : (_car$categoryId = car.categoryId) === null || _car$categoryId === void 0 ? void 0 : _car$categoryId.id, {
      shouldDirty: true
    });
    setValue('description', car === null || car === void 0 ? void 0 : car.description, {
      shouldDirty: true
    });
    setValue('colors', car === null || car === void 0 ? void 0 : car.colors, {
      shouldDirty: true
    });
    setValue('name', car === null || car === void 0 ? void 0 : car.name, {
      shouldDirty: true
    });
    setValue('number', car === null || car === void 0 ? void 0 : (_car$number = car.number) === null || _car$number === void 0 ? void 0 : _car$number.toUpperCase(), {
      shouldDirty: true
    });
    setValue('priceMin', car === null || car === void 0 ? void 0 : car.priceMin.toString(), {
      shouldDirty: true
    });
    setValue('priceMax', car === null || car === void 0 ? void 0 : car.priceMax.toString(), {
      shouldDirty: true
    });
    setValue('tank', (car === null || car === void 0 ? void 0 : car.tank) || '', {
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
      setValuesToForm(carById);
    }
  }, [carById]);
  return [carById, carByIdLoading];
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0b60927c113386316d91")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.85eedade10e34ab4a142.hot-update.js.map