"use strict";
(self["webpackChunkAPI_BASED_APP_"] = self["webpackChunkAPI_BASED_APP_"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Combo&family=Poppins&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\nhtml {\r\n  overflow-x: hidden;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.container {\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  position: absolute;\r\n  position: fixed;\r\n}\r\n\r\n.container-appear {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.popup-reservation-container {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  background-color: rgba(255, 255, 255, 0.961);\r\n  color: black;\r\n  padding: 1vh;\r\n  border: 2px solid rgb(0, 0, 0);\r\n  position: relative;\r\n  position: absolute;\r\n  position: fixed;\r\n  width: 90%;\r\n  height: 90vh;\r\n  margin: 1vh;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.reservation-page-close-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-left: 94%;\r\n  width: 5vh;\r\n  height: 5vh;\r\n  cursor: pointer;\r\n  position: absolute;\r\n}\r\n\r\n.popup-reservation-img-div {\r\n  width: 50vh;\r\n  height: 30vh;\r\n}\r\n\r\n.name-inst-div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.area-category-div {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  width: 110vh;\r\n}\r\n\r\np {\r\n  font-size: 15px;\r\n  width: 70vh;\r\n}\r\n\r\n.reservations-conatainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.reservations-div {\r\n  height: 11vh;\r\n  overflow-y: scroll;\r\n  border: 1px solid rgb(2, 2, 2);\r\n  padding: 0 0 0 10px;\r\n}\r\n\r\n.reservations {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n\r\n.popup-reservation-container form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 40vh;\r\n  margin-top: 2vh;\r\n}\r\n\r\n.popup-reservation-container form input {\r\n  margin-bottom: 1vh;\r\n  padding: 2.5px 0 2.5px 5px;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  height: 10vh;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  font-size: x-large;\r\n  column-gap: 5%;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n.meal-logo-div {\r\n  margin-left: 5vh;\r\n  height: 100%;\r\n  width: 10vh;\r\n}\r\n\r\nheader span {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-left: 20vh;\r\n  cursor: pointer;\r\n  font-size: x-large;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 10vh;\r\n  margin-top: 10vh;\r\n  border: 1px solid rgb(0, 0, 0);\r\n}\r\n\r\n/* js classes */\r\n\r\n.meal-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 15px;\r\n}\r\n\r\n.like-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.like {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.meal-img {\r\n  width: 100%;\r\n  height: 30vh;\r\n}\r\n\r\n.meals {\r\n  display: flex;\r\n  column-gap: 15%;\r\n  flex-wrap: wrap;\r\n  height: 100%;\r\n  width: 100%;\r\n  row-gap: 19px;\r\n  justify-content: space-around;\r\n}\r\n\r\n.popup {\r\n  display: none;\r\n  position: fixed;\r\n  background: #fff;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 200;\r\n  top: 0;\r\n  left: 0;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.closeBtn {\r\n  display: block;\r\n  float: right;\r\n  height: 25px;\r\n  width: 25px;\r\n  cursor: pointer;\r\n  margin-right: 10px;\r\n}\r\n\r\n.popupcontent {\r\n  padding: 25px;\r\n  font-size: larger;\r\n  padding-left: 10%;\r\n  margin: auto;\r\n  text-align: center;\r\n\r\n  /* margin-left: 10%; */\r\n}\r\n\r\n.detail-flex {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.recipe {\r\n  width: 60%;\r\n  font-size: 15px;\r\n  margin: auto;\r\n}\r\n\r\n.instructions {\r\n  width: 60%;\r\n  margin: auto;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.img-large {\r\n  height: 30vh;\r\n  width: 60%;\r\n}\r\n\r\n.submitBtn {\r\n  width: 40%;\r\n  margin-left: 20%;\r\n}\r\n\r\n.commentText {\r\n  text-align: left;\r\n  padding: 4px;\r\n  height: 100px;\r\n}\r\n\r\n.byName {\r\n  margin-left: 5px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Combo&family=Poppins&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\nhtml {\r\n  overflow-x: hidden;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.container {\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  position: absolute;\r\n  position: fixed;\r\n}\r\n\r\n.container-appear {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.popup-reservation-container {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  background-color: rgba(255, 255, 255, 0.961);\r\n  color: black;\r\n  padding: 1vh;\r\n  border: 2px solid rgb(0, 0, 0);\r\n  position: relative;\r\n  position: absolute;\r\n  position: fixed;\r\n  width: 90%;\r\n  height: 90vh;\r\n  margin: 1vh;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.reservation-page-close-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-left: 94%;\r\n  width: 5vh;\r\n  height: 5vh;\r\n  cursor: pointer;\r\n  position: absolute;\r\n}\r\n\r\n.popup-reservation-img-div {\r\n  width: 50vh;\r\n  height: 30vh;\r\n}\r\n\r\n.name-inst-div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.area-category-div {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  width: 110vh;\r\n}\r\n\r\np {\r\n  font-size: 15px;\r\n  width: 70vh;\r\n}\r\n\r\n.reservations-conatainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.reservations-div {\r\n  height: 11vh;\r\n  overflow-y: scroll;\r\n  border: 1px solid rgb(2, 2, 2);\r\n  padding: 0 0 0 10px;\r\n}\r\n\r\n.reservations {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n\r\n.popup-reservation-container form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 40vh;\r\n  margin-top: 2vh;\r\n}\r\n\r\n.popup-reservation-container form input {\r\n  margin-bottom: 1vh;\r\n  padding: 2.5px 0 2.5px 5px;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  height: 10vh;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  font-size: x-large;\r\n  column-gap: 5%;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n.meal-logo-div {\r\n  margin-left: 5vh;\r\n  height: 100%;\r\n  width: 10vh;\r\n}\r\n\r\nheader span {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-left: 20vh;\r\n  cursor: pointer;\r\n  font-size: x-large;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 10vh;\r\n  margin-top: 10vh;\r\n  border: 1px solid rgb(0, 0, 0);\r\n}\r\n\r\n/* js classes */\r\n\r\n.meal-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 15px;\r\n}\r\n\r\n.like-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.like {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.meal-img {\r\n  width: 100%;\r\n  height: 30vh;\r\n}\r\n\r\n.meals {\r\n  display: flex;\r\n  column-gap: 15%;\r\n  flex-wrap: wrap;\r\n  height: 100%;\r\n  width: 100%;\r\n  row-gap: 19px;\r\n  justify-content: space-around;\r\n}\r\n\r\n.popup {\r\n  display: none;\r\n  position: fixed;\r\n  background: #fff;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 200;\r\n  top: 0;\r\n  left: 0;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.closeBtn {\r\n  display: block;\r\n  float: right;\r\n  height: 25px;\r\n  width: 25px;\r\n  cursor: pointer;\r\n  margin-right: 10px;\r\n}\r\n\r\n.popupcontent {\r\n  padding: 25px;\r\n  font-size: larger;\r\n  padding-left: 10%;\r\n  margin: auto;\r\n  text-align: center;\r\n\r\n  /* margin-left: 10%; */\r\n}\r\n\r\n.detail-flex {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.recipe {\r\n  width: 60%;\r\n  font-size: 15px;\r\n  margin: auto;\r\n}\r\n\r\n.instructions {\r\n  width: 60%;\r\n  margin: auto;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.img-large {\r\n  height: 30vh;\r\n  width: 60%;\r\n}\r\n\r\n.submitBtn {\r\n  width: 40%;\r\n  margin-left: 20%;\r\n}\r\n\r\n.commentText {\r\n  text-align: left;\r\n  padding: 4px;\r\n  height: 100px;\r\n}\r\n\r\n.byName {\r\n  margin-left: 5px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/api.js */ "./src/modules/api.js");
/* harmony import */ var _modules_user_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/user.js */ "./src/modules/user.js");
/* harmony import */ var _modules_images_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/images.js */ "./src/modules/images.js");
/* harmony import */ var _modules_reservation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/reservation.js */ "./src/modules/reservation.js");






/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLike": () => (/* binding */ addLike),
/* harmony export */   "getComment": () => (/* binding */ getComment),
/* harmony export */   "getLikes": () => (/* binding */ getLikes),
/* harmony export */   "getMealsInfo": () => (/* binding */ getMealsInfo),
/* harmony export */   "getRecipe": () => (/* binding */ getRecipe),
/* harmony export */   "getReservations": () => (/* binding */ getReservations),
/* harmony export */   "getStrInstruction": () => (/* binding */ getStrInstruction),
/* harmony export */   "ides": () => (/* binding */ ides),
/* harmony export */   "postReservations": () => (/* binding */ postReservations)
/* harmony export */ });
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.js */ "./src/modules/ui.js");
/* harmony import */ var _reservation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reservation.js */ "./src/modules/reservation.js");



