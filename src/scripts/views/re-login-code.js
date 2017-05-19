var str = require('../tpls/re-login-code.string');

var common = require('../utils/common.util.js');

common.renderBody($('body'), str);


var codeLogin = angular.module('codeLogin', [], function ($httpProvider) {
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

codeLogin.controller('codeLoginCtrl', function ($scope, $http) {
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

  // code login
  $scope.code_loginBtn = function(){
    var re_mobile = $('.re_mobile').val();
    var re_smscode = $('.re_smscode').val();
    if(re_mobile != "" && mobileReg.test(re_mobile)){
      if (re_smscode != "") {
        $http({
          url: reDomain + 'nzwz-bus/restapi/nzwz/base/login/bysmscode',
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
      common.alertError("请输入正确的手机号");
    }
  }
})
