/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! normalize-css */ "./node_modules/normalize-css/index.js");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_Factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/Factory */ "./src/assets/js/libs/Factory.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



// import './libs/Logger'
// import './libs/BrowserSyncAction'
var moduleElements = _toConsumableArray(document.querySelectorAll("[data-module]"));
window.factory = _libs_Factory__WEBPACK_IMPORTED_MODULE_2__["default"];
document.addEventListener("DOMContentLoaded", function () {
  _libs_Factory__WEBPACK_IMPORTED_MODULE_2__["default"].registerModules(moduleElements);
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (m) {
      var rawElements = [m.target].concat(_toConsumableArray(m.addedNodes));
      var modifyElements = [];
      rawElements.forEach(function (e) {
        if (e.querySelectorAll) {
          modifyElements = [].concat(_toConsumableArray(modifyElements), _toConsumableArray(e.querySelectorAll("[data-module]")));
        }
      });
      var elements = [].concat(_toConsumableArray(rawElements), _toConsumableArray(modifyElements)).filter(function (e) {
        return e.getAttribute && e.getAttribute("data-module") && !e.modules;
      });
      _libs_Factory__WEBPACK_IMPORTED_MODULE_2__["default"].registerModules(elements);
    });
  });
  observer.observe(document, {
    subtree: true,
    childList: true
  });
});

/***/ }),

/***/ "./src/assets/js/libs/EasingFunctions.js":
/*!***********************************************!*\
  !*** ./src/assets/js/libs/EasingFunctions.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EasingFunctions: function() { return /* binding */ EasingFunctions; },
/* harmony export */   getEaseValue: function() { return /* binding */ getEaseValue; }
/* harmony export */ });
/*
 * Easing Functions - inspired from http://gizma.com/easing/
 * only considering the t value for the range [0, 1] => [0, 1]
 */
var EasingFunctions = {
  // no easing, no acceleration
  linear: function linear(t) {
    return t;
  },
  // accelerating from zero velocity
  easeInQuad: function easeInQuad(t) {
    return t * t;
  },
  // decelerating to zero velocity
  easeOutQuad: function easeOutQuad(t) {
    return t * (2 - t);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function easeInOutQuad(t) {
    return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  // accelerating from zero velocity 
  easeInCubic: function easeInCubic(t) {
    return t * t * t;
  },
  // decelerating to zero velocity 
  easeOutCubic: function easeOutCubic(t) {
    return --t * t * t + 1;
  },
  // acceleration until halfway, then deceleration 
  easeInOutCubic: function easeInOutCubic(t) {
    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  // accelerating from zero velocity 
  easeInQuart: function easeInQuart(t) {
    return t * t * t * t;
  },
  // decelerating to zero velocity 
  easeOutQuart: function easeOutQuart(t) {
    return 1 - --t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function easeInOutQuart(t) {
    return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  // accelerating from zero velocity
  easeInQuint: function easeInQuint(t) {
    return t * t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuint: function easeOutQuint(t) {
    return 1 + --t * t * t * t * t;
  },
  // acceleration until halfway, then deceleration 
  easeInOutQuint: function easeInOutQuint(t) {
    return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  }
};
var getEaseValue = function getEaseValue(time, from, to, duration) {
  var fn = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'easeInOutQuad';
  console.log(fn);
  var easeFn = EasingFunctions[fn] || EasingFunctions['easeInOutQuad'];
  return easeFn(time / duration) * (to - from) + from;
};

/***/ }),

/***/ "./src/assets/js/libs/Factory.js":
/*!***************************************!*\
  !*** ./src/assets/js/libs/Factory.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Factory = /*#__PURE__*/function () {
  function Factory() {
    _classCallCheck(this, Factory);
    this.modules = {};
    this.names = {};
    this.elements = new WeakMap();
  }
  return _createClass(Factory, [{
    key: "registerModules",
    value: function registerModules(elements) {
      var _this = this;
      elements.forEach(function (el) {
        if (el.modules) return;
        var modules = el.getAttribute('data-module') ? el.getAttribute('data-module').split(/(\s|,)/g).filter(function (s) {
          return s.trim().length && !s.includes(',');
        }) : [];
        modules.forEach(function (m) {
          _this.addModule(new (__webpack_require__("./src/assets/js/modules sync recursive ^\\.\\/.*$")("./".concat(m))["default"])(el, m));
        });
      });
    }
  }, {
    key: "addModule",
    value: function addModule(m) {
      this.modules[m.id] = m;
      if (!this.names[m.name]) {
        this.names[m.name] = [];
      }
      this.names[m.name].push(m);
      if (!this.elements.has(m.el)) {
        var newModule = _defineProperty({}, m.name, m);
        this.elements.set(m.el, newModule);
        return m;
      }
      var eleModules = this.elements.get(m.el);
      return eleModules[m.name] = m;
    }
  }, {
    key: "getModuleById",
    value: function getModuleById(id) {
      return this.modules[id];
    }
  }, {
    key: "getModulesByEl",
    value: function getModulesByEl(el) {
      return this.elements.get(el);
    }
  }, {
    key: "getModulesByName",
    value: function getModulesByName(name) {
      return this.names[name];
    }
  }]);
}();
/* harmony default export */ __webpack_exports__["default"] = (new Factory());

/***/ }),

/***/ "./src/assets/js/libs/Helper.js":
/*!**************************************!*\
  !*** ./src/assets/js/libs/Helper.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $helper: function() { return /* binding */ $helper; },
/* harmony export */   constifyProp: function() { return /* binding */ constifyProp; },
/* harmony export */   deThrottler: function() { return /* binding */ deThrottler; },
/* harmony export */   "default": function() { return /* binding */ Helper; },
/* harmony export */   getQueryValue: function() { return /* binding */ getQueryValue; },
/* harmony export */   visibilityChangeDetect: function() { return /* binding */ visibilityChangeDetect; }
/* harmony export */ });
/* harmony import */ var _EasingFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EasingFunctions */ "./src/assets/js/libs/EasingFunctions.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Helper = /*#__PURE__*/function () {
  function Helper(el) {
    _classCallCheck(this, Helper);
    this.el = el;
    this.subscribers = {};
    this.state = {};
  }
  return _createClass(Helper, [{
    key: "subscribe",
    value: function subscribe(event, callback) {
      if (!this.subscribers[event]) {
        this.subscribers[event] = [];
      }
      this.subscribers[event].push(callback);
    }
  }, {
    key: "publish",
    value: function publish(event, data) {
      if (!this.subscribers[event]) return;
      this.subscribers[event].forEach(function (subscriberCallback) {
        return subscriberCallback(data);
      });
    }

    // detect available wheel event
  }, {
    key: "getWheelEvent",
    value: function getWheelEvent(el) {
      if ('onwheel' in el) {
        // spec event type
        return 'wheel';
      } else if (el.onmousewheel !== undefined) {
        // legacy event type
        return 'mousewheel';
      } else {
        // older Firefox
        return 'DOMMouseScroll';
      }
    }
  }, {
    key: "easeInOutQuart",
    value: function easeInOutQuart(t, b, c, d) {
      if (t > d) return b + c;
      if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
      return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    }
  }, {
    key: "getOffset",
    value: function getOffset(el) {
      var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      };
    }
  }, {
    key: "getScreenHeight",
    value: function getScreenHeight() {
      var div = document.createElement("div");
      div.style.opacity = 0;
      div.style.pointerEvents = "none";
      div.style.position = "fixed";
      div.style.top = 0;
      div.style.height = "100%";
      div.style.width = "100%";
      document.body.appendChild(div);
      var height = window.getComputedStyle(div).height;
      div.remove();
      return height;
    }
  }, {
    key: "getSiblings",
    value: function getSiblings(el) {
      // for collecting siblings
      var siblings = [];
      // if no parent, return no sibling
      if (!el.parentNode) {
        return siblings;
      }
      // first child of the parent node
      var sibling = el.parentNode.firstChild;

      // collecting siblings
      while (sibling) {
        if (sibling.nodeType === 1 && sibling !== el) {
          siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
      }
      return siblings;
    }
  }, {
    key: "isMobile",
    value: function isMobile() {
      return /Mobi|Android/i.test(navigator.userAgent);
    }
  }, {
    key: "detectBrowser",
    value: function detectBrowser() {
      // Opera 8.0+
      // const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0

      // Firefox 1.0+
      var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

      // Safari 3.0+ "[object HTMLElementConstructor]"
      // const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification))

      // Internet Explorer 6-11
      // const isIE = /*@cc_on!@*/false || !!document.documentMode

      // Edge 20+
      // const isEdge = !isIE && !!window.StyleMedia

      // Chrome 1 - 79
      // const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)

      // Edge (based on chromium) detection
      // const isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1)

      // Blink engine detection
      // const isBlink = (isChrome || isOpera) && !!window.CSS

      return {
        // isOpera,
        isFirefox: isFirefox
        // isSafari,
        // isIE,
        // isEdge,
        // isChrome,
        // isEdgeChromium,
        // isBlink
      };
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(top) {
      var _this = this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var defaultOptions = {
        duration: 400,
        offset: 0
      };
      options = _objectSpread(_objectSpread({}, defaultOptions), options);
      var to = top + options.offset;
      var from = window.pageYOffset || document.documentElement.scrollTop;
      var startTime = new Date().getTime();
      clearInterval(this.scrollTimer);
      this.scrollTimer = setInterval(function () {
        var time = new Date().getTime() - startTime;
        var step = (0,_EasingFunctions__WEBPACK_IMPORTED_MODULE_0__.getEaseValue)(time, from, to, options.duration);
        window.scrollTo(0, step);
        if (time >= options.duration) {
          window.scrollTo(0, to);
          clearInterval(_this.scrollTimer);
          options.onComplete && typeof options.onComplete == "function" && options.onComplete();
        }
      }, 1000 / 60);
    }
  }, {
    key: "scrollToEl",
    value: function scrollToEl(el) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!el) return;
      var to = this.getOffset(el).top;
      this.scrollTo(to, options);
    }
  }]);
}();