const id = 'tKVlvnEbmf4TMWB77SE7';
const urlMealrecipe = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const urlAllMeals = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
const invApiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${id}/likes`;
const ides = ['52959', '52819', '52944', '53043', '52802', '52918'];

const getLikes = async () => {
  try {
    const allLikes = await fetch(invApiUrl, {
      method: 'Get',
    });
    return allLikes.json();
  } catch (error) {
    return error;
  }
};

const postReservations = async (data) => {
  let reservation = '';
  try {
    reservation = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tKVlvnEbmf4TMWB77SE7/reservations/',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      },
    );
    // eslint-disable-next-line no-empty
  } catch (error) {}
  return reservation;
};

const getReservations = async (id) => {
  const ID = id.toString();
  try {
    const reservation = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tKVlvnEbmf4TMWB77SE7/reservations?item_id=${ID}`,
      {
        method: 'Get',
      },
    );
    const res = await reservation.json();
    return res;
  } catch (error) {
    return error;
  }
};

const getStrInstruction = async (id) => {
  const ID = id.toString();
  try {
    const reservation = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ID}`,
      {
        method: 'Get',
      },
    );
    const res = await reservation.json();
    return res.meals[0];
  } catch (error) {
    return error;
  }
};

const getMealsInfo = async () => {
  const allMeals = await fetch(urlAllMeals, {
    method: 'Get',
  });
  const likes = await getLikes();
  const meals = await allMeals.json();
  (0,_ui_js__WEBPACK_IMPORTED_MODULE_0__["default"])(meals.meals, likes);
  (0,_reservation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(meals.meals);
};

const addLike = async (index) => {
  try {
    const userPost = await fetch(invApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: `${ides[index]}`,
      }),
    });
    return userPost;
  } catch (error) {
    return error;
  }
};

const getComment = async (id) => {
  const comments = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tKVlvnEbmf4TMWB77SE7/comments?item_id=${id}`,
    {
      method: 'Get',
    },
  );
  const commentsResponse = await comments.json();
  return commentsResponse;
};

const getRecipe = async (id) => {
  const url = urlMealrecipe + id;
  const comments = await fetch(url, {
    method: 'Get',
  });
  const commentsResponse = await comments.json();
  return commentsResponse;
};



/***/ }),

/***/ "./src/modules/calmeals.js":
/*!*********************************!*\
  !*** ./src/modules/calmeals.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const calMeals = () => document.querySelector('.meals').childElementCount;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calMeals);


/***/ }),

/***/ "./src/modules/commentdisplay.js":
/*!***************************************!*\
  !*** ./src/modules/commentdisplay.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tKVlvnEbmf4TMWB77SE7/comments?item_id=';
const commentDisplay = async (id) => {
  const url = commentUrl + id;
  const response = await fetch(url, {
    method: 'Get',
  });
  const comments = await response.json();
  const div = document.createElement('div');
  comments.forEach((element) => {
    const p = document.createElement('p');
    p.innerHTML = `${element.creation_date}  ${element.username}: ${element.comment}`;
    div.appendChild(p);
  });
  return div;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentDisplay);

/***/ }),

/***/ "./src/modules/commentpopup.js":
/*!*************************************!*\
  !*** ./src/modules/commentpopup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import commentDisplay from './commentdisplay.js';
// import { getComment } from './api.js';
const popupContent = document.querySelector('.popupcontent');
const popup = document.getElementById('popup');
const urlMealrecipe = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const getRecipe = async (id) => {
  const url = urlMealrecipe + id;
  const comments = await fetch(url, {
    method: 'Get',
  });
  const meal = await comments.json();
  popupContent.innerHTML = '';
  const closeBtn = document.createElement('i');
  closeBtn.className = 'closeBtn fa fa-times fa-4x';
  closeBtn.id = meal.meals[0].idMeal;
  popupContent.appendChild(closeBtn);
  const image = document.createElement('img');
  const src = meal.meals[0].strMealThumb;
  image.className = 'img-large';
  image.src = src;
  popupContent.appendChild(image);
  const heading = document.createElement('h3');
  heading.className = 'heading';
  heading.innerHTML = meal.meals[0].strMeal;
  popupContent.appendChild(heading);
  const detailDiv = document.createElement('div');
  detailDiv.className = 'detail-flex';
  popupContent.appendChild(detailDiv);
  const areaP = document.createElement('p');
  areaP.innerHTML = `Area:    ${meal.meals[0].strArea}`;
  const paragraph = document.createElement('p');
  // if (meal.meals[0].strInstructions.length > 500) {
  //   meal.meals[0].strInstructions = meal.meals[0].strInstructions.substring(0,500) + '...';
  // }
  paragraph.className = 'recipe';
  paragraph.innerHTML = meal.meals[0].strInstructions;
  popupContent.appendChild(paragraph);
  const categoryP = document.createElement('p');
  categoryP.innerHTML = `Category:   ${meal.meals[0].strCategory}`;

  detailDiv.appendChild(areaP);
  detailDiv.appendChild(categoryP);
  const subHeading = document.createElement('h4');
  subHeading.className = 'subheading';
  subHeading.innerHTML = 'Comments';
  popupContent.appendChild(subHeading);
  const commentsDiv = document.createElement('div');
  commentsDiv.id = 'commentDiv';
  popupContent.appendChild(commentsDiv);
  const subHeading2 = document.createElement('h4');
  subHeading2.className = 'subheading2';
  subHeading2.innerHTML = 'Add A Comment';
  popupContent.appendChild(subHeading2);
  const formDiv = document.createElement('div');
  formDiv.className = 'form-div';
  const form = document.createElement('form');
  form.setAttribute('method', 'post');
  const commentName = document.createElement('input');
  commentName.setAttribute('type', 'text');
  commentName.setAttribute('id', 'commentname');
  commentName.setAttribute('placeholder', 'Your Name');

  const commentText = document.createElement('input');
  commentText.setAttribute('type', 'textarea');
  commentText.setAttribute('id', 'commentsubject');
  commentText.setAttribute('placeholder', 'Your Insights');
  commentText.className = 'commentText';

  const submitBtn = document.createElement('input');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('value', 'Submit');
  submitBtn.className = 'submitBtn';
  form.appendChild(commentName);
  form.appendChild(commentText);
  form.appendChild(submitBtn);
  formDiv.appendChild(form);
  popupContent.appendChild(formDiv);
  popup.style.display = 'block';
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popup.style.display = 'none';
  });
  // const displayedcomments = commentDisplay(id);
  // console.log(displayedcomments);
  const commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tKVlvnEbmf4TMWB77SE7/comments?item_id=';
  const commentDisplay = async (id) => {
    const url = commentUrl + id;
    const response = await fetch(url, {
      method: 'Get',
    });
    const comments = await response.json();
    const div = document.createElement('div');
    comments.forEach((element) => {
      const p = document.createElement('p');
      p.innerHTML = `${element.creation_date}  ${element.username}: ${element.comment}`;
      div.appendChild(p);
    });

    subHeading.innerHTML = `Comments (${comments.length})`;
  };
  commentDisplay(id);
  const commentPost = async () => {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tKVlvnEbmf4TMWB77SE7/comments/', {
      method: 'Post',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: Number(id),
        username: commentName.value,
        comment: commentText.value,
      }),
    });
    form.reset();
    return response;
  };

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (commentName.value !== '' || commentText.value !== '') {
      commentPost(id);
      getRecipe(id);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRecipe);


/***/ }),

