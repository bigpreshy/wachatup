$(document).ready(function () {

    $('.num').click(function () {
    	
        var num = $(this);
        var text = $.trim(num.find('.txt').clone().children().remove().end().text());
        var telNumber = $('#telNumber');
        $(telNumber).val(telNumber.val() + text);
    });

    $('.tel').attr('readonly');

});

function myFunction() {
  var api = "https://wa.me/234";
  var x = document.getElementById("test").elements[0].value; 
  var what = api.concat(x);
  window.location.href = what;
  document.getElementById("root").innerHTML = what;
}
