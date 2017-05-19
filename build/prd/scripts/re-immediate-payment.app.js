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

	module.exports = __webpack_require__(59);


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

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(60);


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(61);

	var common = __webpack_require__(4);

	common.renderBody($('body'), str);




	//re-code 验证码输入格式
	var data3 = ".code-page3 input";
	//code-page1调用判断为空并获取焦点函数
	common.judgeNull(data3);
	//code-page1调用删除键函数
	common.del(data3);
	//code-page1调用检查input value长度函数
	common.inputLength(data3);



/***/ }),

/***/ 61:
/***/ (function(module, exports) {

	module.exports = "<<<<<<< HEAD<ul class=\"re-immediate-payment\">	<li>		<span>你找我租分期</span>		<span>￥2000.00</span>		<div class=\"re-clear\"></div>	</li>	<li>		<span>收款商户</span>		<span>海华财富投资管理（北京）有限公司</span>		<div class=\"re-clear\"></div>	</li></ul><div class=\"re-send-code\">	<p>本次交易短信确认已向您的尾号1992的手机发送验证码</p>	<p>60秒</p>	<div class=\"re-clear\"></div></div><div class = \"re-pay-code code-page3\">	<div class=\"re-enter-code\">		<input type=\"tel\" maxlength = \"1\" />		<input type=\"tel\" maxlength = \"1\" />		<input type=\"tel\" maxlength = \"1\" />		<input type=\"tel\" maxlength = \"1\" />		<input type=\"tel\" maxlength = \"1\" />		<input type=\"tel\" maxlength = \"1\" />	</div></div><div class=\"re-login-footer\">    <a class=\"re-submit-btn\" href=\"##\">      <span>完成</span>    </a>  </div>=======<ul class=\"re-immediate-payment\">	<li>		<span>你找我租分期</span>		<span>￥2000.00</span>		<div class=\"re-clear\"></div>	</li>	<li>		<span>收款商户</span>		<span>海华财富投资管理（北京）有限公司</span>		<div class=\"re-clear\"></div>	</li></ul><div class=\"re-send-code\">	<p>本次交易短信确认已向您的尾号1992的手机发送验证码</p>	<p>60秒</p>	<div class=\"re-clear\"></div></div><div class = \"re-pay-code\">	<div class=\"re-enter-code\">		<input type=\"number\" />		<input type=\"number\" />		<input type=\"number\" />		<input type=\"number\" />		<input type=\"number\" />		<input type=\"number\" />	</div></div><div class=\"re-login-footer\">    <a class=\"re-submit-btn\" href=\"##\">      <span>完成</span>    </a>  </div>>>>>>>> 9a14a3302935d82e9eb41215fd6e5036f3c29417"

/***/ })

/******/ });