'use strict';

$('#user-name').on('input', function() {

    if (!$(this).val().match(/^[a-zа-яiъї]+$/i)) {
        $('#alert-name').css({
            'visibility': 'visible'
        })
    } else {
        $('#alert-name').css({
            'visibility': 'hidden'
        })
    }

    if (!$(this).val()) {
        $('#alert-name').css({
            'visibility': 'hidden'
        })
    }
})

$('#user-email').on('input', function() {

    var emailRe = /^([\w\-_+]+(?:\.[\w\-_+]+)*)@((?:[a-z0-9\-]+\.)*[a-z0-9][a-z0-9\-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if (!emailRe.test($(this).val() || '')) {
        $('#alert-email').css({
            'visibility': 'visible'
        })
    } else {
        $('#alert-email').css({
            'visibility': 'hidden'
        })
    }

    if (!$(this).val()) {
        $('#alert-email').css({
            'visibility': 'hidden'
        })
    }
})

$('#user-password').on('input', function() {

    var passLength = false;
    var passDigit = false;
    var passSpecial = false;
    var passUpper = false;




    if ($(this).val().length < 8) {

        var passLength = false;

        $('#alert-password').css({
            'visibility': 'visible'
        })
        $('#password-length').css({
            'display': 'inline'
        })
    } else if ($(this).val().length >= 8) {

        var passLength = true;



        $('#password-length').css({
            'display': 'none'
        })
    }

    if (!$(this).val().match(/\d/)) {

        var passDigit = false;

        $('#alert-password').css({
            'visibility': 'visible'
        })
        $('#password-digit').css({
            'display': 'inline'
        })
    } else if ($(this).val().match(/\d/)) {

        var passDigit = true;

        $('#password-digit').css({
            'display': 'none'
        })
    }

    if (!$(this).val().match(/[^\da-z]/i)) {

        var passSpecial = false;

        $('#alert-password').css({
            'visibility': 'visible'
        })
        $('#password-special').css({
            'display': 'inline'
        })
    } else if ($(this).val().match(/[^\da-z]/i)) {

        var passSpecial = true;

        $('#password-special').css({
            'display': 'none'
        })
    }

    if (!$(this).val().match(/[A-Z]/)) {

        var passUpper = false;

        $('#alert-password').css({
            'visibility': 'visible'
        })
        $('#password-uppercase').css({
            'display': 'inline'
        })
    } else if ($(this).val().match(/[A-Z]/)) {

        var passUpper = true;

        $('#password-uppercase').css({
            'display': 'none'
        })
    }

    if (!$(this).val()) {
        $('#alert-password').css({
            'visibility': 'hidden'
        })
    }

    if (passLength === true && passDigit === true && passSpecial === true && passUpper === true) {
        $('#alert-password').css({
            'visibility': 'hidden'
        })
    }

})
