/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(32);


/***/ }),

/***/ 4:
/***/ (function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var common = {
	  renderBody: function ($el, str) {
	    $el.prepend(str);
	  },
	  inner: function ($el, str) {
	    $el.html(str);
	  },
	  append: function ($el, str) {
	    $el.append(str);
	  },
	};

	module.exports = common;



/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(33);



/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(34);

	var common = __webpack_require__(4);

	common.renderBody($('body'), str);



/***/ }),

/***/ 34:
/***/ (function(module, exports) {

	module.exports = "<div class=\"re-personal-data\">  <div class=\"re-personmian\">    <div class=\"re-phone\">      <p>手机号码</p>      <span>15726671992</span>    </div>    <div class=\"re-name\">      <p>真实姓名</p>      <span>郭棒棒</span>    </div>  </div>  <div class=\"re-personmian\">    <div class=\"re-phone\">      <p>证件类型</p>      <span>身份证</span>    </div>    <div class=\"re-name\">      <p>证件号码</p>      <span>142326099204037418</span>    </div>  </div></div>"

/***/ })

/******/ });