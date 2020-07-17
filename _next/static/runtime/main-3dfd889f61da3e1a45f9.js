(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "7W2i":
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__("SksO");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "BMP1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var next = _interopRequireWildcard(__webpack_require__("IKlv"));

window.next = next;
(0, next["default"])()["catch"](function (err) {
  console.error("".concat(err.message, "\n").concat(err.stack));
});

/***/ }),

/***/ "DqTX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = initHeadManager;
var DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv'
};

function reactElementToDOM(_ref) {
  var type = _ref.type,
      props = _ref.props;
  var el = document.createElement(type);

  for (var p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    var attr = DOMAttributeNames[p] || p.toLowerCase();
    el.setAttribute(attr, props[p]);
  }

  var children = props.children,
      dangerouslySetInnerHTML = props.dangerouslySetInnerHTML;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : children.join('');
  }

  return el;
}

function updateElements(type, components) {
  var headEl = document.getElementsByTagName('head')[0];
  var headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (false) {}

  var headCount = Number(headCountEl.content);
  var oldTags = [];

  for (var i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  var newTags = components.map(reactElementToDOM).filter(function (newTag) {
    for (var k = 0, len = oldTags.length; k < len; k++) {
      var oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(function (t) {
    return t.parentNode.removeChild(t);
  });
  newTags.forEach(function (t) {
    return headEl.insertBefore(t, headCountEl);
  });
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  var updatePromise = null;
  return function (head) {
    var promise = updatePromise = Promise.resolve().then(function () {
      if (promise !== updatePromise) return;
      updatePromise = null;
      var tags = {};
      head.forEach(function (h) {
        var components = tags[h.type] || [];
        components.push(h);
        tags[h.type] = components;
      });
      var titleComponent = tags.title ? tags.title[0] : null;
      var title = '';

      if (titleComponent) {
        var children = titleComponent.props.children;
        title = typeof children === 'string' ? children : children.join('');
      }

      if (title !== document.title) document.title = title;
      ['meta', 'base', 'link', 'style', 'script'].forEach(function (type) {
        updateElements(type, tags[type] || []);
      });
    });
  };
}

/***/ }),

/***/ "FYa8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.HeadManagerContext = void 0;

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var HeadManagerContext = _react["default"].createContext(null);

exports.HeadManagerContext = HeadManagerContext;

if (false) {}

/***/ }),

/***/ "IKlv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__("o0o1");

var _asyncToGenerator = __webpack_require__("yXPU");

var _classCallCheck = __webpack_require__("lwsE");

var _createClass = __webpack_require__("W8MJ");

var _inherits = __webpack_require__("7W2i");

var _possibleConstructorReturn = __webpack_require__("a1gu");

var _getPrototypeOf = __webpack_require__("Nsbk");

var _slicedToArray = __webpack_require__("J4zp");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireWildcard3 = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.render = render;
exports.renderError = renderError;
exports["default"] = exports.emitter = exports.router = exports.version = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _interopRequireWildcard2 = _interopRequireDefault(__webpack_require__("284h"));

var _router = __webpack_require__("nOHt");

var _querystring = __webpack_require__("s4NR");

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _reactDom = _interopRequireDefault(__webpack_require__("i8i4"));

var _headManagerContext = __webpack_require__("FYa8");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _routerContext = __webpack_require__("qOIg");

var _isDynamic = __webpack_require__("/jkW");

var envConfig = _interopRequireWildcard3(__webpack_require__("yLiY"));

var _utils = __webpack_require__("g/15");

var _headManager = _interopRequireDefault(__webpack_require__("DqTX"));

var _pageLoader = _interopRequireDefault(__webpack_require__("zmvN"));

var _performanceRelayer = _interopRequireDefault(__webpack_require__("bGXG"));
/* global location */
/// <reference types="react-dom/experimental" />


if (!('finally' in Promise.prototype)) {
  // eslint-disable-next-line no-extend-native
  Promise.prototype["finally"] = __webpack_require__("Z577");
}

var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
window.__NEXT_DATA__ = data;
var version = "9.4.4";
exports.version = version;
var props = data.props,
    err = data.err,
    page = data.page,
    query = data.query,
    buildId = data.buildId,
    assetPrefix = data.assetPrefix,
    runtimeConfig = data.runtimeConfig,
    dynamicIds = data.dynamicIds,
    isFallback = data.isFallback;
