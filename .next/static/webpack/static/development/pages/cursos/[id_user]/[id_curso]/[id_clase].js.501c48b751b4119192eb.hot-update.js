webpackHotUpdate("static\\development\\pages\\cursos\\[id_user]\\[id_curso]\\[id_clase].js",{

/***/ "./components/MediaPlayer.js":
/*!***********************************!*\
  !*** ./components/MediaPlayer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaPlayer; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _node_modules_video_react_styles_scss_video_react_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../node_modules/video-react/styles/scss/video-react.scss */ "./node_modules/video-react/styles/scss/video-react.scss");
/* harmony import */ var _node_modules_video_react_styles_scss_video_react_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_video_react_styles_scss_video_react_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var video_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! video-react */ "./node_modules/video-react/lib/index.js");
/* harmony import */ var video_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(video_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_prism__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-prism */ "./node_modules/react-prism/lib/index.js");
/* harmony import */ var react_prism__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_prism__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "C:\\Users\\Riano\\Documents\\Manuel Felipe Documentos\\MyProjects\\ECO2\\incaseweb\\components\\MediaPlayer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var MediaPlayer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MediaPlayer, _Component);

  var _super = _createSuper(MediaPlayer);

  function MediaPlayer(props, context) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MediaPlayer);

    _this = _super.call(this, props, context);
    _this.state = {
      source: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    };
    _this.play = _this.play.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.pause = _this.pause.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.load = _this.load.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.changeCurrentTime = _this.changeCurrentTime.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.seek = _this.seek.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.changePlaybackRateRate = _this.changePlaybackRateRate.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.changeVolume = _this.changeVolume.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.setMuted = _this.setMuted.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MediaPlayer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // subscribe state change
      this.player.subscribeToStateChange(this.handleStateChange.bind(this));
    }
  }, {
    key: "setMuted",
    value: function setMuted(muted) {
      var _this2 = this;

      return function () {
        _this2.player.muted = muted;
      };
    }
  }, {
    key: "handleStateChange",
    value: function handleStateChange(state) {
      // copy player state to this component's state
      this.setState({
        player: state
      });
    }
  }, {
    key: "play",
    value: function play() {
      this.player.play();
    }
  }, {
    key: "pause",
    value: function pause() {
      this.player.pause();
    }
  }, {
    key: "load",
    value: function load() {
      this.player.load();
    }
  }, {
    key: "changeCurrentTime",
    value: function changeCurrentTime(seconds) {
      var _this3 = this;

      return function () {
        var _this3$player$getStat = _this3.player.getState(),
            player = _this3$player$getStat.player;

        _this3.player.seek(player.currentTime + seconds);
      };
    }
  }, {
    key: "seek",
    value: function seek(seconds) {
      var _this4 = this;

      return function () {
        _this4.player.seek(seconds);
      };
    }
  }, {
    key: "changePlaybackRateRate",
    value: function changePlaybackRateRate(steps) {
      var _this5 = this;

      return function () {
        var _this5$player$getStat = _this5.player.getState(),
            player = _this5$player$getStat.player;

        _this5.player.playbackRate = player.playbackRate + steps;
      };
    }
  }, {
    key: "changeVolume",
    value: function changeVolume(steps) {
      var _this6 = this;

      return function () {
        var _this6$player$getStat = _this6.player.getState(),
            player = _this6$player$getStat.player;

        _this6.player.volume = player.volume + steps;
      };
    }
  }, {
    key: "changeSource",
    value: function changeSource(name) {
      var _this7 = this;

      return function () {
        _this7.setState({
          source: sources[name]
        });

        _this7.player.load();
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this8 = this;

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 9
        }
      }, __jsx(video_react__WEBPACK_IMPORTED_MODULE_8__["Player"], {
        ref: function ref(player) {
          _this8.player = player;
        },
        autoPlay: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }
      }, __jsx("source", {
        src: this.state.source,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 13
        }
      }), __jsx(video_react__WEBPACK_IMPORTED_MODULE_8__["ControlBar"], {
        autoHide: false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: "py-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: this.play,
        className: "mr-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 13
        }
      }, "play()"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: this.pause,
        className: "mr-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 13
        }
      }, "pause()"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: this.load,
        className: "mr-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 13
        }
      }, "load()")), __jsx("div", {
        className: "pb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: this.changeCurrentTime(10),
        className: "mr-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 13
        }
      }, "currentTime += 10"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: this.changeCurrentTime(-10),
        className: "mr-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 13
        }
      }, "currentTime -= 10"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: this.seek(50),
        className: "mr-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 13
        }
      }, "currentTime = 50")), __jsx("div", {
        className: "pb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: this.changePlaybackRateRate(1),
        className: "mr-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }
      }, "playbackRate++"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: this.changePlaybackRateRate(-1),
        className: "mr-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 13
        }
      }, "playbackRate--"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: this.changePlaybackRateRate(0.1),
        className: "mr-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 13
        }
      }, "playbackRate+=0.1"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: this.changePlaybackRateRate(-0.1),
        className: "mr-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 13
        }
      }, "playbackRate-=0.1")), __jsx("div", {
        className: "pb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: this.changeVolume(0.1),
        className: "mr-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 13
        }
      }, "volume+=0.1"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: this.changeVolume(-0.1),
        className: "mr-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 13
        }
      }, "volume-=0.1"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: this.setMuted(true),
        className: "mr-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 13
        }
      }, "muted=true"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: this.setMuted(false),
        className: "mr-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 13
        }
      }, "muted=false")), __jsx("div", {
        className: "pb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: this.changeSource('sintelTrailer'),
        className: "mr-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 13
        }
      }, "Sintel teaser"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: this.changeSource('bunnyTrailer'),
        className: "mr-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 13
        }
      }, "Bunny trailer"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: this.changeSource('bunnyMovie'),
        className: "mr-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 13
        }
      }, "Bunny movie"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: this.changeSource('test'),
        className: "mr-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 13
        }
      }, "Test movie")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }
      }, "State"));
    }
  }]);

  return MediaPlayer;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=[id_clase].js.501c48b751b4119192eb.hot-update.js.map