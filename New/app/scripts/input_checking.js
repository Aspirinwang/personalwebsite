/**
 * Created by Aspirinwang on 2/23/16.
 */

function form_check() {
  var email = $("#email").val();

  if(!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)) {
    alert("");
    document.getElementById("email").focus();
    return false;
  }
  return true;
}



//$('.input').click(function(){
//
//  $('.input').toggleClass()
//})