var prefix = assetPrefix || ''; // With dynamic assetPrefix it's no longer possible to set assetPrefix at the build time
// So, this is how we do it in the client side at runtime

__webpack_require__.p = "".concat(prefix, "/_next/"); //eslint-disable-line
// Initialize next/config with the environment configuration

envConfig.setConfig({
  serverRuntimeConfig: {},
  publicRuntimeConfig: runtimeConfig || {}
});
var asPath = (0, _utils.getURL)();
var pageLoader = new _pageLoader["default"](buildId, prefix);

var register = function register(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      r = _ref2[0],
      f = _ref2[1];

  return pageLoader.registerPage(r, f);
};

if (window.__NEXT_P) {
  // Defer page registration for another tick. This will increase the overall
  // latency in hydrating the page, but reduce the total blocking time.
  window.__NEXT_P.map(function (p) {
    return setTimeout(function () {
      return register(p);
    }, 0);
  });
}

window.__NEXT_P = [];
window.__NEXT_P.push = register;
var updateHead = (0, _headManager["default"])();
var appElement = document.getElementById('__next');
var lastAppProps;

var _lastRenderReject;

var webpackHMR;
var router;
exports.router = router;
var Component;
var App, onPerfEntry;

var Container = /*#__PURE__*/function (_react$default$Compon) {
  _inherits(Container, _react$default$Compon);

  var _super = _createSuper(Container);

  function Container() {
    _classCallCheck(this, Container);

    return _super.apply(this, arguments);
  }

  _createClass(Container, [{
    key: "componentDidCatch",
    value: function componentDidCatch(err, info) {
      this.props.fn(err, info);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash();

      if (false) {} // We need to replace the router state if:
      // - the page was (auto) exported and has a query string or search (hash)
      // - it was auto exported and is a dynamic route (to provide params)
      // - if it is a client-side skeleton (fallback render)


      if (router.isSsr && (isFallback || data.nextExport && ((0, _isDynamic.isDynamicRoute)(router.pathname) || location.search) || props && props.__N_SSG && location.search)) {
        // update query on mount for exported pages
        router.replace(router.pathname + '?' + (0, _querystring.stringify)((0, _extends2["default"])((0, _extends2["default"])({}, router.query), (0, _querystring.parse)(location.search.substr(1)))), asPath, {
          // WARNING: `_h` is an internal option for handing Next.js
          // client-side hydration. Your app should _never_ use this property.
          // It may change at any time without notice.
          _h: 1,
          // Fallback pages must trigger the data fetch, so the transition is
          // not shallow.
          // Other pages (strictly updating query) happens shallowly, as data
          // requirements would already be present.
          shallow: !isFallback
        });
      }

      if (undefined) {
        window.__NEXT_HYDRATED = true;

        if (window.__NEXT_HYDRATED_CB) {
          window.__NEXT_HYDRATED_CB();
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var _location = location,
          hash = _location.hash;
      hash = hash && hash.substring(1);
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      if (true) {
        return this.props.children;
      }

      if (false) { var _require, ReactDevOverlay; }
    }
  }]);

  return Container;
}(_react["default"].Component);

var emitter = (0, _mitt["default"])();
exports.emitter = emitter;

var _default = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var _ref4,
        passedWebpackHMR,
        _yield$pageLoader$loa,
        app,
        mod,
        initialErr,
        _yield$pageLoader$loa2,
        _require2,
        isValidElementType,
        _require3,
        getNodeError,
        renderCtx,
        _args = arguments;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref4 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, passedWebpackHMR = _ref4.webpackHMR;

            // This makes sure this specific lines are removed in production
            if (false) {}

            _context.next = 4;
            return pageLoader.loadPageScript('/_app');

          case 4:
            _yield$pageLoader$loa = _context.sent;
            app = _yield$pageLoader$loa.page;
            mod = _yield$pageLoader$loa.mod;
            App = app;

            if (mod && mod.reportWebVitals) {
              onPerfEntry = function onPerfEntry(_ref5) {
                var id = _ref5.id,
                    name = _ref5.name,
                    startTime = _ref5.startTime,
                    value = _ref5.value,
                    duration = _ref5.duration,
                    entryType = _ref5.entryType,
                    entries = _ref5.entries;
                // Combines timestamp with random number for unique ID
                var uniqueID = "".concat(Date.now(), "-").concat(Math.floor(Math.random() * (9e12 - 1)) + 1e12);
                var perfStartEntry;

                if (entries && entries.length) {
                  perfStartEntry = entries[0].startTime;
                }

                mod.reportWebVitals({
                  id: id || uniqueID,
                  name: name,
                  startTime: startTime || perfStartEntry,
                  value: value == null ? duration : value,
                  label: entryType === 'mark' || entryType === 'measure' ? 'custom' : 'web-vital'
                });
              };
            }

            initialErr = err;
            _context.prev = 10;
            ;
            _context.next = 14;
            return pageLoader.loadPage(page);

          case 14:
            _yield$pageLoader$loa2 = _context.sent;
            Component = _yield$pageLoader$loa2.page;

            if (true) {
              _context.next = 20;
              break;
            }

            _require2 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-is'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), isValidElementType = _require2.isValidElementType;

            if (isValidElementType(Component)) {
              _context.next = 20;
              break;
            }

            throw new Error("The default export is not a React Component in page: \"".concat(page, "\""));

          case 20:
            _context.next = 25;
            break;

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](10);
            // This catches errors like throwing in the top level of a module
            initialErr = _context.t0;

          case 25:
            if (false) {}

            if (!window.__NEXT_PRELOADREADY) {
              _context.next = 29;
              break;
            }

            _context.next = 29;
            return window.__NEXT_PRELOADREADY(dynamicIds);

          case 29:
            exports.router = router = (0, _router.createRouter)(page, query, asPath, {
              initialProps: props,
              pageLoader: pageLoader,
              App: App,
              Component: Component,
              wrapApp: wrapApp,
              err: initialErr,
              isFallback: isFallback,
              subscription: function subscription(_ref6, App) {
                var Component = _ref6.Component,
                    props = _ref6.props,
                    err = _ref6.err;
                return render({
                  App: App,
                  Component: Component,
                  props: props,
                  err: err
                });
              }
            }); // call init-client middleware

            if (false) {}

            renderCtx = {
              App: App,
              Component: Component,
              props: props,
              err: initialErr
            };

            if (false) {}

            render(renderCtx);
            return _context.abrupt("return", emitter);

          case 35:
            if (true) {
              _context.next = 37;
              break;
            }

            return _context.abrupt("return", {
              emitter: emitter,
              render: render,
              renderCtx: renderCtx
            });

          case 37:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[10, 22]]);
  }));

  return function _default() {
    return _ref3.apply(this, arguments);
  };
}();