var constifyProp = function constifyProp(obj, prop, value) {
  return Object.defineProperty(obj, prop, {
    value: value,
    writable: false
  });
};
var visibilityChangeDetect = function visibilityChangeDetect(callback) {
  var hidden = "hidden";

  // Standards:
  if (hidden in document) document.addEventListener("visibilitychange", callback);else if ((hidden = "mozHidden") in document) document.addEventListener("mozvisibilitychange", callback);else if ((hidden = "webkitHidden") in document) document.addEventListener("webkitvisibilitychange", callback);else if ((hidden = "msHidden") in document) document.addEventListener("msvisibilitychange", callback);
  // All others:
  else window.onpageshow = window.onpagehide = window.onfocus = window.onblur = callback;
};
var deThrottler = function deThrottler(options) {
  var delay = options.delay || 200;
  var nextValid = Date.now() + delay;
  var callback = 0;
  var func = function func(e) {
    clearTimeout(callback);
    var timeStamp = Date.now();
    if (timeStamp > nextValid) {
      options.callback(e);
      nextValid = timeStamp + delay;
      return;
    }
    callback = setTimeout(function () {
      if (!options.skipLastCall) {
        options.callback(e);
      }
    }, delay);
  };
  (options.target || window).addEventListener(options.event, func);
  return func;
};
var getQueryValue = function () {
  var QUERY_STRING = {};
  var params = window.location.search.split('?')[1];
  if (params) {
    params.split(/&(?!amp;)/g).forEach(function (param) {
      var query = param.split('=');
      QUERY_STRING[query[0]] = query[1];
    });
  }
  return function (name) {
    return QUERY_STRING[name];
  };
}();
var $helper = new Helper();


/***/ }),

/***/ "./src/assets/js/libs/ModuleState.js":
/*!*******************************************!*\
  !*** ./src/assets/js/libs/ModuleState.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var storage = {};
var refState = function refState(name, initValue) {
  if (!storage[name]) {
    var subs = [];
    var currentValue = initValue;
    storage[name] = {
      get: function get() {
        return currentValue;
      },
      set: function set(value) {
        if (value !== currentValue) {
          currentValue = value;
          subs.forEach(function (s) {
            return s(currentValue);
          });
          return [].concat(subs);
        }
        return false;
      },
      onChange: function onChange(sub) {
        return subs.push(sub);
      }
    };
  }
  return storage[name];
};
/* harmony default export */ __webpack_exports__["default"] = (refState);

/***/ }),

/***/ "./src/assets/js/libs/Observer.js":
/*!****************************************!*\
  !*** ./src/assets/js/libs/Observer.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   invoker: function() { return /* binding */ invoker; }
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ "./src/assets/js/libs/Subscriber.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

