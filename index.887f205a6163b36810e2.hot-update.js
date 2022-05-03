/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/pages/Order/getAxiosConfig.ts":
/*!*******************************************!*\
  !*** ./src/pages/Order/getAxiosConfig.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getAxiosConfig = (sorts, page) => {
  const {
    cityId,
    orderStatusId,
    date,
    isFullTank,
    isNeedChildChair,
    isRightWheel
  } = sorts;
  const config = {
    params: {
      page,
      limit: 5
    }
  };
  config.params['sort[createdAt]'] = -1;

  if (cityId && cityId !== 'Все города') {
    config.params['cityId[id]'] = cityId;
  }

  if (date && date !== 'За все время') {
    config.params['createdAt[$gt]'] = date;
  }

  if (orderStatusId && orderStatusId !== 'Все заказы') {
    config.params['orderStatusId[id]'] = orderStatusId;
  }

  if (isFullTank) {
    config.params.isFullTank = true;
  }

  if (isNeedChildChair) {
    config.params.isNeedChildChair = true;
  }

  if (isRightWheel) {
    config.params.isRightWheel = true;
  }

  return config;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAxiosConfig);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3dd30f3c7add30c39b66")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.887f205a6163b36810e2.hot-update.js.map