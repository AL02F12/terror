// JavaScript Document
	var panel ='<div data-role="panel" id="mipanel" data-theme="a" data-display="push"><div class="panel-content" align="center"> <h2>Menu</h2><img src="imagenes/kjfdjhfkd.jpg" width="225" height="225"> <div data-role="controlgroup"> <a data-role="button" href="#Principal">Principal</a> <a data-role="button" href="#Vibrar">Tipos de tortura</a>  <a data-role="button" href="#Beep">Que es una tortura?</a> <a data-role="button" href="#acerca">Acerca de..</a> </div> </div> </div>';
		
		$(document).on('pagebeforecreate', '[data-role=page]', function () {
  if ($(this).find('[data-role=panel]').length === 0) {
    $('[data-role=header]').before(panel);
  }
});



$(document).ready(function(e) {
 document.addEventListener("deviceready",function(){
  $('#B_Vibrar').tap(function(){
    navigator.notification.vibrate(500);
  });



  $('#B_sonidito').tap(function(){
    navigator.notification.beep(1);
  });
 },false); //deviceready
}); //document ready