var pool = {};
var Observer = function Observer() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'eventName.ModuleName.ModuleId';
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (value) {
    return value;
  };
  var _name$split = name.split(/\./g),
    _name$split2 = _slicedToArray(_name$split, 3),
    eventName = _name$split2[0],
    moduleName = _name$split2[1],
    moduleId = _name$split2[2];
  var sub = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__["default"](eventName, callback, name);
  var returnObject = {
    disconnect: function disconnect() {
      var _pool$eventName, _pool$eventName2, _pool$eventName3;
      var index = (_pool$eventName = pool[eventName]) === null || _pool$eventName === void 0 || (_pool$eventName = _pool$eventName["default"]) === null || _pool$eventName === void 0 ? void 0 : _pool$eventName.findIndex(function (s) {
        return s === sub;
      });
      if (index > -1) {
        pool[eventName]["default"].splice(index, 1);
        return;
      }
      index = (_pool$eventName2 = pool[eventName]) === null || _pool$eventName2 === void 0 || (_pool$eventName2 = _pool$eventName2[moduleName]) === null || _pool$eventName2 === void 0 || (_pool$eventName2 = _pool$eventName2["default"]) === null || _pool$eventName2 === void 0 ? void 0 : _pool$eventName2.findIndex(function (s) {
        return s === sub;
      });
      if (index > -1) {
        pool[eventName][moduleName]["default"].splice(index, 1);
        return;
      }
      index = (_pool$eventName3 = pool[eventName]) === null || _pool$eventName3 === void 0 || (_pool$eventName3 = _pool$eventName3[moduleName]) === null || _pool$eventName3 === void 0 || (_pool$eventName3 = _pool$eventName3[moduleId]) === null || _pool$eventName3 === void 0 ? void 0 : _pool$eventName3.findIndex(function (s) {
        return s === sub;
      });
      if (index > -1) {
        pool[eventName][moduleName][moduleId].splice(index, 1);
        return;
      }
    }
  };
  if (!pool[eventName]) {
    pool[eventName] = {
      "default": []
    };
  }
  var subject = pool[eventName];
  if (!moduleName) {
    subject["default"].push(sub);
    return returnObject;
  }
  if (!subject[moduleName]) {
    subject[moduleName] = {
      "default": []
    };
  }
  subject = subject[moduleName];
  subject["default"].push(sub);
  if (!moduleId) return returnObject;
  if (!subject[moduleId]) {
    subject[moduleId] = [];
  }
  subject[moduleId].push(sub);
  return returnObject;
};
var invoker = function invoker(name, data, publisher) {
  var _name$split3 = name.split(/\./g),
    _name$split4 = _slicedToArray(_name$split3, 3),
    eventName = _name$split4[0],
    moduleName = _name$split4[1],
    moduleId = _name$split4[2];
  var subject = pool[eventName] || {
    "default": []
  };
  var subs = _toConsumableArray(subject["default"]);
  if (!subject[moduleName]) {
    subs.forEach(function (sub) {
      return sub.invoke(data, publisher);
    });
    return;
  }
  subject = subject[moduleName];
  subs = [].concat(_toConsumableArray(subs), _toConsumableArray(subject["default"]));
  if (!subject[moduleId]) {
    subs.forEach(function (sub) {
      return sub.invoke(data, publisher);
    });
    return;
  }
  subject = subject[moduleId];
  subs = [].concat(_toConsumableArray(subs), _toConsumableArray(subject));
  subs.forEach(function (sub) {
    return sub.invoke(data, publisher);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (Observer);


/***/ }),

/***/ "./src/assets/js/libs/Publisher.js":
/*!*****************************************!*\
  !*** ./src/assets/js/libs/Publisher.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Publisher; }
/* harmony export */ });
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observer */ "./src/assets/js/libs/Observer.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Publisher = /*#__PURE__*/function () {
  function Publisher() {
    _classCallCheck(this, Publisher);
  }
  return _createClass(Publisher, [{
    key: "publish",
    value: function publish(name, data) {
      (0,_Observer__WEBPACK_IMPORTED_MODULE_0__.invoker)("".concat(name, ".").concat(this.name, ".").concat(this.id), data, this);
    }
  }]);
}();


/***/ }),

/***/ "./src/assets/js/libs/RandomString.js":
/*!********************************************!*\
  !*** ./src/assets/js/libs/RandomString.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ random; }
/* harmony export */ });
var alphabet = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm';
function random() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
  var str = '';
  while (length) {
    length--;
    str += alphabet[~~(Math.random() * alphabet.length)];
  }
  return str;
}

/***/ }),

/***/ "./src/assets/js/libs/Subscriber.js":
/*!******************************************!*\
  !*** ./src/assets/js/libs/Subscriber.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Subscriber; }
/* harmony export */ });
/* harmony import */ var _RandomString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RandomString */ "./src/assets/js/libs/RandomString.js");
/* harmony import */ var _ModuleState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModuleState */ "./src/assets/js/libs/ModuleState.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var Subscriber = /*#__PURE__*/function () {
  function Subscriber(name, action, refName) {
    var _this = this;
    _classCallCheck(this, Subscriber);
    this.name = name;
    this.action = action;
    this.id = (0,_RandomString__WEBPACK_IMPORTED_MODULE_0__["default"])();
    this.refState = (0,_ModuleState__WEBPACK_IMPORTED_MODULE_1__["default"])(refName);
    this.refState.onChange(function (value) {
      return _this.action && _this.action(value, _this.publisher);
    });
  }
  return _createClass(Subscriber, [{
    key: "invoke",
    value: function invoke(data, publisher) {
      if (!this.publisher) {
        this.publisher = publisher;
      }
      if (publisher !== this.publisher) {
        console.warn('it seems this event is published from multiple publisher. ', this.publisher, publisher);
      }
      this.refState.set(data);
    }
  }]);
}();


/***/ }),

/***/ "./src/assets/js/modules/BaseModule.js":
/*!*********************************************!*\
  !*** ./src/assets/js/modules/BaseModule.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BaseModule; }
/* harmony export */ });
/* harmony import */ var _libs_RandomString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/RandomString */ "./src/assets/js/libs/RandomString.js");
/* harmony import */ var _libs_Publisher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/Publisher */ "./src/assets/js/libs/Publisher.js");
/* harmony import */ var _libs_ModuleState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/ModuleState */ "./src/assets/js/libs/ModuleState.js");
/* harmony import */ var _libs_Helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/Helper */ "./src/assets/js/libs/Helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }




var setupInitAttr = function setupInitAttr(el, currentModule) {
  var name = currentModule.name.toLowerCase();
  var attrs = _toConsumableArray(el.attributes);
  attrs.map(function (a) {
    return [a.name, a.value];
  }).filter(function (a) {
    return a[0].includes(name);
  }).forEach(function (a) {
    var aName = a[0].split("".concat(name, "-")).pop();
    (0,_libs_ModuleState__WEBPACK_IMPORTED_MODULE_2__["default"])("".concat(currentModule.id, "#").concat(aName), a[1]);
  });
  currentModule.data = function (name, value, subscribe) {
    var state = (0,_libs_ModuleState__WEBPACK_IMPORTED_MODULE_2__["default"])("".concat(currentModule.id, "#").concat(name));
    if (subscribe) state.onChange(subscribe);
    if (value) state.set(value);
    return state.get();
  };
  (0,_libs_Helper__WEBPACK_IMPORTED_MODULE_3__.constifyProp)(currentModule, 'data', currentModule.data);
};
var BaseModule = /*#__PURE__*/function (_Publisher) {
  function BaseModule() {
    var _this;
    _classCallCheck(this, BaseModule);
    _this = _callSuper(this, BaseModule);
    var _arguments = Array.prototype.slice.call(arguments),
      el = _arguments[0],
      name = _arguments[1];
    _this.id = (0,_libs_RandomString__WEBPACK_IMPORTED_MODULE_0__["default"])();
    _this.name = name;
    _this.el = el;
    _this.el.modules = _this.el.modules || {};
    _this.el.modules[_this.name] = _this.id;
    (0,_libs_Helper__WEBPACK_IMPORTED_MODULE_3__.constifyProp)(_this, 'id', _this.id);
    (0,_libs_Helper__WEBPACK_IMPORTED_MODULE_3__.constifyProp)(_this, 'name', _this.name);
    (0,_libs_Helper__WEBPACK_IMPORTED_MODULE_3__.constifyProp)(_this, 'el', _this.el);
    setupInitAttr(_this.el, _this);
    if (_this.register) {
      _this.register();
      (0,_libs_Helper__WEBPACK_IMPORTED_MODULE_3__.constifyProp)(_this, 'register');
    }
    return _this;
  }
  _inherits(BaseModule, _Publisher);
  return _createClass(BaseModule);
}(_libs_Publisher__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/assets/js/modules/ChildRelatedNews.js":
/*!***************************************************!*\
  !*** ./src/assets/js/modules/ChildRelatedNews.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ChildRelatedNews; }
/* harmony export */ });
/* harmony import */ var _BaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModule */ "./src/assets/js/modules/BaseModule.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/navigation */ "./node_modules/swiper/modules/navigation/navigation.min.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination/pagination.min.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

// core version + navigation, pagination modules:

// import Swiper and modules styles



