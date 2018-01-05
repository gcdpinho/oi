jQuery(function ($) {
	'use strict';
	jQuery.datetimepicker.setLocale('pt-BR');
	$('#input-data').datetimepicker({
		mask:true,
		format: 'd/m/Y H:i'
	});
	$('#next').click(function () {
		if ($('#input-data').val() == "") {
			$('#data .alert').removeClass("animated fadeOut");
			$('#data .alert').css('visibility', 'visible');
			$('#data .alert').addClass("animated fadeIn");
			setTimeout(function () {
				$('#data .alert').removeClass("animated fadeIn");
				$('#data .alert').addClass("animated fadeOut");
			}, 3000);
		} else {
			$('.sk-fading-circle').css('display', 'block');
			$('.background-loader').css('display', 'block');
			setTimeout(function () {
				$('.sk-fading-circle').css('display', 'none');
				$('.background-loader').css('display', 'none');
				$("#myModal").modal('show');
			}, 2000);
		}
	});

	$('.modal button').click(function(){
		location.href = "../home/home.html";
	});
});