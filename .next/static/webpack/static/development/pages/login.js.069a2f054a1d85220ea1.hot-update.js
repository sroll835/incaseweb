webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _api_login__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../api/login */ "./api/login.js");
/* harmony import */ var _api_login__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_api_login__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_20__);







var _jsxFileName = "C:\\Users\\Riano\\Documents\\gocar\\incaseweb\\pages\\login.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }














var customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
var appTitle = "WHATABYTE";
var cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_15__["Cookies"]();
var subtitle = "dddd";

var Login = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Login, _Component);

  var _super = _createSuper(Login);

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Login, null, [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          req = _ref.req;
      console.log("la store:" + store);
      var apiUrl = "http://localhost:8080/auth/login";
      return {
        apiUrl: apiUrl
      };
    }
  }]);

  function Login(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Login);

    _this = _super.call(this, props);

    var _require = __webpack_require__(/*! micro */ "./node_modules/micro/lib/index.js"),
        send = _require.send;

    _this.state = {
      correo: "",
      clave: "",
      error: "",
      token: cookies.get("token") || null,
      modalIsOpen: false
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleChangePassword = _this.handleChangePassword.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.openModal = _this.openModal.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.closeModal = _this.closeModal.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    react_modal__WEBPACK_IMPORTED_MODULE_20___default.a.setAppElement('body');
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Login, [{
    key: "openModal",
    value: function openModal() {
      this.setState({
        modalIsOpen: true
      });
    }
  }, {
    key: "afterOpenModal",
    value: function afterOpenModal() {// references are now sync'd and can be accessed.
      // subtitle.style.color = '#f00';
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.setState({
        modalIsOpen: false
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        correo: event.target.value
      });
    }
  }, {
    key: "handleChangePassword",
    value: function handleChangePassword(event) {
      this.setState({
        clave: event.target.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var _correo, _clave, url, body, response, data, token, action, error;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSubmit$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              _context.prev = 1;
              _correo = this.state.correo;
              _clave = this.state.clave;
              url = this.props.apiUrl;
              body = {
                correo: _correo,
                clave: _clave
              };
              _context.next = 8;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()(url, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
              }));

            case 8:
              response = _context.sent;
              _context.next = 11;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());

            case 11:
              data = _context.sent;
              console.log("Hillipoyas" + JSON.stringify(data)); //console.log("status"+data.status)

              if (data.status === 200) {
                token = data.access_token;
                cookies.set("token", token);
                action = {
                  type: 'ADD_USER_ID',
                  payload: data.user_id
                };
                this.props.dispatch(action);
                console.log("Login succesfully");
                next_router__WEBPACK_IMPORTED_MODULE_16___default.a.push("/"); //   const { access_token } = await response.json();
                //   login({ access_token });
              } else {
                console.log("Login failed."); // https://github.com/developit/unfetch#caveats

                error = new Error(data.message);
                error.data = data;
                this.setState({
                  error: data.message
                }); //  return Promise.reject(error);
              }

              _context.next = 20;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](1);
              console.error("You have an error in your code or there are Network issues.", _context.t0);
              throw new Error(_context.t0);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[1, 16]], Promise);
    }
  }, {
    key: "render",
    value: function render() {
      console.log("login" + JSON.stringify(this.props));
      return __jsx("div", {
        className: "jsx-3045355971" + " " + "Layout",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 7
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 9
        }
      }, __jsx("title", {
        className: "jsx-3045355971",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }
      }, "WHATABYTE"), __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        className: "jsx-3045355971",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }
      }), __jsx("meta", {
        charSet: "utf-8",
        className: "jsx-3045355971",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }
      })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_10__["default"], {
        appTitle: appTitle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "jsx-3045355971" + " " + "Content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "jsx-3045355971",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: "jsx-3045355971",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }
      }, "Bienvenido a ", appTitle, " , Porfavor digite su usuario y contrasena :  ")), __jsx("div", {
        className: "jsx-3045355971" + " " + "login",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }
      }, __jsx("form", {
        className: "jsx-3045355971",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 13
        }
      }, __jsx("label", {
        htmlFor: "correo",
        className: "jsx-3045355971",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 15
        }
      }, "Usuario"), __jsx("input", {
        type: "text",
        id: "correo",
        name: "correo",
        value: this.state.correo,
        onChange: this.handleChange,
        className: "jsx-3045355971",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 15
        }
      }), __jsx("label", {
        htmlFor: "clave",
        className: "jsx-3045355971",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 15
        }
      }, "Password"), __jsx("input", {
        type: "text",
        id: "clave",
        name: "clave",
        value: this.state.clave,
        onChange: this.handleChangePassword,
        className: "jsx-3045355971",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 15
        }
      }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
        variant: "contained",
        color: "primary",
        onClick: this.handleSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 15
        }
      }, "Iniciar Sesion"), __jsx("label", {
        className: "jsx-3045355971",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 16
        }
      }, "o"), __jsx("a", {
        onClick: this.openModal,
        className: "jsx-3045355971" + " " + "registertext",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 16
        }
      }, "Registrate"), __jsx("p", {
        className: "jsx-3045355971" + " " + "error ".concat(this.state.error && "show"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 17
        }
      }, this.state.error && "Error: ".concat(this.state.error)))), __jsx("div", {
        className: "jsx-3045355971",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 11
        }
      }, __jsx(react_modal__WEBPACK_IMPORTED_MODULE_20___default.a, {
        isOpen: this.state.modalIsOpen,
        onAfterOpen: this.afterOpenModal,
        onRequestClose: this.closeModal,
        style: customStyles,
        contentLabel: "Example Modal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-3045355971" + " " + "headermodal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 15
        }
      }, "\xA1 Reg\xEDstrate y comienza a aprender \xA0!\xA0\xA0\xA0\xA0", __jsx("button", {
        "aria-label": "Fermer",
        type: "button",
        className: "jsx-3045355971" + " " + "modalclose",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 15
        }
      }, __jsx("span", {
        "aria-hidden": "true",
        className: "jsx-3045355971",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 81
        }
      }, "\xD7"))), __jsx("div", {
        className: "jsx-3045355971" + " " + "contentmodal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 16
        }
      }, __jsx("form", {
        className: "jsx-3045355971",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 15
        }
      }, __jsx("label", {
        htmlFor: "nombre",
        className: "jsx-3045355971",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 17
        }
      }, "Nombre"), __jsx("input", {
        type: "text",
        id: "nombre_reg",
        name: "nombre_reg",
        value: this.state.correo,
        onChange: this.handleChange,
        className: "jsx-3045355971",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 17
        }
      }), __jsx("label", {
        htmlFor: "apellido",
        className: "jsx-3045355971",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 17
        }
      }, "Apellido"), __jsx("input", {
        type: "text",
        id: "apellido_reg",
        name: "apellido_reg",
        value: this.state.clave,
        onChange: this.handleChangePassword,
        className: "jsx-3045355971",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 17
        }
      }), __jsx("label", {
        htmlFor: "correo",
        className: "jsx-3045355971",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 18
        }
      }, "Correo"), __jsx("input", {
        type: "text",
        id: "correo_reg",
        name: "correo_reg",
        value: this.state.clave,
        onChange: this.handleChangePassword,
        className: "jsx-3045355971",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 17
        }
      }), __jsx("label", {
        htmlFor: "clave",
        className: "jsx-3045355971",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 18
        }
      }, "Password"), __jsx("input", {
        type: "text",
        id: "clave_reg",
        name: "clave_reg",
        value: this.state.clave,
        onChange: this.handleChangePassword,
        className: "jsx-3045355971",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 17
        }
      }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
        variant: "contained",
        color: "secondary",
        onClick: this.handleSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 18
        }
      }, "Registrarse")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3045355971",
        __self: this
      }, ".login.jsx-3045355971{max-width:340px;margin:0 auto;padding:1rem;border:1px solid #ccc;border-radius:4px;text-align:center;}form.jsx-3045355971{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;}label.jsx-3045355971{font-weight:600;}input.jsx-3045355971{padding:8px;margin:0.2rem 0 1rem;border:1px solid #ccc;border-radius:4px;}.error.jsx-3045355971{margin:0.5rem 0 0;display:none;color:brown;}.error.show.jsx-3045355971{display:block;}.headermodal.jsx-3045355971{border-bottom:solid 1px #dedfe0;border-top-left-radius:6px;border-top-right-radius:6px;color:#29303b;display:block;font-weight:700;font-size:15px;padding:24px 64px 24px 24px;}.contentmodal.jsx-3045355971{padding:24px 24px 16px;}.modalclose.jsx-3045355971{color:#686f7a;font-size:36px;font-weight:400;opacity:1;position:relative;z-index:3;padding:0 8px;right:-8px;overflow:hidden;margin-bottom:0;margin-top:-8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUmlhbm9cXERvY3VtZW50c1xcZ29jYXJcXGluY2FzZXdlYlxccGFnZXNcXGxvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlQb0IsQUFHNkIsQUFRSCxBQUlHLEFBR0osQUFNTSxBQUtKLEFBR2tCLEFBVVQsQUFHVCxZQTFCTyxFQVd2QixBQWdCaUIsRUExQ0QsQUFZaEIsRUFTZSxLQWtCZixNQUlrQixDQTFDSCxDQXFCRCxDQU9lLENBYkwsVUFkQSxBQXFCeEIsRUFxQlksVUEzQlEsQUE0QkEsSUFmVSxNQTNCVixRQWVwQixBQTRCWSxDQXRDTyxTQUpDLEFBMkNKLElBaEJBLFVBaUJILElBM0NiLEFBMkJnQixPQWlCRSxPQWhCQSxTQWlCQSxPQWhCRCxNQXpCakIsR0EwQ2tCLE1BaEJZLFVBaUI5QixrQkFoQkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxSaWFub1xcRG9jdW1lbnRzXFxnb2NhclxcaW5jYXNld2ViXFxwYWdlc1xcbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICBMaW5rICBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSBcIi4uL2FwaS9sb2dpblwiO1xyXG5pbXBvcnQgeyBDb29raWVzIH0gZnJvbSBcInJlYWN0LWNvb2tpZVwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IHsgZ3JlZW4sIHB1cnBsZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycyc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XHJcblxyXG5jb25zdCBjdXN0b21TdHlsZXMgPSB7XHJcbiAgY29udGVudCA6IHtcclxuICAgIHRvcCAgICAgICAgICAgICAgICAgICA6ICc1MCUnLFxyXG4gICAgbGVmdCAgICAgICAgICAgICAgICAgIDogJzUwJScsXHJcbiAgICByaWdodCAgICAgICAgICAgICAgICAgOiAnYXV0bycsXHJcbiAgICBib3R0b20gICAgICAgICAgICAgICAgOiAnYXV0bycsXHJcbiAgICBtYXJnaW5SaWdodCAgICAgICAgICAgOiAnLTUwJScsXHJcbiAgICB0cmFuc2Zvcm0gICAgICAgICAgICAgOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJ1xyXG4gIH1cclxufTtcclxuIFxyXG5jb25zdCBhcHBUaXRsZSA9IGBXSEFUQUJZVEVgO1xyXG5jb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcclxudmFyIHN1YnRpdGxlID0gXCJkZGRkXCIgO1xyXG5jbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoeyBzdG9yZSxyZXEgfSkge1xyXG4gICAgY29uc29sZS5sb2coXCJsYSBzdG9yZTpcIitzdG9yZSlcclxuXHJcbiAgICBjb25zdCBhcGlVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hdXRoL2xvZ2luXCI7XHJcblxyXG4gICAgcmV0dXJuIHsgYXBpVXJsIH07XHJcbiAgfVxyXG4gXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIGNvbnN0IHsgc2VuZCB9ID0gcmVxdWlyZShcIm1pY3JvXCIpO1xyXG4gXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjb3JyZW86IFwiXCIsXHJcbiAgICAgIGNsYXZlOiBcIlwiLFxyXG4gICAgICBlcnJvcjogXCJcIixcclxuICAgICAgdG9rZW46IGNvb2tpZXMuZ2V0KFwidG9rZW5cIikgfHwgbnVsbCxcclxuICAgICAgbW9kYWxJc09wZW46IGZhbHNlLFxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2VQYXNzd29yZCA9IHRoaXMuaGFuZGxlQ2hhbmdlUGFzc3dvcmQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub3Blbk1vZGFsID0gdGhpcy5vcGVuTW9kYWwuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY2xvc2VNb2RhbCA9IHRoaXMuY2xvc2VNb2RhbC5iaW5kKHRoaXMpO1xyXG4gICAgTW9kYWwuc2V0QXBwRWxlbWVudCgnYm9keScpO1xyXG4gIH0gXHJcblxyXG5cclxuICBvcGVuTW9kYWwoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbW9kYWxJc09wZW46IHRydWUgfSk7XHJcbiAgfVxyXG4gIFxyXG4gICBhZnRlck9wZW5Nb2RhbCgpIHtcclxuICAgIC8vIHJlZmVyZW5jZXMgYXJlIG5vdyBzeW5jJ2QgYW5kIGNhbiBiZSBhY2Nlc3NlZC5cclxuICAgLy8gc3VidGl0bGUuc3R5bGUuY29sb3IgPSAnI2YwMCc7XHJcbiAgfVxyXG4gXHJcbiAgIGNsb3NlTW9kYWwoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBtb2RhbElzT3BlbjogZmFsc2UgfSk7XHJcbiAgfVxyXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvcnJlbzogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlUGFzc3dvcmQoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjbGF2ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgaGFuZGxlU3VibWl0KGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IF9jb3JyZW8gPSB0aGlzLnN0YXRlLmNvcnJlbztcclxuICAgICAgY29uc3QgX2NsYXZlID0gdGhpcy5zdGF0ZS5jbGF2ZTtcclxuICAgICAgY29uc3QgdXJsID0gdGhpcy5wcm9wcy5hcGlVcmw7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSB7IGNvcnJlbzogX2NvcnJlbywgY2xhdmU6IF9jbGF2ZSB9O1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJIaWxsaXBveWFzXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJzdGF0dXNcIitkYXRhLnN0YXR1cylcclxuICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGRhdGEuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgIGNvb2tpZXMuc2V0KFwidG9rZW5cIiwgdG9rZW4pO1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IHsgdHlwZTogJ0FERF9VU0VSX0lEJyAscGF5bG9hZDogZGF0YS51c2VyX2lkIH1cclxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2dpbiBzdWNjZXNmdWxseVwiKTtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgLy8gICBjb25zdCB7IGFjY2Vzc190b2tlbiB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIC8vICAgbG9naW4oeyBhY2Nlc3NfdG9rZW4gfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2dpbiBmYWlsZWQuXCIpO1xyXG5cclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L3VuZmV0Y2gjY2F2ZWF0c1xyXG4gICAgICAgIGxldCBlcnJvciA9IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgIGVycm9yLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgZXJyb3I6IGRhdGEubWVzc2FnZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICBcIllvdSBoYXZlIGFuIGVycm9yIGluIHlvdXIgY29kZSBvciB0aGVyZSBhcmUgTmV0d29yayBpc3N1ZXMuXCIsXHJcbiAgICAgICAgZXJyb3JcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImxvZ2luXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzKSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTGF5b3V0XCI+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+V0hBVEFCWVRFPC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgPEhlYWRlciBhcHBUaXRsZT17YXBwVGl0bGV9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgzPkJpZW52ZW5pZG8gYSB7YXBwVGl0bGV9ICwgUG9yZmF2b3IgZGlnaXRlIHN1IHVzdWFyaW8geSBjb250cmFzZW5hIDogIDwvaDM+XHJcblxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5cIj5cclxuICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb3JyZW9cIj5Vc3VhcmlvPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImNvcnJlb1wiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29ycmVvXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNvcnJlb31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2xhdmVcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImNsYXZlXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJjbGF2ZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jbGF2ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZVBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIEluaWNpYXIgU2VzaW9uXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDxsYWJlbD5vPC9sYWJlbD5cclxuICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJlZ2lzdGVydGV4dFwiIG9uQ2xpY2s9e3RoaXMub3Blbk1vZGFsfT5SZWdpc3RyYXRlPC9hPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgZXJyb3IgJHt0aGlzLnN0YXRlLmVycm9yICYmIFwic2hvd1wifWB9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3IgJiYgYEVycm9yOiAke3RoaXMuc3RhdGUuZXJyb3J9YH1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLm1vZGFsSXNPcGVufVxyXG4gICAgICAgICAgICAgIG9uQWZ0ZXJPcGVuPXt0aGlzLmFmdGVyT3Blbk1vZGFsfVxyXG4gICAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXt0aGlzLmNsb3NlTW9kYWx9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e2N1c3RvbVN0eWxlc31cclxuICAgICAgICAgICAgICBjb250ZW50TGFiZWw9XCJFeGFtcGxlIE1vZGFsXCJcclxuICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcm1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgwqEgUmVnw61zdHJhdGUgeSBjb21pZW56YSBhIGFwcmVuZGVyICZuYnNwOyEmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICA8YnV0dG9uICBhcmlhLWxhYmVsPVwiRmVybWVyXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cIm1vZGFsY2xvc2VcIj48c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj7Dlzwvc3Bhbj48L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudG1vZGFsXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJub21icmVcIj5Ob21icmU8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwibm9tYnJlX3JlZ1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJub21icmVfcmVnXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY29ycmVvfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhcGVsbGlkb1wiPkFwZWxsaWRvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiYXBlbGxpZG9fcmVnXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImFwZWxsaWRvX3JlZ1wiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNsYXZlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VQYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb3JyZW9cIj5Db3JyZW88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJjb3JyZW9fcmVnXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNvcnJlb19yZWdcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jbGF2ZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2xhdmVcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cImNsYXZlX3JlZ1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjbGF2ZV9yZWdcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jbGF2ZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgUmVnaXN0cmFyc2VcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmxvZ2luIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzNDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMC4ycmVtIDAgMXJlbTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmVycm9yIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMCAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogYnJvd247XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZXJyb3Iuc2hvdyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlYWRlcm1vZGFse1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2RlZGZlMDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzI5MzAzYjtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjRweCA2NHB4IDI0cHggMjRweDsgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY29udGVudG1vZGFse1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyNHB4IDI0cHggMTZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tb2RhbGNsb3Nle1xyXG4gICAgICAgICAgICBjb2xvcjogIzY4NmY3YTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4gICAgICAgICAgICByaWdodDogLThweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLThweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgKHN0YXRlKSA9PiBzdGF0ZSxcclxuXHJcbikoTG9naW4pO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Riano\\\\Documents\\\\gocar\\\\incaseweb\\\\pages\\\\login.js */"));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_17__["connect"])(function (state) {
  return state;
})(Login));

/***/ })

})
//# sourceMappingURL=login.js.069a2f054a1d85220ea1.hot-update.js.map