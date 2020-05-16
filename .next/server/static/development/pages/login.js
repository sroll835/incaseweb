module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/login.js":
/*!**********************!*\
  !*** ./api/login.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  json,
  send,
  createError,
  run
} = __webpack_require__(/*! micro */ "micro");

const fetch = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");

const login = async (req, res) => {
  const {
    correo
  } = await json(req);
  const {
    clave
  } = await json(req);
  const url = `http://localhost:8080/auth/login`;

  try {
    console.log("hoola guardanapos");
    const response = await fetch(url);

    if (response.ok) {
      const {
        id
      } = await response.json();
      send(res, 200, {
        access_token: id
      });
    } else {
      send(res, response.status, response.statusText);
    }
  } catch (error) {
    throw createError(error.statusCode, error.statusText);
  }
};

module.exports = (req, res) => run(req, res, login);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.scss */ "./components/Header.scss");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Header_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-burger-menu */ "react-burger-menu");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




const style = {
  background: "linear-gradient(45deg, #66bb6a 30%, #a5d6a7 90%)",
  borderRadius: 3,
  border: 0,
  color: "white",
  height: 48,
  padding: "0 30px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
};



class Header extends react__WEBPACK_IMPORTED_MODULE_5__["Component"] {
  constructor(props) {
    super(props);
  }

  handleLogout() {
    console.log("entrando a hacer logof");
    Object(_utils_auth__WEBPACK_IMPORTED_MODULE_3__["logout"])();
  }

  render() {
    console.log("Header props" + JSON.stringify(this.props));

    if (this.props.candoAction) {
      return __jsx("div", {
        className: "Header"
      }, "Whatabyte", __jsx("div", {
        style: {
          float: 'right',
          margin: 10
        }
      }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
        onClick: this.handleLogout,
        variant: "contained",
        color: "secondary"
      }, "Cerrar Sesion")));
    }

    return __jsx("div", {
      className: "Header"
    }, " Whatabyte");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Header.scss":
/*!********************************!*\
  !*** ./components/Header.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Layout.scss":
/*!********************************!*\
  !*** ./components/Layout.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavBar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar.scss */ "./components/NavBar.scss");
/* harmony import */ var _NavBar_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_NavBar_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavButton */ "./components/NavButton.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// components/NavBar.js



const NavBar = props => __jsx("div", {
  className: "NavBar"
}, props.navButtons.map(button => {
  if (button.path === '/usuarios') {
    return __jsx(_NavButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: button.path,
      path: button.path + '/' + props.userid,
      label: button.label,
      icon: button.icon
    });
  }

  return __jsx(_NavButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: button.path,
    path: button.path,
    label: button.label,
    icon: button.icon
  });
}));

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./components/NavBar.scss":
/*!********************************!*\
  !*** ./components/NavBar.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/NavButton.js":
/*!*********************************!*\
  !*** ./components/NavButton.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _NavButton_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavButton.scss */ "./components/NavButton.scss");
/* harmony import */ var _NavButton_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_NavButton_scss__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// components/NavButton.js





const NavButton = props => __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: props.path
}, __jsx("div", {
  className: `NavButton ${props.router.pathname === props.path ? "active" : ""}`
}, __jsx("div", {
  className: "Icon"
}, props.icon), __jsx("span", {
  className: "Label"
}, props.label)));

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(NavButton));

/***/ }),

/***/ "./components/NavButton.scss":
/*!***********************************!*\
  !*** ./components/NavButton.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/index.scss":
/*!*******************************!*\
  !*** ./components/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavBar */ "./components/NavBar.js");