var ChildRelatedNews = /*#__PURE__*/function (_BaseModule) {
  function ChildRelatedNews() {
    _classCallCheck(this, ChildRelatedNews);
    return _callSuper(this, ChildRelatedNews, arguments);
  }
  _inherits(ChildRelatedNews, _BaseModule);
  return _createClass(ChildRelatedNews, [{
    key: "register",
    value: function register() {
      swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_1__.Autoplay]);
      this.slidefull = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"](".child-related-news", {
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
          767: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    }
  }]);
}(_BaseModule__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/assets/js/modules/ChildResearch.js":
/*!************************************************!*\
  !*** ./src/assets/js/modules/ChildResearch.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ChildResearch; }
/* harmony export */ });
/* harmony import */ var _BaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModule */ "./src/assets/js/modules/BaseModule.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination/pagination.min.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

// core version + navigation, pagination modules:

// import Swiper and modules styles


var ChildResearch = /*#__PURE__*/function (_BaseModule) {
  function ChildResearch() {
    _classCallCheck(this, ChildResearch);
    return _callSuper(this, ChildResearch, arguments);
  }
  _inherits(ChildResearch, _BaseModule);
  return _createClass(ChildResearch, [{
    key: "register",
    value: function register() {
      // Initialize Swiper
      this.initSwiper();
    }
  }, {
    key: "initSwiper",
    value: function initSwiper() {
      swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_1__.Autoplay]);
      this.slidefull = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"](".swiper_research", {
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        breakpoints: {
          767: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3
          }
        }
      });
    }
  }]);
}(_BaseModule__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/assets/js/modules/Header.js":
/*!*****************************************!*\
  !*** ./src/assets/js/modules/Header.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var _BaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModule */ "./src/assets/js/modules/BaseModule.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var Header = /*#__PURE__*/function (_BaseModule) {
  function Header() {
    _classCallCheck(this, Header);
    return _callSuper(this, Header, arguments);
  }
  _inherits(Header, _BaseModule);
  return _createClass(Header, [{
    key: "register",
    value: function register() {
      this.header = document.querySelector('.header-nav');
      this.hamburger = this.header.querySelector('.hamburger-menu');
      this.closeBtn = this.header.querySelector('.close-menu');
      this.mainNav = this.header.querySelector('.main-nav');
      this.overlay = document.createElement('div');

      // Create overlay
      this.overlay.className = 'fixed inset-0 bg-black/50 opacity-0 invisible transition-all duration-300 z-40';
      this.header.appendChild(this.overlay);
      this.languageSwitcher();
      this.initMobileMenu();
      this.initSubMenus();
      this.handleResize();
      this.initMobileSubmenus();
      this.initLanguageSwitcher();
    }
  }, {
    key: "languageSwitcher",
    value: function languageSwitcher() {
      var languageSwitcher = document.querySelector(".language-switcher");
      languageSwitcher.addEventListener("click", function () {
        languageSwitcher.classList.toggle("active");
        languageSwitcher.querySelector(".language-switcher__text").textContent = languageSwitcher.classList.contains("active") ? "ENG" : "VNI";
      });
    }
  }, {
    key: "initMobileMenu",
    value: function initMobileMenu() {
      var _this$hamburger,
        _this = this,
        _this$closeBtn,
        _this$overlay;
      // Open menu
      (_this$hamburger = this.hamburger) === null || _this$hamburger === void 0 || _this$hamburger.addEventListener('click', function () {
        _this.openMenu();
      });

      // Close menu with button
      (_this$closeBtn = this.closeBtn) === null || _this$closeBtn === void 0 || _this$closeBtn.addEventListener('click', function () {
        _this.closeMenu();
      });

      // Close menu when clicking overlay
      (_this$overlay = this.overlay) === null || _this$overlay === void 0 || _this$overlay.addEventListener('click', function () {
        _this.closeMenu();
      });

      // Close menu on ESC key
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          _this.closeMenu();
        }
      });
    }
  }, {
    key: "openMenu",
    value: function openMenu() {
      this.header.classList.add('menu-active');
      this.mainNav.classList.remove('right-[-100%]');
      this.mainNav.classList.add('right-0');
      this.overlay.classList.remove('opacity-0', 'invisible');
      this.overlay.classList.add('opacity-100', 'visible');
      document.body.style.overflow = 'hidden';
    }
  }, {
    key: "closeMenu",
    value: function closeMenu() {
      this.header.classList.remove('menu-active');
      this.mainNav.classList.remove('right-0');
      this.mainNav.classList.add('right-[-100%]');
      this.overlay.classList.remove('opacity-100', 'visible');
      this.overlay.classList.add('opacity-0', 'invisible');
      document.body.style.overflow = '';
    }
  }, {
    key: "initSubMenus",
    value: function initSubMenus() {
      var _this2 = this;
      // Handle submenu toggles on mobile
      if (window.innerWidth <= 1200) {
        this.subMenuBtns = this.header.querySelectorAll('.has-submenu > a');
        this.subMenuBtns.forEach(function (btn) {
          btn.addEventListener('click', function (e) {
            e.preventDefault();
            var submenu = btn.nextElementSibling;
            submenu.classList.toggle('show');
          });
        });
      }
      // Handle submenu hover on desktop
      this.subMenuBtns = this.header.querySelectorAll('.group\\/sub-menu > a');
      this.subMenuBtns1 = this.header.querySelectorAll('.group\\/sub1-menu > a');
      this.subMenuBtns.forEach(function (btn) {
        btn.addEventListener('mouseenter', function () {
          var submenu = btn.nextElementSibling;
          if (submenu) {
            _this2.adjustSubMenuPosition(submenu, 'primary');
          }
        });
      });
      this.subMenuBtns1.forEach(function (btn) {
        btn.addEventListener('mouseenter', function () {
          var submenu = btn.nextElementSibling;
          if (submenu) {
            _this2.adjustSubMenuPosition(submenu, 'secondary');
          }
        });
      });
    }
  }, {
    key: "adjustSubMenuPosition",
    value: function adjustSubMenuPosition(submenu, type) {
      if (window.innerWidth > 1100) {
        var rect = submenu.getBoundingClientRect();
        var isOffscreen = rect.right > window.innerWidth || rect.bottom > window.innerHeight;
        if (isOffscreen) {
          submenu.classList.add('is-offscreen');
          submenu.style.left = 'auto';
          if (type === 'primary') {
            submenu.style.right = '0';
          } else if (type === 'secondary') {
            submenu.style.right = '100%';
          }
        }
      }
    }
  }, {
    key: "handleResize",
    value: function handleResize() {
      var _this3 = this;
      window.addEventListener('resize', function () {
        if (window.innerWidth > 1100) {
          _this3.closeMenu();
        }
      });
    }
  }, {
    key: "initMobileSubmenus",
    value: function initMobileSubmenus() {
      var _this4 = this;
      var subMenuTriggers = this.mainNav.querySelectorAll('.group\\/sub-menu > a, .group\\/sub1-menu > a');
      subMenuTriggers.forEach(function (trigger) {
        trigger.addEventListener('click', function (e) {
          // Only handle clicks on mobile
          if (window.innerWidth <= 1100) {
            e.preventDefault();
            var submenu = trigger.nextElementSibling;
            var arrow = trigger.querySelector('svg');

            // Close other submenus at the same level
            var parent = trigger.closest('ul');
            parent.querySelectorAll('ul').forEach(function (menu) {
              if (menu !== submenu) {
                menu.classList.remove('submenu-active');
                var otherArrow = menu.previousElementSibling.querySelector('svg');
                otherArrow === null || otherArrow === void 0 || otherArrow.classList.remove('rotate-active');
              }
            });

            // Toggle current submenu
            submenu.classList.toggle('submenu-active');
            arrow === null || arrow === void 0 || arrow.classList.toggle('rotate-active');
          }
        });
      });

      // Reset submenus on resize
      window.addEventListener('resize', function () {
        if (window.innerWidth > 1100) {
          _this4.mainNav.querySelectorAll('.submenu-active').forEach(function (submenu) {
            submenu.classList.remove('submenu-active');
          });
          _this4.mainNav.querySelectorAll('.rotate-active').forEach(function (arrow) {
            arrow.classList.remove('rotate-active');
          });
        }
      });
    }
  }, {
    key: "initLanguageSwitcher",
    value: function initLanguageSwitcher() {
      var langButtons = this.mainNav.querySelectorAll('.lang-btn');
      langButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          // Remove active state from all buttons
          langButtons.forEach(function (button) {
            button.setAttribute('data-active', 'false');
          });

          // Set active state on clicked button
          btn.setAttribute('data-active', 'true');

          // Additional language switch logic here
          var lang = btn.getAttribute('data-lang');
          if (lang) {
            window.localStorage.setItem('lang', lang);
            document.documentElement.lang = lang;
          }
        });
      });
    }
  }]);
}(_BaseModule__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/assets/js/modules/HelloModule.js":
/*!**********************************************!*\
  !*** ./src/assets/js/modules/HelloModule.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HelloModule; }
/* harmony export */ });
/* harmony import */ var _BaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModule */ "./src/assets/js/modules/BaseModule.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var HelloModule = /*#__PURE__*/function (_BaseModule) {
  function HelloModule() {
    _classCallCheck(this, HelloModule);
    return _callSuper(this, HelloModule, arguments);
  }
  _inherits(HelloModule, _BaseModule);
  return _createClass(HelloModule, [{
    key: "register",
    value: function register() {
      window.tailwind.config = {
        content: ["./src/**/*.{html,js,twig}", "./src/_templates/**/*.twig"],
        theme: {
          extend: {
            screens: {
              menuMb: "1101px"
            },
            fontFamily: {
              montserrat: ['"Montserrat"', "serif"]
            },
            boxShadow: {
              accredited: "3px 3px 12px 0px rgba(0, 0, 207, 0.20)",
              news: "3px 3px 12px 0px rgba(0, 0, 207, 0.20)"
            },
            dropShadow: {
              "btn-slide": "2px 2px 10px rgba(0, 0, 0, 0.05)",
              "gallery-item": "4px 4px 20px 0px rgba(0, 0, 0, 0.15)",
              partner: "4px 4px 15px 0px rgba(0, 0, 0, 0.05)"
            },
            animation: {
              rotation360: "rotation360 10s linear infinite"
            },
            keyframes: {
              rotation360: {
                "0%": {
                  transform: "rotate(0deg)"
                },
                "50%": {
                  transform: "rotate(180deg)"
                },
                "100%": {
                  transform: "rotate(360deg)"
                }
              }
            },
            backgroundImage: {
              vn: "url('public/images/vietnam.png')",
              eng: "url('public/images/eng.webp')"
            },
            backgroundPosition: {
              vn: "center",
              eng: "center"
            },
            backgroundSize: {
              vn: "cover",
              eng: "cover"
            },
            fontSize: {
              title: "38px",
              titleMb: "28px"
            },
            colors: {
              lightText: "#9aa5b1",
              navyBlue: {
                50: "#edf9ff",
                100: "#d6f0ff",
                200: "#b5e7ff",
                300: "#83daff",
                400: "#48c3ff",
                500: "#1f1fff",
                600: "#0046ba",
                700: "#0000cf",
                800: "#0000a8",
                900: "#000080"
              },
              yellow: "#fff434",
              yellowLogo: "#e9b20f",
              black: "#393939",
              black1: "#333333",
              black2: "#666666",
              stroke: "#E3E3E3",
              stroke1: "#F9F9F9",
              red: "#d32f2f",
              y200: "#fff59d",
              y100: "#fff9c4",
              titleColor: "#032d6c"
            },
            spacing: {
              1.25: "5px",
              2.5: "10px"
            },
            borderRadius: {
              1.25: "5px"
            }
          }
        },
        plugins: []
      };
      this.onModal();
      this.onPulseIocn();
      this.initScrollToTop();
      var loadingScreen = document.querySelector("#loading-screen");
      if (loadingScreen) {
        // Prevent scrolling while loading
        document.body.style.overflow = "hidden";

        // Hide loading screen after 3 seconds
        setTimeout(function () {
          // Add fade out animation
          loadingScreen.classList.add("opacity-0");

          // Remove element and restore scrolling after fade animation
          setTimeout(function () {
            loadingScreen.remove();
            document.body.style.overflow = "auto";
          }, 500); // Wait for fade animation to complete
        }, 3000); // 3 seconds delay
      }
    }
  }, {
    key: "onPulseIocn",
    value: function onPulseIocn() {
      var socialToggle = document.getElementById('socialToggle');
      var socialList = document.getElementById('socialList');
      var socialIcons = document.querySelectorAll('.social-icon');
      var isOpen = false;
      if (socialToggle && socialList) {
        socialToggle.addEventListener('click', function () {
          isOpen = !isOpen;
          if (isOpen) {
            // Show the list
            socialList.classList.remove('invisible', 'opacity-0');
            socialList.classList.add('visible', 'opacity-100');

            // Animate each icon with delay
            socialIcons.forEach(function (icon, index) {
              setTimeout(function () {
                icon.classList.add('translate-y-0', 'opacity-100');
                icon.classList.remove('-translate-y-4', 'opacity-0');
              }, index * 100);
            });
          } else {
            // Hide the list
            socialList.classList.remove('visible', 'opacity-100');
            socialList.classList.add('invisible', 'opacity-0');

            // Reset icons
            socialIcons.forEach(function (icon) {
              icon.classList.remove('translate-y-0', 'opacity-100');
              icon.classList.add('-translate-y-4', 'opacity-0');
            });
          }
        });

        // Initialize icons state
        socialIcons.forEach(function (icon) {
          icon.classList.add('-translate-y-4', 'opacity-0');
        });
      }
    }
  }, {
    key: "onModal",
    value: function onModal() {
      var openModalButtons = document.querySelectorAll("[data-open-modal]");
      var closeModalButtons = document.querySelectorAll(".modal-close");
      var modals = document.querySelectorAll(".modal");

      // Handle ESC key
      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
          modals.forEach(function (modal) {
            if (modal.classList.contains('modalActive')) {
              modal.classList.remove("modalActive");
              document.body.style.overflow = "auto";
              var iframe = modal.querySelector("iframe");
              if (iframe) {
                var iframeSrc = iframe.src;
                iframe.src = "";
                iframe.src = iframeSrc;
              }
            }
          });
        }
      });
      openModalButtons.forEach(function (button) {
        button.addEventListener("click", function () {
          var modalId = button.getAttribute("data-open-modal");
          var modal = document.getElementById(modalId);
          if (modal) {
            modal.classList.add("modalActive");
            document.body.style.overflow = "hidden";
          }
        });
      });
      closeModalButtons.forEach(function (button) {
        button.addEventListener("click", function () {
          button.closest(".modal").classList.remove("modalActive");
          document.body.style.overflow = "auto";
          var iframe = button.closest(".modal").querySelector("iframe");
          if (iframe) {
            var iframeSrc = iframe.src;
            iframe.src = "";
            iframe.src = iframeSrc;
          }
        });
      });
      modals.forEach(function (modal) {
        modal.addEventListener("click", function (event) {
          if (event.target === modal) {
            modal.classList.remove("modalActive");
            document.body.style.overflow = "auto";
            var iframe = modal.querySelector("iframe");
            if (iframe) {
              var iframeSrc = iframe.src;
              iframe.src = "";
              iframe.src = iframeSrc;
            }
          }
        });
      });
    }
  }, {
    key: "initScrollToTop",
    value: function initScrollToTop() {
      var scrollToTopBtn = document.getElementById('scrollToTop');
      if (!scrollToTopBtn) return;
      var toggleScrollButton = function toggleScrollButton() {
        var scrolled = window.scrollY;
        if (scrolled > 200) {
          scrollToTopBtn.classList.remove('opacity-0', 'invisible');
          scrollToTopBtn.classList.add('opacity-100', 'visible');
        } else {
          scrollToTopBtn.classList.add('opacity-0', 'invisible');
          scrollToTopBtn.classList.remove('opacity-100', 'visible');
        }
      };
      var scrollToTop = function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

      // Show/hide button based on scroll position
      window.addEventListener('scroll', toggleScrollButton);

      // Scroll to top when clicked
      scrollToTopBtn.addEventListener('click', scrollToTop);
    }
  }]);
}(_BaseModule__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/assets/js/modules/HomeAbout.js":
/*!********************************************!*\
  !*** ./src/assets/js/modules/HomeAbout.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HomeAbout; }
/* harmony export */ });
/* harmony import */ var _BaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModule */ "./src/assets/js/modules/BaseModule.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/navigation */ "./node_modules/swiper/modules/navigation/navigation.min.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

