webpackHotUpdate("static\\development\\pages\\cursos\\[id_user].js",{

/***/ "./API/helpersAPI.js":
/*!***************************!*\
  !*** ./API/helpersAPI.js ***!
  \***************************/
/*! exports provided: getUserbyid, getUserwithCursosByUserId, createUsuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserbyid", function() { return getUserbyid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserwithCursosByUserId", function() { return getUserwithCursosByUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUsuario", function() { return createUsuario; });
function getUserbyid(id_user) {
  var url = "http://localhost:8080/usuarios/" + id_user;
  return fetch(url).then(function (response) {
    return response.json();
  })["catch"](function (error) {
    return console.error(error);
  });
}
function getUserwithCursosByUserId(id_user) {
  var url = "http://localhost:8080/usuarios/cursos" + id_user;
  return fetch(url).then(function (response) {
    return response.json();
  })["catch"](function (error) {
    return console.error(error);
  });
}
function createUsuario(usuario) {
  console.log(usuario);
  var url = "http://localhost:8080/usuarios";
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(usuario)
  }).then(function (response) {
    return console.log(response.status);
  })["catch"](function (error) {
    return console.error(error);
  });
}

/***/ })

})
//# sourceMappingURL=[id_user].js.adc01c6fc95c8d843dd3.hot-update.js.map