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
var _jsxFileName = "/Users/damonwu/damengworks/damengrandom/pages/index.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Index() {
  return __jsx("div", {
    className: "jsx-1321343204" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1321343204" + " " + "section fit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1321343204" + " " + "table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1321343204" + " " + "table-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, __jsx(_components_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "theme-font theme-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "G'day !! I am ", __jsx("a", {
    href: "https://github.com/DamengRandom",
    target: "_blank",
    className: "jsx-1321343204",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 29
    }
  }, "Damengradom"), ", who is a web developer. I developed some side projects"), __jsx(_components_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "theme-font theme-text pl-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://speedi.netlify.app/",
    target: "_blank",
    className: "jsx-1321343204",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 59
    }
  }, "Speedi"), ", "), __jsx(_components_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "theme-font theme-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://dm-tipify.netlify.app/",
    target: "_blank",
    className: "jsx-1321343204",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 53
    }
  }, "Tipify(DM)"), " "), __jsx(_components_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "theme-font theme-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, "for fun. I love esports games \uD83C\uDFAE, movies \uD83C\uDF7F, jogging \uD83D\uDC5F ..")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1321343204",
    __self: this
  }, "html,body{margin:0;height:100%;overflow:hidden;}#__next{height:100%;}.container{height:100%;overflow:auto;}.section{position:relative;width:100%;}.fit{height:100%;}.table{display:table;width:100%;height:100%;}.table-content{display:table-cell;vertical-align:middle;padding:4rem;}.theme-font{font-family:'Nanum Gothic Coding',monospace;}.theme-text{display:inline;font-size:2rem;line-height:1.8;}.theme-text>a{-webkit-text-decoration:none;text-decoration:none;font-size:2.4rem;}.pl-12{padding-left:0.75rem;}@media only screen and (max-width:500px){.table-content{padding:1rem;}.theme-text{font-size:1.4rem;line-height:1.6;}.theme-text>a{font-size:1.8rem;}}@media only screen and (max-width:321px){.theme-text{font-size:1.2rem;}.theme-text>a{font-size:1.6rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW1vbnd1L2RhbWVuZ3dvcmtzL2RhbWVuZ3JhbmRvbS9wYWdlcy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJ5QixBQUlvQixBQU1HLEFBSUEsQUFLTSxBQUtOLEFBSUUsQUFNSyxBQU0wQixBQUk5QixBQU1NLEFBS0EsQUFLTixBQUlJLEFBS0EsQUFLQSxBQUlBLFNBekVQLEdBTWQsQUFJZ0IsQUFVaEIsQ0FvQ0UsQ0FoQ1csQ0FnQkksRUFvQkcsQUFLbEIsQUFLQSxBQUlBLENBM0RXLENBZVcsRUE3Qk4sQUFrRGxCLElBMUJjLENBZGQsR0FLQSxDQXlCa0IsR0FvQmhCLElBM0RGLEFBd0JBLElBS2UsR0FLZixFQU1BLElBSW1CLElBZG5CLGFBZUEiLCJmaWxlIjoiL1VzZXJzL2RhbW9ud3UvZGFtZW5nd29ya3MvZGFtZW5ncmFuZG9tL3BhZ2VzL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZXh0IGZyb20gXCIuLi9jb21wb25lbnRzL1RleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiBmaXRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtY29udGVudFwiPlxuICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidGhlbWUtZm9udCB0aGVtZS10ZXh0XCI+XG4gICAgICAgICAgICAgIEcnZGF5ICEhIEkgYW0gPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9EYW1lbmdSYW5kb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj5EYW1lbmdyYWRvbTwvYT4sIHdobyBpcyBhIHdlYiBkZXZlbG9wZXIuIEkgZGV2ZWxvcGVkIHNvbWUgc2lkZSBwcm9qZWN0c1xuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidGhlbWUtZm9udCB0aGVtZS10ZXh0IHBsLTEyXCI+PGEgaHJlZj1cImh0dHBzOi8vc3BlZWRpLm5ldGxpZnkuYXBwL1wiIHRhcmdldD1cIl9ibGFua1wiPlNwZWVkaTwvYT4sIDwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInRoZW1lLWZvbnQgdGhlbWUtdGV4dFwiPjxhIGhyZWY9XCJodHRwczovL2RtLXRpcGlmeS5uZXRsaWZ5LmFwcC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5UaXBpZnkoRE0pPC9hPiA8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0aGVtZS1mb250IHRoZW1lLXRleHRcIj5mb3IgZnVuLiBJIGxvdmUgZXNwb3J0cyBnYW1lcyDwn46uLCBtb3ZpZXMg8J+Nvywgam9nZ2luZyDwn5GfIC4uPC9UZXh0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgI19fbmV4dCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlY3Rpb24ge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maXQge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50YWJsZSB7XG4gICAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRhYmxlLWNvbnRlbnQge1xuICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICBwYWRkaW5nOiA0cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRoZW1lLWZvbnQge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTmFudW0gR290aGljIENvZGluZycsIG1vbm9zcGFjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aGVtZS10ZXh0IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gICAgICAgIH1cblxuICAgICAgICAudGhlbWUtdGV4dCA+IGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBmb250LXNpemU6IDIuNHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wbC0xMiB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtOyAvLyAxMnB4XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgICAgLnRhYmxlLWNvbnRlbnQge1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGhlbWUtdGV4dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRoZW1lLXRleHQgPiBhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMXB4KSB7XG4gICAgICAgICAgLnRoZW1lLXRleHQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRoZW1lLXRleHQgPiBhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn07XG4iXX0= */\n/*@ sourceURL=/Users/damonwu/damengworks/damengrandom/pages/index.jsx */"));
}
;

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/damonwu/damengworks/damengrandom/pages/index.jsx */"./pages/index.jsx");


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