exports["default"] = _default;

function render(_x) {
  return _render.apply(this, arguments);
} // This method handles all runtime and debug errors.
// 404 and 500 errors are special kind of errors
// and they are still handle via the main render method.


function _render() {
  _render = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(props) {
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!props.err) {
              _context2.next = 4;
              break;
            }

            _context2.next = 3;
            return renderError(props);

          case 3:
            return _context2.abrupt("return");

          case 4:
            _context2.prev = 4;
            _context2.next = 7;
            return doRender(props);

          case 7:
            _context2.next = 14;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](4);

            if (false) {}

            _context2.next = 14;
            return renderError((0, _extends2["default"])((0, _extends2["default"])({}, props), {}, {
              err: _context2.t0
            }));

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 9]]);
  }));
  return _render.apply(this, arguments);
}

function renderError(props) {
  var App = props.App,
      err = props.err; // In development runtime errors are caught by our overlay
  // In production we catch runtime errors using componentDidCatch which will trigger renderError

  if (false) {}

  if (false) {} // Make sure we log the error to the console, otherwise users can't track down issues.


  console.error(err);
  return pageLoader.loadPage('/_error').then(function (_ref7) {
    var ErrorComponent = _ref7.page;
    // In production we do a normal render with the `ErrorComponent` as component.
    // If we've gotten here upon initial render, we can use the props from the server.
    // Otherwise, we need to call `getInitialProps` on `App` before mounting.
    var AppTree = wrapApp(App);
    var appCtx = {
      Component: ErrorComponent,
      AppTree: AppTree,
      router: router,
      ctx: {
        err: err,
        pathname: page,
        query: query,
        asPath: asPath,
        AppTree: AppTree
      }
    };
    return Promise.resolve(props.props ? props.props : (0, _utils.loadGetInitialProps)(App, appCtx)).then(function (initProps) {
      return doRender((0, _extends2["default"])((0, _extends2["default"])({}, props), {}, {
        err: err,
        Component: ErrorComponent,
        props: initProps
      }));
    });
  });
} // If hydrate does not exist, eg in preact.


