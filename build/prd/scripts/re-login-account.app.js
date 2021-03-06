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

	module.exports = __webpack_require__(68);


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

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(69);



/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(70);

	var common = __webpack_require__(4);

	common.renderBody($('body'), str);


	var accountLogin = angular.module('accountLogin', [], function ($httpProvider) {
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

	accountLogin.controller('accountLoginCtrl', function ($scope, $http) {
	  $scope.al_loginBtn = function(){
	    var re_username = $('.al_username').val();
	    var re_password = $('.al_password').val();
	    if(re_username != "" && re_password != ""){
	      $http({
	        url: reDomain + 'nzwz-bus/restapi/nzwz/base/login/byaccount',
	        method: "post",
	        headers: {
	          'Content-Type': 'application/x-www-form-urlencoded'
	        },
	        data: {
	            api_version: reVersion,
	            user_name: re_username,
	            password: re_password,
	            open_id:reOpenId
	        }
	      }).success(function (response) {
	          localStorage.setItem('reAccessKey',response.data.access_key);
	        if (response.code == "000000000") {
	            $http({
	                url: reDomain + 'nzwz-bus/restapi/nzwz/contract/customer/historystatus',
	                method: "post",
	                headers: {
	                    'Content-Type': 'application/x-www-form-urlencoded'
	                },
	                data: {
	                    api_version: reVersion,
	                    access_key: response.data.access_key
	                }
	            }).success(function(response){
	                if(response.code == "000000000"){
	                    if(response.data.contract_status=="0" || response.data.contract_status=="1"){
	                        //查询sceneid接口
	                        $http({
	                            url: reDomain + 'nzwz-bus/restapi/nzwz/contract/customer/claimstatus',
	                            method: "post",
	                            headers: {
	                                'Content-Type': 'application/x-www-form-urlencoded'
	                            },
	                            data: {
	                                api_version: reVersion,
	                                access_key: window.localStorage.getItem("reAccessKey"),
	                                scene_id:reSceneId
	                            }
	                        }).success(function(response){
	                            if(response.code == "000000000"){
	                                if(response.data.contract_status == "0"){
	                                    //进件可被认领,unfinished
	                                    //window.location.href=""
	                                }
	                                else{
	                                    //进件被认领、失效，to error , unfinished

	                                }
	                            }
	                            else{
	                                common.alertError(response.message);
	                            }

	                        });
	                    }
	                    else if(response.data.contract_status=="3"){
	                        //审核中，还款中
	                        window.location.href="re-index-message.html";
	                    }
	                }
	                else{
	                    common.alertError(response.message);
	                }



	            });

	          // 登录成功

	          //window.location.href="re-index-message.html";
	        }
	        else {
	          common.alertError(response.message);
	        }
	      });
	    }else{
	      common.alertError("请输入用户名或密码");
	    }
	  }
	})



/***/ }),

/***/ 70:
/***/ (function(module, exports) {

	module.exports = "<div class=\"re-header\">  <img src=\"/build/images/re-logo.png\" alt=\"\" /></div><div class=\"re-main\" ng-controller=\"accountLoginCtrl\" ng-app=\"accountLogin\">  <div class=\"re-ipt\">    <div>      <span>请输入账号</span>      <input type=\"text\"  class=\"al_username\" value=\"\"/>    </div>    <div>      <span>请输入密码</span>      <input type=\"password\"   class=\"al_password\" value=\"\"/>    </div>  </div>  <div class=\"re-loginmode\">    <a class=\"re-login-mode\" href=\"re-login-code.html\">验证码登录</a>    <a class=\"re-login-forget\" href=\"re-pwd-forget.html\">忘记密码</a>  </div>  <div class=\"re-login-footer\">    <a class=\"re-submit-btn\" ng-click=\"al_loginBtn()\" href=\"javascript:void(0);\">      <span >登录</span>    </a>    <p>未注册的手机号将自动创建为你找我租账号</p>  </div></div>"

/***/ })

/******/ });