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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

<<<<<<< HEAD
	window.Domain = "192.168.1.51";
	__webpack_require__(2);
=======
	window.Domain = "192.168.1.51";
	__webpack_require__(2);
>>>>>>> 934be772a350d800986b5d3201596b3d1cb1f13f



/***/ }),
/* 2 */
/***/ (function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

<<<<<<< HEAD
	(function (doc, win) {
	    var docEl = doc.documentElement,
	        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	        recalc = function () {
	            var clientWidth = docEl.clientWidth;
	            if (!clientWidth) return;
	            if(clientWidth>=640){
	                docEl.style.fontSize = '100px';
	            }else{
	                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
	            }
	        };

	    if (!doc.addEventListener) return;
	    win.addEventListener(resizeEvt, recalc, false);
	    doc.addEventListener('DOMContentLoaded', recalc, false);
	})(document, window);
=======
	(function (doc, win) {
	    var docEl = doc.documentElement,
	        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	        recalc = function () {
	            var clientWidth = docEl.clientWidth;
	            if (!clientWidth) return;
	            if(clientWidth>=640){
	                docEl.style.fontSize = '100px';
	            }else{
	                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
	            }
	        };

	    if (!doc.addEventListener) return;
	    win.addEventListener(resizeEvt, recalc, false);
	    doc.addEventListener('DOMContentLoaded', recalc, false);
	})(document, window);
>>>>>>> 934be772a350d800986b5d3201596b3d1cb1f13f



/***/ })
/******/ ]);