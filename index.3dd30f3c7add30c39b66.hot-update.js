/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/pages/Order/components/OrderItem/OrderItem.tsx":
/*!************************************************************!*\
  !*** ./src/pages/Order/components/OrderItem/OrderItem.tsx ***!
  \************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\dany2\\WebstormProjects\\NeedForDrive-Second-Iteration\\src\\pages\\Order\\components\\OrderItem\\OrderItem.tsx: Unexpected token (13:0)\n\n\u001b[0m \u001b[90m 11 |\u001b[39m   order\u001b[33m:\u001b[39m \u001b[33mOrder\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 12 |\u001b[39m   sorts\u001b[33m:\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 13 |\u001b[39m }\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 14 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 15 |\u001b[39m \u001b[36mconst\u001b[39m \u001b[33mOrderItem\u001b[39m \u001b[33m=\u001b[39m ({ order }\u001b[33m:\u001b[39m \u001b[33mIOrderItemProps\u001b[39m)\u001b[33m:\u001b[39m \u001b[33mReact\u001b[39m\u001b[33m.\u001b[39m\u001b[33mReactElement\u001b[39m \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 16 |\u001b[39m   \u001b[36mconst\u001b[39m {\u001b[0m\n    at Object._raise (C:\\Users\\dany2\\WebstormProjects\\NeedForDrive-Second-Iteration\\node_modules\\@babel\\parser\\lib\\index.js:569:17)\n    at Object.raiseWithData (C:\\Users\\dany2\\WebstormProjects\\NeedForDrive-Second-Iteration\\node_modules\\@babel\\parser\\lib\\index.js:562:17)\n    at Object.raise (C:\\Users\\dany2\\WebstormProjects\\NeedForDrive-Second-Iteration\\node_modules\\@babel\\parser\\lib\\index.js:523:17)\n    at Object.unexpected (C:\\Users\\dany2\\WebstormProjects\\NeedForDrive-Second-Iteration\\node_modules\\@babel\\parser\\lib\\index.js:3601:16)\n    at Object.tsParseNonArrayType (C:\\Users\\dany2\\WebstormProjects\\NeedForDrive-Second-Iteration\\node_modules\\@babel\\parser\\lib\\index.js:8522:16)\n    at Object.tsParseArrayTypeOrHigher (C:\\Users\\dany2\\WebstormProjects\\NeedForDrive-Second-Iteration\\node_modules\\@babel\\parser\\lib\\index.js:8526:21)\n    at Object.tsParseTypeOperatorOrHigher (C:\\Users\\dany2\\WebstormProjects\\NeedForDrive-Second-Iteration\\node_modules\\@babel\\parser\\lib\\index.js:8582:114)\n    at Object.tsParseUnionOrIntersectionType (C:\\Users\\dany2\\WebstormProjects\\NeedForDrive-Second-Iteration\\node_modules\\@babel\\parser\\lib\\index.js:8591:18)\n    at Object.tsParseIntersectionTypeOrHigher (C:\\Users\\dany2\\WebstormProjects\\NeedForDrive-Second-Iteration\\node_modules\\@babel\\parser\\lib\\index.js:8603:17)\n    at Object.tsParseUnionOrIntersectionType (C:\\Users\\dany2\\WebstormProjects\\NeedForDrive-Second-Iteration\\node_modules\\@babel\\parser\\lib\\index.js:8591:18)");

/***/ }),

/***/ "./src/pages/Order/getAxiosConfig.ts":
/*!*******************************************!*\
  !*** ./src/pages/Order/getAxiosConfig.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/******/ 	__webpack_require__.h = () => ("026fe4ea7b1b33e37524")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.3dd30f3c7add30c39b66.hot-update.js.map