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

	module.exports = __webpack_require__(117);


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

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(118);



/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(119);

	var common = __webpack_require__(4);

	common.renderBody($('body'), str);



/***/ }),

/***/ 119:
/***/ (function(module, exports) {

	module.exports = "<section class=\"stagePro_container\">  <h1 class=\"stagePro_banner\">    <img src=\"/build/images/stageProcess/banner.jpg\" alt=\"\">  </h1>  <section class=\"stagePro_content\">    <div class=\"stagePro_title\">公司介绍</div>    <p class=\"marginTop stagePro_center\">你找我租——隶属于海华普诚信用管理（北京）有限公司，是一个移动互联网+租房场景+分期服务商。</p>    <p class=\"stagePro_center\">我们搭建租客与公寓的链接桥梁，我们把有分期需求的优质租客推荐给我们合作的品牌公寓，同时把我们合作的品质</p>    <p class=\"marginBottom stagePro_center\">公寓也推荐给广大优质租客，做双向推荐。</p>    <div class=\"stagePro_title\">申请流程</div>    <ul class=\"stagePro_main\">      <li>        <p class=\"stagePro_mainl1\">          <span><em>①</em>申请分期</span>          <i>提交分期审核基础信息后，工作人员会与您联系。</i>        </p>        <img class=\"stageImg1\" src=\"/build/images/stageProcess/stage1.png\" alt=\"\" />      </li>      <li>        <img class=\"stageImg2\" src=\"/build/images/stageProcess/stage2.png\" alt=\"\" />        <p class=\"stagePro_mainr1\">          <span><em>②</em>签订合同</span>          <i>租客与合作公寓签订房租合同，提交个人资料。</i>        </p>      </li>      <li>        <p class=\"stagePro_mainl2\">          <span><em>③</em>资质审核</span>          <i>个人资料提交完成后，工作人员会与您联系，审核个人信息。</i>        </p>        <img class=\"stageImg3\" src=\"/build/images/stageProcess/stage3.png\" alt=\"\" />      </li>      <li>        <img class=\"stageImg4\" src=\"/build/images/stageProcess/stage4.png\" alt=\"\" />        <p class=\"stagePro_mainr2\">          <span><em>④</em>急速放款</span>          <i>资质审核完成，你找我租会尽快放款。</i>        </p>      </li>      <li>        <p class=\"stagePro_mainl3\">          <span><em>⑤</em>按月还款</span>          <i>租客通过审核后，你找我租会将为租客垫付房租，租客则每月在还款日还房租给你找我租。</i>        </p>        <img class=\"stageImg5\" src=\"/build/images/stageProcess/stage5.png\" alt=\"\" />      </li>    </ul>  </section>  <div class=\"re-login-footer\">    <a class=\"re-submit-btn\" href=\"##\">      <span>申请分期</span>    </a>  </div></section>"

/***/ })

/******/ });