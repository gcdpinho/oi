jQuery(function ($) {
    'use strict';
  
});

function login(){
    var login = $("#name");
    var pass = $("#password");

    if (login.val() == "admin" && pass.val() == "admin")
        location.href = "pages/home/home.html"
    else{
        login.val("");
        pass.val("");
        $('#login .alert').removeClass("animated fadeOut");
        $('#login .alert').css('visibility', 'visible');
        $('#login .alert').addClass("animated fadeIn");
        setTimeout(function(){
            $('#login .alert').removeClass("animated fadeIn");
            $('#login .alert').addClass("animated fadeOut");
        }, 3000);
    }
        
        
}