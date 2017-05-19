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

	module.exports = __webpack_require__(92);


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

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(93);



/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(94);

	var common = __webpack_require__(4);

	common.renderBody($('body'), str);

	var forgetPwd = angular.module('forgetPwd', [], function ($httpProvider) {
	    // Use x-www-form-urlencoded Content-Type
	    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

	    /**
	     * The workhorse; converts an object to x-www-form-urlencoded serialization.
	     * @param {Object} obj
	     * @return {String}
	     */
	    var param = function (obj) {
	        var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

	        for (name in obj) {
	            value = obj[name];

	            if (value instanceof Array) {
	                for (i = 0; i < value.length; ++i) {
	                    subValue = value[i];
	                    fullSubName = name + '[' + i + ']';
	                    innerObj = {};
	                    innerObj[fullSubName] = subValue;
	                    query += param(innerObj) + '&';
	                }
	            }
	            else if (value instanceof Object) {
	                for (subName in value) {
	                    subValue = value[subName];
	                    fullSubName = name + '[' + subName + ']';
	                    innerObj = {};
	                    innerObj[fullSubName] = subValue;
	                    query += param(innerObj) + '&';
	                }
	            }
	            else if (value !== undefined && value !== null)
	                query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
	        }

	        return query.length ? query.substr(0, query.length - 1) : query;
	    };

	    // Override $http service's default transformRequest
	    $httpProvider.defaults.transformRequest = [function (data) {
	        return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
	    }];
	});

	forgetPwd.controller('forgetPwdCtrl', function ($scope, $http) {
	  var mobileReg = /^1[3|4|5|7|8][0-9]\d{8}$/;
	  // send verification code
	  $scope.get_smscode = function(){
	    var re_mobile = $('.re_mobile').val();
	    if (mobileReg.test(re_mobile)) {
	      $http({
	        url: reDomain + 'nzwz-bus/restapi/nzwz/sms/sendcode',
	        method: "post",
	        headers: {
	          'Content-Type': 'application/x-www-form-urlencoded'
	        },
	        data: {
	          api_version: reVersion,
	          mobile: re_mobile
	        }
	      }).success(function (response) {
	        if (response.code == "000000000") {
	          common.alertError("发送成功");
	        }
	        else {
	          common.alertError(response.message);
	        }
	      });
	    }
	    else {
	      common.alertError("请输入正确的手机号");
	    }
	  }

	  // forget pwd
	  $scope.orgetPwdBtn = function(){
	    var re_mobile = $('.re_mobile').val();
	    var re_smscode = $('.re_smscode').val();
	    var re_password = $('.re_password').val();
	    if(mobileReg.test(re_mobile)){
	      if(re_password.length > 5 && re_password.length <17){
	        if(re_mobile != "" && re_smscode != ""){
	          $http({
	            url: reDomain + 'nzwz-bus/restapi/nzwz/base/password/reset',
	            method: "post",
	            headers: {
	              'Content-Type': 'application/x-www-form-urlencoded'
	            },
	            data: {
	              api_version: reVersion,
	              mobile: re_mobile,
	              sms_code: re_smscode
	            }
	          }).success(function (response) {
	            if (response.code == "000000000") {
	              // 登录成功
	              window.location.href="re-index-message.html";
	            }
	            else {
	              common.alertError(response.message);
	            }
	          });
	        }else {
	          common.alertError("验证码不能为空");
	        }
	      }else {
	        common.alertError("密码格式不正确");
	      }
	    }else {
	      common.alertError("请输入正确的手机号");
	    }
	  }
	})



/***/ }),

/***/ 94:
/***/ (function(module, exports) {

	module.exports = "<div class=\"re-header\">  <img src=\"/build/images/re-logo.png\" alt=\"\" /></div><div class=\"re-main\"  ng-controller=\"forgetPwdCtrl\" ng-app=\"forgetPwd\">  <div class=\"re-ipt\">    <div>      <span>输入手机号</span>      <input class=\"re_mobile\" type=\"text\" />    </div>    <div>      <span>输入验证码</span>      <input class=\"re_smscode\" type=\"text\" />      <a class=\"re-code\" href=\"##\">        <img src=\"/build/images/re-codebg.png\"/>        <span ng-click=\"get_smscode()\">获取验证码</span>      </a>    </div>    <div>      <span>获取新密码</span>      <input class=\"re_password\" type=\"password\" />    </div>    <p>密码格式为6-16位数字，字母或符号，不允许有空格</p>  </div>  <div class=\"re-login-footer\">    <a class=\"re-submit-btn\" href=\"##\">      <span ng-click=\"orgetPwdBtn()\">完成登录</span>    </a>  </div></div>"

/***/ })

/******/ });