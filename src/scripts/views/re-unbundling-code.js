var str = require('../tpls/re-unbundling-code.string');

var common = require('../utils/common.util.js');

common.renderBody($('body'), str);


//re-code 验证码输入格式
var data4 = ".code-page4 input";
//code-page1调用判断为空并获取焦点函数
common.judgeNull(data4);
//code-page1调用删除键函数
common.del(data4);
//code-page1调用检查input value长度函数
common.inputLength(data4);