var isInitialRender = typeof _reactDom["default"].hydrate === 'function';
var reactRoot = null;

function renderReactElement(reactEl, domEl) {
  if (false) { var opts; } else {
    // mark start of hydrate/render
    if (_utils.ST) {
      performance.mark('beforeRender');
    } // The check for `.hydrate` is there to support React alternatives like preact


    if (isInitialRender) {
      _reactDom["default"].hydrate(reactEl, domEl, markHydrateComplete);

      isInitialRender = false;

      if (onPerfEntry && _utils.ST) {
        (0, _performanceRelayer["default"])(onPerfEntry);
      }
    } else {
      _reactDom["default"].render(reactEl, domEl, markRenderComplete);
    }
  }
}

function markHydrateComplete() {
  if (!_utils.ST) return;
  performance.mark('afterHydrate'); // mark end of hydration

  performance.measure('Next.js-before-hydration', 'navigationStart', 'beforeRender');
  performance.measure('Next.js-hydration', 'beforeRender', 'afterHydrate');

  if (onPerfEntry) {
    performance.getEntriesByName('Next.js-hydration').forEach(onPerfEntry);
  }

  clearMarks();
}

function markRenderComplete() {
  if (!_utils.ST) return;
  performance.mark('afterRender'); // mark end of render

  var navStartEntries = performance.getEntriesByName('routeChange', 'mark');

  if (!navStartEntries.length) {
    return;
  }

  performance.measure('Next.js-route-change-to-render', navStartEntries[0].name, 'beforeRender');
  performance.measure('Next.js-render', 'beforeRender', 'afterRender');

  if (onPerfEntry) {
    performance.getEntriesByName('Next.js-render').forEach(onPerfEntry);
    performance.getEntriesByName('Next.js-route-change-to-render').forEach(onPerfEntry);
  }

  clearMarks();
  ['Next.js-route-change-to-render', 'Next.js-render'].forEach(function (measure) {
    return performance.clearMeasures(measure);
  });
}

function clearMarks() {
  ;
  ['beforeRender', 'afterHydrate', 'afterRender', 'routeChange'].forEach(function (mark) {
    return performance.clearMarks(mark);
  });
}

function AppContainer(_ref8) {
  var children = _ref8.children;
  return /*#__PURE__*/_react["default"].createElement(Container, {
    fn: function fn(error) {
      return renderError({
        App: App,
        err: error
      })["catch"](function (err) {
        return console.error('Error rendering page: ', err);
      });
    }
  }, /*#__PURE__*/_react["default"].createElement(_routerContext.RouterContext.Provider, {
    value: (0, _router.makePublicRouterInstance)(router)
  }, /*#__PURE__*/_react["default"].createElement(_headManagerContext.HeadManagerContext.Provider, {
    value: updateHead
  }, children)));
}

var wrapApp = function wrapApp(App) {
  return function (props) {
    var appProps = (0, _extends2["default"])((0, _extends2["default"])({}, props), {}, {
      Component: Component,
      err: err,
      router: router
    });
    return /*#__PURE__*/_react["default"].createElement(AppContainer, null, /*#__PURE__*/_react["default"].createElement(App, appProps));
  };
};

function doRender(_x2) {
  return _doRender.apply(this, arguments);
}

