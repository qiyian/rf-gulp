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

	module.exports = __webpack_require__(26);


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

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(27);



/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(28);

	var common = __webpack_require__(4);

	common.renderBody($('body'), str);

	$('.basicInfo_selectval').click(function(){
	  if($('.basicInfo_selectlist').is(':hidden')){
	    $('.basicInfo_selectval').css('background', 'url(/build/images/basicInfo/arrowup.png) no-repeat right center');
	    $('.basicInfo_selectval').css('backgroundSize', '0.24rem');
	    $('.basicInfo_selectlist').slideDown();
	    $('.basicInfo_selectlist li').click(function() {
	      $(this).addClass('active').siblings('li').removeClass('active');
	      $('.basicInfo_selectval').html($(this).html());
	      setTimeout(function(){
	        $('.basicInfo_selectlist').slideUp();
	      },300)
	    });
	  }else {
	    $('.basicInfo_selectval').css('background', 'url(/build/images/basicInfo/arrowdown.png) no-repeat right center');
	    $('.basicInfo_selectval').css('backgroundSize', '0.24rem');
	    $('.basicInfo_selectlist').slideUp();
	  }
	})



/***/ }),

/***/ 28:
/***/ (function(module, exports) {

	module.exports = "<section class=\"basicInfo_top\">  <h3 class=\"basicInfo_bg\"></h3>  <ul class=\"basicInfo_title\">    <li class=\"colorTiger\">基本信息</li>    <li>紧急联系人</li>    <li>工作单位</li>  </ul></section><div class=\"re-main\">  <div class=\"re-ipt basicInfo_page1 re-hide\">    <div>      <span>输入真实姓名</span>      <input type=\"text\" />    </div>    <div>      <span>输入身份证号码</span>      <input type=\"text\" />    </div>    <div>      <span>输入联系QQ</span>      <input type=\"text\" />    </div>  </div>  <div class=\"re-ipt basicInfo_page2\">    <div>      <span>输入联系人手机号</span>      <input type=\"text\" />    </div>    <div>      <span>输入联系人姓名</span>      <input type=\"text\" />    </div>    <div class=\"basicInfo_select\">      <span class=\"basicInfo_selectbtn\">选择联系关系</span>      <i class=\"basicInfo_selectval\">选择联系关系</i>    </div>    <ul class=\"basicInfo_selectlist re-hide\">      <li class=\"active\">选择联系关系</li>      <li>亲人</li>      <li>朋友</li>      <li>同学</li>      <li>兄弟</li>      <li>知己</li>      <li>恋人</li>      <li>其他</li>    </ul>  </div>  <div class=\"re-ipt basicInfo_page3 re-hide\">    <div>      <span>输入工作单位名称</span>      <input type=\"text\" />    </div>    <div>      <span>输入工作单位电话</span>      <input type=\"text\" />    </div>    <div>      <span>输入工作单位地址</span>      <input type=\"text\" />    </div>  </div>  <div class=\"re-login-footer basicInfo_btn re-hide\">    <a class=\"re-submit-btn\" href=\"javascript:void(0)\">      <span>下一步</span>    </a>    <p class=\"basicInfo_notice\">*身份证和姓名不匹配</p>  </div>  <div class=\"re-login-footer basicInfo_btn\">    <a class=\"re-submit-btn\" href=\"javascript:void(0)\">      <span>提交</span>    </a>    <p>      <input type=\"checkbox\" name=\"protocal\" value=\"protocal1\">      我已阅读并同意签订《租房借款分期服务协议》    </p>    <p>      <input type=\"checkbox\" class=\"select\" name=\"protocal\" value=\"protocal2\">      我已阅读并同意签订《个人征信信息查询及使用授权书》    </p>  </div></div>"

/***/ })

/******/ });