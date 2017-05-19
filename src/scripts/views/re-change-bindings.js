var str = require('../tpls/re-change-bindings.string');

var common = require('../utils/common.util.js');

common.renderBody($('body'), str);



//re-code 验证码输入格式
var data = ".code-page1 input";
var data2 = ".code-page2 input";
//头部变色
$(".re-submit-btn").on("click",function(){
	if($(this).parent().parent().attr("index")==3){
		return;
	};
	$(this).parent().parent().next().removeClass("re-hide");
	$(this).parent().parent().addClass("re-hide");
	var Index = Number($(this).parent().parent().attr("index"))+1;
	$(".re-changetop li:nth-child("+Index+")").css("color","#f56d23");
	$(".re-changetop .re-border hr:nth-child("+$(this).parent().parent().attr("index")+")").css("border-top","1px dashed #f56d23");
})
		

//code-page1调用判断为空并获取焦点函数
common.judgeNull(data);
//code-page1调用删除键函数
common.del(data);
//code-page1调用检查input value长度函数
common.inputLength(data);



//code-page2调用判断为空并获取焦点函数
common.judgeNull(data2);
//code-page2调用删除键函数
common.del(data2);
//code-page2调用检查input value长度函数
common.inputLength(data2);