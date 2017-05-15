var str = require('../tpls/re-apartment-cooperation.string');

var common = require('../utils/common.util.js');

common.renderBody($('body'), str);

$('.re-submit-btn').click(function(){
  $('.re-mask').removeClass('re-hide');
  $('.re-modalBox').removeClass('re-hide');
  $('.re-modalBtn').click(function(){
    $('.re-mask').addClass('re-hide');
    $('.re-modalBox').addClass('re-hide');
  })
})
