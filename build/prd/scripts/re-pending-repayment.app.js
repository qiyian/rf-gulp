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

	module.exports = __webpack_require__(86);


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

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(87);



/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(88);

	var common = __webpack_require__(4);

	common.renderBody($('body'), str);



/***/ }),

/***/ 88:
/***/ (function(module, exports) {

	module.exports = "<div class=\"re-repayment-details\">			<div class=\"re-detailed\">			<ul class=\"re-detailed-main\">				<li>					<span>期次</span>					<span>应还日期</span>					<span>金额</span>					<span>选定</span>				</li>				<li>					<span>第一期</span>					<span>2017-03-29</span>					<span>1000.00元</span>					<span>						<label for=\"ipt1\">							<img src=\"build/images/re-true.png\"/>							<img class=\"re-hide\" src=\"build/images/re-false.png\"/>						</label>						<input type=\"checkbox\" class=\"ipt1\"/>					</span>				</li>				<li>					<span>第二期</span>					<span>2017-03-29</span>					<span>1000.00元</span>					<span>						<label for=\"ipt1\">							<img class=\"re-hide\" src=\"build/images/re-true.png\"/>							<img src=\"build/images/re-false.png\"/>						</label>						<input type=\"checkbox\" class=\"ipt1\"/>					</span>				</li>				<li>					<span>第三期</span>					<span>2017-03-29</span>					<span>1000.00元</span>					<span>						<label for=\"ipt1\">							<img class=\"re-hide\" src=\"build/images/re-true.png\"/>							<img src=\"build/images/re-false.png\"/>						</label>						<input type=\"checkbox\" class=\"ipt1\"/>					</span>				</li>				<li>					<span>第四期</span>					<span>2017-03-29</span>					<span>1000.00元</span>					<span>						<label for=\"ipt1\">							<img class=\"re-hide\" src=\"build/images/re-true.png\"/>							<img src=\"build/images/re-false.png\"/>						</label>						<input type=\"checkbox\" class=\"ipt1\"/>					</span>				</li>				<li>					<span>第五期</span>					<span>2017-03-29</span>					<span>1000.00元</span>					<span>						<label for=\"ipt1\">							<img class=\"re-hide\" src=\"build/images/re-true.png\"/>							<img src=\"build/images/re-false.png\"/>						</label>						<input type=\"checkbox\" class=\"ipt1\"/>					</span>				</li>				<li>					<span>第六期</span>					<span>2017-03-29</span>					<span>1000.00元</span>					<span>						<label for=\"ipt1\">							<img class=\"re-hide\" src=\"build/images/re-true.png\"/>							<img src=\"build/images/re-false.png\"/>						</label>						<input type=\"checkbox\" class=\"ipt1\"/>					</span>				</li>			</ul>	 </div>	 </div><div class=\"re-mask\">					</div>		<ul class=\"re-payment-method\">			<li>				<img src=\"build/images/re-close.png\" alt=\"\" />				<span>选择付款方式</span>			</li>			<li>				<img  class=\"re-cardbg\" src=\"build/images/re-card.png\"/>				<span>银行卡支付</span>				<label for=\"re-card-pay\">					<img src=\"build/images/re-method-true.png\" alt=\"\" />					<img src=\"build/images/re-method-false.png\" alt=\"\" />				</label>				<input id=\"re-card-pay\" type=\"radio\"/>			</li>			<li>				<img class=\"re-alipaybg\" src=\"build/images/re-alipay.png\"/>				<span>支付宝支付</span>				<span>（租客承担6%的手续费）</span>				<label for=\"re-alipay-pay\">					<img class=\"re-hide\" src=\"build/images/re-method-true.png\" alt=\"\" />					<img src=\"build/images/re-method-false.png\" alt=\"\" />				</label>				<input id=\"re-alipay-pay\" type=\"radio\"/>			</li>			<div class=\"re-login-footer\">			    <a class=\"re-submit-btn\" href=\"##\">			      <span>确定</span>			    </a>			  </div>		</ul>"

/***/ })

/******/ });