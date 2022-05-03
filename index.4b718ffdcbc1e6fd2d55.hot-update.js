/*!
 * banner:
 * NeedForDrive-Second-Iteration: 1.0.0
 * ISC
 */
"use strict";
self["webpackHotUpdateNeedForDrive_Second_Iteration"]("index",{

/***/ "./src/utils/services/SetupInterceptors/service.ts":
/*!*********************************************************!*\
  !*** ./src/utils/services/SetupInterceptors/service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../http */ "./src/http/index.ts");
/* harmony import */ var _store_Auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/Auth/actions */ "./src/store/Auth/actions.ts");



const setupInterceptors = store => {
  const {
    dispatch
  } = store;
  _http__WEBPACK_IMPORTED_MODULE_0__["default"].interceptors.request.use(config => {
    config.headers['X-Api-Factory-Application-Id'] = `${"5e25c641099b810b946c5d5b"}`;

    if (localStorage.getItem('token') && config.url !== '/auth/refresh' && config.url !== '/auth/login') {
      config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }

    if (config.url === '/db/car') {
      console.log(config);
    }

    return config;
  });
  _http__WEBPACK_IMPORTED_MODULE_0__["default"].interceptors.response.use(config => {
    return config;
  }, async error => {
    var _error$response;

    const originalRequest = error.config;

    if (((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;

      try {
        const refreshToken = localStorage.getItem('refresh');
        const basicToken = localStorage.getItem('basicToken');
        const response = await _http__WEBPACK_IMPORTED_MODULE_0__["default"].post('/auth/refresh', {
          refresh_token: refreshToken
        }, {
          headers: {
            'Authorization': `Basic ${basicToken}`
          }
        });
        await localStorage.setItem('token', response.data.access_token);
        await localStorage.setItem('refresh', response.data.refresh_token);
        return await _http__WEBPACK_IMPORTED_MODULE_0__["default"].request(originalRequest);
      } catch (e) {
        localStorage.removeItem('token');
        localStorage.removeItem('refresh');
        localStorage.removeItem('basicToken');
        dispatch((0,_store_Auth_actions__WEBPACK_IMPORTED_MODULE_1__.setAuth)(false));
      }
    }

    throw error;
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setupInterceptors);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2c1bb2f801c849464657")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=index.4b718ffdcbc1e6fd2d55.hot-update.js.map