function _doRender() {
  _doRender = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(_ref9) {
    var App, Component, props, err, appProps, resolvePromise, renderPromise, elem;
    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            App = _ref9.App, Component = _ref9.Component, props = _ref9.props, err = _ref9.err;
            Component = Component || lastAppProps.Component;
            props = props || lastAppProps.props;
            appProps = (0, _extends2["default"])((0, _extends2["default"])({}, props), {}, {
              Component: Component,
              err: err,
              router: router
            }); // lastAppProps has to be set before ReactDom.render to account for ReactDom throwing an error.

            lastAppProps = appProps;
            renderPromise = new Promise(function (resolve, reject) {
              if (_lastRenderReject) {
                _lastRenderReject();
              }

              resolvePromise = function resolvePromise() {
                _lastRenderReject = null;
                resolve();
              };

              _lastRenderReject = function lastRenderReject() {
                _lastRenderReject = null;
                reject();
              };
            });
            elem = /*#__PURE__*/_react["default"].createElement(Root, {
              callback: resolvePromise
            }, /*#__PURE__*/_react["default"].createElement(AppContainer, null, /*#__PURE__*/_react["default"].createElement(App, appProps))); // We catch runtime errors using componentDidCatch which will trigger renderError

            renderReactElement( false ? /*#__PURE__*/undefined : elem, appElement);
            _context3.next = 10;
            return renderPromise;

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _doRender.apply(this, arguments);
}

function Root(_ref10) {
  var callback = _ref10.callback,
      children = _ref10.children;

  // We use `useLayoutEffect` to guarantee the callback is executed
  // as soon as React flushes the update.
  _react["default"].useLayoutEffect(function () {
    return callback();
  }, [callback]);

  return children;
}

/***/ }),

/***/ "Nsbk":
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "PJYZ":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "Z577":
/***/ (function(module, exports) {

Promise.prototype.finally=function(n){if("function"!=typeof n)return this.then(n,n);var t=this.constructor||Promise;return this.then(function(r){return t.resolve(n()).then(function(){return r})},function(r){return t.resolve(n()).then(function(){throw r})})};

/***/ }),

/***/ "a1gu":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

var assertThisInitialized = __webpack_require__("PJYZ");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "bGXG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _webVitals = __webpack_require__("w6Sm");

var _default = function _default(onPerfEntry) {
  (0, _webVitals.getCLS)(onPerfEntry);
  (0, _webVitals.getFID)(onPerfEntry);
  (0, _webVitals.getFCP)(onPerfEntry);
  (0, _webVitals.getLCP)(onPerfEntry);
  (0, _webVitals.getTTFB)(onPerfEntry);
};

exports["default"] = _default;

/***/ }),

/***/ "pVnL":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "w6Sm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCLS", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFCP", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFID", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLCP", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTTFB", function() { return h; });
var t,n,e=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},i=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{name:t,value:n,delta:0,entries:[],id:e(),isFinal:!1}},a=function(t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var e=new PerformanceObserver((function(t){return t.getEntries().map(n)}));return e.observe({type:t,buffered:!0}),e}}catch(t){}},r=!1,o=!1,s=function(t){r=!t.persisted},u=function(){addEventListener("pagehide",s),addEventListener("unload",(function(){}))},c=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];o||(u(),o=!0),addEventListener("visibilitychange",(function(n){var e=n.timeStamp;"hidden"===document.visibilityState&&t({timeStamp:e,isUnloading:r})}),{capture:!0,once:n})},l=function(t,n,e,i){var a;return function(){e&&n.isFinal&&e.disconnect(),n.value>=0&&(i||n.isFinal||"hidden"===document.visibilityState)&&(n.delta=n.value-(a||0),(n.delta||n.isFinal||void 0===a)&&(t(n),a=n.value))}},p=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=i("CLS",0),r=function(t){t.hadRecentInput||(e.value+=t.value,e.entries.push(t),s())},o=a("layout-shift",r),s=l(t,e,o,n);c((function(t){var n=t.isUnloading;o&&o.takeRecords().map(r),n&&(e.isFinal=!0),s()}))},d=function(){return void 0===t&&(t="hidden"===document.visibilityState?0:1/0,c((function(n){var e=n.timeStamp;return t=e}),!0)),{get timeStamp(){return t}}},m=function(t){var n=i("FCP"),e=d(),r=a("paint",(function(t){"first-contentful-paint"===t.name&&t.startTime<e.timeStamp&&(n.value=t.startTime,n.isFinal=!0,n.entries.push(t),o())})),o=l(t,n,r)},v=function(t){var n=i("FID"),e=d(),r=function(t){t.startTime<e.timeStamp&&(n.value=t.processingStart-t.startTime,n.entries.push(t),n.isFinal=!0,s())},o=a("first-input",r),s=l(t,n,o);c((function(){o&&(o.takeRecords().map(r),o.disconnect())}),!0),o||window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(t,i){i.timeStamp<e.timeStamp&&(n.value=t,n.isFinal=!0,n.entries=[{entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+t}],s())}))},f=function(){return n||(n=new Promise((function(t){return["scroll","keydown","pointerdown"].map((function(n){addEventListener(n,t,{once:!0,passive:!0,capture:!0})}))}))),n},g=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=i("LCP"),r=d(),o=function(t){var n=t.startTime;n<r.timeStamp?(e.value=n,e.entries.push(t)):e.isFinal=!0,u()},s=a("largest-contentful-paint",o),u=l(t,e,s,n),p=function(){e.isFinal||(s&&s.takeRecords().map(o),e.isFinal=!0,u())};f().then(p),c(p,!0)},h=function(t){var n,e=i("TTFB");n=function(){try{var n=performance.getEntriesByType("navigation")[0]||function(){var t=performance.timing,n={entryType:"navigation",startTime:0};for(var e in t)"navigationStart"!==e&&"toJSON"!==e&&(n[e]=Math.max(t[e]-t.navigationStart,0));return n}();e.value=e.delta=n.responseStart,e.entries=[n],e.isFinal=!0,t(e)}catch(t){}},"complete"===document.readyState?setTimeout(n,0):addEventListener("pageshow",n)};


