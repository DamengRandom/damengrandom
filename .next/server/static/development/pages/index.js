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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Text.js":
/*!****************************!*\
  !*** ./components/Text.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Text; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/damonwu/damengworks/damengrandom/components/Text.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


function Text(_ref) {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __jsx("p", _extends({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }), children);
}
;

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Text */ "./components/Text.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/damonwu/damengworks/damengrandom/pages/index.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Index() {
  return __jsx("main", {
    className: "jsx-1321343204" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-1321343204",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "Dameng - DamengRandom"), __jsx("meta", {
    name: "author",
    content: "dameng",
    className: "jsx-1321343204",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "keywords",
    content: "dameng, damengrandom, speedi, tipify(DM), damon",
    className: "jsx-1321343204",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "description",
    content: "please come to damengrandom.now.sh",
    className: "jsx-1321343204",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-1321343204" + " " + "section fit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1321343204" + " " + "table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1321343204" + " " + "table-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx(_components_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "theme-font theme-text",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "G'day !! I am ", __jsx("a", {
    href: "https://github.com/DamengRandom",
    target: "_blank",
    "aria-hidden": "true",
    className: "jsx-1321343204",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 29
    }
  }, "Damengradom"), ", who is a web developer. I developed some side projects"), __jsx(_components_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "theme-font theme-text pl-12",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://speedi.netlify.app/",
    target: "_blank",
    "aria-hidden": "true",
    className: "jsx-1321343204",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 78
    }
  }, "Speedi"), ", "), __jsx(_components_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "theme-font theme-text",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://dm-tipify.netlify.app/",
    target: "_blank",
    "aria-hidden": "true",
    className: "jsx-1321343204",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 72
    }
  }, "Tipify(DM)"), " "), __jsx(_components_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "theme-font theme-text",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "for fun. I love esports games \uD83C\uDFAE, movies \uD83C\uDF7F, jogging \uD83D\uDC5F ..")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1321343204",
    __self: this
  }, "html,body{margin:0;height:100%;overflow:hidden;}#__next{height:100%;}.container{height:100%;overflow:auto;}.section{position:relative;width:100%;}.fit{height:100%;}.table{display:table;width:100%;height:100%;}.table-content{display:table-cell;vertical-align:middle;padding:4rem;}.theme-font{font-family:'Nanum Gothic Coding',monospace;}.theme-text{display:inline;font-size:2rem;line-height:1.8;}.theme-text>a{-webkit-text-decoration:none;text-decoration:none;font-size:2.4rem;}.pl-12{padding-left:0.75rem;}@media only screen and (max-width:500px){.table-content{padding:1rem;}.theme-text{font-size:1.4rem;line-height:1.6;}.theme-text>a{font-size:1.8rem;}}@media only screen and (max-width:321px){.theme-text{font-size:1.2rem;}.theme-text>a{font-size:1.6rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW1vbnd1L2RhbWVuZ3dvcmtzL2RhbWVuZ3JhbmRvbS9wYWdlcy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0J5QixBQUlvQixBQU1HLEFBSUEsQUFLTSxBQUtOLEFBSUUsQUFNSyxBQU0wQixBQUk5QixBQU1NLEFBS0EsQUFLTixBQUlJLEFBS0EsQUFLQSxBQUlBLFNBekVQLEdBTWQsQUFJZ0IsQUFVaEIsQ0FvQ0UsQ0FoQ1csQ0FnQkksRUFvQkcsQUFLbEIsQUFLQSxBQUlBLENBM0RXLENBZVcsRUE3Qk4sQUFrRGxCLElBMUJjLENBZGQsR0FLQSxDQXlCa0IsR0FvQmhCLElBM0RGLEFBd0JBLElBS2UsR0FLZixFQU1BLElBSW1CLElBZG5CLGFBZUEiLCJmaWxlIjoiL1VzZXJzL2RhbW9ud3UvZGFtZW5nd29ya3MvZGFtZW5ncmFuZG9tL3BhZ2VzL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZXh0IGZyb20gXCIuLi9jb21wb25lbnRzL1RleHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkRhbWVuZyAtIERhbWVuZ1JhbmRvbTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiZGFtZW5nXCI+PC9tZXRhPlxuICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiZGFtZW5nLCBkYW1lbmdyYW5kb20sIHNwZWVkaSwgdGlwaWZ5KERNKSwgZGFtb25cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwicGxlYXNlIGNvbWUgdG8gZGFtZW5ncmFuZG9tLm5vdy5zaFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gZml0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInRoZW1lLWZvbnQgdGhlbWUtdGV4dFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICBHJ2RheSAhISBJIGFtIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vRGFtZW5nUmFuZG9tXCIgdGFyZ2V0PVwiX2JsYW5rXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+RGFtZW5ncmFkb208L2E+LCB3aG8gaXMgYSB3ZWIgZGV2ZWxvcGVyLiBJIGRldmVsb3BlZCBzb21lIHNpZGUgcHJvamVjdHNcbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInRoZW1lLWZvbnQgdGhlbWUtdGV4dCBwbC0xMlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxhIGhyZWY9XCJodHRwczovL3NwZWVkaS5uZXRsaWZ5LmFwcC9cIiB0YXJnZXQ9XCJfYmxhbmtcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5TcGVlZGk8L2E+LCA8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0aGVtZS1mb250IHRoZW1lLXRleHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48YSBocmVmPVwiaHR0cHM6Ly9kbS10aXBpZnkubmV0bGlmeS5hcHAvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+VGlwaWZ5KERNKTwvYT4gPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidGhlbWUtZm9udCB0aGVtZS10ZXh0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+Zm9yIGZ1bi4gSSBsb3ZlIGVzcG9ydHMgZ2FtZXMg8J+OriwgbW92aWVzIPCfjb8sIGpvZ2dpbmcg8J+RnyAuLjwvVGV4dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgICNfX25leHQge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWN0aW9uIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuZml0IHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAudGFibGUge1xuICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50YWJsZS1jb250ZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgcGFkZGluZzogNHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aGVtZS1mb250IHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ05hbnVtIEdvdGhpYyBDb2RpbmcnLCBtb25vc3BhY2U7XG4gICAgICAgIH1cblxuICAgICAgICAudGhlbWUtdGV4dCB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRoZW1lLXRleHQgPiBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgICAgIH1cblxuICAgICAgICAucGwtMTIge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMC43NXJlbTsgLy8gMTJweFxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgICAgIC50YWJsZS1jb250ZW50IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRoZW1lLXRleHQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aGVtZS10ZXh0ID4gYSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjFweCkge1xuICAgICAgICAgIC50aGVtZS10ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aGVtZS10ZXh0ID4gYSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvbWFpbj5cbiAgKVxufTtcbiJdfQ== */\n/*@ sourceURL=/Users/damonwu/damengworks/damengrandom/pages/index.jsx */"));
}
;

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/damonwu/damengworks/damengrandom/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map