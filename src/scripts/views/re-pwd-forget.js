var str = require('../tpls/re-pwd-forget.string');

var common = require('../utils/common.util.js');

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
