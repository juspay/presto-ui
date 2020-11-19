module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

module.exports = {
	init: __webpack_require__(/*! ./src/init */ "./src/init.js"),
	doms: __webpack_require__(/*! ./src/doms */ "./src/doms/index.js"),
	handler: __webpack_require__(/*! ./src/handler */ "./src/handler.js"),
	helpers: __webpack_require__(/*! ./src/helpers */ "./src/helpers/index.js"),
	baseView: __webpack_require__(/*! ./src/baseView */ "./src/baseView.js"),
	animations: __webpack_require__(/*! ./src/animations */ "./src/animations.js"),
	callbackMapper: __webpack_require__(/*! ./src/helpers/common/callbackMapper */ "./src/helpers/common/callbackMapper.js"),
	getOS: __webpack_require__(/*! ./src/helper */ "./src/helper.js").getOS,
	prestoMerge: __webpack_require__(/*! ./src/helper */ "./src/helper.js").merge,
	prestoClone: __webpack_require__(/*! ./src/helper */ "./src/helper.js").clone
};

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/qs/lib/formats.js":
/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var util = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = util.assign(
    {
        'default': Format.RFC3986,
        formatters: {
            RFC1738: function (value) {
                return replace.call(value, percentTwenties, '+');
            },
            RFC3986: function (value) {
                return String(value);
            }
        }
    },
    Format
);


/***/ }),

/***/ "./node_modules/qs/lib/stringify.js":
/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = obj.join(',');
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key') : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key');
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value'))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (isArray(obj)) {
            pushToArray(values, stringify(
                obj[key],
                typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix,
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        } else {
            pushToArray(values, stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        }
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.formatter,
            options.encodeValuesOnly,
            options.charset
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "./node_modules/qs/lib/utils.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/utils.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),

/***/ "./src/PrestoUIInterface.js":
/*!**********************************!*\
  !*** ./src/PrestoUIInterface.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

var prestoDom = __webpack_require__(/*! ./doms */ "./src/doms/index.js");
var helpers = __webpack_require__(/*! ./helpers */ "./src/helpers/index.js");
var webParseParams;
var iOSParseParams;
var parseParams;
var helper = __webpack_require__(/*! ./helper */ "./src/helper.js");

if (true) {
  webParseParams = helpers.web.parseParams;
} else {}

function domAll(elem) {
  if (!elem.__ref) {
    elem.__ref = createPrestoElement();
  }

  if (elem.props.id) {
    elem.__ref.__id = parseInt(elem.props.id, 10) || elem.__ref.__id;
  }

  var type = helper.clone(elem.type, null);
  var props = helper.clone(elem.props, null);

  if (props.focus == false && "WEB" === "ANDROID") {
    delete props.focus;
  }

  var children = [];

  for (var i = 0; i < elem.children.length; i++) {
    children.push(domAll(elem.children[i]));
  }

  if (__OS == "WEB" && props.onResize) {
    window.__resizeEvent = props.onResize;
  }

  props.id = elem.__ref.__id;
  if (elem.parentType && "WEB" == "ANDROID") return prestoDom({ elemType: type, parentType: elem.parentType }, props, children);

  return prestoDom(type, props, children);
}

function getDomToRender(elem) {
  var res = domAll(elem);
  if (false) {} else {
    return res;
  }
}

// Not exported
function cmdForAndroid(config, set, type) {
  if (set) {
    if (config.id) {
      var obj = parseParams(type, config, "set");
      var cmd = obj.runInUI.replace("this->setId", "set_view=ctx->findViewById").replace(/this->/g, "get_view->");
      cmd = cmd.replace(/PARAM_CTR_HOLDER[^;]*/g, "get_view->getLayoutParams;");
      obj.runInUI = cmd;
      return obj;
    } else {
      console.error("ID null, this is not supposed to happen. Debug this or/and raise a issue in bitbucket.");
    }
    return {};
  }

  var _id = config.id;
  var cmd = "set_view=ctx->findViewById:i_" + _id + ";";
  // var runInUI;
  delete config.id;
  config.root = "true";
  var obj = parseParams(type, config, "get");
  obj.runInUI = cmd + obj.runInUI + ';';
  obj.id = _id;
  return obj;
}

function getRunInUICmd(prop) {
  var cmd;
  if (false) {} else if (false) {} else {
    cmd = webParseParams("linearLayout", prop, "set");
  }
  return cmd;
}

// Not exported
function applyProp(element, attribute, set) {
  var prop = {
    id: element.__ref.__id
  };
  prop[attribute.value0] = attribute.value1;

  if (attribute.value0 == 'focus' && attribute.value1 == false && "WEB" == "ANDROID") {
    return;
  }

  if (false) { var cmd; } else if (false) {} else {
    Android.runInUI(webParseParams("linearLayout", prop, "set"));
  }
  // Android.runInUI(parseParams("linearLayout", prop, "set"));
}

function replaceView(element, attribute, removeProp) {
  // console.log("REPLACE VIEW", element.__ref.__id, element.props);
  var props = helper.clone(element.props, null);
  props.id = element.__ref.__id;
  var rep;
  var viewGroups = ["linearLayout", "relativeLayout", "scrollView", "frameLayout", "horizontalScrollView"];

  if (viewGroups.indexOf(element.type) != -1) {
    props.root = true;
    rep = prestoDom(element.type, props, []);
  } else if (false) {} else {
    rep = prestoDom(element.type, props, []);
  }
  if (false) {} else {
    Android.replaceView(rep, element.__ref.__id);
  }
}

function createPrestoElement() {
  if (typeof window.__ui_id_sequence != "undefined" && window.__ui_id_sequence != null) {
    return { __id: ++window.__ui_id_sequence };
  } else {
    window.__ui_id_sequence = typeof Android.getNewID == "function" ? parseInt(Android.getNewID()) * 1000000 : window.__PRESTO_ID;
    return { __id: ++window.__ui_id_sequence };
  }
};

function moveChild(child, parent, index) {
  Android.moveView(child.__ref.__id, index);
}

function removeChild(child, parent, index) {
  // console.log("Remove child :", child.type);
  Android.removeView(child.__ref.__id + "");
}

function addChild(child, parent, index) {
  if (child.type == null) {
    console.warn("child null");
  }
  // console.log("Add child :", child.__ref.__id, child.type);
  var viewGroups = ["linearLayout", "relativeLayout", "scrollView", "frameLayout", "horizontalScrollView"];
  if (false) {} else Android.addViewToParent(parent.__ref.__id, domAll(child), index, null, null);
}

function addAttribute(element, attribute) {
  // console.log("add attr :", attribute);
  element.props[attribute.value0] = attribute.value1;
  applyProp(element, attribute, true);
}

function removeAttribute(element, attribute) {
  // console.log("remove attr :", attribute);
  replaceView(element, attribute, true);
}

function updateAttribute(element, attribute) {
  // console.log("update attr :", attribute);
  element.props[attribute.value0] = attribute.value1;

  applyProp(element, attribute, false);
}

function insertDom(root, dom, cb) {
  root.children.push(dom);
  dom.parentNode = root;
  dom.__ref = createPrestoElement();
  window.N = root;

  var rootId = window.__ROOTSCREEN.idSet.root;

  dom.props.root = true;

  var length = window.__ROOTSCREEN.idSet.child.push(dom.__ref.__id);

  var callback = window.callbackMapper(executePostProcess(cb));
  if (false) {} else {
    Android.addViewToParent(rootId, domAll(dom), length - 1, callback, null);
  }

  return dom.__ref.__id;
}

function executePostProcess(cb) {
  return function () {
    cb();

    if (window.__dui_screen && window["afterRender"]) {
      for (var tag in window["afterRender"][window.__dui_screen]) {
        try {
          window["afterRender"][window.__dui_screen][tag]()();
          window["afterRender"][window.__dui_screen]["executed"] = true;
        } catch (err) {
          console.warn(err);
        }
      }
    }

    if (JBridge && JBridge.setShadow) {
      for (var tag in window.shadowObject) {
        JBridge.setShadow(window.shadowObject[tag]["level"], JSON.stringify(window.shadowObject[tag]["viewId"]), JSON.stringify(window.shadowObject[tag]["backgroundColor"]), JSON.stringify(window.shadowObject[tag]["blurValue"]), JSON.stringify(window.shadowObject[tag]["shadowColor"]), JSON.stringify(window.shadowObject[tag]["dx"]), JSON.stringify(window.shadowObject[tag]["dy"]), JSON.stringify(window.shadowObject[tag]["spread"]), JSON.stringify(window.shadowObject[tag]["factor"]));
      }
    }
  };
}

module.exports = {
  domAll: domAll,
  getDomToRender: getDomToRender,
  getRunInUICmd: getRunInUICmd,
  replaceView: replaceView,
  createPrestoElement: createPrestoElement,
  moveChild: moveChild,
  removeChild: removeChild,
  addChild: addChild,
  addAttribute: addAttribute,
  removeAttribute: removeAttribute,
  updateProperty: updateAttribute,
  addProperty: addAttribute,
  insertDom: insertDom
};

/***/ }),

/***/ "./src/WEB/AndroidInterface.js":
/*!*************************************!*\
  !*** ./src/WEB/AndroidInterface.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Copyright (c) 2012-2017 "JUSPAY Technologies"
 * JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
 *
 * This file is part of JUSPAY Platform.
 *
 * JUSPAY Platform is free software: you can redistribute it and/or modify
 * it for only educational purposes under the terms of the GNU Affero General
 * Public License (GNU AGPL) as published by the Free Software Foundation,
 * either version 3 of the License, or (at your option) any later version.
 * For Enterprise/Commerical licenses, contact <info@juspay.in>.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
 * be liable for all damages without limitation, which is caused by the
 * ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
 * damages, claims, cost, including reasonable attorney fee claimed on Juspay.
 * The end user has NO right to claim any indemnification based on its use
 * of Licensed Software. See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
 */

var _require = __webpack_require__(/*! ./Render */ "./src/WEB/Render.js"),
    inflateView = _require.inflateView,
    computeChildDimens = _require.computeChildDimens;

var helper = __webpack_require__(/*! ../helper */ "./src/helper.js");

function getScreenDimensions() {
  var element = document.getElementById("content");
  return JSON.stringify({
    width: element.offsetWidth,
    height: element.offsetHeight
  });
}

function runInUI(cmd) {
  if (typeof cmd == "string") return;

  var id = cmd.id;
  if (id) {
    var elem = document.getElementById(id);

    if (elem) {
      var view = window.__VIEWS[id];
      view.props = helper.merge(view.props, cmd);

      var parentId = null;
      var parentElem = null;
      var parentView = null;

      if (elem) {
        var _view = window.__VIEWS[id];
        _view.props = helper.merge(_view.props, cmd);

        var _parentId = null;
        var _parentElem = null;
        var _parentView = null;

        if (_view.type == 'modal') {
          _parentId = elem.getAttribute('virtual_parent');

          if (_parentId) {
            _parentView = window.__VIEWS[_parentId];
            _parentElem = document.getElementById(_parentId);

            if (_parentElem && _parentView) {
              inflateView(_view, _parentElem, null, true);
            }
          }
        } else {
          _parentId = elem.parentNode.id;

          if (_parentId) {
            _parentView = window.__VIEWS[_parentId];
            _parentElem = document.getElementById(_parentId);

            if (_parentElem && _parentView) {
              var siblingView = null;

              for (var i = 0; i < _parentView.children.length; i++) {
                if (_parentView.children[i].props.id == id) {
                  if (i != 0) siblingView = _parentView.children[i - 1];else siblingView = _parentView;
                  break;
                }
              }

              computeChildDimens(_parentView);
              inflateView(_view, _parentElem, siblingView, false, false, true);
            }
          }
        }
      }
    }
  }
  //recompute()
  //Render.runInUI(cmd)
}

function Render(view, cb) {
  /* Global Style Tag */
  var style_id = window.__STYLE_ID;

  var styleElem = document.getElementById(style_id);
  if (!styleElem || styleElem == undefined) {
    styleElem = document.createElement('style');
    styleElem.setAttribute('id', style_id);
    styleElem.type = 'text/css';

    if (styleElem.styleSheet) {
      styleElem.styleSheet.cssText = "";
    } else {
      styleElem.appendChild(document.createTextNode(""));
    }

    document.head.appendChild(styleElem);
  }
  /* Global Style Tag End */

  var parentElement = document.getElementById("content");
  var parentView = {
    type: "linearLayout",
    props: {
      "h": parentElement.clientHeight,
      "w": parentElement.clientWidth
    },
    children: [view]
  };

  computeChildDimens(parentView);
  var elem = inflateView(view, parentElement, null);

  if (cb) window.callUICallback(cb);

  if (parentElement.childElementCount > 1) {
    var iterableChildNodes = Array.prototype.slice.call(parentElement.children);
    iterableChildNodes.forEach(function (each) {
      helper.clearViewExternals(window.__VIEWS[each.id]);
      each.remove();
    });

    parentElement.appendChild(elem);
  }
}

function moveView(id, index) {
  if (!window.__VIEWS[id]) {
    return console.error(new Error("MoveView: Invalid view ID: " + id));
  }
  var view = window.__VIEWS[id];
  var viewElem = document.getElementById(id);
  var parentId = viewElem.parentNode.id;
  var parent = window.__VIEWS[parentId];
  var parentElem = document.getElementById(parentId);
  var children = parent.children;
  children.splice(children.indexOf(view), 1);
  children.splice(index, 0, view);
  computeChildDimens(parent);

  children.forEach(function (child) {
    inflateView(child, parentElem);
  });
}

function addViewToParent(id, view, index, cb, replace) {
  var parentElement = document.getElementById(id);
  var parentView = window.__VIEWS[id];
  var siblingView = null;

  if (!parentElement || !parentView) return;

  parentView.children.splice(index, 0, view);

  if (index == 0) siblingView = parentView;else siblingView = parentView.children[index - 1];

  var elem = inflateView(view, null, siblingView);
  // debugger; 
  var subElem = null; // this basically is being used for label property 

  if (parentElement) {
    var siblingElement = siblingView ? document.getElementById(siblingView.props.id) : null;

    if (siblingElement && siblingElement != undefined) {
      if (parentElement == siblingElement) {
        // Prepend
        if (subElem) {
          parentElement.insertBefore(subElem, parentElement.childNodes[0]);
        }
        parentElement.insertBefore(elem, parentElement.childNodes[0]);
      } else {
        // Insert in specified position
        var nextSiblingElement = siblingElement.nextSibling;

        parentElement.insertBefore(elem, nextSiblingElement);
        if (subElem) {
          parentElement.insertBefore(subElem, nextSiblingElement);
        }
      }
    } else {
      parentElement.appendChild(elem);
      if (subElem) {
        parentElement.appendChild(subElem);
      }
    }
  }

  if (cb) window.callUICallback(cb);
}

function getChildModalViews(view) {
  var modalViews = [];

  if (view.children) {
    for (var i = 0; i < view.children.length; i++) {
      var childView = view.children[i];

      if (childView.type == 'modal') {
        modalViews.push(childView);
      } else {
        var items = getChildModalViews(childView);
        if (items && items.length > 0) {
          if (modalViews.length > 0) {
            modalViews = items;
          } else {
            modalViews = modalViews.concat(items);
          }
        }
      }
    }
  }

  return modalViews;
}

function removeView(id) {
  var viewElem = document.getElementById(id);
  if (!viewElem) {
    helper.clearViewExternals(view);
    return;
  }

  var parentId = viewElem.parentNode.id;
  if (!parentId) {
    helper.clearViewExternals(view);
    viewElem.remove();
    return;
  }

  var parentElem = document.getElementById(parentId);
  if (!parentElem) {
    helper.clearViewExternals(view);
    viewElem.remove();
    return;
  }

  var view = window.__VIEWS[id];

  if (!view || !view.type) return;

  var parent = null;
  var idx = void 0;

  if (view.type == 'modal') {
    var virtualParentId = viewElem.getAttribute('virtual_parent');
    parent = window.__VIEWS[virtualParentId];

    idx = parent.children.indexOf(view);
    parent.children.splice(idx, 1);

    helper.clearViewExternals(view);
    parentElem.remove();
  } else {
    /* Modal view among children */
    var childModalViews = getChildModalViews(view);
    if (childModalViews && childModalViews.length > 0) {
      for (var i = 0; i < childModalViews.length; i++) {
        var modalView = childModalViews[i];
        var modalElem = document.getElementById(modalView.props.id);

        if (modalElem) {
          var backdropId = modalElem.parentNode.id;
          var backdropElem = document.getElementById(backdropId);

          backdropElem.remove();
        }
      }
    }
    /* Modal view among children end */

    parent = window.__VIEWS[parentId];

    idx = parent.children.indexOf(view);
    parent.children.splice(idx, 1);

    helper.clearViewExternals(view);
    viewElem.remove();
  }
}

function replaceModalView(view, id) {
  var elem = document.getElementById(id);
  if (!elem) return;

  var backdropId = elem.parentNode.id;
  var backdropElem = document.getElementById(backdropId);

  var parentId = elem.getAttribute('virtual_parent');
  var parentView = window.__VIEWS[parentId];
  var parentElem = document.getElementById(parentId);

  var oldView = null;

  for (var i = 0; i < parentView.children.length; i++) {
    if (parentView.children[i].props.id == id) {
      oldView = parentView.children[i];
      break;
    }
  }

  if (!oldView) return;

  /* Get Children */
  var childrenElem = [];
  var children = oldView.children;

  if (elem && children) {
    for (var _i = 0; _i < children.length; _i++) {
      var childId = children[_i].props.id;
      var childElem = document.getElementById(childId);

      if (childElem) childrenElem.push(childElem);
    }
  }
  /* Get Children End */

  oldView.props = view.props;
  backdropElem.remove();
  inflateView(oldView, parentElem, null, true);
  window.__VIEWS[id] = oldView;

  /* Append Children */
  elem = document.getElementById(id);

  if (elem && childrenElem.length > 0) {
    for (var _i2 = 0; _i2 < childrenElem.length; _i2++) {
      elem.appendChild(childrenElem[_i2]);
    }
  }
  /* Append Children End */
}

function replaceView(view, id) {
  if (view.type == 'modal') {
    replaceModalView(view, id);
    return;
  }

  var elem = document.getElementById(id);
  if (!elem) return;

  var parentId = elem.parentNode.id;
  var parentElem = document.getElementById(parentId);
  var parentView = window.__VIEWS[parentId];

  var oldView = null;
  var siblingView = null;

  for (var i = 0; i < parentView.children.length; i++) {
    if (parentView.children[i].props.id == id) {
      oldView = parentView.children[i];

      if (i != 0) siblingView = parentView.children[i - 1];else siblingView = parentView;
      break;
    }
  }

  if (!oldView) return;

  /* Get Children */
  var childrenElem = [];
  var children = oldView.children;

  if (elem && children) {
    for (var _i3 = 0; _i3 < children.length; _i3++) {
      var childId = children[_i3].props.id;
      var childElem = document.getElementById(childId);

      if (childElem) childrenElem.push(childElem);
    }
  }
  /* Get Children End */

  oldView.props = view.props;
  parentElem.removeChild(elem);
  inflateView(oldView, parentElem, siblingView, true);
  window.__VIEWS[id] = oldView;

  /* Append Children */
  elem = document.getElementById(id);

  if (elem && childrenElem.length > 0) {
    for (var _i4 = 0; _i4 < childrenElem.length; _i4++) {
      elem.appendChild(childrenElem[_i4]);
    }
  }
  /* Append Children End */
}

function recompute() {
  var rootnode = document.getElementById('content');
  var child = rootnode.firstElementChild;
  var rootview = window.__VIEWS[child.id];
  Render(rootview, null);
}

module.exports = {
  getScreenDimensions: getScreenDimensions,

  runInUI: runInUI,

  Render: Render,

  moveView: moveView,

  addViewToParent: addViewToParent,

  getChildModalViews: getChildModalViews,

  removeView: removeView,

  replaceModalView: replaceModalView,

  replaceView: replaceView,

  recompute: recompute
};

/***/ }),

/***/ "./src/WEB/JBridgeInterface.js":
/*!*************************************!*\
  !*** ./src/WEB/JBridgeInterface.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/*
 * Copyright (c) 2012-2017 "JUSPAY Technologies"
 * JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
 *
 * This file is part of JUSPAY Platform.
 *
 * JUSPAY Platform is free software: you can redistribute it and/or modify
 * it for only educational purposes under the terms of the GNU Affero General
 * Public License (GNU AGPL) as published by the Free Software Foundation,
 * either version 3 of the License, or (at your option) any later version.
 * For Enterprise/Commerical licenses, contact <info@juspay.in>.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
 * be liable for all damages without limitation, which is caused by the
 * ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
 * damages, claims, cost, including reasonable attorney fee claimed on Juspay.
 * The end user has NO right to claim any indemnification based on its use
 * of Licensed Software. See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
 */

var ViewPageAdapter = __webpack_require__(/*! ./ViewPageAdapter */ "./src/WEB/ViewPageAdapter.js");
var Renderer = __webpack_require__(/*! ./Render */ "./src/WEB/Render.js");
var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
var qsstringify = __webpack_require__(/*! qs/lib/stringify */ "./node_modules/qs/lib/stringify.js");
var logs_state = {
  session_id: '',
  sn: ''
};
var hasLocalStorage = true;
try {
  _typeof(window.localStorage) !== undefined;
} catch (e) {
  hasLocalStorage = false;
}
function parseJson(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return str;
  }
}

function sendAnalytics(data) {
  var url = "https://logs.juspay.in/godel/analytics";
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, JSON.stringify({ data: data }));
  } else {
    // try {
    //   var xhr = new XMLHttpRequest();
    //   xhr.open("POST", url, false); // third parameter of `false` means synchronous
    //   xhr.send(JSON.stringify({data}));   
    // } catch(err) {
    //   //
    // }
  }
}

module.exports = {
  getSymbol: function getSymbol(type) {
    switch (type) {
      case "tick":
        return "\u2713";
      case "rupee":
        return "\u20B9";
      default:
        return "symbol";
    }
  },
  setLogsState: function setLogsState(session, sn) {
    logs_state.session_id = session;
    logs_state.sn = sn;
  },
  listViewAdapter: function listViewAdapter(id, jsx, callback, type, more) {
    var parent = document.getElementById(id);
    if (!parent) {
      console.error(new Error("Listview parent null"));
      return;
    }
    while (parent.firstElementChild) {
      parent.removeChild(parent.firstElementChild);
    }var view = JSON.parse(jsx);
    var parentView = window.__VIEWS[parent.id];
    view.map(function (x, i) {
      parentView.children.push(x.view);
      parentView.type = "linearLayout";
      Renderer.computeChildDimens(parentView);
      parentView.type = "listView";
      var elem = Renderer.inflateView(x.view, parent);
      elem.addEventListener("click", function () {
        window.callUICallback(callback, [i]);
      });
      Android.runInUI(x.value);
    });
    if (more) {
      var elem = document.createElement("div");
      elem.style.width = "100%";
      elem.style.height = "100px";
      elem.style.borderBottom = "1px solid #eee";
      parent.appendChild(elem);

      Renderer.inflateView(JSON.parse(more), elem);
    }
  },

  callAPI: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(method, url, data, headers, type, callback) {
      var something, resp, json;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              headers = parseJson(headers);
              data = parseJson(data);
              something = false;

              if (headers["Content-Type"] === "application/x-www-form-urlencoded") {
                if ((typeof data === "undefined" ? "undefined" : _typeof(data)) == "object") {
                  something = true;
                  data = qsstringify(data);
                }
              } else {
                data = JSON.stringify(data);
              }
              if (["GET", "HEAD"].includes(method)) {
                data = undefined;
              }
              _context.prev = 5;
              _context.next = 8;
              return axios({ url: url, method: method, data: data, headers: headers });

            case 8:
              resp = _context.sent;
              json = resp.data; //await resp.data.json();

              window.callUICallback(callback, "success", btoa(JSON.stringify(json)), resp.status);
              _context.next = 17;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](5);

              console.log("ERR", _context.t0);
              window.callUICallback(callback, "failure", btoa("{}"), 50);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[5, 13]]);
    }));

    function callAPI(_x, _x2, _x3, _x4, _x5, _x6) {
      return _ref.apply(this, arguments);
    }

    return callAPI;
  }(),

  getFromSharedPrefs: function getFromSharedPrefs(key) {
    return hasLocalStorage ? localStorage.getItem(key) || "__failed" : "__failed";
  },

  setInSharedPrefs: function setInSharedPrefs(key, value) {
    if (hasLocalStorage) localStorage.setItem(key, value);
  },

  getKeysInSharedPrefs: function getKeysInSharedPrefs(key) {
    return hasLocalStorage ? localStorage.getItem(key) || "__failed" : "__failed";
  },

  setKeysInSharedPrefs: function setKeysInSharedPrefs(key, value) {
    if (hasLocalStorage) localStorage.setItem(key, value);
  },

  removeKeysInSharedPrefs: function removeKeysInSharedPrefs(key) {
    if (hasLocalStorage) localStorage.removeItem(key);
  },

  viewPagerAdapter: function viewPagerAdapter(id, jsx, tabJsx, cb) {
    ViewPageAdapter.createTabs(id, jsx, tabJsx, cb);
  },

  switchToViewPagerIndex: function switchToViewPagerIndex(index) {
    ViewPageAdapter.toggleView(index);
  },

  getKey: function getKey(key, defaultValue) {
    return hasLocalStorage ? localStorage.getItem(key) || defaultValue : defaultValue;
  },

  setKey: function setKey(key, value) {
    return hasLocalStorage ? localStorage.setItem(key, value) : value;
  },

  getResourceByName: function getResourceByName(tag) {
    return "2.0";
  },

  getSessionAttribute: function getSessionAttribute(v1, v2) {
    return JSON.stringify({ a: v1 });
  },

  setAnalyticsEndPoint: function setAnalyticsEndPoint(url) {
    return;
  },

  getSessionInfo: function getSessionInfo() {
    return JSON.stringify({});
  },

  attach: function attach() {
    return;
  },

  addToLogList: function addToLogList(data) {

    var newLog = JSON.parse(data);
    var logsArr = Array.isArray(newLog) ? newLog : [newLog];
    for (var i = 0; i < logsArr.length; i++) {
      logsArr[i].session_id = logs_state.session_id;
      logsArr[i].sn = ++logs_state.sn;
    }
    // console.warn(logsArr)

    sendAnalytics(logsArr);
  },
  saveToLocal: function saveToLocal(a, b, c) {
    if (hasLocalStorage) {
      try {
        window.localStorage.removeItem(c + ":" + "defOptionType");
        window.localStorage.removeItem(c + ":" + "defOption");
      } catch (e) {}
      window.localStorage.setItem(c + ":" + 'defOptionType', a);
      window.localStorage.setItem(c + ":" + 'defOption', JSON.stringify(b));
    }
  },
  deleteFromLocal: function deleteFromLocal(c) {

    if (hasLocalStorage) {
      try {
        window.localStorage.removeItem(c + ":" + "defOptionType");
        window.localStorage.removeItem(c + ":" + "defOption");
      } catch (e) {}
    }
  },
  loadFromLocal: function loadFromLocal(key) {
    if (hasLocalStorage) {
      if (window.localStorage.getItem(key) == undefined) return "";
      try {
        var a = JSON.parse(window.localStorage.getItem(key));
        if (a == undefined) return "";
        return a;
      } catch (e) {
        return window.localStorage.getItem(key);
      }
    }
  },
  postLogs: function postLogs(endPoint, logs) {
    return;
  },


  submitAllLogs: function submitAllLogs() {
    return;
  },

  getLogList: function getLogList() {
    return JSON.stringify([]);
  },

  updateLogList: function updateLogList() {
    return JSON.stringify({});
  },

  isOnline: function isOnline() {
    return true;
  },

  getDeviceDetails: function getDeviceDetails() {
    var deviceDetails = {
      appVersion: "",
      osVersion: "",
      os: "",
      macAddress: "",
      isDual: "",
      manufacturer: "",
      isRooted: "",
      androidId: "",
      appPackageName: "",
      networkOperator: "",
      simOperatorName: "",
      screenHeight: "",
      screenWidth: "",
      screenPpi: "",
      brand: "",
      model: ""
    };
    return JSON.stringify(deviceDetails);
  },

  getDeviceInfo: function getDeviceInfo() {
    return JSON.stringify({});
  },

  getUUID: function getUUID() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  },

  renewFile: function renewFile(file) {
    return;
  },
  hideKeyboardOnNavigation: function hideKeyboardOnNavigation() {
    return;
  },
  runInJuspayBrowser: function runInJuspayBrowser(eventName, arg2, arg3) {
    //
  },
  /**
   * @method setFCMToken
   * @description Sets token for GCM notifications
   * 
   * Note: Only for Android/iOS. This is just an empty stub in web
   */
  setFCMToken: function setFCMToken() {
    return;
  },
  /**
   * @method requestLocation
   * @description Requests permission to access location
   * 
   * Note: Only for Android/iOS. This is just an empty stub in web
   */
  requestLocation: function requestLocation() {
    return;
  }
};

/***/ }),

/***/ "./src/WEB/Render.js":
/*!***************************!*\
  !*** ./src/WEB/Render.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Copyright (c) 2012-2017 "JUSPAY Technologies"
 * JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
 *
 * This file is part of JUSPAY Platform.
 *
 * JUSPAY Platform is free software: you can redistribute it and/or modify
 * it for only educational purposes under the terms of the GNU Affero General
 * Public License (GNU AGPL) as published by the Free Software Foundation,
 * either version 3 of the License, or (at your option) any later version.
 * For Enterprise/Commerical licenses, contact <info@juspay.in>.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
 * be liable for all damages without limitation, which is caused by the
 * ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
 * damages, claims, cost, including reasonable attorney fee claimed on Juspay.
 * The end user has NO right to claim any indemnification based on its use
 * of Licensed Software. See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
 */

var _require = __webpack_require__(/*! ../compute */ "./src/compute.js"),
    computeChildDimens = _require.computeChildDimens;

var _require2 = __webpack_require__(/*! ../component */ "./src/component.js"),
    renderComponent = _require2.renderComponent;

var helper = __webpack_require__(/*! ../helper */ "./src/helper.js");

function createTextElement(elem, config) {
    var children = elem.childNodes;
    var article = null;
    if (children.length) {
        for (var i = 0; i < children.length; i++) {
            if (children[i].nodeName.toLowerCase() == 'article') {
                article = children[i];
                break;
            }
        }
    }

    if (!article) article = document.createElement('ARTICLE');

    elem.style.whiteSpace = "initial";

    if (config.isHtmlContent) article.innerHTML = config.text;else article.innerText = config.text;

    if (!config.text && config.hint) article.innerText = config.hint;

    article.style.wordBreak = "break-word";
    article.style.display = "inline";

    if (config.letterSpacing) elem["style"]["letter-spacing"] = config.letterSpacing;

    elem.appendChild(article);
}

function createTextElement2(elem, config) {
    var children = elem.childNodes;
    var article = null;
    if (children.length) {
        for (var i = 0; i < children.length; i++) {
            if (children[i].nodeName.toLowerCase() == 'article') {
                article = children[i];
                break;
            }
        }
    }

    if (!article) article = document.createElement('ARTICLE');

    elem.style.whiteSpace = "initial";

    if (config.isHtmlContent) article.innerHTML = config.textFromHtml;else article.innerHTML = config.textFromHtml;

    if (!config.text && config.hint) article.innerText = config.hint;

    article.style.wordBreak = "break-word";
    article.style.display = "inline";

    if (config.letterSpacing) elem["style"]["letter-spacing"] = config.letterSpacing;

    elem.appendChild(article);
}

function popup(elem, props) {
    var menuItems = props["popupMenu"].split(',');
    var menuBar = document.createElement("div");
    menuBar.setAttribute("class", "popupMenu");
    menuBar.style.cssText = "display: none; position: absolute; right: 20px; top:20px; z-index: 5;" + "box-shadow: 0px 5px 10px #888888;";
    document.body.appendChild(menuBar);
    var clickCb = "onMenuItemClick";

    var _loop = function _loop(i) {
        var menuDiv = document.createElement("div");
        menuDiv.setAttribute("class", "menuItem");
        menuDiv.textContent = menuItems[i];
        menuBar.appendChild(menuDiv);
        var index = i;
        if (props[clickCb] && typeof props[clickCb] == "function") {
            menuDiv.addEventListener("click", function () {
                props[clickCb](index);
            });
        }
    };

    for (var i = 0; i < menuItems.length; i++) {
        _loop(i);
    }
    elem.addEventListener("click", function () {
        if (menuBar.style.display == "none") menuBar.style.display = "";else menuBar.style.display = "none";
    });
}

function setGravityStylesForRow(elem, props) {
    if (!props.hasOwnProperty('gravity') || !props.gravity) {
        props.gravity = '';
        //return;
    }

    switch (props.gravity) {
        case 'center_vertical':
            elem.style['align-items'] = 'center';
            elem.style['justify-content'] = 'flex-start';
            break;
        case 'center_horizontal':
            elem.style['align-items'] = 'flex-start';
            elem.style['justify-content'] = 'center';
            break;
        case 'center':
            elem.style['align-items'] = "center";
            elem.style['justify-content'] = "center";
            break;
        case 'left':
        case 'start':
            elem.style['align-items'] = 'flex-start';
            elem.style['justify-content'] = 'flex-start';
            break;
        case 'right':
        case 'end':
            elem.style['align-items'] = 'flex-start';
            elem.style['justify-content'] = 'flex-end';
            break;
        case 'stretch':
            elem.style['align-items'] = 'stretch';
            elem.style['justify-content'] = 'flex-start';
            break;
        default:
            elem.style['align-items'] = 'flex-start';
            elem.style['justify-content'] = 'flex-start';
            break;
    }
}

function setGravityStylesForColumn(elem, props) {
    if (!props.hasOwnProperty('gravity') || !props.gravity) {
        props.gravity = '';
        //return;
    }

    switch (props.gravity) {
        case 'center_vertical':
            elem.style['align-items'] = 'flex-start';
            elem.style['justify-content'] = 'center';
            break;
        case 'center_horizontal':
            elem.style['align-items'] = 'center';
            elem.style['justify-content'] = 'flex-start';
            break;
        case 'center':
            elem.style["align-items"] = "center";
            elem.style["justify-content"] = "center";
            break;
        case 'left':
        case 'start':
            elem.style['justify-content'] = 'flex-start';
            elem.style['align-items'] = 'flex-start';
            break;
        case 'right':
        case 'end':
            elem.style['align-items'] = 'flex-end';
            elem.style['justify-content'] = 'flex-start';
            break;
        case 'stretch':
            elem.style['align-items'] = 'stretch';
            elem.style['justify-content'] = 'flex-start';
            break;
        default:
            elem.style['align-items'] = 'flex-start';
            elem.style['justify-content'] = 'flex-start';
            break;
    }
}

function setAnimationStyles(elem, props) {
    if (!props.hasOwnProperty('hasAnimation') || !props.hasAnimation) {
        return;
    }

    var keyframeName = "keyframe_" + props.id;
    if (!window.__RENDERED_KEYFRAMES.includes(keyframeName)) {
        var styleElem = document.getElementById(window.__STYLE_ID);

        if (!styleElem) {
            return;
        }

        var data = null;

        if (props.inlineAnimation) {
            data = JSON.parse(props.inlineAnimation);
            if (data && data.length > 0) {
                data = data[0];
            }
        }

        if (!data) {
            return;
        }

        var css = "";
        css += "@keyframes " + keyframeName + "{";
        css += "from {";
        if (data.hasOwnProperty('fromX')) {
            css += "margin-left: " + data.fromX + "px;";
        }

        if (data.hasOwnProperty('fromY')) {
            css += "margin-top: " + data.fromY + "px;";
        }

        if (data.hasOwnProperty('fromAlpha')) {
            css += "opacity: " + data.fromAlpha + ";";
        }

        if (data.hasOwnProperty('fromScale')) {
            css += "transform: scale(" + data.fromScale + ");";
        } else if (data.hasOwnProperty('fromScaleX') && data.hasOwnProperty('fromScaleY')) {
            css += "transform: scale(" + data.fromScaleX + ", " + data.fromScaleY + ");";
        } else if (data.hasOwnProperty('fromScaleX')) {
            css += "transform: scaleX(" + data.fromScaleX + ");";
        } else if (data.hasOwnProperty('fromScaleY')) {
            css += "transform: scaleY(" + data.fromScaleY + ");";
        }

        if (data.hasOwnProperty('fromRotation')) {
            css += "transform: rotate(" + data.fromRotation + ");";
        } else {
            if (data.hasOwnProperty('fromRotationX')) {
                css += "transform: rotateX(" + data.fromRotationX + ");";
            } else if (data.hasOwnProperty('fromRotationY')) {
                css += "transform: rotateY(" + data.fromRotationY + ");";
            }
        }
        css += "} ";
        css += "to {";
        if (data.hasOwnProperty('toX')) {
            css += "margin-left: " + data.toX + "px;";
        }

        if (data.hasOwnProperty('toY')) {
            css += "margin-top: " + data.toY + "px;";
        }

        if (data.hasOwnProperty('toAlpha')) {
            css += "opacity: " + data.toAlpha + ";";
        }

        if (data.hasOwnProperty('toScale')) {
            css += "transform: scale(" + data.toScale + ");";
        } else if (data.hasOwnProperty('toScaleX') && data.hasOwnProperty('toScaleY')) {
            css += "transform: scale(" + data.toScaleX + ", " + data.toScaleY + ");";
        } else if (data.hasOwnProperty('toScaleX')) {
            css += "transform: scaleX(" + data.toScaleX + ");";
        } else if (data.hasOwnProperty('toScaleY')) {
            css += "transform: scaleY(" + data.toScaleY + ");";
        }

        if (data.hasOwnProperty('toRotation')) {
            css += "transform: rotate(" + data.toRotation + ");";
        } else {
            if (data.hasOwnProperty('toRotationX')) {
                css += "transform: rotateX(" + data.toRotationX + ");";
            } else if (data.hasOwnProperty('toRotationY')) {
                css += "transform: rotateY(" + data.toRotationY + ");";
            }
        }
        css += "} ";
        css += "}";

        if (styleElem.styleSheet) {
            styleElem.styleSheet.cssText += css;
        } else {
            styleElem.appendChild(document.createTextNode(css));
        }

        elem.style.animationName = keyframeName;
        elem.style.animationDuration = "1s";
        if (data.hasOwnProperty('duration') && !isNaN(data.duration)) {
            var duration = parseFloat(parseFloat(data.duration) / 1000).toFixed(2);
            elem.style.animationDuration = duration + "s";
        }

        if (data.hasOwnProperty('repeatCount')) {
            if (data.repeatCount == "-1" || data.repeatCount == -1) {
                elem.style.animationIterationCount = "infinite";
            } else {
                elem.style.animationIterationCount = data.repeatCount;
            }
        }

        if (data.hasOwnProperty("interpolator")) {
            elem.style.animationTimingFunction = "cubic-bezier(" + data.interpolator + ")";
        }

        window.__RENDERED_KEYFRAMES.push(keyframeName);
    }
}

function setComputedStyles(elem, props) {
    /* Computed Styles */
    // LinearLayout Styles
    if (props.hasOwnProperty('activeDimen') && props.hasOwnProperty('activeWeight')) {
        var activeDimen = props.activeDimen;
        var weight = props.activeWeight;

        if (weight > 0) {
            elem.style.flex = weight;

            if (activeDimen == 'w') {
                //elem.style.width = 'auto';
            } else {
                elem.style.height = 'auto';
            }
        } else {
            elem.style.flex = 'none';
        }
    } else {
        elem.style.flex = 'none';
    }

    // RelativeLayout Styles
    if (props.hasOwnProperty('absolute') && props.absolute) {
        elem.style.position = 'absolute';

        if (props.hasOwnProperty("fromTop")) {
            if (isNaN(props.fromTop)) elem.style.top = props.fromTop;else elem.style.top = props.fromTop + 'px';
        }

        if (props.hasOwnProperty("fromBottom")) {
            if (isNaN(props.fromBottom)) elem.style.bottom = props.fromBottom;else elem.style.bottom = props.fromBottom + 'px';
        }

        if (props.hasOwnProperty("fromLeft")) {
            if (isNaN(props.fromLeft)) elem.style.left = props.fromLeft;else elem.style.left = props.fromLeft + 'px';
        }

        if (props.hasOwnProperty("fromRight")) {
            if (isNaN(props.fromRight)) elem.style.right = props.fromRight;else elem.style.right = props.fromRight + 'px';
        }
    }
    /* Computed Styles End */
}
function separatorInputKeyDownHandlerNew(ev) {
    ev.stopPropagation();
    try {
        var inputId = ev.target.id;
        var inputType = ev.inputType;
        var input = document.getElementById(inputId);
        var oldValidValue = "";
        if (input.oldValidValue) {
            oldValidValue = input.oldValidValue;
        }
        if (input.value.length === 0) {
            input.oldValidValue = input.value;
            return;
        }
        var dataPattern = input.getAttribute("data-pattern");
        if (dataPattern) {
            var data = dataPattern.split(',');
            var length = parseInt(data.pop());
            var regexPattern = new RegExp(data.join(''));
            var selectionStart = input.selectionStart;
            var selectionEnd = input.selectionEnd;
            var separator = input.getAttribute("separator");
            var separatorRepeat = parseInt(input.getAttribute("separatorRepeat"));
            var value = input.value.replace(/[^a-zA-Z0-9@.-]/g, "");
            //If existing value itself greater than equal to max length
            if (length) {
                input.setAttribute("maxlength", length);
            }
            // If code doesn't matches regex pattern
            if (!regexPattern.test(value)) {
                input.value = oldValidValue;
                input.selectionStart = selectionStart - (selectionEnd - selectionStart) - 1;
                input.selectionEnd = selectionEnd - (selectionEnd - selectionStart) - 1;
                return;
            }
            //Insert separator 
            if (separator && separatorRepeat) {
                ev.preventDefault();
                var formattedString = "";
                for (var i = 0; i < value.length; i++) {
                    var element = value[i];
                    formattedString += element;
                    var factor = 0;
                    if (formattedString.length && formattedString.replace(/[^a-zA-Z0-9@.-]/g, "").length % (separatorRepeat + factor) == 0) {
                        formattedString += separator;
                    }
                }
                if (formattedString[length] == separator) {
                    formattedString = formattedString.substring(0, formattedString.length - 1);
                }
                input.value = formattedString;
                if (inputType == "deleteContentBackward") {
                    var cursorPosition = selectionStart;
                    if (cursorPosition % (separatorRepeat + 1) === 0) {
                        if (input.oldValidValue.length < formattedString.length) {
                            cursorPosition += 1;
                        } else {
                            cursorPosition -= 1;
                        }
                    }
                    if (cursorPosition < 0) {
                        cursorPosition = 0;
                    }
                    input.oldValidValue = formattedString;
                    input.focus();
                    input.selectionStart = cursorPosition;
                    input.selectionEnd = cursorPosition;
                }
            }
            input.oldValidValue = input.value;
        }
    } catch (err) {
        console.error(err);
    }
}

function separatorInputKeyDownHandler(ev) {
    ev.stopPropagation();
    try {
        var inputId = ev.target.id;
        var input = document.getElementById(inputId);
        var oldValidValue = "";
        if (input.oldValidValue) {
            oldValidValue = input.oldValidValue;
        }
        if (input.value.length === 0) {
            input.oldValidValue = input.value;
            return;
        }
        var dataPattern = input.getAttribute("data-pattern");
        if (dataPattern) {
            var data = dataPattern.split(',');
            var length = parseInt(data.pop());
            var regexString = data.join('');
            var selectionStart = input.selectionStart;
            var selectionEnd = input.selectionEnd;
            var newValue = input.value;
            if (length) {
                if (oldValidValue.length < input.value.length && oldValidValue.length + 1 > length) {
                    input.value = oldValidValue;
                    ev.preventDefault();
                    input.selectionStart = selectionStart - (selectionEnd - selectionStart) - 1;
                    input.selectionEnd = selectionEnd - (selectionEnd - selectionStart) - 1;
                    return;
                }
            }
            var finalData = newValue.replace(/[^a-zA-Z0-9@.-]/g, "");
            if (regexString) {
                var regexPattern = new RegExp(regexString);
                if (!regexPattern.test(finalData)) {
                    ev.preventDefault();
                    input.value = oldValidValue;
                    input.selectionStart = selectionStart - (selectionEnd - selectionStart) - 1;
                    input.selectionEnd = selectionEnd - (selectionEnd - selectionStart) - 1;
                    return;
                }
            }
            var separator = input.getAttribute("separator");
            var separatorRepeat = parseInt(input.getAttribute("separatorRepeat"));
            if (separator && separatorRepeat) {
                ev.preventDefault();
                var formattedString = "";
                for (var _index = 0; _index < finalData.length; _index++) {
                    var element = finalData[_index];
                    formattedString += element;
                    var factor = 0;
                    if (formattedString.length && formattedString.replace(/[^a-zA-Z0-9@.-]/g, "").length % (separatorRepeat + factor) == 0) {
                        formattedString += separator;
                    }
                }
                if (formattedString[formattedString.length - 1] == separator) {
                    formattedString = formattedString.substring(0, formattedString.length - 1);
                }
                input.value = formattedString;
                var cursorPosition = selectionStart;
                if (cursorPosition % (separatorRepeat + 1) === 0) {
                    if (input.oldValidValue.length < formattedString.length) {
                        cursorPosition += 1;
                    } else {
                        cursorPosition -= 1;
                    }
                }
                if (cursorPosition < 0) {
                    cursorPosition = 0;
                }
                input.oldValidValue = formattedString;
                input.focus();
                input.selectionStart = cursorPosition;
                input.selectionEnd = cursorPosition;
                // console.log("formattedString----", formattedString);
            } else {
                input.oldValidValue = finalData;
            }
        }
    } catch (err) {
        console.error(err);
    }
}

// what is first render?? 
function setAttributes(type, elem, props, firstRender) {
    // console.log("set Attributes -- props",props); 
    if (type == 'modal') {
        setModalAttributes(elem, props, firstRender);
        return;
    }

    if (elem.classList && elem.classList.length > 0) elem.classList.add(type);else elem.className = type;

    elem.style.transition = props.transition;

    /* New Style */
    /* Render from global styles */
    elem.style.width = 'auto';
    elem.style.height = 'auto';

    if (props.hasOwnProperty('width')) {
        if (props.width == 'match_parent') {
            elem.style.width = '100%';
        } else if (props.width == 'wrap_content') {
            // You see below
        } else if (!isNaN(props.width)) {
            if (props.hasOwnProperty('percentWidth') && props.percentWidth) elem.style.width = props.width + '%';else elem.style.width = props.width + 'px';
        }
    }
    if (props.hasOwnProperty('height')) {
        if (props.height == 'match_parent') {
            elem.style.height = '100%';
        } else if (props.height == 'wrap_content') {
            elem.style.height = "auto";
            // You see below
        } else if (!isNaN(props.height)) {
            if (props.hasOwnProperty('percentHeight') && props.percentHeight) elem.style.height = props.height + '%';else elem.style.height = props.height + 'px';
        }
    }

    if (props.hasOwnProperty('minWidth') && !isNaN(props.minWidth)) {
        if (props.percentMinWidth) elem.style.minWidth = props.minWidth + '%';else elem.style.minWidth = props.minWidth + 'px';
    }

    if (props.hasOwnProperty('minHeight') && !isNaN(props.minHeight)) {
        if (props.percentMinHeight) elem.style.minHeight = props.minHeight + '%';else elem.style.minHeight = props.minHeight + 'px';
    }

    if (props.hasOwnProperty('maxWidth') && !isNaN(props.maxWidth)) {
        if (props.percentMaxWidth) elem.style.maxWidth = props.maxWidth + '%';else elem.style.maxWidth = props.maxWidth + 'px';
    }

    if (props.hasOwnProperty('maxHeight') && !isNaN(props.maxHeight)) {
        if (props.percentMaxHeight) elem.style.maxHeight = props.maxHeight + '%';else elem.style.maxHeight = props.maxHeight + 'px';
    }

    if (props.hasOwnProperty('padding')) {
        var padding = props.padding.split(',').map(function (a) {
            return a * 1;
        });

        elem.style['padding'] = padding[1] + 'px ' + padding[2] + 'px ' + padding[3] + 'px ' + padding[0] + 'px';
    }

    if (props.hasOwnProperty('margin')) {
        var margin = props.margin.split(',').map(function (a) {
            return a * 1;
        });

        elem.style['margin'] = margin[1] + 'px ' + margin[2] + 'px ' + margin[3] + 'px ' + margin[0] + 'px';
    }

    if (props.hasOwnProperty('visibility')) {
        var visibility = props.visibility;
        if (visibility == 'invisible') elem.style.visibility = "hidden";else if (visibility == 'gone') elem.style.display = "none";else {
            elem.style.visibility = '';

            initializeShow(elem, props, type);
        }
    } else {
        initializeShow(elem, props, type);
    }

    if (props.hasOwnProperty('expand')) {
        var _visibility = props.expand + '';
        if (_visibility == 'true') {
            elem.style.visibility = '';
            initializeShow(elem, props, type);
        } else elem.style.display = "none";
    }

    /* Render global styles end */

    var scrollBarX = true;
    var scrollBarY = true;

    if (props.hasOwnProperty('scrollBarX')) scrollBarX = props.scrollBarX;
    if (props.hasOwnProperty('scrollBarY')) scrollBarY = props.scrollBarY;

    if (props.hasOwnProperty('overFlowVisible')) {
        if (props.overFlowVisible) {
            elem.style.overflow = "visible";
        }
    }

    /* Render type specific styles */
    if (type == 'linearLayout') {
        elem.style["box-sizing"] = "border-box";

        if (props.hasOwnProperty('fixedWrap') && !props.fixedWrap) {
            elem.style["flex-wrap"] = "nowrap";
        } else {
            elem.style["flex-wrap"] = "wrap";
        }

        elem.style["flex-direction"] = props.orientation == "horizontal" || props.orientation == null ? "row" : "column";

        if (elem.style["flex-direction"] == 'row') setGravityStylesForRow(elem, props);else setGravityStylesForColumn(elem, props);

        if (props.hasOwnProperty('scrollBarX')) {
            if (props.scrollBarX) elem.style.overflowX = 'auto';else elem.style.overflowX = 'hidden';
        }

        if (props.hasOwnProperty('scrollBarY')) {
            if (props.scrollBarY) elem.style.overflowY = 'auto';else elem.style.overflowY = 'hidden';
        }
    } else if (type == "horizontalScrollView") {
        elem.style.overflowX = "auto";
        elem.style.overflowY = "hidden";

        if (!scrollBarX) elem.style.overflowX = 'hidden';
    } else if (type == "listView") {
        elem.style.overflowY = "auto";
        elem.style.overflowX = "hidden";

        if (!scrollBarY) elem.style.overflowY = 'hidden';
    } else if (type == 'scrollView') {
        elem.style.overflowX = 'auto';
        elem.style.overflowY = 'auto';

        if (!scrollBarX) elem.style.overflowX = 'hidden';
        if (!scrollBarY) elem.style.overflowY = 'hidden';
    } else if (type == 'relativeLayout') {
        elem.style.position = 'relative';

        if (props.hasOwnProperty('scrollBarX')) {
            if (props.scrollBarX) elem.style.overflowX = 'auto';else elem.style.overflowX = 'hidden';
        }

        if (props.hasOwnProperty('scrollBarY')) {
            if (props.scrollBarY) elem.style.overflowY = 'auto';else elem.style.overflowY = 'hidden';
        }
    } else if (type == 'imageView') {
        if (props.imageUrl) {
            var imageUrl = props.imageUrl;

            if (props.rawData) {
                // Do Nothing
            } else {
                var temp = imageUrl.split('.');
                var ext = '';
                if (temp && temp.length > 0) ext = temp[temp.length - 1];

                var exts = ["jpeg", "jpg", "png", "bmp", "svg", "gif"];
                ext = ext.toLowerCase();

                if (!imageUrl.includes("data:image/") && !exts.includes(ext)) {
                    imageUrl += '.png';
                }
            }

            elem.setAttribute('src', imageUrl);
        }
    }
    /* Render type specific styles end */
    /* New Style End */

    for (var key in props) {
        if (key == "popupMenu") {
            popup(elem, props);
        } else if (key == "text") {
            if (type == "editText") elem.value = props[key];else createTextElement(elem, props);
        } else if (key == "textFromHtml") {
            if (type == "editText") elem.value = props[key];else createTextElement2(elem, props);
        } else if (key == "style") {
            for (var innerKey in props.style) {
                if (innerKey == "className") {
                    elem.className += " " + props.style[innerKey];
                } else if (props.buttonClickOverlay !== undefined && ["background", "background-image"].includes(innerKey)) {
                    elem.style[innerKey] = "linear-gradient(to right, rgba(0,0,0," + props.buttonClickOverlay + ") 50%, transparent 50%), " + props.style[innerKey];
                    elem.style["background-position"] = "right bottom";
                    elem.style["background-size"] = "200% 100%, 100% 100%";
                } else elem.style[innerKey] = props.style[innerKey];
            }
        } else if (key == "attributes") {
            for (var _innerKey in props.attributes) {
                elem.setAttribute(_innerKey, props.attributes[_innerKey]);
            }
        } else if (key == "className") {
            if ((props[key] || "").trim() !== "") {
                props[key].split(" ").map(function (className) {
                    elem.classList.add(className);
                });
            }
        } else if (key == "classList") {
            JSON.parse(props[key]).forEach(function (obj) {
                elem.classList.add(obj);
            });
        } else if (key == "removeClassList") {
            JSON.parse(props[key]).forEach(function (obj) {
                elem.classList.remove(obj);
            });
        } else if (props[key] && typeof props[key] == "function") {

            var eventType = key.substring(2, key.length).toLowerCase();
            var elemCB = props[key];
            elem.style.userSelect = 'none';
            if (eventType == "change") {
                eventType = "input";
            }

            elem.addEventListener('blur', function () {
                var inputValue = elem.value;
                if (inputValue == "") {
                    elem.classList.remove("filled");
                    elem.parentNode.classList.remove('focused');
                } else {
                    elem.classList.add('filled');
                }
            });

            elem['onfocus'] = function (e) {
                elem.parentNode.classList.add('focused');
                if (eventType == "focus") {
                    e.stopPropagation();
                    elemCB(e);
                }
            };
        }
        //TODO: Repeated code to be removed later
        //   if (props.label) {
        //     elem.addEventListener('blur', function() {
        //       var inputValue = elem.value;
        //       if (inputValue == "") {
        //         elem.classList.remove("filled");
        //         elem.parentNode.classList.remove('focused');
        //       } else {
        //         elem.classList.add('filled');
        //       }
        //     });  

        //     if (!(props.label && eventType == "focus") && firstRender) {
        //         /*elem['on' + eventType] = function (e) {
        //             e.stopPropagation()
        //             eventType == "input" ? elemCB(e.target.value) : elemCB(e)
        //         }*/
        //     }
        // }
    }

    if (!props.animation) {
        console.error("animaiton not found", props);
    }
    if (props.animation.transition) {
        var afterTransition = function afterTransition() {
            var animation = props.animation;
            elem.style.transition = animation.transition;
            elem.style.transform = animation.transform;
            if (animation.opacity) {
                elem.style.opacity = animation.opacity;
            }
        };

        if (props.style.transform || props.style.opacity) {
            setTimeout(afterTransition, 100);
        } else {
            afterTransition();
        }
    }

    /* Events */
    if (firstRender) {
        if (type == "editText" && elem.tagName.toLowerCase() == "input") {
            var isIPhone = navigator.userAgent.indexOf("iPhone") !== -1;
            if (props.autofocus && !isIPhone) {
                elem.focus();
            }
            if (window.preponeSpace) {
                elem.addEventListener('input', separatorInputKeyDownHandlerNew);
            } else {
                elem.addEventListener('input', separatorInputKeyDownHandler);
            }
        }

        var events = ['onClick', 'onEnterPressedEvent', 'onChange', 'onMouseDown', 'onMouseUp', 'onMouseEnter', 'onMouseOver', 'onMouseMove', 'onMouseOut', 'onMouseLeave', 'onFocus', 'onPaste'];

        for (var i = 0; i < events.length; i++) {
            var _key = events[i];
            var _eventType = _key.substring(2, _key.length).toLowerCase();
            if (props.hasOwnProperty(_key) && typeof props[_key] == "function") {
                (function () {
                    var callback = props[_key];
                    if (_key == "onEnterPressedEvent") {
                        elem.addEventListener('keyup', function (e) {
                            e.stopPropagation();

                            if (e.keyCode == 13) {
                                callback(e);
                            }
                        });
                    }
                    if (_eventType == "change") {
                        elem.addEventListener('input', function (e) {
                            callback(e.target.value);
                        });
                    } else if (_eventType == "focus") {
                        elem.addEventListener('focus', function (e) {
                            callback(true);
                        });
                        elem.addEventListener('blur', function (e) {
                            callback(false);
                        });
                    } else {
                        elem.addEventListener(_eventType, function (e) {
                            e.stopPropagation();
                            callback(e);
                        });
                    }
                })();
            }
        }
    }
    /* Events End */

    /* Component Part */
    if (props.hasOwnProperty('elementType') && props.elementType == 'component') {
        elem.classList.add(window.__COM_CLASS_GROUP.WRAPPER);

        if (firstRender) elem.setAttribute('guid', props.guid);
    }

    if (props.hasOwnProperty('componentType') && props.componentType) renderComponent(elem, props, firstRender);
}

function setModalAttributes(elem, props, firstRender) {
    setGravityStylesForRow(elem, props);

    var backdropElem = document.getElementById(window.__BACKDROPMODAL_CLASS + '_' + props.id);

    if (props.hasOwnProperty('modalVisibility') && props.modalVisibility) {
        backdropElem.classList.add(window.__SHOWNMODAL_CLASS);
        document.body.classList.add(window.__OPENMODAL_CLASS);

        var modalProps = null;
        if (window.__MODAL_PROPS[props.id]) {
            modalProps = JSON.parse(window.__MODAL_PROPS[props.id]);
        }

        if (props.onShow && typeof props.onShow == "function") {
            if (firstRender || modalProps && modalProps.modalVisibility != props.modalVisibility) {
                props.onShow();
            }
        }
    } else {
        props.modalVisibility = false;
        backdropElem.classList.remove(window.__SHOWNMODAL_CLASS);
        document.body.classList.remove(window.__OPENMODAL_CLASS);
    }

    window.__MODAL_PROPS[props.id] = JSON.stringify(props);
}

var initializeShow = function initializeShow(elem, props, type) {
    if (type == 'linearLayout') {
        if (props.hasOwnProperty('width') && props.width == 'wrap_content') {
            elem.style.display = 'inline-flex';
            elem.style.width = 'max-content';
        } else {
            elem.style.display = "flex";
        }
    } else {
        if (props.hasOwnProperty('width') && props.width == 'wrap_content') {
            elem.style.display = 'inline-block';
            elem.style.width = 'max-content';
        } else {
            elem.style.display = '';
        }
    }
};

/* Observer for afterRender */
var observer = function observer(elem) {
    var id = elem.id;
    if (!id || __OBSERVERS[id]) return;

    __OBSERVERS[id] = new MutationObserver(function (item, observer) {
        if (item && item[0].target) {
            var target = item[0].target;
            var _id = target.id;
            if (_id) {
                var view = __VIEWS[_id];

                if (view && view.props.hasOwnProperty('afterRender') && typeof view.props.afterRender == "function") {
                    view.props.afterRender();
                }
            }
        }

        observer.disconnect();
    });

    __OBSERVERS[id].observe(elem, {
        attributes: true
    });
};

/* Do some actions after rendered */
var cb = function cb(elem, view) {
    if (view.props.feedback && typeof view.props.feedback == "function") {
        view.props.feedback();
    }
};

// Creates the Modal element if it has not been already inflated
var inflateModal = function inflateModal(view, parentElement, stopChild) {
    var newInflated = false;
    var parentId = parentElement.id;

    /* Modal Wrapper */
    var elem = document.getElementById(view.props.id);
    if (!elem || elem == undefined) {
        newInflated = true;

        elem = document.createElement('div');
        elem.setAttribute('id', view.props.id);
        elem.setAttribute('virtual_parent', parentId);
        elem.classList.add(window.__CONTENTMODAL_CLASS);
    }
    /* Modal Wrapper End */

    /* BackDrop */
    var backdropElem = document.getElementById(window.__BACKDROPMODAL_CLASS + '_' + view.props.id);
    if (!backdropElem || backdropElem == undefined) {
        backdropElem = document.createElement('div');
        backdropElem.setAttribute('id', window.__BACKDROPMODAL_CLASS + '_' + view.props.id);
        backdropElem.classList.add(window.__BACKDROPMODAL_CLASS);

        if (view.props.hasOwnProperty('animationType') && view.props.animationType != 'none') {
            var animationType = view.props.animationType;

            if (animationType == 'fade') {
                backdropElem.classList.add(window.__FADEMODAL_CLASS);
            } else if (animationType == 'slide') {
                backdropElem.classList.add(window.__SLIDEMODAL_CLASS);
            }
        }

        if (view.props.hasOwnProperty('closeOnBackdrop') && !view.props.closeOnBackdrop) {
            backdropElem.classList.add(window.__DISABLEDBACKDROP_CLASS);
        } else {
            backdropElem.classList.remove(window.__DISABLEDBACKDROP_CLASS);
        }

        if (view.props.hasOwnProperty('transparent') && view.props.transparent) {
            backdropElem.style.background = 'transparent';
        } else {
            backdropElem.style.background = 'rgba(0, 0, 0, 0.5)';
        }

        backdropElem.appendChild(elem);
        document.body.appendChild(backdropElem);

        if (newInflated) {
            if (view.props.hasOwnProperty('afterRender') && typeof view.props.afterRender == "function") {
                // We should run observer for the element
                observer(elem);
                elem.setAttribute('has_render', true);
            }
        }
    }
    /* BackDrop End */

    setModalAttributes(elem, view.props, newInflated);

    if (!stopChild) {
        if (view.hasOwnProperty('children') && view.children.length > 0) {
            for (var i = 0; i < view.children.length; i++) {
                if (view.children[i]) {
                    view.children[i].props.style.pointerEvents = 'auto';
                    if (i != 0) inflateView(view.children[i], elem, view.children[i - 1]);else inflateView(view.children[i], elem, view);
                }
            }
        }
    } else {
        if (elem.hasChildNodes()) {
            var childNodes = elem.childNodes;

            if (childNodes) {
                for (var _i = 0; _i < childNodes.length; _i++) {
                    var childNode = childNodes[_i];

                    childNode.style.pointerEvents = 'auto';
                }
            }
        }
    }

    if (newInflated) {
        cb(elem, view);
    }

    return backdropElem;
};

window.inflateTimings = {
    lastUpdatedAt: null

    // Creates the DOM element if it has not been already inflated
    // View: Object of ReactDOM, {type, props, children}
    // parentElement: DOM Object

    // what is render style, sibling view, stopChild, stopObserver 

};var inflateView = function inflateView(view, parentElement, siblingView, stopChild, stopObserver, renderStyle) {
    // debugger; 
    var start = performance.now();

    if (view.type == 'modal') {
        return inflateModal(view, parentElement, stopChild);
    }

    var elem = document.getElementById(view.props.id);
    var subElem = null;
    var newInflated = false;

    if (view.props.x == "NaN" || view.props.y == "NaN") {
        view = handleWrapContent(view, parentElement);
    }

    if (!elem) {
        if (view.type == "webView") {
            elem = document.createElement('iframe');

            elem.style.border = 'none';
        } else if (view.type == "imageView") {
            elem = document.createElement("img");
            elem["style"]["margin"] = "0";
            elem["style"]["padding"] = "0";
            elem["style"]["display"] = "block";
            elem["style"]["max-width"] = "100%";
            elem["style"]["max-height"] = "100%";
            elem["style"]["box-sizing"] = "border-box";
            elem.setAttribute("alt", "");
        } else if (view.type == "checkBox") {
            elem = document.createElement("input");
            elem.setAttribute('type', 'checkbox');

            if (view.props.hasOwnProperty('label') && view.props.label != '' && parentElement) {
                subElem = document.createElement('label');
                subElem.setAttribute('for', view.props.id);
                subElem.innerHTML = view.props.label;
                subElem.style.padding = "0 0 0 5px";
                subElem.classList.add('input-label');

                delete view.props.label;
            }
        } else if (view.type == "editText") {
            if (view.props.hasOwnProperty('inputType') && view.props.inputType == 'multiText') {
                elem = document.createElement("textarea");
                elem.style.border = 'none';
                elem.style.resize = 'none';
                elem.style.outline = 'none';
            } else {
                elem = document.createElement("input");
            }

            elem.value = view.props.text || "";

            if (view.props.letterSpacing) {
                elem["style"]["letter-spacing"] = view.props.letterSpacing;
            }

            if (view.props.label) {
                var inputView = elem;
                inputView.style.width = '100%';
                setAttributes(view.type, inputView, view.props, true);
                inputView.setAttribute("id", view.props.id + "_input");
                var l = document.createElement("label");
                l.setAttribute("for", view.props.id + "_input");
                l.innerHTML = view.props.label;
                l.classList.add('input-label');

                l["style"]["position"] = "absolute";
                l["style"]["color"] = "#999";
                l["style"]["background-color"] = "#fff";
                l["style"]["padding"] = "0 5px";
                l["style"]["z-index"] = 10;
                l["style"]["transition"] = "transform 150ms ease-out, font-size 150ms ease-out";

                if (view.props.letterSpacing) {
                    l["style"]["letter-spacing"] = view.props.letterSpacing;
                }

                elem = document.createElement("div");
                elem.classList.add('input-group');
                elem.appendChild(l);
                elem.appendChild(inputView);

                view.props.style.position = "relative";
                setAttributes(view.type, elem, view.props, true);
                delete view.props.label;
            } else if (view.props.hint) {
                elem.placeholder = view.props.hint || "";
            }
        } else {
            elem = document.createElement(view.elName || "div"); // create the element here 
        }

        /* Tooltip */
        if (view.type != 'linearLayout' && view.type != 'relativeLayout' && view.type != 'horizontalScrollView' && view.type != 'scrollView' && view.type != 'listView') {
            if (view.props.hasOwnProperty('tooltipText')) {
                var tooltipText = view.props.tooltipText.trim();

                if (tooltipText) {
                    var tooltipGravity = view.props.tooltipGravity ? view.props.tooltipGravity : 'top';

                    elem.classList.add('hasTooltip');

                    var tooltipElem = document.createElement('div');
                    tooltipElem.innerHTML = '<pre>' + tooltipText + '</pre>';
                    tooltipElem.classList.add('tooltipText');
                    tooltipElem.classList.add('tooltipGravity_' + tooltipGravity);

                    var size = 15;
                    if (view.props.hasOwnProperty('tooltipTextSize') && !isNaN(view.props.tooltipTextSize)) {
                        size = view.props.tooltipTextSize;
                    }

                    tooltipElem.style.fontSize = size + 'px';

                    elem.appendChild(tooltipElem);
                }
            }
        }
        /* Tooltip End */

        newInflated = true;

        // attach the element to the dom 
        if (parentElement) {
            var siblingElement = siblingView ? document.getElementById(siblingView.props.id) : null;

            if (siblingElement && siblingElement != undefined) {
                if (parentElement == siblingElement) {
                    // Prepend
                    if (subElem) {
                        parentElement.insertBefore(subElem, parentElement.childNodes[0]);
                    }
                    parentElement.insertBefore(elem, parentElement.childNodes[0]);
                } else {
                    // Insert in specified position
                    var nextSiblingElement = siblingElement.nextSibling;

                    parentElement.insertBefore(elem, nextSiblingElement);
                    if (subElem) {
                        parentElement.insertBefore(subElem, nextSiblingElement);
                    }
                }
            } else {
                parentElement.appendChild(elem);
                if (subElem) {
                    parentElement.appendChild(subElem);
                }
            }
        }

        // appened attributes, style to the elemenent 
        setAttributes(view.type, elem, view.props, true);

        /*if(view.props.hasOwnProperty('afterRender') && typeof view.props.afterRender == "function"){
          if(!stopObserver){
            // We should run observer for the element
            observer(elem);
            elem.setAttribute('has_render', true);
          }
        }*/
    } else if (renderStyle) {
        setAttributes(view.type, elem, view.props, false);
    }

    if (view.type == 'horizontalScrollView') {
        if (view.props.hasOwnProperty('scrollLeft') && !isNaN(view.props.scrollLeft)) elem.scrollLeft = view.props.scrollLeft;
    }

    if (view.type == 'listView') {
        if (view.props.hasOwnProperty('scrollTop') && !isNaN(view.props.scrollTop)) elem.scrollTop = view.props.scrollTop;
    }

    if (view.type == 'scrollView') {
        if (view.props.hasOwnProperty('scrollLeft') && !isNaN(view.props.scrollLeft)) elem.scrollLeft = view.props.scrollLeft;

        if (view.props.hasOwnProperty('scrollTop') && !isNaN(view.props.scrollTop)) elem.scrollTop = view.props.scrollTop;
    }

    if (view.type == 'checkBox') {
        if (view.props.hasOwnProperty('checked') && view.props.checked == true) {
            elem.checked = true;
        } else {
            elem.checked = false;
        }
    }

    if (!stopChild) computeChildDimens(view);

    setComputedStyles(elem, view.props);
    setAnimationStyles(elem, view.props);

    if (!stopChild) {
        if (view.hasOwnProperty('children') && view.children.length > 0) {
            for (var i = 0; i < view.children.length; i++) {
                if (view.children[i]) {
                    if (i != 0) inflateView(view.children[i], elem, view.children[i - 1], stopChild, stopObserver, renderStyle);else inflateView(view.children[i], elem, view, stopChild, stopObserver, renderStyle);
                }
            }
        }
    }

    if (newInflated) {
        if (view.props.hasOwnProperty('afterRender') && typeof view.props.afterRender == "function") {
            if (!stopObserver) {
                // We should run observer for the element
                observer(elem);
                elem.setAttribute('has_render', true);
            }
        }
        cb(elem, view);
    }

    var end = performance.now();

    window.inflateTimings[view.props.id] = end - start;
    window.inflateTimings.lastUpdatedAt = end;

    return elem;
};

var handleWrapContent = function handleWrapContent(view, parentElement) {
    var newDimen = 0;
    for (var i = 0; i < parentElement.childNodes.length; i++) {
        newDimen += parentElement.childNodes[i].offsetWidth;
    }
    view.props.x = newDimen;
    return view;
};

var runInUI = function runInUI(cmd) {
    if (!(cmd instanceof Array)) cmd = [cmd];

    cmd.forEach(function (each) {
        var elem = document.getElementById(each.id);

        if (!elem) {
            return console.error("runInUI (Id NULL) CMD:", each);
        }

        var view = window.__VIEWS[elem.id];
        view.props = helper.merge(view.props, each);

        setAttributes(view.type, elem, view.props, false);
    });
};

module.exports = {
    inflateView: inflateView,
    runInUI: runInUI,
    computeChildDimens: computeChildDimens
};

/***/ }),

/***/ "./src/WEB/ViewPageAdapter.js":
/*!************************************!*\
  !*** ./src/WEB/ViewPageAdapter.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

var Renderer = __webpack_require__(/*! ./Render */ "./src/WEB/Render.js");

function generateTabWrapper() {
  var elem = document.createElement("div");

  elem.className = "tab";

  return elem;
}

function generateTabTitleWrapper() {
  var elem = document.createElement("div");
  elem.className = "tab-titleWrapper";

  return elem;
}

function generateTabContentWrapper() {
  var elem = document.createElement("div");

  elem.className = "tab-contentWrapper";

  return elem;
}

function generateTabTitleEl(title) {
  var elem = document.createElement("div");

  elem.innerHTML = title;
  elem.className = "tab-title";

  return elem;
};

function generateTabContentEl(view) {
  var elem = Renderer.inflateView(view.view);
  elem.className += " tab-content";

  return elem;
}

var createTabs = function createTabs(Android, id, tabJsx, jsx, cb) {
  var view = generateTabWrapper();
  var tabTitleWrapper = generateTabTitleWrapper();
  var tabContentWrapper = generateTabContentWrapper();
  var tabItem;

  view.appendChild(tabTitleWrapper);
  view.appendChild(tabContentWrapper);

  jsx.forEach(function (each, index) {
    tabItem = generateTabTitleEl(each.value);

    if (index == 0) tabItem.className += " tab-title-active";

    tabTitleWrapper.appendChild(tabItem);
  });

  tabJsx.forEach(function (each, index) {
    tabItem = generateTabContentEl(each);

    if (index == 0) tabItem.className += " tab-content-active";

    tabContentWrapper.appendChild(tabItem);
  });

  document.getElementById(id).appendChild(view);

  window.callUICallback(cb, "0");
};

module.exports = {
  createTabs: createTabs
};

/***/ }),

/***/ "./src/animations.js":
/*!***************************!*\
  !*** ./src/animations.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

var BaseView = __webpack_require__(/*! ./baseView */ "./src/baseView.js");
var VIEW = new BaseView(null, null, {});

// Object of types of animations available on screen change
var AnimationTypes = {
  SLIDE: {
    name: "slide",
    handler: slideHandler
  },
  SLIDE_VERTICAL: {
    name: "slide_down",
    handler: slideDownHandler
  },
  SIMPLE: {
    name: "simple",
    handler: simpleHandler
  }
};

var DEFAULT_ANIMATION = AnimationTypes.SLIDE;

function simpleHandler(fromId, toId, direction) {
  var cmd = VIEW.cmd({
    id: toId,
    translationZ: ++window.ZIndex
  });
  return cmd;
}

function slideDownHandler(fromId, toId, direction) {
  var container = VIEW.cmdContainer();
  var cmd = void 0;

  if (direction == 1) {
    cmd = VIEW.cmd({
      id: toId,
      translationY: window.__HEIGHT,
      a_duration: '300',
      a_translationY: '0',
      translationZ: ++window.ZIndex
    });
    container = container.addCmd(cmd);

    cmd = VIEW.cmd({
      id: fromId,
      a_translationY: -0.2 * window.__HEIGHT,
      a_duration: '300'
    });
    container = container.addCmd(cmd);

    return container;
  }

  window.ZIndex++;
  cmd = VIEW.cmd({
    id: fromId,
    translationY: 0,
    a_translationY: window.__HEIGHT,
    a_duration: '300',
    translationZ: ++window.ZIndex
  });
  container = container.addCmd(cmd);

  cmd = VIEW.cmd({
    id: toId,
    translationZ: window.ZIndex - 1,
    a_translationY: '0',
    translationY: -0.2 * window.__HEIGHT,
    a_duration: '300'
  });
  container = container.addCmd(cmd);

  return container;
}

function slideHandler(fromId, toId, direction) {
  var container = VIEW.cmdContainer();
  var cmd = void 0;
  if (direction == 1) {
    cmd = VIEW.cmd({
      id: toId,
      visibility: 'visible',
      translationX: window.__WIDTH,
      a_duration: '300',
      a_translationX: '0',
      translationZ: ++window.ZIndex
    });
    container = container.addCmd(cmd);
    cmd = VIEW.cmd({
      id: fromId,
      translationX: '0',
      visibility: 'visible',
      a_duration: '300',
      a_translationX: -.2 * window.__WIDTH + ''
    });
    container = container.addCmd(cmd);
  }

  if (direction == -1) {
    window.ZIndex++;
    cmd = VIEW.cmd({
      id: fromId,
      translationX: '0',
      a_duration: '300',
      a_translationX: window.__WIDTH,
      translationZ: ++window.ZIndex
    });
    container = container.addCmd(cmd);

    cmd = VIEW.cmd({
      id: toId,
      visibility: 'visible',
      translationX: -.2 * window.__WIDTH + '',
      a_duration: '300',
      a_translationX: '0',
      translationZ: window.ZIndex - 1
    });
    container = container.addCmd(cmd);
  }

  return container;
}

/*
  Generic Handler for Animation
  Arguments:
    fromViewId: Number - Id of the view currently visible on the screen
    toViewID: Number - Id of the view which has to be brought on the screen
    ID: Number - Id of the view to be animated
    animator: Obj - {name:string, handler:function}
    direction: Number - Represents of the direction of the screen
      -1 : Go back to the already rendered screen (right to left)
       1 : Go to the new screen (left to right)
*/
function getAnimation(fromViewID, toViewId, direction, animator) {
  if (!animator) animator = DEFAULT_ANIMATION;

  if ((typeof animator === "undefined" ? "undefined" : _typeof(animator)) === "object" && typeof animator.handler === "function") return animator.handler(fromViewID, toViewId, direction);else console.log(new Error("Animation handler is not a function, type: " + animator));
}

module.exports.types = AnimationTypes;
module.exports.getAnimation = getAnimation;

/***/ }),

/***/ "./src/baseView.js":
/*!*************************!*\
  !*** ./src/baseView.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

var merge = __webpack_require__(/*! ./helper */ "./src/helper.js").merge;

String.prototype.addCmd = function (data) {
  return this.concat(data);
};

Array.prototype.addCmd = function (data) {
  this.push(data);
  return this;
};

var parseParams = void 0;
if (false) {}else if (true) parseParams = __webpack_require__(/*! ./helpers/web/parseParams */ "./src/helpers/web/parseParams.js");else {}

var BaseView = function () {
  function BaseView(props, children) {
    _classCallCheck(this, BaseView);

    this.props = props || {};
    this.children = children || [];

    window.__SETFN = function (config) {
      Android.runInUI(this.set(config), null);
    }.bind(this);

    this.idSet = {};

    if (this.props.id) {
      this.idSet["id"] = this.props.id;
    } else {
      this.props.id = this.id("id");
    }

    if (this.props._ref) {
      this.props._ref(this);
    }
  }

  _createClass(BaseView, [{
    key: "resolveChildren",
    value: function resolveChildren() {
      return this.children.map(function (child) {
        return child.render();
      });
    }
  }, {
    key: "findRecurse",
    value: function findRecurse(obj, selector) {
      var children = obj.children;

      for (var i = 0; i < children.length; i++) {
        if (children[i].displayName && children[i].displayName == selector) {
          this.foundChildren.push(children[i]);
        }

        if (children[i].children && children[i].children.length) this.findRecurse(children[i], selector);
      }

      return;
    }
  }, {
    key: "find",
    value: function find(selector, obj) {
      this.foundChildren = [];

      if (!obj) this.findRecurse(this.layout, selector);else this.findRecurse(obj, selector);

      return this.foundChildren;
    }
  }, {
    key: "id",
    value: function id(name) {
      if (!this.idSet[name]) {
        window.__ID++;
        this.idSet[name] = window.__ID;
      }

      return this.idSet[name];
    }
  }, {
    key: "setIds",
    value: function setIds(arr) {
      if (!this.idSet) this.idSet = {};

      for (var i = 0; i < arr.length; i++) {
        if (!this.idSet[arr[i]]) {
          window.__ID++;
          this.idSet[arr[i]] = window.__ID + '';
        }
      }
    }
  }, {
    key: "handleSpecialChars",
    value: function handleSpecialChars(value) {
      value = value.indexOf(',') > -1 ? value.replace(/\,/g, '\\\\,') : value;
      value = value.indexOf(':') > -1 ? value.replace(/\:/g, '\\\\:') : value;
      value = value.indexOf('=') > -1 ? value.replace(/\=/g, '\\\\=') : value;
      value = value.indexOf(';') > -1 ? value.replace(/\;/g, '\\\\;') : value;

      return value;
    }
  }, {
    key: "cmdForAndroid",
    value: function cmdForAndroid(config) {
      var cmd = "set_view=ctx->findViewById:i_" + config.id + ";";
      var runInUI;

      if (config.toast) {
        cmd = "set_TOAST=android.widget.Toast->makeText:ctx_ctx,cs_" + this.handleSpecialChars(config.text) + ",i_" + (config.duration == "short" ? 0 : 1) + ";get_TOAST->show";
      } else if (config && Object.keys(config).length) {
        delete config.id;

        config.root = "true";
        runInUI = parseParams("linearLayout", config, "get").runInUI;

        cmd += runInUI + ';';
      }

      return cmd;
    }
  }, {
    key: "cmdContainer",
    value: function cmdContainer() {
      if (false) {}
      return [];
    }
  }, {
    key: "cmdForWeb",
    value: function cmdForWeb(config) {
      if (Object.keys(config).length) return parseParams("linearLayout", config, "set");
    }
  }, {
    key: "cmd",
    value: function cmd(config) {
      if (false) {}else if (true) return this.cmdForWeb(config);
      return config;
    }
  }, {
    key: "appendChild",
    value: function appendChild(id, jsx, index, fn, replaceChild) {
      var proxyFnName;
      if (!replaceChild) {
        replaceChild = false;
      }

      if (fn) {
        proxyFnName = 'F' + window.__FN_INDEX;
        window.__PROXY_FN[proxyFnName] = fn;
        window.__FN_INDEX++;
      }

      jsx =  true ? jsx : undefined;

      if (proxyFnName) Android.addViewToParent(id, jsx, index, proxyFnName, replaceChild);else Android.addViewToParent(id, jsx, index, null, replaceChild);
    }
  }, {
    key: "getView",
    value: function getView(jsx) {
      if (true) return jsx;

      return JSON.stringify(jsx);
    }
  }, {
    key: "updateProps",
    value: function updateProps(props) {
      this.props = merge(this.props, props);
      var oldContainerId = this.layout.idSet.id;
      var layout = this.render();
      for (var i = 0; i < layout.children.length; i++) {
        if (i == 0) this.replaceChild(oldContainerId, layout.children[i], i);else this.appendChild(oldContainerId, layout.children[i], i);
      }
      this.layout.idSet.id = oldContainerId;
    }
  }, {
    key: "removeView",
    value: function removeView(id) {
      if (__OS == "WEB") return Android.removeView(id);
      return "set_VIEW=ctx->findViewById:i_" + id + ";set_PARENT=get_VIEW->getParent;get_PARENT->removeView:get_VIEW;";
    }
  }, {
    key: "removeChildren",
    value: function removeChildren(id) {
      if (__OS == "WEB") return Android.removeChildren(id);
      return "set_VIEW=ctx->findViewById:i_" + id + ";get_VIEW->removeAllViews;";
    }
  }, {
    key: "replaceChild",
    value: function replaceChild(id, jsx, index, fn) {
      this.appendChild(id, jsx, index, fn, true);
    }
  }]);

  return BaseView;
}();

module.exports = BaseView;

/***/ }),

/***/ "./src/component.js":
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DropdownBox = __webpack_require__(/*! ./components/DropdownBox */ "./src/components/DropdownBox.js");
var DropdownSearchBox = __webpack_require__(/*! ./components/DropdownSearchBox */ "./src/components/DropdownSearchBox.js");
var NavBar = __webpack_require__(/*! ./components/NavBar */ "./src/components/NavBar.js");
// const DateRangePicker = require('./components/DateRangePicker')
var SwitchButton = __webpack_require__(/*! ./components/SwitchButton */ "./src/components/SwitchButton.js");
var Button = __webpack_require__(/*! ./components/Button */ "./src/components/Button.js");

/* Components */
function closeAllActiveComponents() {
     if (window.__COM_ACTIVE.NAVBAR != '') NavBar._closeByGUID(window.__COM_ACTIVE.NAVBAR);
     if (window.__COM_ACTIVE.DSB != '') DropdownSearchBox._closeByGUID(window.__COM_ACTIVE.DSB);
     if (window.__COM_ACTIVE.DB != '') DropdownBox._closeByGUID(window.__COM_ACTIVE.DB);
}

function renderComponent(elem, props, firstRender) {
     if (!props.componentType) return;

     var componentType = props.componentType;

     /* Attaching GUID only when firstRender */
     if (firstRender && props.guid) elem.setAttribute('guid', props.guid);

     switch (componentType) {
          // Button
          case 'BT':
               elem.classList.add(window.__COM_CLASS_GROUP.BT);

               Button._renderMain(elem, props, firstRender);
               break;
          // Switch Button
          case 'SWITCH':
               elem.classList.add(window.__COM_CLASS_GROUP.SWITCH);

               SwitchButton._renderMain(elem, props, firstRender);
               break;
          // Date Range Picker
          case 'DRP':
               elem.classList.add(window.__COM_CLASS_GROUP.DRP);

               //   DateRangePicker._renderMain(elem, props, firstRender)
               break;
          case 'DRP_BODY':
               elem.classList.add(window.__COM_CLASS_GROUP.DRP_BODY);

               //   DateRangePicker._renderBody(elem, props, firstRender)
               break;
          // Nav Bar
          case 'NAVBAR':
               elem.classList.add(window.__COM_CLASS_GROUP.NAVBAR);

               NavBar._renderMain(elem, props, firstRender);
               break;
          // Dropdown Box
          case 'DB':
               elem.classList.add(window.__COM_CLASS_GROUP.DB);

               DropdownBox._renderMain(elem, props, firstRender);
               break;
          case 'DB_FULL_BODY':
               elem.classList.add(window.__COM_CLASS_GROUP.DB_FULL_BODY);

               DropdownBox._renderFullBody(elem, props, firstRender);
               break;
          // Dropdown Search Box
          case 'DSB':
               elem.classList.add(window.__COM_CLASS_GROUP.DSB);

               DropdownSearchBox._renderMain(elem, props, firstRender);
               break;
          case 'DSB_FULL_BODY':
               elem.classList.add(window.__COM_CLASS_GROUP.DSB_FULL_BODY);

               DropdownSearchBox._renderFullBody(elem, props, firstRender);
               break;
     }

     if (!window.__COM_EVENT) {
          window.__COM_EVENT = true;

          // Body click event
          document.body.addEventListener('click', function (e) {
               var target = e.target;
               var guid = target.getAttribute('guid');

               if (!guid) {
                    // We need to close any active components
                    closeAllActiveComponents();
               } else {
                    var classList = target.classList;

                    if (classList.contains(window.__COM_CLASS_GROUP.NAVBAR_ITEM_WITH_SUB)) {
                         // NAVBAR Menu Item with SubRoute
                         if (classList.contains('selected')) {
                              if (!window.__COM_ACTIVE.NAVBAR) return;

                              NavBar._closeByGUID(window.__COM_ACTIVE.NAVBAR);
                         } else {
                              closeAllActiveComponents();
                              NavBar._openByGUID(guid, target);
                         }
                    } else if (classList.contains(window.__COM_CLASS_GROUP.NAVBAR_ITEM) || classList.contains(window.__COM_CLASS_GROUP.NAVBAR_SUB_ITEM)) {
                         // NAVBAR Menu Item (Sub Item as well)
                         if (window.__COM_ACTIVE.NAVBAR) NavBar._closeByGUID(window.__COM_ACTIVE.NAVBAR);

                         if (classList.contains('selected')) return;

                         NavBar._selectRouteByGUID(guid, target);
                    } else if (classList.contains(window.__COM_CLASS_GROUP.DB)) {
                         // DB Main Click
                         if (guid == window.__COM_ACTIVE.DB) {
                              DropdownBox._closeByGUID(guid);
                         } else {
                              closeAllActiveComponents();
                              DropdownBox._openByGUID(guid);
                         }
                    } else if (classList.contains(window.__COM_CLASS_GROUP.DB_OPTION)) {
                         // DB Option Select
                         DropdownBox._closeByGUID(guid);
                         DropdownBox._selectOptionByGUID(guid, target);
                    } else if (classList.contains(window.__COM_CLASS_GROUP.DSB)) {
                         // DSB Main Click
                         if (guid == window.__COM_ACTIVE.DSB) {
                              DropdownSearchBox._closeByGUID(guid);
                         } else {
                              closeAllActiveComponents();
                              DropdownSearchBox._openByGUID(guid);
                         }
                    } else if (classList.contains(window.__COM_CLASS_GROUP.DSB_OPTION)) {
                         // DSB Option Select
                         DropdownSearchBox._closeByGUID(guid);
                         DropdownSearchBox._selectOptionByGUID(guid, target);
                    }
               }
          });

          // Keydown event
          document.body.addEventListener('keyup', function (e) {
               var target = e.target;
               var guid = target.getAttribute('guid');

               if (!guid) return;

               var classList = target.classList;

               if (classList.contains(window.__COM_CLASS_GROUP.DSB_SEARCH)) {
                    if (guid == window.__COM_ACTIVE.DSB) {
                         var query = target.value.trim();
                         DropdownSearchBox._filterOptions(guid, query);
                    }
               }
          });
     }
}

module.exports = {
     renderComponent: renderComponent
};

/***/ }),

/***/ "./src/components/Button.js":
/*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Button() {}

Button.prototype._renderMain = function (elem, props, renderEvent) {
    var guid = props.guid;
    if (elem.getAttribute('guid')) guid = elem.getAttribute('guid');

    elem.style.cursor = 'pointer';
    elem.style.padding = 0;
    elem.innerHTML = '';

    var linkElem = document.createElement('A');
    elem.appendChild(linkElem);

    linkElem.style.pointerEvents = 'auto';

    if (props.hasOwnProperty('disabled') && props.disabled) {
        elem.classList.add(window.__COM_CLASS_GROUP.BT_DISABLED);
        linkElem.style.pointerEvents = 'none';
    }

    var html = '';
    /* Button Image */
    if (props.imageUrl) {
        // Image URL
        var imageUrl = props.imageUrl;

        var temp = imageUrl.split('.');
        var ext = '';
        if (temp && temp.length > 0) ext = temp[temp.length - 1];

        var exts = ["jpeg", "jpg", "png", "bmp", "svg", "gif"];
        ext = ext.toLowerCase();

        if (!imageUrl.includes("data:image/svg+xml") && !exts.includes(ext)) {
            imageUrl += '.png';
        }

        html += '<img src="' + imageUrl + '"/>';
    } else if (props.iconName) {
        // Font Icon
        html += '<i class="' + props.iconName + '"></i>';
    }

    /* Button Text */
    if (props.text) html += "<span>" + props.text + "</span>";else html += "<span>Button Text</span>";

    linkElem.innerHTML = html;

    if (props.hasOwnProperty('padding') && props.padding) {
        var padding = props.padding.split(',').map(function (a) {
            return a * 1;
        });

        linkElem.style.padding = padding[1] + 'px ' + padding[2] + 'px ' + padding[3] + 'px ' + padding[0] + 'px';
    } else {
        linkElem.style.padding = 0;
    }

    if (!props.stroke) {
        elem.style.border = '1px solid ' + window.__COM_COLOR_GROUP.BT_BORDER_COLOR;
    }

    if (!props.backgroundColor) {
        elem.style.backgroundColor = window.__COM_COLOR_GROUP.BT_BG_COLOR;
    }

    if (!props.color) {
        elem.style.color = window.__COM_COLOR_GROUP.BT_COLOR;
    }
};

module.exports = new Button();

/***/ }),

/***/ "./src/components/DropdownBox.js":
/*!***************************************!*\
  !*** ./src/components/DropdownBox.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function DropdownBox() {}

DropdownBox.prototype._equalOptions = function (a, b, j) {
     var stringA = a.join(j).trim();
     var stringB = b.join(j).trim();

     if (stringA == stringB) return true;
     return false;
};

DropdownBox.prototype._selectOptionByGUID = function (guid, optionElem) {
     var value = optionElem.getAttribute('option-value');
     var text = optionElem.getAttribute('option-text');

     var mainObject = this._getMainObject(guid);
     var mainObjectID = mainObject.id;

     if (!value || !text || !mainObjectID) return;

     var view = window.__VIEWS[mainObjectID];

     if (!view || !view.props) return;

     // Save Option Value
     if (!window.__COM_RENDERED.DB[guid]) window.__COM_RENDERED.DB[guid] = {};
     window.__COM_RENDERED.DB[guid].optionValue = value;

     // Update UI
     var optionsElem = this._getOptionsObject(guid);
     if (optionsElem && optionsElem.childNodes) {
          for (var i = 0; i < optionsElem.childNodes.length; i++) {
               if (optionsElem.childNodes[i].getAttribute('option-value') == value && optionsElem.childNodes[i].getAttribute('option-text') == text) {
                    optionsElem.childNodes[i].classList.add('selected');
               } else {
                    optionsElem.childNodes[i].classList.remove('selected');
               }
          }
     }

     var children = mainObject.childNodes;
     var article = null;

     if (children.length) {
          for (var _i = 0; _i < children.length; _i++) {
               if (children[_i].nodeName.toLowerCase() == 'article') {
                    article = children[_i];
                    break;
               }
          }
     }

     mainObject.style.color = window.__COM_COLOR_GROUP.ACTIVE_COLOR;
     if (article) article.innerText = text;

     // Event Trigger
     if (view.props.onSelect && typeof view.props.onSelect == "function") {
          view.props.onSelect(value);
     }
};

DropdownBox.prototype._isValidOV = function (optionValue, options) {
     var text = "";

     if (options && options.length > 0) {
          for (var i in options) {
               if (options[i].value == optionValue) {
                    text = options[i].text;
                    break;
               }
          }
     }

     return text;
};

DropdownBox.prototype._getMainObject = function (guid) {
     var query = '.' + window.__COM_CLASS_GROUP.DB + '[guid="' + guid + '"]';
     return document.body.querySelector(query);
};

DropdownBox.prototype._getFullBodyObject = function (guid) {
     var query = '.' + window.__COM_CLASS_GROUP.DB_FULL_BODY + '[guid="' + guid + '"]';
     return document.body.querySelector(query);
};

DropdownBox.prototype._getBodyObject = function (guid) {
     var query = '.' + window.__COM_CLASS_GROUP.DB_BODY + '[guid="' + guid + '"]';
     return document.body.querySelector(query);
};

DropdownBox.prototype._getOptionsObject = function (guid) {
     var query = '.' + window.__COM_CLASS_GROUP.DB_OPTIONS + '[guid="' + guid + '"]';
     return document.body.querySelector(query);
};

DropdownBox.prototype._renderOption = function (parentElem, props, guid, option, optionValue, renderEvent) {
     var elem = document.createElement('div');

     elem.className = window.__COM_CLASS_GROUP.DB_OPTION;
     elem.setAttribute('option-value', option.value);
     elem.setAttribute('option-text', option.text);

     var height = 50;
     if (props.optionHeight && !isNaN(props.optionHeight)) {
          height = parseFloat(props.optionHeight);
     }

     elem.style.height = height + 'px';

     if (props.fontSize) elem.style.fontSize = props.fontSize + 'px';
     if (props.fontFamily) elem.style.fontFamily = props.fontFamily;
     if (props.optionPadding) {
          var padding = props.optionPadding.split(',').map(function (a) {
               return a * 1;
          });

          elem.style.padding = padding[1] + 'px ' + padding[2] + 'px ' + padding[3] + 'px ' + padding[0] + 'px';
     }

     elem.setAttribute('guid', guid);

     if (optionValue && optionValue == option.value) {
          elem.classList.add('selected');
     } else {
          elem.classList.remove('selected');
     }

     var article = document.createElement('ARTICLE');
     article.innerText = option.text;

     elem.appendChild(article);
     parentElem.appendChild(elem);
};

DropdownBox.prototype._openByGUID = function (guid) {
     var object = this._getMainObject(guid);
     var bodyElem = this._getBodyObject(guid);

     if (!object || !bodyElem) return;

     object.classList.add('selected');
     bodyElem.style.display = 'block';
     window.__COM_ACTIVE.DB = guid;
};

DropdownBox.prototype._closeByGUID = function (guid) {
     var object = this._getMainObject(guid);
     var bodyElem = this._getBodyObject(guid);

     if (!object || !bodyElem) return;

     object.classList.remove('selected');
     bodyElem.style.display = 'none';
     window.__COM_ACTIVE.DB = '';
};

DropdownBox.prototype._renderMain = function (elem, props, renderEvent) {
     // GUID
     var guid = props.guid;
     if (elem.getAttribute('guid')) guid = elem.getAttribute('guid');

     var children = elem.childNodes;
     var article = null;

     if (children.length) {
          for (var i = 0; i < children.length; i++) {
               if (children[i].nodeName.toLowerCase() == 'article') {
                    article = children[i];
                    break;
               }
          }
     }

     if (!props.stroke) elem.style.border = "1px solid " + window.__COM_COLOR_GROUP.BORDER_COLOR;

     if (props.options) {
          var options = JSON.parse(props.options);
          var optionValue = null;

          if (props.optionValue) optionValue = props.optionValue;

          // Read option value
          if (window.__COM_RENDERED.DB[guid] && window.__COM_RENDERED.DB[guid].optionValue) optionValue = window.__COM_RENDERED.DB[guid].optionValue + "";

          if (optionValue) {
               var optionText = this._isValidOV(optionValue, options);

               if (optionText != "") {
                    elem.style.color = window.__COM_COLOR_GROUP.ACTIVE_COLOR;

                    if (article) article.innerText = optionText;
               }
          }
     }
     /* Default Styles End */
};

DropdownBox.prototype._renderFullBody = function (elem, props, renderEvent) {
     // GUID
     var guid = props.guid;
     if (elem.getAttribute('guid')) guid = elem.getAttribute('guid');

     var bodyElem = null;
     var optionsElement = null;

     if (renderEvent) {
          bodyElem = document.createElement('div');
          bodyElem.classList.add(window.__COM_CLASS_GROUP.DB_BODY);
          bodyElem.style.display = 'none';
          bodyElem.setAttribute('guid', guid);

          optionsElement = document.createElement('div');
          optionsElement.classList.add(window.__COM_CLASS_GROUP.DB_OPTIONS);
          optionsElement.setAttribute('guid', guid);

          bodyElem.appendChild(optionsElement);

          elem.appendChild(bodyElem);
     } else {
          bodyElem = this._getBodyObject(guid);

          optionsElement = this._getOptionsObject(guid);
     }

     if (!bodyElem || !optionsElement) return;

     // Options
     this._renderOptions(optionsElement, props, guid, renderEvent);
};

DropdownBox.prototype._renderOptions = function (elem, props, guid, renderEvent) {
     var previousOptions = [];
     var options = [];

     // Current Options
     if (props.options) {
          options = JSON.parse(props.options);
     }

     // Previous Options
     if (window.__COM_RENDERED.DB[guid] && window.__COM_RENDERED.DB[guid].options) {
          previousOptions = JSON.parse(window.__COM_RENDERED.DB[guid].options);
     }

     // Read option value
     var optionValue = null;
     if (props.optionValue) optionValue = props.optionValue;
     if (window.__COM_RENDERED.DB[guid] && window.__COM_RENDERED.DB[guid].optionValue) optionValue = window.__COM_RENDERED.DB[guid].optionValue + "";

     // Save Options
     if (!window.__COM_RENDERED.DB[guid]) window.__COM_RENDERED.DB[guid] = {};
     window.__COM_RENDERED.DB[guid].options = props.options;

     // Style
     var height = 50;
     if (props.optionHeight && !isNaN(props.optionHeight)) {
          height = parseFloat(props.optionHeight);
     }

     if (options.length > 5) {
          elem.style.maxHeight = height * 5 + 'px';
     } else {
          elem.style.maxHeight = 'auto';
     }

     if (!this._equalOptions(previousOptions, options, guid)) {
          // Options Changed - Need to Re-render
          elem.innerHTML = '';

          if (options && options.length > 0) {
               for (var i = 0; i < options.length; i++) {
                    var option = options[i];

                    this._renderOption(elem, props, guid, option, optionValue, renderEvent);
               }
          }
     }
};

module.exports = new DropdownBox();

/***/ }),

/***/ "./src/components/DropdownSearchBox.js":
/*!*********************************************!*\
  !*** ./src/components/DropdownSearchBox.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function DropdownSearchBox() {}

DropdownSearchBox.prototype._equalOptions = function (a, b, j) {
     var stringA = a.join(j).trim();
     var stringB = b.join(j).trim();

     if (stringA == stringB) return true;
     return false;
};

DropdownSearchBox.prototype._selectOptionByGUID = function (guid, optionElem) {
     var value = optionElem.getAttribute('option-value');
     var text = optionElem.getAttribute('option-text');

     var mainObject = this._getMainObject(guid);
     var mainObjectID = mainObject.id;

     if (!value || !text || !mainObjectID) return;

     var view = window.__VIEWS[mainObjectID];

     if (!view || !view.props) return;

     // Save Option Value
     if (!window.__COM_RENDERED.DSB[guid]) window.__COM_RENDERED.DSB[guid] = {};
     window.__COM_RENDERED.DSB[guid].optionValue = value;

     // Update UI
     var optionsElem = this._getOptionsObject(guid);
     if (optionsElem && optionsElem.childNodes) {
          for (var i = 0; i < optionsElem.childNodes.length; i++) {
               if (optionsElem.childNodes[i].getAttribute('option-value') == value && optionsElem.childNodes[i].getAttribute('option-text') == text) {
                    optionsElem.childNodes[i].classList.add('selected');
               } else {
                    optionsElem.childNodes[i].classList.remove('selected');
               }
          }
     }

     var children = mainObject.childNodes;
     var article = null;

     if (children.length) {
          for (var _i = 0; _i < children.length; _i++) {
               if (children[_i].nodeName.toLowerCase() == 'article') {
                    article = children[_i];
                    break;
               }
          }
     }

     mainObject.style.color = window.__COM_COLOR_GROUP.ACTIVE_COLOR;
     if (article) article.innerText = text;

     // Event Trigger
     if (view.props.onSelect && typeof view.props.onSelect == "function") {
          view.props.onSelect(value);
     }
};

DropdownSearchBox.prototype._isValidOV = function (optionValue, options) {
     var optionText = "";

     if (options && options.length > 0) {
          for (var i in options) {
               if (options[i].value == optionValue) {
                    optionText = options[i].text;
                    break;
               }
          }
     }

     return optionText;
};

DropdownSearchBox.prototype._getMainObject = function (guid) {
     var query = '.' + window.__COM_CLASS_GROUP.DSB + '[guid="' + guid + '"]';
     return document.body.querySelector(query);
};

DropdownSearchBox.prototype._getFullBodyObject = function (guid) {
     var query = '.' + window.__COM_CLASS_GROUP.DSB_FULL_BODY + '[guid="' + guid + '"]';
     return document.body.querySelector(query);
};

DropdownSearchBox.prototype._getBodyObject = function (guid) {
     var query = '.' + window.__COM_CLASS_GROUP.DSB_BODY + '[guid="' + guid + '"]';
     return document.body.querySelector(query);
};

DropdownSearchBox.prototype._getSearchWrapObject = function (guid) {
     var query = '.' + window.__COM_CLASS_GROUP.DSB_SEARCH_WRAP + '[guid="' + guid + '"]';
     return document.body.querySelector(query);
};

DropdownSearchBox.prototype._getSearchObject = function (guid) {
     var query = '.' + window.__COM_CLASS_GROUP.DSB_SEARCH + '[guid="' + guid + '"]';
     return document.body.querySelector(query);
};

DropdownSearchBox.prototype._getOptionsObject = function (guid) {
     var query = '.' + window.__COM_CLASS_GROUP.DSB_OPTIONS + '[guid="' + guid + '"]';
     return document.body.querySelector(query);
};

DropdownSearchBox.prototype._filterOptions = function (guid, query) {
     var optionsElem = this._getOptionsObject(guid);

     if (!optionsElem) return;

     query = query.toLowerCase();

     if (optionsElem.childNodes) {
          for (var i = 0; i < optionsElem.childNodes.length; i++) {
               var optionElem = optionsElem.childNodes[i];
               var text = optionElem.getAttribute('option-text');

               if (text) {
                    text = text.toLowerCase();

                    if (text.indexOf(query) !== -1) {
                         optionElem.style.display = 'flex';
                    } else {
                         optionElem.style.display = 'none';
                    }
               }
          }
     }
};

DropdownSearchBox.prototype._renderOption = function (parentElem, props, guid, option, optionValue, renderEvent) {
     var elem = document.createElement('div');

     elem.className = window.__COM_CLASS_GROUP.DSB_OPTION;
     elem.setAttribute('option-value', option.value);
     elem.setAttribute('option-text', option.text);

     var height = 50;
     if (props.optionHeight && !isNaN(props.optionHeight)) {
          height = parseFloat(props.optionHeight);
     }

     elem.style.height = height + 'px';

     if (props.fontSize) elem.style.fontSize = props.fontSize + 'px';
     if (props.fontFamily) elem.style.fontFamily = props.fontFamily;
     if (props.optionPadding) {
          var padding = props.optionPadding.split(',').map(function (a) {
               return a * 1;
          });

          elem.style.padding = padding[1] + 'px ' + padding[2] + 'px ' + padding[3] + 'px ' + padding[0] + 'px';
     }

     elem.setAttribute('guid', guid);

     if (optionValue && optionValue == option.value) {
          elem.classList.add('selected');
     } else {
          elem.classList.remove('selected');
     }

     var article = document.createElement('ARTICLE');
     article.innerText = option.text;

     elem.appendChild(article);
     parentElem.appendChild(elem);
};

DropdownSearchBox.prototype._openByGUID = function (guid) {
     var object = this._getMainObject(guid);
     var bodyElem = this._getBodyObject(guid);

     if (!object || !bodyElem) return;

     object.classList.add('selected');
     bodyElem.style.display = 'block';
     window.__COM_ACTIVE.DSB = guid;
};

DropdownSearchBox.prototype._closeByGUID = function (guid) {
     var object = this._getMainObject(guid);
     var bodyElem = this._getBodyObject(guid);

     if (!object || !bodyElem) return;

     object.classList.remove('selected');
     bodyElem.style.display = 'none';
     window.__COM_ACTIVE.DSB = '';
};

DropdownSearchBox.prototype._renderMain = function (elem, props, renderEvent) {
     // GUID
     var guid = props.guid;
     if (elem.getAttribute('guid')) guid = elem.getAttribute('guid');

     var children = elem.childNodes;
     var article = null;

     if (children.length) {
          for (var i = 0; i < children.length; i++) {
               if (children[i].nodeName.toLowerCase() == 'article') {
                    article = children[i];
                    break;
               }
          }
     }

     if (!props.stroke) elem.style.border = "1px solid " + window.__COM_COLOR_GROUP.BORDER_COLOR;

     if (props.options) {
          var options = JSON.parse(props.options);
          var optionValue = null;

          if (props.optionValue) optionValue = props.optionValue;

          // Read option value
          if (window.__COM_RENDERED.DSB[guid] && window.__COM_RENDERED.DSB[guid].optionValue) optionValue = window.__COM_RENDERED.DSB[guid].optionValue + "";

          if (optionValue) {
               var optionText = this._isValidOV(optionValue, options);

               if (optionText != "") {
                    elem.style.color = window.__COM_COLOR_GROUP.ACTIVE_COLOR;

                    if (article) article.innerText = optionText;
               }
          }
     }
     /* Default Styles End */
};

DropdownSearchBox.prototype._renderFullBody = function (elem, props, renderEvent) {
     // GUID
     var guid = props.guid;
     if (elem.getAttribute('guid')) guid = elem.getAttribute('guid');

     var bodyElem = null;
     var searchWrapElement = null;
     var searchElement = null;
     var optionsElement = null;

     if (renderEvent) {
          bodyElem = document.createElement('div');
          bodyElem.classList.add(window.__COM_CLASS_GROUP.DSB_BODY);
          bodyElem.style.display = 'none';
          bodyElem.setAttribute('guid', guid);

          searchWrapElement = document.createElement('div');
          searchWrapElement.classList.add(window.__COM_CLASS_GROUP.DSB_SEARCH_WRAP);
          searchWrapElement.setAttribute('guid', guid);

          searchElement = document.createElement('INPUT');
          searchElement.setAttribute('type', 'text');
          searchElement.setAttribute('placeholder', 'Search...');
          searchElement.classList.add(window.__COM_CLASS_GROUP.DSB_SEARCH);
          searchElement.setAttribute('guid', guid);

          searchWrapElement.appendChild(searchElement);

          bodyElem.appendChild(searchWrapElement);

          optionsElement = document.createElement('div');
          optionsElement.classList.add(window.__COM_CLASS_GROUP.DSB_OPTIONS);
          optionsElement.setAttribute('guid', guid);

          bodyElem.appendChild(optionsElement);

          elem.appendChild(bodyElem);
     } else {
          bodyElem = this._getBodyObject(guid);

          searchWrapElement = this._getSearchWrapObject(guid);

          searchElement = this._getSearchObject(guid);

          optionsElement = this._getOptionsObject(guid);
     }

     if (!bodyElem || !searchWrapElement || !searchElement || !optionsElement) return;

     // Styles
     if (props.fontSize) searchElement.style.fontSize = props.fontSize + 'px';
     if (props.fontFamily) searchElement.style.fontFamily = props.fontFamily;

     // Options
     this._renderOptions(optionsElement, props, guid, renderEvent);
};

DropdownSearchBox.prototype._renderOptions = function (elem, props, guid, renderEvent) {
     var previousOptions = [];
     var options = [];

     // Current Options
     if (props.options) {
          options = JSON.parse(props.options);
     }

     // Previous Options
     if (window.__COM_RENDERED.DSB[guid] && window.__COM_RENDERED.DSB[guid].options) {
          previousOptions = JSON.parse(window.__COM_RENDERED.DSB[guid].options);
     }

     // Read option value
     var optionValue = null;
     if (props.optionValue) optionValue = props.optionValue;
     if (window.__COM_RENDERED.DSB[guid] && window.__COM_RENDERED.DSB[guid].optionValue) optionValue = window.__COM_RENDERED.DSB[guid].optionValue + "";

     // Save Options
     if (!window.__COM_RENDERED.DSB[guid]) window.__COM_RENDERED.DSB[guid] = {};
     window.__COM_RENDERED.DSB[guid].options = props.options;

     // Style
     var height = 50;
     if (props.optionHeight && !isNaN(props.optionHeight)) {
          height = parseFloat(props.optionHeight);
     }

     if (options.length > 5) {
          elem.style.maxHeight = height * 5 + 'px';
     } else {
          elem.style.maxHeight = 'auto';
     }

     if (!this._equalOptions(previousOptions, options, guid)) {
          // Options Changed - Need to Re-render
          elem.innerHTML = '';

          if (options && options.length > 0) {
               for (var i = 0; i < options.length; i++) {
                    var option = options[i];

                    this._renderOption(elem, props, guid, option, optionValue, renderEvent);
               }
          }
     }
};

module.exports = new DropdownSearchBox();

/***/ }),

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function NavBar() {}

NavBar.prototype._getActiveRouteItem = function (guid) {
     var query = '.' + window.__COM_CLASS_GROUP.NAVBAR_ITEM_WITH_SUB + '.selected[guid="' + guid + '"]';
     return document.body.querySelector(query);
};

NavBar.prototype._getMainObject = function (guid) {
     var query = '.' + window.__COM_CLASS_GROUP.NAVBAR + '[guid="' + guid + '"]';
     return document.body.querySelector(query);
};

NavBar.prototype._openByGUID = function (guid, parentElem) {
     parentElem.classList.add('selected');
     window.__COM_ACTIVE.NAVBAR = guid;
};

NavBar.prototype._closeByGUID = function (guid) {
     var object = this._getActiveRouteItem(guid);
     if (object) object.classList.remove('selected');

     window.__COM_ACTIVE.NAVBAR = '';
};

NavBar.prototype._selectRouteByGUID = function (guid, elem) {
     var key = elem.getAttribute('route-key');
     var text = elem.getAttribute('route-text');

     var object = this._getMainObject(guid);
     var objectID = object.id;

     if (!key || !text || !objectID) return;

     var view = window.__VIEWS[objectID];

     if (!view || !view.props) return;

     /* Update UI */
     if (window.__COM_RENDERED.NAVBAR[guid] && window.__COM_RENDERED.NAVBAR[guid].activeElem) window.__COM_RENDERED.NAVBAR[guid].activeElem.classList.remove('selected');

     elem.classList.add('selected');

     if (!window.__COM_RENDERED.NAVBAR[guid]) window.__COM_RENDERED.NAVBAR[guid] = {};

     window.__COM_RENDERED.NAVBAR[guid].activeElem = elem;
     window.__COM_RENDERED.NAVBAR[guid].defaultValue = key;

     /* Event Trigger */
     if (view.props.onSelect && typeof view.props.onSelect == "function") {
          view.props.onSelect(key);
     }
};

NavBar.prototype._renderRoute = function (parentElem, props, guid, route, renderEvent) {
     if (!route.key || !route.text) return;

     var elem = document.createElement('LI');
     elem.classList.add(window.__COM_CLASS_GROUP.NAVBAR_ITEM);

     elem.setAttribute('route-key', route.key);
     elem.setAttribute('route-text', route.text);
     elem.setAttribute('guid', guid);

     var defaultValue = null;
     if (props.defaultValue) defaultValue = props.defaultValue;
     if (window.__COM_RENDERED.NAVBAR[guid] && window.__COM_RENDERED.NAVBAR[guid].defaultValue) defaultValue = window.__COM_RENDERED.NAVBAR[guid].defaultValue + "";

     if (defaultValue && defaultValue == route.key) {
          elem.classList.add('selected');

          // Save
          if (!window.__COM_RENDERED.NAVBAR[guid]) window.__COM_RENDERED.NAVBAR[guid] = {};

          window.__COM_RENDERED.NAVBAR[guid].activeElem = elem;
          window.__COM_RENDERED.NAVBAR[guid].defaultValue = route.key;
     } else elem.classList.remove('selected');

     var article = document.createElement('article');
     if (props.height && !isNaN(props.height)) article.style.lineHeight = props.height + 'px';

     elem.appendChild(article);

     if (route.subroutes && route.subroutes.length > 0) {
          article.innerHTML = route.text + ' &#9662;';
          elem.classList.add(window.__COM_CLASS_GROUP.NAVBAR_ITEM_WITH_SUB);

          var virtualElem = document.createElement('UL');
          virtualElem.classList.add(window.__COM_CLASS_GROUP.NAVBAR_SUB);

          if (route.navDirection && route.navDirection == 'from_right') virtualElem.classList.add(window.__COM_CLASS_GROUP.NAVBAR_SUB_RIGHT);

          virtualElem.setAttribute('guid', guid);

          if (props.translationZ_nav) virtualElem.style.zIndex = props.translationZ_nav;

          elem.appendChild(virtualElem);

          for (var i = 0; i < route.subroutes.length; i++) {
               var subroute = route.subroutes[i];

               this._renderSubRoute(virtualElem, props, guid, subroute, renderEvent);
          }
     } else {
          article.innerHTML = route.text;
     }

     parentElem.appendChild(elem);
};

NavBar.prototype._renderSubRoute = function (parentElem, props, guid, route, renderEvent) {
     if (!route.key || !route.text) return;

     var elem = document.createElement('LI');
     elem.classList.add(window.__COM_CLASS_GROUP.NAVBAR_SUB_ITEM);

     elem.setAttribute('route-key', route.key);
     elem.setAttribute('route-text', route.text);
     elem.setAttribute('guid', guid);

     var defaultValue = null;
     if (props.defaultValue) defaultValue = props.defaultValue;
     if (window.__COM_RENDERED.NAVBAR[guid] && window.__COM_RENDERED.NAVBAR[guid].defaultValue) defaultValue = window.__COM_RENDERED.NAVBAR[guid].defaultValue + "";

     if (defaultValue && defaultValue == route.key) {
          elem.classList.add('selected');

          // Save
          if (!window.__COM_RENDERED.NAVBAR[guid]) window.__COM_RENDERED.NAVBAR[guid] = {};

          window.__COM_RENDERED.NAVBAR[guid].activeElem = elem;
          window.__COM_RENDERED.NAVBAR[guid].defaultValue = route.key;
     } else {
          elem.classList.remove('selected');
     }

     var article = document.createElement('article');
     article.innerHTML = route.text;

     elem.appendChild(article);
     parentElem.appendChild(elem);
};

NavBar.prototype._renderMain = function (elem, props, renderEvent) {
     if (!renderEvent) return;

     // GUID
     var guid = props.guid;
     if (elem.getAttribute('guid')) guid = elem.getAttribute('guid');

     // ROUTES
     var routes = [];
     if (props && props.routes) routes = JSON.parse(props.routes);

     elem.innerHTML = '';
     var virtualElem = document.createElement('UL');
     elem.appendChild(virtualElem);

     if (routes.length > 0) {
          for (var i = 0; i < routes.length; i++) {
               var route = routes[i];

               this._renderRoute(virtualElem, props, guid, route, renderEvent);
          }
     }
};

module.exports = new NavBar();

/***/ }),

/***/ "./src/components/SwitchButton.js":
/*!****************************************!*\
  !*** ./src/components/SwitchButton.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function SwitchButton() {}

SwitchButton.prototype._renderMain = function (elem, props, renderEvent) {
     if (renderEvent) {
          elem.innerHTML = '';

          var guid = props.guid;
          if (elem.getAttribute('guid')) guid = elem.getAttribute('guid');

          this._renderStyle(elem, props, guid);

          var virtualElem = document.createElement('LABEL');
          virtualElem.classList.add(window.__COM_CLASS_GROUP.SWITCH_BODY);
          virtualElem.setAttribute('guid', guid);

          elem.appendChild(virtualElem);

          this._renderSlider(virtualElem, props, guid, renderEvent);
     }
};

SwitchButton.prototype._renderSlider = function (parentElem, props, guid, renderEvent) {
     var selectedDefault = false;
     if (props.hasOwnProperty('selectedDefault')) selectedDefault = props.selectedDefault;

     var checkbox = document.createElement('INPUT');
     checkbox.setAttribute('type', 'checkbox');

     if (selectedDefault) {
          checkbox.setAttribute('checked', 'checked');
     }

     var elem = document.createElement('SPAN');
     elem.classList.add(window.__COM_CLASS_GROUP.SWITCH_SLIDER);

     parentElem.appendChild(checkbox);
     parentElem.appendChild(elem);

     // Events
     if (renderEvent && props.onSwitch && typeof props.onSwitch == "function") {
          checkbox.addEventListener('change', function () {
               props.onSwitch(this.checked);
          });
     }
};

SwitchButton.prototype._renderStyle = function (parentElem, props, guid) {
     var gap = 4;
     var parentWidth = parentElem.offsetWidth;
     var parentHeight = parentElem.offsetHeight;

     var size = Math.min(parentWidth, parentHeight);
     var actualSize = size - 2 * gap;
     if (actualSize < 0) {
          actualSize = size;
          gap = 0;
     }

     var tx = parentWidth - 2 * gap - actualSize;
     if (tx < 0) tx = 0;

     var styleElem = document.createElement('style');
     styleElem.type = 'text/css';

     var css = '';
     css += '.' + window.__COM_CLASS_GROUP.SWITCH_BODY + '[guid="' + guid + '"] .' + window.__COM_CLASS_GROUP.SWITCH_SLIDER + '{border-radius: ' + size + 'px} ';
     css += '.' + window.__COM_CLASS_GROUP.SWITCH_BODY + '[guid="' + guid + '"] .' + window.__COM_CLASS_GROUP.SWITCH_SLIDER + ':before {border-radius: 50%; content: ""; position: absolute; width: ' + actualSize + 'px; height: ' + actualSize + 'px; left: ' + gap + 'px; bottom: ' + gap + 'px; background-color: white; -webkit-transition: .4s; transition: .4s;} ';
     css += '.' + window.__COM_CLASS_GROUP.SWITCH_BODY + '[guid="' + guid + '"] input:checked + .' + window.__COM_CLASS_GROUP.SWITCH_SLIDER + ':before {transform: translateX(' + tx + 'px);} ';

     styleElem.appendChild(document.createTextNode(css));
     document.head.appendChild(styleElem);
};

module.exports = new SwitchButton();

/***/ }),

/***/ "./src/compute.js":
/*!************************!*\
  !*** ./src/compute.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

/*
  ViewContext of the Parent.f
  Obj holds the available width and height of it's parent container
  and x & y offset for it's children
*/
function viewCtxObj(view) {
  var props = view.props;
  var obj = {
    w: props.w * 1,
    h: props.h * 1,
    width: props.w * 1
  };

  view.children.forEach(function (child) {
    child.props.w = child.props.width;
    child.props.h = child.props.height;
  });

  return obj;
}

/*
  Returns true if container has a child with match_parent for a
  given dimension (width or height)
*/
function hasMatchParentChild(childs, dimen) {
  for (var i = 0; i < childs.length; i++) {
    var childProp = childs[i].props;

    if (childProp[dimen] && childProp[dimen] == "match_parent") {
      return true;
    }
  }
  return false;
}

/*
  Returns true if container has weighted child
*/
function hasWeightChild(type, childs) {
  if (type != "linearLayout") {
    return false;
  }

  for (var i = 0; i < childs.length; i++) {
    var child = childs[i].props;

    if (child.weight && parseInt(child.weight) > 0) {
      return true;
    }
  }
  return false;
}

function computeRelativeLayout(view) {
  var viewCtx = viewCtxObj(view);
  var children = view.children;

  children.forEach(function (child) {
    var props = child.props;

    props.absolute = true;
    props.fromTop = 0;
    props.fromBottom = 'auto';
    props.fromLeft = 0;
    props.fromRight = 'auto';

    if (props.hasOwnProperty('alignParentLeft') && props.alignParentLeft) {
      props.fromLeft = 0;
      props.fromRight = 'auto';
    }
    if (props.hasOwnProperty('alignParentRight') && props.alignParentRight) {
      props.fromLeft = 'auto';
      props.fromRight = 0;
    }

    if (props.hasOwnProperty('alignParentBottom') && props.alignParentBottom) {
      props.fromTop = 'auto';
      props.fromBottom = 0;
    }
  });
}

function computeLinearlayout(view) {
  var viewCtx = viewCtxObj(view);
  var parentProps = view.props;
  var children = view.children;
  var isHorizontal = parentProps.orientation === "vertical" ? false : true;

  var activeDimen = isHorizontal ? "w" : "h";
  var passiveDimen = isHorizontal ? "h" : "w";

  var hasWeight = hasWeightChild(view.type, children);
  var hasMatchParent = hasMatchParentChild(children, activeDimen);

  if (hasWeight && hasMatchParent) {
    // We can't use both at the same time
    return;
  }

  /* Initialize */
  children.forEach(function (child) {
    var props = child.props;

    if (props.hasOwnProperty("activeDimen")) delete props["activeDimen"];
    if (props.hasOwnProperty("activeWeight")) delete props["activeWeight"];
  });
  /* Initialize End */

  if (hasMatchParent || hasWeight) {
    var first = true;
    /* Iterate Child */
    children.forEach(function (child) {
      var props = child.props;

      if (props.hasOwnProperty(activeDimen) && props[activeDimen] == 'match_parent') {
        props['activeDimen'] = activeDimen;

        if (first) {
          props['activeWeight'] = 1;
          first = false;
        } else {
          props['activeWeight'] = 0;
        }
      } else {
        if (props.hasOwnProperty('weight') && !isNaN(props['weight'])) {
          var weight = parseFloat(props['weight']);

          if (weight > 0) {
            props['activeDimen'] = activeDimen;
            props['activeWeight'] = weight;
          }
        }
      }
    });
    /* Iterate Child End */
  }
} // End Compute LinearLayout

function computeChildDimens(view) {
  if (view.type == "linearLayout") {
    computeLinearlayout(view);
  } else if (view.type == "scrollView" || view.type == "listView") {
    view.props.orientation = "vertical";
    computeLinearlayout(view);
  } else if (view.type == "horizontalScrollView") {
    view.props.orientation = "horizontal";
    computeLinearlayout(view);
  } else if (view.type == "relativeLayout") {
    computeRelativeLayout(view);
  } else {
    // Do Nothing
  }

  return view;
}

module.exports = {
  computeChildDimens: computeChildDimens
};

/***/ }),

/***/ "./src/doms/index.js":
/*!***************************!*\
  !*** ./src/doms/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

function run() {
  if (false) {} else if (true) {
    return __webpack_require__(/*! ./web */ "./src/doms/web.js");
  } else {}
}

module.exports = run();

/***/ }),

/***/ "./src/doms/web.js":
/*!*************************!*\
  !*** ./src/doms/web.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

var parseParams = __webpack_require__(/*! ../helpers/web */ "./src/helpers/web/index.js").parseParams;

Array.prototype.flatten = function () {
  return this.reduce(function (prev, cur) {
    var more = [].concat(cur).some(Array.isArray);
    return prev.concat(more ? cur.flatten() : cur);
  }, []);
};

module.exports = function (type, props) {
  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  children = children.flatten();

  if (!props) props = {};

  if (typeof type === "string") {
    props = parseParams(type, props);

    var obj = {
      props: props,
      type: type,
      children: children
    };

    window.__VIEWS[props.id] = obj;
    window.__VIEW_DIMENSIONS[props.id] = null;
    return obj;
  } else {
    return new type(props, children);
  }
};

/***/ }),

/***/ "./src/handler.js":
/*!************************!*\
  !*** ./src/handler.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

module.exports = {
  handle: function handle(ui, callback) {
    if (!ui) {
      return;
    }
    if (ui.render) {
      if (typeof Android === "undefined") throw new Error("Android is undefined");

      if (true) return Android.Render(ui.render, null);else {}
    }

    if (ui.runInUI) {
      Android.runInUI(ui.runInUI, null);
    }
    if (ui.addViewToParent) {
      Android.addViewToParent(ui.addViewToParent.parentId, JSON.stringify(ui.addViewToParent.jsx), ui.addViewToParent.index, null);
    }
  }
};

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

// Following functions are used by WEB and IOS Render
function cacheDimen(view) {
  var props = view.props;
  var dimen = {
    w: props.w,
    h: props.h,
    x: props.x,
    y: props.y,
    gravity: props.gravity,
    padding: props.padding,
    orientation: props.orientation,
    stroke: props.stroke ? props.stroke.split(",")[0] * 1 : 0
  };
  window.__VIEW_DIMENSIONS[props.id] = dimen;
}

function shouldMove(view) {
  var props = view.props;
  var dimen = {
    w: props.w,
    h: props.h,
    x: props.x,
    y: props.y
  };
  var cachedDimen = window.__VIEW_DIMENSIONS[props.id];
  var changed = false;
  if (!cachedDimen) return dimen;
  for (var key in dimen) {
    if (cachedDimen[key] != dimen[key]) {
      dimen.id = props.id;
      changed = true;
    }
  }
  if (changed) return dimen;
  return null;
}

function getOS() {
  var userAgent = navigator.userAgent;
  if (!userAgent) return console.error(new Error("UserAgent is null"));
  if (userAgent.includes("Android") && userAgent.includes("Version")) return "ANDROID";
  if ((userAgent.includes("iPhone") || userAgent.includes("iPad")) && !userAgent.includes("Version")) return "IOS";
  return "WEB";
}

function clearViewExternals(view) {
  if (!view) return;

  delete window.__VIEWS[view.props.id];
  delete window.__VIEW_DIMENSIONS[view.props.id];

  if (__OBSERVERS[view.props.id]) delete window.__OBSERVERS[view.props.id];

  view.children.forEach(clearViewExternals);
}

// use: clone( <thing to copy> ) returns <new copy>
function clone(o, m) {
  // return non object values
  if ('object' !== (typeof o === "undefined" ? "undefined" : _typeof(o))) return o;
  // m: a map of old refs to new object refs to stop recursion
  if ('object' !== (typeof m === "undefined" ? "undefined" : _typeof(m)) || null === m) m = new WeakMap();
  var n = m.get(o);
  if ('undefined' !== typeof n) return n;
  // shallow/leaf clone object
  var c = Object.getPrototypeOf(o).constructor;
  // TODO: specialize copies for expected built in types i.e. Date etc
  switch (c) {
    // shouldn't be copied, keep reference
    case Boolean:
    case Error:
    case Function:
    case Number:
    case Promise:
    case String:
    case Symbol:
    case WeakMap:
    case WeakSet:
      n = o;
      break;
    // array like/collection objects
    case Array:
      m.set(o, n = o.slice(0));
      // recursive copy for child objects
      n.forEach(function (v, i) {
        if ('object' === (typeof v === "undefined" ? "undefined" : _typeof(v))) n[i] = clone(v, m);
      });
      break;
    case ArrayBuffer:
      m.set(o, n = o.slice(0));
      break;
    case DataView:
      m.set(o, n = new c(clone(o.buffer, m), o.byteOffset, o.byteLength));
      break;
    case Map:
    case Set:
      m.set(o, n = new c(clone(Array.from(o.entries()), m)));
      break;
    case Int8Array:
    case Uint8Array:
    case Uint8ClampedArray:
    case Int16Array:
    case Uint16Array:
    case Int32Array:
    case Uint32Array:
    case Float32Array:
    case Float64Array:
      m.set(o, n = new c(clone(o.buffer, m), o.byteOffset, o.length));
      break;
    // use built in copy constructor
    case Date:
    case RegExp:
      m.set(o, n = new c(o));
      break;
    // fallback generic object copy
    default:
      m.set(o, n = Object.assign(new c(), o));
      // recursive copy for child objects
      for (c in n) {
        if ('object' === _typeof(n[c])) n[c] = clone(n[c], m);
      }}
  return n;
}

function merge() {
  var obj = {},
      i = 0,
      il = arguments.length,
      key;
  for (; i < il; i++) {
    for (key in arguments[i]) {
      if (arguments[i].hasOwnProperty(key)) {
        obj[key] = arguments[i][key];
      }
    }
  }
  return obj;
};

module.exports = {
  shouldMove: shouldMove,
  cacheDimen: cacheDimen,
  getOS: getOS,
  merge: merge,
  clearViewExternals: clearViewExternals,
  clone: clone
};

/***/ }),

/***/ "./src/helpers/common/callbackMapper.js":
/*!**********************************************!*\
  !*** ./src/helpers/common/callbackMapper.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Copyright (c) 2012-2017 "JUSPAY Technologies"
 * JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
 *
 * This file is part of JUSPAY Platform.
 *
 * JUSPAY Platform is free software: you can redistribute it and/or modify
 * it for only educational purposes under the terms of the GNU Affero General
 * Public License (GNU AGPL) as published by the Free Software Foundation,
 * either version 3 of the License, or (at your option) any later version.
 * For Enterprise/Commerical licenses, contact <info@juspay.in>.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
 * be liable for all damages without limitation, which is caused by the
 * ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
 * damages, claims, cost, including reasonable attorney fee claimed on Juspay.
 * The end user has NO right to claim any indemnification based on its use
 * of Licensed Software. See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
 */

module.exports.map = function (fn) {
  if (typeof window.__FN_INDEX !== 'undefined' && window.__FN_INDEX !== null) {
    var proxyFnName = 'F' + window.__FN_INDEX;
    if (window.__payload && window.__payload.service) {
      proxyFnName = window.__payload.service + "_" + proxyFnName;
    }
    window.__PROXY_FN[proxyFnName] = fn;
    window.__FN_INDEX++;
    return proxyFnName;
  } else {
    throw new Error("Please initialise window.__FN_INDEX = 0 in index.js of your project.");
  }
};

/***/ }),

/***/ "./src/helpers/common/index.js":
/*!*************************************!*\
  !*** ./src/helpers/common/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

module.exports = {
	callbackMapper: __webpack_require__(/*! ./callbackMapper */ "./src/helpers/common/callbackMapper.js")
};

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

var helpers = {
	common: __webpack_require__(/*! ./common */ "./src/helpers/common/index.js")
};

if (false) {} else if (true) {
	helpers.web = __webpack_require__(/*! ./web */ "./src/helpers/web/index.js");
} else {}

module.exports = helpers;

/***/ }),

/***/ "./src/helpers/web/index.js":
/*!**********************************!*\
  !*** ./src/helpers/web/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

module.exports = {
	parseParams: __webpack_require__(/*! ./parseParams */ "./src/helpers/web/parseParams.js")
};

/***/ }),

/***/ "./src/helpers/web/parseParams.js":
/*!****************************************!*\
  !*** ./src/helpers/web/parseParams.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

Array.prototype.rotate = function () {
  // save references to array functions to make lookup faster
  var push = Array.prototype.push,
      splice = Array.prototype.splice;

  return function (count) {
    var len = this.length >>> 0,
        // convert to uint
    count = count >> 0; // convert to int

    // convert count to value in range [0, len)
    count = (count % len + len) % len;

    // use splice.call() instead of this.splice() to make function generic
    push.apply(this, splice.call(this, 0, count));
    return this;
  };
}();

function flattenObject(ob) {
  var toReturn = {};
  for (var i in ob) {
    if (!ob.hasOwnProperty(i)) continue;
    if (_typeof(ob[i]) == 'object') {
      var flatObject = flattenObject(ob[i]);
      for (var x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;
        if (typeof flatObject[x] !== "undefined") toReturn[x] = flatObject[x];
      }
    } else {
      toReturn[i] = ob[i];
    }
  }

  return toReturn;
}

function parseColors(color) {
  if (color.length < 8) return color;

  if (color.indexOf("rgba") !== -1 || color.indexOf("rgb") !== -1) return color;

  var alpha = parseInt(color.substring(1, 3), 16);
  alpha = (alpha / 255).toFixed(2);

  var hexColor = color.substring(3, 9);
  var rgbaColor = "rgba(" + convertHexToRgb(hexColor) + "," + alpha + ")";

  return rgbaColor;
}

function lookAndReplaceProp(str, match, val) {
  var output = match + "(" + val + "px)";
  if (!str) return output;
  var start = str.indexOf(match);
  if (start >= 0) {
    var end = str.substr(start).indexOf(")");
    if (end >= 0) {
      var found = str.substr(start, end + 1);
      return str.replace(found, output);
    } else {
      return str + output;
    }
  } else return str + output;
}

function parseLayoutProps(type, config, key) {
  var isMobile = window.innerWidth < 550;
  if (typeof config[key] == "undefined" || config[key] == null) {
    delete config[key];
    return;
  }

  if (!config.style) {
    var t = "";
    var ele_id = document.getElementById(config.id);
    if (ele_id) {
      if (ele_id.style) t = ele_id.style.transform ? ele_id.style.transform : "";
    }
    config.style = {};
    config.style.transform = t;
    config.animation = {};
    config.animation.transform = "";
  }

  if (!config.attributes) config.attributes = {};

  if (!config.style.className) config.style.className = "";

  if (key == "onClick" || key == "onClickEvent") {
    if (!isMobile && !config.cursorType) {
      config.style.cursor = "pointer";
    }
  }
  if (key == "cursorType") {
    config.style.cursor = config.cursorType;
  }
  if (key == "textSize") config.style.fontSize = config.textSize + 'px';
  if (key == 'fontSize') config.style.fontSize = config.fontSize + 'px';

  if (key == 'url') config.attributes.src = config.url;

  /*if (key == "imageUrl"){
    let imageUrl = config.imageUrl;
    
    if(config.rawData) {
      // Do nothing
    } else {
      let temp = imageUrl.split('.');
      let ext = '';
      if(temp && temp.length > 0)
        ext = temp[temp.length - 1];
      
      let exts = ["jpeg", "jpg", "png", "bmp", "svg", "gif"];
      ext = ext.toLowerCase();
       if(!exts.includes(ext)) {
        imageUrl += '.png';
      }
    }
     config.attributes.src = imageUrl;
  }*/

  if (key == "backgroundColor") {
    config.style.backgroundColor = parseColors(config.backgroundColor);
  }

  if (key == "background") {
    config.style.background = config.background;
  }
  if (key == "backgroundDrawable") {
    config.style["background-image"] = "url('" + config.backgroundDrawable + "')";
  }

  if (key == "color") {
    config.style.color = parseColors(config.color);
  }

  if (key == "position") {
    config.style.position = config.position;
  }

  if (key == "bottomFixed") {
    config.style.bottom = config.bottomFixed;
  }
  if (key == "topFixed") {
    config.style.top = config.topFixed;
  }
  if (key == "leftFixed") {
    config.style.left = config.leftFixed;
  }
  if (key == "rightFixed") {
    config.style.right = config.rightFixed;
  }

  if (key == "zIndex") {
    config.style["z-index"] = config.zIndex;
  }

  if (key == "autofocus") {
    var isIPhone = navigator.userAgent.indexOf("iPhone") !== -1;
    if (config.autofocus && !isIPhone) {
      config.attributes["autofocus"] = "autofocus";
    }
  }
  if (key == "focus") {
    if (config.focus && config.id) {
      var doc = document.getElementById(config.id);
      if (doc) {
        doc.focus();
      }
    }
  }

  if (key == "cornerRadius") {
    config.style.borderRadius = config.cornerRadius + "px";
  }

  if (key == "alpha") {
    config.style.opacity = config[key];
  }

  if (key == "a_alpha") {
    config.animation.opacity = config[key];
  }

  if (key == "fontFamily") {
    config.style.fontFamily = config.fontFamily;
  }

  if (key == 'typeface') {
    switch (config.typeface) {
      case 'normal':
        config.style.fontWeight = 400;
        break;
      case 'bold':
        config.style.fontWeight = 700;
        break;
      case 'italic':
        config.style.fontStyle = 'italic';
        break;
      case 'bold_italic':
        config.style.fontWeight = 700;
        config.style.fontStyle = 'italic';
        break;
      case 'underline':
        config.style.textDecoration = 'underline';
        break;
    }
  }

  if (key == "fontStyle") {
    var match = config.fontStyle.match(/[/-]/);
    var fontName = match ? config.fontStyle.slice(0, match.index) : config.fontStyle;
    config.style.fontFamily = fontName;

    if (!match) return;

    var _type = config.fontStyle.slice(match.index + 1);
    _type = _type.replace(/[-/]/g, '');
    _type = _type.toLowerCase();

    if (_type.indexOf('italic') != -1) config.style.fontStyle = 'italic';

    var fontWeight = 0;

    if (_type.indexOf('extralight') != -1) fontWeight = 200;else if (_type.indexOf('light') != -1) fontWeight = 300;else if (_type.indexOf('regular') != -1 || _type.indexOf('book') != -1) fontWeight = 400;else if (_type.indexOf('semibold') != -1 || _type.indexOf('medium') != -1) fontWeight = 500;else if (_type.indexOf('bold') != -1 || _type.indexOf('heavy') != -1) fontWeight = 700;else if (_type.indexOf('black') != -1) fontWeight = 900;

    if (fontWeight > 0) config.style.fontWeight = fontWeight;
  }

  if (key == 'visibility') {
    var visibility = config.visibility;
    if (visibility == 'invisible') config.style.visibility = "hidden";else if (visibility == 'gone') config.style.display = "none";else {
      config.style.visibility = '';
    }
  }

  if (key == 'expand') {
    var _visibility = config.expand + '';
    if (_visibility == 'true') {
      config.style.visibility = '';
    } else config.style.display = "none";
  }

  if (key == "stroke") {
    var _values = config.stroke.split(",");

    if (_values.length == 2) config.style.border = _values[0] + "px solid " + _values[1];else if (_values.length == 3) {
      if (_values[2] == "rbl") {
        config.style.borderBottom = _values[0] + "px solid " + _values[1];
        config.style.borderLeft = _values[0] + "px solid " + _values[1];
        config.style.borderRight = _values[0] + "px solid " + _values[1];
      } else if (_values[2] == "b") {
        config.style.borderBottom = _values[0] + "px solid " + _values[1];
      } else if (_values[2] == "r") {
        config.style.borderRight = _values[0] + "px solid " + _values[1];
      } else if (_values[2] == "rb") {
        config.style.borderBottom = _values[0] + "px solid " + _values[1];
        config.style.borderRight = _values[0] + "px solid " + _values[1];
      } else config.style.border = _values[0] + "px " + _values[1] + " " + _values[2];
    }
  }

  if (key == "strokeTop") {
    var _values2 = config.strokeTop.split(",");

    if (_values2.length == 2) config.style.borderTop = _values2[0] + "px solid " + _values2[1];else if (_values2.length == 3) config.style.borderTop = _values2[0] + "px " + _values2[1] + " " + _values2[2];
  }

  if (key == "strokeRight") {
    var _values3 = config.strokeRight.split(",");

    if (_values3.length == 2) config.style.borderRight = _values3[0] + "px solid " + _values3[1];else if (_values3.length == 3) config.style.borderRight = _values3[0] + "px " + _values3[1] + " " + _values3[2];
  }

  if (key == "strokeBottom") {
    var _values4 = config.strokeBottom.split(",");

    if (_values4.length == 2) config.style.borderBottom = _values4[0] + "px solid " + _values4[1];else if (_values4.length == 3) config.style.borderBottom = _values4[0] + "px " + _values4[1] + " " + _values4[2];
  }

  if (key == "strokeLeft") {
    var _values5 = config.strokeLeft.split(",");

    if (_values5.length == 2) config.style.borderLeft = _values5[0] + "px solid " + _values5[1];else if (_values5.length == 3) config.style.borderLeft = _values5[0] + "px " + _values5[1] + " " + _values5[2];
  }

  if (key == "translationY") {
    config.style.transform = lookAndReplaceProp(config.style.transform, "translateY", config[key]);
  }

  if (key == "a_translationY") {
    config.animation.transform += "translateY(" + config[key] + "px) ";
  }

  if (key == "translationX") {
    config.style.transform = lookAndReplaceProp(config.style.transform, "translateX", config[key]);
  }

  if (key == "a_translationX") {
    config.animation.transform += "translateX(" + config[key] + "px) ";
  }

  if (key == "scaleX") {
    config.style.transform += "scaleX(" + config[key] + ") ";
  }

  if (key == "a_scaleX") {
    config.animation.transform += "scaleX(" + config[key] + ") ";
  }

  if (key == "scaleY") {
    config.style.transform += "scaleY(" + config[key] + ") ";
  }

  if (key == "a_scaleY") {
    config.animation.transform += "scaleY(" + config[key] + ") ";
  }

  if (key == "rotation") {
    config.style.transform += "rotate(" + config[key] + "deg) ";
  }

  if (key == "a_rotation") {
    config.animation.transform += "rotate(" + config[key] + "deg) ";
  }

  if (key == "rotationX") {
    config.style.transform += "rotateX(" + config[key] + "deg) ";
  }

  if (key == "a_rotationX") {
    config.animation.transform += "rotateX(" + config[key] + "deg) ";
  }

  if (key == "rotationY") {
    config.style.transform += "rotateY(" + config[key] + "deg) ";
  }

  if (key == "a_rotationY") {
    config.animation.transform += "rotateY(" + config[key] + "deg) ";
  }

  if (key == "translationZ") {
    var v = config[key];
    config.style["-webkit-box-shadow"] = "0 0 " + v.toString() + "px rgba(0,0,0, .1)";
    config.style["-moz-box-shadow"] = "0 0 " + v.toString() + "px rgba(0,0,0, .1)";
    config.style["box-shadow"] = "0 0 " + v.toString() + "px rgba(0,0,0, .1)";
  }

  if (key == "a_duration" && !isNaN(config[key])) {
    var suffix = config.transitionTimingFunction ? " " + config.transitionTimingFunction : "";
    config.animation.transition = config[key] + 'ms all' + suffix;
  }

  if (type == "textView" && key == "gravity" && config.gravity) {
    config.style.textAlign = config.gravity;
    if (config.gravity == "center_vertical") {
      config.style["align-items"] = "center";
      config.style.display = "flex";
    } else if (config.gravity == "center_horizontal") {
      config.style.display = "flex";
      config.style["justify-content"] = "center";
    } else if (config.gravity == "center") {
      config.style.display = "flex";
      config.style["align-items"] = "center";
      config.style["justify-content"] = "center";
    } else if (config.gravity == "center") {
      config.style.display = "flex";
      config.style["align-items"] = "center";
      config.style["justify-content"] = "center";
    }
  }
  if (type == "linearLayout" && key == "gravity" && config.gravity) {
    if (config.margin && config.gravity == "center_vertical") {
      var margin = config.margin.split(",");
      if (config.width == "match_parent") {
        config.style.width = "calc(100% - " + (parseInt(margin[0]) + parseInt(margin[2])).toString() + "px )";
      }
    }
  }

  if (key == "hint") {
    config.attributes.placeholder = config.hint;
  }

  if (key == "contentEditable" && config.contentEditable) {
    config.attributes.contenteditable = true;
  }

  if (key == "id") {
    config.attributes.id = config.id;
  }

  if (key == "gradient") {
    var gradientObj = JSON.parse(config.gradient);
    if (gradientObj.type == "linear") {
      var angle = gradientObj.angle;
      var values = gradientObj.values;
      var colors = values.join(", ");
      config.style["background-image"] = "linear-gradient(" + angle + "deg, " + colors + ")";
    } else {
      var values = gradientObj.values;
      var colors = values.join(", ");
      config.style["background-image"] = "radial-gradient(" + colors + ")";
    }
  }

  if (key == "inputType") {
    var inputType = "text";
    if (config.inputType == "numericPassword" || config.inputType == "password") {
      if (config.inputTypeI == 4 && isMobile) {
        inputType = "tel";
        config.style["-webkit-text-security"] = "disc";
        config.style["-moz-text-security"] = "disc";
        config.style["text-security"] = "disc";
      } else {
        inputType = "password";
        config.attributes.autocomplete = "new-password";
      }
    } else if (config.inputType == "disabled") {
      config.attributes.disabled = 'disabled';
    } else if (config.inputType == "numeric") {
      inputType = "number";
    }
    if (config.separator) {
      if (config.inputType == "numeric") {
        inputType = "tel";
      } else {
        inputType = "text";
      }
    }

    config.attributes.type = inputType;
  }

  if (key == "rotateImage") {
    if (config.rotateImage) {
      config.style["-webkit-animation"] = "load3 4s infinite linear";
      config.style["animation-duration"] = "4s";
      config.style["animation-timing-function"] = "linear";
      config.style["animation-delay"] = "0s";
      config.style["animation-iteration-count"] = "infinite";
      config.style["animation-direction"] = "normal";
      config.style["animation-fill-mode"] = "none";
      config.style["animation-play-state"] = "running";
      config.style["animation-name"] = "rotation";
    }
  }

  if (key == "pattern") {
    config.attributes["data-pattern"] = config.pattern;
    var data = config.pattern.split(',');
    var length = parseInt(data.pop());
    if (length > 10) {
      length = 10;
    }
    config.attributes["size"] = length;
  }
  // if(key == "inputTypeI"){
  //   if(config.inputTypeI == 4){
  //     config.attributes["inputmode"] = "numeric";
  //   }

  // }

  if (key == "separator") {
    config.attributes["separator"] = config.separator;
  }
  if (key == "separatorRepeat") {
    config.attributes["separatorRepeat"] = config.separatorRepeat;
  }

  if (key == "myAttr") {
    config.attributes["myAttr"] = config.myAttr;
  }
  if (key == "blurBackground" && config.blurBackground) {
    config.style["backdrop-filter"] = "blur(3px)";
  }
  if (key == "shadow") {
    var shadowValues = config.shadow.split(config.shadowSeparator || ',');
    var shadowBlur = rWS(cS(shadowValues[2]));
    var shadowSpread = rWS(cS(shadowValues[3]));
    var shadowOpacity = rWS(cS(shadowValues[5]));
    var shadowOffset = {
      x: rWS(cS(shadowValues[0])),
      y: rWS(cS(shadowValues[1]))
    };

    var shadowColor = convertColorToRgba(shadowValues[4]);
    var shadowType = config.shadowType ? config.shadowType + " " : '';

    config["style"]["box-shadow"] = shadowType + parseInt(shadowOffset.x) + "px " + parseInt(shadowOffset.y) + "px " + parseInt(shadowBlur) + "px " + parseInt(shadowSpread) + "px rgba(" + shadowColor.r + ", " + shadowColor.g + ", " + shadowColor.b + ", " + shadowColor.a + ")";
  }

  if (key == "lineHeight") config.style.lineHeight = config.lineHeight;

  if (key == "objectFit") config.style.objectFit = config.objectFit;

  if (key == "clickable") {
    config.style.pointerEvents = config.clickable ? "auto" : "none";
  }
  if (key == "display") {
    config.style.display = config.display;
  }
}

function convertColorToRgba(color) {
  color = rWS(cS(color));

  var values;
  var alpha = "1.00";

  if (color.length >= 8) {
    alpha = parseInt(color.substring(1, 3), 16);
    alpha = (alpha / 255).toFixed(2);
    color = color.substring(3, 9);
  } else {
    color = color.substring(1, color.length);
  }

  color = convertHexToRgb(rWS(color));
  values = color.split(',');

  return {
    r: parseInt(rWS(values[0])),
    g: parseInt(rWS(values[1])),
    b: parseInt(rWS(values[2])),
    a: parseFloat(alpha)
  };
}

function convertHexToRgb(hex) {
  var r = parseInt(hex.substring(0, 2), 16).toFixed(2);
  var g = parseInt(hex.substring(2, 4), 16).toFixed(2);
  var b = parseInt(hex.substring(4, 6), 16).toFixed(2);

  return r + "," + g + "," + b;
}

function cS(value) {
  return value ? value + '' : "";
}

function rWS(value) {
  return value.replace(/ /g, '');
}

function setDefaults(type, config) {
  if (type == "linearLayout") {
    config.orientation = config.orientation;
  }
}
function this_inlineAnimation(config) {
  var con = modifyTranslation(config);
  var element = document.getElementById(con.name);
}
function modifyTranslation(config) {
  var x = config.x || "0";
  var y = config.y || "0";
  var animationArray = JSON.parse(config.inlineAnimation);
  var animationArray = animationArray.map(function (a) {
    if (a.hasOwnProperty("fromX")) {
      a.fromX = parseInt(a.fromX) + parseInt(x) + '';
      if (!a.hasOwnProperty("toX")) {
        a.toX = 0 + parseInt(x) + '';
      }
    }
    if (a.hasOwnProperty("toX")) {
      a.toX = parseInt(a.toX) + parseInt(x) + '';
    }
    if (a.hasOwnProperty("fromY")) {
      a.fromY = parseInt(a.fromY) + parseInt(y) + '';
      if (!a.hasOwnProperty("toY")) {
        a.toY = 0 + parseInt(y) + '';
      }
    }
    if (a.hasOwnProperty("toY")) {
      a.toY = parseInt(a.toY) + parseInt(y) + '';
    }
    return a;
  });
  return animationArray;
}
module.exports = function (type, config, getSetType) {
  config = flattenObject(config);
  setDefaults(type, config);

  var keys = Object.keys(config);

  for (var i = 0; i < keys.length; i++) {
    if (config.style && config.style.display === 'none' && keys[i] === 'gravity') {
      continue;
    }
    parseLayoutProps(type, config, keys[i]);
  }

  config.transition = [String(config.a_duration || 0) + "ms", "all", config.transitionTimingFunction].filter(Boolean).join(" ");

  if (config.style.transform == "") {
    delete config.style.transform;
  }
  if (config.hasOwnProperty("inlineAnimation")) {
    this_inlineAnimation(config);
  }

  return config;
};

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Copyright (c) 2012-2017 "JUSPAY Technologies"
 * JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
 *
 * This file is part of JUSPAY Platform.
 *
 * JUSPAY Platform is free software: you can redistribute it and/or modify
 * it for only educational purposes under the terms of the GNU Affero General
 * Public License (GNU AGPL) as published by the Free Software Foundation,
 * either version 3 of the License, or (at your option) any later version.
 * For Enterprise/Commerical licenses, contact <info@juspay.in>.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
 * be liable for all damages without limitation, which is caused by the
 * ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
 * damages, claims, cost, including reasonable attorney fee claimed on Juspay.
 * The end user has NO right to claim any indemnification based on its use
 * of Licensed Software. See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
 */

/*
 Used to initialize defaults for window funcions and variables.
*/
var _require = __webpack_require__(/*! ./helper */ "./src/helper.js"),
    merge = _require.merge;

window.PrestoUI = __webpack_require__(/*! ./PrestoUIInterface */ "./src/PrestoUIInterface.js");

var getCurrTime = function getCurrTime() {
    return new Date().getTime();
};

// window.__OS = getOS()
if (false) { var getScreenDetails; }

if (true) {
    window.Android = __webpack_require__(/*! ./WEB/AndroidInterface */ "./src/WEB/AndroidInterface.js");
    window.JBridge = __webpack_require__(/*! ./WEB/JBridgeInterface */ "./src/WEB/JBridgeInterface.js");
} else {}

if (window.__DEVICE_DETAILS && window.__DEVICE_DETAILS.hasOwnProperty("screen_width")) {
    window.__WIDTH = window.__DEVICE_DETAILS.screen_width;
} else {
    window.__WIDTH = "1080";
}

if (window.__DEVICE_DETAILS && window.__DEVICE_DETAILS.hasOwnProperty("screen_height")) {
    window.__HEIGHT = window.__DEVICE_DETAILS.screen_height;
} else {
    window.__HEIGHT = "1920";
}

var guid = Math.random().toString(36).substr(2, 9);

//Intializing defaults
if (true) {
    /* Components */
    window.__COM_EVENT = false;
    window.__COM_RENDERED = {
        SWITCH_GLOBAL: false,
        DRP: {},
        DSB: {},
        DB: {},
        NAVBAR: {}
    };

    window.__COM_CLASS_GROUP = {
        WRAPPER: 'PDC_com_wrapper',
        NAVBAR: 'PDC_com_navbar',
        NAVBAR_ITEM: 'PDC_com_navbar_item',
        NAVBAR_ITEM_WITH_SUB: 'PDC_com_navbar_has_sub',
        NAVBAR_SUB: 'PDC_com_navbar_sub',
        NAVBAR_SUB_RIGHT: 'PDC_com_navbar_sub_right',
        NAVBAR_SUB_ITEM: 'PDC_com_navbar_subitem',
        DRP: 'PDC_com_drp',
        DRP_BODY: 'PDC_com_drp_body',
        DB: 'PDC_com_db',
        DB_FULL_BODY: 'PDC_com_db_full_body',
        DB_BODY: 'PDC_com_db_body',
        DB_OPTIONS: 'PDC_com_db_options',
        DB_OPTION: 'PDC_com_db_option',
        DSB: 'PDC_com_dsb',
        DSB_FULL_BODY: 'PDC_com_dsb_full_body',
        DSB_BODY: 'PDC_com_dsb_body',
        DSB_OPTIONS: 'PDC_com_dsb_options',
        DSB_OPTION: 'PDC_com_dsb_option',
        DSB_SEARCH_WRAP: 'PDC_com_dsb_search_wrap',
        DSB_SEARCH: 'PDC_com_dsb_search',
        SWITCH: 'PDC_com_switch',
        SWITCH_BODY: 'PDC_com_switch_body',
        SWITCH_SLIDER: 'PDC_com_switch_slider',
        BT: 'PDC_com_bt',
        BT_DISABLED: 'PDC_com_bt_disabled'
    };
    window.__COM_COLOR_GROUP = {
        BG: '#ffffff',
        ACTIVE_BG: '#EEF1F8',
        ACTIVE_COLOR: 'rgb(53, 64, 82)',
        INACTIVE_COLOR: 'rgba(53, 64, 82, 0.5)',
        BORDER_COLOR: '#A3AFC2',
        ACTIVE_BORDER_COLOR: '#707886',
        SEARCH_COLOR: '#dddddd',
        INACTIVE_SWITCH: '#B7DBBC',
        ACTIVE_SWITCH: '#36AF47',
        BT_BORDER_COLOR: '#1585D8',
        BT_BG_COLOR: '#1991EB',
        BT_COLOR: '#ffffff'
    };
    window.__COM_ACTIVE = {
        DSB: '',
        NAVBAR: '',
        DB: ''
        /* Components End */

        /* Modal */
    };window.__STYLE_ID = 'style_' + guid;
    window.__RENDERED_KEYFRAMES = [];
    window.__MODAL_PROPS = {};
    window.__CONTENTMODAL_CLASS = 'PDC_modal';
    window.__OPENMODAL_CLASS = 'PDC_modal-open';
    window.__BACKDROPMODAL_CLASS = 'PDC_modal-backdrop';
    window.__DISABLEDBACKDROP_CLASS = 'PDC_modal-backdrop-disabled';
    window.__SHOWNMODAL_CLASS = 'PDC_modal-shown';
    window.__FADEMODAL_CLASS = 'PDC_modal-fade';
    window.__SLIDEMODAL_CLASS = 'PDC_modal-slide';
    /* Modal End */

    window.onclick = function (event) {
        if (event.target && event.target.classList.contains(window.__BACKDROPMODAL_CLASS) && !event.target.classList.contains(window.__DISABLEDBACKDROP_CLASS)) {
            document.body.classList.remove(window.__OPENMODAL_CLASS);
            event.target.classList.remove(window.__SHOWNMODAL_CLASS);

            var id = event.target.id;
            id = id.replace(window.__BACKDROPMODAL_CLASS + '_', '');

            var view = __VIEWS[id];
            if (view && view.props.onDismiss && typeof view.props.onDismiss == "function") {
                view.props.onDismiss();
            }
        }
    };

    var duiShowScreen = function duiShowScreen(callback, state) {
        var popupMenu = document.getElementsByClassName("popupMenu");
        for (var i = 0; i < popupMenu.length; i++) {
            popupMenu[i].style.display = "none";
        }
    };
    window.__duiShowScreen = duiShowScreen;
} else {}

window.__ID = 1;
window.__NODE_ID = 1;
window.__SCREEN_INDEX = -1;

window.__PROXY_FN = {};
window.__FN_INDEX = 0;
window.__ROOTSCREEN = null;
window.__CACHED_SCREENS = {};
window.__SCREEN_COUNT = 0;
window.__CURR_SCREEN = null;
window.__PREV_SCREEN = null;
window.__ANIMATE_DIR = null;
window.__SCREEN_STACK = [];
window.__LAST_FN_CALLED = null;
window.__THROTTELED_ACTIONS = [];
window.__VIEWS = {};
window.__VIEW_DIMENSIONS = {};
window.__OBSERVERS = {};
window.ZIndex = 0;

window.callUICallback = function () {
    var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
    var fName = args[0];
    var functionArgs = args.slice(1);
    var currTime;
    var timeDiff;

    if (window.__ALL_ONCLICKS && window.__ALL_ONCLICKS.indexOf(fName) != -1 && args[2] == "feedback" && JBridge && JBridge.setClickFeedback) {
        return JBridge.setClickFeedback(args[1]);
    }

    if (window.__THROTTELED_ACTIONS && window.__THROTTELED_ACTIONS.indexOf(fName) == -1) {
        window.__PROXY_FN[fName].apply(null, functionArgs);
    } else if (window.__LAST_FN_CALLED && fName == window.__LAST_FN_CALLED.fName) {
        currTime = getCurrTime();
        timeDiff = currTime - window.__LAST_FN_CALLED.timeStamp;

        if (timeDiff >= 300) {
            window.__PROXY_FN[fName].apply(null, functionArgs);
            window.__LAST_FN_CALLED.timeStamp = currTime;
        } else {
            console.warn("function throtteled", fName);
            console.warn("time diff", timeDiff);
        }
    } else {
        window.__PROXY_FN[fName].apply(null, functionArgs);
        window.__LAST_FN_CALLED = {
            timeStamp: new Date().getTime(),
            fName: fName
        };
    }
};

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./index.js */"./index.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgud2ViLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2J1aWxkRnVsbFBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xcy9saWIvZm9ybWF0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXMvbGliL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXMvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy9zcmMvUHJlc3RvVUlJbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vL3NyYy9XRUIvQW5kcm9pZEludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly8vc3JjL1dFQi9KQnJpZGdlSW50ZXJmYWNlLmpzIiwid2VicGFjazovLy9zcmMvV0VCL1JlbmRlci5qcyIsIndlYnBhY2s6Ly8vc3JjL1dFQi9WaWV3UGFnZUFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9hbmltYXRpb25zLmpzIiwid2VicGFjazovLy9zcmMvYmFzZVZpZXcuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvRHJvcGRvd25Cb3guanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0Ryb3Bkb3duU2VhcmNoQm94LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1N3aXRjaEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXB1dGUuanMiLCJ3ZWJwYWNrOi8vL3NyYy9kb21zL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvZG9tcy93ZWIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9oYW5kbGVyLmpzIiwid2VicGFjazovLy9zcmMvaGVscGVyLmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy9jb21tb24vY2FsbGJhY2tNYXBwZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXJzL2NvbW1vbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXJzL3dlYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvd2ViL3BhcnNlUGFyYW1zLmpzIiwid2VicGFjazovLy9zcmMvaW5pdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRpbml0OiByZXF1aXJlKFwiLi9zcmMvaW5pdFwiKSxcblx0ZG9tcyA6IHJlcXVpcmUoXCIuL3NyYy9kb21zXCIpLFxuXHRoYW5kbGVyIDogcmVxdWlyZShcIi4vc3JjL2hhbmRsZXJcIiksXG5cdGhlbHBlcnMgOiByZXF1aXJlKFwiLi9zcmMvaGVscGVyc1wiKSxcblx0YmFzZVZpZXcgOiByZXF1aXJlKFwiLi9zcmMvYmFzZVZpZXdcIiksXG5cdGFuaW1hdGlvbnM6IHJlcXVpcmUoJy4vc3JjL2FuaW1hdGlvbnMnKSxcblx0Y2FsbGJhY2tNYXBwZXI6IHJlcXVpcmUoJy4vc3JjL2hlbHBlcnMvY29tbW9uL2NhbGxiYWNrTWFwcGVyJyksXG5cdGdldE9TOiByZXF1aXJlKCcuL3NyYy9oZWxwZXInKS5nZXRPUyxcblx0cHJlc3RvTWVyZ2U6IHJlcXVpcmUoJy4vc3JjL2hlbHBlcicpLm1lcmdlLFxuXHRwcmVzdG9DbG9uZTogcmVxdWlyZSgnLi9zcmMvaGVscGVyJykuY2xvbmVcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgYnVpbGRGdWxsUGF0aCA9IHJlcXVpcmUoJy4uL2NvcmUvYnVpbGRGdWxsUGF0aCcpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICB2YXIgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChmdWxsUGF0aCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcbiAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiBoYW5kbGVBYm9ydCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICB2YXIgdGltZW91dEVycm9yTWVzc2FnZSA9ICd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCc7XG4gICAgICBpZiAoY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSA9IGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlO1xuICAgICAgfVxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKHRpbWVvdXRFcnJvck1lc3NhZ2UsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcblxuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGZ1bGxQYXRoKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcud2l0aENyZWRlbnRpYWxzKSkge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSAhIWNvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9jb3JlL21lcmdlQ29uZmlnJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGF4aW9zLmRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vbWVyZ2VDb25maWcnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcbiAgICBjb25maWcudXJsID0gYXJndW1lbnRzWzBdO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgfVxuXG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG5cbiAgLy8gU2V0IGNvbmZpZy5tZXRob2RcbiAgaWYgKGNvbmZpZy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2UgaWYgKHRoaXMuZGVmYXVsdHMubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IHRoaXMuZGVmYXVsdHMubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLm1ldGhvZCA9ICdnZXQnO1xuICB9XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbkF4aW9zLnByb3RvdHlwZS5nZXRVcmkgPSBmdW5jdGlvbiBnZXRVcmkoY29uZmlnKSB7XG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIHJldHVybiBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgYmFzZVVSTCB3aXRoIHRoZSByZXF1ZXN0ZWRVUkwsXG4gKiBvbmx5IHdoZW4gdGhlIHJlcXVlc3RlZFVSTCBpcyBub3QgYWxyZWFkeSBhbiBhYnNvbHV0ZSBVUkwuXG4gKiBJZiB0aGUgcmVxdWVzdFVSTCBpcyBhYnNvbHV0ZSwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSByZXF1ZXN0ZWRVUkwgdW50b3VjaGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RlZFVSTCBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgdG8gY29tYmluZVxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIGZ1bGwgcGF0aFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkRnVsbFBhdGgoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKSB7XG4gIGlmIChiYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKHJlcXVlc3RlZFVSTCkpIHtcbiAgICByZXR1cm4gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKTtcbiAgfVxuICByZXR1cm4gcmVxdWVzdGVkVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1xuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG5cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIGVycm9yLmlzQXhpb3NFcnJvciA9IHRydWU7XG5cbiAgZXJyb3IudG9KU09OID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIFN0YW5kYXJkXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAvLyBNaWNyb3NvZnRcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcbiAgICAgIC8vIE1vemlsbGFcbiAgICAgIGZpbGVOYW1lOiB0aGlzLmZpbGVOYW1lLFxuICAgICAgbGluZU51bWJlcjogdGhpcy5saW5lTnVtYmVyLFxuICAgICAgY29sdW1uTnVtYmVyOiB0aGlzLmNvbHVtbk51bWJlcixcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgLy8gQXhpb3NcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gICAgICBjb2RlOiB0aGlzLmNvZGVcbiAgICB9O1xuICB9O1xuICByZXR1cm4gZXJyb3I7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG4vKipcbiAqIENvbmZpZy1zcGVjaWZpYyBtZXJnZS1mdW5jdGlvbiB3aGljaCBjcmVhdGVzIGEgbmV3IGNvbmZpZy1vYmplY3RcbiAqIGJ5IG1lcmdpbmcgdHdvIGNvbmZpZ3VyYXRpb24gb2JqZWN0cyB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzJcbiAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBvYmplY3QgcmVzdWx0aW5nIGZyb20gbWVyZ2luZyBjb25maWcyIHRvIGNvbmZpZzFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtZXJnZUNvbmZpZyhjb25maWcxLCBjb25maWcyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBjb25maWcyID0gY29uZmlnMiB8fCB7fTtcbiAgdmFyIGNvbmZpZyA9IHt9O1xuXG4gIHZhciB2YWx1ZUZyb21Db25maWcyS2V5cyA9IFsndXJsJywgJ21ldGhvZCcsICdwYXJhbXMnLCAnZGF0YSddO1xuICB2YXIgbWVyZ2VEZWVwUHJvcGVydGllc0tleXMgPSBbJ2hlYWRlcnMnLCAnYXV0aCcsICdwcm94eSddO1xuICB2YXIgZGVmYXVsdFRvQ29uZmlnMktleXMgPSBbXG4gICAgJ2Jhc2VVUkwnLCAndXJsJywgJ3RyYW5zZm9ybVJlcXVlc3QnLCAndHJhbnNmb3JtUmVzcG9uc2UnLCAncGFyYW1zU2VyaWFsaXplcicsXG4gICAgJ3RpbWVvdXQnLCAnd2l0aENyZWRlbnRpYWxzJywgJ2FkYXB0ZXInLCAncmVzcG9uc2VUeXBlJywgJ3hzcmZDb29raWVOYW1lJyxcbiAgICAneHNyZkhlYWRlck5hbWUnLCAnb25VcGxvYWRQcm9ncmVzcycsICdvbkRvd25sb2FkUHJvZ3Jlc3MnLFxuICAgICdtYXhDb250ZW50TGVuZ3RoJywgJ3ZhbGlkYXRlU3RhdHVzJywgJ21heFJlZGlyZWN0cycsICdodHRwQWdlbnQnLFxuICAgICdodHRwc0FnZW50JywgJ2NhbmNlbFRva2VuJywgJ3NvY2tldFBhdGgnXG4gIF07XG5cbiAgdXRpbHMuZm9yRWFjaCh2YWx1ZUZyb21Db25maWcyS2V5cywgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2gobWVyZ2VEZWVwUHJvcGVydGllc0tleXMsIGZ1bmN0aW9uIG1lcmdlRGVlcFByb3BlcnRpZXMocHJvcCkge1xuICAgIGlmICh1dGlscy5pc09iamVjdChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gdXRpbHMuZGVlcE1lcmdlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IHV0aWxzLmRlZXBNZXJnZShjb25maWcxW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2goZGVmYXVsdFRvQ29uZmlnMktleXMsIGZ1bmN0aW9uIGRlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB2YXIgYXhpb3NLZXlzID0gdmFsdWVGcm9tQ29uZmlnMktleXNcbiAgICAuY29uY2F0KG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzKVxuICAgIC5jb25jYXQoZGVmYXVsdFRvQ29uZmlnMktleXMpO1xuXG4gIHZhciBvdGhlcktleXMgPSBPYmplY3RcbiAgICAua2V5cyhjb25maWcyKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24gZmlsdGVyQXhpb3NLZXlzKGtleSkge1xuICAgICAgcmV0dXJuIGF4aW9zS2V5cy5pbmRleE9mKGtleSkgPT09IC0xO1xuICAgIH0pO1xuXG4gIHV0aWxzLmZvckVhY2gob3RoZXJLZXlzLCBmdW5jdGlvbiBvdGhlcktleXNEZWZhdWx0VG9Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIGlmICghdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0FjY2VwdCcpO1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdmFyIGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZignIycpO1xuICAgIGlmIChoYXNobWFya0luZGV4ICE9PSAtMSkge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIGhhc2htYXJrSW5kZXgpO1xuICAgIH1cblxuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0J1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsKSAmJiB2YWwuY29uc3RydWN0b3IgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbC5jb25zdHJ1Y3RvcilcbiAgICAmJiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcih2YWwpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICogbmF0aXZlc2NyaXB0XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ05hdGl2ZVNjcmlwdCcgb3IgJ05TJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIChuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTmF0aXZlU2NyaXB0JyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTlMnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRnVuY3Rpb24gZXF1YWwgdG8gbWVyZ2Ugd2l0aCB0aGUgZGlmZmVyZW5jZSBiZWluZyB0aGF0IG5vIHJlZmVyZW5jZVxuICogdG8gb3JpZ2luYWwgb2JqZWN0cyBpcyBrZXB0LlxuICpcbiAqIEBzZWUgbWVyZ2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIGRlZXBNZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IGRlZXBNZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IGRlZXBNZXJnZSh7fSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBkZWVwTWVyZ2U6IGRlZXBNZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW1cbn07XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVwbGFjZSA9IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZTtcbnZhciBwZXJjZW50VHdlbnRpZXMgPSAvJTIwL2c7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgRm9ybWF0ID0ge1xuICAgIFJGQzE3Mzg6ICdSRkMxNzM4JyxcbiAgICBSRkMzOTg2OiAnUkZDMzk4Nidcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdXRpbC5hc3NpZ24oXG4gICAge1xuICAgICAgICAnZGVmYXVsdCc6IEZvcm1hdC5SRkMzOTg2LFxuICAgICAgICBmb3JtYXR0ZXJzOiB7XG4gICAgICAgICAgICBSRkMxNzM4OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVwbGFjZS5jYWxsKHZhbHVlLCBwZXJjZW50VHdlbnRpZXMsICcrJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUkZDMzk4NjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIEZvcm1hdFxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGZvcm1hdHMgPSByZXF1aXJlKCcuL2Zvcm1hdHMnKTtcbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgYXJyYXlQcmVmaXhHZW5lcmF0b3JzID0ge1xuICAgIGJyYWNrZXRzOiBmdW5jdGlvbiBicmFja2V0cyhwcmVmaXgpIHtcbiAgICAgICAgcmV0dXJuIHByZWZpeCArICdbXSc7XG4gICAgfSxcbiAgICBjb21tYTogJ2NvbW1hJyxcbiAgICBpbmRpY2VzOiBmdW5jdGlvbiBpbmRpY2VzKHByZWZpeCwga2V5KSB7XG4gICAgICAgIHJldHVybiBwcmVmaXggKyAnWycgKyBrZXkgKyAnXSc7XG4gICAgfSxcbiAgICByZXBlYXQ6IGZ1bmN0aW9uIHJlcGVhdChwcmVmaXgpIHtcbiAgICAgICAgcmV0dXJuIHByZWZpeDtcbiAgICB9XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG52YXIgcHVzaCA9IEFycmF5LnByb3RvdHlwZS5wdXNoO1xudmFyIHB1c2hUb0FycmF5ID0gZnVuY3Rpb24gKGFyciwgdmFsdWVPckFycmF5KSB7XG4gICAgcHVzaC5hcHBseShhcnIsIGlzQXJyYXkodmFsdWVPckFycmF5KSA/IHZhbHVlT3JBcnJheSA6IFt2YWx1ZU9yQXJyYXldKTtcbn07XG5cbnZhciB0b0lTTyA9IERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nO1xuXG52YXIgZGVmYXVsdEZvcm1hdCA9IGZvcm1hdHNbJ2RlZmF1bHQnXTtcbnZhciBkZWZhdWx0cyA9IHtcbiAgICBhZGRRdWVyeVByZWZpeDogZmFsc2UsXG4gICAgYWxsb3dEb3RzOiBmYWxzZSxcbiAgICBjaGFyc2V0OiAndXRmLTgnLFxuICAgIGNoYXJzZXRTZW50aW5lbDogZmFsc2UsXG4gICAgZGVsaW1pdGVyOiAnJicsXG4gICAgZW5jb2RlOiB0cnVlLFxuICAgIGVuY29kZXI6IHV0aWxzLmVuY29kZSxcbiAgICBlbmNvZGVWYWx1ZXNPbmx5OiBmYWxzZSxcbiAgICBmb3JtYXQ6IGRlZmF1bHRGb3JtYXQsXG4gICAgZm9ybWF0dGVyOiBmb3JtYXRzLmZvcm1hdHRlcnNbZGVmYXVsdEZvcm1hdF0sXG4gICAgLy8gZGVwcmVjYXRlZFxuICAgIGluZGljZXM6IGZhbHNlLFxuICAgIHNlcmlhbGl6ZURhdGU6IGZ1bmN0aW9uIHNlcmlhbGl6ZURhdGUoZGF0ZSkge1xuICAgICAgICByZXR1cm4gdG9JU08uY2FsbChkYXRlKTtcbiAgICB9LFxuICAgIHNraXBOdWxsczogZmFsc2UsXG4gICAgc3RyaWN0TnVsbEhhbmRsaW5nOiBmYWxzZVxufTtcblxudmFyIGlzTm9uTnVsbGlzaFByaW1pdGl2ZSA9IGZ1bmN0aW9uIGlzTm9uTnVsbGlzaFByaW1pdGl2ZSh2KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSAnc3RyaW5nJ1xuICAgICAgICB8fCB0eXBlb2YgdiA9PT0gJ251bWJlcidcbiAgICAgICAgfHwgdHlwZW9mIHYgPT09ICdib29sZWFuJ1xuICAgICAgICB8fCB0eXBlb2YgdiA9PT0gJ3N5bWJvbCdcbiAgICAgICAgfHwgdHlwZW9mIHYgPT09ICdiaWdpbnQnO1xufTtcblxudmFyIHN0cmluZ2lmeSA9IGZ1bmN0aW9uIHN0cmluZ2lmeShcbiAgICBvYmplY3QsXG4gICAgcHJlZml4LFxuICAgIGdlbmVyYXRlQXJyYXlQcmVmaXgsXG4gICAgc3RyaWN0TnVsbEhhbmRsaW5nLFxuICAgIHNraXBOdWxscyxcbiAgICBlbmNvZGVyLFxuICAgIGZpbHRlcixcbiAgICBzb3J0LFxuICAgIGFsbG93RG90cyxcbiAgICBzZXJpYWxpemVEYXRlLFxuICAgIGZvcm1hdHRlcixcbiAgICBlbmNvZGVWYWx1ZXNPbmx5LFxuICAgIGNoYXJzZXRcbikge1xuICAgIHZhciBvYmogPSBvYmplY3Q7XG4gICAgaWYgKHR5cGVvZiBmaWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb2JqID0gZmlsdGVyKHByZWZpeCwgb2JqKTtcbiAgICB9IGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgb2JqID0gc2VyaWFsaXplRGF0ZShvYmopO1xuICAgIH0gZWxzZSBpZiAoZ2VuZXJhdGVBcnJheVByZWZpeCA9PT0gJ2NvbW1hJyAmJiBpc0FycmF5KG9iaikpIHtcbiAgICAgICAgb2JqID0gb2JqLmpvaW4oJywnKTtcbiAgICB9XG5cbiAgICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgICAgIGlmIChzdHJpY3ROdWxsSGFuZGxpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBlbmNvZGVyICYmICFlbmNvZGVWYWx1ZXNPbmx5ID8gZW5jb2RlcihwcmVmaXgsIGRlZmF1bHRzLmVuY29kZXIsIGNoYXJzZXQsICdrZXknKSA6IHByZWZpeDtcbiAgICAgICAgfVxuXG4gICAgICAgIG9iaiA9ICcnO1xuICAgIH1cblxuICAgIGlmIChpc05vbk51bGxpc2hQcmltaXRpdmUob2JqKSB8fCB1dGlscy5pc0J1ZmZlcihvYmopKSB7XG4gICAgICAgIGlmIChlbmNvZGVyKSB7XG4gICAgICAgICAgICB2YXIga2V5VmFsdWUgPSBlbmNvZGVWYWx1ZXNPbmx5ID8gcHJlZml4IDogZW5jb2RlcihwcmVmaXgsIGRlZmF1bHRzLmVuY29kZXIsIGNoYXJzZXQsICdrZXknKTtcbiAgICAgICAgICAgIHJldHVybiBbZm9ybWF0dGVyKGtleVZhbHVlKSArICc9JyArIGZvcm1hdHRlcihlbmNvZGVyKG9iaiwgZGVmYXVsdHMuZW5jb2RlciwgY2hhcnNldCwgJ3ZhbHVlJykpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2Zvcm1hdHRlcihwcmVmaXgpICsgJz0nICsgZm9ybWF0dGVyKFN0cmluZyhvYmopKV07XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfVxuXG4gICAgdmFyIG9iaktleXM7XG4gICAgaWYgKGlzQXJyYXkoZmlsdGVyKSkge1xuICAgICAgICBvYmpLZXlzID0gZmlsdGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgb2JqS2V5cyA9IHNvcnQgPyBrZXlzLnNvcnQoc29ydCkgOiBrZXlzO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqS2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0gb2JqS2V5c1tpXTtcblxuICAgICAgICBpZiAoc2tpcE51bGxzICYmIG9ialtrZXldID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgIHB1c2hUb0FycmF5KHZhbHVlcywgc3RyaW5naWZ5KFxuICAgICAgICAgICAgICAgIG9ialtrZXldLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBnZW5lcmF0ZUFycmF5UHJlZml4ID09PSAnZnVuY3Rpb24nID8gZ2VuZXJhdGVBcnJheVByZWZpeChwcmVmaXgsIGtleSkgOiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICAgICAgICAgICAgICBzdHJpY3ROdWxsSGFuZGxpbmcsXG4gICAgICAgICAgICAgICAgc2tpcE51bGxzLFxuICAgICAgICAgICAgICAgIGVuY29kZXIsXG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIHNvcnQsXG4gICAgICAgICAgICAgICAgYWxsb3dEb3RzLFxuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZURhdGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyLFxuICAgICAgICAgICAgICAgIGVuY29kZVZhbHVlc09ubHksXG4gICAgICAgICAgICAgICAgY2hhcnNldFxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwdXNoVG9BcnJheSh2YWx1ZXMsIHN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICBvYmpba2V5XSxcbiAgICAgICAgICAgICAgICBwcmVmaXggKyAoYWxsb3dEb3RzID8gJy4nICsga2V5IDogJ1snICsga2V5ICsgJ10nKSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZUFycmF5UHJlZml4LFxuICAgICAgICAgICAgICAgIHN0cmljdE51bGxIYW5kbGluZyxcbiAgICAgICAgICAgICAgICBza2lwTnVsbHMsXG4gICAgICAgICAgICAgICAgZW5jb2RlcixcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgc29ydCxcbiAgICAgICAgICAgICAgICBhbGxvd0RvdHMsXG4gICAgICAgICAgICAgICAgc2VyaWFsaXplRGF0ZSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZXIsXG4gICAgICAgICAgICAgICAgZW5jb2RlVmFsdWVzT25seSxcbiAgICAgICAgICAgICAgICBjaGFyc2V0XG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXM7XG59O1xuXG52YXIgbm9ybWFsaXplU3RyaW5naWZ5T3B0aW9ucyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZVN0cmluZ2lmeU9wdGlvbnMob3B0cykge1xuICAgIGlmICghb3B0cykge1xuICAgICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuZW5jb2RlciAhPT0gbnVsbCAmJiBvcHRzLmVuY29kZXIgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0cy5lbmNvZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0VuY29kZXIgaGFzIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgdmFyIGNoYXJzZXQgPSBvcHRzLmNoYXJzZXQgfHwgZGVmYXVsdHMuY2hhcnNldDtcbiAgICBpZiAodHlwZW9mIG9wdHMuY2hhcnNldCAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0cy5jaGFyc2V0ICE9PSAndXRmLTgnICYmIG9wdHMuY2hhcnNldCAhPT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBjaGFyc2V0IG9wdGlvbiBtdXN0IGJlIGVpdGhlciB1dGYtOCwgaXNvLTg4NTktMSwgb3IgdW5kZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdCA9IGZvcm1hdHNbJ2RlZmF1bHQnXTtcbiAgICBpZiAodHlwZW9mIG9wdHMuZm9ybWF0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAoIWhhcy5jYWxsKGZvcm1hdHMuZm9ybWF0dGVycywgb3B0cy5mb3JtYXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGZvcm1hdCBvcHRpb24gcHJvdmlkZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybWF0ID0gb3B0cy5mb3JtYXQ7XG4gICAgfVxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXRzLmZvcm1hdHRlcnNbZm9ybWF0XTtcblxuICAgIHZhciBmaWx0ZXIgPSBkZWZhdWx0cy5maWx0ZXI7XG4gICAgaWYgKHR5cGVvZiBvcHRzLmZpbHRlciA9PT0gJ2Z1bmN0aW9uJyB8fCBpc0FycmF5KG9wdHMuZmlsdGVyKSkge1xuICAgICAgICBmaWx0ZXIgPSBvcHRzLmZpbHRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRRdWVyeVByZWZpeDogdHlwZW9mIG9wdHMuYWRkUXVlcnlQcmVmaXggPT09ICdib29sZWFuJyA/IG9wdHMuYWRkUXVlcnlQcmVmaXggOiBkZWZhdWx0cy5hZGRRdWVyeVByZWZpeCxcbiAgICAgICAgYWxsb3dEb3RzOiB0eXBlb2Ygb3B0cy5hbGxvd0RvdHMgPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdHMuYWxsb3dEb3RzIDogISFvcHRzLmFsbG93RG90cyxcbiAgICAgICAgY2hhcnNldDogY2hhcnNldCxcbiAgICAgICAgY2hhcnNldFNlbnRpbmVsOiB0eXBlb2Ygb3B0cy5jaGFyc2V0U2VudGluZWwgPT09ICdib29sZWFuJyA/IG9wdHMuY2hhcnNldFNlbnRpbmVsIDogZGVmYXVsdHMuY2hhcnNldFNlbnRpbmVsLFxuICAgICAgICBkZWxpbWl0ZXI6IHR5cGVvZiBvcHRzLmRlbGltaXRlciA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0cy5kZWxpbWl0ZXIgOiBvcHRzLmRlbGltaXRlcixcbiAgICAgICAgZW5jb2RlOiB0eXBlb2Ygb3B0cy5lbmNvZGUgPT09ICdib29sZWFuJyA/IG9wdHMuZW5jb2RlIDogZGVmYXVsdHMuZW5jb2RlLFxuICAgICAgICBlbmNvZGVyOiB0eXBlb2Ygb3B0cy5lbmNvZGVyID09PSAnZnVuY3Rpb24nID8gb3B0cy5lbmNvZGVyIDogZGVmYXVsdHMuZW5jb2RlcixcbiAgICAgICAgZW5jb2RlVmFsdWVzT25seTogdHlwZW9mIG9wdHMuZW5jb2RlVmFsdWVzT25seSA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5lbmNvZGVWYWx1ZXNPbmx5IDogZGVmYXVsdHMuZW5jb2RlVmFsdWVzT25seSxcbiAgICAgICAgZmlsdGVyOiBmaWx0ZXIsXG4gICAgICAgIGZvcm1hdHRlcjogZm9ybWF0dGVyLFxuICAgICAgICBzZXJpYWxpemVEYXRlOiB0eXBlb2Ygb3B0cy5zZXJpYWxpemVEYXRlID09PSAnZnVuY3Rpb24nID8gb3B0cy5zZXJpYWxpemVEYXRlIDogZGVmYXVsdHMuc2VyaWFsaXplRGF0ZSxcbiAgICAgICAgc2tpcE51bGxzOiB0eXBlb2Ygb3B0cy5za2lwTnVsbHMgPT09ICdib29sZWFuJyA/IG9wdHMuc2tpcE51bGxzIDogZGVmYXVsdHMuc2tpcE51bGxzLFxuICAgICAgICBzb3J0OiB0eXBlb2Ygb3B0cy5zb3J0ID09PSAnZnVuY3Rpb24nID8gb3B0cy5zb3J0IDogbnVsbCxcbiAgICAgICAgc3RyaWN0TnVsbEhhbmRsaW5nOiB0eXBlb2Ygb3B0cy5zdHJpY3ROdWxsSGFuZGxpbmcgPT09ICdib29sZWFuJyA/IG9wdHMuc3RyaWN0TnVsbEhhbmRsaW5nIDogZGVmYXVsdHMuc3RyaWN0TnVsbEhhbmRsaW5nXG4gICAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgb3B0cykge1xuICAgIHZhciBvYmogPSBvYmplY3Q7XG4gICAgdmFyIG9wdGlvbnMgPSBub3JtYWxpemVTdHJpbmdpZnlPcHRpb25zKG9wdHMpO1xuXG4gICAgdmFyIG9iaktleXM7XG4gICAgdmFyIGZpbHRlcjtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5maWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZmlsdGVyID0gb3B0aW9ucy5maWx0ZXI7XG4gICAgICAgIG9iaiA9IGZpbHRlcignJywgb2JqKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkob3B0aW9ucy5maWx0ZXIpKSB7XG4gICAgICAgIGZpbHRlciA9IG9wdGlvbnMuZmlsdGVyO1xuICAgICAgICBvYmpLZXlzID0gZmlsdGVyO1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gW107XG5cbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICB2YXIgYXJyYXlGb3JtYXQ7XG4gICAgaWYgKG9wdHMgJiYgb3B0cy5hcnJheUZvcm1hdCBpbiBhcnJheVByZWZpeEdlbmVyYXRvcnMpIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSBvcHRzLmFycmF5Rm9ybWF0O1xuICAgIH0gZWxzZSBpZiAob3B0cyAmJiAnaW5kaWNlcycgaW4gb3B0cykge1xuICAgICAgICBhcnJheUZvcm1hdCA9IG9wdHMuaW5kaWNlcyA/ICdpbmRpY2VzJyA6ICdyZXBlYXQnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gJ2luZGljZXMnO1xuICAgIH1cblxuICAgIHZhciBnZW5lcmF0ZUFycmF5UHJlZml4ID0gYXJyYXlQcmVmaXhHZW5lcmF0b3JzW2FycmF5Rm9ybWF0XTtcblxuICAgIGlmICghb2JqS2V5cykge1xuICAgICAgICBvYmpLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5zb3J0KSB7XG4gICAgICAgIG9iaktleXMuc29ydChvcHRpb25zLnNvcnQpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqS2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0gb2JqS2V5c1tpXTtcblxuICAgICAgICBpZiAob3B0aW9ucy5za2lwTnVsbHMgJiYgb2JqW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHB1c2hUb0FycmF5KGtleXMsIHN0cmluZ2lmeShcbiAgICAgICAgICAgIG9ialtrZXldLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICAgICAgICAgIG9wdGlvbnMuc3RyaWN0TnVsbEhhbmRsaW5nLFxuICAgICAgICAgICAgb3B0aW9ucy5za2lwTnVsbHMsXG4gICAgICAgICAgICBvcHRpb25zLmVuY29kZSA/IG9wdGlvbnMuZW5jb2RlciA6IG51bGwsXG4gICAgICAgICAgICBvcHRpb25zLmZpbHRlcixcbiAgICAgICAgICAgIG9wdGlvbnMuc29ydCxcbiAgICAgICAgICAgIG9wdGlvbnMuYWxsb3dEb3RzLFxuICAgICAgICAgICAgb3B0aW9ucy5zZXJpYWxpemVEYXRlLFxuICAgICAgICAgICAgb3B0aW9ucy5mb3JtYXR0ZXIsXG4gICAgICAgICAgICBvcHRpb25zLmVuY29kZVZhbHVlc09ubHksXG4gICAgICAgICAgICBvcHRpb25zLmNoYXJzZXRcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgdmFyIGpvaW5lZCA9IGtleXMuam9pbihvcHRpb25zLmRlbGltaXRlcik7XG4gICAgdmFyIHByZWZpeCA9IG9wdGlvbnMuYWRkUXVlcnlQcmVmaXggPT09IHRydWUgPyAnPycgOiAnJztcblxuICAgIGlmIChvcHRpb25zLmNoYXJzZXRTZW50aW5lbCkge1xuICAgICAgICBpZiAob3B0aW9ucy5jaGFyc2V0ID09PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgICAgIC8vIGVuY29kZVVSSUNvbXBvbmVudCgnJiMxMDAwMzsnKSwgdGhlIFwibnVtZXJpYyBlbnRpdHlcIiByZXByZXNlbnRhdGlvbiBvZiBhIGNoZWNrbWFya1xuICAgICAgICAgICAgcHJlZml4ICs9ICd1dGY4PSUyNiUyMzEwMDAzJTNCJic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBlbmNvZGVVUklDb21wb25lbnQoJ+KckycpXG4gICAgICAgICAgICBwcmVmaXggKz0gJ3V0Zjg9JUUyJTlDJTkzJic7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gam9pbmVkLmxlbmd0aCA+IDAgPyBwcmVmaXggKyBqb2luZWQgOiAnJztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG52YXIgaGV4VGFibGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgICAgICAgYXJyYXkucHVzaCgnJScgKyAoKGkgPCAxNiA/ICcwJyA6ICcnKSArIGkudG9TdHJpbmcoMTYpKS50b1VwcGVyQ2FzZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXk7XG59KCkpO1xuXG52YXIgY29tcGFjdFF1ZXVlID0gZnVuY3Rpb24gY29tcGFjdFF1ZXVlKHF1ZXVlKSB7XG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBxdWV1ZS5wb3AoKTtcbiAgICAgICAgdmFyIG9iaiA9IGl0ZW0ub2JqW2l0ZW0ucHJvcF07XG5cbiAgICAgICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICAgICAgdmFyIGNvbXBhY3RlZCA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG9iai5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW2pdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wYWN0ZWQucHVzaChvYmpbal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbS5vYmpbaXRlbS5wcm9wXSA9IGNvbXBhY3RlZDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnZhciBhcnJheVRvT2JqZWN0ID0gZnVuY3Rpb24gYXJyYXlUb09iamVjdChzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICB2YXIgb2JqID0gb3B0aW9ucyAmJiBvcHRpb25zLnBsYWluT2JqZWN0cyA/IE9iamVjdC5jcmVhdGUobnVsbCkgOiB7fTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZS5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAodHlwZW9mIHNvdXJjZVtpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG9ialtpXSA9IHNvdXJjZVtpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG52YXIgbWVyZ2UgPSBmdW5jdGlvbiBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuICAgIC8qIGVzbGludCBuby1wYXJhbS1yZWFzc2lnbjogMCAqL1xuICAgIGlmICghc291cmNlKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChpc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldC5wdXNoKHNvdXJjZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ICYmIHR5cGVvZiB0YXJnZXQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAoKG9wdGlvbnMgJiYgKG9wdGlvbnMucGxhaW5PYmplY3RzIHx8IG9wdGlvbnMuYWxsb3dQcm90b3R5cGVzKSkgfHwgIWhhcy5jYWxsKE9iamVjdC5wcm90b3R5cGUsIHNvdXJjZSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbc291cmNlXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW3RhcmdldCwgc291cmNlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXQgfHwgdHlwZW9mIHRhcmdldCAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIFt0YXJnZXRdLmNvbmNhdChzb3VyY2UpO1xuICAgIH1cblxuICAgIHZhciBtZXJnZVRhcmdldCA9IHRhcmdldDtcbiAgICBpZiAoaXNBcnJheSh0YXJnZXQpICYmICFpc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgICAgbWVyZ2VUYXJnZXQgPSBhcnJheVRvT2JqZWN0KHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkodGFyZ2V0KSAmJiBpc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgIGlmIChoYXMuY2FsbCh0YXJnZXQsIGkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldEl0ZW0gPSB0YXJnZXRbaV07XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldEl0ZW0gJiYgdHlwZW9mIHRhcmdldEl0ZW0gPT09ICdvYmplY3QnICYmIGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtpXSA9IG1lcmdlKHRhcmdldEl0ZW0sIGl0ZW0sIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2ldID0gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHNvdXJjZSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBzb3VyY2Vba2V5XTtcblxuICAgICAgICBpZiAoaGFzLmNhbGwoYWNjLCBrZXkpKSB7XG4gICAgICAgICAgICBhY2Nba2V5XSA9IG1lcmdlKGFjY1trZXldLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY2Nba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgbWVyZ2VUYXJnZXQpO1xufTtcblxudmFyIGFzc2lnbiA9IGZ1bmN0aW9uIGFzc2lnblNpbmdsZVNvdXJjZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhzb3VyY2UpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgICAgYWNjW2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB0YXJnZXQpO1xufTtcblxudmFyIGRlY29kZSA9IGZ1bmN0aW9uIChzdHIsIGRlY29kZXIsIGNoYXJzZXQpIHtcbiAgICB2YXIgc3RyV2l0aG91dFBsdXMgPSBzdHIucmVwbGFjZSgvXFwrL2csICcgJyk7XG4gICAgaWYgKGNoYXJzZXQgPT09ICdpc28tODg1OS0xJykge1xuICAgICAgICAvLyB1bmVzY2FwZSBuZXZlciB0aHJvd3MsIG5vIHRyeS4uLmNhdGNoIG5lZWRlZDpcbiAgICAgICAgcmV0dXJuIHN0cldpdGhvdXRQbHVzLnJlcGxhY2UoLyVbMC05YS1mXXsyfS9naSwgdW5lc2NhcGUpO1xuICAgIH1cbiAgICAvLyB1dGYtOFxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyV2l0aG91dFBsdXMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHN0cldpdGhvdXRQbHVzO1xuICAgIH1cbn07XG5cbnZhciBlbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUoc3RyLCBkZWZhdWx0RW5jb2RlciwgY2hhcnNldCkge1xuICAgIC8vIFRoaXMgY29kZSB3YXMgb3JpZ2luYWxseSB3cml0dGVuIGJ5IEJyaWFuIFdoaXRlIChtc2NkZXgpIGZvciB0aGUgaW8uanMgY29yZSBxdWVyeXN0cmluZyBsaWJyYXJ5LlxuICAgIC8vIEl0IGhhcyBiZWVuIGFkYXB0ZWQgaGVyZSBmb3Igc3RyaWN0ZXIgYWRoZXJlbmNlIHRvIFJGQyAzOTg2XG4gICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICB2YXIgc3RyaW5nID0gc3RyO1xuICAgIGlmICh0eXBlb2Ygc3RyID09PSAnc3ltYm9sJykge1xuICAgICAgICBzdHJpbmcgPSBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3RyKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHN0cmluZyA9IFN0cmluZyhzdHIpO1xuICAgIH1cblxuICAgIGlmIChjaGFyc2V0ID09PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgcmV0dXJuIGVzY2FwZShzdHJpbmcpLnJlcGxhY2UoLyV1WzAtOWEtZl17NH0vZ2ksIGZ1bmN0aW9uICgkMCkge1xuICAgICAgICAgICAgcmV0dXJuICclMjYlMjMnICsgcGFyc2VJbnQoJDAuc2xpY2UoMiksIDE2KSArICclM0InO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgb3V0ID0gJyc7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGMgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjID09PSAweDJEIC8vIC1cbiAgICAgICAgICAgIHx8IGMgPT09IDB4MkUgLy8gLlxuICAgICAgICAgICAgfHwgYyA9PT0gMHg1RiAvLyBfXG4gICAgICAgICAgICB8fCBjID09PSAweDdFIC8vIH5cbiAgICAgICAgICAgIHx8IChjID49IDB4MzAgJiYgYyA8PSAweDM5KSAvLyAwLTlcbiAgICAgICAgICAgIHx8IChjID49IDB4NDEgJiYgYyA8PSAweDVBKSAvLyBhLXpcbiAgICAgICAgICAgIHx8IChjID49IDB4NjEgJiYgYyA8PSAweDdBKSAvLyBBLVpcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBvdXQgKz0gc3RyaW5nLmNoYXJBdChpKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGMgPCAweDgwKSB7XG4gICAgICAgICAgICBvdXQgPSBvdXQgKyBoZXhUYWJsZVtjXTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGMgPCAweDgwMCkge1xuICAgICAgICAgICAgb3V0ID0gb3V0ICsgKGhleFRhYmxlWzB4QzAgfCAoYyA+PiA2KV0gKyBoZXhUYWJsZVsweDgwIHwgKGMgJiAweDNGKV0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYyA8IDB4RDgwMCB8fCBjID49IDB4RTAwMCkge1xuICAgICAgICAgICAgb3V0ID0gb3V0ICsgKGhleFRhYmxlWzB4RTAgfCAoYyA+PiAxMildICsgaGV4VGFibGVbMHg4MCB8ICgoYyA+PiA2KSAmIDB4M0YpXSArIGhleFRhYmxlWzB4ODAgfCAoYyAmIDB4M0YpXSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGkgKz0gMTtcbiAgICAgICAgYyA9IDB4MTAwMDAgKyAoKChjICYgMHgzRkYpIDw8IDEwKSB8IChzdHJpbmcuY2hhckNvZGVBdChpKSAmIDB4M0ZGKSk7XG4gICAgICAgIG91dCArPSBoZXhUYWJsZVsweEYwIHwgKGMgPj4gMTgpXVxuICAgICAgICAgICAgKyBoZXhUYWJsZVsweDgwIHwgKChjID4+IDEyKSAmIDB4M0YpXVxuICAgICAgICAgICAgKyBoZXhUYWJsZVsweDgwIHwgKChjID4+IDYpICYgMHgzRildXG4gICAgICAgICAgICArIGhleFRhYmxlWzB4ODAgfCAoYyAmIDB4M0YpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xufTtcblxudmFyIGNvbXBhY3QgPSBmdW5jdGlvbiBjb21wYWN0KHZhbHVlKSB7XG4gICAgdmFyIHF1ZXVlID0gW3sgb2JqOiB7IG86IHZhbHVlIH0sIHByb3A6ICdvJyB9XTtcbiAgICB2YXIgcmVmcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgaXRlbSA9IHF1ZXVlW2ldO1xuICAgICAgICB2YXIgb2JqID0gaXRlbS5vYmpbaXRlbS5wcm9wXTtcblxuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwga2V5cy5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbal07XG4gICAgICAgICAgICB2YXIgdmFsID0gb2JqW2tleV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgdmFsICE9PSBudWxsICYmIHJlZnMuaW5kZXhPZih2YWwpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goeyBvYmo6IG9iaiwgcHJvcDoga2V5IH0pO1xuICAgICAgICAgICAgICAgIHJlZnMucHVzaCh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcGFjdFF1ZXVlKHF1ZXVlKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbn07XG5cbnZhciBpc1JlZ0V4cCA9IGZ1bmN0aW9uIGlzUmVnRXhwKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59O1xuXG52YXIgaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlcihvYmopIHtcbiAgICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICEhKG9iai5jb25zdHJ1Y3RvciAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iaikpO1xufTtcblxudmFyIGNvbWJpbmUgPSBmdW5jdGlvbiBjb21iaW5lKGEsIGIpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KGEsIGIpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgYXJyYXlUb09iamVjdDogYXJyYXlUb09iamVjdCxcbiAgICBhc3NpZ246IGFzc2lnbixcbiAgICBjb21iaW5lOiBjb21iaW5lLFxuICAgIGNvbXBhY3Q6IGNvbXBhY3QsXG4gICAgZGVjb2RlOiBkZWNvZGUsXG4gICAgZW5jb2RlOiBlbmNvZGUsXG4gICAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICAgIGlzUmVnRXhwOiBpc1JlZ0V4cCxcbiAgICBtZXJnZTogbWVyZ2Vcbn07XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbnZhciBwcmVzdG9Eb20gPSByZXF1aXJlKFwiLi9kb21zXCIpO1xudmFyIGhlbHBlcnMgPSByZXF1aXJlKFwiLi9oZWxwZXJzXCIpXG52YXIgd2ViUGFyc2VQYXJhbXM7XG52YXIgaU9TUGFyc2VQYXJhbXM7XG52YXIgcGFyc2VQYXJhbXM7XG5jb25zdCBoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlcicpO1xuXG5pZiAod2luZG93Ll9fT1MgPT09IFwiV0VCXCIpIHtcbiAgd2ViUGFyc2VQYXJhbXMgPSBoZWxwZXJzLndlYi5wYXJzZVBhcmFtcztcbn0gZWxzZSBpZiAod2luZG93Ll9fT1MgPT09IFwiSU9TXCIpIHtcbiAgaU9TUGFyc2VQYXJhbXMgPSBoZWxwZXJzLmlvcy5wYXJzZVBhcmFtcztcbn0gZWxzZSBpZiAod2luZG93Ll9fT1MgPT09IFwiQU5EUk9JRFwiKSB7XG4gIHBhcnNlUGFyYW1zID0gaGVscGVycy5hbmRyb2lkLnBhcnNlUGFyYW1zO1xufVxuXG5mdW5jdGlvbiBkb21BbGwoZWxlbSkge1xuICBpZiAoIWVsZW0uX19yZWYpIHtcbiAgICBlbGVtLl9fcmVmID0gY3JlYXRlUHJlc3RvRWxlbWVudCgpO1xuICB9XG5cbiAgaWYgKGVsZW0ucHJvcHMuaWQpIHtcbiAgICBlbGVtLl9fcmVmLl9faWQgPSBwYXJzZUludChlbGVtLnByb3BzLmlkLCAxMCkgfHwgZWxlbS5fX3JlZi5fX2lkO1xuICB9XG5cbiAgdmFyIHR5cGUgPSBoZWxwZXIuY2xvbmUoZWxlbS50eXBlLG51bGwpO1xuICB2YXIgcHJvcHMgPSBoZWxwZXIuY2xvbmUoZWxlbS5wcm9wcyxudWxsKTtcblxuICBpZiAocHJvcHMuZm9jdXMgPT0gZmFsc2UgJiYgIHdpbmRvdy5fX09TID09PSBcIkFORFJPSURcIikge1xuICAgIGRlbGV0ZSBwcm9wcy5mb2N1cztcbiAgfVxuXG4gIHZhciBjaGlsZHJlbiA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGNoaWxkcmVuLnB1c2goZG9tQWxsKGVsZW0uY2hpbGRyZW5baV0pKTtcbiAgfVxuXG5cbiAgaWYgKF9fT1MgPT0gXCJXRUJcIiAmJiBwcm9wcy5vblJlc2l6ZSkge1xuICAgIHdpbmRvdy5fX3Jlc2l6ZUV2ZW50ID0gcHJvcHMub25SZXNpemU7XG4gIH1cblxuICBwcm9wcy5pZCA9IGVsZW0uX19yZWYuX19pZDtcbiAgaWYoZWxlbS5wYXJlbnRUeXBlICYmIHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKVxuICAgIHJldHVybiBwcmVzdG9Eb20oe2VsZW1UeXBlOiB0eXBlLCBwYXJlbnRUeXBlOiBlbGVtLnBhcmVudFR5cGV9LCBwcm9wcywgY2hpbGRyZW4pO1xuXG4gIHJldHVybiBwcmVzdG9Eb20odHlwZSwgcHJvcHMsIGNoaWxkcmVuKTtcbn1cblxuZnVuY3Rpb24gZ2V0RG9tVG9SZW5kZXIoZWxlbSkge1xuICB2YXIgcmVzID0gZG9tQWxsKGVsZW0pO1xuICBpZiAod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVzO1xuICB9XG59XG5cblxuLy8gTm90IGV4cG9ydGVkXG5mdW5jdGlvbiBjbWRGb3JBbmRyb2lkKGNvbmZpZywgc2V0LCB0eXBlKSB7XG4gIGlmIChzZXQpIHtcbiAgICBpZiAoY29uZmlnLmlkKSB7XG4gICAgICB2YXIgb2JqID0gcGFyc2VQYXJhbXModHlwZSwgY29uZmlnLCBcInNldFwiKTtcbiAgICAgIHZhciBjbWQgPSBvYmoucnVuSW5VSS5yZXBsYWNlKFwidGhpcy0+c2V0SWRcIiwgXCJzZXRfdmlldz1jdHgtPmZpbmRWaWV3QnlJZFwiKS5yZXBsYWNlKC90aGlzLT4vZywgXCJnZXRfdmlldy0+XCIpO1xuICAgICAgY21kID0gY21kLnJlcGxhY2UoL1BBUkFNX0NUUl9IT0xERVJbXjtdKi9nLCBcImdldF92aWV3LT5nZXRMYXlvdXRQYXJhbXM7XCIpO1xuICAgICAgb2JqLnJ1bkluVUkgPSBjbWQ7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiSUQgbnVsbCwgdGhpcyBpcyBub3Qgc3VwcG9zZWQgdG8gaGFwcGVuLiBEZWJ1ZyB0aGlzIG9yL2FuZCByYWlzZSBhIGlzc3VlIGluIGJpdGJ1Y2tldC5cIik7XG4gICAgfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHZhciBfaWQgPSBjb25maWcuaWQ7XG4gIHZhciBjbWQgPSBcInNldF92aWV3PWN0eC0+ZmluZFZpZXdCeUlkOmlfXCIgKyBfaWQgKyBcIjtcIjtcbiAgLy8gdmFyIHJ1bkluVUk7XG4gIGRlbGV0ZSBjb25maWcuaWQ7XG4gIGNvbmZpZy5yb290ID0gXCJ0cnVlXCI7XG4gIHZhciBvYmogPSBwYXJzZVBhcmFtcyh0eXBlLCBjb25maWcsIFwiZ2V0XCIpO1xuICBvYmoucnVuSW5VSSA9IGNtZCArIG9iai5ydW5JblVJICsgJzsnO1xuICBvYmouaWQgPSBfaWQ7XG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIGdldFJ1bkluVUlDbWQocHJvcCkge1xuICB2YXIgY21kO1xuICBpZiAod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpIHtcbiAgICBjbWQgPSBjbWRGb3JBbmRyb2lkKHByb3AsIHRydWUsIFwibGluZWFyTGF5b3V0XCIpLnJ1bkluVUk7XG4gIH0gZWxzZSBpZiAod2luZG93Ll9fT1MgPT0gXCJJT1NcIil7XG4gICAgY21kID0gcHJvcDtcbiAgfSBlbHNlIHtcbiAgICBjbWQgPSB3ZWJQYXJzZVBhcmFtcyhcImxpbmVhckxheW91dFwiLCBwcm9wLCBcInNldFwiKTtcbiAgfVxuICByZXR1cm4gY21kO1xufVxuXG5cblxuLy8gTm90IGV4cG9ydGVkXG5mdW5jdGlvbiBhcHBseVByb3AoZWxlbWVudCwgYXR0cmlidXRlLCBzZXQpIHtcbiAgdmFyIHByb3AgPSB7XG4gICAgaWQ6IGVsZW1lbnQuX19yZWYuX19pZFxuICB9XG4gIHByb3BbYXR0cmlidXRlLnZhbHVlMF0gPSBhdHRyaWJ1dGUudmFsdWUxO1xuXG4gIGlmIChhdHRyaWJ1dGUudmFsdWUwID09ICdmb2N1cycgJiYgYXR0cmlidXRlLnZhbHVlMSA9PSBmYWxzZSAmJiAgd2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpIHtcbiAgICB2YXIgY21kID0gY21kRm9yQW5kcm9pZChwcm9wLCBzZXQsIGVsZW1lbnQudHlwZSk7XG4gICAgaWYgKEFuZHJvaWQudXBkYXRlUHJvcGVydGllcykge1xuICAgICAgQW5kcm9pZC51cGRhdGVQcm9wZXJ0aWVzKEpTT04uc3RyaW5naWZ5KGNtZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBBbmRyb2lkLnJ1bkluVUkoY21kLnJ1bkluVUksIG51bGwpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh3aW5kb3cuX19PUyA9PSBcIklPU1wiKXtcbiAgICBBbmRyb2lkLnJ1bkluVUkocHJvcCk7XG4gIH0gZWxzZSB7XG4gICAgQW5kcm9pZC5ydW5JblVJKHdlYlBhcnNlUGFyYW1zKFwibGluZWFyTGF5b3V0XCIsIHByb3AsIFwic2V0XCIpKTtcbiAgfVxuICAvLyBBbmRyb2lkLnJ1bkluVUkocGFyc2VQYXJhbXMoXCJsaW5lYXJMYXlvdXRcIiwgcHJvcCwgXCJzZXRcIikpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlVmlldyhlbGVtZW50LCBhdHRyaWJ1dGUsIHJlbW92ZVByb3ApIHtcbiAgLy8gY29uc29sZS5sb2coXCJSRVBMQUNFIFZJRVdcIiwgZWxlbWVudC5fX3JlZi5fX2lkLCBlbGVtZW50LnByb3BzKTtcbiAgdmFyIHByb3BzID0gaGVscGVyLmNsb25lKGVsZW1lbnQucHJvcHMsbnVsbCk7XG4gIHByb3BzLmlkID0gZWxlbWVudC5fX3JlZi5fX2lkO1xuICB2YXIgcmVwO1xuICB2YXIgdmlld0dyb3VwcyA9IFtcImxpbmVhckxheW91dFwiLCBcInJlbGF0aXZlTGF5b3V0XCIsIFwic2Nyb2xsVmlld1wiLCBcImZyYW1lTGF5b3V0XCIsIFwiaG9yaXpvbnRhbFNjcm9sbFZpZXdcIl07XG5cbiAgaWYgKHZpZXdHcm91cHMuaW5kZXhPZihlbGVtZW50LnR5cGUpICE9IC0xKXtcbiAgICBwcm9wcy5yb290ID0gdHJ1ZTtcbiAgICByZXAgPSBwcmVzdG9Eb20oZWxlbWVudC50eXBlLCBwcm9wcywgW10pO1xuICB9IGVsc2UgaWYgKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKSB7XG4gICAgcmVwID0gcHJlc3RvRG9tKHtlbGVtVHlwZTogZWxlbWVudC50eXBlLCBwYXJlbnRUeXBlOiBlbGVtZW50LnBhcmVudE5vZGUudHlwZX0sIHByb3BzLCBbXSk7XG4gIH0gZWxzZSB7XG4gICAgcmVwID0gcHJlc3RvRG9tKGVsZW1lbnQudHlwZSwgcHJvcHMsIFtdKTtcbiAgfVxuICBpZih3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIil7XG4gICAgQW5kcm9pZC5yZXBsYWNlVmlldyhKU09OLnN0cmluZ2lmeShyZXApLCBlbGVtZW50Ll9fcmVmLl9faWQpO1xuICB9IGVsc2Uge1xuICAgIEFuZHJvaWQucmVwbGFjZVZpZXcocmVwLCBlbGVtZW50Ll9fcmVmLl9faWQpO1xuICB9XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlUHJlc3RvRWxlbWVudCgpIHtcbiAgICBpZih0eXBlb2Yod2luZG93Ll9fdWlfaWRfc2VxdWVuY2UpICE9IFwidW5kZWZpbmVkXCIgJiYgd2luZG93Ll9fdWlfaWRfc2VxdWVuY2UgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4geyBfX2lkIDogKyt3aW5kb3cuX191aV9pZF9zZXF1ZW5jZSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5fX3VpX2lkX3NlcXVlbmNlID0gdHlwZW9mIEFuZHJvaWQuZ2V0TmV3SUQgPT0gXCJmdW5jdGlvblwiID8gcGFyc2VJbnQoQW5kcm9pZC5nZXROZXdJRCgpKSAqIDEwMDAwMDAgOiB3aW5kb3cuX19QUkVTVE9fSUQgO1xuICAgICAgICByZXR1cm4geyBfX2lkIDogKyt3aW5kb3cuX191aV9pZF9zZXF1ZW5jZSB9O1xuICAgIH1cbn07XG5cblxuZnVuY3Rpb24gbW92ZUNoaWxkKGNoaWxkLCBwYXJlbnQsIGluZGV4KSB7XG4gIEFuZHJvaWQubW92ZVZpZXcoY2hpbGQuX19yZWYuX19pZCwgaW5kZXgpO1xufVxuXG5cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGQoY2hpbGQsIHBhcmVudCwgaW5kZXgpIHtcbiAgLy8gY29uc29sZS5sb2coXCJSZW1vdmUgY2hpbGQgOlwiLCBjaGlsZC50eXBlKTtcbiAgQW5kcm9pZC5yZW1vdmVWaWV3KGNoaWxkLl9fcmVmLl9faWQgKyBcIlwiKTtcbn1cblxuZnVuY3Rpb24gYWRkQ2hpbGQoY2hpbGQsIHBhcmVudCwgaW5kZXgpIHtcbiAgaWYoY2hpbGQudHlwZSA9PSBudWxsKSB7XG4gICAgY29uc29sZS53YXJuKFwiY2hpbGQgbnVsbFwiKTtcbiAgfVxuICAvLyBjb25zb2xlLmxvZyhcIkFkZCBjaGlsZCA6XCIsIGNoaWxkLl9fcmVmLl9faWQsIGNoaWxkLnR5cGUpO1xuICB2YXIgdmlld0dyb3VwcyA9IFtcImxpbmVhckxheW91dFwiLCBcInJlbGF0aXZlTGF5b3V0XCIsIFwic2Nyb2xsVmlld1wiLCBcImZyYW1lTGF5b3V0XCIsIFwiaG9yaXpvbnRhbFNjcm9sbFZpZXdcIl07XG4gIGlmICh3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIikge1xuICAgIGlmICh2aWV3R3JvdXBzLmluZGV4T2YoY2hpbGQudHlwZSkgIT0gLTEpe1xuICAgICAgY2hpbGQucHJvcHMucm9vdCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkLnBhcmVudFR5cGUgPSBwYXJlbnQudHlwZTtcbiAgICB9XG4gICAgQW5kcm9pZC5hZGRWaWV3VG9QYXJlbnQocGFyZW50Ll9fcmVmLl9faWQgKyBcIlwiLCBKU09OLnN0cmluZ2lmeShkb21BbGwoY2hpbGQpKSwgaW5kZXgsIG51bGwsIG51bGwpO1xuICB9XG4gIGVsc2VcbiAgICBBbmRyb2lkLmFkZFZpZXdUb1BhcmVudChwYXJlbnQuX19yZWYuX19pZCwgZG9tQWxsKGNoaWxkKSwgaW5kZXgsIG51bGwsIG51bGwpO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRyaWJ1dGUoZWxlbWVudCwgYXR0cmlidXRlKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwiYWRkIGF0dHIgOlwiLCBhdHRyaWJ1dGUpO1xuICBlbGVtZW50LnByb3BzW2F0dHJpYnV0ZS52YWx1ZTBdID0gYXR0cmlidXRlLnZhbHVlMTtcbiAgYXBwbHlQcm9wKGVsZW1lbnQsIGF0dHJpYnV0ZSwgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZShlbGVtZW50LCBhdHRyaWJ1dGUpIHtcbiAgLy8gY29uc29sZS5sb2coXCJyZW1vdmUgYXR0ciA6XCIsIGF0dHJpYnV0ZSk7XG4gIHJlcGxhY2VWaWV3KGVsZW1lbnQsIGF0dHJpYnV0ZSwgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUF0dHJpYnV0ZShlbGVtZW50LCBhdHRyaWJ1dGUpIHtcbiAgLy8gY29uc29sZS5sb2coXCJ1cGRhdGUgYXR0ciA6XCIsIGF0dHJpYnV0ZSk7XG4gIGVsZW1lbnQucHJvcHNbYXR0cmlidXRlLnZhbHVlMF0gPSBhdHRyaWJ1dGUudmFsdWUxO1xuXG4gIGFwcGx5UHJvcChlbGVtZW50LCBhdHRyaWJ1dGUsIGZhbHNlKTtcbn1cblxuXG5mdW5jdGlvbiBpbnNlcnREb20ocm9vdCwgZG9tLCBjYikge1xuICByb290LmNoaWxkcmVuLnB1c2goZG9tKTtcbiAgZG9tLnBhcmVudE5vZGUgPSByb290O1xuICBkb20uX19yZWYgPSBjcmVhdGVQcmVzdG9FbGVtZW50KCk7XG4gIHdpbmRvdy5OID0gcm9vdDtcblxuICB2YXIgcm9vdElkID0gd2luZG93Ll9fUk9PVFNDUkVFTi5pZFNldC5yb290O1xuXG4gIGRvbS5wcm9wcy5yb290ID0gdHJ1ZTtcblxuICB2YXIgbGVuZ3RoID0gd2luZG93Ll9fUk9PVFNDUkVFTi5pZFNldC5jaGlsZC5wdXNoKGRvbS5fX3JlZi5fX2lkKTtcblxuICB2YXIgY2FsbGJhY2sgPSB3aW5kb3cuY2FsbGJhY2tNYXBwZXIoZXhlY3V0ZVBvc3RQcm9jZXNzKGNiKSk7XG4gIGlmICh3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIikge1xuICAgIEFuZHJvaWQuYWRkVmlld1RvUGFyZW50KHJvb3RJZCArIFwiXCIsIEpTT04uc3RyaW5naWZ5KGRvbUFsbChkb20pKSwgbGVuZ3RoIC0gMSwgY2FsbGJhY2ssIG51bGwpO1xuICB9XG4gIGVsc2Uge1xuICAgIEFuZHJvaWQuYWRkVmlld1RvUGFyZW50KHJvb3RJZCwgZG9tQWxsKGRvbSksIGxlbmd0aCAtIDEsIGNhbGxiYWNrLCBudWxsKTtcbiAgfVxuXG4gIHJldHVybiBkb20uX19yZWYuX19pZDtcblxufVxuXG5cbmZ1bmN0aW9uIGV4ZWN1dGVQb3N0UHJvY2VzcyhjYikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY2IoKTtcblxuICAgIGlmKHdpbmRvdy5fX2R1aV9zY3JlZW4gJiYgd2luZG93W1wiYWZ0ZXJSZW5kZXJcIl0pIHtcbiAgICAgIGZvciAodmFyIHRhZyBpbiB3aW5kb3dbXCJhZnRlclJlbmRlclwiXVt3aW5kb3cuX19kdWlfc2NyZWVuXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHdpbmRvd1tcImFmdGVyUmVuZGVyXCJdW3dpbmRvdy5fX2R1aV9zY3JlZW5dW3RhZ10oKSgpO1xuICAgICAgICAgIHdpbmRvd1tcImFmdGVyUmVuZGVyXCJdW3dpbmRvdy5fX2R1aV9zY3JlZW5dW1wiZXhlY3V0ZWRcIl0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChKQnJpZGdlICYmIEpCcmlkZ2Uuc2V0U2hhZG93KSB7XG4gICAgICBmb3IgKHZhciB0YWcgaW4gd2luZG93LnNoYWRvd09iamVjdCkge1xuICAgICAgICBKQnJpZGdlLnNldFNoYWRvdyh3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJsZXZlbFwiXSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcInZpZXdJZFwiXSksXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJiYWNrZ3JvdW5kQ29sb3JcIl0pLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkod2luZG93LnNoYWRvd09iamVjdFt0YWddW1wiYmx1clZhbHVlXCJdKSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcInNoYWRvd0NvbG9yXCJdKSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImR4XCJdKSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImR5XCJdKSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcInNwcmVhZFwiXSksXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJmYWN0b3JcIl0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZG9tQWxsOiBkb21BbGwsXG4gIGdldERvbVRvUmVuZGVyOiBnZXREb21Ub1JlbmRlcixcbiAgZ2V0UnVuSW5VSUNtZDogZ2V0UnVuSW5VSUNtZCxcbiAgcmVwbGFjZVZpZXc6IHJlcGxhY2VWaWV3LFxuICBjcmVhdGVQcmVzdG9FbGVtZW50OiBjcmVhdGVQcmVzdG9FbGVtZW50LFxuICBtb3ZlQ2hpbGQ6IG1vdmVDaGlsZCxcbiAgcmVtb3ZlQ2hpbGQ6IHJlbW92ZUNoaWxkLFxuICBhZGRDaGlsZDogYWRkQ2hpbGQsXG4gIGFkZEF0dHJpYnV0ZTogYWRkQXR0cmlidXRlLFxuICByZW1vdmVBdHRyaWJ1dGU6IHJlbW92ZUF0dHJpYnV0ZSxcbiAgdXBkYXRlUHJvcGVydHk6IHVwZGF0ZUF0dHJpYnV0ZSxcbiAgYWRkUHJvcGVydHk6IGFkZEF0dHJpYnV0ZSxcbiAgaW5zZXJ0RG9tOiBpbnNlcnREb21cbn07XG5cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuICogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4gKlxuICogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4gKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuICogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuICogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiAqIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuICogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4gKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuICogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiAqL1xuXG52YXIge1xuICBpbmZsYXRlVmlldyxcbiAgY29tcHV0ZUNoaWxkRGltZW5zXG59ID0gcmVxdWlyZShcIi4vUmVuZGVyXCIpO1xudmFyIGhlbHBlciA9IHJlcXVpcmUoJy4uL2hlbHBlcicpO1xuXG5cbmZ1bmN0aW9uIGdldFNjcmVlbkRpbWVuc2lvbnMoKSB7XG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgfSk7XG59XG5cblxuZnVuY3Rpb24gcnVuSW5VSShjbWQpIHtcbiAgaWYgKHR5cGVvZiBjbWQgPT0gXCJzdHJpbmdcIilcbiAgICByZXR1cm5cblxuICBsZXQgaWQgPSBjbWQuaWRcbiAgaWYoaWQpe1xuICAgIGxldCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG5cbiAgICBpZihlbGVtKXtcbiAgICAgIGxldCB2aWV3ID0gd2luZG93Ll9fVklFV1NbaWRdXG4gICAgICB2aWV3LnByb3BzID0gaGVscGVyLm1lcmdlKHZpZXcucHJvcHMsIGNtZClcbiAgICAgIFxuICAgICAgbGV0IHBhcmVudElkID0gbnVsbFxuICAgICAgbGV0IHBhcmVudEVsZW0gPSBudWxsXG4gICAgICBsZXQgcGFyZW50VmlldyA9IG51bGxcblxuICAgICAgaWYoZWxlbSl7XG4gICAgICAgIGxldCB2aWV3ID0gd2luZG93Ll9fVklFV1NbaWRdXG4gICAgICAgIHZpZXcucHJvcHMgPSBoZWxwZXIubWVyZ2Uodmlldy5wcm9wcywgY21kKVxuICAgICAgICBcbiAgICAgICAgbGV0IHBhcmVudElkID0gbnVsbFxuICAgICAgICBsZXQgcGFyZW50RWxlbSA9IG51bGxcbiAgICAgICAgbGV0IHBhcmVudFZpZXcgPSBudWxsXG5cbiAgICAgICAgaWYodmlldy50eXBlID09ICdtb2RhbCcpe1xuICAgICAgICAgIHBhcmVudElkID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ3ZpcnR1YWxfcGFyZW50JylcblxuICAgICAgICAgIGlmKHBhcmVudElkKXtcbiAgICAgICAgICAgIHBhcmVudFZpZXcgPSB3aW5kb3cuX19WSUVXU1twYXJlbnRJZF1cbiAgICAgICAgICAgIHBhcmVudEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnRJZClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYocGFyZW50RWxlbSAmJiBwYXJlbnRWaWV3KXtcbiAgICAgICAgICAgICAgaW5mbGF0ZVZpZXcodmlldywgcGFyZW50RWxlbSwgbnVsbCwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHBhcmVudElkID0gZWxlbS5wYXJlbnROb2RlLmlkXG5cbiAgICAgICAgICBpZihwYXJlbnRJZCl7XG4gICAgICAgICAgICBwYXJlbnRWaWV3ID0gd2luZG93Ll9fVklFV1NbcGFyZW50SWRdXG4gICAgICAgICAgICBwYXJlbnRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50SWQpXG5cbiAgICAgICAgICAgIGlmKHBhcmVudEVsZW0gJiYgcGFyZW50Vmlldyl7XG4gICAgICAgICAgICAgIGxldCBzaWJsaW5nVmlldyA9IG51bGxcblxuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmVudFZpZXcuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZihwYXJlbnRWaWV3LmNoaWxkcmVuW2ldLnByb3BzLmlkID09IGlkKXtcbiAgICAgICAgICAgICAgICAgIGlmKGkgIT0gMClcbiAgICAgICAgICAgICAgICAgICAgc2libGluZ1ZpZXcgPSBwYXJlbnRWaWV3LmNoaWxkcmVuW2ktMV1cbiAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgc2libGluZ1ZpZXcgPSBwYXJlbnRWaWV3XG4gICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbXB1dGVDaGlsZERpbWVucyhwYXJlbnRWaWV3KVxuICAgICAgICAgICAgICBpbmZsYXRlVmlldyh2aWV3LCBwYXJlbnRFbGVtLCBzaWJsaW5nVmlldywgZmFsc2UsIGZhbHNlLCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvL3JlY29tcHV0ZSgpXG4gIC8vUmVuZGVyLnJ1bkluVUkoY21kKVxufVxuXG5mdW5jdGlvbiBSZW5kZXIodmlldywgY2IpIHtcbiAgLyogR2xvYmFsIFN0eWxlIFRhZyAqL1xuICBsZXQgc3R5bGVfaWQgPSB3aW5kb3cuX19TVFlMRV9JRDtcbiAgXG4gIGxldCBzdHlsZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdHlsZV9pZCk7XG4gIGlmKCFzdHlsZUVsZW0gfHwgc3R5bGVFbGVtID09IHVuZGVmaW5lZCl7XG4gICAgc3R5bGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZUVsZW0uc2V0QXR0cmlidXRlKCdpZCcsIHN0eWxlX2lkKTtcbiAgICBzdHlsZUVsZW0udHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgXG4gICAgaWYoc3R5bGVFbGVtLnN0eWxlU2hlZXQpe1xuICAgICAgc3R5bGVFbGVtLnN0eWxlU2hlZXQuY3NzVGV4dCA9IFwiXCI7XG4gICAgfWVsc2V7XG4gICAgICBzdHlsZUVsZW0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIikpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtKTtcbiAgfVxuICAvKiBHbG9iYWwgU3R5bGUgVGFnIEVuZCAqL1xuXG4gIGxldCBwYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBsZXQgcGFyZW50VmlldyA9IHtcbiAgICB0eXBlOiBcImxpbmVhckxheW91dFwiLFxuICAgIHByb3BzOiB7XG4gICAgICBcImhcIjogcGFyZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICBcIndcIjogcGFyZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICB9LFxuICAgIGNoaWxkcmVuOiBbdmlld11cbiAgfTtcblxuICBjb21wdXRlQ2hpbGREaW1lbnMocGFyZW50Vmlldyk7XG4gIGNvbnN0IGVsZW0gPSBpbmZsYXRlVmlldyh2aWV3LCBwYXJlbnRFbGVtZW50LCBudWxsKTtcblxuICBpZiAoY2IpXG4gICAgd2luZG93LmNhbGxVSUNhbGxiYWNrKGNiKTtcblxuICBpZiAocGFyZW50RWxlbWVudC5jaGlsZEVsZW1lbnRDb3VudCA+IDEpIHtcbiAgICBsZXQgaXRlcmFibGVDaGlsZE5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwocGFyZW50RWxlbWVudC5jaGlsZHJlbik7XG4gICAgaXRlcmFibGVDaGlsZE5vZGVzLmZvckVhY2goKGVhY2gpID0+IHtcbiAgICAgIGhlbHBlci5jbGVhclZpZXdFeHRlcm5hbHMod2luZG93Ll9fVklFV1NbZWFjaC5pZF0pO1xuICAgICAgZWFjaC5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW92ZVZpZXcoaWQsIGluZGV4KSB7XG4gIGlmICghd2luZG93Ll9fVklFV1NbaWRdKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IobmV3IEVycm9yKFwiTW92ZVZpZXc6IEludmFsaWQgdmlldyBJRDogXCIgKyBpZCkpO1xuICB9XG4gIHZhciB2aWV3ID0gd2luZG93Ll9fVklFV1NbaWRdO1xuICB2YXIgdmlld0VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7IFxuICB2YXIgcGFyZW50SWQgPSB2aWV3RWxlbS5wYXJlbnROb2RlLmlkO1xuICB2YXIgcGFyZW50ID0gd2luZG93Ll9fVklFV1NbcGFyZW50SWRdO1xuICB2YXIgcGFyZW50RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudElkKTtcbiAgdmFyIGNoaWxkcmVuID0gcGFyZW50LmNoaWxkcmVuO1xuICBjaGlsZHJlbi5zcGxpY2UoY2hpbGRyZW4uaW5kZXhPZih2aWV3KSwgMSk7XG4gIGNoaWxkcmVuLnNwbGljZShpbmRleCwgMCwgdmlldyk7XG4gIGNvbXB1dGVDaGlsZERpbWVucyhwYXJlbnQpXG5cbiAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgaW5mbGF0ZVZpZXcoY2hpbGQsIHBhcmVudEVsZW0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFZpZXdUb1BhcmVudChpZCwgdmlldywgaW5kZXgsIGNiLCByZXBsYWNlKSB7XG4gIGxldCBwYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG4gIGxldCBwYXJlbnRWaWV3ID0gd2luZG93Ll9fVklFV1NbaWRdXG4gIGxldCBzaWJsaW5nVmlldyA9IG51bGxcblxuICBpZighcGFyZW50RWxlbWVudCB8fCAhcGFyZW50VmlldylcbiAgICByZXR1cm5cblxuICBwYXJlbnRWaWV3LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMCwgdmlldylcbiAgXG4gIGlmKGluZGV4ID09IDApXG4gICAgc2libGluZ1ZpZXcgPSBwYXJlbnRWaWV3XG4gIGVsc2VcbiAgICBzaWJsaW5nVmlldyA9IHBhcmVudFZpZXcuY2hpbGRyZW5baW5kZXgtMV1cbiAgXG4gIHZhciBlbGVtID0gaW5mbGF0ZVZpZXcodmlldywgbnVsbCwgc2libGluZ1ZpZXcpXG4gIC8vIGRlYnVnZ2VyOyBcbiAgdmFyIHN1YkVsZW0gPSBudWxsOyAgLy8gdGhpcyBiYXNpY2FsbHkgaXMgYmVpbmcgdXNlZCBmb3IgbGFiZWwgcHJvcGVydHkgXG5cbiAgaWYgKHBhcmVudEVsZW1lbnQpIHtcbiAgICBsZXQgc2libGluZ0VsZW1lbnQgPSBzaWJsaW5nVmlldyA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNpYmxpbmdWaWV3LnByb3BzLmlkKSA6IG51bGw7XG5cbiAgICBpZiAoc2libGluZ0VsZW1lbnQgJiYgc2libGluZ0VsZW1lbnQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50ID09IHNpYmxpbmdFbGVtZW50KSB7IC8vIFByZXBlbmRcbiAgICAgICAgICAgIGlmIChzdWJFbGVtKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoc3ViRWxlbSwgcGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGVsZW0sIHBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgIH0gZWxzZSB7IC8vIEluc2VydCBpbiBzcGVjaWZpZWQgcG9zaXRpb25cbiAgICAgICAgICAgIGxldCBuZXh0U2libGluZ0VsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5uZXh0U2libGluZztcblxuICAgICAgICAgICAgcGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoZWxlbSwgbmV4dFNpYmxpbmdFbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChzdWJFbGVtKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoc3ViRWxlbSwgbmV4dFNpYmxpbmdFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICAgIGlmIChzdWJFbGVtKSB7XG4gICAgICAgICAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKHN1YkVsZW0pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBpZiAoY2IpXG4gICAgd2luZG93LmNhbGxVSUNhbGxiYWNrKGNiKVxufVxuXG5mdW5jdGlvbiBnZXRDaGlsZE1vZGFsVmlld3Modmlldykge1xuICBsZXQgbW9kYWxWaWV3cyA9IFtdXG5cbiAgaWYodmlldy5jaGlsZHJlbikge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB2aWV3LmNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcbiAgICAgIGxldCBjaGlsZFZpZXcgPSB2aWV3LmNoaWxkcmVuW2ldXG5cbiAgICAgIGlmKGNoaWxkVmlldy50eXBlID09ICdtb2RhbCcpe1xuICAgICAgICBtb2RhbFZpZXdzLnB1c2goY2hpbGRWaWV3KVxuICAgICAgfWVsc2V7XG4gICAgICAgIGxldCBpdGVtcyA9IGdldENoaWxkTW9kYWxWaWV3cyhjaGlsZFZpZXcpXG4gICAgICAgIGlmKGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCA+IDApe1xuICAgICAgICAgIGlmKG1vZGFsVmlld3MubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBtb2RhbFZpZXdzID0gaXRlbXNcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIG1vZGFsVmlld3MgPSBtb2RhbFZpZXdzLmNvbmNhdChpdGVtcylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbW9kYWxWaWV3c1xufVxuXG5mdW5jdGlvbiByZW1vdmVWaWV3KGlkKSB7XG4gIGxldCB2aWV3RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgaWYoIXZpZXdFbGVtKXtcbiAgICBoZWxwZXIuY2xlYXJWaWV3RXh0ZXJuYWxzKHZpZXcpXG4gICAgcmV0dXJuXG4gIH1cblxuICBsZXQgcGFyZW50SWQgPSB2aWV3RWxlbS5wYXJlbnROb2RlLmlkXG4gIGlmKCFwYXJlbnRJZCl7XG4gICAgaGVscGVyLmNsZWFyVmlld0V4dGVybmFscyh2aWV3KVxuICAgIHZpZXdFbGVtLnJlbW92ZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBsZXQgcGFyZW50RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudElkKTtcbiAgaWYoIXBhcmVudEVsZW0pe1xuICAgIGhlbHBlci5jbGVhclZpZXdFeHRlcm5hbHModmlldylcbiAgICB2aWV3RWxlbS5yZW1vdmUoKVxuICAgIHJldHVyblxuICB9XG5cbiAgbGV0IHZpZXcgPSB3aW5kb3cuX19WSUVXU1tpZF1cbiAgXG4gIGlmKCF2aWV3IHx8ICF2aWV3LnR5cGUpXG4gICAgcmV0dXJuXG4gIFxuICBsZXQgcGFyZW50ID0gbnVsbFxuICBsZXQgaWR4XG4gICAgICAgIFxuICBpZih2aWV3LnR5cGUgPT0gJ21vZGFsJyl7XG4gICAgbGV0IHZpcnR1YWxQYXJlbnRJZCA9IHZpZXdFbGVtLmdldEF0dHJpYnV0ZSgndmlydHVhbF9wYXJlbnQnKVxuICAgIHBhcmVudCA9IHdpbmRvdy5fX1ZJRVdTW3ZpcnR1YWxQYXJlbnRJZF1cblxuICAgIGlkeCA9IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHZpZXcpXG4gICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpZHgsIDEpXG5cbiAgICBoZWxwZXIuY2xlYXJWaWV3RXh0ZXJuYWxzKHZpZXcpXG4gICAgcGFyZW50RWxlbS5yZW1vdmUoKVxuICB9ZWxzZXtcbiAgICAvKiBNb2RhbCB2aWV3IGFtb25nIGNoaWxkcmVuICovXG4gICAgbGV0IGNoaWxkTW9kYWxWaWV3cyA9IGdldENoaWxkTW9kYWxWaWV3cyh2aWV3KVxuICAgIGlmKGNoaWxkTW9kYWxWaWV3cyAmJiBjaGlsZE1vZGFsVmlld3MubGVuZ3RoID4gMCl7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2hpbGRNb2RhbFZpZXdzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IG1vZGFsVmlldyA9IGNoaWxkTW9kYWxWaWV3c1tpXVxuICAgICAgICBsZXQgbW9kYWxFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kYWxWaWV3LnByb3BzLmlkKVxuXG4gICAgICAgIGlmKG1vZGFsRWxlbSl7XG4gICAgICAgICAgbGV0IGJhY2tkcm9wSWQgPSBtb2RhbEVsZW0ucGFyZW50Tm9kZS5pZFxuICAgICAgICAgIGxldCBiYWNrZHJvcEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChiYWNrZHJvcElkKVxuXG4gICAgICAgICAgYmFja2Ryb3BFbGVtLnJlbW92ZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLyogTW9kYWwgdmlldyBhbW9uZyBjaGlsZHJlbiBlbmQgKi9cblxuICAgIHBhcmVudCA9IHdpbmRvdy5fX1ZJRVdTW3BhcmVudElkXVxuXG4gICAgaWR4ID0gcGFyZW50LmNoaWxkcmVuLmluZGV4T2YodmlldylcbiAgICBwYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSlcblxuICAgIGhlbHBlci5jbGVhclZpZXdFeHRlcm5hbHModmlldylcbiAgICB2aWV3RWxlbS5yZW1vdmUoKVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VNb2RhbFZpZXcodmlldywgaWQpIHtcbiAgbGV0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcbiAgaWYoIWVsZW0pXG4gICAgcmV0dXJuXG5cbiAgbGV0IGJhY2tkcm9wSWQgPSBlbGVtLnBhcmVudE5vZGUuaWRcbiAgbGV0IGJhY2tkcm9wRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJhY2tkcm9wSWQpXG5cbiAgbGV0IHBhcmVudElkID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ3ZpcnR1YWxfcGFyZW50JylcbiAgbGV0IHBhcmVudFZpZXcgPSB3aW5kb3cuX19WSUVXU1twYXJlbnRJZF1cbiAgbGV0IHBhcmVudEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnRJZClcblxuICBsZXQgb2xkVmlldyA9IG51bGxcbiAgXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyZW50Vmlldy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGlmKHBhcmVudFZpZXcuY2hpbGRyZW5baV0ucHJvcHMuaWQgPT0gaWQpe1xuICAgICAgb2xkVmlldyA9IHBhcmVudFZpZXcuY2hpbGRyZW5baV1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmKCFvbGRWaWV3KVxuICAgIHJldHVyblxuXG4gIC8qIEdldCBDaGlsZHJlbiAqL1xuICBsZXQgY2hpbGRyZW5FbGVtID0gW11cbiAgbGV0IGNoaWxkcmVuID0gb2xkVmlldy5jaGlsZHJlblxuXG4gIGlmKGVsZW0gJiYgY2hpbGRyZW4pe1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKyl7XG4gICAgICBsZXQgY2hpbGRJZCA9IGNoaWxkcmVuW2ldLnByb3BzLmlkXG4gICAgICBsZXQgY2hpbGRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2hpbGRJZClcblxuICAgICAgaWYoY2hpbGRFbGVtKVxuICAgICAgICBjaGlsZHJlbkVsZW0ucHVzaChjaGlsZEVsZW0pXG4gICAgfVxuICB9XG4gIC8qIEdldCBDaGlsZHJlbiBFbmQgKi9cblxuICBvbGRWaWV3LnByb3BzID0gdmlldy5wcm9wc1xuICBiYWNrZHJvcEVsZW0ucmVtb3ZlKClcbiAgaW5mbGF0ZVZpZXcob2xkVmlldywgcGFyZW50RWxlbSwgbnVsbCwgdHJ1ZSlcbiAgd2luZG93Ll9fVklFV1NbaWRdID0gb2xkVmlld1xuXG4gIC8qIEFwcGVuZCBDaGlsZHJlbiAqL1xuICBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG5cbiAgaWYoZWxlbSAmJiBjaGlsZHJlbkVsZW0ubGVuZ3RoID4gMCl7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuRWxlbS5sZW5ndGg7IGkrKyl7XG4gICAgICBlbGVtLmFwcGVuZENoaWxkKGNoaWxkcmVuRWxlbVtpXSlcbiAgICB9XG4gIH1cbiAgLyogQXBwZW5kIENoaWxkcmVuIEVuZCAqL1xufVxuXG5mdW5jdGlvbiByZXBsYWNlVmlldyh2aWV3LCBpZCkge1xuICBpZih2aWV3LnR5cGUgPT0gJ21vZGFsJyl7XG4gICAgcmVwbGFjZU1vZGFsVmlldyh2aWV3LCBpZClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGxldCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG4gIGlmKCFlbGVtKVxuICAgIHJldHVyblxuXG4gIGxldCBwYXJlbnRJZCA9IGVsZW0ucGFyZW50Tm9kZS5pZFxuICBsZXQgcGFyZW50RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudElkKVxuICBsZXQgcGFyZW50VmlldyA9IHdpbmRvdy5fX1ZJRVdTW3BhcmVudElkXVxuXG4gIGxldCBvbGRWaWV3ID0gbnVsbFxuICBsZXQgc2libGluZ1ZpZXcgPSBudWxsXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJlbnRWaWV3LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYocGFyZW50Vmlldy5jaGlsZHJlbltpXS5wcm9wcy5pZCA9PSBpZCl7XG4gICAgICBvbGRWaWV3ID0gcGFyZW50Vmlldy5jaGlsZHJlbltpXVxuXG4gICAgICBpZihpICE9IDApXG4gICAgICAgIHNpYmxpbmdWaWV3ID0gcGFyZW50Vmlldy5jaGlsZHJlbltpLTFdXG4gICAgICBlbHNlXG4gICAgICAgIHNpYmxpbmdWaWV3ID0gcGFyZW50Vmlld1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIFxuICBpZighb2xkVmlldylcbiAgICByZXR1cm5cblxuICAvKiBHZXQgQ2hpbGRyZW4gKi9cbiAgbGV0IGNoaWxkcmVuRWxlbSA9IFtdXG4gIGxldCBjaGlsZHJlbiA9IG9sZFZpZXcuY2hpbGRyZW5cblxuICBpZihlbGVtICYmIGNoaWxkcmVuKXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xuICAgICAgbGV0IGNoaWxkSWQgPSBjaGlsZHJlbltpXS5wcm9wcy5pZFxuICAgICAgbGV0IGNoaWxkRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNoaWxkSWQpXG5cbiAgICAgIGlmKGNoaWxkRWxlbSlcbiAgICAgICAgY2hpbGRyZW5FbGVtLnB1c2goY2hpbGRFbGVtKVxuICAgIH1cbiAgfVxuICAvKiBHZXQgQ2hpbGRyZW4gRW5kICovXG5cbiAgb2xkVmlldy5wcm9wcyA9IHZpZXcucHJvcHNcbiAgcGFyZW50RWxlbS5yZW1vdmVDaGlsZChlbGVtKVxuICBpbmZsYXRlVmlldyhvbGRWaWV3LCBwYXJlbnRFbGVtLCBzaWJsaW5nVmlldywgdHJ1ZSlcbiAgd2luZG93Ll9fVklFV1NbaWRdID0gb2xkVmlld1xuXG4gIC8qIEFwcGVuZCBDaGlsZHJlbiAqL1xuICBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG5cbiAgaWYoZWxlbSAmJiBjaGlsZHJlbkVsZW0ubGVuZ3RoID4gMCl7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuRWxlbS5sZW5ndGg7IGkrKyl7XG4gICAgICBlbGVtLmFwcGVuZENoaWxkKGNoaWxkcmVuRWxlbVtpXSlcbiAgICB9XG4gIH1cbiAgLyogQXBwZW5kIENoaWxkcmVuIEVuZCAqL1xufVxuXG5mdW5jdGlvbiByZWNvbXB1dGUoKSB7XG4gIGNvbnN0IHJvb3Rub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgY2hpbGQgPSByb290bm9kZS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgY29uc3Qgcm9vdHZpZXcgPSB3aW5kb3cuX19WSUVXU1tjaGlsZC5pZF07XG4gIFJlbmRlcihyb290dmlldywgbnVsbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRTY3JlZW5EaW1lbnNpb25zOiBnZXRTY3JlZW5EaW1lbnNpb25zLFxuXG4gIHJ1bkluVUk6IHJ1bkluVUksXG5cbiAgUmVuZGVyOiBSZW5kZXIsXG5cbiAgbW92ZVZpZXc6IG1vdmVWaWV3LFxuXG4gIGFkZFZpZXdUb1BhcmVudDogYWRkVmlld1RvUGFyZW50LFxuXG4gIGdldENoaWxkTW9kYWxWaWV3czogZ2V0Q2hpbGRNb2RhbFZpZXdzLFxuXG4gIHJlbW92ZVZpZXc6IHJlbW92ZVZpZXcsXG5cbiAgcmVwbGFjZU1vZGFsVmlldzogcmVwbGFjZU1vZGFsVmlldyxcblxuICByZXBsYWNlVmlldzogcmVwbGFjZVZpZXcsXG5cbiAgcmVjb21wdXRlOiByZWNvbXB1dGVcbn07IiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4gKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbiAqXG4gKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiAqIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4gKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4gKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuICogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4gKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiAqIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4gKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuICovXG5cbnZhciBWaWV3UGFnZUFkYXB0ZXIgPSByZXF1aXJlKFwiLi9WaWV3UGFnZUFkYXB0ZXJcIik7XG52YXIgUmVuZGVyZXIgPSByZXF1aXJlKFwiLi9SZW5kZXJcIik7XG52YXIgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpXG5jb25zdCBxc3N0cmluZ2lmeSA9IHJlcXVpcmUoXCJxcy9saWIvc3RyaW5naWZ5XCIpO1xudmFyIGxvZ3Nfc3RhdGUgPSB7XG4gIHNlc3Npb25faWQgOiAnJyxcbiAgc246Jydcbn1cbnZhciBoYXNMb2NhbFN0b3JhZ2UgPSB0cnVlO1xudHJ5IHtcbiAgdHlwZW9mIHdpbmRvdy5sb2NhbFN0b3JhZ2UgIT09IHVuZGVmaW5lZDtcbn0gY2F0Y2goZSl7XG4gIGhhc0xvY2FsU3RvcmFnZSA9IGZhbHNlO1xufVxuZnVuY3Rpb24gcGFyc2VKc29uKHN0cikge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHN0cik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNlbmRBbmFseXRpY3MoZGF0YSkge1xuICBjb25zdCB1cmwgPSBcImh0dHBzOi8vbG9ncy5qdXNwYXkuaW4vZ29kZWwvYW5hbHl0aWNzXCI7XG4gIGlmIChuYXZpZ2F0b3Iuc2VuZEJlYWNvbikge1xuICAgIG5hdmlnYXRvci5zZW5kQmVhY29uKHVybCwgSlNPTi5zdHJpbmdpZnkoeyBkYXRhIH0pKTtcbiAgfSBlbHNlIHtcbiAgICAvLyB0cnkge1xuICAgIC8vICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIC8vICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgZmFsc2UpOyAvLyB0aGlyZCBwYXJhbWV0ZXIgb2YgYGZhbHNlYCBtZWFucyBzeW5jaHJvbm91c1xuICAgIC8vICAgeGhyLnNlbmQoSlNPTi5zdHJpbmdpZnkoe2RhdGF9KSk7ICAgXG4gICAgLy8gfSBjYXRjaChlcnIpIHtcbiAgICAvLyAgIC8vXG4gICAgLy8gfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRTeW1ib2w6IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgXCJ0aWNrXCI6XG4gICAgICAgIHJldHVybiBcIlxcdTI3MTNcIjtcbiAgICAgIGNhc2UgXCJydXBlZVwiOlxuICAgICAgICByZXR1cm4gXCJcXHUyMEI5XCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJzeW1ib2xcIjtcbiAgICB9XG4gIH0sXG4gIHNldExvZ3NTdGF0ZSA6IGZ1bmN0aW9uKHNlc3Npb24sc24pe1xuICAgIGxvZ3Nfc3RhdGUuc2Vzc2lvbl9pZCA9IHNlc3Npb247XG4gICAgbG9nc19zdGF0ZS5zbiA9IHNuO1xuICB9LFxuICBsaXN0Vmlld0FkYXB0ZXI6IGZ1bmN0aW9uKGlkLCBqc3gsIGNhbGxiYWNrLCB0eXBlLCBtb3JlKSB7XG4gICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgY29uc29sZS5lcnJvcihuZXcgRXJyb3IoXCJMaXN0dmlldyBwYXJlbnQgbnVsbFwiKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RFbGVtZW50Q2hpbGQpXG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0RWxlbWVudENoaWxkKTtcblxuICAgIGxldCB2aWV3ID0gSlNPTi5wYXJzZShqc3gpO1xuICAgIGxldCBwYXJlbnRWaWV3ID0gd2luZG93Ll9fVklFV1NbcGFyZW50LmlkXTtcbiAgICB2aWV3Lm1hcCgoeCwgaSkgPT4ge1xuICAgICAgcGFyZW50Vmlldy5jaGlsZHJlbi5wdXNoKHgudmlldyk7XG4gICAgICBwYXJlbnRWaWV3LnR5cGUgPSBcImxpbmVhckxheW91dFwiO1xuICAgICAgUmVuZGVyZXIuY29tcHV0ZUNoaWxkRGltZW5zKHBhcmVudFZpZXcpO1xuICAgICAgcGFyZW50Vmlldy50eXBlID0gXCJsaXN0Vmlld1wiO1xuICAgICAgbGV0IGVsZW0gPSBSZW5kZXJlci5pbmZsYXRlVmlldyh4LnZpZXcsIHBhcmVudCk7XG4gICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgd2luZG93LmNhbGxVSUNhbGxiYWNrKGNhbGxiYWNrLCBbaV0pO1xuICAgICAgfSk7XG4gICAgICBBbmRyb2lkLnJ1bkluVUkoeC52YWx1ZSk7XG4gICAgfSk7XG4gICAgaWYgKG1vcmUpIHtcbiAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGVsZW0uc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgIGVsZW0uc3R5bGUuaGVpZ2h0ID0gXCIxMDBweFwiO1xuICAgICAgZWxlbS5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIjFweCBzb2xpZCAjZWVlXCI7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbSk7XG5cbiAgICAgIFJlbmRlcmVyLmluZmxhdGVWaWV3KEpTT04ucGFyc2UobW9yZSksIGVsZW0pO1xuICAgIH1cbiAgfSxcblxuICBjYWxsQVBJOiBhc3luYyBmdW5jdGlvbiBjYWxsQVBJKG1ldGhvZCwgdXJsLCBkYXRhLCBoZWFkZXJzLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIGhlYWRlcnMgPSBwYXJzZUpzb24oaGVhZGVycyk7XG4gICAgZGF0YSA9IHBhcnNlSnNvbihkYXRhKTtcbiAgICBsZXQgc29tZXRoaW5nID0gZmFsc2U7XG4gICAgaWYgKGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPT09IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpIHtcbiAgICAgIGlmICh0eXBlb2YgZGF0YSA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHNvbWV0aGluZyA9IHRydWU7XG4gICAgICAgIGRhdGEgPSBxc3N0cmluZ2lmeShkYXRhKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICBpZiAoW1wiR0VUXCIsIFwiSEVBRFwiXS5pbmNsdWRlcyhtZXRob2QpKSB7XG4gICAgICBkYXRhID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGF4aW9zKHt1cmwsIG1ldGhvZCwgZGF0YSwgaGVhZGVycyB9KTtcbiAgICAgIGNvbnN0IGpzb24gPSByZXNwLmRhdGE7Ly9hd2FpdCByZXNwLmRhdGEuanNvbigpO1xuICAgICAgd2luZG93LmNhbGxVSUNhbGxiYWNrKFxuICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgXCJzdWNjZXNzXCIsXG4gICAgICAgIGJ0b2EoSlNPTi5zdHJpbmdpZnkoanNvbikpLFxuICAgICAgICByZXNwLnN0YXR1c1xuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRVJSXCIsIGVycik7XG4gICAgICB3aW5kb3cuY2FsbFVJQ2FsbGJhY2soY2FsbGJhY2ssIFwiZmFpbHVyZVwiLCBidG9hKFwie31cIiksIDUwKTtcbiAgICB9XG4gIH0sXG5cbiAgZ2V0RnJvbVNoYXJlZFByZWZzOiBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gaGFzTG9jYWxTdG9yYWdlPyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIHx8IFwiX19mYWlsZWRcIik6IFwiX19mYWlsZWRcIjtcbiAgfSxcblxuICBzZXRJblNoYXJlZFByZWZzOiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgaWYoaGFzTG9jYWxTdG9yYWdlKVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gIH0sXG5cbiAgZ2V0S2V5c0luU2hhcmVkUHJlZnM6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzTG9jYWxTdG9yYWdlPyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIHx8IFwiX19mYWlsZWRcIik6IFwiX19mYWlsZWRcIjtcbiAgfSxcblxuICBzZXRLZXlzSW5TaGFyZWRQcmVmczogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICBpZihoYXNMb2NhbFN0b3JhZ2UpXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgfSxcblxuICByZW1vdmVLZXlzSW5TaGFyZWRQcmVmczogZnVuY3Rpb24gKGtleSkge1xuICAgIGlmKGhhc0xvY2FsU3RvcmFnZSlcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gIH0sXG5cbiAgdmlld1BhZ2VyQWRhcHRlcjogZnVuY3Rpb24oaWQsIGpzeCwgdGFiSnN4LCBjYikge1xuICAgIFZpZXdQYWdlQWRhcHRlci5jcmVhdGVUYWJzKGlkLCBqc3gsIHRhYkpzeCwgY2IpO1xuICB9LFxuXG4gIHN3aXRjaFRvVmlld1BhZ2VySW5kZXg6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgVmlld1BhZ2VBZGFwdGVyLnRvZ2dsZVZpZXcoaW5kZXgpO1xuICB9LFxuXG4gIGdldEtleTogZnVuY3Rpb24oa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICByZXR1cm4gaGFzTG9jYWxTdG9yYWdlPyAobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSB8fCBkZWZhdWx0VmFsdWUpOiBkZWZhdWx0VmFsdWU7XG4gIH0sXG5cbiAgc2V0S2V5OiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIGhhc0xvY2FsU3RvcmFnZT9sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTogdmFsdWU7XG4gIH0sXG5cbiAgZ2V0UmVzb3VyY2VCeU5hbWU6IGZ1bmN0aW9uIGdldFJlc291cmNlQnlOYW1lKHRhZykge1xuICAgIHJldHVybiBcIjIuMFwiO1xuICB9LFxuXG4gIGdldFNlc3Npb25BdHRyaWJ1dGU6IGZ1bmN0aW9uIGdldFNlc3Npb25BdHRyaWJ1dGUodjEsIHYyKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHsgYTogdjEgfSk7XG4gIH0sXG5cbiAgc2V0QW5hbHl0aWNzRW5kUG9pbnQ6IGZ1bmN0aW9uIHNldEFuYWx5dGljc0VuZFBvaW50KHVybCkge1xuICAgIHJldHVybjtcbiAgfSxcblxuICBnZXRTZXNzaW9uSW5mbzogZnVuY3Rpb24gZ2V0U2Vzc2lvbkluZm8oKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHt9KTtcbiAgfSxcblxuICBhdHRhY2g6IGZ1bmN0aW9uIGF0dGFjaCgpIHtcbiAgICByZXR1cm47XG4gIH0sXG5cbiAgYWRkVG9Mb2dMaXN0OiBmdW5jdGlvbiBhZGRUb0xvZ0xpc3QoZGF0YSkge1xuXG5cbiAgICBjb25zdCBuZXdMb2cgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgIHZhciBsb2dzQXJyID0gQXJyYXkuaXNBcnJheShuZXdMb2cpID8gbmV3TG9nIDogW25ld0xvZ107XG4gICAgZm9yICh2YXIgaSA9IDA7aTxsb2dzQXJyLmxlbmd0aDtpKyspe1xuICAgICAgbG9nc0FycltpXS5zZXNzaW9uX2lkID0gbG9nc19zdGF0ZS5zZXNzaW9uX2lkO1xuICAgICAgbG9nc0FycltpXS5zbiA9ICsrIGxvZ3Nfc3RhdGUuc247XG4gICAgfVxuICAgIC8vIGNvbnNvbGUud2Fybihsb2dzQXJyKVxuXG4gICAgc2VuZEFuYWx5dGljcyhsb2dzQXJyKVxuICB9LFxuICBzYXZlVG9Mb2NhbDogZnVuY3Rpb24oYSxiLGMpe1xuICAgIGlmIChoYXNMb2NhbFN0b3JhZ2Upe1xuICAgICAgdHJ5e1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGMrXCI6XCIrXCJkZWZPcHRpb25UeXBlXCIpO1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGMrXCI6XCIrXCJkZWZPcHRpb25cIik7XG4gICAgICB9XG4gICAgICBjYXRjaChlKXt9XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYytcIjpcIisnZGVmT3B0aW9uVHlwZScsIGEpO1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGMrXCI6XCIrJ2RlZk9wdGlvbicsIEpTT04uc3RyaW5naWZ5KGIpKTtcbiAgICB9XG5cbiAgfSxcbiAgZGVsZXRlRnJvbUxvY2FsOiBmdW5jdGlvbihjKXtcblxuICAgIGlmIChoYXNMb2NhbFN0b3JhZ2Upe1xuICAgICAgdHJ5e1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGMrXCI6XCIrXCJkZWZPcHRpb25UeXBlXCIpO1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGMrXCI6XCIrXCJkZWZPcHRpb25cIik7XG4gICAgICB9XG4gICAgICBjYXRjaChlKXt9XG4gICAgfVxuICB9LFxuICBsb2FkRnJvbUxvY2FsOiBmdW5jdGlvbihrZXkpe1xuICAgIGlmIChoYXNMb2NhbFN0b3JhZ2Upe1xuICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpPT11bmRlZmluZWQpXG4gICAgICAgIHJldHVybiBcIlwiXG4gICAgICB0cnl7XG4gICAgICBjb25zdCBhID0gIEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuICAgICAgaWYgKGE9PXVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIFwiXCJcbiAgICAgIHJldHVybiBhXG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHBvc3RMb2dzKGVuZFBvaW50LCBsb2dzKSB7XG4gICAgcmV0dXJuO1xuICB9LFxuXG4gIHN1Ym1pdEFsbExvZ3M6IGZ1bmN0aW9uIHN1Ym1pdEFsbExvZ3MoKSB7XG4gICAgcmV0dXJuO1xuICB9LFxuXG4gIGdldExvZ0xpc3Q6IGZ1bmN0aW9uIGdldExvZ0xpc3QoKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KFtdKTtcbiAgfSxcblxuICB1cGRhdGVMb2dMaXN0OiBmdW5jdGlvbiB1cGRhdGVMb2dMaXN0KCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7fSk7XG4gIH0sXG5cbiAgaXNPbmxpbmU6IGZ1bmN0aW9uIGlzT25saW5lKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuXG4gIGdldERldmljZURldGFpbHM6IGZ1bmN0aW9uIGdldERldmljZURldGFpbHMoKSB7XG4gICAgY29uc3QgZGV2aWNlRGV0YWlscyA9IHtcbiAgICAgIGFwcFZlcnNpb246IFwiXCIsXG4gICAgICBvc1ZlcnNpb246IFwiXCIsXG4gICAgICBvczogXCJcIixcbiAgICAgIG1hY0FkZHJlc3M6IFwiXCIsXG4gICAgICBpc0R1YWw6IFwiXCIsXG4gICAgICBtYW51ZmFjdHVyZXI6IFwiXCIsXG4gICAgICBpc1Jvb3RlZDogXCJcIixcbiAgICAgIGFuZHJvaWRJZDogXCJcIixcbiAgICAgIGFwcFBhY2thZ2VOYW1lOiBcIlwiLFxuICAgICAgbmV0d29ya09wZXJhdG9yOiBcIlwiLFxuICAgICAgc2ltT3BlcmF0b3JOYW1lOiBcIlwiLFxuICAgICAgc2NyZWVuSGVpZ2h0OiBcIlwiLFxuICAgICAgc2NyZWVuV2lkdGg6IFwiXCIsXG4gICAgICBzY3JlZW5QcGk6IFwiXCIsXG4gICAgICBicmFuZDogXCJcIixcbiAgICAgIG1vZGVsOiBcIlwiLFxuICAgIH1cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGV2aWNlRGV0YWlscyk7XG4gIH0sXG5cbiAgZ2V0RGV2aWNlSW5mbzogZnVuY3Rpb24gZ2V0RGV2aWNlSW5mbygpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe30pXG4gIH0sXG5cbiAgZ2V0VVVJRDogZnVuY3Rpb24gZ2V0VVVJRCgpIHtcbiAgICBmdW5jdGlvbiBzNCgpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxuICAgICAgICAgICAgICAudG9TdHJpbmcoMTYpXG4gICAgICAgICAgICAgIC5zdWJzdHJpbmcoMSk7XG4gICAgfVxuICAgIHJldHVybiBzNCgpICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICtcbiAgICAgICAgICAgIHM0KCkgKyAnLScgKyBzNCgpICsgczQoKSArIHM0KCk7ICBcbiAgfSxcblxuICByZW5ld0ZpbGU6IGZ1bmN0aW9uIHJlbmV3RmlsZShmaWxlKSB7XG4gICAgcmV0dXJuO1xuICB9LFxuICBoaWRlS2V5Ym9hcmRPbk5hdmlnYXRpb246IGZ1bmN0aW9uIGhpZGVLZXlib2FyZE9uTmF2aWdhdGlvbigpIHtcbiAgICByZXR1cm47XG4gIH0sXG4gIHJ1bkluSnVzcGF5QnJvd3NlcjogZnVuY3Rpb24gcnVuSW5KdXNwYXlCcm93c2VyKGV2ZW50TmFtZSwgYXJnMiwgYXJnMykge1xuICAgIC8vXG4gIH0sXG4gIC8qKlxuICAgKiBAbWV0aG9kIHNldEZDTVRva2VuXG4gICAqIEBkZXNjcmlwdGlvbiBTZXRzIHRva2VuIGZvciBHQ00gbm90aWZpY2F0aW9uc1xuICAgKiBcbiAgICogTm90ZTogT25seSBmb3IgQW5kcm9pZC9pT1MuIFRoaXMgaXMganVzdCBhbiBlbXB0eSBzdHViIGluIHdlYlxuICAgKi9cbiAgc2V0RkNNVG9rZW46IGZ1bmN0aW9uIHNldEZDTVRva2VuICgpIHtcbiAgICByZXR1cm47XG4gIH0sXG4gIC8qKlxuICAgKiBAbWV0aG9kIHJlcXVlc3RMb2NhdGlvblxuICAgKiBAZGVzY3JpcHRpb24gUmVxdWVzdHMgcGVybWlzc2lvbiB0byBhY2Nlc3MgbG9jYXRpb25cbiAgICogXG4gICAqIE5vdGU6IE9ubHkgZm9yIEFuZHJvaWQvaU9TLiBUaGlzIGlzIGp1c3QgYW4gZW1wdHkgc3R1YiBpbiB3ZWJcbiAgICovXG4gIHJlcXVlc3RMb2NhdGlvbjogZnVuY3Rpb24gcmVxdWVzdExvY2F0aW9uKCkge1xuICAgIHJldHVybjtcbiAgfVxufTtcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuICogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4gKlxuICogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4gKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuICogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuICogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiAqIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuICogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4gKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuICogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiAqL1xuXG5sZXQge1xuICAgIGNvbXB1dGVDaGlsZERpbWVuc1xufSA9IHJlcXVpcmUoXCIuLi9jb21wdXRlXCIpXG5sZXQge1xuICAgIHJlbmRlckNvbXBvbmVudFxufSA9IHJlcXVpcmUoXCIuLi9jb21wb25lbnRcIilcbmxldCBoZWxwZXIgPSByZXF1aXJlKFwiLi4vaGVscGVyXCIpXG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHRFbGVtZW50KGVsZW0sIGNvbmZpZykge1xuICAgIGxldCBjaGlsZHJlbiA9IGVsZW0uY2hpbGROb2RlcztcbiAgICBsZXQgYXJ0aWNsZSA9IG51bGxcbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjaGlsZHJlbltpXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09ICdhcnRpY2xlJykge1xuICAgICAgICAgICAgICAgIGFydGljbGUgPSBjaGlsZHJlbltpXVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWFydGljbGUpXG4gICAgICAgIGFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdBUlRJQ0xFJylcblxuICAgIGVsZW0uc3R5bGUud2hpdGVTcGFjZSA9IFwiaW5pdGlhbFwiXG5cbiAgICBpZiAoY29uZmlnLmlzSHRtbENvbnRlbnQpXG4gICAgICAgIGFydGljbGUuaW5uZXJIVE1MID0gY29uZmlnLnRleHRcbiAgICBlbHNlXG4gICAgICAgIGFydGljbGUuaW5uZXJUZXh0ID0gY29uZmlnLnRleHRcblxuICAgIGlmICghY29uZmlnLnRleHQgJiYgY29uZmlnLmhpbnQpXG4gICAgICAgIGFydGljbGUuaW5uZXJUZXh0ID0gY29uZmlnLmhpbnRcblxuICAgIGFydGljbGUuc3R5bGUud29yZEJyZWFrID0gXCJicmVhay13b3JkXCJcbiAgICBhcnRpY2xlLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiXG5cbiAgICBpZiAoY29uZmlnLmxldHRlclNwYWNpbmcpXG4gICAgICAgIGVsZW1bXCJzdHlsZVwiXVtcImxldHRlci1zcGFjaW5nXCJdID0gY29uZmlnLmxldHRlclNwYWNpbmdcblxuICAgIGVsZW0uYXBwZW5kQ2hpbGQoYXJ0aWNsZSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dEVsZW1lbnQyKGVsZW0sIGNvbmZpZykge1xuICAgIGxldCBjaGlsZHJlbiA9IGVsZW0uY2hpbGROb2RlcztcbiAgICBsZXQgYXJ0aWNsZSA9IG51bGxcbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjaGlsZHJlbltpXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09ICdhcnRpY2xlJykge1xuICAgICAgICAgICAgICAgIGFydGljbGUgPSBjaGlsZHJlbltpXVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWFydGljbGUpXG4gICAgICAgIGFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdBUlRJQ0xFJylcblxuICAgIGVsZW0uc3R5bGUud2hpdGVTcGFjZSA9IFwiaW5pdGlhbFwiXG5cbiAgICBpZiAoY29uZmlnLmlzSHRtbENvbnRlbnQpXG4gICAgICAgIGFydGljbGUuaW5uZXJIVE1MID0gY29uZmlnLnRleHRGcm9tSHRtbFxuICAgIGVsc2VcbiAgICAgICAgYXJ0aWNsZS5pbm5lckhUTUwgPSBjb25maWcudGV4dEZyb21IdG1sXG5cbiAgICBpZiAoIWNvbmZpZy50ZXh0ICYmIGNvbmZpZy5oaW50KVxuICAgICAgICBhcnRpY2xlLmlubmVyVGV4dCA9IGNvbmZpZy5oaW50XG5cbiAgICBhcnRpY2xlLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstd29yZFwiXG4gICAgYXJ0aWNsZS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIlxuXG4gICAgaWYgKGNvbmZpZy5sZXR0ZXJTcGFjaW5nKVxuICAgICAgICBlbGVtW1wic3R5bGVcIl1bXCJsZXR0ZXItc3BhY2luZ1wiXSA9IGNvbmZpZy5sZXR0ZXJTcGFjaW5nXG5cbiAgICBlbGVtLmFwcGVuZENoaWxkKGFydGljbGUpXG59XG5cbmZ1bmN0aW9uIHBvcHVwKGVsZW0sIHByb3BzKSB7XG4gICAgbGV0IG1lbnVJdGVtcyA9IHByb3BzW1wicG9wdXBNZW51XCJdLnNwbGl0KCcsJyk7XG4gICAgbGV0IG1lbnVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVCYXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwb3B1cE1lbnVcIik7XG4gICAgbWVudUJhci5zdHlsZS5jc3NUZXh0ID1cbiAgICAgICAgXCJkaXNwbGF5OiBub25lOyBwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiAyMHB4OyB0b3A6MjBweDsgei1pbmRleDogNTtcIiArXG4gICAgICAgIFwiYm94LXNoYWRvdzogMHB4IDVweCAxMHB4ICM4ODg4ODg7XCI7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtZW51QmFyKVxuICAgIGxldCBjbGlja0NiID0gXCJvbk1lbnVJdGVtQ2xpY2tcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1lbnVEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZW51SXRlbVwiKTtcbiAgICAgICAgbWVudURpdi50ZXh0Q29udGVudCA9IG1lbnVJdGVtc1tpXTtcbiAgICAgICAgbWVudUJhci5hcHBlbmRDaGlsZChtZW51RGl2KTtcbiAgICAgICAgbGV0IGluZGV4ID0gaTtcbiAgICAgICAgaWYgKHByb3BzW2NsaWNrQ2JdICYmXG4gICAgICAgICAgICB0eXBlb2YgcHJvcHNbY2xpY2tDYl0gPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBtZW51RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvcHNbY2xpY2tDYl0oaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobWVudUJhci5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiKVxuICAgICAgICAgICAgbWVudUJhci5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgbWVudUJhci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldEdyYXZpdHlTdHlsZXNGb3JSb3coZWxlbSwgcHJvcHMpIHtcbiAgICBpZiAoIXByb3BzLmhhc093blByb3BlcnR5KCdncmF2aXR5JykgfHwgIXByb3BzLmdyYXZpdHkpIHtcbiAgICAgICAgcHJvcHMuZ3Jhdml0eSA9ICcnO1xuICAgICAgICAvL3JldHVybjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHByb3BzLmdyYXZpdHkpIHtcbiAgICAgICAgY2FzZSAnY2VudGVyX3ZlcnRpY2FsJzpcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbJ2FsaWduLWl0ZW1zJ10gPSAnY2VudGVyJztcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbJ2p1c3RpZnktY29udGVudCddID0gJ2ZsZXgtc3RhcnQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NlbnRlcl9ob3Jpem9udGFsJzpcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbJ2FsaWduLWl0ZW1zJ10gPSAnZmxleC1zdGFydCc7XG4gICAgICAgICAgICBlbGVtLnN0eWxlWydqdXN0aWZ5LWNvbnRlbnQnXSA9ICdjZW50ZXInO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICAgICAgICBlbGVtLnN0eWxlWydhbGlnbi1pdGVtcyddID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbJ2p1c3RpZnktY29udGVudCddID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICAgICAgZWxlbS5zdHlsZVsnYWxpZ24taXRlbXMnXSA9ICdmbGV4LXN0YXJ0JztcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbJ2p1c3RpZnktY29udGVudCddID0gJ2ZsZXgtc3RhcnQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbJ2FsaWduLWl0ZW1zJ10gPSAnZmxleC1zdGFydCc7XG4gICAgICAgICAgICBlbGVtLnN0eWxlWydqdXN0aWZ5LWNvbnRlbnQnXSA9ICdmbGV4LWVuZCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3RyZXRjaCc6XG4gICAgICAgICAgICBlbGVtLnN0eWxlWydhbGlnbi1pdGVtcyddID0gJ3N0cmV0Y2gnO1xuICAgICAgICAgICAgZWxlbS5zdHlsZVsnanVzdGlmeS1jb250ZW50J10gPSAnZmxleC1zdGFydCc7XG4gICAgICAgICAgICBicmVhazsgXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBlbGVtLnN0eWxlWydhbGlnbi1pdGVtcyddID0gJ2ZsZXgtc3RhcnQnO1xuICAgICAgICAgICAgZWxlbS5zdHlsZVsnanVzdGlmeS1jb250ZW50J10gPSAnZmxleC1zdGFydCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldEdyYXZpdHlTdHlsZXNGb3JDb2x1bW4oZWxlbSwgcHJvcHMpIHtcbiAgICBpZiAoIXByb3BzLmhhc093blByb3BlcnR5KCdncmF2aXR5JykgfHwgIXByb3BzLmdyYXZpdHkpIHtcbiAgICAgICAgcHJvcHMuZ3Jhdml0eSA9ICcnO1xuICAgICAgICAvL3JldHVybjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHByb3BzLmdyYXZpdHkpIHtcbiAgICAgICAgY2FzZSAnY2VudGVyX3ZlcnRpY2FsJzpcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbJ2FsaWduLWl0ZW1zJ10gPSAnZmxleC1zdGFydCc7XG4gICAgICAgICAgICBlbGVtLnN0eWxlWydqdXN0aWZ5LWNvbnRlbnQnXSA9ICdjZW50ZXInO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NlbnRlcl9ob3Jpem9udGFsJzpcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbJ2FsaWduLWl0ZW1zJ10gPSAnY2VudGVyJztcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbJ2p1c3RpZnktY29udGVudCddID0gJ2ZsZXgtc3RhcnQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICAgICAgICBlbGVtLnN0eWxlW1wiYWxpZ24taXRlbXNcIl0gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgZWxlbS5zdHlsZVtcImp1c3RpZnktY29udGVudFwiXSA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbJ2p1c3RpZnktY29udGVudCddID0gJ2ZsZXgtc3RhcnQnO1xuICAgICAgICAgICAgZWxlbS5zdHlsZVsnYWxpZ24taXRlbXMnXSA9ICdmbGV4LXN0YXJ0JztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICBlbGVtLnN0eWxlWydhbGlnbi1pdGVtcyddID0gJ2ZsZXgtZW5kJztcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbJ2p1c3RpZnktY29udGVudCddID0gJ2ZsZXgtc3RhcnQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3N0cmV0Y2gnOlxuICAgICAgICAgICAgZWxlbS5zdHlsZVsnYWxpZ24taXRlbXMnXSA9ICdzdHJldGNoJztcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbJ2p1c3RpZnktY29udGVudCddID0gJ2ZsZXgtc3RhcnQnO1xuICAgICAgICAgICAgYnJlYWs7IFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZWxlbS5zdHlsZVsnYWxpZ24taXRlbXMnXSA9ICdmbGV4LXN0YXJ0JztcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbJ2p1c3RpZnktY29udGVudCddID0gJ2ZsZXgtc3RhcnQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZXRBbmltYXRpb25TdHlsZXMoZWxlbSwgcHJvcHMpIHtcbiAgaWYgKCFwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnaGFzQW5pbWF0aW9uJykgfHwgIXByb3BzLmhhc0FuaW1hdGlvbikge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3Qga2V5ZnJhbWVOYW1lID0gXCJrZXlmcmFtZV9cIiArIHByb3BzLmlkXG4gIGlmICghd2luZG93Ll9fUkVOREVSRURfS0VZRlJBTUVTLmluY2x1ZGVzKGtleWZyYW1lTmFtZSkpIHtcbiAgICBsZXQgc3R5bGVFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQod2luZG93Ll9fU1RZTEVfSUQpXG5cbiAgICBpZiAoIXN0eWxlRWxlbSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGRhdGEgPSBudWxsXG5cbiAgICBpZiAocHJvcHMuaW5saW5lQW5pbWF0aW9uKSB7XG4gICAgICBkYXRhID0gSlNPTi5wYXJzZShwcm9wcy5pbmxpbmVBbmltYXRpb24pXG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZGF0YSA9IGRhdGFbMF1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBjc3MgPSBcIlwiXG4gICAgY3NzICs9IFwiQGtleWZyYW1lcyBcIiArIGtleWZyYW1lTmFtZSArIFwie1wiXG4gICAgICBjc3MgKz0gXCJmcm9tIHtcIlxuICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnZnJvbVgnKSkge1xuICAgICAgICAgIGNzcyArPSBcIm1hcmdpbi1sZWZ0OiBcIiArIGRhdGEuZnJvbVggKyBcInB4O1wiXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnZnJvbVknKSkge1xuICAgICAgICAgIGNzcyArPSBcIm1hcmdpbi10b3A6IFwiICsgZGF0YS5mcm9tWSArIFwicHg7XCJcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ2Zyb21BbHBoYScpKSB7XG4gICAgICAgICAgY3NzICs9IFwib3BhY2l0eTogXCIgKyBkYXRhLmZyb21BbHBoYSArIFwiO1wiXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCdmcm9tU2NhbGUnKSkge1xuICAgICAgICAgIGNzcyArPSBcInRyYW5zZm9ybTogc2NhbGUoXCIgKyBkYXRhLmZyb21TY2FsZSArIFwiKTtcIlxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ2Zyb21TY2FsZVgnKSAmJiBkYXRhLmhhc093blByb3BlcnR5KCdmcm9tU2NhbGVZJykpIHtcbiAgICAgICAgICBjc3MgKz0gXCJ0cmFuc2Zvcm06IHNjYWxlKFwiICsgZGF0YS5mcm9tU2NhbGVYICsgXCIsIFwiICsgZGF0YS5mcm9tU2NhbGVZICsgXCIpO1wiXG4gICAgICAgIH0gZWxzZSBpZihkYXRhLmhhc093blByb3BlcnR5KCdmcm9tU2NhbGVYJykpIHtcbiAgICAgICAgICBjc3MgKz0gXCJ0cmFuc2Zvcm06IHNjYWxlWChcIiArIGRhdGEuZnJvbVNjYWxlWCArIFwiKTtcIlxuICAgICAgICB9IGVsc2UgaWYoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnZnJvbVNjYWxlWScpKSB7XG4gICAgICAgICAgY3NzICs9IFwidHJhbnNmb3JtOiBzY2FsZVkoXCIgKyBkYXRhLmZyb21TY2FsZVkgKyBcIik7XCJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCdmcm9tUm90YXRpb24nKSkge1xuICAgICAgICAgIGNzcyArPSBcInRyYW5zZm9ybTogcm90YXRlKFwiICsgZGF0YS5mcm9tUm90YXRpb24gKyBcIik7XCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZihkYXRhLmhhc093blByb3BlcnR5KCdmcm9tUm90YXRpb25YJykpIHtcbiAgICAgICAgICAgIGNzcyArPSBcInRyYW5zZm9ybTogcm90YXRlWChcIiArIGRhdGEuZnJvbVJvdGF0aW9uWCArIFwiKTtcIlxuICAgICAgICAgIH0gZWxzZSBpZihkYXRhLmhhc093blByb3BlcnR5KCdmcm9tUm90YXRpb25ZJykpIHtcbiAgICAgICAgICAgIGNzcyArPSBcInRyYW5zZm9ybTogcm90YXRlWShcIiArIGRhdGEuZnJvbVJvdGF0aW9uWSArIFwiKTtcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgIGNzcyArPSBcIn0gXCJcbiAgICAgIGNzcyArPSBcInRvIHtcIlxuICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgndG9YJykpIHtcbiAgICAgICAgICBjc3MgKz0gXCJtYXJnaW4tbGVmdDogXCIgKyBkYXRhLnRvWCArIFwicHg7XCJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCd0b1knKSkge1xuICAgICAgICAgIGNzcyArPSBcIm1hcmdpbi10b3A6IFwiICsgZGF0YS50b1kgKyBcInB4O1wiXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCd0b0FscGhhJykpIHtcbiAgICAgICAgICBjc3MgKz0gXCJvcGFjaXR5OiBcIiArIGRhdGEudG9BbHBoYSArIFwiO1wiXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCd0b1NjYWxlJykpIHtcbiAgICAgICAgICBjc3MgKz0gXCJ0cmFuc2Zvcm06IHNjYWxlKFwiICsgZGF0YS50b1NjYWxlICsgXCIpO1wiXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgndG9TY2FsZVgnKSAmJiBkYXRhLmhhc093blByb3BlcnR5KCd0b1NjYWxlWScpKSB7XG4gICAgICAgICAgY3NzICs9IFwidHJhbnNmb3JtOiBzY2FsZShcIiArIGRhdGEudG9TY2FsZVggKyBcIiwgXCIgKyBkYXRhLnRvU2NhbGVZICsgXCIpO1wiXG4gICAgICAgIH0gZWxzZSBpZihkYXRhLmhhc093blByb3BlcnR5KCd0b1NjYWxlWCcpKSB7XG4gICAgICAgICAgY3NzICs9IFwidHJhbnNmb3JtOiBzY2FsZVgoXCIgKyBkYXRhLnRvU2NhbGVYICsgXCIpO1wiXG4gICAgICAgIH0gZWxzZSBpZihkYXRhLmhhc093blByb3BlcnR5KCd0b1NjYWxlWScpKSB7XG4gICAgICAgICAgY3NzICs9IFwidHJhbnNmb3JtOiBzY2FsZVkoXCIgKyBkYXRhLnRvU2NhbGVZICsgXCIpO1wiXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgndG9Sb3RhdGlvbicpKSB7XG4gICAgICAgICAgY3NzICs9IFwidHJhbnNmb3JtOiByb3RhdGUoXCIgKyBkYXRhLnRvUm90YXRpb24gKyBcIik7XCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZihkYXRhLmhhc093blByb3BlcnR5KCd0b1JvdGF0aW9uWCcpKSB7XG4gICAgICAgICAgICBjc3MgKz0gXCJ0cmFuc2Zvcm06IHJvdGF0ZVgoXCIgKyBkYXRhLnRvUm90YXRpb25YICsgXCIpO1wiXG4gICAgICAgICAgfSBlbHNlIGlmKGRhdGEuaGFzT3duUHJvcGVydHkoJ3RvUm90YXRpb25ZJykpIHtcbiAgICAgICAgICAgIGNzcyArPSBcInRyYW5zZm9ybTogcm90YXRlWShcIiArIGRhdGEudG9Sb3RhdGlvblkgKyBcIik7XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICBjc3MgKz0gXCJ9IFwiXG4gICAgY3NzICs9IFwifVwiXG5cbiAgICBpZihzdHlsZUVsZW0uc3R5bGVTaGVldCl7XG4gICAgICBzdHlsZUVsZW0uc3R5bGVTaGVldC5jc3NUZXh0ICs9IGNzcztcbiAgICB9ZWxzZXtcbiAgICAgIHN0eWxlRWxlbS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICB9XG5cbiAgICBlbGVtLnN0eWxlLmFuaW1hdGlvbk5hbWUgPSBrZXlmcmFtZU5hbWVcbiAgICBlbGVtLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gXCIxc1wiXG4gICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ2R1cmF0aW9uJykgJiYgIWlzTmFOKGRhdGEuZHVyYXRpb24pKSB7XG4gICAgICBjb25zdCBkdXJhdGlvbiA9IHBhcnNlRmxvYXQocGFyc2VGbG9hdChkYXRhLmR1cmF0aW9uKSAvIDEwMDApLnRvRml4ZWQoMilcbiAgICAgIGVsZW0uc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArIFwic1wiXG4gICAgfVxuXG4gICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ3JlcGVhdENvdW50JykpIHtcbiAgICAgIGlmIChkYXRhLnJlcGVhdENvdW50ID09IFwiLTFcIiB8fCBkYXRhLnJlcGVhdENvdW50ID09IC0xKSB7XG4gICAgICAgIGVsZW0uc3R5bGUuYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQgPSBcImluZmluaXRlXCJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW0uc3R5bGUuYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQgPSBkYXRhLnJlcGVhdENvdW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJpbnRlcnBvbGF0b3JcIikpIHtcbiAgICAgIGVsZW0uc3R5bGUuYW5pbWF0aW9uVGltaW5nRnVuY3Rpb24gPSBcImN1YmljLWJlemllcihcIiArIGRhdGEuaW50ZXJwb2xhdG9yICsgXCIpXCI7XG4gICAgfVxuXG4gICAgd2luZG93Ll9fUkVOREVSRURfS0VZRlJBTUVTLnB1c2goa2V5ZnJhbWVOYW1lKVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldENvbXB1dGVkU3R5bGVzKGVsZW0sIHByb3BzKSB7XG4gICAgLyogQ29tcHV0ZWQgU3R5bGVzICovXG4gICAgLy8gTGluZWFyTGF5b3V0IFN0eWxlc1xuICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnYWN0aXZlRGltZW4nKSAmJiBwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnYWN0aXZlV2VpZ2h0JykpIHtcbiAgICAgICAgbGV0IGFjdGl2ZURpbWVuID0gcHJvcHMuYWN0aXZlRGltZW47XG4gICAgICAgIGxldCB3ZWlnaHQgPSBwcm9wcy5hY3RpdmVXZWlnaHQ7XG5cbiAgICAgICAgaWYgKHdlaWdodCA+IDApIHtcbiAgICAgICAgICAgIGVsZW0uc3R5bGUuZmxleCA9IHdlaWdodDtcblxuICAgICAgICAgICAgaWYgKGFjdGl2ZURpbWVuID09ICd3Jykge1xuICAgICAgICAgICAgICAgIC8vZWxlbS5zdHlsZS53aWR0aCA9ICdhdXRvJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtLnN0eWxlLmZsZXggPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtLnN0eWxlLmZsZXggPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgLy8gUmVsYXRpdmVMYXlvdXQgU3R5bGVzXG4gICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdhYnNvbHV0ZScpICYmIHByb3BzLmFic29sdXRlKSB7XG4gICAgICAgIGVsZW0uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXG4gICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShcImZyb21Ub3BcIikpIHtcbiAgICAgICAgICAgIGlmIChpc05hTihwcm9wcy5mcm9tVG9wKSlcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLnRvcCA9IHByb3BzLmZyb21Ub3A7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS50b3AgPSBwcm9wcy5mcm9tVG9wICsgJ3B4JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShcImZyb21Cb3R0b21cIikpIHtcbiAgICAgICAgICAgIGlmIChpc05hTihwcm9wcy5mcm9tQm90dG9tKSlcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLmJvdHRvbSA9IHByb3BzLmZyb21Cb3R0b207XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5ib3R0b20gPSBwcm9wcy5mcm9tQm90dG9tICsgJ3B4JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShcImZyb21MZWZ0XCIpKSB7XG4gICAgICAgICAgICBpZiAoaXNOYU4ocHJvcHMuZnJvbUxlZnQpKVxuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUubGVmdCA9IHByb3BzLmZyb21MZWZ0O1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUubGVmdCA9IHByb3BzLmZyb21MZWZ0ICsgJ3B4JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShcImZyb21SaWdodFwiKSkge1xuICAgICAgICAgICAgaWYgKGlzTmFOKHByb3BzLmZyb21SaWdodCkpXG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5yaWdodCA9IHByb3BzLmZyb21SaWdodDtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLnJpZ2h0ID0gcHJvcHMuZnJvbVJpZ2h0ICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiBDb21wdXRlZCBTdHlsZXMgRW5kICovXG59XG5mdW5jdGlvbiBzZXBhcmF0b3JJbnB1dEtleURvd25IYW5kbGVyTmV3KGV2KXtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0cnkge1xuICAgICAgICB2YXIgaW5wdXRJZCA9IGV2LnRhcmdldC5pZDtcbiAgICAgICAgdmFyIGlucHV0VHlwZSA9IGV2LmlucHV0VHlwZTtcbiAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXRJZCk7XG4gICAgICAgIHZhciBvbGRWYWxpZFZhbHVlID0gXCJcIjtcbiAgICAgICAgaWYoaW5wdXQub2xkVmFsaWRWYWx1ZSl7XG4gICAgICAgICAgICBvbGRWYWxpZFZhbHVlID0gaW5wdXQub2xkVmFsaWRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZihpbnB1dC52YWx1ZS5sZW5ndGg9PT0wKXtcbiAgICAgICAgICAgIGlucHV0Lm9sZFZhbGlkVmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGF0YVBhdHRlcm4gPSBpbnB1dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBhdHRlcm5cIik7XG4gICAgICAgIGlmIChkYXRhUGF0dGVybil7XG4gICAgICAgICAgdmFyIGRhdGEgPSBkYXRhUGF0dGVybi5zcGxpdCgnLCcpO1xuICAgICAgICAgIHZhciBsZW5ndGggPSBwYXJzZUludChkYXRhLnBvcCgpKTtcbiAgICAgICAgICB2YXIgcmVnZXhQYXR0ZXJuID0gbmV3IFJlZ0V4cChkYXRhLmpvaW4oJycpKTtcbiAgICAgICAgICB2YXIgc2VsZWN0aW9uU3RhcnQgPSBpbnB1dC5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICB2YXIgc2VsZWN0aW9uRW5kID0gaW5wdXQuc2VsZWN0aW9uRW5kO1xuICAgICAgICAgIHZhciBzZXBhcmF0b3IgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoXCJzZXBhcmF0b3JcIik7XG4gICAgICAgICAgdmFyIHNlcGFyYXRvclJlcGVhdCA9IHBhcnNlSW50KGlucHV0LmdldEF0dHJpYnV0ZShcInNlcGFyYXRvclJlcGVhdFwiKSk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gaW5wdXQudmFsdWUucmVwbGFjZSgvW15hLXpBLVowLTlALi1dL2csIFwiXCIpO1xuICAgICAgICAgIC8vSWYgZXhpc3RpbmcgdmFsdWUgaXRzZWxmIGdyZWF0ZXIgdGhhbiBlcXVhbCB0byBtYXggbGVuZ3RoXG4gICAgICAgICAgaWYgKGxlbmd0aCkge1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIGxlbmd0aCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIElmIGNvZGUgZG9lc24ndCBtYXRjaGVzIHJlZ2V4IHBhdHRlcm5cbiAgICAgICAgICBpZiAoIXJlZ2V4UGF0dGVybi50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBvbGRWYWxpZFZhbHVlO1xuICAgICAgICAgICAgaW5wdXQuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb25TdGFydC0gKHNlbGVjdGlvbkVuZC1zZWxlY3Rpb25TdGFydCktMTtcbiAgICAgICAgICAgIGlucHV0LnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbkVuZC0gKHNlbGVjdGlvbkVuZCAtIHNlbGVjdGlvblN0YXJ0KS0xO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvL0luc2VydCBzZXBhcmF0b3IgXG4gICAgICAgICAgaWYoc2VwYXJhdG9yICYmIHNlcGFyYXRvclJlcGVhdCl7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIGZvcm1hdHRlZFN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICBmb3IodmFyIGkgPTA7aTx2YWx1ZS5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSB2YWx1ZVtpXTtcbiAgICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nICs9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgIHZhciBmYWN0b3IgPSAwO1xuICAgICAgICAgICAgICBpZiAoZm9ybWF0dGVkU3RyaW5nLmxlbmd0aCAmJiBmb3JtYXR0ZWRTdHJpbmcucmVwbGFjZSgvW15hLXpBLVowLTlALi1dL2csIFwiXCIpLmxlbmd0aCAlIChzZXBhcmF0b3JSZXBlYXQgKyBmYWN0b3IpID09IDApIHtcbiAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyArPSBzZXBhcmF0b3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmb3JtYXR0ZWRTdHJpbmdbbGVuZ3RoXSA9PSBzZXBhcmF0b3IpIHtcbiAgICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gZm9ybWF0dGVkU3RyaW5nLnN1YnN0cmluZygwLCBmb3JtYXR0ZWRTdHJpbmcubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGZvcm1hdHRlZFN0cmluZztcbiAgICAgICAgICAgIGlmKGlucHV0VHlwZSA9PSBcImRlbGV0ZUNvbnRlbnRCYWNrd2FyZFwiKXtcbiAgICAgICAgICAgICAgbGV0IGN1cnNvclBvc2l0aW9uID0gc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICAgIGlmICgoY3Vyc29yUG9zaXRpb24gJSAoc2VwYXJhdG9yUmVwZWF0ICsgMSkgKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgaWYoaW5wdXQub2xkVmFsaWRWYWx1ZS5sZW5ndGggPCBmb3JtYXR0ZWRTdHJpbmcubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICBjdXJzb3JQb3NpdGlvbiArPSAxXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGN1cnNvclBvc2l0aW9uIC09IDFcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZihjdXJzb3JQb3NpdGlvbjwwKXtcbiAgICAgICAgICAgICAgICAgIGN1cnNvclBvc2l0aW9uID0gMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpbnB1dC5vbGRWYWxpZFZhbHVlID0gZm9ybWF0dGVkU3RyaW5nO1xuICAgICAgICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgICBpbnB1dC5zZWxlY3Rpb25TdGFydCA9IGN1cnNvclBvc2l0aW9uO1xuICAgICAgICAgICAgICBpbnB1dC5zZWxlY3Rpb25FbmQgPSBjdXJzb3JQb3NpdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaW5wdXQub2xkVmFsaWRWYWx1ZSA9IGlucHV0LnZhbHVlO1xuICAgICAgICB9XG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZXBhcmF0b3JJbnB1dEtleURvd25IYW5kbGVyKGV2KXtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0cnl7XG4gICAgICAgIHZhciBpbnB1dElkID0gZXYudGFyZ2V0LmlkO1xuICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dElkKVxuICAgICAgICB2YXIgb2xkVmFsaWRWYWx1ZSA9IFwiXCI7XG4gICAgICAgIGlmKGlucHV0Lm9sZFZhbGlkVmFsdWUpe1xuICAgICAgICAgICAgb2xkVmFsaWRWYWx1ZSA9IGlucHV0Lm9sZFZhbGlkVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYoaW5wdXQudmFsdWUubGVuZ3RoPT09MCl7XG4gICAgICAgICAgICBpbnB1dC5vbGRWYWxpZFZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRhdGFQYXR0ZXJuID0gaW5wdXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wYXR0ZXJuXCIpO1xuICAgICAgICBpZiAoZGF0YVBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gZGF0YVBhdHRlcm4uc3BsaXQoJywnKTtcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSBwYXJzZUludChkYXRhLnBvcCgpKTtcbiAgICAgICAgICAgIHZhciByZWdleFN0cmluZyA9IGRhdGEuam9pbignJyk7XG4gICAgICAgICAgICB2YXIgc2VsZWN0aW9uU3RhcnQgPSBpbnB1dC5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICAgIHZhciBzZWxlY3Rpb25FbmQgPSBpbnB1dC5zZWxlY3Rpb25FbmQ7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgaWYgKGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChvbGRWYWxpZFZhbHVlLmxlbmd0aCA8IGlucHV0LnZhbHVlLmxlbmd0aCAmJiBvbGRWYWxpZFZhbHVlLmxlbmd0aCArIDEgPiBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBvbGRWYWxpZFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvblN0YXJ0LSAoc2VsZWN0aW9uRW5kLXNlbGVjdGlvblN0YXJ0KS0xO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb25FbmQtIChzZWxlY3Rpb25FbmQgLSBzZWxlY3Rpb25TdGFydCktMTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBmaW5hbERhdGEgPSBuZXdWYWx1ZS5yZXBsYWNlKC9bXmEtekEtWjAtOUAuLV0vZywgXCJcIik7XG4gICAgICAgICAgICBpZiAocmVnZXhTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVnZXhQYXR0ZXJuID0gbmV3IFJlZ0V4cChyZWdleFN0cmluZyk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZWdleFBhdHRlcm4udGVzdChmaW5hbERhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gb2xkVmFsaWRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb25TdGFydC0gKHNlbGVjdGlvbkVuZC1zZWxlY3Rpb25TdGFydCktMTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kLSAoc2VsZWN0aW9uRW5kIC0gc2VsZWN0aW9uU3RhcnQpLTE7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc2VwYXJhdG9yID0gaW5wdXQuZ2V0QXR0cmlidXRlKFwic2VwYXJhdG9yXCIpO1xuICAgICAgICAgICAgdmFyIHNlcGFyYXRvclJlcGVhdCA9IHBhcnNlSW50KGlucHV0LmdldEF0dHJpYnV0ZShcInNlcGFyYXRvclJlcGVhdFwiKSk7XG4gICAgICAgICAgICBpZiAoc2VwYXJhdG9yICYmIHNlcGFyYXRvclJlcGVhdCkge1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdmFyIGZvcm1hdHRlZFN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZpbmFsRGF0YS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBmaW5hbERhdGFbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgKz0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZhY3RvciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmb3JtYXR0ZWRTdHJpbmcubGVuZ3RoICYmIGZvcm1hdHRlZFN0cmluZy5yZXBsYWNlKC9bXmEtekEtWjAtOUAuLV0vZywgXCJcIikubGVuZ3RoICUgKHNlcGFyYXRvclJlcGVhdCArIGZhY3RvcikgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nICs9IHNlcGFyYXRvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZm9ybWF0dGVkU3RyaW5nW2Zvcm1hdHRlZFN0cmluZy5sZW5ndGggLSAxXSA9PSBzZXBhcmF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gZm9ybWF0dGVkU3RyaW5nLnN1YnN0cmluZygwLCBmb3JtYXR0ZWRTdHJpbmcubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gZm9ybWF0dGVkU3RyaW5nO1xuICAgICAgICAgICAgICAgIGxldCBjdXJzb3JQb3NpdGlvbiA9IHNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgICAgIGlmICgoY3Vyc29yUG9zaXRpb24gJSAoc2VwYXJhdG9yUmVwZWF0ICsgMSkgKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZihpbnB1dC5vbGRWYWxpZFZhbHVlLmxlbmd0aCA8IGZvcm1hdHRlZFN0cmluZy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yUG9zaXRpb24gKz0gMVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yUG9zaXRpb24gLT0gMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGN1cnNvclBvc2l0aW9uPDApe1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3JQb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlucHV0Lm9sZFZhbGlkVmFsdWUgPSBmb3JtYXR0ZWRTdHJpbmc7XG4gICAgICAgICAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5zZWxlY3Rpb25TdGFydCA9IGN1cnNvclBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIGlucHV0LnNlbGVjdGlvbkVuZCA9IGN1cnNvclBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZm9ybWF0dGVkU3RyaW5nLS0tLVwiLCBmb3JtYXR0ZWRTdHJpbmcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5vbGRWYWxpZFZhbHVlID0gZmluYWxEYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxufVxuXG4vLyB3aGF0IGlzIGZpcnN0IHJlbmRlcj8/IFxuZnVuY3Rpb24gc2V0QXR0cmlidXRlcyh0eXBlLCBlbGVtLCBwcm9wcywgZmlyc3RSZW5kZXIpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcInNldCBBdHRyaWJ1dGVzIC0tIHByb3BzXCIscHJvcHMpOyBcbiAgICBpZiAodHlwZSA9PSAnbW9kYWwnKSB7XG4gICAgICAgIHNldE1vZGFsQXR0cmlidXRlcyhlbGVtLCBwcm9wcywgZmlyc3RSZW5kZXIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVsZW0uY2xhc3NMaXN0ICYmIGVsZW0uY2xhc3NMaXN0Lmxlbmd0aCA+IDApXG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCh0eXBlKVxuICAgIGVsc2VcbiAgICAgICAgZWxlbS5jbGFzc05hbWUgPSB0eXBlXG5cbiAgICBlbGVtLnN0eWxlLnRyYW5zaXRpb24gPSBwcm9wcy50cmFuc2l0aW9uO1xuXG4gICAgLyogTmV3IFN0eWxlICovXG4gICAgLyogUmVuZGVyIGZyb20gZ2xvYmFsIHN0eWxlcyAqL1xuICAgIGVsZW0uc3R5bGUud2lkdGggPSAnYXV0byc7XG4gICAgZWxlbS5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG5cbiAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ3dpZHRoJykpIHtcbiAgICAgICAgaWYgKHByb3BzLndpZHRoID09ICdtYXRjaF9wYXJlbnQnKSB7XG4gICAgICAgICAgICBlbGVtLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICB9IGVsc2UgaWYgKHByb3BzLndpZHRoID09ICd3cmFwX2NvbnRlbnQnKSB7XG4gICAgICAgICAgICAvLyBZb3Ugc2VlIGJlbG93XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzTmFOKHByb3BzLndpZHRoKSkge1xuICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdwZXJjZW50V2lkdGgnKSAmJiBwcm9wcy5wZXJjZW50V2lkdGgpXG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS53aWR0aCA9IHByb3BzLndpZHRoICsgJyUnO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUud2lkdGggPSBwcm9wcy53aWR0aCArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdoZWlnaHQnKSkge1xuICAgICAgICBpZiAocHJvcHMuaGVpZ2h0ID09ICdtYXRjaF9wYXJlbnQnKSB7XG4gICAgICAgICAgICBlbGVtLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSBpZiAocHJvcHMuaGVpZ2h0ID09ICd3cmFwX2NvbnRlbnQnKSB7XG4gICAgICAgICAgICBlbGVtLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xuICAgICAgICAgICAgLy8gWW91IHNlZSBiZWxvd1xuICAgICAgICB9IGVsc2UgaWYgKCFpc05hTihwcm9wcy5oZWlnaHQpKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ3BlcmNlbnRIZWlnaHQnKSAmJiBwcm9wcy5wZXJjZW50SGVpZ2h0KVxuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuaGVpZ2h0ID0gcHJvcHMuaGVpZ2h0ICsgJyUnO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuaGVpZ2h0ID0gcHJvcHMuaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnbWluV2lkdGgnKSAmJiAhaXNOYU4ocHJvcHMubWluV2lkdGgpKSB7XG4gICAgICAgIGlmIChwcm9wcy5wZXJjZW50TWluV2lkdGgpXG4gICAgICAgICAgICBlbGVtLnN0eWxlLm1pbldpZHRoID0gcHJvcHMubWluV2lkdGggKyAnJSc7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGVsZW0uc3R5bGUubWluV2lkdGggPSBwcm9wcy5taW5XaWR0aCArICdweCc7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdtaW5IZWlnaHQnKSAmJiAhaXNOYU4ocHJvcHMubWluSGVpZ2h0KSkge1xuICAgICAgICBpZiAocHJvcHMucGVyY2VudE1pbkhlaWdodClcbiAgICAgICAgICAgIGVsZW0uc3R5bGUubWluSGVpZ2h0ID0gcHJvcHMubWluSGVpZ2h0ICsgJyUnO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBlbGVtLnN0eWxlLm1pbkhlaWdodCA9IHByb3BzLm1pbkhlaWdodCArICdweCc7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdtYXhXaWR0aCcpICYmICFpc05hTihwcm9wcy5tYXhXaWR0aCkpIHtcbiAgICAgICAgaWYgKHByb3BzLnBlcmNlbnRNYXhXaWR0aClcbiAgICAgICAgICAgIGVsZW0uc3R5bGUubWF4V2lkdGggPSBwcm9wcy5tYXhXaWR0aCArICclJztcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgZWxlbS5zdHlsZS5tYXhXaWR0aCA9IHByb3BzLm1heFdpZHRoICsgJ3B4JztcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ21heEhlaWdodCcpICYmICFpc05hTihwcm9wcy5tYXhIZWlnaHQpKSB7XG4gICAgICAgIGlmIChwcm9wcy5wZXJjZW50TWF4SGVpZ2h0KVxuICAgICAgICAgICAgZWxlbS5zdHlsZS5tYXhIZWlnaHQgPSBwcm9wcy5tYXhIZWlnaHQgKyAnJSc7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGVsZW0uc3R5bGUubWF4SGVpZ2h0ID0gcHJvcHMubWF4SGVpZ2h0ICsgJ3B4JztcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ3BhZGRpbmcnKSkge1xuICAgICAgICBsZXQgcGFkZGluZyA9IHByb3BzLnBhZGRpbmcuc3BsaXQoJywnKS5tYXAoYSA9PiBhICogMSk7XG5cbiAgICAgICAgZWxlbS5zdHlsZVsncGFkZGluZyddID0gcGFkZGluZ1sxXSArICdweCAnICsgcGFkZGluZ1syXSArICdweCAnICsgcGFkZGluZ1szXSArICdweCAnICsgcGFkZGluZ1swXSArICdweCc7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdtYXJnaW4nKSkge1xuICAgICAgICBsZXQgbWFyZ2luID0gcHJvcHMubWFyZ2luLnNwbGl0KCcsJykubWFwKGEgPT4gYSAqIDEpO1xuXG4gICAgICAgIGVsZW0uc3R5bGVbJ21hcmdpbiddID0gbWFyZ2luWzFdICsgJ3B4ICcgKyBtYXJnaW5bMl0gKyAncHggJyArIG1hcmdpblszXSArICdweCAnICsgbWFyZ2luWzBdICsgJ3B4JztcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ3Zpc2liaWxpdHknKSkge1xuICAgICAgICBsZXQgdmlzaWJpbGl0eSA9IHByb3BzLnZpc2liaWxpdHk7XG4gICAgICAgIGlmICh2aXNpYmlsaXR5ID09ICdpbnZpc2libGUnKVxuICAgICAgICAgICAgZWxlbS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgZWxzZSBpZiAodmlzaWJpbGl0eSA9PSAnZ29uZScpXG4gICAgICAgICAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGVtLnN0eWxlLnZpc2liaWxpdHkgPSAnJztcblxuICAgICAgICAgICAgaW5pdGlhbGl6ZVNob3coZWxlbSwgcHJvcHMsIHR5cGUpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdGlhbGl6ZVNob3coZWxlbSwgcHJvcHMsIHR5cGUpO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnZXhwYW5kJykpIHtcbiAgICAgICAgbGV0IHZpc2liaWxpdHkgPSBwcm9wcy5leHBhbmQgKyAnJztcbiAgICAgICAgaWYgKHZpc2liaWxpdHkgPT0gJ3RydWUnKXtcbiAgICAgICAgICAgIGVsZW0uc3R5bGUudmlzaWJpbGl0eSA9ICcnO1xuICAgICAgICAgICAgaW5pdGlhbGl6ZVNob3coZWxlbSwgcHJvcHMsIHR5cGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIC8qIFJlbmRlciBnbG9iYWwgc3R5bGVzIGVuZCAqL1xuXG4gICAgbGV0IHNjcm9sbEJhclggPSB0cnVlO1xuICAgIGxldCBzY3JvbGxCYXJZID0gdHJ1ZTtcblxuICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnc2Nyb2xsQmFyWCcpKVxuICAgICAgICBzY3JvbGxCYXJYID0gcHJvcHMuc2Nyb2xsQmFyWDtcbiAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ3Njcm9sbEJhclknKSlcbiAgICAgICAgc2Nyb2xsQmFyWSA9IHByb3BzLnNjcm9sbEJhclk7XG5cbiAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ292ZXJGbG93VmlzaWJsZScpKSB7XG4gICAgICAgIGlmIChwcm9wcy5vdmVyRmxvd1Zpc2libGUpIHtcbiAgICAgICAgICAgIGVsZW0uc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyogUmVuZGVyIHR5cGUgc3BlY2lmaWMgc3R5bGVzICovXG4gICAgaWYgKHR5cGUgPT0gJ2xpbmVhckxheW91dCcpIHtcbiAgICAgICAgZWxlbS5zdHlsZVtcImJveC1zaXppbmdcIl0gPSBcImJvcmRlci1ib3hcIjtcblxuICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ2ZpeGVkV3JhcCcpICYmICFwcm9wcy5maXhlZFdyYXApIHtcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbXCJmbGV4LXdyYXBcIl0gPSBcIm5vd3JhcFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbS5zdHlsZVtcImZsZXgtd3JhcFwiXSA9IFwid3JhcFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbS5zdHlsZVtcImZsZXgtZGlyZWN0aW9uXCJdID0gcHJvcHMub3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIgfHwgcHJvcHMub3JpZW50YXRpb24gPT0gbnVsbCA/IFwicm93XCIgOiBcImNvbHVtblwiO1xuXG4gICAgICAgIGlmIChlbGVtLnN0eWxlW1wiZmxleC1kaXJlY3Rpb25cIl0gPT0gJ3JvdycpXG4gICAgICAgICAgICBzZXRHcmF2aXR5U3R5bGVzRm9yUm93KGVsZW0sIHByb3BzKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgc2V0R3Jhdml0eVN0eWxlc0ZvckNvbHVtbihlbGVtLCBwcm9wcyk7XG5cbiAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdzY3JvbGxCYXJYJykpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5zY3JvbGxCYXJYKVxuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUub3ZlcmZsb3dYID0gJ2F1dG8nXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5vdmVyZmxvd1ggPSAnaGlkZGVuJ1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdzY3JvbGxCYXJZJykpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5zY3JvbGxCYXJZKVxuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJ1xuICAgICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJob3Jpem9udGFsU2Nyb2xsVmlld1wiKSB7XG4gICAgICAgIGVsZW0uc3R5bGUub3ZlcmZsb3dYID0gXCJhdXRvXCI7XG4gICAgICAgIGVsZW0uc3R5bGUub3ZlcmZsb3dZID0gXCJoaWRkZW5cIjtcblxuICAgICAgICBpZiAoIXNjcm9sbEJhclgpXG4gICAgICAgICAgICBlbGVtLnN0eWxlLm92ZXJmbG93WCA9ICdoaWRkZW4nO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcImxpc3RWaWV3XCIpIHtcbiAgICAgICAgZWxlbS5zdHlsZS5vdmVyZmxvd1kgPSBcImF1dG9cIjtcbiAgICAgICAgZWxlbS5zdHlsZS5vdmVyZmxvd1ggPSBcImhpZGRlblwiO1xuXG4gICAgICAgIGlmICghc2Nyb2xsQmFyWSlcbiAgICAgICAgICAgIGVsZW0uc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG4gICAgfSBlbHNlIGlmICh0eXBlID09ICdzY3JvbGxWaWV3Jykge1xuICAgICAgICBlbGVtLnN0eWxlLm92ZXJmbG93WCA9ICdhdXRvJztcbiAgICAgICAgZWxlbS5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0byc7XG5cbiAgICAgICAgaWYgKCFzY3JvbGxCYXJYKVxuICAgICAgICAgICAgZWxlbS5zdHlsZS5vdmVyZmxvd1ggPSAnaGlkZGVuJztcbiAgICAgICAgaWYgKCFzY3JvbGxCYXJZKVxuICAgICAgICAgICAgZWxlbS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJ3JlbGF0aXZlTGF5b3V0Jykge1xuICAgICAgICBlbGVtLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcblxuICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ3Njcm9sbEJhclgnKSkge1xuICAgICAgICAgIGlmIChwcm9wcy5zY3JvbGxCYXJYKVxuICAgICAgICAgICAgICBlbGVtLnN0eWxlLm92ZXJmbG93WCA9ICdhdXRvJ1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgZWxlbS5zdHlsZS5vdmVyZmxvd1ggPSAnaGlkZGVuJ1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdzY3JvbGxCYXJZJykpIHtcbiAgICAgICAgICBpZiAocHJvcHMuc2Nyb2xsQmFyWSlcbiAgICAgICAgICAgICAgZWxlbS5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0bydcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIGVsZW0uc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbidcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PSAnaW1hZ2VWaWV3Jykge1xuICAgICAgICBpZiAocHJvcHMuaW1hZ2VVcmwpIHtcbiAgICAgICAgICAgIGxldCBpbWFnZVVybCA9IHByb3BzLmltYWdlVXJsXG5cbiAgICAgICAgICAgIGlmIChwcm9wcy5yYXdEYXRhKSB7XG4gICAgICAgICAgICAgICAgLy8gRG8gTm90aGluZ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IGltYWdlVXJsLnNwbGl0KCcuJylcbiAgICAgICAgICAgICAgICBsZXQgZXh0ID0gJydcbiAgICAgICAgICAgICAgICBpZiAodGVtcCAmJiB0ZW1wLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgICAgIGV4dCA9IHRlbXBbdGVtcC5sZW5ndGggLSAxXVxuXG4gICAgICAgICAgICAgICAgbGV0IGV4dHMgPSBbXCJqcGVnXCIsIFwianBnXCIsIFwicG5nXCIsIFwiYm1wXCIsIFwic3ZnXCIsIFwiZ2lmXCJdXG4gICAgICAgICAgICAgICAgZXh0ID0gZXh0LnRvTG93ZXJDYXNlKClcblxuICAgICAgICAgICAgICAgIGlmKCFpbWFnZVVybC5pbmNsdWRlcyhcImRhdGE6aW1hZ2UvXCIpICYmICFleHRzLmluY2x1ZGVzKGV4dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmwgKz0gJy5wbmcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1hZ2VVcmwpXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyogUmVuZGVyIHR5cGUgc3BlY2lmaWMgc3R5bGVzIGVuZCAqL1xuICAgIC8qIE5ldyBTdHlsZSBFbmQgKi9cblxuICAgIGZvciAobGV0IGtleSBpbiBwcm9wcykge1xuICAgICAgICBpZiAoa2V5ID09IFwicG9wdXBNZW51XCIpIHtcbiAgICAgICAgICAgIHBvcHVwKGVsZW0sIHByb3BzKVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PSBcInRleHRcIikge1xuICAgICAgICAgICAgaWYgKHR5cGUgPT0gXCJlZGl0VGV4dFwiKVxuICAgICAgICAgICAgICAgIGVsZW0udmFsdWUgPSBwcm9wc1trZXldXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgY3JlYXRlVGV4dEVsZW1lbnQoZWxlbSwgcHJvcHMpXG4gICAgICAgIH1lbHNlIGlmIChrZXkgPT0gXCJ0ZXh0RnJvbUh0bWxcIikge1xuICAgICAgICAgICAgaWYgKHR5cGUgPT0gXCJlZGl0VGV4dFwiKVxuICAgICAgICAgICAgICAgIGVsZW0udmFsdWUgPSBwcm9wc1trZXldXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgY3JlYXRlVGV4dEVsZW1lbnQyKGVsZW0sIHByb3BzKVxuICAgICAgICB9IFxuICAgICAgICBlbHNlIGlmIChrZXkgPT0gXCJzdHlsZVwiKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpbm5lcktleSBpbiBwcm9wcy5zdHlsZSkge1xuICAgICAgICAgICAgICAgIGlmIChpbm5lcktleSA9PSBcImNsYXNzTmFtZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NOYW1lICs9IFwiIFwiICsgcHJvcHMuc3R5bGVbaW5uZXJLZXldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcHMuYnV0dG9uQ2xpY2tPdmVybGF5ICE9PSB1bmRlZmluZWQgJiYgW1wiYmFja2dyb3VuZFwiLCBcImJhY2tncm91bmQtaW1hZ2VcIl0uaW5jbHVkZXMoaW5uZXJLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uc3R5bGVbaW5uZXJLZXldID0gYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLDAsMCwke3Byb3BzLmJ1dHRvbkNsaWNrT3ZlcmxheX0pIDUwJSwgdHJhbnNwYXJlbnQgNTAlKSwgYCArIHByb3BzLnN0eWxlW2lubmVyS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5zdHlsZVtcImJhY2tncm91bmQtcG9zaXRpb25cIl0gPSBcInJpZ2h0IGJvdHRvbVwiO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLnN0eWxlW1wiYmFja2dyb3VuZC1zaXplXCJdID0gXCIyMDAlIDEwMCUsIDEwMCUgMTAwJVwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICBlbGVtLnN0eWxlW2lubmVyS2V5XSA9IHByb3BzLnN0eWxlW2lubmVyS2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT0gXCJhdHRyaWJ1dGVzXCIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGlubmVyS2V5IGluIHByb3BzLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZShpbm5lcktleSwgcHJvcHMuYXR0cmlidXRlc1tpbm5lcktleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PSBcImNsYXNzTmFtZVwiKSB7XG4gICAgICAgICAgICBpZiAoKHByb3BzW2tleV0gfHwgXCJcIikudHJpbSgpICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgcHJvcHNba2V5XS5zcGxpdChcIiBcIikubWFwKGNsYXNzTmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PSBcImNsYXNzTGlzdFwiKSB7XG4gICAgICAgICAgICBKU09OLnBhcnNlKHByb3BzW2tleV0pLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChvYmopO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5ID09IFwicmVtb3ZlQ2xhc3NMaXN0XCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5wYXJzZShwcm9wc1trZXldKS5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShvYmopO1xuICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3BzW2tleV0gJiYgdHlwZW9mIHByb3BzW2tleV0gPT0gXCJmdW5jdGlvblwiKSB7XG5cbiAgICAgICAgICAgIHZhciBldmVudFR5cGUgPSBrZXkuc3Vic3RyaW5nKDIsIGtleS5sZW5ndGgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB2YXIgZWxlbUNCID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIGVsZW0uc3R5bGUudXNlclNlbGVjdCA9ICdub25lJztcbiAgICAgICAgICAgIGlmIChldmVudFR5cGUgPT0gXCJjaGFuZ2VcIikge1xuICAgICAgICAgICAgICAgIGV2ZW50VHlwZSA9IFwiaW5wdXRcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dFZhbHVlID0gZWxlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXRWYWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImZpbGxlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzZWQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2ZpbGxlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBlbGVtWydvbmZvY3VzJ10gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGVsZW0ucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdmb2N1c2VkJyk7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50VHlwZSA9PSBcImZvY3VzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbUNCKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgLy9UT0RPOiBSZXBlYXRlZCBjb2RlIHRvIGJlIHJlbW92ZWQgbGF0ZXJcbiAgICAgICAgLy8gICBpZiAocHJvcHMubGFiZWwpIHtcbiAgICAgICAgLy8gICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyAgICAgICB2YXIgaW5wdXRWYWx1ZSA9IGVsZW0udmFsdWU7XG4gICAgICAgIC8vICAgICAgIGlmIChpbnB1dFZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgLy8gICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJmaWxsZWRcIik7XG4gICAgICAgIC8vICAgICAgICAgZWxlbS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzZWQnKTtcbiAgICAgICAgLy8gICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2ZpbGxlZCcpO1xuICAgICAgICAvLyAgICAgICB9XG4gICAgICAgIC8vICAgICB9KTsgIFxuXG4gICAgICAgIC8vICAgICBpZiAoIShwcm9wcy5sYWJlbCAmJiBldmVudFR5cGUgPT0gXCJmb2N1c1wiKSAmJiBmaXJzdFJlbmRlcikge1xuICAgICAgICAvLyAgICAgICAgIC8qZWxlbVsnb24nICsgZXZlbnRUeXBlXSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgLy8gICAgICAgICAgICAgZXZlbnRUeXBlID09IFwiaW5wdXRcIiA/IGVsZW1DQihlLnRhcmdldC52YWx1ZSkgOiBlbGVtQ0IoZSlcbiAgICAgICAgLy8gICAgICAgICB9Ki9cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIGlmICghcHJvcHMuYW5pbWF0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJhbmltYWl0b24gbm90IGZvdW5kXCIsIHByb3BzKVxuICAgIH1cbiAgICBpZiAocHJvcHMuYW5pbWF0aW9uLnRyYW5zaXRpb24pIHtcbiAgICAgICAgY29uc3QgYWZ0ZXJUcmFuc2l0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gcHJvcHMuYW5pbWF0aW9uO1xuICAgICAgICAgICAgZWxlbS5zdHlsZS50cmFuc2l0aW9uID0gYW5pbWF0aW9uLnRyYW5zaXRpb247XG4gICAgICAgICAgICBlbGVtLnN0eWxlLnRyYW5zZm9ybSA9IGFuaW1hdGlvbi50cmFuc2Zvcm07XG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uLm9wYWNpdHkpIHtcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLm9wYWNpdHkgPSBhbmltYXRpb24ub3BhY2l0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAocHJvcHMuc3R5bGUudHJhbnNmb3JtIHx8IHByb3BzLnN0eWxlLm9wYWNpdHkpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoYWZ0ZXJUcmFuc2l0aW9uLCAxMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWZ0ZXJUcmFuc2l0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBFdmVudHMgKi9cbiAgICBpZiAoZmlyc3RSZW5kZXIpIHtcbiAgICAgICAgaWYgKHR5cGUgPT0gXCJlZGl0VGV4dFwiICYmIGVsZW0udGFnTmFtZS50b0xvd2VyQ2FzZSgpID09IFwiaW5wdXRcIikge1xuICAgICAgICAgICAgdmFyIGlzSVBob25lID0gKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcImlQaG9uZVwiKSAhPT0gLTEpXG4gICAgICAgICAgICBpZiAocHJvcHMuYXV0b2ZvY3VzICYmICFpc0lQaG9uZSkge1xuICAgICAgICAgICAgICAgIGVsZW0uZm9jdXMoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYod2luZG93LnByZXBvbmVTcGFjZSl7XG4gICAgICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHNlcGFyYXRvcklucHV0S2V5RG93bkhhbmRsZXJOZXcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc2VwYXJhdG9ySW5wdXRLZXlEb3duSGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcblxuICAgICAgICBsZXQgZXZlbnRzID0gWydvbkNsaWNrJywgJ29uRW50ZXJQcmVzc2VkRXZlbnQnLCAnb25DaGFuZ2UnLCAnb25Nb3VzZURvd24nLCAnb25Nb3VzZVVwJywgJ29uTW91c2VFbnRlcicsICdvbk1vdXNlT3ZlcicsICdvbk1vdXNlTW92ZScsICdvbk1vdXNlT3V0JywgJ29uTW91c2VMZWF2ZScsICdvbkZvY3VzJywgJ29uUGFzdGUnXVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQga2V5ID0gZXZlbnRzW2ldXG4gICAgICAgICAgICBsZXQgZXZlbnRUeXBlID0ga2V5LnN1YnN0cmluZygyLCBrZXkubGVuZ3RoKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiB0eXBlb2YgcHJvcHNba2V5XSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IHByb3BzW2tleV1cbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09IFwib25FbnRlclByZXNzZWRFdmVudFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09IDEzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50VHlwZSA9PSBcImNoYW5nZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT0gXCJmb2N1c1wiKXtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiBFdmVudHMgRW5kICovXG5cbiAgICAvKiBDb21wb25lbnQgUGFydCAqL1xuICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnZWxlbWVudFR5cGUnKSAmJiBwcm9wcy5lbGVtZW50VHlwZSA9PSAnY29tcG9uZW50Jykge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLldSQVBQRVIpXG5cbiAgICAgICAgaWYgKGZpcnN0UmVuZGVyKVxuICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2d1aWQnLCBwcm9wcy5ndWlkKVxuICAgIH1cblxuICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnY29tcG9uZW50VHlwZScpICYmIHByb3BzLmNvbXBvbmVudFR5cGUpXG4gICAgICAgIHJlbmRlckNvbXBvbmVudChlbGVtLCBwcm9wcywgZmlyc3RSZW5kZXIpXG59XG5cbmZ1bmN0aW9uIHNldE1vZGFsQXR0cmlidXRlcyhlbGVtLCBwcm9wcywgZmlyc3RSZW5kZXIpIHtcbiAgICBzZXRHcmF2aXR5U3R5bGVzRm9yUm93KGVsZW0sIHByb3BzKTtcblxuICAgIGxldCBiYWNrZHJvcEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh3aW5kb3cuX19CQUNLRFJPUE1PREFMX0NMQVNTICsgJ18nICsgcHJvcHMuaWQpXG5cbiAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ21vZGFsVmlzaWJpbGl0eScpICYmIHByb3BzLm1vZGFsVmlzaWJpbGl0eSkge1xuICAgICAgICBiYWNrZHJvcEVsZW0uY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19TSE9XTk1PREFMX0NMQVNTKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX09QRU5NT0RBTF9DTEFTUyk7XG5cbiAgICAgICAgbGV0IG1vZGFsUHJvcHMgPSBudWxsO1xuICAgICAgICBpZiAod2luZG93Ll9fTU9EQUxfUFJPUFNbcHJvcHMuaWRdKSB7XG4gICAgICAgICAgICBtb2RhbFByb3BzID0gSlNPTi5wYXJzZSh3aW5kb3cuX19NT0RBTF9QUk9QU1twcm9wcy5pZF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BzLm9uU2hvdyAmJiB0eXBlb2YgcHJvcHMub25TaG93ID09XG4gICAgICAgICAgICBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGlmIChmaXJzdFJlbmRlciB8fCAobW9kYWxQcm9wcyAmJiBtb2RhbFByb3BzLm1vZGFsVmlzaWJpbGl0eSAhPSBwcm9wcy5tb2RhbFZpc2liaWxpdHkpKSB7XG4gICAgICAgICAgICAgICAgcHJvcHMub25TaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wcy5tb2RhbFZpc2liaWxpdHkgPSBmYWxzZTtcbiAgICAgICAgYmFja2Ryb3BFbGVtLmNsYXNzTGlzdC5yZW1vdmUod2luZG93Ll9fU0hPV05NT0RBTF9DTEFTUyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSh3aW5kb3cuX19PUEVOTU9EQUxfQ0xBU1MpO1xuICAgIH1cblxuICAgIHdpbmRvdy5fX01PREFMX1BST1BTW3Byb3BzLmlkXSA9IEpTT04uc3RyaW5naWZ5KHByb3BzKTtcbn1cblxubGV0IGluaXRpYWxpemVTaG93ID0gZnVuY3Rpb24gKGVsZW0sIHByb3BzLCB0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT0gJ2xpbmVhckxheW91dCcpIHtcbiAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCd3aWR0aCcpICYmIHByb3BzLndpZHRoID09ICd3cmFwX2NvbnRlbnQnKSB7XG4gICAgICAgICAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWZsZXgnO1xuICAgICAgICAgICAgZWxlbS5zdHlsZS53aWR0aCA9ICdtYXgtY29udGVudCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnd2lkdGgnKSAmJiBwcm9wcy53aWR0aCA9PSAnd3JhcF9jb250ZW50Jykge1xuICAgICAgICAgICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgICAgICBlbGVtLnN0eWxlLndpZHRoID0gJ21heC1jb250ZW50JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKiBPYnNlcnZlciBmb3IgYWZ0ZXJSZW5kZXIgKi9cbmxldCBvYnNlcnZlciA9IChlbGVtKSA9PiB7XG4gICAgbGV0IGlkID0gZWxlbS5pZDtcbiAgICBpZiAoIWlkIHx8IF9fT0JTRVJWRVJTW2lkXSlcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgX19PQlNFUlZFUlNbaWRdID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKGl0ZW0sIG9ic2VydmVyKSB7XG4gICAgICAgIGlmIChpdGVtICYmIGl0ZW1bMF0udGFyZ2V0KSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gaXRlbVswXS50YXJnZXQ7XG4gICAgICAgICAgICBsZXQgaWQgPSB0YXJnZXQuaWQ7XG4gICAgICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmlldyA9IF9fVklFV1NbaWRdO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZpZXcgJiYgdmlldy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgnYWZ0ZXJSZW5kZXInKSAmJiB0eXBlb2Ygdmlldy5wcm9wcy5hZnRlclJlbmRlciA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmlldy5wcm9wcy5hZnRlclJlbmRlcigpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH0pO1xuXG4gICAgKF9fT0JTRVJWRVJTW2lkXSkub2JzZXJ2ZShlbGVtLCB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IHRydWVcbiAgICB9KTtcbn1cblxuLyogRG8gc29tZSBhY3Rpb25zIGFmdGVyIHJlbmRlcmVkICovXG5sZXQgY2IgPSAoZWxlbSwgdmlldykgPT4ge1xuICAgIGlmICh2aWV3LnByb3BzLmZlZWRiYWNrICYmIHR5cGVvZiB2aWV3LnByb3BzLmZlZWRiYWNrID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB2aWV3LnByb3BzLmZlZWRiYWNrKClcbiAgICB9XG59XG5cbi8vIENyZWF0ZXMgdGhlIE1vZGFsIGVsZW1lbnQgaWYgaXQgaGFzIG5vdCBiZWVuIGFscmVhZHkgaW5mbGF0ZWRcbmxldCBpbmZsYXRlTW9kYWwgPSBmdW5jdGlvbiAodmlldywgcGFyZW50RWxlbWVudCwgc3RvcENoaWxkKSB7XG4gICAgbGV0IG5ld0luZmxhdGVkID0gZmFsc2U7XG4gICAgbGV0IHBhcmVudElkID0gcGFyZW50RWxlbWVudC5pZDtcblxuICAgIC8qIE1vZGFsIFdyYXBwZXIgKi9cbiAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZpZXcucHJvcHMuaWQpO1xuICAgIGlmICghZWxlbSB8fCBlbGVtID09IHVuZGVmaW5lZCkge1xuICAgICAgICBuZXdJbmZsYXRlZCA9IHRydWU7XG5cbiAgICAgICAgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnaWQnLCB2aWV3LnByb3BzLmlkKTtcbiAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ3ZpcnR1YWxfcGFyZW50JywgcGFyZW50SWQpO1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09OVEVOVE1PREFMX0NMQVNTKTtcbiAgICB9XG4gICAgLyogTW9kYWwgV3JhcHBlciBFbmQgKi9cblxuICAgIC8qIEJhY2tEcm9wICovXG4gICAgbGV0IGJhY2tkcm9wRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHdpbmRvdy5fX0JBQ0tEUk9QTU9EQUxfQ0xBU1MgKyAnXycgKyB2aWV3LnByb3BzLmlkKTtcbiAgICBpZiAoIWJhY2tkcm9wRWxlbSB8fCBiYWNrZHJvcEVsZW0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGJhY2tkcm9wRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBiYWNrZHJvcEVsZW0uc2V0QXR0cmlidXRlKCdpZCcsIHdpbmRvdy5fX0JBQ0tEUk9QTU9EQUxfQ0xBU1MgKyAnXycgKyB2aWV3LnByb3BzLmlkKTtcbiAgICAgICAgYmFja2Ryb3BFbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQkFDS0RST1BNT0RBTF9DTEFTUyk7XG5cbiAgICAgICAgaWYgKHZpZXcucHJvcHMuaGFzT3duUHJvcGVydHkoJ2FuaW1hdGlvblR5cGUnKSAmJiB2aWV3LnByb3BzLmFuaW1hdGlvblR5cGUgIT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBsZXQgYW5pbWF0aW9uVHlwZSA9IHZpZXcucHJvcHMuYW5pbWF0aW9uVHlwZTtcblxuICAgICAgICAgICAgaWYgKGFuaW1hdGlvblR5cGUgPT0gJ2ZhZGUnKSB7XG4gICAgICAgICAgICAgICAgYmFja2Ryb3BFbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fRkFERU1PREFMX0NMQVNTKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYW5pbWF0aW9uVHlwZSA9PSAnc2xpZGUnKSB7XG4gICAgICAgICAgICAgICAgYmFja2Ryb3BFbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fU0xJREVNT0RBTF9DTEFTUyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmlldy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgnY2xvc2VPbkJhY2tkcm9wJykgJiYgIXZpZXcucHJvcHMuY2xvc2VPbkJhY2tkcm9wKSB7XG4gICAgICAgICAgICBiYWNrZHJvcEVsZW0uY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19ESVNBQkxFREJBQ0tEUk9QX0NMQVNTKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJhY2tkcm9wRWxlbS5jbGFzc0xpc3QucmVtb3ZlKHdpbmRvdy5fX0RJU0FCTEVEQkFDS0RST1BfQ0xBU1MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZpZXcucHJvcHMuaGFzT3duUHJvcGVydHkoJ3RyYW5zcGFyZW50JykgJiYgdmlldy5wcm9wcy50cmFuc3BhcmVudCkge1xuICAgICAgICAgICAgYmFja2Ryb3BFbGVtLnN0eWxlLmJhY2tncm91bmQgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYmFja2Ryb3BFbGVtLnN0eWxlLmJhY2tncm91bmQgPSAncmdiYSgwLCAwLCAwLCAwLjUpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGJhY2tkcm9wRWxlbS5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiYWNrZHJvcEVsZW0pO1xuXG4gICAgICAgIGlmIChuZXdJbmZsYXRlZCkge1xuICAgICAgICAgICAgaWYgKHZpZXcucHJvcHMuaGFzT3duUHJvcGVydHkoJ2FmdGVyUmVuZGVyJykgJiYgdHlwZW9mIHZpZXcucHJvcHMuYWZ0ZXJSZW5kZXIgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIHJ1biBvYnNlcnZlciBmb3IgdGhlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICBvYnNlcnZlcihlbGVtKTtcbiAgICAgICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnaGFzX3JlbmRlcicsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qIEJhY2tEcm9wIEVuZCAqL1xuXG4gICAgc2V0TW9kYWxBdHRyaWJ1dGVzKGVsZW0sIHZpZXcucHJvcHMsIG5ld0luZmxhdGVkKTtcblxuICAgIGlmICghc3RvcENoaWxkKSB7XG4gICAgICAgIGlmICh2aWV3Lmhhc093blByb3BlcnR5KCdjaGlsZHJlbicpICYmIHZpZXcuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2aWV3LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZpZXcuY2hpbGRyZW5baV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmlldy5jaGlsZHJlbltpXS5wcm9wcy5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mbGF0ZVZpZXcodmlldy5jaGlsZHJlbltpXSwgZWxlbSwgdmlldy5jaGlsZHJlbltpIC0gMV0pO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZsYXRlVmlldyh2aWV3LmNoaWxkcmVuW2ldLCBlbGVtLCB2aWV3KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZWxlbS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIGxldCBjaGlsZE5vZGVzID0gZWxlbS5jaGlsZE5vZGVzXG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2ldXG5cbiAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0bydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3SW5mbGF0ZWQpIHtcbiAgICAgICAgY2IoZWxlbSwgdmlldyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhY2tkcm9wRWxlbTtcbn1cblxud2luZG93LmluZmxhdGVUaW1pbmdzID0ge1xuICAgIGxhc3RVcGRhdGVkQXQ6IG51bGxcbn1cblxuLy8gQ3JlYXRlcyB0aGUgRE9NIGVsZW1lbnQgaWYgaXQgaGFzIG5vdCBiZWVuIGFscmVhZHkgaW5mbGF0ZWRcbi8vIFZpZXc6IE9iamVjdCBvZiBSZWFjdERPTSwge3R5cGUsIHByb3BzLCBjaGlsZHJlbn1cbi8vIHBhcmVudEVsZW1lbnQ6IERPTSBPYmplY3RcblxuLy8gd2hhdCBpcyByZW5kZXIgc3R5bGUsIHNpYmxpbmcgdmlldywgc3RvcENoaWxkLCBzdG9wT2JzZXJ2ZXIgXG5cbmxldCBpbmZsYXRlVmlldyA9IGZ1bmN0aW9uICh2aWV3LCBwYXJlbnRFbGVtZW50LCBzaWJsaW5nVmlldywgc3RvcENoaWxkLCBzdG9wT2JzZXJ2ZXIsIHJlbmRlclN0eWxlKSB7XG4gICAgLy8gZGVidWdnZXI7IFxuICAgIGNvbnN0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgICBpZiAodmlldy50eXBlID09ICdtb2RhbCcpIHtcbiAgICAgICAgcmV0dXJuIGluZmxhdGVNb2RhbCh2aWV3LCBwYXJlbnRFbGVtZW50LCBzdG9wQ2hpbGQpO1xuICAgIH1cblxuICAgIGxldCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmlldy5wcm9wcy5pZCk7IFxuICAgIGxldCBzdWJFbGVtID0gbnVsbDtcbiAgICBsZXQgbmV3SW5mbGF0ZWQgPSBmYWxzZTtcblxuICAgIGlmICh2aWV3LnByb3BzLnggPT0gXCJOYU5cIiB8fCB2aWV3LnByb3BzLnkgPT0gXCJOYU5cIikge1xuICAgICAgICB2aWV3ID0gaGFuZGxlV3JhcENvbnRlbnQodmlldywgcGFyZW50RWxlbWVudClcbiAgICB9XG5cbiAgICBpZiAoIWVsZW0pIHtcbiAgICAgICAgaWYgKHZpZXcudHlwZSA9PSBcIndlYlZpZXdcIikge1xuICAgICAgICAgICAgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpXG5cbiAgICAgICAgICAgIGVsZW0uc3R5bGUuYm9yZGVyID0gJ25vbmUnXG4gICAgICAgIH0gZWxzZSBpZiAodmlldy50eXBlID09IFwiaW1hZ2VWaWV3XCIpIHtcbiAgICAgICAgICAgIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgZWxlbVtcInN0eWxlXCJdW1wibWFyZ2luXCJdID0gXCIwXCI7XG4gICAgICAgICAgICBlbGVtW1wic3R5bGVcIl1bXCJwYWRkaW5nXCJdID0gXCIwXCI7XG4gICAgICAgICAgICBlbGVtW1wic3R5bGVcIl1bXCJkaXNwbGF5XCJdID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgZWxlbVtcInN0eWxlXCJdW1wibWF4LXdpZHRoXCJdID0gXCIxMDAlXCI7XG4gICAgICAgICAgICBlbGVtW1wic3R5bGVcIl1bXCJtYXgtaGVpZ2h0XCJdID0gXCIxMDAlXCI7XG4gICAgICAgICAgICBlbGVtW1wic3R5bGVcIl1bXCJib3gtc2l6aW5nXCJdID0gXCJib3JkZXItYm94XCI7XG4gICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlwiKTtcbiAgICAgICAgfSBlbHNlIGlmICh2aWV3LnR5cGUgPT0gXCJjaGVja0JveFwiKSB7XG4gICAgICAgICAgICBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcblxuICAgICAgICAgICAgaWYgKHZpZXcucHJvcHMuaGFzT3duUHJvcGVydHkoJ2xhYmVsJykgJiYgdmlldy5wcm9wcy5sYWJlbCAhPSAnJyAmJiBwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgc3ViRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgc3ViRWxlbS5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHZpZXcucHJvcHMuaWQpO1xuICAgICAgICAgICAgICAgIHN1YkVsZW0uaW5uZXJIVE1MID0gdmlldy5wcm9wcy5sYWJlbDtcbiAgICAgICAgICAgICAgICBzdWJFbGVtLnN0eWxlLnBhZGRpbmcgPSBcIjAgMCAwIDVweFwiO1xuICAgICAgICAgICAgICAgIHN1YkVsZW0uY2xhc3NMaXN0LmFkZCgnaW5wdXQtbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgIGRlbGV0ZSB2aWV3LnByb3BzLmxhYmVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHZpZXcudHlwZSA9PSBcImVkaXRUZXh0XCIpIHtcbiAgICAgICAgICAgIGlmICh2aWV3LnByb3BzLmhhc093blByb3BlcnR5KCdpbnB1dFR5cGUnKSAmJiB2aWV3LnByb3BzLmlucHV0VHlwZSA9PSAnbXVsdGlUZXh0Jykge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5yZXNpemUgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5vdXRsaW5lID0gJ25vbmUnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbGVtLnZhbHVlID0gdmlldy5wcm9wcy50ZXh0IHx8IFwiXCI7XG5cbiAgICAgICAgICAgIGlmICh2aWV3LnByb3BzLmxldHRlclNwYWNpbmcpIHtcbiAgICAgICAgICAgICAgICBlbGVtW1wic3R5bGVcIl1bXCJsZXR0ZXItc3BhY2luZ1wiXSA9IHZpZXcucHJvcHMubGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZpZXcucHJvcHMubGFiZWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXRWaWV3ID0gZWxlbTtcbiAgICAgICAgICAgICAgICBpbnB1dFZpZXcuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh2aWV3LnR5cGUsIGlucHV0Vmlldywgdmlldy5wcm9wcywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgaW5wdXRWaWV3LnNldEF0dHJpYnV0ZShcImlkXCIsIHZpZXcucHJvcHMuaWQgKyBcIl9pbnB1dFwiKTtcbiAgICAgICAgICAgICAgICB2YXIgbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICAgICAgICBsLnNldEF0dHJpYnV0ZShcImZvclwiLCB2aWV3LnByb3BzLmlkICsgXCJfaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgbC5pbm5lckhUTUwgPSB2aWV3LnByb3BzLmxhYmVsO1xuICAgICAgICAgICAgICAgIGwuY2xhc3NMaXN0LmFkZCgnaW5wdXQtbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgIGxbXCJzdHlsZVwiXVtcInBvc2l0aW9uXCJdID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgICAgICAgIGxbXCJzdHlsZVwiXVtcImNvbG9yXCJdID0gXCIjOTk5XCI7XG4gICAgICAgICAgICAgICAgbFtcInN0eWxlXCJdW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9IFwiI2ZmZlwiO1xuICAgICAgICAgICAgICAgIGxbXCJzdHlsZVwiXVtcInBhZGRpbmdcIl0gPSBcIjAgNXB4XCI7XG4gICAgICAgICAgICAgICAgbFtcInN0eWxlXCJdW1wiei1pbmRleFwiXSA9IDEwO1xuICAgICAgICAgICAgICAgIGxbXCJzdHlsZVwiXVtcInRyYW5zaXRpb25cIl0gPSBcInRyYW5zZm9ybSAxNTBtcyBlYXNlLW91dCwgZm9udC1zaXplIDE1MG1zIGVhc2Utb3V0XCI7XG5cbiAgICAgICAgICAgICAgICBpZiAodmlldy5wcm9wcy5sZXR0ZXJTcGFjaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGxbXCJzdHlsZVwiXVtcImxldHRlci1zcGFjaW5nXCJdID0gdmlldy5wcm9wcy5sZXR0ZXJTcGFjaW5nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnaW5wdXQtZ3JvdXAnKTtcbiAgICAgICAgICAgICAgICBlbGVtLmFwcGVuZENoaWxkKGwpO1xuICAgICAgICAgICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoaW5wdXRWaWV3KTtcblxuICAgICAgICAgICAgICAgIHZpZXcucHJvcHMuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh2aWV3LnR5cGUsIGVsZW0sIHZpZXcucHJvcHMsIHRydWUpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB2aWV3LnByb3BzLmxhYmVsO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2aWV3LnByb3BzLmhpbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtLnBsYWNlaG9sZGVyID0gdmlldy5wcm9wcy5oaW50IHx8IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh2aWV3LmVsTmFtZSB8fCBcImRpdlwiKTsgLy8gY3JlYXRlIHRoZSBlbGVtZW50IGhlcmUgXG4gICAgICAgIH1cblxuICAgICAgICAvKiBUb29sdGlwICovXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHZpZXcudHlwZSAhPSAnbGluZWFyTGF5b3V0JyAmJlxuICAgICAgICAgICAgdmlldy50eXBlICE9ICdyZWxhdGl2ZUxheW91dCcgJiZcbiAgICAgICAgICAgIHZpZXcudHlwZSAhPSAnaG9yaXpvbnRhbFNjcm9sbFZpZXcnICYmXG4gICAgICAgICAgICB2aWV3LnR5cGUgIT0gJ3Njcm9sbFZpZXcnICYmXG4gICAgICAgICAgICB2aWV3LnR5cGUgIT0gJ2xpc3RWaWV3J1xuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICh2aWV3LnByb3BzLmhhc093blByb3BlcnR5KCd0b29sdGlwVGV4dCcpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRvb2x0aXBUZXh0ID0gdmlldy5wcm9wcy50b29sdGlwVGV4dC50cmltKClcblxuICAgICAgICAgICAgICAgIGlmICh0b29sdGlwVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdG9vbHRpcEdyYXZpdHkgPSB2aWV3LnByb3BzLnRvb2x0aXBHcmF2aXR5ID8gdmlldy5wcm9wcy50b29sdGlwR3Jhdml0eSA6ICd0b3AnXG5cbiAgICAgICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdoYXNUb29sdGlwJylcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9vbHRpcEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwRWxlbS5pbm5lckhUTUwgPSAnPHByZT4nICsgdG9vbHRpcFRleHQgKyAnPC9wcmU+J1xuICAgICAgICAgICAgICAgICAgICB0b29sdGlwRWxlbS5jbGFzc0xpc3QuYWRkKCd0b29sdGlwVGV4dCcpXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBFbGVtLmNsYXNzTGlzdC5hZGQoJ3Rvb2x0aXBHcmF2aXR5XycgKyB0b29sdGlwR3Jhdml0eSlcblxuICAgICAgICAgICAgICAgICAgICBsZXQgc2l6ZSA9IDE1XG4gICAgICAgICAgICAgICAgICAgIGlmICh2aWV3LnByb3BzLmhhc093blByb3BlcnR5KCd0b29sdGlwVGV4dFNpemUnKSAmJiAhaXNOYU4odmlldy5wcm9wcy50b29sdGlwVGV4dFNpemUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplID0gdmlldy5wcm9wcy50b29sdGlwVGV4dFNpemVcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBFbGVtLnN0eWxlLmZvbnRTaXplID0gc2l6ZSArICdweCdcblxuICAgICAgICAgICAgICAgICAgICBlbGVtLmFwcGVuZENoaWxkKHRvb2x0aXBFbGVtKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKiBUb29sdGlwIEVuZCAqL1xuXG5cbiAgICAgICAgbmV3SW5mbGF0ZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIGF0dGFjaCB0aGUgZWxlbWVudCB0byB0aGUgZG9tIFxuICAgICAgICBpZiAocGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgbGV0IHNpYmxpbmdFbGVtZW50ID0gc2libGluZ1ZpZXcgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzaWJsaW5nVmlldy5wcm9wcy5pZCkgOiBudWxsO1xuXG4gICAgICAgICAgICBpZiAoc2libGluZ0VsZW1lbnQgJiYgc2libGluZ0VsZW1lbnQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQgPT0gc2libGluZ0VsZW1lbnQpIHsgLy8gUHJlcGVuZFxuICAgICAgICAgICAgICAgICAgICBpZiAoc3ViRWxlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoc3ViRWxlbSwgcGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShlbGVtLCBwYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIEluc2VydCBpbiBzcGVjaWZpZWQgcG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRTaWJsaW5nRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50Lm5leHRTaWJsaW5nO1xuXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGVsZW0sIG5leHRTaWJsaW5nRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJFbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShzdWJFbGVtLCBuZXh0U2libGluZ0VsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVsZW0pO1xuICAgICAgICAgICAgICAgIGlmIChzdWJFbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoc3ViRWxlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXBwZW5lZCBhdHRyaWJ1dGVzLCBzdHlsZSB0byB0aGUgZWxlbWVuZW50IFxuICAgICAgICBzZXRBdHRyaWJ1dGVzKHZpZXcudHlwZSwgZWxlbSwgdmlldy5wcm9wcywgdHJ1ZSk7XG5cbiAgICAgICAgLyppZih2aWV3LnByb3BzLmhhc093blByb3BlcnR5KCdhZnRlclJlbmRlcicpICYmIHR5cGVvZiB2aWV3LnByb3BzLmFmdGVyUmVuZGVyID09IFwiZnVuY3Rpb25cIil7XG4gICAgICAgICAgaWYoIXN0b3BPYnNlcnZlcil7XG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgcnVuIG9ic2VydmVyIGZvciB0aGUgZWxlbWVudFxuICAgICAgICAgICAgb2JzZXJ2ZXIoZWxlbSk7XG4gICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnaGFzX3JlbmRlcicsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSovXG4gICAgfSBlbHNlIGlmIChyZW5kZXJTdHlsZSkge1xuICAgICAgICBzZXRBdHRyaWJ1dGVzKHZpZXcudHlwZSwgZWxlbSwgdmlldy5wcm9wcywgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh2aWV3LnR5cGUgPT0gJ2hvcml6b250YWxTY3JvbGxWaWV3Jykge1xuICAgICAgICBpZiAodmlldy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgnc2Nyb2xsTGVmdCcpICYmICFpc05hTih2aWV3LnByb3BzLnNjcm9sbExlZnQpKVxuICAgICAgICAgICAgZWxlbS5zY3JvbGxMZWZ0ID0gdmlldy5wcm9wcy5zY3JvbGxMZWZ0O1xuICAgIH1cblxuICAgIGlmICh2aWV3LnR5cGUgPT0gJ2xpc3RWaWV3Jykge1xuICAgICAgICBpZiAodmlldy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgnc2Nyb2xsVG9wJykgJiYgIWlzTmFOKHZpZXcucHJvcHMuc2Nyb2xsVG9wKSlcbiAgICAgICAgICAgIGVsZW0uc2Nyb2xsVG9wID0gdmlldy5wcm9wcy5zY3JvbGxUb3A7XG4gICAgfVxuXG4gICAgaWYgKHZpZXcudHlwZSA9PSAnc2Nyb2xsVmlldycpIHtcbiAgICAgICAgaWYgKHZpZXcucHJvcHMuaGFzT3duUHJvcGVydHkoJ3Njcm9sbExlZnQnKSAmJiAhaXNOYU4odmlldy5wcm9wcy5zY3JvbGxMZWZ0KSlcbiAgICAgICAgICAgIGVsZW0uc2Nyb2xsTGVmdCA9IHZpZXcucHJvcHMuc2Nyb2xsTGVmdDtcblxuICAgICAgICBpZiAodmlldy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgnc2Nyb2xsVG9wJykgJiYgIWlzTmFOKHZpZXcucHJvcHMuc2Nyb2xsVG9wKSlcbiAgICAgICAgICAgIGVsZW0uc2Nyb2xsVG9wID0gdmlldy5wcm9wcy5zY3JvbGxUb3A7XG4gICAgfVxuXG4gICAgaWYgKHZpZXcudHlwZSA9PSAnY2hlY2tCb3gnKSB7XG4gICAgICAgIGlmICh2aWV3LnByb3BzLmhhc093blByb3BlcnR5KCdjaGVja2VkJykgJiYgdmlldy5wcm9wcy5jaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgICAgIGVsZW0uY2hlY2tlZCA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW0uY2hlY2tlZCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXN0b3BDaGlsZClcbiAgICAgICAgY29tcHV0ZUNoaWxkRGltZW5zKHZpZXcpO1xuXG4gICAgc2V0Q29tcHV0ZWRTdHlsZXMoZWxlbSwgdmlldy5wcm9wcyk7XG4gICAgc2V0QW5pbWF0aW9uU3R5bGVzKGVsZW0sIHZpZXcucHJvcHMpO1xuXG4gICAgaWYgKCFzdG9wQ2hpbGQpIHtcbiAgICAgICAgaWYgKHZpZXcuaGFzT3duUHJvcGVydHkoJ2NoaWxkcmVuJykgJiYgdmlldy5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZpZXcuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodmlldy5jaGlsZHJlbltpXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mbGF0ZVZpZXcodmlldy5jaGlsZHJlbltpXSwgZWxlbSwgdmlldy5jaGlsZHJlbltpIC0gMV0sIHN0b3BDaGlsZCwgc3RvcE9ic2VydmVyLCByZW5kZXJTdHlsZSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmxhdGVWaWV3KHZpZXcuY2hpbGRyZW5baV0sIGVsZW0sIHZpZXcsIHN0b3BDaGlsZCwgc3RvcE9ic2VydmVyLCByZW5kZXJTdHlsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld0luZmxhdGVkKSB7XG4gICAgICAgIGlmICh2aWV3LnByb3BzLmhhc093blByb3BlcnR5KCdhZnRlclJlbmRlcicpICYmIHR5cGVvZiB2aWV3LnByb3BzLmFmdGVyUmVuZGVyID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgaWYgKCFzdG9wT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBzaG91bGQgcnVuIG9ic2VydmVyIGZvciB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICAgIG9ic2VydmVyKGVsZW0pO1xuICAgICAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdoYXNfcmVuZGVyJywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2IoZWxlbSwgdmlldyk7XG4gICAgfVxuXG4gICAgY29uc3QgZW5kID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgICB3aW5kb3cuaW5mbGF0ZVRpbWluZ3Nbdmlldy5wcm9wcy5pZF0gPSBlbmQgLSBzdGFydFxuICAgIHdpbmRvdy5pbmZsYXRlVGltaW5ncy5sYXN0VXBkYXRlZEF0ID0gZW5kXG5cbiAgICByZXR1cm4gZWxlbTtcbn07XG5cbmxldCBoYW5kbGVXcmFwQ29udGVudCA9ICh2aWV3LCBwYXJlbnRFbGVtZW50KSA9PiB7XG4gICAgbGV0IG5ld0RpbWVuID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudEVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBuZXdEaW1lbiArPSBwYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbaV0ub2Zmc2V0V2lkdGg7XG4gICAgfVxuICAgIHZpZXcucHJvcHMueCA9IG5ld0RpbWVuO1xuICAgIHJldHVybiB2aWV3O1xufVxuXG5sZXQgcnVuSW5VSSA9IGZ1bmN0aW9uIChjbWQpIHtcbiAgICBpZiAoIShjbWQgaW5zdGFuY2VvZiBBcnJheSkpXG4gICAgICAgIGNtZCA9IFtjbWRdO1xuXG4gICAgY21kLmZvckVhY2goZnVuY3Rpb24gKGVhY2gpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlYWNoLmlkKTtcblxuICAgICAgICBpZiAoIWVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKFwicnVuSW5VSSAoSWQgTlVMTCkgQ01EOlwiLCBlYWNoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2aWV3ID0gd2luZG93Ll9fVklFV1NbZWxlbS5pZF07XG4gICAgICAgIHZpZXcucHJvcHMgPSBoZWxwZXIubWVyZ2Uodmlldy5wcm9wcywgZWFjaCk7XG5cbiAgICAgICAgc2V0QXR0cmlidXRlcyh2aWV3LnR5cGUsIGVsZW0sIHZpZXcucHJvcHMsIGZhbHNlKTtcbiAgICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGluZmxhdGVWaWV3LFxuICAgIHJ1bkluVUksXG4gICAgY29tcHV0ZUNoaWxkRGltZW5zXG59O1xuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG52YXIgUmVuZGVyZXIgPSByZXF1aXJlKFwiLi9SZW5kZXJcIik7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVGFiV3JhcHBlciAoKSAge1xuICB2YXIgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgZWxlbS5jbGFzc05hbWUgPSBcInRhYlwiO1xuXG4gIHJldHVybiBlbGVtO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRhYlRpdGxlV3JhcHBlciAoKSB7XG4gIHZhciBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxlbS5jbGFzc05hbWUgPSBcInRhYi10aXRsZVdyYXBwZXJcIjtcblxuICByZXR1cm4gZWxlbTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVUYWJDb250ZW50V3JhcHBlciAoKSAge1xuICB2YXIgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgZWxlbS5jbGFzc05hbWUgPSBcInRhYi1jb250ZW50V3JhcHBlclwiO1xuXG4gIHJldHVybiBlbGVtO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRhYlRpdGxlRWwgKHRpdGxlKSB7XG4gIHZhciBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBlbGVtLmlubmVySFRNTCA9IHRpdGxlO1xuICBlbGVtLmNsYXNzTmFtZSA9IFwidGFiLXRpdGxlXCI7XG5cbiAgcmV0dXJuIGVsZW07XG59O1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVRhYkNvbnRlbnRFbCAodmlldykgIHtcbiAgdmFyIGVsZW0gPSBSZW5kZXJlci5pbmZsYXRlVmlldyh2aWV3LnZpZXcpO1xuICBlbGVtLmNsYXNzTmFtZSArPSBcIiB0YWItY29udGVudFwiO1xuXG4gIHJldHVybiBlbGVtO1xufVxuXG52YXIgY3JlYXRlVGFicyA9IGZ1bmN0aW9uKEFuZHJvaWQsIGlkLCB0YWJKc3gsIGpzeCwgY2IpICB7XG4gIHZhciB2aWV3ID0gZ2VuZXJhdGVUYWJXcmFwcGVyKCk7XG4gIHZhciB0YWJUaXRsZVdyYXBwZXIgPSBnZW5lcmF0ZVRhYlRpdGxlV3JhcHBlcigpO1xuICB2YXIgdGFiQ29udGVudFdyYXBwZXIgPSBnZW5lcmF0ZVRhYkNvbnRlbnRXcmFwcGVyKCk7XG4gIHZhciB0YWJJdGVtO1xuXG4gIHZpZXcuYXBwZW5kQ2hpbGQodGFiVGl0bGVXcmFwcGVyKTtcbiAgdmlldy5hcHBlbmRDaGlsZCh0YWJDb250ZW50V3JhcHBlcik7XG5cbiAganN4LmZvckVhY2goKGVhY2gsIGluZGV4KSA9PiB7XG4gICAgdGFiSXRlbSA9IGdlbmVyYXRlVGFiVGl0bGVFbChlYWNoLnZhbHVlKTtcblxuICAgIGlmIChpbmRleCA9PSAwKVxuICAgIHRhYkl0ZW0uY2xhc3NOYW1lICs9IFwiIHRhYi10aXRsZS1hY3RpdmVcIjtcblxuICAgIHRhYlRpdGxlV3JhcHBlci5hcHBlbmRDaGlsZCh0YWJJdGVtKTtcbiAgfSk7XG5cbiAgdGFiSnN4LmZvckVhY2goKGVhY2gsIGluZGV4KSA9PiB7XG4gICAgdGFiSXRlbSA9IGdlbmVyYXRlVGFiQ29udGVudEVsKGVhY2gpO1xuXG4gICAgaWYgKGluZGV4ID09IDApXG4gICAgdGFiSXRlbS5jbGFzc05hbWUgKz0gXCIgdGFiLWNvbnRlbnQtYWN0aXZlXCI7XG5cbiAgICB0YWJDb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZCh0YWJJdGVtKTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmFwcGVuZENoaWxkKHZpZXcpO1xuXG4gIHdpbmRvdy5jYWxsVUlDYWxsYmFjayhjYiAsIFwiMFwiKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVUYWJzOiBjcmVhdGVUYWJzLFxufVxuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5jb25zdCBCYXNlVmlldyA9IHJlcXVpcmUoJy4vYmFzZVZpZXcnKTtcbmNvbnN0IFZJRVcgPSBuZXcgQmFzZVZpZXcobnVsbCwgbnVsbCwge30pO1xuXG4vLyBPYmplY3Qgb2YgdHlwZXMgb2YgYW5pbWF0aW9ucyBhdmFpbGFibGUgb24gc2NyZWVuIGNoYW5nZVxuY29uc3QgQW5pbWF0aW9uVHlwZXMgPSB7XG4gIFNMSURFOiB7XG4gICAgbmFtZTogXCJzbGlkZVwiLFxuICAgIGhhbmRsZXI6IHNsaWRlSGFuZGxlclxuICB9LFxuICBTTElERV9WRVJUSUNBTDoge1xuICAgIG5hbWU6IFwic2xpZGVfZG93blwiLFxuICAgIGhhbmRsZXI6IHNsaWRlRG93bkhhbmRsZXJcbiAgfSxcbiAgU0lNUExFOiB7XG4gICAgbmFtZTogXCJzaW1wbGVcIixcbiAgICBoYW5kbGVyOiBzaW1wbGVIYW5kbGVyXG4gIH1cbn1cblxuY29uc3QgREVGQVVMVF9BTklNQVRJT04gPSBBbmltYXRpb25UeXBlcy5TTElERTtcblxuZnVuY3Rpb24gc2ltcGxlSGFuZGxlcihmcm9tSWQsIHRvSWQsIGRpcmVjdGlvbikge1xuICBsZXQgY21kID0gVklFVy5jbWQoe1xuICAgIGlkOiB0b0lkLFxuICAgIHRyYW5zbGF0aW9uWjogKyt3aW5kb3cuWkluZGV4XG4gIH0pO1xuICByZXR1cm4gY21kO1xufVxuXG5mdW5jdGlvbiBzbGlkZURvd25IYW5kbGVyKGZyb21JZCwgdG9JZCwgZGlyZWN0aW9uKSB7XG4gIGxldCBjb250YWluZXIgPSBWSUVXLmNtZENvbnRhaW5lcigpO1xuICBsZXQgY21kO1xuXG4gIGlmIChkaXJlY3Rpb24gPT0gMSkge1xuICAgIGNtZCA9IFZJRVcuY21kKHtcbiAgICAgIGlkOiB0b0lkLFxuICAgICAgdHJhbnNsYXRpb25ZOiB3aW5kb3cuX19IRUlHSFQsXG4gICAgICBhX2R1cmF0aW9uOiAnMzAwJyxcbiAgICAgIGFfdHJhbnNsYXRpb25ZOiAnMCcsXG4gICAgICB0cmFuc2xhdGlvblo6ICsrd2luZG93LlpJbmRleCxcbiAgICB9KTtcbiAgICBjb250YWluZXIgPSBjb250YWluZXIuYWRkQ21kKGNtZCk7XG5cbiAgICBjbWQgPSBWSUVXLmNtZCh7XG4gICAgICBpZDogZnJvbUlkLFxuICAgICAgYV90cmFuc2xhdGlvblk6IC0wLjIgKiB3aW5kb3cuX19IRUlHSFQsXG4gICAgICBhX2R1cmF0aW9uOiAnMzAwJ1xuICAgIH0pO1xuICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5hZGRDbWQoY21kKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICB3aW5kb3cuWkluZGV4Kys7XG4gIGNtZCA9IFZJRVcuY21kKHtcbiAgICBpZDogZnJvbUlkLFxuICAgIHRyYW5zbGF0aW9uWTogMCxcbiAgICBhX3RyYW5zbGF0aW9uWTogd2luZG93Ll9fSEVJR0hULFxuICAgIGFfZHVyYXRpb246ICczMDAnLFxuICAgIHRyYW5zbGF0aW9uWjogKyt3aW5kb3cuWkluZGV4XG4gIH0pO1xuICBjb250YWluZXIgPSBjb250YWluZXIuYWRkQ21kKGNtZCk7XG5cbiAgY21kID0gVklFVy5jbWQoe1xuICAgIGlkOiB0b0lkLFxuICAgIHRyYW5zbGF0aW9uWjogd2luZG93LlpJbmRleC0xLFxuICAgIGFfdHJhbnNsYXRpb25ZOiAnMCcsXG4gICAgdHJhbnNsYXRpb25ZOiAtMC4yICogd2luZG93Ll9fSEVJR0hULFxuICAgIGFfZHVyYXRpb246ICczMDAnLFxuICB9KTtcbiAgY29udGFpbmVyID0gY29udGFpbmVyLmFkZENtZChjbWQpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHNsaWRlSGFuZGxlcihmcm9tSWQsIHRvSWQsIGRpcmVjdGlvbikge1xuICBsZXQgY29udGFpbmVyID0gVklFVy5jbWRDb250YWluZXIoKTtcbiAgbGV0IGNtZDtcbiAgaWYgKGRpcmVjdGlvbiA9PSAxKSB7XG4gICAgY21kID0gVklFVy5jbWQoe1xuICAgICAgaWQ6IHRvSWQsXG4gICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICB0cmFuc2xhdGlvblg6IHdpbmRvdy5fX1dJRFRILFxuICAgICAgYV9kdXJhdGlvbjogJzMwMCcsXG4gICAgICBhX3RyYW5zbGF0aW9uWDogJzAnLFxuICAgICAgdHJhbnNsYXRpb25aOiArK3dpbmRvdy5aSW5kZXgsXG4gICAgfSk7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLmFkZENtZChjbWQpO1xuICAgIGNtZCA9IFZJRVcuY21kKHtcbiAgICAgIGlkOiBmcm9tSWQsXG4gICAgICB0cmFuc2xhdGlvblg6ICcwJyxcbiAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgIGFfZHVyYXRpb246ICczMDAnLFxuICAgICAgYV90cmFuc2xhdGlvblg6ICgtLjIgKiB3aW5kb3cuX19XSURUSCkgKyAnJyxcbiAgICB9KTtcbiAgICBjb250YWluZXIgPSBjb250YWluZXIuYWRkQ21kKGNtZCk7XG4gIH1cblxuICBpZiAoZGlyZWN0aW9uID09IC0xKSB7XG4gICAgd2luZG93LlpJbmRleCsrO1xuICAgIGNtZCA9IFZJRVcuY21kKHtcbiAgICAgIGlkOiBmcm9tSWQsXG4gICAgICB0cmFuc2xhdGlvblg6ICcwJyxcbiAgICAgIGFfZHVyYXRpb246ICczMDAnLFxuICAgICAgYV90cmFuc2xhdGlvblg6IHdpbmRvdy5fX1dJRFRILFxuICAgICAgdHJhbnNsYXRpb25aOiArK3dpbmRvdy5aSW5kZXgsXG4gICAgfSk7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLmFkZENtZChjbWQpO1xuXG4gICAgY21kID0gVklFVy5jbWQoe1xuICAgICAgaWQ6IHRvSWQsXG4gICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICB0cmFuc2xhdGlvblg6ICgtLjIgKiB3aW5kb3cuX19XSURUSCkgKyAnJyxcbiAgICAgIGFfZHVyYXRpb246ICczMDAnLFxuICAgICAgYV90cmFuc2xhdGlvblg6ICcwJyxcbiAgICAgIHRyYW5zbGF0aW9uWjogd2luZG93LlpJbmRleCAtIDEsXG4gICAgfSk7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLmFkZENtZChjbWQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuLypcbiAgR2VuZXJpYyBIYW5kbGVyIGZvciBBbmltYXRpb25cbiAgQXJndW1lbnRzOlxuICAgIGZyb21WaWV3SWQ6IE51bWJlciAtIElkIG9mIHRoZSB2aWV3IGN1cnJlbnRseSB2aXNpYmxlIG9uIHRoZSBzY3JlZW5cbiAgICB0b1ZpZXdJRDogTnVtYmVyIC0gSWQgb2YgdGhlIHZpZXcgd2hpY2ggaGFzIHRvIGJlIGJyb3VnaHQgb24gdGhlIHNjcmVlblxuICAgIElEOiBOdW1iZXIgLSBJZCBvZiB0aGUgdmlldyB0byBiZSBhbmltYXRlZFxuICAgIGFuaW1hdG9yOiBPYmogLSB7bmFtZTpzdHJpbmcsIGhhbmRsZXI6ZnVuY3Rpb259XG4gICAgZGlyZWN0aW9uOiBOdW1iZXIgLSBSZXByZXNlbnRzIG9mIHRoZSBkaXJlY3Rpb24gb2YgdGhlIHNjcmVlblxuICAgICAgLTEgOiBHbyBiYWNrIHRvIHRoZSBhbHJlYWR5IHJlbmRlcmVkIHNjcmVlbiAocmlnaHQgdG8gbGVmdClcbiAgICAgICAxIDogR28gdG8gdGhlIG5ldyBzY3JlZW4gKGxlZnQgdG8gcmlnaHQpXG4qL1xuZnVuY3Rpb24gZ2V0QW5pbWF0aW9uKGZyb21WaWV3SUQsIHRvVmlld0lkLCBkaXJlY3Rpb24sIGFuaW1hdG9yKSB7XG4gIGlmICghYW5pbWF0b3IpXG4gICAgYW5pbWF0b3IgPSBERUZBVUxUX0FOSU1BVElPTjtcblxuICBpZiAodHlwZW9mIGFuaW1hdG9yID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBhbmltYXRvci5oYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpXG4gICAgcmV0dXJuIGFuaW1hdG9yLmhhbmRsZXIoZnJvbVZpZXdJRCwgdG9WaWV3SWQsIGRpcmVjdGlvbik7XG4gIGVsc2VcbiAgICBjb25zb2xlLmxvZyhuZXcgRXJyb3IoXCJBbmltYXRpb24gaGFuZGxlciBpcyBub3QgYSBmdW5jdGlvbiwgdHlwZTogXCIgK1xuICAgICAgYW5pbWF0b3IpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMudHlwZXMgPSBBbmltYXRpb25UeXBlcztcbm1vZHVsZS5leHBvcnRzLmdldEFuaW1hdGlvbiA9IGdldEFuaW1hdGlvbjsiLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbmNvbnN0IG1lcmdlID0gIHJlcXVpcmUoXCIuL2hlbHBlclwiKS5tZXJnZTtcblxuU3RyaW5nLnByb3RvdHlwZS5hZGRDbWQgPSBmdW5jdGlvbihkYXRhKSB7XG4gIHJldHVybiB0aGlzLmNvbmNhdChkYXRhKTtcbn07XG5cbkFycmF5LnByb3RvdHlwZS5hZGRDbWQgPSBmdW5jdGlvbihkYXRhKSB7XG4gIHRoaXMucHVzaChkYXRhKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5sZXQgcGFyc2VQYXJhbXM7XG5pZiAod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpXG4gIHBhcnNlUGFyYW1zID0gcmVxdWlyZSgnLi9oZWxwZXJzL2FuZHJvaWQvcGFyc2VQYXJhbXMnKTtcbmVsc2UgaWYgKHdpbmRvdy5fX09TID09IFwiV0VCXCIpXG4gIHBhcnNlUGFyYW1zID0gcmVxdWlyZSgnLi9oZWxwZXJzL3dlYi9wYXJzZVBhcmFtcycpO1xuZWxzZVxuICBwYXJzZVBhcmFtcyA9IHJlcXVpcmUoJy4vaGVscGVycy9pb3MvcGFyc2VQYXJhbXMnKTtcblxuY2xhc3MgQmFzZVZpZXcge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgY2hpbGRyZW4pIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHMgfHwge307XG4gICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuIHx8IFtdO1xuXG4gICAgd2luZG93Ll9fU0VURk4gPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICBBbmRyb2lkLnJ1bkluVUkoXG4gICAgICAgIHRoaXMuc2V0KGNvbmZpZyksXG4gICAgICAgIG51bGxcbiAgICAgIClcbiAgICB9LmJpbmQodGhpcylcblxuICAgIHRoaXMuaWRTZXQgPSB7fTtcblxuICAgIGlmICh0aGlzLnByb3BzLmlkKSB7XG4gICAgICB0aGlzLmlkU2V0W1wiaWRcIl0gPSB0aGlzLnByb3BzLmlkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLmlkID0gdGhpcy5pZChcImlkXCIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLl9yZWYpIHtcbiAgICAgIHRoaXMucHJvcHMuX3JlZih0aGlzKTtcbiAgICB9XG4gIH1cblxuICByZXNvbHZlQ2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICByZXR1cm4gY2hpbGQucmVuZGVyKCk7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kUmVjdXJzZShvYmosIHNlbGVjdG9yKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gb2JqLmNoaWxkcmVuO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNoaWxkcmVuW2ldLmRpc3BsYXlOYW1lICYmIGNoaWxkcmVuW2ldLmRpc3BsYXlOYW1lID09IHNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMuZm91bmRDaGlsZHJlbi5wdXNoKGNoaWxkcmVuW2ldKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkcmVuW2ldLmNoaWxkcmVuICYmIGNoaWxkcmVuW2ldLmNoaWxkcmVuLmxlbmd0aClcbiAgICAgICAgdGhpcy5maW5kUmVjdXJzZShjaGlsZHJlbltpXSwgc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGZpbmQoc2VsZWN0b3IsIG9iaikge1xuICAgIHRoaXMuZm91bmRDaGlsZHJlbiA9IFtdO1xuXG4gICAgaWYgKCFvYmopXG4gICAgICB0aGlzLmZpbmRSZWN1cnNlKHRoaXMubGF5b3V0LCBzZWxlY3Rvcik7XG4gICAgZWxzZVxuICAgICAgdGhpcy5maW5kUmVjdXJzZShvYmosIHNlbGVjdG9yKTtcblxuICAgIHJldHVybiB0aGlzLmZvdW5kQ2hpbGRyZW47XG4gIH1cblxuICBpZChuYW1lKSB7XG4gICAgaWYgKCF0aGlzLmlkU2V0W25hbWVdKSB7XG4gICAgICB3aW5kb3cuX19JRCsrO1xuICAgICAgdGhpcy5pZFNldFtuYW1lXSA9IHdpbmRvdy5fX0lEO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcy5pZFNldFtuYW1lXTtcbiAgfVxuXG4gIHNldElkcyhhcnIpIHtcbiAgICBpZiAoIXRoaXMuaWRTZXQpXG4gICAgICB0aGlzLmlkU2V0ID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCF0aGlzLmlkU2V0W2FycltpXV0pIHtcbiAgICAgICAgd2luZG93Ll9fSUQrKztcbiAgICAgICAgdGhpcy5pZFNldFthcnJbaV1dID0gd2luZG93Ll9fSUQgKyAnJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVTcGVjaWFsQ2hhcnModmFsdWUpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLmluZGV4T2YoJywnKSA+IC0xID8gdmFsdWUucmVwbGFjZSgvXFwsL2csICdcXFxcXFxcXCwnKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gdmFsdWUuaW5kZXhPZignOicpID4gLTEgPyB2YWx1ZS5yZXBsYWNlKC9cXDovZywgJ1xcXFxcXFxcOicpIDogdmFsdWU7XG4gICAgdmFsdWUgPSB2YWx1ZS5pbmRleE9mKCc9JykgPiAtMSA/IHZhbHVlLnJlcGxhY2UoL1xcPS9nLCAnXFxcXFxcXFw9JykgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IHZhbHVlLmluZGV4T2YoJzsnKSA+IC0xID8gdmFsdWUucmVwbGFjZSgvXFw7L2csICdcXFxcXFxcXDsnKSA6IHZhbHVlO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgY21kRm9yQW5kcm9pZChjb25maWcpIHtcbiAgICB2YXIgY21kID0gXCJzZXRfdmlldz1jdHgtPmZpbmRWaWV3QnlJZDppX1wiICsgY29uZmlnLmlkICsgXCI7XCI7XG4gICAgdmFyIHJ1bkluVUk7XG5cbiAgICBpZiAoY29uZmlnLnRvYXN0KSB7XG4gICAgICBjbWQgPSBcInNldF9UT0FTVD1hbmRyb2lkLndpZGdldC5Ub2FzdC0+bWFrZVRleHQ6Y3R4X2N0eCxjc19cIiArIHRoaXMuaGFuZGxlU3BlY2lhbENoYXJzKFxuICAgICAgICAgIGNvbmZpZy50ZXh0KSArIFwiLGlfXCIgKyAoY29uZmlnLmR1cmF0aW9uID09IFwic2hvcnRcIiA/IDAgOiAxKSArXG4gICAgICAgIFwiO2dldF9UT0FTVC0+c2hvd1wiO1xuICAgIH0gZWxzZSBpZiAoY29uZmlnICYmIE9iamVjdC5rZXlzKGNvbmZpZykubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmlkO1xuXG4gICAgICBjb25maWcucm9vdCA9IFwidHJ1ZVwiO1xuICAgICAgcnVuSW5VSSA9IHBhcnNlUGFyYW1zKFwibGluZWFyTGF5b3V0XCIsIGNvbmZpZywgXCJnZXRcIikucnVuSW5VSTtcblxuICAgICAgY21kICs9IHJ1bkluVUkgKyAnOyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNtZDtcbiAgfVxuXG4gIGNtZENvbnRhaW5lcigpIHtcbiAgICBpZiAod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpXG4gICAgICByZXR1cm4gXCJcIjtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjbWRGb3JXZWIoY29uZmlnKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGNvbmZpZykubGVuZ3RoKVxuICAgICAgcmV0dXJuIHBhcnNlUGFyYW1zKFwibGluZWFyTGF5b3V0XCIsIGNvbmZpZywgXCJzZXRcIik7XG4gIH1cblxuICBjbWQoY29uZmlnKSB7XG4gICAgaWYgKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKVxuICAgICAgcmV0dXJuIHRoaXMuY21kRm9yQW5kcm9pZChjb25maWcpO1xuICAgIGVsc2UgaWYgKHdpbmRvdy5fX09TID09IFwiV0VCXCIpXG4gICAgICByZXR1cm4gdGhpcy5jbWRGb3JXZWIoY29uZmlnKTtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgYXBwZW5kQ2hpbGQoaWQsIGpzeCwgaW5kZXgsIGZuLCByZXBsYWNlQ2hpbGQpIHtcbiAgICB2YXIgcHJveHlGbk5hbWU7XG4gICAgaWYgKCFyZXBsYWNlQ2hpbGQpIHtcbiAgICAgIHJlcGxhY2VDaGlsZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChmbikge1xuICAgICAgcHJveHlGbk5hbWUgPSAnRicgKyB3aW5kb3cuX19GTl9JTkRFWDtcbiAgICAgIHdpbmRvdy5fX1BST1hZX0ZOW3Byb3h5Rm5OYW1lXSA9IGZuO1xuICAgICAgd2luZG93Ll9fRk5fSU5ERVgrKztcbiAgICB9XG5cbiAgICBqc3ggPSAod2luZG93Ll9fT1MgIT0gXCJBTkRST0lEXCIpID8ganN4IDogSlNPTi5zdHJpbmdpZnkoanN4KTtcblxuICAgIGlmIChwcm94eUZuTmFtZSlcbiAgICAgIEFuZHJvaWQuYWRkVmlld1RvUGFyZW50KGlkLCBqc3gsIGluZGV4LCBwcm94eUZuTmFtZSwgcmVwbGFjZUNoaWxkKTtcbiAgICBlbHNlXG4gICAgICBBbmRyb2lkLmFkZFZpZXdUb1BhcmVudChpZCwganN4LCBpbmRleCwgbnVsbCwgcmVwbGFjZUNoaWxkKTtcbiAgfVxuXG4gIGdldFZpZXcoanN4KSB7XG4gICAgaWYgKHdpbmRvdy5fX09TICE9IFwiQU5EUk9JRFwiKVxuICAgICAgcmV0dXJuIGpzeDtcblxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShqc3gpO1xuICB9XG5cbiAgdXBkYXRlUHJvcHMocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0gbWVyZ2UodGhpcy5wcm9wcywgcHJvcHMpO1xuICAgIGNvbnN0IG9sZENvbnRhaW5lcklkID0gdGhpcy5sYXlvdXQuaWRTZXQuaWQ7XG4gICAgY29uc3QgbGF5b3V0ID0gdGhpcy5yZW5kZXIoKTtcbiAgICBmb3IgKGxldCBpPTA7IGk8bGF5b3V0LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaT09MCkgdGhpcy5yZXBsYWNlQ2hpbGQob2xkQ29udGFpbmVySWQsIGxheW91dC5jaGlsZHJlbltpXSwgaSk7XG4gICAgICBlbHNlIHRoaXMuYXBwZW5kQ2hpbGQob2xkQ29udGFpbmVySWQsIGxheW91dC5jaGlsZHJlbltpXSwgaSk7XG4gICAgfVxuICAgIHRoaXMubGF5b3V0LmlkU2V0LmlkID0gb2xkQ29udGFpbmVySWQ7XG4gIH1cblxuICByZW1vdmVWaWV3KGlkKSB7XG4gICAgaWYgKF9fT1MgPT0gXCJXRUJcIilcbiAgICAgIHJldHVybiBBbmRyb2lkLnJlbW92ZVZpZXcoaWQpO1xuICAgIHJldHVybiBcInNldF9WSUVXPWN0eC0+ZmluZFZpZXdCeUlkOmlfXCIgKyBpZCArXG4gICAgICBcIjtzZXRfUEFSRU5UPWdldF9WSUVXLT5nZXRQYXJlbnQ7Z2V0X1BBUkVOVC0+cmVtb3ZlVmlldzpnZXRfVklFVztcIlxuICB9XG5cbiAgcmVtb3ZlQ2hpbGRyZW4oaWQpIHtcbiAgICBpZiAoX19PUyA9PSBcIldFQlwiKVxuICAgICAgcmV0dXJuIEFuZHJvaWQucmVtb3ZlQ2hpbGRyZW4oaWQpO1xuICAgIHJldHVybiBcInNldF9WSUVXPWN0eC0+ZmluZFZpZXdCeUlkOmlfXCIgKyBpZCArXG4gICAgICBcIjtnZXRfVklFVy0+cmVtb3ZlQWxsVmlld3M7XCJcbiAgfVxuXG4gIHJlcGxhY2VDaGlsZChpZCwganN4LCBpbmRleCwgZm4pIHtcbiAgICB0aGlzLmFwcGVuZENoaWxkKGlkLCBqc3gsIGluZGV4LCBmbiwgdHJ1ZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNlVmlldzsiLCJjb25zdCBEcm9wZG93bkJveCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Ecm9wZG93bkJveCcpXG5jb25zdCBEcm9wZG93blNlYXJjaEJveCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Ecm9wZG93blNlYXJjaEJveCcpIFxuY29uc3QgTmF2QmFyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL05hdkJhcicpXG4vLyBjb25zdCBEYXRlUmFuZ2VQaWNrZXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvRGF0ZVJhbmdlUGlja2VyJylcbmNvbnN0IFN3aXRjaEJ1dHRvbiA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Td2l0Y2hCdXR0b24nKVxuY29uc3QgQnV0dG9uID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0J1dHRvbicpXG5cblxuXG4vKiBDb21wb25lbnRzICovXG5mdW5jdGlvbiBjbG9zZUFsbEFjdGl2ZUNvbXBvbmVudHMoKSB7XG4gICAgaWYod2luZG93Ll9fQ09NX0FDVElWRS5OQVZCQVIgIT0gJycpXG4gICAgICAgIE5hdkJhci5fY2xvc2VCeUdVSUQod2luZG93Ll9fQ09NX0FDVElWRS5OQVZCQVIpXG4gICAgaWYod2luZG93Ll9fQ09NX0FDVElWRS5EU0IgIT0gJycpXG4gICAgICAgIERyb3Bkb3duU2VhcmNoQm94Ll9jbG9zZUJ5R1VJRCh3aW5kb3cuX19DT01fQUNUSVZFLkRTQilcbiAgICBpZih3aW5kb3cuX19DT01fQUNUSVZFLkRCICE9ICcnKVxuICAgICAgICBEcm9wZG93bkJveC5fY2xvc2VCeUdVSUQod2luZG93Ll9fQ09NX0FDVElWRS5EQilcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ29tcG9uZW50KGVsZW0sIHByb3BzLCBmaXJzdFJlbmRlcikge1xuICAgIGlmKCFwcm9wcy5jb21wb25lbnRUeXBlKVxuICAgICAgICByZXR1cm5cblxuICAgIGxldCBjb21wb25lbnRUeXBlID0gcHJvcHMuY29tcG9uZW50VHlwZVxuXG4gICAgLyogQXR0YWNoaW5nIEdVSUQgb25seSB3aGVuIGZpcnN0UmVuZGVyICovXG4gICAgaWYoZmlyc3RSZW5kZXIgJiYgcHJvcHMuZ3VpZClcbiAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2d1aWQnLCBwcm9wcy5ndWlkKVxuXG4gICAgc3dpdGNoKGNvbXBvbmVudFR5cGUpIHtcbiAgICAgICAgLy8gQnV0dG9uXG4gICAgICAgIGNhc2UgJ0JUJzpcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuQlQpXG5cbiAgICAgICAgICAgIEJ1dHRvbi5fcmVuZGVyTWFpbihlbGVtLCBwcm9wcywgZmlyc3RSZW5kZXIpXG4gICAgICAgIGJyZWFrICAgIFxuICAgICAgICAvLyBTd2l0Y2ggQnV0dG9uXG4gICAgICAgIGNhc2UgJ1NXSVRDSCc6XG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLlNXSVRDSClcblxuICAgICAgICAgICAgU3dpdGNoQnV0dG9uLl9yZW5kZXJNYWluKGVsZW0sIHByb3BzLCBmaXJzdFJlbmRlcilcbiAgICAgICAgYnJlYWtcbiAgICAgICAgLy8gRGF0ZSBSYW5nZSBQaWNrZXJcbiAgICAgICAgY2FzZSAnRFJQJzogXG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRSUClcblxuICAgICAgICAgIC8vICAgRGF0ZVJhbmdlUGlja2VyLl9yZW5kZXJNYWluKGVsZW0sIHByb3BzLCBmaXJzdFJlbmRlcilcbiAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnRFJQX0JPRFknOlxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EUlBfQk9EWSlcblxuICAgICAgICAgIC8vICAgRGF0ZVJhbmdlUGlja2VyLl9yZW5kZXJCb2R5KGVsZW0sIHByb3BzLCBmaXJzdFJlbmRlcilcbiAgICAgICAgYnJlYWtcbiAgICAgICAgLy8gTmF2IEJhclxuICAgICAgICBjYXNlICdOQVZCQVInOlxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5OQVZCQVIpXG5cbiAgICAgICAgICAgIE5hdkJhci5fcmVuZGVyTWFpbihlbGVtLCBwcm9wcywgZmlyc3RSZW5kZXIpXG4gICAgICAgIGJyZWFrXG4gICAgICAgIC8vIERyb3Bkb3duIEJveFxuICAgICAgICBjYXNlICdEQic6XG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRCKVxuXG4gICAgICAgICAgICBEcm9wZG93bkJveC5fcmVuZGVyTWFpbihlbGVtLCBwcm9wcywgZmlyc3RSZW5kZXIpXG4gICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ0RCX0ZVTExfQk9EWSc6IFxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EQl9GVUxMX0JPRFkpXG5cbiAgICAgICAgICAgIERyb3Bkb3duQm94Ll9yZW5kZXJGdWxsQm9keShlbGVtLCBwcm9wcywgZmlyc3RSZW5kZXIpXG4gICAgICAgIGJyZWFrXG4gICAgICAgIC8vIERyb3Bkb3duIFNlYXJjaCBCb3hcbiAgICAgICAgY2FzZSAnRFNCJzpcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuRFNCKVxuXG4gICAgICAgICAgICBEcm9wZG93blNlYXJjaEJveC5fcmVuZGVyTWFpbihlbGVtLCBwcm9wcywgZmlyc3RSZW5kZXIpXG4gICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ0RTQl9GVUxMX0JPRFknOlxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EU0JfRlVMTF9CT0RZKVxuXG4gICAgICAgICAgICBEcm9wZG93blNlYXJjaEJveC5fcmVuZGVyRnVsbEJvZHkoZWxlbSwgcHJvcHMsIGZpcnN0UmVuZGVyKVxuICAgICAgICBicmVha1xuICAgICB9XG5cbiAgICAgaWYoIXdpbmRvdy5fX0NPTV9FVkVOVCkge1xuICAgICAgICAgIHdpbmRvdy5fX0NPTV9FVkVOVCA9IHRydWVcblxuICAgICAgICAgIC8vIEJvZHkgY2xpY2sgZXZlbnRcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0XG4gICAgICAgICAgICAgICBsZXQgZ3VpZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2d1aWQnKVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBpZighZ3VpZCkgeyAvLyBXZSBuZWVkIHRvIGNsb3NlIGFueSBhY3RpdmUgY29tcG9uZW50c1xuICAgICAgICAgICAgICAgICAgICBjbG9zZUFsbEFjdGl2ZUNvbXBvbmVudHMoKVxuICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNsYXNzTGlzdCA9IHRhcmdldC5jbGFzc0xpc3RcblxuICAgICAgICAgICAgICAgICAgICBpZihjbGFzc0xpc3QuY29udGFpbnMod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLk5BVkJBUl9JVEVNX1dJVEhfU1VCKSkgeyAvLyBOQVZCQVIgTWVudSBJdGVtIHdpdGggU3ViUm91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICBpZihjbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCF3aW5kb3cuX19DT01fQUNUSVZFLk5BVkJBUilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5hdkJhci5fY2xvc2VCeUdVSUQod2luZG93Ll9fQ09NX0FDVElWRS5OQVZCQVIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQWxsQWN0aXZlQ29tcG9uZW50cygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOYXZCYXIuX29wZW5CeUdVSUQoZ3VpZCwgdGFyZ2V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGNsYXNzTGlzdC5jb250YWlucyh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuTkFWQkFSX0lURU0pIHx8IGNsYXNzTGlzdC5jb250YWlucyh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuTkFWQkFSX1NVQl9JVEVNKSkgeyAvLyBOQVZCQVIgTWVudSBJdGVtIChTdWIgSXRlbSBhcyB3ZWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5fX0NPTV9BQ1RJVkUuTkFWQkFSKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmF2QmFyLl9jbG9zZUJ5R1VJRCh3aW5kb3cuX19DT01fQUNUSVZFLk5BVkJBUilcblxuICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIE5hdkJhci5fc2VsZWN0Um91dGVCeUdVSUQoZ3VpZCwgdGFyZ2V0KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoY2xhc3NMaXN0LmNvbnRhaW5zKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EQikpIHsgLy8gREIgTWFpbiBDbGlja1xuICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGd1aWQgPT0gd2luZG93Ll9fQ09NX0FDVElWRS5EQikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRHJvcGRvd25Cb3guX2Nsb3NlQnlHVUlEKGd1aWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQWxsQWN0aXZlQ29tcG9uZW50cygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEcm9wZG93bkJveC5fb3BlbkJ5R1VJRChndWlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGNsYXNzTGlzdC5jb250YWlucyh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuREJfT1BUSU9OKSkgeyAvLyBEQiBPcHRpb24gU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgRHJvcGRvd25Cb3guX2Nsb3NlQnlHVUlEKGd1aWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgRHJvcGRvd25Cb3guX3NlbGVjdE9wdGlvbkJ5R1VJRChndWlkLCB0YXJnZXQpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihjbGFzc0xpc3QuY29udGFpbnMod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRTQikpIHsgLy8gRFNCIE1haW4gQ2xpY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICBpZihndWlkID09IHdpbmRvdy5fX0NPTV9BQ1RJVkUuRFNCKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEcm9wZG93blNlYXJjaEJveC5fY2xvc2VCeUdVSUQoZ3VpZClcbiAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VBbGxBY3RpdmVDb21wb25lbnRzKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERyb3Bkb3duU2VhcmNoQm94Ll9vcGVuQnlHVUlEKGd1aWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoY2xhc3NMaXN0LmNvbnRhaW5zKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EU0JfT1BUSU9OKSkgeyAvLyBEU0IgT3B0aW9uIFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgIERyb3Bkb3duU2VhcmNoQm94Ll9jbG9zZUJ5R1VJRChndWlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgIERyb3Bkb3duU2VhcmNoQm94Ll9zZWxlY3RPcHRpb25CeUdVSUQoZ3VpZCwgdGFyZ2V0KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIC8vIEtleWRvd24gZXZlbnRcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0XG4gICAgICAgICAgICAgICBsZXQgZ3VpZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2d1aWQnKVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBpZighZ3VpZClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBsZXQgY2xhc3NMaXN0ID0gdGFyZ2V0LmNsYXNzTGlzdFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBpZihjbGFzc0xpc3QuY29udGFpbnMod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRTQl9TRUFSQ0gpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGd1aWQgPT0gd2luZG93Ll9fQ09NX0FDVElWRS5EU0IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcXVlcnkgPSB0YXJnZXQudmFsdWUudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgRHJvcGRvd25TZWFyY2hCb3guX2ZpbHRlck9wdGlvbnMoZ3VpZCwgcXVlcnkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgICByZW5kZXJDb21wb25lbnRcbn0iLCJmdW5jdGlvbiBCdXR0b24oKSB7fVxuXG5CdXR0b24ucHJvdG90eXBlLl9yZW5kZXJNYWluID0gZnVuY3Rpb24oZWxlbSwgcHJvcHMsIHJlbmRlckV2ZW50KSB7XG4gICAgbGV0IGd1aWQgPSBwcm9wcy5ndWlkIFxuICAgIGlmKGVsZW0uZ2V0QXR0cmlidXRlKCdndWlkJykpXG4gICAgICAgIGd1aWQgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZ3VpZCcpXG5cbiAgICBlbGVtLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJyBcbiAgICBlbGVtLnN0eWxlLnBhZGRpbmcgPSAwXG4gICAgZWxlbS5pbm5lckhUTUwgPSAnJ1xuXG4gICAgbGV0IGxpbmtFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQScpXG4gICAgZWxlbS5hcHBlbmRDaGlsZChsaW5rRWxlbSlcblxuICAgIGxpbmtFbGVtLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0bydcblxuICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnZGlzYWJsZWQnKSAmJiBwcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkJUX0RJU0FCTEVEKVxuICAgICAgICBsaW5rRWxlbS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnICAgICAgICBcbiAgICB9XG5cbiAgICBsZXQgaHRtbCA9ICcnXG4gICAgLyogQnV0dG9uIEltYWdlICovXG4gICAgaWYgKHByb3BzLmltYWdlVXJsKSB7IC8vIEltYWdlIFVSTFxuICAgICAgICBsZXQgaW1hZ2VVcmwgPSBwcm9wcy5pbWFnZVVybFxuXG4gICAgICAgIGxldCB0ZW1wID0gaW1hZ2VVcmwuc3BsaXQoJy4nKVxuICAgICAgICBsZXQgZXh0ID0gJydcbiAgICAgICAgaWYodGVtcCAmJiB0ZW1wLmxlbmd0aCA+IDApXG4gICAgICAgICAgICBleHQgPSB0ZW1wW3RlbXAubGVuZ3RoIC0gMV1cbiAgICAgICAgXG4gICAgICAgIGxldCBleHRzID0gW1wianBlZ1wiLCBcImpwZ1wiLCBcInBuZ1wiLCBcImJtcFwiLCBcInN2Z1wiLCBcImdpZlwiXVxuICAgICAgICBleHQgPSBleHQudG9Mb3dlckNhc2UoKVxuXG4gICAgICAgIGlmKCFpbWFnZVVybC5pbmNsdWRlcyhcImRhdGE6aW1hZ2Uvc3ZnK3htbFwiKSAmJiAhZXh0cy5pbmNsdWRlcyhleHQpKSB7XG4gICAgICAgICAgICBpbWFnZVVybCArPSAnLnBuZydcbiAgICAgICAgfVxuXG4gICAgICAgIGh0bWwgKz0gJzxpbWcgc3JjPVwiJyArIGltYWdlVXJsICsgJ1wiLz4nXG4gICAgfSBlbHNlIGlmIChwcm9wcy5pY29uTmFtZSkgeyAvLyBGb250IEljb25cbiAgICAgICAgaHRtbCArPSAnPGkgY2xhc3M9XCInICsgcHJvcHMuaWNvbk5hbWUgKyAnXCI+PC9pPidcbiAgICB9XG5cbiAgICAvKiBCdXR0b24gVGV4dCAqL1xuICAgIGlmIChwcm9wcy50ZXh0KSBcbiAgICAgICAgaHRtbCArPSBcIjxzcGFuPlwiICsgcHJvcHMudGV4dCArIFwiPC9zcGFuPlwiXG4gICAgZWxzZVxuICAgICAgICBodG1sICs9IFwiPHNwYW4+QnV0dG9uIFRleHQ8L3NwYW4+XCJcblxuICAgIGxpbmtFbGVtLmlubmVySFRNTCA9IGh0bWxcblxuICAgIGlmKHByb3BzLmhhc093blByb3BlcnR5KCdwYWRkaW5nJykgJiYgcHJvcHMucGFkZGluZykge1xuICAgICAgICBsZXQgcGFkZGluZyA9IHByb3BzLnBhZGRpbmcuc3BsaXQoJywnKS5tYXAoYSA9PiBhICogMSlcbiAgICAgICAgXG4gICAgICAgIGxpbmtFbGVtLnN0eWxlLnBhZGRpbmcgPSBwYWRkaW5nWzFdICsgJ3B4ICcgKyBwYWRkaW5nWzJdICsgJ3B4ICcgKyBwYWRkaW5nWzNdICsgJ3B4ICcgKyBwYWRkaW5nWzBdICsgJ3B4J1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxpbmtFbGVtLnN0eWxlLnBhZGRpbmcgPSAwXG4gICAgfVxuXG4gICAgaWYgKCFwcm9wcy5zdHJva2UpIHtcbiAgICAgICAgZWxlbS5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkICcgKyB3aW5kb3cuX19DT01fQ09MT1JfR1JPVVAuQlRfQk9SREVSX0NPTE9SXG4gICAgfVxuXG4gICAgaWYgKCFwcm9wcy5iYWNrZ3JvdW5kQ29sb3IpIHtcbiAgICAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB3aW5kb3cuX19DT01fQ09MT1JfR1JPVVAuQlRfQkdfQ09MT1JcbiAgICB9XG5cbiAgICBpZiAoIXByb3BzLmNvbG9yKSB7XG4gICAgICAgIGVsZW0uc3R5bGUuY29sb3IgPSB3aW5kb3cuX19DT01fQ09MT1JfR1JPVVAuQlRfQ09MT1JcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IEJ1dHRvbigpIiwiZnVuY3Rpb24gRHJvcGRvd25Cb3goKSB7fVxuXG5Ecm9wZG93bkJveC5wcm90b3R5cGUuX2VxdWFsT3B0aW9ucyA9IGZ1bmN0aW9uKGEsIGIsIGopIHtcbiAgICAgbGV0IHN0cmluZ0EgPSBhLmpvaW4oaikudHJpbSgpXG4gICAgIGxldCBzdHJpbmdCID0gYi5qb2luKGopLnRyaW0oKVxuXG4gICAgIGlmIChzdHJpbmdBID09IHN0cmluZ0IpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgcmV0dXJuIGZhbHNlXG59XG5cbkRyb3Bkb3duQm94LnByb3RvdHlwZS5fc2VsZWN0T3B0aW9uQnlHVUlEID0gZnVuY3Rpb24oZ3VpZCwgb3B0aW9uRWxlbSkge1xuICAgICBsZXQgdmFsdWUgPSBvcHRpb25FbGVtLmdldEF0dHJpYnV0ZSgnb3B0aW9uLXZhbHVlJylcbiAgICAgbGV0IHRleHQgPSBvcHRpb25FbGVtLmdldEF0dHJpYnV0ZSgnb3B0aW9uLXRleHQnKVxuXG4gICAgIGxldCBtYWluT2JqZWN0ID0gdGhpcy5fZ2V0TWFpbk9iamVjdChndWlkKVxuICAgICBsZXQgbWFpbk9iamVjdElEID0gbWFpbk9iamVjdC5pZFxuXG4gICAgIGlmKCF2YWx1ZSB8fCAhdGV4dCB8fCAhbWFpbk9iamVjdElEKVxuICAgICAgICAgIHJldHVyblxuICAgICBcbiAgICAgbGV0IHZpZXcgPSB3aW5kb3cuX19WSUVXU1ttYWluT2JqZWN0SURdIFxuICAgICBcbiAgICAgaWYoIXZpZXcgfHwgIXZpZXcucHJvcHMpXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgLy8gU2F2ZSBPcHRpb24gVmFsdWVcbiAgICAgaWYgKCF3aW5kb3cuX19DT01fUkVOREVSRUQuREJbZ3VpZF0pXG4gICAgICAgICAgd2luZG93Ll9fQ09NX1JFTkRFUkVELkRCW2d1aWRdID0ge31cbiAgICAgd2luZG93Ll9fQ09NX1JFTkRFUkVELkRCW2d1aWRdLm9wdGlvblZhbHVlID0gdmFsdWVcblxuICAgICAvLyBVcGRhdGUgVUlcbiAgICAgbGV0IG9wdGlvbnNFbGVtID0gdGhpcy5fZ2V0T3B0aW9uc09iamVjdChndWlkKVxuICAgICBpZiAob3B0aW9uc0VsZW0gJiYgb3B0aW9uc0VsZW0uY2hpbGROb2Rlcykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uc0VsZW0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgaWYgKG9wdGlvbnNFbGVtLmNoaWxkTm9kZXNbaV0uZ2V0QXR0cmlidXRlKCdvcHRpb24tdmFsdWUnKSA9PSB2YWx1ZSAmJiBvcHRpb25zRWxlbS5jaGlsZE5vZGVzW2ldLmdldEF0dHJpYnV0ZSgnb3B0aW9uLXRleHQnKSA9PSB0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNFbGVtLmNoaWxkTm9kZXNbaV0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxuICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc0VsZW0uY2hpbGROb2Rlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICB9XG5cbiAgICAgbGV0IGNoaWxkcmVuID0gbWFpbk9iamVjdC5jaGlsZE5vZGVzXG4gICAgIGxldCBhcnRpY2xlID0gbnVsbFxuXG4gICAgIGlmKGNoaWxkcmVuLmxlbmd0aCl7XG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgIGlmKGNoaWxkcmVuW2ldLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ2FydGljbGUnKXtcbiAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZSA9IGNoaWxkcmVuW2ldXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICB9XG5cbiAgICAgbWFpbk9iamVjdC5zdHlsZS5jb2xvciA9IHdpbmRvdy5fX0NPTV9DT0xPUl9HUk9VUC5BQ1RJVkVfQ09MT1JcbiAgICAgaWYgKGFydGljbGUpXG4gICAgICAgICAgYXJ0aWNsZS5pbm5lclRleHQgPSB0ZXh0XG5cbiAgICAgLy8gRXZlbnQgVHJpZ2dlclxuICAgICBpZiAodmlldy5wcm9wcy5vblNlbGVjdCAmJiB0eXBlb2Ygdmlldy5wcm9wcy5vblNlbGVjdCA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICB2aWV3LnByb3BzLm9uU2VsZWN0KHZhbHVlKVxuICAgICB9XG59XG5cbkRyb3Bkb3duQm94LnByb3RvdHlwZS5faXNWYWxpZE9WID0gZnVuY3Rpb24ob3B0aW9uVmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgbGV0IHRleHQgPSBcIlwiXG4gICAgIFxuICAgICBpZihvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGZvcihsZXQgaSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICBpZihvcHRpb25zW2ldLnZhbHVlID09IG9wdGlvblZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQgPSBvcHRpb25zW2ldLnRleHRcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgIH0gXG5cbiAgICAgcmV0dXJuIHRleHRcbn1cblxuRHJvcGRvd25Cb3gucHJvdG90eXBlLl9nZXRNYWluT2JqZWN0ID0gZnVuY3Rpb24oZ3VpZCkge1xuICAgICBsZXQgcXVlcnkgPSAnLicgKyB3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuREIgKyAnW2d1aWQ9XCInICsgZ3VpZCArJ1wiXSdcbiAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihxdWVyeSlcbn1cblxuRHJvcGRvd25Cb3gucHJvdG90eXBlLl9nZXRGdWxsQm9keU9iamVjdCA9IGZ1bmN0aW9uKGd1aWQpIHtcbiAgICAgbGV0IHF1ZXJ5ID0gJy4nICsgd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRCX0ZVTExfQk9EWSArICdbZ3VpZD1cIicgKyBndWlkICsnXCJdJ1xuICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKHF1ZXJ5KVxufVxuXG5Ecm9wZG93bkJveC5wcm90b3R5cGUuX2dldEJvZHlPYmplY3QgPSBmdW5jdGlvbihndWlkKSB7XG4gICAgIGxldCBxdWVyeSA9ICcuJyArIHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EQl9CT0RZICsgJ1tndWlkPVwiJyArIGd1aWQgKydcIl0nXG4gICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IocXVlcnkpXG59XG5cbkRyb3Bkb3duQm94LnByb3RvdHlwZS5fZ2V0T3B0aW9uc09iamVjdCA9IGZ1bmN0aW9uKGd1aWQpIHtcbiAgICAgbGV0IHF1ZXJ5ID0gJy4nICsgd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRCX09QVElPTlMgKyAnW2d1aWQ9XCInICsgZ3VpZCArJ1wiXSdcbiAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihxdWVyeSlcbn1cblxuRHJvcGRvd25Cb3gucHJvdG90eXBlLl9yZW5kZXJPcHRpb24gPSBmdW5jdGlvbihwYXJlbnRFbGVtLCBwcm9wcywgZ3VpZCwgb3B0aW9uLCBvcHRpb25WYWx1ZSwgcmVuZGVyRXZlbnQpIHtcbiAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgIGVsZW0uY2xhc3NOYW1lID0gd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRCX09QVElPTlxuICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnb3B0aW9uLXZhbHVlJywgb3B0aW9uLnZhbHVlKVxuICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnb3B0aW9uLXRleHQnLCBvcHRpb24udGV4dClcblxuICAgICBsZXQgaGVpZ2h0ID0gNTBcbiAgICAgaWYocHJvcHMub3B0aW9uSGVpZ2h0ICYmICFpc05hTihwcm9wcy5vcHRpb25IZWlnaHQpKSB7XG4gICAgICAgICAgaGVpZ2h0ID0gcGFyc2VGbG9hdChwcm9wcy5vcHRpb25IZWlnaHQpXG4gICAgIH1cblxuICAgICBlbGVtLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCdcbiAgICAgXG4gICAgIGlmKHByb3BzLmZvbnRTaXplKSBcbiAgICAgICAgICBlbGVtLnN0eWxlLmZvbnRTaXplID0gcHJvcHMuZm9udFNpemUgKyAncHgnXG4gICAgIGlmKHByb3BzLmZvbnRGYW1pbHkpXG4gICAgICAgICAgZWxlbS5zdHlsZS5mb250RmFtaWx5ID0gcHJvcHMuZm9udEZhbWlseVxuICAgICBpZihwcm9wcy5vcHRpb25QYWRkaW5nKSB7IFxuICAgICAgICAgIGxldCBwYWRkaW5nID0gcHJvcHMub3B0aW9uUGFkZGluZy5zcGxpdCgnLCcpLm1hcChhID0+IGEgKiAxKTtcbiAgXG4gICAgICAgICAgZWxlbS5zdHlsZS5wYWRkaW5nID0gcGFkZGluZ1sxXSArICdweCAnICsgcGFkZGluZ1syXSArICdweCAnICsgcGFkZGluZ1szXSArICdweCAnICsgcGFkZGluZ1swXSArICdweCdcbiAgICAgfVxuXG4gICAgIGVsZW0uc2V0QXR0cmlidXRlKCdndWlkJywgZ3VpZCkgXG5cbiAgICAgaWYob3B0aW9uVmFsdWUgJiYgb3B0aW9uVmFsdWUgPT0gb3B0aW9uLnZhbHVlKSB7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG4gICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgIH1cblxuICAgICBsZXQgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0FSVElDTEUnKVxuICAgICBhcnRpY2xlLmlubmVyVGV4dCA9IG9wdGlvbi50ZXh0XG4gICAgIFxuICAgICBlbGVtLmFwcGVuZENoaWxkKGFydGljbGUpXG4gICAgIHBhcmVudEVsZW0uYXBwZW5kQ2hpbGQoZWxlbSlcbn1cblxuRHJvcGRvd25Cb3gucHJvdG90eXBlLl9vcGVuQnlHVUlEID0gZnVuY3Rpb24oZ3VpZCkge1xuICAgICBsZXQgb2JqZWN0ID0gdGhpcy5fZ2V0TWFpbk9iamVjdChndWlkKVxuICAgICBsZXQgYm9keUVsZW0gPSB0aGlzLl9nZXRCb2R5T2JqZWN0KGd1aWQpXG4gICAgIFxuICAgICBpZighb2JqZWN0IHx8ICFib2R5RWxlbSlcbiAgICAgICAgICByZXR1cm5cblxuICAgICBvYmplY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxuICAgICBib2R5RWxlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICB3aW5kb3cuX19DT01fQUNUSVZFLkRCID0gZ3VpZFxufVxuXG5Ecm9wZG93bkJveC5wcm90b3R5cGUuX2Nsb3NlQnlHVUlEID0gZnVuY3Rpb24oZ3VpZCkge1xuICAgICBsZXQgb2JqZWN0ID0gdGhpcy5fZ2V0TWFpbk9iamVjdChndWlkKVxuICAgICBsZXQgYm9keUVsZW0gPSB0aGlzLl9nZXRCb2R5T2JqZWN0KGd1aWQpXG4gICAgIFxuICAgICBpZighb2JqZWN0IHx8ICFib2R5RWxlbSlcbiAgICAgICAgICByZXR1cm5cblxuICAgICBvYmplY3QuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuICAgICBib2R5RWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgIHdpbmRvdy5fX0NPTV9BQ1RJVkUuREIgPSAnJ1xufVxuXG5Ecm9wZG93bkJveC5wcm90b3R5cGUuX3JlbmRlck1haW4gPSBmdW5jdGlvbihlbGVtLCBwcm9wcywgcmVuZGVyRXZlbnQpIHtcbiAgICAgLy8gR1VJRFxuICAgICBsZXQgZ3VpZCA9IHByb3BzLmd1aWRcbiAgICAgaWYoZWxlbS5nZXRBdHRyaWJ1dGUoJ2d1aWQnKSlcbiAgICAgICAgICBndWlkID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2d1aWQnKVxuXG4gICAgIGxldCBjaGlsZHJlbiA9IGVsZW0uY2hpbGROb2Rlc1xuICAgICBsZXQgYXJ0aWNsZSA9IG51bGxcblxuICAgICBpZihjaGlsZHJlbi5sZW5ndGgpe1xuICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICBpZihjaGlsZHJlbltpXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09ICdhcnRpY2xlJyl7XG4gICAgICAgICAgICAgICAgICAgIGFydGljbGUgPSBjaGlsZHJlbltpXVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgfVxuXG4gICAgIGlmKCFwcm9wcy5zdHJva2UpXG4gICAgICAgICAgZWxlbS5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBcIiArIHdpbmRvdy5fX0NPTV9DT0xPUl9HUk9VUC5CT1JERVJfQ09MT1JcbiAgICAgXG4gICAgIGlmKHByb3BzLm9wdGlvbnMpIHtcbiAgICAgICAgICBsZXQgb3B0aW9ucyA9IEpTT04ucGFyc2UocHJvcHMub3B0aW9ucylcbiAgICAgICAgICBsZXQgb3B0aW9uVmFsdWUgPSBudWxsXG5cbiAgICAgICAgICBpZiAocHJvcHMub3B0aW9uVmFsdWUpXG4gICAgICAgICAgICAgICBvcHRpb25WYWx1ZSA9IHByb3BzLm9wdGlvblZhbHVlXG5cbiAgICAgICAgICAvLyBSZWFkIG9wdGlvbiB2YWx1ZVxuICAgICAgICAgIGlmICh3aW5kb3cuX19DT01fUkVOREVSRUQuREJbZ3VpZF0gJiYgd2luZG93Ll9fQ09NX1JFTkRFUkVELkRCW2d1aWRdLm9wdGlvblZhbHVlKVxuICAgICAgICAgICAgICAgb3B0aW9uVmFsdWUgPSB3aW5kb3cuX19DT01fUkVOREVSRUQuREJbZ3VpZF0ub3B0aW9uVmFsdWUgKyBcIlwiXG5cbiAgICAgICAgICBpZihvcHRpb25WYWx1ZSkge1xuICAgICAgICAgICAgICAgbGV0IG9wdGlvblRleHQgPSB0aGlzLl9pc1ZhbGlkT1Yob3B0aW9uVmFsdWUsIG9wdGlvbnMpXG5cbiAgICAgICAgICAgICAgIGlmIChvcHRpb25UZXh0ICE9IFwiXCIpIHsgXG4gICAgICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuY29sb3IgPSB3aW5kb3cuX19DT01fQ09MT1JfR1JPVVAuQUNUSVZFX0NPTE9SXG5cbiAgICAgICAgICAgICAgICAgICAgaWYoYXJ0aWNsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLmlubmVyVGV4dCA9IG9wdGlvblRleHRcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgIH1cbiAgICAgLyogRGVmYXVsdCBTdHlsZXMgRW5kICovXG59XG5cbkRyb3Bkb3duQm94LnByb3RvdHlwZS5fcmVuZGVyRnVsbEJvZHkgPSBmdW5jdGlvbihlbGVtLCBwcm9wcywgcmVuZGVyRXZlbnQpIHtcbiAgICAgLy8gR1VJRFxuICAgICBsZXQgZ3VpZCA9IHByb3BzLmd1aWRcbiAgICAgaWYoZWxlbS5nZXRBdHRyaWJ1dGUoJ2d1aWQnKSlcbiAgICAgICAgICBndWlkID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2d1aWQnKVxuXG4gICAgIGxldCBib2R5RWxlbSA9IG51bGxcbiAgICAgICAgICBsZXQgb3B0aW9uc0VsZW1lbnQgPSBudWxsXG5cbiAgICAgaWYgKHJlbmRlckV2ZW50KSB7XG4gICAgICAgICAgYm9keUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgIGJvZHlFbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRCX0JPRFkpXG4gICAgICAgICAgYm9keUVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgIGJvZHlFbGVtLnNldEF0dHJpYnV0ZSgnZ3VpZCcsIGd1aWQpXG4gICAgICAgICAgXG4gICAgICAgICAgICAgICBvcHRpb25zRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICBvcHRpb25zRWxlbWVudC5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EQl9PUFRJT05TKVxuICAgICAgICAgICAgICAgb3B0aW9uc0VsZW1lbnQuc2V0QXR0cmlidXRlKCdndWlkJywgZ3VpZClcblxuICAgICAgICAgICAgICAgYm9keUVsZW0uYXBwZW5kQ2hpbGQob3B0aW9uc0VsZW1lbnQpXG5cbiAgICAgICAgICBlbGVtLmFwcGVuZENoaWxkKGJvZHlFbGVtKVxuICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJvZHlFbGVtID0gdGhpcy5fZ2V0Qm9keU9iamVjdChndWlkKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIG9wdGlvbnNFbGVtZW50ID0gdGhpcy5fZ2V0T3B0aW9uc09iamVjdChndWlkKVxuICAgICB9XG5cbiAgICAgaWYgKCFib2R5RWxlbSB8fCAhb3B0aW9uc0VsZW1lbnQpXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgLy8gT3B0aW9uc1xuICAgICB0aGlzLl9yZW5kZXJPcHRpb25zKG9wdGlvbnNFbGVtZW50LCBwcm9wcywgZ3VpZCwgcmVuZGVyRXZlbnQpXG59XG5cbkRyb3Bkb3duQm94LnByb3RvdHlwZS5fcmVuZGVyT3B0aW9ucyA9IGZ1bmN0aW9uKGVsZW0sIHByb3BzLCBndWlkLCByZW5kZXJFdmVudCkge1xuICAgICBsZXQgcHJldmlvdXNPcHRpb25zID0gW11cbiAgICAgbGV0IG9wdGlvbnMgPSBbXVxuXG4gICAgIC8vIEN1cnJlbnQgT3B0aW9uc1xuICAgICBpZihwcm9wcy5vcHRpb25zKSB7XG4gICAgICAgICAgb3B0aW9ucyA9IEpTT04ucGFyc2UocHJvcHMub3B0aW9ucylcbiAgICAgfVxuXG4gICAgIC8vIFByZXZpb3VzIE9wdGlvbnNcbiAgICAgaWYgKHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EQltndWlkXSAmJiB3aW5kb3cuX19DT01fUkVOREVSRUQuREJbZ3VpZF0ub3B0aW9ucykge1xuICAgICAgICAgIHByZXZpb3VzT3B0aW9ucyA9IEpTT04ucGFyc2Uod2luZG93Ll9fQ09NX1JFTkRFUkVELkRCW2d1aWRdLm9wdGlvbnMpXG4gICAgIH1cblxuICAgICAvLyBSZWFkIG9wdGlvbiB2YWx1ZVxuICAgICBsZXQgb3B0aW9uVmFsdWUgPSBudWxsXG4gICAgIGlmIChwcm9wcy5vcHRpb25WYWx1ZSlcbiAgICAgICAgICBvcHRpb25WYWx1ZSA9IHByb3BzLm9wdGlvblZhbHVlXG4gICAgIGlmICh3aW5kb3cuX19DT01fUkVOREVSRUQuREJbZ3VpZF0gJiYgd2luZG93Ll9fQ09NX1JFTkRFUkVELkRCW2d1aWRdLm9wdGlvblZhbHVlKVxuICAgICAgICAgIG9wdGlvblZhbHVlID0gd2luZG93Ll9fQ09NX1JFTkRFUkVELkRCW2d1aWRdLm9wdGlvblZhbHVlICsgXCJcIlxuXG4gICAgIC8vIFNhdmUgT3B0aW9uc1xuICAgICBpZiAoIXdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EQltndWlkXSlcbiAgICAgICAgICB3aW5kb3cuX19DT01fUkVOREVSRUQuREJbZ3VpZF0gPSB7fVxuICAgICB3aW5kb3cuX19DT01fUkVOREVSRUQuREJbZ3VpZF0ub3B0aW9ucyA9IHByb3BzLm9wdGlvbnNcbiAgICAgXG4gICAgIC8vIFN0eWxlXG4gICAgIGxldCBoZWlnaHQgPSA1MFxuICAgICBpZihwcm9wcy5vcHRpb25IZWlnaHQgJiYgIWlzTmFOKHByb3BzLm9wdGlvbkhlaWdodCkpIHtcbiAgICAgICAgICBoZWlnaHQgPSBwYXJzZUZsb2F0KHByb3BzLm9wdGlvbkhlaWdodClcbiAgICAgfVxuXG4gICAgIGlmKG9wdGlvbnMubGVuZ3RoID4gNSkge1xuICAgICAgICAgIGVsZW0uc3R5bGUubWF4SGVpZ2h0ID0gKGhlaWdodCAqIDUpICsgJ3B4J1xuICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsZW0uc3R5bGUubWF4SGVpZ2h0ID0gJ2F1dG8nXG4gICAgIH1cbiAgICAgXG4gICAgIGlmICghdGhpcy5fZXF1YWxPcHRpb25zKHByZXZpb3VzT3B0aW9ucywgb3B0aW9ucywgZ3VpZCkpIHsgLy8gT3B0aW9ucyBDaGFuZ2VkIC0gTmVlZCB0byBSZS1yZW5kZXJcbiAgICAgICAgICBlbGVtLmlubmVySFRNTCA9ICcnXG4gICAgICAgICAgXG4gICAgICAgICAgaWYob3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSBvcHRpb25zW2ldXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJPcHRpb24oZWxlbSwgcHJvcHMsIGd1aWQsIG9wdGlvbiwgb3B0aW9uVmFsdWUsIHJlbmRlckV2ZW50KVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBEcm9wZG93bkJveCgpIiwiZnVuY3Rpb24gRHJvcGRvd25TZWFyY2hCb3goKSB7fVxuXG5Ecm9wZG93blNlYXJjaEJveC5wcm90b3R5cGUuX2VxdWFsT3B0aW9ucyA9IGZ1bmN0aW9uKGEsIGIsIGopIHtcbiAgICAgbGV0IHN0cmluZ0EgPSBhLmpvaW4oaikudHJpbSgpXG4gICAgIGxldCBzdHJpbmdCID0gYi5qb2luKGopLnRyaW0oKVxuXG4gICAgIGlmIChzdHJpbmdBID09IHN0cmluZ0IpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgcmV0dXJuIGZhbHNlXG59XG5cbkRyb3Bkb3duU2VhcmNoQm94LnByb3RvdHlwZS5fc2VsZWN0T3B0aW9uQnlHVUlEID0gZnVuY3Rpb24oZ3VpZCwgb3B0aW9uRWxlbSkge1xuICAgICBsZXQgdmFsdWUgPSBvcHRpb25FbGVtLmdldEF0dHJpYnV0ZSgnb3B0aW9uLXZhbHVlJylcbiAgICAgbGV0IHRleHQgPSBvcHRpb25FbGVtLmdldEF0dHJpYnV0ZSgnb3B0aW9uLXRleHQnKVxuXG4gICAgIGxldCBtYWluT2JqZWN0ID0gdGhpcy5fZ2V0TWFpbk9iamVjdChndWlkKVxuICAgICBsZXQgbWFpbk9iamVjdElEID0gbWFpbk9iamVjdC5pZFxuXG4gICAgIGlmKCF2YWx1ZSB8fCAhdGV4dCB8fCAhbWFpbk9iamVjdElEKVxuICAgICAgICAgIHJldHVyblxuICAgICBcbiAgICAgbGV0IHZpZXcgPSB3aW5kb3cuX19WSUVXU1ttYWluT2JqZWN0SURdIFxuICAgICBcbiAgICAgaWYoIXZpZXcgfHwgIXZpZXcucHJvcHMpXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgLy8gU2F2ZSBPcHRpb24gVmFsdWVcbiAgICAgaWYgKCF3aW5kb3cuX19DT01fUkVOREVSRUQuRFNCW2d1aWRdKVxuICAgICAgICAgIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EU0JbZ3VpZF0gPSB7fVxuICAgICB3aW5kb3cuX19DT01fUkVOREVSRUQuRFNCW2d1aWRdLm9wdGlvblZhbHVlID0gdmFsdWVcblxuICAgICAvLyBVcGRhdGUgVUlcbiAgICAgbGV0IG9wdGlvbnNFbGVtID0gdGhpcy5fZ2V0T3B0aW9uc09iamVjdChndWlkKVxuICAgICBpZiAob3B0aW9uc0VsZW0gJiYgb3B0aW9uc0VsZW0uY2hpbGROb2Rlcykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uc0VsZW0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgaWYgKG9wdGlvbnNFbGVtLmNoaWxkTm9kZXNbaV0uZ2V0QXR0cmlidXRlKCdvcHRpb24tdmFsdWUnKSA9PSB2YWx1ZSAmJiBvcHRpb25zRWxlbS5jaGlsZE5vZGVzW2ldLmdldEF0dHJpYnV0ZSgnb3B0aW9uLXRleHQnKSA9PSB0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNFbGVtLmNoaWxkTm9kZXNbaV0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxuICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc0VsZW0uY2hpbGROb2Rlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICB9XG5cbiAgICAgbGV0IGNoaWxkcmVuID0gbWFpbk9iamVjdC5jaGlsZE5vZGVzXG4gICAgIGxldCBhcnRpY2xlID0gbnVsbFxuXG4gICAgIGlmKGNoaWxkcmVuLmxlbmd0aCl7XG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgIGlmKGNoaWxkcmVuW2ldLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ2FydGljbGUnKXtcbiAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZSA9IGNoaWxkcmVuW2ldXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICB9XG5cbiAgICAgbWFpbk9iamVjdC5zdHlsZS5jb2xvciA9IHdpbmRvdy5fX0NPTV9DT0xPUl9HUk9VUC5BQ1RJVkVfQ09MT1JcbiAgICAgaWYgKGFydGljbGUpXG4gICAgICAgICAgYXJ0aWNsZS5pbm5lclRleHQgPSB0ZXh0XG5cbiAgICAgLy8gRXZlbnQgVHJpZ2dlclxuICAgICBpZiAodmlldy5wcm9wcy5vblNlbGVjdCAmJiB0eXBlb2Ygdmlldy5wcm9wcy5vblNlbGVjdCA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICB2aWV3LnByb3BzLm9uU2VsZWN0KHZhbHVlKVxuICAgICB9XG59XG5cbkRyb3Bkb3duU2VhcmNoQm94LnByb3RvdHlwZS5faXNWYWxpZE9WID0gZnVuY3Rpb24ob3B0aW9uVmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgbGV0IG9wdGlvblRleHQgPSBcIlwiXG4gICAgIFxuICAgICBpZihvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGZvcihsZXQgaSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICBpZihvcHRpb25zW2ldLnZhbHVlID09IG9wdGlvblZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvblRleHQgPSBvcHRpb25zW2ldLnRleHRcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgIH0gXG5cbiAgICAgcmV0dXJuIG9wdGlvblRleHRcbn1cblxuRHJvcGRvd25TZWFyY2hCb3gucHJvdG90eXBlLl9nZXRNYWluT2JqZWN0ID0gZnVuY3Rpb24oZ3VpZCkge1xuICAgICBsZXQgcXVlcnkgPSAnLicgKyB3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuRFNCICsgJ1tndWlkPVwiJyArIGd1aWQgKydcIl0nXG4gICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IocXVlcnkpXG59XG5cbkRyb3Bkb3duU2VhcmNoQm94LnByb3RvdHlwZS5fZ2V0RnVsbEJvZHlPYmplY3QgPSBmdW5jdGlvbihndWlkKSB7XG4gICAgIGxldCBxdWVyeSA9ICcuJyArIHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EU0JfRlVMTF9CT0RZICsgJ1tndWlkPVwiJyArIGd1aWQgKydcIl0nXG4gICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IocXVlcnkpXG59XG5cbkRyb3Bkb3duU2VhcmNoQm94LnByb3RvdHlwZS5fZ2V0Qm9keU9iamVjdCA9IGZ1bmN0aW9uKGd1aWQpIHtcbiAgICAgbGV0IHF1ZXJ5ID0gJy4nICsgd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRTQl9CT0RZICsgJ1tndWlkPVwiJyArIGd1aWQgKydcIl0nXG4gICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IocXVlcnkpXG59XG5cbkRyb3Bkb3duU2VhcmNoQm94LnByb3RvdHlwZS5fZ2V0U2VhcmNoV3JhcE9iamVjdCA9IGZ1bmN0aW9uKGd1aWQpIHtcbiAgICAgbGV0IHF1ZXJ5ID0gJy4nICsgd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRTQl9TRUFSQ0hfV1JBUCArICdbZ3VpZD1cIicgKyBndWlkICsnXCJdJ1xuICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKHF1ZXJ5KVxufVxuXG5Ecm9wZG93blNlYXJjaEJveC5wcm90b3R5cGUuX2dldFNlYXJjaE9iamVjdCA9IGZ1bmN0aW9uKGd1aWQpIHtcbiAgICAgbGV0IHF1ZXJ5ID0gJy4nICsgd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRTQl9TRUFSQ0ggKyAnW2d1aWQ9XCInICsgZ3VpZCArJ1wiXSdcbiAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihxdWVyeSlcbn1cblxuRHJvcGRvd25TZWFyY2hCb3gucHJvdG90eXBlLl9nZXRPcHRpb25zT2JqZWN0ID0gZnVuY3Rpb24oZ3VpZCkge1xuICAgICBsZXQgcXVlcnkgPSAnLicgKyB3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuRFNCX09QVElPTlMgKyAnW2d1aWQ9XCInICsgZ3VpZCArJ1wiXSdcbiAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihxdWVyeSlcbn1cblxuRHJvcGRvd25TZWFyY2hCb3gucHJvdG90eXBlLl9maWx0ZXJPcHRpb25zID0gZnVuY3Rpb24oZ3VpZCwgcXVlcnkpIHtcbiAgICAgbGV0IG9wdGlvbnNFbGVtID0gdGhpcy5fZ2V0T3B0aW9uc09iamVjdChndWlkKVxuXG4gICAgIGlmICghb3B0aW9uc0VsZW0pXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgcXVlcnkgPSBxdWVyeS50b0xvd2VyQ2FzZSgpXG5cbiAgICAgaWYgKG9wdGlvbnNFbGVtLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnNFbGVtLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgIGxldCBvcHRpb25FbGVtID0gb3B0aW9uc0VsZW0uY2hpbGROb2Rlc1tpXVxuICAgICAgICAgICAgICAgbGV0IHRleHQgPSBvcHRpb25FbGVtLmdldEF0dHJpYnV0ZSgnb3B0aW9uLXRleHQnKVxuXG4gICAgICAgICAgICAgICBpZiAodGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dC50b0xvd2VyQ2FzZSgpXG5cbiAgICAgICAgICAgICAgICAgICAgaWYodGV4dC5pbmRleE9mKHF1ZXJ5KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25FbGVtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25FbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgfVxufVxuXG5Ecm9wZG93blNlYXJjaEJveC5wcm90b3R5cGUuX3JlbmRlck9wdGlvbiA9IGZ1bmN0aW9uKHBhcmVudEVsZW0sIHByb3BzLCBndWlkLCBvcHRpb24sIG9wdGlvblZhbHVlLCByZW5kZXJFdmVudCkge1xuICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgZWxlbS5jbGFzc05hbWUgPSB3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuRFNCX09QVElPTlxuICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnb3B0aW9uLXZhbHVlJywgb3B0aW9uLnZhbHVlKVxuICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnb3B0aW9uLXRleHQnLCBvcHRpb24udGV4dClcblxuICAgICBsZXQgaGVpZ2h0ID0gNTBcbiAgICAgaWYocHJvcHMub3B0aW9uSGVpZ2h0ICYmICFpc05hTihwcm9wcy5vcHRpb25IZWlnaHQpKSB7XG4gICAgICAgICAgaGVpZ2h0ID0gcGFyc2VGbG9hdChwcm9wcy5vcHRpb25IZWlnaHQpXG4gICAgIH1cblxuICAgICBlbGVtLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCdcbiAgICAgXG4gICAgIGlmKHByb3BzLmZvbnRTaXplKSBcbiAgICAgICAgICBlbGVtLnN0eWxlLmZvbnRTaXplID0gcHJvcHMuZm9udFNpemUgKyAncHgnXG4gICAgIGlmKHByb3BzLmZvbnRGYW1pbHkpXG4gICAgICAgICAgZWxlbS5zdHlsZS5mb250RmFtaWx5ID0gcHJvcHMuZm9udEZhbWlseVxuICAgICBpZihwcm9wcy5vcHRpb25QYWRkaW5nKSB7IFxuICAgICAgICAgIGxldCBwYWRkaW5nID0gcHJvcHMub3B0aW9uUGFkZGluZy5zcGxpdCgnLCcpLm1hcChhID0+IGEgKiAxKTtcbiAgXG4gICAgICAgICAgZWxlbS5zdHlsZS5wYWRkaW5nID0gcGFkZGluZ1sxXSArICdweCAnICsgcGFkZGluZ1syXSArICdweCAnICsgcGFkZGluZ1szXSArICdweCAnICsgcGFkZGluZ1swXSArICdweCdcbiAgICAgfVxuXG4gICAgIGVsZW0uc2V0QXR0cmlidXRlKCdndWlkJywgZ3VpZCkgXG5cbiAgICAgaWYob3B0aW9uVmFsdWUgJiYgb3B0aW9uVmFsdWUgPT0gb3B0aW9uLnZhbHVlKSB7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG4gICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgIH1cblxuICAgICBsZXQgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0FSVElDTEUnKVxuICAgICBhcnRpY2xlLmlubmVyVGV4dCA9IG9wdGlvbi50ZXh0XG4gICAgIFxuICAgICBlbGVtLmFwcGVuZENoaWxkKGFydGljbGUpXG4gICAgIHBhcmVudEVsZW0uYXBwZW5kQ2hpbGQoZWxlbSlcbn1cblxuRHJvcGRvd25TZWFyY2hCb3gucHJvdG90eXBlLl9vcGVuQnlHVUlEID0gZnVuY3Rpb24oZ3VpZCkge1xuICAgICBsZXQgb2JqZWN0ID0gdGhpcy5fZ2V0TWFpbk9iamVjdChndWlkKVxuICAgICBsZXQgYm9keUVsZW0gPSB0aGlzLl9nZXRCb2R5T2JqZWN0KGd1aWQpXG4gICAgIFxuICAgICBpZighb2JqZWN0IHx8ICFib2R5RWxlbSlcbiAgICAgICAgICByZXR1cm5cblxuICAgICBvYmplY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxuICAgICBib2R5RWxlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICB3aW5kb3cuX19DT01fQUNUSVZFLkRTQiA9IGd1aWRcbn1cblxuRHJvcGRvd25TZWFyY2hCb3gucHJvdG90eXBlLl9jbG9zZUJ5R1VJRCA9IGZ1bmN0aW9uKGd1aWQpIHtcbiAgICAgbGV0IG9iamVjdCA9IHRoaXMuX2dldE1haW5PYmplY3QoZ3VpZClcbiAgICAgbGV0IGJvZHlFbGVtID0gdGhpcy5fZ2V0Qm9keU9iamVjdChndWlkKVxuICAgICBcbiAgICAgaWYoIW9iamVjdCB8fCAhYm9keUVsZW0pXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgb2JqZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcbiAgICAgYm9keUVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICB3aW5kb3cuX19DT01fQUNUSVZFLkRTQiA9ICcnXG59XG5cbkRyb3Bkb3duU2VhcmNoQm94LnByb3RvdHlwZS5fcmVuZGVyTWFpbiA9IGZ1bmN0aW9uKGVsZW0sIHByb3BzLCByZW5kZXJFdmVudCkge1xuICAgICAvLyBHVUlEXG4gICAgIGxldCBndWlkID0gcHJvcHMuZ3VpZFxuICAgICBpZihlbGVtLmdldEF0dHJpYnV0ZSgnZ3VpZCcpKVxuICAgICAgICAgIGd1aWQgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZ3VpZCcpXG5cbiAgICAgbGV0IGNoaWxkcmVuID0gZWxlbS5jaGlsZE5vZGVzXG4gICAgIGxldCBhcnRpY2xlID0gbnVsbFxuXG4gICAgIGlmKGNoaWxkcmVuLmxlbmd0aCl7XG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgIGlmKGNoaWxkcmVuW2ldLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ2FydGljbGUnKXtcbiAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZSA9IGNoaWxkcmVuW2ldXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICB9XG5cbiAgICAgaWYoIXByb3BzLnN0cm9rZSlcbiAgICAgICAgICBlbGVtLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIFwiICsgd2luZG93Ll9fQ09NX0NPTE9SX0dST1VQLkJPUkRFUl9DT0xPUlxuICAgICBcbiAgICAgaWYocHJvcHMub3B0aW9ucykge1xuICAgICAgICAgIGxldCBvcHRpb25zID0gSlNPTi5wYXJzZShwcm9wcy5vcHRpb25zKVxuICAgICAgICAgIGxldCBvcHRpb25WYWx1ZSA9IG51bGxcblxuICAgICAgICAgIGlmIChwcm9wcy5vcHRpb25WYWx1ZSlcbiAgICAgICAgICAgICAgIG9wdGlvblZhbHVlID0gcHJvcHMub3B0aW9uVmFsdWVcblxuICAgICAgICAgIC8vIFJlYWQgb3B0aW9uIHZhbHVlXG4gICAgICAgICAgaWYgKHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EU0JbZ3VpZF0gJiYgd2luZG93Ll9fQ09NX1JFTkRFUkVELkRTQltndWlkXS5vcHRpb25WYWx1ZSlcbiAgICAgICAgICAgICAgIG9wdGlvblZhbHVlID0gd2luZG93Ll9fQ09NX1JFTkRFUkVELkRTQltndWlkXS5vcHRpb25WYWx1ZSArIFwiXCJcblxuICAgICAgICAgIGlmIChvcHRpb25WYWx1ZSkge1xuICAgICAgICAgICAgICAgbGV0IG9wdGlvblRleHQgPSB0aGlzLl9pc1ZhbGlkT1Yob3B0aW9uVmFsdWUsIG9wdGlvbnMpXG5cbiAgICAgICAgICAgICAgIGlmKG9wdGlvblRleHQgIT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLmNvbG9yID0gd2luZG93Ll9fQ09NX0NPTE9SX0dST1VQLkFDVElWRV9DT0xPUlxuXG4gICAgICAgICAgICAgICAgICAgIGlmKGFydGljbGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5pbm5lclRleHQgPSBvcHRpb25UZXh0XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICB9XG4gICAgIC8qIERlZmF1bHQgU3R5bGVzIEVuZCAqL1xufVxuXG5Ecm9wZG93blNlYXJjaEJveC5wcm90b3R5cGUuX3JlbmRlckZ1bGxCb2R5ID0gZnVuY3Rpb24oZWxlbSwgcHJvcHMsIHJlbmRlckV2ZW50KSB7XG4gICAgIC8vIEdVSURcbiAgICAgbGV0IGd1aWQgPSBwcm9wcy5ndWlkXG4gICAgIGlmKGVsZW0uZ2V0QXR0cmlidXRlKCdndWlkJykpXG4gICAgICAgICAgZ3VpZCA9IGVsZW0uZ2V0QXR0cmlidXRlKCdndWlkJylcblxuICAgICBsZXQgYm9keUVsZW0gPSBudWxsXG4gICAgICAgICAgbGV0IHNlYXJjaFdyYXBFbGVtZW50ID0gbnVsbFxuICAgICAgICAgICAgICAgbGV0IHNlYXJjaEVsZW1lbnQgPSBudWxsXG4gICAgICAgICAgbGV0IG9wdGlvbnNFbGVtZW50ID0gbnVsbFxuXG4gICAgIGlmIChyZW5kZXJFdmVudCkge1xuICAgICAgICAgIGJvZHlFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICBib2R5RWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EU0JfQk9EWSlcbiAgICAgICAgICBib2R5RWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgYm9keUVsZW0uc2V0QXR0cmlidXRlKCdndWlkJywgZ3VpZClcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgIHNlYXJjaFdyYXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgIHNlYXJjaFdyYXBFbGVtZW50LmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRTQl9TRUFSQ0hfV1JBUCkgXG4gICAgICAgICAgICAgICBzZWFyY2hXcmFwRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2d1aWQnLCBndWlkKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lOUFVUJylcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaEVsZW1lbnQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdTZWFyY2guLi4nKVxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hFbGVtZW50LmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRTQl9TRUFSQ0gpXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaEVsZW1lbnQuc2V0QXR0cmlidXRlKCdndWlkJywgZ3VpZClcblxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hXcmFwRWxlbWVudC5hcHBlbmRDaGlsZChzZWFyY2hFbGVtZW50KVxuXG4gICAgICAgICAgICAgICBib2R5RWxlbS5hcHBlbmRDaGlsZChzZWFyY2hXcmFwRWxlbWVudClcblxuICAgICAgICAgICAgICAgb3B0aW9uc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgb3B0aW9uc0VsZW1lbnQuY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuRFNCX09QVElPTlMpXG4gICAgICAgICAgICAgICBvcHRpb25zRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2d1aWQnLCBndWlkKVxuXG4gICAgICAgICAgICAgICBib2R5RWxlbS5hcHBlbmRDaGlsZChvcHRpb25zRWxlbWVudClcblxuICAgICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoYm9keUVsZW0pXG4gICAgIH0gZWxzZSB7XG4gICAgICAgICAgYm9keUVsZW0gPSB0aGlzLl9nZXRCb2R5T2JqZWN0KGd1aWQpXG5cbiAgICAgICAgICAgICAgIHNlYXJjaFdyYXBFbGVtZW50ID0gdGhpcy5fZ2V0U2VhcmNoV3JhcE9iamVjdChndWlkKVxuXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaEVsZW1lbnQgPSB0aGlzLl9nZXRTZWFyY2hPYmplY3QoZ3VpZClcblxuICAgICAgICAgICAgICAgb3B0aW9uc0VsZW1lbnQgPSB0aGlzLl9nZXRPcHRpb25zT2JqZWN0KGd1aWQpXG4gICAgIH1cblxuICAgICBpZiAoIWJvZHlFbGVtIHx8ICFzZWFyY2hXcmFwRWxlbWVudCB8fCAhc2VhcmNoRWxlbWVudCB8fCAhb3B0aW9uc0VsZW1lbnQpXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgLy8gU3R5bGVzXG4gICAgIGlmKHByb3BzLmZvbnRTaXplKSBcbiAgICAgICAgICBzZWFyY2hFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gcHJvcHMuZm9udFNpemUgKyAncHgnXG4gICAgIGlmKHByb3BzLmZvbnRGYW1pbHkpXG4gICAgICAgICAgc2VhcmNoRWxlbWVudC5zdHlsZS5mb250RmFtaWx5ID0gcHJvcHMuZm9udEZhbWlseVxuXG4gICAgIC8vIE9wdGlvbnNcbiAgICAgdGhpcy5fcmVuZGVyT3B0aW9ucyhvcHRpb25zRWxlbWVudCwgcHJvcHMsIGd1aWQsIHJlbmRlckV2ZW50KVxufVxuXG5Ecm9wZG93blNlYXJjaEJveC5wcm90b3R5cGUuX3JlbmRlck9wdGlvbnMgPSBmdW5jdGlvbihlbGVtLCBwcm9wcywgZ3VpZCwgcmVuZGVyRXZlbnQpIHtcbiAgICAgbGV0IHByZXZpb3VzT3B0aW9ucyA9IFtdXG4gICAgIGxldCBvcHRpb25zID0gW11cblxuICAgICAvLyBDdXJyZW50IE9wdGlvbnNcbiAgICAgaWYocHJvcHMub3B0aW9ucykge1xuICAgICAgICAgIG9wdGlvbnMgPSBKU09OLnBhcnNlKHByb3BzLm9wdGlvbnMpXG4gICAgIH1cblxuICAgICAvLyBQcmV2aW91cyBPcHRpb25zXG4gICAgIGlmICh3aW5kb3cuX19DT01fUkVOREVSRUQuRFNCW2d1aWRdICYmIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EU0JbZ3VpZF0ub3B0aW9ucykge1xuICAgICAgICAgIHByZXZpb3VzT3B0aW9ucyA9IEpTT04ucGFyc2Uod2luZG93Ll9fQ09NX1JFTkRFUkVELkRTQltndWlkXS5vcHRpb25zKVxuICAgICB9XG5cbiAgICAgLy8gUmVhZCBvcHRpb24gdmFsdWVcbiAgICAgbGV0IG9wdGlvblZhbHVlID0gbnVsbFxuICAgICBpZiAocHJvcHMub3B0aW9uVmFsdWUpXG4gICAgICAgICAgb3B0aW9uVmFsdWUgPSBwcm9wcy5vcHRpb25WYWx1ZVxuICAgICBpZiAod2luZG93Ll9fQ09NX1JFTkRFUkVELkRTQltndWlkXSAmJiB3aW5kb3cuX19DT01fUkVOREVSRUQuRFNCW2d1aWRdLm9wdGlvblZhbHVlKVxuICAgICAgICAgIG9wdGlvblZhbHVlID0gd2luZG93Ll9fQ09NX1JFTkRFUkVELkRTQltndWlkXS5vcHRpb25WYWx1ZSArIFwiXCJcblxuICAgICAvLyBTYXZlIE9wdGlvbnNcbiAgICAgaWYgKCF3aW5kb3cuX19DT01fUkVOREVSRUQuRFNCW2d1aWRdKVxuICAgICAgICAgIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EU0JbZ3VpZF0gPSB7fVxuICAgICB3aW5kb3cuX19DT01fUkVOREVSRUQuRFNCW2d1aWRdLm9wdGlvbnMgPSBwcm9wcy5vcHRpb25zXG4gICAgIFxuICAgICAvLyBTdHlsZVxuICAgICBsZXQgaGVpZ2h0ID0gNTBcbiAgICAgaWYocHJvcHMub3B0aW9uSGVpZ2h0ICYmICFpc05hTihwcm9wcy5vcHRpb25IZWlnaHQpKSB7XG4gICAgICAgICAgaGVpZ2h0ID0gcGFyc2VGbG9hdChwcm9wcy5vcHRpb25IZWlnaHQpXG4gICAgIH1cblxuICAgICBpZihvcHRpb25zLmxlbmd0aCA+IDUpIHtcbiAgICAgICAgICBlbGVtLnN0eWxlLm1heEhlaWdodCA9IChoZWlnaHQgKiA1KSArICdweCdcbiAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtLnN0eWxlLm1heEhlaWdodCA9ICdhdXRvJ1xuICAgICB9XG4gICAgIFxuICAgICBpZiAoIXRoaXMuX2VxdWFsT3B0aW9ucyhwcmV2aW91c09wdGlvbnMsIG9wdGlvbnMsIGd1aWQpKSB7IC8vIE9wdGlvbnMgQ2hhbmdlZCAtIE5lZWQgdG8gUmUtcmVuZGVyXG4gICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgIFxuICAgICAgICAgIGlmKG9wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gb3B0aW9uc1tpXVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyT3B0aW9uKGVsZW0sIHByb3BzLCBndWlkLCBvcHRpb24sIG9wdGlvblZhbHVlLCByZW5kZXJFdmVudClcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgRHJvcGRvd25TZWFyY2hCb3goKSIsImZ1bmN0aW9uIE5hdkJhcigpIHt9XG5cbk5hdkJhci5wcm90b3R5cGUuX2dldEFjdGl2ZVJvdXRlSXRlbSA9IGZ1bmN0aW9uKGd1aWQpIHtcbiAgICAgbGV0IHF1ZXJ5ID0gJy4nICsgd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLk5BVkJBUl9JVEVNX1dJVEhfU1VCICsgJy5zZWxlY3RlZFtndWlkPVwiJyArIGd1aWQgKydcIl0nXG4gICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IocXVlcnkpIFxufVxuXG5OYXZCYXIucHJvdG90eXBlLl9nZXRNYWluT2JqZWN0ID0gZnVuY3Rpb24oZ3VpZCkge1xuICAgICBsZXQgcXVlcnkgPSAnLicgKyB3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuTkFWQkFSICsgJ1tndWlkPVwiJyArIGd1aWQgKydcIl0nXG4gICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IocXVlcnkpXG59XG5cbk5hdkJhci5wcm90b3R5cGUuX29wZW5CeUdVSUQgPSBmdW5jdGlvbihndWlkLCBwYXJlbnRFbGVtKSB7XG4gICAgIHBhcmVudEVsZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxuICAgICB3aW5kb3cuX19DT01fQUNUSVZFLk5BVkJBUiA9IGd1aWRcbn1cblxuTmF2QmFyLnByb3RvdHlwZS5fY2xvc2VCeUdVSUQgPSBmdW5jdGlvbihndWlkKSB7XG4gICAgIGxldCBvYmplY3QgPSB0aGlzLl9nZXRBY3RpdmVSb3V0ZUl0ZW0oZ3VpZClcbiAgICAgaWYob2JqZWN0KVxuICAgICAgICAgIG9iamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG5cbiAgICAgd2luZG93Ll9fQ09NX0FDVElWRS5OQVZCQVIgPSAnJ1xufVxuXG5OYXZCYXIucHJvdG90eXBlLl9zZWxlY3RSb3V0ZUJ5R1VJRCA9IGZ1bmN0aW9uKGd1aWQsIGVsZW0pIHtcbiAgICAgbGV0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdyb3V0ZS1rZXknKVxuICAgICBsZXQgdGV4dCA9IGVsZW0uZ2V0QXR0cmlidXRlKCdyb3V0ZS10ZXh0JylcblxuICAgICBsZXQgb2JqZWN0ID0gdGhpcy5fZ2V0TWFpbk9iamVjdChndWlkKVxuICAgICBsZXQgb2JqZWN0SUQgPSBvYmplY3QuaWRcbiAgICAgXG4gICAgIGlmKCFrZXkgfHwgIXRleHQgfHwgIW9iamVjdElEKVxuICAgICAgICAgIHJldHVyblxuICAgICBcbiAgICAgbGV0IHZpZXcgPSB3aW5kb3cuX19WSUVXU1tvYmplY3RJRF1cbiAgICAgXG4gICAgIGlmKCF2aWV3IHx8ICF2aWV3LnByb3BzKVxuICAgICAgICAgIHJldHVyblxuXG4gICAgIC8qIFVwZGF0ZSBVSSAqL1xuICAgICBpZiAod2luZG93Ll9fQ09NX1JFTkRFUkVELk5BVkJBUltndWlkXSAmJiB3aW5kb3cuX19DT01fUkVOREVSRUQuTkFWQkFSW2d1aWRdLmFjdGl2ZUVsZW0pXG4gICAgICAgICAgd2luZG93Ll9fQ09NX1JFTkRFUkVELk5BVkJBUltndWlkXS5hY3RpdmVFbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcblxuICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcblxuICAgICBpZiAoIXdpbmRvdy5fX0NPTV9SRU5ERVJFRC5OQVZCQVJbZ3VpZF0pXG4gICAgICAgICAgd2luZG93Ll9fQ09NX1JFTkRFUkVELk5BVkJBUltndWlkXSA9IHt9XG5cbiAgICAgd2luZG93Ll9fQ09NX1JFTkRFUkVELk5BVkJBUltndWlkXS5hY3RpdmVFbGVtID0gZWxlbVxuICAgICB3aW5kb3cuX19DT01fUkVOREVSRUQuTkFWQkFSW2d1aWRdLmRlZmF1bHRWYWx1ZSA9IGtleVxuICAgICBcbiAgICAgLyogRXZlbnQgVHJpZ2dlciAqL1xuICAgICBpZiAodmlldy5wcm9wcy5vblNlbGVjdCAmJiB0eXBlb2Ygdmlldy5wcm9wcy5vblNlbGVjdCA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICB2aWV3LnByb3BzLm9uU2VsZWN0KGtleSlcbiAgICAgfVxufVxuXG5OYXZCYXIucHJvdG90eXBlLl9yZW5kZXJSb3V0ZSA9IGZ1bmN0aW9uKHBhcmVudEVsZW0sIHByb3BzLCBndWlkLCByb3V0ZSwgcmVuZGVyRXZlbnQpIHtcbiAgICAgaWYoIXJvdXRlLmtleSB8fCAhcm91dGUudGV4dClcbiAgICAgICAgICByZXR1cm5cblxuICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xJJylcbiAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5OQVZCQVJfSVRFTSlcbiAgICAgXG4gICAgIGVsZW0uc2V0QXR0cmlidXRlKCdyb3V0ZS1rZXknLCByb3V0ZS5rZXkpXG4gICAgIGVsZW0uc2V0QXR0cmlidXRlKCdyb3V0ZS10ZXh0Jywgcm91dGUudGV4dClcbiAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2d1aWQnLCBndWlkKVxuXG4gICAgIGxldCBkZWZhdWx0VmFsdWUgPSBudWxsXG4gICAgIGlmIChwcm9wcy5kZWZhdWx0VmFsdWUpXG4gICAgICAgICAgZGVmYXVsdFZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlXG4gICAgIGlmICh3aW5kb3cuX19DT01fUkVOREVSRUQuTkFWQkFSW2d1aWRdICYmIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5OQVZCQVJbZ3VpZF0uZGVmYXVsdFZhbHVlKVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5OQVZCQVJbZ3VpZF0uZGVmYXVsdFZhbHVlICsgXCJcIlxuXG4gICAgIGlmKGRlZmF1bHRWYWx1ZSAmJiBkZWZhdWx0VmFsdWUgPT0gcm91dGUua2V5KSB7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG4gICAgICAgICAgXG4gICAgICAgICAgLy8gU2F2ZVxuICAgICAgICAgIGlmICghd2luZG93Ll9fQ09NX1JFTkRFUkVELk5BVkJBUltndWlkXSlcbiAgICAgICAgICAgICAgIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5OQVZCQVJbZ3VpZF0gPSB7fVxuXG4gICAgICAgICAgd2luZG93Ll9fQ09NX1JFTkRFUkVELk5BVkJBUltndWlkXS5hY3RpdmVFbGVtID0gZWxlbVxuICAgICAgICAgIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5OQVZCQVJbZ3VpZF0uZGVmYXVsdFZhbHVlID0gcm91dGUua2V5XG4gICAgIH0gZWxzZVxuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuXG4gICAgIGxldCBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpXG4gICAgIGlmKHByb3BzLmhlaWdodCAmJiAhaXNOYU4ocHJvcHMuaGVpZ2h0KSlcbiAgICAgICAgICBhcnRpY2xlLnN0eWxlLmxpbmVIZWlnaHQgPSBwcm9wcy5oZWlnaHQgKyAncHgnXG5cbiAgICAgZWxlbS5hcHBlbmRDaGlsZChhcnRpY2xlKVxuXG4gICAgIGlmKHJvdXRlLnN1YnJvdXRlcyAmJiByb3V0ZS5zdWJyb3V0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGFydGljbGUuaW5uZXJIVE1MID0gcm91dGUudGV4dCArICcgJiM5NjYyOydcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLk5BVkJBUl9JVEVNX1dJVEhfU1VCKVxuXG4gICAgICAgICAgbGV0IHZpcnR1YWxFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnVUwnKVxuICAgICAgICAgIHZpcnR1YWxFbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLk5BVkJBUl9TVUIpXG5cbiAgICAgICAgICBpZihyb3V0ZS5uYXZEaXJlY3Rpb24gJiYgcm91dGUubmF2RGlyZWN0aW9uID09ICdmcm9tX3JpZ2h0JykgXG4gICAgICAgICAgICAgICB2aXJ0dWFsRWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5OQVZCQVJfU1VCX1JJR0hUKVxuXG4gICAgICAgICAgdmlydHVhbEVsZW0uc2V0QXR0cmlidXRlKCdndWlkJywgZ3VpZCkgICAgICAgICAgXG5cbiAgICAgICAgICBpZihwcm9wcy50cmFuc2xhdGlvblpfbmF2KVxuICAgICAgICAgICAgICAgdmlydHVhbEVsZW0uc3R5bGUuekluZGV4ID0gcHJvcHMudHJhbnNsYXRpb25aX25hdlxuXG4gICAgICAgICAgZWxlbS5hcHBlbmRDaGlsZCh2aXJ0dWFsRWxlbSlcblxuICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByb3V0ZS5zdWJyb3V0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgIGxldCBzdWJyb3V0ZSA9IHJvdXRlLnN1YnJvdXRlc1tpXVxuXG4gICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJTdWJSb3V0ZSh2aXJ0dWFsRWxlbSwgcHJvcHMsIGd1aWQsIHN1YnJvdXRlLCByZW5kZXJFdmVudClcbiAgICAgICAgICB9XG4gICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXJ0aWNsZS5pbm5lckhUTUwgPSByb3V0ZS50ZXh0XG4gICAgIH1cblxuICAgICBwYXJlbnRFbGVtLmFwcGVuZENoaWxkKGVsZW0pXG59XG5cbk5hdkJhci5wcm90b3R5cGUuX3JlbmRlclN1YlJvdXRlID0gZnVuY3Rpb24ocGFyZW50RWxlbSwgcHJvcHMsIGd1aWQsIHJvdXRlLCByZW5kZXJFdmVudCkge1xuICAgICBpZighcm91dGUua2V5IHx8ICFyb3V0ZS50ZXh0KVxuICAgICAgICAgIHJldHVyblxuXG4gICAgIGxldCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTEknKVxuICAgICBlbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLk5BVkJBUl9TVUJfSVRFTSlcblxuICAgICBlbGVtLnNldEF0dHJpYnV0ZSgncm91dGUta2V5Jywgcm91dGUua2V5KVxuICAgICBlbGVtLnNldEF0dHJpYnV0ZSgncm91dGUtdGV4dCcsIHJvdXRlLnRleHQpXG4gICAgIGVsZW0uc2V0QXR0cmlidXRlKCdndWlkJywgZ3VpZClcblxuICAgICBsZXQgZGVmYXVsdFZhbHVlID0gbnVsbFxuICAgICBpZiAocHJvcHMuZGVmYXVsdFZhbHVlKVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IHByb3BzLmRlZmF1bHRWYWx1ZVxuICAgICBpZiAod2luZG93Ll9fQ09NX1JFTkRFUkVELk5BVkJBUltndWlkXSAmJiB3aW5kb3cuX19DT01fUkVOREVSRUQuTkFWQkFSW2d1aWRdLmRlZmF1bHRWYWx1ZSlcbiAgICAgICAgICBkZWZhdWx0VmFsdWUgPSB3aW5kb3cuX19DT01fUkVOREVSRUQuTkFWQkFSW2d1aWRdLmRlZmF1bHRWYWx1ZSArIFwiXCJcblxuICAgICBpZihkZWZhdWx0VmFsdWUgJiYgZGVmYXVsdFZhbHVlID09IHJvdXRlLmtleSkge1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxuICAgICAgICAgIFxuICAgICAgICAgIC8vIFNhdmVcbiAgICAgICAgICBpZiAoIXdpbmRvdy5fX0NPTV9SRU5ERVJFRC5OQVZCQVJbZ3VpZF0pXG4gICAgICAgICAgICAgICB3aW5kb3cuX19DT01fUkVOREVSRUQuTkFWQkFSW2d1aWRdID0ge31cblxuICAgICAgICAgIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5OQVZCQVJbZ3VpZF0uYWN0aXZlRWxlbSA9IGVsZW1cbiAgICAgICAgICB3aW5kb3cuX19DT01fUkVOREVSRUQuTkFWQkFSW2d1aWRdLmRlZmF1bHRWYWx1ZSA9IHJvdXRlLmtleVxuICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuICAgICB9XG5cbiAgICAgbGV0IGFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJykgXG4gICAgIGFydGljbGUuaW5uZXJIVE1MID0gcm91dGUudGV4dFxuXG4gICAgIGVsZW0uYXBwZW5kQ2hpbGQoYXJ0aWNsZSlcbiAgICAgcGFyZW50RWxlbS5hcHBlbmRDaGlsZChlbGVtKVxufVxuXG5OYXZCYXIucHJvdG90eXBlLl9yZW5kZXJNYWluID0gZnVuY3Rpb24oZWxlbSwgcHJvcHMsIHJlbmRlckV2ZW50KSB7XG4gICAgIGlmICghcmVuZGVyRXZlbnQpXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgLy8gR1VJRFxuICAgICBsZXQgZ3VpZCA9IHByb3BzLmd1aWRcbiAgICAgaWYoZWxlbS5nZXRBdHRyaWJ1dGUoJ2d1aWQnKSlcbiAgICAgICAgICBndWlkID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2d1aWQnKVxuXG4gICAgIC8vIFJPVVRFU1xuICAgICBsZXQgcm91dGVzID0gW11cbiAgICAgaWYocHJvcHMgJiYgcHJvcHMucm91dGVzKVxuICAgICAgICAgIHJvdXRlcyA9IEpTT04ucGFyc2UocHJvcHMucm91dGVzKSAgICAgICAgXG4gICAgIFxuICAgICBlbGVtLmlubmVySFRNTCA9ICcnXG4gICAgIGxldCB2aXJ0dWFsRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1VMJylcbiAgICAgZWxlbS5hcHBlbmRDaGlsZCh2aXJ0dWFsRWxlbSlcblxuICAgICBpZihyb3V0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByb3V0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgIGxldCByb3V0ZSA9IHJvdXRlc1tpXVxuXG4gICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJSb3V0ZSh2aXJ0dWFsRWxlbSwgcHJvcHMsIGd1aWQsIHJvdXRlLCByZW5kZXJFdmVudClcbiAgICAgICAgICB9XG4gICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgTmF2QmFyKCkiLCJmdW5jdGlvbiBTd2l0Y2hCdXR0b24oKSB7fVxuXG5Td2l0Y2hCdXR0b24ucHJvdG90eXBlLl9yZW5kZXJNYWluID0gZnVuY3Rpb24oZWxlbSwgcHJvcHMsIHJlbmRlckV2ZW50KSB7XG4gICAgIGlmIChyZW5kZXJFdmVudCkge1xuICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gJydcblxuICAgICAgICAgIGxldCBndWlkID0gcHJvcHMuZ3VpZCBcbiAgICAgICAgICBpZihlbGVtLmdldEF0dHJpYnV0ZSgnZ3VpZCcpKVxuICAgICAgICAgICAgICAgZ3VpZCA9IGVsZW0uZ2V0QXR0cmlidXRlKCdndWlkJylcblxuICAgICAgICAgIHRoaXMuX3JlbmRlclN0eWxlKGVsZW0sIHByb3BzLCBndWlkKVxuXG4gICAgICAgICAgbGV0IHZpcnR1YWxFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTEFCRUwnKVxuICAgICAgICAgIHZpcnR1YWxFbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLlNXSVRDSF9CT0RZKVxuICAgICAgICAgIHZpcnR1YWxFbGVtLnNldEF0dHJpYnV0ZSgnZ3VpZCcsIGd1aWQpXG4gICAgICAgICAgXG4gICAgICAgICAgZWxlbS5hcHBlbmRDaGlsZCh2aXJ0dWFsRWxlbSlcblxuICAgICAgICAgIHRoaXMuX3JlbmRlclNsaWRlcih2aXJ0dWFsRWxlbSwgcHJvcHMsIGd1aWQsIHJlbmRlckV2ZW50KVxuICAgICB9XG59XG5cblN3aXRjaEJ1dHRvbi5wcm90b3R5cGUuX3JlbmRlclNsaWRlciA9IGZ1bmN0aW9uKHBhcmVudEVsZW0sIHByb3BzLCBndWlkLCByZW5kZXJFdmVudCkge1xuICAgICBsZXQgc2VsZWN0ZWREZWZhdWx0ID0gZmFsc2VcbiAgICAgaWYocHJvcHMuaGFzT3duUHJvcGVydHkoJ3NlbGVjdGVkRGVmYXVsdCcpKSBcbiAgICAgICAgICBzZWxlY3RlZERlZmF1bHQgPSBwcm9wcy5zZWxlY3RlZERlZmF1bHRcblxuICAgICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTlBVVCcpXG4gICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgIFxuICAgICBpZihzZWxlY3RlZERlZmF1bHQpIHtcbiAgICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpXG4gICAgIH1cbiAgICAgXG4gICAgIGxldCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnU1BBTicpXG4gICAgIGVsZW0uY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuU1dJVENIX1NMSURFUilcblxuICAgICBwYXJlbnRFbGVtLmFwcGVuZENoaWxkKGNoZWNrYm94KVxuICAgICBwYXJlbnRFbGVtLmFwcGVuZENoaWxkKGVsZW0pXG5cbiAgICAgLy8gRXZlbnRzXG4gICAgIGlmIChyZW5kZXJFdmVudCAmJiBwcm9wcy5vblN3aXRjaCAmJiB0eXBlb2YgcHJvcHMub25Td2l0Y2ggPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICBwcm9wcy5vblN3aXRjaCh0aGlzLmNoZWNrZWQpXG4gICAgICAgICAgfSlcbiAgICAgfVxufVxuXG5Td2l0Y2hCdXR0b24ucHJvdG90eXBlLl9yZW5kZXJTdHlsZSA9IGZ1bmN0aW9uKHBhcmVudEVsZW0sIHByb3BzLCBndWlkKSB7XG4gICAgIGxldCBnYXAgPSA0XG4gICAgIGxldCBwYXJlbnRXaWR0aCA9IHBhcmVudEVsZW0ub2Zmc2V0V2lkdGhcbiAgICAgbGV0IHBhcmVudEhlaWdodCA9IHBhcmVudEVsZW0ub2Zmc2V0SGVpZ2h0XG5cbiAgICAgbGV0IHNpemUgPSBNYXRoLm1pbihwYXJlbnRXaWR0aCwgcGFyZW50SGVpZ2h0KVxuICAgICBsZXQgYWN0dWFsU2l6ZSA9IHNpemUgLSAyICogZ2FwXG4gICAgIGlmIChhY3R1YWxTaXplIDwgMCkge1xuICAgICAgICAgIGFjdHVhbFNpemUgPSBzaXplXG4gICAgICAgICAgZ2FwID0gMFxuICAgICB9XG5cbiAgICAgbGV0IHR4ID0gcGFyZW50V2lkdGggLSAyICogZ2FwIC0gYWN0dWFsU2l6ZVxuICAgICBpZiAodHggPCAwKVxuICAgICAgICAgIHR4ID0gMFxuXG4gICAgIGxldCBzdHlsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gICAgIHN0eWxlRWxlbS50eXBlID0gJ3RleHQvY3NzJ1xuXG4gICAgIGxldCBjc3MgPSAnJ1xuICAgICBjc3MgKz0gJy4nICsgd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLlNXSVRDSF9CT0RZICsgJ1tndWlkPVwiJyArIGd1aWQgKyAnXCJdIC4nICsgd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLlNXSVRDSF9TTElERVIgKyAne2JvcmRlci1yYWRpdXM6ICcgKyBzaXplICsgJ3B4fSAnXG4gICAgIGNzcyArPSAnLicgKyB3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuU1dJVENIX0JPRFkgKyAnW2d1aWQ9XCInICsgZ3VpZCArICdcIl0gLicgKyB3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuU1dJVENIX1NMSURFUiArICc6YmVmb3JlIHtib3JkZXItcmFkaXVzOiA1MCU7IGNvbnRlbnQ6IFwiXCI7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6ICcgKyBhY3R1YWxTaXplICsgJ3B4OyBoZWlnaHQ6ICcgKyBhY3R1YWxTaXplICsgJ3B4OyBsZWZ0OiAnICsgZ2FwICsgJ3B4OyBib3R0b206ICcgKyBnYXAgKyAncHg7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAtd2Via2l0LXRyYW5zaXRpb246IC40czsgdHJhbnNpdGlvbjogLjRzO30gJ1xuICAgICBjc3MgKz0gJy4nICsgd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLlNXSVRDSF9CT0RZICsgJ1tndWlkPVwiJyArIGd1aWQgKyAnXCJdIGlucHV0OmNoZWNrZWQgKyAuJyArIHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5TV0lUQ0hfU0xJREVSICsgJzpiZWZvcmUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgnICsgdHggKyAncHgpO30gJ1xuXG4gICAgIHN0eWxlRWxlbS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgU3dpdGNoQnV0dG9uKCkiLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbi8qXG4gIFZpZXdDb250ZXh0IG9mIHRoZSBQYXJlbnQuZlxuICBPYmogaG9sZHMgdGhlIGF2YWlsYWJsZSB3aWR0aCBhbmQgaGVpZ2h0IG9mIGl0J3MgcGFyZW50IGNvbnRhaW5lclxuICBhbmQgeCAmIHkgb2Zmc2V0IGZvciBpdCdzIGNoaWxkcmVuXG4qL1xuZnVuY3Rpb24gdmlld0N0eE9iaih2aWV3KSB7XG4gIGxldCBwcm9wcyA9IHZpZXcucHJvcHM7XG4gIGxldCBvYmogPSB7XG4gICAgdzogcHJvcHMudyAqIDEsXG4gICAgaDogcHJvcHMuaCAqIDEsXG4gICAgd2lkdGg6IHByb3BzLncgKiAxLFxuICB9O1xuXG4gIHZpZXcuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgY2hpbGQucHJvcHMudyA9IGNoaWxkLnByb3BzLndpZHRoO1xuICAgIGNoaWxkLnByb3BzLmggPSBjaGlsZC5wcm9wcy5oZWlnaHQ7XG4gIH0pO1xuXG4gIHJldHVybiBvYmo7XG59XG5cbi8qXG4gIFJldHVybnMgdHJ1ZSBpZiBjb250YWluZXIgaGFzIGEgY2hpbGQgd2l0aCBtYXRjaF9wYXJlbnQgZm9yIGFcbiAgZ2l2ZW4gZGltZW5zaW9uICh3aWR0aCBvciBoZWlnaHQpXG4qL1xuZnVuY3Rpb24gaGFzTWF0Y2hQYXJlbnRDaGlsZChjaGlsZHMsIGRpbWVuKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGNoaWxkUHJvcCA9IGNoaWxkc1tpXS5wcm9wcztcbiAgICBcbiAgICBpZiAoY2hpbGRQcm9wW2RpbWVuXSAmJiAoY2hpbGRQcm9wW2RpbWVuXSA9PSBcIm1hdGNoX3BhcmVudFwiKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLypcbiAgUmV0dXJucyB0cnVlIGlmIGNvbnRhaW5lciBoYXMgd2VpZ2h0ZWQgY2hpbGRcbiovXG5mdW5jdGlvbiBoYXNXZWlnaHRDaGlsZCh0eXBlLCBjaGlsZHMpIHtcbiAgaWYgKHR5cGUgIT0gXCJsaW5lYXJMYXlvdXRcIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGNoaWxkID0gY2hpbGRzW2ldLnByb3BzO1xuICAgIFxuICAgIGlmIChjaGlsZC53ZWlnaHQgJiYgcGFyc2VJbnQoY2hpbGQud2VpZ2h0KSA+IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVSZWxhdGl2ZUxheW91dCh2aWV3KSB7XG4gIGxldCB2aWV3Q3R4ID0gdmlld0N0eE9iaih2aWV3KTtcbiAgbGV0IGNoaWxkcmVuID0gdmlldy5jaGlsZHJlbjtcblxuICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICBsZXQgcHJvcHMgPSBjaGlsZC5wcm9wcztcblxuICAgIHByb3BzLmFic29sdXRlID0gdHJ1ZTtcbiAgICBwcm9wcy5mcm9tVG9wID0gMDtcbiAgICBwcm9wcy5mcm9tQm90dG9tID0gJ2F1dG8nO1xuICAgIHByb3BzLmZyb21MZWZ0ID0gMDtcbiAgICBwcm9wcy5mcm9tUmlnaHQgPSAnYXV0byc7XG5cbiAgICBpZihwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnYWxpZ25QYXJlbnRMZWZ0JykgJiYgcHJvcHMuYWxpZ25QYXJlbnRMZWZ0KXtcbiAgICAgIHByb3BzLmZyb21MZWZ0ID0gMDtcbiAgICAgIHByb3BzLmZyb21SaWdodCA9ICdhdXRvJztcbiAgICB9XG4gICAgaWYocHJvcHMuaGFzT3duUHJvcGVydHkoJ2FsaWduUGFyZW50UmlnaHQnKSAmJiBwcm9wcy5hbGlnblBhcmVudFJpZ2h0KXtcbiAgICAgIHByb3BzLmZyb21MZWZ0ID0gJ2F1dG8nO1xuICAgICAgcHJvcHMuZnJvbVJpZ2h0ID0gMDtcbiAgICB9XG5cbiAgICBpZihwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnYWxpZ25QYXJlbnRCb3R0b20nKSAmJiBwcm9wcy5hbGlnblBhcmVudEJvdHRvbSl7XG4gICAgICBwcm9wcy5mcm9tVG9wID0gJ2F1dG8nO1xuICAgICAgcHJvcHMuZnJvbUJvdHRvbSA9IDA7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZUxpbmVhcmxheW91dCh2aWV3KSB7XG4gIGxldCB2aWV3Q3R4ID0gdmlld0N0eE9iaih2aWV3KTtcbiAgbGV0IHBhcmVudFByb3BzID0gdmlldy5wcm9wcztcbiAgbGV0IGNoaWxkcmVuID0gdmlldy5jaGlsZHJlbjtcbiAgbGV0IGlzSG9yaXpvbnRhbCA9IChwYXJlbnRQcm9wcy5vcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSA/IGZhbHNlIDogdHJ1ZTtcbiAgXG4gIGxldCBhY3RpdmVEaW1lbiA9IChpc0hvcml6b250YWwpID8gXCJ3XCIgOiBcImhcIjtcbiAgbGV0IHBhc3NpdmVEaW1lbiA9IChpc0hvcml6b250YWwpID8gXCJoXCIgOiBcIndcIjtcblxuICBsZXQgaGFzV2VpZ2h0ID0gaGFzV2VpZ2h0Q2hpbGQodmlldy50eXBlLCBjaGlsZHJlbik7XG4gIGxldCBoYXNNYXRjaFBhcmVudCA9IGhhc01hdGNoUGFyZW50Q2hpbGQoY2hpbGRyZW4sIGFjdGl2ZURpbWVuKTtcbiAgXG4gIGlmIChoYXNXZWlnaHQgJiYgaGFzTWF0Y2hQYXJlbnQpIHtcbiAgICAvLyBXZSBjYW4ndCB1c2UgYm90aCBhdCB0aGUgc2FtZSB0aW1lXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyogSW5pdGlhbGl6ZSAqL1xuICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICBsZXQgcHJvcHMgPSBjaGlsZC5wcm9wcztcblxuICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShcImFjdGl2ZURpbWVuXCIpKVxuICAgICAgZGVsZXRlIHByb3BzW1wiYWN0aXZlRGltZW5cIl07XG4gICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KFwiYWN0aXZlV2VpZ2h0XCIpKVxuICAgICAgZGVsZXRlIHByb3BzW1wiYWN0aXZlV2VpZ2h0XCJdO1xuICB9KTtcbiAgLyogSW5pdGlhbGl6ZSBFbmQgKi9cbiAgXG4gIGlmKGhhc01hdGNoUGFyZW50IHx8IGhhc1dlaWdodCl7XG4gICAgbGV0IGZpcnN0ID0gdHJ1ZTtcbiAgICAvKiBJdGVyYXRlIENoaWxkICovXG4gICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICBsZXQgcHJvcHMgPSBjaGlsZC5wcm9wcztcblxuICAgICAgaWYocHJvcHMuaGFzT3duUHJvcGVydHkoYWN0aXZlRGltZW4pICYmIHByb3BzW2FjdGl2ZURpbWVuXSA9PSAnbWF0Y2hfcGFyZW50Jyl7XG4gICAgICAgIHByb3BzWydhY3RpdmVEaW1lbiddID0gYWN0aXZlRGltZW47XG4gICAgICAgIFxuICAgICAgICBpZihmaXJzdCl7XG4gICAgICAgICAgcHJvcHNbJ2FjdGl2ZVdlaWdodCddID0gMTtcbiAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBwcm9wc1snYWN0aXZlV2VpZ2h0J10gPSAwO1xuICAgICAgICB9XG4gICAgICB9ZWxzZXtcbiAgICAgICAgaWYocHJvcHMuaGFzT3duUHJvcGVydHkoJ3dlaWdodCcpICYmICFpc05hTihwcm9wc1snd2VpZ2h0J10pKXtcbiAgICAgICAgICBsZXQgd2VpZ2h0ID0gcGFyc2VGbG9hdChwcm9wc1snd2VpZ2h0J10pO1xuXG4gICAgICAgICAgaWYod2VpZ2h0ID4gMCl7XG4gICAgICAgICAgICBwcm9wc1snYWN0aXZlRGltZW4nXSA9IGFjdGl2ZURpbWVuO1xuICAgICAgICAgICAgcHJvcHNbJ2FjdGl2ZVdlaWdodCddID0gd2VpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIC8qIEl0ZXJhdGUgQ2hpbGQgRW5kICovXG4gIH1cbn0gLy8gRW5kIENvbXB1dGUgTGluZWFyTGF5b3V0XG5cbmZ1bmN0aW9uIGNvbXB1dGVDaGlsZERpbWVucyh2aWV3KSB7XG4gIGlmICh2aWV3LnR5cGUgPT0gXCJsaW5lYXJMYXlvdXRcIikge1xuICAgIGNvbXB1dGVMaW5lYXJsYXlvdXQodmlldyk7XG4gIH0gZWxzZSBpZiAodmlldy50eXBlID09IFwic2Nyb2xsVmlld1wiIHx8IHZpZXcudHlwZSA9PSBcImxpc3RWaWV3XCIpIHtcbiAgICB2aWV3LnByb3BzLm9yaWVudGF0aW9uID0gXCJ2ZXJ0aWNhbFwiO1xuICAgIGNvbXB1dGVMaW5lYXJsYXlvdXQodmlldyk7XG4gIH0gZWxzZSBpZiAodmlldy50eXBlID09IFwiaG9yaXpvbnRhbFNjcm9sbFZpZXdcIikge1xuICAgIHZpZXcucHJvcHMub3JpZW50YXRpb24gPSBcImhvcml6b250YWxcIjtcbiAgICBjb21wdXRlTGluZWFybGF5b3V0KHZpZXcpO1xuICB9IGVsc2UgaWYgKHZpZXcudHlwZSA9PSBcInJlbGF0aXZlTGF5b3V0XCIpIHtcbiAgICBjb21wdXRlUmVsYXRpdmVMYXlvdXQodmlldyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gRG8gTm90aGluZ1xuICB9XG5cbiAgcmV0dXJuIHZpZXc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjb21wdXRlQ2hpbGREaW1lbnNcbn07IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5mdW5jdGlvbiBydW4oKSB7XG4gIGlmICh3aW5kb3cuX19PUyA9PT0gXCJJT1NcIikge1xuICAgIHJldHVybiByZXF1aXJlKFwiLi9pb3NcIilcbiAgfSBlbHNlIGlmICh3aW5kb3cuX19PUyA9PT0gXCJXRUJcIikge1xuICAgIHJldHVybiByZXF1aXJlKFwiLi93ZWJcIilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVxdWlyZShcIi4vYW5kcm9pZFwiKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcnVuKCk7IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG52YXIgcGFyc2VQYXJhbXMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3dlYicpLnBhcnNlUGFyYW1zO1xuXG5BcnJheS5wcm90b3R5cGUuZmxhdHRlbiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXIpIHtcbiAgICB2YXIgbW9yZSA9IFtdLmNvbmNhdChjdXIpLnNvbWUoQXJyYXkuaXNBcnJheSk7XG4gICAgcmV0dXJuIHByZXYuY29uY2F0KG1vcmUgPyBjdXIuZmxhdHRlbigpIDogY3VyKTtcbiAgfSwgW10pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodHlwZSwgcHJvcHMsIC4uLmNoaWxkcmVuKSB7XG4gIGNoaWxkcmVuID0gY2hpbGRyZW4uZmxhdHRlbigpO1xuICBcbiAgaWYgKCFwcm9wcylcbiAgICBwcm9wcyA9IHt9O1xuICBcbiAgaWYgKHR5cGVvZiB0eXBlID09PSBcInN0cmluZ1wiKSB7XG4gICAgcHJvcHMgPSBwYXJzZVBhcmFtcyh0eXBlLCBwcm9wcyk7XG4gICAgXG4gICAgbGV0IG9iaiA9IHtcbiAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICB9O1xuXG4gICAgd2luZG93Ll9fVklFV1NbcHJvcHMuaWRdID0gb2JqO1xuICAgIHdpbmRvdy5fX1ZJRVdfRElNRU5TSU9OU1twcm9wcy5pZF0gPSBudWxsO1xuICAgIHJldHVybiBvYmo7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyB0eXBlKHByb3BzLCBjaGlsZHJlbik7XG4gIH1cbn0iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBoYW5kbGUgOiAodWksIGNhbGxiYWNrKSA9PiB7XG4gICAgaWYgKCF1aSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZih1aS5yZW5kZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgQW5kcm9pZCA9PT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQW5kcm9pZCBpcyB1bmRlZmluZWRcIik7XG5cbiAgICAgIGlmICh3aW5kb3cuX19PUyAhPSBcIkFORFJPSURcIilcbiAgICAgICAgcmV0dXJuIEFuZHJvaWQuUmVuZGVyKHVpLnJlbmRlciwgbnVsbCk7XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYodHlwZW9mIEFuZHJvaWQuZ2V0TmV3SUQgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIEFuZHJvaWQuUmVuZGVyKEpTT04uc3RyaW5naWZ5KHVpLnJlbmRlciksIG51bGwsIFwiZmFsc2VcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIEFuZHJvaWQuUmVuZGVyKEpTT04uc3RyaW5naWZ5KHVpLnJlbmRlciksIG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYodWkucnVuSW5VSSkge1xuICAgICAgQW5kcm9pZC5ydW5JblVJKHVpLnJ1bkluVUksIG51bGwpO1xuICAgIH1cbiAgICBpZih1aS5hZGRWaWV3VG9QYXJlbnQpIHtcbiAgICAgIEFuZHJvaWQuYWRkVmlld1RvUGFyZW50KHVpLmFkZFZpZXdUb1BhcmVudC5wYXJlbnRJZCwgSlNPTi5zdHJpbmdpZnkodWkuYWRkVmlld1RvUGFyZW50LmpzeCksIHVpLmFkZFZpZXdUb1BhcmVudC5pbmRleCwgbnVsbCk7XG4gICAgfVxuICB9XG59IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG4vLyBGb2xsb3dpbmcgZnVuY3Rpb25zIGFyZSB1c2VkIGJ5IFdFQiBhbmQgSU9TIFJlbmRlclxuZnVuY3Rpb24gY2FjaGVEaW1lbih2aWV3KSB7XG4gIGxldCBwcm9wcyA9IHZpZXcucHJvcHM7XG4gIGxldCBkaW1lbiA9IHtcbiAgICB3OiBwcm9wcy53LFxuICAgIGg6IHByb3BzLmgsXG4gICAgeDogcHJvcHMueCxcbiAgICB5OiBwcm9wcy55LFxuICAgIGdyYXZpdHk6IHByb3BzLmdyYXZpdHksXG4gICAgcGFkZGluZzogcHJvcHMucGFkZGluZyxcbiAgICBvcmllbnRhdGlvbjogcHJvcHMub3JpZW50YXRpb24sXG4gICAgc3Ryb2tlOiBwcm9wcy5zdHJva2UgPyBwcm9wcy5zdHJva2Uuc3BsaXQoXCIsXCIpWzBdICogMSA6IDAsXG4gIH1cbiAgd2luZG93Ll9fVklFV19ESU1FTlNJT05TW3Byb3BzLmlkXSA9IGRpbWVuO1xufVxuXG5mdW5jdGlvbiBzaG91bGRNb3ZlKHZpZXcpIHtcbiAgbGV0IHByb3BzID0gdmlldy5wcm9wcztcbiAgbGV0IGRpbWVuID0ge1xuICAgIHc6IHByb3BzLncsXG4gICAgaDogcHJvcHMuaCxcbiAgICB4OiBwcm9wcy54LFxuICAgIHk6IHByb3BzLnlcbiAgfTtcbiAgbGV0IGNhY2hlZERpbWVuID0gd2luZG93Ll9fVklFV19ESU1FTlNJT05TW3Byb3BzLmlkXTtcbiAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcbiAgaWYgKCFjYWNoZWREaW1lbilcbiAgICByZXR1cm4gZGltZW47XG4gIGZvciAobGV0IGtleSBpbiBkaW1lbikge1xuICAgIGlmIChjYWNoZWREaW1lbltrZXldICE9IGRpbWVuW2tleV0pIHtcbiAgICAgIGRpbWVuLmlkID0gcHJvcHMuaWQ7XG4gICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgaWYgKGNoYW5nZWQpXG4gICAgcmV0dXJuIGRpbWVuO1xuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0T1MoKSB7XG4gIHZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICBpZiAoIXVzZXJBZ2VudClcbiAgICByZXR1cm4gY29uc29sZS5lcnJvcihuZXcgRXJyb3IoXCJVc2VyQWdlbnQgaXMgbnVsbFwiKSk7XG4gIGlmICh1c2VyQWdlbnQuaW5jbHVkZXMoXCJBbmRyb2lkXCIpICYmIHVzZXJBZ2VudC5pbmNsdWRlcyhcIlZlcnNpb25cIikpXG4gICAgcmV0dXJuIFwiQU5EUk9JRFwiO1xuICBpZiAoKHVzZXJBZ2VudC5pbmNsdWRlcyhcImlQaG9uZVwiKSB8fCB1c2VyQWdlbnQuaW5jbHVkZXMoXCJpUGFkXCIpKSAmJiAhdXNlckFnZW50LmluY2x1ZGVzKFwiVmVyc2lvblwiKSlcbiAgICByZXR1cm4gXCJJT1NcIjtcbiAgcmV0dXJuIFwiV0VCXCI7XG59XG5cbmZ1bmN0aW9uIGNsZWFyVmlld0V4dGVybmFscyh2aWV3KSB7XG4gIGlmICghdmlldylcbiAgICByZXR1cm47XG5cbiAgZGVsZXRlIHdpbmRvdy5fX1ZJRVdTW3ZpZXcucHJvcHMuaWRdO1xuICBkZWxldGUgd2luZG93Ll9fVklFV19ESU1FTlNJT05TW3ZpZXcucHJvcHMuaWRdO1xuICBcbiAgaWYoX19PQlNFUlZFUlNbdmlldy5wcm9wcy5pZF0pXG4gICAgZGVsZXRlIHdpbmRvdy5fX09CU0VSVkVSU1t2aWV3LnByb3BzLmlkXTtcblxuICB2aWV3LmNoaWxkcmVuLmZvckVhY2goY2xlYXJWaWV3RXh0ZXJuYWxzKTtcbn1cblxuLy8gdXNlOiBjbG9uZSggPHRoaW5nIHRvIGNvcHk+ICkgcmV0dXJucyA8bmV3IGNvcHk+XG5mdW5jdGlvbiBjbG9uZShvLCBtKXtcbiAgLy8gcmV0dXJuIG5vbiBvYmplY3QgdmFsdWVzXG4gIGlmKCdvYmplY3QnICE9PXR5cGVvZiBvKSByZXR1cm4gb1xuICAvLyBtOiBhIG1hcCBvZiBvbGQgcmVmcyB0byBuZXcgb2JqZWN0IHJlZnMgdG8gc3RvcCByZWN1cnNpb25cbiAgaWYoJ29iamVjdCcgIT09dHlwZW9mIG0gfHwgbnVsbCA9PT1tKSBtID1uZXcgV2Vha01hcCgpXG4gIHZhciBuID1tLmdldChvKVxuICBpZigndW5kZWZpbmVkJyAhPT10eXBlb2YgbikgcmV0dXJuIG5cbiAgLy8gc2hhbGxvdy9sZWFmIGNsb25lIG9iamVjdFxuICB2YXIgYyA9T2JqZWN0LmdldFByb3RvdHlwZU9mKG8pLmNvbnN0cnVjdG9yXG4gIC8vIFRPRE86IHNwZWNpYWxpemUgY29waWVzIGZvciBleHBlY3RlZCBidWlsdCBpbiB0eXBlcyBpLmUuIERhdGUgZXRjXG4gIHN3aXRjaChjKSB7XG4gICAgLy8gc2hvdWxkbid0IGJlIGNvcGllZCwga2VlcCByZWZlcmVuY2VcbiAgICBjYXNlIEJvb2xlYW46XG4gICAgY2FzZSBFcnJvcjpcbiAgICBjYXNlIEZ1bmN0aW9uOlxuICAgIGNhc2UgTnVtYmVyOlxuICAgIGNhc2UgUHJvbWlzZTpcbiAgICBjYXNlIFN0cmluZzpcbiAgICBjYXNlIFN5bWJvbDpcbiAgICBjYXNlIFdlYWtNYXA6XG4gICAgY2FzZSBXZWFrU2V0OlxuICAgICAgbiA9b1xuICAgICAgYnJlYWs7XG4gICAgLy8gYXJyYXkgbGlrZS9jb2xsZWN0aW9uIG9iamVjdHNcbiAgICBjYXNlIEFycmF5OlxuICAgICAgbS5zZXQobywgbiA9by5zbGljZSgwKSlcbiAgICAgIC8vIHJlY3Vyc2l2ZSBjb3B5IGZvciBjaGlsZCBvYmplY3RzXG4gICAgICBuLmZvckVhY2goZnVuY3Rpb24odixpKXtcbiAgICAgICAgaWYoJ29iamVjdCcgPT09dHlwZW9mIHYpIG5baV0gPWNsb25lKHYsIG0pXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQXJyYXlCdWZmZXI6XG4gICAgICBtLnNldChvLCBuID1vLnNsaWNlKDApKVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBEYXRhVmlldzpcbiAgICAgIG0uc2V0KG8sIG4gPW5ldyAoYykoY2xvbmUoby5idWZmZXIsIG0pLCBvLmJ5dGVPZmZzZXQsIG8uYnl0ZUxlbmd0aCkpXG4gICAgICBicmVhaztcbiAgICBjYXNlIE1hcDpcbiAgICBjYXNlIFNldDpcbiAgICAgIG0uc2V0KG8sIG4gPW5ldyAoYykoY2xvbmUoQXJyYXkuZnJvbShvLmVudHJpZXMoKSksIG0pKSlcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgSW50OEFycmF5OlxuICAgIGNhc2UgVWludDhBcnJheTpcbiAgICBjYXNlIFVpbnQ4Q2xhbXBlZEFycmF5OlxuICAgIGNhc2UgSW50MTZBcnJheTpcbiAgICBjYXNlIFVpbnQxNkFycmF5OlxuICAgIGNhc2UgSW50MzJBcnJheTpcbiAgICBjYXNlIFVpbnQzMkFycmF5OlxuICAgIGNhc2UgRmxvYXQzMkFycmF5OlxuICAgIGNhc2UgRmxvYXQ2NEFycmF5OlxuICAgICAgbS5zZXQobywgbiA9bmV3IChjKShjbG9uZShvLmJ1ZmZlciwgbSksIG8uYnl0ZU9mZnNldCwgby5sZW5ndGgpKVxuICAgICAgYnJlYWs7XG4gICAgLy8gdXNlIGJ1aWx0IGluIGNvcHkgY29uc3RydWN0b3JcbiAgICBjYXNlIERhdGU6XG4gICAgY2FzZSBSZWdFeHA6XG4gICAgICBtLnNldChvLCBuID1uZXcgKGMpKG8pKVxuICAgICAgYnJlYWs7XG4gICAgLy8gZmFsbGJhY2sgZ2VuZXJpYyBvYmplY3QgY29weVxuICAgIGRlZmF1bHQ6XG4gICAgICBtLnNldChvLCBuID1PYmplY3QuYXNzaWduKG5ldyAoYykoKSwgbykpXG4gICAgICAvLyByZWN1cnNpdmUgY29weSBmb3IgY2hpbGQgb2JqZWN0c1xuICAgICAgZm9yKGMgaW4gbikgaWYoJ29iamVjdCcgPT09dHlwZW9mIG5bY10pIG5bY10gPWNsb25lKG5bY10sIG0pXG4gIH1cbiAgcmV0dXJuIG5cbn1cblxuZnVuY3Rpb24gbWVyZ2UoKSB7XG4gIHZhciBvYmogPSB7fSxcbiAgICAgIGkgPSAwLFxuICAgICAgaWwgPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAga2V5O1xuICBmb3IgKDsgaSA8IGlsOyBpKyspIHtcbiAgICAgIGZvciAoa2V5IGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgICAgIGlmIChhcmd1bWVudHNbaV0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICBvYmpba2V5XSA9IGFyZ3VtZW50c1tpXVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuICByZXR1cm4gb2JqO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNob3VsZE1vdmUsXG4gIGNhY2hlRGltZW4sXG4gIGdldE9TLFxuICBtZXJnZSxcbiAgY2xlYXJWaWV3RXh0ZXJuYWxzLFxuICBjbG9uZSxcbn0iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiAqIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuICpcbiAqIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuICogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiAqIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiAqIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4gKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiAqIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuICogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2VcbiAqIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4gKi9cblxubW9kdWxlLmV4cG9ydHMubWFwID0gKGZuKSA9PiB7XG5cdGlmKHR5cGVvZiB3aW5kb3cuX19GTl9JTkRFWCAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Ll9fRk5fSU5ERVggIT09IG51bGwpIHtcblx0XHR2YXIgcHJveHlGbk5hbWUgPSAnRicgKyB3aW5kb3cuX19GTl9JTkRFWDtcblx0XHRpZiAod2luZG93Ll9fcGF5bG9hZCAmJiB3aW5kb3cuX19wYXlsb2FkLnNlcnZpY2Upe1xuXHRcdFx0cHJveHlGbk5hbWUgPSB3aW5kb3cuX19wYXlsb2FkLnNlcnZpY2UgKyBcIl9cIiArIHByb3h5Rm5OYW1lO1xuXHRcdH1cblx0XHR3aW5kb3cuX19QUk9YWV9GTltwcm94eUZuTmFtZV0gPSBmbjtcblx0ICBcdHdpbmRvdy5fX0ZOX0lOREVYKys7XG5cdFx0cmV0dXJuIHByb3h5Rm5OYW1lO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBpbml0aWFsaXNlIHdpbmRvdy5fX0ZOX0lOREVYID0gMCBpbiBpbmRleC5qcyBvZiB5b3VyIHByb2plY3QuXCIpO1xuXHR9XG59XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRjYWxsYmFja01hcHBlciA6IHJlcXVpcmUoXCIuL2NhbGxiYWNrTWFwcGVyXCIpXG59XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbmNvbnN0IGhlbHBlcnMgPSB7XG5cdGNvbW1vbiA6IHJlcXVpcmUoXCIuL2NvbW1vblwiKVxufTtcblxuXG5pZiAod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpIHtcblx0aGVscGVycy5hbmRyb2lkID0gcmVxdWlyZShcIi4vYW5kcm9pZFwiKVxufVxuZWxzZSBpZiAod2luZG93Ll9fT1MgPT0gXCJXRUJcIikge1xuXHRoZWxwZXJzLndlYiA9IHJlcXVpcmUoXCIuL3dlYlwiKTtcbn1cbmVsc2Uge1xuXHRoZWxwZXJzLmlvcyA9IHJlcXVpcmUoXCIuL2lvc1wiKTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGhlbHBlcnM7IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0cGFyc2VQYXJhbXMgOiByZXF1aXJlKFwiLi9wYXJzZVBhcmFtc1wiKSxcbn1cbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxuQXJyYXkucHJvdG90eXBlLnJvdGF0ZSA9IChmdW5jdGlvbiAoKSB7XG4gIC8vIHNhdmUgcmVmZXJlbmNlcyB0byBhcnJheSBmdW5jdGlvbnMgdG8gbWFrZSBsb29rdXAgZmFzdGVyXG4gIHZhciBwdXNoID0gQXJyYXkucHJvdG90eXBlLnB1c2gsXG4gICAgc3BsaWNlID0gQXJyYXkucHJvdG90eXBlLnNwbGljZTtcblxuICByZXR1cm4gZnVuY3Rpb24gKGNvdW50KSB7XG4gICAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoID4+PiAwLCAvLyBjb252ZXJ0IHRvIHVpbnRcbiAgICAgIGNvdW50ID0gY291bnQgPj4gMDsgLy8gY29udmVydCB0byBpbnRcblxuICAgIC8vIGNvbnZlcnQgY291bnQgdG8gdmFsdWUgaW4gcmFuZ2UgWzAsIGxlbilcbiAgICBjb3VudCA9ICgoY291bnQgJSBsZW4pICsgbGVuKSAlIGxlbjtcblxuICAgIC8vIHVzZSBzcGxpY2UuY2FsbCgpIGluc3RlYWQgb2YgdGhpcy5zcGxpY2UoKSB0byBtYWtlIGZ1bmN0aW9uIGdlbmVyaWNcbiAgICBwdXNoLmFwcGx5KHRoaXMsIHNwbGljZS5jYWxsKHRoaXMsIDAsIGNvdW50KSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG59KSgpO1xuXG5mdW5jdGlvbiBmbGF0dGVuT2JqZWN0KG9iKSB7XG4gIHZhciB0b1JldHVybiA9IHt9O1xuICBmb3IgKHZhciBpIGluIG9iKSB7XG4gICAgaWYgKCFvYi5oYXNPd25Qcm9wZXJ0eShpKSkgY29udGludWU7XG4gICAgaWYgKCh0eXBlb2Ygb2JbaV0pID09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgZmxhdE9iamVjdCA9IGZsYXR0ZW5PYmplY3Qob2JbaV0pO1xuICAgICAgZm9yICh2YXIgeCBpbiBmbGF0T2JqZWN0KSB7XG4gICAgICAgIGlmICghZmxhdE9iamVjdC5oYXNPd25Qcm9wZXJ0eSh4KSkgY29udGludWU7XG4gICAgICAgIGlmICh0eXBlb2YgZmxhdE9iamVjdFt4XSAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICB0b1JldHVyblt4XSA9IGZsYXRPYmplY3RbeF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvUmV0dXJuW2ldID0gb2JbaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRvUmV0dXJuO1xufVxuXG5mdW5jdGlvbiBwYXJzZUNvbG9ycyhjb2xvcikge1xuICBpZiAoY29sb3IubGVuZ3RoIDwgOClcbiAgICByZXR1cm4gY29sb3I7XG5cbiAgaWYgKGNvbG9yLmluZGV4T2YoXCJyZ2JhXCIpICE9PSAtMSB8fCBjb2xvci5pbmRleE9mKFwicmdiXCIpICE9PSAtMSlcbiAgICByZXR1cm4gY29sb3I7XG5cbiAgdmFyIGFscGhhID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDEsIDMpLCAxNik7XG4gIGFscGhhID0gKGFscGhhIC8gMjU1KS50b0ZpeGVkKDIpO1xuXG4gIHZhciBoZXhDb2xvciA9IGNvbG9yLnN1YnN0cmluZygzLCA5KTtcbiAgdmFyIHJnYmFDb2xvciA9IFwicmdiYShcIiArIGNvbnZlcnRIZXhUb1JnYihoZXhDb2xvcikgKyBcIixcIiArIGFscGhhICsgXCIpXCI7XG5cbiAgcmV0dXJuIHJnYmFDb2xvcjtcbn1cblxuZnVuY3Rpb24gbG9va0FuZFJlcGxhY2VQcm9wKHN0cixtYXRjaCwgdmFsKXtcbiAgdmFyIG91dHB1dCA9IG1hdGNoICsgXCIoXCIgKyB2YWwgKyBcInB4KVwiO1xuICBpZiAoIXN0cikgcmV0dXJuIG91dHB1dDsgXG4gIHZhciBzdGFydCA9IHN0ci5pbmRleE9mKG1hdGNoKTsgXG4gIGlmIChzdGFydCA+PSAwKXtcbiAgICB2YXIgZW5kID0gc3RyLnN1YnN0cihzdGFydCkuaW5kZXhPZihcIilcIik7IFxuICAgIGlmIChlbmQgPj0gMCkge1xuICAgICAgdmFyIGZvdW5kID0gc3RyLnN1YnN0cihzdGFydCxlbmQrMSk7IFxuICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKGZvdW5kLG91dHB1dCk7IFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBzdHIrb3V0cHV0OyBcbiAgICB9XG4gIH0gXG4gIGVsc2UgcmV0dXJuIHN0citvdXRwdXQ7IFxufVxuXG5cbmZ1bmN0aW9uIHBhcnNlTGF5b3V0UHJvcHModHlwZSwgY29uZmlnLCBrZXkpIHtcbiAgY29uc3QgaXNNb2JpbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDU1MFxuICBpZiAodHlwZW9mIGNvbmZpZ1trZXldID09IFwidW5kZWZpbmVkXCIgfHwgY29uZmlnW2tleV0gPT0gbnVsbCkge1xuICAgIGRlbGV0ZSBjb25maWdba2V5XTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIWNvbmZpZy5zdHlsZSkge1xuICAgIHZhciB0ID0gXCJcIlxuICAgIHZhciBlbGVfaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcuaWQpXG4gICAgaWYgKGVsZV9pZCkge1xuICAgICAgaWYgKGVsZV9pZC5zdHlsZSlcbiAgICAgICAgdCA9IChlbGVfaWQuc3R5bGUudHJhbnNmb3JtKSA/IGVsZV9pZC5zdHlsZS50cmFuc2Zvcm0gIDogXCJcIiBcbiAgICB9XG4gICAgY29uZmlnLnN0eWxlID0ge307XG4gICAgY29uZmlnLnN0eWxlLnRyYW5zZm9ybSA9IHQ7IFxuICAgIGNvbmZpZy5hbmltYXRpb24gPSB7fTtcbiAgICBjb25maWcuYW5pbWF0aW9uLnRyYW5zZm9ybSA9IFwiXCI7XG4gIH1cblxuICBpZiAoIWNvbmZpZy5hdHRyaWJ1dGVzKVxuICAgIGNvbmZpZy5hdHRyaWJ1dGVzID0ge307XG5cbiAgaWYgKCFjb25maWcuc3R5bGUuY2xhc3NOYW1lKVxuICAgIGNvbmZpZy5zdHlsZS5jbGFzc05hbWUgPSBcIlwiO1xuXG4gIGlmICgoa2V5ID09IFwib25DbGlja1wiIHx8IGtleSA9PSBcIm9uQ2xpY2tFdmVudFwiKSkge1xuICAgIGlmKCFpc01vYmlsZSAmJiAhY29uZmlnLmN1cnNvclR5cGUpe1xuICAgICAgY29uZmlnLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIH1cbiAgfVxuICBpZihrZXkgPT0gXCJjdXJzb3JUeXBlXCIpIHtcbiAgICBjb25maWcuc3R5bGUuY3Vyc29yID0gY29uZmlnLmN1cnNvclR5cGU7XG4gIH1cbiAgaWYgKGtleSA9PSBcInRleHRTaXplXCIpXG4gICAgY29uZmlnLnN0eWxlLmZvbnRTaXplID0gY29uZmlnLnRleHRTaXplICsgJ3B4JztcbiAgaWYgKGtleSA9PSAnZm9udFNpemUnKVxuICAgIGNvbmZpZy5zdHlsZS5mb250U2l6ZSA9IGNvbmZpZy5mb250U2l6ZSArICdweCc7XG4gIFxuICBpZiAoa2V5ID09ICd1cmwnKVxuICAgIGNvbmZpZy5hdHRyaWJ1dGVzLnNyYyA9IGNvbmZpZy51cmxcbiAgICBcbiAgLyppZiAoa2V5ID09IFwiaW1hZ2VVcmxcIil7XG4gICAgbGV0IGltYWdlVXJsID0gY29uZmlnLmltYWdlVXJsO1xuICAgIFxuICAgIGlmKGNvbmZpZy5yYXdEYXRhKSB7XG4gICAgICAvLyBEbyBub3RoaW5nXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0ZW1wID0gaW1hZ2VVcmwuc3BsaXQoJy4nKTtcbiAgICAgIGxldCBleHQgPSAnJztcbiAgICAgIGlmKHRlbXAgJiYgdGVtcC5sZW5ndGggPiAwKVxuICAgICAgICBleHQgPSB0ZW1wW3RlbXAubGVuZ3RoIC0gMV07XG4gICAgICBcbiAgICAgIGxldCBleHRzID0gW1wianBlZ1wiLCBcImpwZ1wiLCBcInBuZ1wiLCBcImJtcFwiLCBcInN2Z1wiLCBcImdpZlwiXTtcbiAgICAgIGV4dCA9IGV4dC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBpZighZXh0cy5pbmNsdWRlcyhleHQpKSB7XG4gICAgICAgIGltYWdlVXJsICs9ICcucG5nJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25maWcuYXR0cmlidXRlcy5zcmMgPSBpbWFnZVVybDtcbiAgfSovXG5cbiAgaWYgKGtleSA9PSBcImJhY2tncm91bmRDb2xvclwiKSB7XG4gICAgY29uZmlnLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcnNlQ29sb3JzKGNvbmZpZy5iYWNrZ3JvdW5kQ29sb3IpO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImJhY2tncm91bmRcIikge1xuICAgIGNvbmZpZy5zdHlsZS5iYWNrZ3JvdW5kID0gY29uZmlnLmJhY2tncm91bmQ7XG4gIH1cbiAgaWYgKGtleSA9PSBcImJhY2tncm91bmREcmF3YWJsZVwiKSB7XG4gICAgY29uZmlnLnN0eWxlW1wiYmFja2dyb3VuZC1pbWFnZVwiXSA9IFwidXJsKCdcIitjb25maWcuYmFja2dyb3VuZERyYXdhYmxlK1wiJylcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJjb2xvclwiKSB7XG4gICAgY29uZmlnLnN0eWxlLmNvbG9yID0gcGFyc2VDb2xvcnMoY29uZmlnLmNvbG9yKTtcbiAgfVxuXG4gIGlmKGtleSA9PSBcInBvc2l0aW9uXCIpIHtcbiAgICBjb25maWcuc3R5bGUucG9zaXRpb24gPSBjb25maWcucG9zaXRpb247XG4gIH1cblxuICBpZihrZXkgPT0gXCJib3R0b21GaXhlZFwiKSB7XG4gICAgY29uZmlnLnN0eWxlLmJvdHRvbSA9IGNvbmZpZy5ib3R0b21GaXhlZDtcbiAgfVxuICBpZihrZXkgPT0gXCJ0b3BGaXhlZFwiKSB7XG4gICAgY29uZmlnLnN0eWxlLnRvcCA9IGNvbmZpZy50b3BGaXhlZDtcbiAgfVxuICBpZihrZXkgPT0gXCJsZWZ0Rml4ZWRcIikge1xuICAgIGNvbmZpZy5zdHlsZS5sZWZ0ID0gY29uZmlnLmxlZnRGaXhlZDtcbiAgfVxuICBpZihrZXkgPT0gXCJyaWdodEZpeGVkXCIpIHtcbiAgICBjb25maWcuc3R5bGUucmlnaHQgPSBjb25maWcucmlnaHRGaXhlZDtcbiAgfVxuXG4gIGlmKGtleSA9PSBcInpJbmRleFwiKSB7XG4gICAgY29uZmlnLnN0eWxlW1wiei1pbmRleFwiXSA9IGNvbmZpZy56SW5kZXg7XG4gIH1cblxuICBpZihrZXkgPT0gXCJhdXRvZm9jdXNcIil7XG4gICAgdmFyIGlzSVBob25lID0gKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcImlQaG9uZVwiKSAhPT0gLTEpXG4gICAgaWYoY29uZmlnLmF1dG9mb2N1cyAmJiAhaXNJUGhvbmUpe1xuICAgICAgY29uZmlnLmF0dHJpYnV0ZXNbXCJhdXRvZm9jdXNcIl0gPSBcImF1dG9mb2N1c1wiOyAgXG4gICAgfVxuICB9XG4gIGlmKGtleT09XCJmb2N1c1wiKSB7XG4gICAgaWYgKGNvbmZpZy5mb2N1cyAmJiBjb25maWcuaWQpe1xuICAgICAgdmFyIGRvYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy5pZCk7XG4gICAgICBpZiAoZG9jKXtcbiAgICAgICAgZG9jLmZvY3VzKCk7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoa2V5ID09IFwiY29ybmVyUmFkaXVzXCIpIHtcbiAgICBjb25maWcuc3R5bGUuYm9yZGVyUmFkaXVzID0gY29uZmlnLmNvcm5lclJhZGl1cyArIFwicHhcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJhbHBoYVwiKSB7XG4gICAgY29uZmlnLnN0eWxlLm9wYWNpdHkgPSBjb25maWdba2V5XTtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJhX2FscGhhXCIpIHtcbiAgICBjb25maWcuYW5pbWF0aW9uLm9wYWNpdHkgPSBjb25maWdba2V5XTtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJmb250RmFtaWx5XCIpIHtcbiAgICBjb25maWcuc3R5bGUuZm9udEZhbWlseSA9IGNvbmZpZy5mb250RmFtaWx5O1xuICB9XG5cbiAgaWYgKGtleSA9PSAndHlwZWZhY2UnKSB7XG4gICAgc3dpdGNoKGNvbmZpZy50eXBlZmFjZSl7XG4gICAgICBjYXNlICdub3JtYWwnOlxuICAgICAgICBjb25maWcuc3R5bGUuZm9udFdlaWdodCA9IDQwMDtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm9sZCc6XG4gICAgICAgIGNvbmZpZy5zdHlsZS5mb250V2VpZ2h0ID0gNzAwO1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdpdGFsaWMnOlxuICAgICAgICBjb25maWcuc3R5bGUuZm9udFN0eWxlID0gJ2l0YWxpYyc7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvbGRfaXRhbGljJzpcbiAgICAgICAgY29uZmlnLnN0eWxlLmZvbnRXZWlnaHQgPSA3MDA7XG4gICAgICAgIGNvbmZpZy5zdHlsZS5mb250U3R5bGUgPSAnaXRhbGljJztcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndW5kZXJsaW5lJzpcbiAgICAgICAgY29uZmlnLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ3VuZGVybGluZSc7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoa2V5ID09IFwiZm9udFN0eWxlXCIpIHtcbiAgICBsZXQgbWF0Y2ggPSBjb25maWcuZm9udFN0eWxlLm1hdGNoKC9bLy1dLyk7XG4gICAgbGV0IGZvbnROYW1lID0gbWF0Y2ggPyBjb25maWcuZm9udFN0eWxlLnNsaWNlKDAsIG1hdGNoLmluZGV4KSA6IGNvbmZpZy5mb250U3R5bGU7XG4gICAgY29uZmlnLnN0eWxlLmZvbnRGYW1pbHkgPSBmb250TmFtZTtcblxuICAgIGlmICghbWF0Y2gpXG4gICAgICByZXR1cm47XG5cbiAgICBsZXQgdHlwZSA9IGNvbmZpZy5mb250U3R5bGUuc2xpY2UobWF0Y2guaW5kZXggKyAxKTtcbiAgICB0eXBlID0gdHlwZS5yZXBsYWNlKC9bLS9dL2csICcnKTtcbiAgICB0eXBlICA9IHR5cGUudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmICh0eXBlLmluZGV4T2YoJ2l0YWxpYycpICE9IC0xKVxuICAgICAgY29uZmlnLnN0eWxlLmZvbnRTdHlsZSA9ICdpdGFsaWMnO1xuXG4gICAgbGV0IGZvbnRXZWlnaHQgPSAwO1xuXG4gICAgaWYgKHR5cGUuaW5kZXhPZignZXh0cmFsaWdodCcpICE9IC0xKVxuICAgICAgZm9udFdlaWdodCA9IDIwMDtcbiAgICBlbHNlIGlmICh0eXBlLmluZGV4T2YoJ2xpZ2h0JykgIT0gLTEpXG4gICAgICBmb250V2VpZ2h0ID0gMzAwO1xuICAgIGVsc2UgaWYgKHR5cGUuaW5kZXhPZigncmVndWxhcicpICE9IC0xIHx8IHR5cGUuaW5kZXhPZignYm9vaycpICE9IC0xKVxuICAgICAgZm9udFdlaWdodCA9IDQwMDtcbiAgICBlbHNlIGlmICh0eXBlLmluZGV4T2YoJ3NlbWlib2xkJykgIT0gLTEgfHwgdHlwZS5pbmRleE9mKCdtZWRpdW0nKSAhPSAtMSlcbiAgICAgIGZvbnRXZWlnaHQgPSA1MDA7XG4gICAgZWxzZSBpZiAodHlwZS5pbmRleE9mKCdib2xkJykgIT0gLTEgfHwgdHlwZS5pbmRleE9mKCdoZWF2eScpICE9IC0xKVxuICAgICAgZm9udFdlaWdodCA9IDcwMDtcbiAgICBlbHNlIGlmICh0eXBlLmluZGV4T2YoJ2JsYWNrJykgIT0gLTEpXG4gICAgICBmb250V2VpZ2h0ID0gOTAwO1xuXG4gICAgaWYoZm9udFdlaWdodCA+IDApXG4gICAgICBjb25maWcuc3R5bGUuZm9udFdlaWdodCA9IGZvbnRXZWlnaHQ7XG4gIH1cblxuICBpZiAoa2V5ID09ICd2aXNpYmlsaXR5Jykge1xuICAgIGxldCB2aXNpYmlsaXR5ID0gY29uZmlnLnZpc2liaWxpdHk7XG4gICAgaWYgKHZpc2liaWxpdHkgPT0gJ2ludmlzaWJsZScpXG4gICAgICBjb25maWcuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgZWxzZSBpZiAodmlzaWJpbGl0eSA9PSAnZ29uZScpXG4gICAgICBjb25maWcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGVsc2Uge1xuICAgICAgY29uZmlnLnN0eWxlLnZpc2liaWxpdHkgPSAnJztcbiAgICB9XG4gIH0gXG5cbiAgaWYgKGtleSA9PSAnZXhwYW5kJykge1xuICAgIGxldCB2aXNpYmlsaXR5ID0gY29uZmlnLmV4cGFuZCArICcnO1xuICAgIGlmICh2aXNpYmlsaXR5ID09ICd0cnVlJyl7XG4gICAgICBjb25maWcuc3R5bGUudmlzaWJpbGl0eSA9ICcnO1xuICAgIH1cbiAgICBlbHNlXG4gICAgICBjb25maWcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInN0cm9rZVwiKSB7XG4gICAgbGV0IHZhbHVlcyA9IGNvbmZpZy5zdHJva2Uuc3BsaXQoXCIsXCIpO1xuXG4gICAgaWYodmFsdWVzLmxlbmd0aCA9PSAyKVxuICAgICAgY29uZmlnLnN0eWxlLmJvcmRlciA9IHZhbHVlc1swXSArIFwicHggc29saWQgXCIgKyB2YWx1ZXNbMV07XG4gICAgZWxzZSBpZih2YWx1ZXMubGVuZ3RoID09IDMpe1xuICAgICAgaWYgKHZhbHVlc1syXSA9PSBcInJibFwiKXtcbiAgICAgICAgY29uZmlnLnN0eWxlLmJvcmRlckJvdHRvbSA9IHZhbHVlc1swXSArIFwicHggc29saWQgXCIgKyB2YWx1ZXNbMV07XG4gICAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJMZWZ0ID0gdmFsdWVzWzBdICsgXCJweCBzb2xpZCBcIiArIHZhbHVlc1sxXTtcbiAgICAgICAgY29uZmlnLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmFsdWVzWzBdICsgXCJweCBzb2xpZCBcIiArIHZhbHVlc1sxXTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHZhbHVlc1syXSA9PSBcImJcIil7XG4gICAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJCb3R0b20gPSB2YWx1ZXNbMF0gKyBcInB4IHNvbGlkIFwiICsgdmFsdWVzWzFdO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodmFsdWVzWzJdID09IFwiclwiKXtcbiAgICAgICAgY29uZmlnLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmFsdWVzWzBdICsgXCJweCBzb2xpZCBcIiArIHZhbHVlc1sxXTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHZhbHVlc1syXSA9PSBcInJiXCIpe1xuICAgICAgICBjb25maWcuc3R5bGUuYm9yZGVyQm90dG9tID0gdmFsdWVzWzBdICsgXCJweCBzb2xpZCBcIiArIHZhbHVlc1sxXTtcbiAgICAgICAgY29uZmlnLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmFsdWVzWzBdICsgXCJweCBzb2xpZCBcIiArIHZhbHVlc1sxXTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgICAgY29uZmlnLnN0eWxlLmJvcmRlciA9IHZhbHVlc1swXSArIFwicHggXCIgKyB2YWx1ZXNbMV0gKyBcIiBcIiArIHZhbHVlc1syXTtcbiAgICB9XG4gICAgXG4gIH1cblxuICBpZiAoa2V5ID09IFwic3Ryb2tlVG9wXCIpIHtcbiAgICBsZXQgdmFsdWVzID0gY29uZmlnLnN0cm9rZVRvcC5zcGxpdChcIixcIik7XG4gICAgXG4gICAgaWYodmFsdWVzLmxlbmd0aCA9PSAyKVxuICAgICAgY29uZmlnLnN0eWxlLmJvcmRlclRvcCA9IHZhbHVlc1swXSArIFwicHggc29saWQgXCIgKyB2YWx1ZXNbMV07XG4gICAgZWxzZSBpZih2YWx1ZXMubGVuZ3RoID09IDMpXG4gICAgICBjb25maWcuc3R5bGUuYm9yZGVyVG9wID0gdmFsdWVzWzBdICsgXCJweCBcIiArIHZhbHVlc1sxXSArIFwiIFwiICsgdmFsdWVzWzJdO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInN0cm9rZVJpZ2h0XCIpIHtcbiAgICBsZXQgdmFsdWVzID0gY29uZmlnLnN0cm9rZVJpZ2h0LnNwbGl0KFwiLFwiKTtcbiAgICBcbiAgICBpZih2YWx1ZXMubGVuZ3RoID09IDIpXG4gICAgICBjb25maWcuc3R5bGUuYm9yZGVyUmlnaHQgPSB2YWx1ZXNbMF0gKyBcInB4IHNvbGlkIFwiICsgdmFsdWVzWzFdO1xuICAgIGVsc2UgaWYodmFsdWVzLmxlbmd0aCA9PSAzKVxuICAgICAgY29uZmlnLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmFsdWVzWzBdICsgXCJweCBcIiArIHZhbHVlc1sxXSArIFwiIFwiICsgdmFsdWVzWzJdO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInN0cm9rZUJvdHRvbVwiKSB7XG4gICAgbGV0IHZhbHVlcyA9IGNvbmZpZy5zdHJva2VCb3R0b20uc3BsaXQoXCIsXCIpO1xuICAgIFxuICAgIGlmKHZhbHVlcy5sZW5ndGggPT0gMilcbiAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJCb3R0b20gPSB2YWx1ZXNbMF0gKyBcInB4IHNvbGlkIFwiICsgdmFsdWVzWzFdO1xuICAgIGVsc2UgaWYodmFsdWVzLmxlbmd0aCA9PSAzKVxuICAgICAgY29uZmlnLnN0eWxlLmJvcmRlckJvdHRvbSA9IHZhbHVlc1swXSArIFwicHggXCIgKyB2YWx1ZXNbMV0gKyBcIiBcIiArIHZhbHVlc1syXTtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJzdHJva2VMZWZ0XCIpIHtcbiAgICBsZXQgdmFsdWVzID0gY29uZmlnLnN0cm9rZUxlZnQuc3BsaXQoXCIsXCIpO1xuICAgIFxuICAgIGlmKHZhbHVlcy5sZW5ndGggPT0gMilcbiAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJMZWZ0ID0gdmFsdWVzWzBdICsgXCJweCBzb2xpZCBcIiArIHZhbHVlc1sxXTtcbiAgICBlbHNlIGlmKHZhbHVlcy5sZW5ndGggPT0gMylcbiAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJMZWZ0ID0gdmFsdWVzWzBdICsgXCJweCBcIiArIHZhbHVlc1sxXSArIFwiIFwiICsgdmFsdWVzWzJdO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInRyYW5zbGF0aW9uWVwiKSB7XG4gICAgY29uZmlnLnN0eWxlLnRyYW5zZm9ybSA9IGxvb2tBbmRSZXBsYWNlUHJvcChjb25maWcuc3R5bGUudHJhbnNmb3JtLFwidHJhbnNsYXRlWVwiLGNvbmZpZ1trZXldKTtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJhX3RyYW5zbGF0aW9uWVwiKSB7XG4gICAgY29uZmlnLmFuaW1hdGlvbi50cmFuc2Zvcm0gKz0gXCJ0cmFuc2xhdGVZKFwiICsgY29uZmlnW2tleV0gKyBcInB4KSBcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJ0cmFuc2xhdGlvblhcIikge1xuICAgIGNvbmZpZy5zdHlsZS50cmFuc2Zvcm0gPSBsb29rQW5kUmVwbGFjZVByb3AoY29uZmlnLnN0eWxlLnRyYW5zZm9ybSxcInRyYW5zbGF0ZVhcIixjb25maWdba2V5XSk7XG4gIH1cblxuICBpZiAoa2V5ID09IFwiYV90cmFuc2xhdGlvblhcIikge1xuICAgIGNvbmZpZy5hbmltYXRpb24udHJhbnNmb3JtICs9IFwidHJhbnNsYXRlWChcIiArIGNvbmZpZ1trZXldICsgXCJweCkgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwic2NhbGVYXCIpIHtcbiAgICBjb25maWcuc3R5bGUudHJhbnNmb3JtICs9IFwic2NhbGVYKFwiICsgY29uZmlnW2tleV0gKyBcIikgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwiYV9zY2FsZVhcIikge1xuICAgIGNvbmZpZy5hbmltYXRpb24udHJhbnNmb3JtICs9IFwic2NhbGVYKFwiICsgY29uZmlnW2tleV0gKyBcIikgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwic2NhbGVZXCIpIHtcbiAgICBjb25maWcuc3R5bGUudHJhbnNmb3JtICs9IFwic2NhbGVZKFwiICsgY29uZmlnW2tleV0gKyBcIikgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwiYV9zY2FsZVlcIikge1xuICAgIGNvbmZpZy5hbmltYXRpb24udHJhbnNmb3JtICs9IFwic2NhbGVZKFwiICsgY29uZmlnW2tleV0gKyBcIikgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwicm90YXRpb25cIikge1xuICAgIGNvbmZpZy5zdHlsZS50cmFuc2Zvcm0gKz0gXCJyb3RhdGUoXCIgKyBjb25maWdba2V5XSArIFwiZGVnKSBcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJhX3JvdGF0aW9uXCIpIHtcbiAgICBjb25maWcuYW5pbWF0aW9uLnRyYW5zZm9ybSArPSBcInJvdGF0ZShcIiArIGNvbmZpZ1trZXldICsgXCJkZWcpIFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInJvdGF0aW9uWFwiKSB7XG4gICAgY29uZmlnLnN0eWxlLnRyYW5zZm9ybSArPSBcInJvdGF0ZVgoXCIgKyBjb25maWdba2V5XSArIFwiZGVnKSBcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJhX3JvdGF0aW9uWFwiKSB7XG4gICAgY29uZmlnLmFuaW1hdGlvbi50cmFuc2Zvcm0gKz0gXCJyb3RhdGVYKFwiICsgY29uZmlnW2tleV0gKyBcImRlZykgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwicm90YXRpb25ZXCIpIHtcbiAgICBjb25maWcuc3R5bGUudHJhbnNmb3JtICs9IFwicm90YXRlWShcIiArIGNvbmZpZ1trZXldICsgXCJkZWcpIFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImFfcm90YXRpb25ZXCIpIHtcbiAgICBjb25maWcuYW5pbWF0aW9uLnRyYW5zZm9ybSArPSBcInJvdGF0ZVkoXCIgKyBjb25maWdba2V5XSArIFwiZGVnKSBcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJ0cmFuc2xhdGlvblpcIikge1xuICAgIHZhciB2ID0gY29uZmlnW2tleV07XG4gICAgY29uZmlnLnN0eWxlW1wiLXdlYmtpdC1ib3gtc2hhZG93XCJdID0gXCIwIDAgXCIrdi50b1N0cmluZygpK1wicHggcmdiYSgwLDAsMCwgLjEpXCI7XG4gICAgY29uZmlnLnN0eWxlW1wiLW1vei1ib3gtc2hhZG93XCJdPSBcIjAgMCBcIit2LnRvU3RyaW5nKCkrXCJweCByZ2JhKDAsMCwwLCAuMSlcIjtcbiAgICBjb25maWcuc3R5bGVbXCJib3gtc2hhZG93XCJdPSAgXCIwIDAgXCIrdi50b1N0cmluZygpK1wicHggcmdiYSgwLDAsMCwgLjEpXCI7XG4gICAgXG4gIH1cblxuICBpZiAoa2V5ID09IFwiYV9kdXJhdGlvblwiICYmICFpc05hTihjb25maWdba2V5XSkpIHtcbiAgICBjb25zdCBzdWZmaXggPSBjb25maWcudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uID8gKFwiIFwiICsgY29uZmlnLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbikgOiBcIlwiO1xuICAgIGNvbmZpZy5hbmltYXRpb24udHJhbnNpdGlvbiA9IGNvbmZpZ1trZXldICsgJ21zIGFsbCcgKyBzdWZmaXg7XG4gIH1cbiAgXG4gIGlmICh0eXBlID09IFwidGV4dFZpZXdcIiAmJiBrZXkgPT0gXCJncmF2aXR5XCIgJiYgY29uZmlnLmdyYXZpdHkpIHtcbiAgICBjb25maWcuc3R5bGUudGV4dEFsaWduID0gY29uZmlnLmdyYXZpdHk7XG4gICAgaWYgKGNvbmZpZy5ncmF2aXR5ID09IFwiY2VudGVyX3ZlcnRpY2FsXCIpIHtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFsaWduLWl0ZW1zXCJdID0gXCJjZW50ZXJcIjtcbiAgICAgIGNvbmZpZy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfSBlbHNlIGlmIChjb25maWcuZ3Jhdml0eSA9PSBcImNlbnRlcl9ob3Jpem9udGFsXCIpIHtcbiAgICAgIGNvbmZpZy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICBjb25maWcuc3R5bGVbXCJqdXN0aWZ5LWNvbnRlbnRcIl0gPSBcImNlbnRlclwiO1xuICAgIH0gZWxzZSBpZiAoY29uZmlnLmdyYXZpdHkgPT0gXCJjZW50ZXJcIikge1xuICAgICAgY29uZmlnLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFsaWduLWl0ZW1zXCJdID0gXCJjZW50ZXJcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImp1c3RpZnktY29udGVudFwiXSA9IFwiY2VudGVyXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbmZpZy5ncmF2aXR5ID09IFwiY2VudGVyXCIpe1xuICAgICAgY29uZmlnLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFsaWduLWl0ZW1zXCJdID0gXCJjZW50ZXJcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImp1c3RpZnktY29udGVudFwiXSA9IFwiY2VudGVyXCI7XG4gICAgfVxuICB9XG4gIGlmICh0eXBlID09IFwibGluZWFyTGF5b3V0XCIgJiYga2V5ID09IFwiZ3Jhdml0eVwiICYmIGNvbmZpZy5ncmF2aXR5KXtcbiAgICBpZiAoY29uZmlnLm1hcmdpbiAmJiBjb25maWcuZ3Jhdml0eT09XCJjZW50ZXJfdmVydGljYWxcIil7XG4gICAgICB2YXIgbWFyZ2luPWNvbmZpZy5tYXJnaW4uc3BsaXQoXCIsXCIpO1xuICAgICAgaWYgKGNvbmZpZy53aWR0aCA9PSBcIm1hdGNoX3BhcmVudFwiKXtcbiAgICAgICAgIGNvbmZpZy5zdHlsZS53aWR0aD1cImNhbGMoMTAwJSAtIFwiKyhwYXJzZUludChtYXJnaW5bMF0pK3BhcnNlSW50KG1hcmdpblsyXSkpLnRvU3RyaW5nKCkrXCJweCApXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGtleSA9PSBcImhpbnRcIil7XG4gICAgY29uZmlnLmF0dHJpYnV0ZXMucGxhY2Vob2xkZXIgPSBjb25maWcuaGludDtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJjb250ZW50RWRpdGFibGVcIiAmJiBjb25maWcuY29udGVudEVkaXRhYmxlKXtcbiAgICBjb25maWcuYXR0cmlidXRlcy5jb250ZW50ZWRpdGFibGUgPSB0cnVlO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImlkXCIpIHtcbiAgICBjb25maWcuYXR0cmlidXRlcy5pZCA9IGNvbmZpZy5pZDtcbiAgfVxuXG5cbiAgaWYgKGtleSA9PSBcImdyYWRpZW50XCIpIHtcbiAgICB2YXIgZ3JhZGllbnRPYmogPUpTT04ucGFyc2UoY29uZmlnLmdyYWRpZW50KTtcbiAgICBpZiAoZ3JhZGllbnRPYmoudHlwZSA9PSBcImxpbmVhclwiKSB7XG4gICAgICB2YXIgYW5nbGUgPSBncmFkaWVudE9iai5hbmdsZTtcbiAgICAgIHZhciB2YWx1ZXMgPSBncmFkaWVudE9iai52YWx1ZXM7XG4gICAgICB2YXIgY29sb3JzID0gdmFsdWVzLmpvaW4oXCIsIFwiKTtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImJhY2tncm91bmQtaW1hZ2VcIl0gPSBcImxpbmVhci1ncmFkaWVudChcIithbmdsZStcImRlZywgXCIrY29sb3JzK1wiKVwiXG4gICAgfVxuICAgICBlbHNlIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBncmFkaWVudE9iai52YWx1ZXM7XG4gICAgICB2YXIgY29sb3JzID0gdmFsdWVzLmpvaW4oXCIsIFwiKTtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImJhY2tncm91bmQtaW1hZ2VcIl0gPSBcInJhZGlhbC1ncmFkaWVudChcIitjb2xvcnMrXCIpXCJcbiAgICAgfVxuICB9XG5cblxuICBpZiAoa2V5ID09IFwiaW5wdXRUeXBlXCIpIHtcbiAgICB2YXIgaW5wdXRUeXBlID0gXCJ0ZXh0XCI7XG4gICAgaWYgKGNvbmZpZy5pbnB1dFR5cGUgPT0gXCJudW1lcmljUGFzc3dvcmRcIiB8fCBjb25maWcuaW5wdXRUeXBlID09IFwicGFzc3dvcmRcIikge1xuICAgICAgaWYoY29uZmlnLmlucHV0VHlwZUkgPT0gNCAmJiBpc01vYmlsZSl7XG4gICAgICAgIGlucHV0VHlwZSA9IFwidGVsXCI7XG4gICAgICAgIGNvbmZpZy5zdHlsZVtcIi13ZWJraXQtdGV4dC1zZWN1cml0eVwiXSA9IFwiZGlzY1wiO1xuICAgICAgICBjb25maWcuc3R5bGVbXCItbW96LXRleHQtc2VjdXJpdHlcIl0gPSBcImRpc2NcIjtcbiAgICAgICAgY29uZmlnLnN0eWxlW1widGV4dC1zZWN1cml0eVwiXSA9IFwiZGlzY1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXRUeXBlID0gXCJwYXNzd29yZFwiXG4gICAgICAgIGNvbmZpZy5hdHRyaWJ1dGVzLmF1dG9jb21wbGV0ZSA9IFwibmV3LXBhc3N3b3JkXCJcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvbmZpZy5pbnB1dFR5cGUgPT0gXCJkaXNhYmxlZFwiKSB7XG4gICAgICAgIGNvbmZpZy5hdHRyaWJ1dGVzLmRpc2FibGVkID0gJ2Rpc2FibGVkJ1xuICAgIH0gZWxzZSBpZiAoY29uZmlnLmlucHV0VHlwZSA9PSBcIm51bWVyaWNcIikge1xuICAgICAgICBpbnB1dFR5cGUgPSBcIm51bWJlclwiXG4gICAgfVxuICAgIGlmIChjb25maWcuc2VwYXJhdG9yKSB7XG4gICAgICBpZihjb25maWcuaW5wdXRUeXBlID09IFwibnVtZXJpY1wiKXtcbiAgICAgICAgaW5wdXRUeXBlID0gXCJ0ZWxcIiAgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dFR5cGUgPSBcInRleHRcIlxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbmZpZy5hdHRyaWJ1dGVzLnR5cGUgPSBpbnB1dFR5cGVcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJyb3RhdGVJbWFnZVwiKSB7XG4gICAgaWYoY29uZmlnLnJvdGF0ZUltYWdlKXtcbiAgICAgIGNvbmZpZy5zdHlsZVtcIi13ZWJraXQtYW5pbWF0aW9uXCJdID0gXCJsb2FkMyA0cyBpbmZpbml0ZSBsaW5lYXJcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFuaW1hdGlvbi1kdXJhdGlvblwiXSA9IFwiNHNcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb25cIl0gPSBcImxpbmVhclwiO1xuICAgICAgY29uZmlnLnN0eWxlW1wiYW5pbWF0aW9uLWRlbGF5XCJdID0gXCIwc1wiO1xuICAgICAgY29uZmlnLnN0eWxlW1wiYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudFwiXSA9IFwiaW5maW5pdGVcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFuaW1hdGlvbi1kaXJlY3Rpb25cIl0gPSBcIm5vcm1hbFwiO1xuICAgICAgY29uZmlnLnN0eWxlW1wiYW5pbWF0aW9uLWZpbGwtbW9kZVwiXSA9IFwibm9uZVwiO1xuICAgICAgY29uZmlnLnN0eWxlW1wiYW5pbWF0aW9uLXBsYXktc3RhdGVcIl0gPSBcInJ1bm5pbmdcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFuaW1hdGlvbi1uYW1lXCJdID0gXCJyb3RhdGlvblwiO1xuXG4gICAgfVxuICB9XG5cbiAgaWYgKGtleSA9PSBcInBhdHRlcm5cIikge1xuICAgIGNvbmZpZy5hdHRyaWJ1dGVzW1wiZGF0YS1wYXR0ZXJuXCJdID0gY29uZmlnLnBhdHRlcm47XG4gICAgdmFyIGRhdGEgPSBjb25maWcucGF0dGVybi5zcGxpdCgnLCcpO1xuICAgIHZhciBsZW5ndGggPSBwYXJzZUludChkYXRhLnBvcCgpKTtcbiAgICBpZihsZW5ndGg+MTApIHtsZW5ndGggPSAxMDt9XG4gICAgY29uZmlnLmF0dHJpYnV0ZXNbXCJzaXplXCJdID1sZW5ndGg7XG5cbiAgfVxuICAvLyBpZihrZXkgPT0gXCJpbnB1dFR5cGVJXCIpe1xuICAvLyAgIGlmKGNvbmZpZy5pbnB1dFR5cGVJID09IDQpe1xuICAvLyAgICAgY29uZmlnLmF0dHJpYnV0ZXNbXCJpbnB1dG1vZGVcIl0gPSBcIm51bWVyaWNcIjtcbiAgLy8gICB9XG4gICAgXG4gIC8vIH1cblxuICBpZiAoa2V5ID09IFwic2VwYXJhdG9yXCIpIHtcbiAgICBjb25maWcuYXR0cmlidXRlc1tcInNlcGFyYXRvclwiXSA9IGNvbmZpZy5zZXBhcmF0b3I7XG4gIH1cbiAgaWYgKGtleSA9PSBcInNlcGFyYXRvclJlcGVhdFwiKSB7XG4gICAgY29uZmlnLmF0dHJpYnV0ZXNbXCJzZXBhcmF0b3JSZXBlYXRcIl0gPSBjb25maWcuc2VwYXJhdG9yUmVwZWF0O1xuICB9XG5cbiAgaWYgKGtleSA9PSBcIm15QXR0clwiKSB7XG4gICAgY29uZmlnLmF0dHJpYnV0ZXNbXCJteUF0dHJcIl0gPSBjb25maWcubXlBdHRyO1xuICB9XG4gIGlmIChrZXkgPT0gXCJibHVyQmFja2dyb3VuZFwiICYmIGNvbmZpZy5ibHVyQmFja2dyb3VuZCl7XG4gICAgY29uZmlnLnN0eWxlW1wiYmFja2Ryb3AtZmlsdGVyXCJdID0gXCJibHVyKDNweClcIjtcbiAgfVxuICBpZiAoa2V5ID09IFwic2hhZG93XCIpIHtcbiAgICB2YXIgc2hhZG93VmFsdWVzID0gY29uZmlnLnNoYWRvdy5zcGxpdChjb25maWcuc2hhZG93U2VwYXJhdG9yIHx8ICcsJyk7XG4gICAgdmFyIHNoYWRvd0JsdXIgPSByV1MoY1Moc2hhZG93VmFsdWVzWzJdKSk7XG4gICAgdmFyIHNoYWRvd1NwcmVhZCA9IHJXUyhjUyhzaGFkb3dWYWx1ZXNbM10pKTtcbiAgICB2YXIgc2hhZG93T3BhY2l0eSA9IHJXUyhjUyhzaGFkb3dWYWx1ZXNbNV0pKTtcbiAgICB2YXIgc2hhZG93T2Zmc2V0ID0ge1xuICAgICAgICB4OiByV1MoY1Moc2hhZG93VmFsdWVzWzBdKSksXG4gICAgICAgIHk6IHJXUyhjUyhzaGFkb3dWYWx1ZXNbMV0pKVxuICAgICAgfTtcblxuICAgIHZhciBzaGFkb3dDb2xvciA9IGNvbnZlcnRDb2xvclRvUmdiYShzaGFkb3dWYWx1ZXNbNF0pO1xuICAgIHZhciBzaGFkb3dUeXBlID0gY29uZmlnLnNoYWRvd1R5cGUgPyBgJHtjb25maWcuc2hhZG93VHlwZX0gYCA6ICcnXG5cbiAgICBjb25maWdbXCJzdHlsZVwiXVtcImJveC1zaGFkb3dcIl0gPSBzaGFkb3dUeXBlICsgcGFyc2VJbnQoc2hhZG93T2Zmc2V0LngpICsgXCJweCBcIiArIHBhcnNlSW50KHNoYWRvd09mZnNldC55KSArIFwicHggXCIgKyBwYXJzZUludChzaGFkb3dCbHVyKSArIFwicHggXCIgKyBwYXJzZUludChzaGFkb3dTcHJlYWQpICsgXCJweCByZ2JhKFwiICsgc2hhZG93Q29sb3IuciArIFwiLCBcIiArICBzaGFkb3dDb2xvci5nICsgXCIsIFwiICsgIHNoYWRvd0NvbG9yLmIgKyBcIiwgXCIgKyAgc2hhZG93Q29sb3IuYSArIFwiKVwiIDtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJsaW5lSGVpZ2h0XCIpXG4gICAgY29uZmlnLnN0eWxlLmxpbmVIZWlnaHQgPSBjb25maWcubGluZUhlaWdodDtcblxuICBpZiAoa2V5ID09IFwib2JqZWN0Rml0XCIpXG4gICAgY29uZmlnLnN0eWxlLm9iamVjdEZpdCA9IGNvbmZpZy5vYmplY3RGaXQ7XG5cbiAgaWYgKGtleSA9PSBcImNsaWNrYWJsZVwiKSB7XG4gICAgY29uZmlnLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBjb25maWcuY2xpY2thYmxlID8gXCJhdXRvXCIgOiBcIm5vbmVcIjtcbiAgfVxuICBpZiAoa2V5ID09IFwiZGlzcGxheVwiKSB7XG4gICAgY29uZmlnLnN0eWxlLmRpc3BsYXkgPSBjb25maWcuZGlzcGxheVxuICB9XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRDb2xvclRvUmdiYShjb2xvcikge1xuICBjb2xvciA9IHJXUyhjUyhjb2xvcikpO1xuXG4gIHZhciB2YWx1ZXM7XG4gIHZhciBhbHBoYSA9IFwiMS4wMFwiO1xuXG4gIGlmIChjb2xvci5sZW5ndGggPj0gOCkge1xuICAgIGFscGhhID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDEsIDMpLCAxNik7XG4gICAgYWxwaGEgPSAoYWxwaGEgLyAyNTUpLnRvRml4ZWQoMik7XG4gICAgY29sb3IgPSBjb2xvci5zdWJzdHJpbmcoMywgOSk7XG4gIH0gZWxzZSB7XG4gICAgY29sb3IgPSBjb2xvci5zdWJzdHJpbmcoMSwgY29sb3IubGVuZ3RoKTtcbiAgfVxuXG4gIGNvbG9yID0gY29udmVydEhleFRvUmdiKHJXUyhjb2xvcikpO1xuICB2YWx1ZXMgPSBjb2xvci5zcGxpdCgnLCcpO1xuXG4gIHJldHVybiB7XG4gICAgcjogcGFyc2VJbnQocldTKHZhbHVlc1swXSkpLFxuICAgIGc6IHBhcnNlSW50KHJXUyh2YWx1ZXNbMV0pKSxcbiAgICBiOiBwYXJzZUludChyV1ModmFsdWVzWzJdKSksXG4gICAgYTogcGFyc2VGbG9hdChhbHBoYSlcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29udmVydEhleFRvUmdiKGhleCkge1xuICB2YXIgciA9IChwYXJzZUludChoZXguc3Vic3RyaW5nKDAsIDIpLCAxNikpLnRvRml4ZWQoMik7XG4gIHZhciBnID0gKHBhcnNlSW50KGhleC5zdWJzdHJpbmcoMiwgNCksIDE2KSkudG9GaXhlZCgyKTtcbiAgdmFyIGIgPSAocGFyc2VJbnQoaGV4LnN1YnN0cmluZyg0LCA2KSwgMTYpKS50b0ZpeGVkKDIpO1xuXG4gIHJldHVybiByICsgXCIsXCIgKyBnICsgXCIsXCIgKyBiO1xufVxuXG5mdW5jdGlvbiBjUyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyB2YWx1ZSArICcnIDogXCJcIjtcbn1cblxuZnVuY3Rpb24gcldTKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8gL2csICcnKTtcbn1cblxuZnVuY3Rpb24gc2V0RGVmYXVsdHModHlwZSwgY29uZmlnKSB7XG4gIGlmICh0eXBlID09IFwibGluZWFyTGF5b3V0XCIpIHtcbiAgICBjb25maWcub3JpZW50YXRpb24gPSBjb25maWcub3JpZW50YXRpb247XG4gIH1cbn1cbmZ1bmN0aW9uIHRoaXNfaW5saW5lQW5pbWF0aW9uKGNvbmZpZykge1xuICB2YXIgY29uPW1vZGlmeVRyYW5zbGF0aW9uKGNvbmZpZyk7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uLm5hbWUpO1xufVxuZnVuY3Rpb24gbW9kaWZ5VHJhbnNsYXRpb24oY29uZmlnKXtcbiAgdmFyIHggPSBjb25maWcueCB8fCBcIjBcIjtcbiAgdmFyIHkgPSBjb25maWcueSB8fCBcIjBcIjtcbiAgdmFyIGFuaW1hdGlvbkFycmF5ID0gSlNPTi5wYXJzZShjb25maWcuaW5saW5lQW5pbWF0aW9uKTtcbiAgdmFyIGFuaW1hdGlvbkFycmF5ID0gYW5pbWF0aW9uQXJyYXkubWFwKGZ1bmN0aW9uKGEpe1xuICAgIGlmKGEuaGFzT3duUHJvcGVydHkoXCJmcm9tWFwiKSl7XG4gICAgICBhLmZyb21YID0gcGFyc2VJbnQoYS5mcm9tWCkgKyBwYXJzZUludCh4KSArICcnO1xuICAgICAgaWYoIWEuaGFzT3duUHJvcGVydHkoXCJ0b1hcIikpe1xuICAgICAgICBhLnRvWCA9IDAgKyBwYXJzZUludCh4KSArICcnO1xuICAgICAgfVxuICAgIH1cbiAgICBpZihhLmhhc093blByb3BlcnR5KFwidG9YXCIpKXtcbiAgICAgIGEudG9YID0gcGFyc2VJbnQoYS50b1gpICsgcGFyc2VJbnQoeCkgKyAnJztcbiAgICB9XG4gICAgaWYoYS5oYXNPd25Qcm9wZXJ0eShcImZyb21ZXCIpKXtcbiAgICAgIGEuZnJvbVkgPSBwYXJzZUludChhLmZyb21ZKSArIHBhcnNlSW50KHkpICsgJyc7XG4gICAgICBpZighYS5oYXNPd25Qcm9wZXJ0eShcInRvWVwiKSl7XG4gICAgICAgIGEudG9ZID0gMCArIHBhcnNlSW50KHkpICsgJyc7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKGEuaGFzT3duUHJvcGVydHkoXCJ0b1lcIikpe1xuICAgICAgYS50b1kgPSBwYXJzZUludChhLnRvWSkgKyBwYXJzZUludCh5KSArICcnO1xuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfSlcbiAgcmV0dXJuIChhbmltYXRpb25BcnJheSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0eXBlLCBjb25maWcsIGdldFNldFR5cGUpIHtcbiAgY29uZmlnID0gZmxhdHRlbk9iamVjdChjb25maWcpO1xuICBzZXREZWZhdWx0cyh0eXBlLCBjb25maWcpO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoY29uZmlnKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoKGNvbmZpZy5zdHlsZSAmJiBjb25maWcuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSAmJiBrZXlzW2ldID09PSAnZ3Jhdml0eScpICB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgcGFyc2VMYXlvdXRQcm9wcyh0eXBlLCBjb25maWcsIGtleXNbaV0pO1xuICB9XG5cbiAgXG4gIGNvbmZpZy50cmFuc2l0aW9uID0gW1xuICAgIFN0cmluZyhjb25maWcuYV9kdXJhdGlvbiB8fCAwKSArXCJtc1wiLFxuICAgIFwiYWxsXCIsXG4gICAgY29uZmlnLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvblxuICBdXG4gICAgLmZpbHRlcihCb29sZWFuKVxuICAgIC5qb2luKFwiIFwiKTtcblxuICBpZiAoY29uZmlnLnN0eWxlLnRyYW5zZm9ybSA9PSBcIlwiKSB7XG4gICAgZGVsZXRlIGNvbmZpZy5zdHlsZS50cmFuc2Zvcm07XG4gIH1cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImlubGluZUFuaW1hdGlvblwiKSkge1xuICAgIHRoaXNfaW5saW5lQW5pbWF0aW9uKGNvbmZpZyk7XG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufSIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuICogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4gKlxuICogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4gKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuICogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuICogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiAqIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuICogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4gKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuICogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiAqL1xuXG4vKlxuIFVzZWQgdG8gaW5pdGlhbGl6ZSBkZWZhdWx0cyBmb3Igd2luZG93IGZ1bmNpb25zIGFuZCB2YXJpYWJsZXMuXG4qL1xuY29uc3QgeyBtZXJnZSB9ID0gcmVxdWlyZSgnLi9oZWxwZXInKTtcbndpbmRvdy5QcmVzdG9VSSA9IHJlcXVpcmUoXCIuL1ByZXN0b1VJSW50ZXJmYWNlXCIpO1xuXG5jb25zdCBnZXRDdXJyVGltZSA9ICgpID0+IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcblxuLy8gd2luZG93Ll9fT1MgPSBnZXRPUygpXG5pZih3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIil7XG4gICAgdmFyIGdldFNjcmVlbkRldGFpbHMgPSBmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgZGV0YWlscyA9IEpTT04ucGFyc2UoQW5kcm9pZC5nZXRTY3JlZW5EaW1lbnNpb25zKCkpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NyZWVuX3dpZHRoOiBkZXRhaWxzLndpZHRoICsgXCJcIixcbiAgICAgICAgICAgIHNjcmVlbl9oZWlnaHQ6IGRldGFpbHMuaGVpZ2h0ICsgXCJcIlxuICAgICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgXCJlcnJvciBpbiBnZXR0dGluZyBzY3JlZW4gZGltZW5zaW9ucywgc2V0dGluZyBkZWZhdWx0IHZhbHVlc1wiLCBlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzY3JlZW5fd2lkdGg6IFwiMTA4MFwiLFxuICAgICAgICAgICAgICAgIHNjcmVlbl9oZWlnaHQ6IFwiMTkyMFwiXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICB3aW5kb3cuX19ERVZJQ0VfREVUQUlMUyA9IGdldFNjcmVlbkRldGFpbHMoKTtcbn1cblxuaWYgKHdpbmRvdy5fX09TID09IFwiV0VCXCIpIHtcbiAgICB3aW5kb3cuQW5kcm9pZCA9IHJlcXVpcmUoXCIuL1dFQi9BbmRyb2lkSW50ZXJmYWNlXCIpXG4gICAgd2luZG93LkpCcmlkZ2UgPSByZXF1aXJlKFwiLi9XRUIvSkJyaWRnZUludGVyZmFjZVwiKVxufSBlbHNlIGlmICh3aW5kb3cuX19PUyA9PSBcIklPU1wiKSB7XG4gICAgd2luZG93LkFuZHJvaWQgPSByZXF1aXJlKFwiLi9JT1MvQW5kcm9pZEludGVyZmFjZVwiKVxuICAgIHdpbmRvdy5KQnJpZGdlID0gbWVyZ2Uod2luZG93LkpCcmlkZ2UsIHt9KVxufVxuXG5pZiAod2luZG93Ll9fREVWSUNFX0RFVEFJTFMgJiYgd2luZG93Ll9fREVWSUNFX0RFVEFJTFMuaGFzT3duUHJvcGVydHkoXCJzY3JlZW5fd2lkdGhcIikpIHtcbiAgICB3aW5kb3cuX19XSURUSCA9IHdpbmRvdy5fX0RFVklDRV9ERVRBSUxTLnNjcmVlbl93aWR0aDtcbn0gZWxzZSB7XG4gICAgd2luZG93Ll9fV0lEVEggPSBcIjEwODBcIjtcbn1cblxuaWYgKHdpbmRvdy5fX0RFVklDRV9ERVRBSUxTICYmIHdpbmRvdy5fX0RFVklDRV9ERVRBSUxTLmhhc093blByb3BlcnR5KFwic2NyZWVuX2hlaWdodFwiKSkge1xuICAgIHdpbmRvdy5fX0hFSUdIVCA9IHdpbmRvdy5fX0RFVklDRV9ERVRBSUxTLnNjcmVlbl9oZWlnaHQ7XG59IGVsc2Uge1xuICAgIHdpbmRvdy5fX0hFSUdIVCA9IFwiMTkyMFwiO1xufVxuXG5jb25zdCBndWlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpXG5cbi8vSW50aWFsaXppbmcgZGVmYXVsdHNcbmlmICh3aW5kb3cuX19PUyA9PSBcIldFQlwiKSB7XG4gICAgLyogQ29tcG9uZW50cyAqL1xuICAgIHdpbmRvdy5fX0NPTV9FVkVOVCA9IGZhbHNlXG4gICAgd2luZG93Ll9fQ09NX1JFTkRFUkVEID0ge1xuICAgICAgICBTV0lUQ0hfR0xPQkFMOiBmYWxzZSxcbiAgICAgICAgRFJQOiB7fSxcbiAgICAgICAgRFNCOiB7fSxcbiAgICAgICAgREI6IHt9LFxuICAgICAgICBOQVZCQVI6IHt9XG4gICAgfVxuXG4gICAgd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQID0ge1xuICAgICAgICBXUkFQUEVSOiAnUERDX2NvbV93cmFwcGVyJyxcbiAgICAgICAgTkFWQkFSOiAnUERDX2NvbV9uYXZiYXInLFxuICAgICAgICBOQVZCQVJfSVRFTTogJ1BEQ19jb21fbmF2YmFyX2l0ZW0nLFxuICAgICAgICBOQVZCQVJfSVRFTV9XSVRIX1NVQjogJ1BEQ19jb21fbmF2YmFyX2hhc19zdWInLFxuICAgICAgICBOQVZCQVJfU1VCOiAnUERDX2NvbV9uYXZiYXJfc3ViJyxcbiAgICAgICAgTkFWQkFSX1NVQl9SSUdIVDogJ1BEQ19jb21fbmF2YmFyX3N1Yl9yaWdodCcsXG4gICAgICAgIE5BVkJBUl9TVUJfSVRFTTogJ1BEQ19jb21fbmF2YmFyX3N1Yml0ZW0nLFxuICAgICAgICBEUlA6ICdQRENfY29tX2RycCcsXG4gICAgICAgIERSUF9CT0RZOiAnUERDX2NvbV9kcnBfYm9keScsXG4gICAgICAgIERCOiAnUERDX2NvbV9kYicsXG4gICAgICAgIERCX0ZVTExfQk9EWTogJ1BEQ19jb21fZGJfZnVsbF9ib2R5JyxcbiAgICAgICAgREJfQk9EWTogJ1BEQ19jb21fZGJfYm9keScsXG4gICAgICAgIERCX09QVElPTlM6ICdQRENfY29tX2RiX29wdGlvbnMnLFxuICAgICAgICBEQl9PUFRJT046ICdQRENfY29tX2RiX29wdGlvbicsXG4gICAgICAgIERTQjogJ1BEQ19jb21fZHNiJyxcbiAgICAgICAgRFNCX0ZVTExfQk9EWTogJ1BEQ19jb21fZHNiX2Z1bGxfYm9keScsXG4gICAgICAgIERTQl9CT0RZOiAnUERDX2NvbV9kc2JfYm9keScsXG4gICAgICAgIERTQl9PUFRJT05TOiAnUERDX2NvbV9kc2Jfb3B0aW9ucycsXG4gICAgICAgIERTQl9PUFRJT046ICdQRENfY29tX2RzYl9vcHRpb24nLFxuICAgICAgICBEU0JfU0VBUkNIX1dSQVA6ICdQRENfY29tX2RzYl9zZWFyY2hfd3JhcCcsXG4gICAgICAgIERTQl9TRUFSQ0g6ICdQRENfY29tX2RzYl9zZWFyY2gnLFxuICAgICAgICBTV0lUQ0g6ICdQRENfY29tX3N3aXRjaCcsXG4gICAgICAgIFNXSVRDSF9CT0RZOiAnUERDX2NvbV9zd2l0Y2hfYm9keScsXG4gICAgICAgIFNXSVRDSF9TTElERVI6ICdQRENfY29tX3N3aXRjaF9zbGlkZXInLFxuICAgICAgICBCVDogJ1BEQ19jb21fYnQnLFxuICAgICAgICBCVF9ESVNBQkxFRDogJ1BEQ19jb21fYnRfZGlzYWJsZWQnXG4gICAgfVxuICAgIHdpbmRvdy5fX0NPTV9DT0xPUl9HUk9VUCA9IHtcbiAgICAgICAgQkc6ICcjZmZmZmZmJyxcbiAgICAgICAgQUNUSVZFX0JHOiAnI0VFRjFGOCcsXG4gICAgICAgIEFDVElWRV9DT0xPUjogJ3JnYig1MywgNjQsIDgyKScsXG4gICAgICAgIElOQUNUSVZFX0NPTE9SOiAncmdiYSg1MywgNjQsIDgyLCAwLjUpJyxcbiAgICAgICAgQk9SREVSX0NPTE9SOiAnI0EzQUZDMicsXG4gICAgICAgIEFDVElWRV9CT1JERVJfQ09MT1I6ICcjNzA3ODg2JyxcbiAgICAgICAgU0VBUkNIX0NPTE9SOiAnI2RkZGRkZCcsXG4gICAgICAgIElOQUNUSVZFX1NXSVRDSDogJyNCN0RCQkMnLFxuICAgICAgICBBQ1RJVkVfU1dJVENIOiAnIzM2QUY0NycsXG4gICAgICAgIEJUX0JPUkRFUl9DT0xPUjogJyMxNTg1RDgnLFxuICAgICAgICBCVF9CR19DT0xPUjogJyMxOTkxRUInLFxuICAgICAgICBCVF9DT0xPUjogJyNmZmZmZmYnXG4gICAgfVxuICAgIHdpbmRvdy5fX0NPTV9BQ1RJVkUgPSB7XG4gICAgICAgIERTQjogJycsXG4gICAgICAgIE5BVkJBUjogJycsXG4gICAgICAgIERCOiAnJ1xuICAgIH1cbiAgICAvKiBDb21wb25lbnRzIEVuZCAqL1xuXG4gICAgLyogTW9kYWwgKi9cbiAgICB3aW5kb3cuX19TVFlMRV9JRCA9ICdzdHlsZV8nICsgZ3VpZFxuICAgIHdpbmRvdy5fX1JFTkRFUkVEX0tFWUZSQU1FUyA9IFtdXG4gICAgd2luZG93Ll9fTU9EQUxfUFJPUFMgPSB7fVxuICAgIHdpbmRvdy5fX0NPTlRFTlRNT0RBTF9DTEFTUyA9ICdQRENfbW9kYWwnXG4gICAgd2luZG93Ll9fT1BFTk1PREFMX0NMQVNTID0gJ1BEQ19tb2RhbC1vcGVuJ1xuICAgIHdpbmRvdy5fX0JBQ0tEUk9QTU9EQUxfQ0xBU1MgPSAnUERDX21vZGFsLWJhY2tkcm9wJ1xuICAgIHdpbmRvdy5fX0RJU0FCTEVEQkFDS0RST1BfQ0xBU1MgPSAnUERDX21vZGFsLWJhY2tkcm9wLWRpc2FibGVkJ1xuICAgIHdpbmRvdy5fX1NIT1dOTU9EQUxfQ0xBU1MgPSAnUERDX21vZGFsLXNob3duJ1xuICAgIHdpbmRvdy5fX0ZBREVNT0RBTF9DTEFTUyA9ICdQRENfbW9kYWwtZmFkZSdcbiAgICB3aW5kb3cuX19TTElERU1PREFMX0NMQVNTID0gJ1BEQ19tb2RhbC1zbGlkZSdcbiAgICAvKiBNb2RhbCBFbmQgKi9cblxuICAgIHdpbmRvdy5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgJiZcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMod2luZG93Ll9fQkFDS0RST1BNT0RBTF9DTEFTUykgJiZcbiAgICAgICAgICAgICFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHdpbmRvdy5fX0RJU0FCTEVEQkFDS0RST1BfQ0xBU1MpXG4gICAgICAgICkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKHdpbmRvdy5fX09QRU5NT0RBTF9DTEFTUyk7XG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSh3aW5kb3cuX19TSE9XTk1PREFMX0NMQVNTKTtcblxuICAgICAgICAgICAgbGV0IGlkID0gZXZlbnQudGFyZ2V0LmlkO1xuICAgICAgICAgICAgaWQgPSBpZC5yZXBsYWNlKHdpbmRvdy5fX0JBQ0tEUk9QTU9EQUxfQ0xBU1MgKyAnXycsICcnKTtcblxuICAgICAgICAgICAgbGV0IHZpZXcgPSBfX1ZJRVdTW2lkXTtcbiAgICAgICAgICAgIGlmICh2aWV3ICYmIHZpZXcucHJvcHMub25EaXNtaXNzICYmIHR5cGVvZiB2aWV3LnByb3BzLm9uRGlzbWlzcyA9PVxuICAgICAgICAgICAgICAgIFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHZpZXcucHJvcHMub25EaXNtaXNzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkdWlTaG93U2NyZWVuID0gKGNhbGxiYWNrLCBzdGF0ZSkgPT4ge1xuICAgICAgICBsZXQgcG9wdXBNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBvcHVwTWVudVwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3B1cE1lbnUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBvcHVwTWVudVtpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5fX2R1aVNob3dTY3JlZW4gPSBkdWlTaG93U2NyZWVuO1xuXG59IGVsc2UgaWYgKHdpbmRvdy5fX09TID09IFwiSU9TXCIpIHtcbiAgICB3aW5kb3cuX19DT0xPUl9JTkRFWCA9IHdpbmRvdy5fX0NPTE9SX0lOREVYIHx8IDE7XG4gICAgd2luZG93Ll9fRk9OVF9JTkRFWCA9IHdpbmRvdy5fX0ZPTlRfSU5ERVggfHwgMTtcbiAgICB3aW5kb3cuX19SRUNUX0lOREVYID0gd2luZG93LlJFQ1RfSU5ERVggfHwgMTtcbiAgICB3aW5kb3cuX19WSUVXX0lOREVYID0gd2luZG93Ll9fVklFV19JTkRFWCB8fCAxO1xuICAgIHdpbmRvdy5fX0lNQUdFX0lOREVYID0gd2luZG93Ll9fSU1BR0VfSU5ERVggfHwgMTtcbiAgICB3aW5kb3cuX19QT0lOVF9JTkRFWCA9IHdpbmRvdy5fX1BPSU5UX0lOREVYIHx8IDE7XG4gICAgd2luZG93Ll9fTEFZRVJfSU5ERVggPSB3aW5kb3cuX19MQVlFUl9JTkRFWCB8fCAxO1xuICAgIHdpbmRvdy5fX1NJWkVfSU5ERVggPSB3aW5kb3cuX19TSVpFX0lOREVYIHx8IDE7XG59IGVsc2Uge1xuICAgIC8vVGhpcyB3b3VsZCBiZSBjYXNlIGZvciBhbmRyb2lkXG4gICAgd2luZG93Ll9fRk5fTUFQID0ge307XG4gICAgd2luZG93Ll9fQUxMX09OQ0xJQ0tTID0gW107XG59XG5cbndpbmRvdy5fX0lEID0gMTtcbndpbmRvdy5fX05PREVfSUQgPSAxO1xud2luZG93Ll9fU0NSRUVOX0lOREVYID0gLTE7XG5cbndpbmRvdy5fX1BST1hZX0ZOID0ge307XG53aW5kb3cuX19GTl9JTkRFWCA9IDA7XG53aW5kb3cuX19ST09UU0NSRUVOID0gbnVsbDtcbndpbmRvdy5fX0NBQ0hFRF9TQ1JFRU5TID0ge307XG53aW5kb3cuX19TQ1JFRU5fQ09VTlQgPSAwO1xud2luZG93Ll9fQ1VSUl9TQ1JFRU4gPSBudWxsO1xud2luZG93Ll9fUFJFVl9TQ1JFRU4gPSBudWxsO1xud2luZG93Ll9fQU5JTUFURV9ESVIgPSBudWxsO1xud2luZG93Ll9fU0NSRUVOX1NUQUNLID0gW107XG53aW5kb3cuX19MQVNUX0ZOX0NBTExFRCA9IG51bGw7XG53aW5kb3cuX19USFJPVFRFTEVEX0FDVElPTlMgPSBbXTtcbndpbmRvdy5fX1ZJRVdTID0ge307XG53aW5kb3cuX19WSUVXX0RJTUVOU0lPTlMgPSB7fTtcbndpbmRvdy5fX09CU0VSVkVSUyA9IHt9O1xud2luZG93LlpJbmRleCA9IDA7XG5cbndpbmRvdy5jYWxsVUlDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYXJncyA9IChhcmd1bWVudHMubGVuZ3RoID09PSAxID8gW2FyZ3VtZW50c1swXV0gOiBBcnJheS5hcHBseShudWxsLFxuICAgICAgICBhcmd1bWVudHMpKTtcbiAgICB2YXIgZk5hbWUgPSBhcmdzWzBdXG4gICAgdmFyIGZ1bmN0aW9uQXJncyA9IGFyZ3Muc2xpY2UoMSlcbiAgICB2YXIgY3VyclRpbWU7XG4gICAgdmFyIHRpbWVEaWZmO1xuICAgIFxuICAgIGlmICh3aW5kb3cuX19BTExfT05DTElDS1MgJiYgd2luZG93Ll9fQUxMX09OQ0xJQ0tTLmluZGV4T2YoZk5hbWUpICE9IC0xICYmIGFyZ3NbMl0gPT0gXCJmZWVkYmFja1wiICYmIEpCcmlkZ2UgJiYgSkJyaWRnZS5zZXRDbGlja0ZlZWRiYWNrKSB7XG4gICAgICAgIHJldHVybiBKQnJpZGdlLnNldENsaWNrRmVlZGJhY2soYXJnc1sxXSk7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5fX1RIUk9UVEVMRURfQUNUSU9OUyAmJiB3aW5kb3cuX19USFJPVFRFTEVEX0FDVElPTlMuaW5kZXhPZihmTmFtZSkgPT0gLTEpIHtcbiAgICAgICAgd2luZG93Ll9fUFJPWFlfRk5bZk5hbWVdLmFwcGx5KG51bGwsIGZ1bmN0aW9uQXJncyk7XG4gICAgfSBlbHNlIGlmICh3aW5kb3cuX19MQVNUX0ZOX0NBTExFRCAmJiAoZk5hbWUgPT0gd2luZG93Ll9fTEFTVF9GTl9DQUxMRUQuZk5hbWUpKSB7XG4gICAgICAgIGN1cnJUaW1lID0gZ2V0Q3VyclRpbWUoKTtcbiAgICAgICAgdGltZURpZmYgPSBjdXJyVGltZSAtIHdpbmRvdy5fX0xBU1RfRk5fQ0FMTEVELnRpbWVTdGFtcDtcblxuICAgICAgICBpZiAodGltZURpZmYgPj0gMzAwKSB7XG4gICAgICAgICAgICB3aW5kb3cuX19QUk9YWV9GTltmTmFtZV0uYXBwbHkobnVsbCwgZnVuY3Rpb25BcmdzKTtcbiAgICAgICAgICAgIHdpbmRvdy5fX0xBU1RfRk5fQ0FMTEVELnRpbWVTdGFtcCA9IGN1cnJUaW1lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiZnVuY3Rpb24gdGhyb3R0ZWxlZFwiLCBmTmFtZSk7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJ0aW1lIGRpZmZcIiwgdGltZURpZmYpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93Ll9fUFJPWFlfRk5bZk5hbWVdLmFwcGx5KG51bGwsIGZ1bmN0aW9uQXJncyk7XG4gICAgICAgIHdpbmRvdy5fX0xBU1RfRk5fQ0FMTEVEID0ge1xuICAgICAgICAgICAgdGltZVN0YW1wOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgZk5hbWU6IGZOYW1lXG4gICAgICAgIH1cbiAgICB9XG59OyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBOzs7Ozs7Ozs7OztBQ3pCQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdlZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdFJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFFQSxtQkFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBT0EsbUJBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFFQTtBQUNBO0FBQ0E7QUFDQSxlQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQU9BO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7Ozs7Ozs7Ozs7Ozs7O0FDalNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBO0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RiQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFnQkE7QUFDQTtBQUNBO0FBQUE7QUFsQkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUF3QkE7QUFDQTtBQUNBO0FBM0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBNVFBOzs7Ozs7Ozs7Ozs7OztBQzlEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQTtBQURBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFUQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBO0FBQ0E7QUFRQTtBQUFBO0FBWUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE5QkE7QUFnQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUJBO0FBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0JBO0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOzs7Ozs7Ozs7Ozs7OztBQ3QzQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBVEE7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7QUFFQTtBQUNBO0FBRUE7QUFFQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7QUNuT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5EQTtBQUNBO0FBcURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7QUM5SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7QUN4TEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQSxlQUVBO0FBQ0E7QUFDQSxXQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25DQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLDhEQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTs7Ozs7Ozs7Ozs7Ozs7QUMxS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQURBO0FBQ0E7QUFJQSxhQUVBO0FBRUE7QUFDQSxTQUdBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM1ckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBOzs7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLG9DQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFCQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLFNBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=