var str = require('../tpls/re-pwd-set.string');

var common = require('../utils/common.util.js');

common.renderBody($('body'), str);

var setPwd = angular.module('setPwd', [], function ($httpProvider) {
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

setPwd.controller('setPwdCtrl', function ($scope, $http) {
  $scope.setPwdBtn = function(){
    var re_password = $('.sp_password').val();
    if(re_password.length >5 && re_password.length <17){
      $http({
        url: reDomain + 'nzwz-bus/restapi/nzwz/base/password/create',
        method: "post",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {
          api_version: reVersion,
          access_key: reAccessKey,
          password: re_password
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
    }else{
      common.alertError("密码格式不正确");
    }
  }
})
