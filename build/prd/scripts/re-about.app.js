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

	__webpack_require__(2);



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(3);

	var common = __webpack_require__(4);

	common.renderBody($('body'), str);



/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"re-about\">	<div class=\"re-about-header\"></div>	<div class=\"re-num-time\">		<p>客服电话：400-400-400</p>		<p>工作时间：早上8：00——晚上7：00</p>	</div>	<div class=\"re-about-main\">		<div class=\"re-introduce\">			<p>公司介绍</p>			<hr size=2 style=\"color: white;border-style:dashed ;width:100%\">		</div>		<div class=\"re-introduce-main\">			<p>你找我租 -- 隶属于海华普诚信用管理（北京）有限公司，是一个移动互联网+租房场景+分期服务商</p>			<p>你找我租 -- 隶属于海华普诚信用管理（北京）有限公司，是一个移动互联网+租房场景+分期服务商</p>			<p>隶属于海华普诚信用管理（北京）有限公司</p>					</div>		<div class=\"re-introduce\">			<p>媒体报道</p>			<hr size=2 style=\"color: white;border-style:dashed ;width:100%\">		</div>		<div class=\"re-introduce-main\">			<iframe frameborder=\"0\" width=\"100%\" src=\"http://v.qq.com/iframe/player.html?vid=a03350c6vf4&tiny=0&auto=0\" allowfullscreen></iframe>		</div>		<div class=\"re-introduce\">			<p>公司团队</p>			<hr size=2 style=\"color: white;border-style:dashed ;width:100%\">					</div>		<div class=\"re-introduce-main\">			<img src=\"images/re-team.png\"/>		</div>	</div>	<p class=\"re-about-footer\">copyright 2016 海华普诚信用管理（北京）有限公司</p></div>"

/***/ }),
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



/***/ })
/******/ ]);