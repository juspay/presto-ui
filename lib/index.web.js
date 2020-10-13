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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgud2ViLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXMvbGliL2Zvcm1hdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3FzL2xpYi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3FzL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vc3JjL1ByZXN0b1VJSW50ZXJmYWNlLmpzIiwid2VicGFjazovLy9zcmMvV0VCL0FuZHJvaWRJbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vL3NyYy9XRUIvSkJyaWRnZUludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly8vc3JjL1dFQi9SZW5kZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9XRUIvVmlld1BhZ2VBZGFwdGVyLmpzIiwid2VicGFjazovLy9zcmMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL2Jhc2VWaWV3LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0Ryb3Bkb3duQm94LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Ecm9wZG93blNlYXJjaEJveC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Td2l0Y2hCdXR0b24uanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wdXRlLmpzIiwid2VicGFjazovLy9zcmMvZG9tcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2RvbXMvd2ViLmpzIiwid2VicGFjazovLy9zcmMvaGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvYW5kcm9pZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvYW5kcm9pZC9tYXBQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXJzL2FuZHJvaWQvb2JqTWFwLmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy9hbmRyb2lkL3BhcnNlUGFyYW1zLmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy9jb21tb24vY2FsbGJhY2tNYXBwZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXJzL2NvbW1vbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXJzL2lvcy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXJzL2lvcy9mbGF0dGVuT2JqZWN0LmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy9pb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9oZWxwZXJzL2lvcy9wYXJzZVBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vc3JjL2hlbHBlcnMvd2ViL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvaGVscGVycy93ZWIvcGFyc2VQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9pbml0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGluaXQ6IHJlcXVpcmUoXCIuL3NyYy9pbml0XCIpLFxuXHRkb21zIDogcmVxdWlyZShcIi4vc3JjL2RvbXNcIiksXG5cdGhhbmRsZXIgOiByZXF1aXJlKFwiLi9zcmMvaGFuZGxlclwiKSxcblx0aGVscGVycyA6IHJlcXVpcmUoXCIuL3NyYy9oZWxwZXJzXCIpLFxuXHRiYXNlVmlldyA6IHJlcXVpcmUoXCIuL3NyYy9iYXNlVmlld1wiKSxcblx0YW5pbWF0aW9uczogcmVxdWlyZSgnLi9zcmMvYW5pbWF0aW9ucycpLFxuXHRjYWxsYmFja01hcHBlcjogcmVxdWlyZSgnLi9zcmMvaGVscGVycy9jb21tb24vY2FsbGJhY2tNYXBwZXInKSxcblx0Z2V0T1M6IHJlcXVpcmUoJy4vc3JjL2hlbHBlcicpLmdldE9TLFxuXHRwcmVzdG9NZXJnZTogcmVxdWlyZSgnLi9zcmMvaGVscGVyJykubWVyZ2UsXG5cdHByZXN0b0Nsb25lOiByZXF1aXJlKCcuL3NyYy9oZWxwZXInKS5jbG9uZVxufSIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG52YXIgcGVyY2VudFR3ZW50aWVzID0gLyUyMC9nO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIEZvcm1hdCA9IHtcbiAgICBSRkMxNzM4OiAnUkZDMTczOCcsXG4gICAgUkZDMzk4NjogJ1JGQzM5ODYnXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWwuYXNzaWduKFxuICAgIHtcbiAgICAgICAgJ2RlZmF1bHQnOiBGb3JtYXQuUkZDMzk4NixcbiAgICAgICAgZm9ybWF0dGVyczoge1xuICAgICAgICAgICAgUkZDMTczODogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2UuY2FsbCh2YWx1ZSwgcGVyY2VudFR3ZW50aWVzLCAnKycpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJGQzM5ODY6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBGb3JtYXRcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBmb3JtYXRzID0gcmVxdWlyZSgnLi9mb3JtYXRzJyk7XG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGFycmF5UHJlZml4R2VuZXJhdG9ycyA9IHtcbiAgICBicmFja2V0czogZnVuY3Rpb24gYnJhY2tldHMocHJlZml4KSB7XG4gICAgICAgIHJldHVybiBwcmVmaXggKyAnW10nO1xuICAgIH0sXG4gICAgY29tbWE6ICdjb21tYScsXG4gICAgaW5kaWNlczogZnVuY3Rpb24gaW5kaWNlcyhwcmVmaXgsIGtleSkge1xuICAgICAgICByZXR1cm4gcHJlZml4ICsgJ1snICsga2V5ICsgJ10nO1xuICAgIH0sXG4gICAgcmVwZWF0OiBmdW5jdGlvbiByZXBlYXQocHJlZml4KSB7XG4gICAgICAgIHJldHVybiBwcmVmaXg7XG4gICAgfVxufTtcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xudmFyIHB1c2ggPSBBcnJheS5wcm90b3R5cGUucHVzaDtcbnZhciBwdXNoVG9BcnJheSA9IGZ1bmN0aW9uIChhcnIsIHZhbHVlT3JBcnJheSkge1xuICAgIHB1c2guYXBwbHkoYXJyLCBpc0FycmF5KHZhbHVlT3JBcnJheSkgPyB2YWx1ZU9yQXJyYXkgOiBbdmFsdWVPckFycmF5XSk7XG59O1xuXG52YXIgdG9JU08gPSBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZztcblxudmFyIGRlZmF1bHRGb3JtYXQgPSBmb3JtYXRzWydkZWZhdWx0J107XG52YXIgZGVmYXVsdHMgPSB7XG4gICAgYWRkUXVlcnlQcmVmaXg6IGZhbHNlLFxuICAgIGFsbG93RG90czogZmFsc2UsXG4gICAgY2hhcnNldDogJ3V0Zi04JyxcbiAgICBjaGFyc2V0U2VudGluZWw6IGZhbHNlLFxuICAgIGRlbGltaXRlcjogJyYnLFxuICAgIGVuY29kZTogdHJ1ZSxcbiAgICBlbmNvZGVyOiB1dGlscy5lbmNvZGUsXG4gICAgZW5jb2RlVmFsdWVzT25seTogZmFsc2UsXG4gICAgZm9ybWF0OiBkZWZhdWx0Rm9ybWF0LFxuICAgIGZvcm1hdHRlcjogZm9ybWF0cy5mb3JtYXR0ZXJzW2RlZmF1bHRGb3JtYXRdLFxuICAgIC8vIGRlcHJlY2F0ZWRcbiAgICBpbmRpY2VzOiBmYWxzZSxcbiAgICBzZXJpYWxpemVEYXRlOiBmdW5jdGlvbiBzZXJpYWxpemVEYXRlKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRvSVNPLmNhbGwoZGF0ZSk7XG4gICAgfSxcbiAgICBza2lwTnVsbHM6IGZhbHNlLFxuICAgIHN0cmljdE51bGxIYW5kbGluZzogZmFsc2Vcbn07XG5cbnZhciBpc05vbk51bGxpc2hQcmltaXRpdmUgPSBmdW5jdGlvbiBpc05vbk51bGxpc2hQcmltaXRpdmUodikge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gJ3N0cmluZydcbiAgICAgICAgfHwgdHlwZW9mIHYgPT09ICdudW1iZXInXG4gICAgICAgIHx8IHR5cGVvZiB2ID09PSAnYm9vbGVhbidcbiAgICAgICAgfHwgdHlwZW9mIHYgPT09ICdzeW1ib2wnXG4gICAgICAgIHx8IHR5cGVvZiB2ID09PSAnYmlnaW50Jztcbn07XG5cbnZhciBzdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkoXG4gICAgb2JqZWN0LFxuICAgIHByZWZpeCxcbiAgICBnZW5lcmF0ZUFycmF5UHJlZml4LFxuICAgIHN0cmljdE51bGxIYW5kbGluZyxcbiAgICBza2lwTnVsbHMsXG4gICAgZW5jb2RlcixcbiAgICBmaWx0ZXIsXG4gICAgc29ydCxcbiAgICBhbGxvd0RvdHMsXG4gICAgc2VyaWFsaXplRGF0ZSxcbiAgICBmb3JtYXR0ZXIsXG4gICAgZW5jb2RlVmFsdWVzT25seSxcbiAgICBjaGFyc2V0XG4pIHtcbiAgICB2YXIgb2JqID0gb2JqZWN0O1xuICAgIGlmICh0eXBlb2YgZmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9iaiA9IGZpbHRlcihwcmVmaXgsIG9iaik7XG4gICAgfSBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIG9iaiA9IHNlcmlhbGl6ZURhdGUob2JqKTtcbiAgICB9IGVsc2UgaWYgKGdlbmVyYXRlQXJyYXlQcmVmaXggPT09ICdjb21tYScgJiYgaXNBcnJheShvYmopKSB7XG4gICAgICAgIG9iaiA9IG9iai5qb2luKCcsJyk7XG4gICAgfVxuXG4gICAgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgICAgICBpZiAoc3RyaWN0TnVsbEhhbmRsaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZW5jb2RlciAmJiAhZW5jb2RlVmFsdWVzT25seSA/IGVuY29kZXIocHJlZml4LCBkZWZhdWx0cy5lbmNvZGVyLCBjaGFyc2V0LCAna2V5JykgOiBwcmVmaXg7XG4gICAgICAgIH1cblxuICAgICAgICBvYmogPSAnJztcbiAgICB9XG5cbiAgICBpZiAoaXNOb25OdWxsaXNoUHJpbWl0aXZlKG9iaikgfHwgdXRpbHMuaXNCdWZmZXIob2JqKSkge1xuICAgICAgICBpZiAoZW5jb2Rlcikge1xuICAgICAgICAgICAgdmFyIGtleVZhbHVlID0gZW5jb2RlVmFsdWVzT25seSA/IHByZWZpeCA6IGVuY29kZXIocHJlZml4LCBkZWZhdWx0cy5lbmNvZGVyLCBjaGFyc2V0LCAna2V5Jyk7XG4gICAgICAgICAgICByZXR1cm4gW2Zvcm1hdHRlcihrZXlWYWx1ZSkgKyAnPScgKyBmb3JtYXR0ZXIoZW5jb2RlcihvYmosIGRlZmF1bHRzLmVuY29kZXIsIGNoYXJzZXQsICd2YWx1ZScpKV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtmb3JtYXR0ZXIocHJlZml4KSArICc9JyArIGZvcm1hdHRlcihTdHJpbmcob2JqKSldO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZXMgPSBbXTtcblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH1cblxuICAgIHZhciBvYmpLZXlzO1xuICAgIGlmIChpc0FycmF5KGZpbHRlcikpIHtcbiAgICAgICAgb2JqS2V5cyA9IGZpbHRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgIG9iaktleXMgPSBzb3J0ID8ga2V5cy5zb3J0KHNvcnQpIDoga2V5cztcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iaktleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IG9iaktleXNbaV07XG5cbiAgICAgICAgaWYgKHNraXBOdWxscyAmJiBvYmpba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgICAgICBwdXNoVG9BcnJheSh2YWx1ZXMsIHN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICBvYmpba2V5XSxcbiAgICAgICAgICAgICAgICB0eXBlb2YgZ2VuZXJhdGVBcnJheVByZWZpeCA9PT0gJ2Z1bmN0aW9uJyA/IGdlbmVyYXRlQXJyYXlQcmVmaXgocHJlZml4LCBrZXkpIDogcHJlZml4LFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlQXJyYXlQcmVmaXgsXG4gICAgICAgICAgICAgICAgc3RyaWN0TnVsbEhhbmRsaW5nLFxuICAgICAgICAgICAgICAgIHNraXBOdWxscyxcbiAgICAgICAgICAgICAgICBlbmNvZGVyLFxuICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICBzb3J0LFxuICAgICAgICAgICAgICAgIGFsbG93RG90cyxcbiAgICAgICAgICAgICAgICBzZXJpYWxpemVEYXRlLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlcixcbiAgICAgICAgICAgICAgICBlbmNvZGVWYWx1ZXNPbmx5LFxuICAgICAgICAgICAgICAgIGNoYXJzZXRcbiAgICAgICAgICAgICkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHVzaFRvQXJyYXkodmFsdWVzLCBzdHJpbmdpZnkoXG4gICAgICAgICAgICAgICAgb2JqW2tleV0sXG4gICAgICAgICAgICAgICAgcHJlZml4ICsgKGFsbG93RG90cyA/ICcuJyArIGtleSA6ICdbJyArIGtleSArICddJyksXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICAgICAgICAgICAgICBzdHJpY3ROdWxsSGFuZGxpbmcsXG4gICAgICAgICAgICAgICAgc2tpcE51bGxzLFxuICAgICAgICAgICAgICAgIGVuY29kZXIsXG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIHNvcnQsXG4gICAgICAgICAgICAgICAgYWxsb3dEb3RzLFxuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZURhdGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyLFxuICAgICAgICAgICAgICAgIGVuY29kZVZhbHVlc09ubHksXG4gICAgICAgICAgICAgICAgY2hhcnNldFxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xufTtcblxudmFyIG5vcm1hbGl6ZVN0cmluZ2lmeU9wdGlvbnMgPSBmdW5jdGlvbiBub3JtYWxpemVTdHJpbmdpZnlPcHRpb25zKG9wdHMpIHtcbiAgICBpZiAoIW9wdHMpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmVuY29kZXIgIT09IG51bGwgJiYgb3B0cy5lbmNvZGVyICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9wdHMuZW5jb2RlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFbmNvZGVyIGhhcyB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHZhciBjaGFyc2V0ID0gb3B0cy5jaGFyc2V0IHx8IGRlZmF1bHRzLmNoYXJzZXQ7XG4gICAgaWYgKHR5cGVvZiBvcHRzLmNoYXJzZXQgIT09ICd1bmRlZmluZWQnICYmIG9wdHMuY2hhcnNldCAhPT0gJ3V0Zi04JyAmJiBvcHRzLmNoYXJzZXQgIT09ICdpc28tODg1OS0xJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgY2hhcnNldCBvcHRpb24gbXVzdCBiZSBlaXRoZXIgdXRmLTgsIGlzby04ODU5LTEsIG9yIHVuZGVmaW5lZCcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXQgPSBmb3JtYXRzWydkZWZhdWx0J107XG4gICAgaWYgKHR5cGVvZiBvcHRzLmZvcm1hdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKCFoYXMuY2FsbChmb3JtYXRzLmZvcm1hdHRlcnMsIG9wdHMuZm9ybWF0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBmb3JtYXQgb3B0aW9uIHByb3ZpZGVkLicpO1xuICAgICAgICB9XG4gICAgICAgIGZvcm1hdCA9IG9wdHMuZm9ybWF0O1xuICAgIH1cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0cy5mb3JtYXR0ZXJzW2Zvcm1hdF07XG5cbiAgICB2YXIgZmlsdGVyID0gZGVmYXVsdHMuZmlsdGVyO1xuICAgIGlmICh0eXBlb2Ygb3B0cy5maWx0ZXIgPT09ICdmdW5jdGlvbicgfHwgaXNBcnJheShvcHRzLmZpbHRlcikpIHtcbiAgICAgICAgZmlsdGVyID0gb3B0cy5maWx0ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkUXVlcnlQcmVmaXg6IHR5cGVvZiBvcHRzLmFkZFF1ZXJ5UHJlZml4ID09PSAnYm9vbGVhbicgPyBvcHRzLmFkZFF1ZXJ5UHJlZml4IDogZGVmYXVsdHMuYWRkUXVlcnlQcmVmaXgsXG4gICAgICAgIGFsbG93RG90czogdHlwZW9mIG9wdHMuYWxsb3dEb3RzID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRzLmFsbG93RG90cyA6ICEhb3B0cy5hbGxvd0RvdHMsXG4gICAgICAgIGNoYXJzZXQ6IGNoYXJzZXQsXG4gICAgICAgIGNoYXJzZXRTZW50aW5lbDogdHlwZW9mIG9wdHMuY2hhcnNldFNlbnRpbmVsID09PSAnYm9vbGVhbicgPyBvcHRzLmNoYXJzZXRTZW50aW5lbCA6IGRlZmF1bHRzLmNoYXJzZXRTZW50aW5lbCxcbiAgICAgICAgZGVsaW1pdGVyOiB0eXBlb2Ygb3B0cy5kZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdHMuZGVsaW1pdGVyIDogb3B0cy5kZWxpbWl0ZXIsXG4gICAgICAgIGVuY29kZTogdHlwZW9mIG9wdHMuZW5jb2RlID09PSAnYm9vbGVhbicgPyBvcHRzLmVuY29kZSA6IGRlZmF1bHRzLmVuY29kZSxcbiAgICAgICAgZW5jb2RlcjogdHlwZW9mIG9wdHMuZW5jb2RlciA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMuZW5jb2RlciA6IGRlZmF1bHRzLmVuY29kZXIsXG4gICAgICAgIGVuY29kZVZhbHVlc09ubHk6IHR5cGVvZiBvcHRzLmVuY29kZVZhbHVlc09ubHkgPT09ICdib29sZWFuJyA/IG9wdHMuZW5jb2RlVmFsdWVzT25seSA6IGRlZmF1bHRzLmVuY29kZVZhbHVlc09ubHksXG4gICAgICAgIGZpbHRlcjogZmlsdGVyLFxuICAgICAgICBmb3JtYXR0ZXI6IGZvcm1hdHRlcixcbiAgICAgICAgc2VyaWFsaXplRGF0ZTogdHlwZW9mIG9wdHMuc2VyaWFsaXplRGF0ZSA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMuc2VyaWFsaXplRGF0ZSA6IGRlZmF1bHRzLnNlcmlhbGl6ZURhdGUsXG4gICAgICAgIHNraXBOdWxsczogdHlwZW9mIG9wdHMuc2tpcE51bGxzID09PSAnYm9vbGVhbicgPyBvcHRzLnNraXBOdWxscyA6IGRlZmF1bHRzLnNraXBOdWxscyxcbiAgICAgICAgc29ydDogdHlwZW9mIG9wdHMuc29ydCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMuc29ydCA6IG51bGwsXG4gICAgICAgIHN0cmljdE51bGxIYW5kbGluZzogdHlwZW9mIG9wdHMuc3RyaWN0TnVsbEhhbmRsaW5nID09PSAnYm9vbGVhbicgPyBvcHRzLnN0cmljdE51bGxIYW5kbGluZyA6IGRlZmF1bHRzLnN0cmljdE51bGxIYW5kbGluZ1xuICAgIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG9wdHMpIHtcbiAgICB2YXIgb2JqID0gb2JqZWN0O1xuICAgIHZhciBvcHRpb25zID0gbm9ybWFsaXplU3RyaW5naWZ5T3B0aW9ucyhvcHRzKTtcblxuICAgIHZhciBvYmpLZXlzO1xuICAgIHZhciBmaWx0ZXI7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGZpbHRlciA9IG9wdGlvbnMuZmlsdGVyO1xuICAgICAgICBvYmogPSBmaWx0ZXIoJycsIG9iaik7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG9wdGlvbnMuZmlsdGVyKSkge1xuICAgICAgICBmaWx0ZXIgPSBvcHRpb25zLmZpbHRlcjtcbiAgICAgICAgb2JqS2V5cyA9IGZpbHRlcjtcbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgdmFyIGFycmF5Rm9ybWF0O1xuICAgIGlmIChvcHRzICYmIG9wdHMuYXJyYXlGb3JtYXQgaW4gYXJyYXlQcmVmaXhHZW5lcmF0b3JzKSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gb3B0cy5hcnJheUZvcm1hdDtcbiAgICB9IGVsc2UgaWYgKG9wdHMgJiYgJ2luZGljZXMnIGluIG9wdHMpIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSBvcHRzLmluZGljZXMgPyAnaW5kaWNlcycgOiAncmVwZWF0JztcbiAgICB9IGVsc2Uge1xuICAgICAgICBhcnJheUZvcm1hdCA9ICdpbmRpY2VzJztcbiAgICB9XG5cbiAgICB2YXIgZ2VuZXJhdGVBcnJheVByZWZpeCA9IGFycmF5UHJlZml4R2VuZXJhdG9yc1thcnJheUZvcm1hdF07XG5cbiAgICBpZiAoIW9iaktleXMpIHtcbiAgICAgICAgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuc29ydCkge1xuICAgICAgICBvYmpLZXlzLnNvcnQob3B0aW9ucy5zb3J0KTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iaktleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IG9iaktleXNbaV07XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2tpcE51bGxzICYmIG9ialtrZXldID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBwdXNoVG9BcnJheShrZXlzLCBzdHJpbmdpZnkoXG4gICAgICAgICAgICBvYmpba2V5XSxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGdlbmVyYXRlQXJyYXlQcmVmaXgsXG4gICAgICAgICAgICBvcHRpb25zLnN0cmljdE51bGxIYW5kbGluZyxcbiAgICAgICAgICAgIG9wdGlvbnMuc2tpcE51bGxzLFxuICAgICAgICAgICAgb3B0aW9ucy5lbmNvZGUgPyBvcHRpb25zLmVuY29kZXIgOiBudWxsLFxuICAgICAgICAgICAgb3B0aW9ucy5maWx0ZXIsXG4gICAgICAgICAgICBvcHRpb25zLnNvcnQsXG4gICAgICAgICAgICBvcHRpb25zLmFsbG93RG90cyxcbiAgICAgICAgICAgIG9wdGlvbnMuc2VyaWFsaXplRGF0ZSxcbiAgICAgICAgICAgIG9wdGlvbnMuZm9ybWF0dGVyLFxuICAgICAgICAgICAgb3B0aW9ucy5lbmNvZGVWYWx1ZXNPbmx5LFxuICAgICAgICAgICAgb3B0aW9ucy5jaGFyc2V0XG4gICAgICAgICkpO1xuICAgIH1cblxuICAgIHZhciBqb2luZWQgPSBrZXlzLmpvaW4ob3B0aW9ucy5kZWxpbWl0ZXIpO1xuICAgIHZhciBwcmVmaXggPSBvcHRpb25zLmFkZFF1ZXJ5UHJlZml4ID09PSB0cnVlID8gJz8nIDogJyc7XG5cbiAgICBpZiAob3B0aW9ucy5jaGFyc2V0U2VudGluZWwpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuY2hhcnNldCA9PT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgICAgICAvLyBlbmNvZGVVUklDb21wb25lbnQoJyYjMTAwMDM7JyksIHRoZSBcIm51bWVyaWMgZW50aXR5XCIgcmVwcmVzZW50YXRpb24gb2YgYSBjaGVja21hcmtcbiAgICAgICAgICAgIHByZWZpeCArPSAndXRmOD0lMjYlMjMxMDAwMyUzQiYnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZW5jb2RlVVJJQ29tcG9uZW50KCfinJMnKVxuICAgICAgICAgICAgcHJlZml4ICs9ICd1dGY4PSVFMiU5QyU5MyYnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGpvaW5lZC5sZW5ndGggPiAwID8gcHJlZml4ICsgam9pbmVkIDogJyc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxudmFyIGhleFRhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gICAgICAgIGFycmF5LnB1c2goJyUnICsgKChpIDwgMTYgPyAnMCcgOiAnJykgKyBpLnRvU3RyaW5nKDE2KSkudG9VcHBlckNhc2UoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5O1xufSgpKTtcblxudmFyIGNvbXBhY3RRdWV1ZSA9IGZ1bmN0aW9uIGNvbXBhY3RRdWV1ZShxdWV1ZSkge1xuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAxKSB7XG4gICAgICAgIHZhciBpdGVtID0gcXVldWUucG9wKCk7XG4gICAgICAgIHZhciBvYmogPSBpdGVtLm9ialtpdGVtLnByb3BdO1xuXG4gICAgICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgIHZhciBjb21wYWN0ZWQgPSBbXTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBvYmoubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9ialtqXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGFjdGVkLnB1c2gob2JqW2pdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGl0ZW0ub2JqW2l0ZW0ucHJvcF0gPSBjb21wYWN0ZWQ7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG52YXIgYXJyYXlUb09iamVjdCA9IGZ1bmN0aW9uIGFycmF5VG9PYmplY3Qoc291cmNlLCBvcHRpb25zKSB7XG4gICAgdmFyIG9iaiA9IG9wdGlvbnMgJiYgb3B0aW9ucy5wbGFpbk9iamVjdHMgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2UubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2VbaV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBvYmpbaV0gPSBzb3VyY2VbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxudmFyIG1lcmdlID0gZnVuY3Rpb24gbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICAvKiBlc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246IDAgKi9cbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc291cmNlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAoaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgICAgICAgICB0YXJnZXQucHVzaChzb3VyY2UpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCAmJiB0eXBlb2YgdGFyZ2V0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKChvcHRpb25zICYmIChvcHRpb25zLnBsYWluT2JqZWN0cyB8fCBvcHRpb25zLmFsbG93UHJvdG90eXBlcykpIHx8ICFoYXMuY2FsbChPYmplY3QucHJvdG90eXBlLCBzb3VyY2UpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3NvdXJjZV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFt0YXJnZXQsIHNvdXJjZV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGlmICghdGFyZ2V0IHx8IHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBbdGFyZ2V0XS5jb25jYXQoc291cmNlKTtcbiAgICB9XG5cbiAgICB2YXIgbWVyZ2VUYXJnZXQgPSB0YXJnZXQ7XG4gICAgaWYgKGlzQXJyYXkodGFyZ2V0KSAmJiAhaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICAgIG1lcmdlVGFyZ2V0ID0gYXJyYXlUb09iamVjdCh0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KHRhcmdldCkgJiYgaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgICBpZiAoaGFzLmNhbGwodGFyZ2V0LCBpKSkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXRJdGVtID0gdGFyZ2V0W2ldO1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRJdGVtICYmIHR5cGVvZiB0YXJnZXRJdGVtID09PSAnb2JqZWN0JyAmJiBpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRbaV0gPSBtZXJnZSh0YXJnZXRJdGVtLCBpdGVtLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldFtpXSA9IGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhzb3VyY2UpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gc291cmNlW2tleV07XG5cbiAgICAgICAgaWYgKGhhcy5jYWxsKGFjYywga2V5KSkge1xuICAgICAgICAgICAgYWNjW2tleV0gPSBtZXJnZShhY2Nba2V5XSwgdmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWNjW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIG1lcmdlVGFyZ2V0KTtcbn07XG5cbnZhciBhc3NpZ24gPSBmdW5jdGlvbiBhc3NpZ25TaW5nbGVTb3VyY2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc291cmNlKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgICAgIGFjY1trZXldID0gc291cmNlW2tleV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgdGFyZ2V0KTtcbn07XG5cbnZhciBkZWNvZGUgPSBmdW5jdGlvbiAoc3RyLCBkZWNvZGVyLCBjaGFyc2V0KSB7XG4gICAgdmFyIHN0cldpdGhvdXRQbHVzID0gc3RyLnJlcGxhY2UoL1xcKy9nLCAnICcpO1xuICAgIGlmIChjaGFyc2V0ID09PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgLy8gdW5lc2NhcGUgbmV2ZXIgdGhyb3dzLCBubyB0cnkuLi5jYXRjaCBuZWVkZWQ6XG4gICAgICAgIHJldHVybiBzdHJXaXRob3V0UGx1cy5yZXBsYWNlKC8lWzAtOWEtZl17Mn0vZ2ksIHVuZXNjYXBlKTtcbiAgICB9XG4gICAgLy8gdXRmLThcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0cldpdGhvdXRQbHVzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBzdHJXaXRob3V0UGx1cztcbiAgICB9XG59O1xuXG52YXIgZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKHN0ciwgZGVmYXVsdEVuY29kZXIsIGNoYXJzZXQpIHtcbiAgICAvLyBUaGlzIGNvZGUgd2FzIG9yaWdpbmFsbHkgd3JpdHRlbiBieSBCcmlhbiBXaGl0ZSAobXNjZGV4KSBmb3IgdGhlIGlvLmpzIGNvcmUgcXVlcnlzdHJpbmcgbGlicmFyeS5cbiAgICAvLyBJdCBoYXMgYmVlbiBhZGFwdGVkIGhlcmUgZm9yIHN0cmljdGVyIGFkaGVyZW5jZSB0byBSRkMgMzk4NlxuICAgIGlmIChzdHIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgdmFyIHN0cmluZyA9IHN0cjtcbiAgICBpZiAodHlwZW9mIHN0ciA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgc3RyaW5nID0gU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN0cik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgICAgICBzdHJpbmcgPSBTdHJpbmcoc3RyKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhcnNldCA9PT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgIHJldHVybiBlc2NhcGUoc3RyaW5nKS5yZXBsYWNlKC8ldVswLTlhLWZdezR9L2dpLCBmdW5jdGlvbiAoJDApIHtcbiAgICAgICAgICAgIHJldHVybiAnJTI2JTIzJyArIHBhcnNlSW50KCQwLnNsaWNlKDIpLCAxNikgKyAnJTNCJztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIG91dCA9ICcnO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBjID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgYyA9PT0gMHgyRCAvLyAtXG4gICAgICAgICAgICB8fCBjID09PSAweDJFIC8vIC5cbiAgICAgICAgICAgIHx8IGMgPT09IDB4NUYgLy8gX1xuICAgICAgICAgICAgfHwgYyA9PT0gMHg3RSAvLyB+XG4gICAgICAgICAgICB8fCAoYyA+PSAweDMwICYmIGMgPD0gMHgzOSkgLy8gMC05XG4gICAgICAgICAgICB8fCAoYyA+PSAweDQxICYmIGMgPD0gMHg1QSkgLy8gYS16XG4gICAgICAgICAgICB8fCAoYyA+PSAweDYxICYmIGMgPD0gMHg3QSkgLy8gQS1aXG4gICAgICAgICkge1xuICAgICAgICAgICAgb3V0ICs9IHN0cmluZy5jaGFyQXQoaSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjIDwgMHg4MCkge1xuICAgICAgICAgICAgb3V0ID0gb3V0ICsgaGV4VGFibGVbY107XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjIDwgMHg4MDApIHtcbiAgICAgICAgICAgIG91dCA9IG91dCArIChoZXhUYWJsZVsweEMwIHwgKGMgPj4gNildICsgaGV4VGFibGVbMHg4MCB8IChjICYgMHgzRildKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGMgPCAweEQ4MDAgfHwgYyA+PSAweEUwMDApIHtcbiAgICAgICAgICAgIG91dCA9IG91dCArIChoZXhUYWJsZVsweEUwIHwgKGMgPj4gMTIpXSArIGhleFRhYmxlWzB4ODAgfCAoKGMgPj4gNikgJiAweDNGKV0gKyBoZXhUYWJsZVsweDgwIHwgKGMgJiAweDNGKV0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpICs9IDE7XG4gICAgICAgIGMgPSAweDEwMDAwICsgKCgoYyAmIDB4M0ZGKSA8PCAxMCkgfCAoc3RyaW5nLmNoYXJDb2RlQXQoaSkgJiAweDNGRikpO1xuICAgICAgICBvdXQgKz0gaGV4VGFibGVbMHhGMCB8IChjID4+IDE4KV1cbiAgICAgICAgICAgICsgaGV4VGFibGVbMHg4MCB8ICgoYyA+PiAxMikgJiAweDNGKV1cbiAgICAgICAgICAgICsgaGV4VGFibGVbMHg4MCB8ICgoYyA+PiA2KSAmIDB4M0YpXVxuICAgICAgICAgICAgKyBoZXhUYWJsZVsweDgwIHwgKGMgJiAweDNGKV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbn07XG5cbnZhciBjb21wYWN0ID0gZnVuY3Rpb24gY29tcGFjdCh2YWx1ZSkge1xuICAgIHZhciBxdWV1ZSA9IFt7IG9iajogeyBvOiB2YWx1ZSB9LCBwcm9wOiAnbycgfV07XG4gICAgdmFyIHJlZnMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBxdWV1ZVtpXTtcbiAgICAgICAgdmFyIG9iaiA9IGl0ZW0ub2JqW2l0ZW0ucHJvcF07XG5cbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGtleXMubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2pdO1xuICAgICAgICAgICAgdmFyIHZhbCA9IG9ialtrZXldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbCAhPT0gbnVsbCAmJiByZWZzLmluZGV4T2YodmFsKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKHsgb2JqOiBvYmosIHByb3A6IGtleSB9KTtcbiAgICAgICAgICAgICAgICByZWZzLnB1c2godmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBhY3RRdWV1ZShxdWV1ZSk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG59O1xuXG52YXIgaXNSZWdFeHAgPSBmdW5jdGlvbiBpc1JlZ0V4cChvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufTtcblxudmFyIGlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIob2JqKSB7XG4gICAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAhIShvYmouY29uc3RydWN0b3IgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopKTtcbn07XG5cbnZhciBjb21iaW5lID0gZnVuY3Rpb24gY29tYmluZShhLCBiKSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdChhLCBiKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGFycmF5VG9PYmplY3Q6IGFycmF5VG9PYmplY3QsXG4gICAgYXNzaWduOiBhc3NpZ24sXG4gICAgY29tYmluZTogY29tYmluZSxcbiAgICBjb21wYWN0OiBjb21wYWN0LFxuICAgIGRlY29kZTogZGVjb2RlLFxuICAgIGVuY29kZTogZW5jb2RlLFxuICAgIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgICBpc1JlZ0V4cDogaXNSZWdFeHAsXG4gICAgbWVyZ2U6IG1lcmdlXG59O1xuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG52YXIgcHJlc3RvRG9tID0gcmVxdWlyZShcIi4vZG9tc1wiKTtcbnZhciBoZWxwZXJzID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKVxudmFyIHdlYlBhcnNlUGFyYW1zO1xudmFyIGlPU1BhcnNlUGFyYW1zO1xudmFyIHBhcnNlUGFyYW1zO1xuY29uc3QgaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXInKTtcblxuaWYgKHdpbmRvdy5fX09TID09PSBcIldFQlwiKSB7XG4gIHdlYlBhcnNlUGFyYW1zID0gaGVscGVycy53ZWIucGFyc2VQYXJhbXM7XG59IGVsc2UgaWYgKHdpbmRvdy5fX09TID09PSBcIklPU1wiKSB7XG4gIGlPU1BhcnNlUGFyYW1zID0gaGVscGVycy5pb3MucGFyc2VQYXJhbXM7XG59IGVsc2UgaWYgKHdpbmRvdy5fX09TID09PSBcIkFORFJPSURcIikge1xuICBwYXJzZVBhcmFtcyA9IGhlbHBlcnMuYW5kcm9pZC5wYXJzZVBhcmFtcztcbn1cblxuZnVuY3Rpb24gZG9tQWxsKGVsZW0pIHtcbiAgaWYgKCFlbGVtLl9fcmVmKSB7XG4gICAgZWxlbS5fX3JlZiA9IGNyZWF0ZVByZXN0b0VsZW1lbnQoKTtcbiAgfVxuXG4gIGlmIChlbGVtLnByb3BzLmlkKSB7XG4gICAgZWxlbS5fX3JlZi5fX2lkID0gcGFyc2VJbnQoZWxlbS5wcm9wcy5pZCwgMTApIHx8IGVsZW0uX19yZWYuX19pZDtcbiAgfVxuXG4gIHZhciB0eXBlID0gaGVscGVyLmNsb25lKGVsZW0udHlwZSxudWxsKTtcbiAgdmFyIHByb3BzID0gaGVscGVyLmNsb25lKGVsZW0ucHJvcHMsbnVsbCk7XG5cbiAgaWYgKHByb3BzLmZvY3VzID09IGZhbHNlICYmICB3aW5kb3cuX19PUyA9PT0gXCJBTkRST0lEXCIpIHtcbiAgICBkZWxldGUgcHJvcHMuZm9jdXM7XG4gIH1cblxuICB2YXIgY2hpbGRyZW4gPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW0uY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjaGlsZHJlbi5wdXNoKGRvbUFsbChlbGVtLmNoaWxkcmVuW2ldKSk7XG4gIH1cblxuXG4gIGlmIChfX09TID09IFwiV0VCXCIgJiYgcHJvcHMub25SZXNpemUpIHtcbiAgICB3aW5kb3cuX19yZXNpemVFdmVudCA9IHByb3BzLm9uUmVzaXplO1xuICB9XG5cbiAgcHJvcHMuaWQgPSBlbGVtLl9fcmVmLl9faWQ7XG4gIGlmKGVsZW0ucGFyZW50VHlwZSAmJiB3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIilcbiAgICByZXR1cm4gcHJlc3RvRG9tKHtlbGVtVHlwZTogdHlwZSwgcGFyZW50VHlwZTogZWxlbS5wYXJlbnRUeXBlfSwgcHJvcHMsIGNoaWxkcmVuKTtcblxuICByZXR1cm4gcHJlc3RvRG9tKHR5cGUsIHByb3BzLCBjaGlsZHJlbik7XG59XG5cbmZ1bmN0aW9uIGdldERvbVRvUmVuZGVyKGVsZW0pIHtcbiAgdmFyIHJlcyA9IGRvbUFsbChlbGVtKTtcbiAgaWYgKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlcyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxufVxuXG5cbi8vIE5vdCBleHBvcnRlZFxuZnVuY3Rpb24gY21kRm9yQW5kcm9pZChjb25maWcsIHNldCwgdHlwZSkge1xuICBpZiAoc2V0KSB7XG4gICAgaWYgKGNvbmZpZy5pZCkge1xuICAgICAgdmFyIG9iaiA9IHBhcnNlUGFyYW1zKHR5cGUsIGNvbmZpZywgXCJzZXRcIik7XG4gICAgICB2YXIgY21kID0gb2JqLnJ1bkluVUkucmVwbGFjZShcInRoaXMtPnNldElkXCIsIFwic2V0X3ZpZXc9Y3R4LT5maW5kVmlld0J5SWRcIikucmVwbGFjZSgvdGhpcy0+L2csIFwiZ2V0X3ZpZXctPlwiKTtcbiAgICAgIGNtZCA9IGNtZC5yZXBsYWNlKC9QQVJBTV9DVFJfSE9MREVSW147XSovZywgXCJnZXRfdmlldy0+Z2V0TGF5b3V0UGFyYW1zO1wiKTtcbiAgICAgIG9iai5ydW5JblVJID0gY21kO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihcIklEIG51bGwsIHRoaXMgaXMgbm90IHN1cHBvc2VkIHRvIGhhcHBlbi4gRGVidWcgdGhpcyBvci9hbmQgcmFpc2UgYSBpc3N1ZSBpbiBiaXRidWNrZXQuXCIpO1xuICAgIH1cbiAgICByZXR1cm4ge307XG4gIH1cblxuICB2YXIgX2lkID0gY29uZmlnLmlkO1xuICB2YXIgY21kID0gXCJzZXRfdmlldz1jdHgtPmZpbmRWaWV3QnlJZDppX1wiICsgX2lkICsgXCI7XCI7XG4gIC8vIHZhciBydW5JblVJO1xuICBkZWxldGUgY29uZmlnLmlkO1xuICBjb25maWcucm9vdCA9IFwidHJ1ZVwiO1xuICB2YXIgb2JqID0gcGFyc2VQYXJhbXModHlwZSwgY29uZmlnLCBcImdldFwiKTtcbiAgb2JqLnJ1bkluVUkgPSBjbWQgKyBvYmoucnVuSW5VSSArICc7JztcbiAgb2JqLmlkID0gX2lkO1xuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBnZXRSdW5JblVJQ21kKHByb3ApIHtcbiAgdmFyIGNtZDtcbiAgaWYgKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKSB7XG4gICAgY21kID0gY21kRm9yQW5kcm9pZChwcm9wLCB0cnVlLCBcImxpbmVhckxheW91dFwiKS5ydW5JblVJO1xuICB9IGVsc2UgaWYgKHdpbmRvdy5fX09TID09IFwiSU9TXCIpe1xuICAgIGNtZCA9IHByb3A7XG4gIH0gZWxzZSB7XG4gICAgY21kID0gd2ViUGFyc2VQYXJhbXMoXCJsaW5lYXJMYXlvdXRcIiwgcHJvcCwgXCJzZXRcIik7XG4gIH1cbiAgcmV0dXJuIGNtZDtcbn1cblxuXG5cbi8vIE5vdCBleHBvcnRlZFxuZnVuY3Rpb24gYXBwbHlQcm9wKGVsZW1lbnQsIGF0dHJpYnV0ZSwgc2V0KSB7XG4gIHZhciBwcm9wID0ge1xuICAgIGlkOiBlbGVtZW50Ll9fcmVmLl9faWRcbiAgfVxuICBwcm9wW2F0dHJpYnV0ZS52YWx1ZTBdID0gYXR0cmlidXRlLnZhbHVlMTtcblxuICBpZiAoYXR0cmlidXRlLnZhbHVlMCA9PSAnZm9jdXMnICYmIGF0dHJpYnV0ZS52YWx1ZTEgPT0gZmFsc2UgJiYgIHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKSB7XG4gICAgdmFyIGNtZCA9IGNtZEZvckFuZHJvaWQocHJvcCwgc2V0LCBlbGVtZW50LnR5cGUpO1xuICAgIGlmIChBbmRyb2lkLnVwZGF0ZVByb3BlcnRpZXMpIHtcbiAgICAgIEFuZHJvaWQudXBkYXRlUHJvcGVydGllcyhKU09OLnN0cmluZ2lmeShjbWQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgQW5kcm9pZC5ydW5JblVJKGNtZC5ydW5JblVJLCBudWxsKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAod2luZG93Ll9fT1MgPT0gXCJJT1NcIil7XG4gICAgaWYgKGF0dHJpYnV0ZS52YWx1ZTAgPT0gJ3RleHRGcm9tSHRtbCcgJiYgZWxlbWVudC5wcm9wcykge1xuICAgICAgaWYgKGVsZW1lbnQucHJvcHMuaGFzT3duUHJvcGVydHkoJ2NvbG9yJykpIHtcbiAgICAgICAgcHJvcFsnY29sb3InXSA9IGVsZW1lbnQucHJvcHMuY29sb3I7XG4gICAgICB9XG4gICAgICBpZiAoZWxlbWVudC5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgnZm9udFN0eWxlJykpIHtcbiAgICAgICAgcHJvcFsnZm9udFN0eWxlJ10gPSBlbGVtZW50LnByb3BzLmZvbnRTdHlsZTtcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50LnByb3BzLmhhc093blByb3BlcnR5KCd0ZXh0U2l6ZScpKSB7XG4gICAgICAgIHByb3BbJ3RleHRTaXplJ10gPSBlbGVtZW50LnByb3BzLnRleHRTaXplO1xuICAgICAgfVxuICAgIH1cbiAgICBBbmRyb2lkLnJ1bkluVUkocHJvcCk7XG4gIH0gZWxzZSB7XG4gICAgQW5kcm9pZC5ydW5JblVJKHdlYlBhcnNlUGFyYW1zKFwibGluZWFyTGF5b3V0XCIsIHByb3AsIFwic2V0XCIpKTtcbiAgfVxuICAvLyBBbmRyb2lkLnJ1bkluVUkocGFyc2VQYXJhbXMoXCJsaW5lYXJMYXlvdXRcIiwgcHJvcCwgXCJzZXRcIikpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlVmlldyhlbGVtZW50LCBhdHRyaWJ1dGUsIHJlbW92ZVByb3ApIHtcbiAgLy8gY29uc29sZS5sb2coXCJSRVBMQUNFIFZJRVdcIiwgZWxlbWVudC5fX3JlZi5fX2lkLCBlbGVtZW50LnByb3BzKTtcbiAgdmFyIHByb3BzID0gaGVscGVyLmNsb25lKGVsZW1lbnQucHJvcHMsbnVsbCk7XG4gIHByb3BzLmlkID0gZWxlbWVudC5fX3JlZi5fX2lkO1xuICB2YXIgcmVwO1xuICB2YXIgdmlld0dyb3VwcyA9IFtcImxpbmVhckxheW91dFwiLCBcInJlbGF0aXZlTGF5b3V0XCIsIFwic2Nyb2xsVmlld1wiLCBcImZyYW1lTGF5b3V0XCIsIFwiaG9yaXpvbnRhbFNjcm9sbFZpZXdcIl07XG5cbiAgaWYgKHZpZXdHcm91cHMuaW5kZXhPZihlbGVtZW50LnR5cGUpICE9IC0xKXtcbiAgICBwcm9wcy5yb290ID0gdHJ1ZTtcbiAgICByZXAgPSBwcmVzdG9Eb20oZWxlbWVudC50eXBlLCBwcm9wcywgW10pO1xuICB9IGVsc2UgaWYgKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKSB7XG4gICAgcmVwID0gcHJlc3RvRG9tKHtlbGVtVHlwZTogZWxlbWVudC50eXBlLCBwYXJlbnRUeXBlOiBlbGVtZW50LnBhcmVudE5vZGUudHlwZX0sIHByb3BzLCBbXSk7XG4gIH0gZWxzZSB7XG4gICAgcmVwID0gcHJlc3RvRG9tKGVsZW1lbnQudHlwZSwgcHJvcHMsIFtdKTtcbiAgfVxuICBpZih3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIil7XG4gICAgQW5kcm9pZC5yZXBsYWNlVmlldyhKU09OLnN0cmluZ2lmeShyZXApLCBlbGVtZW50Ll9fcmVmLl9faWQpO1xuICB9IGVsc2Uge1xuICAgIEFuZHJvaWQucmVwbGFjZVZpZXcocmVwLCBlbGVtZW50Ll9fcmVmLl9faWQpO1xuICB9XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlUHJlc3RvRWxlbWVudCgpIHtcbiAgICBpZih0eXBlb2Yod2luZG93Ll9fdWlfaWRfc2VxdWVuY2UpICE9IFwidW5kZWZpbmVkXCIgJiYgd2luZG93Ll9fdWlfaWRfc2VxdWVuY2UgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4geyBfX2lkIDogKyt3aW5kb3cuX191aV9pZF9zZXF1ZW5jZSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5fX3VpX2lkX3NlcXVlbmNlID0gdHlwZW9mIEFuZHJvaWQuZ2V0TmV3SUQgPT0gXCJmdW5jdGlvblwiID8gcGFyc2VJbnQoQW5kcm9pZC5nZXROZXdJRCgpKSAqIDEwMDAwMDAgOiB3aW5kb3cuX19QUkVTVE9fSUQgO1xuICAgICAgICByZXR1cm4geyBfX2lkIDogKyt3aW5kb3cuX191aV9pZF9zZXF1ZW5jZSB9O1xuICAgIH1cbn07XG5cblxuZnVuY3Rpb24gbW92ZUNoaWxkKGNoaWxkLCBwYXJlbnQsIGluZGV4KSB7XG4gIEFuZHJvaWQubW92ZVZpZXcoY2hpbGQuX19yZWYuX19pZCwgaW5kZXgpO1xufVxuXG5cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGQoY2hpbGQsIHBhcmVudCwgaW5kZXgpIHtcbiAgLy8gY29uc29sZS5sb2coXCJSZW1vdmUgY2hpbGQgOlwiLCBjaGlsZC50eXBlKTtcbiAgQW5kcm9pZC5yZW1vdmVWaWV3KGNoaWxkLl9fcmVmLl9faWQgKyBcIlwiKTtcbn1cblxuZnVuY3Rpb24gYWRkQ2hpbGQoY2hpbGQsIHBhcmVudCwgaW5kZXgpIHtcbiAgaWYoY2hpbGQudHlwZSA9PSBudWxsKSB7XG4gICAgY29uc29sZS53YXJuKFwiY2hpbGQgbnVsbFwiKTtcbiAgfVxuICAvLyBjb25zb2xlLmxvZyhcIkFkZCBjaGlsZCA6XCIsIGNoaWxkLl9fcmVmLl9faWQsIGNoaWxkLnR5cGUpO1xuICB2YXIgdmlld0dyb3VwcyA9IFtcImxpbmVhckxheW91dFwiLCBcInJlbGF0aXZlTGF5b3V0XCIsIFwic2Nyb2xsVmlld1wiLCBcImZyYW1lTGF5b3V0XCIsIFwiaG9yaXpvbnRhbFNjcm9sbFZpZXdcIl07XG4gIGlmICh3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIikge1xuICAgIGlmICh2aWV3R3JvdXBzLmluZGV4T2YoY2hpbGQudHlwZSkgIT0gLTEpe1xuICAgICAgY2hpbGQucHJvcHMucm9vdCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkLnBhcmVudFR5cGUgPSBwYXJlbnQudHlwZTtcbiAgICB9XG4gICAgQW5kcm9pZC5hZGRWaWV3VG9QYXJlbnQocGFyZW50Ll9fcmVmLl9faWQgKyBcIlwiLCBKU09OLnN0cmluZ2lmeShkb21BbGwoY2hpbGQpKSwgaW5kZXgsIG51bGwsIG51bGwpO1xuICB9XG4gIGVsc2VcbiAgICBBbmRyb2lkLmFkZFZpZXdUb1BhcmVudChwYXJlbnQuX19yZWYuX19pZCwgZG9tQWxsKGNoaWxkKSwgaW5kZXgsIG51bGwsIG51bGwpO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRyaWJ1dGUoZWxlbWVudCwgYXR0cmlidXRlKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwiYWRkIGF0dHIgOlwiLCBhdHRyaWJ1dGUpO1xuICBlbGVtZW50LnByb3BzW2F0dHJpYnV0ZS52YWx1ZTBdID0gYXR0cmlidXRlLnZhbHVlMTtcbiAgYXBwbHlQcm9wKGVsZW1lbnQsIGF0dHJpYnV0ZSwgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZShlbGVtZW50LCBhdHRyaWJ1dGUpIHtcbiAgLy8gY29uc29sZS5sb2coXCJyZW1vdmUgYXR0ciA6XCIsIGF0dHJpYnV0ZSk7XG4gIHJlcGxhY2VWaWV3KGVsZW1lbnQsIGF0dHJpYnV0ZSwgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUF0dHJpYnV0ZShlbGVtZW50LCBhdHRyaWJ1dGUpIHtcbiAgLy8gY29uc29sZS5sb2coXCJ1cGRhdGUgYXR0ciA6XCIsIGF0dHJpYnV0ZSk7XG4gIGVsZW1lbnQucHJvcHNbYXR0cmlidXRlLnZhbHVlMF0gPSBhdHRyaWJ1dGUudmFsdWUxO1xuXG4gIGFwcGx5UHJvcChlbGVtZW50LCBhdHRyaWJ1dGUsIGZhbHNlKTtcbn1cblxuXG5mdW5jdGlvbiBpbnNlcnREb20ocm9vdCwgZG9tLCBjYikge1xuICByb290LmNoaWxkcmVuLnB1c2goZG9tKTtcbiAgZG9tLnBhcmVudE5vZGUgPSByb290O1xuICBkb20uX19yZWYgPSBjcmVhdGVQcmVzdG9FbGVtZW50KCk7XG4gIHdpbmRvdy5OID0gcm9vdDtcblxuICB2YXIgcm9vdElkID0gd2luZG93Ll9fUk9PVFNDUkVFTi5pZFNldC5yb290O1xuXG4gIGRvbS5wcm9wcy5yb290ID0gdHJ1ZTtcblxuICB2YXIgbGVuZ3RoID0gd2luZG93Ll9fUk9PVFNDUkVFTi5pZFNldC5jaGlsZC5wdXNoKGRvbS5fX3JlZi5fX2lkKTtcblxuICB2YXIgY2FsbGJhY2sgPSB3aW5kb3cuY2FsbGJhY2tNYXBwZXIoZXhlY3V0ZVBvc3RQcm9jZXNzKGNiKSk7XG4gIGlmICh3aW5kb3cuX19PUyA9PSBcIkFORFJPSURcIikge1xuICAgIEFuZHJvaWQuYWRkVmlld1RvUGFyZW50KHJvb3RJZCArIFwiXCIsIEpTT04uc3RyaW5naWZ5KGRvbUFsbChkb20pKSwgbGVuZ3RoIC0gMSwgY2FsbGJhY2ssIG51bGwpO1xuICB9XG4gIGVsc2Uge1xuICAgIEFuZHJvaWQuYWRkVmlld1RvUGFyZW50KHJvb3RJZCwgZG9tQWxsKGRvbSksIGxlbmd0aCAtIDEsIGNhbGxiYWNrLCBudWxsKTtcbiAgfVxuXG4gIHJldHVybiBkb20uX19yZWYuX19pZDtcblxufVxuXG5cbmZ1bmN0aW9uIGV4ZWN1dGVQb3N0UHJvY2VzcyhjYikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY2IoKTtcblxuICAgIGlmKHdpbmRvdy5fX2R1aV9zY3JlZW4gJiYgd2luZG93W1wiYWZ0ZXJSZW5kZXJcIl0pIHtcbiAgICAgIGZvciAodmFyIHRhZyBpbiB3aW5kb3dbXCJhZnRlclJlbmRlclwiXVt3aW5kb3cuX19kdWlfc2NyZWVuXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHdpbmRvd1tcImFmdGVyUmVuZGVyXCJdW3dpbmRvdy5fX2R1aV9zY3JlZW5dW3RhZ10oKSgpO1xuICAgICAgICAgIHdpbmRvd1tcImFmdGVyUmVuZGVyXCJdW3dpbmRvdy5fX2R1aV9zY3JlZW5dW1wiZXhlY3V0ZWRcIl0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChKQnJpZGdlICYmIEpCcmlkZ2Uuc2V0U2hhZG93KSB7XG4gICAgICBmb3IgKHZhciB0YWcgaW4gd2luZG93LnNoYWRvd09iamVjdCkge1xuICAgICAgICBKQnJpZGdlLnNldFNoYWRvdyh3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJsZXZlbFwiXSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcInZpZXdJZFwiXSksXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJiYWNrZ3JvdW5kQ29sb3JcIl0pLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkod2luZG93LnNoYWRvd09iamVjdFt0YWddW1wiYmx1clZhbHVlXCJdKSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcInNoYWRvd0NvbG9yXCJdKSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImR4XCJdKSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImR5XCJdKSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcInNwcmVhZFwiXSksXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJmYWN0b3JcIl0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZG9tQWxsOiBkb21BbGwsXG4gIGdldERvbVRvUmVuZGVyOiBnZXREb21Ub1JlbmRlcixcbiAgZ2V0UnVuSW5VSUNtZDogZ2V0UnVuSW5VSUNtZCxcbiAgcmVwbGFjZVZpZXc6IHJlcGxhY2VWaWV3LFxuICBjcmVhdGVQcmVzdG9FbGVtZW50OiBjcmVhdGVQcmVzdG9FbGVtZW50LFxuICBtb3ZlQ2hpbGQ6IG1vdmVDaGlsZCxcbiAgcmVtb3ZlQ2hpbGQ6IHJlbW92ZUNoaWxkLFxuICBhZGRDaGlsZDogYWRkQ2hpbGQsXG4gIGFkZEF0dHJpYnV0ZTogYWRkQXR0cmlidXRlLFxuICByZW1vdmVBdHRyaWJ1dGU6IHJlbW92ZUF0dHJpYnV0ZSxcbiAgdXBkYXRlUHJvcGVydHk6IHVwZGF0ZUF0dHJpYnV0ZSxcbiAgYWRkUHJvcGVydHk6IGFkZEF0dHJpYnV0ZSxcbiAgaW5zZXJ0RG9tOiBpbnNlcnREb21cbn07XG5cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuICogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4gKlxuICogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4gKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuICogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuICogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiAqIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuICogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4gKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuICogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiAqL1xuXG52YXIge1xuICBpbmZsYXRlVmlldyxcbiAgY29tcHV0ZUNoaWxkRGltZW5zXG59ID0gcmVxdWlyZShcIi4vUmVuZGVyXCIpO1xudmFyIGhlbHBlciA9IHJlcXVpcmUoJy4uL2hlbHBlcicpO1xuXG5cbmZ1bmN0aW9uIGdldFNjcmVlbkRpbWVuc2lvbnMoKSB7XG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgfSk7XG59XG5cblxuZnVuY3Rpb24gcnVuSW5VSShjbWQpIHtcbiAgaWYgKHR5cGVvZiBjbWQgPT0gXCJzdHJpbmdcIilcbiAgICByZXR1cm5cblxuICBsZXQgaWQgPSBjbWQuaWRcbiAgaWYoaWQpe1xuICAgIGxldCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG5cbiAgICBpZihlbGVtKXtcbiAgICAgIGxldCB2aWV3ID0gd2luZG93Ll9fVklFV1NbaWRdXG4gICAgICB2aWV3LnByb3BzID0gaGVscGVyLm1lcmdlKHZpZXcucHJvcHMsIGNtZClcbiAgICAgIFxuICAgICAgbGV0IHBhcmVudElkID0gbnVsbFxuICAgICAgbGV0IHBhcmVudEVsZW0gPSBudWxsXG4gICAgICBsZXQgcGFyZW50VmlldyA9IG51bGxcblxuICAgICAgaWYoZWxlbSl7XG4gICAgICAgIGxldCB2aWV3ID0gd2luZG93Ll9fVklFV1NbaWRdXG4gICAgICAgIHZpZXcucHJvcHMgPSBoZWxwZXIubWVyZ2Uodmlldy5wcm9wcywgY21kKVxuICAgICAgICBcbiAgICAgICAgbGV0IHBhcmVudElkID0gbnVsbFxuICAgICAgICBsZXQgcGFyZW50RWxlbSA9IG51bGxcbiAgICAgICAgbGV0IHBhcmVudFZpZXcgPSBudWxsXG5cbiAgICAgICAgaWYodmlldy50eXBlID09ICdtb2RhbCcpe1xuICAgICAgICAgIHBhcmVudElkID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ3ZpcnR1YWxfcGFyZW50JylcblxuICAgICAgICAgIGlmKHBhcmVudElkKXtcbiAgICAgICAgICAgIHBhcmVudFZpZXcgPSB3aW5kb3cuX19WSUVXU1twYXJlbnRJZF1cbiAgICAgICAgICAgIHBhcmVudEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnRJZClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYocGFyZW50RWxlbSAmJiBwYXJlbnRWaWV3KXtcbiAgICAgICAgICAgICAgaW5mbGF0ZVZpZXcodmlldywgcGFyZW50RWxlbSwgbnVsbCwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHBhcmVudElkID0gZWxlbS5wYXJlbnROb2RlLmlkXG5cbiAgICAgICAgICBpZihwYXJlbnRJZCl7XG4gICAgICAgICAgICBwYXJlbnRWaWV3ID0gd2luZG93Ll9fVklFV1NbcGFyZW50SWRdXG4gICAgICAgICAgICBwYXJlbnRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50SWQpXG5cbiAgICAgICAgICAgIGlmKHBhcmVudEVsZW0gJiYgcGFyZW50Vmlldyl7XG4gICAgICAgICAgICAgIGxldCBzaWJsaW5nVmlldyA9IG51bGxcblxuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmVudFZpZXcuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZihwYXJlbnRWaWV3LmNoaWxkcmVuW2ldLnByb3BzLmlkID09IGlkKXtcbiAgICAgICAgICAgICAgICAgIGlmKGkgIT0gMClcbiAgICAgICAgICAgICAgICAgICAgc2libGluZ1ZpZXcgPSBwYXJlbnRWaWV3LmNoaWxkcmVuW2ktMV1cbiAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgc2libGluZ1ZpZXcgPSBwYXJlbnRWaWV3XG4gICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbXB1dGVDaGlsZERpbWVucyhwYXJlbnRWaWV3KVxuICAgICAgICAgICAgICBpbmZsYXRlVmlldyh2aWV3LCBwYXJlbnRFbGVtLCBzaWJsaW5nVmlldywgZmFsc2UsIGZhbHNlLCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvL3JlY29tcHV0ZSgpXG4gIC8vUmVuZGVyLnJ1bkluVUkoY21kKVxufVxuXG5mdW5jdGlvbiBSZW5kZXIodmlldywgY2IpIHtcbiAgLyogR2xvYmFsIFN0eWxlIFRhZyAqL1xuICBsZXQgc3R5bGVfaWQgPSB3aW5kb3cuX19TVFlMRV9JRDtcbiAgXG4gIGxldCBzdHlsZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdHlsZV9pZCk7XG4gIGlmKCFzdHlsZUVsZW0gfHwgc3R5bGVFbGVtID09IHVuZGVmaW5lZCl7XG4gICAgc3R5bGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZUVsZW0uc2V0QXR0cmlidXRlKCdpZCcsIHN0eWxlX2lkKTtcbiAgICBzdHlsZUVsZW0udHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgXG4gICAgaWYoc3R5bGVFbGVtLnN0eWxlU2hlZXQpe1xuICAgICAgc3R5bGVFbGVtLnN0eWxlU2hlZXQuY3NzVGV4dCA9IFwiXCI7XG4gICAgfWVsc2V7XG4gICAgICBzdHlsZUVsZW0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIikpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtKTtcbiAgfVxuICAvKiBHbG9iYWwgU3R5bGUgVGFnIEVuZCAqL1xuXG4gIGxldCBwYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBsZXQgcGFyZW50VmlldyA9IHtcbiAgICB0eXBlOiBcImxpbmVhckxheW91dFwiLFxuICAgIHByb3BzOiB7XG4gICAgICBcImhcIjogcGFyZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICBcIndcIjogcGFyZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICB9LFxuICAgIGNoaWxkcmVuOiBbdmlld11cbiAgfTtcblxuICBjb21wdXRlQ2hpbGREaW1lbnMocGFyZW50Vmlldyk7XG4gIGNvbnN0IGVsZW0gPSBpbmZsYXRlVmlldyh2aWV3LCBwYXJlbnRFbGVtZW50LCBudWxsKTtcblxuICBpZiAoY2IpXG4gICAgd2luZG93LmNhbGxVSUNhbGxiYWNrKGNiKTtcblxuICBpZiAocGFyZW50RWxlbWVudC5jaGlsZEVsZW1lbnRDb3VudCA+IDEpIHtcbiAgICBsZXQgaXRlcmFibGVDaGlsZE5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwocGFyZW50RWxlbWVudC5jaGlsZHJlbik7XG4gICAgaXRlcmFibGVDaGlsZE5vZGVzLmZvckVhY2goKGVhY2gpID0+IHtcbiAgICAgIGhlbHBlci5jbGVhclZpZXdFeHRlcm5hbHMod2luZG93Ll9fVklFV1NbZWFjaC5pZF0pO1xuICAgICAgZWFjaC5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW92ZVZpZXcoaWQsIGluZGV4KSB7XG4gIGlmICghd2luZG93Ll9fVklFV1NbaWRdKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IobmV3IEVycm9yKFwiTW92ZVZpZXc6IEludmFsaWQgdmlldyBJRDogXCIgKyBpZCkpO1xuICB9XG4gIHZhciB2aWV3ID0gd2luZG93Ll9fVklFV1NbaWRdO1xuICB2YXIgdmlld0VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7IFxuICB2YXIgcGFyZW50SWQgPSB2aWV3RWxlbS5wYXJlbnROb2RlLmlkO1xuICB2YXIgcGFyZW50ID0gd2luZG93Ll9fVklFV1NbcGFyZW50SWRdO1xuICB2YXIgcGFyZW50RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudElkKTtcbiAgdmFyIGNoaWxkcmVuID0gcGFyZW50LmNoaWxkcmVuO1xuICBjaGlsZHJlbi5zcGxpY2UoY2hpbGRyZW4uaW5kZXhPZih2aWV3KSwgMSk7XG4gIGNoaWxkcmVuLnNwbGljZShpbmRleCwgMCwgdmlldyk7XG4gIGNvbXB1dGVDaGlsZERpbWVucyhwYXJlbnQpXG5cbiAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgaW5mbGF0ZVZpZXcoY2hpbGQsIHBhcmVudEVsZW0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFZpZXdUb1BhcmVudChpZCwgdmlldywgaW5kZXgsIGNiLCByZXBsYWNlKSB7XG4gIGxldCBwYXJlbnRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG4gIGxldCBwYXJlbnRWaWV3ID0gd2luZG93Ll9fVklFV1NbaWRdXG4gIGxldCBzaWJsaW5nVmlldyA9IG51bGxcblxuICBpZighcGFyZW50RWxlbSB8fCAhcGFyZW50VmlldylcbiAgICByZXR1cm5cblxuICBwYXJlbnRWaWV3LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMCwgdmlldylcbiAgXG4gIGlmKGluZGV4ID09IDApXG4gICAgc2libGluZ1ZpZXcgPSBwYXJlbnRWaWV3XG4gIGVsc2VcbiAgICBzaWJsaW5nVmlldyA9IHBhcmVudFZpZXcuY2hpbGRyZW5baW5kZXgtMV1cbiAgXG4gIGluZmxhdGVWaWV3KHZpZXcsIHBhcmVudEVsZW0sIHNpYmxpbmdWaWV3KVxuICBcbiAgaWYgKGNiKVxuICAgIHdpbmRvdy5jYWxsVUlDYWxsYmFjayhjYilcbn1cblxuZnVuY3Rpb24gZ2V0Q2hpbGRNb2RhbFZpZXdzKHZpZXcpIHtcbiAgbGV0IG1vZGFsVmlld3MgPSBbXVxuXG4gIGlmKHZpZXcuY2hpbGRyZW4pIHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdmlldy5jaGlsZHJlbi5sZW5ndGg7IGkrKyl7XG4gICAgICBsZXQgY2hpbGRWaWV3ID0gdmlldy5jaGlsZHJlbltpXVxuXG4gICAgICBpZihjaGlsZFZpZXcudHlwZSA9PSAnbW9kYWwnKXtcbiAgICAgICAgbW9kYWxWaWV3cy5wdXNoKGNoaWxkVmlldylcbiAgICAgIH1lbHNle1xuICAgICAgICBsZXQgaXRlbXMgPSBnZXRDaGlsZE1vZGFsVmlld3MoY2hpbGRWaWV3KVxuICAgICAgICBpZihpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICBpZihtb2RhbFZpZXdzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgbW9kYWxWaWV3cyA9IGl0ZW1zXG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBtb2RhbFZpZXdzID0gbW9kYWxWaWV3cy5jb25jYXQoaXRlbXMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1vZGFsVmlld3Ncbn1cblxuZnVuY3Rpb24gcmVtb3ZlVmlldyhpZCkge1xuICBsZXQgdmlld0VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gIGlmKCF2aWV3RWxlbSl7XG4gICAgaGVscGVyLmNsZWFyVmlld0V4dGVybmFscyh2aWV3KVxuICAgIHJldHVyblxuICB9XG5cbiAgbGV0IHBhcmVudElkID0gdmlld0VsZW0ucGFyZW50Tm9kZS5pZFxuICBpZighcGFyZW50SWQpe1xuICAgIGhlbHBlci5jbGVhclZpZXdFeHRlcm5hbHModmlldylcbiAgICB2aWV3RWxlbS5yZW1vdmUoKVxuICAgIHJldHVyblxuICB9XG5cbiAgbGV0IHBhcmVudEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnRJZCk7XG4gIGlmKCFwYXJlbnRFbGVtKXtcbiAgICBoZWxwZXIuY2xlYXJWaWV3RXh0ZXJuYWxzKHZpZXcpXG4gICAgdmlld0VsZW0ucmVtb3ZlKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGxldCB2aWV3ID0gd2luZG93Ll9fVklFV1NbaWRdXG4gIFxuICBpZighdmlldyB8fCAhdmlldy50eXBlKVxuICAgIHJldHVyblxuICBcbiAgbGV0IHBhcmVudCA9IG51bGxcbiAgbGV0IGlkeFxuICAgICAgICBcbiAgaWYodmlldy50eXBlID09ICdtb2RhbCcpe1xuICAgIGxldCB2aXJ0dWFsUGFyZW50SWQgPSB2aWV3RWxlbS5nZXRBdHRyaWJ1dGUoJ3ZpcnR1YWxfcGFyZW50JylcbiAgICBwYXJlbnQgPSB3aW5kb3cuX19WSUVXU1t2aXJ0dWFsUGFyZW50SWRdXG5cbiAgICBpZHggPSBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih2aWV3KVxuICAgIHBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKVxuXG4gICAgaGVscGVyLmNsZWFyVmlld0V4dGVybmFscyh2aWV3KVxuICAgIHBhcmVudEVsZW0ucmVtb3ZlKClcbiAgfWVsc2V7XG4gICAgLyogTW9kYWwgdmlldyBhbW9uZyBjaGlsZHJlbiAqL1xuICAgIGxldCBjaGlsZE1vZGFsVmlld3MgPSBnZXRDaGlsZE1vZGFsVmlld3ModmlldylcbiAgICBpZihjaGlsZE1vZGFsVmlld3MgJiYgY2hpbGRNb2RhbFZpZXdzLmxlbmd0aCA+IDApe1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNoaWxkTW9kYWxWaWV3cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCBtb2RhbFZpZXcgPSBjaGlsZE1vZGFsVmlld3NbaV1cbiAgICAgICAgbGV0IG1vZGFsRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZGFsVmlldy5wcm9wcy5pZClcblxuICAgICAgICBpZihtb2RhbEVsZW0pe1xuICAgICAgICAgIGxldCBiYWNrZHJvcElkID0gbW9kYWxFbGVtLnBhcmVudE5vZGUuaWRcbiAgICAgICAgICBsZXQgYmFja2Ryb3BFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYmFja2Ryb3BJZClcblxuICAgICAgICAgIGJhY2tkcm9wRWxlbS5yZW1vdmUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8qIE1vZGFsIHZpZXcgYW1vbmcgY2hpbGRyZW4gZW5kICovXG5cbiAgICBwYXJlbnQgPSB3aW5kb3cuX19WSUVXU1twYXJlbnRJZF1cblxuICAgIGlkeCA9IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHZpZXcpXG4gICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpZHgsIDEpXG5cbiAgICBoZWxwZXIuY2xlYXJWaWV3RXh0ZXJuYWxzKHZpZXcpXG4gICAgdmlld0VsZW0ucmVtb3ZlKClcbiAgfVxufVxuXG5mdW5jdGlvbiByZXBsYWNlTW9kYWxWaWV3KHZpZXcsIGlkKSB7XG4gIGxldCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG4gIGlmKCFlbGVtKVxuICAgIHJldHVyblxuXG4gIGxldCBiYWNrZHJvcElkID0gZWxlbS5wYXJlbnROb2RlLmlkXG4gIGxldCBiYWNrZHJvcEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChiYWNrZHJvcElkKVxuXG4gIGxldCBwYXJlbnRJZCA9IGVsZW0uZ2V0QXR0cmlidXRlKCd2aXJ0dWFsX3BhcmVudCcpXG4gIGxldCBwYXJlbnRWaWV3ID0gd2luZG93Ll9fVklFV1NbcGFyZW50SWRdXG4gIGxldCBwYXJlbnRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50SWQpXG5cbiAgbGV0IG9sZFZpZXcgPSBudWxsXG4gIFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmVudFZpZXcuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBpZihwYXJlbnRWaWV3LmNoaWxkcmVuW2ldLnByb3BzLmlkID09IGlkKXtcbiAgICAgIG9sZFZpZXcgPSBwYXJlbnRWaWV3LmNoaWxkcmVuW2ldXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZighb2xkVmlldylcbiAgICByZXR1cm5cblxuICAvKiBHZXQgQ2hpbGRyZW4gKi9cbiAgbGV0IGNoaWxkcmVuRWxlbSA9IFtdXG4gIGxldCBjaGlsZHJlbiA9IG9sZFZpZXcuY2hpbGRyZW5cblxuICBpZihlbGVtICYmIGNoaWxkcmVuKXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xuICAgICAgbGV0IGNoaWxkSWQgPSBjaGlsZHJlbltpXS5wcm9wcy5pZFxuICAgICAgbGV0IGNoaWxkRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNoaWxkSWQpXG5cbiAgICAgIGlmKGNoaWxkRWxlbSlcbiAgICAgICAgY2hpbGRyZW5FbGVtLnB1c2goY2hpbGRFbGVtKVxuICAgIH1cbiAgfVxuICAvKiBHZXQgQ2hpbGRyZW4gRW5kICovXG5cbiAgb2xkVmlldy5wcm9wcyA9IHZpZXcucHJvcHNcbiAgYmFja2Ryb3BFbGVtLnJlbW92ZSgpXG4gIGluZmxhdGVWaWV3KG9sZFZpZXcsIHBhcmVudEVsZW0sIG51bGwsIHRydWUpXG4gIHdpbmRvdy5fX1ZJRVdTW2lkXSA9IG9sZFZpZXdcblxuICAvKiBBcHBlbmQgQ2hpbGRyZW4gKi9cbiAgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxuXG4gIGlmKGVsZW0gJiYgY2hpbGRyZW5FbGVtLmxlbmd0aCA+IDApe1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbkVsZW0ubGVuZ3RoOyBpKyspe1xuICAgICAgZWxlbS5hcHBlbmRDaGlsZChjaGlsZHJlbkVsZW1baV0pXG4gICAgfVxuICB9XG4gIC8qIEFwcGVuZCBDaGlsZHJlbiBFbmQgKi9cbn1cblxuZnVuY3Rpb24gcmVwbGFjZVZpZXcodmlldywgaWQpIHtcbiAgaWYodmlldy50eXBlID09ICdtb2RhbCcpe1xuICAgIHJlcGxhY2VNb2RhbFZpZXcodmlldywgaWQpXG4gICAgcmV0dXJuXG4gIH1cblxuICBsZXQgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxuICBpZighZWxlbSlcbiAgICByZXR1cm5cblxuICBsZXQgcGFyZW50SWQgPSBlbGVtLnBhcmVudE5vZGUuaWRcbiAgbGV0IHBhcmVudEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnRJZClcbiAgbGV0IHBhcmVudFZpZXcgPSB3aW5kb3cuX19WSUVXU1twYXJlbnRJZF1cblxuICBsZXQgb2xkVmlldyA9IG51bGxcbiAgbGV0IHNpYmxpbmdWaWV3ID0gbnVsbFxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyZW50Vmlldy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGlmKHBhcmVudFZpZXcuY2hpbGRyZW5baV0ucHJvcHMuaWQgPT0gaWQpe1xuICAgICAgb2xkVmlldyA9IHBhcmVudFZpZXcuY2hpbGRyZW5baV1cblxuICAgICAgaWYoaSAhPSAwKVxuICAgICAgICBzaWJsaW5nVmlldyA9IHBhcmVudFZpZXcuY2hpbGRyZW5baS0xXVxuICAgICAgZWxzZVxuICAgICAgICBzaWJsaW5nVmlldyA9IHBhcmVudFZpZXdcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBcbiAgaWYoIW9sZFZpZXcpXG4gICAgcmV0dXJuXG5cbiAgLyogR2V0IENoaWxkcmVuICovXG4gIGxldCBjaGlsZHJlbkVsZW0gPSBbXVxuICBsZXQgY2hpbGRyZW4gPSBvbGRWaWV3LmNoaWxkcmVuXG5cbiAgaWYoZWxlbSAmJiBjaGlsZHJlbil7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcbiAgICAgIGxldCBjaGlsZElkID0gY2hpbGRyZW5baV0ucHJvcHMuaWRcbiAgICAgIGxldCBjaGlsZEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjaGlsZElkKVxuXG4gICAgICBpZihjaGlsZEVsZW0pXG4gICAgICAgIGNoaWxkcmVuRWxlbS5wdXNoKGNoaWxkRWxlbSlcbiAgICB9XG4gIH1cbiAgLyogR2V0IENoaWxkcmVuIEVuZCAqL1xuXG4gIG9sZFZpZXcucHJvcHMgPSB2aWV3LnByb3BzXG4gIHBhcmVudEVsZW0ucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgaW5mbGF0ZVZpZXcob2xkVmlldywgcGFyZW50RWxlbSwgc2libGluZ1ZpZXcsIHRydWUpXG4gIHdpbmRvdy5fX1ZJRVdTW2lkXSA9IG9sZFZpZXdcblxuICAvKiBBcHBlbmQgQ2hpbGRyZW4gKi9cbiAgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxuXG4gIGlmKGVsZW0gJiYgY2hpbGRyZW5FbGVtLmxlbmd0aCA+IDApe1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbkVsZW0ubGVuZ3RoOyBpKyspe1xuICAgICAgZWxlbS5hcHBlbmRDaGlsZChjaGlsZHJlbkVsZW1baV0pXG4gICAgfVxuICB9XG4gIC8qIEFwcGVuZCBDaGlsZHJlbiBFbmQgKi9cbn1cblxuZnVuY3Rpb24gcmVjb21wdXRlKCkge1xuICBjb25zdCByb290bm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IGNoaWxkID0gcm9vdG5vZGUuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gIGNvbnN0IHJvb3R2aWV3ID0gd2luZG93Ll9fVklFV1NbY2hpbGQuaWRdO1xuICBSZW5kZXIocm9vdHZpZXcsIG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0U2NyZWVuRGltZW5zaW9uczogZ2V0U2NyZWVuRGltZW5zaW9ucyxcblxuICBydW5JblVJOiBydW5JblVJLFxuXG4gIFJlbmRlcjogUmVuZGVyLFxuXG4gIG1vdmVWaWV3OiBtb3ZlVmlldyxcblxuICBhZGRWaWV3VG9QYXJlbnQ6IGFkZFZpZXdUb1BhcmVudCxcblxuICBnZXRDaGlsZE1vZGFsVmlld3M6IGdldENoaWxkTW9kYWxWaWV3cyxcblxuICByZW1vdmVWaWV3OiByZW1vdmVWaWV3LFxuXG4gIHJlcGxhY2VNb2RhbFZpZXc6IHJlcGxhY2VNb2RhbFZpZXcsXG5cbiAgcmVwbGFjZVZpZXc6IHJlcGxhY2VWaWV3LFxuXG4gIHJlY29tcHV0ZTogcmVjb21wdXRlXG59OyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuICogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4gKlxuICogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4gKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuICogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuICogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiAqIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuICogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4gKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuICogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiAqL1xuXG52YXIgVmlld1BhZ2VBZGFwdGVyID0gcmVxdWlyZShcIi4vVmlld1BhZ2VBZGFwdGVyXCIpO1xudmFyIFJlbmRlcmVyID0gcmVxdWlyZShcIi4vUmVuZGVyXCIpO1xuY29uc3QgcXNzdHJpbmdpZnkgPSByZXF1aXJlKFwicXMvbGliL3N0cmluZ2lmeVwiKTtcblxuZnVuY3Rpb24gcGFyc2VKc29uKHN0cikge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHN0cik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNlbmRBbmFseXRpY3MoZGF0YSkge1xuICBjb25zdCB1cmwgPSBcImh0dHBzOi8vbG9ncy5qdXNwYXkuaW4vZ29kZWwvYW5hbHl0aWNzXCI7XG4gIGlmIChuYXZpZ2F0b3Iuc2VuZEJlYWNvbikge1xuICAgIG5hdmlnYXRvci5zZW5kQmVhY29uKHVybCwgSlNPTi5zdHJpbmdpZnkoeyBkYXRhIH0pKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgZmFsc2UpOyAvLyB0aGlyZCBwYXJhbWV0ZXIgb2YgYGZhbHNlYCBtZWFucyBzeW5jaHJvbm91c1xuICAgICAgeGhyLnNlbmQoSlNPTi5zdHJpbmdpZnkoe2RhdGF9KSk7ICAgXG4gICAgfSBjYXRjaChlcnIpIHtcbiAgICAgIC8vXG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRTeW1ib2w6IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgXCJ0aWNrXCI6XG4gICAgICAgIHJldHVybiBcIlxcdTI3MTNcIjtcbiAgICAgIGNhc2UgXCJydXBlZVwiOlxuICAgICAgICByZXR1cm4gXCJcXHUyMEI5XCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJzeW1ib2xcIjtcbiAgICB9XG4gIH0sXG5cbiAgbGlzdFZpZXdBZGFwdGVyOiBmdW5jdGlvbihpZCwganN4LCBjYWxsYmFjaywgdHlwZSwgbW9yZSkge1xuICAgIGxldCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobmV3IEVycm9yKFwiTGlzdHZpZXcgcGFyZW50IG51bGxcIikpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3aGlsZSAocGFyZW50LmZpcnN0RWxlbWVudENoaWxkKVxuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdEVsZW1lbnRDaGlsZCk7XG5cbiAgICBsZXQgdmlldyA9IEpTT04ucGFyc2UoanN4KTtcbiAgICBsZXQgcGFyZW50VmlldyA9IHdpbmRvdy5fX1ZJRVdTW3BhcmVudC5pZF07XG4gICAgdmlldy5tYXAoKHgsIGkpID0+IHtcbiAgICAgIHBhcmVudFZpZXcuY2hpbGRyZW4ucHVzaCh4LnZpZXcpO1xuICAgICAgcGFyZW50Vmlldy50eXBlID0gXCJsaW5lYXJMYXlvdXRcIjtcbiAgICAgIFJlbmRlcmVyLmNvbXB1dGVDaGlsZERpbWVucyhwYXJlbnRWaWV3KTtcbiAgICAgIHBhcmVudFZpZXcudHlwZSA9IFwibGlzdFZpZXdcIjtcbiAgICAgIGxldCBlbGVtID0gUmVuZGVyZXIuaW5mbGF0ZVZpZXcoeC52aWV3LCBwYXJlbnQpO1xuICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHdpbmRvdy5jYWxsVUlDYWxsYmFjayhjYWxsYmFjaywgW2ldKTtcbiAgICAgIH0pO1xuICAgICAgQW5kcm9pZC5ydW5JblVJKHgudmFsdWUpO1xuICAgIH0pO1xuICAgIGlmIChtb3JlKSB7XG4gICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBlbGVtLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICBlbGVtLnN0eWxlLmhlaWdodCA9IFwiMTAwcHhcIjtcbiAgICAgIGVsZW0uc3R5bGUuYm9yZGVyQm90dG9tID0gXCIxcHggc29saWQgI2VlZVwiO1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW0pO1xuXG4gICAgICBSZW5kZXJlci5pbmZsYXRlVmlldyhKU09OLnBhcnNlKG1vcmUpLCBlbGVtKTtcbiAgICB9XG4gIH0sXG5cbiAgY2FsbEFQSTogYXN5bmMgZnVuY3Rpb24gY2FsbEFQSShtZXRob2QsIHVybCwgZGF0YSwgaGVhZGVycywgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBoZWFkZXJzID0gcGFyc2VKc29uKGhlYWRlcnMpO1xuICAgIGRhdGEgPSBwYXJzZUpzb24oZGF0YSk7XG4gICAgbGV0IHNvbWV0aGluZyA9IGZhbHNlO1xuICAgIGlmIChoZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID09PSBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSB7XG4gICAgICBpZiAodHlwZW9mIGRhdGEgPT0gXCJvYmplY3RcIikge1xuICAgICAgICBzb21ldGhpbmcgPSB0cnVlO1xuICAgICAgICBkYXRhID0gcXNzdHJpbmdpZnkoZGF0YSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgaWYgKFtcIkdFVFwiLCBcIkhFQURcIl0uaW5jbHVkZXMobWV0aG9kKSkge1xuICAgICAgZGF0YSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbWV0aG9kLCBib2R5OiBkYXRhLCBoZWFkZXJzIH0pO1xuICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3AuanNvbigpO1xuICAgICAgd2luZG93LmNhbGxVSUNhbGxiYWNrKFxuICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgXCJzdWNjZXNzXCIsXG4gICAgICAgIGJ0b2EoSlNPTi5zdHJpbmdpZnkoanNvbikpLFxuICAgICAgICByZXNwLnN0YXR1c1xuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRVJSXCIsIGVycik7XG4gICAgICB3aW5kb3cuY2FsbFVJQ2FsbGJhY2soY2FsbGJhY2ssIFwiZmFpbHVyZVwiLCBidG9hKFwie31cIiksIDUwKTtcbiAgICB9XG4gIH0sXG5cbiAgZ2V0RnJvbVNoYXJlZFByZWZzOiBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSB8fCBcIl9fZmFpbGVkXCI7XG4gIH0sXG5cbiAgc2V0SW5TaGFyZWRQcmVmczogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICB9LFxuXG4gIHZpZXdQYWdlckFkYXB0ZXI6IGZ1bmN0aW9uKGlkLCBqc3gsIHRhYkpzeCwgY2IpIHtcbiAgICBWaWV3UGFnZUFkYXB0ZXIuY3JlYXRlVGFicyhpZCwganN4LCB0YWJKc3gsIGNiKTtcbiAgfSxcblxuICBzd2l0Y2hUb1ZpZXdQYWdlckluZGV4OiBmdW5jdGlvbihpbmRleCkge1xuICAgIFZpZXdQYWdlQWRhcHRlci50b2dnbGVWaWV3KGluZGV4KTtcbiAgfSxcblxuICBnZXRLZXk6IGZ1bmN0aW9uKGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgfHwgZGVmYXVsdFZhbHVlO1xuICB9LFxuXG4gIHNldEtleTogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgfSxcblxuICBnZXRSZXNvdXJjZUJ5TmFtZTogZnVuY3Rpb24gZ2V0UmVzb3VyY2VCeU5hbWUodGFnKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9LFxuXG4gIGdldFNlc3Npb25BdHRyaWJ1dGU6IGZ1bmN0aW9uIGdldFNlc3Npb25BdHRyaWJ1dGUodjEsIHYyKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHsgYTogdjEgfSk7XG4gIH0sXG5cbiAgc2V0QW5hbHl0aWNzRW5kUG9pbnQ6IGZ1bmN0aW9uIHNldEFuYWx5dGljc0VuZFBvaW50KHVybCkge1xuICAgIHJldHVybjtcbiAgfSxcblxuICBnZXRTZXNzaW9uSW5mbzogZnVuY3Rpb24gZ2V0U2Vzc2lvbkluZm8oKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHt9KTtcbiAgfSxcblxuICBhdHRhY2g6IGZ1bmN0aW9uIGF0dGFjaCgpIHtcbiAgICByZXR1cm47XG4gIH0sXG5cbiAgYWRkVG9Mb2dMaXN0OiBmdW5jdGlvbiBhZGRUb0xvZ0xpc3QoZGF0YSkge1xuICAgIGNvbnN0IG5ld0xvZyA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgY29uc3QgbG9nc0FyciA9IEFycmF5LmlzQXJyYXkobmV3TG9nKSA/IG5ld0xvZyA6IFtuZXdMb2ddO1xuICAgIHNlbmRBbmFseXRpY3MobG9nc0FycilcbiAgfSxcbiAgc2F2ZVRvTG9jYWw6IGZ1bmN0aW9uKGEsYixjKXtcbiAgICB0cnl7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiZGVmT3B0aW9uVHlwZVwiKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJkZWZPcHRpb25cIik7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwibWVyY2hhbnRcIik7XG4gICAgfVxuICAgIGNhdGNoKGUpe31cbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RlZk9wdGlvblR5cGUnLCBhKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RlZk9wdGlvbicsIEpTT04uc3RyaW5naWZ5KGIpKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21lcmNoYW50JywgSlNPTi5zdHJpbmdpZnkoYykpO1xuXG4gIH0sXG4gIGRlbGV0ZUZyb21Mb2NhbDogZnVuY3Rpb24oKXt9LFxuICBsb2FkRnJvbUxvY2FsOiBmdW5jdGlvbihrZXkpe1xuICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KT09dW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIFwiXCJcbiAgICB0cnl7XG4gICAgY29uc3QgYSA9ICBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcbiAgICBpZiAoYT09dW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIFwiXCJcbiAgICByZXR1cm4gYVxuICAgIH0gY2F0Y2goZSl7XG4gICAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcbiAgICB9XG4gIH0sXG4gIHBvc3RMb2dzKGVuZFBvaW50LCBsb2dzKSB7XG4gICAgcmV0dXJuO1xuICB9LFxuXG4gIHN1Ym1pdEFsbExvZ3M6IGZ1bmN0aW9uIHN1Ym1pdEFsbExvZ3MoKSB7XG4gICAgcmV0dXJuO1xuICB9LFxuXG4gIGdldExvZ0xpc3Q6IGZ1bmN0aW9uIGdldExvZ0xpc3QoKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KFtdKTtcbiAgfSxcblxuICB1cGRhdGVMb2dMaXN0OiBmdW5jdGlvbiB1cGRhdGVMb2dMaXN0KCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7fSk7XG4gIH0sXG5cbiAgaXNPbmxpbmU6IGZ1bmN0aW9uIGlzT25saW5lKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuXG4gIGdldERldmljZURldGFpbHM6IGZ1bmN0aW9uIGdldERldmljZURldGFpbHMoKSB7XG4gICAgY29uc3QgZGV2aWNlRGV0YWlscyA9IHtcbiAgICAgIGFwcFZlcnNpb246IFwiXCIsXG4gICAgICBvc1ZlcnNpb246IFwiXCIsXG4gICAgICBvczogXCJcIixcbiAgICAgIG1hY0FkZHJlc3M6IFwiXCIsXG4gICAgICBpc0R1YWw6IFwiXCIsXG4gICAgICBtYW51ZmFjdHVyZXI6IFwiXCIsXG4gICAgICBpc1Jvb3RlZDogXCJcIixcbiAgICAgIGFuZHJvaWRJZDogXCJcIixcbiAgICAgIGFwcFBhY2thZ2VOYW1lOiBcIlwiLFxuICAgICAgbmV0d29ya09wZXJhdG9yOiBcIlwiLFxuICAgICAgc2ltT3BlcmF0b3JOYW1lOiBcIlwiLFxuICAgICAgc2NyZWVuSGVpZ2h0OiBcIlwiLFxuICAgICAgc2NyZWVuV2lkdGg6IFwiXCIsXG4gICAgICBzY3JlZW5QcGk6IFwiXCIsXG4gICAgICBicmFuZDogXCJcIixcbiAgICAgIG1vZGVsOiBcIlwiLFxuICAgIH1cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGV2aWNlRGV0YWlscyk7XG4gIH0sXG5cbiAgZ2V0RGV2aWNlSW5mbzogZnVuY3Rpb24gZ2V0RGV2aWNlSW5mbygpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe30pXG4gIH0sXG5cbiAgZ2V0VVVJRDogZnVuY3Rpb24gZ2V0VVVJRCgpIHtcbiAgICBmdW5jdGlvbiBzNCgpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxuICAgICAgICAgICAgICAudG9TdHJpbmcoMTYpXG4gICAgICAgICAgICAgIC5zdWJzdHJpbmcoMSk7XG4gICAgfVxuICAgIHJldHVybiBzNCgpICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICtcbiAgICAgICAgICAgIHM0KCkgKyAnLScgKyBzNCgpICsgczQoKSArIHM0KCk7ICBcbiAgfSxcblxuICByZW5ld0ZpbGU6IGZ1bmN0aW9uIHJlbmV3RmlsZShmaWxlKSB7XG4gICAgcmV0dXJuO1xuICB9LFxuICBoaWRlS2V5Ym9hcmRPbk5hdmlnYXRpb246IGZ1bmN0aW9uIGhpZGVLZXlib2FyZE9uTmF2aWdhdGlvbigpIHtcbiAgICByZXR1cm47XG4gIH0sXG4gIHJ1bkluSnVzcGF5QnJvd3NlcjogZnVuY3Rpb24gcnVuSW5KdXNwYXlCcm93c2VyKGV2ZW50TmFtZSwgYXJnMiwgYXJnMykge1xuICAgIC8vXG4gIH1cbn07XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiAqIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuICpcbiAqIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuICogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiAqIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiAqIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4gKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiAqIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuICogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2VcbiAqIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4gKi9cblxubGV0IHtcbiAgICBjb21wdXRlQ2hpbGREaW1lbnNcbn0gPSByZXF1aXJlKFwiLi4vY29tcHV0ZVwiKVxubGV0IHtcbiAgICByZW5kZXJDb21wb25lbnRcbn0gPSByZXF1aXJlKFwiLi4vY29tcG9uZW50XCIpXG5sZXQgaGVscGVyID0gcmVxdWlyZShcIi4uL2hlbHBlclwiKVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0RWxlbWVudChlbGVtLCBjb25maWcpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSBlbGVtLmNoaWxkTm9kZXM7XG4gICAgbGV0IGFydGljbGUgPSBudWxsXG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGRyZW5baV0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PSAnYXJ0aWNsZScpIHtcbiAgICAgICAgICAgICAgICBhcnRpY2xlID0gY2hpbGRyZW5baV1cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFhcnRpY2xlKVxuICAgICAgICBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQVJUSUNMRScpXG5cbiAgICBlbGVtLnN0eWxlLndoaXRlU3BhY2UgPSBcImluaXRpYWxcIlxuXG4gICAgaWYgKGNvbmZpZy5pc0h0bWxDb250ZW50KVxuICAgICAgICBhcnRpY2xlLmlubmVySFRNTCA9IGNvbmZpZy50ZXh0XG4gICAgZWxzZVxuICAgICAgICBhcnRpY2xlLmlubmVyVGV4dCA9IGNvbmZpZy50ZXh0XG5cbiAgICBpZiAoIWNvbmZpZy50ZXh0ICYmIGNvbmZpZy5oaW50KVxuICAgICAgICBhcnRpY2xlLmlubmVyVGV4dCA9IGNvbmZpZy5oaW50XG5cbiAgICBhcnRpY2xlLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstd29yZFwiXG5cbiAgICBpZiAoY29uZmlnLmxldHRlclNwYWNpbmcpXG4gICAgICAgIGVsZW1bXCJzdHlsZVwiXVtcImxldHRlci1zcGFjaW5nXCJdID0gY29uZmlnLmxldHRlclNwYWNpbmdcblxuICAgIGVsZW0uYXBwZW5kQ2hpbGQoYXJ0aWNsZSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dEVsZW1lbnQyKGVsZW0sIGNvbmZpZykge1xuICAgIGxldCBjaGlsZHJlbiA9IGVsZW0uY2hpbGROb2RlcztcbiAgICBsZXQgYXJ0aWNsZSA9IG51bGxcbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjaGlsZHJlbltpXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09ICdhcnRpY2xlJykge1xuICAgICAgICAgICAgICAgIGFydGljbGUgPSBjaGlsZHJlbltpXVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWFydGljbGUpXG4gICAgICAgIGFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdBUlRJQ0xFJylcblxuICAgIGVsZW0uc3R5bGUud2hpdGVTcGFjZSA9IFwiaW5pdGlhbFwiXG5cbiAgICBpZiAoY29uZmlnLmlzSHRtbENvbnRlbnQpXG4gICAgICAgIGFydGljbGUuaW5uZXJIVE1MID0gY29uZmlnLnRleHRGcm9tSHRtbFxuICAgIGVsc2VcbiAgICAgICAgYXJ0aWNsZS5pbm5lckhUTUwgPSBjb25maWcudGV4dEZyb21IdG1sXG5cbiAgICBpZiAoIWNvbmZpZy50ZXh0ICYmIGNvbmZpZy5oaW50KVxuICAgICAgICBhcnRpY2xlLmlubmVyVGV4dCA9IGNvbmZpZy5oaW50XG5cbiAgICBhcnRpY2xlLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstd29yZFwiXG5cbiAgICBpZiAoY29uZmlnLmxldHRlclNwYWNpbmcpXG4gICAgICAgIGVsZW1bXCJzdHlsZVwiXVtcImxldHRlci1zcGFjaW5nXCJdID0gY29uZmlnLmxldHRlclNwYWNpbmdcblxuICAgIGVsZW0uYXBwZW5kQ2hpbGQoYXJ0aWNsZSlcbn1cblxuZnVuY3Rpb24gcG9wdXAoZWxlbSwgcHJvcHMpIHtcbiAgICBsZXQgbWVudUl0ZW1zID0gcHJvcHNbXCJwb3B1cE1lbnVcIl0uc3BsaXQoJywnKTtcbiAgICBsZXQgbWVudUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUJhci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBvcHVwTWVudVwiKTtcbiAgICBtZW51QmFyLnN0eWxlLmNzc1RleHQgPVxuICAgICAgICBcImRpc3BsYXk6IG5vbmU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDIwcHg7IHRvcDoyMHB4OyB6LWluZGV4OiA1O1wiICtcbiAgICAgICAgXCJib3gtc2hhZG93OiAwcHggNXB4IDEwcHggIzg4ODg4ODtcIjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1lbnVCYXIpXG4gICAgbGV0IGNsaWNrQ2IgPSBcIm9uTWVudUl0ZW1DbGlja1wiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWVudURpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnVJdGVtXCIpO1xuICAgICAgICBtZW51RGl2LnRleHRDb250ZW50ID0gbWVudUl0ZW1zW2ldO1xuICAgICAgICBtZW51QmFyLmFwcGVuZENoaWxkKG1lbnVEaXYpO1xuICAgICAgICBsZXQgaW5kZXggPSBpO1xuICAgICAgICBpZiAocHJvcHNbY2xpY2tDYl0gJiZcbiAgICAgICAgICAgIHR5cGVvZiBwcm9wc1tjbGlja0NiXSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIG1lbnVEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9wc1tjbGlja0NiXShpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChtZW51QmFyLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIpXG4gICAgICAgICAgICBtZW51QmFyLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBtZW51QmFyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0R3Jhdml0eVN0eWxlc0ZvclJvdyhlbGVtLCBwcm9wcykge1xuICAgIGlmICghcHJvcHMuaGFzT3duUHJvcGVydHkoJ2dyYXZpdHknKSB8fCAhcHJvcHMuZ3Jhdml0eSkge1xuICAgICAgICBwcm9wcy5ncmF2aXR5ID0gJyc7XG4gICAgICAgIC8vcmV0dXJuO1xuICAgIH1cblxuICAgIHN3aXRjaCAocHJvcHMuZ3Jhdml0eSkge1xuICAgICAgICBjYXNlICdjZW50ZXJfdmVydGljYWwnOlxuICAgICAgICAgICAgZWxlbS5zdHlsZVsnYWxpZ24taXRlbXMnXSA9ICdjZW50ZXInO1xuICAgICAgICAgICAgZWxlbS5zdHlsZVsnanVzdGlmeS1jb250ZW50J10gPSAnZmxleC1zdGFydCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2VudGVyX2hvcml6b250YWwnOlxuICAgICAgICAgICAgZWxlbS5zdHlsZVsnYWxpZ24taXRlbXMnXSA9ICdmbGV4LXN0YXJ0JztcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbJ2p1c3RpZnktY29udGVudCddID0gJ2NlbnRlcic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2VudGVyJzpcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbJ2FsaWduLWl0ZW1zJ10gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgZWxlbS5zdHlsZVsnanVzdGlmeS1jb250ZW50J10gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgICAgICBlbGVtLnN0eWxlWydhbGlnbi1pdGVtcyddID0gJ2ZsZXgtc3RhcnQnO1xuICAgICAgICAgICAgZWxlbS5zdHlsZVsnanVzdGlmeS1jb250ZW50J10gPSAnZmxleC1zdGFydCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgZWxlbS5zdHlsZVsnYWxpZ24taXRlbXMnXSA9ICdmbGV4LXN0YXJ0JztcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbJ2p1c3RpZnktY29udGVudCddID0gJ2ZsZXgtZW5kJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZWxlbS5zdHlsZVsnYWxpZ24taXRlbXMnXSA9ICdmbGV4LXN0YXJ0JztcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbJ2p1c3RpZnktY29udGVudCddID0gJ2ZsZXgtc3RhcnQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZXRHcmF2aXR5U3R5bGVzRm9yQ29sdW1uKGVsZW0sIHByb3BzKSB7XG4gICAgaWYgKCFwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnZ3Jhdml0eScpIHx8ICFwcm9wcy5ncmF2aXR5KSB7XG4gICAgICAgIHByb3BzLmdyYXZpdHkgPSAnJztcbiAgICAgICAgLy9yZXR1cm47XG4gICAgfVxuXG4gICAgc3dpdGNoIChwcm9wcy5ncmF2aXR5KSB7XG4gICAgICAgIGNhc2UgJ2NlbnRlcl92ZXJ0aWNhbCc6XG4gICAgICAgICAgICBlbGVtLnN0eWxlWydhbGlnbi1pdGVtcyddID0gJ2ZsZXgtc3RhcnQnO1xuICAgICAgICAgICAgZWxlbS5zdHlsZVsnanVzdGlmeS1jb250ZW50J10gPSAnY2VudGVyJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjZW50ZXJfaG9yaXpvbnRhbCc6XG4gICAgICAgICAgICBlbGVtLnN0eWxlWydhbGlnbi1pdGVtcyddID0gJ2NlbnRlcic7XG4gICAgICAgICAgICBlbGVtLnN0eWxlWydqdXN0aWZ5LWNvbnRlbnQnXSA9ICdmbGV4LXN0YXJ0JztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjZW50ZXInOlxuICAgICAgICAgICAgZWxlbS5zdHlsZVtcImFsaWduLWl0ZW1zXCJdID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbXCJqdXN0aWZ5LWNvbnRlbnRcIl0gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgICAgICBlbGVtLnN0eWxlWydqdXN0aWZ5LWNvbnRlbnQnXSA9ICdmbGV4LXN0YXJ0JztcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbJ2FsaWduLWl0ZW1zJ10gPSAnZmxleC1zdGFydCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgZWxlbS5zdHlsZVsnYWxpZ24taXRlbXMnXSA9ICdmbGV4LWVuZCc7XG4gICAgICAgICAgICBlbGVtLnN0eWxlWydqdXN0aWZ5LWNvbnRlbnQnXSA9ICdmbGV4LXN0YXJ0JztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZWxlbS5zdHlsZVsnYWxpZ24taXRlbXMnXSA9ICdmbGV4LXN0YXJ0JztcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbJ2p1c3RpZnktY29udGVudCddID0gJ2ZsZXgtc3RhcnQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZXRBbmltYXRpb25TdHlsZXMoZWxlbSwgcHJvcHMpIHtcbiAgaWYgKCFwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnaGFzQW5pbWF0aW9uJykgfHwgIXByb3BzLmhhc0FuaW1hdGlvbikge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3Qga2V5ZnJhbWVOYW1lID0gXCJrZXlmcmFtZV9cIiArIHByb3BzLmlkXG4gIGlmICghd2luZG93Ll9fUkVOREVSRURfS0VZRlJBTUVTLmluY2x1ZGVzKGtleWZyYW1lTmFtZSkpIHtcbiAgICBsZXQgc3R5bGVFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQod2luZG93Ll9fU1RZTEVfSUQpXG5cbiAgICBpZiAoIXN0eWxlRWxlbSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGRhdGEgPSBudWxsXG5cbiAgICBpZiAocHJvcHMuaW5saW5lQW5pbWF0aW9uKSB7XG4gICAgICBkYXRhID0gSlNPTi5wYXJzZShwcm9wcy5pbmxpbmVBbmltYXRpb24pXG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZGF0YSA9IGRhdGFbMF1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBjc3MgPSBcIlwiXG4gICAgY3NzICs9IFwiQGtleWZyYW1lcyBcIiArIGtleWZyYW1lTmFtZSArIFwie1wiXG4gICAgICBjc3MgKz0gXCJmcm9tIHtcIlxuICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnZnJvbVgnKSkge1xuICAgICAgICAgIGNzcyArPSBcIm1hcmdpbi1sZWZ0OiBcIiArIGRhdGEuZnJvbVggKyBcInB4O1wiXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnZnJvbVknKSkge1xuICAgICAgICAgIGNzcyArPSBcIm1hcmdpbi10b3A6IFwiICsgZGF0YS5mcm9tWSArIFwicHg7XCJcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ2Zyb21BbHBoYScpKSB7XG4gICAgICAgICAgY3NzICs9IFwib3BhY2l0eTogXCIgKyBkYXRhLmZyb21BbHBoYSArIFwiO1wiXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCdmcm9tU2NhbGUnKSkge1xuICAgICAgICAgIGNzcyArPSBcInRyYW5zZm9ybTogc2NhbGUoXCIgKyBkYXRhLmZyb21TY2FsZSArIFwiKTtcIlxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ2Zyb21TY2FsZVgnKSAmJiBkYXRhLmhhc093blByb3BlcnR5KCdmcm9tU2NhbGVZJykpIHtcbiAgICAgICAgICBjc3MgKz0gXCJ0cmFuc2Zvcm06IHNjYWxlKFwiICsgZGF0YS5mcm9tU2NhbGVYICsgXCIsIFwiICsgZGF0YS5mcm9tU2NhbGVZICsgXCIpO1wiXG4gICAgICAgIH0gZWxzZSBpZihkYXRhLmhhc093blByb3BlcnR5KCdmcm9tU2NhbGVYJykpIHtcbiAgICAgICAgICBjc3MgKz0gXCJ0cmFuc2Zvcm06IHNjYWxlWChcIiArIGRhdGEuZnJvbVNjYWxlWCArIFwiKTtcIlxuICAgICAgICB9IGVsc2UgaWYoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnZnJvbVNjYWxlWScpKSB7XG4gICAgICAgICAgY3NzICs9IFwidHJhbnNmb3JtOiBzY2FsZVkoXCIgKyBkYXRhLmZyb21TY2FsZVkgKyBcIik7XCJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCdmcm9tUm90YXRpb24nKSkge1xuICAgICAgICAgIGNzcyArPSBcInRyYW5zZm9ybTogcm90YXRlKFwiICsgZGF0YS5mcm9tUm90YXRpb24gKyBcIik7XCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZihkYXRhLmhhc093blByb3BlcnR5KCdmcm9tUm90YXRpb25YJykpIHtcbiAgICAgICAgICAgIGNzcyArPSBcInRyYW5zZm9ybTogcm90YXRlWChcIiArIGRhdGEuZnJvbVJvdGF0aW9uWCArIFwiKTtcIlxuICAgICAgICAgIH0gZWxzZSBpZihkYXRhLmhhc093blByb3BlcnR5KCdmcm9tUm90YXRpb25ZJykpIHtcbiAgICAgICAgICAgIGNzcyArPSBcInRyYW5zZm9ybTogcm90YXRlWShcIiArIGRhdGEuZnJvbVJvdGF0aW9uWSArIFwiKTtcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgIGNzcyArPSBcIn0gXCJcbiAgICAgIGNzcyArPSBcInRvIHtcIlxuICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgndG9YJykpIHtcbiAgICAgICAgICBjc3MgKz0gXCJtYXJnaW4tbGVmdDogXCIgKyBkYXRhLnRvWCArIFwicHg7XCJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCd0b1knKSkge1xuICAgICAgICAgIGNzcyArPSBcIm1hcmdpbi10b3A6IFwiICsgZGF0YS50b1kgKyBcInB4O1wiXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCd0b0FscGhhJykpIHtcbiAgICAgICAgICBjc3MgKz0gXCJvcGFjaXR5OiBcIiArIGRhdGEudG9BbHBoYSArIFwiO1wiXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCd0b1NjYWxlJykpIHtcbiAgICAgICAgICBjc3MgKz0gXCJ0cmFuc2Zvcm06IHNjYWxlKFwiICsgZGF0YS50b1NjYWxlICsgXCIpO1wiXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgndG9TY2FsZVgnKSAmJiBkYXRhLmhhc093blByb3BlcnR5KCd0b1NjYWxlWScpKSB7XG4gICAgICAgICAgY3NzICs9IFwidHJhbnNmb3JtOiBzY2FsZShcIiArIGRhdGEudG9TY2FsZVggKyBcIiwgXCIgKyBkYXRhLnRvU2NhbGVZICsgXCIpO1wiXG4gICAgICAgIH0gZWxzZSBpZihkYXRhLmhhc093blByb3BlcnR5KCd0b1NjYWxlWCcpKSB7XG4gICAgICAgICAgY3NzICs9IFwidHJhbnNmb3JtOiBzY2FsZVgoXCIgKyBkYXRhLnRvU2NhbGVYICsgXCIpO1wiXG4gICAgICAgIH0gZWxzZSBpZihkYXRhLmhhc093blByb3BlcnR5KCd0b1NjYWxlWScpKSB7XG4gICAgICAgICAgY3NzICs9IFwidHJhbnNmb3JtOiBzY2FsZVkoXCIgKyBkYXRhLnRvU2NhbGVZICsgXCIpO1wiXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgndG9Sb3RhdGlvbicpKSB7XG4gICAgICAgICAgY3NzICs9IFwidHJhbnNmb3JtOiByb3RhdGUoXCIgKyBkYXRhLnRvUm90YXRpb24gKyBcIik7XCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZihkYXRhLmhhc093blByb3BlcnR5KCd0b1JvdGF0aW9uWCcpKSB7XG4gICAgICAgICAgICBjc3MgKz0gXCJ0cmFuc2Zvcm06IHJvdGF0ZVgoXCIgKyBkYXRhLnRvUm90YXRpb25YICsgXCIpO1wiXG4gICAgICAgICAgfSBlbHNlIGlmKGRhdGEuaGFzT3duUHJvcGVydHkoJ3RvUm90YXRpb25ZJykpIHtcbiAgICAgICAgICAgIGNzcyArPSBcInRyYW5zZm9ybTogcm90YXRlWShcIiArIGRhdGEudG9Sb3RhdGlvblkgKyBcIik7XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICBjc3MgKz0gXCJ9IFwiXG4gICAgY3NzICs9IFwifVwiXG5cbiAgICBpZihzdHlsZUVsZW0uc3R5bGVTaGVldCl7XG4gICAgICBzdHlsZUVsZW0uc3R5bGVTaGVldC5jc3NUZXh0ICs9IGNzcztcbiAgICB9ZWxzZXtcbiAgICAgIHN0eWxlRWxlbS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICB9XG5cbiAgICBlbGVtLnN0eWxlLmFuaW1hdGlvbk5hbWUgPSBrZXlmcmFtZU5hbWVcbiAgICBlbGVtLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gXCIxc1wiXG4gICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ2R1cmF0aW9uJykgJiYgIWlzTmFOKGRhdGEuZHVyYXRpb24pKSB7XG4gICAgICBjb25zdCBkdXJhdGlvbiA9IHBhcnNlRmxvYXQocGFyc2VGbG9hdChkYXRhLmR1cmF0aW9uKSAvIDEwMDApLnRvRml4ZWQoMilcbiAgICAgIGVsZW0uc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArIFwic1wiXG4gICAgfVxuXG4gICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ3JlcGVhdENvdW50JykpIHtcbiAgICAgIGlmIChkYXRhLnJlcGVhdENvdW50ID09IFwiLTFcIiB8fCBkYXRhLnJlcGVhdENvdW50ID09IC0xKSB7XG4gICAgICAgIGVsZW0uc3R5bGUuYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQgPSBcImluZmluaXRlXCJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW0uc3R5bGUuYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQgPSBkYXRhLnJlcGVhdENvdW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJpbnRlcnBvbGF0b3JcIikpIHtcbiAgICAgIGVsZW0uc3R5bGUuYW5pbWF0aW9uVGltaW5nRnVuY3Rpb24gPSBcImN1YmljLWJlemllcihcIiArIGRhdGEuaW50ZXJwb2xhdG9yICsgXCIpXCI7XG4gICAgfVxuXG4gICAgd2luZG93Ll9fUkVOREVSRURfS0VZRlJBTUVTLnB1c2goa2V5ZnJhbWVOYW1lKVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldENvbXB1dGVkU3R5bGVzKGVsZW0sIHByb3BzKSB7XG4gICAgLyogQ29tcHV0ZWQgU3R5bGVzICovXG4gICAgLy8gTGluZWFyTGF5b3V0IFN0eWxlc1xuICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnYWN0aXZlRGltZW4nKSAmJiBwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnYWN0aXZlV2VpZ2h0JykpIHtcbiAgICAgICAgbGV0IGFjdGl2ZURpbWVuID0gcHJvcHMuYWN0aXZlRGltZW47XG4gICAgICAgIGxldCB3ZWlnaHQgPSBwcm9wcy5hY3RpdmVXZWlnaHQ7XG5cbiAgICAgICAgaWYgKHdlaWdodCA+IDApIHtcbiAgICAgICAgICAgIGVsZW0uc3R5bGUuZmxleCA9IHdlaWdodDtcblxuICAgICAgICAgICAgaWYgKGFjdGl2ZURpbWVuID09ICd3Jykge1xuICAgICAgICAgICAgICAgIC8vZWxlbS5zdHlsZS53aWR0aCA9ICdhdXRvJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZWxlbS5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtLnN0eWxlLmZsZXggPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtLnN0eWxlLmZsZXggPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgLy8gUmVsYXRpdmVMYXlvdXQgU3R5bGVzXG4gICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdhYnNvbHV0ZScpICYmIHByb3BzLmFic29sdXRlKSB7XG4gICAgICAgIGVsZW0uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXG4gICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShcImZyb21Ub3BcIikpIHtcbiAgICAgICAgICAgIGlmIChpc05hTihwcm9wcy5mcm9tVG9wKSlcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLnRvcCA9IHByb3BzLmZyb21Ub3A7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS50b3AgPSBwcm9wcy5mcm9tVG9wICsgJ3B4JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShcImZyb21Cb3R0b21cIikpIHtcbiAgICAgICAgICAgIGlmIChpc05hTihwcm9wcy5mcm9tQm90dG9tKSlcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLmJvdHRvbSA9IHByb3BzLmZyb21Cb3R0b207XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5ib3R0b20gPSBwcm9wcy5mcm9tQm90dG9tICsgJ3B4JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShcImZyb21MZWZ0XCIpKSB7XG4gICAgICAgICAgICBpZiAoaXNOYU4ocHJvcHMuZnJvbUxlZnQpKVxuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUubGVmdCA9IHByb3BzLmZyb21MZWZ0O1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUubGVmdCA9IHByb3BzLmZyb21MZWZ0ICsgJ3B4JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShcImZyb21SaWdodFwiKSkge1xuICAgICAgICAgICAgaWYgKGlzTmFOKHByb3BzLmZyb21SaWdodCkpXG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5yaWdodCA9IHByb3BzLmZyb21SaWdodDtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLnJpZ2h0ID0gcHJvcHMuZnJvbVJpZ2h0ICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiBDb21wdXRlZCBTdHlsZXMgRW5kICovXG59XG5cbmZ1bmN0aW9uIHNlcGFyYXRvcklucHV0S2V5RG93bkhhbmRsZXIoZXYpe1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRyeXtcbiAgICAgICAgdmFyIGlucHV0SWQgPSBldi50YXJnZXQuaWQ7XG4gICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0SWQpXG4gICAgICAgIHZhciBvbGRWYWxpZFZhbHVlID0gXCJcIjtcbiAgICAgICAgaWYoaW5wdXQub2xkVmFsaWRWYWx1ZSl7XG4gICAgICAgICAgICBvbGRWYWxpZFZhbHVlID0gaW5wdXQub2xkVmFsaWRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZihpbnB1dC52YWx1ZS5sZW5ndGg9PT0wKXtcbiAgICAgICAgICAgIGlucHV0Lm9sZFZhbGlkVmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGF0YVBhdHRlcm4gPSBpbnB1dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBhdHRlcm5cIik7XG4gICAgICAgIGlmIChkYXRhUGF0dGVybikge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBkYXRhUGF0dGVybi5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgdmFyIGxlbmd0aCA9IHBhcnNlSW50KGRhdGEucG9wKCkpO1xuICAgICAgICAgICAgdmFyIHJlZ2V4U3RyaW5nID0gZGF0YS5qb2luKCcnKTtcbiAgICAgICAgICAgIHZhciBzZWxlY3Rpb25TdGFydCA9IGlucHV0LnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgdmFyIHNlbGVjdGlvbkVuZCA9IGlucHV0LnNlbGVjdGlvbkVuZDtcbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICBpZiAobGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9sZFZhbGlkVmFsdWUubGVuZ3RoIDwgaW5wdXQudmFsdWUubGVuZ3RoICYmIG9sZFZhbGlkVmFsdWUubGVuZ3RoICsgMSA+IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IG9sZFZhbGlkVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uU3RhcnQtIChzZWxlY3Rpb25FbmQtc2VsZWN0aW9uU3RhcnQpLTE7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbkVuZC0gKHNlbGVjdGlvbkVuZCAtIHNlbGVjdGlvblN0YXJ0KS0xO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGZpbmFsRGF0YSA9IG5ld1ZhbHVlLnJlcGxhY2UoL1teYS16QS1aMC05QC4tXS9nLCBcIlwiKTtcbiAgICAgICAgICAgIGlmIChyZWdleFN0cmluZykge1xuICAgICAgICAgICAgICAgIHZhciByZWdleFBhdHRlcm4gPSBuZXcgUmVnRXhwKHJlZ2V4U3RyaW5nKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlZ2V4UGF0dGVybi50ZXN0KGZpbmFsRGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBvbGRWYWxpZFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvblN0YXJ0LSAoc2VsZWN0aW9uRW5kLXNlbGVjdGlvblN0YXJ0KS0xO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb25FbmQtIChzZWxlY3Rpb25FbmQgLSBzZWxlY3Rpb25TdGFydCktMTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzZXBhcmF0b3IgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoXCJzZXBhcmF0b3JcIik7XG4gICAgICAgICAgICB2YXIgc2VwYXJhdG9yUmVwZWF0ID0gcGFyc2VJbnQoaW5wdXQuZ2V0QXR0cmlidXRlKFwic2VwYXJhdG9yUmVwZWF0XCIpKTtcbiAgICAgICAgICAgIGlmIChzZXBhcmF0b3IgJiYgc2VwYXJhdG9yUmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB2YXIgZm9ybWF0dGVkU3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmluYWxEYXRhLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IGZpbmFsRGF0YVtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyArPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICB2YXIgZmFjdG9yID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1hdHRlZFN0cmluZy5sZW5ndGggJiYgZm9ybWF0dGVkU3RyaW5nLnJlcGxhY2UoL1teYS16QS1aMC05QC4tXS9nLCBcIlwiKS5sZW5ndGggJSAoc2VwYXJhdG9yUmVwZWF0ICsgZmFjdG9yKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgKz0gc2VwYXJhdG9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmb3JtYXR0ZWRTdHJpbmdbZm9ybWF0dGVkU3RyaW5nLmxlbmd0aCAtIDFdID09IHNlcGFyYXRvcikge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSBmb3JtYXR0ZWRTdHJpbmcuc3Vic3RyaW5nKDAsIGZvcm1hdHRlZFN0cmluZy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBmb3JtYXR0ZWRTdHJpbmc7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnNvclBvc2l0aW9uID0gc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICAgICAgaWYgKChjdXJzb3JQb3NpdGlvbiAlIChzZXBhcmF0b3JSZXBlYXQgKyAxKSApID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGlucHV0Lm9sZFZhbGlkVmFsdWUubGVuZ3RoIDwgZm9ybWF0dGVkU3RyaW5nLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3JQb3NpdGlvbiArPSAxXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3JQb3NpdGlvbiAtPSAxXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoY3Vyc29yUG9zaXRpb248MCl7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvclBvc2l0aW9uID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5wdXQub2xkVmFsaWRWYWx1ZSA9IGZvcm1hdHRlZFN0cmluZztcbiAgICAgICAgICAgICAgICBpbnB1dC5zZWxlY3Rpb25TdGFydCA9IGN1cnNvclBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIGlucHV0LnNlbGVjdGlvbkVuZCA9IGN1cnNvclBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZm9ybWF0dGVkU3RyaW5nLS0tLVwiLCBmb3JtYXR0ZWRTdHJpbmcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5vbGRWYWxpZFZhbHVlID0gZmluYWxEYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxufVxuZnVuY3Rpb24gc2V0QXR0cmlidXRlcyh0eXBlLCBlbGVtLCBwcm9wcywgZmlyc3RSZW5kZXIpIHtcbiAgICBpZiAodHlwZSA9PSAnbW9kYWwnKSB7XG4gICAgICAgIHNldE1vZGFsQXR0cmlidXRlcyhlbGVtLCBwcm9wcywgZmlyc3RSZW5kZXIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVsZW0uY2xhc3NMaXN0ICYmIGVsZW0uY2xhc3NMaXN0Lmxlbmd0aCA+IDApXG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCh0eXBlKVxuICAgIGVsc2VcbiAgICAgICAgZWxlbS5jbGFzc05hbWUgPSB0eXBlXG5cbiAgICBlbGVtLnN0eWxlLnRyYW5zaXRpb24gPSBwcm9wcy50cmFuc2l0aW9uO1xuXG4gICAgLyogTmV3IFN0eWxlICovXG4gICAgLyogUmVuZGVyIGZyb20gZ2xvYmFsIHN0eWxlcyAqL1xuICAgIGVsZW0uc3R5bGUud2lkdGggPSAnYXV0byc7XG4gICAgZWxlbS5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG5cbiAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ3dpZHRoJykpIHtcbiAgICAgICAgaWYgKHByb3BzLndpZHRoID09ICdtYXRjaF9wYXJlbnQnKSB7XG4gICAgICAgICAgICBlbGVtLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICB9IGVsc2UgaWYgKHByb3BzLndpZHRoID09ICd3cmFwX2NvbnRlbnQnKSB7XG4gICAgICAgICAgICAvLyBZb3Ugc2VlIGJlbG93XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzTmFOKHByb3BzLndpZHRoKSkge1xuICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdwZXJjZW50V2lkdGgnKSAmJiBwcm9wcy5wZXJjZW50V2lkdGgpXG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS53aWR0aCA9IHByb3BzLndpZHRoICsgJyUnO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUud2lkdGggPSBwcm9wcy53aWR0aCArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ2hlaWdodCcpKSB7XG4gICAgICAgIGlmIChwcm9wcy5oZWlnaHQgPT0gJ21hdGNoX3BhcmVudCcpIHtcbiAgICAgICAgICAgIGVsZW0uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgICB9IFxuICAgICAgICBlbHNlIGlmIChwcm9wcy5oZWlnaHQgPT0gJ3dyYXBfY29udGVudCcpIHtcbiAgICAgICAgICAgIGVsZW0uc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCI7XG4gICAgICAgICAgICAvLyBZb3Ugc2VlIGJlbG93XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzTmFOKHByb3BzLmhlaWdodCkpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgncGVyY2VudEhlaWdodCcpICYmIHByb3BzLnBlcmNlbnRIZWlnaHQpXG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5oZWlnaHQgPSBwcm9wcy5oZWlnaHQgKyAnJSc7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5oZWlnaHQgPSBwcm9wcy5oZWlnaHQgKyAncHgnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdtaW5XaWR0aCcpICYmICFpc05hTihwcm9wcy5taW5XaWR0aCkpIHtcbiAgICAgICAgaWYgKHByb3BzLnBlcmNlbnRNaW5XaWR0aClcbiAgICAgICAgICAgIGVsZW0uc3R5bGUubWluV2lkdGggPSBwcm9wcy5taW5XaWR0aCArICclJztcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgZWxlbS5zdHlsZS5taW5XaWR0aCA9IHByb3BzLm1pbldpZHRoICsgJ3B4JztcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ21pbkhlaWdodCcpICYmICFpc05hTihwcm9wcy5taW5IZWlnaHQpKSB7XG4gICAgICAgIGlmIChwcm9wcy5wZXJjZW50TWluSGVpZ2h0KVxuICAgICAgICAgICAgZWxlbS5zdHlsZS5taW5IZWlnaHQgPSBwcm9wcy5taW5IZWlnaHQgKyAnJSc7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGVsZW0uc3R5bGUubWluSGVpZ2h0ID0gcHJvcHMubWluSGVpZ2h0ICsgJ3B4JztcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ21heFdpZHRoJykgJiYgIWlzTmFOKHByb3BzLm1heFdpZHRoKSkge1xuICAgICAgICBpZiAocHJvcHMucGVyY2VudE1heFdpZHRoKVxuICAgICAgICAgICAgZWxlbS5zdHlsZS5tYXhXaWR0aCA9IHByb3BzLm1heFdpZHRoICsgJyUnO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBlbGVtLnN0eWxlLm1heFdpZHRoID0gcHJvcHMubWF4V2lkdGggKyAncHgnO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnbWF4SGVpZ2h0JykgJiYgIWlzTmFOKHByb3BzLm1heEhlaWdodCkpIHtcbiAgICAgICAgaWYgKHByb3BzLnBlcmNlbnRNYXhIZWlnaHQpXG4gICAgICAgICAgICBlbGVtLnN0eWxlLm1heEhlaWdodCA9IHByb3BzLm1heEhlaWdodCArICclJztcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgZWxlbS5zdHlsZS5tYXhIZWlnaHQgPSBwcm9wcy5tYXhIZWlnaHQgKyAncHgnO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgncGFkZGluZycpKSB7XG4gICAgICAgIGxldCBwYWRkaW5nID0gcHJvcHMucGFkZGluZy5zcGxpdCgnLCcpLm1hcChhID0+IGEgKiAxKTtcblxuICAgICAgICBlbGVtLnN0eWxlWydwYWRkaW5nJ10gPSBwYWRkaW5nWzFdICsgJ3B4ICcgKyBwYWRkaW5nWzJdICsgJ3B4ICcgKyBwYWRkaW5nWzNdICsgJ3B4ICcgKyBwYWRkaW5nWzBdICsgJ3B4JztcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ21hcmdpbicpKSB7XG4gICAgICAgIGxldCBtYXJnaW4gPSBwcm9wcy5tYXJnaW4uc3BsaXQoJywnKS5tYXAoYSA9PiBhICogMSk7XG5cbiAgICAgICAgZWxlbS5zdHlsZVsnbWFyZ2luJ10gPSBtYXJnaW5bMV0gKyAncHggJyArIG1hcmdpblsyXSArICdweCAnICsgbWFyZ2luWzNdICsgJ3B4ICcgKyBtYXJnaW5bMF0gKyAncHgnO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgndmlzaWJpbGl0eScpKSB7XG4gICAgICAgIGxldCB2aXNpYmlsaXR5ID0gcHJvcHMudmlzaWJpbGl0eTtcbiAgICAgICAgaWYgKHZpc2liaWxpdHkgPT0gJ2ludmlzaWJsZScpXG4gICAgICAgICAgICBlbGVtLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICBlbHNlIGlmICh2aXNpYmlsaXR5ID09ICdnb25lJylcbiAgICAgICAgICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW0uc3R5bGUudmlzaWJpbGl0eSA9ICcnO1xuXG4gICAgICAgICAgICBpbml0aWFsaXplU2hvdyhlbGVtLCBwcm9wcywgdHlwZSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpbml0aWFsaXplU2hvdyhlbGVtLCBwcm9wcywgdHlwZSk7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdleHBhbmQnKSkge1xuICAgICAgICBsZXQgdmlzaWJpbGl0eSA9IHByb3BzLmV4cGFuZCArICcnO1xuICAgICAgICBpZiAodmlzaWJpbGl0eSA9PSAndHJ1ZScpe1xuICAgICAgICAgICAgZWxlbS5zdHlsZS52aXNpYmlsaXR5ID0gJyc7XG4gICAgICAgICAgICBpbml0aWFsaXplU2hvdyhlbGVtLCBwcm9wcywgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgLyogUmVuZGVyIGdsb2JhbCBzdHlsZXMgZW5kICovXG5cbiAgICBsZXQgc2Nyb2xsQmFyWCA9IHRydWU7XG4gICAgbGV0IHNjcm9sbEJhclkgPSB0cnVlO1xuXG4gICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdzY3JvbGxCYXJYJykpXG4gICAgICAgIHNjcm9sbEJhclggPSBwcm9wcy5zY3JvbGxCYXJYO1xuICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnc2Nyb2xsQmFyWScpKVxuICAgICAgICBzY3JvbGxCYXJZID0gcHJvcHMuc2Nyb2xsQmFyWTtcblxuICAgIC8qIFJlbmRlciB0eXBlIHNwZWNpZmljIHN0eWxlcyAqL1xuICAgIGlmICh0eXBlID09ICdsaW5lYXJMYXlvdXQnKSB7XG4gICAgICAgIGVsZW0uc3R5bGVbXCJib3gtc2l6aW5nXCJdID0gXCJib3JkZXItYm94XCI7XG5cbiAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdmaXhlZFdyYXAnKSAmJiAhcHJvcHMuZml4ZWRXcmFwKSB7XG4gICAgICAgICAgICBlbGVtLnN0eWxlW1wiZmxleC13cmFwXCJdID0gXCJub3dyYXBcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbXCJmbGV4LXdyYXBcIl0gPSBcIndyYXBcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW0uc3R5bGVbXCJmbGV4LWRpcmVjdGlvblwiXSA9IHByb3BzLm9yaWVudGF0aW9uID09IFwiaG9yaXpvbnRhbFwiIHx8IHByb3BzLm9yaWVudGF0aW9uID09IG51bGwgPyBcInJvd1wiIDogXCJjb2x1bW5cIjtcblxuICAgICAgICBpZiAoZWxlbS5zdHlsZVtcImZsZXgtZGlyZWN0aW9uXCJdID09ICdyb3cnKVxuICAgICAgICAgICAgc2V0R3Jhdml0eVN0eWxlc0ZvclJvdyhlbGVtLCBwcm9wcyk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHNldEdyYXZpdHlTdHlsZXNGb3JDb2x1bW4oZWxlbSwgcHJvcHMpO1xuXG4gICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnc2Nyb2xsQmFyWCcpKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuc2Nyb2xsQmFyWClcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLm92ZXJmbG93WCA9ICdhdXRvJ1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUub3ZlcmZsb3dYID0gJ2hpZGRlbidcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnc2Nyb2xsQmFyWScpKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuc2Nyb2xsQmFyWSlcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJ1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbidcbiAgICAgICAgfVxuXG4gICAgfSBlbHNlIGlmICh0eXBlID09IFwiaG9yaXpvbnRhbFNjcm9sbFZpZXdcIikge1xuICAgICAgICBlbGVtLnN0eWxlLm92ZXJmbG93WCA9IFwiYXV0b1wiO1xuICAgICAgICBlbGVtLnN0eWxlLm92ZXJmbG93WSA9IFwiaGlkZGVuXCI7XG5cbiAgICAgICAgaWYgKCFzY3JvbGxCYXJYKVxuICAgICAgICAgICAgZWxlbS5zdHlsZS5vdmVyZmxvd1ggPSAnaGlkZGVuJztcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJsaXN0Vmlld1wiKSB7XG4gICAgICAgIGVsZW0uc3R5bGUub3ZlcmZsb3dZID0gXCJhdXRvXCI7XG4gICAgICAgIGVsZW0uc3R5bGUub3ZlcmZsb3dYID0gXCJoaWRkZW5cIjtcblxuICAgICAgICBpZiAoIXNjcm9sbEJhclkpXG4gICAgICAgICAgICBlbGVtLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PSAnc2Nyb2xsVmlldycpIHtcbiAgICAgICAgZWxlbS5zdHlsZS5vdmVyZmxvd1ggPSAnYXV0byc7XG4gICAgICAgIGVsZW0uc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nO1xuXG4gICAgICAgIGlmICghc2Nyb2xsQmFyWClcbiAgICAgICAgICAgIGVsZW0uc3R5bGUub3ZlcmZsb3dYID0gJ2hpZGRlbic7XG4gICAgICAgIGlmICghc2Nyb2xsQmFyWSlcbiAgICAgICAgICAgIGVsZW0uc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG4gICAgfSBlbHNlIGlmICh0eXBlID09ICdyZWxhdGl2ZUxheW91dCcpIHtcbiAgICAgICAgZWxlbS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG5cbiAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdzY3JvbGxCYXJYJykpIHtcbiAgICAgICAgICBpZiAocHJvcHMuc2Nyb2xsQmFyWClcbiAgICAgICAgICAgICAgZWxlbS5zdHlsZS5vdmVyZmxvd1ggPSAnYXV0bydcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIGVsZW0uc3R5bGUub3ZlcmZsb3dYID0gJ2hpZGRlbidcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnc2Nyb2xsQmFyWScpKSB7XG4gICAgICAgICAgaWYgKHByb3BzLnNjcm9sbEJhclkpXG4gICAgICAgICAgICAgIGVsZW0uc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBlbGVtLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nXG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJ2ltYWdlVmlldycpIHtcbiAgICAgICAgaWYgKHByb3BzLmltYWdlVXJsKSB7XG4gICAgICAgICAgICBsZXQgaW1hZ2VVcmwgPSBwcm9wcy5pbWFnZVVybFxuXG4gICAgICAgICAgICBpZiAocHJvcHMucmF3RGF0YSkge1xuICAgICAgICAgICAgICAgIC8vIERvIE5vdGhpbmdcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHRlbXAgPSBpbWFnZVVybC5zcGxpdCgnLicpXG4gICAgICAgICAgICAgICAgbGV0IGV4dCA9ICcnXG4gICAgICAgICAgICAgICAgaWYgKHRlbXAgJiYgdGVtcC5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgICAgICBleHQgPSB0ZW1wW3RlbXAubGVuZ3RoIC0gMV1cblxuICAgICAgICAgICAgICAgIGxldCBleHRzID0gW1wianBlZ1wiLCBcImpwZ1wiLCBcInBuZ1wiLCBcImJtcFwiLCBcInN2Z1wiLCBcImdpZlwiXVxuICAgICAgICAgICAgICAgIGV4dCA9IGV4dC50b0xvd2VyQ2FzZSgpXG5cbiAgICAgICAgICAgICAgICBpZighaW1hZ2VVcmwuaW5jbHVkZXMoXCJkYXRhOmltYWdlL3N2Zyt4bWxcIikgJiYgIWV4dHMuaW5jbHVkZXMoZXh0KSkge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZVVybCArPSAnLnBuZydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdzcmMnLCBpbWFnZVVybClcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiBSZW5kZXIgdHlwZSBzcGVjaWZpYyBzdHlsZXMgZW5kICovXG4gICAgLyogTmV3IFN0eWxlIEVuZCAqL1xuXG4gICAgZm9yIChsZXQga2V5IGluIHByb3BzKSB7XG4gICAgICAgIGlmIChrZXkgPT0gXCJwb3B1cE1lbnVcIikge1xuICAgICAgICAgICAgcG9wdXAoZWxlbSwgcHJvcHMpXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09IFwidGV4dFwiKSB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PSBcImVkaXRUZXh0XCIpXG4gICAgICAgICAgICAgICAgZWxlbS52YWx1ZSA9IHByb3BzW2tleV1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBjcmVhdGVUZXh0RWxlbWVudChlbGVtLCBwcm9wcylcbiAgICAgICAgfWVsc2UgaWYgKGtleSA9PSBcInRleHRGcm9tSHRtbFwiKSB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PSBcImVkaXRUZXh0XCIpXG4gICAgICAgICAgICAgICAgZWxlbS52YWx1ZSA9IHByb3BzW2tleV1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBjcmVhdGVUZXh0RWxlbWVudDIoZWxlbSwgcHJvcHMpXG4gICAgICAgIH0gXG4gICAgICAgIGVsc2UgaWYgKGtleSA9PSBcInN0eWxlXCIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGlubmVyS2V5IGluIHByb3BzLnN0eWxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlubmVyS2V5ID09IFwiY2xhc3NOYW1lXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5jbGFzc05hbWUgKz0gXCIgXCIgKyBwcm9wcy5zdHlsZVtpbm5lcktleV07XG4gICAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGVsZW0uc3R5bGVbaW5uZXJLZXldID0gcHJvcHMuc3R5bGVbaW5uZXJLZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PSBcImF0dHJpYnV0ZXNcIikge1xuICAgICAgICAgICAgZm9yIChsZXQgaW5uZXJLZXkgaW4gcHJvcHMuYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKGlubmVyS2V5LCBwcm9wcy5hdHRyaWJ1dGVzW2lubmVyS2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09IFwiY2xhc3NOYW1lXCIpIHtcbiAgICAgICAgICAgIGlmICgocHJvcHNba2V5XSB8fCBcIlwiKS50cmltKCkgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBwcm9wc1trZXldLnNwbGl0KFwiIFwiKS5tYXAoY2xhc3NOYW1lID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09IFwiY2xhc3NMaXN0XCIpIHtcbiAgICAgICAgICAgIEpTT04ucGFyc2UocHJvcHNba2V5XSkuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKG9iaik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wc1trZXldICYmIHR5cGVvZiBwcm9wc1trZXldID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdmFyIGV2ZW50VHlwZSA9IGtleS5zdWJzdHJpbmcoMiwga2V5Lmxlbmd0aCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHZhciBlbGVtQ0IgPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgZWxlbS5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnO1xuICAgICAgICAgICAgaWYgKGV2ZW50VHlwZSA9PSBcImNoYW5nZVwiKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRUeXBlID0gXCJpbnB1dFwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0VmFsdWUgPSBlbGVtLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dFZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiZmlsbGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXNlZCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnZmlsbGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGVsZW1bJ29uZm9jdXMnXSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZWxlbS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzZWQnKTtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRUeXBlID09IFwiZm9jdXNcIikge1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtQ0IoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAvL1RPRE86IFJlcGVhdGVkIGNvZGUgdG8gYmUgcmVtb3ZlZCBsYXRlclxuICAgICAgICAvLyAgIGlmIChwcm9wcy5sYWJlbCkge1xuICAgICAgICAvLyAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBpbnB1dFZhbHVlID0gZWxlbS52YWx1ZTtcbiAgICAgICAgLy8gICAgICAgaWYgKGlucHV0VmFsdWUgPT0gXCJcIikge1xuICAgICAgICAvLyAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImZpbGxlZFwiKTtcbiAgICAgICAgLy8gICAgICAgICBlbGVtLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXNlZCcpO1xuICAgICAgICAvLyAgICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnZmlsbGVkJyk7XG4gICAgICAgIC8vICAgICAgIH1cbiAgICAgICAgLy8gICAgIH0pOyAgXG5cbiAgICAgICAgLy8gICAgIGlmICghKHByb3BzLmxhYmVsICYmIGV2ZW50VHlwZSA9PSBcImZvY3VzXCIpICYmIGZpcnN0UmVuZGVyKSB7XG4gICAgICAgIC8vICAgICAgICAgLyplbGVtWydvbicgKyBldmVudFR5cGVdID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAvLyAgICAgICAgICAgICBldmVudFR5cGUgPT0gXCJpbnB1dFwiID8gZWxlbUNCKGUudGFyZ2V0LnZhbHVlKSA6IGVsZW1DQihlKVxuICAgICAgICAvLyAgICAgICAgIH0qL1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgaWYgKCFwcm9wcy5hbmltYXRpb24pIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcImFuaW1haXRvbiBub3QgZm91bmRcIiwgcHJvcHMpXG4gICAgfVxuICAgIGlmIChwcm9wcy5hbmltYXRpb24udHJhbnNpdGlvbikge1xuICAgICAgICBjb25zdCBhZnRlclRyYW5zaXRpb24gPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhbmltYXRpb24gPSBwcm9wcy5hbmltYXRpb247XG4gICAgICAgICAgICBlbGVtLnN0eWxlLnRyYW5zaXRpb24gPSBhbmltYXRpb24udHJhbnNpdGlvbjtcbiAgICAgICAgICAgIGVsZW0uc3R5bGUudHJhbnNmb3JtID0gYW5pbWF0aW9uLnRyYW5zZm9ybTtcbiAgICAgICAgICAgIGlmIChhbmltYXRpb24ub3BhY2l0eSkge1xuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUub3BhY2l0eSA9IGFuaW1hdGlvbi5vcGFjaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChwcm9wcy5zdHlsZS50cmFuc2Zvcm0gfHwgcHJvcHMuc3R5bGUub3BhY2l0eSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChhZnRlclRyYW5zaXRpb24sIDEwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZnRlclRyYW5zaXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qIEV2ZW50cyAqL1xuICAgIGlmIChmaXJzdFJlbmRlcikge1xuICAgICAgICBpZiAodHlwZSA9PSBcImVkaXRUZXh0XCIgJiYgZWxlbS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gXCJpbnB1dFwiKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuYXV0b2ZvY3VzKSB7XG4gICAgICAgICAgICAgICAgZWxlbS5mb2N1cygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc2VwYXJhdG9ySW5wdXRLZXlEb3duSGFuZGxlcik7XG4gICAgICAgIH1cbiAgICBcblxuICAgICAgICBsZXQgZXZlbnRzID0gWydvbkNsaWNrJywgJ29uRW50ZXJQcmVzc2VkRXZlbnQnLCAnb25DaGFuZ2UnLCAnb25Nb3VzZURvd24nLCAnb25Nb3VzZVVwJywgJ29uTW91c2VFbnRlcicsICdvbk1vdXNlT3ZlcicsICdvbk1vdXNlTW92ZScsICdvbk1vdXNlT3V0JywgJ29uTW91c2VMZWF2ZScsICdvbkZvY3VzJ11cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGtleSA9IGV2ZW50c1tpXVxuICAgICAgICAgICAgbGV0IGV2ZW50VHlwZSA9IGtleS5zdWJzdHJpbmcoMiwga2V5Lmxlbmd0aCkudG9Mb3dlckNhc2UoKVxuXG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiB0eXBlb2YgcHJvcHNba2V5XSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IHByb3BzW2tleV1cbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09IFwib25FbnRlclByZXNzZWRFdmVudFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09IDEzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50VHlwZSA9PSBcImNoYW5nZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT0gXCJmb2N1c1wiKXtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiBFdmVudHMgRW5kICovXG5cbiAgICAvKiBDb21wb25lbnQgUGFydCAqL1xuICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnZWxlbWVudFR5cGUnKSAmJiBwcm9wcy5lbGVtZW50VHlwZSA9PSAnY29tcG9uZW50Jykge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLldSQVBQRVIpXG5cbiAgICAgICAgaWYgKGZpcnN0UmVuZGVyKVxuICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2d1aWQnLCBwcm9wcy5ndWlkKVxuICAgIH1cblxuICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnY29tcG9uZW50VHlwZScpICYmIHByb3BzLmNvbXBvbmVudFR5cGUpXG4gICAgICAgIHJlbmRlckNvbXBvbmVudChlbGVtLCBwcm9wcywgZmlyc3RSZW5kZXIpXG59XG5cbmZ1bmN0aW9uIHNldE1vZGFsQXR0cmlidXRlcyhlbGVtLCBwcm9wcywgZmlyc3RSZW5kZXIpIHtcbiAgICBzZXRHcmF2aXR5U3R5bGVzRm9yUm93KGVsZW0sIHByb3BzKTtcblxuICAgIGxldCBiYWNrZHJvcEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh3aW5kb3cuX19CQUNLRFJPUE1PREFMX0NMQVNTICsgJ18nICsgcHJvcHMuaWQpXG5cbiAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ21vZGFsVmlzaWJpbGl0eScpICYmIHByb3BzLm1vZGFsVmlzaWJpbGl0eSkge1xuICAgICAgICBiYWNrZHJvcEVsZW0uY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19TSE9XTk1PREFMX0NMQVNTKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX09QRU5NT0RBTF9DTEFTUyk7XG5cbiAgICAgICAgbGV0IG1vZGFsUHJvcHMgPSBudWxsO1xuICAgICAgICBpZiAod2luZG93Ll9fTU9EQUxfUFJPUFNbcHJvcHMuaWRdKSB7XG4gICAgICAgICAgICBtb2RhbFByb3BzID0gSlNPTi5wYXJzZSh3aW5kb3cuX19NT0RBTF9QUk9QU1twcm9wcy5pZF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BzLm9uU2hvdyAmJiB0eXBlb2YgcHJvcHMub25TaG93ID09XG4gICAgICAgICAgICBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGlmIChmaXJzdFJlbmRlciB8fCAobW9kYWxQcm9wcyAmJiBtb2RhbFByb3BzLm1vZGFsVmlzaWJpbGl0eSAhPSBwcm9wcy5tb2RhbFZpc2liaWxpdHkpKSB7XG4gICAgICAgICAgICAgICAgcHJvcHMub25TaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wcy5tb2RhbFZpc2liaWxpdHkgPSBmYWxzZTtcbiAgICAgICAgYmFja2Ryb3BFbGVtLmNsYXNzTGlzdC5yZW1vdmUod2luZG93Ll9fU0hPV05NT0RBTF9DTEFTUyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSh3aW5kb3cuX19PUEVOTU9EQUxfQ0xBU1MpO1xuICAgIH1cblxuICAgIHdpbmRvdy5fX01PREFMX1BST1BTW3Byb3BzLmlkXSA9IEpTT04uc3RyaW5naWZ5KHByb3BzKTtcbn1cblxubGV0IGluaXRpYWxpemVTaG93ID0gZnVuY3Rpb24gKGVsZW0sIHByb3BzLCB0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT0gJ2xpbmVhckxheW91dCcpIHtcbiAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCd3aWR0aCcpICYmIHByb3BzLndpZHRoID09ICd3cmFwX2NvbnRlbnQnKSB7XG4gICAgICAgICAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWZsZXgnO1xuICAgICAgICAgICAgZWxlbS5zdHlsZS53aWR0aCA9ICdtYXgtY29udGVudCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnd2lkdGgnKSAmJiBwcm9wcy53aWR0aCA9PSAnd3JhcF9jb250ZW50Jykge1xuICAgICAgICAgICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgICAgICBlbGVtLnN0eWxlLndpZHRoID0gJ21heC1jb250ZW50JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKiBPYnNlcnZlciBmb3IgYWZ0ZXJSZW5kZXIgKi9cbmxldCBvYnNlcnZlciA9IChlbGVtKSA9PiB7XG4gICAgbGV0IGlkID0gZWxlbS5pZDtcbiAgICBpZiAoIWlkIHx8IF9fT0JTRVJWRVJTW2lkXSlcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgX19PQlNFUlZFUlNbaWRdID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKGl0ZW0sIG9ic2VydmVyKSB7XG4gICAgICAgIGlmIChpdGVtICYmIGl0ZW1bMF0udGFyZ2V0KSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gaXRlbVswXS50YXJnZXQ7XG4gICAgICAgICAgICBsZXQgaWQgPSB0YXJnZXQuaWQ7XG4gICAgICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmlldyA9IF9fVklFV1NbaWRdO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZpZXcgJiYgdmlldy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgnYWZ0ZXJSZW5kZXInKSAmJiB0eXBlb2Ygdmlldy5wcm9wcy5hZnRlclJlbmRlciA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmlldy5wcm9wcy5hZnRlclJlbmRlcigpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH0pO1xuXG4gICAgKF9fT0JTRVJWRVJTW2lkXSkub2JzZXJ2ZShlbGVtLCB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IHRydWVcbiAgICB9KTtcbn1cblxuLyogRG8gc29tZSBhY3Rpb25zIGFmdGVyIHJlbmRlcmVkICovXG5sZXQgY2IgPSAoZWxlbSwgdmlldykgPT4ge1xuICAgIGlmICh2aWV3LnByb3BzLmZlZWRiYWNrICYmIHR5cGVvZiB2aWV3LnByb3BzLmZlZWRiYWNrID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB2aWV3LnByb3BzLmZlZWRiYWNrKClcbiAgICB9XG59XG5cbi8vIENyZWF0ZXMgdGhlIE1vZGFsIGVsZW1lbnQgaWYgaXQgaGFzIG5vdCBiZWVuIGFscmVhZHkgaW5mbGF0ZWRcbmxldCBpbmZsYXRlTW9kYWwgPSBmdW5jdGlvbiAodmlldywgcGFyZW50RWxlbWVudCwgc3RvcENoaWxkKSB7XG4gICAgbGV0IG5ld0luZmxhdGVkID0gZmFsc2U7XG4gICAgbGV0IHBhcmVudElkID0gcGFyZW50RWxlbWVudC5pZDtcblxuICAgIC8qIE1vZGFsIFdyYXBwZXIgKi9cbiAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZpZXcucHJvcHMuaWQpO1xuICAgIGlmICghZWxlbSB8fCBlbGVtID09IHVuZGVmaW5lZCkge1xuICAgICAgICBuZXdJbmZsYXRlZCA9IHRydWU7XG5cbiAgICAgICAgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnaWQnLCB2aWV3LnByb3BzLmlkKTtcbiAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ3ZpcnR1YWxfcGFyZW50JywgcGFyZW50SWQpO1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09OVEVOVE1PREFMX0NMQVNTKTtcbiAgICB9XG4gICAgLyogTW9kYWwgV3JhcHBlciBFbmQgKi9cblxuICAgIC8qIEJhY2tEcm9wICovXG4gICAgbGV0IGJhY2tkcm9wRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHdpbmRvdy5fX0JBQ0tEUk9QTU9EQUxfQ0xBU1MgKyAnXycgKyB2aWV3LnByb3BzLmlkKTtcbiAgICBpZiAoIWJhY2tkcm9wRWxlbSB8fCBiYWNrZHJvcEVsZW0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGJhY2tkcm9wRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBiYWNrZHJvcEVsZW0uc2V0QXR0cmlidXRlKCdpZCcsIHdpbmRvdy5fX0JBQ0tEUk9QTU9EQUxfQ0xBU1MgKyAnXycgKyB2aWV3LnByb3BzLmlkKTtcbiAgICAgICAgYmFja2Ryb3BFbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQkFDS0RST1BNT0RBTF9DTEFTUyk7XG5cbiAgICAgICAgaWYgKHZpZXcucHJvcHMuaGFzT3duUHJvcGVydHkoJ2FuaW1hdGlvblR5cGUnKSAmJiB2aWV3LnByb3BzLmFuaW1hdGlvblR5cGUgIT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBsZXQgYW5pbWF0aW9uVHlwZSA9IHZpZXcucHJvcHMuYW5pbWF0aW9uVHlwZTtcblxuICAgICAgICAgICAgaWYgKGFuaW1hdGlvblR5cGUgPT0gJ2ZhZGUnKSB7XG4gICAgICAgICAgICAgICAgYmFja2Ryb3BFbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fRkFERU1PREFMX0NMQVNTKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYW5pbWF0aW9uVHlwZSA9PSAnc2xpZGUnKSB7XG4gICAgICAgICAgICAgICAgYmFja2Ryb3BFbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fU0xJREVNT0RBTF9DTEFTUyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmlldy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgnY2xvc2VPbkJhY2tkcm9wJykgJiYgIXZpZXcucHJvcHMuY2xvc2VPbkJhY2tkcm9wKSB7XG4gICAgICAgICAgICBiYWNrZHJvcEVsZW0uY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19ESVNBQkxFREJBQ0tEUk9QX0NMQVNTKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJhY2tkcm9wRWxlbS5jbGFzc0xpc3QucmVtb3ZlKHdpbmRvdy5fX0RJU0FCTEVEQkFDS0RST1BfQ0xBU1MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZpZXcucHJvcHMuaGFzT3duUHJvcGVydHkoJ3RyYW5zcGFyZW50JykgJiYgdmlldy5wcm9wcy50cmFuc3BhcmVudCkge1xuICAgICAgICAgICAgYmFja2Ryb3BFbGVtLnN0eWxlLmJhY2tncm91bmQgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYmFja2Ryb3BFbGVtLnN0eWxlLmJhY2tncm91bmQgPSAncmdiYSgwLCAwLCAwLCAwLjUpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGJhY2tkcm9wRWxlbS5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiYWNrZHJvcEVsZW0pO1xuXG4gICAgICAgIGlmIChuZXdJbmZsYXRlZCkge1xuICAgICAgICAgICAgaWYgKHZpZXcucHJvcHMuaGFzT3duUHJvcGVydHkoJ2FmdGVyUmVuZGVyJykgJiYgdHlwZW9mIHZpZXcucHJvcHMuYWZ0ZXJSZW5kZXIgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIHJ1biBvYnNlcnZlciBmb3IgdGhlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICBvYnNlcnZlcihlbGVtKTtcbiAgICAgICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnaGFzX3JlbmRlcicsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qIEJhY2tEcm9wIEVuZCAqL1xuXG4gICAgc2V0TW9kYWxBdHRyaWJ1dGVzKGVsZW0sIHZpZXcucHJvcHMsIG5ld0luZmxhdGVkKTtcblxuICAgIGlmICghc3RvcENoaWxkKSB7XG4gICAgICAgIGlmICh2aWV3Lmhhc093blByb3BlcnR5KCdjaGlsZHJlbicpICYmIHZpZXcuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2aWV3LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZpZXcuY2hpbGRyZW5baV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmlldy5jaGlsZHJlbltpXS5wcm9wcy5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mbGF0ZVZpZXcodmlldy5jaGlsZHJlbltpXSwgZWxlbSwgdmlldy5jaGlsZHJlbltpIC0gMV0pO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZsYXRlVmlldyh2aWV3LmNoaWxkcmVuW2ldLCBlbGVtLCB2aWV3KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZWxlbS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIGxldCBjaGlsZE5vZGVzID0gZWxlbS5jaGlsZE5vZGVzXG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2ldXG5cbiAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0bydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3SW5mbGF0ZWQpIHtcbiAgICAgICAgY2IoZWxlbSwgdmlldyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhY2tkcm9wRWxlbTtcbn1cblxud2luZG93LmluZmxhdGVUaW1pbmdzID0ge1xuICAgIGxhc3RVcGRhdGVkQXQ6IG51bGxcbn1cblxuLy8gQ3JlYXRlcyB0aGUgRE9NIGVsZW1lbnQgaWYgaXQgaGFzIG5vdCBiZWVuIGFscmVhZHkgaW5mbGF0ZWRcbi8vIFZpZXc6IE9iamVjdCBvZiBSZWFjdERPTSwge3R5cGUsIHByb3BzLCBjaGlsZHJlbn1cbi8vIHBhcmVudEVsZW1lbnQ6IERPTSBPYmplY3RcbmxldCBpbmZsYXRlVmlldyA9IGZ1bmN0aW9uICh2aWV3LCBwYXJlbnRFbGVtZW50LCBzaWJsaW5nVmlldywgc3RvcENoaWxkLCBzdG9wT2JzZXJ2ZXIsIHJlbmRlclN0eWxlKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICAgIGlmICh2aWV3LnR5cGUgPT0gJ21vZGFsJykge1xuICAgICAgICByZXR1cm4gaW5mbGF0ZU1vZGFsKHZpZXcsIHBhcmVudEVsZW1lbnQsIHN0b3BDaGlsZCk7XG4gICAgfVxuXG4gICAgbGV0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh2aWV3LnByb3BzLmlkKTtcbiAgICBsZXQgc3ViRWxlbSA9IG51bGw7XG4gICAgbGV0IG5ld0luZmxhdGVkID0gZmFsc2U7XG5cbiAgICBpZiAodmlldy5wcm9wcy54ID09IFwiTmFOXCIgfHwgdmlldy5wcm9wcy55ID09IFwiTmFOXCIpIHtcbiAgICAgICAgdmlldyA9IGhhbmRsZVdyYXBDb250ZW50KHZpZXcsIHBhcmVudEVsZW1lbnQpXG4gICAgfVxuXG4gICAgaWYgKCFlbGVtKSB7XG4gICAgICAgIGlmICh2aWV3LnR5cGUgPT0gXCJ3ZWJWaWV3XCIpIHtcbiAgICAgICAgICAgIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKVxuXG4gICAgICAgICAgICBlbGVtLnN0eWxlLmJvcmRlciA9ICdub25lJ1xuICAgICAgICB9IGVsc2UgaWYgKHZpZXcudHlwZSA9PSBcImltYWdlVmlld1wiKSB7XG4gICAgICAgICAgICBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgIGVsZW1bXCJzdHlsZVwiXVtcIm1hcmdpblwiXSA9IFwiMFwiO1xuICAgICAgICAgICAgZWxlbVtcInN0eWxlXCJdW1wicGFkZGluZ1wiXSA9IFwiMFwiO1xuICAgICAgICAgICAgZWxlbVtcInN0eWxlXCJdW1wiZGlzcGxheVwiXSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGVsZW1bXCJzdHlsZVwiXVtcIm1heC13aWR0aFwiXSA9IFwiMTAwJVwiO1xuICAgICAgICAgICAgZWxlbVtcInN0eWxlXCJdW1wibWF4LWhlaWdodFwiXSA9IFwiMTAwJVwiO1xuICAgICAgICAgICAgZWxlbVtcInN0eWxlXCJdW1wiYm94LXNpemluZ1wiXSA9IFwiYm9yZGVyLWJveFwiO1xuICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJcIik7XG4gICAgICAgIH0gZWxzZSBpZiAodmlldy50eXBlID09IFwiY2hlY2tCb3hcIikge1xuICAgICAgICAgICAgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG5cbiAgICAgICAgICAgIGlmICh2aWV3LnByb3BzLmhhc093blByb3BlcnR5KCdsYWJlbCcpICYmIHZpZXcucHJvcHMubGFiZWwgIT0gJycgJiYgcGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHN1YkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIHN1YkVsZW0uc2V0QXR0cmlidXRlKCdmb3InLCB2aWV3LnByb3BzLmlkKTtcbiAgICAgICAgICAgICAgICBzdWJFbGVtLmlubmVySFRNTCA9IHZpZXcucHJvcHMubGFiZWw7XG4gICAgICAgICAgICAgICAgc3ViRWxlbS5zdHlsZS5wYWRkaW5nID0gXCIwIDAgMCA1cHhcIjtcbiAgICAgICAgICAgICAgICBzdWJFbGVtLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWxhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICBkZWxldGUgdmlldy5wcm9wcy5sYWJlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh2aWV3LnR5cGUgPT0gXCJlZGl0VGV4dFwiKSB7XG4gICAgICAgICAgICBpZiAodmlldy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgnaW5wdXRUeXBlJykgJiYgdmlldy5wcm9wcy5pbnB1dFR5cGUgPT0gJ211bHRpVGV4dCcpIHtcbiAgICAgICAgICAgICAgICBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuYm9yZGVyID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUucmVzaXplID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUub3V0bGluZSA9ICdub25lJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxlbS52YWx1ZSA9IHZpZXcucHJvcHMudGV4dCB8fCBcIlwiO1xuXG4gICAgICAgICAgICBpZiAodmlldy5wcm9wcy5sZXR0ZXJTcGFjaW5nKSB7XG4gICAgICAgICAgICAgICAgZWxlbVtcInN0eWxlXCJdW1wibGV0dGVyLXNwYWNpbmdcIl0gPSB2aWV3LnByb3BzLmxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2aWV3LnByb3BzLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0VmlldyA9IGVsZW07XG4gICAgICAgICAgICAgICAgaW5wdXRWaWV3LnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXModmlldy50eXBlLCBpbnB1dFZpZXcsIHZpZXcucHJvcHMsIHRydWUpO1xuICAgICAgICAgICAgICAgIGlucHV0Vmlldy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB2aWV3LnByb3BzLmlkICsgXCJfaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgdmFyIGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgICAgICAgICAgbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgdmlldy5wcm9wcy5pZCArIFwiX2lucHV0XCIpO1xuICAgICAgICAgICAgICAgIGwuaW5uZXJIVE1MID0gdmlldy5wcm9wcy5sYWJlbDtcbiAgICAgICAgICAgICAgICBsLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWxhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICBsW1wic3R5bGVcIl1bXCJwb3NpdGlvblwiXSA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgICAgICBsW1wic3R5bGVcIl1bXCJjb2xvclwiXSA9IFwiIzk5OVwiO1xuICAgICAgICAgICAgICAgIGxbXCJzdHlsZVwiXVtcImJhY2tncm91bmQtY29sb3JcIl0gPSBcIiNmZmZcIjtcbiAgICAgICAgICAgICAgICBsW1wic3R5bGVcIl1bXCJwYWRkaW5nXCJdID0gXCIwIDVweFwiO1xuICAgICAgICAgICAgICAgIGxbXCJzdHlsZVwiXVtcInotaW5kZXhcIl0gPSAxMDtcbiAgICAgICAgICAgICAgICBsW1wic3R5bGVcIl1bXCJ0cmFuc2l0aW9uXCJdID0gXCJ0cmFuc2Zvcm0gMTUwbXMgZWFzZS1vdXQsIGZvbnQtc2l6ZSAxNTBtcyBlYXNlLW91dFwiO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZpZXcucHJvcHMubGV0dGVyU3BhY2luZykge1xuICAgICAgICAgICAgICAgICAgICBsW1wic3R5bGVcIl1bXCJsZXR0ZXItc3BhY2luZ1wiXSA9IHZpZXcucHJvcHMubGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWdyb3VwJyk7XG4gICAgICAgICAgICAgICAgZWxlbS5hcHBlbmRDaGlsZChsKTtcbiAgICAgICAgICAgICAgICBlbGVtLmFwcGVuZENoaWxkKGlucHV0Vmlldyk7XG5cbiAgICAgICAgICAgICAgICB2aWV3LnByb3BzLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXModmlldy50eXBlLCBlbGVtLCB2aWV3LnByb3BzLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdmlldy5wcm9wcy5sYWJlbDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmlldy5wcm9wcy5oaW50KSB7XG4gICAgICAgICAgICAgICAgZWxlbS5wbGFjZWhvbGRlciA9IHZpZXcucHJvcHMuaGludCB8fCBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHZpZXcuZWxOYW1lIHx8IFwiZGl2XCIpO1xuXG4gICAgICAgIC8qIFRvb2x0aXAgKi9cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdmlldy50eXBlICE9ICdsaW5lYXJMYXlvdXQnICYmXG4gICAgICAgICAgICB2aWV3LnR5cGUgIT0gJ3JlbGF0aXZlTGF5b3V0JyAmJlxuICAgICAgICAgICAgdmlldy50eXBlICE9ICdob3Jpem9udGFsU2Nyb2xsVmlldycgJiZcbiAgICAgICAgICAgIHZpZXcudHlwZSAhPSAnc2Nyb2xsVmlldycgJiZcbiAgICAgICAgICAgIHZpZXcudHlwZSAhPSAnbGlzdFZpZXcnXG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKHZpZXcucHJvcHMuaGFzT3duUHJvcGVydHkoJ3Rvb2x0aXBUZXh0JykpIHtcbiAgICAgICAgICAgICAgICBsZXQgdG9vbHRpcFRleHQgPSB2aWV3LnByb3BzLnRvb2x0aXBUZXh0LnRyaW0oKVxuXG4gICAgICAgICAgICAgICAgaWYgKHRvb2x0aXBUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b29sdGlwR3Jhdml0eSA9IHZpZXcucHJvcHMudG9vbHRpcEdyYXZpdHkgPyB2aWV3LnByb3BzLnRvb2x0aXBHcmF2aXR5IDogJ3RvcCdcblxuICAgICAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2hhc1Rvb2x0aXAnKVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b29sdGlwRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBFbGVtLmlubmVySFRNTCA9ICc8cHJlPicgKyB0b29sdGlwVGV4dCArICc8L3ByZT4nXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBFbGVtLmNsYXNzTGlzdC5hZGQoJ3Rvb2x0aXBUZXh0JylcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEVsZW0uY2xhc3NMaXN0LmFkZCgndG9vbHRpcEdyYXZpdHlfJyArIHRvb2x0aXBHcmF2aXR5KVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBzaXplID0gMTVcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZpZXcucHJvcHMuaGFzT3duUHJvcGVydHkoJ3Rvb2x0aXBUZXh0U2l6ZScpICYmICFpc05hTih2aWV3LnByb3BzLnRvb2x0aXBUZXh0U2l6ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemUgPSB2aWV3LnByb3BzLnRvb2x0aXBUZXh0U2l6ZVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEVsZW0uc3R5bGUuZm9udFNpemUgPSBzaXplICsgJ3B4J1xuXG4gICAgICAgICAgICAgICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQodG9vbHRpcEVsZW0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qIFRvb2x0aXAgRW5kICovXG5cbiAgICAgICAgbmV3SW5mbGF0ZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgc2libGluZ0VsZW1lbnQgPSBzaWJsaW5nVmlldyA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNpYmxpbmdWaWV3LnByb3BzLmlkKSA6IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChzaWJsaW5nRWxlbWVudCAmJiBzaWJsaW5nRWxlbWVudCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50RWxlbWVudCA9PSBzaWJsaW5nRWxlbWVudCkgeyAvLyBQcmVwZW5kXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJFbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50LnByZXBlbmQoc3ViRWxlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5wcmVwZW5kKGVsZW0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIEluc2VydCBpbiBzcGVjaWZpZWQgcG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRTaWJsaW5nRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50Lm5leHRTaWJsaW5nO1xuXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGVsZW0sIG5leHRTaWJsaW5nRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJFbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShzdWJFbGVtLCBuZXh0U2libGluZ0VsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVsZW0pO1xuICAgICAgICAgICAgICAgIGlmIChzdWJFbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoc3ViRWxlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0QXR0cmlidXRlcyh2aWV3LnR5cGUsIGVsZW0sIHZpZXcucHJvcHMsIHRydWUpO1xuXG4gICAgICAgIC8qaWYodmlldy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgnYWZ0ZXJSZW5kZXInKSAmJiB0eXBlb2Ygdmlldy5wcm9wcy5hZnRlclJlbmRlciA9PSBcImZ1bmN0aW9uXCIpe1xuICAgICAgICAgIGlmKCFzdG9wT2JzZXJ2ZXIpe1xuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIHJ1biBvYnNlcnZlciBmb3IgdGhlIGVsZW1lbnRcbiAgICAgICAgICAgIG9ic2VydmVyKGVsZW0pO1xuICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2hhc19yZW5kZXInLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0qL1xuICAgIH0gZWxzZSBpZiAocmVuZGVyU3R5bGUpIHtcbiAgICAgICAgc2V0QXR0cmlidXRlcyh2aWV3LnR5cGUsIGVsZW0sIHZpZXcucHJvcHMsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAodmlldy50eXBlID09ICdob3Jpem9udGFsU2Nyb2xsVmlldycpIHtcbiAgICAgICAgaWYgKHZpZXcucHJvcHMuaGFzT3duUHJvcGVydHkoJ3Njcm9sbExlZnQnKSAmJiAhaXNOYU4odmlldy5wcm9wcy5zY3JvbGxMZWZ0KSlcbiAgICAgICAgICAgIGVsZW0uc2Nyb2xsTGVmdCA9IHZpZXcucHJvcHMuc2Nyb2xsTGVmdDtcbiAgICB9XG5cbiAgICBpZiAodmlldy50eXBlID09ICdsaXN0VmlldycpIHtcbiAgICAgICAgaWYgKHZpZXcucHJvcHMuaGFzT3duUHJvcGVydHkoJ3Njcm9sbFRvcCcpICYmICFpc05hTih2aWV3LnByb3BzLnNjcm9sbFRvcCkpXG4gICAgICAgICAgICBlbGVtLnNjcm9sbFRvcCA9IHZpZXcucHJvcHMuc2Nyb2xsVG9wO1xuICAgIH1cblxuICAgIGlmICh2aWV3LnR5cGUgPT0gJ3Njcm9sbFZpZXcnKSB7XG4gICAgICAgIGlmICh2aWV3LnByb3BzLmhhc093blByb3BlcnR5KCdzY3JvbGxMZWZ0JykgJiYgIWlzTmFOKHZpZXcucHJvcHMuc2Nyb2xsTGVmdCkpXG4gICAgICAgICAgICBlbGVtLnNjcm9sbExlZnQgPSB2aWV3LnByb3BzLnNjcm9sbExlZnQ7XG5cbiAgICAgICAgaWYgKHZpZXcucHJvcHMuaGFzT3duUHJvcGVydHkoJ3Njcm9sbFRvcCcpICYmICFpc05hTih2aWV3LnByb3BzLnNjcm9sbFRvcCkpXG4gICAgICAgICAgICBlbGVtLnNjcm9sbFRvcCA9IHZpZXcucHJvcHMuc2Nyb2xsVG9wO1xuICAgIH1cblxuICAgIGlmICh2aWV3LnR5cGUgPT0gJ2NoZWNrQm94Jykge1xuICAgICAgICBpZiAodmlldy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgnY2hlY2tlZCcpICYmIHZpZXcucHJvcHMuY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBlbGVtLmNoZWNrZWQgPSB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtLmNoZWNrZWQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFzdG9wQ2hpbGQpXG4gICAgICAgIGNvbXB1dGVDaGlsZERpbWVucyh2aWV3KTtcblxuICAgIHNldENvbXB1dGVkU3R5bGVzKGVsZW0sIHZpZXcucHJvcHMpO1xuICAgIHNldEFuaW1hdGlvblN0eWxlcyhlbGVtLCB2aWV3LnByb3BzKTtcblxuICAgIGlmICghc3RvcENoaWxkKSB7XG4gICAgICAgIGlmICh2aWV3Lmhhc093blByb3BlcnR5KCdjaGlsZHJlbicpICYmIHZpZXcuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2aWV3LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZpZXcuY2hpbGRyZW5baV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgIT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmxhdGVWaWV3KHZpZXcuY2hpbGRyZW5baV0sIGVsZW0sIHZpZXcuY2hpbGRyZW5baSAtIDFdLCBzdG9wQ2hpbGQsIHN0b3BPYnNlcnZlciwgcmVuZGVyU3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZsYXRlVmlldyh2aWV3LmNoaWxkcmVuW2ldLCBlbGVtLCB2aWV3LCBzdG9wQ2hpbGQsIHN0b3BPYnNlcnZlciwgcmVuZGVyU3R5bGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdJbmZsYXRlZCkge1xuICAgICAgICBpZiAodmlldy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgnYWZ0ZXJSZW5kZXInKSAmJiB0eXBlb2Ygdmlldy5wcm9wcy5hZnRlclJlbmRlciA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGlmICghc3RvcE9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIHJ1biBvYnNlcnZlciBmb3IgdGhlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICBvYnNlcnZlcihlbGVtKTtcbiAgICAgICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnaGFzX3JlbmRlcicsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2IoZWxlbSwgdmlldyk7XG4gICAgfVxuXG4gICAgY29uc3QgZW5kID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgICB3aW5kb3cuaW5mbGF0ZVRpbWluZ3Nbdmlldy5wcm9wcy5pZF0gPSBlbmQgLSBzdGFydFxuICAgIHdpbmRvdy5pbmZsYXRlVGltaW5ncy5sYXN0VXBkYXRlZEF0ID0gZW5kXG5cbiAgICByZXR1cm4gZWxlbTtcbn07XG5cbmxldCBoYW5kbGVXcmFwQ29udGVudCA9ICh2aWV3LCBwYXJlbnRFbGVtZW50KSA9PiB7XG4gICAgbGV0IG5ld0RpbWVuID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudEVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBuZXdEaW1lbiArPSBwYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbaV0ub2Zmc2V0V2lkdGg7XG4gICAgfVxuICAgIHZpZXcucHJvcHMueCA9IG5ld0RpbWVuO1xuICAgIHJldHVybiB2aWV3O1xufVxuXG5sZXQgcnVuSW5VSSA9IGZ1bmN0aW9uIChjbWQpIHtcbiAgICBpZiAoIShjbWQgaW5zdGFuY2VvZiBBcnJheSkpXG4gICAgICAgIGNtZCA9IFtjbWRdO1xuXG4gICAgY21kLmZvckVhY2goZnVuY3Rpb24gKGVhY2gpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlYWNoLmlkKTtcblxuICAgICAgICBpZiAoIWVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKFwicnVuSW5VSSAoSWQgTlVMTCkgQ01EOlwiLCBlYWNoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2aWV3ID0gd2luZG93Ll9fVklFV1NbZWxlbS5pZF07XG4gICAgICAgIHZpZXcucHJvcHMgPSBoZWxwZXIubWVyZ2Uodmlldy5wcm9wcywgZWFjaCk7XG5cbiAgICAgICAgc2V0QXR0cmlidXRlcyh2aWV3LnR5cGUsIGVsZW0sIHZpZXcucHJvcHMsIGZhbHNlKTtcbiAgICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGluZmxhdGVWaWV3LFxuICAgIHJ1bkluVUksXG4gICAgY29tcHV0ZUNoaWxkRGltZW5zXG59O1xuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG52YXIgUmVuZGVyZXIgPSByZXF1aXJlKFwiLi9SZW5kZXJcIik7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVGFiV3JhcHBlciAoKSAge1xuICB2YXIgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgZWxlbS5jbGFzc05hbWUgPSBcInRhYlwiO1xuXG4gIHJldHVybiBlbGVtO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRhYlRpdGxlV3JhcHBlciAoKSB7XG4gIHZhciBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxlbS5jbGFzc05hbWUgPSBcInRhYi10aXRsZVdyYXBwZXJcIjtcblxuICByZXR1cm4gZWxlbTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVUYWJDb250ZW50V3JhcHBlciAoKSAge1xuICB2YXIgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgZWxlbS5jbGFzc05hbWUgPSBcInRhYi1jb250ZW50V3JhcHBlclwiO1xuXG4gIHJldHVybiBlbGVtO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRhYlRpdGxlRWwgKHRpdGxlKSB7XG4gIHZhciBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBlbGVtLmlubmVySFRNTCA9IHRpdGxlO1xuICBlbGVtLmNsYXNzTmFtZSA9IFwidGFiLXRpdGxlXCI7XG5cbiAgcmV0dXJuIGVsZW07XG59O1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVRhYkNvbnRlbnRFbCAodmlldykgIHtcbiAgdmFyIGVsZW0gPSBSZW5kZXJlci5pbmZsYXRlVmlldyh2aWV3LnZpZXcpO1xuICBlbGVtLmNsYXNzTmFtZSArPSBcIiB0YWItY29udGVudFwiO1xuXG4gIHJldHVybiBlbGVtO1xufVxuXG52YXIgY3JlYXRlVGFicyA9IGZ1bmN0aW9uKEFuZHJvaWQsIGlkLCB0YWJKc3gsIGpzeCwgY2IpICB7XG4gIHZhciB2aWV3ID0gZ2VuZXJhdGVUYWJXcmFwcGVyKCk7XG4gIHZhciB0YWJUaXRsZVdyYXBwZXIgPSBnZW5lcmF0ZVRhYlRpdGxlV3JhcHBlcigpO1xuICB2YXIgdGFiQ29udGVudFdyYXBwZXIgPSBnZW5lcmF0ZVRhYkNvbnRlbnRXcmFwcGVyKCk7XG4gIHZhciB0YWJJdGVtO1xuXG4gIHZpZXcuYXBwZW5kQ2hpbGQodGFiVGl0bGVXcmFwcGVyKTtcbiAgdmlldy5hcHBlbmRDaGlsZCh0YWJDb250ZW50V3JhcHBlcik7XG5cbiAganN4LmZvckVhY2goKGVhY2gsIGluZGV4KSA9PiB7XG4gICAgdGFiSXRlbSA9IGdlbmVyYXRlVGFiVGl0bGVFbChlYWNoLnZhbHVlKTtcblxuICAgIGlmIChpbmRleCA9PSAwKVxuICAgIHRhYkl0ZW0uY2xhc3NOYW1lICs9IFwiIHRhYi10aXRsZS1hY3RpdmVcIjtcblxuICAgIHRhYlRpdGxlV3JhcHBlci5hcHBlbmRDaGlsZCh0YWJJdGVtKTtcbiAgfSk7XG5cbiAgdGFiSnN4LmZvckVhY2goKGVhY2gsIGluZGV4KSA9PiB7XG4gICAgdGFiSXRlbSA9IGdlbmVyYXRlVGFiQ29udGVudEVsKGVhY2gpO1xuXG4gICAgaWYgKGluZGV4ID09IDApXG4gICAgdGFiSXRlbS5jbGFzc05hbWUgKz0gXCIgdGFiLWNvbnRlbnQtYWN0aXZlXCI7XG5cbiAgICB0YWJDb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZCh0YWJJdGVtKTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmFwcGVuZENoaWxkKHZpZXcpO1xuXG4gIHdpbmRvdy5jYWxsVUlDYWxsYmFjayhjYiAsIFwiMFwiKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVUYWJzOiBjcmVhdGVUYWJzLFxufVxuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5jb25zdCBCYXNlVmlldyA9IHJlcXVpcmUoJy4vYmFzZVZpZXcnKTtcbmNvbnN0IFZJRVcgPSBuZXcgQmFzZVZpZXcobnVsbCwgbnVsbCwge30pO1xuXG4vLyBPYmplY3Qgb2YgdHlwZXMgb2YgYW5pbWF0aW9ucyBhdmFpbGFibGUgb24gc2NyZWVuIGNoYW5nZVxuY29uc3QgQW5pbWF0aW9uVHlwZXMgPSB7XG4gIFNMSURFOiB7XG4gICAgbmFtZTogXCJzbGlkZVwiLFxuICAgIGhhbmRsZXI6IHNsaWRlSGFuZGxlclxuICB9LFxuICBTTElERV9WRVJUSUNBTDoge1xuICAgIG5hbWU6IFwic2xpZGVfZG93blwiLFxuICAgIGhhbmRsZXI6IHNsaWRlRG93bkhhbmRsZXJcbiAgfSxcbiAgU0lNUExFOiB7XG4gICAgbmFtZTogXCJzaW1wbGVcIixcbiAgICBoYW5kbGVyOiBzaW1wbGVIYW5kbGVyXG4gIH1cbn1cblxuY29uc3QgREVGQVVMVF9BTklNQVRJT04gPSBBbmltYXRpb25UeXBlcy5TTElERTtcblxuZnVuY3Rpb24gc2ltcGxlSGFuZGxlcihmcm9tSWQsIHRvSWQsIGRpcmVjdGlvbikge1xuICBsZXQgY21kID0gVklFVy5jbWQoe1xuICAgIGlkOiB0b0lkLFxuICAgIHRyYW5zbGF0aW9uWjogKyt3aW5kb3cuWkluZGV4XG4gIH0pO1xuICByZXR1cm4gY21kO1xufVxuXG5mdW5jdGlvbiBzbGlkZURvd25IYW5kbGVyKGZyb21JZCwgdG9JZCwgZGlyZWN0aW9uKSB7XG4gIGxldCBjb250YWluZXIgPSBWSUVXLmNtZENvbnRhaW5lcigpO1xuICBsZXQgY21kO1xuXG4gIGlmIChkaXJlY3Rpb24gPT0gMSkge1xuICAgIGNtZCA9IFZJRVcuY21kKHtcbiAgICAgIGlkOiB0b0lkLFxuICAgICAgdHJhbnNsYXRpb25ZOiB3aW5kb3cuX19IRUlHSFQsXG4gICAgICBhX2R1cmF0aW9uOiAnMzAwJyxcbiAgICAgIGFfdHJhbnNsYXRpb25ZOiAnMCcsXG4gICAgICB0cmFuc2xhdGlvblo6ICsrd2luZG93LlpJbmRleCxcbiAgICB9KTtcbiAgICBjb250YWluZXIgPSBjb250YWluZXIuYWRkQ21kKGNtZCk7XG5cbiAgICBjbWQgPSBWSUVXLmNtZCh7XG4gICAgICBpZDogZnJvbUlkLFxuICAgICAgYV90cmFuc2xhdGlvblk6IC0wLjIgKiB3aW5kb3cuX19IRUlHSFQsXG4gICAgICBhX2R1cmF0aW9uOiAnMzAwJ1xuICAgIH0pO1xuICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5hZGRDbWQoY21kKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICB3aW5kb3cuWkluZGV4Kys7XG4gIGNtZCA9IFZJRVcuY21kKHtcbiAgICBpZDogZnJvbUlkLFxuICAgIHRyYW5zbGF0aW9uWTogMCxcbiAgICBhX3RyYW5zbGF0aW9uWTogd2luZG93Ll9fSEVJR0hULFxuICAgIGFfZHVyYXRpb246ICczMDAnLFxuICAgIHRyYW5zbGF0aW9uWjogKyt3aW5kb3cuWkluZGV4XG4gIH0pO1xuICBjb250YWluZXIgPSBjb250YWluZXIuYWRkQ21kKGNtZCk7XG5cbiAgY21kID0gVklFVy5jbWQoe1xuICAgIGlkOiB0b0lkLFxuICAgIHRyYW5zbGF0aW9uWjogd2luZG93LlpJbmRleC0xLFxuICAgIGFfdHJhbnNsYXRpb25ZOiAnMCcsXG4gICAgdHJhbnNsYXRpb25ZOiAtMC4yICogd2luZG93Ll9fSEVJR0hULFxuICAgIGFfZHVyYXRpb246ICczMDAnLFxuICB9KTtcbiAgY29udGFpbmVyID0gY29udGFpbmVyLmFkZENtZChjbWQpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHNsaWRlSGFuZGxlcihmcm9tSWQsIHRvSWQsIGRpcmVjdGlvbikge1xuICBsZXQgY29udGFpbmVyID0gVklFVy5jbWRDb250YWluZXIoKTtcbiAgbGV0IGNtZDtcbiAgaWYgKGRpcmVjdGlvbiA9PSAxKSB7XG4gICAgY21kID0gVklFVy5jbWQoe1xuICAgICAgaWQ6IHRvSWQsXG4gICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICB0cmFuc2xhdGlvblg6IHdpbmRvdy5fX1dJRFRILFxuICAgICAgYV9kdXJhdGlvbjogJzMwMCcsXG4gICAgICBhX3RyYW5zbGF0aW9uWDogJzAnLFxuICAgICAgdHJhbnNsYXRpb25aOiArK3dpbmRvdy5aSW5kZXgsXG4gICAgfSk7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLmFkZENtZChjbWQpO1xuICAgIGNtZCA9IFZJRVcuY21kKHtcbiAgICAgIGlkOiBmcm9tSWQsXG4gICAgICB0cmFuc2xhdGlvblg6ICcwJyxcbiAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgIGFfZHVyYXRpb246ICczMDAnLFxuICAgICAgYV90cmFuc2xhdGlvblg6ICgtLjIgKiB3aW5kb3cuX19XSURUSCkgKyAnJyxcbiAgICB9KTtcbiAgICBjb250YWluZXIgPSBjb250YWluZXIuYWRkQ21kKGNtZCk7XG4gIH1cblxuICBpZiAoZGlyZWN0aW9uID09IC0xKSB7XG4gICAgd2luZG93LlpJbmRleCsrO1xuICAgIGNtZCA9IFZJRVcuY21kKHtcbiAgICAgIGlkOiBmcm9tSWQsXG4gICAgICB0cmFuc2xhdGlvblg6ICcwJyxcbiAgICAgIGFfZHVyYXRpb246ICczMDAnLFxuICAgICAgYV90cmFuc2xhdGlvblg6IHdpbmRvdy5fX1dJRFRILFxuICAgICAgdHJhbnNsYXRpb25aOiArK3dpbmRvdy5aSW5kZXgsXG4gICAgfSk7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLmFkZENtZChjbWQpO1xuXG4gICAgY21kID0gVklFVy5jbWQoe1xuICAgICAgaWQ6IHRvSWQsXG4gICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICB0cmFuc2xhdGlvblg6ICgtLjIgKiB3aW5kb3cuX19XSURUSCkgKyAnJyxcbiAgICAgIGFfZHVyYXRpb246ICczMDAnLFxuICAgICAgYV90cmFuc2xhdGlvblg6ICcwJyxcbiAgICAgIHRyYW5zbGF0aW9uWjogd2luZG93LlpJbmRleCAtIDEsXG4gICAgfSk7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLmFkZENtZChjbWQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuLypcbiAgR2VuZXJpYyBIYW5kbGVyIGZvciBBbmltYXRpb25cbiAgQXJndW1lbnRzOlxuICAgIGZyb21WaWV3SWQ6IE51bWJlciAtIElkIG9mIHRoZSB2aWV3IGN1cnJlbnRseSB2aXNpYmxlIG9uIHRoZSBzY3JlZW5cbiAgICB0b1ZpZXdJRDogTnVtYmVyIC0gSWQgb2YgdGhlIHZpZXcgd2hpY2ggaGFzIHRvIGJlIGJyb3VnaHQgb24gdGhlIHNjcmVlblxuICAgIElEOiBOdW1iZXIgLSBJZCBvZiB0aGUgdmlldyB0byBiZSBhbmltYXRlZFxuICAgIGFuaW1hdG9yOiBPYmogLSB7bmFtZTpzdHJpbmcsIGhhbmRsZXI6ZnVuY3Rpb259XG4gICAgZGlyZWN0aW9uOiBOdW1iZXIgLSBSZXByZXNlbnRzIG9mIHRoZSBkaXJlY3Rpb24gb2YgdGhlIHNjcmVlblxuICAgICAgLTEgOiBHbyBiYWNrIHRvIHRoZSBhbHJlYWR5IHJlbmRlcmVkIHNjcmVlbiAocmlnaHQgdG8gbGVmdClcbiAgICAgICAxIDogR28gdG8gdGhlIG5ldyBzY3JlZW4gKGxlZnQgdG8gcmlnaHQpXG4qL1xuZnVuY3Rpb24gZ2V0QW5pbWF0aW9uKGZyb21WaWV3SUQsIHRvVmlld0lkLCBkaXJlY3Rpb24sIGFuaW1hdG9yKSB7XG4gIGlmICghYW5pbWF0b3IpXG4gICAgYW5pbWF0b3IgPSBERUZBVUxUX0FOSU1BVElPTjtcblxuICBpZiAodHlwZW9mIGFuaW1hdG9yID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBhbmltYXRvci5oYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpXG4gICAgcmV0dXJuIGFuaW1hdG9yLmhhbmRsZXIoZnJvbVZpZXdJRCwgdG9WaWV3SWQsIGRpcmVjdGlvbik7XG4gIGVsc2VcbiAgICBjb25zb2xlLmxvZyhuZXcgRXJyb3IoXCJBbmltYXRpb24gaGFuZGxlciBpcyBub3QgYSBmdW5jdGlvbiwgdHlwZTogXCIgK1xuICAgICAgYW5pbWF0b3IpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMudHlwZXMgPSBBbmltYXRpb25UeXBlcztcbm1vZHVsZS5leHBvcnRzLmdldEFuaW1hdGlvbiA9IGdldEFuaW1hdGlvbjsiLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbmNvbnN0IG1lcmdlID0gIHJlcXVpcmUoXCIuL2hlbHBlclwiKS5tZXJnZTtcblxuU3RyaW5nLnByb3RvdHlwZS5hZGRDbWQgPSBmdW5jdGlvbihkYXRhKSB7XG4gIHJldHVybiB0aGlzLmNvbmNhdChkYXRhKTtcbn07XG5cbkFycmF5LnByb3RvdHlwZS5hZGRDbWQgPSBmdW5jdGlvbihkYXRhKSB7XG4gIHRoaXMucHVzaChkYXRhKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5sZXQgcGFyc2VQYXJhbXM7XG5pZiAod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpXG4gIHBhcnNlUGFyYW1zID0gcmVxdWlyZSgnLi9oZWxwZXJzL2FuZHJvaWQvcGFyc2VQYXJhbXMnKTtcbmVsc2UgaWYgKHdpbmRvdy5fX09TID09IFwiV0VCXCIpXG4gIHBhcnNlUGFyYW1zID0gcmVxdWlyZSgnLi9oZWxwZXJzL3dlYi9wYXJzZVBhcmFtcycpO1xuZWxzZVxuICBwYXJzZVBhcmFtcyA9IHJlcXVpcmUoJy4vaGVscGVycy9pb3MvcGFyc2VQYXJhbXMnKTtcblxuY2xhc3MgQmFzZVZpZXcge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgY2hpbGRyZW4pIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHMgfHwge307XG4gICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuIHx8IFtdO1xuXG4gICAgd2luZG93Ll9fU0VURk4gPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICBBbmRyb2lkLnJ1bkluVUkoXG4gICAgICAgIHRoaXMuc2V0KGNvbmZpZyksXG4gICAgICAgIG51bGxcbiAgICAgIClcbiAgICB9LmJpbmQodGhpcylcblxuICAgIHRoaXMuaWRTZXQgPSB7fTtcblxuICAgIGlmICh0aGlzLnByb3BzLmlkKSB7XG4gICAgICB0aGlzLmlkU2V0W1wiaWRcIl0gPSB0aGlzLnByb3BzLmlkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLmlkID0gdGhpcy5pZChcImlkXCIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLl9yZWYpIHtcbiAgICAgIHRoaXMucHJvcHMuX3JlZih0aGlzKTtcbiAgICB9XG4gIH1cblxuICByZXNvbHZlQ2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICByZXR1cm4gY2hpbGQucmVuZGVyKCk7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kUmVjdXJzZShvYmosIHNlbGVjdG9yKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gb2JqLmNoaWxkcmVuO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNoaWxkcmVuW2ldLmRpc3BsYXlOYW1lICYmIGNoaWxkcmVuW2ldLmRpc3BsYXlOYW1lID09IHNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMuZm91bmRDaGlsZHJlbi5wdXNoKGNoaWxkcmVuW2ldKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkcmVuW2ldLmNoaWxkcmVuICYmIGNoaWxkcmVuW2ldLmNoaWxkcmVuLmxlbmd0aClcbiAgICAgICAgdGhpcy5maW5kUmVjdXJzZShjaGlsZHJlbltpXSwgc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGZpbmQoc2VsZWN0b3IsIG9iaikge1xuICAgIHRoaXMuZm91bmRDaGlsZHJlbiA9IFtdO1xuXG4gICAgaWYgKCFvYmopXG4gICAgICB0aGlzLmZpbmRSZWN1cnNlKHRoaXMubGF5b3V0LCBzZWxlY3Rvcik7XG4gICAgZWxzZVxuICAgICAgdGhpcy5maW5kUmVjdXJzZShvYmosIHNlbGVjdG9yKTtcblxuICAgIHJldHVybiB0aGlzLmZvdW5kQ2hpbGRyZW47XG4gIH1cblxuICBpZChuYW1lKSB7XG4gICAgaWYgKCF0aGlzLmlkU2V0W25hbWVdKSB7XG4gICAgICB3aW5kb3cuX19JRCsrO1xuICAgICAgdGhpcy5pZFNldFtuYW1lXSA9IHdpbmRvdy5fX0lEO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcy5pZFNldFtuYW1lXTtcbiAgfVxuXG4gIHNldElkcyhhcnIpIHtcbiAgICBpZiAoIXRoaXMuaWRTZXQpXG4gICAgICB0aGlzLmlkU2V0ID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCF0aGlzLmlkU2V0W2FycltpXV0pIHtcbiAgICAgICAgd2luZG93Ll9fSUQrKztcbiAgICAgICAgdGhpcy5pZFNldFthcnJbaV1dID0gd2luZG93Ll9fSUQgKyAnJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVTcGVjaWFsQ2hhcnModmFsdWUpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLmluZGV4T2YoJywnKSA+IC0xID8gdmFsdWUucmVwbGFjZSgvXFwsL2csICdcXFxcXFxcXCwnKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gdmFsdWUuaW5kZXhPZignOicpID4gLTEgPyB2YWx1ZS5yZXBsYWNlKC9cXDovZywgJ1xcXFxcXFxcOicpIDogdmFsdWU7XG4gICAgdmFsdWUgPSB2YWx1ZS5pbmRleE9mKCc9JykgPiAtMSA/IHZhbHVlLnJlcGxhY2UoL1xcPS9nLCAnXFxcXFxcXFw9JykgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IHZhbHVlLmluZGV4T2YoJzsnKSA+IC0xID8gdmFsdWUucmVwbGFjZSgvXFw7L2csICdcXFxcXFxcXDsnKSA6IHZhbHVlO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgY21kRm9yQW5kcm9pZChjb25maWcpIHtcbiAgICB2YXIgY21kID0gXCJzZXRfdmlldz1jdHgtPmZpbmRWaWV3QnlJZDppX1wiICsgY29uZmlnLmlkICsgXCI7XCI7XG4gICAgdmFyIHJ1bkluVUk7XG5cbiAgICBpZiAoY29uZmlnLnRvYXN0KSB7XG4gICAgICBjbWQgPSBcInNldF9UT0FTVD1hbmRyb2lkLndpZGdldC5Ub2FzdC0+bWFrZVRleHQ6Y3R4X2N0eCxjc19cIiArIHRoaXMuaGFuZGxlU3BlY2lhbENoYXJzKFxuICAgICAgICAgIGNvbmZpZy50ZXh0KSArIFwiLGlfXCIgKyAoY29uZmlnLmR1cmF0aW9uID09IFwic2hvcnRcIiA/IDAgOiAxKSArXG4gICAgICAgIFwiO2dldF9UT0FTVC0+c2hvd1wiO1xuICAgIH0gZWxzZSBpZiAoY29uZmlnICYmIE9iamVjdC5rZXlzKGNvbmZpZykubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmlkO1xuXG4gICAgICBjb25maWcucm9vdCA9IFwidHJ1ZVwiO1xuICAgICAgcnVuSW5VSSA9IHBhcnNlUGFyYW1zKFwibGluZWFyTGF5b3V0XCIsIGNvbmZpZywgXCJnZXRcIikucnVuSW5VSTtcblxuICAgICAgY21kICs9IHJ1bkluVUkgKyAnOyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNtZDtcbiAgfVxuXG4gIGNtZENvbnRhaW5lcigpIHtcbiAgICBpZiAod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpXG4gICAgICByZXR1cm4gXCJcIjtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjbWRGb3JXZWIoY29uZmlnKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGNvbmZpZykubGVuZ3RoKVxuICAgICAgcmV0dXJuIHBhcnNlUGFyYW1zKFwibGluZWFyTGF5b3V0XCIsIGNvbmZpZywgXCJzZXRcIik7XG4gIH1cblxuICBjbWQoY29uZmlnKSB7XG4gICAgaWYgKHdpbmRvdy5fX09TID09IFwiQU5EUk9JRFwiKVxuICAgICAgcmV0dXJuIHRoaXMuY21kRm9yQW5kcm9pZChjb25maWcpO1xuICAgIGVsc2UgaWYgKHdpbmRvdy5fX09TID09IFwiV0VCXCIpXG4gICAgICByZXR1cm4gdGhpcy5jbWRGb3JXZWIoY29uZmlnKTtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgYXBwZW5kQ2hpbGQoaWQsIGpzeCwgaW5kZXgsIGZuLCByZXBsYWNlQ2hpbGQpIHtcbiAgICB2YXIgcHJveHlGbk5hbWU7XG4gICAgaWYgKCFyZXBsYWNlQ2hpbGQpIHtcbiAgICAgIHJlcGxhY2VDaGlsZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChmbikge1xuICAgICAgcHJveHlGbk5hbWUgPSAnRicgKyB3aW5kb3cuX19GTl9JTkRFWDtcbiAgICAgIHdpbmRvdy5fX1BST1hZX0ZOW3Byb3h5Rm5OYW1lXSA9IGZuO1xuICAgICAgd2luZG93Ll9fRk5fSU5ERVgrKztcbiAgICB9XG5cbiAgICBqc3ggPSAod2luZG93Ll9fT1MgIT0gXCJBTkRST0lEXCIpID8ganN4IDogSlNPTi5zdHJpbmdpZnkoanN4KTtcblxuICAgIGlmIChwcm94eUZuTmFtZSlcbiAgICAgIEFuZHJvaWQuYWRkVmlld1RvUGFyZW50KGlkLCBqc3gsIGluZGV4LCBwcm94eUZuTmFtZSwgcmVwbGFjZUNoaWxkKTtcbiAgICBlbHNlXG4gICAgICBBbmRyb2lkLmFkZFZpZXdUb1BhcmVudChpZCwganN4LCBpbmRleCwgbnVsbCwgcmVwbGFjZUNoaWxkKTtcbiAgfVxuXG4gIGdldFZpZXcoanN4KSB7XG4gICAgaWYgKHdpbmRvdy5fX09TICE9IFwiQU5EUk9JRFwiKVxuICAgICAgcmV0dXJuIGpzeDtcblxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShqc3gpO1xuICB9XG5cbiAgdXBkYXRlUHJvcHMocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0gbWVyZ2UodGhpcy5wcm9wcywgcHJvcHMpO1xuICAgIGNvbnN0IG9sZENvbnRhaW5lcklkID0gdGhpcy5sYXlvdXQuaWRTZXQuaWQ7XG4gICAgY29uc3QgbGF5b3V0ID0gdGhpcy5yZW5kZXIoKTtcbiAgICBmb3IgKGxldCBpPTA7IGk8bGF5b3V0LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaT09MCkgdGhpcy5yZXBsYWNlQ2hpbGQob2xkQ29udGFpbmVySWQsIGxheW91dC5jaGlsZHJlbltpXSwgaSk7XG4gICAgICBlbHNlIHRoaXMuYXBwZW5kQ2hpbGQob2xkQ29udGFpbmVySWQsIGxheW91dC5jaGlsZHJlbltpXSwgaSk7XG4gICAgfVxuICAgIHRoaXMubGF5b3V0LmlkU2V0LmlkID0gb2xkQ29udGFpbmVySWQ7XG4gIH1cblxuICByZW1vdmVWaWV3KGlkKSB7XG4gICAgaWYgKF9fT1MgPT0gXCJXRUJcIilcbiAgICAgIHJldHVybiBBbmRyb2lkLnJlbW92ZVZpZXcoaWQpO1xuICAgIHJldHVybiBcInNldF9WSUVXPWN0eC0+ZmluZFZpZXdCeUlkOmlfXCIgKyBpZCArXG4gICAgICBcIjtzZXRfUEFSRU5UPWdldF9WSUVXLT5nZXRQYXJlbnQ7Z2V0X1BBUkVOVC0+cmVtb3ZlVmlldzpnZXRfVklFVztcIlxuICB9XG5cbiAgcmVtb3ZlQ2hpbGRyZW4oaWQpIHtcbiAgICBpZiAoX19PUyA9PSBcIldFQlwiKVxuICAgICAgcmV0dXJuIEFuZHJvaWQucmVtb3ZlQ2hpbGRyZW4oaWQpO1xuICAgIHJldHVybiBcInNldF9WSUVXPWN0eC0+ZmluZFZpZXdCeUlkOmlfXCIgKyBpZCArXG4gICAgICBcIjtnZXRfVklFVy0+cmVtb3ZlQWxsVmlld3M7XCJcbiAgfVxuXG4gIHJlcGxhY2VDaGlsZChpZCwganN4LCBpbmRleCwgZm4pIHtcbiAgICB0aGlzLmFwcGVuZENoaWxkKGlkLCBqc3gsIGluZGV4LCBmbiwgdHJ1ZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNlVmlldzsiLCJjb25zdCBEcm9wZG93bkJveCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Ecm9wZG93bkJveCcpXG5jb25zdCBEcm9wZG93blNlYXJjaEJveCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Ecm9wZG93blNlYXJjaEJveCcpIFxuY29uc3QgTmF2QmFyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL05hdkJhcicpXG4vLyBjb25zdCBEYXRlUmFuZ2VQaWNrZXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvRGF0ZVJhbmdlUGlja2VyJylcbmNvbnN0IFN3aXRjaEJ1dHRvbiA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Td2l0Y2hCdXR0b24nKVxuY29uc3QgQnV0dG9uID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0J1dHRvbicpXG5cblxuXG4vKiBDb21wb25lbnRzICovXG5mdW5jdGlvbiBjbG9zZUFsbEFjdGl2ZUNvbXBvbmVudHMoKSB7XG4gICAgaWYod2luZG93Ll9fQ09NX0FDVElWRS5OQVZCQVIgIT0gJycpXG4gICAgICAgIE5hdkJhci5fY2xvc2VCeUdVSUQod2luZG93Ll9fQ09NX0FDVElWRS5OQVZCQVIpXG4gICAgaWYod2luZG93Ll9fQ09NX0FDVElWRS5EU0IgIT0gJycpXG4gICAgICAgIERyb3Bkb3duU2VhcmNoQm94Ll9jbG9zZUJ5R1VJRCh3aW5kb3cuX19DT01fQUNUSVZFLkRTQilcbiAgICBpZih3aW5kb3cuX19DT01fQUNUSVZFLkRCICE9ICcnKVxuICAgICAgICBEcm9wZG93bkJveC5fY2xvc2VCeUdVSUQod2luZG93Ll9fQ09NX0FDVElWRS5EQilcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ29tcG9uZW50KGVsZW0sIHByb3BzLCBmaXJzdFJlbmRlcikge1xuICAgIGlmKCFwcm9wcy5jb21wb25lbnRUeXBlKVxuICAgICAgICByZXR1cm5cblxuICAgIGxldCBjb21wb25lbnRUeXBlID0gcHJvcHMuY29tcG9uZW50VHlwZVxuXG4gICAgLyogQXR0YWNoaW5nIEdVSUQgb25seSB3aGVuIGZpcnN0UmVuZGVyICovXG4gICAgaWYoZmlyc3RSZW5kZXIgJiYgcHJvcHMuZ3VpZClcbiAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2d1aWQnLCBwcm9wcy5ndWlkKVxuXG4gICAgc3dpdGNoKGNvbXBvbmVudFR5cGUpIHtcbiAgICAgICAgLy8gQnV0dG9uXG4gICAgICAgIGNhc2UgJ0JUJzpcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuQlQpXG5cbiAgICAgICAgICAgIEJ1dHRvbi5fcmVuZGVyTWFpbihlbGVtLCBwcm9wcywgZmlyc3RSZW5kZXIpXG4gICAgICAgIGJyZWFrICAgIFxuICAgICAgICAvLyBTd2l0Y2ggQnV0dG9uXG4gICAgICAgIGNhc2UgJ1NXSVRDSCc6XG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLlNXSVRDSClcblxuICAgICAgICAgICAgU3dpdGNoQnV0dG9uLl9yZW5kZXJNYWluKGVsZW0sIHByb3BzLCBmaXJzdFJlbmRlcilcbiAgICAgICAgYnJlYWtcbiAgICAgICAgLy8gRGF0ZSBSYW5nZSBQaWNrZXJcbiAgICAgICAgY2FzZSAnRFJQJzogXG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRSUClcblxuICAgICAgICAgIC8vICAgRGF0ZVJhbmdlUGlja2VyLl9yZW5kZXJNYWluKGVsZW0sIHByb3BzLCBmaXJzdFJlbmRlcilcbiAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnRFJQX0JPRFknOlxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EUlBfQk9EWSlcblxuICAgICAgICAgIC8vICAgRGF0ZVJhbmdlUGlja2VyLl9yZW5kZXJCb2R5KGVsZW0sIHByb3BzLCBmaXJzdFJlbmRlcilcbiAgICAgICAgYnJlYWtcbiAgICAgICAgLy8gTmF2IEJhclxuICAgICAgICBjYXNlICdOQVZCQVInOlxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5OQVZCQVIpXG5cbiAgICAgICAgICAgIE5hdkJhci5fcmVuZGVyTWFpbihlbGVtLCBwcm9wcywgZmlyc3RSZW5kZXIpXG4gICAgICAgIGJyZWFrXG4gICAgICAgIC8vIERyb3Bkb3duIEJveFxuICAgICAgICBjYXNlICdEQic6XG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRCKVxuXG4gICAgICAgICAgICBEcm9wZG93bkJveC5fcmVuZGVyTWFpbihlbGVtLCBwcm9wcywgZmlyc3RSZW5kZXIpXG4gICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ0RCX0ZVTExfQk9EWSc6IFxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EQl9GVUxMX0JPRFkpXG5cbiAgICAgICAgICAgIERyb3Bkb3duQm94Ll9yZW5kZXJGdWxsQm9keShlbGVtLCBwcm9wcywgZmlyc3RSZW5kZXIpXG4gICAgICAgIGJyZWFrXG4gICAgICAgIC8vIERyb3Bkb3duIFNlYXJjaCBCb3hcbiAgICAgICAgY2FzZSAnRFNCJzpcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuRFNCKVxuXG4gICAgICAgICAgICBEcm9wZG93blNlYXJjaEJveC5fcmVuZGVyTWFpbihlbGVtLCBwcm9wcywgZmlyc3RSZW5kZXIpXG4gICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ0RTQl9GVUxMX0JPRFknOlxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EU0JfRlVMTF9CT0RZKVxuXG4gICAgICAgICAgICBEcm9wZG93blNlYXJjaEJveC5fcmVuZGVyRnVsbEJvZHkoZWxlbSwgcHJvcHMsIGZpcnN0UmVuZGVyKVxuICAgICAgICBicmVha1xuICAgICB9XG5cbiAgICAgaWYoIXdpbmRvdy5fX0NPTV9FVkVOVCkge1xuICAgICAgICAgIHdpbmRvdy5fX0NPTV9FVkVOVCA9IHRydWVcblxuICAgICAgICAgIC8vIEJvZHkgY2xpY2sgZXZlbnRcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0XG4gICAgICAgICAgICAgICBsZXQgZ3VpZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2d1aWQnKVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBpZighZ3VpZCkgeyAvLyBXZSBuZWVkIHRvIGNsb3NlIGFueSBhY3RpdmUgY29tcG9uZW50c1xuICAgICAgICAgICAgICAgICAgICBjbG9zZUFsbEFjdGl2ZUNvbXBvbmVudHMoKVxuICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNsYXNzTGlzdCA9IHRhcmdldC5jbGFzc0xpc3RcblxuICAgICAgICAgICAgICAgICAgICBpZihjbGFzc0xpc3QuY29udGFpbnMod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLk5BVkJBUl9JVEVNX1dJVEhfU1VCKSkgeyAvLyBOQVZCQVIgTWVudSBJdGVtIHdpdGggU3ViUm91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICBpZihjbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCF3aW5kb3cuX19DT01fQUNUSVZFLk5BVkJBUilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5hdkJhci5fY2xvc2VCeUdVSUQod2luZG93Ll9fQ09NX0FDVElWRS5OQVZCQVIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQWxsQWN0aXZlQ29tcG9uZW50cygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOYXZCYXIuX29wZW5CeUdVSUQoZ3VpZCwgdGFyZ2V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGNsYXNzTGlzdC5jb250YWlucyh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuTkFWQkFSX0lURU0pIHx8IGNsYXNzTGlzdC5jb250YWlucyh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuTkFWQkFSX1NVQl9JVEVNKSkgeyAvLyBOQVZCQVIgTWVudSBJdGVtIChTdWIgSXRlbSBhcyB3ZWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5fX0NPTV9BQ1RJVkUuTkFWQkFSKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmF2QmFyLl9jbG9zZUJ5R1VJRCh3aW5kb3cuX19DT01fQUNUSVZFLk5BVkJBUilcblxuICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIE5hdkJhci5fc2VsZWN0Um91dGVCeUdVSUQoZ3VpZCwgdGFyZ2V0KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoY2xhc3NMaXN0LmNvbnRhaW5zKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EQikpIHsgLy8gREIgTWFpbiBDbGlja1xuICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGd1aWQgPT0gd2luZG93Ll9fQ09NX0FDVElWRS5EQikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRHJvcGRvd25Cb3guX2Nsb3NlQnlHVUlEKGd1aWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQWxsQWN0aXZlQ29tcG9uZW50cygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEcm9wZG93bkJveC5fb3BlbkJ5R1VJRChndWlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGNsYXNzTGlzdC5jb250YWlucyh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuREJfT1BUSU9OKSkgeyAvLyBEQiBPcHRpb24gU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgRHJvcGRvd25Cb3guX2Nsb3NlQnlHVUlEKGd1aWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgRHJvcGRvd25Cb3guX3NlbGVjdE9wdGlvbkJ5R1VJRChndWlkLCB0YXJnZXQpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihjbGFzc0xpc3QuY29udGFpbnMod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRTQikpIHsgLy8gRFNCIE1haW4gQ2xpY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICBpZihndWlkID09IHdpbmRvdy5fX0NPTV9BQ1RJVkUuRFNCKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEcm9wZG93blNlYXJjaEJveC5fY2xvc2VCeUdVSUQoZ3VpZClcbiAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VBbGxBY3RpdmVDb21wb25lbnRzKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERyb3Bkb3duU2VhcmNoQm94Ll9vcGVuQnlHVUlEKGd1aWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoY2xhc3NMaXN0LmNvbnRhaW5zKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EU0JfT1BUSU9OKSkgeyAvLyBEU0IgT3B0aW9uIFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgIERyb3Bkb3duU2VhcmNoQm94Ll9jbG9zZUJ5R1VJRChndWlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgIERyb3Bkb3duU2VhcmNoQm94Ll9zZWxlY3RPcHRpb25CeUdVSUQoZ3VpZCwgdGFyZ2V0KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIC8vIEtleWRvd24gZXZlbnRcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0XG4gICAgICAgICAgICAgICBsZXQgZ3VpZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2d1aWQnKVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBpZighZ3VpZClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBsZXQgY2xhc3NMaXN0ID0gdGFyZ2V0LmNsYXNzTGlzdFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBpZihjbGFzc0xpc3QuY29udGFpbnMod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRTQl9TRUFSQ0gpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGd1aWQgPT0gd2luZG93Ll9fQ09NX0FDVElWRS5EU0IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcXVlcnkgPSB0YXJnZXQudmFsdWUudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgRHJvcGRvd25TZWFyY2hCb3guX2ZpbHRlck9wdGlvbnMoZ3VpZCwgcXVlcnkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgICByZW5kZXJDb21wb25lbnRcbn0iLCJmdW5jdGlvbiBCdXR0b24oKSB7fVxuXG5CdXR0b24ucHJvdG90eXBlLl9yZW5kZXJNYWluID0gZnVuY3Rpb24oZWxlbSwgcHJvcHMsIHJlbmRlckV2ZW50KSB7XG4gICAgbGV0IGd1aWQgPSBwcm9wcy5ndWlkIFxuICAgIGlmKGVsZW0uZ2V0QXR0cmlidXRlKCdndWlkJykpXG4gICAgICAgIGd1aWQgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZ3VpZCcpXG5cbiAgICBlbGVtLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJyBcbiAgICBlbGVtLnN0eWxlLnBhZGRpbmcgPSAwXG4gICAgZWxlbS5pbm5lckhUTUwgPSAnJ1xuXG4gICAgbGV0IGxpbmtFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQScpXG4gICAgZWxlbS5hcHBlbmRDaGlsZChsaW5rRWxlbSlcblxuICAgIGxpbmtFbGVtLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0bydcblxuICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnZGlzYWJsZWQnKSAmJiBwcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkJUX0RJU0FCTEVEKVxuICAgICAgICBsaW5rRWxlbS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnICAgICAgICBcbiAgICB9XG5cbiAgICBsZXQgaHRtbCA9ICcnXG4gICAgLyogQnV0dG9uIEltYWdlICovXG4gICAgaWYgKHByb3BzLmltYWdlVXJsKSB7IC8vIEltYWdlIFVSTFxuICAgICAgICBsZXQgaW1hZ2VVcmwgPSBwcm9wcy5pbWFnZVVybFxuXG4gICAgICAgIGxldCB0ZW1wID0gaW1hZ2VVcmwuc3BsaXQoJy4nKVxuICAgICAgICBsZXQgZXh0ID0gJydcbiAgICAgICAgaWYodGVtcCAmJiB0ZW1wLmxlbmd0aCA+IDApXG4gICAgICAgICAgICBleHQgPSB0ZW1wW3RlbXAubGVuZ3RoIC0gMV1cbiAgICAgICAgXG4gICAgICAgIGxldCBleHRzID0gW1wianBlZ1wiLCBcImpwZ1wiLCBcInBuZ1wiLCBcImJtcFwiLCBcInN2Z1wiLCBcImdpZlwiXVxuICAgICAgICBleHQgPSBleHQudG9Mb3dlckNhc2UoKVxuXG4gICAgICAgIGlmKCFpbWFnZVVybC5pbmNsdWRlcyhcImRhdGE6aW1hZ2Uvc3ZnK3htbFwiKSAmJiAhZXh0cy5pbmNsdWRlcyhleHQpKSB7XG4gICAgICAgICAgICBpbWFnZVVybCArPSAnLnBuZydcbiAgICAgICAgfVxuXG4gICAgICAgIGh0bWwgKz0gJzxpbWcgc3JjPVwiJyArIGltYWdlVXJsICsgJ1wiLz4nXG4gICAgfSBlbHNlIGlmIChwcm9wcy5pY29uTmFtZSkgeyAvLyBGb250IEljb25cbiAgICAgICAgaHRtbCArPSAnPGkgY2xhc3M9XCInICsgcHJvcHMuaWNvbk5hbWUgKyAnXCI+PC9pPidcbiAgICB9XG5cbiAgICAvKiBCdXR0b24gVGV4dCAqL1xuICAgIGlmIChwcm9wcy50ZXh0KSBcbiAgICAgICAgaHRtbCArPSBcIjxzcGFuPlwiICsgcHJvcHMudGV4dCArIFwiPC9zcGFuPlwiXG4gICAgZWxzZVxuICAgICAgICBodG1sICs9IFwiPHNwYW4+QnV0dG9uIFRleHQ8L3NwYW4+XCJcblxuICAgIGxpbmtFbGVtLmlubmVySFRNTCA9IGh0bWxcblxuICAgIGlmKHByb3BzLmhhc093blByb3BlcnR5KCdwYWRkaW5nJykgJiYgcHJvcHMucGFkZGluZykge1xuICAgICAgICBsZXQgcGFkZGluZyA9IHByb3BzLnBhZGRpbmcuc3BsaXQoJywnKS5tYXAoYSA9PiBhICogMSlcbiAgICAgICAgXG4gICAgICAgIGxpbmtFbGVtLnN0eWxlLnBhZGRpbmcgPSBwYWRkaW5nWzFdICsgJ3B4ICcgKyBwYWRkaW5nWzJdICsgJ3B4ICcgKyBwYWRkaW5nWzNdICsgJ3B4ICcgKyBwYWRkaW5nWzBdICsgJ3B4J1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxpbmtFbGVtLnN0eWxlLnBhZGRpbmcgPSAwXG4gICAgfVxuXG4gICAgaWYgKCFwcm9wcy5zdHJva2UpIHtcbiAgICAgICAgZWxlbS5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkICcgKyB3aW5kb3cuX19DT01fQ09MT1JfR1JPVVAuQlRfQk9SREVSX0NPTE9SXG4gICAgfVxuXG4gICAgaWYgKCFwcm9wcy5iYWNrZ3JvdW5kQ29sb3IpIHtcbiAgICAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB3aW5kb3cuX19DT01fQ09MT1JfR1JPVVAuQlRfQkdfQ09MT1JcbiAgICB9XG5cbiAgICBpZiAoIXByb3BzLmNvbG9yKSB7XG4gICAgICAgIGVsZW0uc3R5bGUuY29sb3IgPSB3aW5kb3cuX19DT01fQ09MT1JfR1JPVVAuQlRfQ09MT1JcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IEJ1dHRvbigpIiwiZnVuY3Rpb24gRHJvcGRvd25Cb3goKSB7fVxuXG5Ecm9wZG93bkJveC5wcm90b3R5cGUuX2VxdWFsT3B0aW9ucyA9IGZ1bmN0aW9uKGEsIGIsIGopIHtcbiAgICAgbGV0IHN0cmluZ0EgPSBhLmpvaW4oaikudHJpbSgpXG4gICAgIGxldCBzdHJpbmdCID0gYi5qb2luKGopLnRyaW0oKVxuXG4gICAgIGlmIChzdHJpbmdBID09IHN0cmluZ0IpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgcmV0dXJuIGZhbHNlXG59XG5cbkRyb3Bkb3duQm94LnByb3RvdHlwZS5fc2VsZWN0T3B0aW9uQnlHVUlEID0gZnVuY3Rpb24oZ3VpZCwgb3B0aW9uRWxlbSkge1xuICAgICBsZXQgdmFsdWUgPSBvcHRpb25FbGVtLmdldEF0dHJpYnV0ZSgnb3B0aW9uLXZhbHVlJylcbiAgICAgbGV0IHRleHQgPSBvcHRpb25FbGVtLmdldEF0dHJpYnV0ZSgnb3B0aW9uLXRleHQnKVxuXG4gICAgIGxldCBtYWluT2JqZWN0ID0gdGhpcy5fZ2V0TWFpbk9iamVjdChndWlkKVxuICAgICBsZXQgbWFpbk9iamVjdElEID0gbWFpbk9iamVjdC5pZFxuXG4gICAgIGlmKCF2YWx1ZSB8fCAhdGV4dCB8fCAhbWFpbk9iamVjdElEKVxuICAgICAgICAgIHJldHVyblxuICAgICBcbiAgICAgbGV0IHZpZXcgPSB3aW5kb3cuX19WSUVXU1ttYWluT2JqZWN0SURdIFxuICAgICBcbiAgICAgaWYoIXZpZXcgfHwgIXZpZXcucHJvcHMpXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgLy8gU2F2ZSBPcHRpb24gVmFsdWVcbiAgICAgaWYgKCF3aW5kb3cuX19DT01fUkVOREVSRUQuREJbZ3VpZF0pXG4gICAgICAgICAgd2luZG93Ll9fQ09NX1JFTkRFUkVELkRCW2d1aWRdID0ge31cbiAgICAgd2luZG93Ll9fQ09NX1JFTkRFUkVELkRCW2d1aWRdLm9wdGlvblZhbHVlID0gdmFsdWVcblxuICAgICAvLyBVcGRhdGUgVUlcbiAgICAgbGV0IG9wdGlvbnNFbGVtID0gdGhpcy5fZ2V0T3B0aW9uc09iamVjdChndWlkKVxuICAgICBpZiAob3B0aW9uc0VsZW0gJiYgb3B0aW9uc0VsZW0uY2hpbGROb2Rlcykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uc0VsZW0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgaWYgKG9wdGlvbnNFbGVtLmNoaWxkTm9kZXNbaV0uZ2V0QXR0cmlidXRlKCdvcHRpb24tdmFsdWUnKSA9PSB2YWx1ZSAmJiBvcHRpb25zRWxlbS5jaGlsZE5vZGVzW2ldLmdldEF0dHJpYnV0ZSgnb3B0aW9uLXRleHQnKSA9PSB0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNFbGVtLmNoaWxkTm9kZXNbaV0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxuICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc0VsZW0uY2hpbGROb2Rlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICB9XG5cbiAgICAgbGV0IGNoaWxkcmVuID0gbWFpbk9iamVjdC5jaGlsZE5vZGVzXG4gICAgIGxldCBhcnRpY2xlID0gbnVsbFxuXG4gICAgIGlmKGNoaWxkcmVuLmxlbmd0aCl7XG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgIGlmKGNoaWxkcmVuW2ldLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ2FydGljbGUnKXtcbiAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZSA9IGNoaWxkcmVuW2ldXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICB9XG5cbiAgICAgbWFpbk9iamVjdC5zdHlsZS5jb2xvciA9IHdpbmRvdy5fX0NPTV9DT0xPUl9HUk9VUC5BQ1RJVkVfQ09MT1JcbiAgICAgaWYgKGFydGljbGUpXG4gICAgICAgICAgYXJ0aWNsZS5pbm5lclRleHQgPSB0ZXh0XG5cbiAgICAgLy8gRXZlbnQgVHJpZ2dlclxuICAgICBpZiAodmlldy5wcm9wcy5vblNlbGVjdCAmJiB0eXBlb2Ygdmlldy5wcm9wcy5vblNlbGVjdCA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICB2aWV3LnByb3BzLm9uU2VsZWN0KHZhbHVlKVxuICAgICB9XG59XG5cbkRyb3Bkb3duQm94LnByb3RvdHlwZS5faXNWYWxpZE9WID0gZnVuY3Rpb24ob3B0aW9uVmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgbGV0IHRleHQgPSBcIlwiXG4gICAgIFxuICAgICBpZihvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGZvcihsZXQgaSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICBpZihvcHRpb25zW2ldLnZhbHVlID09IG9wdGlvblZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQgPSBvcHRpb25zW2ldLnRleHRcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgIH0gXG5cbiAgICAgcmV0dXJuIHRleHRcbn1cblxuRHJvcGRvd25Cb3gucHJvdG90eXBlLl9nZXRNYWluT2JqZWN0ID0gZnVuY3Rpb24oZ3VpZCkge1xuICAgICBsZXQgcXVlcnkgPSAnLicgKyB3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuREIgKyAnW2d1aWQ9XCInICsgZ3VpZCArJ1wiXSdcbiAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihxdWVyeSlcbn1cblxuRHJvcGRvd25Cb3gucHJvdG90eXBlLl9nZXRGdWxsQm9keU9iamVjdCA9IGZ1bmN0aW9uKGd1aWQpIHtcbiAgICAgbGV0IHF1ZXJ5ID0gJy4nICsgd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRCX0ZVTExfQk9EWSArICdbZ3VpZD1cIicgKyBndWlkICsnXCJdJ1xuICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKHF1ZXJ5KVxufVxuXG5Ecm9wZG93bkJveC5wcm90b3R5cGUuX2dldEJvZHlPYmplY3QgPSBmdW5jdGlvbihndWlkKSB7XG4gICAgIGxldCBxdWVyeSA9ICcuJyArIHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EQl9CT0RZICsgJ1tndWlkPVwiJyArIGd1aWQgKydcIl0nXG4gICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IocXVlcnkpXG59XG5cbkRyb3Bkb3duQm94LnByb3RvdHlwZS5fZ2V0T3B0aW9uc09iamVjdCA9IGZ1bmN0aW9uKGd1aWQpIHtcbiAgICAgbGV0IHF1ZXJ5ID0gJy4nICsgd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRCX09QVElPTlMgKyAnW2d1aWQ9XCInICsgZ3VpZCArJ1wiXSdcbiAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihxdWVyeSlcbn1cblxuRHJvcGRvd25Cb3gucHJvdG90eXBlLl9yZW5kZXJPcHRpb24gPSBmdW5jdGlvbihwYXJlbnRFbGVtLCBwcm9wcywgZ3VpZCwgb3B0aW9uLCBvcHRpb25WYWx1ZSwgcmVuZGVyRXZlbnQpIHtcbiAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgIGVsZW0uY2xhc3NOYW1lID0gd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRCX09QVElPTlxuICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnb3B0aW9uLXZhbHVlJywgb3B0aW9uLnZhbHVlKVxuICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnb3B0aW9uLXRleHQnLCBvcHRpb24udGV4dClcblxuICAgICBsZXQgaGVpZ2h0ID0gNTBcbiAgICAgaWYocHJvcHMub3B0aW9uSGVpZ2h0ICYmICFpc05hTihwcm9wcy5vcHRpb25IZWlnaHQpKSB7XG4gICAgICAgICAgaGVpZ2h0ID0gcGFyc2VGbG9hdChwcm9wcy5vcHRpb25IZWlnaHQpXG4gICAgIH1cblxuICAgICBlbGVtLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCdcbiAgICAgXG4gICAgIGlmKHByb3BzLmZvbnRTaXplKSBcbiAgICAgICAgICBlbGVtLnN0eWxlLmZvbnRTaXplID0gcHJvcHMuZm9udFNpemUgKyAncHgnXG4gICAgIGlmKHByb3BzLmZvbnRGYW1pbHkpXG4gICAgICAgICAgZWxlbS5zdHlsZS5mb250RmFtaWx5ID0gcHJvcHMuZm9udEZhbWlseVxuICAgICBpZihwcm9wcy5vcHRpb25QYWRkaW5nKSB7IFxuICAgICAgICAgIGxldCBwYWRkaW5nID0gcHJvcHMub3B0aW9uUGFkZGluZy5zcGxpdCgnLCcpLm1hcChhID0+IGEgKiAxKTtcbiAgXG4gICAgICAgICAgZWxlbS5zdHlsZS5wYWRkaW5nID0gcGFkZGluZ1sxXSArICdweCAnICsgcGFkZGluZ1syXSArICdweCAnICsgcGFkZGluZ1szXSArICdweCAnICsgcGFkZGluZ1swXSArICdweCdcbiAgICAgfVxuXG4gICAgIGVsZW0uc2V0QXR0cmlidXRlKCdndWlkJywgZ3VpZCkgXG5cbiAgICAgaWYob3B0aW9uVmFsdWUgJiYgb3B0aW9uVmFsdWUgPT0gb3B0aW9uLnZhbHVlKSB7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG4gICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgIH1cblxuICAgICBsZXQgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0FSVElDTEUnKVxuICAgICBhcnRpY2xlLmlubmVyVGV4dCA9IG9wdGlvbi50ZXh0XG4gICAgIFxuICAgICBlbGVtLmFwcGVuZENoaWxkKGFydGljbGUpXG4gICAgIHBhcmVudEVsZW0uYXBwZW5kQ2hpbGQoZWxlbSlcbn1cblxuRHJvcGRvd25Cb3gucHJvdG90eXBlLl9vcGVuQnlHVUlEID0gZnVuY3Rpb24oZ3VpZCkge1xuICAgICBsZXQgb2JqZWN0ID0gdGhpcy5fZ2V0TWFpbk9iamVjdChndWlkKVxuICAgICBsZXQgYm9keUVsZW0gPSB0aGlzLl9nZXRCb2R5T2JqZWN0KGd1aWQpXG4gICAgIFxuICAgICBpZighb2JqZWN0IHx8ICFib2R5RWxlbSlcbiAgICAgICAgICByZXR1cm5cblxuICAgICBvYmplY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxuICAgICBib2R5RWxlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICB3aW5kb3cuX19DT01fQUNUSVZFLkRCID0gZ3VpZFxufVxuXG5Ecm9wZG93bkJveC5wcm90b3R5cGUuX2Nsb3NlQnlHVUlEID0gZnVuY3Rpb24oZ3VpZCkge1xuICAgICBsZXQgb2JqZWN0ID0gdGhpcy5fZ2V0TWFpbk9iamVjdChndWlkKVxuICAgICBsZXQgYm9keUVsZW0gPSB0aGlzLl9nZXRCb2R5T2JqZWN0KGd1aWQpXG4gICAgIFxuICAgICBpZighb2JqZWN0IHx8ICFib2R5RWxlbSlcbiAgICAgICAgICByZXR1cm5cblxuICAgICBvYmplY3QuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuICAgICBib2R5RWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgIHdpbmRvdy5fX0NPTV9BQ1RJVkUuREIgPSAnJ1xufVxuXG5Ecm9wZG93bkJveC5wcm90b3R5cGUuX3JlbmRlck1haW4gPSBmdW5jdGlvbihlbGVtLCBwcm9wcywgcmVuZGVyRXZlbnQpIHtcbiAgICAgLy8gR1VJRFxuICAgICBsZXQgZ3VpZCA9IHByb3BzLmd1aWRcbiAgICAgaWYoZWxlbS5nZXRBdHRyaWJ1dGUoJ2d1aWQnKSlcbiAgICAgICAgICBndWlkID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2d1aWQnKVxuXG4gICAgIGxldCBjaGlsZHJlbiA9IGVsZW0uY2hpbGROb2Rlc1xuICAgICBsZXQgYXJ0aWNsZSA9IG51bGxcblxuICAgICBpZihjaGlsZHJlbi5sZW5ndGgpe1xuICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICBpZihjaGlsZHJlbltpXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09ICdhcnRpY2xlJyl7XG4gICAgICAgICAgICAgICAgICAgIGFydGljbGUgPSBjaGlsZHJlbltpXVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgfVxuXG4gICAgIGlmKCFwcm9wcy5zdHJva2UpXG4gICAgICAgICAgZWxlbS5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBcIiArIHdpbmRvdy5fX0NPTV9DT0xPUl9HUk9VUC5CT1JERVJfQ09MT1JcbiAgICAgXG4gICAgIGlmKHByb3BzLm9wdGlvbnMpIHtcbiAgICAgICAgICBsZXQgb3B0aW9ucyA9IEpTT04ucGFyc2UocHJvcHMub3B0aW9ucylcbiAgICAgICAgICBsZXQgb3B0aW9uVmFsdWUgPSBudWxsXG5cbiAgICAgICAgICBpZiAocHJvcHMub3B0aW9uVmFsdWUpXG4gICAgICAgICAgICAgICBvcHRpb25WYWx1ZSA9IHByb3BzLm9wdGlvblZhbHVlXG5cbiAgICAgICAgICAvLyBSZWFkIG9wdGlvbiB2YWx1ZVxuICAgICAgICAgIGlmICh3aW5kb3cuX19DT01fUkVOREVSRUQuREJbZ3VpZF0gJiYgd2luZG93Ll9fQ09NX1JFTkRFUkVELkRCW2d1aWRdLm9wdGlvblZhbHVlKVxuICAgICAgICAgICAgICAgb3B0aW9uVmFsdWUgPSB3aW5kb3cuX19DT01fUkVOREVSRUQuREJbZ3VpZF0ub3B0aW9uVmFsdWUgKyBcIlwiXG5cbiAgICAgICAgICBpZihvcHRpb25WYWx1ZSkge1xuICAgICAgICAgICAgICAgbGV0IG9wdGlvblRleHQgPSB0aGlzLl9pc1ZhbGlkT1Yob3B0aW9uVmFsdWUsIG9wdGlvbnMpXG5cbiAgICAgICAgICAgICAgIGlmIChvcHRpb25UZXh0ICE9IFwiXCIpIHsgXG4gICAgICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuY29sb3IgPSB3aW5kb3cuX19DT01fQ09MT1JfR1JPVVAuQUNUSVZFX0NPTE9SXG5cbiAgICAgICAgICAgICAgICAgICAgaWYoYXJ0aWNsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLmlubmVyVGV4dCA9IG9wdGlvblRleHRcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgIH1cbiAgICAgLyogRGVmYXVsdCBTdHlsZXMgRW5kICovXG59XG5cbkRyb3Bkb3duQm94LnByb3RvdHlwZS5fcmVuZGVyRnVsbEJvZHkgPSBmdW5jdGlvbihlbGVtLCBwcm9wcywgcmVuZGVyRXZlbnQpIHtcbiAgICAgLy8gR1VJRFxuICAgICBsZXQgZ3VpZCA9IHByb3BzLmd1aWRcbiAgICAgaWYoZWxlbS5nZXRBdHRyaWJ1dGUoJ2d1aWQnKSlcbiAgICAgICAgICBndWlkID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2d1aWQnKVxuXG4gICAgIGxldCBib2R5RWxlbSA9IG51bGxcbiAgICAgICAgICBsZXQgb3B0aW9uc0VsZW1lbnQgPSBudWxsXG5cbiAgICAgaWYgKHJlbmRlckV2ZW50KSB7XG4gICAgICAgICAgYm9keUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgIGJvZHlFbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRCX0JPRFkpXG4gICAgICAgICAgYm9keUVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgIGJvZHlFbGVtLnNldEF0dHJpYnV0ZSgnZ3VpZCcsIGd1aWQpXG4gICAgICAgICAgXG4gICAgICAgICAgICAgICBvcHRpb25zRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICBvcHRpb25zRWxlbWVudC5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EQl9PUFRJT05TKVxuICAgICAgICAgICAgICAgb3B0aW9uc0VsZW1lbnQuc2V0QXR0cmlidXRlKCdndWlkJywgZ3VpZClcblxuICAgICAgICAgICAgICAgYm9keUVsZW0uYXBwZW5kQ2hpbGQob3B0aW9uc0VsZW1lbnQpXG5cbiAgICAgICAgICBlbGVtLmFwcGVuZENoaWxkKGJvZHlFbGVtKVxuICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJvZHlFbGVtID0gdGhpcy5fZ2V0Qm9keU9iamVjdChndWlkKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIG9wdGlvbnNFbGVtZW50ID0gdGhpcy5fZ2V0T3B0aW9uc09iamVjdChndWlkKVxuICAgICB9XG5cbiAgICAgaWYgKCFib2R5RWxlbSB8fCAhb3B0aW9uc0VsZW1lbnQpXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgLy8gT3B0aW9uc1xuICAgICB0aGlzLl9yZW5kZXJPcHRpb25zKG9wdGlvbnNFbGVtZW50LCBwcm9wcywgZ3VpZCwgcmVuZGVyRXZlbnQpXG59XG5cbkRyb3Bkb3duQm94LnByb3RvdHlwZS5fcmVuZGVyT3B0aW9ucyA9IGZ1bmN0aW9uKGVsZW0sIHByb3BzLCBndWlkLCByZW5kZXJFdmVudCkge1xuICAgICBsZXQgcHJldmlvdXNPcHRpb25zID0gW11cbiAgICAgbGV0IG9wdGlvbnMgPSBbXVxuXG4gICAgIC8vIEN1cnJlbnQgT3B0aW9uc1xuICAgICBpZihwcm9wcy5vcHRpb25zKSB7XG4gICAgICAgICAgb3B0aW9ucyA9IEpTT04ucGFyc2UocHJvcHMub3B0aW9ucylcbiAgICAgfVxuXG4gICAgIC8vIFByZXZpb3VzIE9wdGlvbnNcbiAgICAgaWYgKHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EQltndWlkXSAmJiB3aW5kb3cuX19DT01fUkVOREVSRUQuREJbZ3VpZF0ub3B0aW9ucykge1xuICAgICAgICAgIHByZXZpb3VzT3B0aW9ucyA9IEpTT04ucGFyc2Uod2luZG93Ll9fQ09NX1JFTkRFUkVELkRCW2d1aWRdLm9wdGlvbnMpXG4gICAgIH1cblxuICAgICAvLyBSZWFkIG9wdGlvbiB2YWx1ZVxuICAgICBsZXQgb3B0aW9uVmFsdWUgPSBudWxsXG4gICAgIGlmIChwcm9wcy5vcHRpb25WYWx1ZSlcbiAgICAgICAgICBvcHRpb25WYWx1ZSA9IHByb3BzLm9wdGlvblZhbHVlXG4gICAgIGlmICh3aW5kb3cuX19DT01fUkVOREVSRUQuREJbZ3VpZF0gJiYgd2luZG93Ll9fQ09NX1JFTkRFUkVELkRCW2d1aWRdLm9wdGlvblZhbHVlKVxuICAgICAgICAgIG9wdGlvblZhbHVlID0gd2luZG93Ll9fQ09NX1JFTkRFUkVELkRCW2d1aWRdLm9wdGlvblZhbHVlICsgXCJcIlxuXG4gICAgIC8vIFNhdmUgT3B0aW9uc1xuICAgICBpZiAoIXdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EQltndWlkXSlcbiAgICAgICAgICB3aW5kb3cuX19DT01fUkVOREVSRUQuREJbZ3VpZF0gPSB7fVxuICAgICB3aW5kb3cuX19DT01fUkVOREVSRUQuREJbZ3VpZF0ub3B0aW9ucyA9IHByb3BzLm9wdGlvbnNcbiAgICAgXG4gICAgIC8vIFN0eWxlXG4gICAgIGxldCBoZWlnaHQgPSA1MFxuICAgICBpZihwcm9wcy5vcHRpb25IZWlnaHQgJiYgIWlzTmFOKHByb3BzLm9wdGlvbkhlaWdodCkpIHtcbiAgICAgICAgICBoZWlnaHQgPSBwYXJzZUZsb2F0KHByb3BzLm9wdGlvbkhlaWdodClcbiAgICAgfVxuXG4gICAgIGlmKG9wdGlvbnMubGVuZ3RoID4gNSkge1xuICAgICAgICAgIGVsZW0uc3R5bGUubWF4SGVpZ2h0ID0gKGhlaWdodCAqIDUpICsgJ3B4J1xuICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsZW0uc3R5bGUubWF4SGVpZ2h0ID0gJ2F1dG8nXG4gICAgIH1cbiAgICAgXG4gICAgIGlmICghdGhpcy5fZXF1YWxPcHRpb25zKHByZXZpb3VzT3B0aW9ucywgb3B0aW9ucywgZ3VpZCkpIHsgLy8gT3B0aW9ucyBDaGFuZ2VkIC0gTmVlZCB0byBSZS1yZW5kZXJcbiAgICAgICAgICBlbGVtLmlubmVySFRNTCA9ICcnXG4gICAgICAgICAgXG4gICAgICAgICAgaWYob3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSBvcHRpb25zW2ldXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJPcHRpb24oZWxlbSwgcHJvcHMsIGd1aWQsIG9wdGlvbiwgb3B0aW9uVmFsdWUsIHJlbmRlckV2ZW50KVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBEcm9wZG93bkJveCgpIiwiZnVuY3Rpb24gRHJvcGRvd25TZWFyY2hCb3goKSB7fVxuXG5Ecm9wZG93blNlYXJjaEJveC5wcm90b3R5cGUuX2VxdWFsT3B0aW9ucyA9IGZ1bmN0aW9uKGEsIGIsIGopIHtcbiAgICAgbGV0IHN0cmluZ0EgPSBhLmpvaW4oaikudHJpbSgpXG4gICAgIGxldCBzdHJpbmdCID0gYi5qb2luKGopLnRyaW0oKVxuXG4gICAgIGlmIChzdHJpbmdBID09IHN0cmluZ0IpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgcmV0dXJuIGZhbHNlXG59XG5cbkRyb3Bkb3duU2VhcmNoQm94LnByb3RvdHlwZS5fc2VsZWN0T3B0aW9uQnlHVUlEID0gZnVuY3Rpb24oZ3VpZCwgb3B0aW9uRWxlbSkge1xuICAgICBsZXQgdmFsdWUgPSBvcHRpb25FbGVtLmdldEF0dHJpYnV0ZSgnb3B0aW9uLXZhbHVlJylcbiAgICAgbGV0IHRleHQgPSBvcHRpb25FbGVtLmdldEF0dHJpYnV0ZSgnb3B0aW9uLXRleHQnKVxuXG4gICAgIGxldCBtYWluT2JqZWN0ID0gdGhpcy5fZ2V0TWFpbk9iamVjdChndWlkKVxuICAgICBsZXQgbWFpbk9iamVjdElEID0gbWFpbk9iamVjdC5pZFxuXG4gICAgIGlmKCF2YWx1ZSB8fCAhdGV4dCB8fCAhbWFpbk9iamVjdElEKVxuICAgICAgICAgIHJldHVyblxuICAgICBcbiAgICAgbGV0IHZpZXcgPSB3aW5kb3cuX19WSUVXU1ttYWluT2JqZWN0SURdIFxuICAgICBcbiAgICAgaWYoIXZpZXcgfHwgIXZpZXcucHJvcHMpXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgLy8gU2F2ZSBPcHRpb24gVmFsdWVcbiAgICAgaWYgKCF3aW5kb3cuX19DT01fUkVOREVSRUQuRFNCW2d1aWRdKVxuICAgICAgICAgIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EU0JbZ3VpZF0gPSB7fVxuICAgICB3aW5kb3cuX19DT01fUkVOREVSRUQuRFNCW2d1aWRdLm9wdGlvblZhbHVlID0gdmFsdWVcblxuICAgICAvLyBVcGRhdGUgVUlcbiAgICAgbGV0IG9wdGlvbnNFbGVtID0gdGhpcy5fZ2V0T3B0aW9uc09iamVjdChndWlkKVxuICAgICBpZiAob3B0aW9uc0VsZW0gJiYgb3B0aW9uc0VsZW0uY2hpbGROb2Rlcykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uc0VsZW0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgaWYgKG9wdGlvbnNFbGVtLmNoaWxkTm9kZXNbaV0uZ2V0QXR0cmlidXRlKCdvcHRpb24tdmFsdWUnKSA9PSB2YWx1ZSAmJiBvcHRpb25zRWxlbS5jaGlsZE5vZGVzW2ldLmdldEF0dHJpYnV0ZSgnb3B0aW9uLXRleHQnKSA9PSB0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNFbGVtLmNoaWxkTm9kZXNbaV0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxuICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc0VsZW0uY2hpbGROb2Rlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICB9XG5cbiAgICAgbGV0IGNoaWxkcmVuID0gbWFpbk9iamVjdC5jaGlsZE5vZGVzXG4gICAgIGxldCBhcnRpY2xlID0gbnVsbFxuXG4gICAgIGlmKGNoaWxkcmVuLmxlbmd0aCl7XG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgIGlmKGNoaWxkcmVuW2ldLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ2FydGljbGUnKXtcbiAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZSA9IGNoaWxkcmVuW2ldXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICB9XG5cbiAgICAgbWFpbk9iamVjdC5zdHlsZS5jb2xvciA9IHdpbmRvdy5fX0NPTV9DT0xPUl9HUk9VUC5BQ1RJVkVfQ09MT1JcbiAgICAgaWYgKGFydGljbGUpXG4gICAgICAgICAgYXJ0aWNsZS5pbm5lclRleHQgPSB0ZXh0XG5cbiAgICAgLy8gRXZlbnQgVHJpZ2dlclxuICAgICBpZiAodmlldy5wcm9wcy5vblNlbGVjdCAmJiB0eXBlb2Ygdmlldy5wcm9wcy5vblNlbGVjdCA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICB2aWV3LnByb3BzLm9uU2VsZWN0KHZhbHVlKVxuICAgICB9XG59XG5cbkRyb3Bkb3duU2VhcmNoQm94LnByb3RvdHlwZS5faXNWYWxpZE9WID0gZnVuY3Rpb24ob3B0aW9uVmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgbGV0IG9wdGlvblRleHQgPSBcIlwiXG4gICAgIFxuICAgICBpZihvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGZvcihsZXQgaSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICBpZihvcHRpb25zW2ldLnZhbHVlID09IG9wdGlvblZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvblRleHQgPSBvcHRpb25zW2ldLnRleHRcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgIH0gXG5cbiAgICAgcmV0dXJuIG9wdGlvblRleHRcbn1cblxuRHJvcGRvd25TZWFyY2hCb3gucHJvdG90eXBlLl9nZXRNYWluT2JqZWN0ID0gZnVuY3Rpb24oZ3VpZCkge1xuICAgICBsZXQgcXVlcnkgPSAnLicgKyB3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuRFNCICsgJ1tndWlkPVwiJyArIGd1aWQgKydcIl0nXG4gICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IocXVlcnkpXG59XG5cbkRyb3Bkb3duU2VhcmNoQm94LnByb3RvdHlwZS5fZ2V0RnVsbEJvZHlPYmplY3QgPSBmdW5jdGlvbihndWlkKSB7XG4gICAgIGxldCBxdWVyeSA9ICcuJyArIHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EU0JfRlVMTF9CT0RZICsgJ1tndWlkPVwiJyArIGd1aWQgKydcIl0nXG4gICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IocXVlcnkpXG59XG5cbkRyb3Bkb3duU2VhcmNoQm94LnByb3RvdHlwZS5fZ2V0Qm9keU9iamVjdCA9IGZ1bmN0aW9uKGd1aWQpIHtcbiAgICAgbGV0IHF1ZXJ5ID0gJy4nICsgd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRTQl9CT0RZICsgJ1tndWlkPVwiJyArIGd1aWQgKydcIl0nXG4gICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IocXVlcnkpXG59XG5cbkRyb3Bkb3duU2VhcmNoQm94LnByb3RvdHlwZS5fZ2V0U2VhcmNoV3JhcE9iamVjdCA9IGZ1bmN0aW9uKGd1aWQpIHtcbiAgICAgbGV0IHF1ZXJ5ID0gJy4nICsgd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRTQl9TRUFSQ0hfV1JBUCArICdbZ3VpZD1cIicgKyBndWlkICsnXCJdJ1xuICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKHF1ZXJ5KVxufVxuXG5Ecm9wZG93blNlYXJjaEJveC5wcm90b3R5cGUuX2dldFNlYXJjaE9iamVjdCA9IGZ1bmN0aW9uKGd1aWQpIHtcbiAgICAgbGV0IHF1ZXJ5ID0gJy4nICsgd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRTQl9TRUFSQ0ggKyAnW2d1aWQ9XCInICsgZ3VpZCArJ1wiXSdcbiAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihxdWVyeSlcbn1cblxuRHJvcGRvd25TZWFyY2hCb3gucHJvdG90eXBlLl9nZXRPcHRpb25zT2JqZWN0ID0gZnVuY3Rpb24oZ3VpZCkge1xuICAgICBsZXQgcXVlcnkgPSAnLicgKyB3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuRFNCX09QVElPTlMgKyAnW2d1aWQ9XCInICsgZ3VpZCArJ1wiXSdcbiAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihxdWVyeSlcbn1cblxuRHJvcGRvd25TZWFyY2hCb3gucHJvdG90eXBlLl9maWx0ZXJPcHRpb25zID0gZnVuY3Rpb24oZ3VpZCwgcXVlcnkpIHtcbiAgICAgbGV0IG9wdGlvbnNFbGVtID0gdGhpcy5fZ2V0T3B0aW9uc09iamVjdChndWlkKVxuXG4gICAgIGlmICghb3B0aW9uc0VsZW0pXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgcXVlcnkgPSBxdWVyeS50b0xvd2VyQ2FzZSgpXG5cbiAgICAgaWYgKG9wdGlvbnNFbGVtLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnNFbGVtLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgIGxldCBvcHRpb25FbGVtID0gb3B0aW9uc0VsZW0uY2hpbGROb2Rlc1tpXVxuICAgICAgICAgICAgICAgbGV0IHRleHQgPSBvcHRpb25FbGVtLmdldEF0dHJpYnV0ZSgnb3B0aW9uLXRleHQnKVxuXG4gICAgICAgICAgICAgICBpZiAodGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dC50b0xvd2VyQ2FzZSgpXG5cbiAgICAgICAgICAgICAgICAgICAgaWYodGV4dC5pbmRleE9mKHF1ZXJ5KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25FbGVtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25FbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgfVxufVxuXG5Ecm9wZG93blNlYXJjaEJveC5wcm90b3R5cGUuX3JlbmRlck9wdGlvbiA9IGZ1bmN0aW9uKHBhcmVudEVsZW0sIHByb3BzLCBndWlkLCBvcHRpb24sIG9wdGlvblZhbHVlLCByZW5kZXJFdmVudCkge1xuICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgZWxlbS5jbGFzc05hbWUgPSB3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuRFNCX09QVElPTlxuICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnb3B0aW9uLXZhbHVlJywgb3B0aW9uLnZhbHVlKVxuICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnb3B0aW9uLXRleHQnLCBvcHRpb24udGV4dClcblxuICAgICBsZXQgaGVpZ2h0ID0gNTBcbiAgICAgaWYocHJvcHMub3B0aW9uSGVpZ2h0ICYmICFpc05hTihwcm9wcy5vcHRpb25IZWlnaHQpKSB7XG4gICAgICAgICAgaGVpZ2h0ID0gcGFyc2VGbG9hdChwcm9wcy5vcHRpb25IZWlnaHQpXG4gICAgIH1cblxuICAgICBlbGVtLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCdcbiAgICAgXG4gICAgIGlmKHByb3BzLmZvbnRTaXplKSBcbiAgICAgICAgICBlbGVtLnN0eWxlLmZvbnRTaXplID0gcHJvcHMuZm9udFNpemUgKyAncHgnXG4gICAgIGlmKHByb3BzLmZvbnRGYW1pbHkpXG4gICAgICAgICAgZWxlbS5zdHlsZS5mb250RmFtaWx5ID0gcHJvcHMuZm9udEZhbWlseVxuICAgICBpZihwcm9wcy5vcHRpb25QYWRkaW5nKSB7IFxuICAgICAgICAgIGxldCBwYWRkaW5nID0gcHJvcHMub3B0aW9uUGFkZGluZy5zcGxpdCgnLCcpLm1hcChhID0+IGEgKiAxKTtcbiAgXG4gICAgICAgICAgZWxlbS5zdHlsZS5wYWRkaW5nID0gcGFkZGluZ1sxXSArICdweCAnICsgcGFkZGluZ1syXSArICdweCAnICsgcGFkZGluZ1szXSArICdweCAnICsgcGFkZGluZ1swXSArICdweCdcbiAgICAgfVxuXG4gICAgIGVsZW0uc2V0QXR0cmlidXRlKCdndWlkJywgZ3VpZCkgXG5cbiAgICAgaWYob3B0aW9uVmFsdWUgJiYgb3B0aW9uVmFsdWUgPT0gb3B0aW9uLnZhbHVlKSB7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG4gICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgIH1cblxuICAgICBsZXQgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0FSVElDTEUnKVxuICAgICBhcnRpY2xlLmlubmVyVGV4dCA9IG9wdGlvbi50ZXh0XG4gICAgIFxuICAgICBlbGVtLmFwcGVuZENoaWxkKGFydGljbGUpXG4gICAgIHBhcmVudEVsZW0uYXBwZW5kQ2hpbGQoZWxlbSlcbn1cblxuRHJvcGRvd25TZWFyY2hCb3gucHJvdG90eXBlLl9vcGVuQnlHVUlEID0gZnVuY3Rpb24oZ3VpZCkge1xuICAgICBsZXQgb2JqZWN0ID0gdGhpcy5fZ2V0TWFpbk9iamVjdChndWlkKVxuICAgICBsZXQgYm9keUVsZW0gPSB0aGlzLl9nZXRCb2R5T2JqZWN0KGd1aWQpXG4gICAgIFxuICAgICBpZighb2JqZWN0IHx8ICFib2R5RWxlbSlcbiAgICAgICAgICByZXR1cm5cblxuICAgICBvYmplY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxuICAgICBib2R5RWxlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICB3aW5kb3cuX19DT01fQUNUSVZFLkRTQiA9IGd1aWRcbn1cblxuRHJvcGRvd25TZWFyY2hCb3gucHJvdG90eXBlLl9jbG9zZUJ5R1VJRCA9IGZ1bmN0aW9uKGd1aWQpIHtcbiAgICAgbGV0IG9iamVjdCA9IHRoaXMuX2dldE1haW5PYmplY3QoZ3VpZClcbiAgICAgbGV0IGJvZHlFbGVtID0gdGhpcy5fZ2V0Qm9keU9iamVjdChndWlkKVxuICAgICBcbiAgICAgaWYoIW9iamVjdCB8fCAhYm9keUVsZW0pXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgb2JqZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcbiAgICAgYm9keUVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICB3aW5kb3cuX19DT01fQUNUSVZFLkRTQiA9ICcnXG59XG5cbkRyb3Bkb3duU2VhcmNoQm94LnByb3RvdHlwZS5fcmVuZGVyTWFpbiA9IGZ1bmN0aW9uKGVsZW0sIHByb3BzLCByZW5kZXJFdmVudCkge1xuICAgICAvLyBHVUlEXG4gICAgIGxldCBndWlkID0gcHJvcHMuZ3VpZFxuICAgICBpZihlbGVtLmdldEF0dHJpYnV0ZSgnZ3VpZCcpKVxuICAgICAgICAgIGd1aWQgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZ3VpZCcpXG5cbiAgICAgbGV0IGNoaWxkcmVuID0gZWxlbS5jaGlsZE5vZGVzXG4gICAgIGxldCBhcnRpY2xlID0gbnVsbFxuXG4gICAgIGlmKGNoaWxkcmVuLmxlbmd0aCl7XG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgIGlmKGNoaWxkcmVuW2ldLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ2FydGljbGUnKXtcbiAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZSA9IGNoaWxkcmVuW2ldXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICB9XG5cbiAgICAgaWYoIXByb3BzLnN0cm9rZSlcbiAgICAgICAgICBlbGVtLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIFwiICsgd2luZG93Ll9fQ09NX0NPTE9SX0dST1VQLkJPUkRFUl9DT0xPUlxuICAgICBcbiAgICAgaWYocHJvcHMub3B0aW9ucykge1xuICAgICAgICAgIGxldCBvcHRpb25zID0gSlNPTi5wYXJzZShwcm9wcy5vcHRpb25zKVxuICAgICAgICAgIGxldCBvcHRpb25WYWx1ZSA9IG51bGxcblxuICAgICAgICAgIGlmIChwcm9wcy5vcHRpb25WYWx1ZSlcbiAgICAgICAgICAgICAgIG9wdGlvblZhbHVlID0gcHJvcHMub3B0aW9uVmFsdWVcblxuICAgICAgICAgIC8vIFJlYWQgb3B0aW9uIHZhbHVlXG4gICAgICAgICAgaWYgKHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EU0JbZ3VpZF0gJiYgd2luZG93Ll9fQ09NX1JFTkRFUkVELkRTQltndWlkXS5vcHRpb25WYWx1ZSlcbiAgICAgICAgICAgICAgIG9wdGlvblZhbHVlID0gd2luZG93Ll9fQ09NX1JFTkRFUkVELkRTQltndWlkXS5vcHRpb25WYWx1ZSArIFwiXCJcblxuICAgICAgICAgIGlmIChvcHRpb25WYWx1ZSkge1xuICAgICAgICAgICAgICAgbGV0IG9wdGlvblRleHQgPSB0aGlzLl9pc1ZhbGlkT1Yob3B0aW9uVmFsdWUsIG9wdGlvbnMpXG5cbiAgICAgICAgICAgICAgIGlmKG9wdGlvblRleHQgIT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLmNvbG9yID0gd2luZG93Ll9fQ09NX0NPTE9SX0dST1VQLkFDVElWRV9DT0xPUlxuXG4gICAgICAgICAgICAgICAgICAgIGlmKGFydGljbGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5pbm5lclRleHQgPSBvcHRpb25UZXh0XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICB9XG4gICAgIC8qIERlZmF1bHQgU3R5bGVzIEVuZCAqL1xufVxuXG5Ecm9wZG93blNlYXJjaEJveC5wcm90b3R5cGUuX3JlbmRlckZ1bGxCb2R5ID0gZnVuY3Rpb24oZWxlbSwgcHJvcHMsIHJlbmRlckV2ZW50KSB7XG4gICAgIC8vIEdVSURcbiAgICAgbGV0IGd1aWQgPSBwcm9wcy5ndWlkXG4gICAgIGlmKGVsZW0uZ2V0QXR0cmlidXRlKCdndWlkJykpXG4gICAgICAgICAgZ3VpZCA9IGVsZW0uZ2V0QXR0cmlidXRlKCdndWlkJylcblxuICAgICBsZXQgYm9keUVsZW0gPSBudWxsXG4gICAgICAgICAgbGV0IHNlYXJjaFdyYXBFbGVtZW50ID0gbnVsbFxuICAgICAgICAgICAgICAgbGV0IHNlYXJjaEVsZW1lbnQgPSBudWxsXG4gICAgICAgICAgbGV0IG9wdGlvbnNFbGVtZW50ID0gbnVsbFxuXG4gICAgIGlmIChyZW5kZXJFdmVudCkge1xuICAgICAgICAgIGJvZHlFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICBib2R5RWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5EU0JfQk9EWSlcbiAgICAgICAgICBib2R5RWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgYm9keUVsZW0uc2V0QXR0cmlidXRlKCdndWlkJywgZ3VpZClcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgIHNlYXJjaFdyYXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgIHNlYXJjaFdyYXBFbGVtZW50LmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRTQl9TRUFSQ0hfV1JBUCkgXG4gICAgICAgICAgICAgICBzZWFyY2hXcmFwRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2d1aWQnLCBndWlkKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lOUFVUJylcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaEVsZW1lbnQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdTZWFyY2guLi4nKVxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hFbGVtZW50LmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLkRTQl9TRUFSQ0gpXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaEVsZW1lbnQuc2V0QXR0cmlidXRlKCdndWlkJywgZ3VpZClcblxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hXcmFwRWxlbWVudC5hcHBlbmRDaGlsZChzZWFyY2hFbGVtZW50KVxuXG4gICAgICAgICAgICAgICBib2R5RWxlbS5hcHBlbmRDaGlsZChzZWFyY2hXcmFwRWxlbWVudClcblxuICAgICAgICAgICAgICAgb3B0aW9uc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgb3B0aW9uc0VsZW1lbnQuY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuRFNCX09QVElPTlMpXG4gICAgICAgICAgICAgICBvcHRpb25zRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2d1aWQnLCBndWlkKVxuXG4gICAgICAgICAgICAgICBib2R5RWxlbS5hcHBlbmRDaGlsZChvcHRpb25zRWxlbWVudClcblxuICAgICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoYm9keUVsZW0pXG4gICAgIH0gZWxzZSB7XG4gICAgICAgICAgYm9keUVsZW0gPSB0aGlzLl9nZXRCb2R5T2JqZWN0KGd1aWQpXG5cbiAgICAgICAgICAgICAgIHNlYXJjaFdyYXBFbGVtZW50ID0gdGhpcy5fZ2V0U2VhcmNoV3JhcE9iamVjdChndWlkKVxuXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaEVsZW1lbnQgPSB0aGlzLl9nZXRTZWFyY2hPYmplY3QoZ3VpZClcblxuICAgICAgICAgICAgICAgb3B0aW9uc0VsZW1lbnQgPSB0aGlzLl9nZXRPcHRpb25zT2JqZWN0KGd1aWQpXG4gICAgIH1cblxuICAgICBpZiAoIWJvZHlFbGVtIHx8ICFzZWFyY2hXcmFwRWxlbWVudCB8fCAhc2VhcmNoRWxlbWVudCB8fCAhb3B0aW9uc0VsZW1lbnQpXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgLy8gU3R5bGVzXG4gICAgIGlmKHByb3BzLmZvbnRTaXplKSBcbiAgICAgICAgICBzZWFyY2hFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gcHJvcHMuZm9udFNpemUgKyAncHgnXG4gICAgIGlmKHByb3BzLmZvbnRGYW1pbHkpXG4gICAgICAgICAgc2VhcmNoRWxlbWVudC5zdHlsZS5mb250RmFtaWx5ID0gcHJvcHMuZm9udEZhbWlseVxuXG4gICAgIC8vIE9wdGlvbnNcbiAgICAgdGhpcy5fcmVuZGVyT3B0aW9ucyhvcHRpb25zRWxlbWVudCwgcHJvcHMsIGd1aWQsIHJlbmRlckV2ZW50KVxufVxuXG5Ecm9wZG93blNlYXJjaEJveC5wcm90b3R5cGUuX3JlbmRlck9wdGlvbnMgPSBmdW5jdGlvbihlbGVtLCBwcm9wcywgZ3VpZCwgcmVuZGVyRXZlbnQpIHtcbiAgICAgbGV0IHByZXZpb3VzT3B0aW9ucyA9IFtdXG4gICAgIGxldCBvcHRpb25zID0gW11cblxuICAgICAvLyBDdXJyZW50IE9wdGlvbnNcbiAgICAgaWYocHJvcHMub3B0aW9ucykge1xuICAgICAgICAgIG9wdGlvbnMgPSBKU09OLnBhcnNlKHByb3BzLm9wdGlvbnMpXG4gICAgIH1cblxuICAgICAvLyBQcmV2aW91cyBPcHRpb25zXG4gICAgIGlmICh3aW5kb3cuX19DT01fUkVOREVSRUQuRFNCW2d1aWRdICYmIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EU0JbZ3VpZF0ub3B0aW9ucykge1xuICAgICAgICAgIHByZXZpb3VzT3B0aW9ucyA9IEpTT04ucGFyc2Uod2luZG93Ll9fQ09NX1JFTkRFUkVELkRTQltndWlkXS5vcHRpb25zKVxuICAgICB9XG5cbiAgICAgLy8gUmVhZCBvcHRpb24gdmFsdWVcbiAgICAgbGV0IG9wdGlvblZhbHVlID0gbnVsbFxuICAgICBpZiAocHJvcHMub3B0aW9uVmFsdWUpXG4gICAgICAgICAgb3B0aW9uVmFsdWUgPSBwcm9wcy5vcHRpb25WYWx1ZVxuICAgICBpZiAod2luZG93Ll9fQ09NX1JFTkRFUkVELkRTQltndWlkXSAmJiB3aW5kb3cuX19DT01fUkVOREVSRUQuRFNCW2d1aWRdLm9wdGlvblZhbHVlKVxuICAgICAgICAgIG9wdGlvblZhbHVlID0gd2luZG93Ll9fQ09NX1JFTkRFUkVELkRTQltndWlkXS5vcHRpb25WYWx1ZSArIFwiXCJcblxuICAgICAvLyBTYXZlIE9wdGlvbnNcbiAgICAgaWYgKCF3aW5kb3cuX19DT01fUkVOREVSRUQuRFNCW2d1aWRdKVxuICAgICAgICAgIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5EU0JbZ3VpZF0gPSB7fVxuICAgICB3aW5kb3cuX19DT01fUkVOREVSRUQuRFNCW2d1aWRdLm9wdGlvbnMgPSBwcm9wcy5vcHRpb25zXG4gICAgIFxuICAgICAvLyBTdHlsZVxuICAgICBsZXQgaGVpZ2h0ID0gNTBcbiAgICAgaWYocHJvcHMub3B0aW9uSGVpZ2h0ICYmICFpc05hTihwcm9wcy5vcHRpb25IZWlnaHQpKSB7XG4gICAgICAgICAgaGVpZ2h0ID0gcGFyc2VGbG9hdChwcm9wcy5vcHRpb25IZWlnaHQpXG4gICAgIH1cblxuICAgICBpZihvcHRpb25zLmxlbmd0aCA+IDUpIHtcbiAgICAgICAgICBlbGVtLnN0eWxlLm1heEhlaWdodCA9IChoZWlnaHQgKiA1KSArICdweCdcbiAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtLnN0eWxlLm1heEhlaWdodCA9ICdhdXRvJ1xuICAgICB9XG4gICAgIFxuICAgICBpZiAoIXRoaXMuX2VxdWFsT3B0aW9ucyhwcmV2aW91c09wdGlvbnMsIG9wdGlvbnMsIGd1aWQpKSB7IC8vIE9wdGlvbnMgQ2hhbmdlZCAtIE5lZWQgdG8gUmUtcmVuZGVyXG4gICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgIFxuICAgICAgICAgIGlmKG9wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gb3B0aW9uc1tpXVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyT3B0aW9uKGVsZW0sIHByb3BzLCBndWlkLCBvcHRpb24sIG9wdGlvblZhbHVlLCByZW5kZXJFdmVudClcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgRHJvcGRvd25TZWFyY2hCb3goKSIsImZ1bmN0aW9uIE5hdkJhcigpIHt9XG5cbk5hdkJhci5wcm90b3R5cGUuX2dldEFjdGl2ZVJvdXRlSXRlbSA9IGZ1bmN0aW9uKGd1aWQpIHtcbiAgICAgbGV0IHF1ZXJ5ID0gJy4nICsgd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLk5BVkJBUl9JVEVNX1dJVEhfU1VCICsgJy5zZWxlY3RlZFtndWlkPVwiJyArIGd1aWQgKydcIl0nXG4gICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IocXVlcnkpIFxufVxuXG5OYXZCYXIucHJvdG90eXBlLl9nZXRNYWluT2JqZWN0ID0gZnVuY3Rpb24oZ3VpZCkge1xuICAgICBsZXQgcXVlcnkgPSAnLicgKyB3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuTkFWQkFSICsgJ1tndWlkPVwiJyArIGd1aWQgKydcIl0nXG4gICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IocXVlcnkpXG59XG5cbk5hdkJhci5wcm90b3R5cGUuX29wZW5CeUdVSUQgPSBmdW5jdGlvbihndWlkLCBwYXJlbnRFbGVtKSB7XG4gICAgIHBhcmVudEVsZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxuICAgICB3aW5kb3cuX19DT01fQUNUSVZFLk5BVkJBUiA9IGd1aWRcbn1cblxuTmF2QmFyLnByb3RvdHlwZS5fY2xvc2VCeUdVSUQgPSBmdW5jdGlvbihndWlkKSB7XG4gICAgIGxldCBvYmplY3QgPSB0aGlzLl9nZXRBY3RpdmVSb3V0ZUl0ZW0oZ3VpZClcbiAgICAgaWYob2JqZWN0KVxuICAgICAgICAgIG9iamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG5cbiAgICAgd2luZG93Ll9fQ09NX0FDVElWRS5OQVZCQVIgPSAnJ1xufVxuXG5OYXZCYXIucHJvdG90eXBlLl9zZWxlY3RSb3V0ZUJ5R1VJRCA9IGZ1bmN0aW9uKGd1aWQsIGVsZW0pIHtcbiAgICAgbGV0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdyb3V0ZS1rZXknKVxuICAgICBsZXQgdGV4dCA9IGVsZW0uZ2V0QXR0cmlidXRlKCdyb3V0ZS10ZXh0JylcblxuICAgICBsZXQgb2JqZWN0ID0gdGhpcy5fZ2V0TWFpbk9iamVjdChndWlkKVxuICAgICBsZXQgb2JqZWN0SUQgPSBvYmplY3QuaWRcbiAgICAgXG4gICAgIGlmKCFrZXkgfHwgIXRleHQgfHwgIW9iamVjdElEKVxuICAgICAgICAgIHJldHVyblxuICAgICBcbiAgICAgbGV0IHZpZXcgPSB3aW5kb3cuX19WSUVXU1tvYmplY3RJRF1cbiAgICAgXG4gICAgIGlmKCF2aWV3IHx8ICF2aWV3LnByb3BzKVxuICAgICAgICAgIHJldHVyblxuXG4gICAgIC8qIFVwZGF0ZSBVSSAqL1xuICAgICBpZiAod2luZG93Ll9fQ09NX1JFTkRFUkVELk5BVkJBUltndWlkXSAmJiB3aW5kb3cuX19DT01fUkVOREVSRUQuTkFWQkFSW2d1aWRdLmFjdGl2ZUVsZW0pXG4gICAgICAgICAgd2luZG93Ll9fQ09NX1JFTkRFUkVELk5BVkJBUltndWlkXS5hY3RpdmVFbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcblxuICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcblxuICAgICBpZiAoIXdpbmRvdy5fX0NPTV9SRU5ERVJFRC5OQVZCQVJbZ3VpZF0pXG4gICAgICAgICAgd2luZG93Ll9fQ09NX1JFTkRFUkVELk5BVkJBUltndWlkXSA9IHt9XG5cbiAgICAgd2luZG93Ll9fQ09NX1JFTkRFUkVELk5BVkJBUltndWlkXS5hY3RpdmVFbGVtID0gZWxlbVxuICAgICB3aW5kb3cuX19DT01fUkVOREVSRUQuTkFWQkFSW2d1aWRdLmRlZmF1bHRWYWx1ZSA9IGtleVxuICAgICBcbiAgICAgLyogRXZlbnQgVHJpZ2dlciAqL1xuICAgICBpZiAodmlldy5wcm9wcy5vblNlbGVjdCAmJiB0eXBlb2Ygdmlldy5wcm9wcy5vblNlbGVjdCA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICB2aWV3LnByb3BzLm9uU2VsZWN0KGtleSlcbiAgICAgfVxufVxuXG5OYXZCYXIucHJvdG90eXBlLl9yZW5kZXJSb3V0ZSA9IGZ1bmN0aW9uKHBhcmVudEVsZW0sIHByb3BzLCBndWlkLCByb3V0ZSwgcmVuZGVyRXZlbnQpIHtcbiAgICAgaWYoIXJvdXRlLmtleSB8fCAhcm91dGUudGV4dClcbiAgICAgICAgICByZXR1cm5cblxuICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xJJylcbiAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5OQVZCQVJfSVRFTSlcbiAgICAgXG4gICAgIGVsZW0uc2V0QXR0cmlidXRlKCdyb3V0ZS1rZXknLCByb3V0ZS5rZXkpXG4gICAgIGVsZW0uc2V0QXR0cmlidXRlKCdyb3V0ZS10ZXh0Jywgcm91dGUudGV4dClcbiAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2d1aWQnLCBndWlkKVxuXG4gICAgIGxldCBkZWZhdWx0VmFsdWUgPSBudWxsXG4gICAgIGlmIChwcm9wcy5kZWZhdWx0VmFsdWUpXG4gICAgICAgICAgZGVmYXVsdFZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlXG4gICAgIGlmICh3aW5kb3cuX19DT01fUkVOREVSRUQuTkFWQkFSW2d1aWRdICYmIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5OQVZCQVJbZ3VpZF0uZGVmYXVsdFZhbHVlKVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5OQVZCQVJbZ3VpZF0uZGVmYXVsdFZhbHVlICsgXCJcIlxuXG4gICAgIGlmKGRlZmF1bHRWYWx1ZSAmJiBkZWZhdWx0VmFsdWUgPT0gcm91dGUua2V5KSB7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG4gICAgICAgICAgXG4gICAgICAgICAgLy8gU2F2ZVxuICAgICAgICAgIGlmICghd2luZG93Ll9fQ09NX1JFTkRFUkVELk5BVkJBUltndWlkXSlcbiAgICAgICAgICAgICAgIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5OQVZCQVJbZ3VpZF0gPSB7fVxuXG4gICAgICAgICAgd2luZG93Ll9fQ09NX1JFTkRFUkVELk5BVkJBUltndWlkXS5hY3RpdmVFbGVtID0gZWxlbVxuICAgICAgICAgIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5OQVZCQVJbZ3VpZF0uZGVmYXVsdFZhbHVlID0gcm91dGUua2V5XG4gICAgIH0gZWxzZVxuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuXG4gICAgIGxldCBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpXG4gICAgIGlmKHByb3BzLmhlaWdodCAmJiAhaXNOYU4ocHJvcHMuaGVpZ2h0KSlcbiAgICAgICAgICBhcnRpY2xlLnN0eWxlLmxpbmVIZWlnaHQgPSBwcm9wcy5oZWlnaHQgKyAncHgnXG5cbiAgICAgZWxlbS5hcHBlbmRDaGlsZChhcnRpY2xlKVxuXG4gICAgIGlmKHJvdXRlLnN1YnJvdXRlcyAmJiByb3V0ZS5zdWJyb3V0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGFydGljbGUuaW5uZXJIVE1MID0gcm91dGUudGV4dCArICcgJiM5NjYyOydcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLk5BVkJBUl9JVEVNX1dJVEhfU1VCKVxuXG4gICAgICAgICAgbGV0IHZpcnR1YWxFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnVUwnKVxuICAgICAgICAgIHZpcnR1YWxFbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLk5BVkJBUl9TVUIpXG5cbiAgICAgICAgICBpZihyb3V0ZS5uYXZEaXJlY3Rpb24gJiYgcm91dGUubmF2RGlyZWN0aW9uID09ICdmcm9tX3JpZ2h0JykgXG4gICAgICAgICAgICAgICB2aXJ0dWFsRWxlbS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5OQVZCQVJfU1VCX1JJR0hUKVxuXG4gICAgICAgICAgdmlydHVhbEVsZW0uc2V0QXR0cmlidXRlKCdndWlkJywgZ3VpZCkgICAgICAgICAgXG5cbiAgICAgICAgICBpZihwcm9wcy50cmFuc2xhdGlvblpfbmF2KVxuICAgICAgICAgICAgICAgdmlydHVhbEVsZW0uc3R5bGUuekluZGV4ID0gcHJvcHMudHJhbnNsYXRpb25aX25hdlxuXG4gICAgICAgICAgZWxlbS5hcHBlbmRDaGlsZCh2aXJ0dWFsRWxlbSlcblxuICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByb3V0ZS5zdWJyb3V0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgIGxldCBzdWJyb3V0ZSA9IHJvdXRlLnN1YnJvdXRlc1tpXVxuXG4gICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJTdWJSb3V0ZSh2aXJ0dWFsRWxlbSwgcHJvcHMsIGd1aWQsIHN1YnJvdXRlLCByZW5kZXJFdmVudClcbiAgICAgICAgICB9XG4gICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXJ0aWNsZS5pbm5lckhUTUwgPSByb3V0ZS50ZXh0XG4gICAgIH1cblxuICAgICBwYXJlbnRFbGVtLmFwcGVuZENoaWxkKGVsZW0pXG59XG5cbk5hdkJhci5wcm90b3R5cGUuX3JlbmRlclN1YlJvdXRlID0gZnVuY3Rpb24ocGFyZW50RWxlbSwgcHJvcHMsIGd1aWQsIHJvdXRlLCByZW5kZXJFdmVudCkge1xuICAgICBpZighcm91dGUua2V5IHx8ICFyb3V0ZS50ZXh0KVxuICAgICAgICAgIHJldHVyblxuXG4gICAgIGxldCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTEknKVxuICAgICBlbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLk5BVkJBUl9TVUJfSVRFTSlcblxuICAgICBlbGVtLnNldEF0dHJpYnV0ZSgncm91dGUta2V5Jywgcm91dGUua2V5KVxuICAgICBlbGVtLnNldEF0dHJpYnV0ZSgncm91dGUtdGV4dCcsIHJvdXRlLnRleHQpXG4gICAgIGVsZW0uc2V0QXR0cmlidXRlKCdndWlkJywgZ3VpZClcblxuICAgICBsZXQgZGVmYXVsdFZhbHVlID0gbnVsbFxuICAgICBpZiAocHJvcHMuZGVmYXVsdFZhbHVlKVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IHByb3BzLmRlZmF1bHRWYWx1ZVxuICAgICBpZiAod2luZG93Ll9fQ09NX1JFTkRFUkVELk5BVkJBUltndWlkXSAmJiB3aW5kb3cuX19DT01fUkVOREVSRUQuTkFWQkFSW2d1aWRdLmRlZmF1bHRWYWx1ZSlcbiAgICAgICAgICBkZWZhdWx0VmFsdWUgPSB3aW5kb3cuX19DT01fUkVOREVSRUQuTkFWQkFSW2d1aWRdLmRlZmF1bHRWYWx1ZSArIFwiXCJcblxuICAgICBpZihkZWZhdWx0VmFsdWUgJiYgZGVmYXVsdFZhbHVlID09IHJvdXRlLmtleSkge1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxuICAgICAgICAgIFxuICAgICAgICAgIC8vIFNhdmVcbiAgICAgICAgICBpZiAoIXdpbmRvdy5fX0NPTV9SRU5ERVJFRC5OQVZCQVJbZ3VpZF0pXG4gICAgICAgICAgICAgICB3aW5kb3cuX19DT01fUkVOREVSRUQuTkFWQkFSW2d1aWRdID0ge31cblxuICAgICAgICAgIHdpbmRvdy5fX0NPTV9SRU5ERVJFRC5OQVZCQVJbZ3VpZF0uYWN0aXZlRWxlbSA9IGVsZW1cbiAgICAgICAgICB3aW5kb3cuX19DT01fUkVOREVSRUQuTkFWQkFSW2d1aWRdLmRlZmF1bHRWYWx1ZSA9IHJvdXRlLmtleVxuICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuICAgICB9XG5cbiAgICAgbGV0IGFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJykgXG4gICAgIGFydGljbGUuaW5uZXJIVE1MID0gcm91dGUudGV4dFxuXG4gICAgIGVsZW0uYXBwZW5kQ2hpbGQoYXJ0aWNsZSlcbiAgICAgcGFyZW50RWxlbS5hcHBlbmRDaGlsZChlbGVtKVxufVxuXG5OYXZCYXIucHJvdG90eXBlLl9yZW5kZXJNYWluID0gZnVuY3Rpb24oZWxlbSwgcHJvcHMsIHJlbmRlckV2ZW50KSB7XG4gICAgIGlmICghcmVuZGVyRXZlbnQpXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgLy8gR1VJRFxuICAgICBsZXQgZ3VpZCA9IHByb3BzLmd1aWRcbiAgICAgaWYoZWxlbS5nZXRBdHRyaWJ1dGUoJ2d1aWQnKSlcbiAgICAgICAgICBndWlkID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2d1aWQnKVxuXG4gICAgIC8vIFJPVVRFU1xuICAgICBsZXQgcm91dGVzID0gW11cbiAgICAgaWYocHJvcHMgJiYgcHJvcHMucm91dGVzKVxuICAgICAgICAgIHJvdXRlcyA9IEpTT04ucGFyc2UocHJvcHMucm91dGVzKSAgICAgICAgXG4gICAgIFxuICAgICBlbGVtLmlubmVySFRNTCA9ICcnXG4gICAgIGxldCB2aXJ0dWFsRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1VMJylcbiAgICAgZWxlbS5hcHBlbmRDaGlsZCh2aXJ0dWFsRWxlbSlcblxuICAgICBpZihyb3V0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByb3V0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgIGxldCByb3V0ZSA9IHJvdXRlc1tpXVxuXG4gICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJSb3V0ZSh2aXJ0dWFsRWxlbSwgcHJvcHMsIGd1aWQsIHJvdXRlLCByZW5kZXJFdmVudClcbiAgICAgICAgICB9XG4gICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgTmF2QmFyKCkiLCJmdW5jdGlvbiBTd2l0Y2hCdXR0b24oKSB7fVxuXG5Td2l0Y2hCdXR0b24ucHJvdG90eXBlLl9yZW5kZXJNYWluID0gZnVuY3Rpb24oZWxlbSwgcHJvcHMsIHJlbmRlckV2ZW50KSB7XG4gICAgIGlmIChyZW5kZXJFdmVudCkge1xuICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gJydcblxuICAgICAgICAgIGxldCBndWlkID0gcHJvcHMuZ3VpZCBcbiAgICAgICAgICBpZihlbGVtLmdldEF0dHJpYnV0ZSgnZ3VpZCcpKVxuICAgICAgICAgICAgICAgZ3VpZCA9IGVsZW0uZ2V0QXR0cmlidXRlKCdndWlkJylcblxuICAgICAgICAgIHRoaXMuX3JlbmRlclN0eWxlKGVsZW0sIHByb3BzLCBndWlkKVxuXG4gICAgICAgICAgbGV0IHZpcnR1YWxFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTEFCRUwnKVxuICAgICAgICAgIHZpcnR1YWxFbGVtLmNsYXNzTGlzdC5hZGQod2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLlNXSVRDSF9CT0RZKVxuICAgICAgICAgIHZpcnR1YWxFbGVtLnNldEF0dHJpYnV0ZSgnZ3VpZCcsIGd1aWQpXG4gICAgICAgICAgXG4gICAgICAgICAgZWxlbS5hcHBlbmRDaGlsZCh2aXJ0dWFsRWxlbSlcblxuICAgICAgICAgIHRoaXMuX3JlbmRlclNsaWRlcih2aXJ0dWFsRWxlbSwgcHJvcHMsIGd1aWQsIHJlbmRlckV2ZW50KVxuICAgICB9XG59XG5cblN3aXRjaEJ1dHRvbi5wcm90b3R5cGUuX3JlbmRlclNsaWRlciA9IGZ1bmN0aW9uKHBhcmVudEVsZW0sIHByb3BzLCBndWlkLCByZW5kZXJFdmVudCkge1xuICAgICBsZXQgc2VsZWN0ZWREZWZhdWx0ID0gZmFsc2VcbiAgICAgaWYocHJvcHMuaGFzT3duUHJvcGVydHkoJ3NlbGVjdGVkRGVmYXVsdCcpKSBcbiAgICAgICAgICBzZWxlY3RlZERlZmF1bHQgPSBwcm9wcy5zZWxlY3RlZERlZmF1bHRcblxuICAgICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTlBVVCcpXG4gICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgIFxuICAgICBpZihzZWxlY3RlZERlZmF1bHQpIHtcbiAgICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpXG4gICAgIH1cbiAgICAgXG4gICAgIGxldCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnU1BBTicpXG4gICAgIGVsZW0uY2xhc3NMaXN0LmFkZCh3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuU1dJVENIX1NMSURFUilcblxuICAgICBwYXJlbnRFbGVtLmFwcGVuZENoaWxkKGNoZWNrYm94KVxuICAgICBwYXJlbnRFbGVtLmFwcGVuZENoaWxkKGVsZW0pXG5cbiAgICAgLy8gRXZlbnRzXG4gICAgIGlmIChyZW5kZXJFdmVudCAmJiBwcm9wcy5vblN3aXRjaCAmJiB0eXBlb2YgcHJvcHMub25Td2l0Y2ggPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICBwcm9wcy5vblN3aXRjaCh0aGlzLmNoZWNrZWQpXG4gICAgICAgICAgfSlcbiAgICAgfVxufVxuXG5Td2l0Y2hCdXR0b24ucHJvdG90eXBlLl9yZW5kZXJTdHlsZSA9IGZ1bmN0aW9uKHBhcmVudEVsZW0sIHByb3BzLCBndWlkKSB7XG4gICAgIGxldCBnYXAgPSA0XG4gICAgIGxldCBwYXJlbnRXaWR0aCA9IHBhcmVudEVsZW0ub2Zmc2V0V2lkdGhcbiAgICAgbGV0IHBhcmVudEhlaWdodCA9IHBhcmVudEVsZW0ub2Zmc2V0SGVpZ2h0XG5cbiAgICAgbGV0IHNpemUgPSBNYXRoLm1pbihwYXJlbnRXaWR0aCwgcGFyZW50SGVpZ2h0KVxuICAgICBsZXQgYWN0dWFsU2l6ZSA9IHNpemUgLSAyICogZ2FwXG4gICAgIGlmIChhY3R1YWxTaXplIDwgMCkge1xuICAgICAgICAgIGFjdHVhbFNpemUgPSBzaXplXG4gICAgICAgICAgZ2FwID0gMFxuICAgICB9XG5cbiAgICAgbGV0IHR4ID0gcGFyZW50V2lkdGggLSAyICogZ2FwIC0gYWN0dWFsU2l6ZVxuICAgICBpZiAodHggPCAwKVxuICAgICAgICAgIHR4ID0gMFxuXG4gICAgIGxldCBzdHlsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gICAgIHN0eWxlRWxlbS50eXBlID0gJ3RleHQvY3NzJ1xuXG4gICAgIGxldCBjc3MgPSAnJ1xuICAgICBjc3MgKz0gJy4nICsgd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLlNXSVRDSF9CT0RZICsgJ1tndWlkPVwiJyArIGd1aWQgKyAnXCJdIC4nICsgd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLlNXSVRDSF9TTElERVIgKyAne2JvcmRlci1yYWRpdXM6ICcgKyBzaXplICsgJ3B4fSAnXG4gICAgIGNzcyArPSAnLicgKyB3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuU1dJVENIX0JPRFkgKyAnW2d1aWQ9XCInICsgZ3VpZCArICdcIl0gLicgKyB3aW5kb3cuX19DT01fQ0xBU1NfR1JPVVAuU1dJVENIX1NMSURFUiArICc6YmVmb3JlIHtib3JkZXItcmFkaXVzOiA1MCU7IGNvbnRlbnQ6IFwiXCI7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6ICcgKyBhY3R1YWxTaXplICsgJ3B4OyBoZWlnaHQ6ICcgKyBhY3R1YWxTaXplICsgJ3B4OyBsZWZ0OiAnICsgZ2FwICsgJ3B4OyBib3R0b206ICcgKyBnYXAgKyAncHg7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAtd2Via2l0LXRyYW5zaXRpb246IC40czsgdHJhbnNpdGlvbjogLjRzO30gJ1xuICAgICBjc3MgKz0gJy4nICsgd2luZG93Ll9fQ09NX0NMQVNTX0dST1VQLlNXSVRDSF9CT0RZICsgJ1tndWlkPVwiJyArIGd1aWQgKyAnXCJdIGlucHV0OmNoZWNrZWQgKyAuJyArIHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUC5TV0lUQ0hfU0xJREVSICsgJzpiZWZvcmUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgnICsgdHggKyAncHgpO30gJ1xuXG4gICAgIHN0eWxlRWxlbS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgU3dpdGNoQnV0dG9uKCkiLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbi8qXG4gIFZpZXdDb250ZXh0IG9mIHRoZSBQYXJlbnQuZlxuICBPYmogaG9sZHMgdGhlIGF2YWlsYWJsZSB3aWR0aCBhbmQgaGVpZ2h0IG9mIGl0J3MgcGFyZW50IGNvbnRhaW5lclxuICBhbmQgeCAmIHkgb2Zmc2V0IGZvciBpdCdzIGNoaWxkcmVuXG4qL1xuZnVuY3Rpb24gdmlld0N0eE9iaih2aWV3KSB7XG4gIGxldCBwcm9wcyA9IHZpZXcucHJvcHM7XG4gIGxldCBvYmogPSB7XG4gICAgdzogcHJvcHMudyAqIDEsXG4gICAgaDogcHJvcHMuaCAqIDEsXG4gICAgd2lkdGg6IHByb3BzLncgKiAxLFxuICB9O1xuXG4gIHZpZXcuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgY2hpbGQucHJvcHMudyA9IGNoaWxkLnByb3BzLndpZHRoO1xuICAgIGNoaWxkLnByb3BzLmggPSBjaGlsZC5wcm9wcy5oZWlnaHQ7XG4gIH0pO1xuXG4gIHJldHVybiBvYmo7XG59XG5cbi8qXG4gIFJldHVybnMgdHJ1ZSBpZiBjb250YWluZXIgaGFzIGEgY2hpbGQgd2l0aCBtYXRjaF9wYXJlbnQgZm9yIGFcbiAgZ2l2ZW4gZGltZW5zaW9uICh3aWR0aCBvciBoZWlnaHQpXG4qL1xuZnVuY3Rpb24gaGFzTWF0Y2hQYXJlbnRDaGlsZChjaGlsZHMsIGRpbWVuKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGNoaWxkUHJvcCA9IGNoaWxkc1tpXS5wcm9wcztcbiAgICBcbiAgICBpZiAoY2hpbGRQcm9wW2RpbWVuXSAmJiAoY2hpbGRQcm9wW2RpbWVuXSA9PSBcIm1hdGNoX3BhcmVudFwiKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLypcbiAgUmV0dXJucyB0cnVlIGlmIGNvbnRhaW5lciBoYXMgd2VpZ2h0ZWQgY2hpbGRcbiovXG5mdW5jdGlvbiBoYXNXZWlnaHRDaGlsZCh0eXBlLCBjaGlsZHMpIHtcbiAgaWYgKHR5cGUgIT0gXCJsaW5lYXJMYXlvdXRcIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGNoaWxkID0gY2hpbGRzW2ldLnByb3BzO1xuICAgIFxuICAgIGlmIChjaGlsZC53ZWlnaHQgJiYgcGFyc2VJbnQoY2hpbGQud2VpZ2h0KSA+IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVSZWxhdGl2ZUxheW91dCh2aWV3KSB7XG4gIGxldCB2aWV3Q3R4ID0gdmlld0N0eE9iaih2aWV3KTtcbiAgbGV0IGNoaWxkcmVuID0gdmlldy5jaGlsZHJlbjtcblxuICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICBsZXQgcHJvcHMgPSBjaGlsZC5wcm9wcztcblxuICAgIHByb3BzLmFic29sdXRlID0gdHJ1ZTtcbiAgICBwcm9wcy5mcm9tVG9wID0gMDtcbiAgICBwcm9wcy5mcm9tQm90dG9tID0gJ2F1dG8nO1xuICAgIHByb3BzLmZyb21MZWZ0ID0gMDtcbiAgICBwcm9wcy5mcm9tUmlnaHQgPSAnYXV0byc7XG5cbiAgICBpZihwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnYWxpZ25QYXJlbnRMZWZ0JykgJiYgcHJvcHMuYWxpZ25QYXJlbnRMZWZ0KXtcbiAgICAgIHByb3BzLmZyb21MZWZ0ID0gMDtcbiAgICAgIHByb3BzLmZyb21SaWdodCA9ICdhdXRvJztcbiAgICB9XG5cbiAgICBpZihwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnYWxpZ25QYXJlbnRCb3R0b20nKSAmJiBwcm9wcy5hbGlnblBhcmVudEJvdHRvbSl7XG4gICAgICBwcm9wcy5mcm9tVG9wID0gJ2F1dG8nO1xuICAgICAgcHJvcHMuZnJvbUJvdHRvbSA9IDA7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZUxpbmVhcmxheW91dCh2aWV3KSB7XG4gIGxldCB2aWV3Q3R4ID0gdmlld0N0eE9iaih2aWV3KTtcbiAgbGV0IHBhcmVudFByb3BzID0gdmlldy5wcm9wcztcbiAgbGV0IGNoaWxkcmVuID0gdmlldy5jaGlsZHJlbjtcbiAgbGV0IGlzSG9yaXpvbnRhbCA9IChwYXJlbnRQcm9wcy5vcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSA/IGZhbHNlIDogdHJ1ZTtcbiAgXG4gIGxldCBhY3RpdmVEaW1lbiA9IChpc0hvcml6b250YWwpID8gXCJ3XCIgOiBcImhcIjtcbiAgbGV0IHBhc3NpdmVEaW1lbiA9IChpc0hvcml6b250YWwpID8gXCJoXCIgOiBcIndcIjtcblxuICBsZXQgaGFzV2VpZ2h0ID0gaGFzV2VpZ2h0Q2hpbGQodmlldy50eXBlLCBjaGlsZHJlbik7XG4gIGxldCBoYXNNYXRjaFBhcmVudCA9IGhhc01hdGNoUGFyZW50Q2hpbGQoY2hpbGRyZW4sIGFjdGl2ZURpbWVuKTtcbiAgXG4gIGlmIChoYXNXZWlnaHQgJiYgaGFzTWF0Y2hQYXJlbnQpIHtcbiAgICAvLyBXZSBjYW4ndCB1c2UgYm90aCBhdCB0aGUgc2FtZSB0aW1lXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyogSW5pdGlhbGl6ZSAqL1xuICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICBsZXQgcHJvcHMgPSBjaGlsZC5wcm9wcztcblxuICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShcImFjdGl2ZURpbWVuXCIpKVxuICAgICAgZGVsZXRlIHByb3BzW1wiYWN0aXZlRGltZW5cIl07XG4gICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KFwiYWN0aXZlV2VpZ2h0XCIpKVxuICAgICAgZGVsZXRlIHByb3BzW1wiYWN0aXZlV2VpZ2h0XCJdO1xuICB9KTtcbiAgLyogSW5pdGlhbGl6ZSBFbmQgKi9cbiAgXG4gIGlmKGhhc01hdGNoUGFyZW50IHx8IGhhc1dlaWdodCl7XG4gICAgbGV0IGZpcnN0ID0gdHJ1ZTtcbiAgICAvKiBJdGVyYXRlIENoaWxkICovXG4gICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICBsZXQgcHJvcHMgPSBjaGlsZC5wcm9wcztcblxuICAgICAgaWYocHJvcHMuaGFzT3duUHJvcGVydHkoYWN0aXZlRGltZW4pICYmIHByb3BzW2FjdGl2ZURpbWVuXSA9PSAnbWF0Y2hfcGFyZW50Jyl7XG4gICAgICAgIHByb3BzWydhY3RpdmVEaW1lbiddID0gYWN0aXZlRGltZW47XG4gICAgICAgIFxuICAgICAgICBpZihmaXJzdCl7XG4gICAgICAgICAgcHJvcHNbJ2FjdGl2ZVdlaWdodCddID0gMTtcbiAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBwcm9wc1snYWN0aXZlV2VpZ2h0J10gPSAwO1xuICAgICAgICB9XG4gICAgICB9ZWxzZXtcbiAgICAgICAgaWYocHJvcHMuaGFzT3duUHJvcGVydHkoJ3dlaWdodCcpICYmICFpc05hTihwcm9wc1snd2VpZ2h0J10pKXtcbiAgICAgICAgICBsZXQgd2VpZ2h0ID0gcGFyc2VGbG9hdChwcm9wc1snd2VpZ2h0J10pO1xuXG4gICAgICAgICAgaWYod2VpZ2h0ID4gMCl7XG4gICAgICAgICAgICBwcm9wc1snYWN0aXZlRGltZW4nXSA9IGFjdGl2ZURpbWVuO1xuICAgICAgICAgICAgcHJvcHNbJ2FjdGl2ZVdlaWdodCddID0gd2VpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIC8qIEl0ZXJhdGUgQ2hpbGQgRW5kICovXG4gIH1cbn0gLy8gRW5kIENvbXB1dGUgTGluZWFyTGF5b3V0XG5cbmZ1bmN0aW9uIGNvbXB1dGVDaGlsZERpbWVucyh2aWV3KSB7XG4gIGlmICh2aWV3LnR5cGUgPT0gXCJsaW5lYXJMYXlvdXRcIikge1xuICAgIGNvbXB1dGVMaW5lYXJsYXlvdXQodmlldyk7XG4gIH0gZWxzZSBpZiAodmlldy50eXBlID09IFwic2Nyb2xsVmlld1wiIHx8IHZpZXcudHlwZSA9PSBcImxpc3RWaWV3XCIpIHtcbiAgICB2aWV3LnByb3BzLm9yaWVudGF0aW9uID0gXCJ2ZXJ0aWNhbFwiO1xuICAgIGNvbXB1dGVMaW5lYXJsYXlvdXQodmlldyk7XG4gIH0gZWxzZSBpZiAodmlldy50eXBlID09IFwiaG9yaXpvbnRhbFNjcm9sbFZpZXdcIikge1xuICAgIHZpZXcucHJvcHMub3JpZW50YXRpb24gPSBcImhvcml6b250YWxcIjtcbiAgICBjb21wdXRlTGluZWFybGF5b3V0KHZpZXcpO1xuICB9IGVsc2UgaWYgKHZpZXcudHlwZSA9PSBcInJlbGF0aXZlTGF5b3V0XCIpIHtcbiAgICBjb21wdXRlUmVsYXRpdmVMYXlvdXQodmlldyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gRG8gTm90aGluZ1xuICB9XG5cbiAgcmV0dXJuIHZpZXc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjb21wdXRlQ2hpbGREaW1lbnNcbn07IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5mdW5jdGlvbiBydW4oKSB7XG4gIGlmICh3aW5kb3cuX19PUyA9PT0gXCJJT1NcIikge1xuICAgIHJldHVybiByZXF1aXJlKFwiLi9pb3NcIilcbiAgfSBlbHNlIGlmICh3aW5kb3cuX19PUyA9PT0gXCJXRUJcIikge1xuICAgIHJldHVybiByZXF1aXJlKFwiLi93ZWJcIilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVxdWlyZShcIi4vYW5kcm9pZFwiKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcnVuKCk7IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG52YXIgcGFyc2VQYXJhbXMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3dlYicpLnBhcnNlUGFyYW1zO1xuXG5BcnJheS5wcm90b3R5cGUuZmxhdHRlbiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXIpIHtcbiAgICB2YXIgbW9yZSA9IFtdLmNvbmNhdChjdXIpLnNvbWUoQXJyYXkuaXNBcnJheSk7XG4gICAgcmV0dXJuIHByZXYuY29uY2F0KG1vcmUgPyBjdXIuZmxhdHRlbigpIDogY3VyKTtcbiAgfSwgW10pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodHlwZSwgcHJvcHMsIC4uLmNoaWxkcmVuKSB7XG4gIGNoaWxkcmVuID0gY2hpbGRyZW4uZmxhdHRlbigpO1xuICBcbiAgaWYgKCFwcm9wcylcbiAgICBwcm9wcyA9IHt9O1xuICBcbiAgaWYgKHR5cGVvZiB0eXBlID09PSBcInN0cmluZ1wiKSB7XG4gICAgcHJvcHMgPSBwYXJzZVBhcmFtcyh0eXBlLCBwcm9wcyk7XG4gICAgXG4gICAgbGV0IG9iaiA9IHtcbiAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICB9O1xuXG4gICAgd2luZG93Ll9fVklFV1NbcHJvcHMuaWRdID0gb2JqO1xuICAgIHdpbmRvdy5fX1ZJRVdfRElNRU5TSU9OU1twcm9wcy5pZF0gPSBudWxsO1xuICAgIHJldHVybiBvYmo7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyB0eXBlKHByb3BzLCBjaGlsZHJlbik7XG4gIH1cbn0iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBoYW5kbGUgOiAodWksIGNhbGxiYWNrKSA9PiB7XG4gICAgaWYgKCF1aSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZih1aS5yZW5kZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgQW5kcm9pZCA9PT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQW5kcm9pZCBpcyB1bmRlZmluZWRcIik7XG5cbiAgICAgIGlmICh3aW5kb3cuX19PUyAhPSBcIkFORFJPSURcIilcbiAgICAgICAgcmV0dXJuIEFuZHJvaWQuUmVuZGVyKHVpLnJlbmRlciwgbnVsbCk7XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYodHlwZW9mIEFuZHJvaWQuZ2V0TmV3SUQgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIEFuZHJvaWQuUmVuZGVyKEpTT04uc3RyaW5naWZ5KHVpLnJlbmRlciksIG51bGwsIFwiZmFsc2VcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIEFuZHJvaWQuUmVuZGVyKEpTT04uc3RyaW5naWZ5KHVpLnJlbmRlciksIG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYodWkucnVuSW5VSSkge1xuICAgICAgQW5kcm9pZC5ydW5JblVJKHVpLnJ1bkluVUksIG51bGwpO1xuICAgIH1cbiAgICBpZih1aS5hZGRWaWV3VG9QYXJlbnQpIHtcbiAgICAgIEFuZHJvaWQuYWRkVmlld1RvUGFyZW50KHVpLmFkZFZpZXdUb1BhcmVudC5wYXJlbnRJZCwgSlNPTi5zdHJpbmdpZnkodWkuYWRkVmlld1RvUGFyZW50LmpzeCksIHVpLmFkZFZpZXdUb1BhcmVudC5pbmRleCwgbnVsbCk7XG4gICAgfVxuICB9XG59IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG4vLyBGb2xsb3dpbmcgZnVuY3Rpb25zIGFyZSB1c2VkIGJ5IFdFQiBhbmQgSU9TIFJlbmRlclxuZnVuY3Rpb24gY2FjaGVEaW1lbih2aWV3KSB7XG4gIGxldCBwcm9wcyA9IHZpZXcucHJvcHM7XG4gIGxldCBkaW1lbiA9IHtcbiAgICB3OiBwcm9wcy53LFxuICAgIGg6IHByb3BzLmgsXG4gICAgeDogcHJvcHMueCxcbiAgICB5OiBwcm9wcy55LFxuICAgIGdyYXZpdHk6IHByb3BzLmdyYXZpdHksXG4gICAgcGFkZGluZzogcHJvcHMucGFkZGluZyxcbiAgICBvcmllbnRhdGlvbjogcHJvcHMub3JpZW50YXRpb24sXG4gICAgc3Ryb2tlOiBwcm9wcy5zdHJva2UgPyBwcm9wcy5zdHJva2Uuc3BsaXQoXCIsXCIpWzBdICogMSA6IDAsXG4gIH1cbiAgd2luZG93Ll9fVklFV19ESU1FTlNJT05TW3Byb3BzLmlkXSA9IGRpbWVuO1xufVxuXG5mdW5jdGlvbiBzaG91bGRNb3ZlKHZpZXcpIHtcbiAgbGV0IHByb3BzID0gdmlldy5wcm9wcztcbiAgbGV0IGRpbWVuID0ge1xuICAgIHc6IHByb3BzLncsXG4gICAgaDogcHJvcHMuaCxcbiAgICB4OiBwcm9wcy54LFxuICAgIHk6IHByb3BzLnlcbiAgfTtcbiAgbGV0IGNhY2hlZERpbWVuID0gd2luZG93Ll9fVklFV19ESU1FTlNJT05TW3Byb3BzLmlkXTtcbiAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcbiAgaWYgKCFjYWNoZWREaW1lbilcbiAgICByZXR1cm4gZGltZW47XG4gIGZvciAobGV0IGtleSBpbiBkaW1lbikge1xuICAgIGlmIChjYWNoZWREaW1lbltrZXldICE9IGRpbWVuW2tleV0pIHtcbiAgICAgIGRpbWVuLmlkID0gcHJvcHMuaWQ7XG4gICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgaWYgKGNoYW5nZWQpXG4gICAgcmV0dXJuIGRpbWVuO1xuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0T1MoKSB7XG4gIHZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICBpZiAoIXVzZXJBZ2VudClcbiAgICByZXR1cm4gY29uc29sZS5lcnJvcihuZXcgRXJyb3IoXCJVc2VyQWdlbnQgaXMgbnVsbFwiKSk7XG4gIGlmICh1c2VyQWdlbnQuaW5jbHVkZXMoXCJBbmRyb2lkXCIpICYmIHVzZXJBZ2VudC5pbmNsdWRlcyhcIlZlcnNpb25cIikpXG4gICAgcmV0dXJuIFwiQU5EUk9JRFwiO1xuICBpZiAoKHVzZXJBZ2VudC5pbmNsdWRlcyhcImlQaG9uZVwiKSB8fCB1c2VyQWdlbnQuaW5jbHVkZXMoXCJpUGFkXCIpKSAmJiAhdXNlckFnZW50LmluY2x1ZGVzKFwiVmVyc2lvblwiKSlcbiAgICByZXR1cm4gXCJJT1NcIjtcbiAgcmV0dXJuIFwiV0VCXCI7XG59XG5cbmZ1bmN0aW9uIGNsZWFyVmlld0V4dGVybmFscyh2aWV3KSB7XG4gIGlmICghdmlldylcbiAgICByZXR1cm47XG5cbiAgZGVsZXRlIHdpbmRvdy5fX1ZJRVdTW3ZpZXcucHJvcHMuaWRdO1xuICBkZWxldGUgd2luZG93Ll9fVklFV19ESU1FTlNJT05TW3ZpZXcucHJvcHMuaWRdO1xuICBcbiAgaWYoX19PQlNFUlZFUlNbdmlldy5wcm9wcy5pZF0pXG4gICAgZGVsZXRlIHdpbmRvdy5fX09CU0VSVkVSU1t2aWV3LnByb3BzLmlkXTtcblxuICB2aWV3LmNoaWxkcmVuLmZvckVhY2goY2xlYXJWaWV3RXh0ZXJuYWxzKTtcbn1cblxuLy8gdXNlOiBjbG9uZSggPHRoaW5nIHRvIGNvcHk+ICkgcmV0dXJucyA8bmV3IGNvcHk+XG5mdW5jdGlvbiBjbG9uZShvLCBtKXtcbiAgLy8gcmV0dXJuIG5vbiBvYmplY3QgdmFsdWVzXG4gIGlmKCdvYmplY3QnICE9PXR5cGVvZiBvKSByZXR1cm4gb1xuICAvLyBtOiBhIG1hcCBvZiBvbGQgcmVmcyB0byBuZXcgb2JqZWN0IHJlZnMgdG8gc3RvcCByZWN1cnNpb25cbiAgaWYoJ29iamVjdCcgIT09dHlwZW9mIG0gfHwgbnVsbCA9PT1tKSBtID1uZXcgV2Vha01hcCgpXG4gIHZhciBuID1tLmdldChvKVxuICBpZigndW5kZWZpbmVkJyAhPT10eXBlb2YgbikgcmV0dXJuIG5cbiAgLy8gc2hhbGxvdy9sZWFmIGNsb25lIG9iamVjdFxuICB2YXIgYyA9T2JqZWN0LmdldFByb3RvdHlwZU9mKG8pLmNvbnN0cnVjdG9yXG4gIC8vIFRPRE86IHNwZWNpYWxpemUgY29waWVzIGZvciBleHBlY3RlZCBidWlsdCBpbiB0eXBlcyBpLmUuIERhdGUgZXRjXG4gIHN3aXRjaChjKSB7XG4gICAgLy8gc2hvdWxkbid0IGJlIGNvcGllZCwga2VlcCByZWZlcmVuY2VcbiAgICBjYXNlIEJvb2xlYW46XG4gICAgY2FzZSBFcnJvcjpcbiAgICBjYXNlIEZ1bmN0aW9uOlxuICAgIGNhc2UgTnVtYmVyOlxuICAgIGNhc2UgUHJvbWlzZTpcbiAgICBjYXNlIFN0cmluZzpcbiAgICBjYXNlIFN5bWJvbDpcbiAgICBjYXNlIFdlYWtNYXA6XG4gICAgY2FzZSBXZWFrU2V0OlxuICAgICAgbiA9b1xuICAgICAgYnJlYWs7XG4gICAgLy8gYXJyYXkgbGlrZS9jb2xsZWN0aW9uIG9iamVjdHNcbiAgICBjYXNlIEFycmF5OlxuICAgICAgbS5zZXQobywgbiA9by5zbGljZSgwKSlcbiAgICAgIC8vIHJlY3Vyc2l2ZSBjb3B5IGZvciBjaGlsZCBvYmplY3RzXG4gICAgICBuLmZvckVhY2goZnVuY3Rpb24odixpKXtcbiAgICAgICAgaWYoJ29iamVjdCcgPT09dHlwZW9mIHYpIG5baV0gPWNsb25lKHYsIG0pXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQXJyYXlCdWZmZXI6XG4gICAgICBtLnNldChvLCBuID1vLnNsaWNlKDApKVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBEYXRhVmlldzpcbiAgICAgIG0uc2V0KG8sIG4gPW5ldyAoYykoY2xvbmUoby5idWZmZXIsIG0pLCBvLmJ5dGVPZmZzZXQsIG8uYnl0ZUxlbmd0aCkpXG4gICAgICBicmVhaztcbiAgICBjYXNlIE1hcDpcbiAgICBjYXNlIFNldDpcbiAgICAgIG0uc2V0KG8sIG4gPW5ldyAoYykoY2xvbmUoQXJyYXkuZnJvbShvLmVudHJpZXMoKSksIG0pKSlcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgSW50OEFycmF5OlxuICAgIGNhc2UgVWludDhBcnJheTpcbiAgICBjYXNlIFVpbnQ4Q2xhbXBlZEFycmF5OlxuICAgIGNhc2UgSW50MTZBcnJheTpcbiAgICBjYXNlIFVpbnQxNkFycmF5OlxuICAgIGNhc2UgSW50MzJBcnJheTpcbiAgICBjYXNlIFVpbnQzMkFycmF5OlxuICAgIGNhc2UgRmxvYXQzMkFycmF5OlxuICAgIGNhc2UgRmxvYXQ2NEFycmF5OlxuICAgICAgbS5zZXQobywgbiA9bmV3IChjKShjbG9uZShvLmJ1ZmZlciwgbSksIG8uYnl0ZU9mZnNldCwgby5sZW5ndGgpKVxuICAgICAgYnJlYWs7XG4gICAgLy8gdXNlIGJ1aWx0IGluIGNvcHkgY29uc3RydWN0b3JcbiAgICBjYXNlIERhdGU6XG4gICAgY2FzZSBSZWdFeHA6XG4gICAgICBtLnNldChvLCBuID1uZXcgKGMpKG8pKVxuICAgICAgYnJlYWs7XG4gICAgLy8gZmFsbGJhY2sgZ2VuZXJpYyBvYmplY3QgY29weVxuICAgIGRlZmF1bHQ6XG4gICAgICBtLnNldChvLCBuID1PYmplY3QuYXNzaWduKG5ldyAoYykoKSwgbykpXG4gICAgICAvLyByZWN1cnNpdmUgY29weSBmb3IgY2hpbGQgb2JqZWN0c1xuICAgICAgZm9yKGMgaW4gbikgaWYoJ29iamVjdCcgPT09dHlwZW9mIG5bY10pIG5bY10gPWNsb25lKG5bY10sIG0pXG4gIH1cbiAgcmV0dXJuIG5cbn1cblxuZnVuY3Rpb24gbWVyZ2UoKSB7XG4gIHZhciBvYmogPSB7fSxcbiAgICAgIGkgPSAwLFxuICAgICAgaWwgPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAga2V5O1xuICBmb3IgKDsgaSA8IGlsOyBpKyspIHtcbiAgICAgIGZvciAoa2V5IGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgICAgIGlmIChhcmd1bWVudHNbaV0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICBvYmpba2V5XSA9IGFyZ3VtZW50c1tpXVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuICByZXR1cm4gb2JqO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNob3VsZE1vdmUsXG4gIGNhY2hlRGltZW4sXG4gIGdldE9TLFxuICBtZXJnZSxcbiAgY2xlYXJWaWV3RXh0ZXJuYWxzLFxuICBjbG9uZSxcbn0iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRwYXJzZVBhcmFtcyA6IHJlcXVpcmUoXCIuL3BhcnNlUGFyYW1zXCIpLFxuXHRtYXBQcmFtcyA6IHJlcXVpcmUoXCIuL21hcFBhcmFtc1wiKSxcblx0Y2FsbGJhY2tNYXBwZXIgOiByZXF1aXJlKFwiLi4vY29tbW9uL2NhbGxiYWNrTWFwcGVyXCIpXG59XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbnZhciBtYXAgPSB7XG4gIHRleHRGcm9tSHRtbDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJyxcbiAgICB9XSxcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAnc2V0VGV4dCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGJhc2VBbGlnbjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gICAgZm5OYW1lOiBcInNldEJhc2VsaW5lQWxpZ25lZFwiLFxuICB9LFxuICBzaG93RGl2aWRlcnM6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgfV0sXG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ3NldFNob3dEaXZpZGVycycsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiZGl2aWRlckRyYXdhYmxlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncycsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldERpdmlkZXJEcmF3YWJsZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIHRhYlRleHRDb2xvcnM6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9LCB7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICAgIGZuTmFtZTogJ3NldFRhYlRleHRDb2xvcnMnLFxuICB9LFxuICBcInNlbGVjdGVkVGFiSW5kaWNhdG9ySGVpZ2h0XCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFNlbGVjdGVkVGFiSW5kaWNhdG9ySGVpZ2h0JyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgZm9yZWdyb3VuZDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAnc2V0Q29sb3InLFxuICAgIGluVm9rZWRJbjogJ0ZPUkVHUk9VTkQnLFxuICB9LFxuICBzZWxlY3RlZFRhYkluZGljYXRvckNvbG9yOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRTZWxlY3RlZFRhYkluZGljYXRvckNvbG9yJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgbGF5b3V0VHJhbnNpdGlvbjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAnc2V0TGF5b3V0VHJhbnNpdGlvbicsXG4gICAgaW5Wb2tlZEluOiAnTEFZT1VUX1RSQU5TSVRJT04nLFxuICB9LFxuXG4gIGZvY3VzT3V0OiB7IC8vIGRvZXNudCB3b3JrXG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ2NsZWFyRm9jdXMnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBmb2N1czoge1xuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdyZXF1ZXN0Rm9jdXMnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuXG4gIGZpbGxWaWV3cG9ydDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gICAgZm5OYW1lOiBcInNldEZpbGxWaWV3cG9ydFwiLFxuICB9LFxuICBcInByaW1pdGl2ZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFByaW1pdGl2ZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSwgXG4gIFwiY3hcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRDeCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJjeVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEN5JyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcInJhZGl1c1wiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFJhZGl1cycsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJoZXhcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRDb2xvcicsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJzdHlsZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFN0eWxlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcInN3ZWVwQW5nbGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRTd2VlcEFuZ2xlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcInN0YXJ0QW5nbGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRTdGFydEFuZ2xlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcInN0cm9rZVdpZHRoXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0U3Ryb2tlV2lkdGgnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIHNldERhdGU6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnbCcsXG4gICAgfV0sXG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ3NldERhdGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBtaW5EYXRlOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2wnLFxuICAgIH1dLFxuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdzZXRNaW5EYXRlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgbWF4RGF0ZToge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdsJyxcbiAgICB9XSxcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAnc2V0TWF4RGF0ZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGNsaXBDaGlsZHJlbjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAnc2V0Q2xpcENoaWxkcmVuJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgYWRqdXN0Vmlld0JvdW5kczoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAnc2V0QWRqdXN0Vmlld0JvdW5kcycsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIG1heExpbmVzOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgIH1dLFxuICAgIGRvbnRNYXA6ICd0cnVlJyxcbiAgICBmbk5hbWU6ICdzZXRNYXhMaW5lcycsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIHNpbmdsZUxpbmU6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ3NldFNpbmdsZUxpbmUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBoYXJkd2FyZToge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdpJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0TGF5ZXJUeXBlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgc2VsZWN0ZWQ6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYidcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFNlbGVjdGVkJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgY3VydmU6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncycsXG4gICAgICAnbGluZWFyJzogXCIwXCJcbiAgICB9XSxcbiAgICBmbk5hbWU6ICdzZXRJbnRlcnBvbGF0b3InLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBmb250RmFtaWx5OiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnLFxuICAgICAgZG9udE1hcDogdHJ1ZVxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgICdub3JtYWwnOiAwLFxuICAgICAgJ2JvbGQnOiAxLFxuICAgICAgJ2l0YWxpYyc6IDIsXG4gICAgICAnYm9sZF9pdGFsaWMnOiAzXG4gICAgfV0sXG4gICAgZm5OYW1lOiAnc2V0Rm9udEZhbWlseScsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgeDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRYJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgJ2JyaW5nVG9Gcm9udCc6IHtcbiAgICB2YWx1ZXM6IFtdLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICAgIGZuTmFtZTogXCJicmluZ1RvRnJvbnRcIixcbiAgfSxcbiAgJ2Fib3ZlJzoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIGRvbnRNYXA6IHRydWVcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBkb250TWFwOiB0cnVlXG4gICAgfSwgXSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIGZuTmFtZTogXCJhZGRSdWxlXCIsXG4gIH0sXG4gIFwiY2hlY2tlZFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRDaGVja2VkJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgeToge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRZJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJiYWNrZ3JvdW5kRHJhd2FibGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0QmFja2dyb3VuZCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGJ1dHRvblRpbnQ6IHtcbiAgICB2YWx1ZTogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0QnV0dG9uVGludExpc3QnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICB2aXNpYmlsaXR5OiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgdmlzaWJsZTogMCxcbiAgICAgIGludmlzaWJsZTogNCxcbiAgICAgIGdvbmU6IDhcbiAgICB9XSxcbiAgICBmbk5hbWU6ICdzZXRWaXNpYmlsaXR5JyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJzY2FsZVR5cGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0U2NhbGVUeXBlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJwcm9ncmVzc0NvbG9yXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncycsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEluZGV0ZXJtaW5hdGVUaW50TGlzdCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiYWxwaGFcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0QWxwaGEnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImltYWdlVXJsXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncycsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEltYWdlRHJhd2FibGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInBsYWNlSG9sZGVyXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncycsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEltYWdlRHJhd2FibGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInBhY2thZ2VJY29uXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncydcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0SW1hZ2VEcmF3YWJsZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJzY3JvbGxUb1wiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnaSdcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc21vb3RoU2Nyb2xsVG8nLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwiY29ybmVyUmFkaWlcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRDb3JuZXJSYWRpaScsXG4gICAgaW5Wb2tlZEluOiAnRFJBV0FCTEUnXG4gIH0sXG4gIFwibGluZVNwYWNpbmdcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdkcCdcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnZidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0TGluZVNwYWNpbmcnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwidXJsXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncycsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ2xvYWRVcmwnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInRyYW5zbGF0aW9uWVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRUcmFuc2xhdGlvblknLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInRyYW5zbGF0aW9uWFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRUcmFuc2xhdGlvblgnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICB0cmFuc2xhdGlvblo6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFRyYW5zbGF0aW9uWicsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiZGVsYXlcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdsJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0U3RhcnREZWxheScsXG4gIH0sXG4gIFwiZHVyYXRpb25cIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdsJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0RHVyYXRpb24nLFxuICB9LFxuICBcInBpdm90WFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRQaXZvdFgnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInBpdm90WVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRQaXZvdFknLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcIm1pbldpZHRoXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldE1pbmltdW1XaWR0aCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwibWluSGVpZ2h0XCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldE1pbmltdW1IZWlnaHQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcIm1heFdpZHRoXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldE1heFdpZHRoJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJzaGFkb3dUYWdcIjoge1xuICAgICAgdmFsdWVzOiBbe1xuICAgICAgICAgICAgdHlwZTogJ2NzJyxcbiAgICAgICAgICB9XSxcbiAgICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICAgIGZuTmFtZTogJ3NoYWRvd1RhZycsXG4gICAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgICB9LFxuICBcImFuZHJvaWRTaGFkb3dcIjoge1xuICAgICAgdmFsdWVzOiBbe1xuICAgICAgICAgICAgdHlwZTogJ2NzJyxcbiAgICAgICAgICB9XSxcbiAgICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICAgIGZuTmFtZTogJ2FuZHJvaWRTaGFkb3cnLFxuICAgICAgaW5Wb2tlZEluOiAnVklFVycsXG4gICAgfSxcbiAgXCJncmFkaWVudFwiOiB7XG4gICAgICB2YWx1ZXM6IFt7XG4gICAgICAgIHR5cGU6ICdjcydcbiAgICAgIH1dLFxuICAgICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgICAgZm5OYW1lOiAnc2V0Q29sb3JzJyxcbiAgICAgIGluVm9rZWRJbjogJ0RSQVdBQkxFJ1xuICB9LFxuICBcImdyYWRpZW50QW5nbGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRPcmllbnRhdGlvbicsXG4gICAgaW5Wb2tlZEluOiAnRFJBV0FCTEUnXG59LFxuICBcImxpbmVIZWlnaHRcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdkcCdcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0TGluZUhlaWdodCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJsZXR0ZXJTcGFjaW5nXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldExldHRlclNwYWNpbmcnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImhpbnRcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdjcycsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEhpbnQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImlucHV0VHlwZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgcGFzc3dvcmQ6ICcxMjknLFxuICAgICAgbnVtZXJpYzogJzInLFxuICAgICAgbnVtZXJpY1Bhc3N3b3JkOiAnMTgnLFxuICAgICAgbnVtZXJpY1dpdGhvdXRTdWdnZXN0aW9uOiAnNTI0MjkxJyxcbiAgICAgIGRpc2FibGVkOiAnMCcsXG4gICAgICB0ZXh0OiAnMScsXG4gICAgICBtdWx0aVRleHQ6ICczJ1xuICAgIH1dLFxuICAgIGZuTmFtZTogJ3NldElucHV0VHlwZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiaW5wdXRUeXBlSVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldElucHV0VHlwZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwidGV4dFNpemVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdmJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0VGV4dFNpemUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImZvbnRTaXplXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2YnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRUZXh0U2l6ZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwidGV4dElzU2VsZWN0YWJsZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRUZXh0SXNTZWxlY3RhYmxlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJmb250U3R5bGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJyxcbiAgICB9XSxcbiAgICBkb250TWFwOiAndHJ1ZScsXG4gICAgZm5OYW1lOiAnc2V0VHlwZWZhY2UnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInRleHRBbGxDYXBzXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEFsbENhcHMnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImV4cGFuZFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEV4cGFuZCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJmb2N1c2FibGVJblRvdWNoTW9kZVwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEZvY3VzYWJsZUluVG91Y2hNb2RlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcImRlc2NlbmRhbnRGb2N1c2FiaWxpdHlcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXREZXNjZW5kYW50Rm9jdXNhYmlsaXR5JyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcImV4cGFuZER1cmF0aW9uXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaSdcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0RXhwYW5kRHVyYXRpb24nLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwiZXhwYW5kU2Nyb2xsUGFyZW50XCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaSdcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0U2Nyb2xsUGFyZW50JyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBcImV4cGFuZEFscGhhXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0RXhwYW5kQWxwaGEnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwiZGVmYXVsdEV4cGFuZFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2InXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldERlZmF1bHRFeHBhbmQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnXG4gIH0sXG4gIFwic3d5cGVFbmFibGVkXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0U3d5cGVFbmFibGVkJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICB0b2FzdDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdjcycsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3Nob3dUb2FzdCcsXG4gICAgaW5Wb2tlZEluOiAnQ09OVEVYVCcsXG4gIH0sXG4gIHNjYWxlWDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0U2NhbGVYJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgc2NhbGVZOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnLFxuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRTY2FsZVknLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBpZDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0SWQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBncmF2aXR5OiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgY2VudGVyX2hvcml6b250YWw6IDEsXG4gICAgICBjZW50ZXJfdmVydGljYWw6IDE2LFxuICAgICAgYm90dG9tIDogODAsXG4gICAgICBsZWZ0OiA4Mzg4NjExLFxuICAgICAgcmlnaHQ6IDgzODg2MTMsXG4gICAgICBjZW50ZXI6IDE3LFxuICAgICAgYm90dG9tOiA4MCxcbiAgICAgIHRvcF92ZXJ0aWNhbDogNDgsXG4gICAgICBzdGFydDogODM4ODYxMSxcbiAgICAgIGVuZDogODM4ODYxMyxcbiAgICB9XSxcbiAgICBmbk5hbWU6ICdzZXRHcmF2aXR5JyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgb3JpZW50YXRpb246IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBob3Jpem9udGFsOiAwLFxuICAgICAgdmVydGljYWw6IDEsXG4gICAgfV0sXG4gICAgZm5OYW1lOiAnc2V0T3JpZW50YXRpb24nLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICB0ZXh0OiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2NzJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0VGV4dCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIHdpZHRoOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgbWF0Y2hfcGFyZW50OiAtMSxcbiAgICAgIHdyYXBfY29udGVudDogLTIsXG4gICAgfV0sXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICBjdHI6IHRydWUsXG4gICAgdmFyTmFtZTogJ3Zhcl93aWR0aCdcbiAgfSxcbiAgd2VpZ2h0OiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnLFxuICAgICAgbWF0Y2hfcGFyZW50OiAtMSxcbiAgICAgIHdyYXBfY29udGVudDogLTIsXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIHZhck5hbWU6ICd2YXJfd2VpZ2h0J1xuICB9LFxuICBoZWlnaHQ6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBtYXRjaF9wYXJlbnQ6IC0xLFxuICAgICAgd3JhcF9jb250ZW50OiAtMixcbiAgICB9XSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIGN0cjogdHJ1ZSxcbiAgICB2YXJOYW1lOiAndmFyX2hlaWdodCdcbiAgfSxcbiAgbGF5b3V0X2dyYXZpdHk6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBib3R0b21fcmlnaHQ6IDIxLFxuICAgICAgdG9wOiAzMCxcbiAgICAgIGJvdHRvbTogNTAsXG4gICAgICBsZWZ0OiAzLFxuICAgICAgcmlnaHQ6IDUsXG4gICAgICBjZW50ZXI6IDE3LFxuICAgICAgYm90dG9tOiA4MCxcbiAgICAgIGNlbnRlcl9ob3Jpem9udGFsOiAxLFxuICAgICAgY2VudGVyX3ZlcnRpY2FsOiAxNixcbiAgICAgIHN0YXJ0OiA4Mzg4NjExLFxuICAgICAgZW5kOiA4Mzg4NjEzLFxuICAgIH1dLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgdmFyTmFtZTogXCJ2YXJfZ3Jhdml0eVwiLFxuICB9LFxuICBtYXJnaW46IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZHAnXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2RwJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdkcCdcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnZHAnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIGZuTmFtZTogXCJzZXRNYXJnaW5zXCIsXG4gIH0sXG4gIG1hcmdpblN0YXJ0OiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2RwJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICBmbk5hbWU6IFwic2V0TWFyZ2luU3RhcnRcIixcbiAgfSxcbiAgbWFyZ2luRW5kOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2RwJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICBmbk5hbWU6IFwic2V0TWFyZ2luRW5kXCIsXG4gIH0sXG4gIHBhZGRpbmc6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZHAnXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2RwJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdkcCdcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnZHAnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgICBmbk5hbWU6IFwic2V0UGFkZGluZ1JlbGF0aXZlXCIsXG4gIH0sXG4gICdjZW50ZXJJblBhcmVudCc6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICAndHJ1ZSc6IDEzLFxuICAgICAgJ2ZhbHNlJzogMTIxMjFcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBkb250TWFwOiB0cnVlXG4gICAgfSwgXSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIGZuTmFtZTogXCJhZGRSdWxlXCIsXG4gIH0sXG4gICdjZW50ZXJIb3Jpem9udGFsJzoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgICd0cnVlJzogMTQsXG4gICAgICAnZmFsc2UnOiAxMjEyMVxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIGRvbnRNYXA6IHRydWVcbiAgICB9LCBdLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgZm5OYW1lOiBcImFkZFJ1bGVcIixcbiAgfSxcbiAgJ2NlbnRlclZlcnRpY2FsJzoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgICd0cnVlJzogMTUsXG4gICAgICAnZmFsc2UnOiAxMjEyMVxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIGRvbnRNYXA6IHRydWVcbiAgICB9LCBdLFxuICAgIGluVm9rZWRJbjogJ1BBUkFNUycsXG4gICAgZm5OYW1lOiBcImFkZFJ1bGVcIixcbiAgfSxcbiAgXCJjaGVja2VkXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldENoZWNrZWQnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICAnYWxpZ25QYXJlbnRCb3R0b20nOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgJ3RydWUnOiAxMixcbiAgICAgICdmYWxzZSc6IDEyMTIxXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgZG9udE1hcDogdHJ1ZVxuICAgIH0sIF0sXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICBmbk5hbWU6IFwiYWRkUnVsZVwiLFxuICB9LFxuICAnYWxpZ25QYXJlbnRUb3AnOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgJ3RydWUnOiAxMCxcbiAgICAgICdmYWxzZSc6IDEyMTIxXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgZG9udE1hcDogdHJ1ZVxuICAgIH0sIF0sXG4gICAgaW5Wb2tlZEluOiAnUEFSQU1TJyxcbiAgICBmbk5hbWU6IFwiYWRkUnVsZVwiLFxuICB9LFxuICAnYWxpZ25QYXJlbnRSaWdodCc6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICAndHJ1ZSc6IDExLFxuICAgICAgJ2ZhbHNlJzogMTIxMjFcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBkb250TWFwOiB0cnVlXG4gICAgfSwgXSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIGZuTmFtZTogXCJhZGRSdWxlXCIsXG4gIH0sXG4gICdhbGlnblBhcmVudExlZnQnOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgJ3RydWUnOiA5LFxuICAgICAgJ2ZhbHNlJzogMTIxMjFcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBkb250TWFwOiB0cnVlXG4gICAgfSwgXSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIGZuTmFtZTogXCJhZGRSdWxlXCIsXG4gIH0sXG4gICdsZWZ0T2YnOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knLFxuICAgICAgJ3RydWUnOiAwLFxuICAgICAgJ2ZhbHNlJzogMTIxMjFcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICBkb250TWFwOiB0cnVlXG4gICAgfSwgXSxcbiAgICBpblZva2VkSW46ICdQQVJBTVMnLFxuICAgIGZuTmFtZTogXCJhZGRSdWxlXCIsXG4gIH0sXG4gIGNvcm5lclJhZGl1czoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdkcGYnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBpblZva2VkSW46ICdEUkFXQUJMRScsXG4gICAgZm5OYW1lOiBcInNldENvcm5lclJhZGl1c1wiLFxuICB9LFxuICBzdHJva2U6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnZHAnXG4gICAgfSwge1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBpblZva2VkSW46ICdEUkFXQUJMRScsXG4gICAgZm5OYW1lOiBcInNldFN0cm9rZVwiLFxuICB9LFxuICBcInR5cGVmYWNlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgICAnbm9ybWFsJzogMCxcbiAgICAgICdib2xkJzogMSxcbiAgICAgICdpdGFsaWMnOiAyLFxuICAgICAgJ2JvbGRfaXRhbGljJzogM1xuICAgIH1dLFxuICAgIGZuTmFtZTogJ3NldFR5cGVmYWNlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgYmFja2dyb3VuZDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgaW5Wb2tlZEluOiAnRFJBV0FCTEUnLFxuICAgIGZuTmFtZTogXCJzZXRDb2xvclwiLFxuICB9LFxuICBiYWNrZ3JvdW5kRHJhd2FibGU6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncycsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEJhY2tncm91bmREcmF3YWJsZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGJhY2tncm91bmRDb2xvcjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gICAgZm5OYW1lOiBcInNldEJhY2tncm91bmRDb2xvclwiLFxuICB9LFxuICBjb2xvcjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0VGV4dENvbG9yJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgaGludENvbG9yOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRIaW50VGV4dENvbG9yJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgYnRuQmFja2dyb3VuZDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdpJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgaW5Wb2tlZEluOiAnTVVUQVRFQkcnLFxuICAgIGZuTmFtZTogXCJzZXRDb2xvckZpbHRlclwiLFxuICB9LFxuICBjb2xvckZpbHRlcjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdpJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gICAgZm5OYW1lOiBcInNldENvbG9yRmlsdGVyXCIsXG4gIH0sXG4gIGJ0bkNvbG9yOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRUZXh0Q29sb3InLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBzaGFkb3dMYXllcjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdpJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0U2hhZG93TGF5ZXInLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBlbGV2YXRpb246IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaSdcbiAgICB9XSxcbiAgICBkb250TWFwOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEVsZXZhdGlvbicsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIHJvdGF0aW9uWDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0Um90YXRpb25YJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgcm90YXRpb25ZOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2YnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRSb3RhdGlvblknLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICByb3RhdGlvbjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0Um90YXRpb24nLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBiYWNrZ3JvdW5kVGludDoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdzJ1xuICAgIH1dLFxuICAgIGRvbnRNYXA6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0QmFja2dyb3VuZFRpbnRMaXN0JyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJzY3JvbGxCYXJYXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEhvcml6b250YWxTY3JvbGxCYXJFbmFibGVkJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJzY3JvbGxCYXJZXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldFZlcnRpY2FsU2Nyb2xsQmFyRW5hYmxlZCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiY2xpY2thYmxlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldENsaWNrYWJsZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiY3Vyc29yXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0Q3Vyc29yVmlzaWJsZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJsb25nQ2xpY2thYmxlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0TG9uZ0NsaWNrYWJsZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVydcbiAgfSxcbiAgXCJmb2N1c2FibGVcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0Rm9jdXNhYmxlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJzZWxlY3RhYmxlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEJhY2tncm91bmRSZXNvdXJjZScsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwic2VsZWN0YWJsZUl0ZW1cIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJyxcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0QmFja2dyb3VuZFJlc291cmNlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgdmFsdWVzOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ3MnXG4gICAgfV0sXG4gICAgZG9udE1hcDogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRBZGFwdGVyJyxcbiAgICBpblZva2VkSW46ICdWSUVXJ1xuICB9LFxuICBtYXhTZWVrOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knXG4gICAgfV0sXG4gICAgZm5OYW1lOiAnc2V0TWF4JyxcbiAgICBpblZva2VkSW46IFwiVklFV1wiLFxuICAgIGRvbnRNYXA6IHRydWVcbiAgfSxcbiAgYWNjZXNzaWJpbGl0eUhpbnQ6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAncycsXG4gICAgfV0sXG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ3NldENvbnRlbnREZXNjcmlwdGlvbicsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIGltZU9wdGlvbnM6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnaScsXG4gICAgfV0sXG4gICAgZG9udE1hcDogJ3RydWUnLFxuICAgIGZuTmFtZTogJ3NldEltZU9wdGlvbnMnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcImhvcml6b250YWxGYWRlXCI6IHtcbiAgICB2YWx1ZXM6IFt7XG4gICAgICB0eXBlOiAnYicsXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEhvcml6b250YWxGYWRpbmdFZGdlRW5hYmxlZCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiZmFkaW5nRWRnZUxlbmd0aFwiOiB7XG4gICAgdmFsdWVzOiBbe1xuICAgICAgdHlwZTogJ2knXG4gICAgfV0sXG4gICAgJ2RvbnRNYXAnOiB0cnVlLFxuICAgIGZuTmFtZTogJ3NldEZhZGluZ0VkZ2VMZW5ndGgnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9LFxuICBcInNoaW1tZXJcIjoge1xuICAgIHZhbHVlczogW3tcbiAgICAgIHR5cGU6ICdiJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRCYWNrZ3JvdW5kJyxcbiAgICBhbHRlcm5hdGVGbk5hbWU6ICdzZXRTaGltbWVyJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJzaGltbWVyQWN0aXZlXCI6IHtcbiAgICB2YWx1ZXMgOiBbXSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc3RhcnRTaGltbWVyJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJzaGltbWVySW5hY3RpdmVcIjoge1xuICAgIHZhbHVlcyA6IFtdLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzdG9wU2hpbW1lcicsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwicGVha0hlaWdodFwiOiB7XG4gICAgdmFsdWVzIDogW3tcbiAgICAgIHR5cGU6ICdkcCdcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0UGVha0hlaWdodCcsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwic2hlZXRTdGF0ZVwiOiB7XG4gICAgdmFsdWVzIDogW3tcbiAgICAgIHR5cGU6ICdpJyxcbiAgICAgIGV4cGFuZGVkIDogMyxcbiAgICAgIGNvbGxhcHNlZCA6IDQsXG4gICAgICBoaWRkZW4gOiA1LFxuICAgICAgaGFsZkV4cGFuZGVkIDogNlxuICAgIH1dLFxuICAgIGZuTmFtZTogJ3NldFN0YXRlJyxcbiAgICBpblZva2VkSW46ICdWSUVXJyxcbiAgfSxcbiAgXCJoYWxmRXhwYW5kZWRSYXRpb1wiOiB7XG4gICAgdmFsdWVzIDogW3tcbiAgICAgIHR5cGU6ICdmJ1xuICAgIH1dLFxuICAgICdkb250TWFwJzogdHJ1ZSxcbiAgICBmbk5hbWU6ICdzZXRIYWxmRXhwYW5kZWRSYXRpbycsXG4gICAgaW5Wb2tlZEluOiAnVklFVycsXG4gIH0sXG4gIFwiaGlkZWFibGVcIjoge1xuICAgIHZhbHVlcyA6IFt7XG4gICAgICB0eXBlOiAnYidcbiAgICB9XSxcbiAgICAnZG9udE1hcCc6IHRydWUsXG4gICAgZm5OYW1lOiAnc2V0SGlkZWFibGUnLFxuICAgIGluVm9rZWRJbjogJ1ZJRVcnLFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwO1xuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5cbnZhciAgbWFwID0ge1xuICAnUEFSQU1TJzoge1xuICAgICdyZXF1aXJlZCc6ICd3aWR0aCwgaGVpZ2h0JyxcbiAgICAndmlld01ldGhvZCc6ICdzZXRMYXlvdXRQYXJhbXMsZ2V0TGF5b3V0UGFyYW1zJ1xuICB9LFxuICAnRFJBV0FCTEUnOiB7XG4gICAgJ2N0cic6ICdhbmRyb2lkLmdyYXBoaWNzLmRyYXdhYmxlLkdyYWRpZW50RHJhd2FibGUtPm5ldycsXG4gICAgJ3JlcXVpcmVkJzogJycsXG4gICAgJ3ZpZXdNZXRob2QnOiAnc2V0QmFja2dyb3VuZCxnZXRCYWNrZ3JvdW5kJ1xuICB9XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBtYXA7XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbnZhciBtYXBQYXJhbXMgPSByZXF1aXJlKCcuL21hcFBhcmFtcycpO1xudmFyIG9iak1hcCA9IHJlcXVpcmUoJy4vb2JqTWFwJyk7XG52YXIgY2FsbGJhY2tNYXBwZXIgID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jYWxsYmFja01hcHBlclwiKVxuXG52YXIgZ2xvYmFsT2JqTWFwID0ge307XG52YXIgY29tbWFuZCA9IFwiXCI7XG52YXIgZWxlbWVudFR5cGU7XG52YXIgZ2V0U2V0VHlwZTtcblxuZnVuY3Rpb24gaXNVUkwoc3RyKSB7XG4gIHRyeSB7XG4gICAgdmFyIHVybCA9IG5ldyBVUkwoc3RyKTtcbiAgICByZXR1cm4gKHN0ci5pbmRleE9mKFwiLlwiKSAhPSAtMSk7XG4gIH0gY2F0Y2goZXJyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGF0dGFjaEZlZWRiYWNrKGNvbmZpZywga2V5cywgaSkge1xuICB2YXIgZmVlZGJhY2tGbiA9IGZ1bmN0aW9uKCkge307XG5cbiAgaWYgKHR5cGVvZiBjb25maWcuZmVlZGJhY2sgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBpZiAoY29uZmlnLmZlZWRiYWNrID09IFwidHJ1ZVwiKSB7XG4gICAgICBjb25maWcuZmVlZGJhY2sgPSBjYWxsYmFja01hcHBlci5tYXAoZmVlZGJhY2tGbik7XG4gICAgICB3aW5kb3cuX19BTExfT05DTElDS1MucHVzaChjb25maWcuZmVlZGJhY2spO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjb25maWcub25DbGljaykge1xuICAgIGNvbmZpZy5mZWVkYmFjayA9IGNhbGxiYWNrTWFwcGVyLm1hcChmZWVkYmFja0ZuKTtcbiAgICB3aW5kb3cuX19BTExfT05DTElDS1MucHVzaChjb25maWcuZmVlZGJhY2spO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldENvbmZpZ0dyb3Vwcyhjb25maWcpIHtcbiAgdmFyIGdyb3VwcyA9IHt9O1xuICB2YXIgb2JqVHlwZTtcbiAgdmFyIGlzQW5pbWF0aW9uO1xuICB2YXIgd2lkdGhGb3VuZCA9IDA7XG4gIHZhciBoZWlnaHRGb3VuZCA9IDA7XG4gIGxldCBwYWRkaW5nVmFsID0gY29uZmlnW1wicGFkZGluZ1wiXTtcbiAgaWYgKGNvbmZpZy5zdHJva2UpXG4gICAgZGVsZXRlIGNvbmZpZy5wYWRkaW5nO1xuICBpZiAoY29uZmlnLm1hcmdpbikge1xuICAgIGxldCBtYXJnaW4gPSBjb25maWcubWFyZ2luLnNwbGl0KCcsJykubWFwKGEgPT4gYSoxKTtcbiAgICBjb25maWcubWFyZ2luU3RhcnQgPSBtYXJnaW5bMF0gKyAnJztcbiAgICBjb25maWcubWFyZ2luRW5kID0gbWFyZ2luWzJdICsgJyc7XG4gIH1cbiAgdmFyIGtleXMgPSAgT2JqZWN0LmtleXMoY29uZmlnKTtcbiAgdmFyIHByb3h5Rm5OYW1lO1xuICAgZm9yICh2YXIgaSA9IDA7IGk8a2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGF0dGFjaEZlZWRiYWNrKGNvbmZpZywga2V5cywgaSk7XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZ1trZXlzW2ldXSA9PSBcInVuZGVmaW5lZFwiIHx8IGNvbmZpZ1trZXlzW2ldXSA9PSBudWxsKSB7XG4gICAgICBkZWxldGUgY29uZmlnW2tleXNbaV1dO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZ1trZXlzW2ldXSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGlmIChrZXlzW2ldID09IFwiYWZ0ZXJSZW5kZXJcIiAmJiB0eXBlb2Ygd2luZG93LnJlbW92ZUFmdGVyUmVuZGVyUHJvcCA9PSBcImZ1bmN0aW9uXCIpe1xuICAgICAgICAvKipcbiAgICAgICAgICogaWYgdGhlIGZ1bmN0aW9uIGlzIHByZXNlbnQgdGhlbiB3ZSBhcmUgaGFuZGxpbmcgYWZ0ZXJSZW5kZXJcbiAgICAgICAgICogcHJvcCBpbiBKUyBpdHNlbGZcbiAgICAgICAgICovXG4gICAgICAgIHdpbmRvdy5yZW1vdmVBZnRlclJlbmRlclByb3AoY29uZmlnW1wiaWRcIl0sIGNvbmZpZ1tcImFmdGVyUmVuZGVyXCJdKTtcbiAgICAgICAgZGVsZXRlIGNvbmZpZ1tcImFmdGVyUmVuZGVyXCJdO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGNvbmZpZ1trZXlzW2ldXSA9IGNhbGxiYWNrTWFwcGVyLm1hcChjb25maWdba2V5c1tpXV0pO1xuXG4gICAgICAgIGlmIChrZXlzW2ldID09IFwib25DbGlja1wiKXtcbiAgICAgICAgICB3aW5kb3cuX19GTl9NQVBbY29uZmlnW2tleXNbaV1dXSA9IGNvbmZpZy50ZXh0IHx8IGNvbmZpZy5pZCB8fCBcIlwiO1xuXG4gICAgICAgICAgaWYoIWNvbmZpZy5hbGxvd011bHRpcGxlQ2xpY2tzIHx8IGNvbmZpZy5hbGxvd011bHRpcGxlQ2xpY2s9PVwiZmFsc2VcIil7XG4gICAgICAgICAgICB3aW5kb3cuX19USFJPVFRFTEVEX0FDVElPTlMucHVzaChjb25maWdba2V5c1tpXV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGtleXNbaV0uaW5kZXhPZignXycpICYmIGtleXNbaV0uc3BsaXQoJ18nKVswXSA9PSAnYScpIHtcbiAgICAgICAgb2JqVHlwZSA9IG1hcFBhcmFtc1trZXlzW2ldLnNwbGl0KCdfJylbMV1dO1xuICAgICAgICBpc0FuaW1hdGlvbiA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmpUeXBlID0gbWFwUGFyYW1zW2tleXNbaV1dO1xuICAgICAgICBpc0FuaW1hdGlvbiA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoa2V5c1tpXSA9PSBcInN0cm9rZVwiKSB7XG4gICAgICAgIGxldCBwYWRkaW5nID0gWzAsMCwwLDBdO1xuXG4gICAgICAgIGlmIChwYWRkaW5nVmFsKVxuICAgICAgICAgIHBhZGRpbmcgPSBwYWRkaW5nVmFsLnNwbGl0KCcsJykubWFwKGEgPT4gYSoxKTtcblxuICAgICAgICBsZXQgc3Ryb2tlVmFsdWUgPSBjb25maWdbXCJzdHJva2VcIl0uc3BsaXQoJywnKVswXSAqIDE7XG4gICAgICAgIHBhZGRpbmcgPSBwYWRkaW5nLm1hcChkaW0gPT4gZGltICsgc3Ryb2tlVmFsdWUpO1xuICAgICAgICBjb25maWdbXCJwYWRkaW5nXCJdID0gcGFkZGluZy5qb2luKCcsJyk7XG4gICAgICAgIGtleXMucHVzaChcInBhZGRpbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChvYmpUeXBlKSB7XG4gICAgICAgIGlmIChpc0FuaW1hdGlvbil7XG4gICAgICAgICAgaWYgKCFncm91cHNbJ0FOSU1BVElPTiddKVxuICAgICAgICAgIGdyb3Vwc1snQU5JTUFUSU9OJ10gPSBbXTtcblxuXG4gICAgICAgICAgZ3JvdXBzWydBTklNQVRJT04nXS5wdXNoKHtrZXk6IGtleXNbaV0uc3BsaXQoJ18nKVsxXSwgdmFsdWU6IGNvbmZpZ1trZXlzW2ldXX0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCFncm91cHNbb2JqVHlwZS5pblZva2VkSW5dKVxuICAgICAgICAgIGdyb3Vwc1tvYmpUeXBlLmluVm9rZWRJbl0gPSBbXTtcblxuICAgICAgICAgIGlmIChrZXlzW2ldID09IFwid2lkdGhcIilcbiAgICAgICAgICB3aWR0aEZvdW5kICsrO1xuICAgICAgICAgIGlmIChrZXlzW2ldID09IFwiaGVpZ2h0XCIpXG4gICAgICAgICAgaGVpZ2h0Rm91bmQgKys7XG5cbiAgICAgICAgICBncm91cHNbb2JqVHlwZS5pblZva2VkSW5dLnB1c2goe2tleToga2V5c1tpXSwgdmFsdWU6IGNvbmZpZ1trZXlzW2ldXX0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5c1tpXSE9PVwicGF0dGVyblwiICYmIGtleXNbaV0gIT09IFwicm9vdFwiICYmIGtleXNbaV0gIT09IFwiaWRcIiAmJiBrZXlzW2ldIT09IFwiX19maWxlbmFtZVwiKSB7XG4gICAgICAgICAgZGVsZXRlIGNvbmZpZ1trZXlzW2ldXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChnZXRTZXRUeXBlID09IFwic2V0XCIpIHtcbiAgICBpZiAoIWdyb3Vwcy5QQVJBTVMpXG4gICAgZ3JvdXBzLlBBUkFNUyA9IFtdO1xuXG4gICAgaWYgKCF3aWR0aEZvdW5kKVxuICAgIGdyb3Vwcy5QQVJBTVMucHVzaCh7a2V5OiBcIndpZHRoXCIsIHZhbHVlOiAnd3JhcF9jb250ZW50J30pO1xuICAgIGlmICghaGVpZ2h0Rm91bmQpXG4gICAgZ3JvdXBzLlBBUkFNUy5wdXNoKHtrZXk6IFwiaGVpZ2h0XCIsIHZhbHVlOiAnd3JhcF9jb250ZW50J30pO1xuICB9XG5cbiAgcmV0dXJuIGdyb3Vwcztcbn1cblxuZnVuY3Rpb24gZ2V0Q3RyKHZpZXdHcm91cCkge1xuICB2YXIgdmlld0dyb3VwTWFwID0gIHtcbiAgICAnbGluZWFyTGF5b3V0JzogJ2FuZHJvaWQud2lkZ2V0LkxpbmVhckxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ2Nvb3JkaW5hdG9yTGF5b3V0JzogJ2FuZHJvaWR4LmNvb3JkaW5hdG9ybGF5b3V0LndpZGdldC5Db29yZGluYXRvckxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ3Njcm9sbFZpZXcnOiAnYW5kcm9pZC53aWRnZXQuTGluZWFyTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAnaG9yaXpvbnRhbFNjcm9sbFZpZXcnOiAnYW5kcm9pZC53aWRnZXQuTGluZWFyTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAncmVsYXRpdmVMYXlvdXQnOiAnYW5kcm9pZC53aWRnZXQuUmVsYXRpdmVMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdmcmFtZUxheW91dCc6ICdhbmRyb2lkLndpZGdldC5GcmFtZUxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ3Rvb2xiYXInOiAnYW5kcm9pZC5zdXBwb3J0LnY3LndpZGdldC5Ub29sYmFyJExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAnY29sbGFwc2luZ1Rvb2xiYXJMYXlvdXQnOiAnYW5kcm9pZHguY29vcmRpbmF0b3JsYXlvdXQud2lkZ2V0LkNvb3JkaW5hdG9yTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAnYXBwQmFyTGF5b3V0JzogJ2FuZHJvaWQuc3VwcG9ydC5kZXNpZ24ud2lkZ2V0LkFwcEJhckxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ3ZpZXcnOiAnYW5kcm9pZC53aWRnZXQuTGluZWFyTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAndGFiTGF5b3V0JzogJ2FuZHJvaWQud2lkZ2V0LkxpbmVhckxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ3ZpZXdQYWdlcic6ICdhbmRyb2lkLnN1cHBvcnQudjQudmlldy5WaWV3UGFnZXIkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdsaXN0Vmlldyc6ICdhbmRyb2lkLndpZGdldC5MaW5lYXJMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnLFxuICAgICdleHBhbmRhYmxlTGlzdFZpZXcnOiAnYW5kcm9pZC53aWRnZXQuTGluZWFyTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAncmVjeWNsZXJWaWV3JzogJ2FuZHJvaWQuc3VwcG9ydC52Ny53aWRnZXQuUmVjeWNsZXJWaWV3JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAncmF0aW5nQmFyJzogJ2FuZHJvaWQud2lkZ2V0LkxpbmVhckxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ2FjY29yZGlvbkxheW91dCc6ICdhbmRyb2lkLndpZGdldC5GcmFtZUxheW91dCRMYXlvdXRQYXJhbXMtPm5ldycsXG4gICAgJ3N3eXBlTGF5b3V0JzogJ2FuZHJvaWQud2lkZ2V0LkZyYW1lTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICAnc3d5cGVTY3JvbGwnOiAnYW5kcm9pZC53aWRnZXQuTGluZWFyTGF5b3V0JExheW91dFBhcmFtcy0+bmV3JyxcbiAgICBcInNoaW1tZXJGcmFtZUxheW91dFwiOiBcImFuZHJvaWQud2lkZ2V0LkZyYW1lTGF5b3V0JExheW91dFBhcmFtcy0+bmV3XCIsXG4gICAgXCJib3R0b21TaGVldExheW91dFwiOiAnYW5kcm9pZC53aWRnZXQuRnJhbWVMYXlvdXQkTGF5b3V0UGFyYW1zLT5uZXcnXG4gIH07XG5cbiAgaWYoIXZpZXdHcm91cE1hcFt2aWV3R3JvdXBdKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc3VjaCB2aWV3IGdyb3VwIGZvdW5kIDogXCIgKyB2aWV3R3JvdXApO1xuICB9XG5cbiAgcmV0dXJuICB2aWV3R3JvdXBNYXBbdmlld0dyb3VwXTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlU3BlY2lhbENoYXJzKHZhbHVlKSB7XG4gIHZhbHVlID0gIHZhbHVlLmluZGV4T2YoJywnKT4tMT92YWx1ZS5yZXBsYWNlKC9cXCwvZywgJ1xcXFxcXFxcLCcpOnZhbHVlO1xuICB2YWx1ZSA9ICB2YWx1ZS5pbmRleE9mKCc6Jyk+LTE/dmFsdWUucmVwbGFjZSgvXFw6L2csICdcXFxcXFxcXDonKTp2YWx1ZTtcbiAgdmFsdWUgPSAgdmFsdWUuaW5kZXhPZignOicpPi0xP3ZhbHVlLnJlcGxhY2UoL1xcPS9nLCAnXFxcXFxcXFw9Jyk6dmFsdWU7XG4gIHZhbHVlID0gIHZhbHVlLmluZGV4T2YoJzsnKT4tMT92YWx1ZS5yZXBsYWNlKC9cXDsvZywgJ1xcXFxcXFxcOycpOnZhbHVlO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kQXJncyhhdHRycywgb2JqKSB7XG4gIGlmICghb2JqLnZhbHVlcylcbiAgcmV0dXJuIFwiXCI7XG5cbiAgdmFyIGFyZ3MgPSBcIlwiO1xuICB2YXIgdmFsdWUgPSAoYXR0cnMua2V5ID09IFwidGV4dFwiIHx8IGF0dHJzLmtleSA9PSBcImhpbnRcIilcbiAgICA/YXR0cnMudmFsdWU6YXR0cnMudmFsdWUucmVwbGFjZSgvIC9nLCcnKTtcblxuICB2YXIgaW5jb21pbmdBcmdzO1xuICBpZiAoYXR0cnMua2V5ID09IFwidGV4dFwiIHx8IGF0dHJzLmtleSA9PSBcImhpbnRcIikge1xuICAgIGluY29taW5nQXJncyA9IFtdO1xuICAgIGluY29taW5nQXJncy5wdXNoKGhhbmRsZVNwZWNpYWxDaGFycyh2YWx1ZSkpO1xuXG4gIH0gZWxzZSB7XG4gICAgaW5jb21pbmdBcmdzID0gdmFsdWUuc3BsaXQoJywnKTtcbiAgfVxuXG4gIGZvciAgKHZhciBpID0wIDtpPG9iai52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBhcmdzICs9ICBvYmoudmFsdWVzW2ldLnR5cGUgKyAnXyc7XG5cbiAgICBpZiAob2JqLmRvbnRNYXApXG4gICAgYXJncyArPSBpbmNvbWluZ0FyZ3NbaV0gKyAnLCc7XG4gICAgZWxzZSAge1xuICAgICAgaWYgKG9iai52YWx1ZXNbaV0uZG9udE1hcCkge1xuICAgICAgICBhcmdzICs9IGluY29taW5nQXJnc1tpXSArICcsJztcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnMua2V5ID09IFwid2lkdGhcIiB8fCBhdHRycy5rZXkgPT0gXCJoZWlnaHRcIikge1xuICAgICAgICBpZiAoIWlzTmFOKGluY29taW5nQXJnc1tpXSoxKSlcbiAgICAgICAgYXJncyA9ICdkcF8nICsgaW5jb21pbmdBcmdzW2ldICsgJywnO1xuICAgICAgICBlbHNlXG4gICAgICAgIGFyZ3MgKz0gb2JqLnZhbHVlc1tpXVtpbmNvbWluZ0FyZ3NbaV1dICsgJywnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJncyArPSBvYmoudmFsdWVzW2ldW2luY29taW5nQXJnc1tpXV0gKyAnLCc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFyZ3Muc3Vic3RyaW5nKDAsIGFyZ3MubGVuZ3RoLTEpO1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlQ3RyKGF0dHJzLCBiZWxvbmdzVG8pIHtcbiAgdmFyIG9iaiA9IG9iak1hcFtiZWxvbmdzVG9dO1xuICB2YXIgY3RyID0gZ2xvYmFsT2JqTWFwW2JlbG9uZ3NUb10uY3RyO1xuICB2YXIgcmVxQXR0cnM7XG5cbiAgaWYgKGdldFNldFR5cGUgPT0gXCJnZXRcIiAmJiAoYmVsb25nc1RvID09IFwiQU5JTUFUSU9OXCIgfHwgYmVsb25nc1RvID09IFwiRFJBV0FCTEVcIiB8fCBiZWxvbmdzVG8gPT0gXCJQQVJBTVNcIikpIHtcbiAgICByZXR1cm4gY3RyO1xuICB9XG5cbiAgaWYgKCFvYmogfHwgIW9iai5yZXF1aXJlZClcbiAgcmV0dXJuIGN0clxuXG4gIHJlcUF0dHJzID0gb2JqLnJlcXVpcmVkLnNwbGl0KCcsJyk7XG5cbiAgY3RyICs9ICc6JztcblxuICBmb3IgKHZhciBpID0wOyBpPHJlcUF0dHJzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yICh2YXIgaj0wOyBqPGF0dHJzLmxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAocmVxQXR0cnNbaV0udHJpbSgpID09IGF0dHJzW2pdLmtleSkgIHtcbiAgICAgICAgY3RyICs9IGFwcGVuZEFyZ3MoYXR0cnNbal0sIG1hcFBhcmFtc1tyZXFBdHRyc1tpXS50cmltKCldKSArICcsJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY3RyLnN1YnN0cmluZygwLCBjdHIubGVuZ3RoIC0gMSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSHRtbCh0ZXh0KSB7XG4gIHJldHVybiAnc2V0X2h0bWw9YW5kcm9pZC50ZXh0Lkh0bWwtPmZyb21IdG1sOnNfJyArIHRleHQgKyAnOyc7XG59XG5cbmZ1bmN0aW9uIHBhcnNlQ29sb3IoY29sb3IsIHNldHRlck5hbWUpIHtcbiAgaWYgKCFzZXR0ZXJOYW1lKVxuICBzZXR0ZXJOYW1lID0gJ3NldF9jb2xvckludCc7XG4gIHJldHVybiBzZXR0ZXJOYW1lICsgJz1hbmRyb2lkLmdyYXBoaWNzLkNvbG9yLT5wYXJzZUNvbG9yOnNfJyArIGNvbG9yICsgJzsnO1xufVxuXG5mdW5jdGlvbiBtYXNoVGhpcyhhdHRycywgb2JqLCBiZWxvbmdzVG8sIHRyYW5zZm9ybUZuLCBhbGxQcm9wcywgdHlwZSkge1xuICBpZiAoZ2V0U2V0VHlwZSA9PSBcImdldFwiICYmIChhdHRycy5rZXkgPT0gXCJ3aWR0aFwiIHx8IGF0dHJzLmtleSA9PSBcImhlaWdodFwiKSkge1xuICAgIC8vIGdldCBjYXNlIGkuZSBkdXJpbmcgcGF0Y2hcbiAgICBpZighaXNOYU4oYXR0cnMudmFsdWUgKiAxKSkge1xuICAgICAgcmV0dXJuICdnZXRfUEFSQU1TLT4nICsgb2JqLnZhck5hbWUgKyAnOmRwXycgKyBhdHRycy52YWx1ZSArICc7Z2V0X3ZpZXctPnNldExheW91dFBhcmFtczpnZXRfUEFSQU1TICc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnZ2V0X1BBUkFNUy0+JyArIG9iai52YXJOYW1lICsgJzppXycgKyBtYXBQYXJhbXNbYXR0cnMua2V5XS52YWx1ZXNbMF1bYXR0cnMudmFsdWVdICsgJztnZXRfdmlldy0+c2V0TGF5b3V0UGFyYW1zOmdldF9QQVJBTVMgJztcbiAgICB9XG4gIH0gZWxzZSBpZihhdHRycy5rZXkgPT0gXCJ3aWR0aFwiIHx8IGF0dHJzLmtleSA9PSBcImhlaWdodFwiKSB7XG4gICAgLy8gc2V0IGNhc2UgaS5lIGZpcnN0IHJlbmRlclxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHZhciBiZWZvcmVDbWQgPSBcIlwiO1xuICB2YXIgYWZ0ZXJDbWQgPSBcIlwiO1xuICB2YXIgcHJlUGVuZCA9ICcnO1xuICB2YXIgY3VyclRyYW5zVmFsO1xuICB2YXIgY29sb3I7XG4gIHZhciBhcnIgPSBbXTtcbiAgdmFyIHJlcztcbiAgdmFyIHZhbHVlcztcblxuICB2YXIga2V5V29yZDtcbiAgdmFyIF9jbWQ7XG4gIHZhciBmaW5hbENtZDtcbiAgdmFyIGNvbG9yMTtcbiAgYXR0cnMudmFsdWUgKz0gJyc7XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcInRleHRTaXplXCIpIHtcbiAgICBhdHRycy52YWx1ZSA9IFwiMSxcIiArIChhdHRycy52YWx1ZSAtIDEpO1xuICB9XG5cbi8vdG9kbzp0YWJUZXh0Q29sb3JzXG4gIGlmIChhdHRycy5rZXkgPT0gXCJmb3JlZ3JvdW5kXCIgfHxcbiAgICBhdHRycy5rZXkgPT0gXCJ0YWJUZXh0Q29sb3JzXCIgfHxcbiAgICBhdHRycy5rZXkgPT0gXCJzZWxlY3RlZFRhYkluZGljYXRvckNvbG9yXCIgIHx8XG4gICAgYXR0cnMua2V5ID09IFwiY29sb3JcIiB8fFxuICAgIGF0dHJzLmtleSA9PSBcImJhY2tncm91bmRcIiB8fFxuICAgIGF0dHJzLmtleSA9PSBcInN0cm9rZVwiIHx8XG4gICAgYXR0cnMua2V5ID09IFwiYnRuQ29sb3JcIikge1xuXG4gICAgaWYgKGF0dHJzLmtleSA9PSBcInN0cm9rZVwiKSB7XG4gICAgICBjb2xvciA9IGF0dHJzLnZhbHVlLnNwbGl0KCcsJylbMV07XG4gICAgICBjdXJyVHJhbnNWYWwgPSBhcHBlbmRBcmdzKGF0dHJzLG9iaikuc3BsaXQoJywnKVswXSArICcsZ2V0X2NvbG9ySW50JztcbiAgICB9IGVsc2UgaWYoYXR0cnMua2V5ID09IFwidGFiVGV4dENvbG9yc1wiKXtcbiAgICAgIGNvbG9yID0gYXR0cnMudmFsdWUuc3BsaXQoJywnKVswXTtcbiAgICAgIGNvbG9yMSA9IGF0dHJzLnZhbHVlLnNwbGl0KCcsJylbMV07XG4gICAgICBjdXJyVHJhbnNWYWwgPSAnZ2V0X2NvbG9ySW50MScgKyAnLGdldF9jb2xvckludCc7XG4gICAgfWVsc2Uge1xuICAgICAgY29sb3IgPSBhdHRycy52YWx1ZTtcbiAgICAgIGN1cnJUcmFuc1ZhbCA9ICdnZXRfY29sb3JJbnQnO1xuICAgIH1cblxuICAgIGlmKGF0dHJzLmtleSA9PSBcInRhYlRleHRDb2xvcnNcIil7XG4gICAgICBwcmVQZW5kID0gcGFyc2VDb2xvcihjb2xvcixcInNldF9jb2xvckludDFcIikrJywnK3BhcnNlQ29sb3IoY29sb3IxKTtcbiAgICB9ZWxzZXtcbiAgICAgIHByZVBlbmQgPSBwYXJzZUNvbG9yKGNvbG9yKTtcbiAgICB9XG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwiZm9udFN0eWxlXCIpIHtcbiAgICBpZihpc1VSTChhdHRycy52YWx1ZSkpIHtcbiAgICAgIGlmKHR5cGVvZiB3aW5kb3cuX19QUk9YWV9GTiA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHdpbmRvdy5fX1BST1hZX0ZOID0ge307XG4gICAgICB9XG4gICAgICB2YXIgZm9udCA9IGF0dHJzLnZhbHVlLnN1YnN0cihhdHRycy52YWx1ZS5sYXN0SW5kZXhPZignLycpICsgMSlcblxuICAgICAgdmFyIGZpbGVQcmVzZW50ID0gKHR5cGVvZiBKQnJpZGdlLmlzRmlsZVByZXNlbnQgPT0gXCJmdW5jdGlvblwiKSAmJiBKQnJpZGdlLmlzRmlsZVByZXNlbnQoZm9udCk7XG4gICAgICBpZiAoIWZpbGVQcmVzZW50KSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGNhbGxiYWNrTWFwcGVyLm1hcChmdW5jdGlvbiAoaXNOZXcsIHVybCwgZmlsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBpZCA9IGFsbFByb3BzLmZpbmQoYSA9PiBhLmtleSA9PT0gXCJpZFwiKTtcbiAgICAgICAgICBpZiAoIWlkKSByZXR1cm47XG4gICAgICAgICAgdmFyIHVybFNldENvbW1hbmRzID0gXCJzZXRfZGlyZWN0b3J5PWN0eC0+Z2V0RGlyOnNfanVzcGF5LGlfMDtcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0X3Jlc29sdmVkRmlsZT1qYXZhLmlvLkZpbGUtPm5ldzpnZXRfZGlyZWN0b3J5LHNfXCIgKyBmaWxlTmFtZSArIFwiO1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRfcmVzb2x2ZWRQYXRoPWdldF9yZXNvbHZlZEZpbGUtPnRvU3RyaW5nO1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRfZGZvbnQ9YW5kcm9pZC5ncmFwaGljcy5UeXBlZmFjZS0+Y3JlYXRlRnJvbUZpbGU6Z2V0X3Jlc29sdmVkUGF0aDtcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0X3RleHRWPWN0eC0+ZmluZFZpZXdCeUlkOmlfXCIgKyBpZC52YWx1ZSArIFwiO1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnZXRfdGV4dFYtPnNldFR5cGVmYWNlOmdldF9kZm9udFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuZHJvaWQucnVuSW5VSSh1cmxTZXRDb21tYW5kcyAsbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICBKQnJpZGdlLnJlbmV3RmlsZShhdHRycy52YWx1ZSwgZm9udCwgY2FsbGJhY2spO1xuICAgICAgfSBlbHNlIGlmKEpCcmlkZ2UuZ2V0RmlsZVBhdGgpIHtcbiAgICAgICAgcHJlUGVuZCA9IFwic2V0X2RpcmVjdG9yeT1jdHgtPmdldERpcjpzX2p1c3BheSxpXzA7XCIgK1xuICAgICAgICAgICAgICAgICAgICBcInNldF9yZXNvbHZlZEZpbGU9amF2YS5pby5GaWxlLT5uZXc6Z2V0X2RpcmVjdG9yeSxzX1wiICsgSkJyaWRnZS5nZXRGaWxlUGF0aChmb250KSArIFwiO1wiICtcbiAgICAgICAgICAgICAgICAgICAgXCJzZXRfcmVzb2x2ZWRQYXRoPWdldF9yZXNvbHZlZEZpbGUtPnRvU3RyaW5nO1wiICtcbiAgICAgICAgICAgICAgICAgICAgXCJzZXRfZGZvbnQ9YW5kcm9pZC5ncmFwaGljcy5UeXBlZmFjZS0+Y3JlYXRlRnJvbUZpbGU6Z2V0X3Jlc29sdmVkUGF0aDtcIlxuICAgICAgICBjdXJyVHJhbnNWYWwgPSBcImdldF9kZm9udFwiO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwcmVQZW5kID0gXCJzZXRfYXN0PWN0eC0+Z2V0QXNzZXRzO3NldF90eXBlPWFuZHJvaWQuZ3JhcGhpY3MuVHlwZWZhY2UtPmNyZWF0ZUZyb21Bc3NldDpnZXRfYXN0LHNfZm9udHNcXC9cIiArIGF0dHJzLnZhbHVlICsgXCJcXC50dGY7XCI7XG4gICAgICBjdXJyVHJhbnNWYWwgPSBcImdldF90eXBlXCI7XG4gICAgfVxuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcImdyYWRpZW50QW5nbGVcIikge1xuICAgIG9yaWVudGF0aW9uICs9IFwic2V0X2RyPXRoaXMtPmdldEJhY2tncm91bmQ7c2V0X289YW5kcm9pZC5ncmFwaGljcy5kcmF3YWJsZS5HcmFkaWVudERyYXdhYmxlJE9yaWVudGF0aW9uLT52YWx1ZU9mOnNfXCIrYXR0cnMudmFsdWUrXCI7XCJcbiAgICBwcmVQZW5kICs9IG9yaWVudGF0aW9uO1xuICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0X29cIlxuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcImdyYWRpZW50XCIpIHtcbiAgICB2YXIgZ3JhZGllbnRPYmogPSBKU09OLnBhcnNlKGF0dHJzLnZhbHVlKTtcbiAgICB2YXIgb3JpZW50YXRpb24gPSBcIlwiO1xuICAgIGlmIChncmFkaWVudE9iai50eXBlID09IFwibGluZWFyXCIpIHtcbiAgICB9IGVsc2Uge31cblxuICAgIHZhciBpbnRDbGFzcyA9IFwic2V0X2NjPWphdmEubGFuZy5DbGFzcy0+Zm9yTmFtZTpzX2phdmEubGFuZy5JbnRlZ2VyO1wiO1xuICAgIHZhciBhcnJMaXN0ID0gXCJzZXRfYXJyPWphdmEudXRpbC5BcnJheUxpc3QtPm5ldztcIjtcblxuICAgIHByZVBlbmQgKz0gZ3JhZGllbnRPYmoudmFsdWVzLm1hcChmdW5jdGlvbiAoY29sb3IsIGkpIHtcbiAgICAgIHJldHVybiBwYXJzZUNvbG9yKGNvbG9yLCBcInNldF9jb2xvclwiICsgaSk7XG4gICAgfSkuam9pbihcIlwiKTtcblxuICAgIGFyckxpc3QgKz0gZ3JhZGllbnRPYmoudmFsdWVzLm1hcChmdW5jdGlvbiAoY29sb3IsIGkpIHtcbiAgICAgIHJldHVybiBcImdldF9hcnItPmFkZDpnZXRfY29sb3JcIiArIGk7XG4gICAgfSkuam9pbihcIjtcIik7XG5cbiAgICBwcmVQZW5kICs9IFwic2V0X2dkPWFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuR3JhZGllbnREcmF3YWJsZS0+bmV3O1wiO1xuICAgIHByZVBlbmQgKz0gYXJyTGlzdCArIFwiO1wiO1xuICAgIHByZVBlbmQgKz0gXCJzZXRfYz1qYXZhLmxhbmcuQ2xhc3MtPmZvck5hbWU6c19qYXZhLmxhbmcuSW50ZWdlcjtcIjtcbiAgICBwcmVQZW5kICs9IFwiaW5mbC0+Y29udmVydEFuZFN0b3JlQXJyYXk6Z2V0X2FycixnZXRfYyxzX3BBcnIsYl90cnVlO1wiO1xuICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0X3BBcnJcIjtcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJjb3JuZXJSYWRpaVwiKSB7XG4gICAgdmFyIGNvcm5lclJhZGlpcyA9IGF0dHJzLnZhbHVlLnNwbGl0KCcsJyk7XG4gICAgdmFyIGNvcm5lclJhZGl1cyA9IGNvcm5lclJhZGlpcy5zcGxpY2UoMCwxKTtcbiAgICB2YXIgY29ybmVyUmFkaWlBcnJheSA9IFtdO1xuICAgIGZvcih2YXIgaSA9IDA7IGk8IGNvcm5lclJhZGlpcy5sZW5ndGg7KytpKXtcbiAgICAgIGNvcm5lclJhZGlpQXJyYXkucHVzaCgoY29ybmVyUmFkaWlzW2ldKmNvcm5lclJhZGl1cykrXCJcIik7XG4gICAgICBjb3JuZXJSYWRpaUFycmF5LnB1c2goKGNvcm5lclJhZGlpc1tpXSpjb3JuZXJSYWRpdXMpK1wiXCIpO1xuICAgIH1cbiAgICB2YXIgYXJyTGlzdCA9IFwic2V0X2Fycj1qYXZhLnV0aWwuQXJyYXlMaXN0LT5uZXc7XCI7XG4gICAgdmFyIGZsb2F0QXJyYXkgPSBjb3JuZXJSYWRpaUFycmF5Lm1hcChmdW5jdGlvbih2YWwsaSl7cmV0dXJuIFwic2V0X2Nvcm5lclJhZGl1cz1qYXZhLmxhbmcuRmxvYXQtPm5ldzpkcGZfXCIrIHZhbCArIFwiO2dldF9hcnItPmFkZDpnZXRfY29ybmVyUmFkaXVzO1wifSk7XG4gICAgcHJlUGVuZCArPSBhcnJMaXN0ICsgXCI7XCI7XG4gICAgcHJlUGVuZCArPSBcInNldF9jPWphdmEubGFuZy5DbGFzcy0+Zm9yTmFtZTpzX2phdmEubGFuZy5GbG9hdDtcIjtcbiAgICBwcmVQZW5kICs9IGZsb2F0QXJyYXkuam9pbihcIlwiKTtcbiAgICBwcmVQZW5kICs9IFwiaW5mbC0+Y29udmVydEFuZFN0b3JlQXJyYXk6Z2V0X2FycixnZXRfYyxzX3BBcnIsYl90cnVlO1wiO1xuICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0X3BBcnJcIjtcbiAgfVxuXG4gIC8vIHNoYWRvd1RhZyA6IGxldmVsLHRhZ1xuICBpZiAoYXR0cnMua2V5ID09IFwic2hhZG93VGFnXCIpIHtcbiAgICB2YXIgYXJyID0gYXR0cnMudmFsdWUuc3BsaXQoXCIsXCIpO1xuICAgIHZhciB0YWcgPSBhcnJbMV07XG5cdFx0Y29uc29sZS53YXJuKFwiWU9PT08gU2hhZG93XCIsIGFycik7XG5cbiAgICBpZiAoIXdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXSkge1xuICAgICAgd2luZG93LnNoYWRvd09iamVjdFt0YWddID1cbiAgICAgICAgeyBsZXZlbCA6IHBhcnNlSW50KGFyclswXSksXG4gICAgICAgICAgdmlld0lkIDogW10sXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yIDogW10sXG4gICAgICAgICAgYmx1clZhbHVlIDogW10sXG4gICAgICAgICAgc2hhZG93Q29sb3IgOiBbXSxcbiAgICAgICAgICBkeCA6IFtdLFxuICAgICAgICAgIGR5IDogW10sXG4gICAgICAgICAgc3ByZWFkIDogW10sXG4gICAgICAgICAgZmFjdG9yIDogW11cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJsZXZlbFwiXSA9IHBhcnNlSW50KGFyclswXSk7XG4gICAgfVxuXHRcdHJldHVybiBcIlwiO1xuICB9XG4gIC8vICAtLSBpbnQgZHgsIGludCBkeSwgaW50IGJsdXJWYWx1ZSwgIFN0cmluZyBzaGFkb3dDb2xvciwgIGludCBzcHJlYWQsIGVsZXZhdGl1b24sIGZsb2F0IGZhY3RvcilcbiAgaWYgKGF0dHJzLmtleSA9PSBcImFuZHJvaWRTaGFkb3dcIikge1xuICAgIHZhciBhcnIgPSBhdHRycy52YWx1ZS5zcGxpdChcIixcIik7XG5cbiAgICB2YXIgdGFnID0gYXJyWzZdO1xuXG4gICAgdmFyIF9fYmFja2dyb3VuZCA9IFwiI2ZmZmZmZlwiO1xuICAgIHZhciBfX2lkID0gXCJcIjtcblxuICAgIGZvciAodmFyIGkgPTAgO2k8YWxsUHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhbGxQcm9wc1tpXS5rZXkgPT0gXCJiYWNrZ3JvdW5kXCIpIHtcbiAgICAgICAgX19iYWNrZ3JvdW5kID0gYWxsUHJvcHNbaV0udmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKGFsbFByb3BzW2ldLmtleSA9PSBcImlkXCIpIHtcbiAgICAgICAgX19pZCA9IGFsbFByb3BzW2ldLnZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBmYWN0b3IgPSBhcnJbNV07XG4gICAgaWYgKHR5cGVvZiBKQnJpZGdlLmdldFBpeGVscyA9PSBcImZ1bmN0aW9uXCIpe1xuICAgICAgZmFjdG9yID0gSkJyaWRnZS5nZXRQaXhlbHMoKTtcbiAgICB9XG4gICAgLy8gICAodmlld0lkLCBiYWNrZ3JvdW5kQ29sb3IsIGludCBibHVyVmFsdWUsaGFkb3dDb2xvciwgaW50IGR4LCBpbnQgZHksIGludCBzcHJlYWQsIGZsb2F0IGZhY3RvcilcblxuICAgIGlmICghd2luZG93LnNoYWRvd09iamVjdFt0YWddKSB7XG4gICAgICB3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ10gPVxuICAgICAgICB7IGxldmVsIDogLTEsXG4gICAgICAgICAgdmlld0lkIDogW19faWRdLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvciA6IFtfX2JhY2tncm91bmRdLFxuICAgICAgICAgIGJsdXJWYWx1ZSA6IFthcnJbMl1dLFxuICAgICAgICAgIHNoYWRvd0NvbG9yIDogW2FyclszXV0sXG4gICAgICAgICAgZHggOiBbYXJyWzBdXSxcbiAgICAgICAgICBkeSA6IFthcnJbMV1dLFxuICAgICAgICAgIHNwcmVhZCA6IFthcnJbNF1dLFxuICAgICAgICAgIGZhY3RvciA6IFtmYWN0b3JdXG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LnNoYWRvd09iamVjdFt0YWddW1widmlld0lkXCJdLnB1c2goX19pZCk7XG4gICAgICB3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJiYWNrZ3JvdW5kQ29sb3JcIl0ucHVzaChfX2JhY2tncm91bmQpO1xuICAgICAgd2luZG93LnNoYWRvd09iamVjdFt0YWddW1wiYmx1clZhbHVlXCJdLnB1c2goYXJyWzJdKTtcbiAgICAgIHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcInNoYWRvd0NvbG9yXCJdLnB1c2goYXJyWzNdKTtcbiAgICAgIHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImR4XCJdLnB1c2goYXJyWzBdKTtcbiAgICAgIHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcImR5XCJdLnB1c2goYXJyWzFdKTtcbiAgICAgIHdpbmRvdy5zaGFkb3dPYmplY3RbdGFnXVtcInNwcmVhZFwiXS5wdXNoKGFycls0XSk7XG4gICAgICB3aW5kb3cuc2hhZG93T2JqZWN0W3RhZ11bXCJmYWN0b3JcIl0ucHVzaChhcnJbNV0pO1xuICAgIH1cblxuXHRyZXR1cm4gXCJcIjtcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJsZXR0ZXJTcGFjaW5nXCIpIHtcbiAgICBhdHRycy52YWx1ZSA9IChhdHRycy52YWx1ZS85KSArIFwiXCI7XG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwiZGl2aWRlckRyYXdhYmxlXCIpIHtcbiAgICBwcmVQZW5kID0gXCJzZXRfMzQyMzcyPWN0eC0+Z2V0UGFja2FnZU5hbWU7c2V0X3Jlcz1jdHgtPmdldFJlc291cmNlcztzZXRfMzY4MjQ4PWdldF9yZXMtPmdldElkZW50aWZpZXI6c19cIisgIGF0dHJzLnZhbHVlICtcIixzX2RyYXdhYmxlLGdldF8zNDIzNzI7c2V0X3Jlcz1jdHgtPmdldFJlc291cmNlcztzZXRfNDgyMzgwPWdldF9yZXMtPmdldERyYXdhYmxlOmdldF8zNjgyNDg7XCJcbiAgICBjdXJyVHJhbnNWYWwgPSBcImdldF80ODIzODBcIjtcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJ0ZXh0RnJvbUh0bWxcIikge1xuICAgIHByZVBlbmQgPSBwYXJzZUh0bWwoaGFuZGxlU3BlY2lhbENoYXJzKGF0dHJzLnZhbHVlKSk7XG4gICAgY3VyclRyYW5zVmFsID0gJ2dldF9odG1sJztcbiAgfVxuXG4gIGlmKGF0dHJzLmtleSA9PSBcImJhY2tncm91bmRUaW50XCIpe1xuICAgIGNvbG9yID0gYXR0cnMudmFsdWU7XG4gICAgcHJlUGVuZCA9IHBhcnNlQ29sb3IoY29sb3IpKydzZXRfY29sb3JzdGF0ZT1hbmRyb2lkLmNvbnRlbnQucmVzLkNvbG9yU3RhdGVMaXN0LT52YWx1ZU9mOmdldF9jb2xvckludDsnIDtcbiAgICBjdXJyVHJhbnNWYWwgPSAnZ2V0X2NvbG9yc3RhdGUnXG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwidHlwZWZhY2VcIikge1xuICAgIHByZVBlbmQgPSBcInNldF9mYWNlPXRoaXMtPmdldFR5cGVmYWNlO1wiXG4gICAgY3VyclRyYW5zVmFsID0gJ2dldF9mYWNlLCcgKyBhcHBlbmRBcmdzKGF0dHJzLG9iaik7XG4gIH1cblxuICBpZihhdHRycy5rZXkgPT0gXCJidXR0b25UaW50XCIpe1xuICAgIGNvbG9yID0gYXR0cnMudmFsdWU7XG4gICAgcHJlUGVuZCA9IHBhcnNlQ29sb3IoY29sb3IpKydzZXRfY29sb3JzdGF0ZT1hbmRyb2lkLmNvbnRlbnQucmVzLkNvbG9yU3RhdGVMaXN0LT52YWx1ZU9mOmdldF9jb2xvckludDsnIDtcbiAgICBjdXJyVHJhbnNWYWwgPSAnZ2V0X2NvbG9yc3RhdGUnXG4gIH1cblxuICBpZihhdHRycy5rZXkgPT0gXCJoaW50Q29sb3JcIil7XG4gICAgY29sb3IgPSBhdHRycy52YWx1ZTtcbiAgICBwcmVQZW5kID0gcGFyc2VDb2xvcihjb2xvcikrJ3NldF9jb2xvcnN0YXRlPWFuZHJvaWQuY29udGVudC5yZXMuQ29sb3JTdGF0ZUxpc3QtPnZhbHVlT2Y6Z2V0X2NvbG9ySW50OycgO1xuICAgIGN1cnJUcmFuc1ZhbCA9ICdnZXRfY29sb3JzdGF0ZSdcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJidG5CYWNrZ3JvdW5kXCIpIHtcbiAgICBjb2xvciA9IGF0dHJzLnZhbHVlO1xuICAgIHByZVBlbmQgPSAnc2V0X21vZGU9YW5kcm9pZC5ncmFwaGljcy5Qb3J0ZXJEdWZmLT5pbnRUb01vZGU6aV85OycgKyAgcGFyc2VDb2xvcihjb2xvcik7XG4gICAgY3VyclRyYW5zVmFsID0gICdnZXRfY29sb3JJbnQsZ2V0X21vZGUnO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcInNlbGVjdGFibGVJdGVtXCIpIHtcbiAgICBjb2xvciA9IGF0dHJzLnZhbHVlO1xuICAgIHByZVBlbmQgPSAgXCJzZXRfb3V0dj1hbmRyb2lkLnV0aWwuVHlwZWRWYWx1ZS0+bmV3O3NldF90aGVtZT1jdHgtPmdldFRoZW1lO2dldF90aGVtZS0+cmVzb2x2ZUF0dHJpYnV0ZTppXzE2ODQzNTM0LGdldF9vdXR2LGJfdHJ1ZTtzZXRfYz1nZXRfb3V0di0+Z2V0Q2xhc3M7c2V0X2Y9Z2V0X2MtPmdldERlY2xhcmVkRmllbGQ6c19yZXNvdXJjZUlkO2dldF9mLT5zZXRBY2Nlc3NpYmxlOmJfdHJ1ZTtzZXRfdj1nZXRfZi0+Z2V0OmdldF9vdXR2O1wiXG4gICAgY3VyclRyYW5zVmFsID0gICdnZXRfdic7XG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwidXJsXCIpIHtcbiAgICBwcmVQZW5kID0gXCJzZXRfU2V0dGluZz10aGlzLT5nZXRTZXR0aW5ncztnZXRfU2V0dGluZy0+c2V0SmF2YVNjcmlwdEVuYWJsZWQ6Yl90cnVlO2dldF9TZXR0aW5nLT5zZXREb21TdG9yYWdlRW5hYmxlZDpiX3RydWU7XCI7XG4gICAgdmFyIGNvbnZlcnRUb1N0cmluZyA9IFwic2V0XzExMjc9YW5kcm9pZC51dGlsLkJhc2U2NC0+ZGVjb2RlOnNfXCIgKyBidG9hKGF0dHJzLnZhbHVlKSArIFwiLGlfMDtzZXRfdXJsPWphdmEubGFuZy5TdHJpbmctPm5ldzpnZXRfMTEyNztcIlxuICAgIHByZVBlbmQgKz0gY29udmVydFRvU3RyaW5nO1xuICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0X3VybFwiO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcInBhY2thZ2VJY29uXCIpIHtcbiAgICBwcmVQZW5kID0gXCJzZXRfUE09Y3R4LT5nZXRQYWNrYWdlTWFuYWdlcjtzZXRfQUk9Z2V0X1BNLT5nZXRBcHBsaWNhdGlvbkluZm86c19cIiArIGF0dHJzLnZhbHVlICsgXCIsaV8wO3NldF8xMTc0Nz1nZXRfQUktPmxvYWRJY29uOmdldF9QTTtcIjtcbiAgICBjdXJyVHJhbnNWYWwgPSBcImdldF8xMTc0N1wiO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcImltYWdlVXJsXCIpIHtcblxuICAgIGlmKGlzVVJMKGF0dHJzLnZhbHVlKSkge1xuICAgICAgaWYodHlwZW9mIHdpbmRvdy5fX1BST1hZX0ZOID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgd2luZG93Ll9fUFJPWFlfRk4gPSB7fTtcbiAgICAgIH1cbiAgICAgIHZhciBpbWFnZSA9IGF0dHJzLnZhbHVlLnN1YnN0cihhdHRycy52YWx1ZS5sYXN0SW5kZXhPZignLycpICsgMSlcbiAgICAgIHZhciBjYWxsYmFjayA9IFwib25JbWFnZVwiICsgaW1hZ2Uuc3Vic3RyKDAsIGltYWdlLmluZGV4T2YoJy4nKSlcblxuICAgICAgdmFyIGZpbGVQcmVzZW50ID0gKHR5cGVvZiBKQnJpZGdlLmlzRmlsZVByZXNlbnQgPT0gXCJmdW5jdGlvblwiKSAmJiBKQnJpZGdlLmlzRmlsZVByZXNlbnQoaW1hZ2UpO1xuICAgICAgaWYgKCFmaWxlUHJlc2VudCkge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBjYWxsYmFja01hcHBlci5tYXAoZnVuY3Rpb24gKGlzTmV3LCB1cmwsIGZpbGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgaWQgPSBhbGxQcm9wcy5maW5kKGEgPT4gYS5rZXkgPT09IFwiaWRcIik7XG4gICAgICAgICAgaWYgKCFpZCkgcmV0dXJuO1xuICAgICAgICAgIHZhciB1cmxTZXRDb21tYW5kcyA9IFwic2V0X2RpcmVjdG9yeT1jdHgtPmdldERpcjpzX2p1c3BheSxpXzA7XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldF9yZXNvbHZlZEZpbGU9amF2YS5pby5GaWxlLT5uZXc6Z2V0X2RpcmVjdG9yeSxzX1wiICsgZmlsZU5hbWUgKyBcIjtcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0X3Jlc29sdmVkUGF0aD1nZXRfcmVzb2x2ZWRGaWxlLT50b1N0cmluZztcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0X2RpbWFnZT1hbmRyb2lkLmdyYXBoaWNzLmRyYXdhYmxlLkRyYXdhYmxlLT5jcmVhdGVGcm9tUGF0aDpnZXRfcmVzb2x2ZWRQYXRoO1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRfaW1nVj1jdHgtPmZpbmRWaWV3QnlJZDppX1wiICsgaWQudmFsdWUgKyBcIjtcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0X2ltZ1YtPnNldEltYWdlRHJhd2FibGU6Z2V0X2RpbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuZHJvaWQucnVuSW5VSSh1cmxTZXRDb21tYW5kcyAsbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICBKQnJpZGdlLnJlbmV3RmlsZShhdHRycy52YWx1ZSwgaW1hZ2UsIGNhbGxiYWNrKTtcbiAgICAgIH0gZWxzZSBpZihKQnJpZGdlLmdldEZpbGVQYXRoKSB7XG4gICAgICAgIHByZVBlbmQgPSBcInNldF9kaXJlY3Rvcnk9Y3R4LT5nZXREaXI6c19qdXNwYXksaV8wO1wiICtcbiAgICAgICAgICAgICAgICAgICAgXCJzZXRfcmVzb2x2ZWRGaWxlPWphdmEuaW8uRmlsZS0+bmV3OmdldF9kaXJlY3Rvcnksc19cIiArIEpCcmlkZ2UuZ2V0RmlsZVBhdGgoaW1hZ2UpICsgXCI7XCIgK1xuICAgICAgICAgICAgICAgICAgICBcInNldF9yZXNvbHZlZFBhdGg9Z2V0X3Jlc29sdmVkRmlsZS0+dG9TdHJpbmc7XCIgK1xuICAgICAgICAgICAgICAgICAgICBcInNldF9kaW1hZ2U9YW5kcm9pZC5ncmFwaGljcy5kcmF3YWJsZS5EcmF3YWJsZS0+Y3JlYXRlRnJvbVBhdGg6Z2V0X3Jlc29sdmVkUGF0aDtcIlxuICAgICAgICBjdXJyVHJhbnNWYWwgPSBcImdldF9kaW1hZ2VcIjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcHJlUGVuZCA9IFwic2V0XzM0MjM3Mj1jdHgtPmdldFBhY2thZ2VOYW1lO3NldF9yZXM9Y3R4LT5nZXRSZXNvdXJjZXM7c2V0XzM2ODI0OD1nZXRfcmVzLT5nZXRJZGVudGlmaWVyOnNfXCIrICBhdHRycy52YWx1ZSArXCIsc19kcmF3YWJsZSxnZXRfMzQyMzcyO3NldF9yZXM9Y3R4LT5nZXRSZXNvdXJjZXM7c2V0XzQ4MjM4MD1nZXRfcmVzLT5nZXREcmF3YWJsZTpnZXRfMzY4MjQ4O1wiXG4gICAgICBjdXJyVHJhbnNWYWwgPSBcImdldF80ODIzODBcIjtcbiAgICB9XG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwiZGVmYXVsdEltYWdlXCIpIHtcbiAgICBwcmVQZW5kID0gXCJzZXRfMzQyMzcyPWN0eC0+Z2V0UGFja2FnZU5hbWU7c2V0X3Jlcz1jdHgtPmdldFJlc291cmNlcztzZXRfMzY4MjQ4PWdldF9yZXMtPmdldElkZW50aWZpZXI6c19cIisgIGF0dHJzLnZhbHVlICtcIixzX2RyYXdhYmxlLGdldF8zNDIzNzI7c2V0X3Jlcz1jdHgtPmdldFJlc291cmNlcztzZXRfNDgyMzgwPWdldF9yZXMtPmdldERyYXdhYmxlOmdldF8zNjgyNDg7XCJcbiAgICBjdXJyVHJhbnNWYWwgPSBcImdldF80ODIzODBcIjtcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJwbGFjZUhvbGRlclwiKSB7XG4gICAgcHJlUGVuZCA9IFwic2V0XzM0MjM3Mj1jdHgtPmdldFBhY2thZ2VOYW1lO3NldF9yZXM9Y3R4LT5nZXRSZXNvdXJjZXM7c2V0XzM2ODI0OD1nZXRfcmVzLT5nZXRJZGVudGlmaWVyOnNfXCIrICBhdHRycy52YWx1ZSArXCIsc19kcmF3YWJsZSxnZXRfMzQyMzcyO3NldF9yZXM9Y3R4LT5nZXRSZXNvdXJjZXM7c2V0XzQ4MjM4MD1nZXRfcmVzLT5nZXREcmF3YWJsZTpnZXRfMzY4MjQ4O1wiXG4gICAgY3VyclRyYW5zVmFsID0gXCJnZXRfNDgyMzgwXCI7XG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwiZHluYW1pY1VybFwiKSB7XG4gICAgcHJlUGVuZCA9IFwic2V0X2RpcmVjdG9yeT1jdHgtPmdldERpcjpzX2p1c3BheSxpXzA7XCIgK1xuICAgIFwic2V0X3Jlc29sdmVkTmFtZT1pbi5qdXNwYXkuaHlwZXJzZGsuc2VydmljZXMuRmlsZVByb3ZpZGVyU2VydmljZS0+YXBwZW5kU2RrTmFtZUFuZFZlcnNpb246c19cIiArIGF0dHJzLnZhbHVlICsgXCI7XCIgK1xuICAgIFwic2V0X3Jlc29sdmVkRmlsZT1qYXZhLmlvLkZpbGUtPm5ldzpnZXRfZGlyZWN0b3J5LGdldF9yZXNvbHZlZE5hbWU7XCIgK1xuICAgIFwic2V0X3Jlc29sdmVkUGF0aD1nZXRfcmVzb2x2ZWRGaWxlLT50b1N0cmluZztcIiArXG4gICAgXCJzZXRfZGltYWdlPWFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuRHJhd2FibGUtPmNyZWF0ZUZyb21QYXRoOmdldF9yZXNvbHZlZFBhdGg7XCI7XG5cbiAgICBjdXJyVHJhbnNWYWwgPSBcImdldF9kaW1hZ2VcIjtcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJiYWNrZ3JvdW5kRHJhd2FibGVcIikge1xuICAgIHByZVBlbmQgPSBcInNldF8zNDIzNzI9Y3R4LT5nZXRQYWNrYWdlTmFtZTtzZXRfcmVzPWN0eC0+Z2V0UmVzb3VyY2VzO3NldF8zNjgyNDg9Z2V0X3Jlcy0+Z2V0SWRlbnRpZmllcjpzX1wiKyAgYXR0cnMudmFsdWUgK1wiLHNfZHJhd2FibGUsZ2V0XzM0MjM3MjtzZXRfcmVzPWN0eC0+Z2V0UmVzb3VyY2VzO3NldF80ODIzODA9Z2V0X3Jlcy0+Z2V0RHJhd2FibGU6Z2V0XzM2ODI0ODtcIlxuICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0XzQ4MjM4MFwiO1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcImZvbnRGYW1pbHlcIikge1xuICAgIGF0dHJzLnZhbHVlID0gYXBwZW5kQXJncyhhdHRycyxvYmopO1xuICAgIHZhbHVlcyA9IGF0dHJzLnZhbHVlLnNwbGl0KCcsJyk7XG4gICAgcmV0dXJuIFwic2V0X2ZvbnRGYWNlPWFuZHJvaWQuZ3JhcGhpY3MuVHlwZWZhY2UtPmNyZWF0ZTpcIit2YWx1ZXNbMF0rXCIsXCIrdmFsdWVzWzFdK1wiO1wiK1widGhpcy0+c2V0VHlwZWZhY2U6Z2V0X2ZvbnRGYWNlLFwiK3ZhbHVlc1sxXStcIjtcIlxuICB9XG5cbiAgaWYoYXR0cnMua2V5PT1cImZvbnRTaXplXCIpIHtcbiAgICBjdXJyVHJhbnNWYWwgPSBhcHBlbmRBcmdzKGF0dHJzLG9iaikuc3BsaXQoJywnKVswXSArICcsZl8nICsgKCh3aW5kb3cuX19XSURUSCooYXR0cnMudmFsdWUuc3BsaXQoJywnKVsxXSkqMSkpLzEwMDtcbiAgfVxuXG4gIGlmKGF0dHJzLmtleT09XCJjdXJ2ZVwiKSB7XG4gICAgcHJlUGVuZCA9ICBcInNldF9pbnRlcnA9YW5kcm9pZC52aWV3LmFuaW1hdGlvbi5EZWNlbGVyYXRlSW50ZXJwb2xhdG9yLT5uZXc7XCI7XG4gICAgY3VyclRyYW5zVmFsID0gXCJnZXRfaW50ZXJwXCI7XG4gIH1cblxuICBpZihhdHRycy5rZXk9PVwic2hpbW1lclwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBzaGltbWVyTW9kZSA9IFwiY29tLmZhY2Vib29rLnNoaW1tZXIuU2hpbW1lciRDb2xvckhpZ2hsaWdodEJ1aWxkZXJcIjtcbiAgICAgIHZhciBzaGltbWVyQ21kID0gXCJzZXRfc2Rydz1jb20uZmFjZWJvb2suc2hpbW1lci5TaGltbWVyRHJhd2FibGUtPm5ldztcIjtcbiAgICAgIHZhciBzaGltbWVySnNvbiA9IEpTT04ucGFyc2UoYXR0cnMudmFsdWUpO1xuICAgICAgY29uc29sZS5sb2coc2hpbW1lckpzb24sIHNoaW1tZXJKc29uLmNvbnRlbnRzLCBhdHRycywgYXR0cnMsIG9iaiwgYmVsb25nc1RvLCB0cmFuc2Zvcm1GbiwgYWxsUHJvcHMsIHR5cGUpXG4gICAgICAvLyBpZihzaGltbWVySnNvbiAmJiBzaGltbWVySnNvbi5jb250ZW50cyl7XG5cbiAgICAgICAgc2hpbW1lckpzb24gPSBzaGltbWVySnNvbi5jb250ZW50c1xuICAgICAgLy8gfVxuICAgICAgaWYgKHNoaW1tZXJKc29uICYmIHNoaW1tZXJKc29uLnNoaW1tZXJUeXBlID09IFwiYWxwaGFcIil7XG4gICAgICAgIHNoaW1tZXJNb2RlID0gXCJjb20uZmFjZWJvb2suc2hpbW1lci5TaGltbWVyJEFscGhhSGlnaGxpZ2h0QnVpbGRlclwiXG4gICAgICAgIHNoaW1tZXJDbWQgKz0gXCJzZXRfYnVpbGRlcj1cIiArIHNoaW1tZXJNb2RlICsgXCItPm5ldztcIlxuICAgICAgICBpZihzaGltbWVySnNvbi5iYXNlKXtcbiAgICAgICAgICBzaGltbWVyQ21kICs9IFwiZ2V0X2J1aWxkZXItPnNldEJhc2VBbHBoYTpmX1wiICsgc2hpbW1lckpzb24uYmFzZSArIFwiO1wiXG4gICAgICAgIH1cbiAgICAgICAgaWYoc2hpbW1lckpzb24uaGlnaGxpZ2h0KXtcbiAgICAgICAgICBzaGltbWVyQ21kICs9IFwiZ2V0X2J1aWxkZXItPnNldEhpZ2hsaWdodEFscGhhOmZfXCIgKyBzaGltbWVySnNvbi5oaWdobGlnaHQgKyBcIjtcIlxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGltbWVyQ21kICs9IFwic2V0X2J1aWxkZXI9XCIgKyBzaGltbWVyTW9kZSArIFwiLT5uZXc7XCJcbiAgICAgICAgaWYoc2hpbW1lckpzb24uYmFzZSl7XG4gICAgICAgICAgc2hpbW1lckNtZCArPSBwYXJzZUNvbG9yKHNoaW1tZXJKc29uLmJhc2UgLCBcInNldF9iYXNlQ29sb3JcIikgKyBcIjtcIlxuICAgICAgICAgIHNoaW1tZXJDbWQgKz0gXCJnZXRfYnVpbGRlci0+c2V0QmFzZUNvbG9yOmdldF9iYXNlQ29sb3I7XCJcbiAgICAgICAgfVxuICAgICAgICBpZihzaGltbWVySnNvbi5oaWdobGlnaHQpe1xuICAgICAgICAgIHNoaW1tZXJDbWQgKz0gcGFyc2VDb2xvcihzaGltbWVySnNvbi5oaWdobGlnaHQgLCBcInNldF9iYXNlQ29sb3JcIikgKyBcIjtcIlxuICAgICAgICAgIHNoaW1tZXJDbWQgKz0gXCJnZXRfYnVpbGRlci0+c2V0SGlnaGxpZ2h0Q29sb3I6Z2V0X2Jhc2VDb2xvcjtcIlxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKHNoaW1tZXJKc29uLnRpbHQpe1xuICAgICAgICBzaGltbWVyQ21kICs9IFwiZ2V0X2J1aWxkZXItPnNldFRpbHQ6Zl9cIiArIHNoaW1tZXJKc29uLnRpbHQgKyBcIjtcIlxuICAgICAgfVxuICAgICAgaWYoc2hpbW1lckpzb24uaW50ZW5zaXR5KXtcbiAgICAgICAgc2hpbW1lckNtZCArPSBcImdldF9idWlsZGVyLT5zZXRJbnRlbnNpdHk6Zl9cIiArIHNoaW1tZXJKc29uLmludGVuc2l0eSArIFwiO1wiXG4gICAgICB9XG4gICAgICBpZihzaGltbWVySnNvbi5kaXJlY3Rpb24pe1xuICAgICAgICBzaGltbWVyQ21kICs9IFwiZ2V0X2J1aWxkZXItPnNldERpcmVjdGlvbjppX1wiICsgc2hpbW1lckpzb24uZGlyZWN0aW9uICsgXCI7XCJcbiAgICAgIH1cbiAgICAgIGlmKHNoaW1tZXJKc29uLmR1cmF0aW9uKXtcbiAgICAgICAgc2hpbW1lckNtZCArPSBcImdldF9idWlsZGVyLT5zZXREdXJhdGlvbjpsX1wiICsgc2hpbW1lckpzb24uZGlyZWN0aW9uICsgXCI7XCJcbiAgICAgIH1cbiAgICAgIGlmKHNoaW1tZXJKc29uLnJlcGVhdENvdW50KXtcbiAgICAgICAgc2hpbW1lckNtZCArPSBcImdldF9idWlsZGVyLT5zZXRSZXBlYXRDb3VudDppX1wiICsgc2hpbW1lckpzb24ucmVwZWF0Q291bnQgKyBcIjtcIlxuICAgICAgfVxuICAgICAgaWYoc2hpbW1lckpzb24ucmVwZWF0RGVsYXkpe1xuICAgICAgICBzaGltbWVyQ21kICs9IFwiZ2V0X2J1aWxkZXItPnNldFJlcGVhdERlbGF5OmxfXCIgKyBzaGltbWVySnNvbi5yZXBlYXREZWxheSArIFwiO1wiXG4gICAgICB9XG4gICAgICBpZihzaGltbWVySnNvbi5jbGlwVG9DaGlsZHJlbil7XG4gICAgICAgIHNoaW1tZXJDbWQgKz0gXCJnZXRfYnVpbGRlci0+c2V0Q2xpcFRvQ2hpbGRyZW46Yl9cIiArIHNoaW1tZXJKc29uLmNsaXBUb0NoaWxkcmVuICsgXCI7XCJcbiAgICAgIH1cbiAgICAgIGlmKHNoaW1tZXJKc29uLnNoYXBlKXtcbiAgICAgICAgc2hpbW1lckNtZCArPSBcImdldF9idWlsZGVyLT5zZXRTaGFwZTppX1wiICsgc2hpbW1lckpzb24uc2hhcGUgKyBcIjtcIlxuICAgICAgfVxuICAgICAgaWYoc2hpbW1lckpzb24uZHJvcE9mZil7XG4gICAgICAgIHNoaW1tZXJDbWQgKz0gXCJnZXRfYnVpbGRlci0+c2V0RHJvcG9mZjpmX1wiICsgc2hpbW1lckpzb24uZHJvcE9mZiArIFwiO1wiXG4gICAgICB9XG4gICAgICBzaGltbWVyQ21kICs9IFwic2V0X3NoaW1tZXI9Z2V0X2J1aWxkZXItPmJ1aWxkO1wiXG4gICAgICBpZih0eXBlID09IFwic2hpbW1lckZyYW1lTGF5b3V0XCIpe1xuICAgICAgICBhdHRycy5rZXkgPSBcInNoaW1tZXJWaWV3XCJcbiAgICAgICAgY3VyclRyYW5zVmFsID0gXCJnZXRfc2hpbW1lclwiO1xuICAgICAgICBvYmouZm5OYW1lID0gb2JqLmFsdGVybmF0ZUZuTmFtZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hpbW1lckNtZCArPSBcImdldF9zZHJ3LT5zZXRTaGltbWVyOmdldF9zaGltbWVyO1wiXG4gICAgICAgIGlmKHNoaW1tZXJKc29uLmFjdGl2ZSl7XG4gICAgICAgICAgYWZ0ZXJDbWQgKz0gXCJnZXRfc2Rydy0+c3RhcnRTaGltbWVyO1wiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWZ0ZXJDbWQgKz0gXCJnZXRfc2Rydy0+c3RvcFNoaW1tZXI7XCJcbiAgICAgICAgfVxuICAgICAgICBjdXJyVHJhbnNWYWwgPSBcImdldF9zZHJ3XCI7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcInVuYWJsZSB0byBzZXQgc2hpbW1lclwiKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhzaGltbWVyQ21kKVxuICAgIHByZVBlbmQgPSAgc2hpbW1lckNtZDtcbiAgfVxuXG4gIGlmKGF0dHJzLmtleT09XCJmb2N1c1wiKSB7XG4gICAgYWZ0ZXJDbWQgPSAgXCJzZXRfd2luPWN0eC0+Z2V0V2luZG93O2dldF93aW4tPnNldFNvZnRJbnB1dE1vZGU6NTtcIjtcbiAgfVxuXG4gIGlmIChhdHRycy5rZXkgPT0gXCJzaGFkb3dMYXllclwiKSB7XG4gICAgY29sb3IgPSBhdHRycy52YWx1ZS5zcGxpdCgnLCcpWzNdO1xuICAgIGFyciA9IGFwcGVuZEFyZ3MoYXR0cnMsb2JqKS5zcGxpdCgnLCcpO1xuICAgIGFyci5zcGxpY2UoYXJyLmxlbmd0aDEgLCAxKTtcblxuICAgIHByZVBlbmQgPSBwYXJzZUNvbG9yKGNvbG9yKTtcbiAgICBjdXJyVHJhbnNWYWwgPSAgYXJyLmpvaW4oJywnKSArICcsZ2V0X2NvbG9ySW50J1xuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcInZhbHVlc1wiKSB7XG4gICAgdmFyIHZhbCA9IGF0dHJzLnZhbHVlLnNwbGl0KFwiLFwiKTtcbiAgICB2YXIgdmFsdWVzU3RyID0gXCJcIiwgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZWxlbWVudHMgPSB2YWxbaV0uc3BsaXQoXCI6XCIpO1xuICAgICAgdmFsdWVzU3RyICs9IFwiZ2V0X3NwaW5uZXJBcnJheS0+YWRkOnNfXCIrZWxlbWVudHNbMF07XG4gICAgICBmb3IodmFyIGogPSAxOyBqIDwgZWxlbWVudHMubGVuZ3RoOyBqKyspXG4gICAgICAgIHZhbHVlc1N0ciArPSBcIlxcblwiICsgZWxlbWVudHNbal07XG4gICAgICAgIHZhbHVlc1N0ciArPSBcIjtcIjtcbiAgICB9XG4gICAgcHJlUGVuZCA9ICBcInNldF9zcGlubmVyQXJyYXk9amF2YS51dGlsLkFycmF5TGlzdC0+bmV3O1wiKyB2YWx1ZXNTdHIgK1xuICAgIFwic2V0X3NwaW5uZXJWYWx1ZXM9Z2V0X3NwaW5uZXJBcnJheS0+dG9BcnJheTtzZXRfc3Bpbm5lckFkYXB0ZXI9YW5kcm9pZC53aWRnZXQuQXJyYXlBZGFwdGVyLT5uZXc6Y3R4X2N0eCxpXzE3MzY3MDQzLGdldF9zcGlubmVyVmFsdWVzO1wiO1xuICAgIGN1cnJUcmFuc1ZhbCA9IFwiZ2V0X3NwaW5uZXJBZGFwdGVyXCI7XG4gIH1cblxuICBpZiAoYXR0cnMua2V5ID09IFwic3RhcnRQb2ludFwiKSB7XG4gICAgdmFyIGFyZyA9IEpTT04ucGFyc2UoYXR0cnMudmFsdWUpO1xuICAgIHByZVBlbmQgPSBcInRoaXMtPnNldFN0YXJ0WDpmX1wiICsgYXJnLnggKyBcIjtcIlxuICAgIHByZVBlbmQgKz0gXCJ0aGlzLT5zZXRTdGFydFk6Zl9cIiArIGFyZy55ICsgXCI7XCJcbiAgICByZXR1cm4gcHJlUGVuZFxuICB9XG5cbiAgaWYgKGF0dHJzLmtleSA9PSBcImVuZFBvaW50XCIpIHtcbiAgICB2YXIgYXJnID0gSlNPTi5wYXJzZShhdHRycy52YWx1ZSlcbiAgICBwcmVQZW5kID0gXCJ0aGlzLT5zZXRFbmRYOmZfXCIgKyBhcmcueCArIFwiO1wiXG4gICAgcHJlUGVuZCArPSBcInRoaXMtPnNldEVuZFk6Zl9cIiArIGFyZy55ICsgXCI7XCJcbiAgICByZXR1cm4gcHJlUGVuZFxuICB9XG5cbiAgaWYgKGJlbG9uZ3NUbyA9PSBcIlZJRVdcIilcbiAga2V5V29yZCA9IGdsb2JhbE9iak1hcFtiZWxvbmdzVG9dLnZhbDtcbiAgZWxzZVxuICBrZXlXb3JkID0gJ2dldF8nICsgZ2xvYmFsT2JqTWFwW2JlbG9uZ3NUb10udmFsO1xuXG4gIGlmICh0cmFuc2Zvcm1GbiB8fCBhdHRycy5rZXkgPT0gXCJkdXJhdGlvblwiIHx8IGF0dHJzLmtleSA9PSBcImRlbGF5XCIgfHwgYXR0cnMua2V5ID09IFwiY3VydmVcIilcbiAgX2NtZCA9IGtleVdvcmQgKyAgJy0+JyArICgodHlwZW9mIG9iai5mbk5hbWUgPT0gXCJ1bmRlZmluZWRcIik/b2JqLnZhck5hbWU6b2JqLmZuTmFtZSk7XG4gIGVsc2VcbiAgX2NtZCA9IGtleVdvcmQgKyAnLT4nICsgICBhdHRycy5rZXk7XG5cbiAgaWYgKG9iai52YWx1ZXMgJiYgb2JqLnZhbHVlcy5sZW5ndGgpXG4gIF9jbWQgKz0gJzonO1xuXG4gIGlmICghcHJlUGVuZCAmJiAhY3VyclRyYW5zVmFsKVxuICBfY21kICs9ICBhcHBlbmRBcmdzKGF0dHJzLCBvYmopICsgJzsnXG4gIGVsc2VcbiAgX2NtZCArPSBjdXJyVHJhbnNWYWwgKyAnOyc7XG5cbiAgLy8gZm9yIHRlc3RpbmdcbiAgaWYgKHR5cGVvZiBmaW5hbENtZCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNvbnNvbGUubG9nKGJlZm9yZUNtZCAgKyBwcmVQZW5kICsgX2NtZCArIGFmdGVyQ21kKTtcbiAgICByZXR1cm4gZmluYWxDbWQ7XG4gIH1cbiAgaWYodHlwZSA9PSBcInNoaW1tZXJGcmFtZUxheW91dFwiKXtcbiAgICBjb25zb2xlLmxvZyhiZWZvcmVDbWQgICsgcHJlUGVuZCArIF9jbWQgKyBhZnRlckNtZClcbiAgfVxuICByZXR1cm4gYmVmb3JlQ21kICArIHByZVBlbmQgKyBfY21kICsgYWZ0ZXJDbWRcbn1cblxuZnVuY3Rpb24gcGFyc2VBdHRycyhhdHRycywgYmVsb25nc1RvLCB0cmFuc2Zvcm1GbiwgdHlwZSkge1xuICB2YXIgb2JqO1xuICB2YXIgcmV0VmFsO1xuICB2YXIgY21kID0gJyc7XG4gIHZhciBfY21kO1xuXG4gIGZvciAodmFyIGkgPTAgO2k8YXR0cnMubGVuZ3RoOyBpKyspIHtcbiAgICBvYmogPSBtYXBQYXJhbXNbYXR0cnNbaV0ua2V5XTtcbiAgICBpZiAob2JqKSB7XG4gICAgICBjbWQgKz0gbWFzaFRoaXMoYXR0cnNbaV0sIG9iaiwgYmVsb25nc1RvLCB0cmFuc2Zvcm1GbiwgYXR0cnMsIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChiZWxvbmdzVG8gPT0gXCJWSUVXXCIpXG4gIHJldHVybiBjbWQ7XG5cbiAgcmV0dXJuIHByZXBhcmVDdHIoYXR0cnMsIGJlbG9uZ3NUbykgKyAnOycgKyBjbWQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlR3JvdXBzKHR5cGUsIGdyb3VwcywgY29uZmlnKSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZ3JvdXBzKTtcbiAgdmFyIGN0cjtcblxuICBmb3IgKHZhciBpID0gMDsgaTwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGlmICAoa2V5c1tpXSA9PSBcIkZPUkVHUk9VTkRcIikge1xuICAgICAgaWYgKCFnbG9iYWxPYmpNYXBba2V5c1tpXV0pIHtcbiAgICAgICAgaWYgKGdldFNldFR5cGUgPT0gXCJzZXRcIikge1xuICAgICAgICAgIGdsb2JhbE9iak1hcFtrZXlzW2ldXSA9IHtjdHI6IFwiYW5kcm9pZC5ncmFwaGljcy5kcmF3YWJsZS5HcmFkaWVudERyYXdhYmxlLT5uZXdcIiwgIHZhbDogIGtleXNbaV0gfTtcbiAgICAgICAgICBjb21tYW5kICs9ICdzZXRfJyArICBnbG9iYWxPYmpNYXBba2V5c1tpXV0udmFsICsgJz0nICsgIHBhcnNlQXR0cnMoZ3JvdXBzW2tleXNbaV1dLCBrZXlzW2ldLCB0cnVlLCB0eXBlKVxuICAgICAgICAgICAgKyAndGhpcy0+JyArIFwic2V0Rm9yZWdyb3VuZFwiICsgJzonICsgJ2dldF8nICsgIGdsb2JhbE9iak1hcFtrZXlzW2ldXS52YWwgKyAnOydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnbG9iYWxPYmpNYXBba2V5c1tpXV0gPSB7Y3RyOiAnZ2V0X3ZpZXctPmdldEZvcmVncm91bmQnLCAgdmFsOiAga2V5c1tpXSB9O1xuICAgICAgICAgIGNvbW1hbmQgKz0gJ3NldF8nICsgIGdsb2JhbE9iak1hcFtrZXlzW2ldXS52YWwgKyAnPScgKyAgcGFyc2VBdHRycyhncm91cHNba2V5c1tpXV0sIGtleXNbaV0sIHRydWUsIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChrZXlzW2ldID09IFwiTEFZT1VUX1RSQU5TSVRJT05cIikge1xuICAgICAgICBnbG9iYWxPYmpNYXAuTEFZT1VUX1RSQU5TSVRJT04gPSB7Y3RyOiAnYW5kcm9pZC5hbmltYXRpb24uTGF5b3V0VHJhbnNpdGlvbi0+bmV3JywgdmFsOiBcIkxBWU9VVF9UUkFOU0lUSU9OXCJ9O1xuICAgICAgICBjb21tYW5kICs9ICAnc2V0XycgKyAgZ2xvYmFsT2JqTWFwLkxBWU9VVF9UUkFOU0lUSU9OLnZhbCArICc9JyArICBwYXJzZUF0dHJzKGdyb3Vwcy5QQVJBTVMsICdMQVlPVVRfVFJBTlNJVElPTicsIHRydWUsIHR5cGUpXG4gICAgICAgICAgICAgKyAndGhpcy0+JyArIFwic2V0TGF5b3V0VHJhbnNpdGlvblwiICsgJzpnZXRfJyAgKyBnbG9iYWxPYmpNYXAuTEFZT1VUX1RSQU5TSVRJT04udmFsICsgJzsnO1xuICAgIH0gZWxzZSBpZiAoa2V5c1tpXSA9PSBcIlZJRVdcIikge1xuICAgICAgaWYgKCFnbG9iYWxPYmpNYXAuVklFVykge1xuICAgICAgICBpZiAoZ2V0U2V0VHlwZSA9PSBcInNldFwiKVxuICAgICAgICBnbG9iYWxPYmpNYXAuVklFVyA9IHtjdHI6IFwidGhpc1wiLCB2YWw6IFwidGhpc1wifTtcbiAgICAgICAgZWxzZVxuICAgICAgICBnbG9iYWxPYmpNYXAuVklFVyA9IHtjdHI6IFwiZ2V0X3ZpZXdcIiwgdmFsOiBcImdldF92aWV3XCJ9O1xuICAgICAgfVxuXG4gICAgICBjb21tYW5kICs9ICBwYXJzZUF0dHJzKGdyb3Vwcy5WSUVXLCAnVklFVycsIHRydWUsIHR5cGUpXG5cbiAgICB9IGVsc2UgaWYgKGtleXNbaV0gPT0gXCJQQVJBTVNcIikge1xuICAgICAgaWYgKGdldFNldFR5cGUgPT0gXCJzZXRcIikge1xuICAgICAgICBpZiAoIWdsb2JhbE9iak1hcC5QQVJBTVMpIHtcbiAgICAgICAgICBjdHIgPSBjb25maWcucm9vdD9nZXRDdHIodHlwZSk6J1BBUkFNX0NUUl9IT0xERVInO1xuICAgICAgICAgIGdsb2JhbE9iak1hcC5QQVJBTVMgPSB7Y3RyOiBjdHIsIHZhbDogXCJQQVJBTVNcIiB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29tbWFuZCArPSAgJ3NldF8nICsgIGdsb2JhbE9iak1hcC5QQVJBTVMudmFsICsgJz0nICsgIHBhcnNlQXR0cnMoZ3JvdXBzLlBBUkFNUywgJ1BBUkFNUycsIHRydWUsIHR5cGUpXG4gICAgICAgICAgICAgKyAndGhpcy0+JyArIG9iak1hcC5QQVJBTVMudmlld01ldGhvZC5zcGxpdCgnLCcpWzBdICsgJzpnZXRfJyAgKyBnbG9iYWxPYmpNYXAuUEFSQU1TLnZhbCArICc7JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghZ2xvYmFsT2JqTWFwLlBBUkFNUykge1xuICAgICAgICAgIGN0ciA9IFwiZ2V0X3ZpZXctPmdldExheW91dFBhcmFtc1wiO1xuICAgICAgICAgIGdsb2JhbE9iak1hcC5QQVJBTVMgPSB7Y3RyOiBjdHIsIHZhbDogXCJQQVJBTVNcIiB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29tbWFuZCArPSAnc2V0XycgKyAgZ2xvYmFsT2JqTWFwLlBBUkFNUy52YWwgKyAnPScgKyAgcGFyc2VBdHRycyhncm91cHNba2V5c1tpXV0sIGtleXNbaV0sIHRydWUsIHR5cGUpO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmIChrZXlzW2ldID09IFwiTVVUQVRFQkdcIikge1xuICAgICAgaWYgKCFnbG9iYWxPYmpNYXAuTVVUQVRFQkcpIHtcbiAgICAgICAgZ2xvYmFsT2JqTWFwLk1VVEFURUJHID0ge2N0cjogJ3RoaXMtPmdldEJhY2tncm91bmQnLCB2YWw6IFwiTVVUQVRFQkdcIn07XG4gICAgICB9XG5cbiAgICAgIGNvbW1hbmQgKz0gJ3NldF8nICsgIGdsb2JhbE9iak1hcC5NVVRBVEVCRy52YWwgKyAnPScgKyAgcGFyc2VBdHRycyhncm91cHNba2V5c1tpXV0sIGtleXNbaV0sIHRydWUsIHR5cGUpO1xuICAgIH0gZWxzZSBpZiAoa2V5c1tpXSA9PSBcIkFOSU1BVElPTlwiKSB7XG4gICAgICBpZiAoIWdsb2JhbE9iak1hcC5BTklNQVRJT04pIHtcbiAgICAgICAgaWYgKGdldFNldFR5cGUgPT0gXCJzZXRcIilcbiAgICAgICAgZ2xvYmFsT2JqTWFwLkFOSU1BVElPTiA9IHtjdHI6ICd0aGlzLT5hbmltYXRlJywgdmFsOiBcIkFOSU1BVElPTlwifTtcbiAgICAgICAgZWxzZVxuICAgICAgICBnbG9iYWxPYmpNYXAuQU5JTUFUSU9OID0ge2N0cjogJ2dldF92aWV3LT5hbmltYXRlJywgdmFsOiBcIkFOSU1BVElPTlwifTtcbiAgICAgIH1cblxuICAgICAgY29tbWFuZCArPSAnc2V0XycgKyAgZ2xvYmFsT2JqTWFwLkFOSU1BVElPTi52YWwgKyAnPScgKyAgcGFyc2VBdHRycyhncm91cHNba2V5c1tpXV0sIGtleXNbaV0sIGZhbHNlLCB0eXBlKTtcblxuICAgIH0gIGVsc2Uge1xuICAgICAgLy8gV29ya3Mgb25seSBmb3IgZHJhd2FibGVcbiAgICAgIGlmICghZ2xvYmFsT2JqTWFwW2tleXNbaV1dKSB7XG4gICAgICAgIGlmIChnZXRTZXRUeXBlID09IFwic2V0XCIpIHtcbiAgICAgICAgICBnbG9iYWxPYmpNYXBba2V5c1tpXV0gPSB7Y3RyOiBvYmpNYXBba2V5c1tpXV0uY3RyLCAgdmFsOiAga2V5c1tpXSB9O1xuICAgICAgICAgIGNvbW1hbmQgKz0gJ3NldF8nICsgIGdsb2JhbE9iak1hcFtrZXlzW2ldXS52YWwgKyAnPScgKyAgcGFyc2VBdHRycyhncm91cHNba2V5c1tpXV0sIGtleXNbaV0sIHRydWUsIHR5cGUpXG4gICAgICAgICAgICArICd0aGlzLT4nICsgb2JqTWFwW2tleXNbaV1dLnZpZXdNZXRob2Quc3BsaXQoJywnKVswXSArICc6JyArICdnZXRfJyArICBnbG9iYWxPYmpNYXBba2V5c1tpXV0udmFsICsgJzsnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2xvYmFsT2JqTWFwW2tleXNbaV1dID0ge2N0cjogJ2dldF92aWV3LT5nZXRCYWNrZ3JvdW5kJywgIHZhbDogIGtleXNbaV0gfTtcbiAgICAgICAgICBjb21tYW5kICs9ICdzZXRfJyArICBnbG9iYWxPYmpNYXBba2V5c1tpXV0udmFsICsgJz0nICsgIHBhcnNlQXR0cnMoZ3JvdXBzW2tleXNbaV1dLCBrZXlzW2ldLCB0cnVlLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29tbWFuZC5zdWJzdHJpbmcoMCwgY29tbWFuZC5sZW5ndGggLSAxKTtcbn1cblxudmFyIGZsYXR0ZW5PYmplY3QgPSBmdW5jdGlvbihvYikge1xuICB2YXIgdG9SZXR1cm4gPSB7fTtcbiAgZm9yICh2YXIgaSBpbiBvYikge1xuICAgIGlmICghb2IuaGFzT3duUHJvcGVydHkoaSkpIGNvbnRpbnVlO1xuICAgIGlmICgodHlwZW9mIG9iW2ldKSA9PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGZsYXRPYmplY3QgPSBmbGF0dGVuT2JqZWN0KG9iW2ldKTtcbiAgICAgIGZvciAodmFyIHggaW4gZmxhdE9iamVjdCkge1xuICAgICAgICBpZiAoIWZsYXRPYmplY3QuaGFzT3duUHJvcGVydHkoeCkpIGNvbnRpbnVlO1xuICAgICAgICB0b1JldHVyblt4XSA9IGZsYXRPYmplY3RbeF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvUmV0dXJuW2ldID0gb2JbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiB0b1JldHVybjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odHlwZSwgY29uZmlnLCBfZ2V0U2V0VHlwZSkge1xuICBjb25maWcgPSBmbGF0dGVuT2JqZWN0KGNvbmZpZyk7XG4gIGdldFNldFR5cGUgPSBfZ2V0U2V0VHlwZTtcbiAgZWxlbWVudFR5cGUgPSB0eXBlO1xuXG4gIHZhciBncm91cHMgPSAgZ2V0Q29uZmlnR3JvdXBzKGNvbmZpZyk7XG5cbiAgY29tbWFuZCA9ICcnO1xuICBnbG9iYWxPYmpNYXAgPSB7fTtcblxuICB2YXIgZmxhZyA9IDA7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoY29uZmlnKTtcbiAgZm9yICh2YXIgaT0wOyBpPGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoa2V5c1tpXSA9PSAncnVuSW5VSScpICB7XG4gICAgICBmbGFnICA9IDE7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoIWZsYWcpIHtcbiAgICBjb25maWcucnVuSW5VSSA9IHBhcnNlR3JvdXBzKHR5cGUsIGdyb3VwcywgY29uZmlnKTtcbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiAqIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuICpcbiAqIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuICogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiAqIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiAqIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4gKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiAqIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuICogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2VcbiAqIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4gKi9cblxubW9kdWxlLmV4cG9ydHMubWFwID0gKGZuKSA9PiB7XG5cdGlmKHR5cGVvZiB3aW5kb3cuX19GTl9JTkRFWCAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Ll9fRk5fSU5ERVggIT09IG51bGwpIHtcblx0XHR2YXIgcHJveHlGbk5hbWUgPSAnRicgKyB3aW5kb3cuX19GTl9JTkRFWDtcblx0XHRpZiAod2luZG93Ll9fcGF5bG9hZCAmJiB3aW5kb3cuX19wYXlsb2FkLnNlcnZpY2Upe1xuXHRcdFx0cHJveHlGbk5hbWUgPSB3aW5kb3cuX19wYXlsb2FkLnNlcnZpY2UgKyBcIl9cIiArIHByb3h5Rm5OYW1lO1xuXHRcdH1cblx0XHR3aW5kb3cuX19QUk9YWV9GTltwcm94eUZuTmFtZV0gPSBmbjtcblx0ICBcdHdpbmRvdy5fX0ZOX0lOREVYKys7XG5cdFx0cmV0dXJuIHByb3h5Rm5OYW1lO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBpbml0aWFsaXNlIHdpbmRvdy5fX0ZOX0lOREVYID0gMCBpbiBpbmRleC5qcyBvZiB5b3VyIHByb2plY3QuXCIpO1xuXHR9XG59XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRjYWxsYmFja01hcHBlciA6IHJlcXVpcmUoXCIuL2NhbGxiYWNrTWFwcGVyXCIpXG59XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRhbmRyb2lkIDogcmVxdWlyZShcIi4vYW5kcm9pZFwiKSxcblx0aW9zIDogcmVxdWlyZShcIi4vaW9zXCIpLFxuXHR3ZWIgOiByZXF1aXJlKFwiLi93ZWJcIiksXG5cdGNvbW1vbiA6IHJlcXVpcmUoXCIuL2NvbW1vblwiKVxufSIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxubW9kdWxlLmV4cG9ydHMgPSBbXG5cdFwiIzgzRkNFOFwiLFxuXHRcIiM4OUY2RTRcIixcblx0XCIjOEZFRkRGXCIsXG5cdFwiIzk2RTlEQlwiLFxuXHRcIiM5Q0UzRDdcIixcblx0XCIjRkVFOUU2XCIsXG5cdFwiI0ZFRjdFN1wiLFxuXHRcIiNGRkZBRTVcIixcblx0XCIjRjVGQUVCXCIsXG5cdFwiI0U1RkZGNVwiXG5dXG5cbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmbGF0dGVuT2JqZWN0KG9iKSB7XG4gIHZhciB0b1JldHVybiA9IHt9O1xuICBmb3IgKHZhciBpIGluIG9iKSB7XG4gICAgaWYgKCFvYi5oYXNPd25Qcm9wZXJ0eShpKSkgY29udGludWU7XG4gICAgaWYgKCh0eXBlb2Ygb2JbaV0pID09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgZmxhdE9iamVjdCA9IGZsYXR0ZW5PYmplY3Qob2JbaV0pO1xuICAgICAgZm9yICh2YXIgeCBpbiBmbGF0T2JqZWN0KSB7XG4gICAgICAgIGlmICghZmxhdE9iamVjdC5oYXNPd25Qcm9wZXJ0eSh4KSkgY29udGludWU7XG4gICAgICAgIHRvUmV0dXJuW3hdID0gZmxhdE9iamVjdFt4XTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdG9SZXR1cm5baV0gPSBvYltpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG9SZXR1cm47XG59OyIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHBhcnNlUGFyYW1zIDogcmVxdWlyZShcIi4vcGFyc2VQYXJhbXNcIiksXG59XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBcIkpVU1BBWSBUZWNobm9sb2dpZXNcIlxuKiBKVVNQQVkgVGVjaG5vbG9naWVzIFB2dC4gTHRkLiBbaHR0cHM6Ly93d3cuanVzcGF5LmluXVxuKlxuKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBKVVNQQVkgUGxhdGZvcm0uXG4qXG4qIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4qIGl0IGZvciBvbmx5IGVkdWNhdGlvbmFsIHB1cnBvc2VzIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsXG4qIFB1YmxpYyBMaWNlbnNlIChHTlUgQUdQTCkgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4qIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4qIEZvciBFbnRlcnByaXNlL0NvbW1lcmljYWwgbGljZW5zZXMsIGNvbnRhY3QgPGluZm9AanVzcGF5LmluPi5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4qIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4qIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFRoZSBlbmQgdXNlciB3aWxsXG4qIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4qIEFCVVNFIG9mIHRoZSBMSUNFTlNFRCBTT0ZUV0FSRSBhbmQgc2hhbGwgSU5ERU1OSUZZIEpVU1BBWSBmb3Igc3VjaFxuKiBkYW1hZ2VzLCBjbGFpbXMsIGNvc3QsIGluY2x1ZGluZyByZWFzb25hYmxlIGF0dG9ybmV5IGZlZSBjbGFpbWVkIG9uIEp1c3BheS5cbiogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2Vcbiogb2YgTGljZW5zZWQgU29mdHdhcmUuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvYWdwbC5odG1sPi5cbiovXG5pbXBvcnQgY29sb3JzIGZyb20gXCIuL2NvbG9yc1wiO1xuaW1wb3J0IGZsYXR0ZW5PYmplY3QgZnJvbSBcIi4vZmxhdHRlbk9iamVjdFwiO1xuXG52YXIgY2FsbGJhY2tNYXBwZXIgID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jYWxsYmFja01hcHBlclwiKVxuXG5sZXQgZ2V0U2V0VHlwZSA9IDE7XG5cbi8qKlxuICogQ2hlY2tzIHRoZSBuYXRpdmUgc2V0IHdpbmRvdy5fX0RFVklDRV9ERVRBSUxTLm15c3RpcXVlX3ZlcnNpb25cbiAqIGFuZCBjaGVja3MgaWYgbXlzdGlxdWUgdmVyc2lvbiBpcyBncmVhdGVyIHRoYW4gdGhlIHBhc3NlZCB2ZXJzaW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IHZlcnNpb24gbnVtYmVyIHRvIGJlIGNoZWNrZWQgYWdhaW5zdC4gSWYgcGFzc2VkIGVtcHR5IHJldHVybnMgdHJ1ZS5cbiAqIEByZXR1cm4ge2Jvb2x9IHRydWUgaWYgbXlzdGlxdWUgdmVyc2lvbiBpcyBncmVhdGVyIHRoYW4gcGFzc2VkIHZlcnNpb24gZWxzZSBmYWxzZS4gRGVmYXVsdHMgdG8gdHJ1ZS5cbiAqL1xuZnVuY3Rpb24gaXNNeXN0aXF1ZVZlcnNpb25HcmVhdGVyVGhhbih2ZXJzaW9uKSB7XG4gIGlmICh3aW5kb3cuX19ERVZJQ0VfREVUQUlMUyAmJiB3aW5kb3cuX19ERVZJQ0VfREVUQUlMUy5teXN0aXF1ZV92ZXJzaW9uKSB7XG4gICAgdmFyIHNka1ZlcnNpb24gPSBwYXJzZUZsb2F0KHdpbmRvdy5fX0RFVklDRV9ERVRBSUxTLm15c3RpcXVlX3ZlcnNpb24pO1xuICAgIGlmIChzZGtWZXJzaW9uPjApIHtcbiAgICAgICAgcmV0dXJuIHNka1ZlcnNpb24+cGFyc2VGbG9hdCh2ZXJzaW9uKT90cnVlOmZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRDb2xvclRvUmdiYShjb2xvcil7XG4gIGNvbG9yID0gcldTKGNTKGNvbG9yKSk7XG5cbiAgdmFyIHZhbHVlcztcbiAgdmFyIGFscGhhID0gXCIxLjAwXCI7XG5cbiAgaWYgKGNvbG9yLmxlbmd0aCA+PSA4KSB7XG4gICAgYWxwaGEgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMSwgMyksIDE2KTtcbiAgICBhbHBoYSA9IChhbHBoYSAvIDI1NSkudG9GaXhlZCgyKTtcbiAgICBjb2xvciA9IGNvbG9yLnN1YnN0cmluZygzLCA5KTtcbiAgfSBlbHNlIHtcbiAgICBjb2xvciA9IGNvbG9yLnN1YnN0cmluZygxLCBjb2xvci5sZW5ndGgpO1xuICB9XG5cbiAgY29sb3IgPSBjb252ZXJ0SGV4VG9SZ2IocldTKGNvbG9yKSk7XG4gIHZhbHVlcyA9IGNvbG9yLnNwbGl0KCcsJyk7XG5cbiAgcmV0dXJuIHtcbiAgICByOiByV1ModmFsdWVzWzBdKSxcbiAgICBnOiByV1ModmFsdWVzWzFdKSxcbiAgICBiOiByV1ModmFsdWVzWzJdKSxcbiAgICBhOiBhbHBoYVxuICB9O1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0SGV4VG9SZ2IoaGV4KSB7XG4gIHZhciByID0gKHBhcnNlSW50KGhleC5zdWJzdHJpbmcoMCwyKSwgMTYpLzI1NSkudG9GaXhlZCgyKTtcbiAgdmFyIGcgPSAocGFyc2VJbnQoaGV4LnN1YnN0cmluZygyLDQpLCAxNikvMjU1KS50b0ZpeGVkKDIpO1xuICB2YXIgYiA9IChwYXJzZUludChoZXguc3Vic3RyaW5nKDQsNiksIDE2KS8yNTUpLnRvRml4ZWQoMik7XG5cbiAgcmV0dXJuIHIgKyBcIixcIiArIGcgKyBcIixcIiArIGI7XG59XG5cbmZ1bmN0aW9uIGNTKHZhbHVlKSB7XG4gIHJldHVybiAgdmFsdWU/dmFsdWUgKyAnJzogXCJcIjtcbn1cblxuZnVuY3Rpb24gcldTKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8gL2csJycpO1xufVxuXG5mdW5jdGlvbiBzZWxmX3NpemVGcm9tRGljdGlvbmFyeSh3aWR0aCwgaGVpZ2h0KSB7XG4gIHdpbmRvdy5fX1NJWkVfSU5ERVgrKztcblxuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwic2l6ZVwiICsgd2luZG93Ll9fU0laRV9JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwic2VsZlwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2l6ZUZyb21EaWN0aW9uYXJ5OlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1xuICAgICAgICBcIndpZHRoXCI6IHdpZHRoLFxuICAgICAgICBcImhlaWdodFwiOiBoZWlnaHQsXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5mdW5jdGlvbiBzZWxmX3NldEN1cnNvclBvc2l0aW9uKGlkLCBwb3NpdGlvbikge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImludm9rZU9uXCI6IFwic2VsZlwiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldEN1cnNvclBvc2l0aW9uOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7XG4gICAgICBcInZpZXdJZFwiOiBpZCxcbiAgICAgIFwicG9zaXRpb25cIjogcG9zaXRpb25cbiAgICB9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldENvbnRlbnRTaXplKCkge1xuICByZXR1cm4gIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRDb250ZW50U2l6ZTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogXCJzaXplXCIgKyB3aW5kb3cuX19TSVpFX0lOREVYLCBcImNvbXB1dGVkXCI6IFwidHJ1ZVwiLCBcInR5cGVcIjogXCJzaXplXCJ9XG4gICAgXVxuICB9O1xufVxuXG5mdW5jdGlvbiBVSUNvbG9yX2NvbG9yV2l0aFJHQkEocixnLGIsYSkge1xuICB3aW5kb3cuX19DT0xPUl9JTkRFWCsrO1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiY29sb3JcIiArIHdpbmRvdy5fX0NPTE9SX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogXCJVSUNvbG9yXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJjb2xvcldpdGhSZWQ6Z3JlZW46Ymx1ZTphbHBoYTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogciAsIFwidHlwZVwiOiBcImZcIn0sXG4gICAgICB7XCJuYW1lXCI6IGcgLCBcInR5cGVcIjogXCJmXCJ9LFxuICAgICAge1wibmFtZVwiOiBiICwgXCJ0eXBlXCI6IFwiZlwifSxcbiAgICAgIHtcIm5hbWVcIjogYSAsIFwidHlwZVwiOiBcImZcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19waXZvdFgodmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRQaXZvdFg6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IHZhbHVlK1wiXCIsIFwidHlwZVwiOiBcInNcIn0sXG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfcGl2b3RZKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0UGl2b3RZOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiB2YWx1ZStcIlwiLCBcInR5cGVcIjogXCJzXCJ9LFxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZWxmX2FuaW1hdGVfdHJhbnNsYXRpb24ob2JqLCBwcm9wcykge1xuICBvYmoudmFsdWVzWzBdLnByb3BlcnRpZXMgPSBbXG4gICAgICB7XG4gICAgICAgIFwia2V5XCI6IFwiZnJhbWVcIixcbiAgICAgICAgXCJ2YWx1ZXNcIjoge1xuICAgICAgICAgIFwieFwiOiBwcm9wcy54LFxuICAgICAgICAgIFwieVwiOiBwcm9wcy55LFxuICAgICAgICAgIFwid2lkdGhcIjogcHJvcHMudyxcbiAgICAgICAgICBcImhlaWdodFwiOiBwcm9wcy5oLFxuICAgICAgICB9XG4gICAgICB9LFxuICBdXG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gc2VsZl9hbmltYXRlX3JvdGF0aW9uKG9iaiwgcHJvcHMpIHtcbiAgb2JqLnZhbHVlc1swXS5wcm9wZXJ0aWVzID0gW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IFwiYW5nbGVcIixcbiAgICAgIFwidmFsdWVzXCI6IHtcblxuICAgICAgfVxuICAgIH0sXG4gIF1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldFRyYW5zbGF0aW9uWihwYXJhbXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiVUlWaWV3XCIsXG4gICAgICBcIm1ldGhvZE5hbWVcIjogXCJ0cmFuc2xhdGlvblo6XCIsXG4gICAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogcGFyYW1zLCB0eXBlOiBcInNcIiB9XVxuICB9O1xufVxuXG5mdW5jdGlvbiBzZWxmX2FuaW1hdGUocHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJpbnZva2VPblwiOiBcInNlbGZcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcImFuaW1hdGU6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW1xuICAgICAge1xuICAgICAgICBcImpzb25cIjogcHJvcHMuanNvbixcbiAgICAgICAgXCJ2aWV3VGFnXCI6IHByb3BzLmlkLFxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRCYWNrZ3JvdW5kQ29sb3IoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0QmFja2dyb3VuZENvbG9yOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBcImNvbG9yXCIgKyB3aW5kb3cuX19DT0xPUl9JTkRFWCwgXCJjb21wdXRlZFwiOiBcInRydWVcIn0sXG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc3VwZXJ2aWV3KCkge1xuICB2YXIgY3VyclZpZXdJbmRleCA9IHdpbmRvdy5fX1ZJRVdfSU5ERVg7XG5cbiAgd2luZG93Ll9fVklFV19JTkRFWCArKztcblxuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgY3VyclZpZXdJbmRleCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInN1cGVydmlld1wiLFxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2Nyb2xsVG9JbmRleChpbmRleCl7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2Nyb2xsVG9JbmRleDpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogaW5kZXgsIHR5cGU6IFwiaVwifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiBVSVZpZXdfYm91bmRzKCkge1xuICB3aW5kb3cuX19SRUNUX0lOREVYKys7XG5cbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcInJlY3RcIiArIHdpbmRvdy5fX1JFQ1RfSU5ERVgsXG4gICAgXCJmcm9tU3RvcmVcIjogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOlwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJib3VuZHNcIixcbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldEVuYWJsZWQobW9kZSkge1xuIHJldHVybiB7XG4gICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICBcIm1ldGhvZE5hbWVcIjpcInNldEVuYWJsZWQ6XCIsXG4gICBcInZhbHVlc1wiOltcbiAgICAge1wibmFtZVwiOiBtb2RlLCBcInR5cGVcIjogXCJpXCJ9LFxuICAgXVxuIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zY3JvbGxFbmFibGVkKHN0YXR1cykge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUFRhYmxlVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldFNjcm9sbEVuYWJsZWQ6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IHN0YXR1cywgXCJ0eXBlXCI6IFwic1wiIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0QXV0b0NvcnJlY3Rpb25UeXBlKG1vZGUpIHtcbiByZXR1cm4ge1xuICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgXCJtZXRob2ROYW1lXCI6XCJzZXRBdXRvY29ycmVjdGlvblR5cGU6XCIsXG4gICBcInZhbHVlc1wiOltcbiAgICAge1wibmFtZVwiOiBtb2RlLCBcInR5cGVcIjogXCJpXCJ9LFxuICAgXVxuIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRLZXlib2FyZFR5cGUobW9kZSkge1xuIHJldHVybiB7XG4gICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICBcIm1ldGhvZE5hbWVcIjpcInNldEtleWJvYXJkVHlwZTpcIixcbiAgIFwidmFsdWVzXCI6W1xuICAgICB7XCJuYW1lXCI6IG1vZGUsIFwidHlwZVwiOiBcImlcIn0sXG4gICBdXG4gfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldEF1dG9DYXBpdGFsaXphdGlvblR5cGUobW9kZSkge1xuIHJldHVybiB7XG4gICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICBcIm1ldGhvZE5hbWVcIjpcInNldEF1dG9jYXBpdGFsaXphdGlvblR5cGVzOlwiLFxuICAgXCJ2YWx1ZXNcIjpbXG4gICAgIHtcIm5hbWVcIjogbW9kZSwgXCJ0eXBlXCI6IFwiaVwifSxcbiAgIF1cbiB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0U3RhdHVzQmFyU3R5bGUobW9kZSkge1xuIHJldHVybiB7XG4gICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICBcImludm9rZU9uXCI6IFwic2VsZlwiLFxuICAgXCJtZXRob2ROYW1lXCI6XCJzZXRTdGF0dXNCYXJTdHlsZTpcIixcbiAgIFwidmFsdWVzXCI6W1xuICAgICB7XCJuYW1lXCI6IG1vZGUsIFwidHlwZVwiOiBcInNcIn0sXG4gICBdXG4gfVxufVxuXG5mdW5jdGlvbiB0aGlzX2JlY29tZUZpcnN0UmVzcG9uZGVyKG1vZGUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJmb2N1czpcIixcbiAgICBcInZhbHVlc1wiOiBbe1wibmFtZVwiOiBtb2RlLCBcInR5cGVcIjogXCJzXCJ9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldE9uSXRlbUNsaWNrKGNhbGxiYWNrKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0T25JdGVtQ2xpY2s6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7IFwibmFtZVwiOiBjYWxsYmFja01hcHBlci5tYXAoY2FsbGJhY2spLCBcInR5cGVcIjogXCJzXCIgfSxcbiAgICBdXG4gIH1cbiB9XG5cbmZ1bmN0aW9uIHRoaXNfc2V0T25Gb2N1c0NhbGxiYWNrKGNhbGxiYWNrKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0T25Gb2N1c0NhbGxiYWNrOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAgeyBcIm5hbWVcIjogY2FsbGJhY2tNYXBwZXIubWFwKGNhbGxiYWNrKSwgXCJ0eXBlXCI6IFwic1wiIH0sXG4gICAgXVxuICB9XG4gfVxuXG5mdW5jdGlvbiB0aGlzX3NldE9uTWVyY2hhbnRWaWV3SGVpZ2h0Q2hhbmdlQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRPbk1lcmNoYW50Vmlld0hlaWdodENoYW5nZTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHsgXCJuYW1lXCI6IGNhbGxiYWNrTWFwcGVyLm1hcChjYWxsYmFjayksIFwidHlwZVwiOiBcInNcIiB9LFxuICAgIF1cbiAgfVxuIH1cblxuZnVuY3Rpb24gdGhpc19zZXRPbihlbmFibGVkKSB7XG4gcmV0dXJuIHtcbiAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgIFwibWV0aG9kTmFtZVwiOlwic2V0T246YW5pbWF0ZWQ6XCIsXG4gICBcInZhbHVlc1wiOltcbiAgICAge1wibmFtZVwiOiBlbmFibGVkLCBcInR5cGVcIjogXCJpXCJ9LFxuICAgICB7XCJuYW1lXCI6IFwiMVwiLCBcInR5cGVcIjogXCJpXCJ9XG4gICBdXG4gfVxufVxuXG5mdW5jdGlvbiB0aGlzX3Nob3dWZXJ0aWNhbFNjcm9sbEJhcihlbmFibGVkKSB7XG4gcmV0dXJuIHtcbiAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgIFwibWV0aG9kTmFtZVwiOlwic2V0U2hvd3NWZXJ0aWNhbFNjcm9sbEluZGljYXRvcjpcIixcbiAgIFwidmFsdWVzXCI6W1xuICAgICB7XCJuYW1lXCI6IGVuYWJsZWQsIFwidHlwZVwiOiBcImlcIn1cbiAgIF1cbiB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0U2VjdXJlVGV4dEVudHJ5KGVuYWJsZWQpIHtcbiByZXR1cm4ge1xuICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgXCJtZXRob2ROYW1lXCI6XCJzZXRTZWN1cmVUZXh0RW50cnk6XCIsXG4gICBcInZhbHVlc1wiOltcbiAgICAge1wibmFtZVwiOiBlbmFibGVkLCBcInR5cGVcIjogXCJpXCJ9LFxuICAgXVxuIH1cbn1cblxuZnVuY3Rpb24gVUlJbWFnZV9pbWFnZU5hbWVkKGltYWdlKSB7XG4gIHdpbmRvdy5fX0lNQUdFX0lOREVYKys7XG5cbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImltYWdlXCIgKyB3aW5kb3cuX19JTUFHRV9JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwic2VsZlwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwiaW1hZ2VOYW1lZDpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogaW1hZ2UsIFwidHlwZVwiOiBcInNcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRJbWFnZSgpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldEltYWdlOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBcImltYWdlXCIgKyB3aW5kb3cuX19JTUFHRV9JTkRFWCwgXCJjb21wdXRlZFwiOiBcInRydWVcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gc2VsZl9yZWN0RnJvbURpY3Rpb25hcnkoeCx5LHcsaCkge1xuICB3aW5kb3cuX19SRUNUX0lOREVYKys7XG5cbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcInJlY3RcIiArIHdpbmRvdy5fX1JFQ1RfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBcInNlbGZcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInJlY3RGcm9tRGljdGlvbmFyeTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcbiAgICAgICAgXCJ4XCI6IHgsXG4gICAgICAgIFwieVwiOiB5LFxuICAgICAgICBcIndpZHRoXCI6IHcsXG4gICAgICAgIFwiaGVpZ2h0XCI6IGgsXG4gICAgICB9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfdXBkYXRlTGF5b3V0UGFyYW1zKGNvbmZpZykge1xuICB2YXIgZGF0YSA9IHtcbiAgICBcIndpZHRoXCI6IGNvbmZpZy53aWR0aCxcbiAgICBcImhlaWdodFwiOiBjb25maWcuaGVpZ2h0LFxuICAgIFwibWFyZ2luXCI6IGNvbmZpZy5tYXJnaW4sXG4gICAgXCJwYWRkaW5nXCI6IGNvbmZpZy5wYWRkaW5nLFxuICAgIFwid2VpZ2h0XCI6IGNvbmZpZy53ZWlnaHQsXG4gICAgXCJncmF2aXR5XCI6IGNvbmZpZy5ncmF2aXR5LFxuICAgIFwidmlzaWJpbGl0eVwiOiBjb25maWcudmlzaWJpbGl0eSxcbiAgICBcIm9yaWVudGF0aW9uXCI6IGNvbmZpZy5vcmllbnRhdGlvbixcbiAgICBcImFsaWdubWVudF9ydWxlc1wiIDogY29uZmlnLmFsaWdubWVudF9ydWxlc1xuICAgIH1cbiAgaWYoZGF0YS5hbGlnbm1lbnRfcnVsZXMgJiYgZGF0YS5hbGlnbm1lbnRfcnVsZXMubGVuZ3RoID09IDApe1xuICAgIGRlbGV0ZSBkYXRhLmFsaWdubWVudF9ydWxlcztcbiAgfVxuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImludm9rZU9uXCI6IFwidGhpc1wiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInVwZGF0ZUxheW91dFBhcmFtczpcIixcbiAgICBcInZhbHVlc1wiOiBbe1xuICAgICAgICBcIm5hbWVcIjogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIFwidHlwZVwiOiAncydcbiAgICB9XVxuICB9O1xufVxuXG5cbmZ1bmN0aW9uIHRoaXNfc2V0UGFkZGluZyhwYWRkaW5nKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIk1KUFZpZXdBTFwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0UGFkZGluZ0xlZnQ6VG9wOlJpZ2h0OkJvdHRvbTpcIixcbiAgICBcInZhbHVlc1wiOiBwYWRkaW5nLnNwbGl0KCcsJykubWFwKG1ha2VVbml0KVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0TWFyZ2luKG1hcmdpbikge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJNSlBWaWV3QUxcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldE1hcmdpbkxlZnQ6VG9wOlJpZ2h0OkJvdHRvbTpcIixcbiAgICBcInZhbHVlc1wiOiBtYXJnaW4uc3BsaXQoJywnKS5tYXAobWFrZVVuaXQpXG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZVVuaXQgKHYsaSxhcnIpIHtcbiAgcmV0dXJuIHtuYW1lIDogdisnJywgdHlwZSA6ICdmJ31cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRIZWlnaHQoaGVpZ2h0KSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIk1KUFZpZXdBTFwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0SGVpZ2h0OlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBoZWlnaHQgKycnLCBcInR5cGVcIjogJ2knfVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldFdpZHRoKHdpZHRoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIk1KUFZpZXdBTFwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0V2lkdGg6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IHdpZHRoICsnJywgXCJ0eXBlXCI6ICdpJ31cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRGcmFtZSgpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRGcmFtZTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogXCJyZWN0XCIgKyB3aW5kb3cuX19SRUNUX0lOREVYLCBcImNvbXB1dGVkXCI6IFwidHJ1ZVwiLCBcInR5cGVcIjogXCJyZWN0XCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHNlbGZfYWxpZ25Ub1BhcmVudCh0eXBlLCB2YWx1ZXMpIHtcbiAgd2luZG93Ll9fUE9JTlRfSU5ERVgrKztcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcInBvaW50XCIgKyB3aW5kb3cuX19QT0lOVF9JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwic2VsZlwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwiYWxpZ25Ub1BhcmVudDpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IHR5cGUsXG4gICAgICAgIFwieFwiOiB2YWx1ZXMueCxcbiAgICAgICAgXCJ5XCI6IHZhbHVlcy55LFxuICAgICAgICBcInlPZmZzZXRcIjogdmFsdWVzLnlPZmZzZXQsXG4gICAgICAgIFwieE9mZnNldFwiOiB2YWx1ZXMueE9mZnNldCxcbiAgICAgIH1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRDZW50ZXIoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0Q2VudGVyOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAgICAgIHtcIm5hbWVcIjogXCJwb2ludFwiICsgd2luZG93Ll9fUE9JTlRfSU5ERVgsIFwiY29tcHV0ZWRcIjogXCJ0cnVlXCIsICBcInR5cGVcIjogXCJwb2ludFwifVxuICAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRUZXh0KHRleHQpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRUZXh0OlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAgICAgIHtcIm5hbWVcIjogZW5jb2RlVVJJKHRleHQpLCBcInR5cGVcIjogXCJzXCJ9XG4gICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldFJlZ3VsYXJFeHByZXNzaW9uKHRleHQpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0UmVndWxhckV4cHJlc3Npb246XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICAgICAge1wibmFtZVwiOiB0ZXh0LCBcInR5cGVcIjogXCJzXCJ9XG4gICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRFbmNvZGVkRGF0YSh0ZXh0KSB7XG4gIHZhciBlbmNvZGVkU3RyaW5nID0gdGV4dDtcbiAgaWYgKGlzTXlzdGlxdWVWZXJzaW9uR3JlYXRlclRoYW4oXCIxXCIpKSB7XG4gICAgZW5jb2RlZFN0cmluZyA9IGJ0b2EoZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpKTtcbiAgfSBlbHNlIGlmIChpc015c3RpcXVlVmVyc2lvbkdyZWF0ZXJUaGFuKFwiMFwiKSkge1xuICAgIGVuY29kZWRTdHJpbmcgPSBidG9hKHRleHQucmVwbGFjZSgvW15cXHgwMC1cXHg3Rl0vZywgXCJcIikpO1xuICB9XG4gIHJldHVybiBlbmNvZGVkU3RyaW5nO1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldEhUTUxUZXh0KHRleHQpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRIdG1sVGV4dDpcIixcbiAgICBcInZhbHVlc1wiOiBbXG4gICAgICB7IFwibmFtZVwiOiBnZXRFbmNvZGVkRGF0YSh0ZXh0KVxuICAgICAgLCBcInR5cGVcIjogXCJzXCJcbiAgICAgIH1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRQbGFjZWhvbGRlcih0ZXh0KSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0UGxhY2Vob2xkZXI6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICAgICAge1wibmFtZVwiOiB0ZXh0LCBcInR5cGVcIjogXCJzXCJ9XG4gICAgIF1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRQbGFjZWhvbGRlclByb3BlcnRpZXMoZGF0YSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUFRleHRWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0UGxhY2Vob2xkZXJQcm9wZXJ0aWVzOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7XCJuYW1lXCI6IGRhdGEsIFwidHlwZVwiOiBcInNcIn1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIFVJRm9udF9zeXN0ZW1Gb250T2ZTaXplKHNpemUpIHtcbiAgd2luZG93Ll9fRk9OVF9JTkRFWCsrO1xuXG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmb250XCIgKyB3aW5kb3cuX19GT05UX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogXCJVSUZvbnRcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInN5c3RlbUZvbnRPZlNpemU6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IHNpemUsIFwidHlwZVwiOiBcImZcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gVUlGb250X2ZvbnRXaXRoTmFtZShuYW1lLCBzaXplKSB7XG4gIHdpbmRvdy5fX0ZPTlRfSU5ERVgrKztcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZvbnRcIiArIHdpbmRvdy5fX0ZPTlRfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBcIk1KUEZvbnRcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcImZvbnRXaXRoTmFtZTpzaXplOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBuYW1lLCBcInR5cGVcIjogXCJzXCJ9LFxuICAgICAge1wibmFtZVwiOiBzaXplLmxlbmd0aD4wP3NpemU6XCIxNFwiLCBcInR5cGVcIjogXCJmXCJ9LFxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldEZvbnQoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRGb250OlwiLFxuICAgIFwidmFsdWVzXCI6IFt7XG4gICAgICBcIm5hbWVcIjogXCJmb250XCIgKyB3aW5kb3cuX19GT05UX0lOREVYLFxuICAgICAgXCJjb21wdXRlZFwiOiBcInRydWVcIlxuICAgIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2l6ZVRvRml0KCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNpemVUb0ZpdFwiXG4gIH1cbn1cblxuZnVuY3Rpb24gVUlGb250X2JvbGRTeXN0ZW1Gb250T2ZTaXplKHNpemUpIHtcbiAgd2luZG93Ll9fRk9OVF9JTkRFWCsrO1xuXG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmb250XCIgKyB3aW5kb3cuX19GT05UX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogXCJVSUZvbnRcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcImJvbGRTeXN0ZW1Gb250T2ZTaXplOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBzaXplLCBcInR5cGVcIjogXCJmXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIFVJRm9udF9zeXN0ZW1Gb250T2ZTaXplV2VpZ2h0KHNpemUsIHdlaWdodCkge1xuICB3aW5kb3cuX19GT05UX0lOREVYKys7XG5cbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZvbnRcIiArIHdpbmRvdy5fX0ZPTlRfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBcIlVJRm9udFwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic3lzdGVtRm9udE9mU2l6ZTp3ZWlnaHQ6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IHNpemUgLCBcInR5cGVcIjogXCJmXCJ9LFxuICAgICAge1wibmFtZVwiOiB3ZWlnaHQgLCBcInR5cGVcIjogXCJmXCJ9LFxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldExpbmVCcmVha01vZGUobW9kZSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldExpbmVCcmVha01vZGU6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IG1vZGUsIFwidHlwZVwiOiBcImlcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXROdW1iZXJPZkxpbmVzKGNvdW50KSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0TnVtYmVyT2ZMaW5lczpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogY291bnQsIFwidHlwZVwiOiBcImlcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRUZXh0QWxpZ25tZW50KG1vZGUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRHcmF2aXR5OlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBtb2RlICwgXCJ0eXBlXCI6IFwic1wifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldFRleHRDb2xvcigpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRUZXh0Q29sb3I6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6ICdjb2xvcicgKyB3aW5kb3cuX19DT0xPUl9JTkRFWCwgXCJjb21wdXRlZFwiOiBcInRydWVcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRUZXh0TGVuZ3RoTGltaXQobGVuZ3RoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0VGV4dExlbmd0aExpbWl0OlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAgICB7XCJuYW1lXCI6IGxlbmd0aCArIFwiXCIsIFwidHlwZVwiOiBcImlcIn1cbiAgICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3JlbW92ZUNlbGwoY2VsbEluZGV4KSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJyZW1vdmVPYmplY3RBdEluZGV4OlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAgICB7XCJuYW1lXCI6IGNlbGxJbmRleCArIFwiXCIsIFwidHlwZVwiOiBcImlcIn1cbiAgICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiBVSUNvbG9yX2Zyb21MaXRlcmFsKGNvbG9yKSB7XG4gIHdpbmRvdy5fX0NPTE9SX0lOREVYKys7XG5cbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImNvbG9yXCIgKyB3aW5kb3cuX19DT0xPUl9JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwiVUlDb2xvclwiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBjb2xvciArIFwiQ29sb3JcIixcbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX2xheWVyKCkge1xuICB3aW5kb3cuX19MQVlFUl9JTkRFWCsrO1xuXG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJsYXllclwiICsgd2luZG93Ll9fTEFZRVJfSU5ERVgsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwibGF5ZXJcIixcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRDb3JuZXJSYWRpdXMocmFkaXVzKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0TUpQQ29ybmVyUmFkaXVzOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiByYWRpdXMgKyBcIlwiLCBcInR5cGVcIjogXCJmXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldEJvcmRlcldpZHRoKHdpZHRoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0TUpQQm9yZGVyV2lkdGg6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IHdpZHRoICsgXCJcIiwgIFwidHlwZVwiOiBcImZcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Qm9yZGVyQ29sb3IoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0TUpQQm9yZGVyQ29sb3I6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IFwiY29sb3JcIiArIHdpbmRvdy5fX0NPTE9SX0lOREVYLCBcImNvbXB1dGVkXCI6IFwidHJ1ZVwiLCB0eXBlOiBcImNnY29sb3JcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRTaGFkb3coaWQsIHNoYWRvd09mZnNldCwgc2hhZG93Qmx1ciwgc2hhZG93U3ByZWFkLCBzaGFkb3dDb2xvciwgc2hhZG93T3BhY2l0eSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldFNoYWRvdzpcIixcbiAgICBcInZhbHVlc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwibmFtZVwiOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIFwidmlld0lkXCI6IGlkLFxuICAgICAgICBcImNvbG9yXCI6IHNoYWRvd0NvbG9yLFxuICAgICAgICBcImJsdXJcIjogc2hhZG93Qmx1cixcbiAgICAgICAgXCJvcGFjaXR5XCI6IHNoYWRvd09wYWNpdHksXG4gICAgICAgIFwib2Zmc2V0XCI6IHNoYWRvd09mZnNldCxcbiAgICAgICAgXCJzcHJlYWRcIjogc2hhZG93U3ByZWFkXG4gICAgICAgIH0pLFxuICAgICAgICBcInR5cGVcIjogXCJzXCJcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0R3JhZGllbnQoZGF0YSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldEdyYWRpZW50OlwiLFxuICAgIFwidmFsdWVzXCI6IFt7XG4gICAgICBcIm5hbWVcIjogZGF0YSxcbiAgICAgIFwidHlwZVwiOiBcInNcIlxuICAgIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0QmFja2dyb3VuZEltYWdlKCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0QmFja2dyb3VuZEltYWdlOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7XG4gICAgICBcIm5hbWVcIjogXCJpbWFnZVwiICsgd2luZG93Ll9fSU1BR0VfSU5ERVgsXG4gICAgICBcImNvbXB1dGVkXCI6IFwidHJ1ZVwiXG4gICAgfV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gX1VJTGFiZWxMYXllcl9zZXRNYXNrc1RvQm91bmRzKCkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjpcImxheWVyXCIgKyB3aW5kb3cuX19MQVlFUl9JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwiX1VJTGFiZWxMYXllclwiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0TUpQTWFza3NUb0JvdW5kczpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogXCIxXCIsIHR5cGU6IFwiaVwifVxuICAgIF1cbiAgfVxufVxuXG5mdW5jdGlvbiB0aGlzX3NldFRhZyh0YWcpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRUYWc6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IHRhZywgdHlwZTogXCJpXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHNlbGZfZ2V0Vmlld0Zyb21UYWcodGFnKXtcbiAgd2luZG93Ll9fVklFV19JTkRFWCsrO1xuXG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogXCJzZWxmXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJnZXRWaWV3RnJvbVRhZzpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogdGFnLCBcInR5cGVcIjogXCJzXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0SW1hZ2VVUkwoaWQsdXJsLHBsYWNlaG9sZGVyKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiaW52b2tlT25cIjogXCJzZWxmXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRJbWFnZVdpdGhVcmw6Ojo6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbXG4gICAgICB7XCJuYW1lXCI6IFwiXCIgKyBpZCwgXCJ0eXBlXCI6IFwic1wifSxcbiAgICAgIHtcIm5hbWVcIjogdXJsLCBcInR5cGVcIjogXCJzXCJ9LFxuICAgICAge1wibmFtZVwiOiBwbGFjZWhvbGRlciwgXCJ0eXBlXCI6IFwic1wifVxuICAgIF1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRHaWYoaWQsIGltYWdlTmFtZSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImludm9rZU9uXCI6IFwic2VsZlwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcImxvYWRHaWY6OjpcIixcbiAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogXCJcIiArIGlkLCBcInR5cGVcIjogXCJzXCIgfSwgeyBcIm5hbWVcIjogaW1hZ2VOYW1lLCBcInR5cGVcIjogXCJzXCIgfV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zdGFydEdpZigpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic3RhcnRHSUZcIlxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3N0b3BHaWYoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInN0b3BHSUZcIlxuICB9O1xufVxuXG5mdW5jdGlvbiBzZWxmX3NldEFscGhhKGFscGhhKXtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRBbHBoYTpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogU3RyaW5nKGFscGhhKSwgdHlwZTogXCJmXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0SGlkZGVuKGhpZGRlbil7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0SGlkZGVuOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiAoKGhpZGRlbiA9PT0gXCJnb25lXCIgfHwgaGlkZGVuID09PSBcImludmlzaWJsZVwiKSA/IFwiMVwiIDogXCIwXCIpLCB0eXBlOiBcImlcIn1cbiAgICBdXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhpc19zZXRUZXh0UHJvcGVydGllcyhkYXRhKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiTUpQVGV4dFZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRUZXh0UHJvcGVydGllczpcIixcbiAgICBcInZhbHVlc1wiOiBbXG4gICAgICB7XCJuYW1lXCI6IGRhdGEsXCJ0eXBlXCI6IFwic1wifV1cbiAgfTtcbn1cblxuXG5mdW5jdGlvbiB0aGlzX3NldExldHRlclNwYWNpbmcoZGF0YSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUEVkaXRUZXh0XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0TGV0dGVyU3BhY2luZzpcIixcbiAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogZGF0YSwgXCJ0eXBlXCI6IFwic1wiIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0TGluZVNwYWNpbmcoZGF0YSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUExhYmVsXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0TGluZVNwYWNpbmc6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IGRhdGEsIFwidHlwZVwiOiBcInNcIiB9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldENhcmV0Q29sb3IoKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0VGludENvbG9yOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7IFwibmFtZVwiOiAnY29sb3InICsgd2luZG93Ll9fQ09MT1JfSU5ERVgsIFwiY29tcHV0ZWRcIjogXCJ0cnVlXCIgfV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zY3JvbGxUbyh2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUFRhYmxlVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNjcm9sbFRvOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7XCJuYW1lXCI6IHZhbHVlLCBcInR5cGVcIjogXCJzXCJ9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldEV4cGFuZCh2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUEV4cGFuZGFibGVDZWxsXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0RXhwYW5kOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7XCJuYW1lXCI6IHZhbHVlLCBcInR5cGVcIjogXCJzXCJ9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldEV4cGFuZER1cmF0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiTUpQRXhwYW5kYWJsZUNlbGxcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRFeHBhbmREdXJhdGlvbjpcIixcbiAgICBcInZhbHVlc1wiOiBbe1wibmFtZVwiOiB2YWx1ZSwgXCJ0eXBlXCI6IFwic1wifV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRFeHBhbmRBbHBoYSh2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUEV4cGFuZGFibGVDZWxsXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0RXhwYW5kQWxwaGE6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3tcIm5hbWVcIjogdmFsdWUsIFwidHlwZVwiOiBcInNcIn1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0U3d5cGUodmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJNSlBUYWJsZVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRTd3lwZTpcIixcbiAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogdmFsdWUgPyBcInRydWVcIiA6IFwiZmFsc2VcIiwgXCJ0eXBlXCI6IFwic1wiIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0VXNlckludGVyYWN0aW9uKGhpZGRlbil7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGU/XCJmYWxzZVwiOlwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZT9cInRoaXNcIjpcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwic2V0VXNlckludGVyYWN0aW9uRW5hYmxlZDpcIixcbiAgICBcInZhbHVlc1wiOltcbiAgICAgIHtcIm5hbWVcIjogKGhpZGRlbiA9PT0gXCJ0cnVlXCIgPyBcIjFcIiA6IFwiMFwiKSwgdHlwZTogXCJpXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0U2VwYXJhdG9yKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0U2VwYXJhdG9yOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7IFwibmFtZVwiOiB2YWx1ZSwgdHlwZTogXCJzXCIgfV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRTZXBhcmF0b3JSZXBlYXQodmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRTZXBhcmF0b3JSZXBlYXQ6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IHZhbHVlLCB0eXBlOiBcInNcIiB9XVxuICB9O1xufVxuXG5cbmZ1bmN0aW9uIHRoaXNfc2V0U3dpcGVDYWxsYmFjayh2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICAgICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgICAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICAgICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUFRhYmxlVmlld1wiLFxuICAgICAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXRTd2lwZUNhbGxiYWNrOlwiLFxuICAgICAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogdmFsdWUsIHR5cGU6IFwic1wiIH1dXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXR1cExpc3QobGlzdERhdGEsIGxpc3RJdGVtKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IFwidHJ1ZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogZ2V0U2V0VHlwZSA/IFwidGhpc1wiIDogXCJNSlBSZXBlYXRUYWJsZVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjogXCJzZXR1cExpc3Q6OlwiLFxuICAgIFwidmFsdWVzXCI6IFt7IFwibmFtZVwiOiBsaXN0RGF0YSwgdHlwZTogXCJzXCIgfSwgeyBcIm5hbWVcIjogbGlzdEl0ZW0sIHR5cGU6IFwic1wiIH1dXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19pbmxpbmVBbmltYXRpb24oY29uZmlnKSB7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiZnJvbVN0b3JlXCI6IGdldFNldFR5cGUgPyBcImZhbHNlXCIgOiBcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IFwidGhpc1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldElubGluZUFuaW1hdGlvbjpcIixcbiAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogbW9kaWZ5VHJhbnNsYXRpb24oY29uZmlnKSwgdHlwZTogXCJzXCIgfV1cbiAgICB9O1xufVxuXG5cbmZ1bmN0aW9uIG1vZGlmeVRyYW5zbGF0aW9uKGNvbmZpZyl7XG4gIHZhciB4ID0gY29uZmlnLnggfHwgXCIwXCI7XG4gIHZhciB5ID0gY29uZmlnLnkgfHwgXCIwXCI7XG4gIHZhciBhbmltYXRpb25BcnJheSA9IEpTT04ucGFyc2UoY29uZmlnLmlubGluZUFuaW1hdGlvbik7XG4gIHZhciBhbmltYXRpb25BcnJheSA9IGFuaW1hdGlvbkFycmF5Lm1hcChmdW5jdGlvbihhKXtcbiAgICBpZihhLmhhc093blByb3BlcnR5KFwiZnJvbVhcIikpe1xuICAgICAgYS5mcm9tWCA9IHBhcnNlSW50KGEuZnJvbVgpICsgcGFyc2VJbnQoeCkgKyAnJztcbiAgICAgIGlmKCFhLmhhc093blByb3BlcnR5KFwidG9YXCIpKXtcbiAgICAgICAgYS50b1ggPSAwICsgcGFyc2VJbnQoeCkgKyAnJztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoYS5oYXNPd25Qcm9wZXJ0eShcInRvWFwiKSl7XG4gICAgICBhLnRvWCA9IHBhcnNlSW50KGEudG9YKSArIHBhcnNlSW50KHgpICsgJyc7XG4gICAgfVxuICAgIGlmKGEuaGFzT3duUHJvcGVydHkoXCJmcm9tWVwiKSl7XG4gICAgICBhLmZyb21ZID0gcGFyc2VJbnQoYS5mcm9tWSkgKyBwYXJzZUludCh5KSArICcnO1xuICAgICAgaWYoIWEuaGFzT3duUHJvcGVydHkoXCJ0b1lcIikpe1xuICAgICAgICBhLnRvWSA9IDAgKyBwYXJzZUludCh5KSArICcnO1xuICAgICAgfVxuICAgIH1cbiAgICBpZihhLmhhc093blByb3BlcnR5KFwidG9ZXCIpKXtcbiAgICAgIGEudG9ZID0gcGFyc2VJbnQoYS50b1kpICsgcGFyc2VJbnQoeSkgKyAnJztcbiAgICB9XG4gICAgcmV0dXJuIGE7XG4gIH0pXG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhbmltYXRpb25BcnJheSk7XG59XG5cbmZ1bmN0aW9uIHRoaXNfc2V0Q2xvc2VTd2lwZSh2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICAgICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiLFxuICAgICAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICAgICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIk1KUFRhYmxlVmlld1wiLFxuICAgICAgICBcIm1ldGhvZE5hbWVcIjogXCJjbG9zZVN3aXBlOlwiLFxuICAgICAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogdmFsdWUgPyBcInRydWVcIiA6IFwiZmFsc2VcIiwgdHlwZTogXCJzXCIgfV1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldEVuYWJsZVN3eXBlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgICAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgICAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGUgPyBcInRoaXNcIiA6IFwiTUpQVGFibGVWaWV3XCIsXG4gICAgICAgIFwibWV0aG9kTmFtZVwiOiBcInNldFN3aXBlRW5hYmxlZDpcIixcbiAgICAgICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IHZhbHVlID8gXCJ0cnVlXCIgOiBcImZhbHNlXCIsIHR5cGU6IFwic1wiIH1dXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19icmluZ1N1YlZpZXdUb0Zyb250KHBhcmFtcyl7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiaW52b2tlT25cIjogXCJzZWxmXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJicmluZ1N1YlZpZXdUb0Zyb250OlwiLFxuICAgIFwidmFsdWVzXCI6IFt7XCJuYW1lXCI6IHBhcmFtcywgdHlwZTogXCJzXCJ9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldENvbnRlbnRNb2RlKG1vZGUpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogZ2V0U2V0VHlwZT9cImZhbHNlXCI6XCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlP1widGhpc1wiOlwiVUlWaWV3XCIsXG4gICAgXCJtZXRob2ROYW1lXCI6XCJzZXRDb250ZW50TW9kZTpcIixcbiAgICBcInZhbHVlc1wiOlt7XCJuYW1lXCI6IG1vZGUsIHR5cGU6IFwiaVwifV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19hZGp1c3RWaWV3V2l0aEtleWJvYXJkKHN0YXR1cykge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlP1wiZmFsc2VcIjpcInRydWVcIixcbiAgICBcInN0b3JlS2V5XCI6IFwidmlld1wiICsgd2luZG93Ll9fVklFV19JTkRFWCxcbiAgICBcImludm9rZU9uXCI6IGdldFNldFR5cGU/XCJ0aGlzXCI6XCJVSVZpZXdcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcInNldEFkanVzdFZpZXdXaXRoS2V5Ym9hcmQ6XCIsXG4gICAgXCJ2YWx1ZXNcIjpbe1wibmFtZVwiOiBzdGF0dXMsIHR5cGU6IFwic1wifV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gc2VsZl9zZXRQb3B1cE1lbnUocG9wdXBNZW51LCBvbk1lbnVJdGVtQ2xpY2spIHtcbiAgdmFyIGNhbGxiYWNrID0gY2FsbGJhY2tNYXBwZXIubWFwKG9uTWVudUl0ZW1DbGljayk7XG4gIHJldHVybiB7XG4gICAgXCJyZXR1cm5cIjogXCJmYWxzZVwiLFxuICAgIFwiaW52b2tlT25cIjogXCJzZWxmXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwiY3JlYXRlQWN0aW9uU2hlZXRXaXRoVGl0bGVzOjpcIixcbiAgICBcInZhbHVlc1wiOiBbeyBcIm5hbWVcIjogcG9wdXBNZW51LCBcInR5cGVcIjogXCJzXCIgfSwgeyBcIm5hbWVcIjogY2FsbGJhY2ssIFwidHlwZVwiOiBcInNcIiB9XVxuICB9O1xufVxuXG5mdW5jdGlvbiB0aGlzX3NldENvcm5lckN1cnZlcyhjb3JuZXIpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJmcm9tU3RvcmVcIjogXCJmYWxzZVwiLFxuICAgIFwic3RvcmVLZXlcIjogXCJ2aWV3XCIgKyB3aW5kb3cuX19WSUVXX0lOREVYLFxuICAgIFwiaW52b2tlT25cIjogXCJ0aGlzXCIsXG4gICAgXCJtZXRob2ROYW1lXCI6IFwic2V0Q29ybmVyQ3VydmVzOlwiLFxuICAgIFwidmFsdWVzXCI6IFt7IFwibmFtZVwiOiBjb3JuZXIgKyBcIlwiLCBcInR5cGVcIjogXCJzXCIgfV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGhpc19zZXRDbGlwc1RvQm91bmRzKGJvdW5kcykge1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZmFsc2VcIixcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOiBcInNldENsaXBzVG9Cb3VuZHM6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3sgXCJuYW1lXCI6IGJvdW5kcyA/IFwiMVwiIDogXCIwXCIsIHR5cGU6IFwiaVwiIH1dXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRoaXNfZm9udFdpdGhOYW1lKG5hbWUpIHtcbiAgd2luZG93Ll9fRk9OVF9JTkRFWCsrO1xuICByZXR1cm4ge1xuICAgIFwicmV0dXJuXCI6IFwiZm9udFwiICsgd2luZG93Ll9fRk9OVF9JTkRFWCxcbiAgICBcImZyb21TdG9yZVwiOiBnZXRTZXRUeXBlID8gXCJmYWxzZVwiIDogXCJ0cnVlXCIsXG4gICAgXCJzdG9yZUtleVwiOiBcInZpZXdcIiArIHdpbmRvdy5fX1ZJRVdfSU5ERVgsXG4gICAgXCJpbnZva2VPblwiOiBnZXRTZXRUeXBlID8gXCJ0aGlzXCIgOiBcIlVJVmlld1wiLFxuICAgIFwibWV0aG9kTmFtZVwiOlwiZm9udFdpdGhOYW1lOlwiLFxuICAgIFwidmFsdWVzXCI6W1xuICAgICAge1wibmFtZVwiOiBuYW1lLCBcInR5cGVcIjogXCJzXCJ9XG4gICAgXVxuICB9XG59XG5cbmZ1bmN0aW9uIFVJQ29sb3Jfc2V0Q29sb3IoY29sb3IpIHtcbiAgbGV0IHZhbHVlcztcbiAgbGV0IGFscGhhID0gXCIxLjAwXCI7XG5cbiAgaWYgKGNvbG9yLmxlbmd0aCA+PSA4KSB7XG4gICAgYWxwaGEgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMSwzKSwgMTYpO1xuICAgIGFscGhhID0gKGFscGhhLzI1NSkudG9GaXhlZCgyKTtcbiAgICBjb2xvciA9IGNvbG9yLnN1YnN0cmluZygzLCA5KTtcbiAgfSBlbHNlIHtcbiAgICBjb2xvciA9IGNvbG9yLnN1YnN0cmluZygxLCBjb2xvci5sZW5ndGgpO1xuICB9XG5cbiAgY29sb3IgPSBjb252ZXJ0SGV4VG9SZ2IocldTKGNvbG9yKSk7XG4gIHZhbHVlcyA9IGNvbG9yLnNwbGl0KCcsJyk7XG5cbiAgbGV0IHIgPSByV1ModmFsdWVzWzBdKTtcbiAgbGV0IGcgPSByV1ModmFsdWVzWzFdKTtcbiAgbGV0IGIgPSByV1ModmFsdWVzWzJdKTtcbiAgbGV0IGEgPSBhbHBoYTtcblxuXG4gIHJldHVybiBVSUNvbG9yX2NvbG9yV2l0aFJHQkEociwgZywgYiwgYSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUtleXMoY29uZmlnKSB7XG4gIHZhciBrZXlzID0gIE9iamVjdC5rZXlzKGNvbmZpZyk7XG4gIGZvciAodmFyIGkgPSAwOyBpPGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZ1trZXlzW2ldXSA9PSBcInVuZGVmaW5lZFwiIHx8IGNvbmZpZ1trZXlzW2ldXSA9PSBudWxsKSB7XG4gICAgICBkZWxldGUgY29uZmlnW2tleXNbaV1dO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZ1trZXlzW2ldXSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGNvbmZpZ1trZXlzW2ldXSA9IGNhbGxiYWNrTWFwcGVyLm1hcChjb25maWdba2V5c1tpXV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoa2V5c1tpXSAhPT0gXCJpZFwiICYmXG4gICAgICAgICAga2V5c1tpXSAhPT0gXCJfX2ZpbGVuYW1lXCIgJiZcbiAgICAgICAgICBrZXlzW2ldICE9PSBcImN1cnJDaGlsZE9mZnNldFwiICYmXG4gICAgICAgICAga2V5c1tpXSAhPT0gXCJtZXRob2RzXCIgICYmXG4gICAgICAgICAga2V5c1tpXSAhPT0gXCJzd2lwZUVuYWJsZVwiICYmXG4gICAgICAgICAga2V5c1tpXSAhPT0gXCJ2aWV3UGFnZXJcIiAmJlxuICAgICAgICAgIGtleXNbaV0gIT09IFwidGFibGVWaWV3XCIpIHtcblxuICAgICAgICBkZWxldGUgY29uZmlnW2tleXNbaV1dO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVHlwZSh0eXBlLCBjb25maWcpIHtcbiAgdmFyIG1vZGlmaWVkVHlwZSAgPSBcIm1KUFZpZXdcIjtcbiAgc3dpdGNoKHR5cGUpe1xuICAgIGNhc2UgXCJlZGl0VGV4dFwiOntcbiAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQRWRpdFRleHRcIjtcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcImltYWdlVmlld1wiOntcbiAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQSW1hZ2VWaWV3XCI7XG4gICAgfVxuICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ0ZXh0Vmlld1wiOntcbiAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQVGV4dFZpZXdcIjtcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcInNjcm9sbFZpZXdcIjoge1xuICAgICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KCdoZWlnaHQnKSYmIGNvbmZpZy5oZWlnaHQgPT0gJ3dyYXBfY29udGVudCcpe1xuICAgICAgICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBTY3JvbGxWaWV3XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUFNjcm9sbFZpZXdcIjtcbiAgICAgICAgfVxuICAgICAgICBjb25maWcub3JpZW50YXRpb24gPSBcInZlcnRpY2FsXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFwiaG9yaXpvbnRhbFNjcm9sbFZpZXdcIjoge1xuICAgICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KCd3aWR0aCcpJiYgY29uZmlnLndpZHRoID09ICd3cmFwX2NvbnRlbnQnKXtcbiAgICAgICAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQU2Nyb2xsVmlld1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBTY3JvbGxWaWV3XCI7XG4gICAgICAgIH1cbiAgICAgICAgY29uZmlnLm9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBicmVhaztcbiAgICBjYXNlIFwidGFibGVWaWV3XCI6XG4gICAgY2FzZSBcImxpc3RWaWV3XCI6IHtcbiAgICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJsaXN0RGF0YVwiKSAmJiBjb25maWcuaGFzT3duUHJvcGVydHkoXCJsaXN0SXRlbVwiKSkge1xuICAgICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUFJlcGVhdFRhYmxlVmlld1wiO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBUYWJsZVZpZXdcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcImNvbGxlY3Rpb25WaWV3XCI6XG4gICAgY2FzZSBcInZpZXdQYWdlclwiOntcbiAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQQ29sbGVjdGlvblZpZXdcIjtcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcInByb2dyZXNzQmFyXCI6IHtcbiAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQQWN0aXZpdHlJbmRpY2F0b3JcIjtcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcInN3aXRjaFwiOiB7XG4gICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUFN3aXRjaFwiO1xuICAgIH1cbiAgICBicmVhaztcbiAgICBjYXNlIFwic3d5cGVMYXlvdXRcIjoge1xuICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBTd3lwZUxheW91dENlbGxcIjtcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcImFjY29yZGlvbkxheW91dFwiOiB7XG4gICAgICBtb2RpZmllZFR5cGUgPSBcIm1KUEV4cGFuZGFibGVDZWxsXCI7XG4gICAgfVxuICAgIGJyZWFrO1xuICAgIGNhc2UgXCJsaW5lYXJMYXlvdXRcIjoge1xuICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBMaW5lYXJMYXlvdXRcIjtcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcInJlbGF0aXZlTGF5b3V0XCI6IHtcbiAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQUmVsYXRpdmVMYXlvdXRcIjtcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcImZyYW1lTGF5b3V0XCI6IHtcbiAgICAgIG1vZGlmaWVkVHlwZSA9IFwibUpQUmVsYXRpdmVMYXlvdXRcIjtcbiAgICB9XG4gICAgYnJlYWs7XG4gICAgZGVmYXVsdDoge1xuICAgICAgbW9kaWZpZWRUeXBlID0gXCJtSlBWaWV3XCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBtb2RpZmllZFR5cGU7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUtleXMoY29uZmlnLCB0eXBlKSB7XG4gIHZhciBtYXAgPSB7XG4gICAgXCJpbWFnZVVybFwiOiBcImltYWdlTmFtZWRcIixcbiAgICBcInBhY2thZ2VJY29uXCIgOiBcImltYWdlTmFtZWRcIixcbiAgICBcImNvbG9yXCI6IFwidGV4dENvbG9yXCJcbiAgfTtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGNvbmZpZyk7XG5cbiAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAobWFwW2tleV0pIHtcbiAgICAgIGNvbmZpZ1ttYXBba2V5XV0gPSBjb25maWdba2V5XTtcbiAgICAgIGRlbGV0ZSBjb25maWdba2V5XTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChjb25maWcuc3Ryb2tlKSAge1xuICAgIGNvbmZpZy5ib3JkZXJXaWR0aCA9IGNvbmZpZy5zdHJva2Uuc3BsaXQoXCIsXCIpWzBdO1xuICAgIGNvbmZpZy5ib3JkZXJDb2xvciA9IGNvbmZpZy5zdHJva2Uuc3BsaXQoXCIsXCIpWzFdO1xuICB9XG5cbiAgLy8gQWRkIGFsbCB2aWV3IGJhc2VkIHByb3AgaW5qZWN0aW9ucyBiZWxvdy5cbiAgc3dpdGNoICh0eXBlLnRvTG93ZXJDYXNlKCkpe1xuICAgIGNhc2UgXCJzY3JvbGx2aWV3XCI6e1xuICAgICAgY29uZmlnLm9yaWVudGF0aW9uID0gXCJ2ZXJ0aWNhbFwiXG4gICAgfVxuICAgIGJyZWFrO1xuICAgIGNhc2UgXCJob3Jpem9udGFsc2Nyb2xsdmlld1wiOntcbiAgICAgIGNvbmZpZy5vcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiXG4gICAgfVxuICAgIGJyZWFrO1xuICB9XG4gIC8vIEFkZCBhbGwgdmlldyBiYXNlZCBwcm9wIGluamVjdGlvbnMgYWJvdmUuXG4gIHJldHVybiBjb25maWc7XG59XG5cblxuLy8gY1MgLSBjb252ZXJ0IHRvIFN0cmluZ1xuLy8gcldTIC0gcmVtb3ZlIHdoaXRlIHNwYWNlc1xuLy8gZnJvbVN0b3JlIG1ldGhvZHMgZG9udCAgdXNlIGludm9rZU9uXG4vLyB0aGUgZXh0cmFjdCBjbGFzc05hbWUgb3V0IG9mIHRoZSBzdG9yZWQgb2JqZWN0IGluIHRoZSBzdG9yZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0eXBlLCBjb25maWcsIF9nZXRTZXRUeXBlKSB7XG4gIGNvbmZpZyA9IGNoYW5nZUtleXMoZmxhdHRlbk9iamVjdChjb25maWcpLCB0eXBlKTtcbiAgdHlwZSA9IGdlbmVyYXRlVHlwZSh0eXBlLCBjb25maWcpO1xuICBnZXRTZXRUeXBlID0gKF9nZXRTZXRUeXBlID09IFwic2V0XCIpPzE6MDtcbiAgY29uZmlnLm1ldGhvZHMgPSBbXTtcbiAgY29uZmlnLmFsaWdubWVudF9ydWxlcyA9IFtdO1xuXG4gIC8vIHRhZyBzZXRcbiAgaWYgKGNvbmZpZy5pZCkgIHtcbiAgICBsZXQgdGFnID0gIHJXUyhjUyhjb25maWcuaWQpKTtcblxuICAgIGlmICghZ2V0U2V0VHlwZSkge1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaChzZWxmX2dldFZpZXdGcm9tVGFnKHRhZykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0VGFnKHRhZykpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZyYW1lXG4gIGlmICghY29uZmlnLnVzZUNvbnN0cmFpdHMgJiYgKGNvbmZpZy54IHx8IGNvbmZpZy55IHx8IGNvbmZpZy53IHx8IGNvbmZpZy5oKSkge1xuICAgIGxldCB4ID0gcldTKGNTKGNvbmZpZy54KSkgfHwgIFwiMFwiO1xuICAgIGxldCB5ID0gIHJXUyhjUyhjb25maWcueSkpfHwgXCIwXCI7XG4gICAgbGV0IHdpZHRoID0gcldTKGNTKGNvbmZpZy53KSkgfHwgXCIwXCI7XG4gICAgbGV0IGhlaWdodCA9IHJXUyhjUyhjb25maWcuaCkpIHx8IFwiMFwiO1xuXG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChzZWxmX3JlY3RGcm9tRGljdGlvbmFyeSh4LHksd2lkdGgsaGVpZ2h0KSk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEZyYW1lKCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInVzZUNvbnN0cmFpdHNcIikgJiYgY29uZmlnLnVzZUNvbnN0cmFpdHMgJiYgY29uZmlnLmhhc093blByb3BlcnR5KFwiZXhwYW5kXCIpKXtcbiAgICBjb25maWcudmlzaWJpbGl0eSA9IGNvbmZpZy5leHBhbmQgPyAoY29uZmlnLnZpc2liaWxpdHkgPyBjb25maWcudmlzaWJpbGl0eSA6IFwidmlzaWJsZVwiKSA6IFwiZ29uZVwiO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImFsaWduUGFyZW50Qm90dG9tXCIpICYmIGNvbmZpZy5hbGlnblBhcmVudEJvdHRvbSA9PSBcInRydWUsLTFcIil7XG4gICAgY29uZmlnLmFsaWdubWVudF9ydWxlcy5wdXNoKCdhbGlnbl9wYXJlbnRfYm90dG9tJyk7XG4gIH1cblxuICBpZiAoY29uZmlnLnVzZUNvbnN0cmFpdHMpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfdXBkYXRlTGF5b3V0UGFyYW1zKGNvbmZpZykpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImxldHRlclNwYWNpbmdcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0TGV0dGVyU3BhY2luZyhjb25maWcubGV0dGVyU3BhY2luZykpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImxpbmVTcGFjaW5nXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldExpbmVTcGFjaW5nKGNvbmZpZy5saW5lU3BhY2luZykpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImNhcmV0Q29sb3JcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKFVJQ29sb3Jfc2V0Q29sb3IoY29uZmlnLmNhcmV0Q29sb3IpKTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0Q2FyZXRDb2xvcigpKTtcbiAgfVxuXG4gIC8vIGJhY2tncm91bmRcbiAgaWYgKGNvbmZpZy5iYWNrZ3JvdW5kIHx8IGNvbmZpZy5ncmFkaWVudCB8fCBjb25maWcuYmFja2dyb3VuZERyYXdhYmxlKSB7XG4gICAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImdyYWRpZW50XCIpKSB7XG4gICAgICB2YXIgZ3JhZGllbnQgPSBKU09OLnBhcnNlKGNvbmZpZy5ncmFkaWVudCk7XG4gICAgICB2YXIgZ3JhZGllbnRUeXBlID0gZ3JhZGllbnQudHlwZTtcbiAgICAgIHZhciBncmFkaWVudEFuZ2xlID0gZ3JhZGllbnQuYW5nbGU7XG4gICAgICB2YXIgY29sb3VycyA9IFtdO1xuXG4gICAgICBncmFkaWVudC52YWx1ZXMuZm9yRWFjaChjb2xvciA9PiB7XG4gICAgICAgIGNvbG91cnMucHVzaChjb252ZXJ0Q29sb3JUb1JnYmEoY29sb3IpKTtcbiAgICAgIH0pO1xuXG4gICAgICBncmFkaWVudCA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgY29sb3JzOiBjb2xvdXJzLFxuICAgICAgICB0eXBlOiBncmFkaWVudFR5cGUsXG4gICAgICAgIGFuZ2xlOiBncmFkaWVudEFuZ2xlXG4gICAgICB9KTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRHcmFkaWVudChncmFkaWVudCkpO1xuICAgIH0gZWxzZSBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiYmFja2dyb3VuZERyYXdhYmxlXCIpKSB7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKFVJSW1hZ2VfaW1hZ2VOYW1lZChjb25maWcuYmFja2dyb3VuZERyYXdhYmxlKSk7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0QmFja2dyb3VuZEltYWdlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKFVJQ29sb3Jfc2V0Q29sb3IoY29uZmlnLmJhY2tncm91bmQpKTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRCYWNrZ3JvdW5kQ29sb3IoKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gYm9yZGVyQ29sb3IsIHJhZGl1cyBhbmQgd2lkdGhcbiAgLy8gd2lsbCB3b3JrIG9ubHkgZm9yIHVpVmlldyBhbmQgdWlMYWJlbFxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiY29ybmVyUmFkaXVzXCIpKSB7XG4gICAgbGV0IGFyZyA9IHJXUyhjUyhjb25maWcuY29ybmVyUmFkaXVzKSk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChzZXRDb3JuZXJSYWRpdXMoYXJnKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiYm9yZGVyV2lkdGhcIikpIHtcbiAgICBsZXQgYXJnID0gcldTKGNTKGNvbmZpZy5ib3JkZXJXaWR0aCkpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goc2V0Qm9yZGVyV2lkdGgoYXJnKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiYm9yZGVyQ29sb3JcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKFVJQ29sb3Jfc2V0Q29sb3IoY29uZmlnLmJvcmRlckNvbG9yKSk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChzZXRCb3JkZXJDb2xvcigpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuZGVidWcpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfbGF5ZXIoKSk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChzZXRCb3JkZXJXaWR0aChcIjFcIikpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5zaGFkb3cpIHtcbiAgICB2YXIgc2hhZG93VmFsdWVzID0gY29uZmlnLnNoYWRvdy5zcGxpdCgnLCcpO1xuICAgIHZhciBzaGFkb3dCbHVyID0gcldTKGNTKHNoYWRvd1ZhbHVlc1syXSkpO1xuICAgIHZhciBzaGFkb3dTcHJlYWQgPSByV1MoY1Moc2hhZG93VmFsdWVzWzNdKSk7XG4gICAgdmFyIHNoYWRvd09wYWNpdHkgPSByV1MoY1Moc2hhZG93VmFsdWVzWzVdKSk7XG4gICAgdmFyIHNoYWRvd09mZnNldCA9IHtcbiAgICAgIHg6IHJXUyhjUyhzaGFkb3dWYWx1ZXNbMF0pKSxcbiAgICAgIHk6IHJXUyhjUyhzaGFkb3dWYWx1ZXNbMV0pKVxuICAgIH07XG5cbiAgICB2YXIgc2hhZG93Q29sb3IgPSBjb252ZXJ0Q29sb3JUb1JnYmEoc2hhZG93VmFsdWVzWzRdKTtcblxuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRTaGFkb3coY29uZmlnLmlkLCBzaGFkb3dPZmZzZXQsIHNoYWRvd0JsdXIsIHNoYWRvd1NwcmVhZCwgc2hhZG93Q29sb3IsIHNoYWRvd09wYWNpdHkpKTtcbiAgfVxuXG4gIC8vIG1ha2UgY2hpbGQgZnVsbFdpZHRoIGFuZCBoZWlnaHQgb2YgcGFyZW50XG4gIGlmIChjb25maWcuZmlsbFBhcmVudCkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zdXBlcnZpZXcoKSk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChVSVZpZXdfYm91bmRzKCkpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRGcmFtZSgpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJpbWFnZU5hbWVkXCIpKSB7XG4gICAgbGV0IGlkID0gY1MoY29uZmlnLmlkKTtcbiAgICBsZXQgcGxhY2Vob2xkZXIgPSBjb25maWcucGxhY2VIb2xkZXIgfHwgXCJcIjtcbiAgICBpZiAoY29uZmlnLmltYWdlTmFtZWQuZW5kc1dpdGgoXCIuZ2lmXCIpKXtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRHaWYoaWQsIGNvbmZpZy5pbWFnZU5hbWVkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRJbWFnZVVSTChpZCwgY29uZmlnLmltYWdlTmFtZWQsIHBsYWNlaG9sZGVyKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImFkanVzdFZpZXdXaXRoS2V5Ym9hcmRcIikpIHtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19hZGp1c3RWaWV3V2l0aEtleWJvYXJkKGNvbmZpZy5hZGp1c3RWaWV3V2l0aEtleWJvYXJkKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwicGxheUdpZlwiKSl7XG4gICAgaWYgKGNvbmZpZy5wbGF5R2lmKVxuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3N0YXJ0R2lmKCkpO1xuICAgIGVsc2VcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zdG9wR2lmKCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oaW50KSB7XG4gICAgaWYgKGNvbmZpZy5sZXR0ZXJTcGFjaW5nKSB7XG4gICAgICB2YXIgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgJ2hpbnQnOiBjUyhjb25maWcuaGludCksXG4gICAgICAgICdsZXR0ZXJTcGFjaW5nJzogY29uZmlnLmxldHRlclNwYWNpbmdcbiAgICAgIH0pO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFBsYWNlaG9sZGVyUHJvcGVydGllcyhkYXRhKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRQbGFjZWhvbGRlcihjUyhjb25maWcuaGludCkpKTtcbiAgICB9XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwic2VwYXJhdG9yXCIpKSB7XG4gICAgdmFyIF9lbmFibGVkNiA9IGNTKGNvbmZpZy5zZXBhcmF0b3IpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRTZXBhcmF0b3IoX2VuYWJsZWQ2KSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwic2VwYXJhdG9yUmVwZWF0XCIpKSB7XG4gICAgdmFyIF9lbmFibGVkNiA9IGNTKGNvbmZpZy5zZXBhcmF0b3JSZXBlYXQpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRTZXBhcmF0b3JSZXBlYXQoX2VuYWJsZWQ2KSk7XG4gIH1cblxuICAgaWYgKGNvbmZpZy50cmFuc2xhdGlvblope1xuICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0VHJhbnNsYXRpb25aKGNTKGNvbmZpZy50cmFuc2xhdGlvblopKSk7XG4gICB9XG5cbiAgaWYgKGNvbmZpZy5zY3JvbGxUbykge1xuICAgIHZhciBkYXRhID0gY29uZmlnLnNjcm9sbFRvLnNwbGl0KFwiLFwiKTtcbiAgICB2YXIgcGFyc2VkRGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcInhcIjogZGF0YVswXSwgXCJ5XCI6IGRhdGFbMV19KTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2Nyb2xsVG8oY1MocGFyc2VkRGF0YSkpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJleHBhbmRcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0RXhwYW5kKGNvbmZpZy5leHBhbmQ/XCIxXCI6XCIwXCIpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJleHBhbmREdXJhdGlvblwiKSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRFeHBhbmREdXJhdGlvbihjUyhjb25maWcuZXhwYW5kRHVyYXRpb24pKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiZXhwYW5kQWxwaGFcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0RXhwYW5kQWxwaGEoY1MoY29uZmlnLmV4cGFuZEFscGhhKSkpO1xuICB9XG5cbiAgLy9VcGRhdGVkIHRvIGhhbmRsZSAwIGJlaW5nIHBhc3NlZCBmb3IgZGVmYXVsdCBhbGlnbm1lbnRcbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInRleHRBbGlnbm1lbnRcIikpIHtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRUZXh0QWxpZ25tZW50KHJXUyhjUyhjb25maWcudGV4dEFsaWdubWVudCkpKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwidGV4dEZyb21IdG1sXCIpKSB7XG4gICAgICB2YXIgbW9kaWZpZWRIdG1sU3RyaW5nID0gXCI8c3BhbiBzdHlsZT1cXFwiXCJcbiAgICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJmb250U3R5bGVcIikpIHtcbiAgICAgICAgICBtb2RpZmllZEh0bWxTdHJpbmcgKz0gXCJmb250LWZhbWlseTpcIitjb25maWcuZm9udFN0eWxlK1wiO1wiXG4gICAgICB9XG4gICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwidGV4dFNpemVcIikpIHtcbiAgICAgICAgICBtb2RpZmllZEh0bWxTdHJpbmcgKz0gXCJmb250LXNpemU6XCIrY29uZmlnLnRleHRTaXplK1wiO1wiXG4gICAgICB9XG4gICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwidGV4dENvbG9yXCIpKSB7XG4gICAgICAgICAgbW9kaWZpZWRIdG1sU3RyaW5nICs9IFwiY29sb3I6XCIrY29uZmlnLnRleHRDb2xvcitcIjtcIlxuICAgICAgfVxuICAgICAgbW9kaWZpZWRIdG1sU3RyaW5nICs9XCJcXFwiPlwiK2NvbmZpZy50ZXh0RnJvbUh0bWwrXCI8L3NwYW4+XCI7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0SFRNTFRleHQobW9kaWZpZWRIdG1sU3RyaW5nKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLnRleHRDb2xvcikge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goVUlDb2xvcl9zZXRDb2xvcihjb25maWcudGV4dENvbG9yKSk7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFRleHRDb2xvcigpKTtcbiAgfVxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiZm9udFN0eWxlXCIpKSB7XG4gICAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInRleHRTaXplXCIpKSB7XG4gICAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2goVUlGb250X2ZvbnRXaXRoTmFtZShjb25maWcuZm9udFN0eWxlLCBjb25maWcudGV4dFNpemUrXCJcIikpO1xuICAgIH0gZWxzZXtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19mb250V2l0aE5hbWUoY29uZmlnLmZvbnRTdHlsZSkpO1xuICAgIH1cbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0Rm9udCgpKTtcbiAgfSBlbHNlIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJ0ZXh0U2l6ZVwiKSl7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChVSUZvbnRfc3lzdGVtRm9udE9mU2l6ZShjb25maWcudGV4dFNpemUrXCJcIikpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRGb250KCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5zY3JvbGxFbmFibGVkKXtcbiAgICB2YXIgc2Nyb2xsRW5hYmxlZCA9IGNTKGNvbmZpZy5zY3JvbGxFbmFibGVkKTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2Nyb2xsRW5hYmxlZChzY3JvbGxFbmFibGVkKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmZvbnRGYW1pbHkpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKFVJRm9udF9zeXN0ZW1Gb250T2ZTaXplV2VpZ2h0KChjb25maWcudGV4dFNpemUgfHwgXCIxNFwiKSArIFwiXCIsIGNvbmZpZy5mb250RmFtaWx5IHx8IFwiMC4wXCIpKTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0Rm9udCgpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJzaW5nbGVMaW5lXCIpKSB7XG4gICAgaWYoIWNvbmZpZy5zaW5nbGVMaW5lKXtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRMaW5lQnJlYWtNb2RlKFwiMFwiKSk7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0TnVtYmVyT2ZMaW5lcyhcIjBcIikpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZmlnLnVzZUNvbnN0cmFpdHMgJiYgY29uZmlnLnZpc2liaWxpdHkpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0SGlkZGVuKGNvbmZpZy52aXNpYmlsaXR5KSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiY2xpY2thYmxlXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFVzZXJJbnRlcmFjdGlvbihyV1MoY1MoY29uZmlnLmNsaWNrYWJsZSkpKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLnRyYW5zbGF0aW9uWCkge1xuICAgIGxldCBwcm9wcyA9IFt7XG4gICAgICAnaWQnOiAnJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyKSxcbiAgICAgICd0eXBlJzogJ3RyYW5zbGF0aW9uJyxcbiAgICAgICdydW5PblJlbmRlcicgOiAndHJ1ZScsXG4gICAgICAnZWFzaW5nJyA6ICdsaW5lYXInLFxuICAgICAgJ2RlbGF5JzogJzAnLFxuICAgICAgJ2R1cmF0aW9uJzogJzEnLFxuICAgICAgJ3Byb3BzJyA6IEpTT04uc3RyaW5naWZ5KFt7J3RvJzogJycgKyBjb25maWcudHJhbnNsYXRpb25YLCAncHJvcCc6J3RyYW5zbGF0aW9uWCcsICdmcm9tJzonMCd9XSlcbiAgICB9XTtcblxuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goc2VsZl9hbmltYXRlKHsnaWQnOicnK2NvbmZpZy5pZCwnanNvbic6SlNPTi5zdHJpbmdpZnkocHJvcHMpfSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy50cmFuc2xhdGlvblkpIHtcbiAgICBsZXQgcHJvcHMgPSBbe1xuICAgICAgJ2lkJzogJycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiksXG4gICAgICAndHlwZSc6ICd0cmFuc2xhdGlvbicsXG4gICAgICAncnVuT25SZW5kZXInIDogJ3RydWUnLFxuICAgICAgJ2Vhc2luZycgOiAnbGluZWFyJyxcbiAgICAgICdkZWxheSc6ICcwJyxcbiAgICAgICdkdXJhdGlvbic6ICcxJyxcbiAgICAgICdwcm9wcycgOiBKU09OLnN0cmluZ2lmeShbeyd0byc6ICcnICsgY29uZmlnLnRyYW5zbGF0aW9uWSwncHJvcCc6J3RyYW5zbGF0aW9uWScsJ2Zyb20nOicwJ31dKVxuICAgIH1dO1xuXG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChzZWxmX2FuaW1hdGUoeydpZCc6JycrY29uZmlnLmlkLCdqc29uJzpKU09OLnN0cmluZ2lmeShwcm9wcyl9KSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmFfcm90YXRlKSB7XG4gICAgLy9UT0RPOiBGSVggVEhJUyBCUklORyBJVCBPVVRTSURFXG4gICAgbGV0IHByb3BzID0ge1xuICAgICAgICBcImR1cmF0aW9uXCI6IGNvbmZpZy5hX2R1cmF0aW9uLFxuICAgICAgICBcImlkXCI6IGNvbmZpZy5pZCxcbiAgICAgICAgXCJkZWxheVwiOiBjb25maWcuYV9kZWxheSxcbiAgICAgICAgXCJvcHRpb25cIjogY29uZmlnLmFfb3B0aW9uLFxuICAgICAgICBcInR5cGVcIjogXCJyb3RhdGlvblwiLFxuICAgICB9O1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaChzZWxmX2FuaW1hdGUocHJvcHMpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJodG1sVGV4dFwiKSkge1xuICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0SFRNTFRleHQoY29uZmlnLmh0bWxUZXh0KSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiYnJpbmdTdWJWaWV3VG9Gcm9udFwiKSkge1xuICAgIGxldCB2aWV3VGFnID0gY1MoY29uZmlnLmlkKTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfYnJpbmdTdWJWaWV3VG9Gcm9udCh2aWV3VGFnKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiY29udGVudE1vZGVcIikpIHtcbiAgICBsZXQgY29udGVudE1vZGUgPSBjUyhjb25maWcuY29udGVudE1vZGUpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRDb250ZW50TW9kZShjb250ZW50TW9kZSkpO1xuICB9XG5cbiAgaWYoY29uZmlnLm9uRm9jdXMpe1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRPbkZvY3VzQ2FsbGJhY2soY29uZmlnLm9uRm9jdXMpKTtcbiAgfVxuXG4gIGlmKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcIm9uTWVyY2hhbnRWaWV3SGVpZ2h0Q2hhbmdlXCIpKXtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0T25NZXJjaGFudFZpZXdIZWlnaHRDaGFuZ2VDYWxsYmFjayhjb25maWcub25NZXJjaGFudFZpZXdIZWlnaHRDaGFuZ2UpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJwaXZvdFhcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfcGl2b3RYKGNvbmZpZy5waXZvdFgrXCJcIikpO1xuICB9XG5cbmlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJwaXZvdFlcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfcGl2b3RZKGNvbmZpZy5waXZvdFkrXCJcIikpO1xuICB9XG5cbiAgaWYoY29uZmlnLmhhc093blByb3BlcnR5KFwib25JdGVtQ2xpY2tcIikpe1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRPbkl0ZW1DbGljayhjb25maWcub25JdGVtQ2xpY2spKTtcbiAgfVxuXG5cbiAgaWYgKGNvbmZpZy5zdGF0dXNCYXJTdHlsZSkge1xuICAgIGxldCBlbmFibGVkID0gY1MoY29uZmlnLnN0YXR1c0JhclN0eWxlKTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRTdGF0dXNCYXJTdHlsZShlbmFibGVkKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiZW5hYmxlZFwiKSkge1xuICAgIGxldCBlbmFibGVkID0gY1MoY29uZmlnLmVuYWJsZWQpO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEVuYWJsZWQoZW5hYmxlZCkpO1xuICB9XG5cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiaW5wdXRUeXBlSVwiKSkge1xuICAgICAgbGV0IGtleWJvYXJkVHlwZSA9IGNTKGNvbmZpZy5pbnB1dFR5cGVJKTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRLZXlib2FyZFR5cGUoa2V5Ym9hcmRUeXBlKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmlucHV0VHlwZSkge1xuICAgIGxldCBrZXlib2FyZFR5cGUgPSBjb25maWcuaW5wdXRUeXBlO1xuICAgIGlmIChrZXlib2FyZFR5cGUgPT0gXCJudW1lcmljXCIgfHwga2V5Ym9hcmRUeXBlID09IFwibnVtZXJpY1dpdGhvdXRTdWdnZXN0aW9uXCIpIHtcbiAgICAgIGNvbmZpZy5pbnB1dFR5cGUgPSA0O1xuICAgIH0gZWxzZSBpZiAoa2V5Ym9hcmRUeXBlID09IFwiZW1haWxcIikge1xuICAgICAgY29uZmlnLmlucHV0VHlwZSA9IDc7XG4gICAgfSBlbHNlIGlmIChrZXlib2FyZFR5cGUgPT0gXCJudW1lcmljUGFzc3dvcmRcIikge1xuICAgICAgY29uZmlnLmlucHV0VHlwZSA9IDQ7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0U2VjdXJlVGV4dEVudHJ5KFwiMVwiKSk7XG4gICAgfSBlbHNlIGlmIChrZXlib2FyZFR5cGUgPT0gXCJwYXNzd29yZFwiKSB7XG4gICAgICBjb25maWcuaW5wdXRUeXBlID0gMDtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRTZWN1cmVUZXh0RW50cnkoXCIxXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnLmlucHV0VHlwZSA9IDA7XG4gICAgfVxuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRLZXlib2FyZFR5cGUoY1MoY29uZmlnLmlucHV0VHlwZSkpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJhdXRvQ2FwaXRhbGl6YXRpb25UeXBlXCIpKSB7XG4gICAgICBsZXQga2V5Ym9hcmRUeXBlID0gY1MoY29uZmlnLmF1dG9DYXBpdGFsaXphdGlvblR5cGUpO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEF1dG9DYXBpdGFsaXphdGlvblR5cGUoa2V5Ym9hcmRUeXBlKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiYXV0b0NvcnJlY3Rpb25UeXBlXCIpKSB7XG4gICAgbGV0IGF1dG9Db3JyZWN0aW9uVHlwZSA9IGNTKGNvbmZpZy5hdXRvQ29ycmVjdGlvblR5cGUpO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldEF1dG9Db3JyZWN0aW9uVHlwZShhdXRvQ29ycmVjdGlvblR5cGUpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJiZWNvbWVGaXJzdFJlc3BvbmRlclwiKSkge1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX2JlY29tZUZpcnN0UmVzcG9uZGVyKCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInNldE9uXCIpKSB7XG4gICAgbGV0IGVuYWJsZWQgPSBjUyhjb25maWcuc2V0T24pO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldE9uKGVuYWJsZWQpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuc2Nyb2xsVG9JbmRleCkge1xuICAgIGxldCBlbmFibGVkID0gY1MoY29uZmlnLnNjcm9sbFRvSW5kZXgpO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3Njcm9sbFRvSW5kZXgoZW5hYmxlZCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5zaG93VmVydGljYWxTY3JvbGxCYXIpIHtcbiAgICBsZXQgZW5hYmxlZCA9IGNTKGNvbmZpZy5zaG93VmVydGljYWxTY3JvbGxCYXIpO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3Nob3dWZXJ0aWNhbFNjcm9sbEJhcihlbmFibGVkKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmxlbmd0aExpbWl0KSB7XG4gICAgbGV0IGVuYWJsZWQgPSBjUyhjb25maWcubGVuZ3RoTGltaXQpO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFRleHRMZW5ndGhMaW1pdChlbmFibGVkKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwic3d5cGVFbmFibGVkXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFN3eXBlKGNvbmZpZy5zd3lwZUVuYWJsZWQpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJmb2N1c1wiKSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19iZWNvbWVGaXJzdFJlc3BvbmRlcihjUyhjb25maWcuZm9jdXMpKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLnBhdHRlcm4pIHtcbiAgICB2YXIgcGF0U3RyID0gY1MoY29uZmlnLnBhdHRlcm4pO1xuICAgIHZhciBwYXRBcnIgPSBwYXRTdHIuc3BsaXQoXCIsXCIpO1xuICAgIHZhciBwYXRMZW4gPSBwYXRBcnJbcGF0QXJyLmxlbmd0aCAtIDFdO1xuICAgIHBhdFN0ciA9IHBhdEFyci5zbGljZSgwLCBwYXRBcnIubGVuZ3RoIC0gMSkuam9pbihcIixcIik7XG5cbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0UmVndWxhckV4cHJlc3Npb24oY1MocGF0U3RyKSkpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRUZXh0TGVuZ3RoTGltaXQoY1MocGF0TGVuKSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5yZWdFeHApIHtcbiAgICBsZXQgZW5hYmxlZCA9IGNTKGNvbmZpZy5yZWdFeHApO1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFJlZ3VsYXJFeHByZXNzaW9uKGVuYWJsZWQpKTtcbiAgfVxuXG4gIGlmIChjb25maWcucmVtb3ZlQ2VsbCkge1xuICAgIGxldCBjZWxsSW5kZXggPSBjUyhjb25maWcucmVtb3ZlQ2VsbCk7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfcmVtb3ZlQ2VsbChjZWxsSW5kZXgpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuc2VjdXJlVGV4dEVudHJ5KSB7XG4gICAgbGV0IGVuYWJsZWQgPSBjUyhjb25maWcuc2VjdXJlVGV4dEVudHJ5KTtcbiAgICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRTZWN1cmVUZXh0RW50cnkoZW5hYmxlZCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnY2hlY2tlZCcpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldE9uKGNvbmZpZy5jaGVja2VkKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLnBvcHVwTWVudSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2goc2VsZl9zZXRQb3B1cE1lbnUoY29uZmlnLnBvcHVwTWVudSwgY29uZmlnLm9uTWVudUl0ZW1DbGljaykpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImFscGhhXCIpKSB7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaChzZWxmX3NldEFscGhhKGNvbmZpZy5hbHBoYSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5hbmltYXRpb24pIHtcbiAgICBsZXQgYW5pbVByb3BzID0ge1xuICAgICAgdmlld1RhZzogJycgKyBjb25maWcuaWQsXG4gICAgICBqc29uOiBjb25maWcuYW5pbWF0aW9uXG4gICAgfTtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHNlbGZfYW5pbWF0ZU5ldyhhbmltUHJvcHMpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJ0ZXh0XCIpKSB7XG4gICAgaWYgKGNvbmZpZy5sZXR0ZXJTcGFjaW5nKSB7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0TGV0dGVyU3BhY2luZyhjUyhjb25maWcubGV0dGVyU3BhY2luZykpKTtcbiAgICB9XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldFRleHQoY1MoY29uZmlnLnRleHQpKSk7XG4gIH1cblxuICBpZihjb25maWcuY3Vyc29yUG9zaXRpb24pIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHNlbGZfc2V0Q3Vyc29yUG9zaXRpb24oY1MoY29uZmlnLmlkKSwgY1MoY29uZmlnLmN1cnNvclBvc2l0aW9uKSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5vblN3aXBlICYmIHR5cGVvZiBjb25maWcub25Td2lwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0U3dpcGVDYWxsYmFjayhjYWxsYmFja01hcHBlci5tYXAoY29uZmlnLm9uU3dpcGUpKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiY2xvc2VTd2lwZVwiKSkge1xuICAgICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldENsb3NlU3dpcGUoY29uZmlnLmNsb3NlU3dpcGUpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJzd3lwZUVuYWJsZWRcIikpIHtcbiAgICBjb25maWcubWV0aG9kcy5wdXNoKHRoaXNfc2V0RW5hYmxlU3d5cGUoY29uZmlnLnN3eXBlRW5hYmxlZCkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImxpc3REYXRhXCIpICYmIGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImxpc3RJdGVtXCIpKSB7XG4gICAgY29uc3QgaXRlbSA9IEpTT04ucGFyc2UoY29uZmlnLmxpc3RJdGVtKTtcbiAgICBpdGVtLml0ZW1WaWV3ID0gQW5kcm9pZC5jcmVhdGVMaXN0RGF0YShjb25maWcuaWQsIGl0ZW0uaXRlbVZpZXcpO1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXR1cExpc3QoY29uZmlnLmxpc3REYXRhLCBKU09OLnN0cmluZ2lmeShpdGVtKSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImlubGluZUFuaW1hdGlvblwiKSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19pbmxpbmVBbmltYXRpb24oY29uZmlnKSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiY2xpcHNUb0JvdW5kc1wiKSkge1xuICAgIGNvbmZpZy5tZXRob2RzLnB1c2godGhpc19zZXRDbGlwc1RvQm91bmRzKGNvbmZpZy5jbGlwc1RvQm91bmRzKSk7XG4gIH1cblxuICBpZihjb25maWcuaGFzT3duUHJvcGVydHkoXCJjb3JuZXJSYWRpaVwiKSl7XG4gICAgY29uZmlnLm1ldGhvZHMucHVzaCh0aGlzX3NldENvcm5lckN1cnZlcyhjb25maWcuY29ybmVyUmFkaWkpKTtcbiAgfVxuXG4gIGNvbmZpZy5jdXJyQ2hpbGRPZmZzZXQgPSAwO1xuICBjb25maWcgPSB0cmFuc2Zvcm1LZXlzKGNvbmZpZyk7XG5cbiAgcmV0dXJuIHtjb25maWc6IGNvbmZpZywgdHlwZTogdHlwZX07XG59O1xuXG5mdW5jdGlvbiBzZWxmX2FuaW1hdGVOZXcocHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICBcInJldHVyblwiOiBcImZhbHNlXCIsXG4gICAgXCJpbnZva2VPblwiOiBcInNlbGZcIixcbiAgICBcIm1ldGhvZE5hbWVcIjpcImFuaW1hdGU6XCIsXG4gICAgXCJ2YWx1ZXNcIjogW3Byb3BzXVxuICB9O1xufVxuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiogSlVTUEFZIFRlY2hub2xvZ2llcyBQdnQuIEx0ZC4gW2h0dHBzOi8vd3d3Lmp1c3BheS5pbl1cbipcbiogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuKlxuKiBKVVNQQVkgUGxhdGZvcm0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuKiBQdWJsaWMgTGljZW5zZSAoR05VIEFHUEwpIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLFxuKiBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBUaGUgZW5kIHVzZXIgd2lsbFxuKiBiZSBsaWFibGUgZm9yIGFsbCBkYW1hZ2VzIHdpdGhvdXQgbGltaXRhdGlvbiwgd2hpY2ggaXMgY2F1c2VkIGJ5IHRoZVxuKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiogZGFtYWdlcywgY2xhaW1zLCBjb3N0LCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leSBmZWUgY2xhaW1lZCBvbiBKdXNwYXkuXG4qIFRoZSBlbmQgdXNlciBoYXMgTk8gcmlnaHQgdG8gY2xhaW0gYW55IGluZGVtbmlmaWNhdGlvbiBiYXNlZCBvbiBpdHMgdXNlXG4qIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0cGFyc2VQYXJhbXMgOiByZXF1aXJlKFwiLi9wYXJzZVBhcmFtc1wiKSxcbn1cbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IFwiSlVTUEFZIFRlY2hub2xvZ2llc1wiXG4qIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4qXG4qIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEpVU1BBWSBQbGF0Zm9ybS5cbipcbiogSlVTUEFZIFBsYXRmb3JtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiogaXQgZm9yIG9ubHkgZWR1Y2F0aW9uYWwgcHVycG9zZXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWxcbiogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiogZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiogRm9yIEVudGVycHJpc2UvQ29tbWVyaWNhbCBsaWNlbnNlcywgY29udGFjdCA8aW5mb0BqdXNwYXkuaW4+LlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiogYmUgbGlhYmxlIGZvciBhbGwgZGFtYWdlcyB3aXRob3V0IGxpbWl0YXRpb24sIHdoaWNoIGlzIGNhdXNlZCBieSB0aGVcbiogQUJVU0Ugb2YgdGhlIExJQ0VOU0VEIFNPRlRXQVJFIGFuZCBzaGFsbCBJTkRFTU5JRlkgSlVTUEFZIGZvciBzdWNoXG4qIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuKiBUaGUgZW5kIHVzZXIgaGFzIE5PIHJpZ2h0IHRvIGNsYWltIGFueSBpbmRlbW5pZmljYXRpb24gYmFzZWQgb24gaXRzIHVzZVxuKiBvZiBMaWNlbnNlZCBTb2Z0d2FyZS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9hZ3BsLmh0bWw+LlxuKi9cblxuQXJyYXkucHJvdG90eXBlLnJvdGF0ZSA9IChmdW5jdGlvbiAoKSB7XG4gIC8vIHNhdmUgcmVmZXJlbmNlcyB0byBhcnJheSBmdW5jdGlvbnMgdG8gbWFrZSBsb29rdXAgZmFzdGVyXG4gIHZhciBwdXNoID0gQXJyYXkucHJvdG90eXBlLnB1c2gsXG4gICAgc3BsaWNlID0gQXJyYXkucHJvdG90eXBlLnNwbGljZTtcblxuICByZXR1cm4gZnVuY3Rpb24gKGNvdW50KSB7XG4gICAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoID4+PiAwLCAvLyBjb252ZXJ0IHRvIHVpbnRcbiAgICAgIGNvdW50ID0gY291bnQgPj4gMDsgLy8gY29udmVydCB0byBpbnRcblxuICAgIC8vIGNvbnZlcnQgY291bnQgdG8gdmFsdWUgaW4gcmFuZ2UgWzAsIGxlbilcbiAgICBjb3VudCA9ICgoY291bnQgJSBsZW4pICsgbGVuKSAlIGxlbjtcblxuICAgIC8vIHVzZSBzcGxpY2UuY2FsbCgpIGluc3RlYWQgb2YgdGhpcy5zcGxpY2UoKSB0byBtYWtlIGZ1bmN0aW9uIGdlbmVyaWNcbiAgICBwdXNoLmFwcGx5KHRoaXMsIHNwbGljZS5jYWxsKHRoaXMsIDAsIGNvdW50KSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG59KSgpO1xuXG5mdW5jdGlvbiBmbGF0dGVuT2JqZWN0KG9iKSB7XG4gIHZhciB0b1JldHVybiA9IHt9O1xuICBmb3IgKHZhciBpIGluIG9iKSB7XG4gICAgaWYgKCFvYi5oYXNPd25Qcm9wZXJ0eShpKSkgY29udGludWU7XG4gICAgaWYgKCh0eXBlb2Ygb2JbaV0pID09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgZmxhdE9iamVjdCA9IGZsYXR0ZW5PYmplY3Qob2JbaV0pO1xuICAgICAgZm9yICh2YXIgeCBpbiBmbGF0T2JqZWN0KSB7XG4gICAgICAgIGlmICghZmxhdE9iamVjdC5oYXNPd25Qcm9wZXJ0eSh4KSkgY29udGludWU7XG4gICAgICAgIGlmICh0eXBlb2YgZmxhdE9iamVjdFt4XSAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICB0b1JldHVyblt4XSA9IGZsYXRPYmplY3RbeF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvUmV0dXJuW2ldID0gb2JbaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRvUmV0dXJuO1xufVxuXG5mdW5jdGlvbiBwYXJzZUNvbG9ycyhjb2xvcikge1xuICBpZiAoY29sb3IubGVuZ3RoIDwgOClcbiAgICByZXR1cm4gY29sb3I7XG5cbiAgaWYgKGNvbG9yLmluZGV4T2YoXCJyZ2JhXCIpICE9PSAtMSB8fCBjb2xvci5pbmRleE9mKFwicmdiXCIpICE9PSAtMSlcbiAgICByZXR1cm4gY29sb3I7XG5cbiAgdmFyIGFscGhhID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDEsIDMpLCAxNik7XG4gIGFscGhhID0gKGFscGhhIC8gMjU1KS50b0ZpeGVkKDIpO1xuXG4gIHZhciBoZXhDb2xvciA9IGNvbG9yLnN1YnN0cmluZygzLCA5KTtcbiAgdmFyIHJnYmFDb2xvciA9IFwicmdiYShcIiArIGNvbnZlcnRIZXhUb1JnYihoZXhDb2xvcikgKyBcIixcIiArIGFscGhhICsgXCIpXCI7XG5cbiAgcmV0dXJuIHJnYmFDb2xvcjtcbn1cblxuZnVuY3Rpb24gcGFyc2VMYXlvdXRQcm9wcyh0eXBlLCBjb25maWcsIGtleSkge1xuICBjb25zdCBpc01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDwgNzAwXG4gIGlmICh0eXBlb2YgY29uZmlnW2tleV0gPT0gXCJ1bmRlZmluZWRcIiB8fCBjb25maWdba2V5XSA9PSBudWxsKSB7XG4gICAgZGVsZXRlIGNvbmZpZ1trZXldO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghY29uZmlnLnN0eWxlKSB7XG4gICAgY29uZmlnLnN0eWxlID0ge307XG4gICAgY29uZmlnLnN0eWxlLnRyYW5zZm9ybSA9IFwiXCI7XG4gICAgY29uZmlnLmFuaW1hdGlvbiA9IHt9O1xuICAgIGNvbmZpZy5hbmltYXRpb24udHJhbnNmb3JtID0gXCJcIjtcbiAgfVxuXG4gIGlmICghY29uZmlnLmF0dHJpYnV0ZXMpXG4gICAgY29uZmlnLmF0dHJpYnV0ZXMgPSB7fTtcblxuICBpZiAoIWNvbmZpZy5zdHlsZS5jbGFzc05hbWUpXG4gICAgY29uZmlnLnN0eWxlLmNsYXNzTmFtZSA9IFwiXCI7XG5cbiAgaWYgKChrZXkgPT0gXCJvbkNsaWNrXCIgfHwga2V5ID09IFwib25DbGlja0V2ZW50XCIpKSB7XG4gICAgaWYoIWlzTW9iaWxlICYmICFjb25maWcuY3Vyc29yVHlwZSl7XG4gICAgICBjb25maWcuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgfVxuICB9XG4gIGlmKGtleSA9PSBcImN1cnNvclR5cGVcIikge1xuICAgIGNvbmZpZy5zdHlsZS5jdXJzb3IgPSBjb25maWcuY3Vyc29yVHlwZTtcbiAgfVxuICBpZiAoa2V5ID09IFwidGV4dFNpemVcIilcbiAgICBjb25maWcuc3R5bGUuZm9udFNpemUgPSBjb25maWcudGV4dFNpemUgKyAncHgnO1xuICBpZiAoa2V5ID09ICdmb250U2l6ZScpXG4gICAgY29uZmlnLnN0eWxlLmZvbnRTaXplID0gY29uZmlnLmZvbnRTaXplICsgJ3B4JztcbiAgXG4gIGlmIChrZXkgPT0gJ3VybCcpXG4gICAgY29uZmlnLmF0dHJpYnV0ZXMuc3JjID0gY29uZmlnLnVybFxuICAgIFxuICAvKmlmIChrZXkgPT0gXCJpbWFnZVVybFwiKXtcbiAgICBsZXQgaW1hZ2VVcmwgPSBjb25maWcuaW1hZ2VVcmw7XG4gICAgXG4gICAgaWYoY29uZmlnLnJhd0RhdGEpIHtcbiAgICAgIC8vIERvIG5vdGhpbmdcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRlbXAgPSBpbWFnZVVybC5zcGxpdCgnLicpO1xuICAgICAgbGV0IGV4dCA9ICcnO1xuICAgICAgaWYodGVtcCAmJiB0ZW1wLmxlbmd0aCA+IDApXG4gICAgICAgIGV4dCA9IHRlbXBbdGVtcC5sZW5ndGggLSAxXTtcbiAgICAgIFxuICAgICAgbGV0IGV4dHMgPSBbXCJqcGVnXCIsIFwianBnXCIsIFwicG5nXCIsIFwiYm1wXCIsIFwic3ZnXCIsIFwiZ2lmXCJdO1xuICAgICAgZXh0ID0gZXh0LnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGlmKCFleHRzLmluY2x1ZGVzKGV4dCkpIHtcbiAgICAgICAgaW1hZ2VVcmwgKz0gJy5wbmcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbmZpZy5hdHRyaWJ1dGVzLnNyYyA9IGltYWdlVXJsO1xuICB9Ki9cblxuICBpZiAoa2V5ID09IFwiYmFja2dyb3VuZENvbG9yXCIpIHtcbiAgICBjb25maWcuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFyc2VDb2xvcnMoY29uZmlnLmJhY2tncm91bmRDb2xvcik7XG4gIH1cblxuICBpZiAoa2V5ID09IFwiYmFja2dyb3VuZFwiKSB7XG4gICAgY29uZmlnLnN0eWxlLmJhY2tncm91bmQgPSBjb25maWcuYmFja2dyb3VuZDtcbiAgfVxuICBpZiAoa2V5ID09IFwiYmFja2dyb3VuZERyYXdhYmxlXCIpIHtcbiAgICBjb25maWcuc3R5bGVbXCJiYWNrZ3JvdW5kLWltYWdlXCJdID0gXCJ1cmwoJ1wiK2NvbmZpZy5iYWNrZ3JvdW5kRHJhd2FibGUrXCInKVwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImNvbG9yXCIpIHtcbiAgICBjb25maWcuc3R5bGUuY29sb3IgPSBwYXJzZUNvbG9ycyhjb25maWcuY29sb3IpO1xuICB9XG5cbiAgaWYoa2V5ID09IFwicG9zaXRpb25cIikge1xuICAgIGNvbmZpZy5zdHlsZS5wb3NpdGlvbiA9IGNvbmZpZy5wb3NpdGlvbjtcbiAgfVxuXG4gIGlmKGtleSA9PSBcImJvdHRvbUZpeGVkXCIpIHtcbiAgICBjb25maWcuc3R5bGUuYm90dG9tID0gY29uZmlnLmJvdHRvbUZpeGVkO1xuICB9XG4gIGlmKGtleSA9PSBcInRvcEZpeGVkXCIpIHtcbiAgICBjb25maWcuc3R5bGUudG9wID0gY29uZmlnLnRvcEZpeGVkO1xuICB9XG5cbiAgaWYoa2V5ID09IFwiYXV0b2ZvY3VzXCIpe1xuICAgIGlmKGNvbmZpZy5hdXRvZm9jdXMpe1xuICAgICAgY29uZmlnLmF0dHJpYnV0ZXNbXCJhdXRvZm9jdXNcIl0gPSBcImF1dG9mb2N1c1wiOyAgXG4gICAgfVxuICB9XG4gIGlmKGtleT09XCJmb2N1c1wiKSB7XG4gICAgaWYgKGNvbmZpZy5mb2N1cyAmJiBjb25maWcuaWQpe1xuICAgICAgdmFyIGRvYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy5pZCk7XG4gICAgICBpZiAoZG9jKXtcbiAgICAgICAgZG9jLmZvY3VzKCk7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoa2V5ID09IFwiY29ybmVyUmFkaXVzXCIpIHtcbiAgICBjb25maWcuc3R5bGUuYm9yZGVyUmFkaXVzID0gY29uZmlnLmNvcm5lclJhZGl1cyArIFwicHhcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJhbHBoYVwiKSB7XG4gICAgY29uZmlnLnN0eWxlLm9wYWNpdHkgPSBjb25maWdba2V5XTtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJhX2FscGhhXCIpIHtcbiAgICBjb25maWcuYW5pbWF0aW9uLm9wYWNpdHkgPSBjb25maWdba2V5XTtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJmb250RmFtaWx5XCIpIHtcbiAgICBjb25maWcuc3R5bGUuZm9udEZhbWlseSA9IGNvbmZpZy5mb250RmFtaWx5O1xuICB9XG5cbiAgaWYgKGtleSA9PSAndHlwZWZhY2UnKSB7XG4gICAgc3dpdGNoKGNvbmZpZy50eXBlZmFjZSl7XG4gICAgICBjYXNlICdub3JtYWwnOlxuICAgICAgICBjb25maWcuc3R5bGUuZm9udFdlaWdodCA9IDQwMDtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm9sZCc6XG4gICAgICAgIGNvbmZpZy5zdHlsZS5mb250V2VpZ2h0ID0gNzAwO1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdpdGFsaWMnOlxuICAgICAgICBjb25maWcuc3R5bGUuZm9udFN0eWxlID0gJ2l0YWxpYyc7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvbGRfaXRhbGljJzpcbiAgICAgICAgY29uZmlnLnN0eWxlLmZvbnRXZWlnaHQgPSA3MDA7XG4gICAgICAgIGNvbmZpZy5zdHlsZS5mb250U3R5bGUgPSAnaXRhbGljJztcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndW5kZXJsaW5lJzpcbiAgICAgICAgY29uZmlnLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ3VuZGVybGluZSc7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoa2V5ID09IFwiZm9udFN0eWxlXCIpIHtcbiAgICBsZXQgbWF0Y2ggPSBjb25maWcuZm9udFN0eWxlLm1hdGNoKC9bLy1dLyk7XG4gICAgbGV0IGZvbnROYW1lID0gbWF0Y2ggPyBjb25maWcuZm9udFN0eWxlLnNsaWNlKDAsIG1hdGNoLmluZGV4KSA6IGNvbmZpZy5mb250U3R5bGU7XG4gICAgY29uZmlnLnN0eWxlLmZvbnRGYW1pbHkgPSBmb250TmFtZTtcblxuICAgIGlmICghbWF0Y2gpXG4gICAgICByZXR1cm47XG5cbiAgICBsZXQgdHlwZSA9IGNvbmZpZy5mb250U3R5bGUuc2xpY2UobWF0Y2guaW5kZXggKyAxKTtcbiAgICB0eXBlID0gdHlwZS5yZXBsYWNlKC9bLS9dL2csICcnKTtcbiAgICB0eXBlICA9IHR5cGUudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmICh0eXBlLmluZGV4T2YoJ2l0YWxpYycpICE9IC0xKVxuICAgICAgY29uZmlnLnN0eWxlLmZvbnRTdHlsZSA9ICdpdGFsaWMnO1xuXG4gICAgbGV0IGZvbnRXZWlnaHQgPSAwO1xuXG4gICAgaWYgKHR5cGUuaW5kZXhPZignZXh0cmFsaWdodCcpICE9IC0xKVxuICAgICAgZm9udFdlaWdodCA9IDIwMDtcbiAgICBlbHNlIGlmICh0eXBlLmluZGV4T2YoJ2xpZ2h0JykgIT0gLTEpXG4gICAgICBmb250V2VpZ2h0ID0gMzAwO1xuICAgIGVsc2UgaWYgKHR5cGUuaW5kZXhPZigncmVndWxhcicpICE9IC0xIHx8IHR5cGUuaW5kZXhPZignYm9vaycpICE9IC0xKVxuICAgICAgZm9udFdlaWdodCA9IDQwMDtcbiAgICBlbHNlIGlmICh0eXBlLmluZGV4T2YoJ3NlbWlib2xkJykgIT0gLTEgfHwgdHlwZS5pbmRleE9mKCdtZWRpdW0nKSAhPSAtMSlcbiAgICAgIGZvbnRXZWlnaHQgPSA1MDA7XG4gICAgZWxzZSBpZiAodHlwZS5pbmRleE9mKCdib2xkJykgIT0gLTEgfHwgdHlwZS5pbmRleE9mKCdoZWF2eScpICE9IC0xKVxuICAgICAgZm9udFdlaWdodCA9IDcwMDtcbiAgICBlbHNlIGlmICh0eXBlLmluZGV4T2YoJ2JsYWNrJykgIT0gLTEpXG4gICAgICBmb250V2VpZ2h0ID0gOTAwO1xuXG4gICAgaWYoZm9udFdlaWdodCA+IDApXG4gICAgICBjb25maWcuc3R5bGUuZm9udFdlaWdodCA9IGZvbnRXZWlnaHQ7XG4gIH1cblxuICBpZiAoa2V5ID09ICd2aXNpYmlsaXR5Jykge1xuICAgIGxldCB2aXNpYmlsaXR5ID0gY29uZmlnLnZpc2liaWxpdHk7XG4gICAgaWYgKHZpc2liaWxpdHkgPT0gJ2ludmlzaWJsZScpXG4gICAgICBjb25maWcuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgZWxzZSBpZiAodmlzaWJpbGl0eSA9PSAnZ29uZScpXG4gICAgICBjb25maWcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGVsc2Uge1xuICAgICAgY29uZmlnLnN0eWxlLnZpc2liaWxpdHkgPSAnJztcbiAgICB9XG4gIH0gXG5cbiAgaWYgKGtleSA9PSAnZXhwYW5kJykge1xuICAgIGxldCB2aXNpYmlsaXR5ID0gY29uZmlnLmV4cGFuZCArICcnO1xuICAgIGlmICh2aXNpYmlsaXR5ID09ICd0cnVlJyl7XG4gICAgICBjb25maWcuc3R5bGUudmlzaWJpbGl0eSA9ICcnO1xuICAgIH1cbiAgICBlbHNlXG4gICAgICBjb25maWcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInN0cm9rZVwiKSB7XG4gICAgbGV0IHZhbHVlcyA9IGNvbmZpZy5zdHJva2Uuc3BsaXQoXCIsXCIpO1xuXG4gICAgaWYodmFsdWVzLmxlbmd0aCA9PSAyKVxuICAgICAgY29uZmlnLnN0eWxlLmJvcmRlciA9IHZhbHVlc1swXSArIFwicHggc29saWQgXCIgKyB2YWx1ZXNbMV07XG4gICAgZWxzZSBpZih2YWx1ZXMubGVuZ3RoID09IDMpe1xuICAgICAgaWYgKHZhbHVlc1syXSA9PSBcInJibFwiKXtcbiAgICAgICAgY29uZmlnLnN0eWxlLmJvcmRlckJvdHRvbSA9IHZhbHVlc1swXSArIFwicHggc29saWQgXCIgKyB2YWx1ZXNbMV07XG4gICAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJMZWZ0ID0gdmFsdWVzWzBdICsgXCJweCBzb2xpZCBcIiArIHZhbHVlc1sxXTtcbiAgICAgICAgY29uZmlnLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmFsdWVzWzBdICsgXCJweCBzb2xpZCBcIiArIHZhbHVlc1sxXTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHZhbHVlc1syXSA9PSBcImJcIil7XG4gICAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJCb3R0b20gPSB2YWx1ZXNbMF0gKyBcInB4IHNvbGlkIFwiICsgdmFsdWVzWzFdO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAgICBjb25maWcuc3R5bGUuYm9yZGVyID0gdmFsdWVzWzBdICsgXCJweCBcIiArIHZhbHVlc1sxXSArIFwiIFwiICsgdmFsdWVzWzJdO1xuICAgIH1cbiAgICBcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJzdHJva2VUb3BcIikge1xuICAgIGxldCB2YWx1ZXMgPSBjb25maWcuc3Ryb2tlVG9wLnNwbGl0KFwiLFwiKTtcbiAgICBcbiAgICBpZih2YWx1ZXMubGVuZ3RoID09IDIpXG4gICAgICBjb25maWcuc3R5bGUuYm9yZGVyVG9wID0gdmFsdWVzWzBdICsgXCJweCBzb2xpZCBcIiArIHZhbHVlc1sxXTtcbiAgICBlbHNlIGlmKHZhbHVlcy5sZW5ndGggPT0gMylcbiAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJUb3AgPSB2YWx1ZXNbMF0gKyBcInB4IFwiICsgdmFsdWVzWzFdICsgXCIgXCIgKyB2YWx1ZXNbMl07XG4gIH1cblxuICBpZiAoa2V5ID09IFwic3Ryb2tlUmlnaHRcIikge1xuICAgIGxldCB2YWx1ZXMgPSBjb25maWcuc3Ryb2tlUmlnaHQuc3BsaXQoXCIsXCIpO1xuICAgIFxuICAgIGlmKHZhbHVlcy5sZW5ndGggPT0gMilcbiAgICAgIGNvbmZpZy5zdHlsZS5ib3JkZXJSaWdodCA9IHZhbHVlc1swXSArIFwicHggc29saWQgXCIgKyB2YWx1ZXNbMV07XG4gICAgZWxzZSBpZih2YWx1ZXMubGVuZ3RoID09IDMpXG4gICAgICBjb25maWcuc3R5bGUuYm9yZGVyUmlnaHQgPSB2YWx1ZXNbMF0gKyBcInB4IFwiICsgdmFsdWVzWzFdICsgXCIgXCIgKyB2YWx1ZXNbMl07XG4gIH1cblxuICBpZiAoa2V5ID09IFwic3Ryb2tlQm90dG9tXCIpIHtcbiAgICBsZXQgdmFsdWVzID0gY29uZmlnLnN0cm9rZUJvdHRvbS5zcGxpdChcIixcIik7XG4gICAgXG4gICAgaWYodmFsdWVzLmxlbmd0aCA9PSAyKVxuICAgICAgY29uZmlnLnN0eWxlLmJvcmRlckJvdHRvbSA9IHZhbHVlc1swXSArIFwicHggc29saWQgXCIgKyB2YWx1ZXNbMV07XG4gICAgZWxzZSBpZih2YWx1ZXMubGVuZ3RoID09IDMpXG4gICAgICBjb25maWcuc3R5bGUuYm9yZGVyQm90dG9tID0gdmFsdWVzWzBdICsgXCJweCBcIiArIHZhbHVlc1sxXSArIFwiIFwiICsgdmFsdWVzWzJdO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInN0cm9rZUxlZnRcIikge1xuICAgIGxldCB2YWx1ZXMgPSBjb25maWcuc3Ryb2tlTGVmdC5zcGxpdChcIixcIik7XG4gICAgXG4gICAgaWYodmFsdWVzLmxlbmd0aCA9PSAyKVxuICAgICAgY29uZmlnLnN0eWxlLmJvcmRlckxlZnQgPSB2YWx1ZXNbMF0gKyBcInB4IHNvbGlkIFwiICsgdmFsdWVzWzFdO1xuICAgIGVsc2UgaWYodmFsdWVzLmxlbmd0aCA9PSAzKVxuICAgICAgY29uZmlnLnN0eWxlLmJvcmRlckxlZnQgPSB2YWx1ZXNbMF0gKyBcInB4IFwiICsgdmFsdWVzWzFdICsgXCIgXCIgKyB2YWx1ZXNbMl07XG4gIH1cblxuICBpZiAoa2V5ID09IFwidHJhbnNsYXRpb25ZXCIpIHtcbiAgICBjb25maWcuc3R5bGUudHJhbnNmb3JtICs9IFwidHJhbnNsYXRlWShcIiArIGNvbmZpZ1trZXldICsgXCJweCkgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwiYV90cmFuc2xhdGlvbllcIikge1xuICAgIGNvbmZpZy5hbmltYXRpb24udHJhbnNmb3JtICs9IFwidHJhbnNsYXRlWShcIiArIGNvbmZpZ1trZXldICsgXCJweCkgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwidHJhbnNsYXRpb25YXCIpIHtcbiAgICBjb25maWcuc3R5bGUudHJhbnNmb3JtICs9IFwidHJhbnNsYXRlWChcIiArIGNvbmZpZ1trZXldICsgXCJweCkgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwiYV90cmFuc2xhdGlvblhcIikge1xuICAgIGNvbmZpZy5hbmltYXRpb24udHJhbnNmb3JtICs9IFwidHJhbnNsYXRlWChcIiArIGNvbmZpZ1trZXldICsgXCJweCkgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwic2NhbGVYXCIpIHtcbiAgICBjb25maWcuc3R5bGUudHJhbnNmb3JtICs9IFwic2NhbGVYKFwiICsgY29uZmlnW2tleV0gKyBcIikgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwiYV9zY2FsZVhcIikge1xuICAgIGNvbmZpZy5hbmltYXRpb24udHJhbnNmb3JtICs9IFwic2NhbGVYKFwiICsgY29uZmlnW2tleV0gKyBcIikgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwic2NhbGVZXCIpIHtcbiAgICBjb25maWcuc3R5bGUudHJhbnNmb3JtICs9IFwic2NhbGVZKFwiICsgY29uZmlnW2tleV0gKyBcIikgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwiYV9zY2FsZVlcIikge1xuICAgIGNvbmZpZy5hbmltYXRpb24udHJhbnNmb3JtICs9IFwic2NhbGVZKFwiICsgY29uZmlnW2tleV0gKyBcIikgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwicm90YXRpb25cIikge1xuICAgIGNvbmZpZy5zdHlsZS50cmFuc2Zvcm0gKz0gXCJyb3RhdGUoXCIgKyBjb25maWdba2V5XSArIFwiZGVnKSBcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJhX3JvdGF0aW9uXCIpIHtcbiAgICBjb25maWcuYW5pbWF0aW9uLnRyYW5zZm9ybSArPSBcInJvdGF0ZShcIiArIGNvbmZpZ1trZXldICsgXCJkZWcpIFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInJvdGF0aW9uWFwiKSB7XG4gICAgY29uZmlnLnN0eWxlLnRyYW5zZm9ybSArPSBcInJvdGF0ZVgoXCIgKyBjb25maWdba2V5XSArIFwiZGVnKSBcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJhX3JvdGF0aW9uWFwiKSB7XG4gICAgY29uZmlnLmFuaW1hdGlvbi50cmFuc2Zvcm0gKz0gXCJyb3RhdGVYKFwiICsgY29uZmlnW2tleV0gKyBcImRlZykgXCI7XG4gIH1cblxuICBpZiAoa2V5ID09IFwicm90YXRpb25ZXCIpIHtcbiAgICBjb25maWcuc3R5bGUudHJhbnNmb3JtICs9IFwicm90YXRlWShcIiArIGNvbmZpZ1trZXldICsgXCJkZWcpIFwiO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImFfcm90YXRpb25ZXCIpIHtcbiAgICBjb25maWcuYW5pbWF0aW9uLnRyYW5zZm9ybSArPSBcInJvdGF0ZVkoXCIgKyBjb25maWdba2V5XSArIFwiZGVnKSBcIjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJ0cmFuc2xhdGlvblpcIikge1xuICAgIHZhciB2ID0gY29uZmlnW2tleV07XG4gICAgY29uZmlnLnN0eWxlW1wiLXdlYmtpdC1ib3gtc2hhZG93XCJdID0gXCIwIDAgXCIrdi50b1N0cmluZygpK1wicHggcmdiYSgwLDAsMCwgLjEpXCI7XG4gICAgY29uZmlnLnN0eWxlW1wiLW1vei1ib3gtc2hhZG93XCJdPSBcIjAgMCBcIit2LnRvU3RyaW5nKCkrXCJweCByZ2JhKDAsMCwwLCAuMSlcIjtcbiAgICBjb25maWcuc3R5bGVbXCJib3gtc2hhZG93XCJdPSAgXCIwIDAgXCIrdi50b1N0cmluZygpK1wicHggcmdiYSgwLDAsMCwgLjEpXCI7XG4gICAgXG4gIH1cblxuICBpZiAoa2V5ID09IFwiYV9kdXJhdGlvblwiICYmICFpc05hTihjb25maWdba2V5XSkpIHtcbiAgICBjb25zdCBzdWZmaXggPSBjb25maWcudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uID8gKFwiIFwiICsgY29uZmlnLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbikgOiBcIlwiO1xuICAgIGNvbmZpZy5hbmltYXRpb24udHJhbnNpdGlvbiA9IGNvbmZpZ1trZXldICsgJ21zIGFsbCcgKyBzdWZmaXg7XG4gIH1cbiAgXG4gIGlmICh0eXBlID09IFwidGV4dFZpZXdcIiAmJiBrZXkgPT0gXCJncmF2aXR5XCIgJiYgY29uZmlnLmdyYXZpdHkpIHtcbiAgICBjb25maWcuc3R5bGUudGV4dEFsaWduID0gY29uZmlnLmdyYXZpdHk7XG4gICAgaWYgKGNvbmZpZy5ncmF2aXR5ID09IFwiY2VudGVyX3ZlcnRpY2FsXCIpIHtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFsaWduLWl0ZW1zXCJdID0gXCJjZW50ZXJcIjtcbiAgICAgIGNvbmZpZy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfSBlbHNlIGlmIChjb25maWcuZ3Jhdml0eSA9PSBcImNlbnRlcl9ob3Jpem9udGFsXCIpIHtcbiAgICAgIGNvbmZpZy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICBjb25maWcuc3R5bGVbXCJqdXN0aWZ5LWNvbnRlbnRcIl0gPSBcImNlbnRlclwiO1xuICAgIH0gZWxzZSBpZiAoY29uZmlnLmdyYXZpdHkgPT0gXCJjZW50ZXJcIikge1xuICAgICAgY29uZmlnLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFsaWduLWl0ZW1zXCJdID0gXCJjZW50ZXJcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImp1c3RpZnktY29udGVudFwiXSA9IFwiY2VudGVyXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbmZpZy5ncmF2aXR5ID09IFwiY2VudGVyXCIpe1xuICAgICAgY29uZmlnLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImFsaWduLWl0ZW1zXCJdID0gXCJjZW50ZXJcIjtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImp1c3RpZnktY29udGVudFwiXSA9IFwiY2VudGVyXCI7XG4gICAgfVxuICB9XG4gIGlmICh0eXBlID09IFwibGluZWFyTGF5b3V0XCIgJiYga2V5ID09IFwiZ3Jhdml0eVwiICYmIGNvbmZpZy5ncmF2aXR5KXtcbiAgICBpZiAoY29uZmlnLm1hcmdpbiAmJiBjb25maWcuZ3Jhdml0eT09XCJjZW50ZXJfdmVydGljYWxcIil7XG4gICAgICB2YXIgbWFyZ2luPWNvbmZpZy5tYXJnaW4uc3BsaXQoXCIsXCIpO1xuICAgICAgaWYgKGNvbmZpZy53aWR0aCA9PSBcIm1hdGNoX3BhcmVudFwiKXtcbiAgICAgICAgIGNvbmZpZy5zdHlsZS53aWR0aD1cImNhbGMoMTAwJSAtIFwiKyhwYXJzZUludChtYXJnaW5bMF0pK3BhcnNlSW50KG1hcmdpblsyXSkpLnRvU3RyaW5nKCkrXCJweCApXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGtleSA9PSBcImhpbnRcIil7XG4gICAgY29uZmlnLmF0dHJpYnV0ZXMucGxhY2Vob2xkZXIgPSBjb25maWcuaGludDtcbiAgfVxuXG4gIGlmIChrZXkgPT0gXCJjb250ZW50RWRpdGFibGVcIiAmJiBjb25maWcuY29udGVudEVkaXRhYmxlKXtcbiAgICBjb25maWcuYXR0cmlidXRlcy5jb250ZW50ZWRpdGFibGUgPSB0cnVlO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcImlkXCIpIHtcbiAgICBjb25maWcuYXR0cmlidXRlcy5pZCA9IGNvbmZpZy5pZDtcbiAgfVxuXG5cbiAgaWYgKGtleSA9PSBcImdyYWRpZW50XCIpIHtcbiAgICB2YXIgZ3JhZGllbnRPYmogPUpTT04ucGFyc2UoY29uZmlnLmdyYWRpZW50KTtcbiAgICBpZiAoZ3JhZGllbnRPYmoudHlwZSA9PSBcImxpbmVhclwiKSB7XG4gICAgICB2YXIgYW5nbGUgPSBncmFkaWVudE9iai5hbmdsZTtcbiAgICAgIHZhciB2YWx1ZXMgPSBncmFkaWVudE9iai52YWx1ZXM7XG4gICAgICB2YXIgY29sb3JzID0gdmFsdWVzLmpvaW4oXCIsIFwiKTtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImJhY2tncm91bmQtaW1hZ2VcIl0gPSBcImxpbmVhci1ncmFkaWVudChcIithbmdsZStcImRlZywgXCIrY29sb3JzK1wiKVwiXG4gICAgfVxuICAgICBlbHNlIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBncmFkaWVudE9iai52YWx1ZXM7XG4gICAgICB2YXIgY29sb3JzID0gdmFsdWVzLmpvaW4oXCIsIFwiKTtcbiAgICAgIGNvbmZpZy5zdHlsZVtcImJhY2tncm91bmQtaW1hZ2VcIl0gPSBcInJhZGlhbC1ncmFkaWVudChcIitjb2xvcnMrXCIpXCJcbiAgICAgfVxuICB9XG5cblxuICBpZiAoa2V5ID09IFwiaW5wdXRUeXBlXCIpIHtcbiAgICB2YXIgaW5wdXRUeXBlID0gXCJ0ZXh0XCI7XG4gICAgaWYgKGNvbmZpZy5pbnB1dFR5cGUgPT0gXCJudW1lcmljUGFzc3dvcmRcIiB8fCBjb25maWcuaW5wdXRUeXBlID09IFwicGFzc3dvcmRcIikge1xuICAgICAgaWYoY29uZmlnLmlucHV0VHlwZUkgPT0gNCAmJiBpc01vYmlsZSl7XG4gICAgICAgIGlucHV0VHlwZSA9IFwidGV4dFwiO1xuICAgICAgICBjb25maWcuc3R5bGVbXCItd2Via2l0LXRleHQtc2VjdXJpdHlcIl0gPSBcImRpc2NcIjtcbiAgICAgICAgY29uZmlnLnN0eWxlW1wiLW1vei10ZXh0LXNlY3VyaXR5XCJdID0gXCJkaXNjXCI7XG4gICAgICAgIGNvbmZpZy5zdHlsZVtcInRleHQtc2VjdXJpdHlcIl0gPSBcImRpc2NcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0VHlwZSA9IFwicGFzc3dvcmRcIlxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29uZmlnLmlucHV0VHlwZSA9PSBcImRpc2FibGVkXCIpIHtcbiAgICAgICAgY29uZmlnLmF0dHJpYnV0ZXMuZGlzYWJsZWQgPSAnZGlzYWJsZWQnXG4gICAgfSBlbHNlIGlmIChjb25maWcuaW5wdXRUeXBlID09IFwibnVtZXJpY1wiKSB7XG4gICAgICAgIGlucHV0VHlwZSA9IFwibnVtYmVyXCJcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5zZXBhcmF0b3IpIHtcbiAgICAgIGlucHV0VHlwZSA9IFwidGV4dFwiXG4gICAgfVxuXG4gICAgY29uZmlnLmF0dHJpYnV0ZXMudHlwZSA9IGlucHV0VHlwZVxuICB9XG5cbiAgaWYgKGtleSA9PSBcInJvdGF0ZUltYWdlXCIpIHtcbiAgICBpZihjb25maWcucm90YXRlSW1hZ2Upe1xuICAgICAgY29uZmlnLnN0eWxlW1wiYW5pbWF0aW9uLWR1cmF0aW9uXCJdID0gXCI0c1wiO1xuICAgICAgY29uZmlnLnN0eWxlW1wiYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvblwiXSA9IFwibGluZWFyXCI7XG4gICAgICBjb25maWcuc3R5bGVbXCJhbmltYXRpb24tZGVsYXlcIl0gPSBcIjBzXCI7XG4gICAgICBjb25maWcuc3R5bGVbXCJhbmltYXRpb24taXRlcmF0aW9uLWNvdW50XCJdID0gXCJpbmZpbml0ZVwiO1xuICAgICAgY29uZmlnLnN0eWxlW1wiYW5pbWF0aW9uLWRpcmVjdGlvblwiXSA9IFwibm9ybWFsXCI7XG4gICAgICBjb25maWcuc3R5bGVbXCJhbmltYXRpb24tZmlsbC1tb2RlXCJdID0gXCJub25lXCI7XG4gICAgICBjb25maWcuc3R5bGVbXCJhbmltYXRpb24tcGxheS1zdGF0ZVwiXSA9IFwicnVubmluZ1wiO1xuICAgICAgY29uZmlnLnN0eWxlW1wiYW5pbWF0aW9uLW5hbWVcIl0gPSBcInJvdGF0aW9uXCI7XG5cbiAgICB9XG4gIH1cblxuICBpZiAoa2V5ID09IFwicGF0dGVyblwiKSB7XG4gICAgY29uZmlnLmF0dHJpYnV0ZXNbXCJkYXRhLXBhdHRlcm5cIl0gPSBjb25maWcucGF0dGVybjtcbiAgfVxuICBpZihrZXkgPT0gXCJpbnB1dFR5cGVJXCIpe1xuICAgIGlmKGNvbmZpZy5pbnB1dFR5cGVJID09IDQpe1xuICAgICAgY29uZmlnLmF0dHJpYnV0ZXNbXCJpbnB1dG1vZGVcIl0gPSBcIm51bWVyaWNcIjtcbiAgICB9XG4gICAgXG4gIH1cblxuICBpZiAoa2V5ID09IFwic2VwYXJhdG9yXCIpIHtcbiAgICBjb25maWcuYXR0cmlidXRlc1tcInNlcGFyYXRvclwiXSA9IGNvbmZpZy5zZXBhcmF0b3I7XG4gIH1cbiAgaWYgKGtleSA9PSBcInNlcGFyYXRvclJlcGVhdFwiKSB7XG4gICAgY29uZmlnLmF0dHJpYnV0ZXNbXCJzZXBhcmF0b3JSZXBlYXRcIl0gPSBjb25maWcuc2VwYXJhdG9yUmVwZWF0O1xuICB9XG5cbiAgaWYgKGtleSA9PSBcIm15QXR0clwiKSB7XG4gICAgY29uZmlnLmF0dHJpYnV0ZXNbXCJteUF0dHJcIl0gPSBjb25maWcubXlBdHRyO1xuICB9XG5cbiAgaWYgKGtleSA9PSBcInNoYWRvd1wiKSB7XG4gICAgdmFyIHNoYWRvd1ZhbHVlcyA9IGNvbmZpZy5zaGFkb3cuc3BsaXQoY29uZmlnLnNoYWRvd1NlcGFyYXRvciB8fCAnLCcpO1xuICAgIHZhciBzaGFkb3dCbHVyID0gcldTKGNTKHNoYWRvd1ZhbHVlc1syXSkpO1xuICAgIHZhciBzaGFkb3dTcHJlYWQgPSByV1MoY1Moc2hhZG93VmFsdWVzWzNdKSk7XG4gICAgdmFyIHNoYWRvd09wYWNpdHkgPSByV1MoY1Moc2hhZG93VmFsdWVzWzVdKSk7XG4gICAgdmFyIHNoYWRvd09mZnNldCA9IHtcbiAgICAgICAgeDogcldTKGNTKHNoYWRvd1ZhbHVlc1swXSkpLFxuICAgICAgICB5OiByV1MoY1Moc2hhZG93VmFsdWVzWzFdKSlcbiAgICAgIH07XG5cbiAgICB2YXIgc2hhZG93Q29sb3IgPSBjb252ZXJ0Q29sb3JUb1JnYmEoc2hhZG93VmFsdWVzWzRdKTtcbiAgICB2YXIgc2hhZG93VHlwZSA9IGNvbmZpZy5zaGFkb3dUeXBlID8gYCR7Y29uZmlnLnNoYWRvd1R5cGV9IGAgOiAnJ1xuXG4gICAgY29uZmlnW1wic3R5bGVcIl1bXCJib3gtc2hhZG93XCJdID0gc2hhZG93VHlwZSArIHBhcnNlSW50KHNoYWRvd09mZnNldC54KSArIFwicHggXCIgKyBwYXJzZUludChzaGFkb3dPZmZzZXQueSkgKyBcInB4IFwiICsgcGFyc2VJbnQoc2hhZG93Qmx1cikgKyBcInB4IFwiICsgcGFyc2VJbnQoc2hhZG93U3ByZWFkKSArIFwicHggcmdiYShcIiArIHNoYWRvd0NvbG9yLnIgKyBcIiwgXCIgKyAgc2hhZG93Q29sb3IuZyArIFwiLCBcIiArICBzaGFkb3dDb2xvci5iICsgXCIsIFwiICsgIHNoYWRvd0NvbG9yLmEgKyBcIilcIiA7XG4gIH1cblxuICBpZiAoa2V5ID09IFwibGluZUhlaWdodFwiKVxuICAgIGNvbmZpZy5zdHlsZS5saW5lSGVpZ2h0ID0gY29uZmlnLmxpbmVIZWlnaHQ7XG5cbiAgaWYgKGtleSA9PSBcIm9iamVjdEZpdFwiKVxuICAgIGNvbmZpZy5zdHlsZS5vYmplY3RGaXQgPSBjb25maWcub2JqZWN0Rml0O1xuXG4gIGlmIChrZXkgPT0gXCJjbGlja2FibGVcIikge1xuICAgIGNvbmZpZy5zdHlsZS5wb2ludGVyRXZlbnRzID0gY29uZmlnLmNsaWNrYWJsZSA/IFwiYXV0b1wiIDogXCJub25lXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29udmVydENvbG9yVG9SZ2JhKGNvbG9yKSB7XG4gIGNvbG9yID0gcldTKGNTKGNvbG9yKSk7XG5cbiAgdmFyIHZhbHVlcztcbiAgdmFyIGFscGhhID0gXCIxLjAwXCI7XG5cbiAgaWYgKGNvbG9yLmxlbmd0aCA+PSA4KSB7XG4gICAgYWxwaGEgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMSwgMyksIDE2KTtcbiAgICBhbHBoYSA9IChhbHBoYSAvIDI1NSkudG9GaXhlZCgyKTtcbiAgICBjb2xvciA9IGNvbG9yLnN1YnN0cmluZygzLCA5KTtcbiAgfSBlbHNlIHtcbiAgICBjb2xvciA9IGNvbG9yLnN1YnN0cmluZygxLCBjb2xvci5sZW5ndGgpO1xuICB9XG5cbiAgY29sb3IgPSBjb252ZXJ0SGV4VG9SZ2IocldTKGNvbG9yKSk7XG4gIHZhbHVlcyA9IGNvbG9yLnNwbGl0KCcsJyk7XG5cbiAgcmV0dXJuIHtcbiAgICByOiBwYXJzZUludChyV1ModmFsdWVzWzBdKSksXG4gICAgZzogcGFyc2VJbnQocldTKHZhbHVlc1sxXSkpLFxuICAgIGI6IHBhcnNlSW50KHJXUyh2YWx1ZXNbMl0pKSxcbiAgICBhOiBwYXJzZUZsb2F0KGFscGhhKVxuICB9O1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0SGV4VG9SZ2IoaGV4KSB7XG4gIHZhciByID0gKHBhcnNlSW50KGhleC5zdWJzdHJpbmcoMCwgMiksIDE2KSkudG9GaXhlZCgyKTtcbiAgdmFyIGcgPSAocGFyc2VJbnQoaGV4LnN1YnN0cmluZygyLCA0KSwgMTYpKS50b0ZpeGVkKDIpO1xuICB2YXIgYiA9IChwYXJzZUludChoZXguc3Vic3RyaW5nKDQsIDYpLCAxNikpLnRvRml4ZWQoMik7XG5cbiAgcmV0dXJuIHIgKyBcIixcIiArIGcgKyBcIixcIiArIGI7XG59XG5cbmZ1bmN0aW9uIGNTKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHZhbHVlICsgJycgOiBcIlwiO1xufVxuXG5mdW5jdGlvbiByV1ModmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLyAvZywgJycpO1xufVxuXG5mdW5jdGlvbiBzZXREZWZhdWx0cyh0eXBlLCBjb25maWcpIHtcbiAgaWYgKHR5cGUgPT0gXCJsaW5lYXJMYXlvdXRcIikge1xuICAgIGNvbmZpZy5vcmllbnRhdGlvbiA9IGNvbmZpZy5vcmllbnRhdGlvbjtcbiAgfVxufVxuZnVuY3Rpb24gdGhpc19pbmxpbmVBbmltYXRpb24oY29uZmlnKSB7XG4gIHZhciBjb249bW9kaWZ5VHJhbnNsYXRpb24oY29uZmlnKTtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb24ubmFtZSk7XG59XG5mdW5jdGlvbiBtb2RpZnlUcmFuc2xhdGlvbihjb25maWcpe1xuICB2YXIgeCA9IGNvbmZpZy54IHx8IFwiMFwiO1xuICB2YXIgeSA9IGNvbmZpZy55IHx8IFwiMFwiO1xuICB2YXIgYW5pbWF0aW9uQXJyYXkgPSBKU09OLnBhcnNlKGNvbmZpZy5pbmxpbmVBbmltYXRpb24pO1xuICB2YXIgYW5pbWF0aW9uQXJyYXkgPSBhbmltYXRpb25BcnJheS5tYXAoZnVuY3Rpb24oYSl7XG4gICAgaWYoYS5oYXNPd25Qcm9wZXJ0eShcImZyb21YXCIpKXtcbiAgICAgIGEuZnJvbVggPSBwYXJzZUludChhLmZyb21YKSArIHBhcnNlSW50KHgpICsgJyc7XG4gICAgICBpZighYS5oYXNPd25Qcm9wZXJ0eShcInRvWFwiKSl7XG4gICAgICAgIGEudG9YID0gMCArIHBhcnNlSW50KHgpICsgJyc7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKGEuaGFzT3duUHJvcGVydHkoXCJ0b1hcIikpe1xuICAgICAgYS50b1ggPSBwYXJzZUludChhLnRvWCkgKyBwYXJzZUludCh4KSArICcnO1xuICAgIH1cbiAgICBpZihhLmhhc093blByb3BlcnR5KFwiZnJvbVlcIikpe1xuICAgICAgYS5mcm9tWSA9IHBhcnNlSW50KGEuZnJvbVkpICsgcGFyc2VJbnQoeSkgKyAnJztcbiAgICAgIGlmKCFhLmhhc093blByb3BlcnR5KFwidG9ZXCIpKXtcbiAgICAgICAgYS50b1kgPSAwICsgcGFyc2VJbnQoeSkgKyAnJztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoYS5oYXNPd25Qcm9wZXJ0eShcInRvWVwiKSl7XG4gICAgICBhLnRvWSA9IHBhcnNlSW50KGEudG9ZKSArIHBhcnNlSW50KHkpICsgJyc7XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9KVxuICByZXR1cm4gKGFuaW1hdGlvbkFycmF5KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHR5cGUsIGNvbmZpZywgZ2V0U2V0VHlwZSkge1xuICBjb25maWcgPSBmbGF0dGVuT2JqZWN0KGNvbmZpZyk7XG4gIHNldERlZmF1bHRzKHR5cGUsIGNvbmZpZyk7XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhjb25maWcpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGlmICgoY29uZmlnLnN0eWxlICYmIGNvbmZpZy5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpICYmIGtleXNbaV0gPT09ICdncmF2aXR5JykgIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBwYXJzZUxheW91dFByb3BzKHR5cGUsIGNvbmZpZywga2V5c1tpXSk7XG4gIH1cblxuICBjb25maWcudHJhbnNpdGlvbiA9IFtcbiAgICBTdHJpbmcoY29uZmlnLmFfZHVyYXRpb24gfHwgMCkgK1wibXNcIixcbiAgICBcImFsbFwiLFxuICAgIGNvbmZpZy50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25cbiAgXVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAuam9pbihcIiBcIik7XG5cbiAgaWYgKGNvbmZpZy5zdHlsZS50cmFuc2Zvcm0gPT0gXCJcIikge1xuICAgIGRlbGV0ZSBjb25maWcuc3R5bGUudHJhbnNmb3JtO1xuICB9XG4gIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJpbmxpbmVBbmltYXRpb25cIikpIHtcbiAgICB0aGlzX2lubGluZUFuaW1hdGlvbihjb25maWcpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZztcbn0iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgXCJKVVNQQVkgVGVjaG5vbG9naWVzXCJcbiAqIEpVU1BBWSBUZWNobm9sb2dpZXMgUHZ0LiBMdGQuIFtodHRwczovL3d3dy5qdXNwYXkuaW5dXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgSlVTUEFZIFBsYXRmb3JtLlxuICpcbiAqIEpVU1BBWSBQbGF0Zm9ybSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCBmb3Igb25seSBlZHVjYXRpb25hbCBwdXJwb3NlcyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbFxuICogUHVibGljIExpY2Vuc2UgKEdOVSBBR1BMKSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbixcbiAqIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKiBGb3IgRW50ZXJwcmlzZS9Db21tZXJpY2FsIGxpY2Vuc2VzLCBjb250YWN0IDxpbmZvQGp1c3BheS5pbj4uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgVGhlIGVuZCB1c2VyIHdpbGxcbiAqIGJlIGxpYWJsZSBmb3IgYWxsIGRhbWFnZXMgd2l0aG91dCBsaW1pdGF0aW9uLCB3aGljaCBpcyBjYXVzZWQgYnkgdGhlXG4gKiBBQlVTRSBvZiB0aGUgTElDRU5TRUQgU09GVFdBUkUgYW5kIHNoYWxsIElOREVNTklGWSBKVVNQQVkgZm9yIHN1Y2hcbiAqIGRhbWFnZXMsIGNsYWltcywgY29zdCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXkgZmVlIGNsYWltZWQgb24gSnVzcGF5LlxuICogVGhlIGVuZCB1c2VyIGhhcyBOTyByaWdodCB0byBjbGFpbSBhbnkgaW5kZW1uaWZpY2F0aW9uIGJhc2VkIG9uIGl0cyB1c2VcbiAqIG9mIExpY2Vuc2VkIFNvZnR3YXJlLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2FncGwuaHRtbD4uXG4gKi9cblxuLypcbiBVc2VkIHRvIGluaXRpYWxpemUgZGVmYXVsdHMgZm9yIHdpbmRvdyBmdW5jaW9ucyBhbmQgdmFyaWFibGVzLlxuKi9cbmNvbnN0IHsgbWVyZ2UgfSA9IHJlcXVpcmUoJy4vaGVscGVyJyk7XG53aW5kb3cuUHJlc3RvVUkgPSByZXF1aXJlKFwiLi9QcmVzdG9VSUludGVyZmFjZVwiKTtcblxuY29uc3QgZ2V0Q3VyclRpbWUgPSAoKSA9PiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXG5cbi8vIHdpbmRvdy5fX09TID0gZ2V0T1MoKVxuaWYod2luZG93Ll9fT1MgPT0gXCJBTkRST0lEXCIpe1xuICAgIHZhciBnZXRTY3JlZW5EZXRhaWxzID0gZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGRldGFpbHMgPSBKU09OLnBhcnNlKEFuZHJvaWQuZ2V0U2NyZWVuRGltZW5zaW9ucygpKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmVlbl93aWR0aDogZGV0YWlscy53aWR0aCArIFwiXCIsXG4gICAgICAgICAgICBzY3JlZW5faGVpZ2h0OiBkZXRhaWxzLmhlaWdodCArIFwiXCJcbiAgICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIFwiZXJyb3IgaW4gZ2V0dHRpbmcgc2NyZWVuIGRpbWVuc2lvbnMsIHNldHRpbmcgZGVmYXVsdCB2YWx1ZXNcIiwgZXJyKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2NyZWVuX3dpZHRoOiBcIjEwODBcIixcbiAgICAgICAgICAgICAgICBzY3JlZW5faGVpZ2h0OiBcIjE5MjBcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgd2luZG93Ll9fREVWSUNFX0RFVEFJTFMgPSBnZXRTY3JlZW5EZXRhaWxzKCk7XG59XG5cbmlmICh3aW5kb3cuX19PUyA9PSBcIldFQlwiKSB7XG4gICAgd2luZG93LkFuZHJvaWQgPSByZXF1aXJlKFwiLi9XRUIvQW5kcm9pZEludGVyZmFjZVwiKVxuICAgIHdpbmRvdy5KQnJpZGdlID0gcmVxdWlyZShcIi4vV0VCL0pCcmlkZ2VJbnRlcmZhY2VcIilcbn0gZWxzZSBpZiAod2luZG93Ll9fT1MgPT0gXCJJT1NcIikge1xuICAgIHdpbmRvdy5BbmRyb2lkID0gcmVxdWlyZShcIi4vSU9TL0FuZHJvaWRJbnRlcmZhY2VcIilcbiAgICB3aW5kb3cuSkJyaWRnZSA9IG1lcmdlKHdpbmRvdy5KQnJpZGdlLCB7fSlcbn1cblxuaWYgKHdpbmRvdy5fX0RFVklDRV9ERVRBSUxTICYmIHdpbmRvdy5fX0RFVklDRV9ERVRBSUxTLmhhc093blByb3BlcnR5KFwic2NyZWVuX3dpZHRoXCIpKSB7XG4gICAgd2luZG93Ll9fV0lEVEggPSB3aW5kb3cuX19ERVZJQ0VfREVUQUlMUy5zY3JlZW5fd2lkdGg7XG59IGVsc2Uge1xuICAgIHdpbmRvdy5fX1dJRFRIID0gXCIxMDgwXCI7XG59XG5cbmlmICh3aW5kb3cuX19ERVZJQ0VfREVUQUlMUyAmJiB3aW5kb3cuX19ERVZJQ0VfREVUQUlMUy5oYXNPd25Qcm9wZXJ0eShcInNjcmVlbl9oZWlnaHRcIikpIHtcbiAgICB3aW5kb3cuX19IRUlHSFQgPSB3aW5kb3cuX19ERVZJQ0VfREVUQUlMUy5zY3JlZW5faGVpZ2h0O1xufSBlbHNlIHtcbiAgICB3aW5kb3cuX19IRUlHSFQgPSBcIjE5MjBcIjtcbn1cblxuY29uc3QgZ3VpZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KVxuXG4vL0ludGlhbGl6aW5nIGRlZmF1bHRzXG5pZiAod2luZG93Ll9fT1MgPT0gXCJXRUJcIikge1xuICAgIC8qIENvbXBvbmVudHMgKi9cbiAgICB3aW5kb3cuX19DT01fRVZFTlQgPSBmYWxzZVxuICAgIHdpbmRvdy5fX0NPTV9SRU5ERVJFRCA9IHtcbiAgICAgICAgU1dJVENIX0dMT0JBTDogZmFsc2UsXG4gICAgICAgIERSUDoge30sXG4gICAgICAgIERTQjoge30sXG4gICAgICAgIERCOiB7fSxcbiAgICAgICAgTkFWQkFSOiB7fVxuICAgIH1cblxuICAgIHdpbmRvdy5fX0NPTV9DTEFTU19HUk9VUCA9IHtcbiAgICAgICAgV1JBUFBFUjogJ1BEQ19jb21fd3JhcHBlcicsXG4gICAgICAgIE5BVkJBUjogJ1BEQ19jb21fbmF2YmFyJyxcbiAgICAgICAgTkFWQkFSX0lURU06ICdQRENfY29tX25hdmJhcl9pdGVtJyxcbiAgICAgICAgTkFWQkFSX0lURU1fV0lUSF9TVUI6ICdQRENfY29tX25hdmJhcl9oYXNfc3ViJyxcbiAgICAgICAgTkFWQkFSX1NVQjogJ1BEQ19jb21fbmF2YmFyX3N1YicsXG4gICAgICAgIE5BVkJBUl9TVUJfUklHSFQ6ICdQRENfY29tX25hdmJhcl9zdWJfcmlnaHQnLFxuICAgICAgICBOQVZCQVJfU1VCX0lURU06ICdQRENfY29tX25hdmJhcl9zdWJpdGVtJyxcbiAgICAgICAgRFJQOiAnUERDX2NvbV9kcnAnLFxuICAgICAgICBEUlBfQk9EWTogJ1BEQ19jb21fZHJwX2JvZHknLFxuICAgICAgICBEQjogJ1BEQ19jb21fZGInLFxuICAgICAgICBEQl9GVUxMX0JPRFk6ICdQRENfY29tX2RiX2Z1bGxfYm9keScsXG4gICAgICAgIERCX0JPRFk6ICdQRENfY29tX2RiX2JvZHknLFxuICAgICAgICBEQl9PUFRJT05TOiAnUERDX2NvbV9kYl9vcHRpb25zJyxcbiAgICAgICAgREJfT1BUSU9OOiAnUERDX2NvbV9kYl9vcHRpb24nLFxuICAgICAgICBEU0I6ICdQRENfY29tX2RzYicsXG4gICAgICAgIERTQl9GVUxMX0JPRFk6ICdQRENfY29tX2RzYl9mdWxsX2JvZHknLFxuICAgICAgICBEU0JfQk9EWTogJ1BEQ19jb21fZHNiX2JvZHknLFxuICAgICAgICBEU0JfT1BUSU9OUzogJ1BEQ19jb21fZHNiX29wdGlvbnMnLFxuICAgICAgICBEU0JfT1BUSU9OOiAnUERDX2NvbV9kc2Jfb3B0aW9uJyxcbiAgICAgICAgRFNCX1NFQVJDSF9XUkFQOiAnUERDX2NvbV9kc2Jfc2VhcmNoX3dyYXAnLFxuICAgICAgICBEU0JfU0VBUkNIOiAnUERDX2NvbV9kc2Jfc2VhcmNoJyxcbiAgICAgICAgU1dJVENIOiAnUERDX2NvbV9zd2l0Y2gnLFxuICAgICAgICBTV0lUQ0hfQk9EWTogJ1BEQ19jb21fc3dpdGNoX2JvZHknLFxuICAgICAgICBTV0lUQ0hfU0xJREVSOiAnUERDX2NvbV9zd2l0Y2hfc2xpZGVyJyxcbiAgICAgICAgQlQ6ICdQRENfY29tX2J0JyxcbiAgICAgICAgQlRfRElTQUJMRUQ6ICdQRENfY29tX2J0X2Rpc2FibGVkJ1xuICAgIH1cbiAgICB3aW5kb3cuX19DT01fQ09MT1JfR1JPVVAgPSB7XG4gICAgICAgIEJHOiAnI2ZmZmZmZicsXG4gICAgICAgIEFDVElWRV9CRzogJyNFRUYxRjgnLFxuICAgICAgICBBQ1RJVkVfQ09MT1I6ICdyZ2IoNTMsIDY0LCA4MiknLFxuICAgICAgICBJTkFDVElWRV9DT0xPUjogJ3JnYmEoNTMsIDY0LCA4MiwgMC41KScsXG4gICAgICAgIEJPUkRFUl9DT0xPUjogJyNBM0FGQzInLFxuICAgICAgICBBQ1RJVkVfQk9SREVSX0NPTE9SOiAnIzcwNzg4NicsXG4gICAgICAgIFNFQVJDSF9DT0xPUjogJyNkZGRkZGQnLFxuICAgICAgICBJTkFDVElWRV9TV0lUQ0g6ICcjQjdEQkJDJyxcbiAgICAgICAgQUNUSVZFX1NXSVRDSDogJyMzNkFGNDcnLFxuICAgICAgICBCVF9CT1JERVJfQ09MT1I6ICcjMTU4NUQ4JyxcbiAgICAgICAgQlRfQkdfQ09MT1I6ICcjMTk5MUVCJyxcbiAgICAgICAgQlRfQ09MT1I6ICcjZmZmZmZmJ1xuICAgIH1cbiAgICB3aW5kb3cuX19DT01fQUNUSVZFID0ge1xuICAgICAgICBEU0I6ICcnLFxuICAgICAgICBOQVZCQVI6ICcnLFxuICAgICAgICBEQjogJydcbiAgICB9XG4gICAgLyogQ29tcG9uZW50cyBFbmQgKi9cblxuICAgIC8qIE1vZGFsICovXG4gICAgd2luZG93Ll9fU1RZTEVfSUQgPSAnc3R5bGVfJyArIGd1aWRcbiAgICB3aW5kb3cuX19SRU5ERVJFRF9LRVlGUkFNRVMgPSBbXVxuICAgIHdpbmRvdy5fX01PREFMX1BST1BTID0ge31cbiAgICB3aW5kb3cuX19DT05URU5UTU9EQUxfQ0xBU1MgPSAnUERDX21vZGFsJ1xuICAgIHdpbmRvdy5fX09QRU5NT0RBTF9DTEFTUyA9ICdQRENfbW9kYWwtb3BlbidcbiAgICB3aW5kb3cuX19CQUNLRFJPUE1PREFMX0NMQVNTID0gJ1BEQ19tb2RhbC1iYWNrZHJvcCdcbiAgICB3aW5kb3cuX19ESVNBQkxFREJBQ0tEUk9QX0NMQVNTID0gJ1BEQ19tb2RhbC1iYWNrZHJvcC1kaXNhYmxlZCdcbiAgICB3aW5kb3cuX19TSE9XTk1PREFMX0NMQVNTID0gJ1BEQ19tb2RhbC1zaG93bidcbiAgICB3aW5kb3cuX19GQURFTU9EQUxfQ0xBU1MgPSAnUERDX21vZGFsLWZhZGUnXG4gICAgd2luZG93Ll9fU0xJREVNT0RBTF9DTEFTUyA9ICdQRENfbW9kYWwtc2xpZGUnXG4gICAgLyogTW9kYWwgRW5kICovXG5cbiAgICB3aW5kb3cub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHdpbmRvdy5fX0JBQ0tEUk9QTU9EQUxfQ0xBU1MpICYmXG4gICAgICAgICAgICAhZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyh3aW5kb3cuX19ESVNBQkxFREJBQ0tEUk9QX0NMQVNTKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSh3aW5kb3cuX19PUEVOTU9EQUxfQ0xBU1MpO1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUod2luZG93Ll9fU0hPV05NT0RBTF9DTEFTUyk7XG5cbiAgICAgICAgICAgIGxldCBpZCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICAgICAgICAgIGlkID0gaWQucmVwbGFjZSh3aW5kb3cuX19CQUNLRFJPUE1PREFMX0NMQVNTICsgJ18nLCAnJyk7XG5cbiAgICAgICAgICAgIGxldCB2aWV3ID0gX19WSUVXU1tpZF07XG4gICAgICAgICAgICBpZiAodmlldyAmJiB2aWV3LnByb3BzLm9uRGlzbWlzcyAmJiB0eXBlb2Ygdmlldy5wcm9wcy5vbkRpc21pc3MgPT1cbiAgICAgICAgICAgICAgICBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICB2aWV3LnByb3BzLm9uRGlzbWlzcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZHVpU2hvd1NjcmVlbiA9IChjYWxsYmFjaywgc3RhdGUpID0+IHtcbiAgICAgICAgbGV0IHBvcHVwTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwb3B1cE1lbnVcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9wdXBNZW51Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3B1cE1lbnVbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB3aW5kb3cuX19kdWlTaG93U2NyZWVuID0gZHVpU2hvd1NjcmVlbjtcblxufSBlbHNlIGlmICh3aW5kb3cuX19PUyA9PSBcIklPU1wiKSB7XG4gICAgd2luZG93Ll9fQ09MT1JfSU5ERVggPSB3aW5kb3cuX19DT0xPUl9JTkRFWCB8fCAxO1xuICAgIHdpbmRvdy5fX0ZPTlRfSU5ERVggPSB3aW5kb3cuX19GT05UX0lOREVYIHx8IDE7XG4gICAgd2luZG93Ll9fUkVDVF9JTkRFWCA9IHdpbmRvdy5SRUNUX0lOREVYIHx8IDE7XG4gICAgd2luZG93Ll9fVklFV19JTkRFWCA9IHdpbmRvdy5fX1ZJRVdfSU5ERVggfHwgMTtcbiAgICB3aW5kb3cuX19JTUFHRV9JTkRFWCA9IHdpbmRvdy5fX0lNQUdFX0lOREVYIHx8IDE7XG4gICAgd2luZG93Ll9fUE9JTlRfSU5ERVggPSB3aW5kb3cuX19QT0lOVF9JTkRFWCB8fCAxO1xuICAgIHdpbmRvdy5fX0xBWUVSX0lOREVYID0gd2luZG93Ll9fTEFZRVJfSU5ERVggfHwgMTtcbiAgICB3aW5kb3cuX19TSVpFX0lOREVYID0gd2luZG93Ll9fU0laRV9JTkRFWCB8fCAxO1xufSBlbHNlIHtcbiAgICAvL1RoaXMgd291bGQgYmUgY2FzZSBmb3IgYW5kcm9pZFxuICAgIHdpbmRvdy5fX0ZOX01BUCA9IHt9O1xuICAgIHdpbmRvdy5fX0FMTF9PTkNMSUNLUyA9IFtdO1xufVxuXG53aW5kb3cuX19JRCA9IDE7XG53aW5kb3cuX19OT0RFX0lEID0gMTtcbndpbmRvdy5fX1NDUkVFTl9JTkRFWCA9IC0xO1xuXG53aW5kb3cuX19QUk9YWV9GTiA9IHt9O1xud2luZG93Ll9fRk5fSU5ERVggPSAwO1xud2luZG93Ll9fUk9PVFNDUkVFTiA9IG51bGw7XG53aW5kb3cuX19DQUNIRURfU0NSRUVOUyA9IHt9O1xud2luZG93Ll9fU0NSRUVOX0NPVU5UID0gMDtcbndpbmRvdy5fX0NVUlJfU0NSRUVOID0gbnVsbDtcbndpbmRvdy5fX1BSRVZfU0NSRUVOID0gbnVsbDtcbndpbmRvdy5fX0FOSU1BVEVfRElSID0gbnVsbDtcbndpbmRvdy5fX1NDUkVFTl9TVEFDSyA9IFtdO1xud2luZG93Ll9fTEFTVF9GTl9DQUxMRUQgPSBudWxsO1xud2luZG93Ll9fVEhST1RURUxFRF9BQ1RJT05TID0gW107XG53aW5kb3cuX19WSUVXUyA9IHt9O1xud2luZG93Ll9fVklFV19ESU1FTlNJT05TID0ge307XG53aW5kb3cuX19PQlNFUlZFUlMgPSB7fTtcbndpbmRvdy5aSW5kZXggPSAwO1xuXG53aW5kb3cuY2FsbFVJQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGFyZ3MgPSAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IFthcmd1bWVudHNbMF1dIDogQXJyYXkuYXBwbHkobnVsbCxcbiAgICAgICAgYXJndW1lbnRzKSk7XG4gICAgdmFyIGZOYW1lID0gYXJnc1swXVxuICAgIHZhciBmdW5jdGlvbkFyZ3MgPSBhcmdzLnNsaWNlKDEpXG4gICAgdmFyIGN1cnJUaW1lO1xuICAgIHZhciB0aW1lRGlmZjtcbiAgICBcbiAgICBpZiAod2luZG93Ll9fQUxMX09OQ0xJQ0tTICYmIHdpbmRvdy5fX0FMTF9PTkNMSUNLUy5pbmRleE9mKGZOYW1lKSAhPSAtMSAmJiBhcmdzWzJdID09IFwiZmVlZGJhY2tcIiAmJiBKQnJpZGdlICYmIEpCcmlkZ2Uuc2V0Q2xpY2tGZWVkYmFjaykge1xuICAgICAgICByZXR1cm4gSkJyaWRnZS5zZXRDbGlja0ZlZWRiYWNrKGFyZ3NbMV0pO1xuICAgIH1cblxuICAgIGlmICh3aW5kb3cuX19USFJPVFRFTEVEX0FDVElPTlMgJiYgd2luZG93Ll9fVEhST1RURUxFRF9BQ1RJT05TLmluZGV4T2YoZk5hbWUpID09IC0xKSB7XG4gICAgICAgIHdpbmRvdy5fX1BST1hZX0ZOW2ZOYW1lXS5hcHBseShudWxsLCBmdW5jdGlvbkFyZ3MpO1xuICAgIH0gZWxzZSBpZiAod2luZG93Ll9fTEFTVF9GTl9DQUxMRUQgJiYgKGZOYW1lID09IHdpbmRvdy5fX0xBU1RfRk5fQ0FMTEVELmZOYW1lKSkge1xuICAgICAgICBjdXJyVGltZSA9IGdldEN1cnJUaW1lKCk7XG4gICAgICAgIHRpbWVEaWZmID0gY3VyclRpbWUgLSB3aW5kb3cuX19MQVNUX0ZOX0NBTExFRC50aW1lU3RhbXA7XG5cbiAgICAgICAgaWYgKHRpbWVEaWZmID49IDMwMCkge1xuICAgICAgICAgICAgd2luZG93Ll9fUFJPWFlfRk5bZk5hbWVdLmFwcGx5KG51bGwsIGZ1bmN0aW9uQXJncyk7XG4gICAgICAgICAgICB3aW5kb3cuX19MQVNUX0ZOX0NBTExFRC50aW1lU3RhbXAgPSBjdXJyVGltZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcImZ1bmN0aW9uIHRocm90dGVsZWRcIiwgZk5hbWUpO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwidGltZSBkaWZmXCIsIHRpbWVEaWZmKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5fX1BST1hZX0ZOW2ZOYW1lXS5hcHBseShudWxsLCBmdW5jdGlvbkFyZ3MpO1xuICAgICAgICB3aW5kb3cuX19MQVNUX0ZOX0NBTExFRCA9IHtcbiAgICAgICAgICAgIHRpbWVTdGFtcDogKG5ldyBEYXRlKCkpLmdldFRpbWUoKSxcbiAgICAgICAgICAgIGZOYW1lOiBmTmFtZVxuICAgICAgICB9XG4gICAgfVxufTsiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdFJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFFQSxtQkFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBT0EsbUJBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFFQTtBQUNBO0FBQ0E7QUFDQSxlQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQU9BO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7Ozs7Ozs7Ozs7Ozs7O0FDNVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBO0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM1pBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFnQkE7QUFoQkE7QUFBQTtBQUNBO0FBREE7QUFpQkE7QUFDQTtBQUFBO0FBbEJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBd0JBO0FBQ0E7QUFDQTtBQTNCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJOQTs7Ozs7Ozs7Ozs7Ozs7QUNwREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkE7QUFEQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFUQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBO0FBQ0E7QUFRQTtBQUFBO0FBWUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBO0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExQkE7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0JBO0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7Ozs7Ozs7Ozs7QUNsd0NBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVRBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0tBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFFQTs7O0FBRUE7QUFDQTtBQUVBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7O0FDbk9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuREE7QUFDQTtBQXFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7O0FDOUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdlNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM1RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7OztBQ3BMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBLGVBRUE7QUFDQTtBQUNBLFdBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbkNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsOERBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BOzs7Ozs7Ozs7Ozs7OztBQzFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFaQTtBQWNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQVpBO0FBY0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQWFBO0FBQ0E7QUFmQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFjQTtBQUNBO0FBaEJBO0FBa0JBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBVkE7QUE1MUJBO0FBeTJCQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFUQTtBQVlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVpBO0FBZUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQVRBO0FBWUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBU0E7Ozs7Ozs7Ozs7Ozs7O0FDdHdDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUxBO0FBQ0E7QUFZQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVRBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJCQTtBQUNBO0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDejVCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7OztBQ3pCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7Ozs7Ozs7Ozs7Ozs7O0FDekJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDekNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQTFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFMQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFKQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUxBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUxBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFOQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFUQTtBQVBBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBN0VBO0FBK0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7Ozs7Ozs7Ozs7Ozs7O0FDMStEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7OztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0Esb0NBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBO0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsU0FhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==