/* harmony import */ var _Layout_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Layout.scss */ "./components/Layout.scss");
/* harmony import */ var _Layout_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Layout_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./components/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/buttons */ "./config/buttons.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Layout = props => {
  let candoAction = true;
  props.auth ? candoAction : !candoAction; //console.log("can" + candoAction)

  const appTitle = `> WHATABYTE`; //console.log("lAYOTU :" + JSON.stringify(props));

  return __jsx("div", {
    className: "Layout"
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "WHATABYTE"), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), __jsx("meta", {
    charSet: "utf-8"
  })), __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    appTitle: appTitle,
    candoAction: candoAction
  }), __jsx("div", {
    className: "Content"
  }, props.children), __jsx(_NavBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    navButtons: _config_buttons__WEBPACK_IMPORTED_MODULE_6__["default"],
    userid: props.userid
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./config/buttons.js":
/*!***************************!*\
  !*** ./config/buttons.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// config/buttons.js



const navButtons = [{
  label: "Explorar",
  path: "/explorar",
  icon: __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCompass"]
  })
}, {
  label: "Mis cursos",
  path: "/mis_cursos",
  icon: __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBook"]
  })
}, {
  label: "Perfil",
  path: "/usuarios",
  icon: __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUser"]
  })
}];
/* harmony default export */ __webpack_exports__["default"] = (navButtons);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _api_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/login */ "./api/login.js");
/* harmony import */ var _api_login__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_api_login__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "C:\\Users\\Riano\\Documents\\gocar\\incaseweb\\pages\\login.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
const appTitle = `WHATABYTE`;
const cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_8__["Cookies"]();
var subtitle = "dddd";

