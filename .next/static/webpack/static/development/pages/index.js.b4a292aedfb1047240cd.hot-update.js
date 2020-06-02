webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavBar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar.scss */ "./components/NavBar.scss");
/* harmony import */ var _NavBar_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_NavBar_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavButton */ "./components/NavButton.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Riano\\Documents\\gocar\\incaseweb\\components\\NavBar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// components/NavBar.js




var NavBar = function NavBar(props) {
  return __jsx("div", {
    className: "NavBar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, props.navButtons.map(function (button) {
    //console.log(JSON.stringify(props) + "NAV")
    if (button.path === '/usuarios') {
      return __jsx(_NavButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: button.path,
        path: button.path + '/' + props.userid,
        label: button.label,
        icon: button.icon,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 7
        }
      });
    }

    if (button.path === '/cursos') {
      return __jsx(_NavButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: button.path,
        path: button.path + '/' + props.userid,
        label: button.label,
        icon: button.icon,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 6
        }
      });
    }

    return __jsx(_NavButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: button.path,
      path: button.path,
      label: button.label,
      icon: button.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 7
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (state) {
  return state;
})(NavBar));

/***/ })

})
//# sourceMappingURL=index.js.b4a292aedfb1047240cd.hot-update.js.map