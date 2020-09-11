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
  var parentElem = document.getElementById(id);
  var parentView = window.__VIEWS[id];
  var siblingView = null;

  if (!parentElem || !parentView) return;

  parentView.children.splice(index, 0, view);

  if (index == 0) siblingView = parentView;else siblingView = parentView.children[index - 1];

  inflateView(view, parentElem, siblingView);

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
var qsstringify = __webpack_require__(/*! qs/lib/stringify */ "./node_modules/qs/lib/stringify.js");

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
    try {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url, false); // third parameter of `false` means synchronous
      xhr.send(JSON.stringify({ data: data }));
    } catch (err) {
      //
    }
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
              return fetch(url, { method: method, body: data, headers: headers });

            case 8:
              resp = _context.sent;
              _context.next = 11;
              return resp.json();

            case 11:
              json = _context.sent;

              window.callUICallback(callback, "success", btoa(JSON.stringify(json)), resp.status);
              _context.next = 19;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](5);

              console.log("ERR", _context.t0);
              window.callUICallback(callback, "failure", btoa("{}"), 50);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[5, 15]]);
    }));

    function callAPI(_x, _x2, _x3, _x4, _x5, _x6) {
      return _ref.apply(this, arguments);
    }

    return callAPI;
  }(),

  getFromSharedPrefs: function getFromSharedPrefs(key) {
    return localStorage.getItem(key) || "__failed";
  },

  setInSharedPrefs: function setInSharedPrefs(key, value) {
    localStorage.setItem(key, value);
  },

  viewPagerAdapter: function viewPagerAdapter(id, jsx, tabJsx, cb) {
    ViewPageAdapter.createTabs(id, jsx, tabJsx, cb);
  },

  switchToViewPagerIndex: function switchToViewPagerIndex(index) {
    ViewPageAdapter.toggleView(index);
  },

  getKey: function getKey(key, defaultValue) {
    return localStorage.getItem(key) || defaultValue;
  },

  setKey: function setKey(key, value) {
    return localStorage.setItem(key, value);
  },

  getResourceByName: function getResourceByName(tag) {
    return -1;
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
    sendAnalytics(logsArr);
  },
  saveToLocal: function saveToLocal(a, b, c) {
    try {
      window.localStorage.removeItem("defOptionType");
      window.localStorage.removeItem("defOption");
      window.localStorage.removeItem("merchant");
    } catch (e) {}
    window.localStorage.setItem('defOptionType', a);
    window.localStorage.setItem('defOption', JSON.stringify(b));
    window.localStorage.setItem('merchant', JSON.stringify(c));
  },
  deleteFromLocal: function deleteFromLocal() {},
  loadFromLocal: function loadFromLocal(key) {
    if (window.localStorage.getItem(key) == undefined) return "";
    try {
      var a = JSON.parse(window.localStorage.getItem(key));
      if (a == undefined) return "";
      return a;
    } catch (e) {
      return window.localStorage.getItem(key);
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
                    // elem.style.height = 'auto';
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
                input.selectionStart = cursorPosition;
                input.selectionEnd = cursorPosition;
                console.log("formattedString----", formattedString);
            } else {
                input.oldValidValue = finalData;
            }
        }
    } catch (err) {
        console.error(err);
    }
}
function setAttributes(type, elem, props, firstRender) {
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

                if (!imageUrl.includes("data:image/svg+xml") && !exts.includes(ext)) {
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
            if (props.autofocus) {
                elem.focus();
            }
            elem.addEventListener('input', separatorInputKeyDownHandler);
        }

        var events = ['onClick', 'onEnterPressedEvent', 'onChange', 'onMouseDown', 'onMouseUp', 'onMouseEnter', 'onMouseOver', 'onMouseMove', 'onMouseOut', 'onMouseLeave', 'onFocus'];

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
                        elem.addEventListener('keyup', function (e) {
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
};var inflateView = function inflateView(view, parentElement, siblingView, stopChild, stopObserver, renderStyle) {
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
        } else elem = document.createElement(view.elName || "div");

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

        if (parentElement) {
            var siblingElement = siblingView ? document.getElementById(siblingView.props.id) : null;

            if (siblingElement && siblingElement != undefined) {
                if (parentElement == siblingElement) {
                    // Prepend
                    if (subElem) {
                        parentElement.prepend(subElem);
                    }
                    parentElement.prepend(elem);
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

/***/ "./src/helpers/android/index.js":
/*!**************************************!*\
  !*** ./src/helpers/android/index.js ***!
  \**************************************/
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
	parseParams: __webpack_require__(/*! ./parseParams */ "./src/helpers/android/parseParams.js"),
	mapPrams: __webpack_require__(/*! ./mapParams */ "./src/helpers/android/mapParams.js"),
	callbackMapper: __webpack_require__(/*! ../common/callbackMapper */ "./src/helpers/common/callbackMapper.js")
};

/***/ }),

/***/ "./src/helpers/android/mapParams.js":
/*!******************************************!*\
  !*** ./src/helpers/android/mapParams.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ref, _ref2, _map;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var map = (_map = {
  textFromHtml: {
    values: [{
      type: 's'
    }],
    dontMap: 'true',
    fnName: 'setText',
    inVokedIn: 'VIEW'
  },
  baseAlign: {
    values: [{
      type: 'b'
    }],
    dontMap: true,
    inVokedIn: 'VIEW',
    fnName: "setBaselineAligned"
  },
  showDividers: {
    values: [{
      type: 'i'
    }],
    dontMap: 'true',
    fnName: 'setShowDividers',
    inVokedIn: 'VIEW'
  },
  "dividerDrawable": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setDividerDrawable',
    inVokedIn: 'VIEW'
  },
  tabTextColors: {
    values: [{
      type: 's'
    }, {
      type: 's'
    }],
    dontMap: true,
    inVokedIn: 'VIEW',
    fnName: 'setTabTextColors'
  },
  "selectedTabIndicatorHeight": {
    values: [{
      type: 'i'
    }],
    'dontMap': true,
    fnName: 'setSelectedTabIndicatorHeight',
    inVokedIn: 'VIEW'
  },
  foreground: {
    values: [{
      type: 'b'
    }],
    dontMap: 'true',
    fnName: 'setColor',
    inVokedIn: 'FOREGROUND'
  },
  selectedTabIndicatorColor: {
    values: [{
      type: 's'
    }],
    dontMap: true,
    fnName: 'setSelectedTabIndicatorColor',
    inVokedIn: 'VIEW'
  },
  layoutTransition: {
    values: [{
      type: 'b'
    }],
    dontMap: 'true',
    fnName: 'setLayoutTransition',
    inVokedIn: 'LAYOUT_TRANSITION'
  },

  focusOut: { // doesnt work
    dontMap: 'true',
    fnName: 'clearFocus',
    inVokedIn: 'VIEW'
  },
  focus: {
    dontMap: 'true',
    fnName: 'requestFocus',
    inVokedIn: 'VIEW'
  },

  fillViewport: {
    values: [{
      type: 'b'
    }],
    dontMap: true,
    inVokedIn: 'VIEW',
    fnName: "setFillViewport"
  },
  "primitive": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setPrimitive',
    inVokedIn: 'VIEW'
  },
  "cx": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setCx',
    inVokedIn: 'VIEW'
  },
  "cy": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setCy',
    inVokedIn: 'VIEW'
  },
  "radius": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setRadius',
    inVokedIn: 'VIEW'
  },
  "hex": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setColor',
    inVokedIn: 'VIEW'
  },
  "style": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setStyle',
    inVokedIn: 'VIEW'
  },
  "sweepAngle": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setSweepAngle',
    inVokedIn: 'VIEW'
  },
  "startAngle": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setStartAngle',
    inVokedIn: 'VIEW'
  },
  "strokeWidth": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setStrokeWidth',
    inVokedIn: 'VIEW'
  },
  setDate: {
    values: [{
      type: 'l'
    }],
    dontMap: 'true',
    fnName: 'setDate',
    inVokedIn: 'VIEW'
  },
  minDate: {
    values: [{
      type: 'l'
    }],
    dontMap: 'true',
    fnName: 'setMinDate',
    inVokedIn: 'VIEW'
  },
  maxDate: {
    values: [{
      type: 'l'
    }],
    dontMap: 'true',
    fnName: 'setMaxDate',
    inVokedIn: 'VIEW'
  },
  clipChildren: {
    values: [{
      type: 'b'
    }],
    dontMap: 'true',
    fnName: 'setClipChildren',
    inVokedIn: 'VIEW'
  },
  adjustViewBounds: {
    values: [{
      type: 'b'
    }],
    dontMap: 'true',
    fnName: 'setAdjustViewBounds',
    inVokedIn: 'VIEW'
  },
  maxLines: {
    values: [{
      type: 'i'
    }],
    dontMap: 'true',
    fnName: 'setMaxLines',
    inVokedIn: 'VIEW'
  },
  singleLine: {
    values: [{
      type: 'b'
    }],
    dontMap: 'true',
    fnName: 'setSingleLine',
    inVokedIn: 'VIEW'
  },
  hardware: {
    values: [{
      type: 'i'
    }, {
      type: 'i'
    }],
    dontMap: true,
    fnName: 'setLayerType',
    inVokedIn: 'VIEW'
  },
  selected: {
    values: [{
      type: 'b'
    }],
    dontMap: true,
    fnName: 'setSelected',
    inVokedIn: 'VIEW'
  },
  curve: {
    values: [{
      type: 's',
      'linear': "0"
    }],
    fnName: 'setInterpolator',
    inVokedIn: 'VIEW'
  },
  fontFamily: {
    values: [{
      type: 's',
      dontMap: true
    }, {
      type: 'i',
      'normal': 0,
      'bold': 1,
      'italic': 2,
      'bold_italic': 3
    }],
    fnName: 'setFontFamily',
    inVokedIn: 'VIEW'
  },
  x: {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setX',
    inVokedIn: 'VIEW'
  },
  'bringToFront': {
    values: [],
    inVokedIn: 'VIEW',
    fnName: "bringToFront"
  },
  'above': {
    values: [{
      type: 'i',
      dontMap: true
    }, {
      type: 'i',
      dontMap: true
    }],
    inVokedIn: 'PARAMS',
    fnName: "addRule"
  },
  "checked": {
    values: [{
      type: 'b'
    }],
    'dontMap': true,
    fnName: 'setChecked',
    inVokedIn: 'VIEW'
  },
  y: {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setY',
    inVokedIn: 'VIEW'
  },
  "backgroundDrawable": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setBackground',
    inVokedIn: 'VIEW'
  },
  buttonTint: {
    value: [{
      type: 's'
    }],
    dontMap: true,
    fnName: 'setButtonTintList',
    inVokedIn: 'VIEW'
  },
  visibility: {
    values: [{
      type: 'i',
      visible: 0,
      invisible: 4,
      gone: 8
    }],
    fnName: 'setVisibility',
    inVokedIn: 'VIEW'
  },
  "scaleType": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setScaleType',
    inVokedIn: 'VIEW'
  },
  "progressColor": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setIndeterminateTintList',
    inVokedIn: 'VIEW'
  },
  "alpha": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setAlpha',
    inVokedIn: 'VIEW'
  },
  "imageUrl": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setImageDrawable',
    inVokedIn: 'VIEW'
  },
  "placeHolder": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setImageDrawable',
    inVokedIn: 'VIEW'
  },
  "packageIcon": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setImageDrawable',
    inVokedIn: 'VIEW'
  },
  "scrollTo": {
    values: [{
      type: 'i'
    }, {
      type: 'i'
    }],
    'dontMap': true,
    fnName: 'smoothScrollTo',
    inVokedIn: 'VIEW'
  },
  "cornerRadii": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setCornerRadii',
    inVokedIn: 'DRAWABLE'
  },
  "lineSpacing": {
    values: [{
      type: 'dp'
    }, {
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setLineSpacing',
    inVokedIn: 'VIEW'
  },
  "url": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'loadUrl',
    inVokedIn: 'VIEW'
  },
  "translationY": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setTranslationY',
    inVokedIn: 'VIEW'
  },
  "translationX": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setTranslationX',
    inVokedIn: 'VIEW'
  },
  translationZ: {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setTranslationZ',
    inVokedIn: 'VIEW'
  },
  "delay": {
    values: [{
      type: 'l'
    }],
    'dontMap': true,
    fnName: 'setStartDelay'
  },
  "duration": {
    values: [{
      type: 'l'
    }],
    'dontMap': true,
    fnName: 'setDuration'
  },
  "pivotX": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setPivotX',
    inVokedIn: 'VIEW'
  },
  "pivotY": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setPivotY',
    inVokedIn: 'VIEW'
  },
  "minWidth": {
    values: [{
      type: 'i'
    }],
    'dontMap': true,
    fnName: 'setMinimumWidth',
    inVokedIn: 'VIEW'
  },
  "minHeight": {
    values: [{
      type: 'i'
    }],
    'dontMap': true,
    fnName: 'setMinimumHeight',
    inVokedIn: 'VIEW'
  },
  "maxWidth": {
    values: [{
      type: 'i'
    }],
    'dontMap': true,
    fnName: 'setMaxWidth',
    inVokedIn: 'VIEW'
  },
  "shadowTag": {
    values: [{
      type: 'cs'
    }],
    'dontMap': true,
    fnName: 'shadowTag',
    inVokedIn: 'VIEW'
  },
  "androidShadow": {
    values: [{
      type: 'cs'
    }],
    'dontMap': true,
    fnName: 'androidShadow',
    inVokedIn: 'VIEW'
  },
  "gradient": {
    values: [{
      type: 'cs'
    }],
    'dontMap': true,
    fnName: 'setColors',
    inVokedIn: 'DRAWABLE'
  },
  "gradientAngle": {
    values: [{
      type: 's'
    }],
    'dontMap': true,
    fnName: 'setOrientation',
    inVokedIn: 'DRAWABLE'
  },
  "lineHeight": {
    values: [{
      type: 'dp'
    }],
    'dontMap': true,
    fnName: 'setLineHeight',
    inVokedIn: 'VIEW'
  },
  "letterSpacing": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setLetterSpacing',
    inVokedIn: 'VIEW'
  },
  "hint": {
    values: [{
      type: 'cs'
    }],
    'dontMap': true,
    fnName: 'setHint',
    inVokedIn: 'VIEW'
  },
  "inputType": {
    values: [{
      type: 'i',
      password: '129',
      numeric: '2',
      numericPassword: '18',
      numericWithoutSuggestion: '524291',
      disabled: '0',
      text: '1',
      multiText: '3'
    }],
    fnName: 'setInputType',
    inVokedIn: 'VIEW'
  },
  "inputTypeI": {
    values: [{
      type: 'i'
    }],
    'dontMap': true,
    fnName: 'setInputType',
    inVokedIn: 'VIEW'
  },
  "textSize": {
    values: [{
      type: 'i'
    }, {
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setTextSize',
    inVokedIn: 'VIEW'
  },
  "fontSize": {
    values: [{
      type: 'i'
    }, {
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setTextSize',
    inVokedIn: 'VIEW'
  },
  "textIsSelectable": {
    values: [{
      type: 'b'
    }],
    'dontMap': true,
    fnName: 'setTextIsSelectable',
    inVokedIn: 'VIEW'
  },
  "fontStyle": {
    values: [{
      type: 's'
    }],
    dontMap: 'true',
    fnName: 'setTypeface',
    inVokedIn: 'VIEW'
  },
  "textAllCaps": {
    values: [{
      type: 'b'
    }],
    'dontMap': true,
    fnName: 'setAllCaps',
    inVokedIn: 'VIEW'
  },
  "expand": {
    values: [{
      type: 'b'
    }],
    'dontMap': true,
    fnName: 'setExpand',
    inVokedIn: 'VIEW'
  },
  "focusableInTouchMode": {
    values: [{
      type: 'b'
    }],
    'dontMap': true,
    fnName: 'setFocusableInTouchMode',
    inVokedIn: 'VIEW'
  },
  "descendantFocusability": {
    values: [{
      type: 'i'
    }],
    'dontMap': true,
    fnName: 'setDescendantFocusability',
    inVokedIn: 'VIEW'
  },
  "expandDuration": {
    values: [{
      type: 'i'
    }],
    'dontMap': true,
    fnName: 'setExpandDuration',
    inVokedIn: 'VIEW'
  },
  "expandScrollParent": {
    values: [{
      type: 'i'
    }],
    'dontMap': true,
    fnName: 'setScrollParent',
    inVokedIn: 'VIEW'
  },
  "expandAlpha": {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setExpandAlpha',
    inVokedIn: 'VIEW'
  },
  "defaultExpand": {
    values: [{
      type: 'b'
    }],
    'dontMap': true,
    fnName: 'setDefaultExpand',
    inVokedIn: 'VIEW'
  },
  "swypeEnabled": {
    values: [{
      type: 'b'
    }],
    'dontMap': true,
    fnName: 'setSwypeEnabled',
    inVokedIn: 'VIEW'
  },
  toast: {
    values: [{
      type: 'cs'
    }],
    'dontMap': true,
    fnName: 'showToast',
    inVokedIn: 'CONTEXT'
  },
  scaleX: {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setScaleX',
    inVokedIn: 'VIEW'
  },
  scaleY: {
    values: [{
      type: 'f'
    }],
    'dontMap': true,
    fnName: 'setScaleY',
    inVokedIn: 'VIEW'
  },
  id: {
    values: [{
      type: 'i'
    }],
    'dontMap': true,
    fnName: 'setId',
    inVokedIn: 'VIEW'
  },
  gravity: {
    values: [(_ref = {
      type: 'i',
      center_horizontal: 1,
      center_vertical: 16,
      bottom: 80,
      left: 8388611,
      right: 8388613,
      center: 17
    }, _defineProperty(_ref, 'bottom', 80), _defineProperty(_ref, 'top_vertical', 48), _defineProperty(_ref, 'start', 8388611), _defineProperty(_ref, 'end', 8388613), _ref)],
    fnName: 'setGravity',
    inVokedIn: 'VIEW'
  },
  orientation: {
    values: [{
      type: 'i',
      horizontal: 0,
      vertical: 1
    }],
    fnName: 'setOrientation',
    inVokedIn: 'VIEW'
  },
  text: {
    values: [{
      type: 'cs'
    }],
    dontMap: true,
    fnName: 'setText',
    inVokedIn: 'VIEW'
  },
  width: {
    values: [{
      type: 'i',
      match_parent: -1,
      wrap_content: -2
    }],
    inVokedIn: 'PARAMS',
    ctr: true,
    varName: 'var_width'
  },
  weight: {
    values: [{
      type: 'f',
      match_parent: -1,
      wrap_content: -2
    }],
    dontMap: true,
    inVokedIn: 'PARAMS',
    varName: 'var_weight'
  },
  height: {
    values: [{
      type: 'i',
      match_parent: -1,
      wrap_content: -2
    }],
    inVokedIn: 'PARAMS',
    ctr: true,
    varName: 'var_height'
  },
  layout_gravity: {
    values: [(_ref2 = {
      type: 'i',
      bottom_right: 21,
      top: 30,
      bottom: 50,
      left: 3,
      right: 5,
      center: 17
    }, _defineProperty(_ref2, 'bottom', 80), _defineProperty(_ref2, 'center_horizontal', 1), _defineProperty(_ref2, 'center_vertical', 16), _defineProperty(_ref2, 'start', 8388611), _defineProperty(_ref2, 'end', 8388613), _ref2)],
    inVokedIn: 'PARAMS',
    varName: "var_gravity"
  },
  margin: {
    values: [{
      type: 'dp'
    }, {
      type: 'dp'
    }, {
      type: 'dp'
    }, {
      type: 'dp'
    }],
    dontMap: true,
    inVokedIn: 'PARAMS',
    fnName: "setMargins"
  },
  marginStart: {
    values: [{
      type: 'dp'
    }],
    dontMap: true,
    inVokedIn: 'PARAMS',
    fnName: "setMarginStart"
  },
  marginEnd: {
    values: [{
      type: 'dp'
    }],
    dontMap: true,
    inVokedIn: 'PARAMS',
    fnName: "setMarginEnd"
  },
  padding: {
    values: [{
      type: 'dp'
    }, {
      type: 'dp'
    }, {
      type: 'dp'
    }, {
      type: 'dp'
    }],
    dontMap: true,
    inVokedIn: 'VIEW',
    fnName: "setPaddingRelative"
  },
  'centerInParent': {
    values: [{
      type: 'i',
      'true': 13,
      'false': 12121
    }, {
      type: 'i',
      dontMap: true
    }],
    inVokedIn: 'PARAMS',
    fnName: "addRule"
  },
  'centerHorizontal': {
    values: [{
      type: 'i',
      'true': 14,
      'false': 12121
    }, {
      type: 'i',
      dontMap: true
    }],
    inVokedIn: 'PARAMS',
    fnName: "addRule"
  },
  'centerVertical': {
    values: [{
      type: 'i',
      'true': 15,
      'false': 12121
    }, {
      type: 'i',
      dontMap: true
    }],
    inVokedIn: 'PARAMS',
    fnName: "addRule"
  }
}, _defineProperty(_map, 'checked', {
  values: [{
    type: 'b'
  }],
  'dontMap': true,
  fnName: 'setChecked',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, 'alignParentBottom', {
  values: [{
    type: 'i',
    'true': 12,
    'false': 12121
  }, {
    type: 'i',
    dontMap: true
  }],
  inVokedIn: 'PARAMS',
  fnName: "addRule"
}), _defineProperty(_map, 'alignParentTop', {
  values: [{
    type: 'i',
    'true': 10,
    'false': 12121
  }, {
    type: 'i',
    dontMap: true
  }],
  inVokedIn: 'PARAMS',
  fnName: "addRule"
}), _defineProperty(_map, 'alignParentRight', {
  values: [{
    type: 'i',
    'true': 11,
    'false': 12121
  }, {
    type: 'i',
    dontMap: true
  }],
  inVokedIn: 'PARAMS',
  fnName: "addRule"
}), _defineProperty(_map, 'alignParentLeft', {
  values: [{
    type: 'i',
    'true': 9,
    'false': 12121
  }, {
    type: 'i',
    dontMap: true
  }],
  inVokedIn: 'PARAMS',
  fnName: "addRule"
}), _defineProperty(_map, 'leftOf', {
  values: [{
    type: 'i',
    'true': 0,
    'false': 12121
  }, {
    type: 'i',
    dontMap: true
  }],
  inVokedIn: 'PARAMS',
  fnName: "addRule"
}), _defineProperty(_map, 'cornerRadius', {
  values: [{
    type: 'dpf'
  }],
  dontMap: true,
  inVokedIn: 'DRAWABLE',
  fnName: "setCornerRadius"
}), _defineProperty(_map, 'stroke', {
  values: [{
    type: 'dp'
  }, {
    type: 's'
  }],
  dontMap: true,
  inVokedIn: 'DRAWABLE',
  fnName: "setStroke"
}), _defineProperty(_map, "typeface", {
  values: [{
    type: 'i',
    'normal': 0,
    'bold': 1,
    'italic': 2,
    'bold_italic': 3
  }],
  fnName: 'setTypeface',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, 'background', {
  values: [{
    type: 's'
  }],
  dontMap: true,
  inVokedIn: 'DRAWABLE',
  fnName: "setColor"
}), _defineProperty(_map, 'backgroundDrawable', {
  values: [{
    type: 's'
  }],
  'dontMap': true,
  fnName: 'setBackgroundDrawable',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, 'backgroundColor', {
  values: [{
    type: 's'
  }],
  dontMap: true,
  inVokedIn: 'VIEW',
  fnName: "setBackgroundColor"
}), _defineProperty(_map, 'color', {
  values: [{
    type: 's'
  }],
  dontMap: true,
  fnName: 'setTextColor',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, 'hintColor', {
  values: [{
    type: 's'
  }],
  dontMap: true,
  fnName: 'setHintTextColor',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, 'btnBackground', {
  values: [{
    type: 's'
  }, {
    type: 'i'
  }],
  dontMap: true,
  inVokedIn: 'MUTATEBG',
  fnName: "setColorFilter"
}), _defineProperty(_map, 'colorFilter', {
  values: [{
    type: 's'
  }, {
    type: 'i'
  }],
  dontMap: true,
  inVokedIn: 'VIEW',
  fnName: "setColorFilter"
}), _defineProperty(_map, 'btnColor', {
  values: [{
    type: 's'
  }],
  dontMap: true,
  fnName: 'setTextColor',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, 'shadowLayer', {
  values: [{
    type: 'f'
  }, {
    type: 'f'
  }, {
    type: 'f'
  }, {
    type: 'i'
  }],
  dontMap: true,
  fnName: 'setShadowLayer',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, 'elevation', {
  values: [{
    type: 'i'
  }],
  dontMap: true,
  fnName: 'setElevation',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, 'rotationX', {
  values: [{
    type: 'f'
  }],
  dontMap: true,
  fnName: 'setRotationX',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, 'rotationY', {
  values: [{
    type: 'f'
  }],
  dontMap: true,
  fnName: 'setRotationY',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, 'rotation', {
  values: [{
    type: 'f'
  }],
  dontMap: true,
  fnName: 'setRotation',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, 'backgroundTint', {
  values: [{
    type: 's'
  }],
  dontMap: true,
  fnName: 'setBackgroundTintList',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "scrollBarX", {
  values: [{
    type: 'b'
  }],
  'dontMap': true,
  fnName: 'setHorizontalScrollBarEnabled',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "scrollBarY", {
  values: [{
    type: 'b'
  }],
  'dontMap': true,
  fnName: 'setVerticalScrollBarEnabled',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "clickable", {
  values: [{
    type: 'b'
  }],
  'dontMap': true,
  fnName: 'setClickable',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "cursor", {
  values: [{
    type: 'b'
  }],
  'dontMap': true,
  fnName: 'setCursorVisible',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "longClickable", {
  values: [{
    type: 'b'
  }],
  'dontMap': true,
  fnName: 'setLongClickable',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "focusable", {
  values: [{
    type: 'b'
  }],
  'dontMap': true,
  fnName: 'setFocusable',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "selectable", {
  values: [{
    type: 'b'
  }],
  'dontMap': true,
  fnName: 'setBackgroundResource',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "selectableItem", {
  values: [{
    type: 'b'
  }],
  'dontMap': true,
  fnName: 'setBackgroundResource',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, 'values', {
  values: [{
    type: 's'
  }],
  dontMap: true,
  fnName: 'setAdapter',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, 'maxSeek', {
  values: [{
    type: 'i'
  }],
  fnName: 'setMax',
  inVokedIn: "VIEW",
  dontMap: true
}), _defineProperty(_map, 'accessibilityHint', {
  values: [{
    type: 's'
  }],
  dontMap: 'true',
  fnName: 'setContentDescription',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, 'imeOptions', {
  values: [{
    type: 'i'
  }],
  dontMap: 'true',
  fnName: 'setImeOptions',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "horizontalFade", {
  values: [{
    type: 'b'
  }],
  'dontMap': true,
  fnName: 'setHorizontalFadingEdgeEnabled',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "fadingEdgeLength", {
  values: [{
    type: 'i'
  }],
  'dontMap': true,
  fnName: 'setFadingEdgeLength',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "shimmer", {
  values: [{
    type: 'b'
  }],
  'dontMap': true,
  fnName: 'setBackground',
  alternateFnName: 'setShimmer',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "shimmerActive", {
  values: [],
  'dontMap': true,
  fnName: 'startShimmer',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "shimmerInactive", {
  values: [],
  'dontMap': true,
  fnName: 'stopShimmer',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "peakHeight", {
  values: [{
    type: 'dp'
  }],
  'dontMap': true,
  fnName: 'setPeakHeight',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "sheetState", {
  values: [{
    type: 'i',
    expanded: 3,
    collapsed: 4,
    hidden: 5,
    halfExpanded: 6
  }],
  fnName: 'setState',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "halfExpandedRatio", {
  values: [{
    type: 'f'
  }],
  'dontMap': true,
  fnName: 'setHalfExpandedRatio',
  inVokedIn: 'VIEW'
}), _defineProperty(_map, "hideable", {
  values: [{
    type: 'b'
  }],
  'dontMap': true,
  fnName: 'setHideable',
  inVokedIn: 'VIEW'
}), _map);

module.exports = map;

/***/ }),

/***/ "./src/helpers/android/objMap.js":
/*!***************************************!*\
  !*** ./src/helpers/android/objMap.js ***!
  \***************************************/
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

var map = {
  'PARAMS': {
    'required': 'width, height',
    'viewMethod': 'setLayoutParams,getLayoutParams'
  },
  'DRAWABLE': {
    'ctr': 'android.graphics.drawable.GradientDrawable->new',
    'required': '',
    'viewMethod': 'setBackground,getBackground'
  }
};

module.exports = map;

/***/ }),

/***/ "./src/helpers/android/parseParams.js":
/*!********************************************!*\
  !*** ./src/helpers/android/parseParams.js ***!
  \********************************************/
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

var mapParams = __webpack_require__(/*! ./mapParams */ "./src/helpers/android/mapParams.js");
var objMap = __webpack_require__(/*! ./objMap */ "./src/helpers/android/objMap.js");
var callbackMapper = __webpack_require__(/*! ../common/callbackMapper */ "./src/helpers/common/callbackMapper.js");

var globalObjMap = {};
var command = "";
var elementType;
var getSetType;

function isURL(str) {
  try {
    var url = new URL(str);
    return str.indexOf(".") != -1;
  } catch (err) {
    return false;
  }
}

function attachFeedback(config, keys, i) {
  var feedbackFn = function feedbackFn() {};

  if (typeof config.feedback !== "undefined") {
    if (config.feedback == "true") {
      config.feedback = callbackMapper.map(feedbackFn);
      window.__ALL_ONCLICKS.push(config.feedback);
    }

    return;
  }

  if (config.onClick) {
    config.feedback = callbackMapper.map(feedbackFn);
    window.__ALL_ONCLICKS.push(config.feedback);
  }
}

function getConfigGroups(config) {
  var groups = {};
  var objType;
  var isAnimation;
  var widthFound = 0;
  var heightFound = 0;
  var paddingVal = config["padding"];
  if (config.stroke) delete config.padding;
  if (config.margin) {
    var margin = config.margin.split(',').map(function (a) {
      return a * 1;
    });
    config.marginStart = margin[0] + '';
    config.marginEnd = margin[2] + '';
  }
  var keys = Object.keys(config);
  var proxyFnName;
  for (var i = 0; i < keys.length; i++) {
    attachFeedback(config, keys, i);

    if (typeof config[keys[i]] == "undefined" || config[keys[i]] == null) {
      delete config[keys[i]];
    } else if (typeof config[keys[i]] == "function") {
      if (keys[i] == "afterRender" && typeof window.removeAfterRenderProp == "function") {
        /**
         * if the function is present then we are handling afterRender
         * prop in JS itself
         */
        window.removeAfterRenderProp(config["id"], config["afterRender"]);
        delete config["afterRender"];
      } else {
        config[keys[i]] = callbackMapper.map(config[keys[i]]);

        if (keys[i] == "onClick") {
          window.__FN_MAP[config[keys[i]]] = config.text || config.id || "";

          if (!config.allowMultipleClicks || config.allowMultipleClick == "false") {
            window.__THROTTELED_ACTIONS.push(config[keys[i]]);
          }
        }
      }
    } else {
      if (keys[i].indexOf('_') && keys[i].split('_')[0] == 'a') {
        objType = mapParams[keys[i].split('_')[1]];
        isAnimation = true;
      } else {
        objType = mapParams[keys[i]];
        isAnimation = false;
      }

      if (keys[i] == "stroke") {
        (function () {
          var padding = [0, 0, 0, 0];

          if (paddingVal) padding = paddingVal.split(',').map(function (a) {
            return a * 1;
          });

          var strokeValue = config["stroke"].split(',')[0] * 1;
          padding = padding.map(function (dim) {
            return dim + strokeValue;
          });
          config["padding"] = padding.join(',');
          keys.push("padding");
        })();
      }

      if (objType) {
        if (isAnimation) {
          if (!groups['ANIMATION']) groups['ANIMATION'] = [];

          groups['ANIMATION'].push({ key: keys[i].split('_')[1], value: config[keys[i]] });
        } else {
          if (!groups[objType.inVokedIn]) groups[objType.inVokedIn] = [];

          if (keys[i] == "width") widthFound++;
          if (keys[i] == "height") heightFound++;

          groups[objType.inVokedIn].push({ key: keys[i], value: config[keys[i]] });
        }

        if (keys[i] !== "pattern" && keys[i] !== "root" && keys[i] !== "id" && keys[i] !== "__filename") {
          delete config[keys[i]];
        }
      }
    }
  }

  if (getSetType == "set") {
    if (!groups.PARAMS) groups.PARAMS = [];

    if (!widthFound) groups.PARAMS.push({ key: "width", value: 'wrap_content' });
    if (!heightFound) groups.PARAMS.push({ key: "height", value: 'wrap_content' });
  }

  return groups;
}

function getCtr(viewGroup) {
  var viewGroupMap = {
    'linearLayout': 'android.widget.LinearLayout$LayoutParams->new',
    'coordinatorLayout': 'androidx.coordinatorlayout.widget.CoordinatorLayout$LayoutParams->new',
    'scrollView': 'android.widget.LinearLayout$LayoutParams->new',
    'horizontalScrollView': 'android.widget.LinearLayout$LayoutParams->new',
    'relativeLayout': 'android.widget.RelativeLayout$LayoutParams->new',
    'frameLayout': 'android.widget.FrameLayout$LayoutParams->new',
    'toolbar': 'android.support.v7.widget.Toolbar$LayoutParams->new',
    'collapsingToolbarLayout': 'androidx.coordinatorlayout.widget.CoordinatorLayout$LayoutParams->new',
    'appBarLayout': 'android.support.design.widget.AppBarLayout$LayoutParams->new',
    'view': 'android.widget.LinearLayout$LayoutParams->new',
    'tabLayout': 'android.widget.LinearLayout$LayoutParams->new',
    'viewPager': 'android.support.v4.view.ViewPager$LayoutParams->new',
    'listView': 'android.widget.LinearLayout$LayoutParams->new',
    'expandableListView': 'android.widget.LinearLayout$LayoutParams->new',
    'recyclerView': 'android.support.v7.widget.RecyclerView$LayoutParams->new',
    'ratingBar': 'android.widget.LinearLayout$LayoutParams->new',
    'accordionLayout': 'android.widget.FrameLayout$LayoutParams->new',
    'swypeLayout': 'android.widget.FrameLayout$LayoutParams->new',
    'swypeScroll': 'android.widget.LinearLayout$LayoutParams->new',
    "shimmerFrameLayout": "android.widget.FrameLayout$LayoutParams->new",
    "bottomSheetLayout": 'android.widget.FrameLayout$LayoutParams->new'
  };

  if (!viewGroupMap[viewGroup]) {
    throw new Error("No such view group found : " + viewGroup);
  }

  return viewGroupMap[viewGroup];
}

function handleSpecialChars(value) {
  value = value.indexOf(',') > -1 ? value.replace(/\,/g, '\\\\,') : value;
  value = value.indexOf(':') > -1 ? value.replace(/\:/g, '\\\\:') : value;
  value = value.indexOf(':') > -1 ? value.replace(/\=/g, '\\\\=') : value;
  value = value.indexOf(';') > -1 ? value.replace(/\;/g, '\\\\;') : value;

  return value;
}

function appendArgs(attrs, obj) {
  if (!obj.values) return "";

  var args = "";
  var value = attrs.key == "text" || attrs.key == "hint" ? attrs.value : attrs.value.replace(/ /g, '');

  var incomingArgs;
  if (attrs.key == "text" || attrs.key == "hint") {
    incomingArgs = [];
    incomingArgs.push(handleSpecialChars(value));
  } else {
    incomingArgs = value.split(',');
  }

  for (var i = 0; i < obj.values.length; i++) {
    args += obj.values[i].type + '_';

    if (obj.dontMap) args += incomingArgs[i] + ',';else {
      if (obj.values[i].dontMap) {
        args += incomingArgs[i] + ',';
      } else if (attrs.key == "width" || attrs.key == "height") {
        if (!isNaN(incomingArgs[i] * 1)) args = 'dp_' + incomingArgs[i] + ',';else args += obj.values[i][incomingArgs[i]] + ',';
      } else {
        args += obj.values[i][incomingArgs[i]] + ',';
      }
    }
  }

  return args.substring(0, args.length - 1);
}

function prepareCtr(attrs, belongsTo) {
  var obj = objMap[belongsTo];
  var ctr = globalObjMap[belongsTo].ctr;
  var reqAttrs;

  if (getSetType == "get" && (belongsTo == "ANIMATION" || belongsTo == "DRAWABLE" || belongsTo == "PARAMS")) {
    return ctr;
  }

  if (!obj || !obj.required) return ctr;

  reqAttrs = obj.required.split(',');

  ctr += ':';

  for (var i = 0; i < reqAttrs.length; i++) {
    for (var j = 0; j < attrs.length; j++) {
      if (reqAttrs[i].trim() == attrs[j].key) {
        ctr += appendArgs(attrs[j], mapParams[reqAttrs[i].trim()]) + ',';
      }
    }
  }

  return ctr.substring(0, ctr.length - 1);
}

function parseHtml(text) {
  return 'set_html=android.text.Html->fromHtml:s_' + text + ';';
}

function parseColor(color, setterName) {
  if (!setterName) setterName = 'set_colorInt';
  return setterName + '=android.graphics.Color->parseColor:s_' + color + ';';
}

function mashThis(attrs, obj, belongsTo, transformFn, allProps, type) {
  if (getSetType == "get" && (attrs.key == "width" || attrs.key == "height")) {
    // get case i.e during patch
    if (!isNaN(attrs.value * 1)) {
      return 'get_PARAMS->' + obj.varName + ':dp_' + attrs.value + ';get_view->setLayoutParams:get_PARAMS ';
    } else {
      return 'get_PARAMS->' + obj.varName + ':i_' + mapParams[attrs.key].values[0][attrs.value] + ';get_view->setLayoutParams:get_PARAMS ';
    }
  } else if (attrs.key == "width" || attrs.key == "height") {
    // set case i.e first render
    return '';
  }

  var beforeCmd = "";
  var afterCmd = "";
  var prePend = '';
  var currTransVal;
  var color;
  var arr = [];
  var res;
  var values;

  var keyWord;
  var _cmd;
  var finalCmd;
  var color1;
  attrs.value += '';

  if (attrs.key == "textSize") {
    attrs.value = "1," + (attrs.value - 1);
  }

  //todo:tabTextColors
  if (attrs.key == "foreground" || attrs.key == "tabTextColors" || attrs.key == "selectedTabIndicatorColor" || attrs.key == "color" || attrs.key == "background" || attrs.key == "stroke" || attrs.key == "btnColor") {

    if (attrs.key == "stroke") {
      color = attrs.value.split(',')[1];
      currTransVal = appendArgs(attrs, obj).split(',')[0] + ',get_colorInt';
    } else if (attrs.key == "tabTextColors") {
      color = attrs.value.split(',')[0];
      color1 = attrs.value.split(',')[1];
      currTransVal = 'get_colorInt1' + ',get_colorInt';
    } else {
      color = attrs.value;
      currTransVal = 'get_colorInt';
    }

    if (attrs.key == "tabTextColors") {
      prePend = parseColor(color, "set_colorInt1") + ',' + parseColor(color1);
    } else {
      prePend = parseColor(color);
    }
  }

  if (attrs.key == "fontStyle") {
    if (isURL(attrs.value)) {
      if (typeof window.__PROXY_FN == "undefined") {
        window.__PROXY_FN = {};
      }
      var font = attrs.value.substr(attrs.value.lastIndexOf('/') + 1);

      var filePresent = typeof JBridge.isFilePresent == "function" && JBridge.isFilePresent(font);
      if (!filePresent) {
        var callback = callbackMapper.map(function (isNew, url, fileName) {
          var id = allProps.find(function (a) {
            return a.key === "id";
          });
          if (!id) return;
          var urlSetCommands = "set_directory=ctx->getDir:s_juspay,i_0;" + "set_resolvedFile=java.io.File->new:get_directory,s_" + fileName + ";" + "set_resolvedPath=get_resolvedFile->toString;" + "set_dfont=android.graphics.Typeface->createFromFile:get_resolvedPath;" + "set_textV=ctx->findViewById:i_" + id.value + ";" + "get_textV->setTypeface:get_dfont";
          Android.runInUI(urlSetCommands, null);
        });
        JBridge.renewFile(attrs.value, font, callback);
      } else if (JBridge.getFilePath) {
        prePend = "set_directory=ctx->getDir:s_juspay,i_0;" + "set_resolvedFile=java.io.File->new:get_directory,s_" + JBridge.getFilePath(font) + ";" + "set_resolvedPath=get_resolvedFile->toString;" + "set_dfont=android.graphics.Typeface->createFromFile:get_resolvedPath;";
        currTransVal = "get_dfont";
      }
    } else {
      prePend = "set_ast=ctx->getAssets;set_type=android.graphics.Typeface->createFromAsset:get_ast,s_fonts\/" + attrs.value + "\.ttf;";
      currTransVal = "get_type";
    }
  }

  if (attrs.key == "gradientAngle") {
    orientation += "set_dr=this->getBackground;set_o=android.graphics.drawable.GradientDrawable$Orientation->valueOf:s_" + attrs.value + ";";
    prePend += orientation;
    currTransVal = "get_o";
  }

  if (attrs.key == "gradient") {
    var gradientObj = JSON.parse(attrs.value);
    var orientation = "";
    if (gradientObj.type == "linear") {} else {}

    var intClass = "set_cc=java.lang.Class->forName:s_java.lang.Integer;";
    var arrList = "set_arr=java.util.ArrayList->new;";

    prePend += gradientObj.values.map(function (color, i) {
      return parseColor(color, "set_color" + i);
    }).join("");

    arrList += gradientObj.values.map(function (color, i) {
      return "get_arr->add:get_color" + i;
    }).join(";");

    prePend += "set_gd=android.graphics.drawable.GradientDrawable->new;";
    prePend += arrList + ";";
    prePend += "set_c=java.lang.Class->forName:s_java.lang.Integer;";
    prePend += "infl->convertAndStoreArray:get_arr,get_c,s_pArr,b_true;";
    currTransVal = "get_pArr";
  }

  if (attrs.key == "cornerRadii") {
    var cornerRadiis = attrs.value.split(',');
    var cornerRadius = cornerRadiis.splice(0, 1);
    var cornerRadiiArray = [];
    for (var i = 0; i < cornerRadiis.length; ++i) {
      cornerRadiiArray.push(cornerRadiis[i] * cornerRadius + "");
      cornerRadiiArray.push(cornerRadiis[i] * cornerRadius + "");
    }
    var arrList = "set_arr=java.util.ArrayList->new;";
    var floatArray = cornerRadiiArray.map(function (val, i) {
      return "set_cornerRadius=java.lang.Float->new:dpf_" + val + ";get_arr->add:get_cornerRadius;";
    });
    prePend += arrList + ";";
    prePend += "set_c=java.lang.Class->forName:s_java.lang.Float;";
    prePend += floatArray.join("");
    prePend += "infl->convertAndStoreArray:get_arr,get_c,s_pArr,b_true;";
    currTransVal = "get_pArr";
  }

  // shadowTag : level,tag
  if (attrs.key == "shadowTag") {
    var arr = attrs.value.split(",");
    var tag = arr[1];
    console.warn("YOOOO Shadow", arr);

    if (!window.shadowObject[tag]) {
      window.shadowObject[tag] = { level: parseInt(arr[0]),
        viewId: [],
        backgroundColor: [],
        blurValue: [],
        shadowColor: [],
        dx: [],
        dy: [],
        spread: [],
        factor: []
      };
    } else {
      window.shadowObject[tag]["level"] = parseInt(arr[0]);
    }
    return "";
  }
  //  -- int dx, int dy, int blurValue,  String shadowColor,  int spread, elevatiuon, float factor)
  if (attrs.key == "androidShadow") {
    var arr = attrs.value.split(",");

    var tag = arr[6];

    var __background = "#ffffff";
    var __id = "";

    for (var i = 0; i < allProps.length; i++) {
      if (allProps[i].key == "background") {
        __background = allProps[i].value;
      } else if (allProps[i].key == "id") {
        __id = allProps[i].value;
      }
    }

    var factor = arr[5];
    if (typeof JBridge.getPixels == "function") {
      factor = JBridge.getPixels();
    }
    //   (viewId, backgroundColor, int blurValue,hadowColor, int dx, int dy, int spread, float factor)

    if (!window.shadowObject[tag]) {
      window.shadowObject[tag] = { level: -1,
        viewId: [__id],
        backgroundColor: [__background],
        blurValue: [arr[2]],
        shadowColor: [arr[3]],
        dx: [arr[0]],
        dy: [arr[1]],
        spread: [arr[4]],
        factor: [factor]
      };
    } else {
      window.shadowObject[tag]["viewId"].push(__id);
      window.shadowObject[tag]["backgroundColor"].push(__background);
      window.shadowObject[tag]["blurValue"].push(arr[2]);
      window.shadowObject[tag]["shadowColor"].push(arr[3]);
      window.shadowObject[tag]["dx"].push(arr[0]);
      window.shadowObject[tag]["dy"].push(arr[1]);
      window.shadowObject[tag]["spread"].push(arr[4]);
      window.shadowObject[tag]["factor"].push(arr[5]);
    }

    return "";
  }

  if (attrs.key == "letterSpacing") {
    attrs.value = attrs.value / 9 + "";
  }

  if (attrs.key == "dividerDrawable") {
    prePend = "set_342372=ctx->getPackageName;set_res=ctx->getResources;set_368248=get_res->getIdentifier:s_" + attrs.value + ",s_drawable,get_342372;set_res=ctx->getResources;set_482380=get_res->getDrawable:get_368248;";
    currTransVal = "get_482380";
  }

  if (attrs.key == "textFromHtml") {
    prePend = parseHtml(handleSpecialChars(attrs.value));
    currTransVal = 'get_html';
  }

  if (attrs.key == "backgroundTint") {
    color = attrs.value;
    prePend = parseColor(color) + 'set_colorstate=android.content.res.ColorStateList->valueOf:get_colorInt;';
    currTransVal = 'get_colorstate';
  }

  if (attrs.key == "typeface") {
    prePend = "set_face=this->getTypeface;";
    currTransVal = 'get_face,' + appendArgs(attrs, obj);
  }

  if (attrs.key == "buttonTint") {
    color = attrs.value;
    prePend = parseColor(color) + 'set_colorstate=android.content.res.ColorStateList->valueOf:get_colorInt;';
    currTransVal = 'get_colorstate';
  }

  if (attrs.key == "hintColor") {
    color = attrs.value;
    prePend = parseColor(color) + 'set_colorstate=android.content.res.ColorStateList->valueOf:get_colorInt;';
    currTransVal = 'get_colorstate';
  }

  if (attrs.key == "btnBackground") {
    color = attrs.value;
    prePend = 'set_mode=android.graphics.PorterDuff->intToMode:i_9;' + parseColor(color);
    currTransVal = 'get_colorInt,get_mode';
  }

  if (attrs.key == "selectableItem") {
    color = attrs.value;
    prePend = "set_outv=android.util.TypedValue->new;set_theme=ctx->getTheme;get_theme->resolveAttribute:i_16843534,get_outv,b_true;set_c=get_outv->getClass;set_f=get_c->getDeclaredField:s_resourceId;get_f->setAccessible:b_true;set_v=get_f->get:get_outv;";
    currTransVal = 'get_v';
  }

  if (attrs.key == "url") {
    prePend = "set_Setting=this->getSettings;get_Setting->setJavaScriptEnabled:b_true;get_Setting->setDomStorageEnabled:b_true;";
    var convertToString = "set_1127=android.util.Base64->decode:s_" + btoa(attrs.value) + ",i_0;set_url=java.lang.String->new:get_1127;";
    prePend += convertToString;
    currTransVal = "get_url";
  }

  if (attrs.key == "packageIcon") {
    prePend = "set_PM=ctx->getPackageManager;set_AI=get_PM->getApplicationInfo:s_" + attrs.value + ",i_0;set_11747=get_AI->loadIcon:get_PM;";
    currTransVal = "get_11747";
  }

  if (attrs.key == "imageUrl") {

    if (isURL(attrs.value)) {
      if (typeof window.__PROXY_FN == "undefined") {
        window.__PROXY_FN = {};
      }
      var image = attrs.value.substr(attrs.value.lastIndexOf('/') + 1);
      var callback = "onImage" + image.substr(0, image.indexOf('.'));

      var filePresent = typeof JBridge.isFilePresent == "function" && JBridge.isFilePresent(image);
      if (!filePresent) {
        var callback = callbackMapper.map(function (isNew, url, fileName) {
          var id = allProps.find(function (a) {
            return a.key === "id";
          });
          if (!id) return;
          var urlSetCommands = "set_directory=ctx->getDir:s_juspay,i_0;" + "set_resolvedFile=java.io.File->new:get_directory,s_" + fileName + ";" + "set_resolvedPath=get_resolvedFile->toString;" + "set_dimage=android.graphics.drawable.Drawable->createFromPath:get_resolvedPath;" + "set_imgV=ctx->findViewById:i_" + id.value + ";" + "get_imgV->setImageDrawable:get_dimage";
          Android.runInUI(urlSetCommands, null);
        });
        JBridge.renewFile(attrs.value, image, callback);
      } else if (JBridge.getFilePath) {
        prePend = "set_directory=ctx->getDir:s_juspay,i_0;" + "set_resolvedFile=java.io.File->new:get_directory,s_" + JBridge.getFilePath(image) + ";" + "set_resolvedPath=get_resolvedFile->toString;" + "set_dimage=android.graphics.drawable.Drawable->createFromPath:get_resolvedPath;";
        currTransVal = "get_dimage";
      }
    } else {
      prePend = "set_342372=ctx->getPackageName;set_res=ctx->getResources;set_368248=get_res->getIdentifier:s_" + attrs.value + ",s_drawable,get_342372;set_res=ctx->getResources;set_482380=get_res->getDrawable:get_368248;";
      currTransVal = "get_482380";
    }
  }

  if (attrs.key == "defaultImage") {
    prePend = "set_342372=ctx->getPackageName;set_res=ctx->getResources;set_368248=get_res->getIdentifier:s_" + attrs.value + ",s_drawable,get_342372;set_res=ctx->getResources;set_482380=get_res->getDrawable:get_368248;";
    currTransVal = "get_482380";
  }

  if (attrs.key == "placeHolder") {
    prePend = "set_342372=ctx->getPackageName;set_res=ctx->getResources;set_368248=get_res->getIdentifier:s_" + attrs.value + ",s_drawable,get_342372;set_res=ctx->getResources;set_482380=get_res->getDrawable:get_368248;";
    currTransVal = "get_482380";
  }

  if (attrs.key == "dynamicUrl") {
    prePend = "set_directory=ctx->getDir:s_juspay,i_0;" + "set_resolvedName=in.juspay.hypersdk.services.FileProviderService->appendSdkNameAndVersion:s_" + attrs.value + ";" + "set_resolvedFile=java.io.File->new:get_directory,get_resolvedName;" + "set_resolvedPath=get_resolvedFile->toString;" + "set_dimage=android.graphics.drawable.Drawable->createFromPath:get_resolvedPath;";

    currTransVal = "get_dimage";
  }

  if (attrs.key == "backgroundDrawable") {
    prePend = "set_342372=ctx->getPackageName;set_res=ctx->getResources;set_368248=get_res->getIdentifier:s_" + attrs.value + ",s_drawable,get_342372;set_res=ctx->getResources;set_482380=get_res->getDrawable:get_368248;";
    currTransVal = "get_482380";
  }

  if (attrs.key == "fontFamily") {
    attrs.value = appendArgs(attrs, obj);
    values = attrs.value.split(',');
    return "set_fontFace=android.graphics.Typeface->create:" + values[0] + "," + values[1] + ";" + "this->setTypeface:get_fontFace," + values[1] + ";";
  }

  if (attrs.key == "fontSize") {
    currTransVal = appendArgs(attrs, obj).split(',')[0] + ',f_' + window.__WIDTH * attrs.value.split(',')[1] * 1 / 100;
  }

  if (attrs.key == "curve") {
    prePend = "set_interp=android.view.animation.DecelerateInterpolator->new;";
    currTransVal = "get_interp";
  }

  if (attrs.key == "shimmer") {
    try {
      var shimmerMode = "com.facebook.shimmer.Shimmer$ColorHighlightBuilder";
      var shimmerCmd = "set_sdrw=com.facebook.shimmer.ShimmerDrawable->new;";
      var shimmerJson = JSON.parse(attrs.value);
      console.log(shimmerJson, shimmerJson.contents, attrs, attrs, obj, belongsTo, transformFn, allProps, type);
      // if(shimmerJson && shimmerJson.contents){

      shimmerJson = shimmerJson.contents;
      // }
      if (shimmerJson && shimmerJson.shimmerType == "alpha") {
        shimmerMode = "com.facebook.shimmer.Shimmer$AlphaHighlightBuilder";
        shimmerCmd += "set_builder=" + shimmerMode + "->new;";
        if (shimmerJson.base) {
          shimmerCmd += "get_builder->setBaseAlpha:f_" + shimmerJson.base + ";";
        }
        if (shimmerJson.highlight) {
          shimmerCmd += "get_builder->setHighlightAlpha:f_" + shimmerJson.highlight + ";";
        }
      } else {
        shimmerCmd += "set_builder=" + shimmerMode + "->new;";
        if (shimmerJson.base) {
          shimmerCmd += parseColor(shimmerJson.base, "set_baseColor") + ";";
          shimmerCmd += "get_builder->setBaseColor:get_baseColor;";
        }
        if (shimmerJson.highlight) {
          shimmerCmd += parseColor(shimmerJson.highlight, "set_baseColor") + ";";
          shimmerCmd += "get_builder->setHighlightColor:get_baseColor;";
        }
      }

      if (shimmerJson.tilt) {
        shimmerCmd += "get_builder->setTilt:f_" + shimmerJson.tilt + ";";
      }
      if (shimmerJson.intensity) {
        shimmerCmd += "get_builder->setIntensity:f_" + shimmerJson.intensity + ";";
      }
      if (shimmerJson.direction) {
        shimmerCmd += "get_builder->setDirection:i_" + shimmerJson.direction + ";";
      }
      if (shimmerJson.duration) {
        shimmerCmd += "get_builder->setDuration:l_" + shimmerJson.direction + ";";
      }
      if (shimmerJson.repeatCount) {
        shimmerCmd += "get_builder->setRepeatCount:i_" + shimmerJson.repeatCount + ";";
      }
      if (shimmerJson.repeatDelay) {
        shimmerCmd += "get_builder->setRepeatDelay:l_" + shimmerJson.repeatDelay + ";";
      }
      if (shimmerJson.clipToChildren) {
        shimmerCmd += "get_builder->setClipToChildren:b_" + shimmerJson.clipToChildren + ";";
      }
      if (shimmerJson.shape) {
        shimmerCmd += "get_builder->setShape:i_" + shimmerJson.shape + ";";
      }
      if (shimmerJson.dropOff) {
        shimmerCmd += "get_builder->setDropoff:f_" + shimmerJson.dropOff + ";";
      }
      shimmerCmd += "set_shimmer=get_builder->build;";
      if (type == "shimmerFrameLayout") {
        attrs.key = "shimmerView";
        currTransVal = "get_shimmer";
        obj.fnName = obj.alternateFnName;
      } else {
        shimmerCmd += "get_sdrw->setShimmer:get_shimmer;";
        if (shimmerJson.active) {
          afterCmd += "get_sdrw->startShimmer;";
        } else {
          afterCmd += "get_sdrw->stopShimmer;";
        }
        currTransVal = "get_sdrw";
      }
    } catch (e) {
      console.error("unable to set shimmer");
    }
    console.log(shimmerCmd);
    prePend = shimmerCmd;
  }

  if (attrs.key == "focus") {
    afterCmd = "set_win=ctx->getWindow;get_win->setSoftInputMode:5;";
  }

  if (attrs.key == "shadowLayer") {
    color = attrs.value.split(',')[3];
    arr = appendArgs(attrs, obj).split(',');
    arr.splice(arr.length1, 1);

    prePend = parseColor(color);
    currTransVal = arr.join(',') + ',get_colorInt';
  }

  if (attrs.key == "values") {
    var val = attrs.value.split(",");
    var valuesStr = "",
        i;
    for (i = 0; i < val.length; i++) {
      var elements = val[i].split(":");
      valuesStr += "get_spinnerArray->add:s_" + elements[0];
      for (var j = 1; j < elements.length; j++) {
        valuesStr += "\n" + elements[j];
      }valuesStr += ";";
    }
    prePend = "set_spinnerArray=java.util.ArrayList->new;" + valuesStr + "set_spinnerValues=get_spinnerArray->toArray;set_spinnerAdapter=android.widget.ArrayAdapter->new:ctx_ctx,i_17367043,get_spinnerValues;";
    currTransVal = "get_spinnerAdapter";
  }

  if (attrs.key == "startPoint") {
    var arg = JSON.parse(attrs.value);
    prePend = "this->setStartX:f_" + arg.x + ";";
    prePend += "this->setStartY:f_" + arg.y + ";";
    return prePend;
  }

  if (attrs.key == "endPoint") {
    var arg = JSON.parse(attrs.value);
    prePend = "this->setEndX:f_" + arg.x + ";";
    prePend += "this->setEndY:f_" + arg.y + ";";
    return prePend;
  }

  if (belongsTo == "VIEW") keyWord = globalObjMap[belongsTo].val;else keyWord = 'get_' + globalObjMap[belongsTo].val;

  if (transformFn || attrs.key == "duration" || attrs.key == "delay" || attrs.key == "curve") _cmd = keyWord + '->' + (typeof obj.fnName == "undefined" ? obj.varName : obj.fnName);else _cmd = keyWord + '->' + attrs.key;

  if (obj.values && obj.values.length) _cmd += ':';

  if (!prePend && !currTransVal) _cmd += appendArgs(attrs, obj) + ';';else _cmd += currTransVal + ';';

  // for testing
  if (typeof finalCmd !== "undefined") {
    console.log(beforeCmd + prePend + _cmd + afterCmd);
    return finalCmd;
  }
  if (type == "shimmerFrameLayout") {
    console.log(beforeCmd + prePend + _cmd + afterCmd);
  }
  return beforeCmd + prePend + _cmd + afterCmd;
}

function parseAttrs(attrs, belongsTo, transformFn, type) {
  var obj;
  var retVal;
  var cmd = '';
  var _cmd;

  for (var i = 0; i < attrs.length; i++) {
    obj = mapParams[attrs[i].key];
    if (obj) {
      cmd += mashThis(attrs[i], obj, belongsTo, transformFn, attrs, type);
    }
  }

  if (belongsTo == "VIEW") return cmd;

  return prepareCtr(attrs, belongsTo) + ';' + cmd;
}

function parseGroups(type, groups, config) {
  var keys = Object.keys(groups);
  var ctr;

  for (var i = 0; i < keys.length; i++) {
    if (keys[i] == "FOREGROUND") {
      if (!globalObjMap[keys[i]]) {
        if (getSetType == "set") {
          globalObjMap[keys[i]] = { ctr: "android.graphics.drawable.GradientDrawable->new", val: keys[i] };
          command += 'set_' + globalObjMap[keys[i]].val + '=' + parseAttrs(groups[keys[i]], keys[i], true, type) + 'this->' + "setForeground" + ':' + 'get_' + globalObjMap[keys[i]].val + ';';
        } else {
          globalObjMap[keys[i]] = { ctr: 'get_view->getForeground', val: keys[i] };
          command += 'set_' + globalObjMap[keys[i]].val + '=' + parseAttrs(groups[keys[i]], keys[i], true, type);
        }
      }
    } else if (keys[i] == "LAYOUT_TRANSITION") {
      globalObjMap.LAYOUT_TRANSITION = { ctr: 'android.animation.LayoutTransition->new', val: "LAYOUT_TRANSITION" };
      command += 'set_' + globalObjMap.LAYOUT_TRANSITION.val + '=' + parseAttrs(groups.PARAMS, 'LAYOUT_TRANSITION', true, type) + 'this->' + "setLayoutTransition" + ':get_' + globalObjMap.LAYOUT_TRANSITION.val + ';';
    } else if (keys[i] == "VIEW") {
      if (!globalObjMap.VIEW) {
        if (getSetType == "set") globalObjMap.VIEW = { ctr: "this", val: "this" };else globalObjMap.VIEW = { ctr: "get_view", val: "get_view" };
      }

      command += parseAttrs(groups.VIEW, 'VIEW', true, type);
    } else if (keys[i] == "PARAMS") {
      if (getSetType == "set") {
        if (!globalObjMap.PARAMS) {
          ctr = config.root ? getCtr(type) : 'PARAM_CTR_HOLDER';
          globalObjMap.PARAMS = { ctr: ctr, val: "PARAMS" };
        }

        command += 'set_' + globalObjMap.PARAMS.val + '=' + parseAttrs(groups.PARAMS, 'PARAMS', true, type) + 'this->' + objMap.PARAMS.viewMethod.split(',')[0] + ':get_' + globalObjMap.PARAMS.val + ';';
      } else {
        if (!globalObjMap.PARAMS) {
          ctr = "get_view->getLayoutParams";
          globalObjMap.PARAMS = { ctr: ctr, val: "PARAMS" };
        }

        command += 'set_' + globalObjMap.PARAMS.val + '=' + parseAttrs(groups[keys[i]], keys[i], true, type);
      }
    } else if (keys[i] == "MUTATEBG") {
      if (!globalObjMap.MUTATEBG) {
        globalObjMap.MUTATEBG = { ctr: 'this->getBackground', val: "MUTATEBG" };
      }

      command += 'set_' + globalObjMap.MUTATEBG.val + '=' + parseAttrs(groups[keys[i]], keys[i], true, type);
    } else if (keys[i] == "ANIMATION") {
      if (!globalObjMap.ANIMATION) {
        if (getSetType == "set") globalObjMap.ANIMATION = { ctr: 'this->animate', val: "ANIMATION" };else globalObjMap.ANIMATION = { ctr: 'get_view->animate', val: "ANIMATION" };
      }

      command += 'set_' + globalObjMap.ANIMATION.val + '=' + parseAttrs(groups[keys[i]], keys[i], false, type);
    } else {
      // Works only for drawable
      if (!globalObjMap[keys[i]]) {
        if (getSetType == "set") {
          globalObjMap[keys[i]] = { ctr: objMap[keys[i]].ctr, val: keys[i] };
          command += 'set_' + globalObjMap[keys[i]].val + '=' + parseAttrs(groups[keys[i]], keys[i], true, type) + 'this->' + objMap[keys[i]].viewMethod.split(',')[0] + ':' + 'get_' + globalObjMap[keys[i]].val + ';';
        } else {
          globalObjMap[keys[i]] = { ctr: 'get_view->getBackground', val: keys[i] };
          command += 'set_' + globalObjMap[keys[i]].val + '=' + parseAttrs(groups[keys[i]], keys[i], true, type);
        }
      }
    }
  }
  return command.substring(0, command.length - 1);
}

var flattenObject = function flattenObject(ob) {
  var toReturn = {};
  for (var i in ob) {
    if (!ob.hasOwnProperty(i)) continue;
    if (_typeof(ob[i]) == 'object') {
      var flatObject = flattenObject(ob[i]);
      for (var x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;
        toReturn[x] = flatObject[x];
      }
    } else {
      toReturn[i] = ob[i];
    }
  }
  return toReturn;
};

module.exports = function (type, config, _getSetType) {
  config = flattenObject(config);
  getSetType = _getSetType;
  elementType = type;

  var groups = getConfigGroups(config);

  command = '';
  globalObjMap = {};

  var flag = 0;
  var keys = Object.keys(config);
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] == 'runInUI') {
      flag = 1;
      break;
    }
  }

  if (!flag) {
    config.runInUI = parseGroups(type, groups, config);
  }

  return config;
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

module.exports = {
	android: __webpack_require__(/*! ./android */ "./src/helpers/android/index.js"),
	ios: __webpack_require__(/*! ./ios */ "./src/helpers/ios/index.js"),
	web: __webpack_require__(/*! ./web */ "./src/helpers/web/index.js"),
	common: __webpack_require__(/*! ./common */ "./src/helpers/common/index.js")
};

/***/ }),

/***/ "./src/helpers/ios/colors.js":
/*!***********************************!*\
  !*** ./src/helpers/ios/colors.js ***!
  \***********************************/
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

module.exports = ["#83FCE8", "#89F6E4", "#8FEFDF", "#96E9DB", "#9CE3D7", "#FEE9E6", "#FEF7E7", "#FFFAE5", "#F5FAEB", "#E5FFF5"];

/***/ }),

/***/ "./src/helpers/ios/flattenObject.js":
/*!******************************************!*\
  !*** ./src/helpers/ios/flattenObject.js ***!
  \******************************************/
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

module.exports = function flattenObject(ob) {
  var toReturn = {};
  for (var i in ob) {
    if (!ob.hasOwnProperty(i)) continue;
    if (_typeof(ob[i]) == 'object') {
      var flatObject = flattenObject(ob[i]);
      for (var x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;
        toReturn[x] = flatObject[x];
      }
    } else {
      toReturn[i] = ob[i];
    }
  }

  return toReturn;
};

/***/ }),

/***/ "./src/helpers/ios/index.js":
/*!**********************************!*\
  !*** ./src/helpers/ios/index.js ***!
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
	parseParams: __webpack_require__(/*! ./parseParams */ "./src/helpers/ios/parseParams.js")
};

/***/ }),

/***/ "./src/helpers/ios/parseParams.js":
/*!****************************************!*\
  !*** ./src/helpers/ios/parseParams.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _colors = __webpack_require__(/*! ./colors */ "./src/helpers/ios/colors.js");

var _colors2 = _interopRequireDefault(_colors);

var _flattenObject = __webpack_require__(/*! ./flattenObject */ "./src/helpers/ios/flattenObject.js");

var _flattenObject2 = _interopRequireDefault(_flattenObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var callbackMapper = __webpack_require__(/*! ../common/callbackMapper */ "./src/helpers/common/callbackMapper.js");

var getSetType = 1;

/**
 * Checks the native set window.__DEVICE_DETAILS.mystique_version
 * and checks if mystique version is greater than the passed version.
 * @param {string} version number to be checked against. If passed empty returns true.
 * @return {bool} true if mystique version is greater than passed version else false. Defaults to true.
 */
function isMystiqueVersionGreaterThan(version) {
  if (window.__DEVICE_DETAILS && window.__DEVICE_DETAILS.mystique_version) {
    var sdkVersion = parseFloat(window.__DEVICE_DETAILS.mystique_version);
    if (sdkVersion > 0) {
      return sdkVersion > parseFloat(version) ? true : false;
    }
  }
  return false;
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
    r: rWS(values[0]),
    g: rWS(values[1]),
    b: rWS(values[2]),
    a: alpha
  };
}

function convertHexToRgb(hex) {
  var r = (parseInt(hex.substring(0, 2), 16) / 255).toFixed(2);
  var g = (parseInt(hex.substring(2, 4), 16) / 255).toFixed(2);
  var b = (parseInt(hex.substring(4, 6), 16) / 255).toFixed(2);

  return r + "," + g + "," + b;
}

function cS(value) {
  return value ? value + '' : "";
}

function rWS(value) {
  return value.replace(/ /g, '');
}

function self_sizeFromDictionary(width, height) {
  window.__SIZE_INDEX++;

  return {
    "return": "size" + window.__SIZE_INDEX,
    "invokeOn": "self",
    "methodName": "sizeFromDictionary:",
    "values": [{
      "width": width,
      "height": height
    }]
  };
}

function self_setCursorPosition(id, position) {
  return {
    "return": "false",
    "invokeOn": "self",
    "methodName": "setCursorPosition:",
    "values": [{
      "viewId": id,
      "position": position
    }]
  };
}

function this_setContentSize() {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setContentSize:",
    "values": [{ "name": "size" + window.__SIZE_INDEX, "computed": "true", "type": "size" }]
  };
}

function UIColor_colorWithRGBA(r, g, b, a) {
  window.__COLOR_INDEX++;
  return {
    "return": "color" + window.__COLOR_INDEX,
    "invokeOn": "UIColor",
    "methodName": "colorWithRed:green:blue:alpha:",
    "values": [{ "name": r, "type": "f" }, { "name": g, "type": "f" }, { "name": b, "type": "f" }, { "name": a, "type": "f" }]
  };
}

function this_pivotX(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setPivotX:",
    "values": [{ "name": value + "", "type": "s" }]
  };
}

function this_pivotY(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setPivotY:",
    "values": [{ "name": value + "", "type": "s" }]
  };
}

function self_animate_translation(obj, props) {
  obj.values[0].properties = [{
    "key": "frame",
    "values": {
      "x": props.x,
      "y": props.y,
      "width": props.w,
      "height": props.h
    }
  }];

  return obj;
}

function self_animate_rotation(obj, props) {
  obj.values[0].properties = [{
    "key": "angle",
    "values": {}
  }];

  return obj;
}

function this_setTranslationZ(params) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "translationZ:",
    "values": [{ "name": params, type: "s" }]
  };
}

function self_animate(props) {
  return {
    "return": "false",
    "invokeOn": "self",
    "methodName": "animate:",
    "values": [{
      "json": props.json,
      "viewTag": props.id
    }]
  };
}

function this_setBackgroundColor() {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setBackgroundColor:",
    "values": [{ "name": "color" + window.__COLOR_INDEX, "computed": "true" }]
  };
}

function this_superview() {
  var currViewIndex = window.__VIEW_INDEX;

  window.__VIEW_INDEX++;

  return {
    "return": "view" + window.__VIEW_INDEX,
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + currViewIndex,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "superview"
  };
}

function this_scrollToIndex(index) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "scrollToIndex:",
    "values": [{ "name": index, type: "i" }]
  };
}

function UIView_bounds() {
  window.__RECT_INDEX++;

  return {
    "return": "rect" + window.__RECT_INDEX,
    "fromStore": "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": "UIView",
    "methodName": "bounds"
  };
}

function this_setEnabled(mode) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setEnabled:",
    "values": [{ "name": mode, "type": "i" }]
  };
}

function this_scrollEnabled(status) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPTableView",
    "methodName": "setScrollEnabled:",
    "values": [{ "name": status, "type": "s" }]
  };
}

function this_setAutoCorrectionType(mode) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setAutocorrectionType:",
    "values": [{ "name": mode, "type": "i" }]
  };
}

function this_setKeyboardType(mode) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setKeyboardType:",
    "values": [{ "name": mode, "type": "i" }]
  };
}

function this_setAutoCapitalizationType(mode) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setAutocapitalizationTypes:",
    "values": [{ "name": mode, "type": "i" }]
  };
}

function this_setStatusBarStyle(mode) {
  return {
    "return": "false",
    "invokeOn": "self",
    "methodName": "setStatusBarStyle:",
    "values": [{ "name": mode, "type": "s" }]
  };
}

function this_becomeFirstResponder(mode) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "focus:",
    "values": [{ "name": mode, "type": "s" }]
  };
}

function this_setOnItemClick(callback) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setOnItemClick:",
    "values": [{ "name": callbackMapper.map(callback), "type": "s" }]
  };
}

function this_setOnFocusCallback(callback) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setOnFocusCallback:",
    "values": [{ "name": callbackMapper.map(callback), "type": "s" }]
  };
}

function this_setOnMerchantViewHeightChangeCallback(callback) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setOnMerchantViewHeightChange:",
    "values": [{ "name": callbackMapper.map(callback), "type": "s" }]
  };
}

function this_setOn(enabled) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setOn:animated:",
    "values": [{ "name": enabled, "type": "i" }, { "name": "1", "type": "i" }]
  };
}

function this_showVerticalScrollBar(enabled) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setShowsVerticalScrollIndicator:",
    "values": [{ "name": enabled, "type": "i" }]
  };
}

function this_setSecureTextEntry(enabled) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setSecureTextEntry:",
    "values": [{ "name": enabled, "type": "i" }]
  };
}

function UIImage_imageNamed(image) {
  window.__IMAGE_INDEX++;

  return {
    "return": "image" + window.__IMAGE_INDEX,
    "invokeOn": "self",
    "methodName": "imageNamed:",
    "values": [{ "name": image, "type": "s" }]
  };
}

function this_setImage() {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setImage:",
    "values": [{ "name": "image" + window.__IMAGE_INDEX, "computed": "true" }]
  };
}

function self_rectFromDictionary(x, y, w, h) {
  window.__RECT_INDEX++;

  return {
    "return": "rect" + window.__RECT_INDEX,
    "invokeOn": "self",
    "methodName": "rectFromDictionary:",
    "values": [{
      "x": x,
      "y": y,
      "width": w,
      "height": h
    }]
  };
}

function this_updateLayoutParams(config) {
  var data = {
    "width": config.width,
    "height": config.height,
    "margin": config.margin,
    "padding": config.padding,
    "weight": config.weight,
    "gravity": config.gravity,
    "visibility": config.visibility,
    "orientation": config.orientation,
    "alignment_rules": config.alignment_rules
  };
  if (data.alignment_rules && data.alignment_rules.length == 0) {
    delete data.alignment_rules;
  }
  return {
    "return": "false",
    "invokeOn": "this",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "methodName": "updateLayoutParams:",
    "values": [{
      "name": JSON.stringify(data),
      "type": 's'
    }]
  };
}

function this_setPadding(padding) {
  return {
    "return": "false",
    "invokeOn": getSetType ? "this" : "MJPViewAL",
    "methodName": "setPaddingLeft:Top:Right:Bottom:",
    "values": padding.split(',').map(makeUnit)
  };
}

function this_setMargin(margin) {
  return {
    "return": "false",
    "invokeOn": getSetType ? "this" : "MJPViewAL",
    "methodName": "setMarginLeft:Top:Right:Bottom:",
    "values": margin.split(',').map(makeUnit)
  };
}

function makeUnit(v, i, arr) {
  return { name: v + '', type: 'f' };
}

function this_setHeight(height) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPViewAL",
    "methodName": "setHeight:",
    "values": [{ "name": height + '', "type": 'i' }]
  };
}

function this_setWidth(width) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPViewAL",
    "methodName": "setWidth:",
    "values": [{ "name": width + '', "type": 'i' }]
  };
}

function this_setFrame() {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setFrame:",
    "values": [{ "name": "rect" + window.__RECT_INDEX, "computed": "true", "type": "rect" }]
  };
}

function self_alignToParent(type, values) {
  window.__POINT_INDEX++;
  return {
    "return": "point" + window.__POINT_INDEX,
    "invokeOn": "self",
    "methodName": "alignToParent:",
    "values": [{
      "name": type,
      "x": values.x,
      "y": values.y,
      "yOffset": values.yOffset,
      "xOffset": values.xOffset
    }]
  };
}

function this_setCenter() {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setCenter:",
    "values": [{ "name": "point" + window.__POINT_INDEX, "computed": "true", "type": "point" }]
  };
}

function this_setText(text) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setText:",
    "values": [{ "name": encodeURI(text), "type": "s" }]
  };
}

function this_setRegularExpression(text) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setRegularExpression:",
    "values": [{ "name": text, "type": "s" }]
  };
}

function getEncodedData(text) {
  var encodedString = text;
  if (isMystiqueVersionGreaterThan("1")) {
    encodedString = btoa(encodeURIComponent(text));
  } else if (isMystiqueVersionGreaterThan("0")) {
    encodedString = btoa(text.replace(/[^\x00-\x7F]/g, ""));
  }
  return encodedString;
}

function this_setHTMLText(text) {
  return {
    "return": "false",
    "fromStore": "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setHtmlText:",
    "values": [{ "name": getEncodedData(text),
      "type": "s"
    }]
  };
}

function this_setPlaceholder(text) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setPlaceholder:",
    "values": [{ "name": text, "type": "s" }]
  };
}

function this_setPlaceholderProperties(data) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPTextView",
    "methodName": "setPlaceholderProperties:",
    "values": [{ "name": data, "type": "s" }]
  };
}

function UIFont_systemFontOfSize(size) {
  window.__FONT_INDEX++;

  return {
    "return": "font" + window.__FONT_INDEX,
    "invokeOn": "UIFont",
    "methodName": "systemFontOfSize:",
    "values": [{ "name": size, "type": "f" }]
  };
}

function UIFont_fontWithName(name, size) {
  window.__FONT_INDEX++;
  return {
    "return": "font" + window.__FONT_INDEX,
    "invokeOn": "MJPFont",
    "methodName": "fontWithName:size:",
    "values": [{ "name": name, "type": "s" }, { "name": size.length > 0 ? size : "14", "type": "f" }]
  };
}

function this_setFont() {
  return {
    "return": "false",
    "fromStore": "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setFont:",
    "values": [{
      "name": "font" + window.__FONT_INDEX,
      "computed": "true"
    }]
  };
}

function this_sizeToFit() {
  return {
    "return": "false",
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "sizeToFit"
  };
}

function UIFont_boldSystemFontOfSize(size) {
  window.__FONT_INDEX++;

  return {
    "return": "font" + window.__FONT_INDEX,
    "invokeOn": "UIFont",
    "methodName": "boldSystemFontOfSize:",
    "values": [{ "name": size, "type": "f" }]
  };
}

function UIFont_systemFontOfSizeWeight(size, weight) {
  window.__FONT_INDEX++;

  return {
    "return": "font" + window.__FONT_INDEX,
    "invokeOn": "UIFont",
    "methodName": "systemFontOfSize:weight:",
    "values": [{ "name": size, "type": "f" }, { "name": weight, "type": "f" }]
  };
}

function this_setLineBreakMode(mode) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setLineBreakMode:",
    "values": [{ "name": mode, "type": "i" }]
  };
}

function this_setNumberOfLines(count) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setNumberOfLines:",
    "values": [{ "name": count, "type": "i" }]
  };
}

function this_setTextAlignment(mode) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setGravity:",
    "values": [{ "name": mode, "type": "s" }]
  };
}

function this_setTextColor() {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setTextColor:",
    "values": [{ "name": 'color' + window.__COLOR_INDEX, "computed": "true" }]
  };
}

function this_setTextLengthLimit(length) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setTextLengthLimit:",
    "values": [{ "name": length + "", "type": "i" }]
  };
}

function this_removeCell(cellIndex) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "removeObjectAtIndex:",
    "values": [{ "name": cellIndex + "", "type": "i" }]
  };
}

function UIColor_fromLiteral(color) {
  window.__COLOR_INDEX++;

  return {
    "return": "color" + window.__COLOR_INDEX,
    "invokeOn": "UIColor",
    "methodName": color + "Color"
  };
}

function this_layer() {
  window.__LAYER_INDEX++;

  return {
    "return": "layer" + window.__LAYER_INDEX,
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "layer"
  };
}

function setCornerRadius(radius) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setMJPCornerRadius:",
    "values": [{ "name": radius + "", "type": "f" }]
  };
}

function setBorderWidth(width) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setMJPBorderWidth:",
    "values": [{ "name": width + "", "type": "f" }]
  };
}

function setBorderColor() {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setMJPBorderColor:",
    "values": [{ "name": "color" + window.__COLOR_INDEX, "computed": "true", type: "cgcolor" }]
  };
}

function this_setShadow(id, shadowOffset, shadowBlur, shadowSpread, shadowColor, shadowOpacity) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setShadow:",
    "values": [{
      "name": JSON.stringify({
        "viewId": id,
        "color": shadowColor,
        "blur": shadowBlur,
        "opacity": shadowOpacity,
        "offset": shadowOffset,
        "spread": shadowSpread
      }),
      "type": "s"
    }]
  };
}

function this_setGradient(data) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setGradient:",
    "values": [{
      "name": data,
      "type": "s"
    }]
  };
}

function this_setBackgroundImage() {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setBackgroundImage:",
    "values": [{
      "name": "image" + window.__IMAGE_INDEX,
      "computed": "true"
    }]
  };
}

function _UILabelLayer_setMasksToBounds() {
  return {
    "return": "false",
    "fromStore": "true",
    "storeKey": "layer" + window.__LAYER_INDEX,
    "invokeOn": "_UILabelLayer",
    "methodName": "setMJPMasksToBounds:",
    "values": [{ "name": "1", type: "i" }]
  };
}

function this_setTag(tag) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setTag:",
    "values": [{ "name": tag, type: "i" }]
  };
}

function self_getViewFromTag(tag) {
  window.__VIEW_INDEX++;

  return {
    "return": "view" + window.__VIEW_INDEX,
    "invokeOn": "self",
    "methodName": "getViewFromTag:",
    "values": [{ "name": tag, "type": "s" }]
  };
}

function this_setImageURL(id, url, placeholder) {
  return {
    "return": "false",
    "invokeOn": "self",
    "storeKey": "view" + window.__VIEW_INDEX,
    "methodName": "setImageWithUrl::::",
    "values": [{ "name": "" + id, "type": "s" }, { "name": url, "type": "s" }, { "name": placeholder, "type": "s" }]
  };
}

function this_setGif(id, imageName) {
  return {
    "return": "false",
    "invokeOn": "self",
    "storeKey": "view" + window.__VIEW_INDEX,
    "methodName": "loadGif:::",
    "values": [{ "name": "" + id, "type": "s" }, { "name": imageName, "type": "s" }]
  };
}

function this_startGif() {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "startGIF"
  };
}

function this_stopGif() {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "stopGIF"
  };
}

function self_setAlpha(alpha) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setAlpha:",
    "values": [{ "name": String(alpha), type: "f" }]
  };
}

function this_setHidden(hidden) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setHidden:",
    "values": [{ "name": hidden === "gone" || hidden === "invisible" ? "1" : "0", type: "i" }]
  };
}

function this_setTextProperties(data) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPTextView",
    "methodName": "setTextProperties:",
    "values": [{ "name": data, "type": "s" }]
  };
}

function this_setLetterSpacing(data) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPEditText",
    "methodName": "setLetterSpacing:",
    "values": [{ "name": data, "type": "s" }]
  };
}

function this_setLineSpacing(data) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPLabel",
    "methodName": "setLineSpacing:",
    "values": [{ "name": data, "type": "s" }]
  };
}

function this_setCaretColor() {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setTintColor:",
    "values": [{ "name": 'color' + window.__COLOR_INDEX, "computed": "true" }]
  };
}

function this_scrollTo(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPTableView",
    "methodName": "scrollTo:",
    "values": [{ "name": value, "type": "s" }]
  };
}

function this_setExpand(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPExpandableCell",
    "methodName": "setExpand:",
    "values": [{ "name": value, "type": "s" }]
  };
}

function this_setExpandDuration(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPExpandableCell",
    "methodName": "setExpandDuration:",
    "values": [{ "name": value, "type": "s" }]
  };
}

function this_setExpandAlpha(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPExpandableCell",
    "methodName": "setExpandAlpha:",
    "values": [{ "name": value, "type": "s" }]
  };
}

function this_setSwype(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPTableView",
    "methodName": "setSwype:",
    "values": [{ "name": value ? "true" : "false", "type": "s" }]
  };
}

function this_setUserInteraction(hidden) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setUserInteractionEnabled:",
    "values": [{ "name": hidden === "true" ? "1" : "0", type: "i" }]
  };
}

function this_setSeparator(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setSeparator:",
    "values": [{ "name": value, type: "s" }]
  };
}

function this_setSeparatorRepeat(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setSeparatorRepeat:",
    "values": [{ "name": value, type: "s" }]
  };
}

function this_setSwipeCallback(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPTableView",
    "methodName": "setSwipeCallback:",
    "values": [{ "name": value, type: "s" }]
  };
}

function this_setupList(listData, listItem) {
  return {
    "return": "false",
    "fromStore": "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPRepeatTableView",
    "methodName": "setupList::",
    "values": [{ "name": listData, type: "s" }, { "name": listItem, type: "s" }]
  };
}

function this_inlineAnimation(config) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": "this",
    "methodName": "setInlineAnimation:",
    "values": [{ "name": modifyTranslation(config), type: "s" }]
  };
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
  return JSON.stringify(animationArray);
}

function this_setCloseSwipe(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPTableView",
    "methodName": "closeSwipe:",
    "values": [{ "name": value ? "true" : "false", type: "s" }]
  };
}

function this_setEnableSwype(value) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "MJPTableView",
    "methodName": "setSwipeEnabled:",
    "values": [{ "name": value ? "true" : "false", type: "s" }]
  };
}

function this_bringSubViewToFront(params) {
  return {
    "return": "false",
    "invokeOn": "self",
    "methodName": "bringSubViewToFront:",
    "values": [{ "name": params, type: "s" }]
  };
}

function this_setContentMode(mode) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setContentMode:",
    "values": [{ "name": mode, type: "i" }]
  };
}

function this_adjustViewWithKeyboard(status) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setAdjustViewWithKeyboard:",
    "values": [{ "name": status, type: "s" }]
  };
}

function self_setPopupMenu(popupMenu, onMenuItemClick) {
  var callback = callbackMapper.map(onMenuItemClick);
  return {
    "return": "false",
    "invokeOn": "self",
    "methodName": "createActionSheetWithTitles::",
    "values": [{ "name": popupMenu, "type": "s" }, { "name": callback, "type": "s" }]
  };
}

function this_setCornerCurves(corner) {
  return {
    "return": "false",
    "fromStore": "false",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": "this",
    "methodName": "setCornerCurves:",
    "values": [{ "name": corner + "", "type": "s" }]
  };
}

function this_setClipsToBounds(bounds) {
  return {
    "return": "false",
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "setClipsToBounds:",
    "values": [{ "name": bounds ? "1" : "0", type: "i" }]
  };
}

function this_fontWithName(name) {
  window.__FONT_INDEX++;
  return {
    "return": "font" + window.__FONT_INDEX,
    "fromStore": getSetType ? "false" : "true",
    "storeKey": "view" + window.__VIEW_INDEX,
    "invokeOn": getSetType ? "this" : "UIView",
    "methodName": "fontWithName:",
    "values": [{ "name": name, "type": "s" }]
  };
}

function UIColor_setColor(color) {
  var values = void 0;
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

  var r = rWS(values[0]);
  var g = rWS(values[1]);
  var b = rWS(values[2]);
  var a = alpha;

  return UIColor_colorWithRGBA(r, g, b, a);
}

function transformKeys(config) {
  var keys = Object.keys(config);
  for (var i = 0; i < keys.length; i++) {
    if (typeof config[keys[i]] == "undefined" || config[keys[i]] == null) {
      delete config[keys[i]];
    } else if (typeof config[keys[i]] == "function") {
      config[keys[i]] = callbackMapper.map(config[keys[i]]);
    } else {
      if (keys[i] !== "id" && keys[i] !== "__filename" && keys[i] !== "currChildOffset" && keys[i] !== "methods" && keys[i] !== "swipeEnable" && keys[i] !== "viewPager" && keys[i] !== "tableView") {

        delete config[keys[i]];
      }
    }
  }

  return config;
}

function generateType(type, config) {
  var modifiedType = "mJPView";
  switch (type) {
    case "editText":
      {
        modifiedType = "mJPEditText";
      }
      break;
    case "imageView":
      {
        modifiedType = "mJPImageView";
      }
      break;
    case "textView":
      {
        modifiedType = "mJPTextView";
      }
      break;
    case "scrollView":
      {
        if (config.hasOwnProperty('height') && config.height == 'wrap_content') {
          modifiedType = "mJPScrollView";
        } else {
          modifiedType = "mJPScrollView";
        }
        config.orientation = "vertical";
        break;
      }
    case "horizontalScrollView":
      {
        if (config.hasOwnProperty('width') && config.width == 'wrap_content') {
          modifiedType = "mJPScrollView";
        } else {
          modifiedType = "mJPScrollView";
        }
        config.orientation = "horizontal";
        break;
      }
      break;
    case "tableView":
    case "listView":
      {
        if (config.hasOwnProperty("listData") && config.hasOwnProperty("listItem")) {
          modifiedType = "mJPRepeatTableView";
        } else {
          modifiedType = "mJPTableView";
        }
      }
      break;
    case "collectionView":
    case "viewPager":
      {
        modifiedType = "mJPCollectionView";
      }
      break;
    case "progressBar":
      {
        modifiedType = "mJPActivityIndicator";
      }
      break;
    case "switch":
      {
        modifiedType = "mJPSwitch";
      }
      break;
    case "swypeLayout":
      {
        modifiedType = "mJPSwypeLayoutCell";
      }
      break;
    case "accordionLayout":
      {
        modifiedType = "mJPExpandableCell";
      }
      break;
    case "linearLayout":
      {
        modifiedType = "mJPLinearLayout";
      }
      break;
    case "relativeLayout":
      {
        modifiedType = "mJPRelativeLayout";
      }
      break;
    case "frameLayout":
      {
        modifiedType = "mJPRelativeLayout";
      }
      break;
    default:
      {
        modifiedType = "mJPView";
      }
  }
  return modifiedType;
}

function changeKeys(config, type) {
  var map = {
    "imageUrl": "imageNamed",
    "packageIcon": "imageNamed",
    "color": "textColor"
  };

  var keys = Object.keys(config);

  keys.forEach(function (key) {
    if (map[key]) {
      config[map[key]] = config[key];
      delete config[key];
    }
  });

  if (config.stroke) {
    config.borderWidth = config.stroke.split(",")[0];
    config.borderColor = config.stroke.split(",")[1];
  }

  // Add all view based prop injections below.
  switch (type.toLowerCase()) {
    case "scrollview":
      {
        config.orientation = "vertical";
      }
      break;
    case "horizontalscrollview":
      {
        config.orientation = "horizontal";
      }
      break;
  }
  // Add all view based prop injections above.
  return config;
}

// cS - convert to String
// rWS - remove white spaces
// fromStore methods dont  use invokeOn
// the extract className out of the stored object in the store
module.exports = function (type, config, _getSetType) {
  config = changeKeys((0, _flattenObject2.default)(config), type);
  type = generateType(type, config);
  getSetType = _getSetType == "set" ? 1 : 0;
  config.methods = [];
  config.alignment_rules = [];

  // tag set
  if (config.id) {
    var tag = rWS(cS(config.id));

    if (!getSetType) {
      config.methods.push(self_getViewFromTag(tag));
    } else {
      config.methods.push(this_setTag(tag));
    }
  }

  // frame
  if (!config.useConstraits && (config.x || config.y || config.w || config.h)) {
    var x = rWS(cS(config.x)) || "0";
    var y = rWS(cS(config.y)) || "0";
    var width = rWS(cS(config.w)) || "0";
    var height = rWS(cS(config.h)) || "0";

    config.methods.push(self_rectFromDictionary(x, y, width, height));
    config.methods.push(this_setFrame());
  }

  if (config.hasOwnProperty("useConstraits") && config.useConstraits && config.hasOwnProperty("expand")) {
    config.visibility = config.expand ? config.visibility ? config.visibility : "visible" : "gone";
  }

  if (config.hasOwnProperty("alignParentBottom") && config.alignParentBottom == "true,-1") {
    config.alignment_rules.push('align_parent_bottom');
  }

  if (config.useConstraits) {
    config.methods.push(this_updateLayoutParams(config));
  }

  if (config.hasOwnProperty("letterSpacing")) {
    config.methods.push(this_setLetterSpacing(config.letterSpacing));
  }

  if (config.hasOwnProperty("lineSpacing")) {
    config.methods.push(this_setLineSpacing(config.lineSpacing));
  }

  if (config.hasOwnProperty("caretColor")) {
    config.methods.push(UIColor_setColor(config.caretColor));
    config.methods.push(this_setCaretColor());
  }

  // background
  if (config.background || config.gradient || config.backgroundDrawable) {
    if (config.hasOwnProperty("gradient")) {
      var gradient = JSON.parse(config.gradient);
      var gradientType = gradient.type;
      var gradientAngle = gradient.angle;
      var colours = [];

      gradient.values.forEach(function (color) {
        colours.push(convertColorToRgba(color));
      });

      gradient = JSON.stringify({
        colors: colours,
        type: gradientType,
        angle: gradientAngle
      });
      config.methods.push(this_setGradient(gradient));
    } else if (config.hasOwnProperty("backgroundDrawable")) {
      config.methods.push(UIImage_imageNamed(config.backgroundDrawable));
      config.methods.push(this_setBackgroundImage());
    } else {
      config.methods.push(UIColor_setColor(config.background));
      config.methods.push(this_setBackgroundColor());
    }
  }

  // borderColor, radius and width
  // will work only for uiView and uiLabel
  if (config.hasOwnProperty("cornerRadius")) {
    var arg = rWS(cS(config.cornerRadius));
    config.methods.push(setCornerRadius(arg));
  }

  if (config.hasOwnProperty("borderWidth")) {
    var _arg = rWS(cS(config.borderWidth));
    config.methods.push(setBorderWidth(_arg));
  }

  if (config.hasOwnProperty("borderColor")) {
    config.methods.push(UIColor_setColor(config.borderColor));
    config.methods.push(setBorderColor());
  }

  if (config.debug) {
    config.methods.push(this_layer());
    config.methods.push(setBorderWidth("1"));
  }

  if (config.shadow) {
    var shadowValues = config.shadow.split(',');
    var shadowBlur = rWS(cS(shadowValues[2]));
    var shadowSpread = rWS(cS(shadowValues[3]));
    var shadowOpacity = rWS(cS(shadowValues[5]));
    var shadowOffset = {
      x: rWS(cS(shadowValues[0])),
      y: rWS(cS(shadowValues[1]))
    };

    var shadowColor = convertColorToRgba(shadowValues[4]);

    config.methods.push(this_setShadow(config.id, shadowOffset, shadowBlur, shadowSpread, shadowColor, shadowOpacity));
  }

  // make child fullWidth and height of parent
  if (config.fillParent) {
    config.methods.push(this_superview());
    config.methods.push(UIView_bounds());
    config.methods.push(this_setFrame());
  }

  if (config.hasOwnProperty("imageNamed")) {
    var id = cS(config.id);
    var placeholder = config.placeHolder || "";
    if (config.imageNamed.endsWith(".gif")) {
      config.methods.push(this_setGif(id, config.imageNamed));
    } else {
      config.methods.push(this_setImageURL(id, config.imageNamed, placeholder));
    }
  }

  if (config.hasOwnProperty("adjustViewWithKeyboard")) {
    config.methods.push(this_adjustViewWithKeyboard(config.adjustViewWithKeyboard));
  }

  if (config.hasOwnProperty("playGif")) {
    if (config.playGif) config.methods.push(this_startGif());else config.methods.push(this_stopGif());
  }

  if (config.hint) {
    if (config.letterSpacing) {
      var data = JSON.stringify({
        'hint': cS(config.hint),
        'letterSpacing': config.letterSpacing
      });
      config.methods.push(this_setPlaceholderProperties(data));
    } else {
      config.methods.push(this_setPlaceholder(cS(config.hint)));
    }
  }

  if (config.hasOwnProperty("separator")) {
    var _enabled6 = cS(config.separator);
    config.methods.push(this_setSeparator(_enabled6));
  }

  if (config.hasOwnProperty("separatorRepeat")) {
    var _enabled6 = cS(config.separatorRepeat);
    config.methods.push(this_setSeparatorRepeat(_enabled6));
  }

  if (config.translationZ) {
    config.methods.push(this_setTranslationZ(cS(config.translationZ)));
  }

  if (config.scrollTo) {
    var data = config.scrollTo.split(",");
    var parsedData = JSON.stringify({ "x": data[0], "y": data[1] });
    config.methods.push(this_scrollTo(cS(parsedData)));
  }

  if (config.hasOwnProperty("expand")) {
    config.methods.push(this_setExpand(config.expand ? "1" : "0"));
  }

  if (config.hasOwnProperty("expandDuration")) {
    config.methods.push(this_setExpandDuration(cS(config.expandDuration)));
  }

  if (config.hasOwnProperty("expandAlpha")) {
    config.methods.push(this_setExpandAlpha(cS(config.expandAlpha)));
  }

  //Updated to handle 0 being passed for default alignment
  if (config.hasOwnProperty("textAlignment")) {
    config.methods.push(this_setTextAlignment(rWS(cS(config.textAlignment))));
  }

  if (config.hasOwnProperty("textFromHtml")) {
    var modifiedHtmlString = "<span style=\"";
    if (config.hasOwnProperty("fontStyle")) {
      modifiedHtmlString += "font-family:" + config.fontStyle + ";";
    }
    if (config.hasOwnProperty("textSize")) {
      modifiedHtmlString += "font-size:" + config.textSize + ";";
    }
    if (config.hasOwnProperty("textColor")) {
      modifiedHtmlString += "color:" + config.textColor + ";";
    }
    modifiedHtmlString += "\">" + config.textFromHtml + "</span>";
    config.methods.push(this_setHTMLText(modifiedHtmlString));
  }

  if (config.textColor) {
    config.methods.push(UIColor_setColor(config.textColor));
    config.methods.push(this_setTextColor());
  }
  if (config.hasOwnProperty("fontStyle")) {
    if (config.hasOwnProperty("textSize")) {
      config.methods.push(UIFont_fontWithName(config.fontStyle, config.textSize + ""));
    } else {
      config.methods.push(this_fontWithName(config.fontStyle));
    }
    config.methods.push(this_setFont());
  } else if (config.hasOwnProperty("textSize")) {
    config.methods.push(UIFont_systemFontOfSize(config.textSize + ""));
    config.methods.push(this_setFont());
  }

  if (config.scrollEnabled) {
    var scrollEnabled = cS(config.scrollEnabled);
    config.methods.push(this_scrollEnabled(scrollEnabled));
  }

  if (config.fontFamily) {
    config.methods.push(UIFont_systemFontOfSizeWeight((config.textSize || "14") + "", config.fontFamily || "0.0"));
    config.methods.push(this_setFont());
  }

  if (config.hasOwnProperty("singleLine")) {
    if (!config.singleLine) {
      config.methods.push(this_setLineBreakMode("0"));
      config.methods.push(this_setNumberOfLines("0"));
    }
  }

  if (!config.useConstraits && config.visibility) {
    config.methods.push(this_setHidden(config.visibility));
  }

  if (config.hasOwnProperty("clickable")) {
    config.methods.push(this_setUserInteraction(rWS(cS(config.clickable))));
  }

  if (config.translationX) {
    var props = [{
      'id': '' + Math.random().toString(36).substring(2),
      'type': 'translation',
      'runOnRender': 'true',
      'easing': 'linear',
      'delay': '0',
      'duration': '1',
      'props': JSON.stringify([{ 'to': '' + config.translationX, 'prop': 'translationX', 'from': '0' }])
    }];

    config.methods.push(self_animate({ 'id': '' + config.id, 'json': JSON.stringify(props) }));
  }

  if (config.translationY) {
    var _props = [{
      'id': '' + Math.random().toString(36).substring(2),
      'type': 'translation',
      'runOnRender': 'true',
      'easing': 'linear',
      'delay': '0',
      'duration': '1',
      'props': JSON.stringify([{ 'to': '' + config.translationY, 'prop': 'translationY', 'from': '0' }])
    }];

    config.methods.push(self_animate({ 'id': '' + config.id, 'json': JSON.stringify(_props) }));
  }

  if (config.a_rotate) {
    //TODO: FIX THIS BRING IT OUTSIDE
    var _props2 = {
      "duration": config.a_duration,
      "id": config.id,
      "delay": config.a_delay,
      "option": config.a_option,
      "type": "rotation"
    };
    config.methods.push(self_animate(_props2));
  }

  if (config.hasOwnProperty("htmlText")) {
    config.methods.push(this_setHTMLText(config.htmlText));
  }

  if (config.hasOwnProperty("bringSubViewToFront")) {
    var viewTag = cS(config.id);
    config.methods.push(this_bringSubViewToFront(viewTag));
  }

  if (config.hasOwnProperty("contentMode")) {
    var contentMode = cS(config.contentMode);
    config.methods.push(this_setContentMode(contentMode));
  }

  if (config.onFocus) {
    config.methods.push(this_setOnFocusCallback(config.onFocus));
  }

  if (config.hasOwnProperty("onMerchantViewHeightChange")) {
    config.methods.push(this_setOnMerchantViewHeightChangeCallback(config.onMerchantViewHeightChange));
  }

  if (config.hasOwnProperty("pivotX")) {
    config.methods.push(this_pivotX(config.pivotX + ""));
  }

  if (config.hasOwnProperty("pivotY")) {
    config.methods.push(this_pivotY(config.pivotY + ""));
  }

  if (config.hasOwnProperty("onItemClick")) {
    config.methods.push(this_setOnItemClick(config.onItemClick));
  }

  if (config.statusBarStyle) {
    var enabled = cS(config.statusBarStyle);
    config.methods.push(this_setStatusBarStyle(enabled));
  }

  if (config.hasOwnProperty("enabled")) {
    var _enabled = cS(config.enabled);
    config.methods.push(this_setEnabled(_enabled));
  }

  if (config.hasOwnProperty("inputTypeI")) {
    var keyboardType = cS(config.inputTypeI);
    config.methods.push(this_setKeyboardType(keyboardType));
  }

  if (config.inputType) {
    var _keyboardType = config.inputType;
    if (_keyboardType == "numeric" || _keyboardType == "numericWithoutSuggestion") {
      config.inputType = 4;
    } else if (_keyboardType == "email") {
      config.inputType = 7;
    } else if (_keyboardType == "numericPassword") {
      config.inputType = 4;
      config.methods.push(this_setSecureTextEntry("1"));
    } else if (_keyboardType == "password") {
      config.inputType = 0;
      config.methods.push(this_setSecureTextEntry("1"));
    } else {
      config.inputType = 0;
    }
    config.methods.push(this_setKeyboardType(cS(config.inputType)));
  }

  if (config.hasOwnProperty("autoCapitalizationType")) {
    var _keyboardType2 = cS(config.autoCapitalizationType);
    config.methods.push(this_setAutoCapitalizationType(_keyboardType2));
  }

  if (config.hasOwnProperty("autoCorrectionType")) {
    var autoCorrectionType = cS(config.autoCorrectionType);
    config.methods.push(this_setAutoCorrectionType(autoCorrectionType));
  }

  if (config.hasOwnProperty("becomeFirstResponder")) {
    config.methods.push(this_becomeFirstResponder());
  }

  if (config.hasOwnProperty("setOn")) {
    var _enabled2 = cS(config.setOn);
    config.methods.push(this_setOn(_enabled2));
  }

  if (config.scrollToIndex) {
    var _enabled3 = cS(config.scrollToIndex);
    config.methods.push(this_scrollToIndex(_enabled3));
  }

  if (config.showVerticalScrollBar) {
    var _enabled4 = cS(config.showVerticalScrollBar);
    config.methods.push(this_showVerticalScrollBar(_enabled4));
  }

  if (config.lengthLimit) {
    var _enabled5 = cS(config.lengthLimit);
    config.methods.push(this_setTextLengthLimit(_enabled5));
  }

  if (config.hasOwnProperty("swypeEnabled")) {
    config.methods.push(this_setSwype(config.swypeEnabled));
  }

  if (config.hasOwnProperty("focus")) {
    config.methods.push(this_becomeFirstResponder(cS(config.focus)));
  }

  if (config.pattern) {
    var patStr = cS(config.pattern);
    var patArr = patStr.split(",");
    var patLen = patArr[patArr.length - 1];
    patStr = patArr.slice(0, patArr.length - 1).join(",");

    config.methods.push(this_setRegularExpression(cS(patStr)));
    config.methods.push(this_setTextLengthLimit(cS(patLen)));
  }

  if (config.regExp) {
    var _enabled7 = cS(config.regExp);
    config.methods.push(this_setRegularExpression(_enabled7));
  }

  if (config.removeCell) {
    var cellIndex = cS(config.removeCell);
    config.methods.push(this_removeCell(cellIndex));
  }

  if (config.secureTextEntry) {
    var _enabled8 = cS(config.secureTextEntry);
    config.methods.push(this_setSecureTextEntry(_enabled8));
  }

  if (config.hasOwnProperty('checked')) {
    config.methods.push(this_setOn(config.checked));
  }

  if (config.popupMenu) {
    config.methods.push(self_setPopupMenu(config.popupMenu, config.onMenuItemClick));
  }

  if (config.hasOwnProperty("alpha")) {
    config.methods.push(self_setAlpha(config.alpha));
  }

  if (config.animation) {
    var animProps = {
      viewTag: '' + config.id,
      json: config.animation
    };
    config.methods.push(self_animateNew(animProps));
  }

  if (config.hasOwnProperty("text")) {
    if (config.letterSpacing) {
      config.methods.push(this_setLetterSpacing(cS(config.letterSpacing)));
    }
    config.methods.push(this_setText(cS(config.text)));
  }

  if (config.cursorPosition) {
    config.methods.push(self_setCursorPosition(cS(config.id), cS(config.cursorPosition)));
  }

  if (config.onSwipe && typeof config.onSwipe === "function") {
    config.methods.push(this_setSwipeCallback(callbackMapper.map(config.onSwipe)));
  }

  if (config.hasOwnProperty("closeSwipe")) {
    config.methods.push(this_setCloseSwipe(config.closeSwipe));
  }

  if (config.hasOwnProperty("swypeEnabled")) {
    config.methods.push(this_setEnableSwype(config.swypeEnabled));
  }

  if (config.hasOwnProperty("listData") && config.hasOwnProperty("listItem")) {
    var item = JSON.parse(config.listItem);
    item.itemView = Android.createListData(config.id, item.itemView);
    config.methods.push(this_setupList(config.listData, JSON.stringify(item)));
  }

  if (config.hasOwnProperty("inlineAnimation")) {
    config.methods.push(this_inlineAnimation(config));
  }

  if (config.hasOwnProperty("clipsToBounds")) {
    config.methods.push(this_setClipsToBounds(config.clipsToBounds));
  }

  if (config.hasOwnProperty("cornerRadii")) {
    config.methods.push(this_setCornerCurves(config.cornerRadii));
  }

  config.currChildOffset = 0;
  config = transformKeys(config);

  return { config: config, type: type };
};

function self_animateNew(props) {
  return {
    "return": "false",
    "invokeOn": "self",
    "methodName": "animate:",
    "values": [props]
  };
}

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

function parseLayoutProps(type, config, key) {
  var isMobile = window.innerWidth < 700;
  if (typeof config[key] == "undefined" || config[key] == null) {
    delete config[key];
    return;
  }

  if (!config.style) {
    config.style = {};
    config.style.transform = "";
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

  if (key == "autofocus") {
    if (config.autofocus) {
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
    config.style.transform += "translateY(" + config[key] + "px) ";
  }

  if (key == "a_translationY") {
    config.animation.transform += "translateY(" + config[key] + "px) ";
  }

  if (key == "translationX") {
    config.style.transform += "translateX(" + config[key] + "px) ";
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
        inputType = "text";
        config.style["-webkit-text-security"] = "disc";
        config.style["-moz-text-security"] = "disc";
        config.style["text-security"] = "disc";
      } else {
        inputType = "password";
      }
    } else if (config.inputType == "disabled") {
      config.attributes.disabled = 'disabled';
    } else if (config.inputType == "numeric") {
      inputType = "number";
    }
    if (config.separator) {
      inputType = "text";
    }

    config.attributes.type = inputType;
  }

  if (key == "rotateImage") {
    if (config.rotateImage) {
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
  }
  if (key == "inputTypeI") {
    if (config.inputTypeI == 4) {
      config.attributes["inputmode"] = "numeric";
    }
  }

  if (key == "separator") {
    config.attributes["separator"] = config.separator;
  }
  if (key == "separatorRepeat") {
    config.attributes["separatorRepeat"] = config.separatorRepeat;
  }

  if (key == "myAttr") {
    config.attributes["myAttr"] = config.myAttr;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgud2ViLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXMvbGliL2Zvcm1hdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3FzL2xpYi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3FzL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vc3JjL1ByZXN0b1VJSW50ZXJmYWNlLmpzIiwid2VicGFjazovLy9zcmMvV0VCL0FuZHJvaWRJbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vL3NyYy9XRUIvSkJyaWRnZUludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly8vc3JjL1dFQi9SZW5kZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9XRUIvVmlld1BhZ2VBZGFwdGVyLmpzIiwid2VicGFjazovLy9zcmMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL2Jhc2VWaWV3LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0Ryb3Bkb3duQm94LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Ecm9wZG93blNlYXJjaEJveC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Td2l0Y2hCdXR0b24uanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wdXRlLmpzIiwid2VicGFjazovLy9zcmMvZG9tcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2RvbXMvd2ViLmpzIiwid2VicGFjazovLy9zcmMvaGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvYW5kcm9pZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvYW5kcm9pZC9tYXBQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXJzL2FuZHJvaWQvb2JqTWFwLmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy9hbmRyb2lkL3BhcnNlUGFyYW1zLmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy9jb21tb24vY2FsbGJhY2tNYXBwZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXJzL2NvbW1vbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXJzL2lvcy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXJzL2lvcy9mbGF0dGVuT2JqZWN0LmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy9pb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXJzL2lvcy9wYXJzZVBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvd2ViL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy93ZWIvcGFyc2VQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9pbml0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGluaXQ6IHJlcXVpcmUoXCIuL3NyYy9pbml0XCIpLFxuXHRkb21zIDogcmVxdWlyZShcIi4vc3JjL2RvbXNcIiksXG5cdGhhbmRsZXIgOiByZXF1aXJlKFwiLi9zcmMvaGFuZGxlclwiKSxcblx0aGVscGVycyA6IHJlcXVpcmUoXCIuL3NyYy9oZWxwZXJzXCIpLFxuXHRiYXNlVmlldyA6IHJlcXVpcmUoXCIuL3NyYy9iYXNlVmlld1wiKSxcblx0YW5pbWF0aW9uczogcmVxdWlyZSgnLi9zcmMvYW5pbWF0aW9ucycpLFxuXHRjYWxsYmFja01hcHBlcjogcmVxdWlyZSgnLi9zcmMvaGVscGVycy9jb21tb24vY2FsbGJhY2tNYXBwZXInKSxcblx0Z2V0T1M6IHJlcXVpcmUoJy4vc3JjL2hlbHBlcicpLmdldE9TLFxuXHRwcmVzdG9NZXJnZTogcmVxdWlyZSgnLi9zcmMvaGVscGVyJykubWVyZ2UsXG5cdHByZXN0b0Nsb25lOiByZXF1aXJlKCcuL3NyYy9oZWxwZXInKS5jbG9uZVxufSIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG52YXIgcGVyY2VudFR3ZW50aWVzID0gLyUyMC9nO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIEZvcm1hdCA9IHtcbiAgICBSRkMxNzM4OiAnUkZDMTczOCcsXG4gICAgUkZDMzk4NjogJ1JGQzM5ODYnXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWwuYXNzaWduKFxuICAgIHtcbiAgICAgICAgJ2RlZmF1bHQnOiBGb3JtYXQuUkZDMzk4NixcbiAgICAgICAgZm9ybWF0dGVyczoge1xuICAgICAgICAgICAgUkZDMTczODogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2UuY2FsbCh2YWx1ZSwgcGVyY2VudFR3ZW50aWVzLCAnKycpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJGQzM5ODY6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBGb3JtYXRcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBmb3JtYXRzID0gcmVxdWlyZSgnLi9mb3JtYXRzJyk7XG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGFycmF5UHJlZml4R2VuZXJhdG9ycyA9IHtcbiAgICBicmFja2V0czogZnVuY3Rpb24gYnJhY2tldHMocHJlZml4KSB7XG4gICAgICAgIHJldHVybiBwcmVmaXggKyAnW10nO1xuICAgIH0sXG4gICAgY29tbWE6ICdjb21tYScsXG4gICAgaW5kaWNlczogZnVuY3Rpb24gaW5kaWNlcyhwcmVmaXgsIGtleSkge1xuICAgICAgICByZXR1cm4gcHJlZml4ICsgJ1snICsga2V5ICsgJ10nO1xuICAgIH0sXG4gICAgcmVwZWF0OiBmdW5jdGlvbiByZXBlYXQocHJlZml4KSB7XG4gICAgICAgIHJldHVybiBwcmVmaXg7XG4gICAgfVxufTtcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xudmFyIHB1c2ggPSBBcnJheS5wcm90b3R5cGUucHVzaDtcbnZhciBwdXNoVG9BcnJheSA9IGZ1bmN0aW9uIChhcnIsIHZhbHVlT3JBcnJheSkge1xuICAgIHB1c2guYXBwbHkoYXJyLCBpc0FycmF5KHZhbHVlT3JBcnJheSkgPyB2YWx1ZU9yQXJyYXkgOiBbdmFsdWVPckFycmF5XSk7XG59O1xuXG52YXIgdG9JU08gPSBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZztcblxudmFyIGRlZmF1bHRGb3JtYXQgPSBmb3JtYXRzWydkZWZhdWx0J107XG52YXIgZGVmYXVsdHMgPSB7XG4gICAgYWRkUXVlcnlQcmVmaXg6IGZhbHNlLFxuICAgIGFsbG93RG90czogZmFsc2UsXG4gICAgY2hhcnNldDogJ3V0Zi04JyxcbiAgICBjaGFyc2V0U2VudGluZWw6IGZhbHNlLFxuICAgIGRlbGltaXRlcjogJyYnLFxuICAgIGVuY29kZTogdHJ1ZSxcbiAgICBlbmNvZGVyOiB1dGlscy5lbmNvZGUsXG4gICAgZW5jb2RlVmFsdWVzT25seTogZmFsc2UsXG4gICAgZm9ybWF0OiBkZWZhdWx0Rm9ybWF0LFxuICAgIGZvcm1hdHRlcjogZm9ybWF0cy5mb3JtYXR0ZXJzW2RlZmF1bHRGb3JtYXRdLFxuICAgIC8vIGRlcHJlY2F0ZWRcbiAgICBpbmRpY2VzOiBmYWxzZSxcbiAgICBzZXJpYWxpemVEYXRlOiBmdW5jdGlvbiBzZXJpYWxpemVEYXRlKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRvSVNPLmNhbGwoZGF0ZSk7XG4gICAgfSxcbiAgICBza2lwTnVsbHM6IGZhbHNlLFxuICAgIHN0cmljdE51bGxIYW5kbGluZzogZmFsc2Vcbn07XG5cbnZhciBpc05vbk51bGxpc2hQcmltaXRpdmUgPSBmdW5jdGlvbiBpc05vbk51bGxpc2hQcmltaXRpdmUodikge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gJ3N0cmluZydcbiAgICAgICAgfHwgdHlwZW9mIHYgPT09ICdudW1iZXInXG4gICAgICAgIHx8IHR5cGVvZiB2ID09PSAnYm9vbGVhbidcbiAgICAgICAgfHwgdHlwZW9mIHYgPT09ICdzeW1ib2wnXG4gICAgICAgIHx8IHR5cGVvZiB2ID09PSAnYmlnaW50Jztcbn07XG5cbnZhciBzdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkoXG4gICAgb2JqZWN0LFxuICAgIHByZWZpeCxcbiAgICBnZW5lcmF0ZUFycmF5UHJlZml4LFxuICAgIHN0cmljdE51bGxIYW5kbGluZyxcbiAgICBza2lwTnVsbHMsXG4gICAgZW5jb2RlcixcbiAgICBmaWx0ZXIsXG4gICAgc29ydCxcbiAgICBhbGxvd0RvdHMsXG4gICAgc2VyaWFsaXplRGF0ZSxcbiAgICBmb3JtYXR0ZXIsXG4gICAgZW5jb2RlVmFsdWVzT25seSxcbiAgICBjaGFyc2V0XG4pIHtcbiAgICB2YXIgb2JqID0gb2JqZWN0O1xuICAgIGlmICh0eXBlb2YgZmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9iaiA9IGZpbHRlcihwcmVmaXgsIG9iaik7XG4gICAgfSBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIG9iaiA9IHNlcmlhbGl6ZURhdGUob2JqKTtcbiAgICB9IGVsc2UgaWYgKGdlbmVyYXRlQXJyYXlQcmVmaXggPT09ICdjb21tYScgJiYgaXNBcnJheShvYmopKSB7XG4gICAgICAgIG9iaiA9IG9iai5qb2luKCcsJyk7XG4gICAgfVxuXG4gICAgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgICAgICBpZiAoc3RyaWN0TnVsbEhhbmRsaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZW5jb2RlciAmJiAhZW5jb2RlVmFsdWVzT25seSA/IGVuY29kZXIocHJlZml4LCBkZWZhdWx0cy5lbmNvZGVyLCBjaGFyc2V0LCAna2V5JykgOiBwcmVmaXg7XG4gICAgICAgIH1cblxuICAgICAgICBvYmogPSAnJztcbiAgICB9XG5cbiAgICBpZiAoaXNOb25OdWxsaXNoUHJpbWl0aXZlKG9iaikgfHwgdXRpbHMuaXNCdWZmZXIob2JqKSkge1xuICAgICAgICBpZiAoZW5jb2Rlcikge1xuICAgICAgICAgICAgdmFyIGtleVZhbHVlID0gZW5jb2RlVmFsdWVzT25seSA/IHByZWZpeCA6IGVuY29kZXIocHJlZml4LCBkZWZhdWx0cy5lbmNvZGVyLCBjaGFyc2V0LCAna2V5Jyk7XG4gICAgICAgICAgICByZXR1cm4gW2Zvcm1hdHRlcihrZXlWYWx1ZSkgKyAnPScgKyBmb3JtYXR0ZXIoZW5jb2RlcihvYmosIGRlZmF1bHRzLmVuY29kZXIsIGNoYXJzZXQsICd2YWx1ZScpKV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtmb3JtYXR0ZXIocHJlZml4KSArICc9JyArIGZvcm1hdHRlcihTdHJpbmcob2JqKSldO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZXMgPSBbXTtcblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH1cblxuICAgIHZhciBvYmpLZXlzO1xuICAgIGlmIChpc0FycmF5KGZpbHRlcikpIHtcbiAgICAgICAgb2JqS2V5cyA9IGZpbHRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgIG9iaktleXMgPSBzb3J0ID8ga2V5cy5zb3J0KHNvcnQpIDoga2V5cztcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iaktleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IG9iaktleXNbaV07XG5cbiAgICAgICAgaWYgKHNraXBOdWxscyAmJiBvYmpba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgICAgICBwdXNoVG9BcnJheSh2YWx1ZXMsIHN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICBvYmpba2V5XSxcbiAgICAgICAgICAgICAgICB0eXBlb2YgZ2VuZXJhdGVBcnJheVByZWZpeCA9PT0gJ2Z1bmN0aW9uJyA/IGdlbmVyYXRlQXJyYXlQcmVmaXgocHJlZml4LCBrZXkpIDogcHJlZml4LFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlQXJyYXlQcmVmaXgsXG4gICAgICAgICAgICAgICAgc3RyaWN0TnVsbEhhbmRsaW5nLFxuICAgICAgICAgICAgICAgIHNraXBOdWxscyxcbiAgICAgICAgICAgICAgICBlbmNvZGVyLFxuICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICBzb3J0LFxuICAgICAgICAgICAgICAgIGFsbG93RG90cyxcbiAgICAgICAgICAgICAgICBzZXJpYWxpemVEYXRlLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlcixcbiAgICAgICAgICAgICAgICBlbmNvZGVWYWx1ZXNPbmx5LFxuICAgICAgICAgICAgICAgIGNoYXJzZXRcbiAgICAgICAgICAgICkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHVzaFRvQXJyYXkodmFsdWVzLCBzdHJpbmdpZnkoXG4gICAgICAgICAgICAgICAgb2JqW2tleV0sXG4gICAgICAgICAgICAgICAgcHJlZml4ICsgKGFsbG93RG90cyA/ICcuJyArIGtleSA6ICdbJyArIGtleSArICddJyksXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICAgICAgICAgICAgICBzdHJpY3ROdWxsSGFuZGxpbmcsXG4gICAgICAgICAgICAgICAgc2tpcE51bGxzLFxuICAgICAgICAgICAgICAgIGVuY29kZXIsXG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIHNvcnQsXG4gICAgICAgICAgICAgICAgYWxsb3dEb3RzLFxuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZURhdGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyLFxuICAgICAgICAgICAgICAgIGVuY29kZVZhbHVlc09ubHksXG4gICAgICAgICAgICAgICAgY2hhcnNldFxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xufTtcblxudmFyIG5vcm1hbGl6ZVN0cmluZ2lmeU9wdGlvbnMgPSBmdW5jdGlvbiBub3JtYWxpemVTdHJpbmdpZnlPcHRpb25zKG9wdHMpIHtcbiAgICBpZiAoIW9wdHMpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmVuY29kZXIgIT09IG51bGwgJiYgb3B0cy5lbmNvZGVyICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9wdHMuZW5jb2RlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFbmNvZGVyIGhhcyB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHZhciBjaGFyc2V0ID0gb3B0cy5jaGFyc2V0IHx8IGRlZmF1bHRzLmNoYXJzZXQ7XG4gICAgaWYgKHR5cGVvZiBvcHRzLmNoYXJzZXQgIT09ICd1bmRlZmluZWQnICYmIG9wdHMuY2hhcnNldCAhPT0gJ3V0Zi04JyAmJiBvcHRzLmNoYXJzZXQgIT09ICdpc28tODg1OS0xJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgY2hhcnNldCBvcHRpb24gbXVzdCBiZSBlaXRoZXIgdXRmLTgsIGlzby04ODU5LTEsIG9yIHVuZGVmaW5lZCcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXQgPSBmb3JtYXRzWydkZWZhdWx0J107XG4gICAgaWYgKHR5cGVvZiBvcHRzLmZvcm1hdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKCFoYXMuY2FsbChmb3JtYXRzLmZvcm1hdHRlcnMsIG9wdHMuZm9ybWF0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBmb3JtYXQgb3B0aW9uIHByb3ZpZGVkLicpO1xuICAgICAgICB9XG4gICAgICAgIGZvcm1hdCA9IG9wdHMuZm9ybWF0O1xuICAgIH1cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0cy5mb3JtYXR0ZXJzW2Zvcm1hdF07XG5cbiAgICB2YXIgZmlsdGVyID0gZGVmYXVsdHMuZmlsdGVyO1xuICAgIGlmICh0eXBlb2Ygb3B0cy5maWx0ZXIgPT09ICdmdW5jdGlvbicgfHwgaXNBcnJheShvcHRzLmZpbHRlcikpIHtcbiAgICAgICAgZmlsdGVyID0gb3B0cy5maWx0ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkUXVlcnlQcmVmaXg6IHR5cGVvZiBvcHRzLmFkZFF1ZXJ5UHJlZml4ID09PSAnYm9vbGVhbicgPyBvcHRzLmFkZFF1ZXJ5UHJlZml4IDogZGVmYXVsdHMuYWRkUXVlcnlQcmVmaXgsXG4gICAgICAgIGFsbG93RG90czogdHlwZW9mIG9wdHMuYWxsb3dEb3RzID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRzLmFsbG93RG90cyA6ICEhb3B0cy5hbGxvd0RvdHMsXG4gICAgICAgIGNoYXJzZXQ6IGNoYXJzZXQsXG4gICAgICAgIGNoYXJzZXRTZW50aW5lbDogdHlwZW9mIG9wdHMuY2hhcnNldFNlbnRpbmVsID09PSAnYm9vbGVhbicgPyBvcHRzLmNoYXJzZXRTZW50aW5lbCA6IGRlZmF1bHRzLmNoYXJzZXRTZW50aW5lbCxcbiAgICAgICAgZGVsaW1pdGVyOiB0eXBlb2Ygb3B0cy5kZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdHMuZGVsaW1pdGVyIDogb3B0cy5kZWxpbWl0ZXIsXG4gICAgICAgIGVuY29kZTogdHlwZW9mIG9wdHMuZW5jb2RlID09PSAnYm9vbGVhbicgPyBvcHRzLmVuY29kZSA6IGRlZmF1bHRzLmVuY29kZSxcbiAgICAgICAgZW5jb2RlcjogdHlwZW9mIG9wdHMuZW5jb2RlciA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMuZW5jb2RlciA6IGRlZmF1bHRzLmVuY29kZXIsXG4gICAgICAgIGVuY29kZVZhbHVlc09ubHk6IHR5cGVvZiBvcHRzLmVuY29kZVZhbHVlc09ubHkgPT09ICdib29sZWFuJyA/IG9wdHMuZW5jb2RlVmFsdWVzT25seSA6IGRlZmF1bHRzLmVuY29kZVZhbHVlc09ubHksXG4gICAgICAgIGZpbHRlcjogZmlsdGVyLFxuICAgICAgICBmb3JtYXR0ZXI6IGZvcm1hdHRlcixcbiAgICAgICAgc2VyaWFsaXplRGF0ZTogdHlwZW9mIG9wdHMuc2VyaWFsaXplRGF0ZSA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMuc2VyaWFsaXplRGF0ZSA6IGRlZmF1bHRzLnNlcmlhbGl6ZURhdGUsXG4gICAgICAgIHNraXBOdWxsczogdHlwZW9mIG9wdHMuc2tpcE51bGxzID09PSAnYm9vbGVhbicgPyBvcHRzLnNraXBOdWxscyA6IGRlZmF1bHRzLnNraXBOdWxscyxcbiAgICAgICAgc29ydDogdHlwZW9mIG9wdHMuc29ydCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMuc29ydCA6IG51bGwsXG4gICAgICAgIHN0cmljdE51bGxIYW5kbGluZzogdHlwZW9mIG9wdHMuc3RyaWN0TnVsbEhhbmRsaW5nID09PSAnYm9vbGVhbicgPyBvcHRzLnN0cmljdE51bGxIYW5kbGluZyA6IGRlZmF1bHRzLnN0cmljdE51bGxIYW5kbGluZ1xuICAgIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG9wdHMpIHtcbiAgICB2YXIgb2JqID0gb2JqZWN0O1xuICAgIHZhciBvcHRpb25zID0gbm9ybWFsaXplU3RyaW5naWZ5T3B0aW9ucyhvcHRzKTtcblxuICAgIHZhciBvYmpLZXlzO1xuICAgIHZhciBmaWx0ZXI7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGZpbHRlciA9IG9wdGlvbnMuZmlsdGVyO1xuICAgICAgICBvYmogPSBmaWx0ZXIoJycsIG9iaik7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG9wdGlvbnMuZmlsdGVyKSkge1xuICAgICAgICBmaWx0ZXIgPSBvcHRpb25zLmZpbHRlcjtcbiAgICAgICAgb2JqS2V5cyA9IGZpbHRlcjtcbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgdmFyIGFycmF5Rm9ybWF0O1xuICAgIGlmIChvcHRzICYmIG9wdHMuYXJyYXlGb3JtYXQgaW4gYXJyYXlQcmVmaXhHZW5lcmF0b3JzKSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gb3B0cy5hcnJheUZvcm1hdDtcbiAgICB9IGVsc2UgaWYgKG9wdHMgJiYgJ2luZGljZXMnIGluIG9wdHMpIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSBvcHRzLmluZGljZXMgPyAnaW5kaWNlcycgOiAncmVwZWF0JztcbiAgICB9IGVsc2Uge1xuICAgICAgICBhcnJheUZvcm1hdCA9ICdpbmRpY2VzJztcbiAgICB9XG5cbiAgICB2YXIgZ2VuZXJhdGVBcnJheVByZWZpeCA9IGFycmF5UHJlZml4R2VuZXJhdG9yc1thcnJheUZvcm1hdF07XG5cbiAgICBpZiAoIW9iaktleXMpIHtcbiAgICAgICAgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuc29ydCkge1xuICAgICAgICBvYmpLZXlzLnNvcnQob3B0aW9ucy5zb3J0KTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iaktleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IG9iaktleXNbaV07XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2tpcE51bGxzICYmIG9ialtrZXldID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBwdXNoVG9BcnJheShrZXlzLCBzdHJpbmdpZnkoXG4gICAgICAgICAgICBvYmpba2V5XSxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGdlbmVyYXRlQXJyYXlQcmVmaXgsXG4gICAgICAgICAgICBvcHRpb25zLnN0cmljdE51bGxIYW5kbGluZyxcbiAgICAgICAgICAgIG9wdGlvbnMuc2tpcE51bGxzLFxuICAgICAgICAgICAgb3B0aW9ucy5lbmNvZGUgPyBvcHRpb25zLmVuY29kZXIgOiBudWxsLFxuICAgICAgICAgICAgb3B0aW9ucy5maWx0ZXIsXG4gICAgICAgICAgICBvcHRpb25zLnNvcnQsXG4gICAgICAgICAgICBvcHRpb25zLmFsbG93RG90cyxcbiAgICAgICAgICAgIG9wdGlvbnMuc2VyaWFsaXplRGF0ZSxcbiAgICAgICAgICAgIG9wdGlvbnMuZm9ybWF0dGVyLFxuICAgICAgICAgICAgb3B0aW9ucy5lbmNvZGVWYWx1ZXNPbmx5LFxuICAgICAgICAgICAgb3B0aW9ucy5jaGFyc2V0XG4gICAgICAgICkpO1xuICAgIH1cblxuICAgIHZhciBqb2luZWQgPSBrZXlzLmpvaW4ob3B0aW9ucy5kZWxpbWl0ZXIpO1xuICAgIHZhciBwcmVmaXggPSBvcHRpb25zLmFkZFF1ZXJ5UHJlZml4ID09PSB0cnVlID8gJz8nIDogJyc7XG5cbiAgICBpZiAob3B0aW9ucy5jaGFyc2V0U2VudGluZWwpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuY2hhcnNldCA9PT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgICAgICAvLyBlbmNvZGVVUklDb21wb25lbnQoJyYjMTAwMDM7JyksIHRoZSBcIm51bWVyaWMgZW50aXR5XCIgcmVwcmVzZW50YXRpb24gb2YgYSBjaGVja21hcmtcbiAgICAgICAgICAgIHByZWZpeCArPSAndXRmOD0lMjYlMjMxMDAwMyUzQiYnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZW5jb2RlVVJJQ29tcG9uZW50KCfinJMnKVxuICAgICAgICAgICAgcHJlZml4ICs9ICd1dGY4PSVFMiU5QyU5MyYnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGpvaW5lZC5sZW5ndGggPiAwID8gcHJlZml4ICsgam9pbmVkIDogJyc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxudmFyIGhleFRhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gICAgICAgIGFycmF5LnB1c2goJyUnICsgKChpIDwgMTYgPyAnMCcgOiAnJykgKyBpLnRvU3RyaW5nKDE2KSkudG9VcHBlckNhc2UoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5O1xufSgpKTtcblxudmFyIGNvbXBhY3RRdWV1ZSA9IGZ1bmN0aW9uIGNvbXBhY3RRdWV1ZShxdWV1ZSkge1xuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAxKSB7XG4gICAgICAgIHZhciBpdGVtID0gcXVldWUucG9wKCk7XG4gICAgICAgIHZhciBvYmogPSBpdGVtLm9ialtpdGVtLnByb3BdO1xuXG4gICAgICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgIHZhciBjb21wYWN0ZWQgPSBbXTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBvYmoubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9ialtqXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGFjdGVkLnB1c2gob2JqW2pdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGl0ZW0ub2JqW2l0ZW0ucHJvcF0gPSBjb21wYWN0ZWQ7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG52YXIgYXJyYXlUb09iamVjdCA9IGZ1bmN0aW9uIGFycmF5VG9PYmplY3Qoc291cmNlLCBvcHRpb25zKSB7XG4gICAgdmFyIG9iaiA9IG9wdGlvbnMgJiYgb3B0aW9ucy5wbGFpbk9iamVjdHMgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2UubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2VbaV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBvYmpbaV0gPSBzb3VyY2VbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxudmFyIG1lcmdlID0gZnVuY3Rpb24gbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICAvKiBlc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246IDAgKi9cbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc291cmNlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAoaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgICAgICAgICB0YXJnZXQucHVzaChzb3VyY2UpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCAmJiB0eXBlb2YgdGFyZ2V0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKChvcHRpb25zICYmIChvcHRpb25zLnBsYWluT2JqZWN0cyB8fCBvcHRpb25zLmFsbG93UHJvdG90eXBlcykpIHx8ICFoYXMuY2FsbChPYmplY3QucHJvdG90eXBlLCBzb3VyY2UpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3NvdXJjZV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFt0YXJnZXQsIHNvdXJjZV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGlmICghdGFyZ2V0IHx8IHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBbdGFyZ2V0XS5jb25jYXQoc291cmNlKTtcbiAgICB9XG5cbiAgICB2YXIgbWVyZ2VUYXJnZXQgPSB0YXJnZXQ7XG4gICAgaWYgKGlzQXJyYXkodGFyZ2V0KSAmJiAhaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICAgIG1lcmdlVGFyZ2V0ID0gYXJyYXlUb09iamVjdCh0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KHRhcmdldCkgJiYgaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgICBpZiAoaGFzLmNhbGwodGFyZ2V0LCBpKSkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXRJdGVtID0gdGFyZ2V0W2ldO1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRJdGVtICYmIHR5cGVvZiB0YXJnZXRJdGVtID09PSAnb2JqZWN0JyAmJiBpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRbaV0gPSBtZXJnZSh0YXJnZXRJdGVtLCBpdGVtLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldFtpXSA9IGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhzb3VyY2UpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gc291cmNlW2tleV07XG5cbiAgICAgICAgaWYgKGhhcy5jYWxsKGFjYywga2V5KSkge1xuICAgICAgICAgICAgYWNjW2tleV0gPSBtZXJnZShhY2Nba2V5XSwgdmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWNjW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIG1lcmdlVGFyZ2V0KTtcbn07XG5cbnZhciBhc3NpZ24gPSBmdW5jdGlvbiBhc3NpZ25TaW5nbGVTb3VyY2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc291cmNlKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgICAgIGFjY1trZXldID0gc291cmNlW2tleV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgdGFyZ2V0KTtcbn07XG5cbnZhciBkZWNvZGUgPSBmdW5jdGlvbiAoc3RyLCBkZWNvZGVyLCBjaGFyc2V0KSB7XG4gICAgdmFyIHN0cldpdGhvdXRQbHVzID0gc3RyLnJlcGxhY2UoL1xcKy9nLCAnICcpO1xuICAgIGlmIChjaGFyc2V0ID09PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgLy8gdW5lc2NhcGUgbmV2ZXIgdGhyb3dzLCBubyB0cnkuLi5jYXRjaCBuZWVkZWQ6XG4gICAgICAgIHJldHVybiBzdHJXaXRob3V0UGx1cy5yZXBsYWNlKC8lWzAtOWEtZl17Mn0vZ2ksIHVuZXNjYXBlKTtcbiAgICB9XG4gICAgLy8gdXRmLThcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0cldpdGhvdXRQbHVzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBzdHJXaXRob3V0UGx1cztcbiAgICB9XG59O1xuXG52YXIgZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKHN0ciwgZGVmYXVsdEVuY29kZXIsIGNoYXJzZXQpIHtcbiAgICAvLyBUaGlzIGNvZGUgd2FzIG9yaWdpbmFsbHkgd3JpdHRlbiBieSBCcmlhbiBXaGl0ZSAobXNjZGV4KSBmb3IgdGhlIGlvLmpzIGNvcmUgcXVlcnlzdHJpbmcgbGlicmFyeS5cbiAgICAvLyBJdCBoYXMgYmVlbiBhZGFwdGVkIGhlcmUgZm9yIHN0cmljdGVyIGFkaGVyZW5jZSB0byBSRkMgMzk4NlxuICAgIGlmIChzdHIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgdmFyIHN0cmluZyA9IHN0cjtcbiAgICBpZiAodHlwZW9mIHN0ciA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgc3RyaW5nID0gU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN0cik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgICAgICBzdHJpbmcgPSBTdHJpbmcoc3RyKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhcnNldCA9PT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgIHJldHVybiBlc2NhcGUoc3RyaW5nKS5yZXBsYWNlKC8ldVswLTlhLWZdezR9L2dpLCBmdW5jdGlvbiAoJDApIHtcbiAgICAgICAgICAgIHJldHVybiAnJTI2JTIzJyArIHBhcnNlSW50KCQwLnNsaWNlKDIpLCAxNikgKyAnJTNCJztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIG91dCA9ICcnO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBjID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgYyA9PT0gMHgyRCAvLyAtXG4gICAgICAgICAgICB8fCBjID09PSAweDJFIC8vIC5cbiAgICAgICAgICAgIHx8IGMgPT09IDB4NUYgLy8gX1xuICAgICAgICAgICAgfHwgYyA9PT0gMHg3RSAvLyB+XG4gICAgICAgICAgICB8fCAoYyA+PSAweDMwICYmIGMgPD0gMHgzOSkgLy8gMC05XG4gICAgICAgICAgICB8fCAoYyA+PSAweDQxICYmIGMgPD0gMHg1QSkgLy8gYS16XG4gICAgICAgICAgICB8fCAoYyA+PSAweDYxICYmIGMgPD0gMHg3QSkgLy8gQS1aXG4gICAgICAgICkge1xuICAgICAgICAgICAgb3V0ICs9IHN0cmluZy5jaGFyQXQoaSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjIDwgMHg4MCkge1xuICAgICAgICAgICAgb3V0ID0gb3V0ICsgaGV4VGFibGVbY107XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjIDwgMHg4MDApIHtcbiAgICAgICAgICAgIG91dCA9IG91dCArIChoZXhUYWJsZVsweEMwIHwgKGMgPj4gNildICsgaGV4VGFibGVbMHg4MCB8IChjICYgMHgzRildKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGMgPCAweEQ4MDAgfHwgYyA+PSAweEUwMDApIHtcbiAgICAgICAgICAgIG91dCA9IG91dCArIChoZXhUYWJsZVsweEUwIHwgKGMgPj4gMTIpXSArIGhleFRhYmxlWzB4ODAgfCAoKGMgPj4gNikgJiAweDNGKV0gKyBoZXhUYWJsZVsweDgwIHwgKGMgJiAweDNGKV0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpICs9IDE7XG4gICAgICAgIGMgPSAweDEwMDAwICsgKCgoYyAmIDB4M0ZGKSA8PCAxMCkgfCAoc3RyaW5nLmNoYXJDb2RlQXQoaSkgJiAweDNGRikpO1xuICAgICAgICBvdXQgKz0gaGV4VGFibGVbMHhGMCB8IChjID4+IDE4KV1cbiAgICAgICAgICAgICsgaGV4VGFibGVbMHg4MCB8ICgoYyA+PiAxMikgJiAweDNGKV1cbiAgICAgICAgICAgICsgaGV4VGFibGVbMHg4MCB8ICgoYyA+PiA2KSAmIDB4M0YpXVxuICAgICAgICAgICAgKyBoZXhUYWJsZVsweDgwIHwgKGMgJiAweDNGKV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbn07XG5cbnZhciBjb21wYWN0ID0gZnVuY3Rpb24gY29tcGFjdCh2YWx1ZSkge1xuICAgIHZhciBxdWV1ZSA9IFt7IG9iajogeyBvOiB2YWx1ZSB9LCBwcm9wOiAnbycgfV07XG4gICAgdmFyIHJlZnMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBxdWV1ZVtpXTtcbiAgICAgICAgdmFyIG9iaiA9IGl0ZW0ub2JqW2l0ZW0ucHJvcF07XG5cbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGtleXMubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2pdO1xuICAgICAgICAgICAgdmFyIHZhbCA9IG9ialtrZXldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbCAhPT0gbnVsbCAmJiByZWZzLmluZGV4T2YodmFsKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKHsgb2JqOiBvYmosIHByb3A6IGtleSB9KTtcbiAgICAgICAgICAgICAgICByZWZzLnB1c2godmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBhY3RRdWV1ZShxdWV1ZSk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG59O1xuXG52YXIgaXNSZWdFeHAgPSBmdW5jdGlvbiBpc1JlZ0V4cChvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufTtcblxudmFyIGlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIob2JqKSB7XG4gICAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAhIShvYmouY29uc3RydWN0b3IgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopKTtcbn07XG5cbnZhciBjb21iaW5lID0gZnVuY3Rpb24gY29tYmluZShhLCBiKSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdChhLCBiKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGFycmF5VG9PYmplY3Q6IGFycmF5VG9PYmplY3QsXG4gICAgYXNzaWduOiBhc3NpZ24sXG4gICAgY29tYmluZTogY29tYmluZSxcbiAgICBjb21wYWN0OiBjb21wYWN0LFxuICAgIGRlY29kZTogZGVjb2RlLFxuICAgIGVuY29kZTogZW5jb2RlLFxuICAgIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgICBpc1JlZ0V4cDogaXNSZWdFeHAsXG4gICAgbWVyZ2U6IG1lcmdlXG59O1xuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG52YXIgcHJlc3RvRG9tID0gcmVxdWlyZShcIi4vZG9tc1wiKTtcbnZhciBoZWxwZXJzID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKVxudmFyIHdlYlBhcnNlUGFyYW1zO1xudmFyIGlPU1BhcnNlUGFyYW1zO1xudmFyIHBhcnNlUGFyYW1zO1xuY29uc3QgaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXInKTtcblxuaWYgKHdpbmRvdy5fX09TID09PSBcIldFQlwiKSB7XG4gIHdlYlBhcnNlUGFyYW1zID0gaGVscGVycy53ZWIucGFyc2VQYXJhbXM7XG59IGVsc2UgaWYgKHdpbmRvdy5fX09TID09PSBcIklPU1wiKSB7XG4gIGlPU1BhcnNlUGFyYW1zID0gaGVscGVycy5pb3MucGFyc2VQYXJhbXM7XG59IGVsc2UgaWYgKHdpbmRvdy5fX09TID09PSBcIkFORFJPSURcIikge1xuICBwYXJzZVBhcmFtcyA9IGhlbHBlcnMuYW5kcm9pZC5wYXJzZVBhcmFtcztcbn1cblxuZnVuY3Rpb24gZG9tQWxsKGVsZW0pIHtcbiAgaWYgKCFlbGVtLl9fcmVmKSB7XG4gICAgZWxlbS5fX3JlZiA9IGNyZWF0ZVByZXN0b0VsZW1lbnQoKTtcbiAgfVxuXG4gIGlmIChlbGVtLnByb3BzLmlkKSB7XG4gICAgZWxlbS5fX3JlZi5fX2lkID0gcGFyc2VJbnQoZWxlbS5wcm9wcy5pZCwgMTApIHx8IGVsZW0uX19yZWYuX19pZDtcbiAgfVxuXG4gIHZhciB0eXBlID0gaGVscGVyLmNsb25lKGVsZW0udHlwZSxudWxsKTtcbiAgdmFyIHByb3BzID0gaGVscGVyLmNsb25lKGVsZW0ucHJvcHMsbnVsbCk7XG5cbiAgaWYgKHByb3BzLmZvY3VzID09IGZhbHNlICYmICB3aW5kb3cuX19PUyA9PT0gXCJBTkRST0lEXCIpIHtcbiAgICBkZWxldGUgcHJvcHMuZm9jdXM7XG4gIH1cblxuICB2YXIgY2hpbGRyZW4gPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW0uY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjaGlsZHJlbi5wdXNoKGRvbUFsbChlbGVtLmNoaWxkcmVuW2ldKSk7XG4gIH1cblxuXG4gIGlmIChfX09TID09IFwiV0VCXCIgJiYgcHJvcHMub25SZXNpemUpIHtcbiAgICB3aW5kb3cuX19yZXNpemVFdmVudCA9IHByb3BzLm9uUmVzaXplO1xuICB9XG5cbiAgcHJvcHMuaWQgPSBlbGVtLl9fcmVmLl9faWQ7XG4gIGlmKGVsZW0ucGFyZW50VHlwZSAmJiB3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIilcbiAgICByZXR1cm4gcHJlc3RvRG9tKHtlbGVtVHlwZTogdHlwZSwgcGFyZW50VHlwZTogZWxlbS5wYXJlbnRUeXBlfSwgcHJvcHMsIGNoaWxkcmVuKTtcblxuICByZXR1cm4gcHJlc3RvRG9tKHR5cGUsIHByb3BzLCBjaGlsZHJlbik7XG59XG5cbmZ1bmN0aW9uIGdldERvbVRvUmVuZGVyKGVsZW0pIHtcbiAgdmFyIHJlcyA9IGRvbUFsbChlbGVtKTtcbiAgaWYgKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlcyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxufVxuXG5cbi8vIE5vdCBleHBvcnRlZFxuZnVuY3Rpb24gY21kRm9yQW5kcm9pZChjb25maWcsIHNldCwgdHlwZSkge1xuICBpZiAoc2V0KSB7XG4gICAgaWYgKGNvbmZpZy5pZCkge1xuICAgICAgdmFyIG9iaiA9IHBhcnNlUGFyYW1zKHR5cGUsIGNvbmZpZywgXCJzZXRcIik7XG4gICAgICB2YXIgY21kID0gb2JqLnJ1bkluVUkucmVwbGFjZShcInRoaXMtPnNldElkXCIsIFwic2V0X3ZpZXc9Y3R4LT5maW5kVmlld0J5SWRcIikucmVwbGFjZSgvdGhpcy0+L2csIFwiZ2V0X3ZpZXctPlwiKTtcbiAgICAgIGNtZCA9IGNtZC5yZXBsYWNlKC9QQVJBTV9DVFJfSE9MREVSW147XSovZywgXCJnZXRfdmlldy0+Z2V0TGF5b3V0UGFyYW1zO1wiKTtcbiAgICAgIG9iai5ydW5JblVJID0gY21kO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihcIklEIG51bGwsIHRoaXMgaXMgbm90IHN1cHBvc2VkIHRvIGhhcHBlbi4gRGVidWcgdGhpcyBvci9hbmQgcmFpc2UgYSBpc3N1ZSBpbiBiaXRidWNrZXQuXCIpO1xuICAgIH1cbiAgICByZXR1cm4ge307XG4gIH1cblxuICB2YXIgX2lkID0gY29uZmlnLmlkO1xuICB2YXIgY21kID0gXCJzZXRfdmlldz1jdHgtPmZpbmRWaWV3QnlJZDppX1wiICsgX2lkICsgXCI7XCI7XG4gIC8vIHZhciBydW5JblVJO1xuICBkZWxldGUgY29uZmlnLmlkO1xuICBjb25maWcucm9vdCA9IFwidHJ1ZVwiO1xuICB2YXIgb2JqID0gcGFyc2VQYXJhbXModHlwZSwgY29uZmlnLCBcImdldFwiKTtcbiAgb2JqLnJ1bkluVUkgPSBjbWQgKyBvYmoucnVuSW5VSSArICc7JztcbiAgb2JqLmlkID0gX2lkO1xuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBnZXRSdW5JblVJQ21kKHByb3ApIHtcbiAgdmFyIGNtZDtcbiAgaWYgKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKSB7XG4gICAgY21kID0gY21kRm9yQW5kcm9pZChwcm9wLCB0cnVlLCBcImxpbmVhckxheW91dFwiKS5ydW5JblVJO1xuICB9IGVsc2UgaWYgKHdpbmRvdy5fX09TID09IFwiSU9TXCIpe1xuICAgIGNtZCA9IHByb3A7XG4gIH0gZWxzZSB7XG4gICAgY21kID0gd2ViUGFyc2VQYXJhbXMoXCJsaW5lYXJMYXlvdXRcIiwgcHJvcCwgXCJzZXRcIik7XG4gIH1cbiAgcmV0dXJuIGNtZDtcbn1cblxuXG5cbi8vIE5vdCBleHBvcnRlZFxuZnVuY3Rpb24gYXBwbHlQcm9wKGVsZW1lbnQsIGF0dHJpYnV0ZSwgc2V0KSB7XG4gIHZhciBwcm9wID0ge1xuICAgIGlkOiBlbGVtZW50Ll9fcmVmLl9faWRcbiAgfVxuICBwcm9wW2F0dHJpYnV0ZS52YWx1ZTBdID0gYXR0cmlidXRlLnZhbHVlMTtcblxuICBpZiAoYXR0cmlidXRlLnZhbHVlMCA9PSAnZm9jdXMnICYmIGF0dHJpYnV0ZS52YWx1ZTEgPT0gZmFsc2UgJiYgIHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKSB7XG4gICAgdmFyIGNtZCA9IGNtZEZvckFuZHJvaWQocHJvcCwgc2V0LCBlbGVtZW50LnR5cGUpO1xuICAgIGlmIChBbmRyb2lkLnVwZGF0ZVByb3BlcnRpZXMpIHtcbiAgICAgIEFuZHJvaWQudXBkYXRlUHJvcGVydGllcyhKU09OLnN0cmluZ2lmeShjbWQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgQW5kcm9pZC5ydW5JblVJKGNtZC5ydW5JblVJLCBudWxsKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAod2luZG93Ll9fT1MgPT0gXCJJT1NcIil7XG4gICAgQW5kcm9pZC5ydW5JblVJKHByb3ApO1xuICB9IGVsc2Uge1xuICAgIEFuZHJvaWQucnVuSW5VSSh3ZWJQYXJzZVBhcmFtcyhcImxpbmVhckxheW91dFwiLCBwcm9wLCBcInNldFwiKSk7XG4gIH1cbiAgLy8gQW5kcm9pZC5ydW5JblVJKHBhcnNlUGFyYW1zKFwibGluZWFyTGF5b3V0XCIsIHByb3AsIFwic2V0XCIpKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVZpZXcoZWxlbWVudCwgYXR0cmlidXRlLCByZW1vdmVQcm9wKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwiUkVQTEFDRSBWSUVXXCIsIGVsZW1lbnQuX19yZWYuX19pZCwgZWxlbWVudC5wcm9wcyk7XG4gIHZhciBwcm9wcyA9IGhlbHBlci5jbG9uZShlbGVtZW50LnByb3BzLG51bGwpO1xuICBwcm9wcy5pZCA9IGVsZW1lbnQuX19yZWYuX19pZDtcbiAgdmFyIHJlcDtcbiAgdmFyIHZpZXdHcm91cHMgPSBbXCJsaW5lYXJMYXlvdXRcIiwgXCJyZWxhdGl2ZUxheW91dFwiLCBcInNjcm9sbFZpZXdcIiwgXCJmcmFtZUxheW91dFwiLCBcImhvcml6b250YWxTY3JvbGxWaWV3XCJdO1xuXG4gIGlmICh2aWV3R3JvdXBzLmluZGV4T2YoZWxlbWVudC50eXBlKSAhPSAtMSl7XG4gICAgcHJvcHMucm9vdCA9IHRydWU7XG4gICAgcmVwID0gcHJlc3RvRG9tKGVsZW1lbnQudHlwZSwgcHJvcHMsIFtdKTtcbiAgfSBlbHNlIGlmICh3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIikge1xuICAgIHJlcCA9IHByZXN0b0RvbSh7ZWxlbVR5cGU6IGVsZW1lbnQudHlwZSwgcGFyZW50VHlwZTogZWxlbWVudC5wYXJlbnROb2RlLnR5cGV9LCBwcm9wcywgW10pO1xuICB9IGVsc2Uge1xuICAgIHJlcCA9IHByZXN0b0RvbShlbGVtZW50LnR5cGUsIHByb3BzLCBbXSk7XG4gIH1cbiAgaWYod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpe1xuICAgIEFuZHJvaWQucmVwbGFjZVZpZXcoSlNPTi5zdHJpbmdpZnkocmVwKSwgZWxlbWVudC5fX3JlZi5fX2lkKTtcbiAgfSBlbHNlIHtcbiAgICBBbmRyb2lkLnJlcGxhY2VWaWV3KHJlcCwgZWxlbWVudC5fX3JlZi5fX2lkKTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVByZXN0b0VsZW1lbnQoKSB7XG4gICAgaWYodHlwZW9mKHdpbmRvdy5fX3VpX2lkX3NlcXVlbmNlKSAhPSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5fX3VpX2lkX3NlcXVlbmNlICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHsgX19pZCA6ICsrd2luZG93Ll9fdWlfaWRfc2VxdWVuY2UgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuX191aV9pZF9zZXF1ZW5jZSA9IHR5cGVvZiBBbmRyb2lkLmdldE5ld0lEID09IFwiZnVuY3Rpb25cIiA/IHBhcnNlSW50KEFuZHJvaWQuZ2V0TmV3SUQoKSkgKiAxMDAwMDAwIDogd2luZG93Ll9fUFJFU1RPX0lEIDtcbiAgICAgICAgcmV0dXJuIHsgX19pZCA6ICsrd2luZG93Ll9fdWlfaWRfc2VxdWVuY2UgfTtcbiAgICB9XG59O1xuXG5cbmZ1bmN0aW9uIG1vdmVDaGlsZChjaGlsZCwgcGFyZW50LCBpbmRleCkge1xuICBBbmRyb2lkLm1vdmVWaWV3KGNoaWxkLl9fcmVmLl9faWQsIGluZGV4KTtcbn1cblxuXG5cbmZ1bmN0aW9uIHJlbW92ZUNoaWxkKGNoaWxkLCBwYXJlbnQsIGluZGV4KSB7XG4gIC8vIGNvbnNvbGUubG9nKFwiUmVtb3ZlIGNoaWxkIDpcIiwgY2hpbGQudHlwZSk7XG4gIEFuZHJvaWQucmVtb3ZlVmlldyhjaGlsZC5fX3JlZi5fX2lkICsgXCJcIik7XG59XG5cbmZ1bmN0aW9uIGFkZENoaWxkKGNoaWxkLCBwYXJlbnQsIGluZGV4KSB7XG4gIGlmKGNoaWxkLnR5cGUgPT0gbnVsbCkge1xuICAgIGNvbnNvbGUud2FybihcImNoaWxkIG51bGxcIik7XG4gIH1cbiAgLy8gY29uc29sZS5sb2coXCJBZGQgY2hpbGQgOlwiLCBjaGlsZC5fX3JlZi5fX2lkLCBjaGlsZC50eXBlKTtcbiAgdmFyIHZpZXdHcm91cHMgPSBbXCJsaW5lYXJMYXlvdXRcIiwgXCJyZWxhdGl2ZUxheW91dFwiLCBcInNjcm9sbFZpZXdcIiwgXCJmcmFtZUxheW91dFwiLCBcImhvcml6b250YWxTY3JvbGxWaWV3XCJdO1xuICBpZiAod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpIHtcbiAgICBpZiAodmlld0dyb3Vwcy5pbmRleE9mKGNoaWxkLnR5cGUpICE9IC0xKXtcbiAgICAgIGNoaWxkLnByb3BzLnJvb3QgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZC5wYXJlbnRUeXBlID0gcGFyZW50LnR5cGU7XG4gICAgfVxuICAgIEFuZHJvaWQuYWRkVmlld1RvUGFyZW50KHBhcmVudC5fX3JlZi5fX2lkICsgXCJcIiwgSlNPTi5zdHJpbmdpZnkoZG9tQWxsKGNoaWxkKSksIGluZGV4LCBudWxsLCBudWxsKTtcbiAgfVxuICBlbHNlXG4gICAgQW5kcm9pZC5hZGRWaWV3VG9QYXJlbnQocGFyZW50Ll9fcmVmLl9faWQsIGRvbUFsbChjaGlsZCksIGluZGV4LCBudWxsLCBudWxsKTtcbn1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKGVsZW1lbnQsIGF0dHJpYnV0ZSkge1xuICAvLyBjb25zb2xlLmxvZyhcImFkZCBhdHRyIDpcIiwgYXR0cmlidXRlKTtcbiAgZWxlbWVudC5wcm9wc1thdHRyaWJ1dGUudmFsdWUwXSA9IGF0dHJpYnV0ZS52YWx1ZTE7XG4gIGFwcGx5UHJvcChlbGVtZW50LCBhdHRyaWJ1dGUsIHRydWUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUoZWxlbWVudCwgYXR0cmlidXRlKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwicmVtb3ZlIGF0dHIgOlwiLCBhdHRyaWJ1dGUpO1xuICByZXBsYWNlVmlldyhlbGVtZW50LCBhdHRyaWJ1dGUsIHRydWUpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVBdHRyaWJ1dGUoZWxlbWVudCwgYXR0cmlidXRlKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwidXBkYXRlIGF0dHIgOlwiLCBhdHRyaWJ1dGUpO1xuICBlbGVtZW50LnByb3BzW2F0dHJpYnV0ZS52YWx1ZTBdID0gYXR0cmlidXRlLnZhbHVlMTtcblxuICBhcHBseVByb3AoZWxlbWVudCwgYXR0cmlidXRlLCBmYWxzZSk7XG59XG5cblxuZnVuY3Rpb24gaW5zZXJ0RG9tKHJvb3QsIGRvbSwgY2IpIHtcbiAgcm9vdC5jaGlsZHJlbi5wdXNoKGRvbSk7XG4gIGRvbS5wYXJlbnROb2RlID0gcm9vdDtcbiAgZG9tLl9fcmVmID0gY3JlYXRlUHJlc3RvRWxlbWVudCgpO1xuICB3aW5kb3cuTiA9IHJvb3Q7XG5cbiAgdmFyIHJvb3RJZCA9IHdpbmRvdy5fX1JPT1RTQ1JFRU4uaWRTZXQucm9vdDtcblxuICBkb20ucHJvcHMucm9vdCA9IHRydWU7XG5cbiAgdmFyIGxlbmd0aCA9IHdpbmRvdy5fX1JPT1RTQ1JFRU4uaWRTZXQuY2hpbGQucHVzaChkb20uX19yZWYuX19pZCk7XG5cbiAgdmFyIGNhbGxiYWNrID0gd2luZG93LmNhbGxiYWNrTWFwcGVyKGV4ZWN1dGVQb3N0UHJvY2VzcyhjYikpO1xuICBpZiAod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpIHtcbiAgICBBbmRyb2lkLmFkZFZpZXdUb1BhcmVudChyb290SWQgKyBcIlwiLCBKU09OLnN0cmluZ2lmeShkb21BbGwoZG9tKSksIGxlbmd0aCAtIDEsIGNhbGxiYWNrLCBudWxsKTtcbiAgfVxuICBlbHNlIHtcbiAgICBBbmRyb2lkLmFkZFZpZXdUb1BhcmVudChyb290SWQsIGRvbUFsbChkb20pLCBsZW5ndGggLSAxLCBjYWxsYmFjaywgbnVsbCk7XG4gIH1cblxuICByZXR1cm4gZG9tLl9fcmVmLl9faWQ7XG5cbn1cblxuXG5mdW5jdGlvbiBleGVjdXRlUG9zdFByb2Nlc3MoY2IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNiKCk7XG5cbiAgICBpZih3aW5kb3cuX19kdWlfc2NyZWVuICYmIHdpbmRvd1tcImFmdGVyUmVuZGVyXCJdKSB7XG4gICAgICBmb3IgKHZhciB0YWcgaW4gd2luZG93W1wiYWZ0ZXJSZW5kZXJcIl1bd2luZG93Ll9fZHVpX3NjcmVlbl0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB3aW5kb3dbXCJhZnRlclJlbmRlclwiXVt3aW5kb3cuX19kdWlfc2NyZWVuXVt0YWddKCkoKTtcbiAgICAgICAgICB3aW5kb3dbXCJhZnRlclJlbmRlclwiXVt3aW5kb3cuX19kdWlfc2NyZWVuXVtcImV4ZWN1dGVkXCJdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoSkJyaWRnZSAmJiBKQnJpZGdlLnNldFNoYWRvdykge1xuICAgICAgZm9yICh2YXIgdGFnIGluIHdpbmRvdy5zaGFkb3dPYmplY3QpIHtcbiAgICAgICAgSkJyaWRnZS5zZXRTaGFkb3cod2luZG93LnNoYWRvd09iamVjdFt0YWddW1wibGV2ZWxcIl0sXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJ2aWV3SWRcIl0pLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkod2luZG93LnNoYWRvd09iamVjdFt0YWddW1wiYmFja2dyb3VuZENvbG9yXCJdKSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImJsdXJWYWx1ZVwiXSksXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJzaGFkb3dDb2xvclwiXSksXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJkeFwiXSksXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJkeVwiXSksXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJzcHJlYWRcIl0pLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkod2luZG93LnNoYWRvd09iamVjdFt0YWddW1wiZmFjdG9yXCJdKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRvbUFsbDogZG9tQWxsLFxuICBnZXREb21Ub1JlbmRlcjogZ2V0RG9tVG9SZW5kZXIsXG4gIGdldFJ1bkluVUlDbWQ6IGdldFJ1bkluVUlDbWQsXG4gIHJlcGxhY2VWaWV3OiByZXBsYWNlVmlldyxcbiAgY3JlYXRlUHJlc3RvRWxlbWVudDogY3JlYXRlUHJlc3RvRWxlbWVudCxcbiAgbW92ZUNoaWxkOiBtb3ZlQ2hpbGQsXG4gIHJlbW92ZUNoaWxkOiByZW1vdmVDaGlsZCxcbiAgYWRkQ2hpbGQ6IGFkZENoaWxkLFxuICBhZGRBdHRyaWJ1dGU6IGFkZEF0dHJpYnV0ZSxcbiAgcmVtb3ZlQXR0cmlidXRlOiByZW1vdmVBdHRyaWJ1dGUsXG4gIHVwZGF0ZVByb3BlcnR5OiB1cGRhdGVBdHRyaWJ1dGUsXG4gIGFkZFByb3BlcnR5OiBhZGRBdHRyaWJ1dGUsXG4gIGluc2VydERvbTogaW5zZXJ0RG9tXG59O1xuXG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiAqIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuICpcbiAqIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuICogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiAqIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiAqIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4gKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiAqIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuICogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2VcbiAqIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4gKi9cblxudmFyIHtcbiAgaW5mbGF0ZVZpZXcsXG4gIGNvbXB1dGVDaGlsZERpbWVuc1xufSA9IHJlcXVpcmUoXCIuL1JlbmRlclwiKTtcbnZhciBoZWxwZXIgPSByZXF1aXJlKCcuLi9oZWxwZXInKTtcblxuXG5mdW5jdGlvbiBnZXRTY3JlZW5EaW1lbnNpb25zKCkge1xuICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcbiAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gIH0pO1xufVxuXG5cbmZ1bmN0aW9uIHJ1bkluVUkoY21kKSB7XG4gIGlmICh0eXBlb2YgY21kID09IFwic3RyaW5nXCIpXG4gICAgcmV0dXJuXG5cbiAgbGV0IGlkID0gY21kLmlkXG4gIGlmKGlkKXtcbiAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxuXG4gICAgaWYoZWxlbSl7XG4gICAgICBsZXQgdmlldyA9IHdpbmRvdy5fX1ZJRVdTW2lkXVxuICAgICAgdmlldy5wcm9wcyA9IGhlbHBlci5tZXJnZSh2aWV3LnByb3BzLCBjbWQpXG4gICAgICBcbiAgICAgIGxldCBwYXJlbnRJZCA9IG51bGxcbiAgICAgIGxldCBwYXJlbnRFbGVtID0gbnVsbFxuICAgICAgbGV0IHBhcmVudFZpZXcgPSBudWxsXG5cbiAgICAgIGlmKGVsZW0pe1xuICAgICAgICBsZXQgdmlldyA9IHdpbmRvdy5fX1ZJRVdTW2lkXVxuICAgICAgICB2aWV3LnByb3BzID0gaGVscGVyLm1lcmdlKHZpZXcucHJvcHMsIGNtZClcbiAgICAgICAgXG4gICAgICAgIGxldCBwYXJlbnRJZCA9IG51bGxcbiAgICAgICAgbGV0IHBhcmVudEVsZW0gPSBudWxsXG4gICAgICAgIGxldCBwYXJlbnRWaWV3ID0gbnVsbFxuXG4gICAgICAgIGlmKHZpZXcudHlwZSA9PSAnbW9kYWwnKXtcbiAgICAgICAgICBwYXJlbnRJZCA9IGVsZW0uZ2V0QXR0cmlidXRlKCd2aXJ0dWFsX3BhcmVudCcpXG5cbiAgICAgICAgICBpZihwYXJlbnRJZCl7XG4gICAgICAgICAgICBwYXJlbnRWaWV3ID0gd2luZG93Ll9fVklFV1NbcGFyZW50SWRdXG4gICAgICAgICAgICBwYXJlbnRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50SWQpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHBhcmVudEVsZW0gJiYgcGFyZW50Vmlldyl7XG4gICAgICAgICAgICAgIGluZmxhdGVWaWV3KHZpZXcsIHBhcmVudEVsZW0sIG51bGwsIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBwYXJlbnRJZCA9IGVsZW0ucGFyZW50Tm9kZS5pZFxuXG4gICAgICAgICAgaWYocGFyZW50SWQpe1xuICAgICAgICAgICAgcGFyZW50VmlldyA9IHdpbmRvdy5fX1ZJRVdTW3BhcmVudElkXVxuICAgICAgICAgICAgcGFyZW50RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudElkKVxuXG4gICAgICAgICAgICBpZihwYXJlbnRFbGVtICYmIHBhcmVudFZpZXcpe1xuICAgICAgICAgICAgICBsZXQgc2libGluZ1ZpZXcgPSBudWxsXG5cbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJlbnRWaWV3LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYocGFyZW50Vmlldy5jaGlsZHJlbltpXS5wcm9wcy5pZCA9PSBpZCl7XG4gICAgICAgICAgICAgICAgICBpZihpICE9IDApXG4gICAgICAgICAgICAgICAgICAgIHNpYmxpbmdWaWV3ID0gcGFyZW50Vmlldy5jaGlsZHJlbltpLTFdXG4gICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHNpYmxpbmdWaWV3ID0gcGFyZW50Vmlld1xuICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb21wdXRlQ2hpbGREaW1lbnMocGFyZW50VmlldylcbiAgICAgICAgICAgICAgaW5mbGF0ZVZpZXcodmlldywgcGFyZW50RWxlbSwgc2libGluZ1ZpZXcsIGZhbHNlLCBmYWxzZSwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy9yZWNvbXB1dGUoKVxuICAvL1JlbmRlci5ydW5JblVJKGNtZClcbn1cblxuZnVuY3Rpb24gUmVuZGVyKHZpZXcsIGNiKSB7XG4gIC8qIEdsb2JhbCBTdHlsZSBUYWcgKi9cbiAgbGV0IHN0eWxlX2lkID0gd2luZG93Ll9fU1RZTEVfSUQ7XG4gIFxuICBsZXQgc3R5bGVFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3R5bGVfaWQpO1xuICBpZighc3R5bGVFbGVtIHx8IHN0eWxlRWxlbSA9PSB1bmRlZmluZWQpe1xuICAgIHN0eWxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGVFbGVtLnNldEF0dHJpYnV0ZSgnaWQnLCBzdHlsZV9pZCk7XG4gICAgc3R5bGVFbGVtLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgIFxuICAgIGlmKHN0eWxlRWxlbS5zdHlsZVNoZWV0KXtcbiAgICAgIHN0eWxlRWxlbS5zdHlsZVNoZWV0LmNzc1RleHQgPSBcIlwiO1xuICAgIH1lbHNle1xuICAgICAgc3R5bGVFbGVtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbSk7XG4gIH1cbiAgLyogR2xvYmFsIFN0eWxlIFRhZyBFbmQgKi9cblxuICBsZXQgcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgbGV0IHBhcmVudFZpZXcgPSB7XG4gICAgdHlwZTogXCJsaW5lYXJMYXlvdXRcIixcbiAgICBwcm9wczoge1xuICAgICAgXCJoXCI6IHBhcmVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgXCJ3XCI6IHBhcmVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgfSxcbiAgICBjaGlsZHJlbjogW3ZpZXddXG4gIH07XG5cbiAgY29tcHV0ZUNoaWxkRGltZW5zKHBhcmVudFZpZXcpO1xuICBjb25zdCBlbGVtID0gaW5mbGF0ZVZpZXcodmlldywgcGFyZW50RWxlbWVudCwgbnVsbCk7XG5cbiAgaWYgKGNiKVxuICAgIHdpbmRvdy5jYWxsVUlDYWxsYmFjayhjYik7XG5cbiAgaWYgKHBhcmVudEVsZW1lbnQuY2hpbGRFbGVtZW50Q291bnQgPiAxKSB7XG4gICAgbGV0IGl0ZXJhYmxlQ2hpbGROb2RlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHBhcmVudEVsZW1lbnQuY2hpbGRyZW4pO1xuICAgIGl0ZXJhYmxlQ2hpbGROb2Rlcy5mb3JFYWNoKChlYWNoKSA9PiB7XG4gICAgICBoZWxwZXIuY2xlYXJWaWV3RXh0ZXJuYWxzKHdpbmRvdy5fX1ZJRVdTW2VhY2guaWRdKTtcbiAgICAgIGVhY2gucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVsZW0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vdmVWaWV3KGlkLCBpbmRleCkge1xuICBpZiAoIXdpbmRvdy5fX1ZJRVdTW2lkXSkge1xuICAgIHJldHVybiBjb25zb2xlLmVycm9yKG5ldyBFcnJvcihcIk1vdmVWaWV3OiBJbnZhbGlkIHZpZXcgSUQ6IFwiICsgaWQpKTtcbiAgfVxuICB2YXIgdmlldyA9IHdpbmRvdy5fX1ZJRVdTW2lkXTtcbiAgdmFyIHZpZXdFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpOyBcbiAgdmFyIHBhcmVudElkID0gdmlld0VsZW0ucGFyZW50Tm9kZS5pZDtcbiAgdmFyIHBhcmVudCA9IHdpbmRvdy5fX1ZJRVdTW3BhcmVudElkXTtcbiAgdmFyIHBhcmVudEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnRJZCk7XG4gIHZhciBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlbjtcbiAgY2hpbGRyZW4uc3BsaWNlKGNoaWxkcmVuLmluZGV4T2YodmlldyksIDEpO1xuICBjaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDAsIHZpZXcpO1xuICBjb21wdXRlQ2hpbGREaW1lbnMocGFyZW50KVxuXG4gIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgIGluZmxhdGVWaWV3KGNoaWxkLCBwYXJlbnRFbGVtKVxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRWaWV3VG9QYXJlbnQoaWQsIHZpZXcsIGluZGV4LCBjYiwgcmVwbGFjZSkge1xuICBsZXQgcGFyZW50RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxuICBsZXQgcGFyZW50VmlldyA9IHdpbmRvdy5fX1ZJRVdTW2lkXVxuICBsZXQgc2libGluZ1ZpZXcgPSBudWxsXG5cbiAgaWYoIXBhcmVudEVsZW0gfHwgIXBhcmVudFZpZXcpXG4gICAgcmV0dXJuXG5cbiAgcGFyZW50Vmlldy5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDAsIHZpZXcpXG4gIFxuICBpZihpbmRleCA9PSAwKVxuICAgIHNpYmxpbmdWaWV3ID0gcGFyZW50Vmlld1xuICBlbHNlXG4gICAgc2libGluZ1ZpZXcgPSBwYXJlbnRWaWV3LmNoaWxkcmVuW2luZGV4LTFdXG4gIFxuICBpbmZsYXRlVmlldyh2aWV3LCBwYXJlbnRFbGVtLCBzaWJsaW5nVmlldylcbiAgXG4gIGlmIChjYilcbiAgICB3aW5kb3cuY2FsbFVJQ2FsbGJhY2soY2IpXG59XG5cbmZ1bmN0aW9uIGdldENoaWxkTW9kYWxWaWV3cyh2aWV3KSB7XG4gIGxldCBtb2RhbFZpZXdzID0gW11cblxuICBpZih2aWV3LmNoaWxkcmVuKSB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHZpZXcuY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xuICAgICAgbGV0IGNoaWxkVmlldyA9IHZpZXcuY2hpbGRyZW5baV1cblxuICAgICAgaWYoY2hpbGRWaWV3LnR5cGUgPT0gJ21vZGFsJyl7XG4gICAgICAgIG1vZGFsVmlld3MucHVzaChjaGlsZFZpZXcpXG4gICAgICB9ZWxzZXtcbiAgICAgICAgbGV0IGl0ZW1zID0gZ2V0Q2hpbGRNb2RhbFZpZXdzKGNoaWxkVmlldylcbiAgICAgICAgaWYoaXRlbXMgJiYgaXRlbXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgaWYobW9kYWxWaWV3cy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIG1vZGFsVmlld3MgPSBpdGVtc1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbW9kYWxWaWV3cyA9IG1vZGFsVmlld3MuY29uY2F0KGl0ZW1zKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtb2RhbFZpZXdzXG59XG5cbmZ1bmN0aW9uIHJlbW92ZVZpZXcoaWQpIHtcbiAgbGV0IHZpZXdFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICBpZighdmlld0VsZW0pe1xuICAgIGhlbHBlci5jbGVhclZpZXdFeHRlcm5hbHModmlldylcbiAgICByZXR1cm5cbiAgfVxuXG4gIGxldCBwYXJlbnRJZCA9IHZpZXdFbGVtLnBhcmVudE5vZGUuaWRcbiAgaWYoIXBhcmVudElkKXtcbiAgICBoZWxwZXIuY2xlYXJWaWV3RXh0ZXJuYWxzKHZpZXcpXG4gICAgdmlld0VsZW0ucmVtb3ZlKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGxldCBwYXJlbnRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50SWQpO1xuICBpZighcGFyZW50RWxlbSl7XG4gICAgaGVscGVyLmNsZWFyVmlld0V4dGVybmFscyh2aWV3KVxuICAgIHZpZXdFbGVtLnJlbW92ZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBsZXQgdmlldyA9IHdpbmRvdy5fX1ZJRVdTW2lkXVxuICBcbiAgaWYoIXZpZXcgfHwgIXZpZXcudHlwZSlcbiAgICByZXR1cm5cbiAgXG4gIGxldCBwYXJlbnQgPSBudWxsXG4gIGxldCBpZHhcbiAgICAgICAgXG4gIGlmKHZpZXcudHlwZSA9PSAnbW9kYWwnKXtcbiAgICBsZXQgdmlydHVhbFBhcmVudElkID0gdmlld0VsZW0uZ2V0QXR0cmlidXRlKCd2aXJ0dWFsX3BhcmVudCcpXG4gICAgcGFyZW50ID0gd2luZG93Ll9fVklFV1NbdmlydHVhbFBhcmVudElkXVxuXG4gICAgaWR4ID0gcGFyZW50LmNoaWxkcmVuLmluZGV4T2YodmlldylcbiAgICBwYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSlcblxuICAgIGhlbHBlci5jbGVhclZpZXdFeHRlcm5hbHModmlldylcbiAgICBwYXJlbnRFbGVtLnJlbW92ZSgpXG4gIH1lbHNle1xuICAgIC8qIE1vZGFsIHZpZXcgYW1vbmcgY2hpbGRyZW4gKi9cbiAgICBsZXQgY2hpbGRNb2RhbFZpZXdzID0gZ2V0Q2hpbGRNb2RhbFZpZXdzKHZpZXcpXG4gICAgaWYoY2hpbGRNb2RhbFZpZXdzICYmIGNoaWxkTW9kYWxWaWV3cy5sZW5ndGggPiAwKXtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjaGlsZE1vZGFsVmlld3MubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgbW9kYWxWaWV3ID0gY2hpbGRNb2RhbFZpZXdzW2ldXG4gICAgICAgIGxldCBtb2RhbEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2RhbFZpZXcucHJvcHMuaWQpXG5cbiAgICAgICAgaWYobW9kYWxFbGVtKXtcbiAgICAgICAgICBsZXQgYmFja2Ryb3BJZCA9IG1vZGFsRWxlbS5wYXJlbnROb2RlLmlkXG4gICAgICAgICAgbGV0IGJhY2tkcm9wRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJhY2tkcm9wSWQpXG5cbiAgICAgICAgICBiYWNrZHJvcEVsZW0ucmVtb3ZlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvKiBNb2RhbCB2aWV3IGFtb25nIGNoaWxkcmVuIGVuZCAqL1xuXG4gICAgcGFyZW50ID0gd2luZG93Ll9fVklFV1NbcGFyZW50SWRdXG5cbiAgICBpZHggPSBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih2aWV3KVxuICAgIHBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKVxuXG4gICAgaGVscGVyLmNsZWFyVmlld0V4dGVybmFscyh2aWV3KVxuICAgIHZpZXdFbGVtLnJlbW92ZSgpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZU1vZGFsVmlldyh2aWV3LCBpZCkge1xuICBsZXQgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxuICBpZighZWxlbSlcbiAgICByZXR1cm5cblxuICBsZXQgYmFja2Ryb3BJZCA9IGVsZW0ucGFyZW50Tm9kZS5pZFxuICBsZXQgYmFja2Ryb3BFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYmFja2Ryb3BJZClcblxuICBsZXQgcGFyZW50SWQgPSBlbGVtLmdldEF0dHJpYnV0ZSgndmlydHVhbF9wYXJlbnQnKVxuICBsZXQgcGFyZW50VmlldyA9IHdpbmRvdy5fX1ZJRVdTW3BhcmVudElkXVxuICBsZXQgcGFyZW50RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudElkKVxuXG4gIGxldCBvbGRWaWV3ID0gbnVsbFxuICBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJlbnRWaWV3LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYocGFyZW50Vmlldy5jaGlsZHJlbltpXS5wcm9wcy5pZCA9PSBpZCl7XG4gICAgICBvbGRWaWV3ID0gcGFyZW50Vmlldy5jaGlsZHJlbltpXVxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYoIW9sZFZpZXcpXG4gICAgcmV0dXJuXG5cbiAgLyogR2V0IENoaWxkcmVuICovXG4gIGxldCBjaGlsZHJlbkVsZW0gPSBbXVxuICBsZXQgY2hpbGRyZW4gPSBvbGRWaWV3LmNoaWxkcmVuXG5cbiAgaWYoZWxlbSAmJiBjaGlsZHJlbil7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcbiAgICAgIGxldCBjaGlsZElkID0gY2hpbGRyZW5baV0ucHJvcHMuaWRcbiAgICAgIGxldCBjaGlsZEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjaGlsZElkKVxuXG4gICAgICBpZihjaGlsZEVsZW0pXG4gICAgICAgIGNoaWxkcmVuRWxlbS5wdXNoKGNoaWxkRWxlbSlcbiAgICB9XG4gIH1cbiAgLyogR2V0IENoaWxkcmVuIEVuZCAqL1xuXG4gIG9sZFZpZXcucHJvcHMgPSB2aWV3LnByb3BzXG4gIGJhY2tkcm9wRWxlbS5yZW1vdmUoKVxuICBpbmZsYXRlVmlldyhvbGRWaWV3LCBwYXJlbnRFbGVtLCBudWxsLCB0cnVlKVxuICB3aW5kb3cuX19WSUVXU1tpZF0gPSBvbGRWaWV3XG5cbiAgLyogQXBwZW5kIENoaWxkcmVuICovXG4gIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcblxuICBpZihlbGVtICYmIGNoaWxkcmVuRWxlbS5sZW5ndGggPiAwKXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW5FbGVtLmxlbmd0aDsgaSsrKXtcbiAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoY2hpbGRyZW5FbGVtW2ldKVxuICAgIH1cbiAgfVxuICAvKiBBcHBlbmQgQ2hpbGRyZW4gRW5kICovXG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VWaWV3KHZpZXcsIGlkKSB7XG4gIGlmKHZpZXcudHlwZSA9PSAnbW9kYWwnKXtcbiAgICByZXBsYWNlTW9kYWxWaWV3KHZpZXcsIGlkKVxuICAgIHJldHVyblxuICB9XG5cbiAgbGV0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcbiAgaWYoIWVsZW0pXG4gICAgcmV0dXJuXG5cbiAgbGV0IHBhcmVudElkID0gZWxlbS5wYXJlbnROb2RlLmlkXG4gIGxldCBwYXJlbnRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50SWQpXG4gIGxldCBwYXJlbnRWaWV3ID0gd2luZG93Ll9fVklFV1NbcGFyZW50SWRdXG5cbiAgbGV0IG9sZFZpZXcgPSBudWxsXG4gIGxldCBzaWJsaW5nVmlldyA9IG51bGxcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmVudFZpZXcuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBpZihwYXJlbnRWaWV3LmNoaWxkcmVuW2ldLnByb3BzLmlkID09IGlkKXtcbiAgICAgIG9sZFZpZXcgPSBwYXJlbnRWaWV3LmNoaWxkcmVuW2ldXG5cbiAgICAgIGlmKGkgIT0gMClcbiAgICAgICAgc2libGluZ1ZpZXcgPSBwYXJlbnRWaWV3LmNoaWxkcmVuW2ktMV1cbiAgICAgIGVsc2VcbiAgICAgICAgc2libGluZ1ZpZXcgPSBwYXJlbnRWaWV3XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgXG4gIGlmKCFvbGRWaWV3KVxuICAgIHJldHVyblxuXG4gIC8qIEdldCBDaGlsZHJlbiAqL1xuICBsZXQgY2hpbGRyZW5FbGVtID0gW11cbiAgbGV0IGNoaWxkcmVuID0gb2xkVmlldy5jaGlsZHJlblxuXG4gIGlmKGVsZW0gJiYgY2hpbGRyZW4pe1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKyl7XG4gICAgICBsZXQgY2hpbGRJZCA9IGNoaWxkcmVuW2ldLnByb3BzLmlkXG4gICAgICBsZXQgY2hpbGRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2hpbGRJZClcblxuICAgICAgaWYoY2hpbGRFbGVtKVxuICAgICAgICBjaGlsZHJlbkVsZW0ucHVzaChjaGlsZEVsZW0pXG4gICAgfVxuICB9XG4gIC8qIEdldCBDaGlsZHJlbiBFbmQgKi9cblxuICBvbGRWaWV3LnByb3BzID0gdmlldy5wcm9wc1xuICBwYXJlbnRFbGVtLnJlbW92ZUNoaWxkKGVsZW0pXG4gIGluZmxhdGVWaWV3KG9sZFZpZXcsIHBhcmVudEVsZW0sIHNpYmxpbmdWaWV3LCB0cnVlKVxuICB3aW5kb3cuX19WSUVXU1tpZF0gPSBvbGRWaWV3XG5cbiAgLyogQXBwZW5kIENoaWxkcmVuICovXG4gIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcblxuICBpZihlbGVtICYmIGNoaWxkcmVuRWxlbS5sZW5ndGggPiAwKXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW5FbGVtLmxlbmd0aDsgaSsrKXtcbiAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoY2hpbGRyZW5FbGVtW2ldKVxuICAgIH1cbiAgfVxuICAvKiBBcHBlbmQgQ2hpbGRyZW4gRW5kICovXG59XG5cbmZ1bmN0aW9uIHJlY29tcHV0ZSgpIHtcbiAgY29uc3Qgcm9vdG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBjaGlsZCA9IHJvb3Rub2RlLmZpcnN0RWxlbWVudENoaWxkO1xuICBjb25zdCByb290dmlldyA9IHdpbmRvdy5fX1ZJRVdTW2NoaWxkLmlkXTtcbiAgUmVuZGVyKHJvb3R2aWV3LCBudWxsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldFNjcmVlbkRpbWVuc2lvbnM6IGdldFNjcmVlbkRpbWVuc2lvbnMsXG5cbiAgcnVuSW5VSTogcnVuSW5VSSxcblxuICBSZW5kZXI6IFJlbmRlcixcblxuICBtb3ZlVmlldzogbW92ZVZpZXcsXG5cbiAgYWRkVmlld1RvUGFyZW50OiBhZGRWaWV3VG9QYXJlbnQsXG5cbiAgZ2V0Q2hpbGRNb2RhbFZpZXdzOiBnZXRDaGlsZE1vZGFsVmlld3MsXG5cbiAgcmVtb3ZlVmlldzogcmVtb3ZlVmlldyxcblxuICByZXBsYWNlTW9kYWxWaWV3OiByZXBsYWNlTW9kYWxWaWV3LFxuXG4gIHJlcGxhY2VWaWV3OiByZXBsYWNlVmlldyxcblxuICByZWNvbXB1dGU6IHJlY29tcHV0ZVxufTsiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiAqIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuICpcbiAqIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuICogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiAqIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiAqIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4gKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiAqIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuICogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2VcbiAqIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4gKi9cblxudmFyIFZpZXdQYWdlQWRhcHRlciA9IHJlcXVpcmUoXCIuL1ZpZXdQYWdlQWRhcHRlclwiKTtcbnZhciBSZW5kZXJlciA9IHJlcXVpcmUoXCIuL1JlbmRlclwiKTtcbmNvbnN0IHFzc3RyaW5naWZ5ID0gcmVxdWlyZShcInFzL2xpYi9zdHJpbmdpZnlcIik7XG5cbmZ1bmN0aW9uIHBhcnNlSnNvbihzdHIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzdHIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZW5kQW5hbHl0aWNzKGRhdGEpIHtcbiAgY29uc3QgdXJsID0gXCJodHRwczovL2xvZ3MuanVzcGF5LmluL2dvZGVsL2FuYWx5dGljc1wiO1xuICBpZiAobmF2aWdhdG9yLnNlbmRCZWFjb24pIHtcbiAgICBuYXZpZ2F0b3Iuc2VuZEJlYWNvbih1cmwsIEpTT04uc3RyaW5naWZ5KHsgZGF0YSB9KSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwsIGZhbHNlKTsgLy8gdGhpcmQgcGFyYW1ldGVyIG9mIGBmYWxzZWAgbWVhbnMgc3luY2hyb25vdXNcbiAgICAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KHtkYXRhfSkpOyAgIFxuICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAvL1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0U3ltYm9sOiBmdW5jdGlvbih0eXBlKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFwidGlja1wiOlxuICAgICAgICByZXR1cm4gXCJcXHUyNzEzXCI7XG4gICAgICBjYXNlIFwicnVwZWVcIjpcbiAgICAgICAgcmV0dXJuIFwiXFx1MjBCOVwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwic3ltYm9sXCI7XG4gICAgfVxuICB9LFxuXG4gIGxpc3RWaWV3QWRhcHRlcjogZnVuY3Rpb24oaWQsIGpzeCwgY2FsbGJhY2ssIHR5cGUsIG1vcmUpIHtcbiAgICBsZXQgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIGlmICghcGFyZW50KSB7XG4gICAgICBjb25zb2xlLmVycm9yKG5ldyBFcnJvcihcIkxpc3R2aWV3IHBhcmVudCBudWxsXCIpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdEVsZW1lbnRDaGlsZClcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RFbGVtZW50Q2hpbGQpO1xuXG4gICAgbGV0IHZpZXcgPSBKU09OLnBhcnNlKGpzeCk7XG4gICAgbGV0IHBhcmVudFZpZXcgPSB3aW5kb3cuX19WSUVXU1twYXJlbnQuaWRdO1xuICAgIHZpZXcubWFwKCh4LCBpKSA9PiB7XG4gICAgICBwYXJlbnRWaWV3LmNoaWxkcmVuLnB1c2goeC52aWV3KTtcbiAgICAgIHBhcmVudFZpZXcudHlwZSA9IFwibGluZWFyTGF5b3V0XCI7XG4gICAgICBSZW5kZXJlci5jb21wdXRlQ2hpbGREaW1lbnMocGFyZW50Vmlldyk7XG4gICAgICBwYXJlbnRWaWV3LnR5cGUgPSBcImxpc3RWaWV3XCI7XG4gICAgICBsZXQgZWxlbSA9IFJlbmRlcmVyLmluZmxhdGVWaWV3KHgudmlldywgcGFyZW50KTtcbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICB3aW5kb3cuY2FsbFVJQ2FsbGJhY2soY2FsbGJhY2ssIFtpXSk7XG4gICAgICB9KTtcbiAgICAgIEFuZHJvaWQucnVuSW5VSSh4LnZhbHVlKTtcbiAgICB9KTtcbiAgICBpZiAobW9yZSkge1xuICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZWxlbS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgZWxlbS5zdHlsZS5oZWlnaHQgPSBcIjEwMHB4XCI7XG4gICAgICBlbGVtLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwiMXB4IHNvbGlkICNlZWVcIjtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtKTtcblxuICAgICAgUmVuZGVyZXIuaW5mbGF0ZVZpZXcoSlNPTi5wYXJzZShtb3JlKSwgZWxlbSk7XG4gICAgfVxuICB9LFxuXG4gIGNhbGxBUEk6IGFzeW5jIGZ1bmN0aW9uIGNhbGxBUEkobWV0aG9kLCB1cmwsIGRhdGEsIGhlYWRlcnMsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgaGVhZGVycyA9IHBhcnNlSnNvbihoZWFkZXJzKTtcbiAgICBkYXRhID0gcGFyc2VKc29uKGRhdGEpO1xuICAgIGxldCBzb21ldGhpbmcgPSBmYWxzZTtcbiAgICBpZiAoaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9PT0gXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhID09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgc29tZXRoaW5nID0gdHJ1ZTtcbiAgICAgICAgZGF0YSA9IHFzc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIGlmIChbXCJHRVRcIiwgXCJIRUFEXCJdLmluY2x1ZGVzKG1ldGhvZCkpIHtcbiAgICAgIGRhdGEgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2godXJsLCB7IG1ldGhvZCwgYm9keTogZGF0YSwgaGVhZGVycyB9KTtcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwLmpzb24oKTtcbiAgICAgIHdpbmRvdy5jYWxsVUlDYWxsYmFjayhcbiAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgIFwic3VjY2Vzc1wiLFxuICAgICAgICBidG9hKEpTT04uc3RyaW5naWZ5KGpzb24pKSxcbiAgICAgICAgcmVzcC5zdGF0dXNcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVSUlwiLCBlcnIpO1xuICAgICAgd2luZG93LmNhbGxVSUNhbGxiYWNrKGNhbGxiYWNrLCBcImZhaWx1cmVcIiwgYnRvYShcInt9XCIpLCA1MCk7XG4gICAgfVxuICB9LFxuXG4gIGdldEZyb21TaGFyZWRQcmVmczogZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgfHwgXCJfX2ZhaWxlZFwiO1xuICB9LFxuXG4gIHNldEluU2hhcmVkUHJlZnM6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgfSxcblxuICB2aWV3UGFnZXJBZGFwdGVyOiBmdW5jdGlvbihpZCwganN4LCB0YWJKc3gsIGNiKSB7XG4gICAgVmlld1BhZ2VBZGFwdGVyLmNyZWF0ZVRhYnMoaWQsIGpzeCwgdGFiSnN4LCBjYik7XG4gIH0sXG5cbiAgc3dpdGNoVG9WaWV3UGFnZXJJbmRleDogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICBWaWV3UGFnZUFkYXB0ZXIudG9nZ2xlVmlldyhpbmRleCk7XG4gIH0sXG5cbiAgZ2V0S2V5OiBmdW5jdGlvbihrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIHx8IGRlZmF1bHRWYWx1ZTtcbiAgfSxcblxuICBzZXRLZXk6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gIH0sXG5cbiAgZ2V0UmVzb3VyY2VCeU5hbWU6IGZ1bmN0aW9uIGdldFJlc291cmNlQnlOYW1lKHRhZykge1xuICAgIHJldHVybiAtMTtcbiAgfSxcblxuICBnZXRTZXNzaW9uQXR0cmlidXRlOiBmdW5jdGlvbiBnZXRTZXNzaW9uQXR0cmlidXRlKHYxLCB2Mikge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7IGE6IHYxIH0pO1xuICB9LFxuXG4gIHNldEFuYWx5dGljc0VuZFBvaW50OiBmdW5jdGlvbiBzZXRBbmFseXRpY3NFbmRQb2ludCh1cmwpIHtcbiAgICByZXR1cm47XG4gIH0sXG5cbiAgZ2V0U2Vzc2lvbkluZm86IGZ1bmN0aW9uIGdldFNlc3Npb25JbmZvKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7fSk7XG4gIH0sXG5cbiAgYXR0YWNoOiBmdW5jdGlvbiBhdHRhY2goKSB7XG4gICAgcmV0dXJuO1xuICB9LFxuXG4gIGFkZFRvTG9nTGlzdDogZnVuY3Rpb24gYWRkVG9Mb2dMaXN0KGRhdGEpIHtcbiAgICBjb25zdCBuZXdMb2cgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgIGNvbnN0IGxvZ3NBcnIgPSBBcnJheS5pc0FycmF5KG5ld0xvZykgPyBuZXdMb2cgOiBbbmV3TG9nXTtcbiAgICBzZW5kQW5hbHl0aWNzKGxvZ3NBcnIpXG4gIH0sXG4gIHNhdmVUb0xvY2FsOiBmdW5jdGlvbihhLGIsYyl7XG4gICAgdHJ5e1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImRlZk9wdGlvblR5cGVcIik7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiZGVmT3B0aW9uXCIpO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIm1lcmNoYW50XCIpO1xuICAgIH1cbiAgICBjYXRjaChlKXt9XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkZWZPcHRpb25UeXBlJywgYSk7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkZWZPcHRpb24nLCBKU09OLnN0cmluZ2lmeShiKSk7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtZXJjaGFudCcsIEpTT04uc3RyaW5naWZ5KGMpKTtcblxuICB9LFxuICBkZWxldGVGcm9tTG9jYWw6IGZ1bmN0aW9uKCl7fSxcbiAgbG9hZEZyb21Mb2NhbDogZnVuY3Rpb24oa2V5KXtcbiAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk9PXVuZGVmaW5lZClcbiAgICAgIHJldHVybiBcIlwiXG4gICAgdHJ5e1xuICAgIGNvbnN0IGEgPSAgSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG4gICAgaWYgKGE9PXVuZGVmaW5lZClcbiAgICAgIHJldHVybiBcIlwiXG4gICAgcmV0dXJuIGFcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpXG4gICAgfVxuICB9LFxuICBwb3N0TG9ncyhlbmRQb2ludCwgbG9ncykge1xuICAgIHJldHVybjtcbiAgfSxcblxuICBzdWJtaXRBbGxMb2dzOiBmdW5jdGlvbiBzdWJtaXRBbGxMb2dzKCkge1xuICAgIHJldHVybjtcbiAgfSxcblxuICBnZXRMb2dMaXN0OiBmdW5jdGlvbiBnZXRMb2dMaXN0KCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShbXSk7XG4gIH0sXG5cbiAgdXBkYXRlTG9nTGlzdDogZnVuY3Rpb24gdXBkYXRlTG9nTGlzdCgpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe30pO1xuICB9LFxuXG4gIGlzT25saW5lOiBmdW5jdGlvbiBpc09ubGluZSgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuICBnZXREZXZpY2VEZXRhaWxzOiBmdW5jdGlvbiBnZXREZXZpY2VEZXRhaWxzKCkge1xuICAgIGNvbnN0IGRldmljZURldGFpbHMgPSB7XG4gICAgICBhcHBWZXJzaW9uOiBcIlwiLFxuICAgICAgb3NWZXJzaW9uOiBcIlwiLFxuICAgICAgb3M6IFwiXCIsXG4gICAgICBtYWNBZGRyZXNzOiBcIlwiLFxuICAgICAgaXNEdWFsOiBcIlwiLFxuICAgICAgbWFudWZhY3R1cmVyOiBcIlwiLFxuICAgICAgaXNSb290ZWQ6IFwiXCIsXG4gICAgICBhbmRyb2lkSWQ6IFwiXCIsXG4gICAgICBhcHBQYWNrYWdlTmFtZTogXCJcIixcbiAgICAgIG5ldHdvcmtPcGVyYXRvcjogXCJcIixcbiAgICAgIHNpbU9wZXJhdG9yTmFtZTogXCJcIixcbiAgICAgIHNjcmVlbkhlaWdodDogXCJcIixcbiAgICAgIHNjcmVlbldpZHRoOiBcIlwiLFxuICAgICAgc2NyZWVuUHBpOiBcIlwiLFxuICAgICAgYnJhbmQ6IFwiXCIsXG4gICAgICBtb2RlbDogXCJcIixcbiAgICB9XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRldmljZURldGFpbHMpO1xuICB9LFxuXG4gIGdldERldmljZUluZm86IGZ1bmN0aW9uIGdldERldmljZUluZm8oKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHt9KVxuICB9LFxuXG4gIGdldFVVSUQ6IGZ1bmN0aW9uIGdldFVVSUQoKSB7XG4gICAgZnVuY3Rpb24gczQoKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcbiAgICAgICAgICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgICAgICAgICAuc3Vic3RyaW5nKDEpO1xuICAgIH1cbiAgICByZXR1cm4gczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArXG4gICAgICAgICAgICBzNCgpICsgJy0nICsgczQoKSArIHM0KCkgKyBzNCgpOyAgXG4gIH0sXG5cbiAgcmVuZXdGaWxlOiBmdW5jdGlvbiByZW5ld0ZpbGUoZmlsZSkge1xuICAgIHJldHVybjtcbiAgfSxcbiAgaGlkZUtleWJvYXJkT25OYXZpZ2F0aW9uOiBmdW5jdGlvbiBoaWRlS2V5Ym9hcmRPbk5hdmlnYXRpb24oKSB7XG4gICAgcmV0dXJuO1xuICB9LFxuICBydW5Jbkp1c3BheUJyb3dzZXI6IGZ1bmN0aW9uIHJ1bkluSnVzcGF5QnJvd3NlcihldmVudE5hbWUsIGFyZzIsIGFyZzMpIHtcbiAgICAvL1xuICB9XG59O1xuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4gKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbiAqXG4gKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiAqIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4gKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4gKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuICogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4gKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiAqIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4gKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuICovXG5cbmxldCB7XG4gICAgY29tcHV0ZUNoaWxkRGltZW5zXG59ID0gcmVxdWlyZShcIi4uL2NvbXB1dGVcIilcbmxldCB7XG4gICAgcmVuZGVyQ29tcG9uZW50XG59ID0gcmVxdWlyZShcIi4uL2NvbXBvbmVudFwiKVxubGV0IGhlbHBlciA9IHJlcXVpcmUoXCIuLi9oZWxwZXJcIilcblxuZnVuY3Rpb24gY3JlYXRlVGV4dEVsZW1lbnQoZWxlbSwgY29uZmlnKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gZWxlbS5jaGlsZE5vZGVzO1xuICAgIGxldCBhcnRpY2xlID0gbnVsbFxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNoaWxkcmVuW2ldLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ2FydGljbGUnKSB7XG4gICAgICAgICAgICAgICAgYXJ0aWNsZSA9IGNoaWxkcmVuW2ldXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghYXJ0aWNsZSlcbiAgICAgICAgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0FSVElDTEUnKVxuXG4gICAgZWxlbS5zdHlsZS53aGl0ZVNwYWNlID0gXCJpbml0aWFsXCJcblxuICAgIGlmIChjb25maWcuaXNIdG1sQ29udGVudClcbiAgICAgICAgYXJ0aWNsZS5pbm5lckhUTUwgPSBjb25maWcudGV4dFxuICAgIGVsc2VcbiAgICAgICAgYXJ0aWNsZS5pbm5lclRleHQgPSBjb25maWcudGV4dFxuXG4gICAgaWYgKCFjb25maWcudGV4dCAmJiBjb25maWcuaGludClcbiAgICAgICAgYXJ0aWNsZS5pbm5lclRleHQgPSBjb25maWcuaGludFxuXG4gICAgYXJ0aWNsZS5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLXdvcmRcIlxuXG4gICAgaWYgKGNvbmZpZy5sZXR0ZXJTcGFjaW5nKVxuICAgICAgICBlbGVtW1wic3R5bGVcIl1bXCJsZXR0ZXItc3BhY2luZ1wiXSA9IGNvbmZpZy5sZXR0ZXJTcGFjaW5nXG5cbiAgICBlbGVtLmFwcGVuZENoaWxkKGFydGljbGUpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHRFbGVtZW50MihlbGVtLCBjb25maWcpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSBlbGVtLmNoaWxkTm9kZXM7XG4gICAgbGV0IGFydGljbGUgPSBudWxsXG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGRyZW5baV0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PSAnYXJ0aWNsZScpIHtcbiAgICAgICAgICAgICAgICBhcnRpY2xlID0gY2hpbGRyZW5baV1cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFhcnRpY2xlKVxuICAgICAgICBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQVJUSUNMRScpXG5cbiAgICBlbGVtLnN0eWxlLndoaXRlU3BhY2UgPSBcImluaXRpYWxcIlxuXG4gICAgaWYgKGNvbmZpZy5pc0h0bWxDb250ZW50KVxuICAgICAgICBhcnRpY2xlLmlubmVySFRNTCA9IGNvbmZpZy50ZXh0RnJvbUh0bWxcbiAgICBlbHNlXG4gICAgICAgIGFydGljbGUuaW5uZXJIVE1MID0gY29uZmlnLnRleHRGcm9tSHRtbFxuXG4gICAgaWYgKCFjb25maWcudGV4dCAmJiBjb25maWcuaGludClcbiAgICAgICAgYXJ0aWNsZS5pbm5lclRleHQgPSBjb25maWcuaGludFxuXG4gICAgYXJ0aWNsZS5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLXdvcmRcIlxuXG4gICAgaWYgKGNvbmZpZy5sZXR0ZXJTcGFjaW5nKVxuICAgICAgICBlbGVtW1wic3R5bGVcIl1bXCJsZXR0ZXItc3BhY2luZ1wiXSA9IGNvbmZpZy5sZXR0ZXJTcGFjaW5nXG5cbiAgICBlbGVtLmFwcGVuZENoaWxkKGFydGljbGUpXG59XG5cbmZ1bmN0aW9uIHBvcHVwKGVsZW0sIHByb3BzKSB7XG4gICAgbGV0IG1lbnVJdGVtcyA9IHByb3BzW1wicG9wdXBNZW51XCJdLnNwbGl0KCcsJyk7XG4gICAgbGV0IG1lbnVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVCYXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwb3B1cE1lbnVcIik7XG4gICAgbWVudUJhci5zdHlsZS5jc3NUZXh0ID1cbiAgICAgICAgXCJkaXNwbGF5OiBub25lOyBwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiAyMHB4OyB0b3A6MjBweDsgei1pbmRleDogNTtcIiArXG4gICAgICAgIFwiYm94LXNoYWRvdzogMHB4IDVweCAxMHB4ICM4ODg4ODg7XCI7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtZW51QmFyKVxuICAgIGxldCBjbGlja0NiID0gXCJvbk1lbnVJdGVtQ2xpY2tcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1lbnVEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZW51SXRlbVwiKTtcbiAgICAgICAgbWVudURpdi50ZXh0Q29udGVudCA9IG1lbnVJdGVtc1tpXTtcbiAgICAgICAgbWVudUJhci5hcHBlbmRDaGlsZChtZW51RGl2KTtcbiAgICAgICAgbGV0IGluZGV4ID0gaTtcbiAgICAgICAgaWYgKHByb3BzW2NsaWNrQ2JdICYmXG4gICAgICAgICAgICB0eXBlb2YgcHJvcHNbY2xpY2tDYl0gPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBtZW51RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvcHNbY2xpY2tDYl0oaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobWVudUJhci5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiKVxuICAgICAgICAgICAgbWVudUJhci5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgbWVudUJhci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldEdyYXZpdHlTdHlsZXNGb3JSb3coZWxlbSwgcHJvcHMpIHtcbiAgICBpZiAoIXByb3BzLmhhc093blByb3BlcnR5KCdncmF2aXR5JykgfHwgIXByb3BzLmdyYXZpdHkpIHtcbiAgICAgICAgcHJvcHMuZ3Jhdml0eSA9ICcnO1xuICAgICAgICAvL3JldHVybjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHByb3BzLmdyYXZpdHkpIHtcbiAgICAgICAgY2FzZSAnY2VudGVyX3ZlcnRpY2FsJzpcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbJ2FsaWduLWl0ZW1zJ10gPSAnY2VudGVyJztcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbJ2p1c3RpZnktY29udGVudCddID0gJ2ZsZXgtc3RhcnQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NlbnRlcl9ob3Jpem9udGFsJzpcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbJ2FsaWduLWl0ZW1zJ10gPSAnZmxleC1zdGFydCc7XG4gICAgICAgICAgICBlbGVtLnN0eWxlWydqdXN0aWZ5LWNvbnRlbnQnXSA9ICdjZW50ZXInO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICAgICAgICBlbGVtLnN0eWxlWydhbGlnbi1pdGVtcyddID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbJ2p1c3RpZnktY29udGVudCddID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICAgICAgZWxlbS5zdHlsZVsnYWxpZ24taXRlbXMnXSA9ICdmbGV4LXN0YXJ0JztcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbJ2p1c3RpZnktY29udGVudCddID0gJ2ZsZXgtc3RhcnQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbJ2FsaWduLWl0ZW1zJ10gPSAnZmxleC1zdGFydCc7XG4gICAgICAgICAgICBlbGVtLnN0eWxlWydqdXN0aWZ5LWNvbnRlbnQnXSA9ICdmbGV4LWVuZCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbJ2FsaWduLWl0ZW1zJ10gPSAnZmxleC1zdGFydCc7XG4gICAgICAgICAgICBlbGVtLnN0eWxlWydqdXN0aWZ5LWNvbnRlbnQnXSA9ICdmbGV4LXN0YXJ0JztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0R3Jhdml0eVN0eWxlc0ZvckNvbHVtbihlbGVtLCBwcm9wcykge1xuICAgIGlmICghcHJvcHMuaGFzT3duUHJvcGVydHkoJ2dyYXZpdHknKSB8fCAhcHJvcHMuZ3Jhdml0eSkge1xuICAgICAgICBwcm9wcy5ncmF2aXR5ID0gJyc7XG4gICAgICAgIC8vcmV0dXJuO1xuICAgIH1cblxuICAgIHN3aXRjaCAocHJvcHMuZ3Jhdml0eSkge1xuICAgICAgICBjYXNlICdjZW50ZXJfdmVydGljYWwnOlxuICAgICAgICAgICAgZWxlbS5zdHlsZVsnYWxpZ24taXRlbXMnXSA9ICdmbGV4LXN0YXJ0JztcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbJ2p1c3RpZnktY29udGVudCddID0gJ2NlbnRlcic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2VudGVyX2hvcml6b250YWwnOlxuICAgICAgICAgICAgZWxlbS5zdHlsZVsnYWxpZ24taXRlbXMnXSA9ICdjZW50ZXInO1xuICAgICAgICAgICAgZWxlbS5zdHlsZVsnanVzdGlmeS1jb250ZW50J10gPSAnZmxleC1zdGFydCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2VudGVyJzpcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbXCJhbGlnbi1pdGVtc1wiXSA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICBlbGVtLnN0eWxlW1wianVzdGlmeS1jb250ZW50XCJdID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICAgICAgZWxlbS5zdHlsZVsnanVzdGlmeS1jb250ZW50J10gPSAnZmxleC1zdGFydCc7XG4gICAgICAgICAgICBlbGVtLnN0eWxlWydhbGlnbi1pdGVtcyddID0gJ2ZsZXgtc3RhcnQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbJ2FsaWduLWl0ZW1zJ10gPSAnZmxleC1lbmQnO1xuICAgICAgICAgICAgZWxlbS5zdHlsZVsnanVzdGlmeS1jb250ZW50J10gPSAnZmxleC1zdGFydCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbJ2FsaWduLWl0ZW1zJ10gPSAnZmxleC1zdGFydCc7XG4gICAgICAgICAgICBlbGVtLnN0eWxlWydqdXN0aWZ5LWNvbnRlbnQnXSA9ICdmbGV4LXN0YXJ0JztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0QW5pbWF0aW9uU3R5bGVzKGVsZW0sIHByb3BzKSB7XG4gIGlmICghcHJvcHMuaGFzT3duUHJvcGVydHkoJ2hhc0FuaW1hdGlvbicpIHx8ICFwcm9wcy5oYXNBbmltYXRpb24pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGtleWZyYW1lTmFtZSA9IFwia2V5ZnJhbWVfXCIgKyBwcm9wcy5pZFxuICBpZiAoIXdpbmRvdy5fX1JFTkRFUkVEX0tFWUZSQU1FUy5pbmNsdWRlcyhrZXlmcmFtZU5hbWUpKSB7XG4gICAgbGV0IHN0eWxlRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHdpbmRvdy5fX1NUWUxFX0lEKVxuXG4gICAgaWYgKCFzdHlsZUVsZW0pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBkYXRhID0gbnVsbFxuXG4gICAgaWYgKHByb3BzLmlubGluZUFuaW1hdGlvbikge1xuICAgICAgZGF0YSA9IEpTT04ucGFyc2UocHJvcHMuaW5saW5lQW5pbWF0aW9uKVxuICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGRhdGEgPSBkYXRhWzBdXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgY3NzID0gXCJcIlxuICAgIGNzcyArPSBcIkBrZXlmcmFtZXMgXCIgKyBrZXlmcmFtZU5hbWUgKyBcIntcIlxuICAgICAgY3NzICs9IFwiZnJvbSB7XCJcbiAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ2Zyb21YJykpIHtcbiAgICAgICAgICBjc3MgKz0gXCJtYXJnaW4tbGVmdDogXCIgKyBkYXRhLmZyb21YICsgXCJweDtcIlxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ2Zyb21ZJykpIHtcbiAgICAgICAgICBjc3MgKz0gXCJtYXJnaW4tdG9wOiBcIiArIGRhdGEuZnJvbVkgKyBcInB4O1wiXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCdmcm9tQWxwaGEnKSkge1xuICAgICAgICAgIGNzcyArPSBcIm9wYWNpdHk6IFwiICsgZGF0YS5mcm9tQWxwaGEgKyBcIjtcIlxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnZnJvbVNjYWxlJykpIHtcbiAgICAgICAgICBjc3MgKz0gXCJ0cmFuc2Zvcm06IHNjYWxlKFwiICsgZGF0YS5mcm9tU2NhbGUgKyBcIik7XCJcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmhhc093blByb3BlcnR5KCdmcm9tU2NhbGVYJykgJiYgZGF0YS5oYXNPd25Qcm9wZXJ0eSgnZnJvbVNjYWxlWScpKSB7XG4gICAgICAgICAgY3NzICs9IFwidHJhbnNmb3JtOiBzY2FsZShcIiArIGRhdGEuZnJvbVNjYWxlWCArIFwiLCBcIiArIGRhdGEuZnJvbVNjYWxlWSArIFwiKTtcIlxuICAgICAgICB9IGVsc2UgaWYoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnZnJvbVNjYWxlWCcpKSB7XG4gICAgICAgICAgY3NzICs9IFwidHJhbnNmb3JtOiBzY2FsZVgoXCIgKyBkYXRhLmZyb21TY2FsZVggKyBcIik7XCJcbiAgICAgICAgfSBlbHNlIGlmKGRhdGEuaGFzT3duUHJvcGVydHkoJ2Zyb21TY2FsZVknKSkge1xuICAgICAgICAgIGNzcyArPSBcInRyYW5zZm9ybTogc2NhbGVZKFwiICsgZGF0YS5mcm9tU2NhbGVZICsgXCIpO1wiXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnZnJvbVJvdGF0aW9uJykpIHtcbiAgICAgICAgICBjc3MgKz0gXCJ0cmFuc2Zvcm06IHJvdGF0ZShcIiArIGRhdGEuZnJvbVJvdGF0aW9uICsgXCIpO1wiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnZnJvbVJvdGF0aW9uWCcpKSB7XG4gICAgICAgICAgICBjc3MgKz0gXCJ0cmFuc2Zvcm06IHJvdGF0ZVgoXCIgKyBkYXRhLmZyb21Sb3RhdGlvblggKyBcIik7XCJcbiAgICAgICAgICB9IGVsc2UgaWYoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnZnJvbVJvdGF0aW9uWScpKSB7XG4gICAgICAgICAgICBjc3MgKz0gXCJ0cmFuc2Zvcm06IHJvdGF0ZVkoXCIgKyBkYXRhLmZyb21Sb3RhdGlvblkgKyBcIik7XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICBjc3MgKz0gXCJ9IFwiXG4gICAgICBjc3MgKz0gXCJ0byB7XCJcbiAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ3RvWCcpKSB7XG4gICAgICAgICAgY3NzICs9IFwibWFyZ2luLWxlZnQ6IFwiICsgZGF0YS50b1ggKyBcInB4O1wiXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgndG9ZJykpIHtcbiAgICAgICAgICBjc3MgKz0gXCJtYXJnaW4tdG9wOiBcIiArIGRhdGEudG9ZICsgXCJweDtcIlxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgndG9BbHBoYScpKSB7XG4gICAgICAgICAgY3NzICs9IFwib3BhY2l0eTogXCIgKyBkYXRhLnRvQWxwaGEgKyBcIjtcIlxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgndG9TY2FsZScpKSB7XG4gICAgICAgICAgY3NzICs9IFwidHJhbnNmb3JtOiBzY2FsZShcIiArIGRhdGEudG9TY2FsZSArIFwiKTtcIlxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ3RvU2NhbGVYJykgJiYgZGF0YS5oYXNPd25Qcm9wZXJ0eSgndG9TY2FsZVknKSkge1xuICAgICAgICAgIGNzcyArPSBcInRyYW5zZm9ybTogc2NhbGUoXCIgKyBkYXRhLnRvU2NhbGVYICsgXCIsIFwiICsgZGF0YS50b1NjYWxlWSArIFwiKTtcIlxuICAgICAgICB9IGVsc2UgaWYoZGF0YS5oYXNPd25Qcm9wZXJ0eSgndG9TY2FsZVgnKSkge1xuICAgICAgICAgIGNzcyArPSBcInRyYW5zZm9ybTogc2NhbGVYKFwiICsgZGF0YS50b1NjYWxlWCArIFwiKTtcIlxuICAgICAgICB9IGVsc2UgaWYoZGF0YS5oYXNPd25Qcm9wZXJ0eSgndG9TY2FsZVknKSkge1xuICAgICAgICAgIGNzcyArPSBcInRyYW5zZm9ybTogc2NhbGVZKFwiICsgZGF0YS50b1NjYWxlWSArIFwiKTtcIlxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ3RvUm90YXRpb24nKSkge1xuICAgICAgICAgIGNzcyArPSBcInRyYW5zZm9ybTogcm90YXRlKFwiICsgZGF0YS50b1JvdGF0aW9uICsgXCIpO1wiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYoZGF0YS5oYXNPd25Qcm9wZXJ0eSgndG9Sb3RhdGlvblgnKSkge1xuICAgICAgICAgICAgY3NzICs9IFwidHJhbnNmb3JtOiByb3RhdGVYKFwiICsgZGF0YS50b1JvdGF0aW9uWCArIFwiKTtcIlxuICAgICAgICAgIH0gZWxzZSBpZihkYXRhLmhhc093blByb3BlcnR5KCd0b1JvdGF0aW9uWScpKSB7XG4gICAgICAgICAgICBjc3MgKz0gXCJ0cmFuc2Zvcm06IHJvdGF0ZVkoXCIgKyBkYXRhLnRvUm90YXRpb25ZICsgXCIpO1wiXG4gICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgY3NzICs9IFwifSBcIlxuICAgIGNzcyArPSBcIn1cIlxuXG4gICAgaWYoc3R5bGVFbGVtLnN0eWxlU2hlZXQpe1xuICAgICAgc3R5bGVFbGVtLnN0eWxlU2hlZXQuY3NzVGV4dCArPSBjc3M7XG4gICAgfWVsc2V7XG4gICAgICBzdHlsZUVsZW0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuXG4gICAgZWxlbS5zdHlsZS5hbmltYXRpb25OYW1lID0ga2V5ZnJhbWVOYW1lXG4gICAgZWxlbS5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IFwiMXNcIlxuICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCdkdXJhdGlvbicpICYmICFpc05hTihkYXRhLmR1cmF0aW9uKSkge1xuICAgICAgY29uc3QgZHVyYXRpb24gPSBwYXJzZUZsb2F0KHBhcnNlRmxvYXQoZGF0YS5kdXJhdGlvbikgLyAxMDAwKS50b0ZpeGVkKDIpXG4gICAgICBlbGVtLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyBcInNcIlxuICAgIH1cblxuICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCdyZXBlYXRDb3VudCcpKSB7XG4gICAgICBpZiAoZGF0YS5yZXBlYXRDb3VudCA9PSBcIi0xXCIgfHwgZGF0YS5yZXBlYXRDb3VudCA9PSAtMSkge1xuICAgICAgICBlbGVtLnN0eWxlLmFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50ID0gXCJpbmZpbml0ZVwiXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtLnN0eWxlLmFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50ID0gZGF0YS5yZXBlYXRDb3VudFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwiaW50ZXJwb2xhdG9yXCIpKSB7XG4gICAgICBlbGVtLnN0eWxlLmFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uID0gXCJjdWJpYy1iZXppZXIoXCIgKyBkYXRhLmludGVycG9sYXRvciArIFwiKVwiO1xuICAgIH1cblxuICAgIHdpbmRvdy5fX1JFTkRFUkVEX0tFWUZSQU1FUy5wdXNoKGtleWZyYW1lTmFtZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRDb21wdXRlZFN0eWxlcyhlbGVtLCBwcm9wcykge1xuICAgIC8qIENvbXB1dGVkIFN0eWxlcyAqL1xuICAgIC8vIExpbmVhckxheW91dCBTdHlsZXNcbiAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ2FjdGl2ZURpbWVuJykgJiYgcHJvcHMuaGFzT3duUHJvcGVydHkoJ2FjdGl2ZVdlaWdodCcpKSB7XG4gICAgICAgIGxldCBhY3RpdmVEaW1lbiA9IHByb3BzLmFjdGl2ZURpbWVuO1xuICAgICAgICBsZXQgd2VpZ2h0ID0gcHJvcHMuYWN0aXZlV2VpZ2h0O1xuXG4gICAgICAgIGlmICh3ZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICBlbGVtLnN0eWxlLmZsZXggPSB3ZWlnaHQ7XG5cbiAgICAgICAgICAgIGlmIChhY3RpdmVEaW1lbiA9PSAndycpIHtcbiAgICAgICAgICAgICAgICAvL2VsZW0uc3R5bGUud2lkdGggPSAnYXV0byc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGVsZW0uc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbS5zdHlsZS5mbGV4ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbS5zdHlsZS5mbGV4ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIC8vIFJlbGF0aXZlTGF5b3V0IFN0eWxlc1xuICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnYWJzb2x1dGUnKSAmJiBwcm9wcy5hYnNvbHV0ZSkge1xuICAgICAgICBlbGVtLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblxuICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoXCJmcm9tVG9wXCIpKSB7XG4gICAgICAgICAgICBpZiAoaXNOYU4ocHJvcHMuZnJvbVRvcCkpXG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS50b3AgPSBwcm9wcy5mcm9tVG9wO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUudG9wID0gcHJvcHMuZnJvbVRvcCArICdweCc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoXCJmcm9tQm90dG9tXCIpKSB7XG4gICAgICAgICAgICBpZiAoaXNOYU4ocHJvcHMuZnJvbUJvdHRvbSkpXG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5ib3R0b20gPSBwcm9wcy5mcm9tQm90dG9tO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuYm90dG9tID0gcHJvcHMuZnJvbUJvdHRvbSArICdweCc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoXCJmcm9tTGVmdFwiKSkge1xuICAgICAgICAgICAgaWYgKGlzTmFOKHByb3BzLmZyb21MZWZ0KSlcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLmxlZnQgPSBwcm9wcy5mcm9tTGVmdDtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLmxlZnQgPSBwcm9wcy5mcm9tTGVmdCArICdweCc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoXCJmcm9tUmlnaHRcIikpIHtcbiAgICAgICAgICAgIGlmIChpc05hTihwcm9wcy5mcm9tUmlnaHQpKVxuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUucmlnaHQgPSBwcm9wcy5mcm9tUmlnaHQ7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5yaWdodCA9IHByb3BzLmZyb21SaWdodCArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyogQ29tcHV0ZWQgU3R5bGVzIEVuZCAqL1xufVxuXG5mdW5jdGlvbiBzZXBhcmF0b3JJbnB1dEtleURvd25IYW5kbGVyKGV2KXtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0cnl7XG4gICAgICAgIHZhciBpbnB1dElkID0gZXYudGFyZ2V0LmlkO1xuICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dElkKVxuICAgICAgICB2YXIgb2xkVmFsaWRWYWx1ZSA9IFwiXCI7XG4gICAgICAgIGlmKGlucHV0Lm9sZFZhbGlkVmFsdWUpe1xuICAgICAgICAgICAgb2xkVmFsaWRWYWx1ZSA9IGlucHV0Lm9sZFZhbGlkVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYoaW5wdXQudmFsdWUubGVuZ3RoPT09MCl7XG4gICAgICAgICAgICBpbnB1dC5vbGRWYWxpZFZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRhdGFQYXR0ZXJuID0gaW5wdXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wYXR0ZXJuXCIpO1xuICAgICAgICBpZiAoZGF0YVBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gZGF0YVBhdHRlcm4uc3BsaXQoJywnKTtcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSBwYXJzZUludChkYXRhLnBvcCgpKTtcbiAgICAgICAgICAgIHZhciByZWdleFN0cmluZyA9IGRhdGEuam9pbignJyk7XG4gICAgICAgICAgICB2YXIgc2VsZWN0aW9uU3RhcnQgPSBpbnB1dC5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICAgIHZhciBzZWxlY3Rpb25FbmQgPSBpbnB1dC5zZWxlY3Rpb25FbmQ7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgaWYgKGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChvbGRWYWxpZFZhbHVlLmxlbmd0aCA8IGlucHV0LnZhbHVlLmxlbmd0aCAmJiBvbGRWYWxpZFZhbHVlLmxlbmd0aCArIDEgPiBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBvbGRWYWxpZFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvblN0YXJ0LSAoc2VsZWN0aW9uRW5kLXNlbGVjdGlvblN0YXJ0KS0xO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb25FbmQtIChzZWxlY3Rpb25FbmQgLSBzZWxlY3Rpb25TdGFydCktMTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBmaW5hbERhdGEgPSBuZXdWYWx1ZS5yZXBsYWNlKC9bXmEtekEtWjAtOUAuLV0vZywgXCJcIik7XG4gICAgICAgICAgICBpZiAocmVnZXhTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVnZXhQYXR0ZXJuID0gbmV3IFJlZ0V4cChyZWdleFN0cmluZyk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZWdleFBhdHRlcm4udGVzdChmaW5hbERhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gb2xkVmFsaWRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb25TdGFydC0gKHNlbGVjdGlvbkVuZC1zZWxlY3Rpb25TdGFydCktMTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kLSAoc2VsZWN0aW9uRW5kIC0gc2VsZWN0aW9uU3RhcnQpLTE7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc2VwYXJhdG9yID0gaW5wdXQuZ2V0QXR0cmlidXRlKFwic2VwYXJhdG9yXCIpO1xuICAgICAgICAgICAgdmFyIHNlcGFyYXRvclJlcGVhdCA9IHBhcnNlSW50KGlucHV0LmdldEF0dHJpYnV0ZShcInNlcGFyYXRvclJlcGVhdFwiKSk7XG4gICAgICAgICAgICBpZiAoc2VwYXJhdG9yICYmIHNlcGFyYXRvclJlcGVhdCkge1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdmFyIGZvcm1hdHRlZFN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZpbmFsRGF0YS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBmaW5hbERhdGFbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgKz0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZhY3RvciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmb3JtYXR0ZWRTdHJpbmcubGVuZ3RoICYmIGZvcm1hdHRlZFN0cmluZy5yZXBsYWNlKC9bXmEtekEtWjAtOUAuLV0vZywgXCJcIikubGVuZ3RoICUgKHNlcGFyYXRvclJlcGVhdCArIGZhY3RvcikgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nICs9IHNlcGFyYXRvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZm9ybWF0dGVkU3RyaW5nW2Zvcm1hdHRlZFN0cmluZy5sZW5ndGggLSAxXSA9PSBzZXBhcmF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gZm9ybWF0dGVkU3RyaW5nLnN1YnN0cmluZygwLCBmb3JtYXR0ZWRTdHJpbmcubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gZm9ybWF0dGVkU3RyaW5nO1xuICAgICAgICAgICAgICAgIGxldCBjdXJzb3JQb3NpdGlvbiA9IHNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgICAgIGlmICgoY3Vyc29yUG9zaXRpb24gJSAoc2VwYXJhdG9yUmVwZWF0ICsgMSkgKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZihpbnB1dC5vbGRWYWxpZFZhbHVlLmxlbmd0aCA8IGZvcm1hdHRlZFN0cmluZy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yUG9zaXRpb24gKz0gMVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yUG9zaXRpb24gLT0gMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGN1cnNvclBvc2l0aW9uPDApe1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3JQb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlucHV0Lm9sZFZhbGlkVmFsdWUgPSBmb3JtYXR0ZWRTdHJpbmc7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2VsZWN0aW9uU3RhcnQgPSBjdXJzb3JQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBpbnB1dC5zZWxlY3Rpb25FbmQgPSBjdXJzb3JQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZvcm1hdHRlZFN0cmluZy0tLS1cIiwgZm9ybWF0dGVkU3RyaW5nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5wdXQub2xkVmFsaWRWYWx1ZSA9IGZpbmFsRGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXModHlwZSwgZWxlbSwgcHJvcHMsIGZpcnN0UmVuZGVyKSB7XG4gICAgaWYgKHR5cGUgPT0gJ21vZGFsJykge1xuICAgICAgICBzZXRNb2RhbEF0dHJpYnV0ZXMoZWxlbSwgcHJvcHMsIGZpcnN0UmVuZGVyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlbGVtLmNsYXNzTGlzdCAmJiBlbGVtLmNsYXNzTGlzdC5sZW5ndGggPiAwKVxuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQodHlwZSlcbiAgICBlbHNlXG4gICAgICAgIGVsZW0uY2xhc3NOYW1lID0gdHlwZVxuXG4gICAgZWxlbS5zdHlsZS50cmFuc2l0aW9uID0gcHJvcHMudHJhbnNpdGlvbjtcblxuICAgIC8qIE5ldyBTdHlsZSAqL1xuICAgIC8qIFJlbmRlciBmcm9tIGdsb2JhbCBzdHlsZXMgKi9cbiAgICBlbGVtLnN0eWxlLndpZHRoID0gJ2F1dG8nO1xuICAgIGVsZW0uc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuXG4gICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCd3aWR0aCcpKSB7XG4gICAgICAgIGlmIChwcm9wcy53aWR0aCA9PSAnbWF0Y2hfcGFyZW50Jykge1xuICAgICAgICAgICAgZWxlbS5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wcy53aWR0aCA9PSAnd3JhcF9jb250ZW50Jykge1xuICAgICAgICAgICAgLy8gWW91IHNlZSBiZWxvd1xuICAgICAgICB9IGVsc2UgaWYgKCFpc05hTihwcm9wcy53aWR0aCkpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgncGVyY2VudFdpZHRoJykgJiYgcHJvcHMucGVyY2VudFdpZHRoKVxuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUud2lkdGggPSBwcm9wcy53aWR0aCArICclJztcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLndpZHRoID0gcHJvcHMud2lkdGggKyAncHgnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdoZWlnaHQnKSkge1xuICAgICAgICBpZiAocHJvcHMuaGVpZ2h0ID09ICdtYXRjaF9wYXJlbnQnKSB7XG4gICAgICAgICAgICBlbGVtLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSBpZiAocHJvcHMuaGVpZ2h0ID09ICd3cmFwX2NvbnRlbnQnKSB7XG4gICAgICAgICAgICBlbGVtLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xuICAgICAgICAgICAgLy8gWW91IHNlZSBiZWxvd1xuICAgICAgICB9IGVsc2UgaWYgKCFpc05hTihwcm9wcy5oZWlnaHQpKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ3BlcmNlbnRIZWlnaHQnKSAmJiBwcm9wcy5wZXJjZW50SGVpZ2h0KVxuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuaGVpZ2h0ID0gcHJvcHMuaGVpZ2h0ICsgJyUnO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuaGVpZ2h0ID0gcHJvcHMuaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnbWluV2lkdGgnKSAmJiAhaXNOYU4ocHJvcHMubWluV2lkdGgpKSB7XG4gICAgICAgIGlmIChwcm9wcy5wZXJjZW50TWluV2lkdGgpXG4gICAgICAgICAgICBlbGVtLnN0eWxlLm1pbldpZHRoID0gcHJvcHMubWluV2lkdGggKyAnJSc7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGVsZW0uc3R5bGUubWluV2lkdGggPSBwcm9wcy5taW5XaWR0aCArICdweCc7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdtaW5IZWlnaHQnKSAmJiAhaXNOYU4ocHJvcHMubWluSGVpZ2h0KSkge1xuICAgICAgICBpZiAocHJvcHMucGVyY2VudE1pbkhlaWdodClcbiAgICAgICAgICAgIGVsZW0uc3R5bGUubWluSGVpZ2h0ID0gcHJvcHMubWluSGVpZ2h0ICsgJyUnO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBlbGVtLnN0eWxlLm1pbkhlaWdodCA9IHByb3BzLm1pbkhlaWdodCArICdweCc7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdtYXhXaWR0aCcpICYmICFpc05hTihwcm9wcy5tYXhXaWR0aCkpIHtcbiAgICAgICAgaWYgKHByb3BzLnBlcmNlbnRNYXhXaWR0aClcbiAgICAgICAgICAgIGVsZW0uc3R5bGUubWF4V2lkdGggPSBwcm9wcy5tYXhXaWR0aCArICclJztcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgZWxlbS5zdHlsZS5tYXhXaWR0aCA9IHByb3BzLm1heFdpZHRoICsgJ3B4JztcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ21heEhlaWdodCcpICYmICFpc05hTihwcm9wcy5tYXhIZWlnaHQpKSB7XG4gICAgICAgIGlmIChwcm9wcy5wZXJjZW50TWF4SGVpZ2h0KVxuICAgICAgICAgICAgZWxlbS5zdHlsZS5tYXhIZWlnaHQgPSBwcm9wcy5tYXhIZWlnaHQgKyAnJSc7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGVsZW0uc3R5bGUubWF4SGVpZ2h0ID0gcHJvcHMubWF4SGVpZ2h0ICsgJ3B4JztcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ3BhZGRpbmcnKSkge1xuICAgICAgICBsZXQgcGFkZGluZyA9IHByb3BzLnBhZGRpbmcuc3BsaXQoJywnKS5tYXAoYSA9PiBhICogMSk7XG5cbiAgICAgICAgZWxlbS5zdHlsZVsncGFkZGluZyddID0gcGFkZGluZ1sxXSArICdweCAnICsgcGFkZGluZ1syXSArICdweCAnICsgcGFkZGluZ1szXSArICdweCAnICsgcGFkZGluZ1swXSArICdweCc7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdtYXJnaW4nKSkge1xuICAgICAgICBsZXQgbWFyZ2luID0gcHJvcHMubWFyZ2luLnNwbGl0KCcsJykubWFwKGEgPT4gYSAqIDEpO1xuXG4gICAgICAgIGVsZW0uc3R5bGVbJ21hcmdpbiddID0gbWFyZ2luWzFdICsgJ3B4ICcgKyBtYXJnaW5bMl0gKyAncHggJyArIG1hcmdpblszXSArICdweCAnICsgbWFyZ2luWzBdICsgJ3B4JztcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ3Zpc2liaWxpdHknKSkge1xuICAgICAgICBsZXQgdmlzaWJpbGl0eSA9IHByb3BzLnZpc2liaWxpdHk7XG4gICAgICAgIGlmICh2aXNpYmlsaXR5ID09ICdpbnZpc2libGUnKVxuICAgICAgICAgICAgZWxlbS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgZWxzZSBpZiAodmlzaWJpbGl0eSA9PSAnZ29uZScpXG4gICAgICAgICAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGVtLnN0eWxlLnZpc2liaWxpdHkgPSAnJztcblxuICAgICAgICAgICAgaW5pdGlhbGl6ZVNob3coZWxlbSwgcHJvcHMsIHR5cGUpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdGlhbGl6ZVNob3coZWxlbSwgcHJvcHMsIHR5cGUpO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnZXhwYW5kJykpIHtcbiAgICAgICAgbGV0IHZpc2liaWxpdHkgPSBwcm9wcy5leHBhbmQgKyAnJztcbiAgICAgICAgaWYgKHZpc2liaWxpdHkgPT0gJ3RydWUnKXtcbiAgICAgICAgICAgIGVsZW0uc3R5bGUudmlzaWJpbGl0eSA9ICcnO1xuICAgICAgICAgICAgaW5pdGlhbGl6ZVNob3coZWxlbSwgcHJvcHMsIHR5cGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIC8qIFJlbmRlciBnbG9iYWwgc3R5bGVzIGVuZCAqL1xuXG4gICAgbGV0IHNjcm9sbEJhclggPSB0cnVlO1xuICAgIGxldCBzY3JvbGxCYXJZID0gdHJ1ZTtcblxuICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnc2Nyb2xsQmFyWCcpKVxuICAgICAgICBzY3JvbGxCYXJYID0gcHJvcHMuc2Nyb2xsQmFyWDtcbiAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ3Njcm9sbEJhclknKSlcbiAgICAgICAgc2Nyb2xsQmFyWSA9IHByb3BzLnNjcm9sbEJhclk7XG5cbiAgICAvKiBSZW5kZXIgdHlwZSBzcGVjaWZpYyBzdHlsZXMgKi9cbiAgICBpZiAodHlwZSA9PSAnbGluZWFyTGF5b3V0Jykge1xuICAgICAgICBlbGVtLnN0eWxlW1wiYm94LXNpemluZ1wiXSA9IFwiYm9yZGVyLWJveFwiO1xuXG4gICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnZml4ZWRXcmFwJykgJiYgIXByb3BzLmZpeGVkV3JhcCkge1xuICAgICAgICAgICAgZWxlbS5zdHlsZVtcImZsZXgtd3JhcFwiXSA9IFwibm93cmFwXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtLnN0eWxlW1wiZmxleC13cmFwXCJdID0gXCJ3cmFwXCI7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtLnN0eWxlW1wiZmxleC1kaXJlY3Rpb25cIl0gPSBwcm9wcy5vcmllbnRhdGlvbiA9PSBcImhvcml6b250YWxcIiB8fCBwcm9wcy5vcmllbnRhdGlvbiA9PSBudWxsID8gXCJyb3dcIiA6IFwiY29sdW1uXCI7XG5cbiAgICAgICAgaWYgKGVsZW0uc3R5bGVbXCJmbGV4LWRpcmVjdGlvblwiXSA9PSAncm93JylcbiAgICAgICAgICAgIHNldEdyYXZpdHlTdHlsZXNGb3JSb3coZWxlbSwgcHJvcHMpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBzZXRHcmF2aXR5U3R5bGVzRm9yQ29sdW1uKGVsZW0sIHByb3BzKTtcblxuICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ3Njcm9sbEJhclgnKSkge1xuICAgICAgICAgICAgaWYgKHByb3BzLnNjcm9sbEJhclgpXG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5vdmVyZmxvd1ggPSAnYXV0bydcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLm92ZXJmbG93WCA9ICdoaWRkZW4nXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ3Njcm9sbEJhclknKSkge1xuICAgICAgICAgICAgaWYgKHByb3BzLnNjcm9sbEJhclkpXG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0bydcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nXG4gICAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcImhvcml6b250YWxTY3JvbGxWaWV3XCIpIHtcbiAgICAgICAgZWxlbS5zdHlsZS5vdmVyZmxvd1ggPSBcImF1dG9cIjtcbiAgICAgICAgZWxlbS5zdHlsZS5vdmVyZmxvd1kgPSBcImhpZGRlblwiO1xuXG4gICAgICAgIGlmICghc2Nyb2xsQmFyWClcbiAgICAgICAgICAgIGVsZW0uc3R5bGUub3ZlcmZsb3dYID0gJ2hpZGRlbic7XG4gICAgfSBlbHNlIGlmICh0eXBlID09IFwibGlzdFZpZXdcIikge1xuICAgICAgICBlbGVtLnN0eWxlLm92ZXJmbG93WSA9IFwiYXV0b1wiO1xuICAgICAgICBlbGVtLnN0eWxlLm92ZXJmbG93WCA9IFwiaGlkZGVuXCI7XG5cbiAgICAgICAgaWYgKCFzY3JvbGxCYXJZKVxuICAgICAgICAgICAgZWxlbS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJ3Njcm9sbFZpZXcnKSB7XG4gICAgICAgIGVsZW0uc3R5bGUub3ZlcmZsb3dYID0gJ2F1dG8nO1xuICAgICAgICBlbGVtLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJztcblxuICAgICAgICBpZiAoIXNjcm9sbEJhclgpXG4gICAgICAgICAgICBlbGVtLnN0eWxlLm92ZXJmbG93WCA9ICdoaWRkZW4nO1xuICAgICAgICBpZiAoIXNjcm9sbEJhclkpXG4gICAgICAgICAgICBlbGVtLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PSAncmVsYXRpdmVMYXlvdXQnKSB7XG4gICAgICAgIGVsZW0uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuXG4gICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnc2Nyb2xsQmFyWCcpKSB7XG4gICAgICAgICAgaWYgKHByb3BzLnNjcm9sbEJhclgpXG4gICAgICAgICAgICAgIGVsZW0uc3R5bGUub3ZlcmZsb3dYID0gJ2F1dG8nXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBlbGVtLnN0eWxlLm92ZXJmbG93WCA9ICdoaWRkZW4nXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ3Njcm9sbEJhclknKSkge1xuICAgICAgICAgIGlmIChwcm9wcy5zY3JvbGxCYXJZKVxuICAgICAgICAgICAgICBlbGVtLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJ1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgZWxlbS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJ1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09ICdpbWFnZVZpZXcnKSB7XG4gICAgICAgIGlmIChwcm9wcy5pbWFnZVVybCkge1xuICAgICAgICAgICAgbGV0IGltYWdlVXJsID0gcHJvcHMuaW1hZ2VVcmxcblxuICAgICAgICAgICAgaWYgKHByb3BzLnJhd0RhdGEpIHtcbiAgICAgICAgICAgICAgICAvLyBEbyBOb3RoaW5nXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gaW1hZ2VVcmwuc3BsaXQoJy4nKVxuICAgICAgICAgICAgICAgIGxldCBleHQgPSAnJ1xuICAgICAgICAgICAgICAgIGlmICh0ZW1wICYmIHRlbXAubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAgICAgZXh0ID0gdGVtcFt0ZW1wLmxlbmd0aCAtIDFdXG5cbiAgICAgICAgICAgICAgICBsZXQgZXh0cyA9IFtcImpwZWdcIiwgXCJqcGdcIiwgXCJwbmdcIiwgXCJibXBcIiwgXCJzdmdcIiwgXCJnaWZcIl1cbiAgICAgICAgICAgICAgICBleHQgPSBleHQudG9Mb3dlckNhc2UoKVxuXG4gICAgICAgICAgICAgICAgaWYoIWltYWdlVXJsLmluY2x1ZGVzKFwiZGF0YTppbWFnZS9zdmcreG1sXCIpICYmICFleHRzLmluY2x1ZGVzKGV4dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmwgKz0gJy5wbmcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1hZ2VVcmwpXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyogUmVuZGVyIHR5cGUgc3BlY2lmaWMgc3R5bGVzIGVuZCAqL1xuICAgIC8qIE5ldyBTdHlsZSBFbmQgKi9cblxuICAgIGZvciAobGV0IGtleSBpbiBwcm9wcykge1xuICAgICAgICBpZiAoa2V5ID09IFwicG9wdXBNZW51XCIpIHtcbiAgICAgICAgICAgIHBvcHVwKGVsZW0sIHByb3BzKVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PSBcInRleHRcIikge1xuICAgICAgICAgICAgaWYgKHR5cGUgPT0gXCJlZGl0VGV4dFwiKVxuICAgICAgICAgICAgICAgIGVsZW0udmFsdWUgPSBwcm9wc1trZXldXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgY3JlYXRlVGV4dEVsZW1lbnQoZWxlbSwgcHJvcHMpXG4gICAgICAgIH1lbHNlIGlmIChrZXkgPT0gXCJ0ZXh0RnJvbUh0bWxcIikge1xuICAgICAgICAgICAgaWYgKHR5cGUgPT0gXCJlZGl0VGV4dFwiKVxuICAgICAgICAgICAgICAgIGVsZW0udmFsdWUgPSBwcm9wc1trZXldXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgY3JlYXRlVGV4dEVsZW1lbnQyKGVsZW0sIHByb3BzKVxuICAgICAgICB9IFxuICAgICAgICBlbHNlIGlmIChrZXkgPT0gXCJzdHlsZVwiKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpbm5lcktleSBpbiBwcm9wcy5zdHlsZSkge1xuICAgICAgICAgICAgICAgIGlmIChpbm5lcktleSA9PSBcImNsYXNzTmFtZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NOYW1lICs9IFwiIFwiICsgcHJvcHMuc3R5bGVbaW5uZXJLZXldO1xuICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICBlbGVtLnN0eWxlW2lubmVyS2V5XSA9IHByb3BzLnN0eWxlW2lubmVyS2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT0gXCJhdHRyaWJ1dGVzXCIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGlubmVyS2V5IGluIHByb3BzLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZShpbm5lcktleSwgcHJvcHMuYXR0cmlidXRlc1tpbm5lcktleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PSBcImNsYXNzTmFtZVwiKSB7XG4gICAgICAgICAgICBpZiAoKHByb3BzW2tleV0gfHwgXCJcIikudHJpbSgpICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgcHJvcHNba2V5XS5zcGxpdChcIiBcIikubWFwKGNsYXNzTmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PSBcImNsYXNzTGlzdFwiKSB7XG4gICAgICAgICAgICBKU09OLnBhcnNlKHByb3BzW2tleV0pLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChvYmopO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcHNba2V5XSAmJiB0eXBlb2YgcHJvcHNba2V5XSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHZhciBldmVudFR5cGUgPSBrZXkuc3Vic3RyaW5nKDIsIGtleS5sZW5ndGgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB2YXIgZWxlbUNCID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIGVsZW0uc3R5bGUudXNlclNlbGVjdCA9ICdub25lJztcbiAgICAgICAgICAgIGlmIChldmVudFR5cGUgPT0gXCJjaGFuZ2VcIikge1xuICAgICAgICAgICAgICAgIGV2ZW50VHlwZSA9IFwiaW5wdXRcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dFZhbHVlID0gZWxlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXRWYWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImZpbGxlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzZWQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2ZpbGxlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBlbGVtWydvbmZvY3VzJ10gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGVsZW0ucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdmb2N1c2VkJyk7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50VHlwZSA9PSBcImZvY3VzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbUNCKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgLy9UT0RPOiBSZXBlYXRlZCBjb2RlIHRvIGJlIHJlbW92ZWQgbGF0ZXJcbiAgICAgICAgLy8gICBpZiAocHJvcHMubGFiZWwpIHtcbiAgICAgICAgLy8gICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyAgICAgICB2YXIgaW5wdXRWYWx1ZSA9IGVsZW0udmFsdWU7XG4gICAgICAgIC8vICAgICAgIGlmIChpbnB1dFZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgLy8gICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJmaWxsZWRcIik7XG4gICAgICAgIC8vICAgICAgICAgZWxlbS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzZWQnKTtcbiAgICAgICAgLy8gICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2ZpbGxlZCcpO1xuICAgICAgICAvLyAgICAgICB9XG4gICAgICAgIC8vICAgICB9KTsgIFxuXG4gICAgICAgIC8vICAgICBpZiAoIShwcm9wcy5sYWJlbCAmJiBldmVudFR5cGUgPT0gXCJmb2N1c1wiKSAmJiBmaXJzdFJlbmRlcikge1xuICAgICAgICAvLyAgICAgICAgIC8qZWxlbVsnb24nICsgZXZlbnRUeXBlXSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgLy8gICAgICAgICAgICAgZXZlbnRUeXBlID09IFwiaW5wdXRcIiA/IGVsZW1DQihlLnRhcmdldC52YWx1ZSkgOiBlbGVtQ0IoZSlcbiAgICAgICAgLy8gICAgICAgICB9Ki9cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIGlmICghcHJvcHMuYW5pbWF0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJhbmltYWl0b24gbm90IGZvdW5kXCIsIHByb3BzKVxuICAgIH1cbiAgICBpZiAocHJvcHMuYW5pbWF0aW9uLnRyYW5zaXRpb24pIHtcbiAgICAgICAgY29uc3QgYWZ0ZXJUcmFuc2l0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gcHJvcHMuYW5pbWF0aW9uO1xuICAgICAgICAgICAgZWxlbS5zdHlsZS50cmFuc2l0aW9uID0gYW5pbWF0aW9uLnRyYW5zaXRpb247XG4gICAgICAgICAgICBlbGVtLnN0eWxlLnRyYW5zZm9ybSA9IGFuaW1hdGlvbi50cmFuc2Zvcm07XG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uLm9wYWNpdHkpIHtcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLm9wYWNpdHkgPSBhbmltYXRpb24ub3BhY2l0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAocHJvcHMuc3R5bGUudHJhbnNmb3JtIHx8IHByb3BzLnN0eWxlLm9wYWNpdHkpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoYWZ0ZXJUcmFuc2l0aW9uLCAxMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWZ0ZXJUcmFuc2l0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBFdmVudHMgKi9cbiAgICBpZiAoZmlyc3RSZW5kZXIpIHtcbiAgICAgICAgaWYgKHR5cGUgPT0gXCJlZGl0VGV4dFwiICYmIGVsZW0udGFnTmFtZS50b0xvd2VyQ2FzZSgpID09IFwiaW5wdXRcIikge1xuICAgICAgICAgICAgaWYgKHByb3BzLmF1dG9mb2N1cykge1xuICAgICAgICAgICAgICAgIGVsZW0uZm9jdXMoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHNlcGFyYXRvcklucHV0S2V5RG93bkhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgXG5cbiAgICAgICAgbGV0IGV2ZW50cyA9IFsnb25DbGljaycsICdvbkVudGVyUHJlc3NlZEV2ZW50JywgJ29uQ2hhbmdlJywgJ29uTW91c2VEb3duJywgJ29uTW91c2VVcCcsICdvbk1vdXNlRW50ZXInLCAnb25Nb3VzZU92ZXInLCAnb25Nb3VzZU1vdmUnLCAnb25Nb3VzZU91dCcsICdvbk1vdXNlTGVhdmUnLCAnb25Gb2N1cyddXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBrZXkgPSBldmVudHNbaV1cbiAgICAgICAgICAgIGxldCBldmVudFR5cGUgPSBrZXkuc3Vic3RyaW5nKDIsIGtleS5sZW5ndGgpLnRvTG93ZXJDYXNlKClcblxuICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkgJiYgdHlwZW9mIHByb3BzW2tleV0gPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBwcm9wc1trZXldXG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PSBcIm9uRW50ZXJQcmVzc2VkRXZlbnRcIikge1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PSAxMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChldmVudFR5cGUgPT0gXCJjaGFuZ2VcIikge1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnRUeXBlID09IFwiZm9jdXNcIil7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyogRXZlbnRzIEVuZCAqL1xuXG4gICAgLyogQ29tcG9uZW50IFBhcnQgKi9cbiAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ2VsZW1lbnRUeXBlJykgJiYgcHJvcHMuZWxlbWVudFR5cGUgPT0gJ2NvbXBvbmVudCcpIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5XUkFQUEVSKVxuXG4gICAgICAgIGlmIChmaXJzdFJlbmRlcilcbiAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdndWlkJywgcHJvcHMuZ3VpZClcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ2NvbXBvbmVudFR5cGUnKSAmJiBwcm9wcy5jb21wb25lbnRUeXBlKVxuICAgICAgICByZW5kZXJDb21wb25lbnQoZWxlbSwgcHJvcHMsIGZpcnN0UmVuZGVyKVxufVxuXG5mdW5jdGlvbiBzZXRNb2RhbEF0dHJpYnV0ZXMoZWxlbSwgcHJvcHMsIGZpcnN0UmVuZGVyKSB7XG4gICAgc2V0R3Jhdml0eVN0eWxlc0ZvclJvdyhlbGVtLCBwcm9wcyk7XG5cbiAgICBsZXQgYmFja2Ryb3BFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQod2luZG93Ll9fQkFDS0RST1BNT0RBTF9DTEFTUyArICdfJyArIHByb3BzLmlkKVxuXG4gICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdtb2RhbFZpc2liaWxpdHknKSAmJiBwcm9wcy5tb2RhbFZpc2liaWxpdHkpIHtcbiAgICAgICAgYmFja2Ryb3BFbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fU0hPV05NT0RBTF9DTEFTUyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19PUEVOTU9EQUxfQ0xBU1MpO1xuXG4gICAgICAgIGxldCBtb2RhbFByb3BzID0gbnVsbDtcbiAgICAgICAgaWYgKHdpbmRvdy5fX01PREFMX1BST1BTW3Byb3BzLmlkXSkge1xuICAgICAgICAgICAgbW9kYWxQcm9wcyA9IEpTT04ucGFyc2Uod2luZG93Ll9fTU9EQUxfUFJPUFNbcHJvcHMuaWRdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy5vblNob3cgJiYgdHlwZW9mIHByb3BzLm9uU2hvdyA9PVxuICAgICAgICAgICAgXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBpZiAoZmlyc3RSZW5kZXIgfHwgKG1vZGFsUHJvcHMgJiYgbW9kYWxQcm9wcy5tb2RhbFZpc2liaWxpdHkgIT0gcHJvcHMubW9kYWxWaXNpYmlsaXR5KSkge1xuICAgICAgICAgICAgICAgIHByb3BzLm9uU2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHMubW9kYWxWaXNpYmlsaXR5ID0gZmFsc2U7XG4gICAgICAgIGJhY2tkcm9wRWxlbS5jbGFzc0xpc3QucmVtb3ZlKHdpbmRvdy5fX1NIT1dOTU9EQUxfQ0xBU1MpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUod2luZG93Ll9fT1BFTk1PREFMX0NMQVNTKTtcbiAgICB9XG5cbiAgICB3aW5kb3cuX19NT0RBTF9QUk9QU1twcm9wcy5pZF0gPSBKU09OLnN0cmluZ2lmeShwcm9wcyk7XG59XG5cbmxldCBpbml0aWFsaXplU2hvdyA9IGZ1bmN0aW9uIChlbGVtLCBwcm9wcywgdHlwZSkge1xuICAgIGlmICh0eXBlID09ICdsaW5lYXJMYXlvdXQnKSB7XG4gICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnd2lkdGgnKSAmJiBwcm9wcy53aWR0aCA9PSAnd3JhcF9jb250ZW50Jykge1xuICAgICAgICAgICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1mbGV4JztcbiAgICAgICAgICAgIGVsZW0uc3R5bGUud2lkdGggPSAnbWF4LWNvbnRlbnQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ3dpZHRoJykgJiYgcHJvcHMud2lkdGggPT0gJ3dyYXBfY29udGVudCcpIHtcbiAgICAgICAgICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICAgICAgZWxlbS5zdHlsZS53aWR0aCA9ICdtYXgtY29udGVudCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyogT2JzZXJ2ZXIgZm9yIGFmdGVyUmVuZGVyICovXG5sZXQgb2JzZXJ2ZXIgPSAoZWxlbSkgPT4ge1xuICAgIGxldCBpZCA9IGVsZW0uaWQ7XG4gICAgaWYgKCFpZCB8fCBfX09CU0VSVkVSU1tpZF0pXG4gICAgICAgIHJldHVybjtcblxuICAgIF9fT0JTRVJWRVJTW2lkXSA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChpdGVtLCBvYnNlcnZlcikge1xuICAgICAgICBpZiAoaXRlbSAmJiBpdGVtWzBdLnRhcmdldCkge1xuICAgICAgICAgICAgbGV0IHRhcmdldCA9IGl0ZW1bMF0udGFyZ2V0O1xuICAgICAgICAgICAgbGV0IGlkID0gdGFyZ2V0LmlkO1xuICAgICAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZpZXcgPSBfX1ZJRVdTW2lkXTtcblxuICAgICAgICAgICAgICAgIGlmICh2aWV3ICYmIHZpZXcucHJvcHMuaGFzT3duUHJvcGVydHkoJ2FmdGVyUmVuZGVyJykgJiYgdHlwZW9mIHZpZXcucHJvcHMuYWZ0ZXJSZW5kZXIgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZXcucHJvcHMuYWZ0ZXJSZW5kZXIoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9KTtcblxuICAgIChfX09CU0VSVkVSU1tpZF0pLm9ic2VydmUoZWxlbSwge1xuICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlXG4gICAgfSk7XG59XG5cbi8qIERvIHNvbWUgYWN0aW9ucyBhZnRlciByZW5kZXJlZCAqL1xubGV0IGNiID0gKGVsZW0sIHZpZXcpID0+IHtcbiAgICBpZiAodmlldy5wcm9wcy5mZWVkYmFjayAmJiB0eXBlb2Ygdmlldy5wcm9wcy5mZWVkYmFjayA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdmlldy5wcm9wcy5mZWVkYmFjaygpXG4gICAgfVxufVxuXG4vLyBDcmVhdGVzIHRoZSBNb2RhbCBlbGVtZW50IGlmIGl0IGhhcyBub3QgYmVlbiBhbHJlYWR5IGluZmxhdGVkXG5sZXQgaW5mbGF0ZU1vZGFsID0gZnVuY3Rpb24gKHZpZXcsIHBhcmVudEVsZW1lbnQsIHN0b3BDaGlsZCkge1xuICAgIGxldCBuZXdJbmZsYXRlZCA9IGZhbHNlO1xuICAgIGxldCBwYXJlbnRJZCA9IHBhcmVudEVsZW1lbnQuaWQ7XG5cbiAgICAvKiBNb2RhbCBXcmFwcGVyICovXG4gICAgbGV0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh2aWV3LnByb3BzLmlkKTtcbiAgICBpZiAoIWVsZW0gfHwgZWxlbSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbmV3SW5mbGF0ZWQgPSB0cnVlO1xuXG4gICAgICAgIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgdmlldy5wcm9wcy5pZCk7XG4gICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCd2aXJ0dWFsX3BhcmVudCcsIHBhcmVudElkKTtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTlRFTlRNT0RBTF9DTEFTUyk7XG4gICAgfVxuICAgIC8qIE1vZGFsIFdyYXBwZXIgRW5kICovXG5cbiAgICAvKiBCYWNrRHJvcCAqL1xuICAgIGxldCBiYWNrZHJvcEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh3aW5kb3cuX19CQUNLRFJPUE1PREFMX0NMQVNTICsgJ18nICsgdmlldy5wcm9wcy5pZCk7XG4gICAgaWYgKCFiYWNrZHJvcEVsZW0gfHwgYmFja2Ryb3BFbGVtID09IHVuZGVmaW5lZCkge1xuICAgICAgICBiYWNrZHJvcEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYmFja2Ryb3BFbGVtLnNldEF0dHJpYnV0ZSgnaWQnLCB3aW5kb3cuX19CQUNLRFJPUE1PREFMX0NMQVNTICsgJ18nICsgdmlldy5wcm9wcy5pZCk7XG4gICAgICAgIGJhY2tkcm9wRWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0JBQ0tEUk9QTU9EQUxfQ0xBU1MpO1xuXG4gICAgICAgIGlmICh2aWV3LnByb3BzLmhhc093blByb3BlcnR5KCdhbmltYXRpb25UeXBlJykgJiYgdmlldy5wcm9wcy5hbmltYXRpb25UeXBlICE9ICdub25lJykge1xuICAgICAgICAgICAgbGV0IGFuaW1hdGlvblR5cGUgPSB2aWV3LnByb3BzLmFuaW1hdGlvblR5cGU7XG5cbiAgICAgICAgICAgIGlmIChhbmltYXRpb25UeXBlID09ICdmYWRlJykge1xuICAgICAgICAgICAgICAgIGJhY2tkcm9wRWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0ZBREVNT0RBTF9DTEFTUyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFuaW1hdGlvblR5cGUgPT0gJ3NsaWRlJykge1xuICAgICAgICAgICAgICAgIGJhY2tkcm9wRWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX1NMSURFTU9EQUxfQ0xBU1MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZpZXcucHJvcHMuaGFzT3duUHJvcGVydHkoJ2Nsb3NlT25CYWNrZHJvcCcpICYmICF2aWV3LnByb3BzLmNsb3NlT25CYWNrZHJvcCkge1xuICAgICAgICAgICAgYmFja2Ryb3BFbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fRElTQUJMRURCQUNLRFJPUF9DTEFTUyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBiYWNrZHJvcEVsZW0uY2xhc3NMaXN0LnJlbW92ZSh3aW5kb3cuX19ESVNBQkxFREJBQ0tEUk9QX0NMQVNTKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2aWV3LnByb3BzLmhhc093blByb3BlcnR5KCd0cmFuc3BhcmVudCcpICYmIHZpZXcucHJvcHMudHJhbnNwYXJlbnQpIHtcbiAgICAgICAgICAgIGJhY2tkcm9wRWxlbS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJhY2tkcm9wRWxlbS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYmEoMCwgMCwgMCwgMC41KSc7XG4gICAgICAgIH1cblxuICAgICAgICBiYWNrZHJvcEVsZW0uYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmFja2Ryb3BFbGVtKTtcblxuICAgICAgICBpZiAobmV3SW5mbGF0ZWQpIHtcbiAgICAgICAgICAgIGlmICh2aWV3LnByb3BzLmhhc093blByb3BlcnR5KCdhZnRlclJlbmRlcicpICYmIHR5cGVvZiB2aWV3LnByb3BzLmFmdGVyUmVuZGVyID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIC8vIFdlIHNob3VsZCBydW4gb2JzZXJ2ZXIgZm9yIHRoZSBlbGVtZW50XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIoZWxlbSk7XG4gICAgICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2hhc19yZW5kZXInLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiBCYWNrRHJvcCBFbmQgKi9cblxuICAgIHNldE1vZGFsQXR0cmlidXRlcyhlbGVtLCB2aWV3LnByb3BzLCBuZXdJbmZsYXRlZCk7XG5cbiAgICBpZiAoIXN0b3BDaGlsZCkge1xuICAgICAgICBpZiAodmlldy5oYXNPd25Qcm9wZXJ0eSgnY2hpbGRyZW4nKSAmJiB2aWV3LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmlldy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh2aWV3LmNoaWxkcmVuW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZXcuY2hpbGRyZW5baV0ucHJvcHMuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgIT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmxhdGVWaWV3KHZpZXcuY2hpbGRyZW5baV0sIGVsZW0sIHZpZXcuY2hpbGRyZW5baSAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mbGF0ZVZpZXcodmlldy5jaGlsZHJlbltpXSwgZWxlbSwgdmlldyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGVsZW0uaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGROb2RlcyA9IGVsZW0uY2hpbGROb2Rlc1xuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2Rlcykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGROb2RlID0gY2hpbGROb2Rlc1tpXVxuXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld0luZmxhdGVkKSB7XG4gICAgICAgIGNiKGVsZW0sIHZpZXcpO1xuICAgIH1cblxuICAgIHJldHVybiBiYWNrZHJvcEVsZW07XG59XG5cbndpbmRvdy5pbmZsYXRlVGltaW5ncyA9IHtcbiAgICBsYXN0VXBkYXRlZEF0OiBudWxsXG59XG5cbi8vIENyZWF0ZXMgdGhlIERPTSBlbGVtZW50IGlmIGl0IGhhcyBub3QgYmVlbiBhbHJlYWR5IGluZmxhdGVkXG4vLyBWaWV3OiBPYmplY3Qgb2YgUmVhY3RET00sIHt0eXBlLCBwcm9wcywgY2hpbGRyZW59XG4vLyBwYXJlbnRFbGVtZW50OiBET00gT2JqZWN0XG5sZXQgaW5mbGF0ZVZpZXcgPSBmdW5jdGlvbiAodmlldywgcGFyZW50RWxlbWVudCwgc2libGluZ1ZpZXcsIHN0b3BDaGlsZCwgc3RvcE9ic2VydmVyLCByZW5kZXJTdHlsZSkge1xuICAgIGNvbnN0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgICBpZiAodmlldy50eXBlID09ICdtb2RhbCcpIHtcbiAgICAgICAgcmV0dXJuIGluZmxhdGVNb2RhbCh2aWV3LCBwYXJlbnRFbGVtZW50LCBzdG9wQ2hpbGQpO1xuICAgIH1cblxuICAgIGxldCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmlldy5wcm9wcy5pZCk7XG4gICAgbGV0IHN1YkVsZW0gPSBudWxsO1xuICAgIGxldCBuZXdJbmZsYXRlZCA9IGZhbHNlO1xuXG4gICAgaWYgKHZpZXcucHJvcHMueCA9PSBcIk5hTlwiIHx8IHZpZXcucHJvcHMueSA9PSBcIk5hTlwiKSB7XG4gICAgICAgIHZpZXcgPSBoYW5kbGVXcmFwQ29udGVudCh2aWV3LCBwYXJlbnRFbGVtZW50KVxuICAgIH1cblxuICAgIGlmICghZWxlbSkge1xuICAgICAgICBpZiAodmlldy50eXBlID09IFwid2ViVmlld1wiKSB7XG4gICAgICAgICAgICBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJylcblxuICAgICAgICAgICAgZWxlbS5zdHlsZS5ib3JkZXIgPSAnbm9uZSdcbiAgICAgICAgfSBlbHNlIGlmICh2aWV3LnR5cGUgPT0gXCJpbWFnZVZpZXdcIikge1xuICAgICAgICAgICAgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBlbGVtW1wic3R5bGVcIl1bXCJtYXJnaW5cIl0gPSBcIjBcIjtcbiAgICAgICAgICAgIGVsZW1bXCJzdHlsZVwiXVtcInBhZGRpbmdcIl0gPSBcIjBcIjtcbiAgICAgICAgICAgIGVsZW1bXCJzdHlsZVwiXVtcImRpc3BsYXlcIl0gPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBlbGVtW1wic3R5bGVcIl1bXCJtYXgtd2lkdGhcIl0gPSBcIjEwMCVcIjtcbiAgICAgICAgICAgIGVsZW1bXCJzdHlsZVwiXVtcIm1heC1oZWlnaHRcIl0gPSBcIjEwMCVcIjtcbiAgICAgICAgICAgIGVsZW1bXCJzdHlsZVwiXVtcImJveC1zaXppbmdcIl0gPSBcImJvcmRlci1ib3hcIjtcbiAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHZpZXcudHlwZSA9PSBcImNoZWNrQm94XCIpIHtcbiAgICAgICAgICAgIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuXG4gICAgICAgICAgICBpZiAodmlldy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgnbGFiZWwnKSAmJiB2aWV3LnByb3BzLmxhYmVsICE9ICcnICYmIHBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBzdWJFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBzdWJFbGVtLnNldEF0dHJpYnV0ZSgnZm9yJywgdmlldy5wcm9wcy5pZCk7XG4gICAgICAgICAgICAgICAgc3ViRWxlbS5pbm5lckhUTUwgPSB2aWV3LnByb3BzLmxhYmVsO1xuICAgICAgICAgICAgICAgIHN1YkVsZW0uc3R5bGUucGFkZGluZyA9IFwiMCAwIDAgNXB4XCI7XG4gICAgICAgICAgICAgICAgc3ViRWxlbS5jbGFzc0xpc3QuYWRkKCdpbnB1dC1sYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgZGVsZXRlIHZpZXcucHJvcHMubGFiZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodmlldy50eXBlID09IFwiZWRpdFRleHRcIikge1xuICAgICAgICAgICAgaWYgKHZpZXcucHJvcHMuaGFzT3duUHJvcGVydHkoJ2lucHV0VHlwZScpICYmIHZpZXcucHJvcHMuaW5wdXRUeXBlID09ICdtdWx0aVRleHQnKSB7XG4gICAgICAgICAgICAgICAgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLmJvcmRlciA9ICdub25lJztcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLnJlc2l6ZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLm91dGxpbmUgPSAnbm9uZSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsZW0udmFsdWUgPSB2aWV3LnByb3BzLnRleHQgfHwgXCJcIjtcblxuICAgICAgICAgICAgaWYgKHZpZXcucHJvcHMubGV0dGVyU3BhY2luZykge1xuICAgICAgICAgICAgICAgIGVsZW1bXCJzdHlsZVwiXVtcImxldHRlci1zcGFjaW5nXCJdID0gdmlldy5wcm9wcy5sZXR0ZXJTcGFjaW5nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmlldy5wcm9wcy5sYWJlbCkge1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dFZpZXcgPSBlbGVtO1xuICAgICAgICAgICAgICAgIGlucHV0Vmlldy5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHZpZXcudHlwZSwgaW5wdXRWaWV3LCB2aWV3LnByb3BzLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBpbnB1dFZpZXcuc2V0QXR0cmlidXRlKFwiaWRcIiwgdmlldy5wcm9wcy5pZCArIFwiX2lucHV0XCIpO1xuICAgICAgICAgICAgICAgIHZhciBsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgICAgICAgIGwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIHZpZXcucHJvcHMuaWQgKyBcIl9pbnB1dFwiKTtcbiAgICAgICAgICAgICAgICBsLmlubmVySFRNTCA9IHZpZXcucHJvcHMubGFiZWw7XG4gICAgICAgICAgICAgICAgbC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1sYWJlbCcpO1xuXG4gICAgICAgICAgICAgICAgbFtcInN0eWxlXCJdW1wicG9zaXRpb25cIl0gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICAgICAgbFtcInN0eWxlXCJdW1wiY29sb3JcIl0gPSBcIiM5OTlcIjtcbiAgICAgICAgICAgICAgICBsW1wic3R5bGVcIl1bXCJiYWNrZ3JvdW5kLWNvbG9yXCJdID0gXCIjZmZmXCI7XG4gICAgICAgICAgICAgICAgbFtcInN0eWxlXCJdW1wicGFkZGluZ1wiXSA9IFwiMCA1cHhcIjtcbiAgICAgICAgICAgICAgICBsW1wic3R5bGVcIl1bXCJ6LWluZGV4XCJdID0gMTA7XG4gICAgICAgICAgICAgICAgbFtcInN0eWxlXCJdW1widHJhbnNpdGlvblwiXSA9IFwidHJhbnNmb3JtIDE1MG1zIGVhc2Utb3V0LCBmb250LXNpemUgMTUwbXMgZWFzZS1vdXRcIjtcblxuICAgICAgICAgICAgICAgIGlmICh2aWV3LnByb3BzLmxldHRlclNwYWNpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgbFtcInN0eWxlXCJdW1wibGV0dGVyLXNwYWNpbmdcIl0gPSB2aWV3LnByb3BzLmxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdpbnB1dC1ncm91cCcpO1xuICAgICAgICAgICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQobCk7XG4gICAgICAgICAgICAgICAgZWxlbS5hcHBlbmRDaGlsZChpbnB1dFZpZXcpO1xuXG4gICAgICAgICAgICAgICAgdmlldy5wcm9wcy5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHZpZXcudHlwZSwgZWxlbSwgdmlldy5wcm9wcywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHZpZXcucHJvcHMubGFiZWw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZpZXcucHJvcHMuaGludCkge1xuICAgICAgICAgICAgICAgIGVsZW0ucGxhY2Vob2xkZXIgPSB2aWV3LnByb3BzLmhpbnQgfHwgXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh2aWV3LmVsTmFtZSB8fCBcImRpdlwiKTtcblxuICAgICAgICAvKiBUb29sdGlwICovXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHZpZXcudHlwZSAhPSAnbGluZWFyTGF5b3V0JyAmJlxuICAgICAgICAgICAgdmlldy50eXBlICE9ICdyZWxhdGl2ZUxheW91dCcgJiZcbiAgICAgICAgICAgIHZpZXcudHlwZSAhPSAnaG9yaXpvbnRhbFNjcm9sbFZpZXcnICYmXG4gICAgICAgICAgICB2aWV3LnR5cGUgIT0gJ3Njcm9sbFZpZXcnICYmXG4gICAgICAgICAgICB2aWV3LnR5cGUgIT0gJ2xpc3RWaWV3J1xuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICh2aWV3LnByb3BzLmhhc093blByb3BlcnR5KCd0b29sdGlwVGV4dCcpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRvb2x0aXBUZXh0ID0gdmlldy5wcm9wcy50b29sdGlwVGV4dC50cmltKClcblxuICAgICAgICAgICAgICAgIGlmICh0b29sdGlwVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdG9vbHRpcEdyYXZpdHkgPSB2aWV3LnByb3BzLnRvb2x0aXBHcmF2aXR5ID8gdmlldy5wcm9wcy50b29sdGlwR3Jhdml0eSA6ICd0b3AnXG5cbiAgICAgICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdoYXNUb29sdGlwJylcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9vbHRpcEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwRWxlbS5pbm5lckhUTUwgPSAnPHByZT4nICsgdG9vbHRpcFRleHQgKyAnPC9wcmU+J1xuICAgICAgICAgICAgICAgICAgICB0b29sdGlwRWxlbS5jbGFzc0xpc3QuYWRkKCd0b29sdGlwVGV4dCcpXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBFbGVtLmNsYXNzTGlzdC5hZGQoJ3Rvb2x0aXBHcmF2aXR5XycgKyB0b29sdGlwR3Jhdml0eSlcblxuICAgICAgICAgICAgICAgICAgICBsZXQgc2l6ZSA9IDE1XG4gICAgICAgICAgICAgICAgICAgIGlmICh2aWV3LnByb3BzLmhhc093blByb3BlcnR5KCd0b29sdGlwVGV4dFNpemUnKSAmJiAhaXNOYU4odmlldy5wcm9wcy50b29sdGlwVGV4dFNpemUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplID0gdmlldy5wcm9wcy50b29sdGlwVGV4dFNpemVcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBFbGVtLnN0eWxlLmZvbnRTaXplID0gc2l6ZSArICdweCdcblxuICAgICAgICAgICAgICAgICAgICBlbGVtLmFwcGVuZENoaWxkKHRvb2x0aXBFbGVtKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKiBUb29sdGlwIEVuZCAqL1xuXG4gICAgICAgIG5ld0luZmxhdGVkID0gdHJ1ZTtcblxuICAgICAgICBpZiAocGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgbGV0IHNpYmxpbmdFbGVtZW50ID0gc2libGluZ1ZpZXcgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzaWJsaW5nVmlldy5wcm9wcy5pZCkgOiBudWxsO1xuXG4gICAgICAgICAgICBpZiAoc2libGluZ0VsZW1lbnQgJiYgc2libGluZ0VsZW1lbnQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQgPT0gc2libGluZ0VsZW1lbnQpIHsgLy8gUHJlcGVuZFxuICAgICAgICAgICAgICAgICAgICBpZiAoc3ViRWxlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5wcmVwZW5kKHN1YkVsZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudEVsZW1lbnQucHJlcGVuZChlbGVtKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyBJbnNlcnQgaW4gc3BlY2lmaWVkIHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0U2libGluZ0VsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5uZXh0U2libGluZztcblxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShlbGVtLCBuZXh0U2libGluZ0VsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3ViRWxlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoc3ViRWxlbSwgbmV4dFNpYmxpbmdFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICAgICAgICAgICAgICBpZiAoc3ViRWxlbSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKHN1YkVsZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNldEF0dHJpYnV0ZXModmlldy50eXBlLCBlbGVtLCB2aWV3LnByb3BzLCB0cnVlKTtcblxuICAgICAgICAvKmlmKHZpZXcucHJvcHMuaGFzT3duUHJvcGVydHkoJ2FmdGVyUmVuZGVyJykgJiYgdHlwZW9mIHZpZXcucHJvcHMuYWZ0ZXJSZW5kZXIgPT0gXCJmdW5jdGlvblwiKXtcbiAgICAgICAgICBpZighc3RvcE9ic2VydmVyKXtcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBydW4gb2JzZXJ2ZXIgZm9yIHRoZSBlbGVtZW50XG4gICAgICAgICAgICBvYnNlcnZlcihlbGVtKTtcbiAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdoYXNfcmVuZGVyJywgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9Ki9cbiAgICB9IGVsc2UgaWYgKHJlbmRlclN0eWxlKSB7XG4gICAgICAgIHNldEF0dHJpYnV0ZXModmlldy50eXBlLCBlbGVtLCB2aWV3LnByb3BzLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHZpZXcudHlwZSA9PSAnaG9yaXpvbnRhbFNjcm9sbFZpZXcnKSB7XG4gICAgICAgIGlmICh2aWV3LnByb3BzLmhhc093blByb3BlcnR5KCdzY3JvbGxMZWZ0JykgJiYgIWlzTmFOKHZpZXcucHJvcHMuc2Nyb2xsTGVmdCkpXG4gICAgICAgICAgICBlbGVtLnNjcm9sbExlZnQgPSB2aWV3LnByb3BzLnNjcm9sbExlZnQ7XG4gICAgfVxuXG4gICAgaWYgKHZpZXcudHlwZSA9PSAnbGlzdFZpZXcnKSB7XG4gICAgICAgIGlmICh2aWV3LnByb3BzLmhhc093blByb3BlcnR5KCdzY3JvbGxUb3AnKSAmJiAhaXNOYU4odmlldy5wcm9wcy5zY3JvbGxUb3ApKVxuICAgICAgICAgICAgZWxlbS5zY3JvbGxUb3AgPSB2aWV3LnByb3BzLnNjcm9sbFRvcDtcbiAgICB9XG5cbiAgICBpZiAodmlldy50eXBlID09ICdzY3JvbGxWaWV3Jykge1xuICAgICAgICBpZiAodmlldy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgnc2Nyb2xsTGVmdCcpICYmICFpc05hTih2aWV3LnByb3BzLnNjcm9sbExlZnQpKVxuICAgICAgICAgICAgZWxlbS5zY3JvbGxMZWZ0ID0gdmlldy5wcm9wcy5zY3JvbGxMZWZ0O1xuXG4gICAgICAgIGlmICh2aWV3LnByb3BzLmhhc093blByb3BlcnR5KCdzY3JvbGxUb3AnKSAmJiAhaXNOYU4odmlldy5wcm9wcy5zY3JvbGxUb3ApKVxuICAgICAgICAgICAgZWxlbS5zY3JvbGxUb3AgPSB2aWV3LnByb3BzLnNjcm9sbFRvcDtcbiAgICB9XG5cbiAgICBpZiAodmlldy50eXBlID09ICdjaGVja0JveCcpIHtcbiAgICAgICAgaWYgKHZpZXcucHJvcHMuaGFzT3duUHJvcGVydHkoJ2NoZWNrZWQnKSAmJiB2aWV3LnByb3BzLmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgZWxlbS5jaGVja2VkID0gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbS5jaGVja2VkID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghc3RvcENoaWxkKVxuICAgICAgICBjb21wdXRlQ2hpbGREaW1lbnModmlldyk7XG5cbiAgICBzZXRDb21wdXRlZFN0eWxlcyhlbGVtLCB2aWV3LnByb3BzKTtcbiAgICBzZXRBbmltYXRpb25TdHlsZXMoZWxlbSwgdmlldy5wcm9wcyk7XG5cbiAgICBpZiAoIXN0b3BDaGlsZCkge1xuICAgICAgICBpZiAodmlldy5oYXNPd25Qcm9wZXJ0eSgnY2hpbGRyZW4nKSAmJiB2aWV3LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmlldy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh2aWV3LmNoaWxkcmVuW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICE9IDApXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZsYXRlVmlldyh2aWV3LmNoaWxkcmVuW2ldLCBlbGVtLCB2aWV3LmNoaWxkcmVuW2kgLSAxXSwgc3RvcENoaWxkLCBzdG9wT2JzZXJ2ZXIsIHJlbmRlclN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mbGF0ZVZpZXcodmlldy5jaGlsZHJlbltpXSwgZWxlbSwgdmlldywgc3RvcENoaWxkLCBzdG9wT2JzZXJ2ZXIsIHJlbmRlclN0eWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3SW5mbGF0ZWQpIHtcbiAgICAgICAgaWYgKHZpZXcucHJvcHMuaGFzT3duUHJvcGVydHkoJ2FmdGVyUmVuZGVyJykgJiYgdHlwZW9mIHZpZXcucHJvcHMuYWZ0ZXJSZW5kZXIgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBpZiAoIXN0b3BPYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIC8vIFdlIHNob3VsZCBydW4gb2JzZXJ2ZXIgZm9yIHRoZSBlbGVtZW50XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIoZWxlbSk7XG4gICAgICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2hhc19yZW5kZXInLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNiKGVsZW0sIHZpZXcpO1xuICAgIH1cblxuICAgIGNvbnN0IGVuZCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG4gICAgd2luZG93LmluZmxhdGVUaW1pbmdzW3ZpZXcucHJvcHMuaWRdID0gZW5kIC0gc3RhcnRcbiAgICB3aW5kb3cuaW5mbGF0ZVRpbWluZ3MubGFzdFVwZGF0ZWRBdCA9IGVuZFxuXG4gICAgcmV0dXJuIGVsZW07XG59O1xuXG5sZXQgaGFuZGxlV3JhcENvbnRlbnQgPSAodmlldywgcGFyZW50RWxlbWVudCkgPT4ge1xuICAgIGxldCBuZXdEaW1lbiA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJlbnRFbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbmV3RGltZW4gKz0gcGFyZW50RWxlbWVudC5jaGlsZE5vZGVzW2ldLm9mZnNldFdpZHRoO1xuICAgIH1cbiAgICB2aWV3LnByb3BzLnggPSBuZXdEaW1lbjtcbiAgICByZXR1cm4gdmlldztcbn1cblxubGV0IHJ1bkluVUkgPSBmdW5jdGlvbiAoY21kKSB7XG4gICAgaWYgKCEoY21kIGluc3RhbmNlb2YgQXJyYXkpKVxuICAgICAgICBjbWQgPSBbY21kXTtcblxuICAgIGNtZC5mb3JFYWNoKGZ1bmN0aW9uIChlYWNoKSB7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWFjaC5pZCk7XG5cbiAgICAgICAgaWYgKCFlbGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihcInJ1bkluVUkgKElkIE5VTEwpIENNRDpcIiwgZWFjaCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmlldyA9IHdpbmRvdy5fX1ZJRVdTW2VsZW0uaWRdO1xuICAgICAgICB2aWV3LnByb3BzID0gaGVscGVyLm1lcmdlKHZpZXcucHJvcHMsIGVhY2gpO1xuXG4gICAgICAgIHNldEF0dHJpYnV0ZXModmlldy50eXBlLCBlbGVtLCB2aWV3LnByb3BzLCBmYWxzZSk7XG4gICAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBpbmZsYXRlVmlldyxcbiAgICBydW5JblVJLFxuICAgIGNvbXB1dGVDaGlsZERpbWVuc1xufTtcbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxudmFyIFJlbmRlcmVyID0gcmVxdWlyZShcIi4vUmVuZGVyXCIpO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVRhYldyYXBwZXIgKCkgIHtcbiAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGVsZW0uY2xhc3NOYW1lID0gXCJ0YWJcIjtcblxuICByZXR1cm4gZWxlbTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVUYWJUaXRsZVdyYXBwZXIgKCkge1xuICB2YXIgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsZW0uY2xhc3NOYW1lID0gXCJ0YWItdGl0bGVXcmFwcGVyXCI7XG5cbiAgcmV0dXJuIGVsZW07XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVGFiQ29udGVudFdyYXBwZXIgKCkgIHtcbiAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGVsZW0uY2xhc3NOYW1lID0gXCJ0YWItY29udGVudFdyYXBwZXJcIjtcblxuICByZXR1cm4gZWxlbTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVUYWJUaXRsZUVsICh0aXRsZSkge1xuICB2YXIgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgZWxlbS5pbm5lckhUTUwgPSB0aXRsZTtcbiAgZWxlbS5jbGFzc05hbWUgPSBcInRhYi10aXRsZVwiO1xuXG4gIHJldHVybiBlbGVtO1xufTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVUYWJDb250ZW50RWwgKHZpZXcpICB7XG4gIHZhciBlbGVtID0gUmVuZGVyZXIuaW5mbGF0ZVZpZXcodmlldy52aWV3KTtcbiAgZWxlbS5jbGFzc05hbWUgKz0gXCIgdGFiLWNvbnRlbnRcIjtcblxuICByZXR1cm4gZWxlbTtcbn1cblxudmFyIGNyZWF0ZVRhYnMgPSBmdW5jdGlvbihBbmRyb2lkLCBpZCwgdGFiSnN4LCBqc3gsIGNiKSAge1xuICB2YXIgdmlldyA9IGdlbmVyYXRlVGFiV3JhcHBlcigpO1xuICB2YXIgdGFiVGl0bGVXcmFwcGVyID0gZ2VuZXJhdGVUYWJUaXRsZVdyYXBwZXIoKTtcbiAgdmFyIHRhYkNvbnRlbnRXcmFwcGVyID0gZ2VuZXJhdGVUYWJDb250ZW50V3JhcHBlcigpO1xuICB2YXIgdGFiSXRlbTtcblxuICB2aWV3LmFwcGVuZENoaWxkKHRhYlRpdGxlV3JhcHBlcik7XG4gIHZpZXcuYXBwZW5kQ2hpbGQodGFiQ29udGVudFdyYXBwZXIpO1xuXG4gIGpzeC5mb3JFYWNoKChlYWNoLCBpbmRleCkgPT4ge1xuICAgIHRhYkl0ZW0gPSBnZW5lcmF0ZVRhYlRpdGxlRWwoZWFjaC52YWx1ZSk7XG5cbiAgICBpZiAoaW5kZXggPT0gMClcbiAgICB0YWJJdGVtLmNsYXNzTmFtZSArPSBcIiB0YWItdGl0bGUtYWN0aXZlXCI7XG5cbiAgICB0YWJUaXRsZVdyYXBwZXIuYXBwZW5kQ2hpbGQodGFiSXRlbSk7XG4gIH0pO1xuXG4gIHRhYkpzeC5mb3JFYWNoKChlYWNoLCBpbmRleCkgPT4ge1xuICAgIHRhYkl0ZW0gPSBnZW5lcmF0ZVRhYkNvbnRlbnRFbChlYWNoKTtcblxuICAgIGlmIChpbmRleCA9PSAwKVxuICAgIHRhYkl0ZW0uY2xhc3NOYW1lICs9IFwiIHRhYi1jb250ZW50LWFjdGl2ZVwiO1xuXG4gICAgdGFiQ29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQodGFiSXRlbSk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5hcHBlbmRDaGlsZCh2aWV3KTtcblxuICB3aW5kb3cuY2FsbFVJQ2FsbGJhY2soY2IgLCBcIjBcIik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlVGFiczogY3JlYXRlVGFicyxcbn1cbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxuY29uc3QgQmFzZVZpZXcgPSByZXF1aXJlKCcuL2Jhc2VWaWV3Jyk7XG5jb25zdCBWSUVXID0gbmV3IEJhc2VWaWV3KG51bGwsIG51bGwsIHt9KTtcblxuLy8gT2JqZWN0IG9mIHR5cGVzIG9mIGFuaW1hdGlvbnMgYXZhaWxhYmxlIG9uIHNjcmVlbiBjaGFuZ2VcbmNvbnN0IEFuaW1hdGlvblR5cGVzID0ge1xuICBTTElERToge1xuICAgIG5hbWU6IFwic2xpZGVcIixcbiAgICBoYW5kbGVyOiBzbGlkZUhhbmRsZXJcbiAgfSxcbiAgU0xJREVfVkVSVElDQUw6IHtcbiAgICBuYW1lOiBcInNsaWRlX2Rvd25cIixcbiAgICBoYW5kbGVyOiBzbGlkZURvd25IYW5kbGVyXG4gIH0sXG4gIFNJTVBMRToge1xuICAgIG5hbWU6IFwic2ltcGxlXCIsXG4gICAgaGFuZGxlcjogc2ltcGxlSGFuZGxlclxuICB9XG59XG5cbmNvbnN0IERFRkFVTFRfQU5JTUFUSU9OID0gQW5pbWF0aW9uVHlwZXMuU0xJREU7XG5cbmZ1bmN0aW9uIHNpbXBsZUhhbmRsZXIoZnJvbUlkLCB0b0lkLCBkaXJlY3Rpb24pIHtcbiAgbGV0IGNtZCA9IFZJRVcuY21kKHtcbiAgICBpZDogdG9JZCxcbiAgICB0cmFuc2xhdGlvblo6ICsrd2luZG93LlpJbmRleFxuICB9KTtcbiAgcmV0dXJuIGNtZDtcbn1cblxuZnVuY3Rpb24gc2xpZGVEb3duSGFuZGxlcihmcm9tSWQsIHRvSWQsIGRpcmVjdGlvbikge1xuICBsZXQgY29udGFpbmVyID0gVklFVy5jbWRDb250YWluZXIoKTtcbiAgbGV0IGNtZDtcblxuICBpZiAoZGlyZWN0aW9uID09IDEpIHtcbiAgICBjbWQgPSBWSUVXLmNtZCh7XG4gICAgICBpZDogdG9JZCxcbiAgICAgIHRyYW5zbGF0aW9uWTogd2luZG93Ll9fSEVJR0hULFxuICAgICAgYV9kdXJhdGlvbjogJzMwMCcsXG4gICAgICBhX3RyYW5zbGF0aW9uWTogJzAnLFxuICAgICAgdHJhbnNsYXRpb25aOiArK3dpbmRvdy5aSW5kZXgsXG4gICAgfSk7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLmFkZENtZChjbWQpO1xuXG4gICAgY21kID0gVklFVy5jbWQoe1xuICAgICAgaWQ6IGZyb21JZCxcbiAgICAgIGFfdHJhbnNsYXRpb25ZOiAtMC4yICogd2luZG93Ll9fSEVJR0hULFxuICAgICAgYV9kdXJhdGlvbjogJzMwMCdcbiAgICB9KTtcbiAgICBjb250YWluZXIgPSBjb250YWluZXIuYWRkQ21kKGNtZCk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG5cbiAgd2luZG93LlpJbmRleCsrO1xuICBjbWQgPSBWSUVXLmNtZCh7XG4gICAgaWQ6IGZyb21JZCxcbiAgICB0cmFuc2xhdGlvblk6IDAsXG4gICAgYV90cmFuc2xhdGlvblk6IHdpbmRvdy5fX0hFSUdIVCxcbiAgICBhX2R1cmF0aW9uOiAnMzAwJyxcbiAgICB0cmFuc2xhdGlvblo6ICsrd2luZG93LlpJbmRleFxuICB9KTtcbiAgY29udGFpbmVyID0gY29udGFpbmVyLmFkZENtZChjbWQpO1xuXG4gIGNtZCA9IFZJRVcuY21kKHtcbiAgICBpZDogdG9JZCxcbiAgICB0cmFuc2xhdGlvblo6IHdpbmRvdy5aSW5kZXgtMSxcbiAgICBhX3RyYW5zbGF0aW9uWTogJzAnLFxuICAgIHRyYW5zbGF0aW9uWTogLTAuMiAqIHdpbmRvdy5fX0hFSUdIVCxcbiAgICBhX2R1cmF0aW9uOiAnMzAwJyxcbiAgfSk7XG4gIGNvbnRhaW5lciA9IGNvbnRhaW5lci5hZGRDbWQoY21kKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBzbGlkZUhhbmRsZXIoZnJvbUlkLCB0b0lkLCBkaXJlY3Rpb24pIHtcbiAgbGV0IGNvbnRhaW5lciA9IFZJRVcuY21kQ29udGFpbmVyKCk7XG4gIGxldCBjbWQ7XG4gIGlmIChkaXJlY3Rpb24gPT0gMSkge1xuICAgIGNtZCA9IFZJRVcuY21kKHtcbiAgICAgIGlkOiB0b0lkLFxuICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgdHJhbnNsYXRpb25YOiB3aW5kb3cuX19XSURUSCxcbiAgICAgIGFfZHVyYXRpb246ICczMDAnLFxuICAgICAgYV90cmFuc2xhdGlvblg6ICcwJyxcbiAgICAgIHRyYW5zbGF0aW9uWjogKyt3aW5kb3cuWkluZGV4LFxuICAgIH0pO1xuICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5hZGRDbWQoY21kKTtcbiAgICBjbWQgPSBWSUVXLmNtZCh7XG4gICAgICBpZDogZnJvbUlkLFxuICAgICAgdHJhbnNsYXRpb25YOiAnMCcsXG4gICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICBhX2R1cmF0aW9uOiAnMzAwJyxcbiAgICAgIGFfdHJhbnNsYXRpb25YOiAoLS4yICogd2luZG93Ll9fV0lEVEgpICsgJycsXG4gICAgfSk7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLmFkZENtZChjbWQpO1xuICB9XG5cbiAgaWYgKGRpcmVjdGlvbiA9PSAtMSkge1xuICAgIHdpbmRvdy5aSW5kZXgrKztcbiAgICBjbWQgPSBWSUVXLmNtZCh7XG4gICAgICBpZDogZnJvbUlkLFxuICAgICAgdHJhbnNsYXRpb25YOiAnMCcsXG4gICAgICBhX2R1cmF0aW9uOiAnMzAwJyxcbiAgICAgIGFfdHJhbnNsYXRpb25YOiB3aW5kb3cuX19XSURUSCxcbiAgICAgIHRyYW5zbGF0aW9uWjogKyt3aW5kb3cuWkluZGV4LFxuICAgIH0pO1xuICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5hZGRDbWQoY21kKTtcblxuICAgIGNtZCA9IFZJRVcuY21kKHtcbiAgICAgIGlkOiB0b0lkLFxuICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgdHJhbnNsYXRpb25YOiAoLS4yICogd2luZG93Ll9fV0lEVEgpICsgJycsXG4gICAgICBhX2R1cmF0aW9uOiAnMzAwJyxcbiAgICAgIGFfdHJhbnNsYXRpb25YOiAnMCcsXG4gICAgICB0cmFuc2xhdGlvblo6IHdpbmRvdy5aSW5kZXggLSAxLFxuICAgIH0pO1xuICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5hZGRDbWQoY21kKTtcbiAgfVxuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbi8qXG4gIEdlbmVyaWMgSGFuZGxlciBmb3IgQW5pbWF0aW9uXG4gIEFyZ3VtZW50czpcbiAgICBmcm9tVmlld0lkOiBOdW1iZXIgLSBJZCBvZiB0aGUgdmlldyBjdXJyZW50bHkgdmlzaWJsZSBvbiB0aGUgc2NyZWVuXG4gICAgdG9WaWV3SUQ6IE51bWJlciAtIElkIG9mIHRoZSB2aWV3IHdoaWNoIGhhcyB0byBiZSBicm91Z2h0IG9uIHRoZSBzY3JlZW5cbiAgICBJRDogTnVtYmVyIC0gSWQgb2YgdGhlIHZpZXcgdG8gYmUgYW5pbWF0ZWRcbiAgICBhbmltYXRvcjogT2JqIC0ge25hbWU6c3RyaW5nLCBoYW5kbGVyOmZ1bmN0aW9ufVxuICAgIGRpcmVjdGlvbjogTnVtYmVyIC0gUmVwcmVzZW50cyBvZiB0aGUgZGlyZWN0aW9uIG9mIHRoZSBzY3JlZW5cbiAgICAgIC0xIDogR28gYmFjayB0byB0aGUgYWxyZWFkeSByZW5kZXJlZCBzY3JlZW4gKHJpZ2h0IHRvIGxlZnQpXG4gICAgICAgMSA6IEdvIHRvIHRoZSBuZXcgc2NyZWVuIChsZWZ0IHRvIHJpZ2h0KVxuKi9cbmZ1bmN0aW9uIGdldEFuaW1hdGlvbihmcm9tVmlld0lELCB0b1ZpZXdJZCwgZGlyZWN0aW9uLCBhbmltYXRvcikge1xuICBpZiAoIWFuaW1hdG9yKVxuICAgIGFuaW1hdG9yID0gREVGQVVMVF9BTklNQVRJT047XG5cbiAgaWYgKHR5cGVvZiBhbmltYXRvciA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgYW5pbWF0b3IuaGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKVxuICAgIHJldHVybiBhbmltYXRvci5oYW5kbGVyKGZyb21WaWV3SUQsIHRvVmlld0lkLCBkaXJlY3Rpb24pO1xuICBlbHNlXG4gICAgY29uc29sZS5sb2cobmV3IEVycm9yKFwiQW5pbWF0aW9uIGhhbmRsZXIgaXMgbm90IGEgZnVuY3Rpb24sIHR5cGU6IFwiICtcbiAgICAgIGFuaW1hdG9yKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzLnR5cGVzID0gQW5pbWF0aW9uVHlwZXM7XG5tb2R1bGUuZXhwb3J0cy5nZXRBbmltYXRpb24gPSBnZXRBbmltYXRpb247IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5jb25zdCBtZXJnZSA9ICByZXF1aXJlKFwiLi9oZWxwZXJcIikubWVyZ2U7XG5cblN0cmluZy5wcm90b3R5cGUuYWRkQ21kID0gZnVuY3Rpb24oZGF0YSkge1xuICByZXR1cm4gdGhpcy5jb25jYXQoZGF0YSk7XG59O1xuXG5BcnJheS5wcm90b3R5cGUuYWRkQ21kID0gZnVuY3Rpb24oZGF0YSkge1xuICB0aGlzLnB1c2goZGF0YSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxubGV0IHBhcnNlUGFyYW1zO1xuaWYgKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKVxuICBwYXJzZVBhcmFtcyA9IHJlcXVpcmUoJy4vaGVscGVycy9hbmRyb2lkL3BhcnNlUGFyYW1zJyk7XG5lbHNlIGlmICh3aW5kb3cuX19PUyA9PSBcIldFQlwiKVxuICBwYXJzZVBhcmFtcyA9IHJlcXVpcmUoJy4vaGVscGVycy93ZWIvcGFyc2VQYXJhbXMnKTtcbmVsc2VcbiAgcGFyc2VQYXJhbXMgPSByZXF1aXJlKCcuL2hlbHBlcnMvaW9zL3BhcnNlUGFyYW1zJyk7XG5cbmNsYXNzIEJhc2VWaWV3IHtcbiAgY29uc3RydWN0b3IocHJvcHMsIGNoaWxkcmVuKSB7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzIHx8IHt9O1xuICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbiB8fCBbXTtcblxuICAgIHdpbmRvdy5fX1NFVEZOID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgQW5kcm9pZC5ydW5JblVJKFxuICAgICAgICB0aGlzLnNldChjb25maWcpLFxuICAgICAgICBudWxsXG4gICAgICApXG4gICAgfS5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLmlkU2V0ID0ge307XG5cbiAgICBpZiAodGhpcy5wcm9wcy5pZCkge1xuICAgICAgdGhpcy5pZFNldFtcImlkXCJdID0gdGhpcy5wcm9wcy5pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wcy5pZCA9IHRoaXMuaWQoXCJpZFwiKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5fcmVmKSB7XG4gICAgICB0aGlzLnByb3BzLl9yZWYodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgcmVzb2x2ZUNoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLm1hcChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgcmV0dXJuIGNoaWxkLnJlbmRlcigpO1xuICAgIH0pO1xuICB9XG5cbiAgZmluZFJlY3Vyc2Uob2JqLCBzZWxlY3Rvcikge1xuICAgIHZhciBjaGlsZHJlbiA9IG9iai5jaGlsZHJlbjtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjaGlsZHJlbltpXS5kaXNwbGF5TmFtZSAmJiBjaGlsZHJlbltpXS5kaXNwbGF5TmFtZSA9PSBzZWxlY3Rvcikge1xuICAgICAgICB0aGlzLmZvdW5kQ2hpbGRyZW4ucHVzaChjaGlsZHJlbltpXSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZHJlbltpXS5jaGlsZHJlbiAmJiBjaGlsZHJlbltpXS5jaGlsZHJlbi5sZW5ndGgpXG4gICAgICAgIHRoaXMuZmluZFJlY3Vyc2UoY2hpbGRyZW5baV0sIHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBmaW5kKHNlbGVjdG9yLCBvYmopIHtcbiAgICB0aGlzLmZvdW5kQ2hpbGRyZW4gPSBbXTtcblxuICAgIGlmICghb2JqKVxuICAgICAgdGhpcy5maW5kUmVjdXJzZSh0aGlzLmxheW91dCwgc2VsZWN0b3IpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuZmluZFJlY3Vyc2Uob2JqLCBzZWxlY3Rvcik7XG5cbiAgICByZXR1cm4gdGhpcy5mb3VuZENoaWxkcmVuO1xuICB9XG5cbiAgaWQobmFtZSkge1xuICAgIGlmICghdGhpcy5pZFNldFtuYW1lXSkge1xuICAgICAgd2luZG93Ll9fSUQrKztcbiAgICAgIHRoaXMuaWRTZXRbbmFtZV0gPSB3aW5kb3cuX19JRDtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRoaXMuaWRTZXRbbmFtZV07XG4gIH1cblxuICBzZXRJZHMoYXJyKSB7XG4gICAgaWYgKCF0aGlzLmlkU2V0KVxuICAgICAgdGhpcy5pZFNldCA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghdGhpcy5pZFNldFthcnJbaV1dKSB7XG4gICAgICAgIHdpbmRvdy5fX0lEKys7XG4gICAgICAgIHRoaXMuaWRTZXRbYXJyW2ldXSA9IHdpbmRvdy5fX0lEICsgJyc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU3BlY2lhbENoYXJzKHZhbHVlKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5pbmRleE9mKCcsJykgPiAtMSA/IHZhbHVlLnJlcGxhY2UoL1xcLC9nLCAnXFxcXFxcXFwsJykgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IHZhbHVlLmluZGV4T2YoJzonKSA+IC0xID8gdmFsdWUucmVwbGFjZSgvXFw6L2csICdcXFxcXFxcXDonKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gdmFsdWUuaW5kZXhPZignPScpID4gLTEgPyB2YWx1ZS5yZXBsYWNlKC9cXD0vZywgJ1xcXFxcXFxcPScpIDogdmFsdWU7XG4gICAgdmFsdWUgPSB2YWx1ZS5pbmRleE9mKCc7JykgPiAtMSA/IHZhbHVlLnJlcGxhY2UoL1xcOy9nLCAnXFxcXFxcXFw7JykgOiB2YWx1ZTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGNtZEZvckFuZHJvaWQoY29uZmlnKSB7XG4gICAgdmFyIGNtZCA9IFwic2V0X3ZpZXc9Y3R4LT5maW5kVmlld0J5SWQ6aV9cIiArIGNvbmZpZy5pZCArIFwiO1wiO1xuICAgIHZhciBydW5JblVJO1xuXG4gICAgaWYgKGNvbmZpZy50b2FzdCkge1xuICAgICAgY21kID0gXCJzZXRfVE9BU1Q9YW5kcm9pZC53aWRnZXQuVG9hc3QtPm1ha2VUZXh0OmN0eF9jdHgsY3NfXCIgKyB0aGlzLmhhbmRsZVNwZWNpYWxDaGFycyhcbiAgICAgICAgICBjb25maWcudGV4dCkgKyBcIixpX1wiICsgKGNvbmZpZy5kdXJhdGlvbiA9PSBcInNob3J0XCIgPyAwIDogMSkgK1xuICAgICAgICBcIjtnZXRfVE9BU1QtPnNob3dcIjtcbiAgICB9IGVsc2UgaWYgKGNvbmZpZyAmJiBPYmplY3Qua2V5cyhjb25maWcpLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5pZDtcblxuICAgICAgY29uZmlnLnJvb3QgPSBcInRydWVcIjtcbiAgICAgIHJ1bkluVUkgPSBwYXJzZVBhcmFtcyhcImxpbmVhckxheW91dFwiLCBjb25maWcsIFwiZ2V0XCIpLnJ1bkluVUk7XG5cbiAgICAgIGNtZCArPSBydW5JblVJICsgJzsnO1xuICAgIH1cblxuICAgIHJldHVybiBjbWQ7XG4gIH1cblxuICBjbWRDb250YWluZXIoKSB7XG4gICAgaWYgKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKVxuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY21kRm9yV2ViKGNvbmZpZykge1xuICAgIGlmIChPYmplY3Qua2V5cyhjb25maWcpLmxlbmd0aClcbiAgICAgIHJldHVybiBwYXJzZVBhcmFtcyhcImxpbmVhckxheW91dFwiLCBjb25maWcsIFwic2V0XCIpO1xuICB9XG5cbiAgY21kKGNvbmZpZykge1xuICAgIGlmICh3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIilcbiAgICAgIHJldHVybiB0aGlzLmNtZEZvckFuZHJvaWQoY29uZmlnKTtcbiAgICBlbHNlIGlmICh3aW5kb3cuX19PUyA9PSBcIldFQlwiKVxuICAgICAgcmV0dXJuIHRoaXMuY21kRm9yV2ViKGNvbmZpZyk7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIGFwcGVuZENoaWxkKGlkLCBqc3gsIGluZGV4LCBmbiwgcmVwbGFjZUNoaWxkKSB7XG4gICAgdmFyIHByb3h5Rm5OYW1lO1xuICAgIGlmICghcmVwbGFjZUNoaWxkKSB7XG4gICAgICByZXBsYWNlQ2hpbGQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoZm4pIHtcbiAgICAgIHByb3h5Rm5OYW1lID0gJ0YnICsgd2luZG93Ll9fRk5fSU5ERVg7XG4gICAgICB3aW5kb3cuX19QUk9YWV9GTltwcm94eUZuTmFtZV0gPSBmbjtcbiAgICAgIHdpbmRvdy5fX0ZOX0lOREVYKys7XG4gICAgfVxuXG4gICAganN4ID0gKHdpbmRvdy5fX09TICE9IFwiQU5EUk9JRFwiKSA/IGpzeCA6IEpTT04uc3RyaW5naWZ5KGpzeCk7XG5cbiAgICBpZiAocHJveHlGbk5hbWUpXG4gICAgICBBbmRyb2lkLmFkZFZpZXdUb1BhcmVudChpZCwganN4LCBpbmRleCwgcHJveHlGbk5hbWUsIHJlcGxhY2VDaGlsZCk7XG4gICAgZWxzZVxuICAgICAgQW5kcm9pZC5hZGRWaWV3VG9QYXJlbnQoaWQsIGpzeCwgaW5kZXgsIG51bGwsIHJlcGxhY2VDaGlsZCk7XG4gIH1cblxuICBnZXRWaWV3KGpzeCkge1xuICAgIGlmICh3aW5kb3cuX19PUyAhPSBcIkFORFJPSURcIilcbiAgICAgIHJldHVybiBqc3g7XG5cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoanN4KTtcbiAgfVxuXG4gIHVwZGF0ZVByb3BzKHByb3BzKSB7XG4gICAgdGhpcy5wcm9wcyA9IG1lcmdlKHRoaXMucHJvcHMsIHByb3BzKTtcbiAgICBjb25zdCBvbGRDb250YWluZXJJZCA9IHRoaXMubGF5b3V0LmlkU2V0LmlkO1xuICAgIGNvbnN0IGxheW91dCA9IHRoaXMucmVuZGVyKCk7XG4gICAgZm9yIChsZXQgaT0wOyBpPGxheW91dC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGk9PTApIHRoaXMucmVwbGFjZUNoaWxkKG9sZENvbnRhaW5lcklkLCBsYXlvdXQuY2hpbGRyZW5baV0sIGkpO1xuICAgICAgZWxzZSB0aGlzLmFwcGVuZENoaWxkKG9sZENvbnRhaW5lcklkLCBsYXlvdXQuY2hpbGRyZW5baV0sIGkpO1xuICAgIH1cbiAgICB0aGlzLmxheW91dC5pZFNldC5pZCA9IG9sZENvbnRhaW5lcklkO1xuICB9XG5cbiAgcmVtb3ZlVmlldyhpZCkge1xuICAgIGlmIChfX09TID09IFwiV0VCXCIpXG4gICAgICByZXR1cm4gQW5kcm9pZC5yZW1vdmVWaWV3KGlkKTtcbiAgICByZXR1cm4gXCJzZXRfVklFVz1jdHgtPmZpbmRWaWV3QnlJZDppX1wiICsgaWQgK1xuICAgICAgXCI7c2V0X1BBUkVOVD1nZXRfVklFVy0+Z2V0UGFyZW50O2dldF9QQVJFTlQtPnJlbW92ZVZpZXc6Z2V0X1ZJRVc7XCJcbiAgfVxuXG4gIHJlbW92ZUNoaWxkcmVuKGlkKSB7XG4gICAgaWYgKF9fT1MgPT0gXCJXRUJcIilcbiAgICAgIHJldHVybiBBbmRyb2lkLnJlbW92ZUNoaWxkcmVuKGlkKTtcbiAgICByZXR1cm4gXCJzZXRfVklFVz1jdHgtPmZpbmRWaWV3QnlJZDppX1wiICsgaWQgK1xuICAgICAgXCI7Z2V0X1ZJRVctPnJlbW92ZUFsbFZpZXdzO1wiXG4gIH1cblxuICByZXBsYWNlQ2hpbGQoaWQsIGpzeCwgaW5kZXgsIGZuKSB7XG4gICAgdGhpcy5hcHBlbmRDaGlsZChpZCwganN4LCBpbmRleCwgZm4sIHRydWUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZVZpZXc7IiwiY29uc3QgRHJvcGRvd25Cb3ggPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvRHJvcGRvd25Cb3gnKVxuY29uc3QgRHJvcGRvd25TZWFyY2hCb3ggPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvRHJvcGRvd25TZWFyY2hCb3gnKSBcbmNvbnN0IE5hdkJhciA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9OYXZCYXInKVxuLy8gY29uc3QgRGF0ZVJhbmdlUGlja2VyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0RhdGVSYW5nZVBpY2tlcicpXG5jb25zdCBTd2l0Y2hCdXR0b24gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvU3dpdGNoQnV0dG9uJylcbmNvbnN0IEJ1dHRvbiA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9CdXR0b24nKVxuXG5cblxuLyogQ29tcG9uZW50cyAqL1xuZnVuY3Rpb24gY2xvc2VBbGxBY3RpdmVDb21wb25lbnRzKCkge1xuICAgIGlmKHdpbmRvdy5fX0NPTV9BQ1RJVkUuTkFWQkFSICE9ICcnKVxuICAgICAgICBOYXZCYXIuX2Nsb3NlQnlHVUlEKHdpbmRvdy5fX0NPTV9BQ1RJVkUuTkFWQkFSKVxuICAgIGlmKHdpbmRvdy5fX0NPTV9BQ1RJVkUuRFNCICE9ICcnKVxuICAgICAgICBEcm9wZG93blNlYXJjaEJveC5fY2xvc2VCeUdVSUQod2luZG93Ll9fQ09NX0FDVElWRS5EU0IpXG4gICAgaWYod2luZG93Ll9fQ09NX0FDVElWRS5EQiAhPSAnJylcbiAgICAgICAgRHJvcGRvd25Cb3guX2Nsb3NlQnlHVUlEKHdpbmRvdy5fX0NPTV9BQ1RJVkUuREIpXG59XG5cbmZ1bmN0aW9uIHJlbmRlckNvbXBvbmVudChlbGVtLCBwcm9wcywgZmlyc3RSZW5kZXIpIHtcbiAgICBpZighcHJvcHMuY29tcG9uZW50VHlwZSlcbiAgICAgICAgcmV0dXJuXG5cbiAgICBsZXQgY29tcG9uZW50VHlwZSA9IHByb3BzLmNvbXBvbmVudFR5cGVcblxuICAgIC8qIEF0dGFjaGluZyBHVUlEIG9ubHkgd2hlbiBmaXJzdFJlbmRlciAqL1xuICAgIGlmKGZpcnN0UmVuZGVyICYmIHByb3BzLmd1aWQpXG4gICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdndWlkJywgcHJvcHMuZ3VpZClcblxuICAgIHN3aXRjaChjb21wb25lbnRUeXBlKSB7XG4gICAgICAgIC8vIEJ1dHRvblxuICAgICAgICBjYXNlICdCVCc6XG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkJUKVxuXG4gICAgICAgICAgICBCdXR0b24uX3JlbmRlck1haW4oZWxlbSwgcHJvcHMsIGZpcnN0UmVuZGVyKVxuICAgICAgICBicmVhayAgICBcbiAgICAgICAgLy8gU3dpdGNoIEJ1dHRvblxuICAgICAgICBjYXNlICdTV0lUQ0gnOlxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5TV0lUQ0gpXG5cbiAgICAgICAgICAgIFN3aXRjaEJ1dHRvbi5fcmVuZGVyTWFpbihlbGVtLCBwcm9wcywgZmlyc3RSZW5kZXIpXG4gICAgICAgIGJyZWFrXG4gICAgICAgIC8vIERhdGUgUmFuZ2UgUGlja2VyXG4gICAgICAgIGNhc2UgJ0RSUCc6IFxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EUlApXG5cbiAgICAgICAgICAvLyAgIERhdGVSYW5nZVBpY2tlci5fcmVuZGVyTWFpbihlbGVtLCBwcm9wcywgZmlyc3RSZW5kZXIpXG4gICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ0RSUF9CT0RZJzpcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuRFJQX0JPRFkpXG5cbiAgICAgICAgICAvLyAgIERhdGVSYW5nZVBpY2tlci5fcmVuZGVyQm9keShlbGVtLCBwcm9wcywgZmlyc3RSZW5kZXIpXG4gICAgICAgIGJyZWFrXG4gICAgICAgIC8vIE5hdiBCYXJcbiAgICAgICAgY2FzZSAnTkFWQkFSJzpcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuTkFWQkFSKVxuXG4gICAgICAgICAgICBOYXZCYXIuX3JlbmRlck1haW4oZWxlbSwgcHJvcHMsIGZpcnN0UmVuZGVyKVxuICAgICAgICBicmVha1xuICAgICAgICAvLyBEcm9wZG93biBCb3hcbiAgICAgICAgY2FzZSAnREInOlxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EQilcblxuICAgICAgICAgICAgRHJvcGRvd25Cb3guX3JlbmRlck1haW4oZWxlbSwgcHJvcHMsIGZpcnN0UmVuZGVyKVxuICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdEQl9GVUxMX0JPRFknOiBcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuREJfRlVMTF9CT0RZKVxuXG4gICAgICAgICAgICBEcm9wZG93bkJveC5fcmVuZGVyRnVsbEJvZHkoZWxlbSwgcHJvcHMsIGZpcnN0UmVuZGVyKVxuICAgICAgICBicmVha1xuICAgICAgICAvLyBEcm9wZG93biBTZWFyY2ggQm94XG4gICAgICAgIGNhc2UgJ0RTQic6XG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRTQilcblxuICAgICAgICAgICAgRHJvcGRvd25TZWFyY2hCb3guX3JlbmRlck1haW4oZWxlbSwgcHJvcHMsIGZpcnN0UmVuZGVyKVxuICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdEU0JfRlVMTF9CT0RZJzpcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuRFNCX0ZVTExfQk9EWSlcblxuICAgICAgICAgICAgRHJvcGRvd25TZWFyY2hCb3guX3JlbmRlckZ1bGxCb2R5KGVsZW0sIHByb3BzLCBmaXJzdFJlbmRlcilcbiAgICAgICAgYnJlYWtcbiAgICAgfVxuXG4gICAgIGlmKCF3aW5kb3cuX19DT01fRVZFTlQpIHtcbiAgICAgICAgICB3aW5kb3cuX19DT01fRVZFTlQgPSB0cnVlXG5cbiAgICAgICAgICAvLyBCb2R5IGNsaWNrIGV2ZW50XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldFxuICAgICAgICAgICAgICAgbGV0IGd1aWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdndWlkJylcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgaWYoIWd1aWQpIHsgLy8gV2UgbmVlZCB0byBjbG9zZSBhbnkgYWN0aXZlIGNvbXBvbmVudHNcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VBbGxBY3RpdmVDb21wb25lbnRzKClcbiAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjbGFzc0xpc3QgPSB0YXJnZXQuY2xhc3NMaXN0XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoY2xhc3NMaXN0LmNvbnRhaW5zKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5OQVZCQVJfSVRFTV9XSVRIX1NVQikpIHsgLy8gTkFWQkFSIE1lbnUgSXRlbSB3aXRoIFN1YlJvdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighd2luZG93Ll9fQ09NX0FDVElWRS5OQVZCQVIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOYXZCYXIuX2Nsb3NlQnlHVUlEKHdpbmRvdy5fX0NPTV9BQ1RJVkUuTkFWQkFSKVxuICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUFsbEFjdGl2ZUNvbXBvbmVudHMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmF2QmFyLl9vcGVuQnlHVUlEKGd1aWQsIHRhcmdldClcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihjbGFzc0xpc3QuY29udGFpbnMod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLk5BVkJBUl9JVEVNKSB8fCBjbGFzc0xpc3QuY29udGFpbnMod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLk5BVkJBUl9TVUJfSVRFTSkpIHsgLy8gTkFWQkFSIE1lbnUgSXRlbSAoU3ViIEl0ZW0gYXMgd2VsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cuX19DT01fQUNUSVZFLk5BVkJBUilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5hdkJhci5fY2xvc2VCeUdVSUQod2luZG93Ll9fQ09NX0FDVElWRS5OQVZCQVIpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICBpZihjbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICBOYXZCYXIuX3NlbGVjdFJvdXRlQnlHVUlEKGd1aWQsIHRhcmdldClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGNsYXNzTGlzdC5jb250YWlucyh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuREIpKSB7IC8vIERCIE1haW4gQ2xpY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICBpZihndWlkID09IHdpbmRvdy5fX0NPTV9BQ1RJVkUuREIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERyb3Bkb3duQm94Ll9jbG9zZUJ5R1VJRChndWlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUFsbEFjdGl2ZUNvbXBvbmVudHMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRHJvcGRvd25Cb3guX29wZW5CeUdVSUQoZ3VpZClcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihjbGFzc0xpc3QuY29udGFpbnMod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRCX09QVElPTikpIHsgLy8gREIgT3B0aW9uIFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgIERyb3Bkb3duQm94Ll9jbG9zZUJ5R1VJRChndWlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgIERyb3Bkb3duQm94Ll9zZWxlY3RPcHRpb25CeUdVSUQoZ3VpZCwgdGFyZ2V0KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoY2xhc3NMaXN0LmNvbnRhaW5zKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EU0IpKSB7IC8vIERTQiBNYWluIENsaWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgaWYoZ3VpZCA9PSB3aW5kb3cuX19DT01fQUNUSVZFLkRTQikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRHJvcGRvd25TZWFyY2hCb3guX2Nsb3NlQnlHVUlEKGd1aWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQWxsQWN0aXZlQ29tcG9uZW50cygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEcm9wZG93blNlYXJjaEJveC5fb3BlbkJ5R1VJRChndWlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGNsYXNzTGlzdC5jb250YWlucyh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuRFNCX09QVElPTikpIHsgLy8gRFNCIE9wdGlvbiBTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICBEcm9wZG93blNlYXJjaEJveC5fY2xvc2VCeUdVSUQoZ3VpZClcbiAgICAgICAgICAgICAgICAgICAgICAgICBEcm9wZG93blNlYXJjaEJveC5fc2VsZWN0T3B0aW9uQnlHVUlEKGd1aWQsIHRhcmdldClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICAvLyBLZXlkb3duIGV2ZW50XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldFxuICAgICAgICAgICAgICAgbGV0IGd1aWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdndWlkJylcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgaWYoIWd1aWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgbGV0IGNsYXNzTGlzdCA9IHRhcmdldC5jbGFzc0xpc3RcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgaWYoY2xhc3NMaXN0LmNvbnRhaW5zKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EU0JfU0VBUkNIKSkge1xuICAgICAgICAgICAgICAgICAgICBpZihndWlkID09IHdpbmRvdy5fX0NPTV9BQ1RJVkUuRFNCKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHF1ZXJ5ID0gdGFyZ2V0LnZhbHVlLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgIERyb3Bkb3duU2VhcmNoQm94Ll9maWx0ZXJPcHRpb25zKGd1aWQsIHF1ZXJ5KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgcmVuZGVyQ29tcG9uZW50XG59IiwiZnVuY3Rpb24gQnV0dG9uKCkge31cblxuQnV0dG9uLnByb3RvdHlwZS5fcmVuZGVyTWFpbiA9IGZ1bmN0aW9uKGVsZW0sIHByb3BzLCByZW5kZXJFdmVudCkge1xuICAgIGxldCBndWlkID0gcHJvcHMuZ3VpZCBcbiAgICBpZihlbGVtLmdldEF0dHJpYnV0ZSgnZ3VpZCcpKVxuICAgICAgICBndWlkID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2d1aWQnKVxuXG4gICAgZWxlbS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcicgXG4gICAgZWxlbS5zdHlsZS5wYWRkaW5nID0gMFxuICAgIGVsZW0uaW5uZXJIVE1MID0gJydcblxuICAgIGxldCBsaW5rRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0EnKVxuICAgIGVsZW0uYXBwZW5kQ2hpbGQobGlua0VsZW0pXG5cbiAgICBsaW5rRWxlbS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nXG5cbiAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ2Rpc2FibGVkJykgJiYgcHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5CVF9ESVNBQkxFRClcbiAgICAgICAgbGlua0VsZW0uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJyAgICAgICAgXG4gICAgfVxuXG4gICAgbGV0IGh0bWwgPSAnJ1xuICAgIC8qIEJ1dHRvbiBJbWFnZSAqL1xuICAgIGlmIChwcm9wcy5pbWFnZVVybCkgeyAvLyBJbWFnZSBVUkxcbiAgICAgICAgbGV0IGltYWdlVXJsID0gcHJvcHMuaW1hZ2VVcmxcblxuICAgICAgICBsZXQgdGVtcCA9IGltYWdlVXJsLnNwbGl0KCcuJylcbiAgICAgICAgbGV0IGV4dCA9ICcnXG4gICAgICAgIGlmKHRlbXAgJiYgdGVtcC5sZW5ndGggPiAwKVxuICAgICAgICAgICAgZXh0ID0gdGVtcFt0ZW1wLmxlbmd0aCAtIDFdXG4gICAgICAgIFxuICAgICAgICBsZXQgZXh0cyA9IFtcImpwZWdcIiwgXCJqcGdcIiwgXCJwbmdcIiwgXCJibXBcIiwgXCJzdmdcIiwgXCJnaWZcIl1cbiAgICAgICAgZXh0ID0gZXh0LnRvTG93ZXJDYXNlKClcblxuICAgICAgICBpZighaW1hZ2VVcmwuaW5jbHVkZXMoXCJkYXRhOmltYWdlL3N2Zyt4bWxcIikgJiYgIWV4dHMuaW5jbHVkZXMoZXh0KSkge1xuICAgICAgICAgICAgaW1hZ2VVcmwgKz0gJy5wbmcnXG4gICAgICAgIH1cblxuICAgICAgICBodG1sICs9ICc8aW1nIHNyYz1cIicgKyBpbWFnZVVybCArICdcIi8+J1xuICAgIH0gZWxzZSBpZiAocHJvcHMuaWNvbk5hbWUpIHsgLy8gRm9udCBJY29uXG4gICAgICAgIGh0bWwgKz0gJzxpIGNsYXNzPVwiJyArIHByb3BzLmljb25OYW1lICsgJ1wiPjwvaT4nXG4gICAgfVxuXG4gICAgLyogQnV0dG9uIFRleHQgKi9cbiAgICBpZiAocHJvcHMudGV4dCkgXG4gICAgICAgIGh0bWwgKz0gXCI8c3Bhbj5cIiArIHByb3BzLnRleHQgKyBcIjwvc3Bhbj5cIlxuICAgIGVsc2VcbiAgICAgICAgaHRtbCArPSBcIjxzcGFuPkJ1dHRvbiBUZXh0PC9zcGFuPlwiXG5cbiAgICBsaW5rRWxlbS5pbm5lckhUTUwgPSBodG1sXG5cbiAgICBpZihwcm9wcy5oYXNPd25Qcm9wZXJ0eSgncGFkZGluZycpICYmIHByb3BzLnBhZGRpbmcpIHtcbiAgICAgICAgbGV0IHBhZGRpbmcgPSBwcm9wcy5wYWRkaW5nLnNwbGl0KCcsJykubWFwKGEgPT4gYSAqIDEpXG4gICAgICAgIFxuICAgICAgICBsaW5rRWxlbS5zdHlsZS5wYWRkaW5nID0gcGFkZGluZ1sxXSArICdweCAnICsgcGFkZGluZ1syXSArICdweCAnICsgcGFkZGluZ1szXSArICdweCAnICsgcGFkZGluZ1swXSArICdweCdcbiAgICB9IGVsc2Uge1xuICAgICAgICBsaW5rRWxlbS5zdHlsZS5wYWRkaW5nID0gMFxuICAgIH1cblxuICAgIGlmICghcHJvcHMuc3Ryb2tlKSB7XG4gICAgICAgIGVsZW0uc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCAnICsgd2luZG93Ll9fQ09NX0NPTE9SX0dST1VQLkJUX0JPUkRFUl9DT0xPUlxuICAgIH1cblxuICAgIGlmICghcHJvcHMuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICAgIGVsZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gd2luZG93Ll9fQ09NX0NPTE9SX0dST1VQLkJUX0JHX0NPTE9SXG4gICAgfVxuXG4gICAgaWYgKCFwcm9wcy5jb2xvcikge1xuICAgICAgICBlbGVtLnN0eWxlLmNvbG9yID0gd2luZG93Ll9fQ09NX0NPTE9SX0dST1VQLkJUX0NPTE9SXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBCdXR0b24oKSIsImZ1bmN0aW9uIERyb3Bkb3duQm94KCkge31cblxuRHJvcGRvd25Cb3gucHJvdG90eXBlLl9lcXVhbE9wdGlvbnMgPSBmdW5jdGlvbihhLCBiLCBqKSB7XG4gICAgIGxldCBzdHJpbmdBID0gYS5qb2luKGopLnRyaW0oKVxuICAgICBsZXQgc3RyaW5nQiA9IGIuam9pbihqKS50cmltKClcblxuICAgICBpZiAoc3RyaW5nQSA9PSBzdHJpbmdCKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgIHJldHVybiBmYWxzZVxufVxuXG5Ecm9wZG93bkJveC5wcm90b3R5cGUuX3NlbGVjdE9wdGlvbkJ5R1VJRCA9IGZ1bmN0aW9uKGd1aWQsIG9wdGlvbkVsZW0pIHtcbiAgICAgbGV0IHZhbHVlID0gb3B0aW9uRWxlbS5nZXRBdHRyaWJ1dGUoJ29wdGlvbi12YWx1ZScpXG4gICAgIGxldCB0ZXh0ID0gb3B0aW9uRWxlbS5nZXRBdHRyaWJ1dGUoJ29wdGlvbi10ZXh0JylcblxuICAgICBsZXQgbWFpbk9iamVjdCA9IHRoaXMuX2dldE1haW5PYmplY3QoZ3VpZClcbiAgICAgbGV0IG1haW5PYmplY3RJRCA9IG1haW5PYmplY3QuaWRcblxuICAgICBpZighdmFsdWUgfHwgIXRleHQgfHwgIW1haW5PYmplY3RJRClcbiAgICAgICAgICByZXR1cm5cbiAgICAgXG4gICAgIGxldCB2aWV3ID0gd2luZG93Ll9fVklFV1NbbWFpbk9iamVjdElEXSBcbiAgICAgXG4gICAgIGlmKCF2aWV3IHx8ICF2aWV3LnByb3BzKVxuICAgICAgICAgIHJldHVyblxuXG4gICAgIC8vIFNhdmUgT3B0aW9uIFZhbHVlXG4gICAgIGlmICghd2luZG93Ll9fQ09NX1JFTkRFUkVELkRCW2d1aWRdKVxuICAgICAgICAgIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EQltndWlkXSA9IHt9XG4gICAgIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EQltndWlkXS5vcHRpb25WYWx1ZSA9IHZhbHVlXG5cbiAgICAgLy8gVXBkYXRlIFVJXG4gICAgIGxldCBvcHRpb25zRWxlbSA9IHRoaXMuX2dldE9wdGlvbnNPYmplY3QoZ3VpZClcbiAgICAgaWYgKG9wdGlvbnNFbGVtICYmIG9wdGlvbnNFbGVtLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnNFbGVtLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgIGlmIChvcHRpb25zRWxlbS5jaGlsZE5vZGVzW2ldLmdldEF0dHJpYnV0ZSgnb3B0aW9uLXZhbHVlJykgPT0gdmFsdWUgJiYgb3B0aW9uc0VsZW0uY2hpbGROb2Rlc1tpXS5nZXRBdHRyaWJ1dGUoJ29wdGlvbi10ZXh0JykgPT0gdGV4dCkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zRWxlbS5jaGlsZE5vZGVzW2ldLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbiAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNFbGVtLmNoaWxkTm9kZXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgfVxuXG4gICAgIGxldCBjaGlsZHJlbiA9IG1haW5PYmplY3QuY2hpbGROb2Rlc1xuICAgICBsZXQgYXJ0aWNsZSA9IG51bGxcblxuICAgICBpZihjaGlsZHJlbi5sZW5ndGgpe1xuICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICBpZihjaGlsZHJlbltpXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09ICdhcnRpY2xlJyl7XG4gICAgICAgICAgICAgICAgICAgIGFydGljbGUgPSBjaGlsZHJlbltpXVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgfVxuXG4gICAgIG1haW5PYmplY3Quc3R5bGUuY29sb3IgPSB3aW5kb3cuX19DT01fQ09MT1JfR1JPVVAuQUNUSVZFX0NPTE9SXG4gICAgIGlmIChhcnRpY2xlKVxuICAgICAgICAgIGFydGljbGUuaW5uZXJUZXh0ID0gdGV4dFxuXG4gICAgIC8vIEV2ZW50IFRyaWdnZXJcbiAgICAgaWYgKHZpZXcucHJvcHMub25TZWxlY3QgJiYgdHlwZW9mIHZpZXcucHJvcHMub25TZWxlY3QgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgdmlldy5wcm9wcy5vblNlbGVjdCh2YWx1ZSlcbiAgICAgfVxufVxuXG5Ecm9wZG93bkJveC5wcm90b3R5cGUuX2lzVmFsaWRPViA9IGZ1bmN0aW9uKG9wdGlvblZhbHVlLCBvcHRpb25zKSB7XG4gICAgIGxldCB0ZXh0ID0gXCJcIlxuICAgICBcbiAgICAgaWYob3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBmb3IobGV0IGkgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgICAgaWYob3B0aW9uc1tpXS52YWx1ZSA9PSBvcHRpb25WYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gb3B0aW9uc1tpXS50ZXh0XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICB9IFxuXG4gICAgIHJldHVybiB0ZXh0XG59XG5cbkRyb3Bkb3duQm94LnByb3RvdHlwZS5fZ2V0TWFpbk9iamVjdCA9IGZ1bmN0aW9uKGd1aWQpIHtcbiAgICAgbGV0IHF1ZXJ5ID0gJy4nICsgd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRCICsgJ1tndWlkPVwiJyArIGd1aWQgKydcIl0nXG4gICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IocXVlcnkpXG59XG5cbkRyb3Bkb3duQm94LnByb3RvdHlwZS5fZ2V0RnVsbEJvZHlPYmplY3QgPSBmdW5jdGlvbihndWlkKSB7XG4gICAgIGxldCBxdWVyeSA9ICcuJyArIHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EQl9GVUxMX0JPRFkgKyAnW2d1aWQ9XCInICsgZ3VpZCArJ1wiXSdcbiAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihxdWVyeSlcbn1cblxuRHJvcGRvd25Cb3gucHJvdG90eXBlLl9nZXRCb2R5T2JqZWN0ID0gZnVuY3Rpb24oZ3VpZCkge1xuICAgICBsZXQgcXVlcnkgPSAnLicgKyB3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuREJfQk9EWSArICdbZ3VpZD1cIicgKyBndWlkICsnXCJdJ1xuICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKHF1ZXJ5KVxufVxuXG5Ecm9wZG93bkJveC5wcm90b3R5cGUuX2dldE9wdGlvbnNPYmplY3QgPSBmdW5jdGlvbihndWlkKSB7XG4gICAgIGxldCBxdWVyeSA9ICcuJyArIHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EQl9PUFRJT05TICsgJ1tndWlkPVwiJyArIGd1aWQgKydcIl0nXG4gICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IocXVlcnkpXG59XG5cbkRyb3Bkb3duQm94LnByb3RvdHlwZS5fcmVuZGVyT3B0aW9uID0gZnVuY3Rpb24ocGFyZW50RWxlbSwgcHJvcHMsIGd1aWQsIG9wdGlvbiwgb3B0aW9uVmFsdWUsIHJlbmRlckV2ZW50KSB7XG4gICAgIGxldCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgICBlbGVtLmNsYXNzTmFtZSA9IHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EQl9PUFRJT05cbiAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ29wdGlvbi12YWx1ZScsIG9wdGlvbi52YWx1ZSlcbiAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ29wdGlvbi10ZXh0Jywgb3B0aW9uLnRleHQpXG5cbiAgICAgbGV0IGhlaWdodCA9IDUwXG4gICAgIGlmKHByb3BzLm9wdGlvbkhlaWdodCAmJiAhaXNOYU4ocHJvcHMub3B0aW9uSGVpZ2h0KSkge1xuICAgICAgICAgIGhlaWdodCA9IHBhcnNlRmxvYXQocHJvcHMub3B0aW9uSGVpZ2h0KVxuICAgICB9XG5cbiAgICAgZWxlbS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnXG4gICAgIFxuICAgICBpZihwcm9wcy5mb250U2l6ZSkgXG4gICAgICAgICAgZWxlbS5zdHlsZS5mb250U2l6ZSA9IHByb3BzLmZvbnRTaXplICsgJ3B4J1xuICAgICBpZihwcm9wcy5mb250RmFtaWx5KVxuICAgICAgICAgIGVsZW0uc3R5bGUuZm9udEZhbWlseSA9IHByb3BzLmZvbnRGYW1pbHlcbiAgICAgaWYocHJvcHMub3B0aW9uUGFkZGluZykgeyBcbiAgICAgICAgICBsZXQgcGFkZGluZyA9IHByb3BzLm9wdGlvblBhZGRpbmcuc3BsaXQoJywnKS5tYXAoYSA9PiBhICogMSk7XG4gIFxuICAgICAgICAgIGVsZW0uc3R5bGUucGFkZGluZyA9IHBhZGRpbmdbMV0gKyAncHggJyArIHBhZGRpbmdbMl0gKyAncHggJyArIHBhZGRpbmdbM10gKyAncHggJyArIHBhZGRpbmdbMF0gKyAncHgnXG4gICAgIH1cblxuICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnZ3VpZCcsIGd1aWQpIFxuXG4gICAgIGlmKG9wdGlvblZhbHVlICYmIG9wdGlvblZhbHVlID09IG9wdGlvbi52YWx1ZSkge1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxuICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuICAgICB9XG5cbiAgICAgbGV0IGFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdBUlRJQ0xFJylcbiAgICAgYXJ0aWNsZS5pbm5lclRleHQgPSBvcHRpb24udGV4dFxuICAgICBcbiAgICAgZWxlbS5hcHBlbmRDaGlsZChhcnRpY2xlKVxuICAgICBwYXJlbnRFbGVtLmFwcGVuZENoaWxkKGVsZW0pXG59XG5cbkRyb3Bkb3duQm94LnByb3RvdHlwZS5fb3BlbkJ5R1VJRCA9IGZ1bmN0aW9uKGd1aWQpIHtcbiAgICAgbGV0IG9iamVjdCA9IHRoaXMuX2dldE1haW5PYmplY3QoZ3VpZClcbiAgICAgbGV0IGJvZHlFbGVtID0gdGhpcy5fZ2V0Qm9keU9iamVjdChndWlkKVxuICAgICBcbiAgICAgaWYoIW9iamVjdCB8fCAhYm9keUVsZW0pXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgb2JqZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbiAgICAgYm9keUVsZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgd2luZG93Ll9fQ09NX0FDVElWRS5EQiA9IGd1aWRcbn1cblxuRHJvcGRvd25Cb3gucHJvdG90eXBlLl9jbG9zZUJ5R1VJRCA9IGZ1bmN0aW9uKGd1aWQpIHtcbiAgICAgbGV0IG9iamVjdCA9IHRoaXMuX2dldE1haW5PYmplY3QoZ3VpZClcbiAgICAgbGV0IGJvZHlFbGVtID0gdGhpcy5fZ2V0Qm9keU9iamVjdChndWlkKVxuICAgICBcbiAgICAgaWYoIW9iamVjdCB8fCAhYm9keUVsZW0pXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgb2JqZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcbiAgICAgYm9keUVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICB3aW5kb3cuX19DT01fQUNUSVZFLkRCID0gJydcbn1cblxuRHJvcGRvd25Cb3gucHJvdG90eXBlLl9yZW5kZXJNYWluID0gZnVuY3Rpb24oZWxlbSwgcHJvcHMsIHJlbmRlckV2ZW50KSB7XG4gICAgIC8vIEdVSURcbiAgICAgbGV0IGd1aWQgPSBwcm9wcy5ndWlkXG4gICAgIGlmKGVsZW0uZ2V0QXR0cmlidXRlKCdndWlkJykpXG4gICAgICAgICAgZ3VpZCA9IGVsZW0uZ2V0QXR0cmlidXRlKCdndWlkJylcblxuICAgICBsZXQgY2hpbGRyZW4gPSBlbGVtLmNoaWxkTm9kZXNcbiAgICAgbGV0IGFydGljbGUgPSBudWxsXG5cbiAgICAgaWYoY2hpbGRyZW4ubGVuZ3RoKXtcbiAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgaWYoY2hpbGRyZW5baV0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PSAnYXJ0aWNsZScpe1xuICAgICAgICAgICAgICAgICAgICBhcnRpY2xlID0gY2hpbGRyZW5baV1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgIH1cblxuICAgICBpZighcHJvcHMuc3Ryb2tlKVxuICAgICAgICAgIGVsZW0uc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgXCIgKyB3aW5kb3cuX19DT01fQ09MT1JfR1JPVVAuQk9SREVSX0NPTE9SXG4gICAgIFxuICAgICBpZihwcm9wcy5vcHRpb25zKSB7XG4gICAgICAgICAgbGV0IG9wdGlvbnMgPSBKU09OLnBhcnNlKHByb3BzLm9wdGlvbnMpXG4gICAgICAgICAgbGV0IG9wdGlvblZhbHVlID0gbnVsbFxuXG4gICAgICAgICAgaWYgKHByb3BzLm9wdGlvblZhbHVlKVxuICAgICAgICAgICAgICAgb3B0aW9uVmFsdWUgPSBwcm9wcy5vcHRpb25WYWx1ZVxuXG4gICAgICAgICAgLy8gUmVhZCBvcHRpb24gdmFsdWVcbiAgICAgICAgICBpZiAod2luZG93Ll9fQ09NX1JFTkRFUkVELkRCW2d1aWRdICYmIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EQltndWlkXS5vcHRpb25WYWx1ZSlcbiAgICAgICAgICAgICAgIG9wdGlvblZhbHVlID0gd2luZG93Ll9fQ09NX1JFTkRFUkVELkRCW2d1aWRdLm9wdGlvblZhbHVlICsgXCJcIlxuXG4gICAgICAgICAgaWYob3B0aW9uVmFsdWUpIHtcbiAgICAgICAgICAgICAgIGxldCBvcHRpb25UZXh0ID0gdGhpcy5faXNWYWxpZE9WKG9wdGlvblZhbHVlLCBvcHRpb25zKVxuXG4gICAgICAgICAgICAgICBpZiAob3B0aW9uVGV4dCAhPSBcIlwiKSB7IFxuICAgICAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLmNvbG9yID0gd2luZG93Ll9fQ09NX0NPTE9SX0dST1VQLkFDVElWRV9DT0xPUlxuXG4gICAgICAgICAgICAgICAgICAgIGlmKGFydGljbGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5pbm5lclRleHQgPSBvcHRpb25UZXh0XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICB9XG4gICAgIC8qIERlZmF1bHQgU3R5bGVzIEVuZCAqL1xufVxuXG5Ecm9wZG93bkJveC5wcm90b3R5cGUuX3JlbmRlckZ1bGxCb2R5ID0gZnVuY3Rpb24oZWxlbSwgcHJvcHMsIHJlbmRlckV2ZW50KSB7XG4gICAgIC8vIEdVSURcbiAgICAgbGV0IGd1aWQgPSBwcm9wcy5ndWlkXG4gICAgIGlmKGVsZW0uZ2V0QXR0cmlidXRlKCdndWlkJykpXG4gICAgICAgICAgZ3VpZCA9IGVsZW0uZ2V0QXR0cmlidXRlKCdndWlkJylcblxuICAgICBsZXQgYm9keUVsZW0gPSBudWxsXG4gICAgICAgICAgbGV0IG9wdGlvbnNFbGVtZW50ID0gbnVsbFxuXG4gICAgIGlmIChyZW5kZXJFdmVudCkge1xuICAgICAgICAgIGJvZHlFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICBib2R5RWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EQl9CT0RZKVxuICAgICAgICAgIGJvZHlFbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICBib2R5RWxlbS5zZXRBdHRyaWJ1dGUoJ2d1aWQnLCBndWlkKVxuICAgICAgICAgIFxuICAgICAgICAgICAgICAgb3B0aW9uc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgb3B0aW9uc0VsZW1lbnQuY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuREJfT1BUSU9OUylcbiAgICAgICAgICAgICAgIG9wdGlvbnNFbGVtZW50LnNldEF0dHJpYnV0ZSgnZ3VpZCcsIGd1aWQpXG5cbiAgICAgICAgICAgICAgIGJvZHlFbGVtLmFwcGVuZENoaWxkKG9wdGlvbnNFbGVtZW50KVxuXG4gICAgICAgICAgZWxlbS5hcHBlbmRDaGlsZChib2R5RWxlbSlcbiAgICAgfSBlbHNlIHtcbiAgICAgICAgICBib2R5RWxlbSA9IHRoaXMuX2dldEJvZHlPYmplY3QoZ3VpZClcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBvcHRpb25zRWxlbWVudCA9IHRoaXMuX2dldE9wdGlvbnNPYmplY3QoZ3VpZClcbiAgICAgfVxuXG4gICAgIGlmICghYm9keUVsZW0gfHwgIW9wdGlvbnNFbGVtZW50KVxuICAgICAgICAgIHJldHVyblxuXG4gICAgIC8vIE9wdGlvbnNcbiAgICAgdGhpcy5fcmVuZGVyT3B0aW9ucyhvcHRpb25zRWxlbWVudCwgcHJvcHMsIGd1aWQsIHJlbmRlckV2ZW50KVxufVxuXG5Ecm9wZG93bkJveC5wcm90b3R5cGUuX3JlbmRlck9wdGlvbnMgPSBmdW5jdGlvbihlbGVtLCBwcm9wcywgZ3VpZCwgcmVuZGVyRXZlbnQpIHtcbiAgICAgbGV0IHByZXZpb3VzT3B0aW9ucyA9IFtdXG4gICAgIGxldCBvcHRpb25zID0gW11cblxuICAgICAvLyBDdXJyZW50IE9wdGlvbnNcbiAgICAgaWYocHJvcHMub3B0aW9ucykge1xuICAgICAgICAgIG9wdGlvbnMgPSBKU09OLnBhcnNlKHByb3BzLm9wdGlvbnMpXG4gICAgIH1cblxuICAgICAvLyBQcmV2aW91cyBPcHRpb25zXG4gICAgIGlmICh3aW5kb3cuX19DT01fUkVOREVSRUQuREJbZ3VpZF0gJiYgd2luZG93Ll9fQ09NX1JFTkRFUkVELkRCW2d1aWRdLm9wdGlvbnMpIHtcbiAgICAgICAgICBwcmV2aW91c09wdGlvbnMgPSBKU09OLnBhcnNlKHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EQltndWlkXS5vcHRpb25zKVxuICAgICB9XG5cbiAgICAgLy8gUmVhZCBvcHRpb24gdmFsdWVcbiAgICAgbGV0IG9wdGlvblZhbHVlID0gbnVsbFxuICAgICBpZiAocHJvcHMub3B0aW9uVmFsdWUpXG4gICAgICAgICAgb3B0aW9uVmFsdWUgPSBwcm9wcy5vcHRpb25WYWx1ZVxuICAgICBpZiAod2luZG93Ll9fQ09NX1JFTkRFUkVELkRCW2d1aWRdICYmIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EQltndWlkXS5vcHRpb25WYWx1ZSlcbiAgICAgICAgICBvcHRpb25WYWx1ZSA9IHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EQltndWlkXS5vcHRpb25WYWx1ZSArIFwiXCJcblxuICAgICAvLyBTYXZlIE9wdGlvbnNcbiAgICAgaWYgKCF3aW5kb3cuX19DT01fUkVOREVSRUQuREJbZ3VpZF0pXG4gICAgICAgICAgd2luZG93Ll9fQ09NX1JFTkRFUkVELkRCW2d1aWRdID0ge31cbiAgICAgd2luZG93Ll9fQ09NX1JFTkRFUkVELkRCW2d1aWRdLm9wdGlvbnMgPSBwcm9wcy5vcHRpb25zXG4gICAgIFxuICAgICAvLyBTdHlsZVxuICAgICBsZXQgaGVpZ2h0ID0gNTBcbiAgICAgaWYocHJvcHMub3B0aW9uSGVpZ2h0ICYmICFpc05hTihwcm9wcy5vcHRpb25IZWlnaHQpKSB7XG4gICAgICAgICAgaGVpZ2h0ID0gcGFyc2VGbG9hdChwcm9wcy5vcHRpb25IZWlnaHQpXG4gICAgIH1cblxuICAgICBpZihvcHRpb25zLmxlbmd0aCA+IDUpIHtcbiAgICAgICAgICBlbGVtLnN0eWxlLm1heEhlaWdodCA9IChoZWlnaHQgKiA1KSArICdweCdcbiAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtLnN0eWxlLm1heEhlaWdodCA9ICdhdXRvJ1xuICAgICB9XG4gICAgIFxuICAgICBpZiAoIXRoaXMuX2VxdWFsT3B0aW9ucyhwcmV2aW91c09wdGlvbnMsIG9wdGlvbnMsIGd1aWQpKSB7IC8vIE9wdGlvbnMgQ2hhbmdlZCAtIE5lZWQgdG8gUmUtcmVuZGVyXG4gICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgIFxuICAgICAgICAgIGlmKG9wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gb3B0aW9uc1tpXVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyT3B0aW9uKGVsZW0sIHByb3BzLCBndWlkLCBvcHRpb24sIG9wdGlvblZhbHVlLCByZW5kZXJFdmVudClcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgRHJvcGRvd25Cb3goKSIsImZ1bmN0aW9uIERyb3Bkb3duU2VhcmNoQm94KCkge31cblxuRHJvcGRvd25TZWFyY2hCb3gucHJvdG90eXBlLl9lcXVhbE9wdGlvbnMgPSBmdW5jdGlvbihhLCBiLCBqKSB7XG4gICAgIGxldCBzdHJpbmdBID0gYS5qb2luKGopLnRyaW0oKVxuICAgICBsZXQgc3RyaW5nQiA9IGIuam9pbihqKS50cmltKClcblxuICAgICBpZiAoc3RyaW5nQSA9PSBzdHJpbmdCKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgIHJldHVybiBmYWxzZVxufVxuXG5Ecm9wZG93blNlYXJjaEJveC5wcm90b3R5cGUuX3NlbGVjdE9wdGlvbkJ5R1VJRCA9IGZ1bmN0aW9uKGd1aWQsIG9wdGlvbkVsZW0pIHtcbiAgICAgbGV0IHZhbHVlID0gb3B0aW9uRWxlbS5nZXRBdHRyaWJ1dGUoJ29wdGlvbi12YWx1ZScpXG4gICAgIGxldCB0ZXh0ID0gb3B0aW9uRWxlbS5nZXRBdHRyaWJ1dGUoJ29wdGlvbi10ZXh0JylcblxuICAgICBsZXQgbWFpbk9iamVjdCA9IHRoaXMuX2dldE1haW5PYmplY3QoZ3VpZClcbiAgICAgbGV0IG1haW5PYmplY3RJRCA9IG1haW5PYmplY3QuaWRcblxuICAgICBpZighdmFsdWUgfHwgIXRleHQgfHwgIW1haW5PYmplY3RJRClcbiAgICAgICAgICByZXR1cm5cbiAgICAgXG4gICAgIGxldCB2aWV3ID0gd2luZG93Ll9fVklFV1NbbWFpbk9iamVjdElEXSBcbiAgICAgXG4gICAgIGlmKCF2aWV3IHx8ICF2aWV3LnByb3BzKVxuICAgICAgICAgIHJldHVyblxuXG4gICAgIC8vIFNhdmUgT3B0aW9uIFZhbHVlXG4gICAgIGlmICghd2luZG93Ll9fQ09NX1JFTkRFUkVELkRTQltndWlkXSlcbiAgICAgICAgICB3aW5kb3cuX19DT01fUkVOREVSRUQuRFNCW2d1aWRdID0ge31cbiAgICAgd2luZG93Ll9fQ09NX1JFTkRFUkVELkRTQltndWlkXS5vcHRpb25WYWx1ZSA9IHZhbHVlXG5cbiAgICAgLy8gVXBkYXRlIFVJXG4gICAgIGxldCBvcHRpb25zRWxlbSA9IHRoaXMuX2dldE9wdGlvbnNPYmplY3QoZ3VpZClcbiAgICAgaWYgKG9wdGlvbnNFbGVtICYmIG9wdGlvbnNFbGVtLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnNFbGVtLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgIGlmIChvcHRpb25zRWxlbS5jaGlsZE5vZGVzW2ldLmdldEF0dHJpYnV0ZSgnb3B0aW9uLXZhbHVlJykgPT0gdmFsdWUgJiYgb3B0aW9uc0VsZW0uY2hpbGROb2Rlc1tpXS5nZXRBdHRyaWJ1dGUoJ29wdGlvbi10ZXh0JykgPT0gdGV4dCkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zRWxlbS5jaGlsZE5vZGVzW2ldLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbiAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNFbGVtLmNoaWxkTm9kZXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgfVxuXG4gICAgIGxldCBjaGlsZHJlbiA9IG1haW5PYmplY3QuY2hpbGROb2Rlc1xuICAgICBsZXQgYXJ0aWNsZSA9IG51bGxcblxuICAgICBpZihjaGlsZHJlbi5sZW5ndGgpe1xuICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICBpZihjaGlsZHJlbltpXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09ICdhcnRpY2xlJyl7XG4gICAgICAgICAgICAgICAgICAgIGFydGljbGUgPSBjaGlsZHJlbltpXVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgfVxuXG4gICAgIG1haW5PYmplY3Quc3R5bGUuY29sb3IgPSB3aW5kb3cuX19DT01fQ09MT1JfR1JPVVAuQUNUSVZFX0NPTE9SXG4gICAgIGlmIChhcnRpY2xlKVxuICAgICAgICAgIGFydGljbGUuaW5uZXJUZXh0ID0gdGV4dFxuXG4gICAgIC8vIEV2ZW50IFRyaWdnZXJcbiAgICAgaWYgKHZpZXcucHJvcHMub25TZWxlY3QgJiYgdHlwZW9mIHZpZXcucHJvcHMub25TZWxlY3QgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgdmlldy5wcm9wcy5vblNlbGVjdCh2YWx1ZSlcbiAgICAgfVxufVxuXG5Ecm9wZG93blNlYXJjaEJveC5wcm90b3R5cGUuX2lzVmFsaWRPViA9IGZ1bmN0aW9uKG9wdGlvblZhbHVlLCBvcHRpb25zKSB7XG4gICAgIGxldCBvcHRpb25UZXh0ID0gXCJcIlxuICAgICBcbiAgICAgaWYob3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBmb3IobGV0IGkgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgICAgaWYob3B0aW9uc1tpXS52YWx1ZSA9PSBvcHRpb25WYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25UZXh0ID0gb3B0aW9uc1tpXS50ZXh0XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICB9IFxuXG4gICAgIHJldHVybiBvcHRpb25UZXh0XG59XG5cbkRyb3Bkb3duU2VhcmNoQm94LnByb3RvdHlwZS5fZ2V0TWFpbk9iamVjdCA9IGZ1bmN0aW9uKGd1aWQpIHtcbiAgICAgbGV0IHF1ZXJ5ID0gJy4nICsgd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRTQiArICdbZ3VpZD1cIicgKyBndWlkICsnXCJdJ1xuICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKHF1ZXJ5KVxufVxuXG5Ecm9wZG93blNlYXJjaEJveC5wcm90b3R5cGUuX2dldEZ1bGxCb2R5T2JqZWN0ID0gZnVuY3Rpb24oZ3VpZCkge1xuICAgICBsZXQgcXVlcnkgPSAnLicgKyB3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuRFNCX0ZVTExfQk9EWSArICdbZ3VpZD1cIicgKyBndWlkICsnXCJdJ1xuICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKHF1ZXJ5KVxufVxuXG5Ecm9wZG93blNlYXJjaEJveC5wcm90b3R5cGUuX2dldEJvZHlPYmplY3QgPSBmdW5jdGlvbihndWlkKSB7XG4gICAgIGxldCBxdWVyeSA9ICcuJyArIHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EU0JfQk9EWSArICdbZ3VpZD1cIicgKyBndWlkICsnXCJdJ1xuICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKHF1ZXJ5KVxufVxuXG5Ecm9wZG93blNlYXJjaEJveC5wcm90b3R5cGUuX2dldFNlYXJjaFdyYXBPYmplY3QgPSBmdW5jdGlvbihndWlkKSB7XG4gICAgIGxldCBxdWVyeSA9ICcuJyArIHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EU0JfU0VBUkNIX1dSQVAgKyAnW2d1aWQ9XCInICsgZ3VpZCArJ1wiXSdcbiAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihxdWVyeSlcbn1cblxuRHJvcGRvd25TZWFyY2hCb3gucHJvdG90eXBlLl9nZXRTZWFyY2hPYmplY3QgPSBmdW5jdGlvbihndWlkKSB7XG4gICAgIGxldCBxdWVyeSA9ICcuJyArIHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EU0JfU0VBUkNIICsgJ1tndWlkPVwiJyArIGd1aWQgKydcIl0nXG4gICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IocXVlcnkpXG59XG5cbkRyb3Bkb3duU2VhcmNoQm94LnByb3RvdHlwZS5fZ2V0T3B0aW9uc09iamVjdCA9IGZ1bmN0aW9uKGd1aWQpIHtcbiAgICAgbGV0IHF1ZXJ5ID0gJy4nICsgd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRTQl9PUFRJT05TICsgJ1tndWlkPVwiJyArIGd1aWQgKydcIl0nXG4gICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IocXVlcnkpXG59XG5cbkRyb3Bkb3duU2VhcmNoQm94LnByb3RvdHlwZS5fZmlsdGVyT3B0aW9ucyA9IGZ1bmN0aW9uKGd1aWQsIHF1ZXJ5KSB7XG4gICAgIGxldCBvcHRpb25zRWxlbSA9IHRoaXMuX2dldE9wdGlvbnNPYmplY3QoZ3VpZClcblxuICAgICBpZiAoIW9wdGlvbnNFbGVtKVxuICAgICAgICAgIHJldHVyblxuXG4gICAgIHF1ZXJ5ID0gcXVlcnkudG9Mb3dlckNhc2UoKVxuXG4gICAgIGlmIChvcHRpb25zRWxlbS5jaGlsZE5vZGVzKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zRWxlbS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICBsZXQgb3B0aW9uRWxlbSA9IG9wdGlvbnNFbGVtLmNoaWxkTm9kZXNbaV1cbiAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gb3B0aW9uRWxlbS5nZXRBdHRyaWJ1dGUoJ29wdGlvbi10ZXh0JylcblxuICAgICAgICAgICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA9IHRleHQudG9Mb3dlckNhc2UoKVxuXG4gICAgICAgICAgICAgICAgICAgIGlmKHRleHQuaW5kZXhPZihxdWVyeSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uRWxlbS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uRWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgIH1cbn1cblxuRHJvcGRvd25TZWFyY2hCb3gucHJvdG90eXBlLl9yZW5kZXJPcHRpb24gPSBmdW5jdGlvbihwYXJlbnRFbGVtLCBwcm9wcywgZ3VpZCwgb3B0aW9uLCBvcHRpb25WYWx1ZSwgcmVuZGVyRXZlbnQpIHtcbiAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgIGVsZW0uY2xhc3NOYW1lID0gd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRTQl9PUFRJT05cbiAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ29wdGlvbi12YWx1ZScsIG9wdGlvbi52YWx1ZSlcbiAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ29wdGlvbi10ZXh0Jywgb3B0aW9uLnRleHQpXG5cbiAgICAgbGV0IGhlaWdodCA9IDUwXG4gICAgIGlmKHByb3BzLm9wdGlvbkhlaWdodCAmJiAhaXNOYU4ocHJvcHMub3B0aW9uSGVpZ2h0KSkge1xuICAgICAgICAgIGhlaWdodCA9IHBhcnNlRmxvYXQocHJvcHMub3B0aW9uSGVpZ2h0KVxuICAgICB9XG5cbiAgICAgZWxlbS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnXG4gICAgIFxuICAgICBpZihwcm9wcy5mb250U2l6ZSkgXG4gICAgICAgICAgZWxlbS5zdHlsZS5mb250U2l6ZSA9IHByb3BzLmZvbnRTaXplICsgJ3B4J1xuICAgICBpZihwcm9wcy5mb250RmFtaWx5KVxuICAgICAgICAgIGVsZW0uc3R5bGUuZm9udEZhbWlseSA9IHByb3BzLmZvbnRGYW1pbHlcbiAgICAgaWYocHJvcHMub3B0aW9uUGFkZGluZykgeyBcbiAgICAgICAgICBsZXQgcGFkZGluZyA9IHByb3BzLm9wdGlvblBhZGRpbmcuc3BsaXQoJywnKS5tYXAoYSA9PiBhICogMSk7XG4gIFxuICAgICAgICAgIGVsZW0uc3R5bGUucGFkZGluZyA9IHBhZGRpbmdbMV0gKyAncHggJyArIHBhZGRpbmdbMl0gKyAncHggJyArIHBhZGRpbmdbM10gKyAncHggJyArIHBhZGRpbmdbMF0gKyAncHgnXG4gICAgIH1cblxuICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnZ3VpZCcsIGd1aWQpIFxuXG4gICAgIGlmKG9wdGlvblZhbHVlICYmIG9wdGlvblZhbHVlID09IG9wdGlvbi52YWx1ZSkge1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxuICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuICAgICB9XG5cbiAgICAgbGV0IGFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdBUlRJQ0xFJylcbiAgICAgYXJ0aWNsZS5pbm5lclRleHQgPSBvcHRpb24udGV4dFxuICAgICBcbiAgICAgZWxlbS5hcHBlbmRDaGlsZChhcnRpY2xlKVxuICAgICBwYXJlbnRFbGVtLmFwcGVuZENoaWxkKGVsZW0pXG59XG5cbkRyb3Bkb3duU2VhcmNoQm94LnByb3RvdHlwZS5fb3BlbkJ5R1VJRCA9IGZ1bmN0aW9uKGd1aWQpIHtcbiAgICAgbGV0IG9iamVjdCA9IHRoaXMuX2dldE1haW5PYmplY3QoZ3VpZClcbiAgICAgbGV0IGJvZHlFbGVtID0gdGhpcy5fZ2V0Qm9keU9iamVjdChndWlkKVxuICAgICBcbiAgICAgaWYoIW9iamVjdCB8fCAhYm9keUVsZW0pXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgb2JqZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbiAgICAgYm9keUVsZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgd2luZG93Ll9fQ09NX0FDVElWRS5EU0IgPSBndWlkXG59XG5cbkRyb3Bkb3duU2VhcmNoQm94LnByb3RvdHlwZS5fY2xvc2VCeUdVSUQgPSBmdW5jdGlvbihndWlkKSB7XG4gICAgIGxldCBvYmplY3QgPSB0aGlzLl9nZXRNYWluT2JqZWN0KGd1aWQpXG4gICAgIGxldCBib2R5RWxlbSA9IHRoaXMuX2dldEJvZHlPYmplY3QoZ3VpZClcbiAgICAgXG4gICAgIGlmKCFvYmplY3QgfHwgIWJvZHlFbGVtKVxuICAgICAgICAgIHJldHVyblxuXG4gICAgIG9iamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgIGJvZHlFbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgd2luZG93Ll9fQ09NX0FDVElWRS5EU0IgPSAnJ1xufVxuXG5Ecm9wZG93blNlYXJjaEJveC5wcm90b3R5cGUuX3JlbmRlck1haW4gPSBmdW5jdGlvbihlbGVtLCBwcm9wcywgcmVuZGVyRXZlbnQpIHtcbiAgICAgLy8gR1VJRFxuICAgICBsZXQgZ3VpZCA9IHByb3BzLmd1aWRcbiAgICAgaWYoZWxlbS5nZXRBdHRyaWJ1dGUoJ2d1aWQnKSlcbiAgICAgICAgICBndWlkID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2d1aWQnKVxuXG4gICAgIGxldCBjaGlsZHJlbiA9IGVsZW0uY2hpbGROb2Rlc1xuICAgICBsZXQgYXJ0aWNsZSA9IG51bGxcblxuICAgICBpZihjaGlsZHJlbi5sZW5ndGgpe1xuICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICBpZihjaGlsZHJlbltpXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09ICdhcnRpY2xlJyl7XG4gICAgICAgICAgICAgICAgICAgIGFydGljbGUgPSBjaGlsZHJlbltpXVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgfVxuXG4gICAgIGlmKCFwcm9wcy5zdHJva2UpXG4gICAgICAgICAgZWxlbS5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBcIiArIHdpbmRvdy5fX0NPTV9DT0xPUl9HUk9VUC5CT1JERVJfQ09MT1JcbiAgICAgXG4gICAgIGlmKHByb3BzLm9wdGlvbnMpIHtcbiAgICAgICAgICBsZXQgb3B0aW9ucyA9IEpTT04ucGFyc2UocHJvcHMub3B0aW9ucylcbiAgICAgICAgICBsZXQgb3B0aW9uVmFsdWUgPSBudWxsXG5cbiAgICAgICAgICBpZiAocHJvcHMub3B0aW9uVmFsdWUpXG4gICAgICAgICAgICAgICBvcHRpb25WYWx1ZSA9IHByb3BzLm9wdGlvblZhbHVlXG5cbiAgICAgICAgICAvLyBSZWFkIG9wdGlvbiB2YWx1ZVxuICAgICAgICAgIGlmICh3aW5kb3cuX19DT01fUkVOREVSRUQuRFNCW2d1aWRdICYmIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EU0JbZ3VpZF0ub3B0aW9uVmFsdWUpXG4gICAgICAgICAgICAgICBvcHRpb25WYWx1ZSA9IHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EU0JbZ3VpZF0ub3B0aW9uVmFsdWUgKyBcIlwiXG5cbiAgICAgICAgICBpZiAob3B0aW9uVmFsdWUpIHtcbiAgICAgICAgICAgICAgIGxldCBvcHRpb25UZXh0ID0gdGhpcy5faXNWYWxpZE9WKG9wdGlvblZhbHVlLCBvcHRpb25zKVxuXG4gICAgICAgICAgICAgICBpZihvcHRpb25UZXh0ICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5jb2xvciA9IHdpbmRvdy5fX0NPTV9DT0xPUl9HUk9VUC5BQ1RJVkVfQ09MT1JcblxuICAgICAgICAgICAgICAgICAgICBpZihhcnRpY2xlKVxuICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuaW5uZXJUZXh0ID0gb3B0aW9uVGV4dFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgfVxuICAgICAvKiBEZWZhdWx0IFN0eWxlcyBFbmQgKi9cbn1cblxuRHJvcGRvd25TZWFyY2hCb3gucHJvdG90eXBlLl9yZW5kZXJGdWxsQm9keSA9IGZ1bmN0aW9uKGVsZW0sIHByb3BzLCByZW5kZXJFdmVudCkge1xuICAgICAvLyBHVUlEXG4gICAgIGxldCBndWlkID0gcHJvcHMuZ3VpZFxuICAgICBpZihlbGVtLmdldEF0dHJpYnV0ZSgnZ3VpZCcpKVxuICAgICAgICAgIGd1aWQgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZ3VpZCcpXG5cbiAgICAgbGV0IGJvZHlFbGVtID0gbnVsbFxuICAgICAgICAgIGxldCBzZWFyY2hXcmFwRWxlbWVudCA9IG51bGxcbiAgICAgICAgICAgICAgIGxldCBzZWFyY2hFbGVtZW50ID0gbnVsbFxuICAgICAgICAgIGxldCBvcHRpb25zRWxlbWVudCA9IG51bGxcblxuICAgICBpZiAocmVuZGVyRXZlbnQpIHtcbiAgICAgICAgICBib2R5RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgYm9keUVsZW0uY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuRFNCX0JPRFkpXG4gICAgICAgICAgYm9keUVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgIGJvZHlFbGVtLnNldEF0dHJpYnV0ZSgnZ3VpZCcsIGd1aWQpXG4gICAgICAgICAgXG4gICAgICAgICAgICAgICBzZWFyY2hXcmFwRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICBzZWFyY2hXcmFwRWxlbWVudC5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EU0JfU0VBUkNIX1dSQVApIFxuICAgICAgICAgICAgICAgc2VhcmNoV3JhcEVsZW1lbnQuc2V0QXR0cmlidXRlKCdndWlkJywgZ3VpZClcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTlBVVCcpXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaEVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hFbGVtZW50LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2VhcmNoLi4uJylcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoRWxlbWVudC5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EU0JfU0VBUkNIKVxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hFbGVtZW50LnNldEF0dHJpYnV0ZSgnZ3VpZCcsIGd1aWQpXG5cbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoV3JhcEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2VhcmNoRWxlbWVudClcblxuICAgICAgICAgICAgICAgYm9keUVsZW0uYXBwZW5kQ2hpbGQoc2VhcmNoV3JhcEVsZW1lbnQpXG5cbiAgICAgICAgICAgICAgIG9wdGlvbnNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgIG9wdGlvbnNFbGVtZW50LmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRTQl9PUFRJT05TKVxuICAgICAgICAgICAgICAgb3B0aW9uc0VsZW1lbnQuc2V0QXR0cmlidXRlKCdndWlkJywgZ3VpZClcblxuICAgICAgICAgICAgICAgYm9keUVsZW0uYXBwZW5kQ2hpbGQob3B0aW9uc0VsZW1lbnQpXG5cbiAgICAgICAgICBlbGVtLmFwcGVuZENoaWxkKGJvZHlFbGVtKVxuICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJvZHlFbGVtID0gdGhpcy5fZ2V0Qm9keU9iamVjdChndWlkKVxuXG4gICAgICAgICAgICAgICBzZWFyY2hXcmFwRWxlbWVudCA9IHRoaXMuX2dldFNlYXJjaFdyYXBPYmplY3QoZ3VpZClcblxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hFbGVtZW50ID0gdGhpcy5fZ2V0U2VhcmNoT2JqZWN0KGd1aWQpXG5cbiAgICAgICAgICAgICAgIG9wdGlvbnNFbGVtZW50ID0gdGhpcy5fZ2V0T3B0aW9uc09iamVjdChndWlkKVxuICAgICB9XG5cbiAgICAgaWYgKCFib2R5RWxlbSB8fCAhc2VhcmNoV3JhcEVsZW1lbnQgfHwgIXNlYXJjaEVsZW1lbnQgfHwgIW9wdGlvbnNFbGVtZW50KVxuICAgICAgICAgIHJldHVyblxuXG4gICAgIC8vIFN0eWxlc1xuICAgICBpZihwcm9wcy5mb250U2l6ZSkgXG4gICAgICAgICAgc2VhcmNoRWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IHByb3BzLmZvbnRTaXplICsgJ3B4J1xuICAgICBpZihwcm9wcy5mb250RmFtaWx5KVxuICAgICAgICAgIHNlYXJjaEVsZW1lbnQuc3R5bGUuZm9udEZhbWlseSA9IHByb3BzLmZvbnRGYW1pbHlcblxuICAgICAvLyBPcHRpb25zXG4gICAgIHRoaXMuX3JlbmRlck9wdGlvbnMob3B0aW9uc0VsZW1lbnQsIHByb3BzLCBndWlkLCByZW5kZXJFdmVudClcbn1cblxuRHJvcGRvd25TZWFyY2hCb3gucHJvdG90eXBlLl9yZW5kZXJPcHRpb25zID0gZnVuY3Rpb24oZWxlbSwgcHJvcHMsIGd1aWQsIHJlbmRlckV2ZW50KSB7XG4gICAgIGxldCBwcmV2aW91c09wdGlvbnMgPSBbXVxuICAgICBsZXQgb3B0aW9ucyA9IFtdXG5cbiAgICAgLy8gQ3VycmVudCBPcHRpb25zXG4gICAgIGlmKHByb3BzLm9wdGlvbnMpIHtcbiAgICAgICAgICBvcHRpb25zID0gSlNPTi5wYXJzZShwcm9wcy5vcHRpb25zKVxuICAgICB9XG5cbiAgICAgLy8gUHJldmlvdXMgT3B0aW9uc1xuICAgICBpZiAod2luZG93Ll9fQ09NX1JFTkRFUkVELkRTQltndWlkXSAmJiB3aW5kb3cuX19DT01fUkVOREVSRUQuRFNCW2d1aWRdLm9wdGlvbnMpIHtcbiAgICAgICAgICBwcmV2aW91c09wdGlvbnMgPSBKU09OLnBhcnNlKHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EU0JbZ3VpZF0ub3B0aW9ucylcbiAgICAgfVxuXG4gICAgIC8vIFJlYWQgb3B0aW9uIHZhbHVlXG4gICAgIGxldCBvcHRpb25WYWx1ZSA9IG51bGxcbiAgICAgaWYgKHByb3BzLm9wdGlvblZhbHVlKVxuICAgICAgICAgIG9wdGlvblZhbHVlID0gcHJvcHMub3B0aW9uVmFsdWVcbiAgICAgaWYgKHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EU0JbZ3VpZF0gJiYgd2luZG93Ll9fQ09NX1JFTkRFUkVELkRTQltndWlkXS5vcHRpb25WYWx1ZSlcbiAgICAgICAgICBvcHRpb25WYWx1ZSA9IHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EU0JbZ3VpZF0ub3B0aW9uVmFsdWUgKyBcIlwiXG5cbiAgICAgLy8gU2F2ZSBPcHRpb25zXG4gICAgIGlmICghd2luZG93Ll9fQ09NX1JFTkRFUkVELkRTQltndWlkXSlcbiAgICAgICAgICB3aW5kb3cuX19DT01fUkVOREVSRUQuRFNCW2d1aWRdID0ge31cbiAgICAgd2luZG93Ll9fQ09NX1JFTkRFUkVELkRTQltndWlkXS5vcHRpb25zID0gcHJvcHMub3B0aW9uc1xuICAgICBcbiAgICAgLy8gU3R5bGVcbiAgICAgbGV0IGhlaWdodCA9IDUwXG4gICAgIGlmKHByb3BzLm9wdGlvbkhlaWdodCAmJiAhaXNOYU4ocHJvcHMub3B0aW9uSGVpZ2h0KSkge1xuICAgICAgICAgIGhlaWdodCA9IHBhcnNlRmxvYXQocHJvcHMub3B0aW9uSGVpZ2h0KVxuICAgICB9XG5cbiAgICAgaWYob3B0aW9ucy5sZW5ndGggPiA1KSB7XG4gICAgICAgICAgZWxlbS5zdHlsZS5tYXhIZWlnaHQgPSAoaGVpZ2h0ICogNSkgKyAncHgnXG4gICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbS5zdHlsZS5tYXhIZWlnaHQgPSAnYXV0bydcbiAgICAgfVxuICAgICBcbiAgICAgaWYgKCF0aGlzLl9lcXVhbE9wdGlvbnMocHJldmlvdXNPcHRpb25zLCBvcHRpb25zLCBndWlkKSkgeyAvLyBPcHRpb25zIENoYW5nZWQgLSBOZWVkIHRvIFJlLXJlbmRlclxuICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gJydcbiAgICAgICAgICBcbiAgICAgICAgICBpZihvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9IG9wdGlvbnNbaV1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlck9wdGlvbihlbGVtLCBwcm9wcywgZ3VpZCwgb3B0aW9uLCBvcHRpb25WYWx1ZSwgcmVuZGVyRXZlbnQpXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IERyb3Bkb3duU2VhcmNoQm94KCkiLCJmdW5jdGlvbiBOYXZCYXIoKSB7fVxuXG5OYXZCYXIucHJvdG90eXBlLl9nZXRBY3RpdmVSb3V0ZUl0ZW0gPSBmdW5jdGlvbihndWlkKSB7XG4gICAgIGxldCBxdWVyeSA9ICcuJyArIHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5OQVZCQVJfSVRFTV9XSVRIX1NVQiArICcuc2VsZWN0ZWRbZ3VpZD1cIicgKyBndWlkICsnXCJdJ1xuICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKHF1ZXJ5KSBcbn1cblxuTmF2QmFyLnByb3RvdHlwZS5fZ2V0TWFpbk9iamVjdCA9IGZ1bmN0aW9uKGd1aWQpIHtcbiAgICAgbGV0IHF1ZXJ5ID0gJy4nICsgd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLk5BVkJBUiArICdbZ3VpZD1cIicgKyBndWlkICsnXCJdJ1xuICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKHF1ZXJ5KVxufVxuXG5OYXZCYXIucHJvdG90eXBlLl9vcGVuQnlHVUlEID0gZnVuY3Rpb24oZ3VpZCwgcGFyZW50RWxlbSkge1xuICAgICBwYXJlbnRFbGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbiAgICAgd2luZG93Ll9fQ09NX0FDVElWRS5OQVZCQVIgPSBndWlkXG59XG5cbk5hdkJhci5wcm90b3R5cGUuX2Nsb3NlQnlHVUlEID0gZnVuY3Rpb24oZ3VpZCkge1xuICAgICBsZXQgb2JqZWN0ID0gdGhpcy5fZ2V0QWN0aXZlUm91dGVJdGVtKGd1aWQpXG4gICAgIGlmKG9iamVjdClcbiAgICAgICAgICBvYmplY3QuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuXG4gICAgIHdpbmRvdy5fX0NPTV9BQ1RJVkUuTkFWQkFSID0gJydcbn1cblxuTmF2QmFyLnByb3RvdHlwZS5fc2VsZWN0Um91dGVCeUdVSUQgPSBmdW5jdGlvbihndWlkLCBlbGVtKSB7XG4gICAgIGxldCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgncm91dGUta2V5JylcbiAgICAgbGV0IHRleHQgPSBlbGVtLmdldEF0dHJpYnV0ZSgncm91dGUtdGV4dCcpXG5cbiAgICAgbGV0IG9iamVjdCA9IHRoaXMuX2dldE1haW5PYmplY3QoZ3VpZClcbiAgICAgbGV0IG9iamVjdElEID0gb2JqZWN0LmlkXG4gICAgIFxuICAgICBpZigha2V5IHx8ICF0ZXh0IHx8ICFvYmplY3RJRClcbiAgICAgICAgICByZXR1cm5cbiAgICAgXG4gICAgIGxldCB2aWV3ID0gd2luZG93Ll9fVklFV1Nbb2JqZWN0SURdXG4gICAgIFxuICAgICBpZighdmlldyB8fCAhdmlldy5wcm9wcylcbiAgICAgICAgICByZXR1cm5cblxuICAgICAvKiBVcGRhdGUgVUkgKi9cbiAgICAgaWYgKHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5OQVZCQVJbZ3VpZF0gJiYgd2luZG93Ll9fQ09NX1JFTkRFUkVELk5BVkJBUltndWlkXS5hY3RpdmVFbGVtKVxuICAgICAgICAgIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5OQVZCQVJbZ3VpZF0uYWN0aXZlRWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG5cbiAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG5cbiAgICAgaWYgKCF3aW5kb3cuX19DT01fUkVOREVSRUQuTkFWQkFSW2d1aWRdKVxuICAgICAgICAgIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5OQVZCQVJbZ3VpZF0gPSB7fVxuXG4gICAgIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5OQVZCQVJbZ3VpZF0uYWN0aXZlRWxlbSA9IGVsZW1cbiAgICAgd2luZG93Ll9fQ09NX1JFTkRFUkVELk5BVkJBUltndWlkXS5kZWZhdWx0VmFsdWUgPSBrZXlcbiAgICAgXG4gICAgIC8qIEV2ZW50IFRyaWdnZXIgKi9cbiAgICAgaWYgKHZpZXcucHJvcHMub25TZWxlY3QgJiYgdHlwZW9mIHZpZXcucHJvcHMub25TZWxlY3QgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgdmlldy5wcm9wcy5vblNlbGVjdChrZXkpXG4gICAgIH1cbn1cblxuTmF2QmFyLnByb3RvdHlwZS5fcmVuZGVyUm91dGUgPSBmdW5jdGlvbihwYXJlbnRFbGVtLCBwcm9wcywgZ3VpZCwgcm91dGUsIHJlbmRlckV2ZW50KSB7XG4gICAgIGlmKCFyb3V0ZS5rZXkgfHwgIXJvdXRlLnRleHQpXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdMSScpXG4gICAgIGVsZW0uY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuTkFWQkFSX0lURU0pXG4gICAgIFxuICAgICBlbGVtLnNldEF0dHJpYnV0ZSgncm91dGUta2V5Jywgcm91dGUua2V5KVxuICAgICBlbGVtLnNldEF0dHJpYnV0ZSgncm91dGUtdGV4dCcsIHJvdXRlLnRleHQpXG4gICAgIGVsZW0uc2V0QXR0cmlidXRlKCdndWlkJywgZ3VpZClcblxuICAgICBsZXQgZGVmYXVsdFZhbHVlID0gbnVsbFxuICAgICBpZiAocHJvcHMuZGVmYXVsdFZhbHVlKVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IHByb3BzLmRlZmF1bHRWYWx1ZVxuICAgICBpZiAod2luZG93Ll9fQ09NX1JFTkRFUkVELk5BVkJBUltndWlkXSAmJiB3aW5kb3cuX19DT01fUkVOREVSRUQuTkFWQkFSW2d1aWRdLmRlZmF1bHRWYWx1ZSlcbiAgICAgICAgICBkZWZhdWx0VmFsdWUgPSB3aW5kb3cuX19DT01fUkVOREVSRUQuTkFWQkFSW2d1aWRdLmRlZmF1bHRWYWx1ZSArIFwiXCJcblxuICAgICBpZihkZWZhdWx0VmFsdWUgJiYgZGVmYXVsdFZhbHVlID09IHJvdXRlLmtleSkge1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxuICAgICAgICAgIFxuICAgICAgICAgIC8vIFNhdmVcbiAgICAgICAgICBpZiAoIXdpbmRvdy5fX0NPTV9SRU5ERVJFRC5OQVZCQVJbZ3VpZF0pXG4gICAgICAgICAgICAgICB3aW5kb3cuX19DT01fUkVOREVSRUQuTkFWQkFSW2d1aWRdID0ge31cblxuICAgICAgICAgIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5OQVZCQVJbZ3VpZF0uYWN0aXZlRWxlbSA9IGVsZW1cbiAgICAgICAgICB3aW5kb3cuX19DT01fUkVOREVSRUQuTkFWQkFSW2d1aWRdLmRlZmF1bHRWYWx1ZSA9IHJvdXRlLmtleVxuICAgICB9IGVsc2VcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcblxuICAgICBsZXQgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKVxuICAgICBpZihwcm9wcy5oZWlnaHQgJiYgIWlzTmFOKHByb3BzLmhlaWdodCkpXG4gICAgICAgICAgYXJ0aWNsZS5zdHlsZS5saW5lSGVpZ2h0ID0gcHJvcHMuaGVpZ2h0ICsgJ3B4J1xuXG4gICAgIGVsZW0uYXBwZW5kQ2hpbGQoYXJ0aWNsZSlcblxuICAgICBpZihyb3V0ZS5zdWJyb3V0ZXMgJiYgcm91dGUuc3Vicm91dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBhcnRpY2xlLmlubmVySFRNTCA9IHJvdXRlLnRleHQgKyAnICYjOTY2MjsnXG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5OQVZCQVJfSVRFTV9XSVRIX1NVQilcblxuICAgICAgICAgIGxldCB2aXJ0dWFsRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1VMJylcbiAgICAgICAgICB2aXJ0dWFsRWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5OQVZCQVJfU1VCKVxuXG4gICAgICAgICAgaWYocm91dGUubmF2RGlyZWN0aW9uICYmIHJvdXRlLm5hdkRpcmVjdGlvbiA9PSAnZnJvbV9yaWdodCcpIFxuICAgICAgICAgICAgICAgdmlydHVhbEVsZW0uY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuTkFWQkFSX1NVQl9SSUdIVClcblxuICAgICAgICAgIHZpcnR1YWxFbGVtLnNldEF0dHJpYnV0ZSgnZ3VpZCcsIGd1aWQpICAgICAgICAgIFxuXG4gICAgICAgICAgaWYocHJvcHMudHJhbnNsYXRpb25aX25hdilcbiAgICAgICAgICAgICAgIHZpcnR1YWxFbGVtLnN0eWxlLnpJbmRleCA9IHByb3BzLnRyYW5zbGF0aW9uWl9uYXZcblxuICAgICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQodmlydHVhbEVsZW0pXG5cbiAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcm91dGUuc3Vicm91dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICBsZXQgc3Vicm91dGUgPSByb3V0ZS5zdWJyb3V0ZXNbaV1cblxuICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyU3ViUm91dGUodmlydHVhbEVsZW0sIHByb3BzLCBndWlkLCBzdWJyb3V0ZSwgcmVuZGVyRXZlbnQpXG4gICAgICAgICAgfVxuICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFydGljbGUuaW5uZXJIVE1MID0gcm91dGUudGV4dFxuICAgICB9XG5cbiAgICAgcGFyZW50RWxlbS5hcHBlbmRDaGlsZChlbGVtKVxufVxuXG5OYXZCYXIucHJvdG90eXBlLl9yZW5kZXJTdWJSb3V0ZSA9IGZ1bmN0aW9uKHBhcmVudEVsZW0sIHByb3BzLCBndWlkLCByb3V0ZSwgcmVuZGVyRXZlbnQpIHtcbiAgICAgaWYoIXJvdXRlLmtleSB8fCAhcm91dGUudGV4dClcbiAgICAgICAgICByZXR1cm5cblxuICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xJJylcbiAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5OQVZCQVJfU1VCX0lURU0pXG5cbiAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ3JvdXRlLWtleScsIHJvdXRlLmtleSlcbiAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ3JvdXRlLXRleHQnLCByb3V0ZS50ZXh0KVxuICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnZ3VpZCcsIGd1aWQpXG5cbiAgICAgbGV0IGRlZmF1bHRWYWx1ZSA9IG51bGxcbiAgICAgaWYgKHByb3BzLmRlZmF1bHRWYWx1ZSlcbiAgICAgICAgICBkZWZhdWx0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWVcbiAgICAgaWYgKHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5OQVZCQVJbZ3VpZF0gJiYgd2luZG93Ll9fQ09NX1JFTkRFUkVELk5BVkJBUltndWlkXS5kZWZhdWx0VmFsdWUpXG4gICAgICAgICAgZGVmYXVsdFZhbHVlID0gd2luZG93Ll9fQ09NX1JFTkRFUkVELk5BVkJBUltndWlkXS5kZWZhdWx0VmFsdWUgKyBcIlwiXG5cbiAgICAgaWYoZGVmYXVsdFZhbHVlICYmIGRlZmF1bHRWYWx1ZSA9PSByb3V0ZS5rZXkpIHtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBTYXZlXG4gICAgICAgICAgaWYgKCF3aW5kb3cuX19DT01fUkVOREVSRUQuTkFWQkFSW2d1aWRdKVxuICAgICAgICAgICAgICAgd2luZG93Ll9fQ09NX1JFTkRFUkVELk5BVkJBUltndWlkXSA9IHt9XG5cbiAgICAgICAgICB3aW5kb3cuX19DT01fUkVOREVSRUQuTkFWQkFSW2d1aWRdLmFjdGl2ZUVsZW0gPSBlbGVtXG4gICAgICAgICAgd2luZG93Ll9fQ09NX1JFTkRFUkVELk5BVkJBUltndWlkXS5kZWZhdWx0VmFsdWUgPSByb3V0ZS5rZXlcbiAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcbiAgICAgfVxuXG4gICAgIGxldCBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpIFxuICAgICBhcnRpY2xlLmlubmVySFRNTCA9IHJvdXRlLnRleHRcblxuICAgICBlbGVtLmFwcGVuZENoaWxkKGFydGljbGUpXG4gICAgIHBhcmVudEVsZW0uYXBwZW5kQ2hpbGQoZWxlbSlcbn1cblxuTmF2QmFyLnByb3RvdHlwZS5fcmVuZGVyTWFpbiA9IGZ1bmN0aW9uKGVsZW0sIHByb3BzLCByZW5kZXJFdmVudCkge1xuICAgICBpZiAoIXJlbmRlckV2ZW50KVxuICAgICAgICAgIHJldHVyblxuXG4gICAgIC8vIEdVSURcbiAgICAgbGV0IGd1aWQgPSBwcm9wcy5ndWlkXG4gICAgIGlmKGVsZW0uZ2V0QXR0cmlidXRlKCdndWlkJykpXG4gICAgICAgICAgZ3VpZCA9IGVsZW0uZ2V0QXR0cmlidXRlKCdndWlkJylcblxuICAgICAvLyBST1VURVNcbiAgICAgbGV0IHJvdXRlcyA9IFtdXG4gICAgIGlmKHByb3BzICYmIHByb3BzLnJvdXRlcylcbiAgICAgICAgICByb3V0ZXMgPSBKU09OLnBhcnNlKHByb3BzLnJvdXRlcykgICAgICAgIFxuICAgICBcbiAgICAgZWxlbS5pbm5lckhUTUwgPSAnJ1xuICAgICBsZXQgdmlydHVhbEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdVTCcpXG4gICAgIGVsZW0uYXBwZW5kQ2hpbGQodmlydHVhbEVsZW0pXG5cbiAgICAgaWYocm91dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcm91dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICBsZXQgcm91dGUgPSByb3V0ZXNbaV1cblxuICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyUm91dGUodmlydHVhbEVsZW0sIHByb3BzLCBndWlkLCByb3V0ZSwgcmVuZGVyRXZlbnQpXG4gICAgICAgICAgfVxuICAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IE5hdkJhcigpIiwiZnVuY3Rpb24gU3dpdGNoQnV0dG9uKCkge31cblxuU3dpdGNoQnV0dG9uLnByb3RvdHlwZS5fcmVuZGVyTWFpbiA9IGZ1bmN0aW9uKGVsZW0sIHByb3BzLCByZW5kZXJFdmVudCkge1xuICAgICBpZiAocmVuZGVyRXZlbnQpIHtcbiAgICAgICAgICBlbGVtLmlubmVySFRNTCA9ICcnXG5cbiAgICAgICAgICBsZXQgZ3VpZCA9IHByb3BzLmd1aWQgXG4gICAgICAgICAgaWYoZWxlbS5nZXRBdHRyaWJ1dGUoJ2d1aWQnKSlcbiAgICAgICAgICAgICAgIGd1aWQgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZ3VpZCcpXG5cbiAgICAgICAgICB0aGlzLl9yZW5kZXJTdHlsZShlbGVtLCBwcm9wcywgZ3VpZClcblxuICAgICAgICAgIGxldCB2aXJ0dWFsRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xBQkVMJylcbiAgICAgICAgICB2aXJ0dWFsRWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5TV0lUQ0hfQk9EWSlcbiAgICAgICAgICB2aXJ0dWFsRWxlbS5zZXRBdHRyaWJ1dGUoJ2d1aWQnLCBndWlkKVxuICAgICAgICAgIFxuICAgICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQodmlydHVhbEVsZW0pXG5cbiAgICAgICAgICB0aGlzLl9yZW5kZXJTbGlkZXIodmlydHVhbEVsZW0sIHByb3BzLCBndWlkLCByZW5kZXJFdmVudClcbiAgICAgfVxufVxuXG5Td2l0Y2hCdXR0b24ucHJvdG90eXBlLl9yZW5kZXJTbGlkZXIgPSBmdW5jdGlvbihwYXJlbnRFbGVtLCBwcm9wcywgZ3VpZCwgcmVuZGVyRXZlbnQpIHtcbiAgICAgbGV0IHNlbGVjdGVkRGVmYXVsdCA9IGZhbHNlXG4gICAgIGlmKHByb3BzLmhhc093blByb3BlcnR5KCdzZWxlY3RlZERlZmF1bHQnKSkgXG4gICAgICAgICAgc2VsZWN0ZWREZWZhdWx0ID0gcHJvcHMuc2VsZWN0ZWREZWZhdWx0XG5cbiAgICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSU5QVVQnKVxuICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgICBcbiAgICAgaWYoc2VsZWN0ZWREZWZhdWx0KSB7XG4gICAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKVxuICAgICB9XG4gICAgIFxuICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1NQQU4nKVxuICAgICBlbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLlNXSVRDSF9TTElERVIpXG5cbiAgICAgcGFyZW50RWxlbS5hcHBlbmRDaGlsZChjaGVja2JveClcbiAgICAgcGFyZW50RWxlbS5hcHBlbmRDaGlsZChlbGVtKVxuXG4gICAgIC8vIEV2ZW50c1xuICAgICBpZiAocmVuZGVyRXZlbnQgJiYgcHJvcHMub25Td2l0Y2ggJiYgdHlwZW9mIHByb3BzLm9uU3dpdGNoID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgcHJvcHMub25Td2l0Y2godGhpcy5jaGVja2VkKVxuICAgICAgICAgIH0pXG4gICAgIH1cbn1cblxuU3dpdGNoQnV0dG9uLnByb3RvdHlwZS5fcmVuZGVyU3R5bGUgPSBmdW5jdGlvbihwYXJlbnRFbGVtLCBwcm9wcywgZ3VpZCkge1xuICAgICBsZXQgZ2FwID0gNFxuICAgICBsZXQgcGFyZW50V2lkdGggPSBwYXJlbnRFbGVtLm9mZnNldFdpZHRoXG4gICAgIGxldCBwYXJlbnRIZWlnaHQgPSBwYXJlbnRFbGVtLm9mZnNldEhlaWdodFxuXG4gICAgIGxldCBzaXplID0gTWF0aC5taW4ocGFyZW50V2lkdGgsIHBhcmVudEhlaWdodClcbiAgICAgbGV0IGFjdHVhbFNpemUgPSBzaXplIC0gMiAqIGdhcFxuICAgICBpZiAoYWN0dWFsU2l6ZSA8IDApIHtcbiAgICAgICAgICBhY3R1YWxTaXplID0gc2l6ZVxuICAgICAgICAgIGdhcCA9IDBcbiAgICAgfVxuXG4gICAgIGxldCB0eCA9IHBhcmVudFdpZHRoIC0gMiAqIGdhcCAtIGFjdHVhbFNpemVcbiAgICAgaWYgKHR4IDwgMClcbiAgICAgICAgICB0eCA9IDBcblxuICAgICBsZXQgc3R5bGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICAgICBzdHlsZUVsZW0udHlwZSA9ICd0ZXh0L2NzcydcblxuICAgICBsZXQgY3NzID0gJydcbiAgICAgY3NzICs9ICcuJyArIHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5TV0lUQ0hfQk9EWSArICdbZ3VpZD1cIicgKyBndWlkICsgJ1wiXSAuJyArIHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5TV0lUQ0hfU0xJREVSICsgJ3tib3JkZXItcmFkaXVzOiAnICsgc2l6ZSArICdweH0gJ1xuICAgICBjc3MgKz0gJy4nICsgd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLlNXSVRDSF9CT0RZICsgJ1tndWlkPVwiJyArIGd1aWQgKyAnXCJdIC4nICsgd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLlNXSVRDSF9TTElERVIgKyAnOmJlZm9yZSB7Ym9yZGVyLXJhZGl1czogNTAlOyBjb250ZW50OiBcIlwiOyBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAnICsgYWN0dWFsU2l6ZSArICdweDsgaGVpZ2h0OiAnICsgYWN0dWFsU2l6ZSArICdweDsgbGVmdDogJyArIGdhcCArICdweDsgYm90dG9tOiAnICsgZ2FwICsgJ3B4OyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7IHRyYW5zaXRpb246IC40czt9ICdcbiAgICAgY3NzICs9ICcuJyArIHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5TV0lUQ0hfQk9EWSArICdbZ3VpZD1cIicgKyBndWlkICsgJ1wiXSBpbnB1dDpjaGVja2VkICsgLicgKyB3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuU1dJVENIX1NMSURFUiArICc6YmVmb3JlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJyArIHR4ICsgJ3B4KTt9ICdcblxuICAgICBzdHlsZUVsZW0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFN3aXRjaEJ1dHRvbigpIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG4vKlxuICBWaWV3Q29udGV4dCBvZiB0aGUgUGFyZW50LmZcbiAgT2JqIGhvbGRzIHRoZSBhdmFpbGFibGUgd2lkdGggYW5kIGhlaWdodCBvZiBpdCdzIHBhcmVudCBjb250YWluZXJcbiAgYW5kIHggJiB5IG9mZnNldCBmb3IgaXQncyBjaGlsZHJlblxuKi9cbmZ1bmN0aW9uIHZpZXdDdHhPYmoodmlldykge1xuICBsZXQgcHJvcHMgPSB2aWV3LnByb3BzO1xuICBsZXQgb2JqID0ge1xuICAgIHc6IHByb3BzLncgKiAxLFxuICAgIGg6IHByb3BzLmggKiAxLFxuICAgIHdpZHRoOiBwcm9wcy53ICogMSxcbiAgfTtcblxuICB2aWV3LmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgIGNoaWxkLnByb3BzLncgPSBjaGlsZC5wcm9wcy53aWR0aDtcbiAgICBjaGlsZC5wcm9wcy5oID0gY2hpbGQucHJvcHMuaGVpZ2h0O1xuICB9KTtcblxuICByZXR1cm4gb2JqO1xufVxuXG4vKlxuICBSZXR1cm5zIHRydWUgaWYgY29udGFpbmVyIGhhcyBhIGNoaWxkIHdpdGggbWF0Y2hfcGFyZW50IGZvciBhXG4gIGdpdmVuIGRpbWVuc2lvbiAod2lkdGggb3IgaGVpZ2h0KVxuKi9cbmZ1bmN0aW9uIGhhc01hdGNoUGFyZW50Q2hpbGQoY2hpbGRzLCBkaW1lbikge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjaGlsZFByb3AgPSBjaGlsZHNbaV0ucHJvcHM7XG4gICAgXG4gICAgaWYgKGNoaWxkUHJvcFtkaW1lbl0gJiYgKGNoaWxkUHJvcFtkaW1lbl0gPT0gXCJtYXRjaF9wYXJlbnRcIikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qXG4gIFJldHVybnMgdHJ1ZSBpZiBjb250YWluZXIgaGFzIHdlaWdodGVkIGNoaWxkXG4qL1xuZnVuY3Rpb24gaGFzV2VpZ2h0Q2hpbGQodHlwZSwgY2hpbGRzKSB7XG4gIGlmICh0eXBlICE9IFwibGluZWFyTGF5b3V0XCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjaGlsZCA9IGNoaWxkc1tpXS5wcm9wcztcbiAgICBcbiAgICBpZiAoY2hpbGQud2VpZ2h0ICYmIHBhcnNlSW50KGNoaWxkLndlaWdodCkgPiAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlUmVsYXRpdmVMYXlvdXQodmlldykge1xuICBsZXQgdmlld0N0eCA9IHZpZXdDdHhPYmoodmlldyk7XG4gIGxldCBjaGlsZHJlbiA9IHZpZXcuY2hpbGRyZW47XG5cbiAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgbGV0IHByb3BzID0gY2hpbGQucHJvcHM7XG5cbiAgICBwcm9wcy5hYnNvbHV0ZSA9IHRydWU7XG4gICAgcHJvcHMuZnJvbVRvcCA9IDA7XG4gICAgcHJvcHMuZnJvbUJvdHRvbSA9ICdhdXRvJztcbiAgICBwcm9wcy5mcm9tTGVmdCA9IDA7XG4gICAgcHJvcHMuZnJvbVJpZ2h0ID0gJ2F1dG8nO1xuXG4gICAgaWYocHJvcHMuaGFzT3duUHJvcGVydHkoJ2FsaWduUGFyZW50TGVmdCcpICYmIHByb3BzLmFsaWduUGFyZW50TGVmdCl7XG4gICAgICBwcm9wcy5mcm9tTGVmdCA9IDA7XG4gICAgICBwcm9wcy5mcm9tUmlnaHQgPSAnYXV0byc7XG4gICAgfVxuXG4gICAgaWYocHJvcHMuaGFzT3duUHJvcGVydHkoJ2FsaWduUGFyZW50Qm90dG9tJykgJiYgcHJvcHMuYWxpZ25QYXJlbnRCb3R0b20pe1xuICAgICAgcHJvcHMuZnJvbVRvcCA9ICdhdXRvJztcbiAgICAgIHByb3BzLmZyb21Cb3R0b20gPSAwO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVMaW5lYXJsYXlvdXQodmlldykge1xuICBsZXQgdmlld0N0eCA9IHZpZXdDdHhPYmoodmlldyk7XG4gIGxldCBwYXJlbnRQcm9wcyA9IHZpZXcucHJvcHM7XG4gIGxldCBjaGlsZHJlbiA9IHZpZXcuY2hpbGRyZW47XG4gIGxldCBpc0hvcml6b250YWwgPSAocGFyZW50UHJvcHMub3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikgPyBmYWxzZSA6IHRydWU7XG4gIFxuICBsZXQgYWN0aXZlRGltZW4gPSAoaXNIb3Jpem9udGFsKSA/IFwid1wiIDogXCJoXCI7XG4gIGxldCBwYXNzaXZlRGltZW4gPSAoaXNIb3Jpem9udGFsKSA/IFwiaFwiIDogXCJ3XCI7XG5cbiAgbGV0IGhhc1dlaWdodCA9IGhhc1dlaWdodENoaWxkKHZpZXcudHlwZSwgY2hpbGRyZW4pO1xuICBsZXQgaGFzTWF0Y2hQYXJlbnQgPSBoYXNNYXRjaFBhcmVudENoaWxkKGNoaWxkcmVuLCBhY3RpdmVEaW1lbik7XG4gIFxuICBpZiAoaGFzV2VpZ2h0ICYmIGhhc01hdGNoUGFyZW50KSB7XG4gICAgLy8gV2UgY2FuJ3QgdXNlIGJvdGggYXQgdGhlIHNhbWUgdGltZVxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qIEluaXRpYWxpemUgKi9cbiAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgbGV0IHByb3BzID0gY2hpbGQucHJvcHM7XG5cbiAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoXCJhY3RpdmVEaW1lblwiKSlcbiAgICAgIGRlbGV0ZSBwcm9wc1tcImFjdGl2ZURpbWVuXCJdO1xuICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShcImFjdGl2ZVdlaWdodFwiKSlcbiAgICAgIGRlbGV0ZSBwcm9wc1tcImFjdGl2ZVdlaWdodFwiXTtcbiAgfSk7XG4gIC8qIEluaXRpYWxpemUgRW5kICovXG4gIFxuICBpZihoYXNNYXRjaFBhcmVudCB8fCBoYXNXZWlnaHQpe1xuICAgIGxldCBmaXJzdCA9IHRydWU7XG4gICAgLyogSXRlcmF0ZSBDaGlsZCAqL1xuICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgbGV0IHByb3BzID0gY2hpbGQucHJvcHM7XG5cbiAgICAgIGlmKHByb3BzLmhhc093blByb3BlcnR5KGFjdGl2ZURpbWVuKSAmJiBwcm9wc1thY3RpdmVEaW1lbl0gPT0gJ21hdGNoX3BhcmVudCcpe1xuICAgICAgICBwcm9wc1snYWN0aXZlRGltZW4nXSA9IGFjdGl2ZURpbWVuO1xuICAgICAgICBcbiAgICAgICAgaWYoZmlyc3Qpe1xuICAgICAgICAgIHByb3BzWydhY3RpdmVXZWlnaHQnXSA9IDE7XG4gICAgICAgICAgZmlyc3QgPSBmYWxzZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgcHJvcHNbJ2FjdGl2ZVdlaWdodCddID0gMDtcbiAgICAgICAgfVxuICAgICAgfWVsc2V7XG4gICAgICAgIGlmKHByb3BzLmhhc093blByb3BlcnR5KCd3ZWlnaHQnKSAmJiAhaXNOYU4ocHJvcHNbJ3dlaWdodCddKSl7XG4gICAgICAgICAgbGV0IHdlaWdodCA9IHBhcnNlRmxvYXQocHJvcHNbJ3dlaWdodCddKTtcblxuICAgICAgICAgIGlmKHdlaWdodCA+IDApe1xuICAgICAgICAgICAgcHJvcHNbJ2FjdGl2ZURpbWVuJ10gPSBhY3RpdmVEaW1lbjtcbiAgICAgICAgICAgIHByb3BzWydhY3RpdmVXZWlnaHQnXSA9IHdlaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICAvKiBJdGVyYXRlIENoaWxkIEVuZCAqL1xuICB9XG59IC8vIEVuZCBDb21wdXRlIExpbmVhckxheW91dFxuXG5mdW5jdGlvbiBjb21wdXRlQ2hpbGREaW1lbnModmlldykge1xuICBpZiAodmlldy50eXBlID09IFwibGluZWFyTGF5b3V0XCIpIHtcbiAgICBjb21wdXRlTGluZWFybGF5b3V0KHZpZXcpO1xuICB9IGVsc2UgaWYgKHZpZXcudHlwZSA9PSBcInNjcm9sbFZpZXdcIiB8fCB2aWV3LnR5cGUgPT0gXCJsaXN0Vmlld1wiKSB7XG4gICAgdmlldy5wcm9wcy5vcmllbnRhdGlvbiA9IFwidmVydGljYWxcIjtcbiAgICBjb21wdXRlTGluZWFybGF5b3V0KHZpZXcpO1xuICB9IGVsc2UgaWYgKHZpZXcudHlwZSA9PSBcImhvcml6b250YWxTY3JvbGxWaWV3XCIpIHtcbiAgICB2aWV3LnByb3BzLm9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCI7XG4gICAgY29tcHV0ZUxpbmVhcmxheW91dCh2aWV3KTtcbiAgfSBlbHNlIGlmICh2aWV3LnR5cGUgPT0gXCJyZWxhdGl2ZUxheW91dFwiKSB7XG4gICAgY29tcHV0ZVJlbGF0aXZlTGF5b3V0KHZpZXcpO1xuICB9IGVsc2Uge1xuICAgIC8vIERvIE5vdGhpbmdcbiAgfVxuXG4gIHJldHVybiB2aWV3O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY29tcHV0ZUNoaWxkRGltZW5zXG59OyIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxuZnVuY3Rpb24gcnVuKCkge1xuICBpZiAod2luZG93Ll9fT1MgPT09IFwiSU9TXCIpIHtcbiAgICByZXR1cm4gcmVxdWlyZShcIi4vaW9zXCIpXG4gIH0gZWxzZSBpZiAod2luZG93Ll9fT1MgPT09IFwiV0VCXCIpIHtcbiAgICByZXR1cm4gcmVxdWlyZShcIi4vd2ViXCIpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlcXVpcmUoXCIuL2FuZHJvaWRcIilcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJ1bigpOyIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxudmFyIHBhcnNlUGFyYW1zID0gcmVxdWlyZSgnLi4vaGVscGVycy93ZWInKS5wYXJzZVBhcmFtcztcblxuQXJyYXkucHJvdG90eXBlLmZsYXR0ZW4gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3VyKSB7XG4gICAgdmFyIG1vcmUgPSBbXS5jb25jYXQoY3VyKS5zb21lKEFycmF5LmlzQXJyYXkpO1xuICAgIHJldHVybiBwcmV2LmNvbmNhdChtb3JlID8gY3VyLmZsYXR0ZW4oKSA6IGN1cik7XG4gIH0sIFtdKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHR5cGUsIHByb3BzLCAuLi5jaGlsZHJlbikge1xuICBjaGlsZHJlbiA9IGNoaWxkcmVuLmZsYXR0ZW4oKTtcbiAgXG4gIGlmICghcHJvcHMpXG4gICAgcHJvcHMgPSB7fTtcbiAgXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIHByb3BzID0gcGFyc2VQYXJhbXModHlwZSwgcHJvcHMpO1xuICAgIFxuICAgIGxldCBvYmogPSB7XG4gICAgICBwcm9wczogcHJvcHMsXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgfTtcblxuICAgIHdpbmRvdy5fX1ZJRVdTW3Byb3BzLmlkXSA9IG9iajtcbiAgICB3aW5kb3cuX19WSUVXX0RJTUVOU0lPTlNbcHJvcHMuaWRdID0gbnVsbDtcbiAgICByZXR1cm4gb2JqO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgdHlwZShwcm9wcywgY2hpbGRyZW4pO1xuICB9XG59IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaGFuZGxlIDogKHVpLCBjYWxsYmFjaykgPT4ge1xuICAgIGlmICghdWkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYodWkucmVuZGVyKSB7XG4gICAgICBpZiAodHlwZW9mIEFuZHJvaWQgPT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFuZHJvaWQgaXMgdW5kZWZpbmVkXCIpO1xuXG4gICAgICBpZiAod2luZG93Ll9fT1MgIT0gXCJBTkRST0lEXCIpXG4gICAgICAgIHJldHVybiBBbmRyb2lkLlJlbmRlcih1aS5yZW5kZXIsIG51bGwpO1xuICAgICAgZWxzZSB7XG4gICAgICAgIGlmKHR5cGVvZiBBbmRyb2lkLmdldE5ld0lEID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHJldHVybiBBbmRyb2lkLlJlbmRlcihKU09OLnN0cmluZ2lmeSh1aS5yZW5kZXIpLCBudWxsLCBcImZhbHNlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBBbmRyb2lkLlJlbmRlcihKU09OLnN0cmluZ2lmeSh1aS5yZW5kZXIpLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmKHVpLnJ1bkluVUkpIHtcbiAgICAgIEFuZHJvaWQucnVuSW5VSSh1aS5ydW5JblVJLCBudWxsKTtcbiAgICB9XG4gICAgaWYodWkuYWRkVmlld1RvUGFyZW50KSB7XG4gICAgICBBbmRyb2lkLmFkZFZpZXdUb1BhcmVudCh1aS5hZGRWaWV3VG9QYXJlbnQucGFyZW50SWQsIEpTT04uc3RyaW5naWZ5KHVpLmFkZFZpZXdUb1BhcmVudC5qc3gpLCB1aS5hZGRWaWV3VG9QYXJlbnQuaW5kZXgsIG51bGwpO1xuICAgIH1cbiAgfVxufSIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxuLy8gRm9sbG93aW5nIGZ1bmN0aW9ucyBhcmUgdXNlZCBieSBXRUIgYW5kIElPUyBSZW5kZXJcbmZ1bmN0aW9uIGNhY2hlRGltZW4odmlldykge1xuICBsZXQgcHJvcHMgPSB2aWV3LnByb3BzO1xuICBsZXQgZGltZW4gPSB7XG4gICAgdzogcHJvcHMudyxcbiAgICBoOiBwcm9wcy5oLFxuICAgIHg6IHByb3BzLngsXG4gICAgeTogcHJvcHMueSxcbiAgICBncmF2aXR5OiBwcm9wcy5ncmF2aXR5LFxuICAgIHBhZGRpbmc6IHByb3BzLnBhZGRpbmcsXG4gICAgb3JpZW50YXRpb246IHByb3BzLm9yaWVudGF0aW9uLFxuICAgIHN0cm9rZTogcHJvcHMuc3Ryb2tlID8gcHJvcHMuc3Ryb2tlLnNwbGl0KFwiLFwiKVswXSAqIDEgOiAwLFxuICB9XG4gIHdpbmRvdy5fX1ZJRVdfRElNRU5TSU9OU1twcm9wcy5pZF0gPSBkaW1lbjtcbn1cblxuZnVuY3Rpb24gc2hvdWxkTW92ZSh2aWV3KSB7XG4gIGxldCBwcm9wcyA9IHZpZXcucHJvcHM7XG4gIGxldCBkaW1lbiA9IHtcbiAgICB3OiBwcm9wcy53LFxuICAgIGg6IHByb3BzLmgsXG4gICAgeDogcHJvcHMueCxcbiAgICB5OiBwcm9wcy55XG4gIH07XG4gIGxldCBjYWNoZWREaW1lbiA9IHdpbmRvdy5fX1ZJRVdfRElNRU5TSU9OU1twcm9wcy5pZF07XG4gIGxldCBjaGFuZ2VkID0gZmFsc2U7XG4gIGlmICghY2FjaGVkRGltZW4pXG4gICAgcmV0dXJuIGRpbWVuO1xuICBmb3IgKGxldCBrZXkgaW4gZGltZW4pIHtcbiAgICBpZiAoY2FjaGVkRGltZW5ba2V5XSAhPSBkaW1lbltrZXldKSB7XG4gICAgICBkaW1lbi5pZCA9IHByb3BzLmlkO1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIGlmIChjaGFuZ2VkKVxuICAgIHJldHVybiBkaW1lbjtcbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldE9TKCkge1xuICB2YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgaWYgKCF1c2VyQWdlbnQpXG4gICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IobmV3IEVycm9yKFwiVXNlckFnZW50IGlzIG51bGxcIikpO1xuICBpZiAodXNlckFnZW50LmluY2x1ZGVzKFwiQW5kcm9pZFwiKSAmJiB1c2VyQWdlbnQuaW5jbHVkZXMoXCJWZXJzaW9uXCIpKVxuICAgIHJldHVybiBcIkFORFJPSURcIjtcbiAgaWYgKCh1c2VyQWdlbnQuaW5jbHVkZXMoXCJpUGhvbmVcIikgfHwgdXNlckFnZW50LmluY2x1ZGVzKFwiaVBhZFwiKSkgJiYgIXVzZXJBZ2VudC5pbmNsdWRlcyhcIlZlcnNpb25cIikpXG4gICAgcmV0dXJuIFwiSU9TXCI7XG4gIHJldHVybiBcIldFQlwiO1xufVxuXG5mdW5jdGlvbiBjbGVhclZpZXdFeHRlcm5hbHModmlldykge1xuICBpZiAoIXZpZXcpXG4gICAgcmV0dXJuO1xuXG4gIGRlbGV0ZSB3aW5kb3cuX19WSUVXU1t2aWV3LnByb3BzLmlkXTtcbiAgZGVsZXRlIHdpbmRvdy5fX1ZJRVdfRElNRU5TSU9OU1t2aWV3LnByb3BzLmlkXTtcbiAgXG4gIGlmKF9fT0JTRVJWRVJTW3ZpZXcucHJvcHMuaWRdKVxuICAgIGRlbGV0ZSB3aW5kb3cuX19PQlNFUlZFUlNbdmlldy5wcm9wcy5pZF07XG5cbiAgdmlldy5jaGlsZHJlbi5mb3JFYWNoKGNsZWFyVmlld0V4dGVybmFscyk7XG59XG5cbi8vIHVzZTogY2xvbmUoIDx0aGluZyB0byBjb3B5PiApIHJldHVybnMgPG5ldyBjb3B5PlxuZnVuY3Rpb24gY2xvbmUobywgbSl7XG4gIC8vIHJldHVybiBub24gb2JqZWN0IHZhbHVlc1xuICBpZignb2JqZWN0JyAhPT10eXBlb2YgbykgcmV0dXJuIG9cbiAgLy8gbTogYSBtYXAgb2Ygb2xkIHJlZnMgdG8gbmV3IG9iamVjdCByZWZzIHRvIHN0b3AgcmVjdXJzaW9uXG4gIGlmKCdvYmplY3QnICE9PXR5cGVvZiBtIHx8IG51bGwgPT09bSkgbSA9bmV3IFdlYWtNYXAoKVxuICB2YXIgbiA9bS5nZXQobylcbiAgaWYoJ3VuZGVmaW5lZCcgIT09dHlwZW9mIG4pIHJldHVybiBuXG4gIC8vIHNoYWxsb3cvbGVhZiBjbG9uZSBvYmplY3RcbiAgdmFyIGMgPU9iamVjdC5nZXRQcm90b3R5cGVPZihvKS5jb25zdHJ1Y3RvclxuICAvLyBUT0RPOiBzcGVjaWFsaXplIGNvcGllcyBmb3IgZXhwZWN0ZWQgYnVpbHQgaW4gdHlwZXMgaS5lLiBEYXRlIGV0Y1xuICBzd2l0Y2goYykge1xuICAgIC8vIHNob3VsZG4ndCBiZSBjb3BpZWQsIGtlZXAgcmVmZXJlbmNlXG4gICAgY2FzZSBCb29sZWFuOlxuICAgIGNhc2UgRXJyb3I6XG4gICAgY2FzZSBGdW5jdGlvbjpcbiAgICBjYXNlIE51bWJlcjpcbiAgICBjYXNlIFByb21pc2U6XG4gICAgY2FzZSBTdHJpbmc6XG4gICAgY2FzZSBTeW1ib2w6XG4gICAgY2FzZSBXZWFrTWFwOlxuICAgIGNhc2UgV2Vha1NldDpcbiAgICAgIG4gPW9cbiAgICAgIGJyZWFrO1xuICAgIC8vIGFycmF5IGxpa2UvY29sbGVjdGlvbiBvYmplY3RzXG4gICAgY2FzZSBBcnJheTpcbiAgICAgIG0uc2V0KG8sIG4gPW8uc2xpY2UoMCkpXG4gICAgICAvLyByZWN1cnNpdmUgY29weSBmb3IgY2hpbGQgb2JqZWN0c1xuICAgICAgbi5mb3JFYWNoKGZ1bmN0aW9uKHYsaSl7XG4gICAgICAgIGlmKCdvYmplY3QnID09PXR5cGVvZiB2KSBuW2ldID1jbG9uZSh2LCBtKVxuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEFycmF5QnVmZmVyOlxuICAgICAgbS5zZXQobywgbiA9by5zbGljZSgwKSlcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRGF0YVZpZXc6XG4gICAgICBtLnNldChvLCBuID1uZXcgKGMpKGNsb25lKG8uYnVmZmVyLCBtKSwgby5ieXRlT2Zmc2V0LCBvLmJ5dGVMZW5ndGgpKVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBNYXA6XG4gICAgY2FzZSBTZXQ6XG4gICAgICBtLnNldChvLCBuID1uZXcgKGMpKGNsb25lKEFycmF5LmZyb20oby5lbnRyaWVzKCkpLCBtKSkpXG4gICAgICBicmVhaztcbiAgICBjYXNlIEludDhBcnJheTpcbiAgICBjYXNlIFVpbnQ4QXJyYXk6XG4gICAgY2FzZSBVaW50OENsYW1wZWRBcnJheTpcbiAgICBjYXNlIEludDE2QXJyYXk6XG4gICAgY2FzZSBVaW50MTZBcnJheTpcbiAgICBjYXNlIEludDMyQXJyYXk6XG4gICAgY2FzZSBVaW50MzJBcnJheTpcbiAgICBjYXNlIEZsb2F0MzJBcnJheTpcbiAgICBjYXNlIEZsb2F0NjRBcnJheTpcbiAgICAgIG0uc2V0KG8sIG4gPW5ldyAoYykoY2xvbmUoby5idWZmZXIsIG0pLCBvLmJ5dGVPZmZzZXQsIG8ubGVuZ3RoKSlcbiAgICAgIGJyZWFrO1xuICAgIC8vIHVzZSBidWlsdCBpbiBjb3B5IGNvbnN0cnVjdG9yXG4gICAgY2FzZSBEYXRlOlxuICAgIGNhc2UgUmVnRXhwOlxuICAgICAgbS5zZXQobywgbiA9bmV3IChjKShvKSlcbiAgICAgIGJyZWFrO1xuICAgIC8vIGZhbGxiYWNrIGdlbmVyaWMgb2JqZWN0IGNvcHlcbiAgICBkZWZhdWx0OlxuICAgICAgbS5zZXQobywgbiA9T2JqZWN0LmFzc2lnbihuZXcgKGMpKCksIG8pKVxuICAgICAgLy8gcmVjdXJzaXZlIGNvcHkgZm9yIGNoaWxkIG9iamVjdHNcbiAgICAgIGZvcihjIGluIG4pIGlmKCdvYmplY3QnID09PXR5cGVvZiBuW2NdKSBuW2NdID1jbG9uZShuW2NdLCBtKVxuICB9XG4gIHJldHVybiBuXG59XG5cbmZ1bmN0aW9uIG1lcmdlKCkge1xuICB2YXIgb2JqID0ge30sXG4gICAgICBpID0gMCxcbiAgICAgIGlsID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgIGtleTtcbiAgZm9yICg7IGkgPCBpbDsgaSsrKSB7XG4gICAgICBmb3IgKGtleSBpbiBhcmd1bWVudHNbaV0pIHtcbiAgICAgICAgICBpZiAoYXJndW1lbnRzW2ldLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgb2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzaG91bGRNb3ZlLFxuICBjYWNoZURpbWVuLFxuICBnZXRPUyxcbiAgbWVyZ2UsXG4gIGNsZWFyVmlld0V4dGVybmFscyxcbiAgY2xvbmUsXG59IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0cGFyc2VQYXJhbXMgOiByZXF1aXJlKFwiLi9wYXJzZVBhcmFtc1wiKSxcblx0bWFwUHJhbXMgOiByZXF1aXJlKFwiLi9tYXBQYXJhbXNcIiksXG5cdGNhbGxiYWNrTWFwcGVyIDogcmVxdWlyZShcIi4uL2NvbW1vbi9jYWxsYmFja01hcHBlclwiKVxufVxuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG52YXIgbWFwID0ge1xuICB0ZXh0RnJvbUh0bWw6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncycsXG4gICAgfV0sXG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ3NldFRleHQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBiYXNlQWxpZ246IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYidcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICAgIGZuTmFtZTogXCJzZXRCYXNlbGluZUFsaWduZWRcIixcbiAgfSxcbiAgc2hvd0RpdmlkZXJzOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgIH1dLFxuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdzZXRTaG93RGl2aWRlcnMnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImRpdmlkZXJEcmF3YWJsZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXREaXZpZGVyRHJhd2FibGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICB0YWJUZXh0Q29sb3JzOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfSwge1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgICBmbk5hbWU6ICdzZXRUYWJUZXh0Q29sb3JzJyxcbiAgfSxcbiAgXCJzZWxlY3RlZFRhYkluZGljYXRvckhlaWdodFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRTZWxlY3RlZFRhYkluZGljYXRvckhlaWdodCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGZvcmVncm91bmQ6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ3NldENvbG9yJyxcbiAgICBpblZva2VkSW46ICdGT1JFR1JPVU5EJyxcbiAgfSxcbiAgc2VsZWN0ZWRUYWJJbmRpY2F0b3JDb2xvcjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0U2VsZWN0ZWRUYWJJbmRpY2F0b3JDb2xvcicsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGxheW91dFRyYW5zaXRpb246IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ3NldExheW91dFRyYW5zaXRpb24nLFxuICAgIGluVm9rZWRJbjogJ0xBWU9VVF9UUkFOU0lUSU9OJyxcbiAgfSxcblxuICBmb2N1c091dDogeyAvLyBkb2VzbnQgd29ya1xuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdjbGVhckZvY3VzJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgZm9jdXM6IHtcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAncmVxdWVzdEZvY3VzJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcblxuICBmaWxsVmlld3BvcnQ6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYidcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICAgIGZuTmFtZTogXCJzZXRGaWxsVmlld3BvcnRcIixcbiAgfSxcbiAgXCJwcmltaXRpdmVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRQcmltaXRpdmUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sIFxuICBcImN4XCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0Q3gnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwiY3lcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRDeScsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJyYWRpdXNcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRSYWRpdXMnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwiaGV4XCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0Q29sb3InLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwic3R5bGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRTdHlsZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJzd2VlcEFuZ2xlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0U3dlZXBBbmdsZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJzdGFydEFuZ2xlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0U3RhcnRBbmdsZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJzdHJva2VXaWR0aFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFN0cm9rZVdpZHRoJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBzZXREYXRlOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2wnLFxuICAgIH1dLFxuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdzZXREYXRlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgbWluRGF0ZToge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdsJyxcbiAgICB9XSxcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAnc2V0TWluRGF0ZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIG1heERhdGU6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnbCcsXG4gICAgfV0sXG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ3NldE1heERhdGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBjbGlwQ2hpbGRyZW46IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ3NldENsaXBDaGlsZHJlbicsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGFkanVzdFZpZXdCb3VuZHM6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ3NldEFkanVzdFZpZXdCb3VuZHMnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBtYXhMaW5lczoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICB9XSxcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAnc2V0TWF4TGluZXMnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBzaW5nbGVMaW5lOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdzZXRTaW5nbGVMaW5lJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgaGFyZHdhcmU6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaSdcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnaSdcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldExheWVyVHlwZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIHNlbGVjdGVkOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRTZWxlY3RlZCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGN1cnZlOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnLFxuICAgICAgJ2xpbmVhcic6IFwiMFwiXG4gICAgfV0sXG4gICAgZm5OYW1lOiAnc2V0SW50ZXJwb2xhdG9yJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgZm9udEZhbWlseToge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJyxcbiAgICAgIGRvbnRNYXA6IHRydWVcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICAnbm9ybWFsJzogMCxcbiAgICAgICdib2xkJzogMSxcbiAgICAgICdpdGFsaWMnOiAyLFxuICAgICAgJ2JvbGRfaXRhbGljJzogM1xuICAgIH1dLFxuICAgIGZuTmFtZTogJ3NldEZvbnRGYW1pbHknLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIHg6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0WCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gICdicmluZ1RvRnJvbnQnOiB7XG4gICAgdmFsdWVzOiBbXSxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgICBmbk5hbWU6IFwiYnJpbmdUb0Zyb250XCIsXG4gIH0sXG4gICdhYm92ZSc6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBkb250TWFwOiB0cnVlXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgZG9udE1hcDogdHJ1ZVxuICAgIH0sIF0sXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICBmbk5hbWU6IFwiYWRkUnVsZVwiLFxuICB9LFxuICBcImNoZWNrZWRcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0Q2hlY2tlZCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIHk6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0WScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiYmFja2dyb3VuZERyYXdhYmxlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncycsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEJhY2tncm91bmQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBidXR0b25UaW50OiB7XG4gICAgdmFsdWU6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEJ1dHRvblRpbnRMaXN0JyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgdmlzaWJpbGl0eToge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIHZpc2libGU6IDAsXG4gICAgICBpbnZpc2libGU6IDQsXG4gICAgICBnb25lOiA4XG4gICAgfV0sXG4gICAgZm5OYW1lOiAnc2V0VmlzaWJpbGl0eScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwic2NhbGVUeXBlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncycsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFNjYWxlVHlwZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwicHJvZ3Jlc3NDb2xvclwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRJbmRldGVybWluYXRlVGludExpc3QnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImFscGhhXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEFscGhhJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJpbWFnZVVybFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRJbWFnZURyYXdhYmxlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJwbGFjZUhvbGRlclwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRJbWFnZURyYXdhYmxlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJwYWNrYWdlSWNvblwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEltYWdlRHJhd2FibGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwic2Nyb2xsVG9cIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJ1xuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ2knXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3Ntb290aFNjcm9sbFRvJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcImNvcm5lclJhZGlpXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0Q29ybmVyUmFkaWknLFxuICAgIGluVm9rZWRJbjogJ0RSQVdBQkxFJ1xuICB9LFxuICBcImxpbmVTcGFjaW5nXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZHAnXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2YnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldExpbmVTcGFjaW5nJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcInVybFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdsb2FkVXJsJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJ0cmFuc2xhdGlvbllcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0VHJhbnNsYXRpb25ZJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJ0cmFuc2xhdGlvblhcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0VHJhbnNsYXRpb25YJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgdHJhbnNsYXRpb25aOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRUcmFuc2xhdGlvblonLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImRlbGF5XCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnbCcsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFN0YXJ0RGVsYXknLFxuICB9LFxuICBcImR1cmF0aW9uXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnbCcsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldER1cmF0aW9uJyxcbiAgfSxcbiAgXCJwaXZvdFhcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0UGl2b3RYJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJwaXZvdFlcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0UGl2b3RZJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJtaW5XaWR0aFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRNaW5pbXVtV2lkdGgnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcIm1pbkhlaWdodFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRNaW5pbXVtSGVpZ2h0JyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJtYXhXaWR0aFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRNYXhXaWR0aCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwic2hhZG93VGFnXCI6IHtcbiAgICAgIHZhbHVlczogW3tcbiAgICAgICAgICAgIHR5cGU6ICdjcycsXG4gICAgICAgICAgfV0sXG4gICAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgICBmbk5hbWU6ICdzaGFkb3dUYWcnLFxuICAgICAgaW5Wb2tlZEluOiAnVklFVycsXG4gICAgfSxcbiAgXCJhbmRyb2lkU2hhZG93XCI6IHtcbiAgICAgIHZhbHVlczogW3tcbiAgICAgICAgICAgIHR5cGU6ICdjcycsXG4gICAgICAgICAgfV0sXG4gICAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgICBmbk5hbWU6ICdhbmRyb2lkU2hhZG93JyxcbiAgICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICAgIH0sXG4gIFwiZ3JhZGllbnRcIjoge1xuICAgICAgdmFsdWVzOiBbe1xuICAgICAgICB0eXBlOiAnY3MnXG4gICAgICB9XSxcbiAgICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICAgIGZuTmFtZTogJ3NldENvbG9ycycsXG4gICAgICBpblZva2VkSW46ICdEUkFXQUJMRSdcbiAgfSxcbiAgXCJncmFkaWVudEFuZ2xlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0T3JpZW50YXRpb24nLFxuICAgIGluVm9rZWRJbjogJ0RSQVdBQkxFJ1xufSxcbiAgXCJsaW5lSGVpZ2h0XCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZHAnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldExpbmVIZWlnaHQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwibGV0dGVyU3BhY2luZ1wiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRMZXR0ZXJTcGFjaW5nJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJoaW50XCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnY3MnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRIaW50JyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJpbnB1dFR5cGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIHBhc3N3b3JkOiAnMTI5JyxcbiAgICAgIG51bWVyaWM6ICcyJyxcbiAgICAgIG51bWVyaWNQYXNzd29yZDogJzE4JyxcbiAgICAgIG51bWVyaWNXaXRob3V0U3VnZ2VzdGlvbjogJzUyNDI5MScsXG4gICAgICBkaXNhYmxlZDogJzAnLFxuICAgICAgdGV4dDogJzEnLFxuICAgICAgbXVsdGlUZXh0OiAnMydcbiAgICB9XSxcbiAgICBmbk5hbWU6ICdzZXRJbnB1dFR5cGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImlucHV0VHlwZUlcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRJbnB1dFR5cGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInRleHRTaXplXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaSdcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnZicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFRleHRTaXplJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJmb250U2l6ZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdmJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0VGV4dFNpemUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInRleHRJc1NlbGVjdGFibGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0VGV4dElzU2VsZWN0YWJsZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiZm9udFN0eWxlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncycsXG4gICAgfV0sXG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ3NldFR5cGVmYWNlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJ0ZXh0QWxsQ2Fwc1wiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRBbGxDYXBzJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJleHBhbmRcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRFeHBhbmQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwiZm9jdXNhYmxlSW5Ub3VjaE1vZGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRGb2N1c2FibGVJblRvdWNoTW9kZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJkZXNjZW5kYW50Rm9jdXNhYmlsaXR5XCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaSdcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0RGVzY2VuZGFudEZvY3VzYWJpbGl0eScsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJleHBhbmREdXJhdGlvblwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEV4cGFuZER1cmF0aW9uJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcImV4cGFuZFNjcm9sbFBhcmVudFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFNjcm9sbFBhcmVudCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJleHBhbmRBbHBoYVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEV4cGFuZEFscGhhJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcImRlZmF1bHRFeHBhbmRcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXREZWZhdWx0RXhwYW5kJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcInN3eXBlRW5hYmxlZFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFN3eXBlRW5hYmxlZCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgdG9hc3Q6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnY3MnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzaG93VG9hc3QnLFxuICAgIGluVm9rZWRJbjogJ0NPTlRFWFQnLFxuICB9LFxuICBzY2FsZVg6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFNjYWxlWCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIHNjYWxlWToge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0U2NhbGVZJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgaWQ6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldElkJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgZ3Jhdml0eToge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIGNlbnRlcl9ob3Jpem9udGFsOiAxLFxuICAgICAgY2VudGVyX3ZlcnRpY2FsOiAxNixcbiAgICAgIGJvdHRvbSA6IDgwLFxuICAgICAgbGVmdDogODM4ODYxMSxcbiAgICAgIHJpZ2h0OiA4Mzg4NjEzLFxuICAgICAgY2VudGVyOiAxNyxcbiAgICAgIGJvdHRvbTogODAsXG4gICAgICB0b3BfdmVydGljYWw6IDQ4LFxuICAgICAgc3RhcnQ6IDgzODg2MTEsXG4gICAgICBlbmQ6IDgzODg2MTMsXG4gICAgfV0sXG4gICAgZm5OYW1lOiAnc2V0R3Jhdml0eScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIG9yaWVudGF0aW9uOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgaG9yaXpvbnRhbDogMCxcbiAgICAgIHZlcnRpY2FsOiAxLFxuICAgIH1dLFxuICAgIGZuTmFtZTogJ3NldE9yaWVudGF0aW9uJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgdGV4dDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdjcydcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFRleHQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICB3aWR0aDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIG1hdGNoX3BhcmVudDogLTEsXG4gICAgICB3cmFwX2NvbnRlbnQ6IC0yLFxuICAgIH1dLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgY3RyOiB0cnVlLFxuICAgIHZhck5hbWU6ICd2YXJfd2lkdGgnXG4gIH0sXG4gIHdlaWdodDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJyxcbiAgICAgIG1hdGNoX3BhcmVudDogLTEsXG4gICAgICB3cmFwX2NvbnRlbnQ6IC0yLFxuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICB2YXJOYW1lOiAndmFyX3dlaWdodCdcbiAgfSxcbiAgaGVpZ2h0OiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgbWF0Y2hfcGFyZW50OiAtMSxcbiAgICAgIHdyYXBfY29udGVudDogLTIsXG4gICAgfV0sXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICBjdHI6IHRydWUsXG4gICAgdmFyTmFtZTogJ3Zhcl9oZWlnaHQnXG4gIH0sXG4gIGxheW91dF9ncmF2aXR5OiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgYm90dG9tX3JpZ2h0OiAyMSxcbiAgICAgIHRvcDogMzAsXG4gICAgICBib3R0b206IDUwLFxuICAgICAgbGVmdDogMyxcbiAgICAgIHJpZ2h0OiA1LFxuICAgICAgY2VudGVyOiAxNyxcbiAgICAgIGJvdHRvbTogODAsXG4gICAgICBjZW50ZXJfaG9yaXpvbnRhbDogMSxcbiAgICAgIGNlbnRlcl92ZXJ0aWNhbDogMTYsXG4gICAgICBzdGFydDogODM4ODYxMSxcbiAgICAgIGVuZDogODM4ODYxMyxcbiAgICB9XSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIHZhck5hbWU6IFwidmFyX2dyYXZpdHlcIixcbiAgfSxcbiAgbWFyZ2luOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2RwJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdkcCdcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnZHAnXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2RwJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICBmbk5hbWU6IFwic2V0TWFyZ2luc1wiLFxuICB9LFxuICBtYXJnaW5TdGFydDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdkcCdcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgZm5OYW1lOiBcInNldE1hcmdpblN0YXJ0XCIsXG4gIH0sXG4gIG1hcmdpbkVuZDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdkcCdcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgZm5OYW1lOiBcInNldE1hcmdpbkVuZFwiLFxuICB9LFxuICBwYWRkaW5nOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2RwJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdkcCdcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnZHAnXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2RwJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gICAgZm5OYW1lOiBcInNldFBhZGRpbmdSZWxhdGl2ZVwiLFxuICB9LFxuICAnY2VudGVySW5QYXJlbnQnOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgJ3RydWUnOiAxMyxcbiAgICAgICdmYWxzZSc6IDEyMTIxXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgZG9udE1hcDogdHJ1ZVxuICAgIH0sIF0sXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICBmbk5hbWU6IFwiYWRkUnVsZVwiLFxuICB9LFxuICAnY2VudGVySG9yaXpvbnRhbCc6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICAndHJ1ZSc6IDE0LFxuICAgICAgJ2ZhbHNlJzogMTIxMjFcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBkb250TWFwOiB0cnVlXG4gICAgfSwgXSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIGZuTmFtZTogXCJhZGRSdWxlXCIsXG4gIH0sXG4gICdjZW50ZXJWZXJ0aWNhbCc6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICAndHJ1ZSc6IDE1LFxuICAgICAgJ2ZhbHNlJzogMTIxMjFcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBkb250TWFwOiB0cnVlXG4gICAgfSwgXSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIGZuTmFtZTogXCJhZGRSdWxlXCIsXG4gIH0sXG4gIFwiY2hlY2tlZFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRDaGVja2VkJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgJ2FsaWduUGFyZW50Qm90dG9tJzoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgICd0cnVlJzogMTIsXG4gICAgICAnZmFsc2UnOiAxMjEyMVxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIGRvbnRNYXA6IHRydWVcbiAgICB9LCBdLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgZm5OYW1lOiBcImFkZFJ1bGVcIixcbiAgfSxcbiAgJ2FsaWduUGFyZW50VG9wJzoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgICd0cnVlJzogMTAsXG4gICAgICAnZmFsc2UnOiAxMjEyMVxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIGRvbnRNYXA6IHRydWVcbiAgICB9LCBdLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgZm5OYW1lOiBcImFkZFJ1bGVcIixcbiAgfSxcbiAgJ2FsaWduUGFyZW50UmlnaHQnOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgJ3RydWUnOiAxMSxcbiAgICAgICdmYWxzZSc6IDEyMTIxXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgZG9udE1hcDogdHJ1ZVxuICAgIH0sIF0sXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICBmbk5hbWU6IFwiYWRkUnVsZVwiLFxuICB9LFxuICAnYWxpZ25QYXJlbnRMZWZ0Jzoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgICd0cnVlJzogOSxcbiAgICAgICdmYWxzZSc6IDEyMTIxXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgZG9udE1hcDogdHJ1ZVxuICAgIH0sIF0sXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICBmbk5hbWU6IFwiYWRkUnVsZVwiLFxuICB9LFxuICAnbGVmdE9mJzoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgICd0cnVlJzogMCxcbiAgICAgICdmYWxzZSc6IDEyMTIxXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgZG9udE1hcDogdHJ1ZVxuICAgIH0sIF0sXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICBmbk5hbWU6IFwiYWRkUnVsZVwiLFxuICB9LFxuICBjb3JuZXJSYWRpdXM6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZHBmJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgaW5Wb2tlZEluOiAnRFJBV0FCTEUnLFxuICAgIGZuTmFtZTogXCJzZXRDb3JuZXJSYWRpdXNcIixcbiAgfSxcbiAgc3Ryb2tlOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2RwJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgaW5Wb2tlZEluOiAnRFJBV0FCTEUnLFxuICAgIGZuTmFtZTogXCJzZXRTdHJva2VcIixcbiAgfSxcbiAgXCJ0eXBlZmFjZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgJ25vcm1hbCc6IDAsXG4gICAgICAnYm9sZCc6IDEsXG4gICAgICAnaXRhbGljJzogMixcbiAgICAgICdib2xkX2l0YWxpYyc6IDNcbiAgICB9XSxcbiAgICBmbk5hbWU6ICdzZXRUeXBlZmFjZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGJhY2tncm91bmQ6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGluVm9rZWRJbjogJ0RSQVdBQkxFJyxcbiAgICBmbk5hbWU6IFwic2V0Q29sb3JcIixcbiAgfSxcbiAgYmFja2dyb3VuZERyYXdhYmxlOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRCYWNrZ3JvdW5kRHJhd2FibGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBiYWNrZ3JvdW5kQ29sb3I6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICAgIGZuTmFtZTogXCJzZXRCYWNrZ3JvdW5kQ29sb3JcIixcbiAgfSxcbiAgY29sb3I6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFRleHRDb2xvcicsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGhpbnRDb2xvcjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0SGludFRleHRDb2xvcicsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGJ0bkJhY2tncm91bmQ6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnaSdcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGluVm9rZWRJbjogJ01VVEFURUJHJyxcbiAgICBmbk5hbWU6IFwic2V0Q29sb3JGaWx0ZXJcIixcbiAgfSxcbiAgY29sb3JGaWx0ZXI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnaSdcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICAgIGZuTmFtZTogXCJzZXRDb2xvckZpbHRlclwiLFxuICB9LFxuICBidG5Db2xvcjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0VGV4dENvbG9yJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgc2hhZG93TGF5ZXI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZidcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnZidcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnZidcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnaSdcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFNoYWRvd0xheWVyJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgZWxldmF0aW9uOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRFbGV2YXRpb24nLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICByb3RhdGlvblg6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZidcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFJvdGF0aW9uWCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIHJvdGF0aW9uWToge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0Um90YXRpb25ZJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgcm90YXRpb246IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZidcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFJvdGF0aW9uJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgYmFja2dyb3VuZFRpbnQ6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEJhY2tncm91bmRUaW50TGlzdCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwic2Nyb2xsQmFyWFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRIb3Jpem9udGFsU2Nyb2xsQmFyRW5hYmxlZCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwic2Nyb2xsQmFyWVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRWZXJ0aWNhbFNjcm9sbEJhckVuYWJsZWQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImNsaWNrYWJsZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRDbGlja2FibGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImN1cnNvclwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEN1cnNvclZpc2libGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwibG9uZ0NsaWNrYWJsZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldExvbmdDbGlja2FibGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwiZm9jdXNhYmxlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEZvY3VzYWJsZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwic2VsZWN0YWJsZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRCYWNrZ3JvdW5kUmVzb3VyY2UnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInNlbGVjdGFibGVJdGVtXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEJhY2tncm91bmRSZXNvdXJjZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIHZhbHVlczoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0QWRhcHRlcicsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgbWF4U2Vlazoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJ1xuICAgIH1dLFxuICAgIGZuTmFtZTogJ3NldE1heCcsXG4gICAgaW5Wb2tlZEluOiBcIlZJRVdcIixcbiAgICBkb250TWFwOiB0cnVlXG4gIH0sXG4gIGFjY2Vzc2liaWxpdHlIaW50OiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnLFxuICAgIH1dLFxuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdzZXRDb250ZW50RGVzY3JpcHRpb24nLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBpbWVPcHRpb25zOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgIH1dLFxuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdzZXRJbWVPcHRpb25zJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJob3Jpem9udGFsRmFkZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRIb3Jpem9udGFsRmFkaW5nRWRnZUVuYWJsZWQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImZhZGluZ0VkZ2VMZW5ndGhcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRGYWRpbmdFZGdlTGVuZ3RoJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJzaGltbWVyXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0QmFja2dyb3VuZCcsXG4gICAgYWx0ZXJuYXRlRm5OYW1lOiAnc2V0U2hpbW1lcicsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwic2hpbW1lckFjdGl2ZVwiOiB7XG4gICAgdmFsdWVzIDogW10sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3N0YXJ0U2hpbW1lcicsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwic2hpbW1lckluYWN0aXZlXCI6IHtcbiAgICB2YWx1ZXMgOiBbXSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc3RvcFNoaW1tZXInLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInBlYWtIZWlnaHRcIjoge1xuICAgIHZhbHVlcyA6IFt7XG4gICAgICB0eXBlOiAnZHAnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFBlYWtIZWlnaHQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInNoZWV0U3RhdGVcIjoge1xuICAgIHZhbHVlcyA6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBleHBhbmRlZCA6IDMsXG4gICAgICBjb2xsYXBzZWQgOiA0LFxuICAgICAgaGlkZGVuIDogNSxcbiAgICAgIGhhbGZFeHBhbmRlZCA6IDZcbiAgICB9XSxcbiAgICBmbk5hbWU6ICdzZXRTdGF0ZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiaGFsZkV4cGFuZGVkUmF0aW9cIjoge1xuICAgIHZhbHVlcyA6IFt7XG4gICAgICB0eXBlOiAnZidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0SGFsZkV4cGFuZGVkUmF0aW8nLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImhpZGVhYmxlXCI6IHtcbiAgICB2YWx1ZXMgOiBbe1xuICAgICAgdHlwZTogJ2InXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEhpZGVhYmxlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcDtcbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxuXG52YXIgIG1hcCA9IHtcbiAgJ1BBUkFNUyc6IHtcbiAgICAncmVxdWlyZWQnOiAnd2lkdGgsIGhlaWdodCcsXG4gICAgJ3ZpZXdNZXRob2QnOiAnc2V0TGF5b3V0UGFyYW1zLGdldExheW91dFBhcmFtcydcbiAgfSxcbiAgJ0RSQVdBQkxFJzoge1xuICAgICdjdHInOiAnYW5kcm9pZC5ncmFwaGljcy5kcmF3YWJsZS5HcmFkaWVudERyYXdhYmxlLT5uZXcnLFxuICAgICdyZXF1aXJlZCc6ICcnLFxuICAgICd2aWV3TWV0aG9kJzogJ3NldEJhY2tncm91bmQsZ2V0QmFja2dyb3VuZCdcbiAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gbWFwO1xuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG52YXIgbWFwUGFyYW1zID0gcmVxdWlyZSgnLi9tYXBQYXJhbXMnKTtcbnZhciBvYmpNYXAgPSByZXF1aXJlKCcuL29iak1hcCcpO1xudmFyIGNhbGxiYWNrTWFwcGVyICA9IHJlcXVpcmUoXCIuLi9jb21tb24vY2FsbGJhY2tNYXBwZXJcIilcblxudmFyIGdsb2JhbE9iak1hcCA9IHt9O1xudmFyIGNvbW1hbmQgPSBcIlwiO1xudmFyIGVsZW1lbnRUeXBlO1xudmFyIGdldFNldFR5cGU7XG5cbmZ1bmN0aW9uIGlzVVJMKHN0cikge1xuICB0cnkge1xuICAgIHZhciB1cmwgPSBuZXcgVVJMKHN0cik7XG4gICAgcmV0dXJuIChzdHIuaW5kZXhPZihcIi5cIikgIT0gLTEpO1xuICB9IGNhdGNoKGVycikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhdHRhY2hGZWVkYmFjayhjb25maWcsIGtleXMsIGkpIHtcbiAgdmFyIGZlZWRiYWNrRm4gPSBmdW5jdGlvbigpIHt9O1xuXG4gIGlmICh0eXBlb2YgY29uZmlnLmZlZWRiYWNrICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgaWYgKGNvbmZpZy5mZWVkYmFjayA9PSBcInRydWVcIikge1xuICAgICAgY29uZmlnLmZlZWRiYWNrID0gY2FsbGJhY2tNYXBwZXIubWFwKGZlZWRiYWNrRm4pO1xuICAgICAgd2luZG93Ll9fQUxMX09OQ0xJQ0tTLnB1c2goY29uZmlnLmZlZWRiYWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY29uZmlnLm9uQ2xpY2spIHtcbiAgICBjb25maWcuZmVlZGJhY2sgPSBjYWxsYmFja01hcHBlci5tYXAoZmVlZGJhY2tGbik7XG4gICAgd2luZG93Ll9fQUxMX09OQ0xJQ0tTLnB1c2goY29uZmlnLmZlZWRiYWNrKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRDb25maWdHcm91cHMoY29uZmlnKSB7XG4gIHZhciBncm91cHMgPSB7fTtcbiAgdmFyIG9ialR5cGU7XG4gIHZhciBpc0FuaW1hdGlvbjtcbiAgdmFyIHdpZHRoRm91bmQgPSAwO1xuICB2YXIgaGVpZ2h0Rm91bmQgPSAwO1xuICBsZXQgcGFkZGluZ1ZhbCA9IGNvbmZpZ1tcInBhZGRpbmdcIl07XG4gIGlmIChjb25maWcuc3Ryb2tlKVxuICAgIGRlbGV0ZSBjb25maWcucGFkZGluZztcbiAgaWYgKGNvbmZpZy5tYXJnaW4pIHtcbiAgICBsZXQgbWFyZ2luID0gY29uZmlnLm1hcmdpbi5zcGxpdCgnLCcpLm1hcChhID0+IGEqMSk7XG4gICAgY29uZmlnLm1hcmdpblN0YXJ0ID0gbWFyZ2luWzBdICsgJyc7XG4gICAgY29uZmlnLm1hcmdpbkVuZCA9IG1hcmdpblsyXSArICcnO1xuICB9XG4gIHZhciBrZXlzID0gIE9iamVjdC5rZXlzKGNvbmZpZyk7XG4gIHZhciBwcm94eUZuTmFtZTtcbiAgIGZvciAodmFyIGkgPSAwOyBpPGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBhdHRhY2hGZWVkYmFjayhjb25maWcsIGtleXMsIGkpO1xuXG4gICAgaWYgKHR5cGVvZiBjb25maWdba2V5c1tpXV0gPT0gXCJ1bmRlZmluZWRcIiB8fCBjb25maWdba2V5c1tpXV0gPT0gbnVsbCkge1xuICAgICAgZGVsZXRlIGNvbmZpZ1trZXlzW2ldXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWdba2V5c1tpXV0gPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBpZiAoa2V5c1tpXSA9PSBcImFmdGVyUmVuZGVyXCIgJiYgdHlwZW9mIHdpbmRvdy5yZW1vdmVBZnRlclJlbmRlclByb3AgPT0gXCJmdW5jdGlvblwiKXtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGlmIHRoZSBmdW5jdGlvbiBpcyBwcmVzZW50IHRoZW4gd2UgYXJlIGhhbmRsaW5nIGFmdGVyUmVuZGVyXG4gICAgICAgICAqIHByb3AgaW4gSlMgaXRzZWxmXG4gICAgICAgICAqL1xuICAgICAgICB3aW5kb3cucmVtb3ZlQWZ0ZXJSZW5kZXJQcm9wKGNvbmZpZ1tcImlkXCJdLCBjb25maWdbXCJhZnRlclJlbmRlclwiXSk7XG4gICAgICAgIGRlbGV0ZSBjb25maWdbXCJhZnRlclJlbmRlclwiXTtcbiAgICAgIH1lbHNle1xuICAgICAgICBjb25maWdba2V5c1tpXV0gPSBjYWxsYmFja01hcHBlci5tYXAoY29uZmlnW2tleXNbaV1dKTtcblxuICAgICAgICBpZiAoa2V5c1tpXSA9PSBcIm9uQ2xpY2tcIil7XG4gICAgICAgICAgd2luZG93Ll9fRk5fTUFQW2NvbmZpZ1trZXlzW2ldXV0gPSBjb25maWcudGV4dCB8fCBjb25maWcuaWQgfHwgXCJcIjtcblxuICAgICAgICAgIGlmKCFjb25maWcuYWxsb3dNdWx0aXBsZUNsaWNrcyB8fCBjb25maWcuYWxsb3dNdWx0aXBsZUNsaWNrPT1cImZhbHNlXCIpe1xuICAgICAgICAgICAgd2luZG93Ll9fVEhST1RURUxFRF9BQ1RJT05TLnB1c2goY29uZmlnW2tleXNbaV1dKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChrZXlzW2ldLmluZGV4T2YoJ18nKSAmJiBrZXlzW2ldLnNwbGl0KCdfJylbMF0gPT0gJ2EnKSB7XG4gICAgICAgIG9ialR5cGUgPSBtYXBQYXJhbXNba2V5c1tpXS5zcGxpdCgnXycpWzFdXTtcbiAgICAgICAgaXNBbmltYXRpb24gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqVHlwZSA9IG1hcFBhcmFtc1trZXlzW2ldXTtcbiAgICAgICAgaXNBbmltYXRpb24gPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGtleXNbaV0gPT0gXCJzdHJva2VcIikge1xuICAgICAgICBsZXQgcGFkZGluZyA9IFswLDAsMCwwXTtcblxuICAgICAgICBpZiAocGFkZGluZ1ZhbClcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ1ZhbC5zcGxpdCgnLCcpLm1hcChhID0+IGEqMSk7XG5cbiAgICAgICAgbGV0IHN0cm9rZVZhbHVlID0gY29uZmlnW1wic3Ryb2tlXCJdLnNwbGl0KCcsJylbMF0gKiAxO1xuICAgICAgICBwYWRkaW5nID0gcGFkZGluZy5tYXAoZGltID0+IGRpbSArIHN0cm9rZVZhbHVlKTtcbiAgICAgICAgY29uZmlnW1wicGFkZGluZ1wiXSA9IHBhZGRpbmcuam9pbignLCcpO1xuICAgICAgICBrZXlzLnB1c2goXCJwYWRkaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAob2JqVHlwZSkge1xuICAgICAgICBpZiAoaXNBbmltYXRpb24pe1xuICAgICAgICAgIGlmICghZ3JvdXBzWydBTklNQVRJT04nXSlcbiAgICAgICAgICBncm91cHNbJ0FOSU1BVElPTiddID0gW107XG5cblxuICAgICAgICAgIGdyb3Vwc1snQU5JTUFUSU9OJ10ucHVzaCh7a2V5OiBrZXlzW2ldLnNwbGl0KCdfJylbMV0sIHZhbHVlOiBjb25maWdba2V5c1tpXV19KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICghZ3JvdXBzW29ialR5cGUuaW5Wb2tlZEluXSlcbiAgICAgICAgICBncm91cHNbb2JqVHlwZS5pblZva2VkSW5dID0gW107XG5cbiAgICAgICAgICBpZiAoa2V5c1tpXSA9PSBcIndpZHRoXCIpXG4gICAgICAgICAgd2lkdGhGb3VuZCArKztcbiAgICAgICAgICBpZiAoa2V5c1tpXSA9PSBcImhlaWdodFwiKVxuICAgICAgICAgIGhlaWdodEZvdW5kICsrO1xuXG4gICAgICAgICAgZ3JvdXBzW29ialR5cGUuaW5Wb2tlZEluXS5wdXNoKHtrZXk6IGtleXNbaV0sIHZhbHVlOiBjb25maWdba2V5c1tpXV19KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleXNbaV0hPT1cInBhdHRlcm5cIiAmJiBrZXlzW2ldICE9PSBcInJvb3RcIiAmJiBrZXlzW2ldICE9PSBcImlkXCIgJiYga2V5c1tpXSE9PSBcIl9fZmlsZW5hbWVcIikge1xuICAgICAgICAgIGRlbGV0ZSBjb25maWdba2V5c1tpXV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoZ2V0U2V0VHlwZSA9PSBcInNldFwiKSB7XG4gICAgaWYgKCFncm91cHMuUEFSQU1TKVxuICAgIGdyb3Vwcy5QQVJBTVMgPSBbXTtcblxuICAgIGlmICghd2lkdGhGb3VuZClcbiAgICBncm91cHMuUEFSQU1TLnB1c2goe2tleTogXCJ3aWR0aFwiLCB2YWx1ZTogJ3dyYXBfY29udGVudCd9KTtcbiAgICBpZiAoIWhlaWdodEZvdW5kKVxuICAgIGdyb3Vwcy5QQVJBTVMucHVzaCh7a2V5OiBcImhlaWdodFwiLCB2YWx1ZTogJ3dyYXBfY29udGVudCd9KTtcbiAgfVxuXG4gIHJldHVybiBncm91cHM7XG59XG5cbmZ1bmN0aW9uIGdldEN0cih2aWV3R3JvdXApIHtcbiAgdmFyIHZpZXdHcm91cE1hcCA9ICB7XG4gICAgJ2xpbmVhckxheW91dCc6ICdhbmRyb2lkLndpZGdldC5MaW5lYXJMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdjb29yZGluYXRvckxheW91dCc6ICdhbmRyb2lkeC5jb29yZGluYXRvcmxheW91dC53aWRnZXQuQ29vcmRpbmF0b3JMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdzY3JvbGxWaWV3JzogJ2FuZHJvaWQud2lkZ2V0LkxpbmVhckxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ2hvcml6b250YWxTY3JvbGxWaWV3JzogJ2FuZHJvaWQud2lkZ2V0LkxpbmVhckxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ3JlbGF0aXZlTGF5b3V0JzogJ2FuZHJvaWQud2lkZ2V0LlJlbGF0aXZlTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAnZnJhbWVMYXlvdXQnOiAnYW5kcm9pZC53aWRnZXQuRnJhbWVMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICd0b29sYmFyJzogJ2FuZHJvaWQuc3VwcG9ydC52Ny53aWRnZXQuVG9vbGJhciRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ2NvbGxhcHNpbmdUb29sYmFyTGF5b3V0JzogJ2FuZHJvaWR4LmNvb3JkaW5hdG9ybGF5b3V0LndpZGdldC5Db29yZGluYXRvckxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ2FwcEJhckxheW91dCc6ICdhbmRyb2lkLnN1cHBvcnQuZGVzaWduLndpZGdldC5BcHBCYXJMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICd2aWV3JzogJ2FuZHJvaWQud2lkZ2V0LkxpbmVhckxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ3RhYkxheW91dCc6ICdhbmRyb2lkLndpZGdldC5MaW5lYXJMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICd2aWV3UGFnZXInOiAnYW5kcm9pZC5zdXBwb3J0LnY0LnZpZXcuVmlld1BhZ2VyJExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAnbGlzdFZpZXcnOiAnYW5kcm9pZC53aWRnZXQuTGluZWFyTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAnZXhwYW5kYWJsZUxpc3RWaWV3JzogJ2FuZHJvaWQud2lkZ2V0LkxpbmVhckxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ3JlY3ljbGVyVmlldyc6ICdhbmRyb2lkLnN1cHBvcnQudjcud2lkZ2V0LlJlY3ljbGVyVmlldyRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ3JhdGluZ0Jhcic6ICdhbmRyb2lkLndpZGdldC5MaW5lYXJMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdhY2NvcmRpb25MYXlvdXQnOiAnYW5kcm9pZC53aWRnZXQuRnJhbWVMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdzd3lwZUxheW91dCc6ICdhbmRyb2lkLndpZGdldC5GcmFtZUxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ3N3eXBlU2Nyb2xsJzogJ2FuZHJvaWQud2lkZ2V0LkxpbmVhckxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgXCJzaGltbWVyRnJhbWVMYXlvdXRcIjogXCJhbmRyb2lkLndpZGdldC5GcmFtZUxheW91dCRMYXlvdXRQYXJhbXMtPm5ld1wiLFxuICAgIFwiYm90dG9tU2hlZXRMYXlvdXRcIjogJ2FuZHJvaWQud2lkZ2V0LkZyYW1lTGF5b3V0JExheW91dFBhcmFtcy0+bmV3J1xuICB9O1xuXG4gIGlmKCF2aWV3R3JvdXBNYXBbdmlld0dyb3VwXSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHN1Y2ggdmlldyBncm91cCBmb3VuZCA6IFwiICsgdmlld0dyb3VwKTtcbiAgfVxuXG4gIHJldHVybiAgdmlld0dyb3VwTWFwW3ZpZXdHcm91cF07XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVNwZWNpYWxDaGFycyh2YWx1ZSkge1xuICB2YWx1ZSA9ICB2YWx1ZS5pbmRleE9mKCcsJyk+LTE/dmFsdWUucmVwbGFjZSgvXFwsL2csICdcXFxcXFxcXCwnKTp2YWx1ZTtcbiAgdmFsdWUgPSAgdmFsdWUuaW5kZXhPZignOicpPi0xP3ZhbHVlLnJlcGxhY2UoL1xcOi9nLCAnXFxcXFxcXFw6Jyk6dmFsdWU7XG4gIHZhbHVlID0gIHZhbHVlLmluZGV4T2YoJzonKT4tMT92YWx1ZS5yZXBsYWNlKC9cXD0vZywgJ1xcXFxcXFxcPScpOnZhbHVlO1xuICB2YWx1ZSA9ICB2YWx1ZS5pbmRleE9mKCc7Jyk+LTE/dmFsdWUucmVwbGFjZSgvXFw7L2csICdcXFxcXFxcXDsnKTp2YWx1ZTtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEFyZ3MoYXR0cnMsIG9iaikge1xuICBpZiAoIW9iai52YWx1ZXMpXG4gIHJldHVybiBcIlwiO1xuXG4gIHZhciBhcmdzID0gXCJcIjtcbiAgdmFyIHZhbHVlID0gKGF0dHJzLmtleSA9PSBcInRleHRcIiB8fCBhdHRycy5rZXkgPT0gXCJoaW50XCIpXG4gICAgP2F0dHJzLnZhbHVlOmF0dHJzLnZhbHVlLnJlcGxhY2UoLyAvZywnJyk7XG5cbiAgdmFyIGluY29taW5nQXJncztcbiAgaWYgKGF0dHJzLmtleSA9PSBcInRleHRcIiB8fCBhdHRycy5rZXkgPT0gXCJoaW50XCIpIHtcbiAgICBpbmNvbWluZ0FyZ3MgPSBbXTtcbiAgICBpbmNvbWluZ0FyZ3MucHVzaChoYW5kbGVTcGVjaWFsQ2hhcnModmFsdWUpKTtcblxuICB9IGVsc2Uge1xuICAgIGluY29taW5nQXJncyA9IHZhbHVlLnNwbGl0KCcsJyk7XG4gIH1cblxuICBmb3IgICh2YXIgaSA9MCA7aTxvYmoudmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgYXJncyArPSAgb2JqLnZhbHVlc1tpXS50eXBlICsgJ18nO1xuXG4gICAgaWYgKG9iai5kb250TWFwKVxuICAgIGFyZ3MgKz0gaW5jb21pbmdBcmdzW2ldICsgJywnO1xuICAgIGVsc2UgIHtcbiAgICAgIGlmIChvYmoudmFsdWVzW2ldLmRvbnRNYXApIHtcbiAgICAgICAgYXJncyArPSBpbmNvbWluZ0FyZ3NbaV0gKyAnLCc7XG4gICAgICB9IGVsc2UgaWYgKGF0dHJzLmtleSA9PSBcIndpZHRoXCIgfHwgYXR0cnMua2V5ID09IFwiaGVpZ2h0XCIpIHtcbiAgICAgICAgaWYgKCFpc05hTihpbmNvbWluZ0FyZ3NbaV0qMSkpXG4gICAgICAgIGFyZ3MgPSAnZHBfJyArIGluY29taW5nQXJnc1tpXSArICcsJztcbiAgICAgICAgZWxzZVxuICAgICAgICBhcmdzICs9IG9iai52YWx1ZXNbaV1baW5jb21pbmdBcmdzW2ldXSArICcsJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFyZ3MgKz0gb2JqLnZhbHVlc1tpXVtpbmNvbWluZ0FyZ3NbaV1dICsgJywnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcmdzLnN1YnN0cmluZygwLCBhcmdzLmxlbmd0aC0xKTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZUN0cihhdHRycywgYmVsb25nc1RvKSB7XG4gIHZhciBvYmogPSBvYmpNYXBbYmVsb25nc1RvXTtcbiAgdmFyIGN0ciA9IGdsb2JhbE9iak1hcFtiZWxvbmdzVG9dLmN0cjtcbiAgdmFyIHJlcUF0dHJzO1xuXG4gIGlmIChnZXRTZXRUeXBlID09IFwiZ2V0XCIgJiYgKGJlbG9uZ3NUbyA9PSBcIkFOSU1BVElPTlwiIHx8IGJlbG9uZ3NUbyA9PSBcIkRSQVdBQkxFXCIgfHwgYmVsb25nc1RvID09IFwiUEFSQU1TXCIpKSB7XG4gICAgcmV0dXJuIGN0cjtcbiAgfVxuXG4gIGlmICghb2JqIHx8ICFvYmoucmVxdWlyZWQpXG4gIHJldHVybiBjdHJcblxuICByZXFBdHRycyA9IG9iai5yZXF1aXJlZC5zcGxpdCgnLCcpO1xuXG4gIGN0ciArPSAnOic7XG5cbiAgZm9yICh2YXIgaSA9MDsgaTxyZXFBdHRycy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAodmFyIGo9MDsgajxhdHRycy5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKHJlcUF0dHJzW2ldLnRyaW0oKSA9PSBhdHRyc1tqXS5rZXkpICB7XG4gICAgICAgIGN0ciArPSBhcHBlbmRBcmdzKGF0dHJzW2pdLCBtYXBQYXJhbXNbcmVxQXR0cnNbaV0udHJpbSgpXSkgKyAnLCc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGN0ci5zdWJzdHJpbmcoMCwgY3RyLmxlbmd0aCAtIDEpO1xufVxuXG5mdW5jdGlvbiBwYXJzZUh0bWwodGV4dCkge1xuICByZXR1cm4gJ3NldF9odG1sPWFuZHJvaWQudGV4dC5IdG1sLT5mcm9tSHRtbDpzXycgKyB0ZXh0ICsgJzsnO1xufVxuXG5mdW5jdGlvbiBwYXJzZUNvbG9yKGNvbG9yLCBzZXR0ZXJOYW1lKSB7XG4gIGlmICghc2V0dGVyTmFtZSlcbiAgc2V0dGVyTmFtZSA9ICdzZXRfY29sb3JJbnQnO1xuICByZXR1cm4gc2V0dGVyTmFtZSArICc9YW5kcm9pZC5ncmFwaGljcy5Db2xvci0+cGFyc2VDb2xvcjpzXycgKyBjb2xvciArICc7Jztcbn1cblxuZnVuY3Rpb24gbWFzaFRoaXMoYXR0cnMsIG9iaiwgYmVsb25nc1RvLCB0cmFuc2Zvcm1GbiwgYWxsUHJvcHMsIHR5cGUpIHtcbiAgaWYgKGdldFNldFR5cGUgPT0gXCJnZXRcIiAmJiAoYXR0cnMua2V5ID09IFwid2lkdGhcIiB8fCBhdHRycy5rZXkgPT0gXCJoZWlnaHRcIikpIHtcbiAgICAvLyBnZXQgY2FzZSBpLmUgZHVyaW5nIHBhdGNoXG4gICAgaWYoIWlzTmFOKGF0dHJzLnZhbHVlICogMSkpIHtcbiAgICAgIHJldHVybiAnZ2V0X1BBUkFNUy0+JyArIG9iai52YXJOYW1lICsgJzpkcF8nICsgYXR0cnMudmFsdWUgKyAnO2dldF92aWV3LT5zZXRMYXlvdXRQYXJhbXM6Z2V0X1BBUkFNUyAnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ2dldF9QQVJBTVMtPicgKyBvYmoudmFyTmFtZSArICc6aV8nICsgbWFwUGFyYW1zW2F0dHJzLmtleV0udmFsdWVzWzBdW2F0dHJzLnZhbHVlXSArICc7Z2V0X3ZpZXctPnNldExheW91dFBhcmFtczpnZXRfUEFSQU1TICc7XG4gICAgfVxuICB9IGVsc2UgaWYoYXR0cnMua2V5ID09IFwid2lkdGhcIiB8fCBhdHRycy5rZXkgPT0gXCJoZWlnaHRcIikge1xuICAgIC8vIHNldCBjYXNlIGkuZSBmaXJzdCByZW5kZXJcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB2YXIgYmVmb3JlQ21kID0gXCJcIjtcbiAgdmFyIGFmdGVyQ21kID0gXCJcIjtcbiAgdmFyIHByZVBlbmQgPSAnJztcbiAgdmFyIGN1cnJUcmFuc1ZhbDtcbiAgdmFyIGNvbG9yO1xuICB2YXIgYXJyID0gW107XG4gIHZhciByZXM7XG4gIHZhciB2YWx1ZXM7XG5cbiAgdmFyIGtleVdvcmQ7XG4gIHZhciBfY21kO1xuICB2YXIgZmluYWxDbWQ7XG4gIHZhciBjb2xvcjE7XG4gIGF0dHJzLnZhbHVlICs9ICcnO1xuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJ0ZXh0U2l6ZVwiKSB7XG4gICAgYXR0cnMudmFsdWUgPSBcIjEsXCIgKyAoYXR0cnMudmFsdWUgLSAxKTtcbiAgfVxuXG4vL3RvZG86dGFiVGV4dENvbG9yc1xuICBpZiAoYXR0cnMua2V5ID09IFwiZm9yZWdyb3VuZFwiIHx8XG4gICAgYXR0cnMua2V5ID09IFwidGFiVGV4dENvbG9yc1wiIHx8XG4gICAgYXR0cnMua2V5ID09IFwic2VsZWN0ZWRUYWJJbmRpY2F0b3JDb2xvclwiICB8fFxuICAgIGF0dHJzLmtleSA9PSBcImNvbG9yXCIgfHxcbiAgICBhdHRycy5rZXkgPT0gXCJiYWNrZ3JvdW5kXCIgfHxcbiAgICBhdHRycy5rZXkgPT0gXCJzdHJva2VcIiB8fFxuICAgIGF0dHJzLmtleSA9PSBcImJ0bkNvbG9yXCIpIHtcblxuICAgIGlmIChhdHRycy5rZXkgPT0gXCJzdHJva2VcIikge1xuICAgICAgY29sb3IgPSBhdHRycy52YWx1ZS5zcGxpdCgnLCcpWzFdO1xuICAgICAgY3VyclRyYW5zVmFsID0gYXBwZW5kQXJncyhhdHRycyxvYmopLnNwbGl0KCcsJylbMF0gKyAnLGdldF9jb2xvckludCc7XG4gICAgfSBlbHNlIGlmKGF0dHJzLmtleSA9PSBcInRhYlRleHRDb2xvcnNcIil7XG4gICAgICBjb2xvciA9IGF0dHJzLnZhbHVlLnNwbGl0KCcsJylbMF07XG4gICAgICBjb2xvcjEgPSBhdHRycy52YWx1ZS5zcGxpdCgnLCcpWzFdO1xuICAgICAgY3VyclRyYW5zVmFsID0gJ2dldF9jb2xvckludDEnICsgJyxnZXRfY29sb3JJbnQnO1xuICAgIH1lbHNlIHtcbiAgICAgIGNvbG9yID0gYXR0cnMudmFsdWU7XG4gICAgICBjdXJyVHJhbnNWYWwgPSAnZ2V0X2NvbG9ySW50JztcbiAgICB9XG5cbiAgICBpZihhdHRycy5rZXkgPT0gXCJ0YWJUZXh0Q29sb3JzXCIpe1xuICAgICAgcHJlUGVuZCA9IHBhcnNlQ29sb3IoY29sb3IsXCJzZXRfY29sb3JJbnQxXCIpKycsJytwYXJzZUNvbG9yKGNvbG9yMSk7XG4gICAgfWVsc2V7XG4gICAgICBwcmVQZW5kID0gcGFyc2VDb2xvcihjb2xvcik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcImZvbnRTdHlsZVwiKSB7XG4gICAgaWYoaXNVUkwoYXR0cnMudmFsdWUpKSB7XG4gICAgICBpZih0eXBlb2Ygd2luZG93Ll9fUFJPWFlfRk4gPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB3aW5kb3cuX19QUk9YWV9GTiA9IHt9O1xuICAgICAgfVxuICAgICAgdmFyIGZvbnQgPSBhdHRycy52YWx1ZS5zdWJzdHIoYXR0cnMudmFsdWUubGFzdEluZGV4T2YoJy8nKSArIDEpXG5cbiAgICAgIHZhciBmaWxlUHJlc2VudCA9ICh0eXBlb2YgSkJyaWRnZS5pc0ZpbGVQcmVzZW50ID09IFwiZnVuY3Rpb25cIikgJiYgSkJyaWRnZS5pc0ZpbGVQcmVzZW50KGZvbnQpO1xuICAgICAgaWYgKCFmaWxlUHJlc2VudCkge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBjYWxsYmFja01hcHBlci5tYXAoZnVuY3Rpb24gKGlzTmV3LCB1cmwsIGZpbGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgaWQgPSBhbGxQcm9wcy5maW5kKGEgPT4gYS5rZXkgPT09IFwiaWRcIik7XG4gICAgICAgICAgaWYgKCFpZCkgcmV0dXJuO1xuICAgICAgICAgIHZhciB1cmxTZXRDb21tYW5kcyA9IFwic2V0X2RpcmVjdG9yeT1jdHgtPmdldERpcjpzX2p1c3BheSxpXzA7XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldF9yZXNvbHZlZEZpbGU9amF2YS5pby5GaWxlLT5uZXc6Z2V0X2RpcmVjdG9yeSxzX1wiICsgZmlsZU5hbWUgKyBcIjtcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0X3Jlc29sdmVkUGF0aD1nZXRfcmVzb2x2ZWRGaWxlLT50b1N0cmluZztcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0X2Rmb250PWFuZHJvaWQuZ3JhcGhpY3MuVHlwZWZhY2UtPmNyZWF0ZUZyb21GaWxlOmdldF9yZXNvbHZlZFBhdGg7XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldF90ZXh0Vj1jdHgtPmZpbmRWaWV3QnlJZDppX1wiICsgaWQudmFsdWUgKyBcIjtcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0X3RleHRWLT5zZXRUeXBlZmFjZTpnZXRfZGZvbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbmRyb2lkLnJ1bkluVUkodXJsU2V0Q29tbWFuZHMgLG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgSkJyaWRnZS5yZW5ld0ZpbGUoYXR0cnMudmFsdWUsIGZvbnQsIGNhbGxiYWNrKTtcbiAgICAgIH0gZWxzZSBpZihKQnJpZGdlLmdldEZpbGVQYXRoKSB7XG4gICAgICAgIHByZVBlbmQgPSBcInNldF9kaXJlY3Rvcnk9Y3R4LT5nZXREaXI6c19qdXNwYXksaV8wO1wiICtcbiAgICAgICAgICAgICAgICAgICAgXCJzZXRfcmVzb2x2ZWRGaWxlPWphdmEuaW8uRmlsZS0+bmV3OmdldF9kaXJlY3Rvcnksc19cIiArIEpCcmlkZ2UuZ2V0RmlsZVBhdGgoZm9udCkgKyBcIjtcIiArXG4gICAgICAgICAgICAgICAgICAgIFwic2V0X3Jlc29sdmVkUGF0aD1nZXRfcmVzb2x2ZWRGaWxlLT50b1N0cmluZztcIiArXG4gICAgICAgICAgICAgICAgICAgIFwic2V0X2Rmb250PWFuZHJvaWQuZ3JhcGhpY3MuVHlwZWZhY2UtPmNyZWF0ZUZyb21GaWxlOmdldF9yZXNvbHZlZFBhdGg7XCJcbiAgICAgICAgY3VyclRyYW5zVmFsID0gXCJnZXRfZGZvbnRcIjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcHJlUGVuZCA9IFwic2V0X2FzdD1jdHgtPmdldEFzc2V0cztzZXRfdHlwZT1hbmRyb2lkLmdyYXBoaWNzLlR5cGVmYWNlLT5jcmVhdGVGcm9tQXNzZXQ6Z2V0X2FzdCxzX2ZvbnRzXFwvXCIgKyBhdHRycy52YWx1ZSArIFwiXFwudHRmO1wiO1xuICAgICAgY3VyclRyYW5zVmFsID0gXCJnZXRfdHlwZVwiO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJncmFkaWVudEFuZ2xlXCIpIHtcbiAgICBvcmllbnRhdGlvbiArPSBcInNldF9kcj10aGlzLT5nZXRCYWNrZ3JvdW5kO3NldF9vPWFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuR3JhZGllbnREcmF3YWJsZSRPcmllbnRhdGlvbi0+dmFsdWVPZjpzX1wiK2F0dHJzLnZhbHVlK1wiO1wiXG4gICAgcHJlUGVuZCArPSBvcmllbnRhdGlvbjtcbiAgICBjdXJyVHJhbnNWYWwgPSBcImdldF9vXCJcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJncmFkaWVudFwiKSB7XG4gICAgdmFyIGdyYWRpZW50T2JqID0gSlNPTi5wYXJzZShhdHRycy52YWx1ZSk7XG4gICAgdmFyIG9yaWVudGF0aW9uID0gXCJcIjtcbiAgICBpZiAoZ3JhZGllbnRPYmoudHlwZSA9PSBcImxpbmVhclwiKSB7XG4gICAgfSBlbHNlIHt9XG5cbiAgICB2YXIgaW50Q2xhc3MgPSBcInNldF9jYz1qYXZhLmxhbmcuQ2xhc3MtPmZvck5hbWU6c19qYXZhLmxhbmcuSW50ZWdlcjtcIjtcbiAgICB2YXIgYXJyTGlzdCA9IFwic2V0X2Fycj1qYXZhLnV0aWwuQXJyYXlMaXN0LT5uZXc7XCI7XG5cbiAgICBwcmVQZW5kICs9IGdyYWRpZW50T2JqLnZhbHVlcy5tYXAoZnVuY3Rpb24gKGNvbG9yLCBpKSB7XG4gICAgICByZXR1cm4gcGFyc2VDb2xvcihjb2xvciwgXCJzZXRfY29sb3JcIiArIGkpO1xuICAgIH0pLmpvaW4oXCJcIik7XG5cbiAgICBhcnJMaXN0ICs9IGdyYWRpZW50T2JqLnZhbHVlcy5tYXAoZnVuY3Rpb24gKGNvbG9yLCBpKSB7XG4gICAgICByZXR1cm4gXCJnZXRfYXJyLT5hZGQ6Z2V0X2NvbG9yXCIgKyBpO1xuICAgIH0pLmpvaW4oXCI7XCIpO1xuXG4gICAgcHJlUGVuZCArPSBcInNldF9nZD1hbmRyb2lkLmdyYXBoaWNzLmRyYXdhYmxlLkdyYWRpZW50RHJhd2FibGUtPm5ldztcIjtcbiAgICBwcmVQZW5kICs9IGFyckxpc3QgKyBcIjtcIjtcbiAgICBwcmVQZW5kICs9IFwic2V0X2M9amF2YS5sYW5nLkNsYXNzLT5mb3JOYW1lOnNfamF2YS5sYW5nLkludGVnZXI7XCI7XG4gICAgcHJlUGVuZCArPSBcImluZmwtPmNvbnZlcnRBbmRTdG9yZUFycmF5OmdldF9hcnIsZ2V0X2Msc19wQXJyLGJfdHJ1ZTtcIjtcbiAgICBjdXJyVHJhbnNWYWwgPSBcImdldF9wQXJyXCI7XG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwiY29ybmVyUmFkaWlcIikge1xuICAgIHZhciBjb3JuZXJSYWRpaXMgPSBhdHRycy52YWx1ZS5zcGxpdCgnLCcpO1xuICAgIHZhciBjb3JuZXJSYWRpdXMgPSBjb3JuZXJSYWRpaXMuc3BsaWNlKDAsMSk7XG4gICAgdmFyIGNvcm5lclJhZGlpQXJyYXkgPSBbXTtcbiAgICBmb3IodmFyIGkgPSAwOyBpPCBjb3JuZXJSYWRpaXMubGVuZ3RoOysraSl7XG4gICAgICBjb3JuZXJSYWRpaUFycmF5LnB1c2goKGNvcm5lclJhZGlpc1tpXSpjb3JuZXJSYWRpdXMpK1wiXCIpO1xuICAgICAgY29ybmVyUmFkaWlBcnJheS5wdXNoKChjb3JuZXJSYWRpaXNbaV0qY29ybmVyUmFkaXVzKStcIlwiKTtcbiAgICB9XG4gICAgdmFyIGFyckxpc3QgPSBcInNldF9hcnI9amF2YS51dGlsLkFycmF5TGlzdC0+bmV3O1wiO1xuICAgIHZhciBmbG9hdEFycmF5ID0gY29ybmVyUmFkaWlBcnJheS5tYXAoZnVuY3Rpb24odmFsLGkpe3JldHVybiBcInNldF9jb3JuZXJSYWRpdXM9amF2YS5sYW5nLkZsb2F0LT5uZXc6ZHBmX1wiKyB2YWwgKyBcIjtnZXRfYXJyLT5hZGQ6Z2V0X2Nvcm5lclJhZGl1cztcIn0pO1xuICAgIHByZVBlbmQgKz0gYXJyTGlzdCArIFwiO1wiO1xuICAgIHByZVBlbmQgKz0gXCJzZXRfYz1qYXZhLmxhbmcuQ2xhc3MtPmZvck5hbWU6c19qYXZhLmxhbmcuRmxvYXQ7XCI7XG4gICAgcHJlUGVuZCArPSBmbG9hdEFycmF5LmpvaW4oXCJcIik7XG4gICAgcHJlUGVuZCArPSBcImluZmwtPmNvbnZlcnRBbmRTdG9yZUFycmF5OmdldF9hcnIsZ2V0X2Msc19wQXJyLGJfdHJ1ZTtcIjtcbiAgICBjdXJyVHJhbnNWYWwgPSBcImdldF9wQXJyXCI7XG4gIH1cblxuICAvLyBzaGFkb3dUYWcgOiBsZXZlbCx0YWdcbiAgaWYgKGF0dHJzLmtleSA9PSBcInNoYWRvd1RhZ1wiKSB7XG4gICAgdmFyIGFyciA9IGF0dHJzLnZhbHVlLnNwbGl0KFwiLFwiKTtcbiAgICB2YXIgdGFnID0gYXJyWzFdO1xuXHRcdGNvbnNvbGUud2FybihcIllPT09PIFNoYWRvd1wiLCBhcnIpO1xuXG4gICAgaWYgKCF3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ10pIHtcbiAgICAgIHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXSA9XG4gICAgICAgIHsgbGV2ZWwgOiBwYXJzZUludChhcnJbMF0pLFxuICAgICAgICAgIHZpZXdJZCA6IFtdLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvciA6IFtdLFxuICAgICAgICAgIGJsdXJWYWx1ZSA6IFtdLFxuICAgICAgICAgIHNoYWRvd0NvbG9yIDogW10sXG4gICAgICAgICAgZHggOiBbXSxcbiAgICAgICAgICBkeSA6IFtdLFxuICAgICAgICAgIHNwcmVhZCA6IFtdLFxuICAgICAgICAgIGZhY3RvciA6IFtdXG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LnNoYWRvd09iamVjdFt0YWddW1wibGV2ZWxcIl0gPSBwYXJzZUludChhcnJbMF0pO1xuICAgIH1cblx0XHRyZXR1cm4gXCJcIjtcbiAgfVxuICAvLyAgLS0gaW50IGR4LCBpbnQgZHksIGludCBibHVyVmFsdWUsICBTdHJpbmcgc2hhZG93Q29sb3IsICBpbnQgc3ByZWFkLCBlbGV2YXRpdW9uLCBmbG9hdCBmYWN0b3IpXG4gIGlmIChhdHRycy5rZXkgPT0gXCJhbmRyb2lkU2hhZG93XCIpIHtcbiAgICB2YXIgYXJyID0gYXR0cnMudmFsdWUuc3BsaXQoXCIsXCIpO1xuXG4gICAgdmFyIHRhZyA9IGFycls2XTtcblxuICAgIHZhciBfX2JhY2tncm91bmQgPSBcIiNmZmZmZmZcIjtcbiAgICB2YXIgX19pZCA9IFwiXCI7XG5cbiAgICBmb3IgKHZhciBpID0wIDtpPGFsbFByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYWxsUHJvcHNbaV0ua2V5ID09IFwiYmFja2dyb3VuZFwiKSB7XG4gICAgICAgIF9fYmFja2dyb3VuZCA9IGFsbFByb3BzW2ldLnZhbHVlO1xuICAgICAgfSBlbHNlIGlmIChhbGxQcm9wc1tpXS5rZXkgPT0gXCJpZFwiKSB7XG4gICAgICAgIF9faWQgPSBhbGxQcm9wc1tpXS52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZmFjdG9yID0gYXJyWzVdO1xuICAgIGlmICh0eXBlb2YgSkJyaWRnZS5nZXRQaXhlbHMgPT0gXCJmdW5jdGlvblwiKXtcbiAgICAgIGZhY3RvciA9IEpCcmlkZ2UuZ2V0UGl4ZWxzKCk7XG4gICAgfVxuICAgIC8vICAgKHZpZXdJZCwgYmFja2dyb3VuZENvbG9yLCBpbnQgYmx1clZhbHVlLGhhZG93Q29sb3IsIGludCBkeCwgaW50IGR5LCBpbnQgc3ByZWFkLCBmbG9hdCBmYWN0b3IpXG5cbiAgICBpZiAoIXdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXSkge1xuICAgICAgd2luZG93LnNoYWRvd09iamVjdFt0YWddID1cbiAgICAgICAgeyBsZXZlbCA6IC0xLFxuICAgICAgICAgIHZpZXdJZCA6IFtfX2lkXSxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiBbX19iYWNrZ3JvdW5kXSxcbiAgICAgICAgICBibHVyVmFsdWUgOiBbYXJyWzJdXSxcbiAgICAgICAgICBzaGFkb3dDb2xvciA6IFthcnJbM11dLFxuICAgICAgICAgIGR4IDogW2FyclswXV0sXG4gICAgICAgICAgZHkgOiBbYXJyWzFdXSxcbiAgICAgICAgICBzcHJlYWQgOiBbYXJyWzRdXSxcbiAgICAgICAgICBmYWN0b3IgOiBbZmFjdG9yXVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcInZpZXdJZFwiXS5wdXNoKF9faWQpO1xuICAgICAgd2luZG93LnNoYWRvd09iamVjdFt0YWddW1wiYmFja2dyb3VuZENvbG9yXCJdLnB1c2goX19iYWNrZ3JvdW5kKTtcbiAgICAgIHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImJsdXJWYWx1ZVwiXS5wdXNoKGFyclsyXSk7XG4gICAgICB3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJzaGFkb3dDb2xvclwiXS5wdXNoKGFyclszXSk7XG4gICAgICB3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJkeFwiXS5wdXNoKGFyclswXSk7XG4gICAgICB3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJkeVwiXS5wdXNoKGFyclsxXSk7XG4gICAgICB3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJzcHJlYWRcIl0ucHVzaChhcnJbNF0pO1xuICAgICAgd2luZG93LnNoYWRvd09iamVjdFt0YWddW1wiZmFjdG9yXCJdLnB1c2goYXJyWzVdKTtcbiAgICB9XG5cblx0cmV0dXJuIFwiXCI7XG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwibGV0dGVyU3BhY2luZ1wiKSB7XG4gICAgYXR0cnMudmFsdWUgPSAoYXR0cnMudmFsdWUvOSkgKyBcIlwiO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcImRpdmlkZXJEcmF3YWJsZVwiKSB7XG4gICAgcHJlUGVuZCA9IFwic2V0XzM0MjM3Mj1jdHgtPmdldFBhY2thZ2VOYW1lO3NldF9yZXM9Y3R4LT5nZXRSZXNvdXJjZXM7c2V0XzM2ODI0OD1nZXRfcmVzLT5nZXRJZGVudGlmaWVyOnNfXCIrICBhdHRycy52YWx1ZSArXCIsc19kcmF3YWJsZSxnZXRfMzQyMzcyO3NldF9yZXM9Y3R4LT5nZXRSZXNvdXJjZXM7c2V0XzQ4MjM4MD1nZXRfcmVzLT5nZXREcmF3YWJsZTpnZXRfMzY4MjQ4O1wiXG4gICAgY3VyclRyYW5zVmFsID0gXCJnZXRfNDgyMzgwXCI7XG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwidGV4dEZyb21IdG1sXCIpIHtcbiAgICBwcmVQZW5kID0gcGFyc2VIdG1sKGhhbmRsZVNwZWNpYWxDaGFycyhhdHRycy52YWx1ZSkpO1xuICAgIGN1cnJUcmFuc1ZhbCA9ICdnZXRfaHRtbCc7XG4gIH1cblxuICBpZihhdHRycy5rZXkgPT0gXCJiYWNrZ3JvdW5kVGludFwiKXtcbiAgICBjb2xvciA9IGF0dHJzLnZhbHVlO1xuICAgIHByZVBlbmQgPSBwYXJzZUNvbG9yKGNvbG9yKSsnc2V0X2NvbG9yc3RhdGU9YW5kcm9pZC5jb250ZW50LnJlcy5Db2xvclN0YXRlTGlzdC0+dmFsdWVPZjpnZXRfY29sb3JJbnQ7JyA7XG4gICAgY3VyclRyYW5zVmFsID0gJ2dldF9jb2xvcnN0YXRlJ1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcInR5cGVmYWNlXCIpIHtcbiAgICBwcmVQZW5kID0gXCJzZXRfZmFjZT10aGlzLT5nZXRUeXBlZmFjZTtcIlxuICAgIGN1cnJUcmFuc1ZhbCA9ICdnZXRfZmFjZSwnICsgYXBwZW5kQXJncyhhdHRycyxvYmopO1xuICB9XG5cbiAgaWYoYXR0cnMua2V5ID09IFwiYnV0dG9uVGludFwiKXtcbiAgICBjb2xvciA9IGF0dHJzLnZhbHVlO1xuICAgIHByZVBlbmQgPSBwYXJzZUNvbG9yKGNvbG9yKSsnc2V0X2NvbG9yc3RhdGU9YW5kcm9pZC5jb250ZW50LnJlcy5Db2xvclN0YXRlTGlzdC0+dmFsdWVPZjpnZXRfY29sb3JJbnQ7JyA7XG4gICAgY3VyclRyYW5zVmFsID0gJ2dldF9jb2xvcnN0YXRlJ1xuICB9XG5cbiAgaWYoYXR0cnMua2V5ID09IFwiaGludENvbG9yXCIpe1xuICAgIGNvbG9yID0gYXR0cnMudmFsdWU7XG4gICAgcHJlUGVuZCA9IHBhcnNlQ29sb3IoY29sb3IpKydzZXRfY29sb3JzdGF0ZT1hbmRyb2lkLmNvbnRlbnQucmVzLkNvbG9yU3RhdGVMaXN0LT52YWx1ZU9mOmdldF9jb2xvckludDsnIDtcbiAgICBjdXJyVHJhbnNWYWwgPSAnZ2V0X2NvbG9yc3RhdGUnXG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwiYnRuQmFja2dyb3VuZFwiKSB7XG4gICAgY29sb3IgPSBhdHRycy52YWx1ZTtcbiAgICBwcmVQZW5kID0gJ3NldF9tb2RlPWFuZHJvaWQuZ3JhcGhpY3MuUG9ydGVyRHVmZi0+aW50VG9Nb2RlOmlfOTsnICsgIHBhcnNlQ29sb3IoY29sb3IpO1xuICAgIGN1cnJUcmFuc1ZhbCA9ICAnZ2V0X2NvbG9ySW50LGdldF9tb2RlJztcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJzZWxlY3RhYmxlSXRlbVwiKSB7XG4gICAgY29sb3IgPSBhdHRycy52YWx1ZTtcbiAgICBwcmVQZW5kID0gIFwic2V0X291dHY9YW5kcm9pZC51dGlsLlR5cGVkVmFsdWUtPm5ldztzZXRfdGhlbWU9Y3R4LT5nZXRUaGVtZTtnZXRfdGhlbWUtPnJlc29sdmVBdHRyaWJ1dGU6aV8xNjg0MzUzNCxnZXRfb3V0dixiX3RydWU7c2V0X2M9Z2V0X291dHYtPmdldENsYXNzO3NldF9mPWdldF9jLT5nZXREZWNsYXJlZEZpZWxkOnNfcmVzb3VyY2VJZDtnZXRfZi0+c2V0QWNjZXNzaWJsZTpiX3RydWU7c2V0X3Y9Z2V0X2YtPmdldDpnZXRfb3V0djtcIlxuICAgIGN1cnJUcmFuc1ZhbCA9ICAnZ2V0X3YnO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcInVybFwiKSB7XG4gICAgcHJlUGVuZCA9IFwic2V0X1NldHRpbmc9dGhpcy0+Z2V0U2V0dGluZ3M7Z2V0X1NldHRpbmctPnNldEphdmFTY3JpcHRFbmFibGVkOmJfdHJ1ZTtnZXRfU2V0dGluZy0+c2V0RG9tU3RvcmFnZUVuYWJsZWQ6Yl90cnVlO1wiO1xuICAgIHZhciBjb252ZXJ0VG9TdHJpbmcgPSBcInNldF8xMTI3PWFuZHJvaWQudXRpbC5CYXNlNjQtPmRlY29kZTpzX1wiICsgYnRvYShhdHRycy52YWx1ZSkgKyBcIixpXzA7c2V0X3VybD1qYXZhLmxhbmcuU3RyaW5nLT5uZXc6Z2V0XzExMjc7XCJcbiAgICBwcmVQZW5kICs9IGNvbnZlcnRUb1N0cmluZztcbiAgICBjdXJyVHJhbnNWYWwgPSBcImdldF91cmxcIjtcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJwYWNrYWdlSWNvblwiKSB7XG4gICAgcHJlUGVuZCA9IFwic2V0X1BNPWN0eC0+Z2V0UGFja2FnZU1hbmFnZXI7c2V0X0FJPWdldF9QTS0+Z2V0QXBwbGljYXRpb25JbmZvOnNfXCIgKyBhdHRycy52YWx1ZSArIFwiLGlfMDtzZXRfMTE3NDc9Z2V0X0FJLT5sb2FkSWNvbjpnZXRfUE07XCI7XG4gICAgY3VyclRyYW5zVmFsID0gXCJnZXRfMTE3NDdcIjtcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJpbWFnZVVybFwiKSB7XG5cbiAgICBpZihpc1VSTChhdHRycy52YWx1ZSkpIHtcbiAgICAgIGlmKHR5cGVvZiB3aW5kb3cuX19QUk9YWV9GTiA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHdpbmRvdy5fX1BST1hZX0ZOID0ge307XG4gICAgICB9XG4gICAgICB2YXIgaW1hZ2UgPSBhdHRycy52YWx1ZS5zdWJzdHIoYXR0cnMudmFsdWUubGFzdEluZGV4T2YoJy8nKSArIDEpXG4gICAgICB2YXIgY2FsbGJhY2sgPSBcIm9uSW1hZ2VcIiArIGltYWdlLnN1YnN0cigwLCBpbWFnZS5pbmRleE9mKCcuJykpXG5cbiAgICAgIHZhciBmaWxlUHJlc2VudCA9ICh0eXBlb2YgSkJyaWRnZS5pc0ZpbGVQcmVzZW50ID09IFwiZnVuY3Rpb25cIikgJiYgSkJyaWRnZS5pc0ZpbGVQcmVzZW50KGltYWdlKTtcbiAgICAgIGlmICghZmlsZVByZXNlbnQpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gY2FsbGJhY2tNYXBwZXIubWFwKGZ1bmN0aW9uIChpc05ldywgdXJsLCBmaWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IGlkID0gYWxsUHJvcHMuZmluZChhID0+IGEua2V5ID09PSBcImlkXCIpO1xuICAgICAgICAgIGlmICghaWQpIHJldHVybjtcbiAgICAgICAgICB2YXIgdXJsU2V0Q29tbWFuZHMgPSBcInNldF9kaXJlY3Rvcnk9Y3R4LT5nZXREaXI6c19qdXNwYXksaV8wO1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRfcmVzb2x2ZWRGaWxlPWphdmEuaW8uRmlsZS0+bmV3OmdldF9kaXJlY3Rvcnksc19cIiArIGZpbGVOYW1lICsgXCI7XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldF9yZXNvbHZlZFBhdGg9Z2V0X3Jlc29sdmVkRmlsZS0+dG9TdHJpbmc7XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldF9kaW1hZ2U9YW5kcm9pZC5ncmFwaGljcy5kcmF3YWJsZS5EcmF3YWJsZS0+Y3JlYXRlRnJvbVBhdGg6Z2V0X3Jlc29sdmVkUGF0aDtcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0X2ltZ1Y9Y3R4LT5maW5kVmlld0J5SWQ6aV9cIiArIGlkLnZhbHVlICsgXCI7XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdldF9pbWdWLT5zZXRJbWFnZURyYXdhYmxlOmdldF9kaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbmRyb2lkLnJ1bkluVUkodXJsU2V0Q29tbWFuZHMgLG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgSkJyaWRnZS5yZW5ld0ZpbGUoYXR0cnMudmFsdWUsIGltYWdlLCBjYWxsYmFjayk7XG4gICAgICB9IGVsc2UgaWYoSkJyaWRnZS5nZXRGaWxlUGF0aCkge1xuICAgICAgICBwcmVQZW5kID0gXCJzZXRfZGlyZWN0b3J5PWN0eC0+Z2V0RGlyOnNfanVzcGF5LGlfMDtcIiArXG4gICAgICAgICAgICAgICAgICAgIFwic2V0X3Jlc29sdmVkRmlsZT1qYXZhLmlvLkZpbGUtPm5ldzpnZXRfZGlyZWN0b3J5LHNfXCIgKyBKQnJpZGdlLmdldEZpbGVQYXRoKGltYWdlKSArIFwiO1wiICtcbiAgICAgICAgICAgICAgICAgICAgXCJzZXRfcmVzb2x2ZWRQYXRoPWdldF9yZXNvbHZlZEZpbGUtPnRvU3RyaW5nO1wiICtcbiAgICAgICAgICAgICAgICAgICAgXCJzZXRfZGltYWdlPWFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuRHJhd2FibGUtPmNyZWF0ZUZyb21QYXRoOmdldF9yZXNvbHZlZFBhdGg7XCJcbiAgICAgICAgY3VyclRyYW5zVmFsID0gXCJnZXRfZGltYWdlXCI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHByZVBlbmQgPSBcInNldF8zNDIzNzI9Y3R4LT5nZXRQYWNrYWdlTmFtZTtzZXRfcmVzPWN0eC0+Z2V0UmVzb3VyY2VzO3NldF8zNjgyNDg9Z2V0X3Jlcy0+Z2V0SWRlbnRpZmllcjpzX1wiKyAgYXR0cnMudmFsdWUgK1wiLHNfZHJhd2FibGUsZ2V0XzM0MjM3MjtzZXRfcmVzPWN0eC0+Z2V0UmVzb3VyY2VzO3NldF80ODIzODA9Z2V0X3Jlcy0+Z2V0RHJhd2FibGU6Z2V0XzM2ODI0ODtcIlxuICAgICAgY3VyclRyYW5zVmFsID0gXCJnZXRfNDgyMzgwXCI7XG4gICAgfVxuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcImRlZmF1bHRJbWFnZVwiKSB7XG4gICAgcHJlUGVuZCA9IFwic2V0XzM0MjM3Mj1jdHgtPmdldFBhY2thZ2VOYW1lO3NldF9yZXM9Y3R4LT5nZXRSZXNvdXJjZXM7c2V0XzM2ODI0OD1nZXRfcmVzLT5nZXRJZGVudGlmaWVyOnNfXCIrICBhdHRycy52YWx1ZSArXCIsc19kcmF3YWJsZSxnZXRfMzQyMzcyO3NldF9yZXM9Y3R4LT5nZXRSZXNvdXJjZXM7c2V0XzQ4MjM4MD1nZXRfcmVzLT5nZXREcmF3YWJsZTpnZXRfMzY4MjQ4O1wiXG4gICAgY3VyclRyYW5zVmFsID0gXCJnZXRfNDgyMzgwXCI7XG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwicGxhY2VIb2xkZXJcIikge1xuICAgIHByZVBlbmQgPSBcInNldF8zNDIzNzI9Y3R4LT5nZXRQYWNrYWdlTmFtZTtzZXRfcmVzPWN0eC0+Z2V0UmVzb3VyY2VzO3NldF8zNjgyNDg9Z2V0X3Jlcy0+Z2V0SWRlbnRpZmllcjpzX1wiKyAgYXR0cnMudmFsdWUgK1wiLHNfZHJhd2FibGUsZ2V0XzM0MjM3MjtzZXRfcmVzPWN0eC0+Z2V0UmVzb3VyY2VzO3NldF80ODIzODA9Z2V0X3Jlcy0+Z2V0RHJhd2FibGU6Z2V0XzM2ODI0ODtcIlxuICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0XzQ4MjM4MFwiO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcImR5bmFtaWNVcmxcIikge1xuICAgIHByZVBlbmQgPSBcInNldF9kaXJlY3Rvcnk9Y3R4LT5nZXREaXI6c19qdXNwYXksaV8wO1wiICtcbiAgICBcInNldF9yZXNvbHZlZE5hbWU9aW4uanVzcGF5Lmh5cGVyc2RrLnNlcnZpY2VzLkZpbGVQcm92aWRlclNlcnZpY2UtPmFwcGVuZFNka05hbWVBbmRWZXJzaW9uOnNfXCIgKyBhdHRycy52YWx1ZSArIFwiO1wiICtcbiAgICBcInNldF9yZXNvbHZlZEZpbGU9amF2YS5pby5GaWxlLT5uZXc6Z2V0X2RpcmVjdG9yeSxnZXRfcmVzb2x2ZWROYW1lO1wiICtcbiAgICBcInNldF9yZXNvbHZlZFBhdGg9Z2V0X3Jlc29sdmVkRmlsZS0+dG9TdHJpbmc7XCIgK1xuICAgIFwic2V0X2RpbWFnZT1hbmRyb2lkLmdyYXBoaWNzLmRyYXdhYmxlLkRyYXdhYmxlLT5jcmVhdGVGcm9tUGF0aDpnZXRfcmVzb2x2ZWRQYXRoO1wiO1xuXG4gICAgY3VyclRyYW5zVmFsID0gXCJnZXRfZGltYWdlXCI7XG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwiYmFja2dyb3VuZERyYXdhYmxlXCIpIHtcbiAgICBwcmVQZW5kID0gXCJzZXRfMzQyMzcyPWN0eC0+Z2V0UGFja2FnZU5hbWU7c2V0X3Jlcz1jdHgtPmdldFJlc291cmNlcztzZXRfMzY4MjQ4PWdldF9yZXMtPmdldElkZW50aWZpZXI6c19cIisgIGF0dHJzLnZhbHVlICtcIixzX2RyYXdhYmxlLGdldF8zNDIzNzI7c2V0X3Jlcz1jdHgtPmdldFJlc291cmNlcztzZXRfNDgyMzgwPWdldF9yZXMtPmdldERyYXdhYmxlOmdldF8zNjgyNDg7XCJcbiAgICBjdXJyVHJhbnNWYWwgPSBcImdldF80ODIzODBcIjtcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJmb250RmFtaWx5XCIpIHtcbiAgICBhdHRycy52YWx1ZSA9IGFwcGVuZEFyZ3MoYXR0cnMsb2JqKTtcbiAgICB2YWx1ZXMgPSBhdHRycy52YWx1ZS5zcGxpdCgnLCcpO1xuICAgIHJldHVybiBcInNldF9mb250RmFjZT1hbmRyb2lkLmdyYXBoaWNzLlR5cGVmYWNlLT5jcmVhdGU6XCIrdmFsdWVzWzBdK1wiLFwiK3ZhbHVlc1sxXStcIjtcIitcInRoaXMtPnNldFR5cGVmYWNlOmdldF9mb250RmFjZSxcIit2YWx1ZXNbMV0rXCI7XCJcbiAgfVxuXG4gIGlmKGF0dHJzLmtleT09XCJmb250U2l6ZVwiKSB7XG4gICAgY3VyclRyYW5zVmFsID0gYXBwZW5kQXJncyhhdHRycyxvYmopLnNwbGl0KCcsJylbMF0gKyAnLGZfJyArICgod2luZG93Ll9fV0lEVEgqKGF0dHJzLnZhbHVlLnNwbGl0KCcsJylbMV0pKjEpKS8xMDA7XG4gIH1cblxuICBpZihhdHRycy5rZXk9PVwiY3VydmVcIikge1xuICAgIHByZVBlbmQgPSAgXCJzZXRfaW50ZXJwPWFuZHJvaWQudmlldy5hbmltYXRpb24uRGVjZWxlcmF0ZUludGVycG9sYXRvci0+bmV3O1wiO1xuICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0X2ludGVycFwiO1xuICB9XG5cbiAgaWYoYXR0cnMua2V5PT1cInNoaW1tZXJcIikge1xuICAgIHRyeSB7XG4gICAgICB2YXIgc2hpbW1lck1vZGUgPSBcImNvbS5mYWNlYm9vay5zaGltbWVyLlNoaW1tZXIkQ29sb3JIaWdobGlnaHRCdWlsZGVyXCI7XG4gICAgICB2YXIgc2hpbW1lckNtZCA9IFwic2V0X3Nkcnc9Y29tLmZhY2Vib29rLnNoaW1tZXIuU2hpbW1lckRyYXdhYmxlLT5uZXc7XCI7XG4gICAgICB2YXIgc2hpbW1lckpzb24gPSBKU09OLnBhcnNlKGF0dHJzLnZhbHVlKTtcbiAgICAgIGNvbnNvbGUubG9nKHNoaW1tZXJKc29uLCBzaGltbWVySnNvbi5jb250ZW50cywgYXR0cnMsIGF0dHJzLCBvYmosIGJlbG9uZ3NUbywgdHJhbnNmb3JtRm4sIGFsbFByb3BzLCB0eXBlKVxuICAgICAgLy8gaWYoc2hpbW1lckpzb24gJiYgc2hpbW1lckpzb24uY29udGVudHMpe1xuXG4gICAgICAgIHNoaW1tZXJKc29uID0gc2hpbW1lckpzb24uY29udGVudHNcbiAgICAgIC8vIH1cbiAgICAgIGlmIChzaGltbWVySnNvbiAmJiBzaGltbWVySnNvbi5zaGltbWVyVHlwZSA9PSBcImFscGhhXCIpe1xuICAgICAgICBzaGltbWVyTW9kZSA9IFwiY29tLmZhY2Vib29rLnNoaW1tZXIuU2hpbW1lciRBbHBoYUhpZ2hsaWdodEJ1aWxkZXJcIlxuICAgICAgICBzaGltbWVyQ21kICs9IFwic2V0X2J1aWxkZXI9XCIgKyBzaGltbWVyTW9kZSArIFwiLT5uZXc7XCJcbiAgICAgICAgaWYoc2hpbW1lckpzb24uYmFzZSl7XG4gICAgICAgICAgc2hpbW1lckNtZCArPSBcImdldF9idWlsZGVyLT5zZXRCYXNlQWxwaGE6Zl9cIiArIHNoaW1tZXJKc29uLmJhc2UgKyBcIjtcIlxuICAgICAgICB9XG4gICAgICAgIGlmKHNoaW1tZXJKc29uLmhpZ2hsaWdodCl7XG4gICAgICAgICAgc2hpbW1lckNtZCArPSBcImdldF9idWlsZGVyLT5zZXRIaWdobGlnaHRBbHBoYTpmX1wiICsgc2hpbW1lckpzb24uaGlnaGxpZ2h0ICsgXCI7XCJcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hpbW1lckNtZCArPSBcInNldF9idWlsZGVyPVwiICsgc2hpbW1lck1vZGUgKyBcIi0+bmV3O1wiXG4gICAgICAgIGlmKHNoaW1tZXJKc29uLmJhc2Upe1xuICAgICAgICAgIHNoaW1tZXJDbWQgKz0gcGFyc2VDb2xvcihzaGltbWVySnNvbi5iYXNlICwgXCJzZXRfYmFzZUNvbG9yXCIpICsgXCI7XCJcbiAgICAgICAgICBzaGltbWVyQ21kICs9IFwiZ2V0X2J1aWxkZXItPnNldEJhc2VDb2xvcjpnZXRfYmFzZUNvbG9yO1wiXG4gICAgICAgIH1cbiAgICAgICAgaWYoc2hpbW1lckpzb24uaGlnaGxpZ2h0KXtcbiAgICAgICAgICBzaGltbWVyQ21kICs9IHBhcnNlQ29sb3Ioc2hpbW1lckpzb24uaGlnaGxpZ2h0ICwgXCJzZXRfYmFzZUNvbG9yXCIpICsgXCI7XCJcbiAgICAgICAgICBzaGltbWVyQ21kICs9IFwiZ2V0X2J1aWxkZXItPnNldEhpZ2hsaWdodENvbG9yOmdldF9iYXNlQ29sb3I7XCJcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihzaGltbWVySnNvbi50aWx0KXtcbiAgICAgICAgc2hpbW1lckNtZCArPSBcImdldF9idWlsZGVyLT5zZXRUaWx0OmZfXCIgKyBzaGltbWVySnNvbi50aWx0ICsgXCI7XCJcbiAgICAgIH1cbiAgICAgIGlmKHNoaW1tZXJKc29uLmludGVuc2l0eSl7XG4gICAgICAgIHNoaW1tZXJDbWQgKz0gXCJnZXRfYnVpbGRlci0+c2V0SW50ZW5zaXR5OmZfXCIgKyBzaGltbWVySnNvbi5pbnRlbnNpdHkgKyBcIjtcIlxuICAgICAgfVxuICAgICAgaWYoc2hpbW1lckpzb24uZGlyZWN0aW9uKXtcbiAgICAgICAgc2hpbW1lckNtZCArPSBcImdldF9idWlsZGVyLT5zZXREaXJlY3Rpb246aV9cIiArIHNoaW1tZXJKc29uLmRpcmVjdGlvbiArIFwiO1wiXG4gICAgICB9XG4gICAgICBpZihzaGltbWVySnNvbi5kdXJhdGlvbil7XG4gICAgICAgIHNoaW1tZXJDbWQgKz0gXCJnZXRfYnVpbGRlci0+c2V0RHVyYXRpb246bF9cIiArIHNoaW1tZXJKc29uLmRpcmVjdGlvbiArIFwiO1wiXG4gICAgICB9XG4gICAgICBpZihzaGltbWVySnNvbi5yZXBlYXRDb3VudCl7XG4gICAgICAgIHNoaW1tZXJDbWQgKz0gXCJnZXRfYnVpbGRlci0+c2V0UmVwZWF0Q291bnQ6aV9cIiArIHNoaW1tZXJKc29uLnJlcGVhdENvdW50ICsgXCI7XCJcbiAgICAgIH1cbiAgICAgIGlmKHNoaW1tZXJKc29uLnJlcGVhdERlbGF5KXtcbiAgICAgICAgc2hpbW1lckNtZCArPSBcImdldF9idWlsZGVyLT5zZXRSZXBlYXREZWxheTpsX1wiICsgc2hpbW1lckpzb24ucmVwZWF0RGVsYXkgKyBcIjtcIlxuICAgICAgfVxuICAgICAgaWYoc2hpbW1lckpzb24uY2xpcFRvQ2hpbGRyZW4pe1xuICAgICAgICBzaGltbWVyQ21kICs9IFwiZ2V0X2J1aWxkZXItPnNldENsaXBUb0NoaWxkcmVuOmJfXCIgKyBzaGltbWVySnNvbi5jbGlwVG9DaGlsZHJlbiArIFwiO1wiXG4gICAgICB9XG4gICAgICBpZihzaGltbWVySnNvbi5zaGFwZSl7XG4gICAgICAgIHNoaW1tZXJDbWQgKz0gXCJnZXRfYnVpbGRlci0+c2V0U2hhcGU6aV9cIiArIHNoaW1tZXJKc29uLnNoYXBlICsgXCI7XCJcbiAgICAgIH1cbiAgICAgIGlmKHNoaW1tZXJKc29uLmRyb3BPZmYpe1xuICAgICAgICBzaGltbWVyQ21kICs9IFwiZ2V0X2J1aWxkZXItPnNldERyb3BvZmY6Zl9cIiArIHNoaW1tZXJKc29uLmRyb3BPZmYgKyBcIjtcIlxuICAgICAgfVxuICAgICAgc2hpbW1lckNtZCArPSBcInNldF9zaGltbWVyPWdldF9idWlsZGVyLT5idWlsZDtcIlxuICAgICAgaWYodHlwZSA9PSBcInNoaW1tZXJGcmFtZUxheW91dFwiKXtcbiAgICAgICAgYXR0cnMua2V5ID0gXCJzaGltbWVyVmlld1wiXG4gICAgICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0X3NoaW1tZXJcIjtcbiAgICAgICAgb2JqLmZuTmFtZSA9IG9iai5hbHRlcm5hdGVGbk5hbWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaW1tZXJDbWQgKz0gXCJnZXRfc2Rydy0+c2V0U2hpbW1lcjpnZXRfc2hpbW1lcjtcIlxuICAgICAgICBpZihzaGltbWVySnNvbi5hY3RpdmUpe1xuICAgICAgICAgIGFmdGVyQ21kICs9IFwiZ2V0X3NkcnctPnN0YXJ0U2hpbW1lcjtcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFmdGVyQ21kICs9IFwiZ2V0X3NkcnctPnN0b3BTaGltbWVyO1wiXG4gICAgICAgIH1cbiAgICAgICAgY3VyclRyYW5zVmFsID0gXCJnZXRfc2Ryd1wiO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJ1bmFibGUgdG8gc2V0IHNoaW1tZXJcIilcbiAgICB9XG4gICAgY29uc29sZS5sb2coc2hpbW1lckNtZClcbiAgICBwcmVQZW5kID0gIHNoaW1tZXJDbWQ7XG4gIH1cblxuICBpZihhdHRycy5rZXk9PVwiZm9jdXNcIikge1xuICAgIGFmdGVyQ21kID0gIFwic2V0X3dpbj1jdHgtPmdldFdpbmRvdztnZXRfd2luLT5zZXRTb2Z0SW5wdXRNb2RlOjU7XCI7XG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwic2hhZG93TGF5ZXJcIikge1xuICAgIGNvbG9yID0gYXR0cnMudmFsdWUuc3BsaXQoJywnKVszXTtcbiAgICBhcnIgPSBhcHBlbmRBcmdzKGF0dHJzLG9iaikuc3BsaXQoJywnKTtcbiAgICBhcnIuc3BsaWNlKGFyci5sZW5ndGgxICwgMSk7XG5cbiAgICBwcmVQZW5kID0gcGFyc2VDb2xvcihjb2xvcik7XG4gICAgY3VyclRyYW5zVmFsID0gIGFyci5qb2luKCcsJykgKyAnLGdldF9jb2xvckludCdcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJ2YWx1ZXNcIikge1xuICAgIHZhciB2YWwgPSBhdHRycy52YWx1ZS5zcGxpdChcIixcIik7XG4gICAgdmFyIHZhbHVlc1N0ciA9IFwiXCIsIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGVsZW1lbnRzID0gdmFsW2ldLnNwbGl0KFwiOlwiKTtcbiAgICAgIHZhbHVlc1N0ciArPSBcImdldF9zcGlubmVyQXJyYXktPmFkZDpzX1wiK2VsZW1lbnRzWzBdO1xuICAgICAgZm9yKHZhciBqID0gMTsgaiA8IGVsZW1lbnRzLmxlbmd0aDsgaisrKVxuICAgICAgICB2YWx1ZXNTdHIgKz0gXCJcXG5cIiArIGVsZW1lbnRzW2pdO1xuICAgICAgICB2YWx1ZXNTdHIgKz0gXCI7XCI7XG4gICAgfVxuICAgIHByZVBlbmQgPSAgXCJzZXRfc3Bpbm5lckFycmF5PWphdmEudXRpbC5BcnJheUxpc3QtPm5ldztcIisgdmFsdWVzU3RyICtcbiAgICBcInNldF9zcGlubmVyVmFsdWVzPWdldF9zcGlubmVyQXJyYXktPnRvQXJyYXk7c2V0X3NwaW5uZXJBZGFwdGVyPWFuZHJvaWQud2lkZ2V0LkFycmF5QWRhcHRlci0+bmV3OmN0eF9jdHgsaV8xNzM2NzA0MyxnZXRfc3Bpbm5lclZhbHVlcztcIjtcbiAgICBjdXJyVHJhbnNWYWwgPSBcImdldF9zcGlubmVyQWRhcHRlclwiO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcInN0YXJ0UG9pbnRcIikge1xuICAgIHZhciBhcmcgPSBKU09OLnBhcnNlKGF0dHJzLnZhbHVlKTtcbiAgICBwcmVQZW5kID0gXCJ0aGlzLT5zZXRTdGFydFg6Zl9cIiArIGFyZy54ICsgXCI7XCJcbiAgICBwcmVQZW5kICs9IFwidGhpcy0+c2V0U3RhcnRZOmZfXCIgKyBhcmcueSArIFwiO1wiXG4gICAgcmV0dXJuIHByZVBlbmRcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJlbmRQb2ludFwiKSB7XG4gICAgdmFyIGFyZyA9IEpTT04ucGFyc2UoYXR0cnMudmFsdWUpXG4gICAgcHJlUGVuZCA9IFwidGhpcy0+c2V0RW5kWDpmX1wiICsgYXJnLnggKyBcIjtcIlxuICAgIHByZVBlbmQgKz0gXCJ0aGlzLT5zZXRFbmRZOmZfXCIgKyBhcmcueSArIFwiO1wiXG4gICAgcmV0dXJuIHByZVBlbmRcbiAgfVxuXG4gIGlmIChiZWxvbmdzVG8gPT0gXCJWSUVXXCIpXG4gIGtleVdvcmQgPSBnbG9iYWxPYmpNYXBbYmVsb25nc1RvXS52YWw7XG4gIGVsc2VcbiAga2V5V29yZCA9ICdnZXRfJyArIGdsb2JhbE9iak1hcFtiZWxvbmdzVG9dLnZhbDtcblxuICBpZiAodHJhbnNmb3JtRm4gfHwgYXR0cnMua2V5ID09IFwiZHVyYXRpb25cIiB8fCBhdHRycy5rZXkgPT0gXCJkZWxheVwiIHx8IGF0dHJzLmtleSA9PSBcImN1cnZlXCIpXG4gIF9jbWQgPSBrZXlXb3JkICsgICctPicgKyAoKHR5cGVvZiBvYmouZm5OYW1lID09IFwidW5kZWZpbmVkXCIpP29iai52YXJOYW1lOm9iai5mbk5hbWUpO1xuICBlbHNlXG4gIF9jbWQgPSBrZXlXb3JkICsgJy0+JyArICAgYXR0cnMua2V5O1xuXG4gIGlmIChvYmoudmFsdWVzICYmIG9iai52YWx1ZXMubGVuZ3RoKVxuICBfY21kICs9ICc6JztcblxuICBpZiAoIXByZVBlbmQgJiYgIWN1cnJUcmFuc1ZhbClcbiAgX2NtZCArPSAgYXBwZW5kQXJncyhhdHRycywgb2JqKSArICc7J1xuICBlbHNlXG4gIF9jbWQgKz0gY3VyclRyYW5zVmFsICsgJzsnO1xuXG4gIC8vIGZvciB0ZXN0aW5nXG4gIGlmICh0eXBlb2YgZmluYWxDbWQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjb25zb2xlLmxvZyhiZWZvcmVDbWQgICsgcHJlUGVuZCArIF9jbWQgKyBhZnRlckNtZCk7XG4gICAgcmV0dXJuIGZpbmFsQ21kO1xuICB9XG4gIGlmKHR5cGUgPT0gXCJzaGltbWVyRnJhbWVMYXlvdXRcIil7XG4gICAgY29uc29sZS5sb2coYmVmb3JlQ21kICArIHByZVBlbmQgKyBfY21kICsgYWZ0ZXJDbWQpXG4gIH1cbiAgcmV0dXJuIGJlZm9yZUNtZCAgKyBwcmVQZW5kICsgX2NtZCArIGFmdGVyQ21kXG59XG5cbmZ1bmN0aW9uIHBhcnNlQXR0cnMoYXR0cnMsIGJlbG9uZ3NUbywgdHJhbnNmb3JtRm4sIHR5cGUpIHtcbiAgdmFyIG9iajtcbiAgdmFyIHJldFZhbDtcbiAgdmFyIGNtZCA9ICcnO1xuICB2YXIgX2NtZDtcblxuICBmb3IgKHZhciBpID0wIDtpPGF0dHJzLmxlbmd0aDsgaSsrKSB7XG4gICAgb2JqID0gbWFwUGFyYW1zW2F0dHJzW2ldLmtleV07XG4gICAgaWYgKG9iaikge1xuICAgICAgY21kICs9IG1hc2hUaGlzKGF0dHJzW2ldLCBvYmosIGJlbG9uZ3NUbywgdHJhbnNmb3JtRm4sIGF0dHJzLCB0eXBlKTtcbiAgICB9XG4gIH1cblxuICBpZiAoYmVsb25nc1RvID09IFwiVklFV1wiKVxuICByZXR1cm4gY21kO1xuXG4gIHJldHVybiBwcmVwYXJlQ3RyKGF0dHJzLCBiZWxvbmdzVG8pICsgJzsnICsgY21kO1xufVxuXG5mdW5jdGlvbiBwYXJzZUdyb3Vwcyh0eXBlLCBncm91cHMsIGNvbmZpZykge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGdyb3Vwcyk7XG4gIHZhciBjdHI7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGk8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAgKGtleXNbaV0gPT0gXCJGT1JFR1JPVU5EXCIpIHtcbiAgICAgIGlmICghZ2xvYmFsT2JqTWFwW2tleXNbaV1dKSB7XG4gICAgICAgIGlmIChnZXRTZXRUeXBlID09IFwic2V0XCIpIHtcbiAgICAgICAgICBnbG9iYWxPYmpNYXBba2V5c1tpXV0gPSB7Y3RyOiBcImFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuR3JhZGllbnREcmF3YWJsZS0+bmV3XCIsICB2YWw6ICBrZXlzW2ldIH07XG4gICAgICAgICAgY29tbWFuZCArPSAnc2V0XycgKyAgZ2xvYmFsT2JqTWFwW2tleXNbaV1dLnZhbCArICc9JyArICBwYXJzZUF0dHJzKGdyb3Vwc1trZXlzW2ldXSwga2V5c1tpXSwgdHJ1ZSwgdHlwZSlcbiAgICAgICAgICAgICsgJ3RoaXMtPicgKyBcInNldEZvcmVncm91bmRcIiArICc6JyArICdnZXRfJyArICBnbG9iYWxPYmpNYXBba2V5c1tpXV0udmFsICsgJzsnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2xvYmFsT2JqTWFwW2tleXNbaV1dID0ge2N0cjogJ2dldF92aWV3LT5nZXRGb3JlZ3JvdW5kJywgIHZhbDogIGtleXNbaV0gfTtcbiAgICAgICAgICBjb21tYW5kICs9ICdzZXRfJyArICBnbG9iYWxPYmpNYXBba2V5c1tpXV0udmFsICsgJz0nICsgIHBhcnNlQXR0cnMoZ3JvdXBzW2tleXNbaV1dLCBrZXlzW2ldLCB0cnVlLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoa2V5c1tpXSA9PSBcIkxBWU9VVF9UUkFOU0lUSU9OXCIpIHtcbiAgICAgICAgZ2xvYmFsT2JqTWFwLkxBWU9VVF9UUkFOU0lUSU9OID0ge2N0cjogJ2FuZHJvaWQuYW5pbWF0aW9uLkxheW91dFRyYW5zaXRpb24tPm5ldycsIHZhbDogXCJMQVlPVVRfVFJBTlNJVElPTlwifTtcbiAgICAgICAgY29tbWFuZCArPSAgJ3NldF8nICsgIGdsb2JhbE9iak1hcC5MQVlPVVRfVFJBTlNJVElPTi52YWwgKyAnPScgKyAgcGFyc2VBdHRycyhncm91cHMuUEFSQU1TLCAnTEFZT1VUX1RSQU5TSVRJT04nLCB0cnVlLCB0eXBlKVxuICAgICAgICAgICAgICsgJ3RoaXMtPicgKyBcInNldExheW91dFRyYW5zaXRpb25cIiArICc6Z2V0XycgICsgZ2xvYmFsT2JqTWFwLkxBWU9VVF9UUkFOU0lUSU9OLnZhbCArICc7JztcbiAgICB9IGVsc2UgaWYgKGtleXNbaV0gPT0gXCJWSUVXXCIpIHtcbiAgICAgIGlmICghZ2xvYmFsT2JqTWFwLlZJRVcpIHtcbiAgICAgICAgaWYgKGdldFNldFR5cGUgPT0gXCJzZXRcIilcbiAgICAgICAgZ2xvYmFsT2JqTWFwLlZJRVcgPSB7Y3RyOiBcInRoaXNcIiwgdmFsOiBcInRoaXNcIn07XG4gICAgICAgIGVsc2VcbiAgICAgICAgZ2xvYmFsT2JqTWFwLlZJRVcgPSB7Y3RyOiBcImdldF92aWV3XCIsIHZhbDogXCJnZXRfdmlld1wifTtcbiAgICAgIH1cblxuICAgICAgY29tbWFuZCArPSAgcGFyc2VBdHRycyhncm91cHMuVklFVywgJ1ZJRVcnLCB0cnVlLCB0eXBlKVxuXG4gICAgfSBlbHNlIGlmIChrZXlzW2ldID09IFwiUEFSQU1TXCIpIHtcbiAgICAgIGlmIChnZXRTZXRUeXBlID09IFwic2V0XCIpIHtcbiAgICAgICAgaWYgKCFnbG9iYWxPYmpNYXAuUEFSQU1TKSB7XG4gICAgICAgICAgY3RyID0gY29uZmlnLnJvb3Q/Z2V0Q3RyKHR5cGUpOidQQVJBTV9DVFJfSE9MREVSJztcbiAgICAgICAgICBnbG9iYWxPYmpNYXAuUEFSQU1TID0ge2N0cjogY3RyLCB2YWw6IFwiUEFSQU1TXCIgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbW1hbmQgKz0gICdzZXRfJyArICBnbG9iYWxPYmpNYXAuUEFSQU1TLnZhbCArICc9JyArICBwYXJzZUF0dHJzKGdyb3Vwcy5QQVJBTVMsICdQQVJBTVMnLCB0cnVlLCB0eXBlKVxuICAgICAgICAgICAgICsgJ3RoaXMtPicgKyBvYmpNYXAuUEFSQU1TLnZpZXdNZXRob2Quc3BsaXQoJywnKVswXSArICc6Z2V0XycgICsgZ2xvYmFsT2JqTWFwLlBBUkFNUy52YWwgKyAnOyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWdsb2JhbE9iak1hcC5QQVJBTVMpIHtcbiAgICAgICAgICBjdHIgPSBcImdldF92aWV3LT5nZXRMYXlvdXRQYXJhbXNcIjtcbiAgICAgICAgICBnbG9iYWxPYmpNYXAuUEFSQU1TID0ge2N0cjogY3RyLCB2YWw6IFwiUEFSQU1TXCIgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbW1hbmQgKz0gJ3NldF8nICsgIGdsb2JhbE9iak1hcC5QQVJBTVMudmFsICsgJz0nICsgIHBhcnNlQXR0cnMoZ3JvdXBzW2tleXNbaV1dLCBrZXlzW2ldLCB0cnVlLCB0eXBlKTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAoa2V5c1tpXSA9PSBcIk1VVEFURUJHXCIpIHtcbiAgICAgIGlmICghZ2xvYmFsT2JqTWFwLk1VVEFURUJHKSB7XG4gICAgICAgIGdsb2JhbE9iak1hcC5NVVRBVEVCRyA9IHtjdHI6ICd0aGlzLT5nZXRCYWNrZ3JvdW5kJywgdmFsOiBcIk1VVEFURUJHXCJ9O1xuICAgICAgfVxuXG4gICAgICBjb21tYW5kICs9ICdzZXRfJyArICBnbG9iYWxPYmpNYXAuTVVUQVRFQkcudmFsICsgJz0nICsgIHBhcnNlQXR0cnMoZ3JvdXBzW2tleXNbaV1dLCBrZXlzW2ldLCB0cnVlLCB0eXBlKTtcbiAgICB9IGVsc2UgaWYgKGtleXNbaV0gPT0gXCJBTklNQVRJT05cIikge1xuICAgICAgaWYgKCFnbG9iYWxPYmpNYXAuQU5JTUFUSU9OKSB7XG4gICAgICAgIGlmIChnZXRTZXRUeXBlID09IFwic2V0XCIpXG4gICAgICAgIGdsb2JhbE9iak1hcC5BTklNQVRJT04gPSB7Y3RyOiAndGhpcy0+YW5pbWF0ZScsIHZhbDogXCJBTklNQVRJT05cIn07XG4gICAgICAgIGVsc2VcbiAgICAgICAgZ2xvYmFsT2JqTWFwLkFOSU1BVElPTiA9IHtjdHI6ICdnZXRfdmlldy0+YW5pbWF0ZScsIHZhbDogXCJBTklNQVRJT05cIn07XG4gICAgICB9XG5cbiAgICAgIGNvbW1hbmQgKz0gJ3NldF8nICsgIGdsb2JhbE9iak1hcC5BTklNQVRJT04udmFsICsgJz0nICsgIHBhcnNlQXR0cnMoZ3JvdXBzW2tleXNbaV1dLCBrZXlzW2ldLCBmYWxzZSwgdHlwZSk7XG5cbiAgICB9ICBlbHNlIHtcbiAgICAgIC8vIFdvcmtzIG9ubHkgZm9yIGRyYXdhYmxlXG4gICAgICBpZiAoIWdsb2JhbE9iak1hcFtrZXlzW2ldXSkge1xuICAgICAgICBpZiAoZ2V0U2V0VHlwZSA9PSBcInNldFwiKSB7XG4gICAgICAgICAgZ2xvYmFsT2JqTWFwW2tleXNbaV1dID0ge2N0cjogb2JqTWFwW2tleXNbaV1dLmN0ciwgIHZhbDogIGtleXNbaV0gfTtcbiAgICAgICAgICBjb21tYW5kICs9ICdzZXRfJyArICBnbG9iYWxPYmpNYXBba2V5c1tpXV0udmFsICsgJz0nICsgIHBhcnNlQXR0cnMoZ3JvdXBzW2tleXNbaV1dLCBrZXlzW2ldLCB0cnVlLCB0eXBlKVxuICAgICAgICAgICAgKyAndGhpcy0+JyArIG9iak1hcFtrZXlzW2ldXS52aWV3TWV0aG9kLnNwbGl0KCcsJylbMF0gKyAnOicgKyAnZ2V0XycgKyAgZ2xvYmFsT2JqTWFwW2tleXNbaV1dLnZhbCArICc7J1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdsb2JhbE9iak1hcFtrZXlzW2ldXSA9IHtjdHI6ICdnZXRfdmlldy0+Z2V0QmFja2dyb3VuZCcsICB2YWw6ICBrZXlzW2ldIH07XG4gICAgICAgICAgY29tbWFuZCArPSAnc2V0XycgKyAgZ2xvYmFsT2JqTWFwW2tleXNbaV1dLnZhbCArICc9JyArICBwYXJzZUF0dHJzKGdyb3Vwc1trZXlzW2ldXSwga2V5c1tpXSwgdHJ1ZSwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbW1hbmQuc3Vic3RyaW5nKDAsIGNvbW1hbmQubGVuZ3RoIC0gMSk7XG59XG5cbnZhciBmbGF0dGVuT2JqZWN0ID0gZnVuY3Rpb24ob2IpIHtcbiAgdmFyIHRvUmV0dXJuID0ge307XG4gIGZvciAodmFyIGkgaW4gb2IpIHtcbiAgICBpZiAoIW9iLmhhc093blByb3BlcnR5KGkpKSBjb250aW51ZTtcbiAgICBpZiAoKHR5cGVvZiBvYltpXSkgPT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBmbGF0T2JqZWN0ID0gZmxhdHRlbk9iamVjdChvYltpXSk7XG4gICAgICBmb3IgKHZhciB4IGluIGZsYXRPYmplY3QpIHtcbiAgICAgICAgaWYgKCFmbGF0T2JqZWN0Lmhhc093blByb3BlcnR5KHgpKSBjb250aW51ZTtcbiAgICAgICAgdG9SZXR1cm5beF0gPSBmbGF0T2JqZWN0W3hdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0b1JldHVybltpXSA9IG9iW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdG9SZXR1cm47XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHR5cGUsIGNvbmZpZywgX2dldFNldFR5cGUpIHtcbiAgY29uZmlnID0gZmxhdHRlbk9iamVjdChjb25maWcpO1xuICBnZXRTZXRUeXBlID0gX2dldFNldFR5cGU7XG4gIGVsZW1lbnRUeXBlID0gdHlwZTtcblxuICB2YXIgZ3JvdXBzID0gIGdldENvbmZpZ0dyb3Vwcyhjb25maWcpO1xuXG4gIGNvbW1hbmQgPSAnJztcbiAgZ2xvYmFsT2JqTWFwID0ge307XG5cbiAgdmFyIGZsYWcgPSAwO1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGNvbmZpZyk7XG4gIGZvciAodmFyIGk9MDsgaTxrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGtleXNbaV0gPT0gJ3J1bkluVUknKSAge1xuICAgICAgZmxhZyAgPSAxO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFmbGFnKSB7XG4gICAgY29uZmlnLnJ1bkluVUkgPSBwYXJzZUdyb3Vwcyh0eXBlLCBncm91cHMsIGNvbmZpZyk7XG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4gKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbiAqXG4gKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiAqIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4gKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4gKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuICogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4gKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiAqIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4gKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuICovXG5cbm1vZHVsZS5leHBvcnRzLm1hcCA9IChmbikgPT4ge1xuXHRpZih0eXBlb2Ygd2luZG93Ll9fRk5fSU5ERVggIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5fX0ZOX0lOREVYICE9PSBudWxsKSB7XG5cdFx0dmFyIHByb3h5Rm5OYW1lID0gJ0YnICsgd2luZG93Ll9fRk5fSU5ERVg7XG5cdFx0aWYgKHdpbmRvdy5fX3BheWxvYWQgJiYgd2luZG93Ll9fcGF5bG9hZC5zZXJ2aWNlKXtcblx0XHRcdHByb3h5Rm5OYW1lID0gd2luZG93Ll9fcGF5bG9hZC5zZXJ2aWNlICsgXCJfXCIgKyBwcm94eUZuTmFtZTtcblx0XHR9XG5cdFx0d2luZG93Ll9fUFJPWFlfRk5bcHJveHlGbk5hbWVdID0gZm47XG5cdCAgXHR3aW5kb3cuX19GTl9JTkRFWCsrO1xuXHRcdHJldHVybiBwcm94eUZuTmFtZTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgaW5pdGlhbGlzZSB3aW5kb3cuX19GTl9JTkRFWCA9IDAgaW4gaW5kZXguanMgb2YgeW91ciBwcm9qZWN0LlwiKTtcblx0fVxufVxuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Y2FsbGJhY2tNYXBwZXIgOiByZXF1aXJlKFwiLi9jYWxsYmFja01hcHBlclwiKVxufVxuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0YW5kcm9pZCA6IHJlcXVpcmUoXCIuL2FuZHJvaWRcIiksXG5cdGlvcyA6IHJlcXVpcmUoXCIuL2lvc1wiKSxcblx0d2ViIDogcmVxdWlyZShcIi4vd2ViXCIpLFxuXHRjb21tb24gOiByZXF1aXJlKFwiLi9jb21tb25cIilcbn0iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbm1vZHVsZS5leHBvcnRzID0gW1xuXHRcIiM4M0ZDRThcIixcblx0XCIjODlGNkU0XCIsXG5cdFwiIzhGRUZERlwiLFxuXHRcIiM5NkU5REJcIixcblx0XCIjOUNFM0Q3XCIsXG5cdFwiI0ZFRTlFNlwiLFxuXHRcIiNGRUY3RTdcIixcblx0XCIjRkZGQUU1XCIsXG5cdFwiI0Y1RkFFQlwiLFxuXHRcIiNFNUZGRjVcIlxuXVxuXG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmxhdHRlbk9iamVjdChvYikge1xuICB2YXIgdG9SZXR1cm4gPSB7fTtcbiAgZm9yICh2YXIgaSBpbiBvYikge1xuICAgIGlmICghb2IuaGFzT3duUHJvcGVydHkoaSkpIGNvbnRpbnVlO1xuICAgIGlmICgodHlwZW9mIG9iW2ldKSA9PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGZsYXRPYmplY3QgPSBmbGF0dGVuT2JqZWN0KG9iW2ldKTtcbiAgICAgIGZvciAodmFyIHggaW4gZmxhdE9iamVjdCkge1xuICAgICAgICBpZiAoIWZsYXRPYmplY3QuaGFzT3duUHJvcGVydHkoeCkpIGNvbnRpbnVlO1xuICAgICAgICB0b1JldHVyblt4XSA9IGZsYXRPYmplY3RbeF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvUmV0dXJuW2ldID0gb2JbaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRvUmV0dXJuO1xufTsiLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRwYXJzZVBhcmFtcyA6IHJlcXVpcmUoXCIuL3BhcnNlUGFyYW1zXCIpLFxufVxuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuaW1wb3J0IGNvbG9ycyBmcm9tIFwiLi9jb2xvcnNcIjtcbmltcG9ydCBmbGF0dGVuT2JqZWN0IGZyb20gXCIuL2ZsYXR0ZW5PYmplY3RcIjtcblxudmFyIGNhbGxiYWNrTWFwcGVyICA9IHJlcXVpcmUoXCIuLi9jb21tb24vY2FsbGJhY2tNYXBwZXJcIilcblxubGV0IGdldFNldFR5cGUgPSAxO1xuXG4vKipcbiAqIENoZWNrcyB0aGUgbmF0aXZlIHNldCB3aW5kb3cuX19ERVZJQ0VfREVUQUlMUy5teXN0aXF1ZV92ZXJzaW9uXG4gKiBhbmQgY2hlY2tzIGlmIG15c3RpcXVlIHZlcnNpb24gaXMgZ3JlYXRlciB0aGFuIHRoZSBwYXNzZWQgdmVyc2lvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJzaW9uIG51bWJlciB0byBiZSBjaGVja2VkIGFnYWluc3QuIElmIHBhc3NlZCBlbXB0eSByZXR1cm5zIHRydWUuXG4gKiBAcmV0dXJuIHtib29sfSB0cnVlIGlmIG15c3RpcXVlIHZlcnNpb24gaXMgZ3JlYXRlciB0aGFuIHBhc3NlZCB2ZXJzaW9uIGVsc2UgZmFsc2UuIERlZmF1bHRzIHRvIHRydWUuXG4gKi9cbmZ1bmN0aW9uIGlzTXlzdGlxdWVWZXJzaW9uR3JlYXRlclRoYW4odmVyc2lvbikge1xuICBpZiAod2luZG93Ll9fREVWSUNFX0RFVEFJTFMgJiYgd2luZG93Ll9fREVWSUNFX0RFVEFJTFMubXlzdGlxdWVfdmVyc2lvbikge1xuICAgIHZhciBzZGtWZXJzaW9uID0gcGFyc2VGbG9hdCh3aW5kb3cuX19ERVZJQ0VfREVUQUlMUy5teXN0aXF1ZV92ZXJzaW9uKTtcbiAgICBpZiAoc2RrVmVyc2lvbj4wKSB7XG4gICAgICAgIHJldHVybiBzZGtWZXJzaW9uPnBhcnNlRmxvYXQodmVyc2lvbik/dHJ1ZTpmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0Q29sb3JUb1JnYmEoY29sb3Ipe1xuICBjb2xvciA9IHJXUyhjUyhjb2xvcikpO1xuXG4gIHZhciB2YWx1ZXM7XG4gIHZhciBhbHBoYSA9IFwiMS4wMFwiO1xuXG4gIGlmIChjb2xvci5sZW5ndGggPj0gOCkge1xuICAgIGFscGhhID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDEsIDMpLCAxNik7XG4gICAgYWxwaGEgPSAoYWxwaGEgLyAyNTUpLnRvRml4ZWQoMik7XG4gICAgY29sb3IgPSBjb2xvci5zdWJzdHJpbmcoMywgOSk7XG4gIH0gZWxzZSB7XG4gICAgY29sb3IgPSBjb2xvci5zdWJzdHJpbmcoMSwgY29sb3IubGVuZ3RoKTtcbiAgfVxuXG4gIGNvbG9yID0gY29udmVydEhleFRvUmdiKHJXUyhjb2xvcikpO1xuICB2YWx1ZXMgPSBjb2xvci5zcGxpdCgnLCcpO1xuXG4gIHJldHVybiB7XG4gICAgcjogcldTKHZhbHVlc1swXSksXG4gICAgZzogcldTKHZhbHVlc1sxXSksXG4gICAgYjogcldTKHZhbHVlc1syXSksXG4gICAgYTogYWxwaGFcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29udmVydEhleFRvUmdiKGhleCkge1xuICB2YXIgciA9IChwYXJzZUludChoZXguc3Vic3RyaW5nKDAsMiksIDE2KS8yNTUpLnRvRml4ZWQoMik7XG4gIHZhciBnID0gKHBhcnNlSW50KGhleC5zdWJzdHJpbmcoMiw0KSwgMTYpLzI1NSkudG9GaXhlZCgyKTtcbiAgdmFyIGIgPSAocGFyc2VJbnQoaGV4LnN1YnN0cmluZyg0LDYpLCAxNikvMjU1KS50b0ZpeGVkKDIpO1xuXG4gIHJldHVybiByICsgXCIsXCIgKyBnICsgXCIsXCIgKyBiO1xufVxuXG5mdW5jdGlvbiBjUyh2YWx1ZSkge1xuICByZXR1cm4gIHZhbHVlP3ZhbHVlICsgJyc6IFwiXCI7XG59XG5cbmZ1bmN0aW9uIHJXUyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUucmVwbGFjZSgvIC9nLCcnKTtcbn1cblxuZnVuY3Rpb24gc2VsZl9zaXplRnJvbURpY3Rpb25hcnkod2lkdGgsIGhlaWdodCkge1xuICB3aW5kb3cuX19TSVpFX0lOREVYKys7XG5cbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcInNpemVcIiArIHdpbmRvdy5fX1NJWkVfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBcInNlbGZcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNpemVGcm9tRGljdGlvbmFyeTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcbiAgICAgICAgXCJ3aWR0aFwiOiB3aWR0aCxcbiAgICAgICAgXCJoZWlnaHRcIjogaGVpZ2h0LFxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxuZnVuY3Rpb24gc2VsZl9zZXRDdXJzb3JQb3NpdGlvbihpZCwgcG9zaXRpb24pIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJpbnZva2VPblwiOiBcInNlbGZcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRDdXJzb3JQb3NpdGlvbjpcIixcbiAgICBcInZhbHVlc1wiOiBbe1xuICAgICAgXCJ2aWV3SWRcIjogaWQsXG4gICAgICBcInBvc2l0aW9uXCI6IHBvc2l0aW9uXG4gICAgfV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRDb250ZW50U2l6ZSgpIHtcbiAgcmV0dXJuICB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0Q29udGVudFNpemU6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IFwic2l6ZVwiICsgd2luZG93Ll9fU0laRV9JTkRFWCwgXCJjb21wdXRlZFwiOiBcInRydWVcIiwgXCJ0eXBlXCI6IFwic2l6ZVwifVxuICAgIF1cbiAgfTtcbn1cblxuZnVuY3Rpb24gVUlDb2xvcl9jb2xvcldpdGhSR0JBKHIsZyxiLGEpIHtcbiAgd2luZG93Ll9fQ09MT1JfSU5ERVgrKztcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImNvbG9yXCIgKyB3aW5kb3cuX19DT0xPUl9JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwiVUlDb2xvclwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwiY29sb3JXaXRoUmVkOmdyZWVuOmJsdWU6YWxwaGE6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IHIgLCBcInR5cGVcIjogXCJmXCJ9LFxuICAgICAge1wibmFtZVwiOiBnICwgXCJ0eXBlXCI6IFwiZlwifSxcbiAgICAgIHtcIm5hbWVcIjogYiAsIFwidHlwZVwiOiBcImZcIn0sXG4gICAgICB7XCJuYW1lXCI6IGEgLCBcInR5cGVcIjogXCJmXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfcGl2b3RYKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0UGl2b3RYOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiB2YWx1ZStcIlwiLCBcInR5cGVcIjogXCJzXCJ9LFxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3Bpdm90WSh2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldFBpdm90WTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogdmFsdWUrXCJcIiwgXCJ0eXBlXCI6IFwic1wifSxcbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gc2VsZl9hbmltYXRlX3RyYW5zbGF0aW9uKG9iaiwgcHJvcHMpIHtcbiAgb2JqLnZhbHVlc1swXS5wcm9wZXJ0aWVzID0gW1xuICAgICAge1xuICAgICAgICBcImtleVwiOiBcImZyYW1lXCIsXG4gICAgICAgIFwidmFsdWVzXCI6IHtcbiAgICAgICAgICBcInhcIjogcHJvcHMueCxcbiAgICAgICAgICBcInlcIjogcHJvcHMueSxcbiAgICAgICAgICBcIndpZHRoXCI6IHByb3BzLncsXG4gICAgICAgICAgXCJoZWlnaHRcIjogcHJvcHMuaCxcbiAgICAgICAgfVxuICAgICAgfSxcbiAgXVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIHNlbGZfYW5pbWF0ZV9yb3RhdGlvbihvYmosIHByb3BzKSB7XG4gIG9iai52YWx1ZXNbMF0ucHJvcGVydGllcyA9IFtcbiAgICB7XG4gICAgICBcImtleVwiOiBcImFuZ2xlXCIsXG4gICAgICBcInZhbHVlc1wiOiB7XG5cbiAgICAgIH1cbiAgICB9LFxuICBdXG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRUcmFuc2xhdGlvbloocGFyYW1zKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIlVJVmlld1wiLFxuICAgICAgXCJtZXRob2ROYW1lXCI6IFwidHJhbnNsYXRpb25aOlwiLFxuICAgICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IHBhcmFtcywgdHlwZTogXCJzXCIgfV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gc2VsZl9hbmltYXRlKHByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiaW52b2tlT25cIjogXCJzZWxmXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJhbmltYXRlOlwiLFxuICAgIFwidmFsdWVzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJqc29uXCI6IHByb3BzLmpzb24sXG4gICAgICAgIFwidmlld1RhZ1wiOiBwcm9wcy5pZCxcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0QmFja2dyb3VuZENvbG9yKCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldEJhY2tncm91bmRDb2xvcjpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogXCJjb2xvclwiICsgd2luZG93Ll9fQ09MT1JfSU5ERVgsIFwiY29tcHV0ZWRcIjogXCJ0cnVlXCJ9LFxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3N1cGVydmlldygpIHtcbiAgdmFyIGN1cnJWaWV3SW5kZXggPSB3aW5kb3cuX19WSUVXX0lOREVYO1xuXG4gIHdpbmRvdy5fX1ZJRVdfSU5ERVggKys7XG5cbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIGN1cnJWaWV3SW5kZXgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzdXBlcnZpZXdcIixcbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3Njcm9sbFRvSW5kZXgoaW5kZXgpe1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNjcm9sbFRvSW5kZXg6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IGluZGV4LCB0eXBlOiBcImlcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gVUlWaWV3X2JvdW5kcygpIHtcbiAgd2luZG93Ll9fUkVDVF9JTkRFWCsrO1xuXG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJyZWN0XCIgKyB3aW5kb3cuX19SRUNUX0lOREVYLFxuICAgIFwiZnJvbVN0b3JlXCI6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjpcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwiYm91bmRzXCIsXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRFbmFibGVkKG1vZGUpIHtcbiByZXR1cm4ge1xuICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgXCJtZXRob2ROYW1lXCI6XCJzZXRFbmFibGVkOlwiLFxuICAgXCJ2YWx1ZXNcIjpbXG4gICAgIHtcIm5hbWVcIjogbW9kZSwgXCJ0eXBlXCI6IFwiaVwifSxcbiAgIF1cbiB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2Nyb2xsRW5hYmxlZChzdGF0dXMpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJNSlBUYWJsZVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRTY3JvbGxFbmFibGVkOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7IFwibmFtZVwiOiBzdGF0dXMsIFwidHlwZVwiOiBcInNcIiB9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldEF1dG9Db3JyZWN0aW9uVHlwZShtb2RlKSB7XG4gcmV0dXJuIHtcbiAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgIFwibWV0aG9kTmFtZVwiOlwic2V0QXV0b2NvcnJlY3Rpb25UeXBlOlwiLFxuICAgXCJ2YWx1ZXNcIjpbXG4gICAgIHtcIm5hbWVcIjogbW9kZSwgXCJ0eXBlXCI6IFwiaVwifSxcbiAgIF1cbiB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0S2V5Ym9hcmRUeXBlKG1vZGUpIHtcbiByZXR1cm4ge1xuICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgXCJtZXRob2ROYW1lXCI6XCJzZXRLZXlib2FyZFR5cGU6XCIsXG4gICBcInZhbHVlc1wiOltcbiAgICAge1wibmFtZVwiOiBtb2RlLCBcInR5cGVcIjogXCJpXCJ9LFxuICAgXVxuIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRBdXRvQ2FwaXRhbGl6YXRpb25UeXBlKG1vZGUpIHtcbiByZXR1cm4ge1xuICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgXCJtZXRob2ROYW1lXCI6XCJzZXRBdXRvY2FwaXRhbGl6YXRpb25UeXBlczpcIixcbiAgIFwidmFsdWVzXCI6W1xuICAgICB7XCJuYW1lXCI6IG1vZGUsIFwidHlwZVwiOiBcImlcIn0sXG4gICBdXG4gfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldFN0YXR1c0JhclN0eWxlKG1vZGUpIHtcbiByZXR1cm4ge1xuICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgXCJpbnZva2VPblwiOiBcInNlbGZcIixcbiAgIFwibWV0aG9kTmFtZVwiOlwic2V0U3RhdHVzQmFyU3R5bGU6XCIsXG4gICBcInZhbHVlc1wiOltcbiAgICAge1wibmFtZVwiOiBtb2RlLCBcInR5cGVcIjogXCJzXCJ9LFxuICAgXVxuIH1cbn1cblxuZnVuY3Rpb24gdGhpc19iZWNvbWVGaXJzdFJlc3BvbmRlcihtb2RlKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwiZm9jdXM6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3tcIm5hbWVcIjogbW9kZSwgXCJ0eXBlXCI6IFwic1wifV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRPbkl0ZW1DbGljayhjYWxsYmFjaykge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldE9uSXRlbUNsaWNrOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAgeyBcIm5hbWVcIjogY2FsbGJhY2tNYXBwZXIubWFwKGNhbGxiYWNrKSwgXCJ0eXBlXCI6IFwic1wiIH0sXG4gICAgXVxuICB9XG4gfVxuXG5mdW5jdGlvbiB0aGlzX3NldE9uRm9jdXNDYWxsYmFjayhjYWxsYmFjaykge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldE9uRm9jdXNDYWxsYmFjazpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHsgXCJuYW1lXCI6IGNhbGxiYWNrTWFwcGVyLm1hcChjYWxsYmFjayksIFwidHlwZVwiOiBcInNcIiB9LFxuICAgIF1cbiAgfVxuIH1cblxuZnVuY3Rpb24gdGhpc19zZXRPbk1lcmNoYW50Vmlld0hlaWdodENoYW5nZUNhbGxiYWNrKGNhbGxiYWNrKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0T25NZXJjaGFudFZpZXdIZWlnaHRDaGFuZ2U6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7IFwibmFtZVwiOiBjYWxsYmFja01hcHBlci5tYXAoY2FsbGJhY2spLCBcInR5cGVcIjogXCJzXCIgfSxcbiAgICBdXG4gIH1cbiB9XG5cbmZ1bmN0aW9uIHRoaXNfc2V0T24oZW5hYmxlZCkge1xuIHJldHVybiB7XG4gICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICBcIm1ldGhvZE5hbWVcIjpcInNldE9uOmFuaW1hdGVkOlwiLFxuICAgXCJ2YWx1ZXNcIjpbXG4gICAgIHtcIm5hbWVcIjogZW5hYmxlZCwgXCJ0eXBlXCI6IFwiaVwifSxcbiAgICAge1wibmFtZVwiOiBcIjFcIiwgXCJ0eXBlXCI6IFwiaVwifVxuICAgXVxuIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zaG93VmVydGljYWxTY3JvbGxCYXIoZW5hYmxlZCkge1xuIHJldHVybiB7XG4gICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICBcIm1ldGhvZE5hbWVcIjpcInNldFNob3dzVmVydGljYWxTY3JvbGxJbmRpY2F0b3I6XCIsXG4gICBcInZhbHVlc1wiOltcbiAgICAge1wibmFtZVwiOiBlbmFibGVkLCBcInR5cGVcIjogXCJpXCJ9XG4gICBdXG4gfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldFNlY3VyZVRleHRFbnRyeShlbmFibGVkKSB7XG4gcmV0dXJuIHtcbiAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgIFwibWV0aG9kTmFtZVwiOlwic2V0U2VjdXJlVGV4dEVudHJ5OlwiLFxuICAgXCJ2YWx1ZXNcIjpbXG4gICAgIHtcIm5hbWVcIjogZW5hYmxlZCwgXCJ0eXBlXCI6IFwiaVwifSxcbiAgIF1cbiB9XG59XG5cbmZ1bmN0aW9uIFVJSW1hZ2VfaW1hZ2VOYW1lZChpbWFnZSkge1xuICB3aW5kb3cuX19JTUFHRV9JTkRFWCsrO1xuXG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJpbWFnZVwiICsgd2luZG93Ll9fSU1BR0VfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBcInNlbGZcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcImltYWdlTmFtZWQ6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IGltYWdlLCBcInR5cGVcIjogXCJzXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0SW1hZ2UoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRJbWFnZTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogXCJpbWFnZVwiICsgd2luZG93Ll9fSU1BR0VfSU5ERVgsIFwiY29tcHV0ZWRcIjogXCJ0cnVlXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHNlbGZfcmVjdEZyb21EaWN0aW9uYXJ5KHgseSx3LGgpIHtcbiAgd2luZG93Ll9fUkVDVF9JTkRFWCsrO1xuXG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJyZWN0XCIgKyB3aW5kb3cuX19SRUNUX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogXCJzZWxmXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJyZWN0RnJvbURpY3Rpb25hcnk6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XG4gICAgICAgIFwieFwiOiB4LFxuICAgICAgICBcInlcIjogeSxcbiAgICAgICAgXCJ3aWR0aFwiOiB3LFxuICAgICAgICBcImhlaWdodFwiOiBoLFxuICAgICAgfVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3VwZGF0ZUxheW91dFBhcmFtcyhjb25maWcpIHtcbiAgdmFyIGRhdGEgPSB7XG4gICAgXCJ3aWR0aFwiOiBjb25maWcud2lkdGgsXG4gICAgXCJoZWlnaHRcIjogY29uZmlnLmhlaWdodCxcbiAgICBcIm1hcmdpblwiOiBjb25maWcubWFyZ2luLFxuICAgIFwicGFkZGluZ1wiOiBjb25maWcucGFkZGluZyxcbiAgICBcIndlaWdodFwiOiBjb25maWcud2VpZ2h0LFxuICAgIFwiZ3Jhdml0eVwiOiBjb25maWcuZ3Jhdml0eSxcbiAgICBcInZpc2liaWxpdHlcIjogY29uZmlnLnZpc2liaWxpdHksXG4gICAgXCJvcmllbnRhdGlvblwiOiBjb25maWcub3JpZW50YXRpb24sXG4gICAgXCJhbGlnbm1lbnRfcnVsZXNcIiA6IGNvbmZpZy5hbGlnbm1lbnRfcnVsZXNcbiAgICB9XG4gIGlmKGRhdGEuYWxpZ25tZW50X3J1bGVzICYmIGRhdGEuYWxpZ25tZW50X3J1bGVzLmxlbmd0aCA9PSAwKXtcbiAgICBkZWxldGUgZGF0YS5hbGlnbm1lbnRfcnVsZXM7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJpbnZva2VPblwiOiBcInRoaXNcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJ1cGRhdGVMYXlvdXRQYXJhbXM6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3tcbiAgICAgICAgXCJuYW1lXCI6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICBcInR5cGVcIjogJ3MnXG4gICAgfV1cbiAgfTtcbn1cblxuXG5mdW5jdGlvbiB0aGlzX3NldFBhZGRpbmcocGFkZGluZykge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJNSlBWaWV3QUxcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldFBhZGRpbmdMZWZ0OlRvcDpSaWdodDpCb3R0b206XCIsXG4gICAgXCJ2YWx1ZXNcIjogcGFkZGluZy5zcGxpdCgnLCcpLm1hcChtYWtlVW5pdClcbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldE1hcmdpbihtYXJnaW4pIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiTUpQVmlld0FMXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRNYXJnaW5MZWZ0OlRvcDpSaWdodDpCb3R0b206XCIsXG4gICAgXCJ2YWx1ZXNcIjogbWFyZ2luLnNwbGl0KCcsJykubWFwKG1ha2VVbml0KVxuICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VVbml0ICh2LGksYXJyKSB7XG4gIHJldHVybiB7bmFtZSA6IHYrJycsIHR5cGUgOiAnZid9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0SGVpZ2h0KGhlaWdodCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJNSlBWaWV3QUxcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldEhlaWdodDpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogaGVpZ2h0ICsnJywgXCJ0eXBlXCI6ICdpJ31cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRXaWR0aCh3aWR0aCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJNSlBWaWV3QUxcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldFdpZHRoOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiB3aWR0aCArJycsIFwidHlwZVwiOiAnaSd9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0RnJhbWUoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0RnJhbWU6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IFwicmVjdFwiICsgd2luZG93Ll9fUkVDVF9JTkRFWCwgXCJjb21wdXRlZFwiOiBcInRydWVcIiwgXCJ0eXBlXCI6IFwicmVjdFwifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZWxmX2FsaWduVG9QYXJlbnQodHlwZSwgdmFsdWVzKSB7XG4gIHdpbmRvdy5fX1BPSU5UX0lOREVYKys7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJwb2ludFwiICsgd2luZG93Ll9fUE9JTlRfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBcInNlbGZcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcImFsaWduVG9QYXJlbnQ6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XG4gICAgICAgIFwibmFtZVwiOiB0eXBlLFxuICAgICAgICBcInhcIjogdmFsdWVzLngsXG4gICAgICAgIFwieVwiOiB2YWx1ZXMueSxcbiAgICAgICAgXCJ5T2Zmc2V0XCI6IHZhbHVlcy55T2Zmc2V0LFxuICAgICAgICBcInhPZmZzZXRcIjogdmFsdWVzLnhPZmZzZXQsXG4gICAgICB9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0Q2VudGVyKCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldENlbnRlcjpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgICAgICB7XCJuYW1lXCI6IFwicG9pbnRcIiArIHdpbmRvdy5fX1BPSU5UX0lOREVYLCBcImNvbXB1dGVkXCI6IFwidHJ1ZVwiLCAgXCJ0eXBlXCI6IFwicG9pbnRcIn1cbiAgICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0VGV4dCh0ZXh0KSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0VGV4dDpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgICAgICB7XCJuYW1lXCI6IGVuY29kZVVSSSh0ZXh0KSwgXCJ0eXBlXCI6IFwic1wifVxuICAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRSZWd1bGFyRXhwcmVzc2lvbih0ZXh0KSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldFJlZ3VsYXJFeHByZXNzaW9uOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAgICAgIHtcIm5hbWVcIjogdGV4dCwgXCJ0eXBlXCI6IFwic1wifVxuICAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RW5jb2RlZERhdGEodGV4dCkge1xuICB2YXIgZW5jb2RlZFN0cmluZyA9IHRleHQ7XG4gIGlmIChpc015c3RpcXVlVmVyc2lvbkdyZWF0ZXJUaGFuKFwiMVwiKSkge1xuICAgIGVuY29kZWRTdHJpbmcgPSBidG9hKGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0KSk7XG4gIH0gZWxzZSBpZiAoaXNNeXN0aXF1ZVZlcnNpb25HcmVhdGVyVGhhbihcIjBcIikpIHtcbiAgICBlbmNvZGVkU3RyaW5nID0gYnRvYSh0ZXh0LnJlcGxhY2UoL1teXFx4MDAtXFx4N0ZdL2csIFwiXCIpKTtcbiAgfVxuICByZXR1cm4gZW5jb2RlZFN0cmluZztcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRIVE1MVGV4dCh0ZXh0KSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0SHRtbFRleHQ6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgeyBcIm5hbWVcIjogZ2V0RW5jb2RlZERhdGEodGV4dClcbiAgICAgICwgXCJ0eXBlXCI6IFwic1wiXG4gICAgICB9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0UGxhY2Vob2xkZXIodGV4dCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldFBsYWNlaG9sZGVyOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAgICAgIHtcIm5hbWVcIjogdGV4dCwgXCJ0eXBlXCI6IFwic1wifVxuICAgICBdXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0UGxhY2Vob2xkZXJQcm9wZXJ0aWVzKGRhdGEpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJNSlBUZXh0Vmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldFBsYWNlaG9sZGVyUHJvcGVydGllczpcIixcbiAgICBcInZhbHVlc1wiOiBbe1wibmFtZVwiOiBkYXRhLCBcInR5cGVcIjogXCJzXCJ9XVxuICB9O1xufVxuXG5mdW5jdGlvbiBVSUZvbnRfc3lzdGVtRm9udE9mU2l6ZShzaXplKSB7XG4gIHdpbmRvdy5fX0ZPTlRfSU5ERVgrKztcblxuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZm9udFwiICsgd2luZG93Ll9fRk9OVF9JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwiVUlGb250XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzeXN0ZW1Gb250T2ZTaXplOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBzaXplLCBcInR5cGVcIjogXCJmXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIFVJRm9udF9mb250V2l0aE5hbWUobmFtZSwgc2l6ZSkge1xuICB3aW5kb3cuX19GT05UX0lOREVYKys7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmb250XCIgKyB3aW5kb3cuX19GT05UX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogXCJNSlBGb250XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJmb250V2l0aE5hbWU6c2l6ZTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogbmFtZSwgXCJ0eXBlXCI6IFwic1wifSxcbiAgICAgIHtcIm5hbWVcIjogc2l6ZS5sZW5ndGg+MD9zaXplOlwiMTRcIiwgXCJ0eXBlXCI6IFwiZlwifSxcbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRGb250KCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0Rm9udDpcIixcbiAgICBcInZhbHVlc1wiOiBbe1xuICAgICAgXCJuYW1lXCI6IFwiZm9udFwiICsgd2luZG93Ll9fRk9OVF9JTkRFWCxcbiAgICAgIFwiY29tcHV0ZWRcIjogXCJ0cnVlXCJcbiAgICB9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NpemVUb0ZpdCgpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzaXplVG9GaXRcIlxuICB9XG59XG5cbmZ1bmN0aW9uIFVJRm9udF9ib2xkU3lzdGVtRm9udE9mU2l6ZShzaXplKSB7XG4gIHdpbmRvdy5fX0ZPTlRfSU5ERVgrKztcblxuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZm9udFwiICsgd2luZG93Ll9fRk9OVF9JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwiVUlGb250XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJib2xkU3lzdGVtRm9udE9mU2l6ZTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogc2l6ZSwgXCJ0eXBlXCI6IFwiZlwifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiBVSUZvbnRfc3lzdGVtRm9udE9mU2l6ZVdlaWdodChzaXplLCB3ZWlnaHQpIHtcbiAgd2luZG93Ll9fRk9OVF9JTkRFWCsrO1xuXG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmb250XCIgKyB3aW5kb3cuX19GT05UX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogXCJVSUZvbnRcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInN5c3RlbUZvbnRPZlNpemU6d2VpZ2h0OlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBzaXplICwgXCJ0eXBlXCI6IFwiZlwifSxcbiAgICAgIHtcIm5hbWVcIjogd2VpZ2h0ICwgXCJ0eXBlXCI6IFwiZlwifSxcbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRMaW5lQnJlYWtNb2RlKG1vZGUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRMaW5lQnJlYWtNb2RlOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBtb2RlLCBcInR5cGVcIjogXCJpXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0TnVtYmVyT2ZMaW5lcyhjb3VudCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldE51bWJlck9mTGluZXM6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IGNvdW50LCBcInR5cGVcIjogXCJpXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0VGV4dEFsaWdubWVudChtb2RlKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0R3Jhdml0eTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogbW9kZSAsIFwidHlwZVwiOiBcInNcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRUZXh0Q29sb3IoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0VGV4dENvbG9yOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiAnY29sb3InICsgd2luZG93Ll9fQ09MT1JfSU5ERVgsIFwiY29tcHV0ZWRcIjogXCJ0cnVlXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0VGV4dExlbmd0aExpbWl0KGxlbmd0aCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldFRleHRMZW5ndGhMaW1pdDpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgICAge1wibmFtZVwiOiBsZW5ndGggKyBcIlwiLCBcInR5cGVcIjogXCJpXCJ9XG4gICAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19yZW1vdmVDZWxsKGNlbGxJbmRleCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwicmVtb3ZlT2JqZWN0QXRJbmRleDpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgICAge1wibmFtZVwiOiBjZWxsSW5kZXggKyBcIlwiLCBcInR5cGVcIjogXCJpXCJ9XG4gICAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gVUlDb2xvcl9mcm9tTGl0ZXJhbChjb2xvcikge1xuICB3aW5kb3cuX19DT0xPUl9JTkRFWCsrO1xuXG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJjb2xvclwiICsgd2luZG93Ll9fQ09MT1JfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBcIlVJQ29sb3JcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogY29sb3IgKyBcIkNvbG9yXCIsXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19sYXllcigpIHtcbiAgd2luZG93Ll9fTEFZRVJfSU5ERVgrKztcblxuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwibGF5ZXJcIiArIHdpbmRvdy5fX0xBWUVSX0lOREVYLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcImxheWVyXCIsXG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Q29ybmVyUmFkaXVzKHJhZGl1cykge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldE1KUENvcm5lclJhZGl1czpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogcmFkaXVzICsgXCJcIiwgXCJ0eXBlXCI6IFwiZlwifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRCb3JkZXJXaWR0aCh3aWR0aCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldE1KUEJvcmRlcldpZHRoOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiB3aWR0aCArIFwiXCIsICBcInR5cGVcIjogXCJmXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldEJvcmRlckNvbG9yKCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldE1KUEJvcmRlckNvbG9yOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBcImNvbG9yXCIgKyB3aW5kb3cuX19DT0xPUl9JTkRFWCwgXCJjb21wdXRlZFwiOiBcInRydWVcIiwgdHlwZTogXCJjZ2NvbG9yXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0U2hhZG93KGlkLCBzaGFkb3dPZmZzZXQsIHNoYWRvd0JsdXIsIHNoYWRvd1NwcmVhZCwgc2hhZG93Q29sb3IsIHNoYWRvd09wYWNpdHkpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRTaGFkb3c6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW1xuICAgICAge1xuICAgICAgICBcIm5hbWVcIjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBcInZpZXdJZFwiOiBpZCxcbiAgICAgICAgXCJjb2xvclwiOiBzaGFkb3dDb2xvcixcbiAgICAgICAgXCJibHVyXCI6IHNoYWRvd0JsdXIsXG4gICAgICAgIFwib3BhY2l0eVwiOiBzaGFkb3dPcGFjaXR5LFxuICAgICAgICBcIm9mZnNldFwiOiBzaGFkb3dPZmZzZXQsXG4gICAgICAgIFwic3ByZWFkXCI6IHNoYWRvd1NwcmVhZFxuICAgICAgICB9KSxcbiAgICAgICAgXCJ0eXBlXCI6IFwic1wiXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldEdyYWRpZW50KGRhdGEpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRHcmFkaWVudDpcIixcbiAgICBcInZhbHVlc1wiOiBbe1xuICAgICAgXCJuYW1lXCI6IGRhdGEsXG4gICAgICBcInR5cGVcIjogXCJzXCJcbiAgICB9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldEJhY2tncm91bmRJbWFnZSgpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldEJhY2tncm91bmRJbWFnZTpcIixcbiAgICBcInZhbHVlc1wiOiBbe1xuICAgICAgXCJuYW1lXCI6IFwiaW1hZ2VcIiArIHdpbmRvdy5fX0lNQUdFX0lOREVYLFxuICAgICAgXCJjb21wdXRlZFwiOiBcInRydWVcIlxuICAgIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIF9VSUxhYmVsTGF5ZXJfc2V0TWFza3NUb0JvdW5kcygpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6XCJsYXllclwiICsgd2luZG93Ll9fTEFZRVJfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBcIl9VSUxhYmVsTGF5ZXJcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldE1KUE1hc2tzVG9Cb3VuZHM6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IFwiMVwiLCB0eXBlOiBcImlcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRUYWcodGFnKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0VGFnOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiB0YWcsIHR5cGU6IFwiaVwifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZWxmX2dldFZpZXdGcm9tVGFnKHRhZyl7XG4gIHdpbmRvdy5fX1ZJRVdfSU5ERVgrKztcblxuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwic2VsZlwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwiZ2V0Vmlld0Zyb21UYWc6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IHRhZywgXCJ0eXBlXCI6IFwic1wifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldEltYWdlVVJMKGlkLHVybCxwbGFjZWhvbGRlcikge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImludm9rZU9uXCI6IFwic2VsZlwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0SW1hZ2VXaXRoVXJsOjo6OlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBcIlwiICsgaWQsIFwidHlwZVwiOiBcInNcIn0sXG4gICAgICB7XCJuYW1lXCI6IHVybCwgXCJ0eXBlXCI6IFwic1wifSxcbiAgICAgIHtcIm5hbWVcIjogcGxhY2Vob2xkZXIsIFwidHlwZVwiOiBcInNcIn1cbiAgICBdXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0R2lmKGlkLCBpbWFnZU5hbWUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJpbnZva2VPblwiOiBcInNlbGZcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJsb2FkR2lmOjo6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IFwiXCIgKyBpZCwgXCJ0eXBlXCI6IFwic1wiIH0sIHsgXCJuYW1lXCI6IGltYWdlTmFtZSwgXCJ0eXBlXCI6IFwic1wiIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc3RhcnRHaWYoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInN0YXJ0R0lGXCJcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zdG9wR2lmKCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzdG9wR0lGXCJcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2VsZl9zZXRBbHBoYShhbHBoYSl7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0QWxwaGE6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IFN0cmluZyhhbHBoYSksIHR5cGU6IFwiZlwifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldEhpZGRlbihoaWRkZW4pe1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldEhpZGRlbjpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogKChoaWRkZW4gPT09IFwiZ29uZVwiIHx8IGhpZGRlbiA9PT0gXCJpbnZpc2libGVcIikgPyBcIjFcIiA6IFwiMFwiKSwgdHlwZTogXCJpXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0VGV4dFByb3BlcnRpZXMoZGF0YSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUFRleHRWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0VGV4dFByb3BlcnRpZXM6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW1xuICAgICAge1wibmFtZVwiOiBkYXRhLFwidHlwZVwiOiBcInNcIn1dXG4gIH07XG59XG5cblxuZnVuY3Rpb24gdGhpc19zZXRMZXR0ZXJTcGFjaW5nKGRhdGEpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJNSlBFZGl0VGV4dFwiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldExldHRlclNwYWNpbmc6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IGRhdGEsIFwidHlwZVwiOiBcInNcIiB9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldExpbmVTcGFjaW5nKGRhdGEpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJNSlBMYWJlbFwiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldExpbmVTcGFjaW5nOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7IFwibmFtZVwiOiBkYXRhLCBcInR5cGVcIjogXCJzXCIgfV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRDYXJldENvbG9yKCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldFRpbnRDb2xvcjpcIixcbiAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogJ2NvbG9yJyArIHdpbmRvdy5fX0NPTE9SX0lOREVYLCBcImNvbXB1dGVkXCI6IFwidHJ1ZVwiIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2Nyb2xsVG8odmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJNSlBUYWJsZVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzY3JvbGxUbzpcIixcbiAgICBcInZhbHVlc1wiOiBbe1wibmFtZVwiOiB2YWx1ZSwgXCJ0eXBlXCI6IFwic1wifV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRFeHBhbmQodmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJNSlBFeHBhbmRhYmxlQ2VsbFwiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldEV4cGFuZDpcIixcbiAgICBcInZhbHVlc1wiOiBbe1wibmFtZVwiOiB2YWx1ZSwgXCJ0eXBlXCI6IFwic1wifV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRFeHBhbmREdXJhdGlvbih2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUEV4cGFuZGFibGVDZWxsXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0RXhwYW5kRHVyYXRpb246XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3tcIm5hbWVcIjogdmFsdWUsIFwidHlwZVwiOiBcInNcIn1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0RXhwYW5kQWxwaGEodmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJNSlBFeHBhbmRhYmxlQ2VsbFwiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldEV4cGFuZEFscGhhOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7XCJuYW1lXCI6IHZhbHVlLCBcInR5cGVcIjogXCJzXCJ9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldFN3eXBlKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiTUpQVGFibGVWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0U3d5cGU6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IHZhbHVlID8gXCJ0cnVlXCIgOiBcImZhbHNlXCIsIFwidHlwZVwiOiBcInNcIiB9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldFVzZXJJbnRlcmFjdGlvbihoaWRkZW4pe1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldFVzZXJJbnRlcmFjdGlvbkVuYWJsZWQ6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IChoaWRkZW4gPT09IFwidHJ1ZVwiID8gXCIxXCIgOiBcIjBcIiksIHR5cGU6IFwiaVwifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldFNlcGFyYXRvcih2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldFNlcGFyYXRvcjpcIixcbiAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogdmFsdWUsIHR5cGU6IFwic1wiIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0U2VwYXJhdG9yUmVwZWF0KHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0U2VwYXJhdG9yUmVwZWF0OlwiLFxuICAgIFwidmFsdWVzXCI6IFt7IFwibmFtZVwiOiB2YWx1ZSwgdHlwZTogXCJzXCIgfV1cbiAgfTtcbn1cblxuXG5mdW5jdGlvbiB0aGlzX3NldFN3aXBlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICAgICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJNSlBUYWJsZVZpZXdcIixcbiAgICAgICAgXCJtZXRob2ROYW1lXCI6IFwic2V0U3dpcGVDYWxsYmFjazpcIixcbiAgICAgICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IHZhbHVlLCB0eXBlOiBcInNcIiB9XVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0dXBMaXN0KGxpc3REYXRhLCBsaXN0SXRlbSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiTUpQUmVwZWF0VGFibGVWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0dXBMaXN0OjpcIixcbiAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogbGlzdERhdGEsIHR5cGU6IFwic1wiIH0sIHsgXCJuYW1lXCI6IGxpc3RJdGVtLCB0eXBlOiBcInNcIiB9XVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfaW5saW5lQW5pbWF0aW9uKGNvbmZpZykge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBcInRoaXNcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRJbmxpbmVBbmltYXRpb246XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IG1vZGlmeVRyYW5zbGF0aW9uKGNvbmZpZyksIHR5cGU6IFwic1wiIH1dXG4gICAgfTtcbn1cblxuXG5mdW5jdGlvbiBtb2RpZnlUcmFuc2xhdGlvbihjb25maWcpe1xuICB2YXIgeCA9IGNvbmZpZy54IHx8IFwiMFwiO1xuICB2YXIgeSA9IGNvbmZpZy55IHx8IFwiMFwiO1xuICB2YXIgYW5pbWF0aW9uQXJyYXkgPSBKU09OLnBhcnNlKGNvbmZpZy5pbmxpbmVBbmltYXRpb24pO1xuICB2YXIgYW5pbWF0aW9uQXJyYXkgPSBhbmltYXRpb25BcnJheS5tYXAoZnVuY3Rpb24oYSl7XG4gICAgaWYoYS5oYXNPd25Qcm9wZXJ0eShcImZyb21YXCIpKXtcbiAgICAgIGEuZnJvbVggPSBwYXJzZUludChhLmZyb21YKSArIHBhcnNlSW50KHgpICsgJyc7XG4gICAgICBpZighYS5oYXNPd25Qcm9wZXJ0eShcInRvWFwiKSl7XG4gICAgICAgIGEudG9YID0gMCArIHBhcnNlSW50KHgpICsgJyc7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKGEuaGFzT3duUHJvcGVydHkoXCJ0b1hcIikpe1xuICAgICAgYS50b1ggPSBwYXJzZUludChhLnRvWCkgKyBwYXJzZUludCh4KSArICcnO1xuICAgIH1cbiAgICBpZihhLmhhc093blByb3BlcnR5KFwiZnJvbVlcIikpe1xuICAgICAgYS5mcm9tWSA9IHBhcnNlSW50KGEuZnJvbVkpICsgcGFyc2VJbnQoeSkgKyAnJztcbiAgICAgIGlmKCFhLmhhc093blByb3BlcnR5KFwidG9ZXCIpKXtcbiAgICAgICAgYS50b1kgPSAwICsgcGFyc2VJbnQoeSkgKyAnJztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoYS5oYXNPd25Qcm9wZXJ0eShcInRvWVwiKSl7XG4gICAgICBhLnRvWSA9IHBhcnNlSW50KGEudG9ZKSArIHBhcnNlSW50KHkpICsgJyc7XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9KVxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYW5pbWF0aW9uQXJyYXkpO1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldENsb3NlU3dpcGUodmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICAgICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJNSlBUYWJsZVZpZXdcIixcbiAgICAgICAgXCJtZXRob2ROYW1lXCI6IFwiY2xvc2VTd2lwZTpcIixcbiAgICAgICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IHZhbHVlID8gXCJ0cnVlXCIgOiBcImZhbHNlXCIsIHR5cGU6IFwic1wiIH1dXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRFbmFibGVTd3lwZSh2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICAgICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgICAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICAgICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUFRhYmxlVmlld1wiLFxuICAgICAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRTd2lwZUVuYWJsZWQ6XCIsXG4gICAgICAgIFwidmFsdWVzXCI6IFt7IFwibmFtZVwiOiB2YWx1ZSA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiLCB0eXBlOiBcInNcIiB9XVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfYnJpbmdTdWJWaWV3VG9Gcm9udChwYXJhbXMpe1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImludm9rZU9uXCI6IFwic2VsZlwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwiYnJpbmdTdWJWaWV3VG9Gcm9udDpcIixcbiAgICBcInZhbHVlc1wiOiBbe1wibmFtZVwiOiBwYXJhbXMsIHR5cGU6IFwic1wifV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRDb250ZW50TW9kZShtb2RlKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0Q29udGVudE1vZGU6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbe1wibmFtZVwiOiBtb2RlLCB0eXBlOiBcImlcIn1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfYWRqdXN0Vmlld1dpdGhLZXlib2FyZChzdGF0dXMpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRBZGp1c3RWaWV3V2l0aEtleWJvYXJkOlwiLFxuICAgIFwidmFsdWVzXCI6W3tcIm5hbWVcIjogc3RhdHVzLCB0eXBlOiBcInNcIn1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHNlbGZfc2V0UG9wdXBNZW51KHBvcHVwTWVudSwgb25NZW51SXRlbUNsaWNrKSB7XG4gIHZhciBjYWxsYmFjayA9IGNhbGxiYWNrTWFwcGVyLm1hcChvbk1lbnVJdGVtQ2xpY2spO1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImludm9rZU9uXCI6IFwic2VsZlwiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcImNyZWF0ZUFjdGlvblNoZWV0V2l0aFRpdGxlczo6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IHBvcHVwTWVudSwgXCJ0eXBlXCI6IFwic1wiIH0sIHsgXCJuYW1lXCI6IGNhbGxiYWNrLCBcInR5cGVcIjogXCJzXCIgfV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRDb3JuZXJDdXJ2ZXMoY29ybmVyKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IFwiZmFsc2VcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwidGhpc1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldENvcm5lckN1cnZlczpcIixcbiAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogY29ybmVyICsgXCJcIiwgXCJ0eXBlXCI6IFwic1wiIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0Q2xpcHNUb0JvdW5kcyhib3VuZHMpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRDbGlwc1RvQm91bmRzOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7IFwibmFtZVwiOiBib3VuZHMgPyBcIjFcIiA6IFwiMFwiLCB0eXBlOiBcImlcIiB9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX2ZvbnRXaXRoTmFtZShuYW1lKSB7XG4gIHdpbmRvdy5fX0ZPTlRfSU5ERVgrKztcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZvbnRcIiArIHdpbmRvdy5fX0ZPTlRfSU5ERVgsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcImZvbnRXaXRoTmFtZTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogbmFtZSwgXCJ0eXBlXCI6IFwic1wifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiBVSUNvbG9yX3NldENvbG9yKGNvbG9yKSB7XG4gIGxldCB2YWx1ZXM7XG4gIGxldCBhbHBoYSA9IFwiMS4wMFwiO1xuXG4gIGlmIChjb2xvci5sZW5ndGggPj0gOCkge1xuICAgIGFscGhhID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDEsMyksIDE2KTtcbiAgICBhbHBoYSA9IChhbHBoYS8yNTUpLnRvRml4ZWQoMik7XG4gICAgY29sb3IgPSBjb2xvci5zdWJzdHJpbmcoMywgOSk7XG4gIH0gZWxzZSB7XG4gICAgY29sb3IgPSBjb2xvci5zdWJzdHJpbmcoMSwgY29sb3IubGVuZ3RoKTtcbiAgfVxuXG4gIGNvbG9yID0gY29udmVydEhleFRvUmdiKHJXUyhjb2xvcikpO1xuICB2YWx1ZXMgPSBjb2xvci5zcGxpdCgnLCcpO1xuXG4gIGxldCByID0gcldTKHZhbHVlc1swXSk7XG4gIGxldCBnID0gcldTKHZhbHVlc1sxXSk7XG4gIGxldCBiID0gcldTKHZhbHVlc1syXSk7XG4gIGxldCBhID0gYWxwaGE7XG5cblxuICByZXR1cm4gVUlDb2xvcl9jb2xvcldpdGhSR0JBKHIsIGcsIGIsIGEpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1LZXlzKGNvbmZpZykge1xuICB2YXIga2V5cyA9ICBPYmplY3Qua2V5cyhjb25maWcpO1xuICBmb3IgKHZhciBpID0gMDsgaTxrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWdba2V5c1tpXV0gPT0gXCJ1bmRlZmluZWRcIiB8fCBjb25maWdba2V5c1tpXV0gPT0gbnVsbCkge1xuICAgICAgZGVsZXRlIGNvbmZpZ1trZXlzW2ldXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWdba2V5c1tpXV0gPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBjb25maWdba2V5c1tpXV0gPSBjYWxsYmFja01hcHBlci5tYXAoY29uZmlnW2tleXNbaV1dKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGtleXNbaV0gIT09IFwiaWRcIiAmJlxuICAgICAgICAgIGtleXNbaV0gIT09IFwiX19maWxlbmFtZVwiICYmXG4gICAgICAgICAga2V5c1tpXSAhPT0gXCJjdXJyQ2hpbGRPZmZzZXRcIiAmJlxuICAgICAgICAgIGtleXNbaV0gIT09IFwibWV0aG9kc1wiICAmJlxuICAgICAgICAgIGtleXNbaV0gIT09IFwic3dpcGVFbmFibGVcIiAmJlxuICAgICAgICAgIGtleXNbaV0gIT09IFwidmlld1BhZ2VyXCIgJiZcbiAgICAgICAgICBrZXlzW2ldICE9PSBcInRhYmxlVmlld1wiKSB7XG5cbiAgICAgICAgZGVsZXRlIGNvbmZpZ1trZXlzW2ldXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVR5cGUodHlwZSwgY29uZmlnKSB7XG4gIHZhciBtb2RpZmllZFR5cGUgID0gXCJtSlBWaWV3XCI7XG4gIHN3aXRjaCh0eXBlKXtcbiAgICBjYXNlIFwiZWRpdFRleHRcIjp7XG4gICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUEVkaXRUZXh0XCI7XG4gICAgfVxuICAgIGJyZWFrO1xuICAgIGNhc2UgXCJpbWFnZVZpZXdcIjp7XG4gICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUEltYWdlVmlld1wiO1xuICAgIH1cbiAgICBicmVhaztcbiAgICBjYXNlIFwidGV4dFZpZXdcIjp7XG4gICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUFRleHRWaWV3XCI7XG4gICAgfVxuICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzY3JvbGxWaWV3XCI6IHtcbiAgICAgICAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnaGVpZ2h0JykmJiBjb25maWcuaGVpZ2h0ID09ICd3cmFwX2NvbnRlbnQnKXtcbiAgICAgICAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQU2Nyb2xsVmlld1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBTY3JvbGxWaWV3XCI7XG4gICAgICAgIH1cbiAgICAgICAgY29uZmlnLm9yaWVudGF0aW9uID0gXCJ2ZXJ0aWNhbFwiO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBcImhvcml6b250YWxTY3JvbGxWaWV3XCI6IHtcbiAgICAgICAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnd2lkdGgnKSYmIGNvbmZpZy53aWR0aCA9PSAnd3JhcF9jb250ZW50Jyl7XG4gICAgICAgICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUFNjcm9sbFZpZXdcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQU2Nyb2xsVmlld1wiO1xuICAgICAgICB9XG4gICAgICAgIGNvbmZpZy5vcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcInRhYmxlVmlld1wiOlxuICAgIGNhc2UgXCJsaXN0Vmlld1wiOiB7XG4gICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwibGlzdERhdGFcIikgJiYgY29uZmlnLmhhc093blByb3BlcnR5KFwibGlzdEl0ZW1cIikpIHtcbiAgICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBSZXBlYXRUYWJsZVZpZXdcIjtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQVGFibGVWaWV3XCI7XG4gICAgICB9XG4gICAgfVxuICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjb2xsZWN0aW9uVmlld1wiOlxuICAgIGNhc2UgXCJ2aWV3UGFnZXJcIjp7XG4gICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUENvbGxlY3Rpb25WaWV3XCI7XG4gICAgfVxuICAgIGJyZWFrO1xuICAgIGNhc2UgXCJwcm9ncmVzc0JhclwiOiB7XG4gICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUEFjdGl2aXR5SW5kaWNhdG9yXCI7XG4gICAgfVxuICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzd2l0Y2hcIjoge1xuICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBTd2l0Y2hcIjtcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcInN3eXBlTGF5b3V0XCI6IHtcbiAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQU3d5cGVMYXlvdXRDZWxsXCI7XG4gICAgfVxuICAgIGJyZWFrO1xuICAgIGNhc2UgXCJhY2NvcmRpb25MYXlvdXRcIjoge1xuICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBFeHBhbmRhYmxlQ2VsbFwiO1xuICAgIH1cbiAgICBicmVhaztcbiAgICBjYXNlIFwibGluZWFyTGF5b3V0XCI6IHtcbiAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQTGluZWFyTGF5b3V0XCI7XG4gICAgfVxuICAgIGJyZWFrO1xuICAgIGNhc2UgXCJyZWxhdGl2ZUxheW91dFwiOiB7XG4gICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUFJlbGF0aXZlTGF5b3V0XCI7XG4gICAgfVxuICAgIGJyZWFrO1xuICAgIGNhc2UgXCJmcmFtZUxheW91dFwiOiB7XG4gICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUFJlbGF0aXZlTGF5b3V0XCI7XG4gICAgfVxuICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6IHtcbiAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQVmlld1wiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbW9kaWZpZWRUeXBlO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VLZXlzKGNvbmZpZywgdHlwZSkge1xuICB2YXIgbWFwID0ge1xuICAgIFwiaW1hZ2VVcmxcIjogXCJpbWFnZU5hbWVkXCIsXG4gICAgXCJwYWNrYWdlSWNvblwiIDogXCJpbWFnZU5hbWVkXCIsXG4gICAgXCJjb2xvclwiOiBcInRleHRDb2xvclwiXG4gIH07XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhjb25maWcpO1xuXG4gIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKG1hcFtrZXldKSB7XG4gICAgICBjb25maWdbbWFwW2tleV1dID0gY29uZmlnW2tleV07XG4gICAgICBkZWxldGUgY29uZmlnW2tleV07XG4gICAgfVxuICB9KTtcblxuICBpZiAoY29uZmlnLnN0cm9rZSkgIHtcbiAgICBjb25maWcuYm9yZGVyV2lkdGggPSBjb25maWcuc3Ryb2tlLnNwbGl0KFwiLFwiKVswXTtcbiAgICBjb25maWcuYm9yZGVyQ29sb3IgPSBjb25maWcuc3Ryb2tlLnNwbGl0KFwiLFwiKVsxXTtcbiAgfVxuXG4gIC8vIEFkZCBhbGwgdmlldyBiYXNlZCBwcm9wIGluamVjdGlvbnMgYmVsb3cuXG4gIHN3aXRjaCAodHlwZS50b0xvd2VyQ2FzZSgpKXtcbiAgICBjYXNlIFwic2Nyb2xsdmlld1wiOntcbiAgICAgIGNvbmZpZy5vcmllbnRhdGlvbiA9IFwidmVydGljYWxcIlxuICAgIH1cbiAgICBicmVhaztcbiAgICBjYXNlIFwiaG9yaXpvbnRhbHNjcm9sbHZpZXdcIjp7XG4gICAgICBjb25maWcub3JpZW50YXRpb24gPSBcImhvcml6b250YWxcIlxuICAgIH1cbiAgICBicmVhaztcbiAgfVxuICAvLyBBZGQgYWxsIHZpZXcgYmFzZWQgcHJvcCBpbmplY3Rpb25zIGFib3ZlLlxuICByZXR1cm4gY29uZmlnO1xufVxuXG5cbi8vIGNTIC0gY29udmVydCB0byBTdHJpbmdcbi8vIHJXUyAtIHJlbW92ZSB3aGl0ZSBzcGFjZXNcbi8vIGZyb21TdG9yZSBtZXRob2RzIGRvbnQgIHVzZSBpbnZva2VPblxuLy8gdGhlIGV4dHJhY3QgY2xhc3NOYW1lIG91dCBvZiB0aGUgc3RvcmVkIG9iamVjdCBpbiB0aGUgc3RvcmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odHlwZSwgY29uZmlnLCBfZ2V0U2V0VHlwZSkge1xuICBjb25maWcgPSBjaGFuZ2VLZXlzKGZsYXR0ZW5PYmplY3QoY29uZmlnKSwgdHlwZSk7XG4gIHR5cGUgPSBnZW5lcmF0ZVR5cGUodHlwZSwgY29uZmlnKTtcbiAgZ2V0U2V0VHlwZSA9IChfZ2V0U2V0VHlwZSA9PSBcInNldFwiKT8xOjA7XG4gIGNvbmZpZy5tZXRob2RzID0gW107XG4gIGNvbmZpZy5hbGlnbm1lbnRfcnVsZXMgPSBbXTtcblxuICAvLyB0YWcgc2V0XG4gIGlmIChjb25maWcuaWQpICB7XG4gICAgbGV0IHRhZyA9ICByV1MoY1MoY29uZmlnLmlkKSk7XG5cbiAgICBpZiAoIWdldFNldFR5cGUpIHtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2goc2VsZl9nZXRWaWV3RnJvbVRhZyh0YWcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFRhZyh0YWcpKTtcbiAgICB9XG4gIH1cblxuICAvLyBmcmFtZVxuICBpZiAoIWNvbmZpZy51c2VDb25zdHJhaXRzICYmIChjb25maWcueCB8fCBjb25maWcueSB8fCBjb25maWcudyB8fCBjb25maWcuaCkpIHtcbiAgICBsZXQgeCA9IHJXUyhjUyhjb25maWcueCkpIHx8ICBcIjBcIjtcbiAgICBsZXQgeSA9ICByV1MoY1MoY29uZmlnLnkpKXx8IFwiMFwiO1xuICAgIGxldCB3aWR0aCA9IHJXUyhjUyhjb25maWcudykpIHx8IFwiMFwiO1xuICAgIGxldCBoZWlnaHQgPSByV1MoY1MoY29uZmlnLmgpKSB8fCBcIjBcIjtcblxuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goc2VsZl9yZWN0RnJvbURpY3Rpb25hcnkoeCx5LHdpZHRoLGhlaWdodCkpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRGcmFtZSgpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJ1c2VDb25zdHJhaXRzXCIpICYmIGNvbmZpZy51c2VDb25zdHJhaXRzICYmIGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImV4cGFuZFwiKSl7XG4gICAgY29uZmlnLnZpc2liaWxpdHkgPSBjb25maWcuZXhwYW5kID8gKGNvbmZpZy52aXNpYmlsaXR5ID8gY29uZmlnLnZpc2liaWxpdHkgOiBcInZpc2libGVcIikgOiBcImdvbmVcIjtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJhbGlnblBhcmVudEJvdHRvbVwiKSAmJiBjb25maWcuYWxpZ25QYXJlbnRCb3R0b20gPT0gXCJ0cnVlLC0xXCIpe1xuICAgIGNvbmZpZy5hbGlnbm1lbnRfcnVsZXMucHVzaCgnYWxpZ25fcGFyZW50X2JvdHRvbScpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy51c2VDb25zdHJhaXRzKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3VwZGF0ZUxheW91dFBhcmFtcyhjb25maWcpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJsZXR0ZXJTcGFjaW5nXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldExldHRlclNwYWNpbmcoY29uZmlnLmxldHRlclNwYWNpbmcpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJsaW5lU3BhY2luZ1wiKSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRMaW5lU3BhY2luZyhjb25maWcubGluZVNwYWNpbmcpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJjYXJldENvbG9yXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChVSUNvbG9yX3NldENvbG9yKGNvbmZpZy5jYXJldENvbG9yKSk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldENhcmV0Q29sb3IoKSk7XG4gIH1cblxuICAvLyBiYWNrZ3JvdW5kXG4gIGlmIChjb25maWcuYmFja2dyb3VuZCB8fCBjb25maWcuZ3JhZGllbnQgfHwgY29uZmlnLmJhY2tncm91bmREcmF3YWJsZSkge1xuICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJncmFkaWVudFwiKSkge1xuICAgICAgdmFyIGdyYWRpZW50ID0gSlNPTi5wYXJzZShjb25maWcuZ3JhZGllbnQpO1xuICAgICAgdmFyIGdyYWRpZW50VHlwZSA9IGdyYWRpZW50LnR5cGU7XG4gICAgICB2YXIgZ3JhZGllbnRBbmdsZSA9IGdyYWRpZW50LmFuZ2xlO1xuICAgICAgdmFyIGNvbG91cnMgPSBbXTtcblxuICAgICAgZ3JhZGllbnQudmFsdWVzLmZvckVhY2goY29sb3IgPT4ge1xuICAgICAgICBjb2xvdXJzLnB1c2goY29udmVydENvbG9yVG9SZ2JhKGNvbG9yKSk7XG4gICAgICB9KTtcblxuICAgICAgZ3JhZGllbnQgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGNvbG9yczogY29sb3VycyxcbiAgICAgICAgdHlwZTogZ3JhZGllbnRUeXBlLFxuICAgICAgICBhbmdsZTogZ3JhZGllbnRBbmdsZVxuICAgICAgfSk7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0R3JhZGllbnQoZ3JhZGllbnQpKTtcbiAgICB9IGVsc2UgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImJhY2tncm91bmREcmF3YWJsZVwiKSkge1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaChVSUltYWdlX2ltYWdlTmFtZWQoY29uZmlnLmJhY2tncm91bmREcmF3YWJsZSkpO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEJhY2tncm91bmRJbWFnZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaChVSUNvbG9yX3NldENvbG9yKGNvbmZpZy5iYWNrZ3JvdW5kKSk7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0QmFja2dyb3VuZENvbG9yKCkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGJvcmRlckNvbG9yLCByYWRpdXMgYW5kIHdpZHRoXG4gIC8vIHdpbGwgd29yayBvbmx5IGZvciB1aVZpZXcgYW5kIHVpTGFiZWxcbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImNvcm5lclJhZGl1c1wiKSkge1xuICAgIGxldCBhcmcgPSByV1MoY1MoY29uZmlnLmNvcm5lclJhZGl1cykpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goc2V0Q29ybmVyUmFkaXVzKGFyZykpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImJvcmRlcldpZHRoXCIpKSB7XG4gICAgbGV0IGFyZyA9IHJXUyhjUyhjb25maWcuYm9yZGVyV2lkdGgpKTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHNldEJvcmRlcldpZHRoKGFyZykpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImJvcmRlckNvbG9yXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChVSUNvbG9yX3NldENvbG9yKGNvbmZpZy5ib3JkZXJDb2xvcikpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goc2V0Qm9yZGVyQ29sb3IoKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmRlYnVnKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX2xheWVyKCkpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goc2V0Qm9yZGVyV2lkdGgoXCIxXCIpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuc2hhZG93KSB7XG4gICAgdmFyIHNoYWRvd1ZhbHVlcyA9IGNvbmZpZy5zaGFkb3cuc3BsaXQoJywnKTtcbiAgICB2YXIgc2hhZG93Qmx1ciA9IHJXUyhjUyhzaGFkb3dWYWx1ZXNbMl0pKTtcbiAgICB2YXIgc2hhZG93U3ByZWFkID0gcldTKGNTKHNoYWRvd1ZhbHVlc1szXSkpO1xuICAgIHZhciBzaGFkb3dPcGFjaXR5ID0gcldTKGNTKHNoYWRvd1ZhbHVlc1s1XSkpO1xuICAgIHZhciBzaGFkb3dPZmZzZXQgPSB7XG4gICAgICB4OiByV1MoY1Moc2hhZG93VmFsdWVzWzBdKSksXG4gICAgICB5OiByV1MoY1Moc2hhZG93VmFsdWVzWzFdKSlcbiAgICB9O1xuXG4gICAgdmFyIHNoYWRvd0NvbG9yID0gY29udmVydENvbG9yVG9SZ2JhKHNoYWRvd1ZhbHVlc1s0XSk7XG5cbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0U2hhZG93KGNvbmZpZy5pZCwgc2hhZG93T2Zmc2V0LCBzaGFkb3dCbHVyLCBzaGFkb3dTcHJlYWQsIHNoYWRvd0NvbG9yLCBzaGFkb3dPcGFjaXR5KSk7XG4gIH1cblxuICAvLyBtYWtlIGNoaWxkIGZ1bGxXaWR0aCBhbmQgaGVpZ2h0IG9mIHBhcmVudFxuICBpZiAoY29uZmlnLmZpbGxQYXJlbnQpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc3VwZXJ2aWV3KCkpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goVUlWaWV3X2JvdW5kcygpKTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0RnJhbWUoKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiaW1hZ2VOYW1lZFwiKSkge1xuICAgIGxldCBpZCA9IGNTKGNvbmZpZy5pZCk7XG4gICAgbGV0IHBsYWNlaG9sZGVyID0gY29uZmlnLnBsYWNlSG9sZGVyIHx8IFwiXCI7XG4gICAgaWYgKGNvbmZpZy5pbWFnZU5hbWVkLmVuZHNXaXRoKFwiLmdpZlwiKSl7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0R2lmKGlkLCBjb25maWcuaW1hZ2VOYW1lZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0SW1hZ2VVUkwoaWQsIGNvbmZpZy5pbWFnZU5hbWVkLCBwbGFjZWhvbGRlcikpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJhZGp1c3RWaWV3V2l0aEtleWJvYXJkXCIpKSB7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfYWRqdXN0Vmlld1dpdGhLZXlib2FyZChjb25maWcuYWRqdXN0Vmlld1dpdGhLZXlib2FyZCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInBsYXlHaWZcIikpe1xuICAgIGlmIChjb25maWcucGxheUdpZilcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zdGFydEdpZigpKTtcbiAgICBlbHNlXG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc3RvcEdpZigpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGludCkge1xuICAgIGlmIChjb25maWcubGV0dGVyU3BhY2luZykge1xuICAgICAgdmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICdoaW50JzogY1MoY29uZmlnLmhpbnQpLFxuICAgICAgICAnbGV0dGVyU3BhY2luZyc6IGNvbmZpZy5sZXR0ZXJTcGFjaW5nXG4gICAgICB9KTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRQbGFjZWhvbGRlclByb3BlcnRpZXMoZGF0YSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0UGxhY2Vob2xkZXIoY1MoY29uZmlnLmhpbnQpKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInNlcGFyYXRvclwiKSkge1xuICAgIHZhciBfZW5hYmxlZDYgPSBjUyhjb25maWcuc2VwYXJhdG9yKTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0U2VwYXJhdG9yKF9lbmFibGVkNikpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInNlcGFyYXRvclJlcGVhdFwiKSkge1xuICAgIHZhciBfZW5hYmxlZDYgPSBjUyhjb25maWcuc2VwYXJhdG9yUmVwZWF0KTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0U2VwYXJhdG9yUmVwZWF0KF9lbmFibGVkNikpO1xuICB9XG5cbiAgIGlmIChjb25maWcudHJhbnNsYXRpb25aKXtcbiAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFRyYW5zbGF0aW9uWihjUyhjb25maWcudHJhbnNsYXRpb25aKSkpO1xuICAgfVxuXG4gIGlmIChjb25maWcuc2Nyb2xsVG8pIHtcbiAgICB2YXIgZGF0YSA9IGNvbmZpZy5zY3JvbGxUby5zcGxpdChcIixcIik7XG4gICAgdmFyIHBhcnNlZERhdGEgPSBKU09OLnN0cmluZ2lmeSh7XCJ4XCI6IGRhdGFbMF0sIFwieVwiOiBkYXRhWzFdfSk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3Njcm9sbFRvKGNTKHBhcnNlZERhdGEpKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiZXhwYW5kXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEV4cGFuZChjb25maWcuZXhwYW5kP1wiMVwiOlwiMFwiKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiZXhwYW5kRHVyYXRpb25cIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0RXhwYW5kRHVyYXRpb24oY1MoY29uZmlnLmV4cGFuZER1cmF0aW9uKSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImV4cGFuZEFscGhhXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEV4cGFuZEFscGhhKGNTKGNvbmZpZy5leHBhbmRBbHBoYSkpKTtcbiAgfVxuXG4gIC8vVXBkYXRlZCB0byBoYW5kbGUgMCBiZWluZyBwYXNzZWQgZm9yIGRlZmF1bHQgYWxpZ25tZW50XG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJ0ZXh0QWxpZ25tZW50XCIpKSB7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0VGV4dEFsaWdubWVudChyV1MoY1MoY29uZmlnLnRleHRBbGlnbm1lbnQpKSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInRleHRGcm9tSHRtbFwiKSkge1xuICAgICAgdmFyIG1vZGlmaWVkSHRtbFN0cmluZyA9IFwiPHNwYW4gc3R5bGU9XFxcIlwiXG4gICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiZm9udFN0eWxlXCIpKSB7XG4gICAgICAgICAgbW9kaWZpZWRIdG1sU3RyaW5nICs9IFwiZm9udC1mYW1pbHk6XCIrY29uZmlnLmZvbnRTdHlsZStcIjtcIlxuICAgICAgfVxuICAgICAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInRleHRTaXplXCIpKSB7XG4gICAgICAgICAgbW9kaWZpZWRIdG1sU3RyaW5nICs9IFwiZm9udC1zaXplOlwiK2NvbmZpZy50ZXh0U2l6ZStcIjtcIlxuICAgICAgfVxuICAgICAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInRleHRDb2xvclwiKSkge1xuICAgICAgICAgIG1vZGlmaWVkSHRtbFN0cmluZyArPSBcImNvbG9yOlwiK2NvbmZpZy50ZXh0Q29sb3IrXCI7XCJcbiAgICAgIH1cbiAgICAgIG1vZGlmaWVkSHRtbFN0cmluZyArPVwiXFxcIj5cIitjb25maWcudGV4dEZyb21IdG1sK1wiPC9zcGFuPlwiO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEhUTUxUZXh0KG1vZGlmaWVkSHRtbFN0cmluZykpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy50ZXh0Q29sb3IpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKFVJQ29sb3Jfc2V0Q29sb3IoY29uZmlnLnRleHRDb2xvcikpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRUZXh0Q29sb3IoKSk7XG4gIH1cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImZvbnRTdHlsZVwiKSkge1xuICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJ0ZXh0U2l6ZVwiKSkge1xuICAgICAgICBjb25maWcubWV0aG9kcy5wdXNoKFVJRm9udF9mb250V2l0aE5hbWUoY29uZmlnLmZvbnRTdHlsZSwgY29uZmlnLnRleHRTaXplK1wiXCIpKTtcbiAgICB9IGVsc2V7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfZm9udFdpdGhOYW1lKGNvbmZpZy5mb250U3R5bGUpKTtcbiAgICB9XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEZvbnQoKSk7XG4gIH0gZWxzZSBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwidGV4dFNpemVcIikpe1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goVUlGb250X3N5c3RlbUZvbnRPZlNpemUoY29uZmlnLnRleHRTaXplK1wiXCIpKTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0Rm9udCgpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuc2Nyb2xsRW5hYmxlZCl7XG4gICAgdmFyIHNjcm9sbEVuYWJsZWQgPSBjUyhjb25maWcuc2Nyb2xsRW5hYmxlZCk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3Njcm9sbEVuYWJsZWQoc2Nyb2xsRW5hYmxlZCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5mb250RmFtaWx5KSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChVSUZvbnRfc3lzdGVtRm9udE9mU2l6ZVdlaWdodCgoY29uZmlnLnRleHRTaXplIHx8IFwiMTRcIikgKyBcIlwiLCBjb25maWcuZm9udEZhbWlseSB8fCBcIjAuMFwiKSk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEZvbnQoKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwic2luZ2xlTGluZVwiKSkge1xuICAgIGlmKCFjb25maWcuc2luZ2xlTGluZSl7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0TGluZUJyZWFrTW9kZShcIjBcIikpO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldE51bWJlck9mTGluZXMoXCIwXCIpKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmZpZy51c2VDb25zdHJhaXRzICYmIGNvbmZpZy52aXNpYmlsaXR5KSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEhpZGRlbihjb25maWcudmlzaWJpbGl0eSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImNsaWNrYWJsZVwiKSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRVc2VySW50ZXJhY3Rpb24ocldTKGNTKGNvbmZpZy5jbGlja2FibGUpKSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy50cmFuc2xhdGlvblgpIHtcbiAgICBsZXQgcHJvcHMgPSBbe1xuICAgICAgJ2lkJzogJycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiksXG4gICAgICAndHlwZSc6ICd0cmFuc2xhdGlvbicsXG4gICAgICAncnVuT25SZW5kZXInIDogJ3RydWUnLFxuICAgICAgJ2Vhc2luZycgOiAnbGluZWFyJyxcbiAgICAgICdkZWxheSc6ICcwJyxcbiAgICAgICdkdXJhdGlvbic6ICcxJyxcbiAgICAgICdwcm9wcycgOiBKU09OLnN0cmluZ2lmeShbeyd0byc6ICcnICsgY29uZmlnLnRyYW5zbGF0aW9uWCwgJ3Byb3AnOid0cmFuc2xhdGlvblgnLCAnZnJvbSc6JzAnfV0pXG4gICAgfV07XG5cbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHNlbGZfYW5pbWF0ZSh7J2lkJzonJytjb25maWcuaWQsJ2pzb24nOkpTT04uc3RyaW5naWZ5KHByb3BzKX0pKTtcbiAgfVxuXG4gIGlmIChjb25maWcudHJhbnNsYXRpb25ZKSB7XG4gICAgbGV0IHByb3BzID0gW3tcbiAgICAgICdpZCc6ICcnICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIpLFxuICAgICAgJ3R5cGUnOiAndHJhbnNsYXRpb24nLFxuICAgICAgJ3J1bk9uUmVuZGVyJyA6ICd0cnVlJyxcbiAgICAgICdlYXNpbmcnIDogJ2xpbmVhcicsXG4gICAgICAnZGVsYXknOiAnMCcsXG4gICAgICAnZHVyYXRpb24nOiAnMScsXG4gICAgICAncHJvcHMnIDogSlNPTi5zdHJpbmdpZnkoW3sndG8nOiAnJyArIGNvbmZpZy50cmFuc2xhdGlvblksJ3Byb3AnOid0cmFuc2xhdGlvblknLCdmcm9tJzonMCd9XSlcbiAgICB9XTtcblxuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goc2VsZl9hbmltYXRlKHsnaWQnOicnK2NvbmZpZy5pZCwnanNvbic6SlNPTi5zdHJpbmdpZnkocHJvcHMpfSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5hX3JvdGF0ZSkge1xuICAgIC8vVE9ETzogRklYIFRISVMgQlJJTkcgSVQgT1VUU0lERVxuICAgIGxldCBwcm9wcyA9IHtcbiAgICAgICAgXCJkdXJhdGlvblwiOiBjb25maWcuYV9kdXJhdGlvbixcbiAgICAgICAgXCJpZFwiOiBjb25maWcuaWQsXG4gICAgICAgIFwiZGVsYXlcIjogY29uZmlnLmFfZGVsYXksXG4gICAgICAgIFwib3B0aW9uXCI6IGNvbmZpZy5hX29wdGlvbixcbiAgICAgICAgXCJ0eXBlXCI6IFwicm90YXRpb25cIixcbiAgICAgfTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2goc2VsZl9hbmltYXRlKHByb3BzKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiaHRtbFRleHRcIikpIHtcbiAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEhUTUxUZXh0KGNvbmZpZy5odG1sVGV4dCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImJyaW5nU3ViVmlld1RvRnJvbnRcIikpIHtcbiAgICBsZXQgdmlld1RhZyA9IGNTKGNvbmZpZy5pZCk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX2JyaW5nU3ViVmlld1RvRnJvbnQodmlld1RhZykpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImNvbnRlbnRNb2RlXCIpKSB7XG4gICAgbGV0IGNvbnRlbnRNb2RlID0gY1MoY29uZmlnLmNvbnRlbnRNb2RlKTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0Q29udGVudE1vZGUoY29udGVudE1vZGUpKTtcbiAgfVxuXG4gIGlmKGNvbmZpZy5vbkZvY3VzKXtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0T25Gb2N1c0NhbGxiYWNrKGNvbmZpZy5vbkZvY3VzKSk7XG4gIH1cblxuICBpZihjb25maWcuaGFzT3duUHJvcGVydHkoXCJvbk1lcmNoYW50Vmlld0hlaWdodENoYW5nZVwiKSl7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldE9uTWVyY2hhbnRWaWV3SGVpZ2h0Q2hhbmdlQ2FsbGJhY2soY29uZmlnLm9uTWVyY2hhbnRWaWV3SGVpZ2h0Q2hhbmdlKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwicGl2b3RYXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3Bpdm90WChjb25maWcucGl2b3RYK1wiXCIpKTtcbiAgfVxuXG5pZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwicGl2b3RZXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3Bpdm90WShjb25maWcucGl2b3RZK1wiXCIpKTtcbiAgfVxuXG4gIGlmKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcIm9uSXRlbUNsaWNrXCIpKXtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0T25JdGVtQ2xpY2soY29uZmlnLm9uSXRlbUNsaWNrKSk7XG4gIH1cblxuXG4gIGlmIChjb25maWcuc3RhdHVzQmFyU3R5bGUpIHtcbiAgICBsZXQgZW5hYmxlZCA9IGNTKGNvbmZpZy5zdGF0dXNCYXJTdHlsZSk7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0U3RhdHVzQmFyU3R5bGUoZW5hYmxlZCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImVuYWJsZWRcIikpIHtcbiAgICBsZXQgZW5hYmxlZCA9IGNTKGNvbmZpZy5lbmFibGVkKTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRFbmFibGVkKGVuYWJsZWQpKTtcbiAgfVxuXG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImlucHV0VHlwZUlcIikpIHtcbiAgICAgIGxldCBrZXlib2FyZFR5cGUgPSBjUyhjb25maWcuaW5wdXRUeXBlSSk7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0S2V5Ym9hcmRUeXBlKGtleWJvYXJkVHlwZSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5pbnB1dFR5cGUpIHtcbiAgICBsZXQga2V5Ym9hcmRUeXBlID0gY29uZmlnLmlucHV0VHlwZTtcbiAgICBpZiAoa2V5Ym9hcmRUeXBlID09IFwibnVtZXJpY1wiIHx8IGtleWJvYXJkVHlwZSA9PSBcIm51bWVyaWNXaXRob3V0U3VnZ2VzdGlvblwiKSB7XG4gICAgICBjb25maWcuaW5wdXRUeXBlID0gNDtcbiAgICB9IGVsc2UgaWYgKGtleWJvYXJkVHlwZSA9PSBcImVtYWlsXCIpIHtcbiAgICAgIGNvbmZpZy5pbnB1dFR5cGUgPSA3O1xuICAgIH0gZWxzZSBpZiAoa2V5Ym9hcmRUeXBlID09IFwibnVtZXJpY1Bhc3N3b3JkXCIpIHtcbiAgICAgIGNvbmZpZy5pbnB1dFR5cGUgPSA0O1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFNlY3VyZVRleHRFbnRyeShcIjFcIikpO1xuICAgIH0gZWxzZSBpZiAoa2V5Ym9hcmRUeXBlID09IFwicGFzc3dvcmRcIikge1xuICAgICAgY29uZmlnLmlucHV0VHlwZSA9IDA7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0U2VjdXJlVGV4dEVudHJ5KFwiMVwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZy5pbnB1dFR5cGUgPSAwO1xuICAgIH1cbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0S2V5Ym9hcmRUeXBlKGNTKGNvbmZpZy5pbnB1dFR5cGUpKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiYXV0b0NhcGl0YWxpemF0aW9uVHlwZVwiKSkge1xuICAgICAgbGV0IGtleWJvYXJkVHlwZSA9IGNTKGNvbmZpZy5hdXRvQ2FwaXRhbGl6YXRpb25UeXBlKTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRBdXRvQ2FwaXRhbGl6YXRpb25UeXBlKGtleWJvYXJkVHlwZSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImF1dG9Db3JyZWN0aW9uVHlwZVwiKSkge1xuICAgIGxldCBhdXRvQ29ycmVjdGlvblR5cGUgPSBjUyhjb25maWcuYXV0b0NvcnJlY3Rpb25UeXBlKTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRBdXRvQ29ycmVjdGlvblR5cGUoYXV0b0NvcnJlY3Rpb25UeXBlKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiYmVjb21lRmlyc3RSZXNwb25kZXJcIikpIHtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19iZWNvbWVGaXJzdFJlc3BvbmRlcigpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJzZXRPblwiKSkge1xuICAgIGxldCBlbmFibGVkID0gY1MoY29uZmlnLnNldE9uKTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRPbihlbmFibGVkKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLnNjcm9sbFRvSW5kZXgpIHtcbiAgICBsZXQgZW5hYmxlZCA9IGNTKGNvbmZpZy5zY3JvbGxUb0luZGV4KTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zY3JvbGxUb0luZGV4KGVuYWJsZWQpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuc2hvd1ZlcnRpY2FsU2Nyb2xsQmFyKSB7XG4gICAgbGV0IGVuYWJsZWQgPSBjUyhjb25maWcuc2hvd1ZlcnRpY2FsU2Nyb2xsQmFyKTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zaG93VmVydGljYWxTY3JvbGxCYXIoZW5hYmxlZCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5sZW5ndGhMaW1pdCkge1xuICAgIGxldCBlbmFibGVkID0gY1MoY29uZmlnLmxlbmd0aExpbWl0KTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRUZXh0TGVuZ3RoTGltaXQoZW5hYmxlZCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInN3eXBlRW5hYmxlZFwiKSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRTd3lwZShjb25maWcuc3d5cGVFbmFibGVkKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiZm9jdXNcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfYmVjb21lRmlyc3RSZXNwb25kZXIoY1MoY29uZmlnLmZvY3VzKSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5wYXR0ZXJuKSB7XG4gICAgdmFyIHBhdFN0ciA9IGNTKGNvbmZpZy5wYXR0ZXJuKTtcbiAgICB2YXIgcGF0QXJyID0gcGF0U3RyLnNwbGl0KFwiLFwiKTtcbiAgICB2YXIgcGF0TGVuID0gcGF0QXJyW3BhdEFyci5sZW5ndGggLSAxXTtcbiAgICBwYXRTdHIgPSBwYXRBcnIuc2xpY2UoMCwgcGF0QXJyLmxlbmd0aCAtIDEpLmpvaW4oXCIsXCIpO1xuXG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFJlZ3VsYXJFeHByZXNzaW9uKGNTKHBhdFN0cikpKTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0VGV4dExlbmd0aExpbWl0KGNTKHBhdExlbikpKTtcbiAgfVxuXG4gIGlmIChjb25maWcucmVnRXhwKSB7XG4gICAgbGV0IGVuYWJsZWQgPSBjUyhjb25maWcucmVnRXhwKTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRSZWd1bGFyRXhwcmVzc2lvbihlbmFibGVkKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLnJlbW92ZUNlbGwpIHtcbiAgICBsZXQgY2VsbEluZGV4ID0gY1MoY29uZmlnLnJlbW92ZUNlbGwpO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3JlbW92ZUNlbGwoY2VsbEluZGV4KSk7XG4gIH1cblxuICBpZiAoY29uZmlnLnNlY3VyZVRleHRFbnRyeSkge1xuICAgIGxldCBlbmFibGVkID0gY1MoY29uZmlnLnNlY3VyZVRleHRFbnRyeSk7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0U2VjdXJlVGV4dEVudHJ5KGVuYWJsZWQpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoJ2NoZWNrZWQnKSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRPbihjb25maWcuY2hlY2tlZCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5wb3B1cE1lbnUpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHNlbGZfc2V0UG9wdXBNZW51KGNvbmZpZy5wb3B1cE1lbnUsIGNvbmZpZy5vbk1lbnVJdGVtQ2xpY2spKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJhbHBoYVwiKSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goc2VsZl9zZXRBbHBoYShjb25maWcuYWxwaGEpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuYW5pbWF0aW9uKSB7XG4gICAgbGV0IGFuaW1Qcm9wcyA9IHtcbiAgICAgIHZpZXdUYWc6ICcnICsgY29uZmlnLmlkLFxuICAgICAganNvbjogY29uZmlnLmFuaW1hdGlvblxuICAgIH07XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChzZWxmX2FuaW1hdGVOZXcoYW5pbVByb3BzKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwidGV4dFwiKSkge1xuICAgIGlmIChjb25maWcubGV0dGVyU3BhY2luZykge1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldExldHRlclNwYWNpbmcoY1MoY29uZmlnLmxldHRlclNwYWNpbmcpKSk7XG4gICAgfVxuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRUZXh0KGNTKGNvbmZpZy50ZXh0KSkpO1xuICB9XG5cbiAgaWYoY29uZmlnLmN1cnNvclBvc2l0aW9uKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChzZWxmX3NldEN1cnNvclBvc2l0aW9uKGNTKGNvbmZpZy5pZCksIGNTKGNvbmZpZy5jdXJzb3JQb3NpdGlvbikpKTtcbiAgfVxuXG4gIGlmIChjb25maWcub25Td2lwZSAmJiB0eXBlb2YgY29uZmlnLm9uU3dpcGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFN3aXBlQ2FsbGJhY2soY2FsbGJhY2tNYXBwZXIubWFwKGNvbmZpZy5vblN3aXBlKSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImNsb3NlU3dpcGVcIikpIHtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRDbG9zZVN3aXBlKGNvbmZpZy5jbG9zZVN3aXBlKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwic3d5cGVFbmFibGVkXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEVuYWJsZVN3eXBlKGNvbmZpZy5zd3lwZUVuYWJsZWQpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJsaXN0RGF0YVwiKSAmJiBjb25maWcuaGFzT3duUHJvcGVydHkoXCJsaXN0SXRlbVwiKSkge1xuICAgIGNvbnN0IGl0ZW0gPSBKU09OLnBhcnNlKGNvbmZpZy5saXN0SXRlbSk7XG4gICAgaXRlbS5pdGVtVmlldyA9IEFuZHJvaWQuY3JlYXRlTGlzdERhdGEoY29uZmlnLmlkLCBpdGVtLml0ZW1WaWV3KTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0dXBMaXN0KGNvbmZpZy5saXN0RGF0YSwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJpbmxpbmVBbmltYXRpb25cIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfaW5saW5lQW5pbWF0aW9uKGNvbmZpZykpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImNsaXBzVG9Cb3VuZHNcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0Q2xpcHNUb0JvdW5kcyhjb25maWcuY2xpcHNUb0JvdW5kcykpO1xuICB9XG5cbiAgaWYoY29uZmlnLmhhc093blByb3BlcnR5KFwiY29ybmVyUmFkaWlcIikpe1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRDb3JuZXJDdXJ2ZXMoY29uZmlnLmNvcm5lclJhZGlpKSk7XG4gIH1cblxuICBjb25maWcuY3VyckNoaWxkT2Zmc2V0ID0gMDtcbiAgY29uZmlnID0gdHJhbnNmb3JtS2V5cyhjb25maWcpO1xuXG4gIHJldHVybiB7Y29uZmlnOiBjb25maWcsIHR5cGU6IHR5cGV9O1xufTtcblxuZnVuY3Rpb24gc2VsZl9hbmltYXRlTmV3KHByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiaW52b2tlT25cIjogXCJzZWxmXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJhbmltYXRlOlwiLFxuICAgIFwidmFsdWVzXCI6IFtwcm9wc11cbiAgfTtcbn1cbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHBhcnNlUGFyYW1zIDogcmVxdWlyZShcIi4vcGFyc2VQYXJhbXNcIiksXG59XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbkFycmF5LnByb3RvdHlwZS5yb3RhdGUgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBzYXZlIHJlZmVyZW5jZXMgdG8gYXJyYXkgZnVuY3Rpb25zIHRvIG1ha2UgbG9va3VwIGZhc3RlclxuICB2YXIgcHVzaCA9IEFycmF5LnByb3RvdHlwZS5wdXNoLFxuICAgIHNwbGljZSA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2U7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChjb3VudCkge1xuICAgIHZhciBsZW4gPSB0aGlzLmxlbmd0aCA+Pj4gMCwgLy8gY29udmVydCB0byB1aW50XG4gICAgICBjb3VudCA9IGNvdW50ID4+IDA7IC8vIGNvbnZlcnQgdG8gaW50XG5cbiAgICAvLyBjb252ZXJ0IGNvdW50IHRvIHZhbHVlIGluIHJhbmdlIFswLCBsZW4pXG4gICAgY291bnQgPSAoKGNvdW50ICUgbGVuKSArIGxlbikgJSBsZW47XG5cbiAgICAvLyB1c2Ugc3BsaWNlLmNhbGwoKSBpbnN0ZWFkIG9mIHRoaXMuc3BsaWNlKCkgdG8gbWFrZSBmdW5jdGlvbiBnZW5lcmljXG4gICAgcHVzaC5hcHBseSh0aGlzLCBzcGxpY2UuY2FsbCh0aGlzLCAwLCBjb3VudCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xufSkoKTtcblxuZnVuY3Rpb24gZmxhdHRlbk9iamVjdChvYikge1xuICB2YXIgdG9SZXR1cm4gPSB7fTtcbiAgZm9yICh2YXIgaSBpbiBvYikge1xuICAgIGlmICghb2IuaGFzT3duUHJvcGVydHkoaSkpIGNvbnRpbnVlO1xuICAgIGlmICgodHlwZW9mIG9iW2ldKSA9PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGZsYXRPYmplY3QgPSBmbGF0dGVuT2JqZWN0KG9iW2ldKTtcbiAgICAgIGZvciAodmFyIHggaW4gZmxhdE9iamVjdCkge1xuICAgICAgICBpZiAoIWZsYXRPYmplY3QuaGFzT3duUHJvcGVydHkoeCkpIGNvbnRpbnVlO1xuICAgICAgICBpZiAodHlwZW9mIGZsYXRPYmplY3RbeF0gIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgdG9SZXR1cm5beF0gPSBmbGF0T2JqZWN0W3hdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0b1JldHVybltpXSA9IG9iW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0b1JldHVybjtcbn1cblxuZnVuY3Rpb24gcGFyc2VDb2xvcnMoY29sb3IpIHtcbiAgaWYgKGNvbG9yLmxlbmd0aCA8IDgpXG4gICAgcmV0dXJuIGNvbG9yO1xuXG4gIGlmIChjb2xvci5pbmRleE9mKFwicmdiYVwiKSAhPT0gLTEgfHwgY29sb3IuaW5kZXhPZihcInJnYlwiKSAhPT0gLTEpXG4gICAgcmV0dXJuIGNvbG9yO1xuXG4gIHZhciBhbHBoYSA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygxLCAzKSwgMTYpO1xuICBhbHBoYSA9IChhbHBoYSAvIDI1NSkudG9GaXhlZCgyKTtcblxuICB2YXIgaGV4Q29sb3IgPSBjb2xvci5zdWJzdHJpbmcoMywgOSk7XG4gIHZhciByZ2JhQ29sb3IgPSBcInJnYmEoXCIgKyBjb252ZXJ0SGV4VG9SZ2IoaGV4Q29sb3IpICsgXCIsXCIgKyBhbHBoYSArIFwiKVwiO1xuXG4gIHJldHVybiByZ2JhQ29sb3I7XG59XG5cbmZ1bmN0aW9uIHBhcnNlTGF5b3V0UHJvcHModHlwZSwgY29uZmlnLCBrZXkpIHtcbiAgY29uc3QgaXNNb2JpbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDcwMFxuICBpZiAodHlwZW9mIGNvbmZpZ1trZXldID09IFwidW5kZWZpbmVkXCIgfHwgY29uZmlnW2tleV0gPT0gbnVsbCkge1xuICAgIGRlbGV0ZSBjb25maWdba2V5XTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIWNvbmZpZy5zdHlsZSkge1xuICAgIGNvbmZpZy5zdHlsZSA9IHt9O1xuICAgIGNvbmZpZy5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiO1xuICAgIGNvbmZpZy5hbmltYXRpb24gPSB7fTtcbiAgICBjb25maWcuYW5pbWF0aW9uLnRyYW5zZm9ybSA9IFwiXCI7XG4gIH1cblxuICBpZiAoIWNvbmZpZy5hdHRyaWJ1dGVzKVxuICAgIGNvbmZpZy5hdHRyaWJ1dGVzID0ge307XG5cbiAgaWYgKCFjb25maWcuc3R5bGUuY2xhc3NOYW1lKVxuICAgIGNvbmZpZy5zdHlsZS5jbGFzc05hbWUgPSBcIlwiO1xuXG4gIGlmICgoa2V5ID09IFwib25DbGlja1wiIHx8IGtleSA9PSBcIm9uQ2xpY2tFdmVudFwiKSkge1xuICAgIGlmKCFpc01vYmlsZSAmJiAhY29uZmlnLmN1cnNvclR5cGUpe1xuICAgICAgY29uZmlnLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIH1cbiAgfVxuICBpZihrZXkgPT0gXCJjdXJzb3JUeXBlXCIpIHtcbiAgICBjb25maWcuc3R5bGUuY3Vyc29yID0gY29uZmlnLmN1cnNvclR5cGU7XG4gIH1cbiAgaWYgKGtleSA9PSBcInRleHRTaXplXCIpXG4gICAgY29uZmlnLnN0eWxlLmZvbnRTaXplID0gY29uZmlnLnRleHRTaXplICsgJ3B4JztcbiAgaWYgKGtleSA9PSAnZm9udFNpemUnKVxuICAgIGNvbmZpZy5zdHlsZS5mb250U2l6ZSA9IGNvbmZpZy5mb250U2l6ZSArICdweCc7XG4gIFxuICBpZiAoa2V5ID09ICd1cmwnKVxuICAgIGNvbmZpZy5hdHRyaWJ1dGVzLnNyYyA9IGNvbmZpZy51cmxcbiAgICBcbiAgLyppZiAoa2V5ID09IFwiaW1hZ2VVcmxcIil7XG4gICAgbGV0IGltYWdlVXJsID0gY29uZmlnLmltYWdlVXJsO1xuICAgIFxuICAgIGlmKGNvbmZpZy5yYXdEYXRhKSB7XG4gICAgICAvLyBEbyBub3RoaW5nXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0ZW1wID0gaW1hZ2VVcmwuc3BsaXQoJy4nKTtcbiAgICAgIGxldCBleHQgPSAnJztcbiAgICAgIGlmKHRlbXAgJiYgdGVtcC5sZW5ndGggPiAwKVxuICAgICAgICBleHQgPSB0ZW1wW3RlbXAubGVuZ3RoIC0gMV07XG4gICAgICBcbiAgICAgIGxldCBleHRzID0gW1wianBlZ1wiLCBcImpwZ1wiLCBcInBuZ1wiLCBcImJtcFwiLCBcInN2Z1wiLCBcImdpZlwiXTtcbiAgICAgIGV4dCA9IGV4dC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBpZighZXh0cy5pbmNsdWRlcyhleHQpKSB7XG4gICAgICAgIGltYWdlVXJsICs9ICcucG5nJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25maWcuYXR0cmlidXRlcy5zcmMgPSBpbWFnZVVybDtcbiAgfSovXG5cbiAgaWYgKGtleSA9PSBcImJhY2tncm91bmRDb2xvclwiKSB7XG4gICAgY29uZmlnLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcnNlQ29sb3JzKGNvbmZpZy5iYWNrZ3JvdW5kQ29sb3IpO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImJhY2tncm91bmRcIikge1xuICAgIGNvbmZpZy5zdHlsZS5iYWNrZ3JvdW5kID0gY29uZmlnLmJhY2tncm91bmQ7XG4gIH1cbiAgaWYgKGtleSA9PSBcImJhY2tncm91bmREcmF3YWJsZVwiKSB7XG4gICAgY29uZmlnLnN0eWxlW1wiYmFja2dyb3VuZC1pbWFnZVwiXSA9IFwidXJsKCdcIitjb25maWcuYmFja2dyb3VuZERyYXdhYmxlK1wiJylcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJjb2xvclwiKSB7XG4gICAgY29uZmlnLnN0eWxlLmNvbG9yID0gcGFyc2VDb2xvcnMoY29uZmlnLmNvbG9yKTtcbiAgfVxuXG4gIGlmKGtleSA9PSBcInBvc2l0aW9uXCIpIHtcbiAgICBjb25maWcuc3R5bGUucG9zaXRpb24gPSBjb25maWcucG9zaXRpb247XG4gIH1cblxuICBpZihrZXkgPT0gXCJib3R0b21GaXhlZFwiKSB7XG4gICAgY29uZmlnLnN0eWxlLmJvdHRvbSA9IGNvbmZpZy5ib3R0b21GaXhlZDtcbiAgfVxuICBpZihrZXkgPT0gXCJ0b3BGaXhlZFwiKSB7XG4gICAgY29uZmlnLnN0eWxlLnRvcCA9IGNvbmZpZy50b3BGaXhlZDtcbiAgfVxuXG4gIGlmKGtleSA9PSBcImF1dG9mb2N1c1wiKXtcbiAgICBpZihjb25maWcuYXV0b2ZvY3VzKXtcbiAgICAgIGNvbmZpZy5hdHRyaWJ1dGVzW1wiYXV0b2ZvY3VzXCJdID0gXCJhdXRvZm9jdXNcIjsgIFxuICAgIH1cbiAgfVxuICBpZihrZXk9PVwiZm9jdXNcIikge1xuICAgIGlmIChjb25maWcuZm9jdXMgJiYgY29uZmlnLmlkKXtcbiAgICAgIHZhciBkb2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcuaWQpO1xuICAgICAgaWYgKGRvYyl7XG4gICAgICAgIGRvYy5mb2N1cygpO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgaWYgKGtleSA9PSBcImNvcm5lclJhZGl1c1wiKSB7XG4gICAgY29uZmlnLnN0eWxlLmJvcmRlclJhZGl1cyA9IGNvbmZpZy5jb3JuZXJSYWRpdXMgKyBcInB4XCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwiYWxwaGFcIikge1xuICAgIGNvbmZpZy5zdHlsZS5vcGFjaXR5ID0gY29uZmlnW2tleV07XG4gIH1cblxuICBpZiAoa2V5ID09IFwiYV9hbHBoYVwiKSB7XG4gICAgY29uZmlnLmFuaW1hdGlvbi5vcGFjaXR5ID0gY29uZmlnW2tleV07XG4gIH1cblxuICBpZiAoa2V5ID09IFwiZm9udEZhbWlseVwiKSB7XG4gICAgY29uZmlnLnN0eWxlLmZvbnRGYW1pbHkgPSBjb25maWcuZm9udEZhbWlseTtcbiAgfVxuXG4gIGlmIChrZXkgPT0gJ3R5cGVmYWNlJykge1xuICAgIHN3aXRjaChjb25maWcudHlwZWZhY2Upe1xuICAgICAgY2FzZSAnbm9ybWFsJzpcbiAgICAgICAgY29uZmlnLnN0eWxlLmZvbnRXZWlnaHQgPSA0MDA7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvbGQnOlxuICAgICAgICBjb25maWcuc3R5bGUuZm9udFdlaWdodCA9IDcwMDtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaXRhbGljJzpcbiAgICAgICAgY29uZmlnLnN0eWxlLmZvbnRTdHlsZSA9ICdpdGFsaWMnO1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib2xkX2l0YWxpYyc6XG4gICAgICAgIGNvbmZpZy5zdHlsZS5mb250V2VpZ2h0ID0gNzAwO1xuICAgICAgICBjb25maWcuc3R5bGUuZm9udFN0eWxlID0gJ2l0YWxpYyc7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3VuZGVybGluZSc6XG4gICAgICAgIGNvbmZpZy5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICd1bmRlcmxpbmUnO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGtleSA9PSBcImZvbnRTdHlsZVwiKSB7XG4gICAgbGV0IG1hdGNoID0gY29uZmlnLmZvbnRTdHlsZS5tYXRjaCgvWy8tXS8pO1xuICAgIGxldCBmb250TmFtZSA9IG1hdGNoID8gY29uZmlnLmZvbnRTdHlsZS5zbGljZSgwLCBtYXRjaC5pbmRleCkgOiBjb25maWcuZm9udFN0eWxlO1xuICAgIGNvbmZpZy5zdHlsZS5mb250RmFtaWx5ID0gZm9udE5hbWU7XG5cbiAgICBpZiAoIW1hdGNoKVxuICAgICAgcmV0dXJuO1xuXG4gICAgbGV0IHR5cGUgPSBjb25maWcuZm9udFN0eWxlLnNsaWNlKG1hdGNoLmluZGV4ICsgMSk7XG4gICAgdHlwZSA9IHR5cGUucmVwbGFjZSgvWy0vXS9nLCAnJyk7XG4gICAgdHlwZSAgPSB0eXBlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAodHlwZS5pbmRleE9mKCdpdGFsaWMnKSAhPSAtMSlcbiAgICAgIGNvbmZpZy5zdHlsZS5mb250U3R5bGUgPSAnaXRhbGljJztcblxuICAgIGxldCBmb250V2VpZ2h0ID0gMDtcblxuICAgIGlmICh0eXBlLmluZGV4T2YoJ2V4dHJhbGlnaHQnKSAhPSAtMSlcbiAgICAgIGZvbnRXZWlnaHQgPSAyMDA7XG4gICAgZWxzZSBpZiAodHlwZS5pbmRleE9mKCdsaWdodCcpICE9IC0xKVxuICAgICAgZm9udFdlaWdodCA9IDMwMDtcbiAgICBlbHNlIGlmICh0eXBlLmluZGV4T2YoJ3JlZ3VsYXInKSAhPSAtMSB8fCB0eXBlLmluZGV4T2YoJ2Jvb2snKSAhPSAtMSlcbiAgICAgIGZvbnRXZWlnaHQgPSA0MDA7XG4gICAgZWxzZSBpZiAodHlwZS5pbmRleE9mKCdzZW1pYm9sZCcpICE9IC0xIHx8IHR5cGUuaW5kZXhPZignbWVkaXVtJykgIT0gLTEpXG4gICAgICBmb250V2VpZ2h0ID0gNTAwO1xuICAgIGVsc2UgaWYgKHR5cGUuaW5kZXhPZignYm9sZCcpICE9IC0xIHx8IHR5cGUuaW5kZXhPZignaGVhdnknKSAhPSAtMSlcbiAgICAgIGZvbnRXZWlnaHQgPSA3MDA7XG4gICAgZWxzZSBpZiAodHlwZS5pbmRleE9mKCdibGFjaycpICE9IC0xKVxuICAgICAgZm9udFdlaWdodCA9IDkwMDtcblxuICAgIGlmKGZvbnRXZWlnaHQgPiAwKVxuICAgICAgY29uZmlnLnN0eWxlLmZvbnRXZWlnaHQgPSBmb250V2VpZ2h0O1xuICB9XG5cbiAgaWYgKGtleSA9PSAndmlzaWJpbGl0eScpIHtcbiAgICBsZXQgdmlzaWJpbGl0eSA9IGNvbmZpZy52aXNpYmlsaXR5O1xuICAgIGlmICh2aXNpYmlsaXR5ID09ICdpbnZpc2libGUnKVxuICAgICAgY29uZmlnLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIGVsc2UgaWYgKHZpc2liaWxpdHkgPT0gJ2dvbmUnKVxuICAgICAgY29uZmlnLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBlbHNlIHtcbiAgICAgIGNvbmZpZy5zdHlsZS52aXNpYmlsaXR5ID0gJyc7XG4gICAgfVxuICB9IFxuXG4gIGlmIChrZXkgPT0gJ2V4cGFuZCcpIHtcbiAgICBsZXQgdmlzaWJpbGl0eSA9IGNvbmZpZy5leHBhbmQgKyAnJztcbiAgICBpZiAodmlzaWJpbGl0eSA9PSAndHJ1ZScpe1xuICAgICAgY29uZmlnLnN0eWxlLnZpc2liaWxpdHkgPSAnJztcbiAgICB9XG4gICAgZWxzZVxuICAgICAgY29uZmlnLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJzdHJva2VcIikge1xuICAgIGxldCB2YWx1ZXMgPSBjb25maWcuc3Ryb2tlLnNwbGl0KFwiLFwiKTtcblxuICAgIGlmKHZhbHVlcy5sZW5ndGggPT0gMilcbiAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXIgPSB2YWx1ZXNbMF0gKyBcInB4IHNvbGlkIFwiICsgdmFsdWVzWzFdO1xuICAgIGVsc2UgaWYodmFsdWVzLmxlbmd0aCA9PSAzKXtcbiAgICAgIGlmICh2YWx1ZXNbMl0gPT0gXCJyYmxcIil7XG4gICAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJCb3R0b20gPSB2YWx1ZXNbMF0gKyBcInB4IHNvbGlkIFwiICsgdmFsdWVzWzFdO1xuICAgICAgICBjb25maWcuc3R5bGUuYm9yZGVyTGVmdCA9IHZhbHVlc1swXSArIFwicHggc29saWQgXCIgKyB2YWx1ZXNbMV07XG4gICAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJSaWdodCA9IHZhbHVlc1swXSArIFwicHggc29saWQgXCIgKyB2YWx1ZXNbMV07XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh2YWx1ZXNbMl0gPT0gXCJiXCIpe1xuICAgICAgICBjb25maWcuc3R5bGUuYm9yZGVyQm90dG9tID0gdmFsdWVzWzBdICsgXCJweCBzb2xpZCBcIiArIHZhbHVlc1sxXTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgICAgY29uZmlnLnN0eWxlLmJvcmRlciA9IHZhbHVlc1swXSArIFwicHggXCIgKyB2YWx1ZXNbMV0gKyBcIiBcIiArIHZhbHVlc1syXTtcbiAgICB9XG4gICAgXG4gIH1cblxuICBpZiAoa2V5ID09IFwic3Ryb2tlVG9wXCIpIHtcbiAgICBsZXQgdmFsdWVzID0gY29uZmlnLnN0cm9rZVRvcC5zcGxpdChcIixcIik7XG4gICAgXG4gICAgaWYodmFsdWVzLmxlbmd0aCA9PSAyKVxuICAgICAgY29uZmlnLnN0eWxlLmJvcmRlclRvcCA9IHZhbHVlc1swXSArIFwicHggc29saWQgXCIgKyB2YWx1ZXNbMV07XG4gICAgZWxzZSBpZih2YWx1ZXMubGVuZ3RoID09IDMpXG4gICAgICBjb25maWcuc3R5bGUuYm9yZGVyVG9wID0gdmFsdWVzWzBdICsgXCJweCBcIiArIHZhbHVlc1sxXSArIFwiIFwiICsgdmFsdWVzWzJdO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInN0cm9rZVJpZ2h0XCIpIHtcbiAgICBsZXQgdmFsdWVzID0gY29uZmlnLnN0cm9rZVJpZ2h0LnNwbGl0KFwiLFwiKTtcbiAgICBcbiAgICBpZih2YWx1ZXMubGVuZ3RoID09IDIpXG4gICAgICBjb25maWcuc3R5bGUuYm9yZGVyUmlnaHQgPSB2YWx1ZXNbMF0gKyBcInB4IHNvbGlkIFwiICsgdmFsdWVzWzFdO1xuICAgIGVsc2UgaWYodmFsdWVzLmxlbmd0aCA9PSAzKVxuICAgICAgY29uZmlnLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmFsdWVzWzBdICsgXCJweCBcIiArIHZhbHVlc1sxXSArIFwiIFwiICsgdmFsdWVzWzJdO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInN0cm9rZUJvdHRvbVwiKSB7XG4gICAgbGV0IHZhbHVlcyA9IGNvbmZpZy5zdHJva2VCb3R0b20uc3BsaXQoXCIsXCIpO1xuICAgIFxuICAgIGlmKHZhbHVlcy5sZW5ndGggPT0gMilcbiAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJCb3R0b20gPSB2YWx1ZXNbMF0gKyBcInB4IHNvbGlkIFwiICsgdmFsdWVzWzFdO1xuICAgIGVsc2UgaWYodmFsdWVzLmxlbmd0aCA9PSAzKVxuICAgICAgY29uZmlnLnN0eWxlLmJvcmRlckJvdHRvbSA9IHZhbHVlc1swXSArIFwicHggXCIgKyB2YWx1ZXNbMV0gKyBcIiBcIiArIHZhbHVlc1syXTtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJzdHJva2VMZWZ0XCIpIHtcbiAgICBsZXQgdmFsdWVzID0gY29uZmlnLnN0cm9rZUxlZnQuc3BsaXQoXCIsXCIpO1xuICAgIFxuICAgIGlmKHZhbHVlcy5sZW5ndGggPT0gMilcbiAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJMZWZ0ID0gdmFsdWVzWzBdICsgXCJweCBzb2xpZCBcIiArIHZhbHVlc1sxXTtcbiAgICBlbHNlIGlmKHZhbHVlcy5sZW5ndGggPT0gMylcbiAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJMZWZ0ID0gdmFsdWVzWzBdICsgXCJweCBcIiArIHZhbHVlc1sxXSArIFwiIFwiICsgdmFsdWVzWzJdO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInRyYW5zbGF0aW9uWVwiKSB7XG4gICAgY29uZmlnLnN0eWxlLnRyYW5zZm9ybSArPSBcInRyYW5zbGF0ZVkoXCIgKyBjb25maWdba2V5XSArIFwicHgpIFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImFfdHJhbnNsYXRpb25ZXCIpIHtcbiAgICBjb25maWcuYW5pbWF0aW9uLnRyYW5zZm9ybSArPSBcInRyYW5zbGF0ZVkoXCIgKyBjb25maWdba2V5XSArIFwicHgpIFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInRyYW5zbGF0aW9uWFwiKSB7XG4gICAgY29uZmlnLnN0eWxlLnRyYW5zZm9ybSArPSBcInRyYW5zbGF0ZVgoXCIgKyBjb25maWdba2V5XSArIFwicHgpIFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImFfdHJhbnNsYXRpb25YXCIpIHtcbiAgICBjb25maWcuYW5pbWF0aW9uLnRyYW5zZm9ybSArPSBcInRyYW5zbGF0ZVgoXCIgKyBjb25maWdba2V5XSArIFwicHgpIFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInNjYWxlWFwiKSB7XG4gICAgY29uZmlnLnN0eWxlLnRyYW5zZm9ybSArPSBcInNjYWxlWChcIiArIGNvbmZpZ1trZXldICsgXCIpIFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImFfc2NhbGVYXCIpIHtcbiAgICBjb25maWcuYW5pbWF0aW9uLnRyYW5zZm9ybSArPSBcInNjYWxlWChcIiArIGNvbmZpZ1trZXldICsgXCIpIFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInNjYWxlWVwiKSB7XG4gICAgY29uZmlnLnN0eWxlLnRyYW5zZm9ybSArPSBcInNjYWxlWShcIiArIGNvbmZpZ1trZXldICsgXCIpIFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImFfc2NhbGVZXCIpIHtcbiAgICBjb25maWcuYW5pbWF0aW9uLnRyYW5zZm9ybSArPSBcInNjYWxlWShcIiArIGNvbmZpZ1trZXldICsgXCIpIFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInJvdGF0aW9uXCIpIHtcbiAgICBjb25maWcuc3R5bGUudHJhbnNmb3JtICs9IFwicm90YXRlKFwiICsgY29uZmlnW2tleV0gKyBcImRlZykgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwiYV9yb3RhdGlvblwiKSB7XG4gICAgY29uZmlnLmFuaW1hdGlvbi50cmFuc2Zvcm0gKz0gXCJyb3RhdGUoXCIgKyBjb25maWdba2V5XSArIFwiZGVnKSBcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJyb3RhdGlvblhcIikge1xuICAgIGNvbmZpZy5zdHlsZS50cmFuc2Zvcm0gKz0gXCJyb3RhdGVYKFwiICsgY29uZmlnW2tleV0gKyBcImRlZykgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwiYV9yb3RhdGlvblhcIikge1xuICAgIGNvbmZpZy5hbmltYXRpb24udHJhbnNmb3JtICs9IFwicm90YXRlWChcIiArIGNvbmZpZ1trZXldICsgXCJkZWcpIFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInJvdGF0aW9uWVwiKSB7XG4gICAgY29uZmlnLnN0eWxlLnRyYW5zZm9ybSArPSBcInJvdGF0ZVkoXCIgKyBjb25maWdba2V5XSArIFwiZGVnKSBcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJhX3JvdGF0aW9uWVwiKSB7XG4gICAgY29uZmlnLmFuaW1hdGlvbi50cmFuc2Zvcm0gKz0gXCJyb3RhdGVZKFwiICsgY29uZmlnW2tleV0gKyBcImRlZykgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwidHJhbnNsYXRpb25aXCIpIHtcbiAgICB2YXIgdiA9IGNvbmZpZ1trZXldO1xuICAgIGNvbmZpZy5zdHlsZVtcIi13ZWJraXQtYm94LXNoYWRvd1wiXSA9IFwiMCAwIFwiK3YudG9TdHJpbmcoKStcInB4IHJnYmEoMCwwLDAsIC4xKVwiO1xuICAgIGNvbmZpZy5zdHlsZVtcIi1tb3otYm94LXNoYWRvd1wiXT0gXCIwIDAgXCIrdi50b1N0cmluZygpK1wicHggcmdiYSgwLDAsMCwgLjEpXCI7XG4gICAgY29uZmlnLnN0eWxlW1wiYm94LXNoYWRvd1wiXT0gIFwiMCAwIFwiK3YudG9TdHJpbmcoKStcInB4IHJnYmEoMCwwLDAsIC4xKVwiO1xuICAgIFxuICB9XG5cbiAgaWYgKGtleSA9PSBcImFfZHVyYXRpb25cIiAmJiAhaXNOYU4oY29uZmlnW2tleV0pKSB7XG4gICAgY29uc3Qgc3VmZml4ID0gY29uZmlnLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiA/IChcIiBcIiArIGNvbmZpZy50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24pIDogXCJcIjtcbiAgICBjb25maWcuYW5pbWF0aW9uLnRyYW5zaXRpb24gPSBjb25maWdba2V5XSArICdtcyBhbGwnICsgc3VmZml4O1xuICB9XG4gIFxuICBpZiAodHlwZSA9PSBcInRleHRWaWV3XCIgJiYga2V5ID09IFwiZ3Jhdml0eVwiICYmIGNvbmZpZy5ncmF2aXR5KSB7XG4gICAgY29uZmlnLnN0eWxlLnRleHRBbGlnbiA9IGNvbmZpZy5ncmF2aXR5O1xuICAgIGlmIChjb25maWcuZ3Jhdml0eSA9PSBcImNlbnRlcl92ZXJ0aWNhbFwiKSB7XG4gICAgICBjb25maWcuc3R5bGVbXCJhbGlnbi1pdGVtc1wiXSA9IFwiY2VudGVyXCI7XG4gICAgICBjb25maWcuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH0gZWxzZSBpZiAoY29uZmlnLmdyYXZpdHkgPT0gXCJjZW50ZXJfaG9yaXpvbnRhbFwiKSB7XG4gICAgICBjb25maWcuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgY29uZmlnLnN0eWxlW1wianVzdGlmeS1jb250ZW50XCJdID0gXCJjZW50ZXJcIjtcbiAgICB9IGVsc2UgaWYgKGNvbmZpZy5ncmF2aXR5ID09IFwiY2VudGVyXCIpIHtcbiAgICAgIGNvbmZpZy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICBjb25maWcuc3R5bGVbXCJhbGlnbi1pdGVtc1wiXSA9IFwiY2VudGVyXCI7XG4gICAgICBjb25maWcuc3R5bGVbXCJqdXN0aWZ5LWNvbnRlbnRcIl0gPSBcImNlbnRlclwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChjb25maWcuZ3Jhdml0eSA9PSBcImNlbnRlclwiKXtcbiAgICAgIGNvbmZpZy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICBjb25maWcuc3R5bGVbXCJhbGlnbi1pdGVtc1wiXSA9IFwiY2VudGVyXCI7XG4gICAgICBjb25maWcuc3R5bGVbXCJqdXN0aWZ5LWNvbnRlbnRcIl0gPSBcImNlbnRlclwiO1xuICAgIH1cbiAgfVxuICBpZiAodHlwZSA9PSBcImxpbmVhckxheW91dFwiICYmIGtleSA9PSBcImdyYXZpdHlcIiAmJiBjb25maWcuZ3Jhdml0eSl7XG4gICAgaWYgKGNvbmZpZy5tYXJnaW4gJiYgY29uZmlnLmdyYXZpdHk9PVwiY2VudGVyX3ZlcnRpY2FsXCIpe1xuICAgICAgdmFyIG1hcmdpbj1jb25maWcubWFyZ2luLnNwbGl0KFwiLFwiKTtcbiAgICAgIGlmIChjb25maWcud2lkdGggPT0gXCJtYXRjaF9wYXJlbnRcIil7XG4gICAgICAgICBjb25maWcuc3R5bGUud2lkdGg9XCJjYWxjKDEwMCUgLSBcIisocGFyc2VJbnQobWFyZ2luWzBdKStwYXJzZUludChtYXJnaW5bMl0pKS50b1N0cmluZygpK1wicHggKVwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJoaW50XCIpe1xuICAgIGNvbmZpZy5hdHRyaWJ1dGVzLnBsYWNlaG9sZGVyID0gY29uZmlnLmhpbnQ7XG4gIH1cblxuICBpZiAoa2V5ID09IFwiY29udGVudEVkaXRhYmxlXCIgJiYgY29uZmlnLmNvbnRlbnRFZGl0YWJsZSl7XG4gICAgY29uZmlnLmF0dHJpYnV0ZXMuY29udGVudGVkaXRhYmxlID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJpZFwiKSB7XG4gICAgY29uZmlnLmF0dHJpYnV0ZXMuaWQgPSBjb25maWcuaWQ7XG4gIH1cblxuXG4gIGlmIChrZXkgPT0gXCJncmFkaWVudFwiKSB7XG4gICAgdmFyIGdyYWRpZW50T2JqID1KU09OLnBhcnNlKGNvbmZpZy5ncmFkaWVudCk7XG4gICAgaWYgKGdyYWRpZW50T2JqLnR5cGUgPT0gXCJsaW5lYXJcIikge1xuICAgICAgdmFyIGFuZ2xlID0gZ3JhZGllbnRPYmouYW5nbGU7XG4gICAgICB2YXIgdmFsdWVzID0gZ3JhZGllbnRPYmoudmFsdWVzO1xuICAgICAgdmFyIGNvbG9ycyA9IHZhbHVlcy5qb2luKFwiLCBcIik7XG4gICAgICBjb25maWcuc3R5bGVbXCJiYWNrZ3JvdW5kLWltYWdlXCJdID0gXCJsaW5lYXItZ3JhZGllbnQoXCIrYW5nbGUrXCJkZWcsIFwiK2NvbG9ycytcIilcIlxuICAgIH1cbiAgICAgZWxzZSB7XG4gICAgICB2YXIgdmFsdWVzID0gZ3JhZGllbnRPYmoudmFsdWVzO1xuICAgICAgdmFyIGNvbG9ycyA9IHZhbHVlcy5qb2luKFwiLCBcIik7XG4gICAgICBjb25maWcuc3R5bGVbXCJiYWNrZ3JvdW5kLWltYWdlXCJdID0gXCJyYWRpYWwtZ3JhZGllbnQoXCIrY29sb3JzK1wiKVwiXG4gICAgIH1cbiAgfVxuXG5cbiAgaWYgKGtleSA9PSBcImlucHV0VHlwZVwiKSB7XG4gICAgdmFyIGlucHV0VHlwZSA9IFwidGV4dFwiO1xuICAgIGlmIChjb25maWcuaW5wdXRUeXBlID09IFwibnVtZXJpY1Bhc3N3b3JkXCIgfHwgY29uZmlnLmlucHV0VHlwZSA9PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgIGlmKGNvbmZpZy5pbnB1dFR5cGVJID09IDQgJiYgaXNNb2JpbGUpe1xuICAgICAgICBpbnB1dFR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgY29uZmlnLnN0eWxlW1wiLXdlYmtpdC10ZXh0LXNlY3VyaXR5XCJdID0gXCJkaXNjXCI7XG4gICAgICAgIGNvbmZpZy5zdHlsZVtcIi1tb3otdGV4dC1zZWN1cml0eVwiXSA9IFwiZGlzY1wiO1xuICAgICAgICBjb25maWcuc3R5bGVbXCJ0ZXh0LXNlY3VyaXR5XCJdID0gXCJkaXNjXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dFR5cGUgPSBcInBhc3N3b3JkXCJcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvbmZpZy5pbnB1dFR5cGUgPT0gXCJkaXNhYmxlZFwiKSB7XG4gICAgICAgIGNvbmZpZy5hdHRyaWJ1dGVzLmRpc2FibGVkID0gJ2Rpc2FibGVkJ1xuICAgIH0gZWxzZSBpZiAoY29uZmlnLmlucHV0VHlwZSA9PSBcIm51bWVyaWNcIikge1xuICAgICAgICBpbnB1dFR5cGUgPSBcIm51bWJlclwiXG4gICAgfVxuICAgIGlmIChjb25maWcuc2VwYXJhdG9yKSB7XG4gICAgICBpbnB1dFR5cGUgPSBcInRleHRcIlxuICAgIH1cblxuICAgIGNvbmZpZy5hdHRyaWJ1dGVzLnR5cGUgPSBpbnB1dFR5cGVcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJyb3RhdGVJbWFnZVwiKSB7XG4gICAgaWYoY29uZmlnLnJvdGF0ZUltYWdlKXtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFuaW1hdGlvbi1kdXJhdGlvblwiXSA9IFwiNHNcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb25cIl0gPSBcImxpbmVhclwiO1xuICAgICAgY29uZmlnLnN0eWxlW1wiYW5pbWF0aW9uLWRlbGF5XCJdID0gXCIwc1wiO1xuICAgICAgY29uZmlnLnN0eWxlW1wiYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudFwiXSA9IFwiaW5maW5pdGVcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFuaW1hdGlvbi1kaXJlY3Rpb25cIl0gPSBcIm5vcm1hbFwiO1xuICAgICAgY29uZmlnLnN0eWxlW1wiYW5pbWF0aW9uLWZpbGwtbW9kZVwiXSA9IFwibm9uZVwiO1xuICAgICAgY29uZmlnLnN0eWxlW1wiYW5pbWF0aW9uLXBsYXktc3RhdGVcIl0gPSBcInJ1bm5pbmdcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFuaW1hdGlvbi1uYW1lXCJdID0gXCJyb3RhdGlvblwiO1xuXG4gICAgfVxuICB9XG5cbiAgaWYgKGtleSA9PSBcInBhdHRlcm5cIikge1xuICAgIGNvbmZpZy5hdHRyaWJ1dGVzW1wiZGF0YS1wYXR0ZXJuXCJdID0gY29uZmlnLnBhdHRlcm47XG4gIH1cbiAgaWYoa2V5ID09IFwiaW5wdXRUeXBlSVwiKXtcbiAgICBpZihjb25maWcuaW5wdXRUeXBlSSA9PSA0KXtcbiAgICAgIGNvbmZpZy5hdHRyaWJ1dGVzW1wiaW5wdXRtb2RlXCJdID0gXCJudW1lcmljXCI7XG4gICAgfVxuICAgIFxuICB9XG5cbiAgaWYgKGtleSA9PSBcInNlcGFyYXRvclwiKSB7XG4gICAgY29uZmlnLmF0dHJpYnV0ZXNbXCJzZXBhcmF0b3JcIl0gPSBjb25maWcuc2VwYXJhdG9yO1xuICB9XG4gIGlmIChrZXkgPT0gXCJzZXBhcmF0b3JSZXBlYXRcIikge1xuICAgIGNvbmZpZy5hdHRyaWJ1dGVzW1wic2VwYXJhdG9yUmVwZWF0XCJdID0gY29uZmlnLnNlcGFyYXRvclJlcGVhdDtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJteUF0dHJcIikge1xuICAgIGNvbmZpZy5hdHRyaWJ1dGVzW1wibXlBdHRyXCJdID0gY29uZmlnLm15QXR0cjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJzaGFkb3dcIikge1xuICAgIHZhciBzaGFkb3dWYWx1ZXMgPSBjb25maWcuc2hhZG93LnNwbGl0KGNvbmZpZy5zaGFkb3dTZXBhcmF0b3IgfHwgJywnKTtcbiAgICB2YXIgc2hhZG93Qmx1ciA9IHJXUyhjUyhzaGFkb3dWYWx1ZXNbMl0pKTtcbiAgICB2YXIgc2hhZG93U3ByZWFkID0gcldTKGNTKHNoYWRvd1ZhbHVlc1szXSkpO1xuICAgIHZhciBzaGFkb3dPcGFjaXR5ID0gcldTKGNTKHNoYWRvd1ZhbHVlc1s1XSkpO1xuICAgIHZhciBzaGFkb3dPZmZzZXQgPSB7XG4gICAgICAgIHg6IHJXUyhjUyhzaGFkb3dWYWx1ZXNbMF0pKSxcbiAgICAgICAgeTogcldTKGNTKHNoYWRvd1ZhbHVlc1sxXSkpXG4gICAgICB9O1xuXG4gICAgdmFyIHNoYWRvd0NvbG9yID0gY29udmVydENvbG9yVG9SZ2JhKHNoYWRvd1ZhbHVlc1s0XSk7XG4gICAgdmFyIHNoYWRvd1R5cGUgPSBjb25maWcuc2hhZG93VHlwZSA/IGAke2NvbmZpZy5zaGFkb3dUeXBlfSBgIDogJydcblxuICAgIGNvbmZpZ1tcInN0eWxlXCJdW1wiYm94LXNoYWRvd1wiXSA9IHNoYWRvd1R5cGUgKyBwYXJzZUludChzaGFkb3dPZmZzZXQueCkgKyBcInB4IFwiICsgcGFyc2VJbnQoc2hhZG93T2Zmc2V0LnkpICsgXCJweCBcIiArIHBhcnNlSW50KHNoYWRvd0JsdXIpICsgXCJweCBcIiArIHBhcnNlSW50KHNoYWRvd1NwcmVhZCkgKyBcInB4IHJnYmEoXCIgKyBzaGFkb3dDb2xvci5yICsgXCIsIFwiICsgIHNoYWRvd0NvbG9yLmcgKyBcIiwgXCIgKyAgc2hhZG93Q29sb3IuYiArIFwiLCBcIiArICBzaGFkb3dDb2xvci5hICsgXCIpXCIgO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImxpbmVIZWlnaHRcIilcbiAgICBjb25maWcuc3R5bGUubGluZUhlaWdodCA9IGNvbmZpZy5saW5lSGVpZ2h0O1xuXG4gIGlmIChrZXkgPT0gXCJvYmplY3RGaXRcIilcbiAgICBjb25maWcuc3R5bGUub2JqZWN0Rml0ID0gY29uZmlnLm9iamVjdEZpdDtcblxuICBpZiAoa2V5ID09IFwiY2xpY2thYmxlXCIpIHtcbiAgICBjb25maWcuc3R5bGUucG9pbnRlckV2ZW50cyA9IGNvbmZpZy5jbGlja2FibGUgPyBcImF1dG9cIiA6IFwibm9uZVwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRDb2xvclRvUmdiYShjb2xvcikge1xuICBjb2xvciA9IHJXUyhjUyhjb2xvcikpO1xuXG4gIHZhciB2YWx1ZXM7XG4gIHZhciBhbHBoYSA9IFwiMS4wMFwiO1xuXG4gIGlmIChjb2xvci5sZW5ndGggPj0gOCkge1xuICAgIGFscGhhID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDEsIDMpLCAxNik7XG4gICAgYWxwaGEgPSAoYWxwaGEgLyAyNTUpLnRvRml4ZWQoMik7XG4gICAgY29sb3IgPSBjb2xvci5zdWJzdHJpbmcoMywgOSk7XG4gIH0gZWxzZSB7XG4gICAgY29sb3IgPSBjb2xvci5zdWJzdHJpbmcoMSwgY29sb3IubGVuZ3RoKTtcbiAgfVxuXG4gIGNvbG9yID0gY29udmVydEhleFRvUmdiKHJXUyhjb2xvcikpO1xuICB2YWx1ZXMgPSBjb2xvci5zcGxpdCgnLCcpO1xuXG4gIHJldHVybiB7XG4gICAgcjogcGFyc2VJbnQocldTKHZhbHVlc1swXSkpLFxuICAgIGc6IHBhcnNlSW50KHJXUyh2YWx1ZXNbMV0pKSxcbiAgICBiOiBwYXJzZUludChyV1ModmFsdWVzWzJdKSksXG4gICAgYTogcGFyc2VGbG9hdChhbHBoYSlcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29udmVydEhleFRvUmdiKGhleCkge1xuICB2YXIgciA9IChwYXJzZUludChoZXguc3Vic3RyaW5nKDAsIDIpLCAxNikpLnRvRml4ZWQoMik7XG4gIHZhciBnID0gKHBhcnNlSW50KGhleC5zdWJzdHJpbmcoMiwgNCksIDE2KSkudG9GaXhlZCgyKTtcbiAgdmFyIGIgPSAocGFyc2VJbnQoaGV4LnN1YnN0cmluZyg0LCA2KSwgMTYpKS50b0ZpeGVkKDIpO1xuXG4gIHJldHVybiByICsgXCIsXCIgKyBnICsgXCIsXCIgKyBiO1xufVxuXG5mdW5jdGlvbiBjUyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyB2YWx1ZSArICcnIDogXCJcIjtcbn1cblxuZnVuY3Rpb24gcldTKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8gL2csICcnKTtcbn1cblxuZnVuY3Rpb24gc2V0RGVmYXVsdHModHlwZSwgY29uZmlnKSB7XG4gIGlmICh0eXBlID09IFwibGluZWFyTGF5b3V0XCIpIHtcbiAgICBjb25maWcub3JpZW50YXRpb24gPSBjb25maWcub3JpZW50YXRpb247XG4gIH1cbn1cbmZ1bmN0aW9uIHRoaXNfaW5saW5lQW5pbWF0aW9uKGNvbmZpZykge1xuICB2YXIgY29uPW1vZGlmeVRyYW5zbGF0aW9uKGNvbmZpZyk7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uLm5hbWUpO1xufVxuZnVuY3Rpb24gbW9kaWZ5VHJhbnNsYXRpb24oY29uZmlnKXtcbiAgdmFyIHggPSBjb25maWcueCB8fCBcIjBcIjtcbiAgdmFyIHkgPSBjb25maWcueSB8fCBcIjBcIjtcbiAgdmFyIGFuaW1hdGlvbkFycmF5ID0gSlNPTi5wYXJzZShjb25maWcuaW5saW5lQW5pbWF0aW9uKTtcbiAgdmFyIGFuaW1hdGlvbkFycmF5ID0gYW5pbWF0aW9uQXJyYXkubWFwKGZ1bmN0aW9uKGEpe1xuICAgIGlmKGEuaGFzT3duUHJvcGVydHkoXCJmcm9tWFwiKSl7XG4gICAgICBhLmZyb21YID0gcGFyc2VJbnQoYS5mcm9tWCkgKyBwYXJzZUludCh4KSArICcnO1xuICAgICAgaWYoIWEuaGFzT3duUHJvcGVydHkoXCJ0b1hcIikpe1xuICAgICAgICBhLnRvWCA9IDAgKyBwYXJzZUludCh4KSArICcnO1xuICAgICAgfVxuICAgIH1cbiAgICBpZihhLmhhc093blByb3BlcnR5KFwidG9YXCIpKXtcbiAgICAgIGEudG9YID0gcGFyc2VJbnQoYS50b1gpICsgcGFyc2VJbnQoeCkgKyAnJztcbiAgICB9XG4gICAgaWYoYS5oYXNPd25Qcm9wZXJ0eShcImZyb21ZXCIpKXtcbiAgICAgIGEuZnJvbVkgPSBwYXJzZUludChhLmZyb21ZKSArIHBhcnNlSW50KHkpICsgJyc7XG4gICAgICBpZighYS5oYXNPd25Qcm9wZXJ0eShcInRvWVwiKSl7XG4gICAgICAgIGEudG9ZID0gMCArIHBhcnNlSW50KHkpICsgJyc7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKGEuaGFzT3duUHJvcGVydHkoXCJ0b1lcIikpe1xuICAgICAgYS50b1kgPSBwYXJzZUludChhLnRvWSkgKyBwYXJzZUludCh5KSArICcnO1xuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfSlcbiAgcmV0dXJuIChhbmltYXRpb25BcnJheSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0eXBlLCBjb25maWcsIGdldFNldFR5cGUpIHtcbiAgY29uZmlnID0gZmxhdHRlbk9iamVjdChjb25maWcpO1xuICBzZXREZWZhdWx0cyh0eXBlLCBjb25maWcpO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoY29uZmlnKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoKGNvbmZpZy5zdHlsZSAmJiBjb25maWcuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSAmJiBrZXlzW2ldID09PSAnZ3Jhdml0eScpICB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgcGFyc2VMYXlvdXRQcm9wcyh0eXBlLCBjb25maWcsIGtleXNbaV0pO1xuICB9XG5cbiAgY29uZmlnLnRyYW5zaXRpb24gPSBbXG4gICAgU3RyaW5nKGNvbmZpZy5hX2R1cmF0aW9uIHx8IDApICtcIm1zXCIsXG4gICAgXCJhbGxcIixcbiAgICBjb25maWcudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXG4gIF1cbiAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgLmpvaW4oXCIgXCIpO1xuXG4gIGlmIChjb25maWcuc3R5bGUudHJhbnNmb3JtID09IFwiXCIpIHtcbiAgICBkZWxldGUgY29uZmlnLnN0eWxlLnRyYW5zZm9ybTtcbiAgfVxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiaW5saW5lQW5pbWF0aW9uXCIpKSB7XG4gICAgdGhpc19pbmxpbmVBbmltYXRpb24oY29uZmlnKTtcbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59IiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4gKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbiAqXG4gKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiAqIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4gKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4gKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuICogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4gKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiAqIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4gKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuICovXG5cbi8qXG4gVXNlZCB0byBpbml0aWFsaXplIGRlZmF1bHRzIGZvciB3aW5kb3cgZnVuY2lvbnMgYW5kIHZhcmlhYmxlcy5cbiovXG5jb25zdCB7IG1lcmdlIH0gPSByZXF1aXJlKCcuL2hlbHBlcicpO1xud2luZG93LlByZXN0b1VJID0gcmVxdWlyZShcIi4vUHJlc3RvVUlJbnRlcmZhY2VcIik7XG5cbmNvbnN0IGdldEN1cnJUaW1lID0gKCkgPT4gKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxuXG4vLyB3aW5kb3cuX19PUyA9IGdldE9TKClcbmlmKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKXtcbiAgICB2YXIgZ2V0U2NyZWVuRGV0YWlscyA9IGZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCBkZXRhaWxzID0gSlNPTi5wYXJzZShBbmRyb2lkLmdldFNjcmVlbkRpbWVuc2lvbnMoKSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JlZW5fd2lkdGg6IGRldGFpbHMud2lkdGggKyBcIlwiLFxuICAgICAgICAgICAgc2NyZWVuX2hlaWdodDogZGV0YWlscy5oZWlnaHQgKyBcIlwiXG4gICAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBcImVycm9yIGluIGdldHR0aW5nIHNjcmVlbiBkaW1lbnNpb25zLCBzZXR0aW5nIGRlZmF1bHQgdmFsdWVzXCIsIGVycik7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNjcmVlbl93aWR0aDogXCIxMDgwXCIsXG4gICAgICAgICAgICAgICAgc2NyZWVuX2hlaWdodDogXCIxOTIwXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5fX0RFVklDRV9ERVRBSUxTID0gZ2V0U2NyZWVuRGV0YWlscygpO1xufVxuXG5pZiAod2luZG93Ll9fT1MgPT0gXCJXRUJcIikge1xuICAgIHdpbmRvdy5BbmRyb2lkID0gcmVxdWlyZShcIi4vV0VCL0FuZHJvaWRJbnRlcmZhY2VcIilcbiAgICB3aW5kb3cuSkJyaWRnZSA9IHJlcXVpcmUoXCIuL1dFQi9KQnJpZGdlSW50ZXJmYWNlXCIpXG59IGVsc2UgaWYgKHdpbmRvdy5fX09TID09IFwiSU9TXCIpIHtcbiAgICB3aW5kb3cuQW5kcm9pZCA9IHJlcXVpcmUoXCIuL0lPUy9BbmRyb2lkSW50ZXJmYWNlXCIpXG4gICAgd2luZG93LkpCcmlkZ2UgPSBtZXJnZSh3aW5kb3cuSkJyaWRnZSwge30pXG59XG5cbmlmICh3aW5kb3cuX19ERVZJQ0VfREVUQUlMUyAmJiB3aW5kb3cuX19ERVZJQ0VfREVUQUlMUy5oYXNPd25Qcm9wZXJ0eShcInNjcmVlbl93aWR0aFwiKSkge1xuICAgIHdpbmRvdy5fX1dJRFRIID0gd2luZG93Ll9fREVWSUNFX0RFVEFJTFMuc2NyZWVuX3dpZHRoO1xufSBlbHNlIHtcbiAgICB3aW5kb3cuX19XSURUSCA9IFwiMTA4MFwiO1xufVxuXG5pZiAod2luZG93Ll9fREVWSUNFX0RFVEFJTFMgJiYgd2luZG93Ll9fREVWSUNFX0RFVEFJTFMuaGFzT3duUHJvcGVydHkoXCJzY3JlZW5faGVpZ2h0XCIpKSB7XG4gICAgd2luZG93Ll9fSEVJR0hUID0gd2luZG93Ll9fREVWSUNFX0RFVEFJTFMuc2NyZWVuX2hlaWdodDtcbn0gZWxzZSB7XG4gICAgd2luZG93Ll9fSEVJR0hUID0gXCIxOTIwXCI7XG59XG5cbmNvbnN0IGd1aWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSlcblxuLy9JbnRpYWxpemluZyBkZWZhdWx0c1xuaWYgKHdpbmRvdy5fX09TID09IFwiV0VCXCIpIHtcbiAgICAvKiBDb21wb25lbnRzICovXG4gICAgd2luZG93Ll9fQ09NX0VWRU5UID0gZmFsc2VcbiAgICB3aW5kb3cuX19DT01fUkVOREVSRUQgPSB7XG4gICAgICAgIFNXSVRDSF9HTE9CQUw6IGZhbHNlLFxuICAgICAgICBEUlA6IHt9LFxuICAgICAgICBEU0I6IHt9LFxuICAgICAgICBEQjoge30sXG4gICAgICAgIE5BVkJBUjoge31cbiAgICB9XG5cbiAgICB3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAgPSB7XG4gICAgICAgIFdSQVBQRVI6ICdQRENfY29tX3dyYXBwZXInLFxuICAgICAgICBOQVZCQVI6ICdQRENfY29tX25hdmJhcicsXG4gICAgICAgIE5BVkJBUl9JVEVNOiAnUERDX2NvbV9uYXZiYXJfaXRlbScsXG4gICAgICAgIE5BVkJBUl9JVEVNX1dJVEhfU1VCOiAnUERDX2NvbV9uYXZiYXJfaGFzX3N1YicsXG4gICAgICAgIE5BVkJBUl9TVUI6ICdQRENfY29tX25hdmJhcl9zdWInLFxuICAgICAgICBOQVZCQVJfU1VCX1JJR0hUOiAnUERDX2NvbV9uYXZiYXJfc3ViX3JpZ2h0JyxcbiAgICAgICAgTkFWQkFSX1NVQl9JVEVNOiAnUERDX2NvbV9uYXZiYXJfc3ViaXRlbScsXG4gICAgICAgIERSUDogJ1BEQ19jb21fZHJwJyxcbiAgICAgICAgRFJQX0JPRFk6ICdQRENfY29tX2RycF9ib2R5JyxcbiAgICAgICAgREI6ICdQRENfY29tX2RiJyxcbiAgICAgICAgREJfRlVMTF9CT0RZOiAnUERDX2NvbV9kYl9mdWxsX2JvZHknLFxuICAgICAgICBEQl9CT0RZOiAnUERDX2NvbV9kYl9ib2R5JyxcbiAgICAgICAgREJfT1BUSU9OUzogJ1BEQ19jb21fZGJfb3B0aW9ucycsXG4gICAgICAgIERCX09QVElPTjogJ1BEQ19jb21fZGJfb3B0aW9uJyxcbiAgICAgICAgRFNCOiAnUERDX2NvbV9kc2InLFxuICAgICAgICBEU0JfRlVMTF9CT0RZOiAnUERDX2NvbV9kc2JfZnVsbF9ib2R5JyxcbiAgICAgICAgRFNCX0JPRFk6ICdQRENfY29tX2RzYl9ib2R5JyxcbiAgICAgICAgRFNCX09QVElPTlM6ICdQRENfY29tX2RzYl9vcHRpb25zJyxcbiAgICAgICAgRFNCX09QVElPTjogJ1BEQ19jb21fZHNiX29wdGlvbicsXG4gICAgICAgIERTQl9TRUFSQ0hfV1JBUDogJ1BEQ19jb21fZHNiX3NlYXJjaF93cmFwJyxcbiAgICAgICAgRFNCX1NFQVJDSDogJ1BEQ19jb21fZHNiX3NlYXJjaCcsXG4gICAgICAgIFNXSVRDSDogJ1BEQ19jb21fc3dpdGNoJyxcbiAgICAgICAgU1dJVENIX0JPRFk6ICdQRENfY29tX3N3aXRjaF9ib2R5JyxcbiAgICAgICAgU1dJVENIX1NMSURFUjogJ1BEQ19jb21fc3dpdGNoX3NsaWRlcicsXG4gICAgICAgIEJUOiAnUERDX2NvbV9idCcsXG4gICAgICAgIEJUX0RJU0FCTEVEOiAnUERDX2NvbV9idF9kaXNhYmxlZCdcbiAgICB9XG4gICAgd2luZG93Ll9fQ09NX0NPTE9SX0dST1VQID0ge1xuICAgICAgICBCRzogJyNmZmZmZmYnLFxuICAgICAgICBBQ1RJVkVfQkc6ICcjRUVGMUY4JyxcbiAgICAgICAgQUNUSVZFX0NPTE9SOiAncmdiKDUzLCA2NCwgODIpJyxcbiAgICAgICAgSU5BQ1RJVkVfQ09MT1I6ICdyZ2JhKDUzLCA2NCwgODIsIDAuNSknLFxuICAgICAgICBCT1JERVJfQ09MT1I6ICcjQTNBRkMyJyxcbiAgICAgICAgQUNUSVZFX0JPUkRFUl9DT0xPUjogJyM3MDc4ODYnLFxuICAgICAgICBTRUFSQ0hfQ09MT1I6ICcjZGRkZGRkJyxcbiAgICAgICAgSU5BQ1RJVkVfU1dJVENIOiAnI0I3REJCQycsXG4gICAgICAgIEFDVElWRV9TV0lUQ0g6ICcjMzZBRjQ3JyxcbiAgICAgICAgQlRfQk9SREVSX0NPTE9SOiAnIzE1ODVEOCcsXG4gICAgICAgIEJUX0JHX0NPTE9SOiAnIzE5OTFFQicsXG4gICAgICAgIEJUX0NPTE9SOiAnI2ZmZmZmZidcbiAgICB9XG4gICAgd2luZG93Ll9fQ09NX0FDVElWRSA9IHtcbiAgICAgICAgRFNCOiAnJyxcbiAgICAgICAgTkFWQkFSOiAnJyxcbiAgICAgICAgREI6ICcnXG4gICAgfVxuICAgIC8qIENvbXBvbmVudHMgRW5kICovXG5cbiAgICAvKiBNb2RhbCAqL1xuICAgIHdpbmRvdy5fX1NUWUxFX0lEID0gJ3N0eWxlXycgKyBndWlkXG4gICAgd2luZG93Ll9fUkVOREVSRURfS0VZRlJBTUVTID0gW11cbiAgICB3aW5kb3cuX19NT0RBTF9QUk9QUyA9IHt9XG4gICAgd2luZG93Ll9fQ09OVEVOVE1PREFMX0NMQVNTID0gJ1BEQ19tb2RhbCdcbiAgICB3aW5kb3cuX19PUEVOTU9EQUxfQ0xBU1MgPSAnUERDX21vZGFsLW9wZW4nXG4gICAgd2luZG93Ll9fQkFDS0RST1BNT0RBTF9DTEFTUyA9ICdQRENfbW9kYWwtYmFja2Ryb3AnXG4gICAgd2luZG93Ll9fRElTQUJMRURCQUNLRFJPUF9DTEFTUyA9ICdQRENfbW9kYWwtYmFja2Ryb3AtZGlzYWJsZWQnXG4gICAgd2luZG93Ll9fU0hPV05NT0RBTF9DTEFTUyA9ICdQRENfbW9kYWwtc2hvd24nXG4gICAgd2luZG93Ll9fRkFERU1PREFMX0NMQVNTID0gJ1BEQ19tb2RhbC1mYWRlJ1xuICAgIHdpbmRvdy5fX1NMSURFTU9EQUxfQ0xBU1MgPSAnUERDX21vZGFsLXNsaWRlJ1xuICAgIC8qIE1vZGFsIEVuZCAqL1xuXG4gICAgd2luZG93Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAmJlxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyh3aW5kb3cuX19CQUNLRFJPUE1PREFMX0NMQVNTKSAmJlxuICAgICAgICAgICAgIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMod2luZG93Ll9fRElTQUJMRURCQUNLRFJPUF9DTEFTUylcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUod2luZG93Ll9fT1BFTk1PREFMX0NMQVNTKTtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKHdpbmRvdy5fX1NIT1dOTU9EQUxfQ0xBU1MpO1xuXG4gICAgICAgICAgICBsZXQgaWQgPSBldmVudC50YXJnZXQuaWQ7XG4gICAgICAgICAgICBpZCA9IGlkLnJlcGxhY2Uod2luZG93Ll9fQkFDS0RST1BNT0RBTF9DTEFTUyArICdfJywgJycpO1xuXG4gICAgICAgICAgICBsZXQgdmlldyA9IF9fVklFV1NbaWRdO1xuICAgICAgICAgICAgaWYgKHZpZXcgJiYgdmlldy5wcm9wcy5vbkRpc21pc3MgJiYgdHlwZW9mIHZpZXcucHJvcHMub25EaXNtaXNzID09XG4gICAgICAgICAgICAgICAgXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgdmlldy5wcm9wcy5vbkRpc21pc3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGR1aVNob3dTY3JlZW4gPSAoY2FsbGJhY2ssIHN0YXRlKSA9PiB7XG4gICAgICAgIGxldCBwb3B1cE1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicG9wdXBNZW51XCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvcHVwTWVudS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcG9wdXBNZW51W2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgd2luZG93Ll9fZHVpU2hvd1NjcmVlbiA9IGR1aVNob3dTY3JlZW47XG5cbn0gZWxzZSBpZiAod2luZG93Ll9fT1MgPT0gXCJJT1NcIikge1xuICAgIHdpbmRvdy5fX0NPTE9SX0lOREVYID0gd2luZG93Ll9fQ09MT1JfSU5ERVggfHwgMTtcbiAgICB3aW5kb3cuX19GT05UX0lOREVYID0gd2luZG93Ll9fRk9OVF9JTkRFWCB8fCAxO1xuICAgIHdpbmRvdy5fX1JFQ1RfSU5ERVggPSB3aW5kb3cuUkVDVF9JTkRFWCB8fCAxO1xuICAgIHdpbmRvdy5fX1ZJRVdfSU5ERVggPSB3aW5kb3cuX19WSUVXX0lOREVYIHx8IDE7XG4gICAgd2luZG93Ll9fSU1BR0VfSU5ERVggPSB3aW5kb3cuX19JTUFHRV9JTkRFWCB8fCAxO1xuICAgIHdpbmRvdy5fX1BPSU5UX0lOREVYID0gd2luZG93Ll9fUE9JTlRfSU5ERVggfHwgMTtcbiAgICB3aW5kb3cuX19MQVlFUl9JTkRFWCA9IHdpbmRvdy5fX0xBWUVSX0lOREVYIHx8IDE7XG4gICAgd2luZG93Ll9fU0laRV9JTkRFWCA9IHdpbmRvdy5fX1NJWkVfSU5ERVggfHwgMTtcbn0gZWxzZSB7XG4gICAgLy9UaGlzIHdvdWxkIGJlIGNhc2UgZm9yIGFuZHJvaWRcbiAgICB3aW5kb3cuX19GTl9NQVAgPSB7fTtcbiAgICB3aW5kb3cuX19BTExfT05DTElDS1MgPSBbXTtcbn1cblxud2luZG93Ll9fSUQgPSAxO1xud2luZG93Ll9fTk9ERV9JRCA9IDE7XG53aW5kb3cuX19TQ1JFRU5fSU5ERVggPSAtMTtcblxud2luZG93Ll9fUFJPWFlfRk4gPSB7fTtcbndpbmRvdy5fX0ZOX0lOREVYID0gMDtcbndpbmRvdy5fX1JPT1RTQ1JFRU4gPSBudWxsO1xud2luZG93Ll9fQ0FDSEVEX1NDUkVFTlMgPSB7fTtcbndpbmRvdy5fX1NDUkVFTl9DT1VOVCA9IDA7XG53aW5kb3cuX19DVVJSX1NDUkVFTiA9IG51bGw7XG53aW5kb3cuX19QUkVWX1NDUkVFTiA9IG51bGw7XG53aW5kb3cuX19BTklNQVRFX0RJUiA9IG51bGw7XG53aW5kb3cuX19TQ1JFRU5fU1RBQ0sgPSBbXTtcbndpbmRvdy5fX0xBU1RfRk5fQ0FMTEVEID0gbnVsbDtcbndpbmRvdy5fX1RIUk9UVEVMRURfQUNUSU9OUyA9IFtdO1xud2luZG93Ll9fVklFV1MgPSB7fTtcbndpbmRvdy5fX1ZJRVdfRElNRU5TSU9OUyA9IHt9O1xud2luZG93Ll9fT0JTRVJWRVJTID0ge307XG53aW5kb3cuWkluZGV4ID0gMDtcblxud2luZG93LmNhbGxVSUNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBhcmdzID0gKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBbYXJndW1lbnRzWzBdXSA6IEFycmF5LmFwcGx5KG51bGwsXG4gICAgICAgIGFyZ3VtZW50cykpO1xuICAgIHZhciBmTmFtZSA9IGFyZ3NbMF1cbiAgICB2YXIgZnVuY3Rpb25BcmdzID0gYXJncy5zbGljZSgxKVxuICAgIHZhciBjdXJyVGltZTtcbiAgICB2YXIgdGltZURpZmY7XG4gICAgXG4gICAgaWYgKHdpbmRvdy5fX0FMTF9PTkNMSUNLUyAmJiB3aW5kb3cuX19BTExfT05DTElDS1MuaW5kZXhPZihmTmFtZSkgIT0gLTEgJiYgYXJnc1syXSA9PSBcImZlZWRiYWNrXCIgJiYgSkJyaWRnZSAmJiBKQnJpZGdlLnNldENsaWNrRmVlZGJhY2spIHtcbiAgICAgICAgcmV0dXJuIEpCcmlkZ2Uuc2V0Q2xpY2tGZWVkYmFjayhhcmdzWzFdKTtcbiAgICB9XG5cbiAgICBpZiAod2luZG93Ll9fVEhST1RURUxFRF9BQ1RJT05TICYmIHdpbmRvdy5fX1RIUk9UVEVMRURfQUNUSU9OUy5pbmRleE9mKGZOYW1lKSA9PSAtMSkge1xuICAgICAgICB3aW5kb3cuX19QUk9YWV9GTltmTmFtZV0uYXBwbHkobnVsbCwgZnVuY3Rpb25BcmdzKTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5fX0xBU1RfRk5fQ0FMTEVEICYmIChmTmFtZSA9PSB3aW5kb3cuX19MQVNUX0ZOX0NBTExFRC5mTmFtZSkpIHtcbiAgICAgICAgY3VyclRpbWUgPSBnZXRDdXJyVGltZSgpO1xuICAgICAgICB0aW1lRGlmZiA9IGN1cnJUaW1lIC0gd2luZG93Ll9fTEFTVF9GTl9DQUxMRUQudGltZVN0YW1wO1xuXG4gICAgICAgIGlmICh0aW1lRGlmZiA+PSAzMDApIHtcbiAgICAgICAgICAgIHdpbmRvdy5fX1BST1hZX0ZOW2ZOYW1lXS5hcHBseShudWxsLCBmdW5jdGlvbkFyZ3MpO1xuICAgICAgICAgICAgd2luZG93Ll9fTEFTVF9GTl9DQUxMRUQudGltZVN0YW1wID0gY3VyclRpbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJmdW5jdGlvbiB0aHJvdHRlbGVkXCIsIGZOYW1lKTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcInRpbWUgZGlmZlwiLCB0aW1lRGlmZik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuX19QUk9YWV9GTltmTmFtZV0uYXBwbHkobnVsbCwgZnVuY3Rpb25BcmdzKTtcbiAgICAgICAgd2luZG93Ll9fTEFTVF9GTl9DQUxMRUQgPSB7XG4gICAgICAgICAgICB0aW1lU3RhbXA6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCksXG4gICAgICAgICAgICBmTmFtZTogZk5hbWVcbiAgICAgICAgfVxuICAgIH1cbn07Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBRUEsbUJBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQU9BLG1CQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBRUE7QUFDQTtBQUNBO0FBQ0EsZUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFPQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBOzs7Ozs7Ozs7Ozs7OztBQ2pTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQTtBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNaQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBZ0JBO0FBaEJBO0FBQUE7QUFDQTtBQURBO0FBaUJBO0FBQ0E7QUFBQTtBQWxCQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQXdCQTtBQUNBO0FBQ0E7QUEzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBNkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyTkE7Ozs7Ozs7Ozs7Ozs7O0FDcERBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBO0FBREE7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBVEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQUNBO0FBUUE7QUFBQTtBQVlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFCQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBO0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNCQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7Ozs7Ozs7Ozs7Ozs7O0FDbHdDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFUQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBSUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBRUE7OztBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7OztBQ25PQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkRBO0FBQ0E7QUFxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7OztBQzlKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcldBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDMUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7QUNwTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQSxlQUVBO0FBQ0E7QUFDQSxXQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25DQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLDhEQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTs7Ozs7Ozs7Ozs7Ozs7QUMxS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFaQTtBQWNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFhQTtBQUNBO0FBZkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBY0E7QUFDQTtBQWhCQTtBQWtCQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVpBO0FBY0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVpBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVZBO0FBNTFCQTtBQXkyQkE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBVEE7QUFZQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFaQTtBQWVBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFUQTtBQVlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVNBOzs7Ozs7Ozs7Ozs7OztBQ3R3Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFMQTtBQUNBO0FBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFUQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQkE7QUFDQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3o1QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOzs7Ozs7Ozs7Ozs7OztBQ3pCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3pDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUExQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFGQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUxBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFMQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFMQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBVEE7QUFQQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFOQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQTdFQTtBQStFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOzs7Ozs7Ozs7Ozs7OztBQzErREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFZQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqb0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBOzs7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLG9DQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFCQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLFNBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=