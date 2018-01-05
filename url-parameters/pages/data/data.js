jQuery(function ($) {
	'use strict';
	$('#input-data').mask('99/99/9999 99:99');
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