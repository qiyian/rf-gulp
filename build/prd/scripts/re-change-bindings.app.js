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



	//re-code 验证码输入格式
	var data = ".code-page1 input";
	var data2 = ".code-page2 input";
	//头部变色
	$(".re-submit-btn").on("click",function(){
		if($(this).parent().parent().attr("index")==3){
			return;
		};
		$(this).parent().parent().next().removeClass("re-hide");
		$(this).parent().parent().addClass("re-hide");
		var Index = Number($(this).parent().parent().attr("index"))+1;
		$(".re-changetop li:nth-child("+Index+")").css("color","#f56d23");
		$(".re-changetop .re-border hr:nth-child("+$(this).parent().parent().attr("index")+")").css("border-top","1px dashed #f56d23");
	})
			

	//code-page1调用判断为空并获取焦点函数
	common.judgeNull(data);
	//code-page1调用删除键函数
	common.del(data);
	//code-page1调用检查input value长度函数
	common.inputLength(data);



	//code-page2调用判断为空并获取焦点函数
	common.judgeNull(data2);
	//code-page2调用删除键函数
	common.del(data2);
	//code-page2调用检查input value长度函数
	common.inputLength(data2);


/***/ }),

/***/ 34:
/***/ (function(module, exports) {

	module.exports = "<div class=\"re-change-bindings\">	<ul class=\"re-changetop\">			<li>			<i class=\"icon-financialBills\"></i>			<p>获取验证码</p>		</li>				<li>			<i class=\"icon-financialBills\"></i>			<p>输入新手机号</p>		</li>		<li>			<i class=\"icon-financialBills\"></i>			<p>输入验证码</p>		</li>		<div class=\"re-border\">			<hr/>			<hr/>		</div>		<div class=\"re-clear\"></div>	</ul>	<div class=\"re-unbundling-success code-page1 re-page\" index = 1>				<div class=\"re-enter-code \">			<input type=\"tel\" maxlength = \"1\"/>			<input type=\"tel\" maxlength = \"1\"/>			<input type=\"tel\" maxlength = \"1\"/>			<input type=\"tel\" maxlength = \"1\"/>			<input type=\"tel\" maxlength = \"1\"/>			<input type=\"tel\" maxlength = \"1\"/>			<div class=\"re-clear\"></div>					</div>		<p>			<span>已向您手机尾号0992发送验证码的短信验证码！</span>			<span>60</span>			<div class=\"re-clear\"></div>					</p>		<div class=\"re-login-footer\">		    <a class=\"re-submit-btn\" href=\"##\">		      <span>下一步</span>		    </a>		  </div>	</div>		<div class=\"re-code-success re-page re-hide\" index = 2>				<div class=\"re-enter-number\">			<input type=\"number\" />		</div>		<p>输入你要绑定的新手机号</p>		<div class=\"re-login-footer\">		    <a class=\"re-submit-btn\" href=\"##\">		      <span>发送</span>		    </a>		  </div>	</div>		<div class=\"re-unbundling-success re-page code-page2 re-hide\" index = 3>		<div class=\"re-enter-code\">			<input type=\"tel\" maxlength = \"1\"/>			<input type=\"tel\" maxlength = \"1\"/>			<input type=\"tel\" maxlength = \"1\" />			<input type=\"tel\" maxlength = \"1\" />			<input type=\"tel\" maxlength = \"1\"/>			<input type=\"tel\" maxlength = \"1\"/>		</div>		<p>			<span>已向您手机尾号0992发送短信验证码！</span>			<span>60</span>			<div class=\"re-clear\"></div>		</p>		<div class=\"re-login-footer\">		    <a class=\"re-submit-btn\" href=\"##\">		      <span>完成</span>		    </a>		  </div>	</div></div>"

/***/ })

/******/ });