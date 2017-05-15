var str = require('../tpls/re-rentInstallment-application.string');

var common = require('../utils/common.util.js');

common.renderBody($('body'), str);

// 选择市
$('.rentInstallApply_selectfirst').click(function(){
  if($('.rentInstallApply_select1listl').is(':hidden')){
    $('.rentInstallApply_selectfirst').css('background', 'url(/build/images/basicInfo/arrowup.png) no-repeat right center');
    $('.rentInstallApply_selectfirst').css('backgroundSize', '0.24rem');
    $('.rentInstallApply_select1listl').slideDown();
    $('.rentInstallApply_select1listl li').click(function() {
      $(this).addClass('active').siblings('li').removeClass('active');
      $('.rentInstallApply_selectfirst').html($(this).html());
      setTimeout(function(){
        $('.rentInstallApply_select1listl').slideUp();
      },300)
    });
  }else {
    $('.rentInstallApply_selectfirst').css('background', 'url(/build/images/basicInfo/arrowdown.png) no-repeat right center');
    $('.rentInstallApply_selectfirst').css('backgroundSize', '0.24rem');
    $('.rentInstallApply_select1listl').slideUp();
  }
})

// 选择区
$('.rentInstallApply_selectsecond').click(function(){
  if($('.rentInstallApply_select1listr').is(':hidden')){
    $('.rentInstallApply_selectsecond').css('background', 'url(/build/images/basicInfo/arrowup.png) no-repeat right center');
    $('.rentInstallApply_selectsecond').css('backgroundSize', '0.24rem');
    $('.rentInstallApply_select1listr').slideDown();
    $('.rentInstallApply_select1listr li').click(function() {
      $(this).addClass('active').siblings('li').removeClass('active');
      $('.rentInstallApply_selectsecond').html($(this).html());
      setTimeout(function(){
        $('.rentInstallApply_select1listr').slideUp();
      },300)
    });
  }else {
    $('.rentInstallApply_selectsecond').css('background', 'url(/build/images/basicInfo/arrowdown.png) no-repeat right center');
    $('.rentInstallApply_selectsecond').css('backgroundSize', '0.24rem');
    $('.rentInstallApply_select1listr').slideUp();
  }
})

// 选择付款方式
$('.rentInstallApply_selectpaystyle').click(function(){
  if($('.rentInstallApply_select2list').is(':hidden')){
    $('.rentInstallApply_selectpaystyle').css('background', 'url(/build/images/basicInfo/arrowup.png) no-repeat right center');
    $('.rentInstallApply_selectpaystyle').css('backgroundSize', '0.24rem');
    $('.rentInstallApply_select2list').slideDown();
    $('.rentInstallApply_select2list li').click(function() {
      $(this).addClass('active').siblings('li').removeClass('active');
      $('.rentInstallApply_selectpaystyle').html($(this).html());
      setTimeout(function(){
        $('.rentInstallApply_select2list').slideUp();
      },300)
    });
  }else {
    $('.rentInstallApply_selectpaystyle').css('background', 'url(/build/images/basicInfo/arrowdown.png) no-repeat right center');
    $('.rentInstallApply_selectpaystyle').css('backgroundSize', '0.24rem');
    $('.rentInstallApply_select2list').slideUp();
  }
})

// 选择交租时间
$('.rentInstallApply_selectdate').click(function(){
  if($('.rentInstallApply_select3list').is(':hidden')){
    $('.rentInstallApply_selectdate').css('background', 'url(/build/images/basicInfo/arrowup.png) no-repeat right center');
    $('.rentInstallApply_selectdate').css('backgroundSize', '0.24rem');
    $('.rentInstallApply_select3list').slideDown();
    $('.rentInstallApply_select3list li').click(function() {
      $(this).addClass('active').siblings('li').removeClass('active');
      $('.rentInstallApply_selectdate').html($(this).html());
      setTimeout(function(){
        $('.rentInstallApply_select3list').slideUp();
      },300)
    });
  }else {
    $('.rentInstallApply_selectdate').css('background', 'url(/build/images/basicInfo/arrowdown.png) no-repeat right center');
    $('.rentInstallApply_selectdate').css('backgroundSize', '0.24rem');
    $('.rentInstallApply_select3list').slideUp();
  }
})

$('.re-submit-btn').click(function(){
  $('.re-mask').removeClass('re-hide');
  $('.re-modalBox').removeClass('re-hide');
  $('.re-modalBtn').click(function(){
    $('.re-mask').addClass('re-hide');
    $('.re-modalBox').addClass('re-hide');
  })
})
