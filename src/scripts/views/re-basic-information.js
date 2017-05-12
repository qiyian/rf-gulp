var str = require('../tpls/re-basic-information.string');

var common = require('../utils/common.util.js');

common.renderBody($('body'), str);

$('.basicInfo_selectval').click(function(){
  if($('.basicInfo_selectlist').is(':hidden')){
    $('.basicInfo_selectval').css('background', 'url(/build/images/basicInfo/arrowup.png) no-repeat right center');
    $('.basicInfo_selectval').css('backgroundSize', '0.24rem');
    $('.basicInfo_selectlist').slideDown();
    $('.basicInfo_selectlist li').click(function() {
      $(this).addClass('active').siblings('li').removeClass('active');
      $('.basicInfo_selectval').html($(this).html());
      setTimeout(function(){
        $('.basicInfo_selectlist').slideUp();
      },300)
    });
  }else {
    $('.basicInfo_selectval').css('background', 'url(/build/images/basicInfo/arrowdown.png) no-repeat right center');
    $('.basicInfo_selectval').css('backgroundSize', '0.24rem');
    $('.basicInfo_selectlist').slideUp();
  }
})
