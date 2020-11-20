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
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
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
  }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_3__["Helmet"], {
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
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-1321343204",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "author",
    content: "dameng",
    className: "jsx-1321343204",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "keywords",
    content: "dameng, damengrandom, speedi, tipify(DM), damon",
    className: "jsx-1321343204",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "description",
    content: "please come to damengrandom.now.sh",
    className: "jsx-1321343204",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:title",
    content: "damengrandom",
    key: "ogtitle",
    className: "jsx-1321343204",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:description",
    content: "please come to damengrandom.now.sh",
    key: "ogdesc",
    className: "jsx-1321343204",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:site_name",
    content: "damengrandom",
    key: "ogsitename",
    className: "jsx-1321343204",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-1321343204" + " " + "section fit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1321343204" + " " + "table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1321343204" + " " + "table-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx(_components_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "theme-font theme-text",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
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
      lineNumber: 21,
      columnNumber: 29
    }
  }, "Damengradom"), ", who is a web developer. I developed some side projects"), __jsx(_components_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "theme-font theme-text pl-12",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
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
      lineNumber: 23,
      columnNumber: 78
    }
  }, "Speedi"), ", "), __jsx(_components_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "theme-font theme-text",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
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
      lineNumber: 24,
      columnNumber: 72
    }
  }, "Tipify(DM)"), " "), __jsx(_components_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "theme-font theme-text",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "for fun. I love esports games \uD83C\uDFAE, movies \uD83C\uDF7F, jogging \uD83D\uDC5F ..")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1321343204",
    __self: this
  }, "html,body{margin:0;height:100%;overflow:hidden;}#__next{height:100%;}.container{height:100%;overflow:auto;}.section{position:relative;width:100%;}.fit{height:100%;}.table{display:table;width:100%;height:100%;}.table-content{display:table-cell;vertical-align:middle;padding:4rem;}.theme-font{font-family:'Nanum Gothic Coding',monospace;}.theme-text{display:inline;font-size:2rem;line-height:1.8;}.theme-text>a{-webkit-text-decoration:none;text-decoration:none;font-size:2.4rem;}.pl-12{padding-left:0.75rem;}@media only screen and (max-width:500px){.table-content{padding:1rem;}.theme-text{font-size:1.4rem;line-height:1.6;}.theme-text>a{font-size:1.8rem;}}@media only screen and (max-width:321px){.theme-text{font-size:1.2rem;}.theme-text>a{font-size:1.6rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW1vbnd1L2RhbWVuZ3dvcmtzL2RhbWVuZ3JhbmRvbS9wYWdlcy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJ5QixBQUlvQixBQU1HLEFBSUEsQUFLTSxBQUtOLEFBSUUsQUFNSyxBQU0wQixBQUk5QixBQU1NLEFBS0EsQUFLTixBQUlJLEFBS0EsQUFLQSxBQUlBLFNBekVQLEdBTWQsQUFJZ0IsQUFVaEIsQ0FvQ0UsQ0FoQ1csQ0FnQkksRUFvQkcsQUFLbEIsQUFLQSxBQUlBLENBM0RXLENBZVcsRUE3Qk4sQUFrRGxCLElBMUJjLENBZGQsR0FLQSxDQXlCa0IsR0FvQmhCLElBM0RGLEFBd0JBLElBS2UsR0FLZixFQU1BLElBSW1CLElBZG5CLGFBZUEiLCJmaWxlIjoiL1VzZXJzL2RhbW9ud3UvZGFtZW5nd29ya3MvZGFtZW5ncmFuZG9tL3BhZ2VzL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZXh0IGZyb20gXCIuLi9jb21wb25lbnRzL1RleHRcIjtcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8SGVsbWV0PlxuICAgICAgICA8dGl0bGU+RGFtZW5nIC0gRGFtZW5nUmFuZG9tPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cImRhbWVuZ1wiPjwvbWV0YT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cImRhbWVuZywgZGFtZW5ncmFuZG9tLCBzcGVlZGksIHRpcGlmeShETSksIGRhbW9uXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cInBsZWFzZSBjb21lIHRvIGRhbWVuZ3JhbmRvbS5ub3cuc2hcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cImRhbWVuZ3JhbmRvbVwiIGtleT1cIm9ndGl0bGVcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cInBsZWFzZSBjb21lIHRvIGRhbWVuZ3JhbmRvbS5ub3cuc2hcIiBrZXk9XCJvZ2Rlc2NcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJkYW1lbmdyYW5kb21cIiBrZXk9XCJvZ3NpdGVuYW1lXCIgLz5cbiAgICAgIDwvSGVsbWV0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uIGZpdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1jb250ZW50XCI+XG4gICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0aGVtZS1mb250IHRoZW1lLXRleHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgRydkYXkgISEgSSBhbSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0RhbWVuZ1JhbmRvbVwiIHRhcmdldD1cIl9ibGFua1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPkRhbWVuZ3JhZG9tPC9hPiwgd2hvIGlzIGEgd2ViIGRldmVsb3Blci4gSSBkZXZlbG9wZWQgc29tZSBzaWRlIHByb2plY3RzXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0aGVtZS1mb250IHRoZW1lLXRleHQgcGwtMTJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48YSBocmVmPVwiaHR0cHM6Ly9zcGVlZGkubmV0bGlmeS5hcHAvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+U3BlZWRpPC9hPiwgPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidGhlbWUtZm9udCB0aGVtZS10ZXh0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PGEgaHJlZj1cImh0dHBzOi8vZG0tdGlwaWZ5Lm5ldGxpZnkuYXBwL1wiIHRhcmdldD1cIl9ibGFua1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlRpcGlmeShETSk8L2E+IDwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInRoZW1lLWZvbnQgdGhlbWUtdGV4dFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPmZvciBmdW4uIEkgbG92ZSBlc3BvcnRzIGdhbWVzIPCfjq4sIG1vdmllcyDwn42/LCBqb2dnaW5nIPCfkZ8gLi48L1RleHQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICAjX19uZXh0IHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuc2VjdGlvbiB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpdCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRhYmxlIHtcbiAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAudGFibGUtY29udGVudCB7XG4gICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIHBhZGRpbmc6IDRyZW07XG4gICAgICAgIH1cblxuICAgICAgICAudGhlbWUtZm9udCB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdOYW51bSBHb3RoaWMgQ29kaW5nJywgbW9ub3NwYWNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRoZW1lLXRleHQge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aGVtZS10ZXh0ID4gYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBsLTEyIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07IC8vIDEycHhcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICAudGFibGUtY29udGVudCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aGVtZS10ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGhlbWUtdGV4dCA+IGEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIxcHgpIHtcbiAgICAgICAgICAudGhlbWUtdGV4dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGhlbWUtdGV4dCA+IGEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L21haW4+XG4gIClcbn07XG4iXX0= */\n/*@ sourceURL=/Users/damonwu/damengworks/damengrandom/pages/index.jsx */"));
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

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

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