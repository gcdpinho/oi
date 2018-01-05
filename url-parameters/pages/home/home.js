jQuery(function ($) {
	'use strict';

	$("#next").click(function(){
		var check = $('input[name=message]:checked', '#type-message').val();
		if (check == undefined) {
			showError("tipo de mensagem")
			return;
		}
		var box1 = $("#box1").val()
		if (box1 == ""){
			showError("tipo de campanha")
			return;
		}
		var box2 = $("#box2").val()
		if (box2 == ""){
			showError("segmento de campanha")
			return;
		}

		location.href = "../mensagem/mensagem.html"
	});

	function showError(message){
		var alert = $("#home .alert");
		alert.html(alert.html().replace("/opcao/", message))
		$('#home .alert').removeClass("animated fadeOut");
        $('#home .alert').css('visibility', 'visible');
        $('#home .alert').addClass("animated fadeIn");
        setTimeout(function(){
            $('#home .alert').removeClass("animated fadeIn");
			$('#home .alert').addClass("animated fadeOut");
			$('#home .alert').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function(){
				alert.html(alert.html().replace(message, "/opcao/"))
			});
		}, 3000);
		
	}
});