/***/ }),

/***/ "yLiY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.setConfig = setConfig;
exports["default"] = void 0;
var runtimeConfig;

var _default = function _default() {
  return runtimeConfig;
};

exports["default"] = _default;

function setConfig(configValue) {
  runtimeConfig = configValue;
}

/***/ }),

/***/ "zmvN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__("lwsE");

var _createClass = __webpack_require__("W8MJ");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports["default"] = void 0;

var _url = __webpack_require__("QmWs");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _router = __webpack_require__("elyg");

function hasRel(rel, link) {
  try {
    link = document.createElement('link');
    return link.relList.supports(rel);
  } catch (_unused) {}
}

var relPrefetch = hasRel('preload') && !hasRel('prefetch') ? // https://caniuse.com/#feat=link-rel-preload
// macOS and iOS (Safari does not support prefetch)
'preload' : // https://caniuse.com/#feat=link-rel-prefetch
// IE 11, Edge 12+, nearly all evergreen
'prefetch';
var hasNoModule = ('noModule' in document.createElement('script'));
/** @param {string} route */

function normalizeRoute(route) {
  if (route[0] !== '/') {
    throw new Error("Route name should start with a \"/\", got \"".concat(route, "\""));
  }

  route = route.replace(/\/index$/, '/');
  if (route === '/') return route;
  return route.replace(/\/$/, '');
}

function appendLink(href, rel, as) {
  return new Promise(function (res, rej, link) {
    link = document.createElement('link');
    link.crossOrigin = undefined;
    link.href = href;
    link.rel = rel;
    if (as) link.as = as;
    link.onload = res;
    link.onerror = rej;
    document.head.appendChild(link);
  });
}

