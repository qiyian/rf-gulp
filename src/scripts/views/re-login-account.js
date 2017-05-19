var str = require('../tpls/re-login-account.string');

var common = require('../utils/common.util.js');

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
