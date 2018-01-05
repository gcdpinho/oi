jQuery(function ($) {
    'use strict';

    // Navigation Scroll
    function getURLParameter(url, name) {
        return (RegExp(name + '=' + '(.+?)(&|$)').exec(url) || [, null])[1];
    }

    function getQueryParams(qs) {
        qs = qs.split("?").pop();

        var params = [], tokens,
                re = /[?&]?([^=]+)=([^&]*)/g;

        while (tokens = re.exec(qs)) {
            params.push({k: decodeURIComponent(tokens[1]), v: decodeURIComponent(tokens[2])});
        }

        return params;
    }

    $(document).ready(function () {
        $('.list-group').empty();
        var url = window.location.href;
        var urlParameters = getQueryParams(url);
        $.each(urlParameters, function (key, value) {
            $('.list-group').append($('<li>', {
                text: value.k + ": " + value.v
            }));
        });

    });
});