// core version + navigation, pagination modules:

// import Swiper and modules styles


var HomeAbout = /*#__PURE__*/function (_BaseModule) {
  function HomeAbout() {
    _classCallCheck(this, HomeAbout);
    return _callSuper(this, HomeAbout, arguments);
  }
  _inherits(HomeAbout, _BaseModule);
  return _createClass(HomeAbout, [{
    key: "register",
    value: function register() {
      swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_1__.Autoplay]);
      this.slidefull = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"](".swiper_about", {
        speed: 1000,
        slidesPerView: 1.8,
        spaceBetween: 10,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-custom-next",
          prevEl: ".swiper-button-custom-prev"
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        breakpoints: {
          767: {
            slidesPerView: 2.7,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3.2
          }
        }
      });
    }
  }]);
}(_BaseModule__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/assets/js/modules/HomeAccredited.js":
/*!*************************************************!*\
  !*** ./src/assets/js/modules/HomeAccredited.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HomeAccredited; }
/* harmony export */ });
/* harmony import */ var _BaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModule */ "./src/assets/js/modules/BaseModule.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var HomeAccredited = /*#__PURE__*/function (_BaseModule) {
  function HomeAccredited() {
    _classCallCheck(this, HomeAccredited);
    return _callSuper(this, HomeAccredited, arguments);
  }
  _inherits(HomeAccredited, _BaseModule);
  return _createClass(HomeAccredited, [{
    key: "register",
    value: function register() {
      this.initTabs();
    }
  }, {
    key: "initTabs",
    value: function initTabs() {
      var _quarters$, _tabPanes$;
      var quarters = document.querySelectorAll(".quarter");
      var tabPanes = document.querySelectorAll(".tab-pane");

      // Set first tab as active by default
      (_quarters$ = quarters[0]) === null || _quarters$ === void 0 || _quarters$.classList.add("active");
      (_tabPanes$ = tabPanes[0]) === null || _tabPanes$ === void 0 || _tabPanes$.classList.add("active");
      quarters.forEach(function (quarter) {
        quarter.addEventListener("click", function () {
          // Remove active class from all quarters and panes
          quarters.forEach(function (q) {
            return q.classList.remove("active");
          });
          tabPanes.forEach(function (pane) {
            return pane.classList.remove("active");
          });

          // Add active class to clicked quarter
          quarter.classList.add("active");

          // Show corresponding tab content
          var tabId = quarter.dataset.tab;
          var tabPane = document.getElementById(tabId);
          tabPane === null || tabPane === void 0 || tabPane.classList.add("active");
        });
      });
    }
  }]);
}(_BaseModule__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/assets/js/modules/HomeActives.js":
/*!**********************************************!*\
  !*** ./src/assets/js/modules/HomeActives.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HomeActives; }
/* harmony export */ });
/* harmony import */ var _BaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModule */ "./src/assets/js/modules/BaseModule.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var HomeActives = /*#__PURE__*/function (_BaseModule) {
  function HomeActives() {
    _classCallCheck(this, HomeActives);
    return _callSuper(this, HomeActives, arguments);
  }
  _inherits(HomeActives, _BaseModule);
  return _createClass(HomeActives, [{
    key: "register",
    value: function register() {
      // console.log('actives');
    }
  }]);
}(_BaseModule__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/assets/js/modules/HomeAwards.js":
/*!*********************************************!*\
  !*** ./src/assets/js/modules/HomeAwards.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HomeAwards; }
/* harmony export */ });
/* harmony import */ var _BaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModule */ "./src/assets/js/modules/BaseModule.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var HomeAwards = /*#__PURE__*/function (_BaseModule) {
  function HomeAwards() {
    _classCallCheck(this, HomeAwards);
    return _callSuper(this, HomeAwards, arguments);
  }
  _inherits(HomeAwards, _BaseModule);
  return _createClass(HomeAwards, [{
    key: "register",
    value: function register() {
      this.initCountAnimation();
    }
  }, {
    key: "initCountAnimation",
    value: function initCountAnimation() {
      var awardsSection = document.querySelector('.iuh-awards');
      var countElements = document.querySelectorAll('.awardsCounting-content-title');
      var animated = false;

      // Animate count function
      var animateCount = function animateCount(element, target) {
        var current = 0;
        var duration = 2000; // 2 seconds
        var start = performance.now();
        var _updateCount = function updateCount(currentTime) {
          var elapsed = currentTime - start;
          var progress = Math.min(elapsed / duration, 1);

          // Easing function for smooth animation
          var easeOutQuart = 1 - Math.pow(1 - progress, 4);
          current = Math.floor(easeOutQuart * target);
          element.textContent = current.toLocaleString();
          if (progress < 1) {
            requestAnimationFrame(_updateCount);
          }
        };
        requestAnimationFrame(_updateCount);
      };

      // Create intersection observer
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !animated) {
            animated = true; // Ensure animation only runs once

            // Animate each counter
            countElements.forEach(function (element) {
              var targetNum = parseInt(element.textContent.replace(/,/g, ''), 10);
              element.textContent = '0';
              animateCount(element, targetNum);
            });
          }
        });
      }, {
        threshold: 0.3 // Trigger when 30% of element is visible
      });

      // Start observing awards section
      if (awardsSection) {
        observer.observe(awardsSection);
      }
    }
  }]);
}(_BaseModule__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/assets/js/modules/HomeCooperation.js":
/*!**************************************************!*\
  !*** ./src/assets/js/modules/HomeCooperation.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HomeCooperation; }
/* harmony export */ });
/* harmony import */ var _BaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModule */ "./src/assets/js/modules/BaseModule.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var HomeCooperation = /*#__PURE__*/function (_BaseModule) {
  function HomeCooperation() {
    _classCallCheck(this, HomeCooperation);
    return _callSuper(this, HomeCooperation, arguments);
  }
  _inherits(HomeCooperation, _BaseModule);
  return _createClass(HomeCooperation, [{
    key: "register",
    value: function register() {
      // console.log(this);
    }
  }]);
}(_BaseModule__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/assets/js/modules/HomeEvent.js":
/*!********************************************!*\
  !*** ./src/assets/js/modules/HomeEvent.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HomeEvent; }
/* harmony export */ });
/* harmony import */ var _BaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModule */ "./src/assets/js/modules/BaseModule.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination/pagination.min.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


