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

	module.exports = __webpack_require__(62);


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

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(63);



/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(64);

	var common = __webpack_require__(4);

	common.renderBody($('body'), str);

	var indexmes = angular.module('indexmes', [], function ($httpProvider) {
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

	indexmes.controller('indexmesCtrl', function ($scope, $http) {
	    $http({
	      url: reDomain + 'nzwz-bus/restapi/nzwz/base/information/detail',
	      method: "post",
	      headers: {
	        'Content-Type': 'application/x-www-form-urlencoded'
	      },
	      data: {
	        api_version: reVersion,
	        access_key: reAccessKey
	      }
	    }).success(function (response) {
	      if (response.code == "000000000") {
	        $scope.im = response.data;
	      }
	      else {
	        common.alertError(response.message);
	      }
	    });
	})



/***/ }),

/***/ 64:
/***/ (function(module, exports) {

	module.exports = "<div class=\"re-index\" ng-controller=\"indexmesCtrl\" ng-app=\"indexmes\">  <div class=\"re-index-user\">    <img src=\"/build/images/re-indexlogo.png\" alt=\"\" />    <p>{{im.name}}</p>  </div>  <div class=\"re-index-main\">    <!--还款信息-->    <div class=\"re-repayment-information\">      <p class=\"re-main-header\">        <img src=\"/build/images/iconfont.png\" alt=\"\" />        <span>还款信息</span>      </p>      <div class=\"re-nomassage\">        <img src=\"/build/images/re-index-nullimg.png\"/>        <p>暂无还款信息</p>      </div>      <div class=\"re-hasmassage re-hide\">        <ul class=\"re-hasmassage-main\">          <li>            <p>当前期次</p>            <span>第一期</span>          </li>          <li>            <p>应还日期</p>            <span>2017-4-13</span>          </li>          <li>            <p>应还金额</p>            <span>2000.00</span>          </li>        </ul>        <a class=\"re-hasmassage-btn\" href=\"##\">去还款</a>      </div>    </div>    <ul class=\"re-index-select\">      <li>        <img src=\"/build/images/iconfont.png\" alt=\"\" />        <p>合同管理</p>      </li>      <li>        <img src=\"/build/images/iconfont.png\" alt=\"\" />        <p>银行卡</p>      </li>      <li>        <img src=\"/build/images/iconfont.png\" alt=\"\" />        <p>消息</p>      </li>      <li>        <img src=\"/build/images/iconfont.png\" alt=\"\" />        <p>关于我们</p>      </li>      <li>        <img src=\"/build/images/iconfont.png\" alt=\"\" />        <p>设置</p>      </li>    </ul>    <p class=\"re-phone\">客服电话</p>  </div></div><div class=\"re-mask re-hide\"></div><div class=\"re-prompt-box re-hide\">  <p>拨打客服</p>  <p>400-003-9701</p>  <div class=\"re-promptbox-btn\">    <a href=\"##\">取消</a>    <a href=\"##\">确定</a>  </div></div>"

/***/ })

/******/ });