class Login extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  static getInitialProps({
    store,
    req
  }) {
    console.log("la store:" + store);
    const apiUrl = "http://localhost:8080/auth/login";
    return {
      apiUrl
    };
  }

  constructor(props) {
    super(props);

    const {
      send
    } = __webpack_require__(/*! micro */ "micro");

    this.state = {
      correo: "",
      clave: "",
      error: "",
      token: cookies.get("token") || null,
      modalIsOpen: false,
      nom_reg: "",
      apell_reg: "",
      correo_reg: "",
      clave_reg: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeNomReg = this.handleChangeNomReg.bind(this);
    this.handleChangeApellReg = this.handleChangeApellReg.bind(this);
    this.handleChangeCorreoReg = this.handleChangeCorreoReg.bind(this);
    this.handleChangePasswordReg = this.handleChangePasswordReg.bind(this);
    this.createUser = this.createUser.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    react_modal__WEBPACK_IMPORTED_MODULE_13___default.a.setAppElement('body');
  } // MODAL FUNCTIONS


  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  afterOpenModal() {// references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  } // HANDLE EVENT TO CHANGE THE STATE VALUE 


  handleChange(event) {
    this.setState({
      correo: event.target.value
    });
  }

  handleChangePassword(event) {
    this.setState({
      clave: event.target.value
    });
  }

  handleChangeNomReg(event) {
    this.setState({
      nom_reg: event.target.value
    });
  }

  handleChangeApellReg(event) {
    this.setState({
      apell_reg: event.target.value
    });
  }

  handleChangeCorreoReg(event) {
    this.setState({
      correo_reg: event.target.value
    });
  }

  handleChangePasswordReg(event) {
    this.setState({
      clave_reg: event.target.value
    });
  } //  WEB SERVICES FUNCTIONS 


  async handleSubmit(event) {
    event.preventDefault();

    try {
      const _correo = this.state.correo;
      const _clave = this.state.clave;
      const url = this.props.apiUrl;
      const body = {
        correo: _correo,
        clave: _clave
      };
      const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
      const data = await response.json();
      console.log("Hillipoyas" + JSON.stringify(data)); //console.log("status"+data.status)

      if (data.status === 200) {
        const token = data.access_token;
        cookies.set("token", token);
        const action = {
          type: 'ADD_USER_ID',
          payload: data.user_id
        };
        this.props.dispatch(action);
        console.log("Login succesfully");
        next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/"); //   const { access_token } = await response.json();
        //   login({ access_token });
      } else {
        console.log("Login failed."); // https://github.com/developit/unfetch#caveats

        let error = new Error(data.message);
        error.data = data;
        this.setState({
          error: data.message
        }); //  return Promise.reject(error);
      }
    } catch (error) {
      console.error("You have an error in your code or there are Network issues.", error);
      throw new Error(error);
    }
  }

  async createUser() {
    try {
      let _toinsert = {
        "nombre": this.state.nom_reg,
        "apellido": this.state.apell_reg,
        "correo": this.state.correo_reg,
        "clave": this.state.clave_reg
      };
      const url = "http://localhost:8080/usuarios";
      console.log(_toinsert);
      const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(_toinsert)
      });
      console.log("Termine" + response.Status);
    } catch (error) {
      console.error("You have an error in your code or there are Network issues.", error);
      throw new Error(error);
    }
  }

  render() {
    return __jsx("div", {
      className: "jsx-1104402198" + " " + "Layout",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 7
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }
    }, __jsx("title", {
      className: "jsx-1104402198",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 11
      }
    }, "WHATABYTE"), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
      className: "jsx-1104402198",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 11
      }
    }), __jsx("meta", {
      charSet: "utf-8",
      className: "jsx-1104402198",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 11
      }
    })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      appTitle: appTitle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "jsx-1104402198" + " " + "Content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-1104402198",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 11
      }
    }, __jsx("h3", {
      className: "jsx-1104402198",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 11
      }
    }, "Bienvenido a ", appTitle, " , Porfavor digite su usuario y contrasena :  ")), __jsx("div", {
      className: "jsx-1104402198" + " " + "login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 11
      }
    }, __jsx("form", {
      className: "jsx-1104402198",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 13
      }
    }, __jsx("label", {
      htmlFor: "correo",
      className: "jsx-1104402198",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 15
      }
    }, "Usuario"), __jsx("input", {
      type: "text",
      id: "correo",
      name: "correo",
      value: this.state.correo,
      onChange: this.handleChange,
      className: "jsx-1104402198",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 15
      }
    }), __jsx("label", {
      htmlFor: "clave",
      className: "jsx-1104402198",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 15
      }
    }, "Contrase\xF1a"), __jsx("input", {
      type: "text",
      id: "clave",
      name: "clave",
      value: this.state.clave,
      onChange: this.handleChangePassword,
      className: "jsx-1104402198",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 15
      }
    }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
      variant: "contained",
      color: "primary",
      onClick: this.handleSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 15
      }
    }, "Iniciar Sesion"), __jsx("label", {
      className: "jsx-1104402198",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 16
      }
    }, "o"), __jsx("a", {
      onClick: this.openModal,
      className: "jsx-1104402198" + " " + "registertext",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 16
      }
    }, "Registrate"), __jsx("p", {
      className: "jsx-1104402198" + " " + `error ${this.state.error && "show"}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 17
      }
    }, this.state.error && `Error: ${this.state.error}`))), __jsx("div", {
      className: "jsx-1104402198",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 11
      }
    }, __jsx(react_modal__WEBPACK_IMPORTED_MODULE_13___default.a, {
      isOpen: this.state.modalIsOpen,
      onAfterOpen: this.afterOpenModal,
      onRequestClose: this.closeModal,
      style: customStyles,
      contentLabel: "Example Modal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-1104402198" + " " + "headermodal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 15
      }
    }, "\xA1 Reg\xEDstrate y comienza a aprender \xA0!", __jsx("button", {
      "aria-label": "Cerrar",
      type: "button",
      onClick: this.closeModal,
      className: "jsx-1104402198" + " " + "modalclose",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 15
      }
    }, __jsx("span", {
      "aria-hidden": "true",
      className: "jsx-1104402198",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 106
      }
    }, "\xD7"))), __jsx("div", {
      className: "jsx-1104402198" + " " + "contentmodal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 16
      }
    }, __jsx("form", {
      className: "jsx-1104402198",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 15
      }
    }, __jsx("label", {
      htmlFor: "nombre",
      className: "jsx-1104402198",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 17
      }
    }, "Nombre"), __jsx("input", {
      type: "text",
      id: "nombre_reg",
      name: "nombre_reg",
      value: this.state.nom_reg,
      onChange: this.handleChangeNomReg,
      className: "jsx-1104402198",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 17
      }
    }), __jsx("label", {
      htmlFor: "apellido",
      className: "jsx-1104402198",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 17
      }
    }, "Apellido"), __jsx("input", {
      type: "text",
      id: "apellido_reg",
      name: "apellido_reg",
      value: this.state.apell_reg,
      onChange: this.handleChangeApellReg,
      className: "jsx-1104402198",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 17
      }
    }), __jsx("label", {
      htmlFor: "correo",
      className: "jsx-1104402198",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 18
      }
    }, "Correo"), __jsx("input", {
      type: "text",
      id: "correo_reg",
      name: "correo_reg",
      value: this.state.correo_reg,
      onChange: this.handleChangeCorreoReg,
      className: "jsx-1104402198",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 17
      }
    }), __jsx("label", {
      htmlFor: "clave",
      className: "jsx-1104402198",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 18
      }
    }, "Contrase\xF1a"), __jsx("input", {
      type: "text",
      id: "clave_reg",
      name: "clave_reg",
      value: this.state.clave_reg,
      onChange: this.handleChangePasswordReg,
      className: "jsx-1104402198",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 17
      }
    }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
      variant: "contained",
      color: "secondary",
      className: "buttonregister",
      onClick: this.createUser,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 18
      }
    }, "Registrarse")), __jsx("div", {
      className: "jsx-1104402198" + " " + "secondarytext",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 15
      }
    }, "Al registrarse, acepta nuestras", __jsx("a", {
      href: "/terms/",
      target: "_blank",
      className: "jsx-1104402198",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 16
      }
    }, "condiciones generales de uso"), "y ", __jsx("a", {
      href: "/terms/privacy/",
      target: "_blank",
      className: "jsx-1104402198",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 18
      }
    }, "nuestra pol\xEDtica de privacidad"), "."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1104402198",
      __self: this
    }, ".login.jsx-1104402198{max-width:340px;margin:0 auto;padding:1rem;border:1px solid #ccc;border-radius:4px;text-align:center;}form.jsx-1104402198{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;}label.jsx-1104402198{font-weight:600;}input.jsx-1104402198{padding:8px;margin:0.2rem 0 1rem;border:1px solid #ccc;border-radius:4px;}.error.jsx-1104402198{margin:0.5rem 0 0;display:none;color:brown;}.error.show.jsx-1104402198{display:block;}.headermodal.jsx-1104402198{border-bottom:solid 1px #dedfe0;border-top-left-radius:6px;border-top-right-radius:6px;color:#29303b;display:block;font-weight:700;font-size:15px;padding:24px 64px 24px 24px;}.buttonregister.jsx-1104402198{font-size:16px;font-weight:700;height:48px;margin-bottom:16px;width:100%;}.contentmodal.jsx-1104402198{padding:24px 24px 16px;}.modalclose.jsx-1104402198{color:#686f7a;font-size:36px;font-weight:400;opacity:1;position:relative;z-index:3;padding:0 8px;background-color:white;border:none;overflow:hidden;margin-bottom:0;margin-top:-8px;position:absolute;right:24px;top:24px;}.secondarytext.jsx-1104402198{margin:0 0 16px;margin-top:10px;font-size:10px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUmlhbm9cXERvY3VtZW50c1xcZ29jYXJcXGluY2FzZXdlYlxccGFnZXNcXGxvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBTb0IsQUFHNkIsQUFRSCxBQUlHLEFBR0osQUFNTSxBQUtKLEFBR2tCLEFBVWpCLEFBT1EsQUFHVCxBQWlCRSxZQWxESyxFQVd2QixBQXVCaUIsQ0FWQyxDQXZDRixBQVloQixBQXNEa0IsRUE3Q0gsS0F5QmYsTUFJa0IsQ0FqREgsQ0FxQkQsQUFrQkEsQ0FYZSxBQXNDWixDQW5ETyxVQWRBLEFBcUJ4QixBQWtCcUIsRUFVVCxFQWlCUSxRQW5EQSxBQW1DQSxJQXRCVSxHQVlqQixHQXZDTyxBQWtFcEIsUUFuREEsQUF5QkEsQUFVWSxDQTdDTyxTQUpDLEFBa0RKLElBdkJBLFVBd0JTLElBbER6QixBQTJCZ0IsY0FDRSxLQXVCSixXQXRCRyxDQXVCQyxLQWhEbEIsU0EwQjhCLEVBdUJaLGdCQUNBLFVBdkJsQixNQXdCb0Isa0JBQ1AsV0FDRixTQUNYIiwiZmlsZSI6IkM6XFxVc2Vyc1xcUmlhbm9cXERvY3VtZW50c1xcZ29jYXJcXGluY2FzZXdlYlxccGFnZXNcXGxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAgTGluayAgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gXCIuLi9hcGkvbG9naW5cIjtcclxuaW1wb3J0IHsgQ29va2llcyB9IGZyb20gXCJyZWFjdC1jb29raWVcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCB7IGdyZWVuLCBwdXJwbGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xyXG5cclxuY29uc3QgY3VzdG9tU3R5bGVzID0ge1xyXG4gIGNvbnRlbnQgOiB7XHJcbiAgICB0b3AgICAgICAgICAgICAgICAgICAgOiAnNTAlJyxcclxuICAgIGxlZnQgICAgICAgICAgICAgICAgICA6ICc1MCUnLFxyXG4gICAgcmlnaHQgICAgICAgICAgICAgICAgIDogJ2F1dG8nLFxyXG4gICAgYm90dG9tICAgICAgICAgICAgICAgIDogJ2F1dG8nLFxyXG4gICAgbWFyZ2luUmlnaHQgICAgICAgICAgIDogJy01MCUnLFxyXG4gICAgdHJhbnNmb3JtICAgICAgICAgICAgIDogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSdcclxuICB9XHJcbn07XHJcbiBcclxuY29uc3QgYXBwVGl0bGUgPSBgV0hBVEFCWVRFYDtcclxuY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XHJcbnZhciBzdWJ0aXRsZSA9IFwiZGRkZFwiIDtcclxuY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzKHsgc3RvcmUscmVxIH0pIHtcclxuICAgIGNvbnNvbGUubG9nKFwibGEgc3RvcmU6XCIrc3RvcmUpXHJcblxyXG4gICAgY29uc3QgYXBpVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9sb2dpblwiO1xyXG4gICAgXHJcbiAgICByZXR1cm4geyBhcGlVcmwgfTtcclxuICB9XHJcbiBcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgY29uc3QgeyBzZW5kIH0gPSByZXF1aXJlKFwibWljcm9cIik7XHJcbiBcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNvcnJlbzogXCJcIixcclxuICAgICAgY2xhdmU6IFwiXCIsXHJcbiAgICAgIGVycm9yOiBcIlwiLFxyXG4gICAgICB0b2tlbjogY29va2llcy5nZXQoXCJ0b2tlblwiKSB8fCBudWxsLFxyXG4gICAgICBtb2RhbElzT3BlbjogZmFsc2UsXHJcbiAgICAgIG5vbV9yZWcgOiBcIlwiLFxyXG4gICAgICBhcGVsbF9yZWc6XCJcIixcclxuICAgICAgY29ycmVvX3JlZzpcIlwiLFxyXG4gICAgICBjbGF2ZV9yZWc6XCJcIlxyXG5cclxuICAgIH07XHJcbiAgICBcclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlUGFzc3dvcmQgPSB0aGlzLmhhbmRsZUNoYW5nZVBhc3N3b3JkLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZU5vbVJlZyAgPSB0aGlzLmhhbmRsZUNoYW5nZU5vbVJlZy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2VBcGVsbFJlZyA9IHRoaXMuaGFuZGxlQ2hhbmdlQXBlbGxSZWcuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlQ29ycmVvUmVnICA9IHRoaXMuaGFuZGxlQ2hhbmdlQ29ycmVvUmVnLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZVBhc3N3b3JkUmVnID0gdGhpcy5oYW5kbGVDaGFuZ2VQYXNzd29yZFJlZy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jcmVhdGVVc2VyID0gdGhpcy5jcmVhdGVVc2VyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9wZW5Nb2RhbCA9IHRoaXMub3Blbk1vZGFsLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNsb3NlTW9kYWwgPSB0aGlzLmNsb3NlTW9kYWwuYmluZCh0aGlzKTtcclxuICAgIE1vZGFsLnNldEFwcEVsZW1lbnQoJ2JvZHknKTtcclxuICB9IFxyXG5cclxuICAvLyBNT0RBTCBGVU5DVElPTlNcclxuXHJcbiAgb3Blbk1vZGFsKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vZGFsSXNPcGVuOiB0cnVlIH0pO1xyXG4gIH1cclxuICBcclxuICAgYWZ0ZXJPcGVuTW9kYWwoKSB7XHJcbiAgICAvLyByZWZlcmVuY2VzIGFyZSBub3cgc3luYydkIGFuZCBjYW4gYmUgYWNjZXNzZWQuXHJcbiAgIC8vIHN1YnRpdGxlLnN0eWxlLmNvbG9yID0gJyNmMDAnO1xyXG4gIH1cclxuIFxyXG4gICBjbG9zZU1vZGFsKCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbW9kYWxJc09wZW46IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gSEFORExFIEVWRU5UIFRPIENIQU5HRSBUSEUgU1RBVEUgVkFMVUUgXHJcblxyXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvcnJlbzogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlUGFzc3dvcmQoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjbGF2ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuICBoYW5kbGVDaGFuZ2VOb21SZWcoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBub21fcmVnOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG4gICBcclxuICBoYW5kbGVDaGFuZ2VBcGVsbFJlZyhldmVudCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYXBlbGxfcmVnOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG4gIGhhbmRsZUNoYW5nZUNvcnJlb1JlZyhldmVudCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY29ycmVvX3JlZzogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuICBoYW5kbGVDaGFuZ2VQYXNzd29yZFJlZyhldmVudCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY2xhdmVfcmVnOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vICBXRUIgU0VSVklDRVMgRlVOQ1RJT05TIFxyXG5cclxuICBhc3luYyBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgX2NvcnJlbyA9IHRoaXMuc3RhdGUuY29ycmVvO1xyXG4gICAgICBjb25zdCBfY2xhdmUgPSB0aGlzLnN0YXRlLmNsYXZlO1xyXG4gICAgICBjb25zdCB1cmwgPSB0aGlzLnByb3BzLmFwaVVybDtcclxuICAgICAgY29uc3QgYm9keSA9IHsgY29ycmVvOiBfY29ycmVvLCBjbGF2ZTogX2NsYXZlIH07XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcIkhpbGxpcG95YXNcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcInN0YXR1c1wiK2RhdGEuc3RhdHVzKVxyXG4gICAgICBpZiAoZGF0YS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gZGF0YS5hY2Nlc3NfdG9rZW47XHJcbiAgICAgICAgY29va2llcy5zZXQoXCJ0b2tlblwiLCB0b2tlbik7XHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0geyB0eXBlOiAnQUREX1VTRVJfSUQnICxwYXlsb2FkOiBkYXRhLnVzZXJfaWQgfVxyXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9uKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ2luIHN1Y2Nlc2Z1bGx5XCIpO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICAvLyAgIGNvbnN0IHsgYWNjZXNzX3Rva2VuIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgLy8gICBsb2dpbih7IGFjY2Vzc190b2tlbiB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ2luIGZhaWxlZC5cIik7XHJcblxyXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvdW5mZXRjaCNjYXZlYXRzXHJcbiAgICAgICAgbGV0IGVycm9yID0gbmV3IEVycm9yKGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgZXJyb3IuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBlcnJvcjogZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgIFwiWW91IGhhdmUgYW4gZXJyb3IgaW4geW91ciBjb2RlIG9yIHRoZXJlIGFyZSBOZXR3b3JrIGlzc3Vlcy5cIixcclxuICAgICAgICBlcnJvclxyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcbiBcclxuYXN5bmMgY3JlYXRlVXNlcigpIHtcclxuICB0cnl7XHJcbiAgICAgbGV0IF90b2luc2VydCA9ICB7XCJub21icmVcIjogdGhpcy5zdGF0ZS5ub21fcmVnLCBcImFwZWxsaWRvXCI6dGhpcy5zdGF0ZS5hcGVsbF9yZWcsXCJjb3JyZW9cIjogdGhpcy5zdGF0ZS5jb3JyZW9fcmVnLCBcImNsYXZlXCI6IHRoaXMuc3RhdGUuY2xhdmVfcmVnfTtcclxuICAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC91c3Vhcmlvc1wiO1xyXG4gICAgIGNvbnNvbGUubG9nKF90b2luc2VydClcclxuICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KF90b2luc2VydCksXHJcbiAgICB9KTtcclxuICAgICBjb25zb2xlLmxvZyhcIlRlcm1pbmVcIiArIHJlc3BvbnNlLlN0YXR1cylcclxuICB9XHJcbiAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICBcIllvdSBoYXZlIGFuIGVycm9yIGluIHlvdXIgY29kZSBvciB0aGVyZSBhcmUgTmV0d29yayBpc3N1ZXMuXCIsXHJcbiAgICAgIGVycm9yXHJcbiAgICApO1xyXG5cclxuICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XHJcbiAgfVxyXG59XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkxheW91dFwiPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPldIQVRBQllURTwvdGl0bGU+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgIDxIZWFkZXIgYXBwVGl0bGU9e2FwcFRpdGxlfSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMz5CaWVudmVuaWRvIGEge2FwcFRpdGxlfSAsIFBvcmZhdm9yIGRpZ2l0ZSBzdSB1c3VhcmlvIHkgY29udHJhc2VuYSA6ICA8L2gzPlxyXG5cclxuICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCI+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29ycmVvXCI+VXN1YXJpbzwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJjb3JyZW9cIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvcnJlb1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jb3JyZW99XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNsYXZlXCI+Q29udHJhc2XDsWE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJjbGF2ZVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2xhdmVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2xhdmV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VQYXNzd29yZH1cclxuICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICBJbmljaWFyIFNlc2lvblxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8bGFiZWw+bzwvbGFiZWw+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZWdpc3RlcnRleHRcIiBvbkNsaWNrPXt0aGlzLm9wZW5Nb2RhbH0+UmVnaXN0cmF0ZTwvYT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YGVycm9yICR7dGhpcy5zdGF0ZS5lcnJvciAmJiBcInNob3dcIn1gfT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yICYmIGBFcnJvcjogJHt0aGlzLnN0YXRlLmVycm9yfWB9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5tb2RhbElzT3Blbn1cclxuICAgICAgICAgICAgICBvbkFmdGVyT3Blbj17dGhpcy5hZnRlck9wZW5Nb2RhbH1cclxuICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17dGhpcy5jbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXtjdXN0b21TdHlsZXN9XHJcbiAgICAgICAgICAgICAgY29udGVudExhYmVsPVwiRXhhbXBsZSBNb2RhbFwiXHJcbiAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJtb2RhbFwiPlxyXG4gICAgICAgICAgICAgIMKhIFJlZ8Otc3RyYXRlIHkgY29taWVuemEgYSBhcHJlbmRlciAmbmJzcDshXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBhcmlhLWxhYmVsPVwiQ2VycmFyXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cIm1vZGFsY2xvc2VcIiBvbkNsaWNrPXt0aGlzLmNsb3NlTW9kYWx9PjxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsOXPC9zcGFuPjwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50bW9kYWxcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5vbWJyZVwiPk5vbWJyZTwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJub21icmVfcmVnXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5vbWJyZV9yZWdcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5ub21fcmVnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VOb21SZWd9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhcGVsbGlkb1wiPkFwZWxsaWRvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiYXBlbGxpZG9fcmVnXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImFwZWxsaWRvX3JlZ1wiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFwZWxsX3JlZ31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlQXBlbGxSZWd9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29ycmVvXCI+Q29ycmVvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiY29ycmVvX3JlZ1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb3JyZW9fcmVnXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY29ycmVvX3JlZ31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlQ29ycmVvUmVnfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNsYXZlXCI+Q29udHJhc2XDsWE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJjbGF2ZV9yZWdcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY2xhdmVfcmVnXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2xhdmVfcmVnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VQYXNzd29yZFJlZ31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBjbGFzc05hbWU9XCJidXR0b25yZWdpc3RlclwiIG9uQ2xpY2s9e3RoaXMuY3JlYXRlVXNlcn0+XHJcbiAgICAgICAgICAgICAgICBSZWdpc3RyYXJzZVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWNvbmRhcnl0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgQWwgcmVnaXN0cmFyc2UsIGFjZXB0YSBudWVzdHJhcyBcclxuICAgICAgICAgICAgICAgPGEgaHJlZj1cIi90ZXJtcy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5jb25kaWNpb25lcyBnZW5lcmFsZXMgZGUgdXNvPC9hPlxyXG4gICAgICAgICAgICAgICB5IDxhIGhyZWY9XCIvdGVybXMvcHJpdmFjeS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5udWVzdHJhIHBvbMOtdGljYSBkZSBwcml2YWNpZGFkPC9hPi5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5sb2dpbiB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMzQwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAuMnJlbSAwIDFyZW07XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5lcnJvciB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMC41cmVtIDAgMDtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IGJyb3duO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmVycm9yLnNob3cge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oZWFkZXJtb2RhbHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkZWRmZTA7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgY29sb3I6ICMyOTMwM2I7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDI0cHggNjRweCAyNHB4IDI0cHg7IFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ1dHRvbnJlZ2lzdGVye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY29udGVudG1vZGFse1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyNHB4IDI0cHggMTZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tb2RhbGNsb3Nle1xyXG4gICAgICAgICAgICBjb2xvcjogIzY4NmY3YTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICB0b3A6IDI0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2Vjb25kYXJ5dGV4dHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gIChzdGF0ZSkgPT4gc3RhdGUsXHJcblxyXG4pKExvZ2luKTtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Riano\\\\Documents\\\\gocar\\\\incaseweb\\\\pages\\\\login.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(state => state)(Login));

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const auth = ctx => {
  const {
    token
  } = next_cookies__WEBPACK_IMPORTED_MODULE_2___default()(ctx);
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
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/login");
  }

  return token;
}; // Gets the display name of a JSX component for dev tools

const getDisplayName = Component => Component.displayName || Component.name || "Component";

const withAuthSync = WrappedComponent => {
  var _class, _temp;

  return _temp = _class = class extends Component {
    static async getInitialProps(ctx) {
      const token = auth(ctx);
      const componentProps = WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));
      return _objectSpread({}, componentProps, {
        token
      });
    } // New: We bind our methods


    constructor(props) {
      super(props);
      this.syncLogout = this.syncLogout.bind(this);
    } // New: Add event listener when a restricted Page Component mounts


    componentDidMount() {
      window.addEventListener("storage", this.syncLogout);
    } // New: Remove event listener when the Component unmount and
    // delete all data


    componentWillUnmount() {
      window.removeEventListener("storage", this.syncLogout);
      window.localStorage.removeItem("logout");
    } // New: Method to redirect the user when the event is called


    syncLogout(event) {
      if (event.key === "logout") {
        console.log("logged out from storage!");
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/login");
      }
    }

    render() {
      return __jsx(WrappedComponent, this.props);
    }

  }, _defineProperty(_class, "displayName", `withAuthSync(${getDisplayName(WrappedComponent)})`), _temp;
};
const logout = () => {
  js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove("token"); // To trigger the event listener we save some random data into the `logout` key

  window.localStorage.setItem("logout", Date.now()); // new

  next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/login");
};

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/login.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Riano\Documents\gocar\incaseweb\pages\login.js */"./pages/login.js");


/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "micro":
/*!************************!*\
  !*** external "micro" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("micro");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-burger-menu":
/*!************************************!*\
  !*** external "react-burger-menu" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-burger-menu");

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=login.js.map