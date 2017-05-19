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