var PageLoader = /*#__PURE__*/function () {
  function PageLoader(buildId, assetPrefix) {
    _classCallCheck(this, PageLoader);

    this.buildId = buildId;
    this.assetPrefix = assetPrefix;
    this.pageCache = {};
    this.pageRegisterEvents = (0, _mitt["default"])();
    this.loadingRoutes = {};

    if (true) {
      this.promisedBuildManifest = new Promise(function (resolve) {
        if (window.__BUILD_MANIFEST) {
          resolve(window.__BUILD_MANIFEST);
        } else {
          window.__BUILD_MANIFEST_CB = function () {
            resolve(window.__BUILD_MANIFEST);
          };
        }
      });
    }
    /** @type {Promise<Set<string>>} */


    this.promisedSsgManifest = new Promise(function (resolve) {
      if (window.__SSG_MANIFEST) {
        resolve(window.__SSG_MANIFEST);
      } else {
        window.__SSG_MANIFEST_CB = function () {
          resolve(window.__SSG_MANIFEST);
        };
      }
    });
  } // Returns a promise for the dependencies for a particular route


  _createClass(PageLoader, [{
    key: "getDependencies",
    value: function getDependencies(route) {
      var _this = this;

      return this.promisedBuildManifest.then(function (man) {
        return man[route] && man[route].map(function (url) {
          return "".concat(_this.assetPrefix, "/_next/").concat(encodeURI(url));
        }) || [];
      });
    }
    /**
    * @param {string} href the route href (file-system path)
    * @param {string} asPath the URL as shown in browser (virtual path); used for dynamic routes
    */

  }, {
    key: "getDataHref",
    value: function getDataHref(href, asPath) {
      var _this2 = this;

      var getHrefForSlug =
      /** @type string */
      function getHrefForSlug(path) {
        path = (0, _router.delBasePath)(path);
        return "".concat(_this2.assetPrefix, "/_next/data/").concat(_this2.buildId).concat(path === '/' ? '/index' : path, ".json");
      };

      var _ref = (0, _url.parse)(href, true),
          hrefPathname = _ref.pathname,
          query = _ref.query;

      var _ref2 = (0, _url.parse)(asPath),
          asPathname = _ref2.pathname;

      var route = normalizeRoute(hrefPathname);
      var isDynamic = (0, _isDynamic.isDynamicRoute)(route),
          interpolatedRoute;

      if (isDynamic) {
        var dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
        var dynamicGroups = dynamicRegex.groups;
        var dynamicMatches = // Try to match the dynamic route against the asPath
        (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) || // Fall back to reading the values from the href
        // TODO: should this take priority; also need to change in the router.
        query;
        interpolatedRoute = route;

        if (!Object.keys(dynamicGroups).every(function (param) {
          var value = dynamicMatches[param];
          var repeat = dynamicGroups[param].repeat; // support single-level catch-all
          // TODO: more robust handling for user-error (passing `/`)

          if (repeat && !Array.isArray(value)) value = [value];
          return param in dynamicMatches && ( // Interpolate group into data URL if present
          interpolatedRoute = interpolatedRoute.replace("[".concat(repeat ? '...' : '').concat(param, "]"), repeat ? value.map(encodeURIComponent).join('/') : encodeURIComponent(value)));
        })) {
          interpolatedRoute = ''; // did not satisfy all requirements
          // n.b. We ignore this error because we handle warning for this case in
          // development in the `<Link>` component directly.
        }
      }

      return isDynamic ? interpolatedRoute && getHrefForSlug(interpolatedRoute) : getHrefForSlug(route);
    }
    /**
    * @param {string} href the route href (file-system path)
    * @param {string} asPath the URL as shown in browser (virtual path); used for dynamic routes
    */

  }, {
    key: "prefetchData",
    value: function prefetchData(href, asPath) {
      var _this3 = this;

      var _ref3 = (0, _url.parse)(href, true),
          hrefPathname = _ref3.pathname;

      var route = normalizeRoute(hrefPathname);
      return this.promisedSsgManifest.then(function (s, _dataHref) {
        return (// Check if the route requires a data file
          s.has(route) && ( // Try to generate data href, noop when falsy
          _dataHref = _this3.getDataHref(href, asPath)) && // noop when data has already been prefetched (dedupe)
          !document.querySelector("link[rel=\"".concat(relPrefetch, "\"][href^=\"").concat(_dataHref, "\"]")) && // Inject the `<link rel=prefetch>` tag for above computed `href`.
          appendLink(_dataHref, relPrefetch, 'fetch')
        );
      });
    }
  }, {
    key: "loadPage",
    value: function loadPage(route) {
      return this.loadPageScript(route);
    }
  }, {
    key: "loadPageScript",
    value: function loadPageScript(route) {
      var _this4 = this;

      route = normalizeRoute(route);
      return new Promise(function (resolve, reject) {
        var fire = function fire(_ref4) {
          var error = _ref4.error,
              page = _ref4.page,
              mod = _ref4.mod;

          _this4.pageRegisterEvents.off(route, fire);

          delete _this4.loadingRoutes[route];

          if (error) {
            reject(error);
          } else {
            resolve({
              page: page,
              mod: mod
            });
          }
        }; // If there's a cached version of the page, let's use it.


        var cachedPage = _this4.pageCache[route];

        if (cachedPage) {
          var error = cachedPage.error,
              page = cachedPage.page,
              mod = cachedPage.mod;
          error ? reject(error) : resolve({
            page: page,
            mod: mod
          });
          return;
        } // Register a listener to get the page


        _this4.pageRegisterEvents.on(route, fire); // If the page is loading via SSR, we need to wait for it
        // rather downloading it again.


        if (document.querySelector("script[data-next-page=\"".concat(route, "\"]"))) {
          return;
        }

        if (!_this4.loadingRoutes[route]) {
          _this4.loadingRoutes[route] = true;

          if (true) {
            _this4.getDependencies(route).then(function (deps) {
              deps.forEach(function (d) {
                if (/\.js$/.test(d) && !document.querySelector("script[src^=\"".concat(d, "\"]"))) {
                  _this4.loadScript(d, route, false);
                }

                if (/\.css$/.test(d) && !document.querySelector("link[rel=stylesheet][href^=\"".concat(d, "\"]"))) {
                  appendLink(d, 'stylesheet')["catch"](function () {// FIXME: handle failure
                    // Right now, this is needed to prevent an unhandled rejection.
                  });
                }
              });

              _this4.loadRoute(route);
            });
          } else {}
        }
      });
    }
  }, {
    key: "loadRoute",
    value: function loadRoute(route) {
      route = normalizeRoute(route);
      var scriptRoute = route === '/' ? '/index.js' : "".concat(route, ".js");
      var url = "".concat(this.assetPrefix, "/_next/static/").concat(encodeURIComponent(this.buildId), "/pages").concat(encodeURI(scriptRoute));
      this.loadScript(url, route, true);
    }
  }, {
    key: "loadScript",
    value: function loadScript(url, route, isPage) {
      var _this5 = this;

      var script = document.createElement('script');

      if (false) {}

      script.crossOrigin = undefined;
      script.src = url;

      script.onerror = function () {
        var error = new Error("Error loading script ".concat(url));
        error.code = 'PAGE_LOAD_ERROR';

        _this5.pageRegisterEvents.emit(route, {
          error: error
        });
      };

      document.body.appendChild(script);
    } // This method if called by the route code.

  }, {
    key: "registerPage",
    value: function registerPage(route, regFn) {
      var _this6 = this;

      var register = function register() {
        try {
          var mod = regFn();
          var pageData = {
            page: mod["default"] || mod,
            mod: mod
          };
          _this6.pageCache[route] = pageData;

          _this6.pageRegisterEvents.emit(route, pageData);
        } catch (error) {
          _this6.pageCache[route] = {
            error: error
          };

          _this6.pageRegisterEvents.emit(route, {
            error: error
          });
        }
      };

      if (false) { var check; }

      register();
    }
    /**
    * @param {string} route
    * @param {boolean} [isDependency]
    */

  }, {
    key: "prefetch",
    value: function prefetch(route, isDependency) {
      var _this7 = this;

      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      var cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }
      /** @type {string} */


      var url;

      if (isDependency) {
        url = route;
      } else {
        route = normalizeRoute(route);
        var scriptRoute = "".concat(route === '/' ? '/index' : route, ".js");

        if (false) {}

        url = "".concat(this.assetPrefix, "/_next/static/").concat(encodeURIComponent(this.buildId), "/pages").concat(encodeURI(scriptRoute));
      }

      return Promise.all(document.querySelector("link[rel=\"".concat(relPrefetch, "\"][href^=\"").concat(url, "\"], script[data-next-page=\"").concat(route, "\"]")) ? [] : [appendLink(url, relPrefetch, url.match(/\.css$/) ? 'style' : 'script'),  true && !isDependency && this.getDependencies(route).then(function (urls) {
        return Promise.all(urls.map(function (url) {
          return _this7.prefetch(url, true);
        }));
      })]).then( // do not return any data
      function () {}, // swallow prefetch errors
      function () {});
    }
  }]);

  return PageLoader;
}();

exports["default"] = PageLoader;

/***/ })

},[["BMP1",0,1,2]]]);