// import Swiper and modules styles


var HomeEvent = /*#__PURE__*/function (_BaseModule) {
  function HomeEvent() {
    _classCallCheck(this, HomeEvent);
    return _callSuper(this, HomeEvent, arguments);
  }
  _inherits(HomeEvent, _BaseModule);
  return _createClass(HomeEvent, [{
    key: "register",
    value: function register() {
      swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_1__.Autoplay]);
      this.slidefull = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"](".iuh-event-slide", {
        speed: 1500,
        slidesPerView: 1.15,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets"
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        breakpoints: {
          767: {
            slidesPerView: 2.1,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
            centeredSlides: false
          }
        }
      });
    }
  }]);
}(_BaseModule__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/assets/js/modules/HomeGallery.js":
/*!**********************************************!*\
  !*** ./src/assets/js/modules/HomeGallery.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HomeGallery; }
/* harmony export */ });
/* harmony import */ var _BaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModule */ "./src/assets/js/modules/BaseModule.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

// core version + navigation, pagination modules:

// import Swiper and modules styles

var HomeGallery = /*#__PURE__*/function (_BaseModule) {
  function HomeGallery() {
    _classCallCheck(this, HomeGallery);
    return _callSuper(this, HomeGallery, arguments);
  }
  _inherits(HomeGallery, _BaseModule);
  return _createClass(HomeGallery, [{
    key: "register",
    value: function register() {
      swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_1__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_1__.EffectFade]);
      // ptck
      this.slidefull = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"](".swiper_gallery", {
        loop: true,
        speed: 1000,
        effect: "fade",
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      });
    }
  }]);
}(_BaseModule__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/assets/js/modules/HomeNewsNoti.js":
/*!***********************************************!*\
  !*** ./src/assets/js/modules/HomeNewsNoti.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HomeNewsNoti; }
/* harmony export */ });
/* harmony import */ var _BaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModule */ "./src/assets/js/modules/BaseModule.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/navigation */ "./node_modules/swiper/modules/navigation/navigation.min.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