/***/ "./src/modules/images.js":
/*!*******************************!*\
  !*** ./src/modules/images.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_icons_meal_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/meal-logo.png */ "./src/assets/icons/meal-logo.png");


const mealLogo1 = new Image();
mealLogo1.src = _assets_icons_meal_logo_png__WEBPACK_IMPORTED_MODULE_0__;
document.querySelector('.meal-logo-div').append(mealLogo1);


/***/ }),

/***/ "./src/modules/resObj.js":
/*!*******************************!*\
  !*** ./src/modules/resObj.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Object {
  constructor(index, name, startDate, endDate) {
    this.item_id = index;
    this.username = name;
    this.date_start = startDate;
    this.date_end = endDate;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object);

/***/ }),

/***/ "./src/modules/reservation.js":
/*!************************************!*\
  !*** ./src/modules/reservation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resObj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resObj.js */ "./src/modules/resObj.js");


const API = __webpack_require__(/*! ./api.js */ "./src/modules/api.js");

const popupContainer = document.querySelector('.container');
const resPageCloseBtn = document.querySelector('.reservation-page-close-btn');
const popupResImgDiv = document.querySelector('.popup-reservation-img-div');
const name = document.querySelector('.name');
const instruction = document.querySelector('.instructions');
const area = document.querySelector('.area');
const category = document.querySelector('.category');
const meals = document.querySelector('.meals');

const element = (data) => {
  document.querySelector('.reservations-div').innerHTML = '';
  if (Array.isArray(data)) {
    document.querySelector('.res-count').innerHTML = `(${data.length})`;
    data.forEach((element) => {
      const div = document.createElement('div');
      div.classList = 'reservations';
      const startDate = document.createElement('h4');
      startDate.innerHTML = element.date_start;
      const endDate = document.createElement('h4');
      endDate.innerHTML = `~${element.date_end}`;
      const name = document.createElement('h3');
      name.classList = 'byName';
      name.innerHTML = `by ${element.username}`;
      div.append(startDate, endDate, name);
      document.querySelector('.reservations-div').appendChild(div);
    });
  } else {
    document.querySelector('.res-count').innerHTML = '(0)';
  }
};

const nameInput = document.querySelector('.Your-name');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');

let index = '';

let array = [];

const resBtn = (data) => {
  array = data;
};

meals.addEventListener('click', async (event) => {
  if (event.target.className === 'resBtn') {
    nameInput.value = '';
    startDate.value = '';
    endDate.value = '';
    index = parseInt(event.target.parentElement.id, 10);
    const meals = await API.getStrInstruction(index);
    const ID = event.target.id;
    popupContainer.classList.add('container-appear');
    const resPageImg = new Image();
    resPageImg.src = array[ID].strMealThumb;
    popupResImgDiv.innerHTML = '';
    popupResImgDiv.append(resPageImg);
    name.innerHTML = array[ID].strMeal;
    area.innerHTML = `Area: ${meals.strArea}`;
    category.innerHTML = `Category: ${meals.strCategory}`;
    instruction.innerHTML = meals.strInstructions;
    const reservation = await API.getReservations(index);
    element(reservation);
  }
});

resPageCloseBtn.addEventListener('click', () => {
  popupContainer.classList.remove('container-appear');
});

document.querySelector('.form-btn').addEventListener('click', async () => {
  if (nameInput.value !== '' && startDate.value !== '' && endDate.value !== '') {
    const obj = new _resObj_js__WEBPACK_IMPORTED_MODULE_0__["default"](
      index,
      nameInput.value,
      startDate.value,
      endDate.value,
    );
    await API.postReservations(obj);
    const reservation = await API.getReservations(index);
    element(reservation);
    nameInput.value = '';
    startDate.value = '';
    endDate.value = '';
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resBtn);


/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _calmeals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calmeals.js */ "./src/modules/calmeals.js");


const meals = document.querySelector('.meals');
const mealsCounter = document.querySelector('.meals-counter');
const ui = (data, likeNbrs = []) => {
  meals.innerHTML = '';
  data.forEach((meal, index) => {
    if (index <= 5) {
      if (meal.strMeal.length > 25) {
        meal.strMeal = `${meal.strMeal.substring(0, 15)}...`;
      }
      const li = document.createElement('li');
      li.className = 'meal-container';
      li.id = `${meal.idMeal}`;
      const image = document.createElement('img');
      const src = meal.strMealThumb;
      image.className = 'meal-img';
      image.src = src;

      const div = document.createElement('div');
      div.className = 'like-container';
      const header = document.createElement('h5');
      header.innerHTML = meal.strMeal;
      header.className = 'card-header';

      const likeDiv = document.createElement('div');
      likeDiv.className = 'like';
      const heartIcon = document.createElement('i');
      heartIcon.className = 'fa fa-heart-o like-icon';
      const likeTxt = document.createElement('h7');
      likeTxt.className = 'like-txt';
      likeTxt.innerHTML = `${likeNbrs[index].likes} likes`;
      likeTxt.id = index;

      likeDiv.appendChild(heartIcon);
      likeDiv.appendChild(likeTxt);

      div.appendChild(header);
      div.appendChild(likeDiv);

      const comBtn = document.createElement('button');
      comBtn.className = 'comBtn';
      comBtn.id = meal.idMeal;
      comBtn.innerHTML = 'Comments';

      const resBtn = document.createElement('button');
      resBtn.className = 'resBtn';
      resBtn.id = `${index}`;
      resBtn.innerHTML = 'Reservations';

      li.appendChild(image);
      li.appendChild(div);
      li.appendChild(comBtn);
      li.appendChild(resBtn);
      meals.appendChild(li);
    }
  });

  mealsCounter.innerHTML = `Meals(${(0,_calmeals_js__WEBPACK_IMPORTED_MODULE_0__["default"])()})`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ui);


/***/ }),

/***/ "./src/modules/user.js":
/*!*****************************!*\
  !*** ./src/modules/user.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/modules/api.js");
/* harmony import */ var _commentpopup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentpopup.js */ "./src/modules/commentpopup.js");
/* harmony import */ var _commentdisplay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentdisplay.js */ "./src/modules/commentdisplay.js");




const meals = document.querySelector('.meals');
window.addEventListener('load', () => {
  (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getMealsInfo)();
});

