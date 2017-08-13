/**
 * Created by abhil on 8/13/2017.
 */


$(document).ready(function () {
    $('.home').css('cursor', 'pointer');
    $('.about').css('cursor', 'pointer');
    $('.contact').css('cursor', 'pointer');

    $('.home').click(function () {
        $('#about').addClass('hide');
        $('#contact').addClass('hide');
        $('#home').fadeIn(700);
        $('#home').removeClass('hide');
        $('.about').removeClass('active');
        $('.contact').removeClass('active');
        $('.home').addClass('active');
    });
    $('.about').click(function () {
        $('#home').addClass('hide');
        $('#contact').addClass('hide');
        $('#about').fadeIn(700);
        $('#about').removeClass('hide');
        $('.home').removeClass('active');
        $('.contact').removeClass('active');
        $('.about').addClass('active');

    });
    $('.contact').click(function () {
        $('#home').addClass('hide');
        $('#about').addClass('hide');
        $('#contact').fadeIn(700);
        $('#contact').removeClass('hide');
        $('.home').removeClass('active');
        $('.about').removeClass('active');
        $('.contact').addClass('active');
    });

});


$('body').toggleClass('day-background');

$('#cb1').on('click', function () {
    $('body').toggleClass('day-background');
});