// import Swiper and modules styles


var HomeNewsNoti = /*#__PURE__*/function (_BaseModule) {
  function HomeNewsNoti() {
    _classCallCheck(this, HomeNewsNoti);
    return _callSuper(this, HomeNewsNoti, arguments);
  }
  _inherits(HomeNewsNoti, _BaseModule);
  return _createClass(HomeNewsNoti, [{
    key: "register",
    value: function register() {
      swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_1__.Autoplay]);
      this.initHeightCalculation();
      this.slidefull = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"](".box-news-noti", {
        speed: 1500,
        navigation: {
          nextEl: ".swiper-button-custom-next",
          prevEl: ".swiper-button-custom-prev"
        },
        on: {
          init: function init() {
            var swiper = this;
            if (swiper.isBeginning) {
              document.querySelector(".swiper-button-custom-prev").classList.add("swiper-button-custom-disabled");
            }
            if (swiper.isEnd) {
              document.querySelector(".swiper-button-custom-next").classList.add("swiper-button-custom-disabled");
            }
          }
        }
      });
    }
  }, {
    key: "initHeightCalculation",
    value: function initHeightCalculation() {
      var updateHeight = function updateHeight() {
        var firstNewsItem = document.querySelector(".onGetHeight");
        var heightElement = document.querySelector(".constHeight");
        var heightNotify = document.querySelector(".onNotifyHeight");
        if (!firstNewsItem) return;
        if (window.innerWidth < 768) {
          var height = heightElement.offsetHeight - heightNotify.offsetHeight - 35;
          firstNewsItem.style.maxHeight = "".concat(height, "px");
        } else {
          var _height = heightElement.offsetHeight - heightNotify.offsetHeight - 40;
          firstNewsItem.style.maxHeight = "".concat(_height, "px");
        }
      };
      window.addEventListener("load", function () {
        updateHeight();
      });
      window.addEventListener("resize", function () {
        updateHeight();
      });
    }
  }]);
}(_BaseModule__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/assets/js/modules/HomePartner.js":
/*!**********************************************!*\
  !*** ./src/assets/js/modules/HomePartner.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HomePartner; }
/* harmony export */ });
/* harmony import */ var _BaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModule */ "./src/assets/js/modules/BaseModule.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/navigation */ "./node_modules/swiper/modules/navigation/navigation.min.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

// core version + navigation, pagination modules:

// import Swiper and modules styles


var HomePartner = /*#__PURE__*/function (_BaseModule) {
  function HomePartner() {
    _classCallCheck(this, HomePartner);
    return _callSuper(this, HomePartner, arguments);
  }
  _inherits(HomePartner, _BaseModule);
  return _createClass(HomePartner, [{
    key: "register",
    value: function register() {
      swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_1__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_1__.EffectFade, swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation]);
      // ptck
      this.slidefull = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"](".swiper_partner", {
        loop: true,
        speed: 1000,
        slidesPerView: 2,
        spaceBetween: 15,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20
          }
        },
        navigation: {
          nextEl: ".swiper-button-partner-next",
          prevEl: ".swiper-button-partner-prev"
        }
      });
    }
  }]);
}(_BaseModule__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/assets/js/modules/HomeProgram.js":
/*!**********************************************!*\
  !*** ./src/assets/js/modules/HomeProgram.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HomeProgram; }
/* harmony export */ });
/* harmony import */ var _BaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModule */ "./src/assets/js/modules/BaseModule.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var HomeProgram = /*#__PURE__*/function (_BaseModule) {
  function HomeProgram() {
    _classCallCheck(this, HomeProgram);
    return _callSuper(this, HomeProgram, arguments);
  }
  _inherits(HomeProgram, _BaseModule);
  return _createClass(HomeProgram, [{
    key: "register",
    value: function register() {
      this.onProgramHeight();
    }
  }, {
    key: "onProgramHeight",
    value: function onProgramHeight() {
      var programSet = document.querySelector(".setProgramHeight");
      var programGet = document.querySelectorAll(".getProgramHeight");
      var updateHeight = function updateHeight() {
        if (!programSet || !programGet.length) return;

        // Use requestAnimationFrame to prevent ResizeObserver loop
        requestAnimationFrame(function () {
          // Reset height first to get true heights
          programSet.style.minHeight = "auto";

          // Get max height from all getProgramHeight elements
          var maxHeight = 0;
          programGet.forEach(function (item) {
            var itemHeight = item.offsetHeight;
            maxHeight = Math.max(maxHeight, itemHeight);
          });

          // Set the max height to setProgramHeight element
          if (maxHeight > 0) {
            programSet.style.minHeight = "".concat(maxHeight, "px");
          }
        });
      };
      // Create ResizeObserver

      // eslint-disable-next-line no-unused-vars
      var resizeObserver = new ResizeObserver(function (entries) {
        // Use requestAnimationFrame to batch updates
        requestAnimationFrame(updateHeight);
      });

      // Observe each element
      programGet.forEach(function (element) {
        resizeObserver.observe(element);
      });

      // Initial update
      updateHeight();

      // Cleanup function
      return function () {
        resizeObserver.disconnect();
      };
    }
  }]);
}(_BaseModule__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/assets/js/modules/HomeResearch.js":
/*!***********************************************!*\
  !*** ./src/assets/js/modules/HomeResearch.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HomeResearch; }
/* harmony export */ });
/* harmony import */ var _BaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModule */ "./src/assets/js/modules/BaseModule.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/navigation */ "./node_modules/swiper/modules/navigation/navigation.min.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination/pagination.min.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