meals.addEventListener('click', async (e) => {
  // trash icon
  if (e.target.closest('.like-icon')) {
    const likeText = e.target.closest('.like-icon').nextElementSibling;
    const likeIcon = e.target.closest('.like-icon');
    const { id } = likeText;
    (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.addLike)(id);
    const likeNbr = parseInt(likeText.innerHTML, 10) + 1;
    likeText.innerHTML = `${likeNbr} likes`;
    likeIcon.className = 'fa fa-heart';
  }
});

meals.addEventListener('click', (e) => {
  if (e.target.closest('.comBtn')) {
    const btn = e.target;
    const { id } = btn;
    (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(id);
    (0,_commentpopup_js__WEBPACK_IMPORTED_MODULE_1__["default"])(id);
    (0,_commentdisplay_js__WEBPACK_IMPORTED_MODULE_2__["default"])(id);
  }
});


/***/ }),

/***/ "./src/assets/icons/meal-logo.png":
/*!****************************************!*\
  !*** ./src/assets/icons/meal-logo.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5584b9143d4985aaa509.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksc0hBQXNILFdBQVcs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LFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsdUJBQXVCO0FBQ3BEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLE1BQU07QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxvQ0FBb0Msd0RBQVEsR0FBRztBQUMvQzs7QUFFQSxpRUFBZSxFQUFFLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzdEMkM7QUFDbkI7QUFDTzs7QUFFakQ7QUFDQTtBQUNBLEVBQUUscURBQVk7QUFDZCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLEtBQUs7QUFDakIsSUFBSSxnREFBTztBQUNYO0FBQ0EsNEJBQTRCLFNBQVM7QUFDckM7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsWUFBWSxLQUFLO0FBQ2pCLElBQUksbURBQVU7QUFDZCxJQUFJLDREQUFTO0FBQ2IsSUFBSSw4REFBYztBQUNsQjtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BUEktQkFTRUQtQVBQLS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vQVBJLUJBU0VELUFQUC0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0FQSS1CQVNFRC1BUFAtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vQVBJLUJBU0VELUFQUC0vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vQVBJLUJBU0VELUFQUC0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vQVBJLUJBU0VELUFQUC0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL0FQSS1CQVNFRC1BUFAtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL0FQSS1CQVNFRC1BUFAtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL0FQSS1CQVNFRC1BUFAtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vQVBJLUJBU0VELUFQUC0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9BUEktQkFTRUQtQVBQLS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9BUEktQkFTRUQtQVBQLS8uL3NyYy9tb2R1bGVzL2FwaS5qcyIsIndlYnBhY2s6Ly9BUEktQkFTRUQtQVBQLS8uL3NyYy9tb2R1bGVzL2NhbG1lYWxzLmpzIiwid2VicGFjazovL0FQSS1CQVNFRC1BUFAtLy4vc3JjL21vZHVsZXMvY29tbWVudGRpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vQVBJLUJBU0VELUFQUC0vLi9zcmMvbW9kdWxlcy9jb21tZW50cG9wdXAuanMiLCJ3ZWJwYWNrOi8vQVBJLUJBU0VELUFQUC0vLi9zcmMvbW9kdWxlcy9pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vQVBJLUJBU0VELUFQUC0vLi9zcmMvbW9kdWxlcy9yZXNPYmouanMiLCJ3ZWJwYWNrOi8vQVBJLUJBU0VELUFQUC0vLi9zcmMvbW9kdWxlcy9yZXNlcnZhdGlvbi5qcyIsIndlYnBhY2s6Ly9BUEktQkFTRUQtQVBQLS8uL3NyYy9tb2R1bGVzL3VpLmpzIiwid2VicGFjazovL0FQSS1CQVNFRC1BUFAtLy4vc3JjL21vZHVsZXMvdXNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvbWJvJmZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWFwcGVhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtcmVzZXJ2YXRpb24tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NjEpO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgcGFkZGluZzogMXZoO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDAsIDApO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogOTB2aDtcXHJcXG4gIG1hcmdpbjogMXZoO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24tcGFnZS1jbG9zZS1idG4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA5NCU7XFxyXFxuICB3aWR0aDogNXZoO1xcclxcbiAgaGVpZ2h0OiA1dmg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1yZXNlcnZhdGlvbi1pbWctZGl2IHtcXHJcXG4gIHdpZHRoOiA1MHZoO1xcclxcbiAgaGVpZ2h0OiAzMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1pbnN0LWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hcmVhLWNhdGVnb3J5LWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiAxMTB2aDtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICB3aWR0aDogNzB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9ucy1jb25hdGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9ucy1kaXYge1xcclxcbiAgaGVpZ2h0OiAxMXZoO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIsIDIsIDIpO1xcclxcbiAgcGFkZGluZzogMCAwIDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1yZXNlcnZhdGlvbi1jb250YWluZXIgZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiA0MHZoO1xcclxcbiAgbWFyZ2luLXRvcDogMnZoO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtcmVzZXJ2YXRpb24tY29udGFpbmVyIGZvcm0gaW5wdXQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcclxcbiAgcGFkZGluZzogMi41cHggMCAyLjVweCA1cHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMHZoO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG4gIGNvbHVtbi1nYXA6IDUlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNSU7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWxvZ28tZGl2IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1dmg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTB2aDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHNwYW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMHZoO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMHZoO1xcclxcbiAgbWFyZ2luLXRvcDogMTB2aDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLyoganMgY2xhc3NlcyAqL1xcclxcblxcclxcbi5tZWFsLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHJvdy1nYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWxzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBjb2x1bW4tZ2FwOiAxNSU7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHJvdy1nYXA6IDE5cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAyMDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VCdG4ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwY29udGVudCB7XFxyXFxuICBwYWRkaW5nOiAyNXB4O1xcclxcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gIC8qIG1hcmdpbi1sZWZ0OiAxMCU7ICovXFxyXFxufVxcclxcblxcclxcbi5kZXRhaWwtZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlIHtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5pbnN0cnVjdGlvbnMge1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbWctbGFyZ2Uge1xcclxcbiAgaGVpZ2h0OiAzMHZoO1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdEJ0biB7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRUZXh0IHtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBwYWRkaW5nOiA0cHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnlOYW1lIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qiw0Q0FBNEM7RUFDNUMsWUFBWTtFQUNaLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiw4QkFBOEI7QUFDaEM7O0FBRUEsZUFBZTs7QUFFZjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjs7RUFFbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db21ibyZmYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1hcHBlYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLXJlc2VydmF0aW9uLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTYxKTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDF2aDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBoZWlnaHQ6IDkwdmg7XFxyXFxuICBtYXJnaW46IDF2aDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLXBhZ2UtY2xvc2UtYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogOTQlO1xcclxcbiAgd2lkdGg6IDV2aDtcXHJcXG4gIGhlaWdodDogNXZoO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtcmVzZXJ2YXRpb24taW1nLWRpdiB7XFxyXFxuICB3aWR0aDogNTB2aDtcXHJcXG4gIGhlaWdodDogMzB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtaW5zdC1kaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJlYS1jYXRlZ29yeS1kaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB3aWR0aDogMTEwdmg7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgd2lkdGg6IDcwdmg7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbnMtY29uYXRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbnMtZGl2IHtcXHJcXG4gIGhlaWdodDogMTF2aDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyLCAyLCAyKTtcXHJcXG4gIHBhZGRpbmc6IDAgMCAwIDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtcmVzZXJ2YXRpb24tY29udGFpbmVyIGZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogNDB2aDtcXHJcXG4gIG1hcmdpbi10b3A6IDJ2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLXJlc2VydmF0aW9uLWNvbnRhaW5lciBmb3JtIGlucHV0IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDF2aDtcXHJcXG4gIHBhZGRpbmc6IDIuNXB4IDAgMi41cHggNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTB2aDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxuICBjb2x1bW4tZ2FwOiA1JTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1sb2dvLWRpdiB7XFxyXFxuICBtYXJnaW4tbGVmdDogNXZoO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwdmg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBzcGFuIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogMjB2aDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTB2aDtcXHJcXG4gIG1hcmdpbi10b3A6IDEwdmg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbi8qIGpzIGNsYXNzZXMgKi9cXHJcXG5cXHJcXG4ubWVhbC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICByb3ctZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2Uge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDMwdmg7XFxyXFxufVxcclxcblxcclxcbi5tZWFscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgY29sdW1uLWdhcDogMTUlO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICByb3ctZ2FwOiAxOXB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgei1pbmRleDogMjAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlQnRuIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cGNvbnRlbnQge1xcclxcbiAgcGFkZGluZzogMjVweDtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAvKiBtYXJnaW4tbGVmdDogMTAlOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsLWZsZXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZSB7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5zdHJ1Y3Rpb25zIHtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWxhcmdlIHtcXHJcXG4gIGhlaWdodDogMzB2aDtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXRCdG4ge1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50VGV4dCB7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ5TmFtZSB7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9tb2R1bGVzL2FwaS5qcyc7XG5pbXBvcnQgJy4vbW9kdWxlcy91c2VyLmpzJztcbmltcG9ydCAnLi9tb2R1bGVzL2ltYWdlcy5qcyc7XG5pbXBvcnQgJy4vbW9kdWxlcy9yZXNlcnZhdGlvbi5qcyc7IiwiaW1wb3J0IHVpIGZyb20gJy4vdWkuanMnO1xuaW1wb3J0IHJlc0J0biBmcm9tICcuL3Jlc2VydmF0aW9uLmpzJztcblxuY29uc3QgaWQgPSAndEtWbHZuRWJtZjRUTVdCNzdTRTcnO1xuY29uc3QgdXJsTWVhbHJlY2lwZSA9ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvbG9va3VwLnBocD9pPSc7XG5jb25zdCB1cmxBbGxNZWFscyA9ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvZmlsdGVyLnBocD9jPVNlYWZvb2QnO1xuY29uc3QgaW52QXBpVXJsID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7aWR9L2xpa2VzYDtcbmV4cG9ydCBjb25zdCBpZGVzID0gWyc1Mjk1OScsICc1MjgxOScsICc1Mjk0NCcsICc1MzA0MycsICc1MjgwMicsICc1MjkxOCddO1xuXG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBhbGxMaWtlcyA9IGF3YWl0IGZldGNoKGludkFwaVVybCwge1xuICAgICAgbWV0aG9kOiAnR2V0JyxcbiAgICB9KTtcbiAgICByZXR1cm4gYWxsTGlrZXMuanNvbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufTtcblxuY29uc3QgcG9zdFJlc2VydmF0aW9ucyA9IGFzeW5jIChkYXRhKSA9PiB7XG4gIGxldCByZXNlcnZhdGlvbiA9ICcnO1xuICB0cnkge1xuICAgIHJlc2VydmF0aW9uID0gYXdhaXQgZmV0Y2goXG4gICAgICAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvdEtWbHZuRWJtZjRUTVdCNzdTRTcvcmVzZXJ2YXRpb25zLycsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICB9LFxuICAgICk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gIH0gY2F0Y2ggKGVycm9yKSB7fVxuICByZXR1cm4gcmVzZXJ2YXRpb247XG59O1xuXG5jb25zdCBnZXRSZXNlcnZhdGlvbnMgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgSUQgPSBpZC50b1N0cmluZygpO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc2VydmF0aW9uID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvdEtWbHZuRWJtZjRUTVdCNzdTRTcvcmVzZXJ2YXRpb25zP2l0ZW1faWQ9JHtJRH1gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdHZXQnLFxuICAgICAgfSxcbiAgICApO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlc2VydmF0aW9uLmpzb24oKTtcbiAgICByZXR1cm4gcmVzO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufTtcblxuY29uc3QgZ2V0U3RySW5zdHJ1Y3Rpb24gPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgSUQgPSBpZC50b1N0cmluZygpO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc2VydmF0aW9uID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2xvb2t1cC5waHA/aT0ke0lEfWAsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogJ0dldCcsXG4gICAgICB9LFxuICAgICk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgcmVzZXJ2YXRpb24uanNvbigpO1xuICAgIHJldHVybiByZXMubWVhbHNbMF07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59O1xuXG5jb25zdCBnZXRNZWFsc0luZm8gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFsbE1lYWxzID0gYXdhaXQgZmV0Y2godXJsQWxsTWVhbHMsIHtcbiAgICBtZXRob2Q6ICdHZXQnLFxuICB9KTtcbiAgY29uc3QgbGlrZXMgPSBhd2FpdCBnZXRMaWtlcygpO1xuICBjb25zdCBtZWFscyA9IGF3YWl0IGFsbE1lYWxzLmpzb24oKTtcbiAgdWkobWVhbHMubWVhbHMsIGxpa2VzKTtcbiAgcmVzQnRuKG1lYWxzLm1lYWxzKTtcbn07XG5cbmNvbnN0IGFkZExpa2UgPSBhc3luYyAoaW5kZXgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1c2VyUG9zdCA9IGF3YWl0IGZldGNoKGludkFwaVVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpdGVtX2lkOiBgJHtpZGVzW2luZGV4XX1gLFxuICAgICAgfSksXG4gICAgfSk7XG4gICAgcmV0dXJuIHVzZXJQb3N0O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufTtcblxuY29uc3QgZ2V0Q29tbWVudCA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy90S1Zsdm5FYm1mNFRNV0I3N1NFNy9jb21tZW50cz9pdGVtX2lkPSR7aWR9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6ICdHZXQnLFxuICAgIH0sXG4gICk7XG4gIGNvbnN0IGNvbW1lbnRzUmVzcG9uc2UgPSBhd2FpdCBjb21tZW50cy5qc29uKCk7XG4gIHJldHVybiBjb21tZW50c1Jlc3BvbnNlO1xufTtcblxuY29uc3QgZ2V0UmVjaXBlID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHVybCA9IHVybE1lYWxyZWNpcGUgKyBpZDtcbiAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdHZXQnLFxuICB9KTtcbiAgY29uc3QgY29tbWVudHNSZXNwb25zZSA9IGF3YWl0IGNvbW1lbnRzLmpzb24oKTtcbiAgcmV0dXJuIGNvbW1lbnRzUmVzcG9uc2U7XG59O1xuXG5leHBvcnQge1xuICBnZXRDb21tZW50LFxuICBnZXRSZWNpcGUsXG4gIHBvc3RSZXNlcnZhdGlvbnMsXG4gIGdldFJlc2VydmF0aW9ucyxcbiAgZ2V0U3RySW5zdHJ1Y3Rpb24sXG4gIGdldE1lYWxzSW5mbyxcbiAgYWRkTGlrZSxcbiAgZ2V0TGlrZXMsXG5cbn07IiwiY29uc3QgY2FsTWVhbHMgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVhbHMnKS5jaGlsZEVsZW1lbnRDb3VudDtcbmV4cG9ydCBkZWZhdWx0IGNhbE1lYWxzO1xuIiwiY29uc3QgY29tbWVudFVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy90S1Zsdm5FYm1mNFRNV0I3N1NFNy9jb21tZW50cz9pdGVtX2lkPSc7XG5jb25zdCBjb21tZW50RGlzcGxheSA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCB1cmwgPSBjb21tZW50VXJsICsgaWQ7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnR2V0JyxcbiAgfSk7XG4gIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29tbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC5pbm5lckhUTUwgPSBgJHtlbGVtZW50LmNyZWF0aW9uX2RhdGV9ICAke2VsZW1lbnQudXNlcm5hbWV9OiAke2VsZW1lbnQuY29tbWVudH1gO1xuICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcbiAgfSk7XG4gIHJldHVybiBkaXY7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21tZW50RGlzcGxheTsiLCIvLyBpbXBvcnQgY29tbWVudERpc3BsYXkgZnJvbSAnLi9jb21tZW50ZGlzcGxheS5qcyc7XG4vLyBpbXBvcnQgeyBnZXRDb21tZW50IH0gZnJvbSAnLi9hcGkuanMnO1xuY29uc3QgcG9wdXBDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwY29udGVudCcpO1xuY29uc3QgcG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAnKTtcbmNvbnN0IHVybE1lYWxyZWNpcGUgPSAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2xvb2t1cC5waHA/aT0nO1xuY29uc3QgZ2V0UmVjaXBlID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHVybCA9IHVybE1lYWxyZWNpcGUgKyBpZDtcbiAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdHZXQnLFxuICB9KTtcbiAgY29uc3QgbWVhbCA9IGF3YWl0IGNvbW1lbnRzLmpzb24oKTtcbiAgcG9wdXBDb250ZW50LmlubmVySFRNTCA9ICcnO1xuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgY2xvc2VCdG4uY2xhc3NOYW1lID0gJ2Nsb3NlQnRuIGZhIGZhLXRpbWVzIGZhLTR4JztcbiAgY2xvc2VCdG4uaWQgPSBtZWFsLm1lYWxzWzBdLmlkTWVhbDtcbiAgcG9wdXBDb250ZW50LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3Qgc3JjID0gbWVhbC5tZWFsc1swXS5zdHJNZWFsVGh1bWI7XG4gIGltYWdlLmNsYXNzTmFtZSA9ICdpbWctbGFyZ2UnO1xuICBpbWFnZS5zcmMgPSBzcmM7XG4gIHBvcHVwQ29udGVudC5hcHBlbmRDaGlsZChpbWFnZSk7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBoZWFkaW5nLmNsYXNzTmFtZSA9ICdoZWFkaW5nJztcbiAgaGVhZGluZy5pbm5lckhUTUwgPSBtZWFsLm1lYWxzWzBdLnN0ck1lYWw7XG4gIHBvcHVwQ29udGVudC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgY29uc3QgZGV0YWlsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRldGFpbERpdi5jbGFzc05hbWUgPSAnZGV0YWlsLWZsZXgnO1xuICBwb3B1cENvbnRlbnQuYXBwZW5kQ2hpbGQoZGV0YWlsRGl2KTtcbiAgY29uc3QgYXJlYVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGFyZWFQLmlubmVySFRNTCA9IGBBcmVhOiAgICAke21lYWwubWVhbHNbMF0uc3RyQXJlYX1gO1xuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIC8vIGlmIChtZWFsLm1lYWxzWzBdLnN0ckluc3RydWN0aW9ucy5sZW5ndGggPiA1MDApIHtcbiAgLy8gICBtZWFsLm1lYWxzWzBdLnN0ckluc3RydWN0aW9ucyA9IG1lYWwubWVhbHNbMF0uc3RySW5zdHJ1Y3Rpb25zLnN1YnN0cmluZygwLDUwMCkgKyAnLi4uJztcbiAgLy8gfVxuICBwYXJhZ3JhcGguY2xhc3NOYW1lID0gJ3JlY2lwZSc7XG4gIHBhcmFncmFwaC5pbm5lckhUTUwgPSBtZWFsLm1lYWxzWzBdLnN0ckluc3RydWN0aW9ucztcbiAgcG9wdXBDb250ZW50LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG4gIGNvbnN0IGNhdGVnb3J5UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY2F0ZWdvcnlQLmlubmVySFRNTCA9IGBDYXRlZ29yeTogICAke21lYWwubWVhbHNbMF0uc3RyQ2F0ZWdvcnl9YDtcblxuICBkZXRhaWxEaXYuYXBwZW5kQ2hpbGQoYXJlYVApO1xuICBkZXRhaWxEaXYuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlQKTtcbiAgY29uc3Qgc3ViSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIHN1YkhlYWRpbmcuY2xhc3NOYW1lID0gJ3N1YmhlYWRpbmcnO1xuICBzdWJIZWFkaW5nLmlubmVySFRNTCA9ICdDb21tZW50cyc7XG4gIHBvcHVwQ29udGVudC5hcHBlbmRDaGlsZChzdWJIZWFkaW5nKTtcbiAgY29uc3QgY29tbWVudHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29tbWVudHNEaXYuaWQgPSAnY29tbWVudERpdic7XG4gIHBvcHVwQ29udGVudC5hcHBlbmRDaGlsZChjb21tZW50c0Rpdik7XG4gIGNvbnN0IHN1YkhlYWRpbmcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgc3ViSGVhZGluZzIuY2xhc3NOYW1lID0gJ3N1YmhlYWRpbmcyJztcbiAgc3ViSGVhZGluZzIuaW5uZXJIVE1MID0gJ0FkZCBBIENvbW1lbnQnO1xuICBwb3B1cENvbnRlbnQuYXBwZW5kQ2hpbGQoc3ViSGVhZGluZzIpO1xuICBjb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm1EaXYuY2xhc3NOYW1lID0gJ2Zvcm0tZGl2JztcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdwb3N0Jyk7XG4gIGNvbnN0IGNvbW1lbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29tbWVudE5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgY29tbWVudE5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdjb21tZW50bmFtZScpO1xuICBjb21tZW50TmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lvdXIgTmFtZScpO1xuXG4gIGNvbnN0IGNvbW1lbnRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29tbWVudFRleHQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHRhcmVhJyk7XG4gIGNvbW1lbnRUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29tbWVudHN1YmplY3QnKTtcbiAgY29tbWVudFRleHQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdZb3VyIEluc2lnaHRzJyk7XG4gIGNvbW1lbnRUZXh0LmNsYXNzTmFtZSA9ICdjb21tZW50VGV4dCc7XG5cbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnU3VibWl0Jyk7XG4gIHN1Ym1pdEJ0bi5jbGFzc05hbWUgPSAnc3VibWl0QnRuJztcbiAgZm9ybS5hcHBlbmRDaGlsZChjb21tZW50TmFtZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoY29tbWVudFRleHQpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gIGZvcm1EaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIHBvcHVwQ29udGVudC5hcHBlbmRDaGlsZChmb3JtRGl2KTtcbiAgcG9wdXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSk7XG4gIC8vIGNvbnN0IGRpc3BsYXllZGNvbW1lbnRzID0gY29tbWVudERpc3BsYXkoaWQpO1xuICAvLyBjb25zb2xlLmxvZyhkaXNwbGF5ZWRjb21tZW50cyk7XG4gIGNvbnN0IGNvbW1lbnRVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvdEtWbHZuRWJtZjRUTVdCNzdTRTcvY29tbWVudHM/aXRlbV9pZD0nO1xuICBjb25zdCBjb21tZW50RGlzcGxheSA9IGFzeW5jIChpZCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IGNvbW1lbnRVcmwgKyBpZDtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiAnR2V0JyxcbiAgICB9KTtcbiAgICBjb25zdCBjb21tZW50cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb21tZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgcC5pbm5lckhUTUwgPSBgJHtlbGVtZW50LmNyZWF0aW9uX2RhdGV9ICAke2VsZW1lbnQudXNlcm5hbWV9OiAke2VsZW1lbnQuY29tbWVudH1gO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKHApO1xuICAgIH0pO1xuXG4gICAgc3ViSGVhZGluZy5pbm5lckhUTUwgPSBgQ29tbWVudHMgKCR7Y29tbWVudHMubGVuZ3RofSlgO1xuICB9O1xuICBjb21tZW50RGlzcGxheShpZCk7XG4gIGNvbnN0IGNvbW1lbnRQb3N0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3RLVmx2bkVibWY0VE1XQjc3U0U3L2NvbW1lbnRzLycsIHtcbiAgICAgIG1ldGhvZDogJ1Bvc3QnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGl0ZW1faWQ6IE51bWJlcihpZCksXG4gICAgICAgIHVzZXJuYW1lOiBjb21tZW50TmFtZS52YWx1ZSxcbiAgICAgICAgY29tbWVudDogY29tbWVudFRleHQudmFsdWUsXG4gICAgICB9KSxcbiAgICB9KTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9O1xuXG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChjb21tZW50TmFtZS52YWx1ZSAhPT0gJycgfHwgY29tbWVudFRleHQudmFsdWUgIT09ICcnKSB7XG4gICAgICBjb21tZW50UG9zdChpZCk7XG4gICAgICBnZXRSZWNpcGUoaWQpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRSZWNpcGU7XG4iLCJpbXBvcnQgbWVhbExvZ28gZnJvbSAnLi4vYXNzZXRzL2ljb25zL21lYWwtbG9nby5wbmcnO1xuXG5jb25zdCBtZWFsTG9nbzEgPSBuZXcgSW1hZ2UoKTtcbm1lYWxMb2dvMS5zcmMgPSBtZWFsTG9nbztcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWFsLWxvZ28tZGl2JykuYXBwZW5kKG1lYWxMb2dvMSk7XG4iLCJjbGFzcyBPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihpbmRleCwgbmFtZSwgc3RhcnREYXRlLCBlbmREYXRlKSB7XG4gICAgdGhpcy5pdGVtX2lkID0gaW5kZXg7XG4gICAgdGhpcy51c2VybmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kYXRlX3N0YXJ0ID0gc3RhcnREYXRlO1xuICAgIHRoaXMuZGF0ZV9lbmQgPSBlbmREYXRlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdDsiLCJpbXBvcnQgT2JqZWN0IGZyb20gJy4vcmVzT2JqLmpzJztcblxuY29uc3QgQVBJID0gcmVxdWlyZSgnLi9hcGkuanMnKTtcblxuY29uc3QgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG5jb25zdCByZXNQYWdlQ2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXJ2YXRpb24tcGFnZS1jbG9zZS1idG4nKTtcbmNvbnN0IHBvcHVwUmVzSW1nRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLXJlc2VydmF0aW9uLWltZy1kaXYnKTtcbmNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZScpO1xuY29uc3QgaW5zdHJ1Y3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5zdHJ1Y3Rpb25zJyk7XG5jb25zdCBhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFyZWEnKTtcbmNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5Jyk7XG5jb25zdCBtZWFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWFscycpO1xuXG5jb25zdCBlbGVtZW50ID0gKGRhdGEpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2VydmF0aW9ucy1kaXYnKS5pbm5lckhUTUwgPSAnJztcbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzLWNvdW50JykuaW5uZXJIVE1MID0gYCgke2RhdGEubGVuZ3RofSlgO1xuICAgIGRhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYuY2xhc3NMaXN0ID0gJ3Jlc2VydmF0aW9ucyc7XG4gICAgICBjb25zdCBzdGFydERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgc3RhcnREYXRlLmlubmVySFRNTCA9IGVsZW1lbnQuZGF0ZV9zdGFydDtcbiAgICAgIGNvbnN0IGVuZERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgZW5kRGF0ZS5pbm5lckhUTUwgPSBgfiR7ZWxlbWVudC5kYXRlX2VuZH1gO1xuICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICBuYW1lLmNsYXNzTGlzdCA9ICdieU5hbWUnO1xuICAgICAgbmFtZS5pbm5lckhUTUwgPSBgYnkgJHtlbGVtZW50LnVzZXJuYW1lfWA7XG4gICAgICBkaXYuYXBwZW5kKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgbmFtZSk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXJ2YXRpb25zLWRpdicpLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcy1jb3VudCcpLmlubmVySFRNTCA9ICcoMCknO1xuICB9XG59O1xuXG5jb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuWW91ci1uYW1lJyk7XG5jb25zdCBzdGFydERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtZGF0ZScpO1xuY29uc3QgZW5kRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmQtZGF0ZScpO1xuXG5sZXQgaW5kZXggPSAnJztcblxubGV0IGFycmF5ID0gW107XG5cbmNvbnN0IHJlc0J0biA9IChkYXRhKSA9PiB7XG4gIGFycmF5ID0gZGF0YTtcbn07XG5cbm1lYWxzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAncmVzQnRuJykge1xuICAgIG5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgIHN0YXJ0RGF0ZS52YWx1ZSA9ICcnO1xuICAgIGVuZERhdGUudmFsdWUgPSAnJztcbiAgICBpbmRleCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmlkLCAxMCk7XG4gICAgY29uc3QgbWVhbHMgPSBhd2FpdCBBUEkuZ2V0U3RySW5zdHJ1Y3Rpb24oaW5kZXgpO1xuICAgIGNvbnN0IElEID0gZXZlbnQudGFyZ2V0LmlkO1xuICAgIHBvcHVwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci1hcHBlYXInKTtcbiAgICBjb25zdCByZXNQYWdlSW1nID0gbmV3IEltYWdlKCk7XG4gICAgcmVzUGFnZUltZy5zcmMgPSBhcnJheVtJRF0uc3RyTWVhbFRodW1iO1xuICAgIHBvcHVwUmVzSW1nRGl2LmlubmVySFRNTCA9ICcnO1xuICAgIHBvcHVwUmVzSW1nRGl2LmFwcGVuZChyZXNQYWdlSW1nKTtcbiAgICBuYW1lLmlubmVySFRNTCA9IGFycmF5W0lEXS5zdHJNZWFsO1xuICAgIGFyZWEuaW5uZXJIVE1MID0gYEFyZWE6ICR7bWVhbHMuc3RyQXJlYX1gO1xuICAgIGNhdGVnb3J5LmlubmVySFRNTCA9IGBDYXRlZ29yeTogJHttZWFscy5zdHJDYXRlZ29yeX1gO1xuICAgIGluc3RydWN0aW9uLmlubmVySFRNTCA9IG1lYWxzLnN0ckluc3RydWN0aW9ucztcbiAgICBjb25zdCByZXNlcnZhdGlvbiA9IGF3YWl0IEFQSS5nZXRSZXNlcnZhdGlvbnMoaW5kZXgpO1xuICAgIGVsZW1lbnQocmVzZXJ2YXRpb24pO1xuICB9XG59KTtcblxucmVzUGFnZUNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBwb3B1cENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdjb250YWluZXItYXBwZWFyJyk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gIGlmIChuYW1lSW5wdXQudmFsdWUgIT09ICcnICYmIHN0YXJ0RGF0ZS52YWx1ZSAhPT0gJycgJiYgZW5kRGF0ZS52YWx1ZSAhPT0gJycpIHtcbiAgICBjb25zdCBvYmogPSBuZXcgT2JqZWN0KFxuICAgICAgaW5kZXgsXG4gICAgICBuYW1lSW5wdXQudmFsdWUsXG4gICAgICBzdGFydERhdGUudmFsdWUsXG4gICAgICBlbmREYXRlLnZhbHVlLFxuICAgICk7XG4gICAgYXdhaXQgQVBJLnBvc3RSZXNlcnZhdGlvbnMob2JqKTtcbiAgICBjb25zdCByZXNlcnZhdGlvbiA9IGF3YWl0IEFQSS5nZXRSZXNlcnZhdGlvbnMoaW5kZXgpO1xuICAgIGVsZW1lbnQocmVzZXJ2YXRpb24pO1xuICAgIG5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgIHN0YXJ0RGF0ZS52YWx1ZSA9ICcnO1xuICAgIGVuZERhdGUudmFsdWUgPSAnJztcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlc0J0bjtcbiIsImltcG9ydCBjYWxNZWFscyBmcm9tICcuL2NhbG1lYWxzLmpzJztcblxuY29uc3QgbWVhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVhbHMnKTtcbmNvbnN0IG1lYWxzQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWFscy1jb3VudGVyJyk7XG5jb25zdCB1aSA9IChkYXRhLCBsaWtlTmJycyA9IFtdKSA9PiB7XG4gIG1lYWxzLmlubmVySFRNTCA9ICcnO1xuICBkYXRhLmZvckVhY2goKG1lYWwsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4IDw9IDUpIHtcbiAgICAgIGlmIChtZWFsLnN0ck1lYWwubGVuZ3RoID4gMjUpIHtcbiAgICAgICAgbWVhbC5zdHJNZWFsID0gYCR7bWVhbC5zdHJNZWFsLnN1YnN0cmluZygwLCAxNSl9Li4uYDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGxpLmNsYXNzTmFtZSA9ICdtZWFsLWNvbnRhaW5lcic7XG4gICAgICBsaS5pZCA9IGAke21lYWwuaWRNZWFsfWA7XG4gICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgY29uc3Qgc3JjID0gbWVhbC5zdHJNZWFsVGh1bWI7XG4gICAgICBpbWFnZS5jbGFzc05hbWUgPSAnbWVhbC1pbWcnO1xuICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xuXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi5jbGFzc05hbWUgPSAnbGlrZS1jb250YWluZXInO1xuICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICAgIGhlYWRlci5pbm5lckhUTUwgPSBtZWFsLnN0ck1lYWw7XG4gICAgICBoZWFkZXIuY2xhc3NOYW1lID0gJ2NhcmQtaGVhZGVyJztcblxuICAgICAgY29uc3QgbGlrZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgbGlrZURpdi5jbGFzc05hbWUgPSAnbGlrZSc7XG4gICAgICBjb25zdCBoZWFydEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICBoZWFydEljb24uY2xhc3NOYW1lID0gJ2ZhIGZhLWhlYXJ0LW8gbGlrZS1pY29uJztcbiAgICAgIGNvbnN0IGxpa2VUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNycpO1xuICAgICAgbGlrZVR4dC5jbGFzc05hbWUgPSAnbGlrZS10eHQnO1xuICAgICAgbGlrZVR4dC5pbm5lckhUTUwgPSBgJHtsaWtlTmJyc1tpbmRleF0ubGlrZXN9IGxpa2VzYDtcbiAgICAgIGxpa2VUeHQuaWQgPSBpbmRleDtcblxuICAgICAgbGlrZURpdi5hcHBlbmRDaGlsZChoZWFydEljb24pO1xuICAgICAgbGlrZURpdi5hcHBlbmRDaGlsZChsaWtlVHh0KTtcblxuICAgICAgZGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQobGlrZURpdik7XG5cbiAgICAgIGNvbnN0IGNvbUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgY29tQnRuLmNsYXNzTmFtZSA9ICdjb21CdG4nO1xuICAgICAgY29tQnRuLmlkID0gbWVhbC5pZE1lYWw7XG4gICAgICBjb21CdG4uaW5uZXJIVE1MID0gJ0NvbW1lbnRzJztcblxuICAgICAgY29uc3QgcmVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICByZXNCdG4uY2xhc3NOYW1lID0gJ3Jlc0J0bic7XG4gICAgICByZXNCdG4uaWQgPSBgJHtpbmRleH1gO1xuICAgICAgcmVzQnRuLmlubmVySFRNTCA9ICdSZXNlcnZhdGlvbnMnO1xuXG4gICAgICBsaS5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICBsaS5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgbGkuYXBwZW5kQ2hpbGQoY29tQnRuKTtcbiAgICAgIGxpLmFwcGVuZENoaWxkKHJlc0J0bik7XG4gICAgICBtZWFscy5hcHBlbmRDaGlsZChsaSk7XG4gICAgfVxuICB9KTtcblxuICBtZWFsc0NvdW50ZXIuaW5uZXJIVE1MID0gYE1lYWxzKCR7Y2FsTWVhbHMoKX0pYDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVpO1xuIiwiaW1wb3J0IHsgZ2V0Q29tbWVudCwgZ2V0TWVhbHNJbmZvLCBhZGRMaWtlIH0gZnJvbSAnLi9hcGkuanMnO1xuaW1wb3J0IGdldFJlY2lwZSBmcm9tICcuL2NvbW1lbnRwb3B1cC5qcyc7XG5pbXBvcnQgY29tbWVudERpc3BsYXkgZnJvbSAnLi9jb21tZW50ZGlzcGxheS5qcyc7XG5cbmNvbnN0IG1lYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lYWxzJyk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgZ2V0TWVhbHNJbmZvKCk7XG59KTtcblxubWVhbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAvLyB0cmFzaCBpY29uXG4gIGlmIChlLnRhcmdldC5jbG9zZXN0KCcubGlrZS1pY29uJykpIHtcbiAgICBjb25zdCBsaWtlVGV4dCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5saWtlLWljb24nKS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgY29uc3QgbGlrZUljb24gPSBlLnRhcmdldC5jbG9zZXN0KCcubGlrZS1pY29uJyk7XG4gICAgY29uc3QgeyBpZCB9ID0gbGlrZVRleHQ7XG4gICAgYWRkTGlrZShpZCk7XG4gICAgY29uc3QgbGlrZU5iciA9IHBhcnNlSW50KGxpa2VUZXh0LmlubmVySFRNTCwgMTApICsgMTtcbiAgICBsaWtlVGV4dC5pbm5lckhUTUwgPSBgJHtsaWtlTmJyfSBsaWtlc2A7XG4gICAgbGlrZUljb24uY2xhc3NOYW1lID0gJ2ZhIGZhLWhlYXJ0JztcbiAgfVxufSk7XG5cbm1lYWxzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5jb21CdG4nKSkge1xuICAgIGNvbnN0IGJ0biA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IHsgaWQgfSA9IGJ0bjtcbiAgICBnZXRDb21tZW50KGlkKTtcbiAgICBnZXRSZWNpcGUoaWQpO1xuICAgIGNvbW1lbnREaXNwbGF5KGlkKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=