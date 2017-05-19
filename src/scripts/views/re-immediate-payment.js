var str = require('../tpls/re-immediate-payment.string');

var common = require('../utils/common.util.js');

common.renderBody($('body'), str);




//re-code 验证码输入格式
var data3 = ".code-page3 input";
//code-page1调用判断为空并获取焦点函数
common.judgeNull(data3);
//code-page1调用删除键函数
common.del(data3);
//code-page1调用检查input value长度函数
common.inputLength(data3);
