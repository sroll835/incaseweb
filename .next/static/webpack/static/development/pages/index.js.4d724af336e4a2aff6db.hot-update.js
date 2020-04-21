webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/*! exports provided: auth, withAuthSync, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAuthSync", function() { return withAuthSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/index.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_11__);









var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var auth = function auth(ctx) {
  var _nextCookie = next_cookies__WEBPACK_IMPORTED_MODULE_10___default()(ctx),
      token = _nextCookie.token;

  console.log("token" + token);

  if (ctx.req && !token) {
    ctx.res.writeHead(302, {
      Location: "/login"
    });
    ctx.res.end();
    console.log("Esrribi algo");
    return;
  }

  if (!token) {
    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/login");
  }

  return token;
}; // Gets the display name of a JSX component for dev tools

var getDisplayName = function getDisplayName(Component) {
  return Component.displayName || Component.name || "Component";
};

var withAuthSync = function withAuthSync(WrappedComponent) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_class, _Component);

    var _super = _createSuper(_class);

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_class, null, [{
      key: "getInitialProps",
      value: function getInitialProps(ctx) {
        var token, componentProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                token = auth(ctx);
                _context.t0 = WrappedComponent.getInitialProps;

                if (!_context.t0) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(WrappedComponent.getInitialProps(ctx));

              case 5:
                _context.t0 = _context.sent;

              case 6:
                componentProps = _context.t0;
                return _context.abrupt("return", _objectSpread({}, componentProps, {
                  token: token
                }));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, null, null, null, Promise);
      } // New: We bind our methods

    }]);

    function _class(props) {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _class);

      _this = _super.call(this, props);
      _this.syncLogout = _this.syncLogout.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
      return _this;
    } // New: Add event listener when a restricted Page Component mounts


    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        window.addEventListener("storage", this.syncLogout);
      } // New: Remove event listener when the Component unmount and
      // delete all data

    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener("storage", this.syncLogout);
        window.localStorage.removeItem("logout");
      } // New: Method to redirect the user when the event is called

    }, {
      key: "syncLogout",
      value: function syncLogout(event) {
        if (event.key === "logout") {
          console.log("logged out from storage!");
          next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/login");
        }
      }
    }, {
      key: "render",
      value: function render() {
        return __jsx(WrappedComponent, this.props);
      }
    }]);

    return _class;
  }(Component), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_class, "displayName", "withAuthSync(".concat(getDisplayName(WrappedComponent), ")")), _temp;
};
var logout = function logout() {
  js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.remove("token"); // To trigger the event listener we save some random data into the `logout` key

  window.localStorage.setItem("logout", Date.now()); // new

  next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/login");
};

/***/ })

})
//# sourceMappingURL=index.js.4d724af336e4a2aff6db.hot-update.js.map