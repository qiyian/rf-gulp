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

	module.exports = __webpack_require__(14);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
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

	   //common1  提示信息弹框
	  alertError: function(info){
	    $('body').append('<section class="re-alertLayout"></section><section class="re-alert">' + info + '</section>');
	    $(".re-alertLayout,.re-alert").fadeOut(3000);
	    setTimeout(function () {
	        $(".re-alertLayout,.re-alert").remove();
	    }, 3000);
	  },

	  // common2   身份认证无效、过期跳转登录页面
	  clearToLogin: function(){
	    localStorage.clear();
	    window.location.href = "re-login-account.html";
	  },

	  // common3 清空input框
	  clearInput: function(val){
	    $(val).val("");
	  },
	  //input为空时从前往后输入
				judgeNull:function (data){
					$(".re-enter-code input").each(function(){
					//点击input 空的获取焦点
						$(this).on("click",function(){
							$(data).blur();
							if($(data+":nth-child(1)").val()==""){
								$(data+":nth-child(1)").focus();

							}else if($(data+":nth-child(2)").val()==""){
								$(data+":nth-child(2)").focus();

							}
							else if($(data+":nth-child(3)").val()==""){
								$(data+":nth-child(3)").focus();

							}
							else if($(data+":nth-child(4)").val()==""){
								$(data+":nth-child(4)").focus();

							}
							else if($(data+":nth-child(5)").val()==""){
								$(data+":nth-child(5)").focus();

							}else{
								$(data+":nth-child(6)").focus();
							}
						})
					})
				},

				//input内的值oninput事件时发生改变
				inputLength:function (data2){
					$(data2).on("input",function(){
						if($(data2+":nth-child(1)").val()==""){
							$(data2+":nth-child(1)").focus();
							if($(data2+":nth-child(1)").val().length==1){
								$(data2).blur();
								$(data2+":nth-child(2)").focus();
							}
						}else if($(data2+":nth-child(2)").val()==""){
							$(data2+":nth-child(2)").focus();
							if($(data2+":nth-child(2)").val().length==1){
								$(data2).blur();
								$(data2+":nth-child(3)").focus();
							}
						}
						else if($(data2+":nth-child(3)").val()==""){
							$(data2+":nth-child(3)").focus();
							if($(data2+":nth-child(3)").val().length==1){
								$(data2+":nth-child(3)").blur();
								$(data2+":nth-child(4)").focus();
							}
						}
						else if($(data2+":nth-child(4)").val()==""){
							$(data2+":nth-child(4)").focus();
							if($(data2+":nth-child(5)").val().length==1){
								$(data2+":nth-child(5)").blur();
								$(data2+":nth-child(5)").focus();
							}
						}
						else if($(data2+":nth-child(5)").val()==""){
							$(data2+":nth-child(5)").focus();
							if($(data2+":nth-child(6)").val().length==1){
								$(data2+":nth-child(6)").focus();
							}
						}else if($(data2+":nth-child(6)").val()==""){
							$(data2+":nth-child(6)").focus();
							if($(data2+":nth-child(6)").val().length==1){
								$(data2+":nth-child(6)").blur();
							}
						};
					})





				},
				//监听删除键
				del:function (data3){
					$(data3).each(function(){
						$(this).keydown(function(event){

				          if (event.keyCode === 8){
				          	if($(this).index()==5){
								if($(this).val()==""){
									$(this).val("");
					          		$(this).blur();
					             	$(this).prev().focus();
								}else{
									return
								}
							}
				          	if($(this).val==""){
				          		$(this).blur();
				             	$(this).prev().focus();
				             	$(this).prev().val("");
				          	}else{
				          		$(this).val("");
				          		$(this).blur();
				             	$(this).prev().focus();

				          	}

				          } ;

				        });
					})
				}

	};


	module.exports = common;

	reVersion = "1.0";
	reAccessKey = localStorage.getItem("reAccessKey");
	reOpenId="123";
	reSceneId = "456";



/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(15);



/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(16);

	var common = __webpack_require__(4);

	common.renderBody($('body'), str);

	$('.re-submit-btn').click(function(){
	  $('.re-mask').removeClass('re-hide');
	  $('.re-modalBox').removeClass('re-hide');
	  $('.re-modalBtn').click(function(){
	    $('.re-mask').addClass('re-hide');
	    $('.re-modalBox').addClass('re-hide');
	  })
	})



/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"re-header\">  <img src=\"/build/images/re-logo.png\" alt=\"\" /></div><div class=\"re-main\">  <div class=\"re-ipt\">    <div>      <span>输入联系姓名</span>      <input type=\"text\" />    </div>    <div>      <span>输入联系电话</span>      <input type=\"text\" />    </div>    <div class=\"apartmentCoop\">      <span>输入详情内容</span>      <input type=\"text\" />    </div>  </div>  <div class=\"re-login-footer\">    <a class=\"re-submit-btn\" href=\"javascript:void(0)\">      <span>完成登陆</span>    </a>  </div></div><div class=\"re-mask re-hide\"></div><div class=\"re-modalBox re-hide\">  <h1 class=\"re-modalLogo\">    <img src=\"/build/images/re-logoH.png\" alt=\"\" />  </h1>  <p class=\"re-modalcontent\">感谢您提交你找我租公寓合作，客服人员会尽快和你联系！点击确定返回首页</p>  <button class=\"re-modalBtn\">确定</button></div>"

/***/ })
/******/ ]);