// core version + navigation, pagination modules:

// import Swiper and modules styles



var HomeResearch = /*#__PURE__*/function (_BaseModule) {
  function HomeResearch() {
    _classCallCheck(this, HomeResearch);
    return _callSuper(this, HomeResearch, arguments);
  }
  _inherits(HomeResearch, _BaseModule);
  return _createClass(HomeResearch, [{
    key: "register",
    value: function register() {
      swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_1__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_1__.EffectCoverflow]);
      this.slidefull = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"](".swiper_research", {
        effect: "coverflow",
        loop: true,
        grabCursor: true,
        slidesPerView: "auto",
        centeredSlides: true,
        coverflowEffect: {
          rotate: 25,
          stretch: 0,
          depth: 10,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true
        }
      });
    }
  }]);
}(_BaseModule__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/assets/js/modules/SwiperFullscreen.js":
/*!***************************************************!*\
  !*** ./src/assets/js/modules/SwiperFullscreen.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SwiperFullscreen; }
/* harmony export */ });
/* harmony import */ var _BaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModule */ "./src/assets/js/modules/BaseModule.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/navigation */ "./node_modules/swiper/modules/navigation/navigation.min.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination/pagination.min.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

// core version + navigation, pagination modules:

// import Swiper and modules styles



var SwiperFullscreen = /*#__PURE__*/function (_BaseModule) {
  function SwiperFullscreen() {
    _classCallCheck(this, SwiperFullscreen);
    return _callSuper(this, SwiperFullscreen, arguments);
  }
  _inherits(SwiperFullscreen, _BaseModule);
  return _createClass(SwiperFullscreen, [{
    key: "register",
    value: function register() {
      swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_1__.Autoplay]);
      this.slidefull = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"](".swiper_slidefull", {
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    }
  }]);
}(_BaseModule__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/assets/js/modules/examples/RefState.js":
/*!****************************************************!*\
  !*** ./src/assets/js/modules/examples/RefState.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RefState; }
/* harmony export */ });
/* harmony import */ var _BaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BaseModule */ "./src/assets/js/modules/BaseModule.js");
/* harmony import */ var _libs_ModuleState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/ModuleState */ "./src/assets/js/libs/ModuleState.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var RefState = /*#__PURE__*/function (_BaseModule) {
  function RefState() {
    _classCallCheck(this, RefState);
    return _callSuper(this, RefState, arguments);
  }
  _inherits(RefState, _BaseModule);
  return _createClass(RefState, [{
    key: "register",
    value: function register() {
      console.log('RefState! ', this);
      //
      var myData = (0,_libs_ModuleState__WEBPACK_IMPORTED_MODULE_1__["default"])('myData', 'inited value');
      console.log(myData.get);
      myData.onChange(console.log);
      myData.set('changed value');
    }
  }]);
}(_BaseModule__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/assets/js/modules sync recursive ^\\.\\/.*$":
/*!**********************************************!*\
  !*** ./src/assets/js/modules/ sync ^\.\/.*$ ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./BaseModule": "./src/assets/js/modules/BaseModule.js",
	"./BaseModule.js": "./src/assets/js/modules/BaseModule.js",
	"./ChildRelatedNews": "./src/assets/js/modules/ChildRelatedNews.js",
	"./ChildRelatedNews.js": "./src/assets/js/modules/ChildRelatedNews.js",
	"./ChildResearch": "./src/assets/js/modules/ChildResearch.js",
	"./ChildResearch.js": "./src/assets/js/modules/ChildResearch.js",
	"./Header": "./src/assets/js/modules/Header.js",
	"./Header.js": "./src/assets/js/modules/Header.js",
	"./HelloModule": "./src/assets/js/modules/HelloModule.js",
	"./HelloModule.js": "./src/assets/js/modules/HelloModule.js",
	"./HomeAbout": "./src/assets/js/modules/HomeAbout.js",
	"./HomeAbout.js": "./src/assets/js/modules/HomeAbout.js",
	"./HomeAccredited": "./src/assets/js/modules/HomeAccredited.js",
	"./HomeAccredited.js": "./src/assets/js/modules/HomeAccredited.js",
	"./HomeActives": "./src/assets/js/modules/HomeActives.js",
	"./HomeActives.js": "./src/assets/js/modules/HomeActives.js",
	"./HomeAwards": "./src/assets/js/modules/HomeAwards.js",
	"./HomeAwards.js": "./src/assets/js/modules/HomeAwards.js",
	"./HomeCooperation": "./src/assets/js/modules/HomeCooperation.js",
	"./HomeCooperation.js": "./src/assets/js/modules/HomeCooperation.js",
	"./HomeEvent": "./src/assets/js/modules/HomeEvent.js",
	"./HomeEvent.js": "./src/assets/js/modules/HomeEvent.js",
	"./HomeGallery": "./src/assets/js/modules/HomeGallery.js",
	"./HomeGallery.js": "./src/assets/js/modules/HomeGallery.js",
	"./HomeNewsNoti": "./src/assets/js/modules/HomeNewsNoti.js",
	"./HomeNewsNoti.js": "./src/assets/js/modules/HomeNewsNoti.js",
	"./HomePartner": "./src/assets/js/modules/HomePartner.js",
	"./HomePartner.js": "./src/assets/js/modules/HomePartner.js",
	"./HomeProgram": "./src/assets/js/modules/HomeProgram.js",
	"./HomeProgram.js": "./src/assets/js/modules/HomeProgram.js",
	"./HomeResearch": "./src/assets/js/modules/HomeResearch.js",
	"./HomeResearch.js": "./src/assets/js/modules/HomeResearch.js",
	"./SwiperFullscreen": "./src/assets/js/modules/SwiperFullscreen.js",
	"./SwiperFullscreen.js": "./src/assets/js/modules/SwiperFullscreen.js",
	"./examples/RefState": "./src/assets/js/modules/examples/RefState.js",
	"./examples/RefState.js": "./src/assets/js/modules/examples/RefState.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/js/modules sync recursive ^\\.\\/.*$";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfe_starter_kit"] = self["webpackChunkfe_starter_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/assets/js/app.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.js.map