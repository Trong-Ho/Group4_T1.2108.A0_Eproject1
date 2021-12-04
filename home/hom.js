$(document).ready(function () {
    "use strict";
    // Adjust Height For Slider
    var winH = $(window).height(),
        navH = $('nav').innerHeight(),
        barH = $('.bar').innerHeight();

    $('.slider, .carousel-item').height( winH - (navH + barH));


   

    // Go To The Home
    $('.navbar .nav-item .home').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });

    $('.navbar .nav-item .nav-link').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).data('target')).offset().top
        }, 1500);
    });

    // Go To Top
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > ($('.about').offset().top) - 200) {
            $('.top .fa').fadeIn();
        } else {
            $('.top .fa').fadeOut();
        }
    });

    $('.top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });

    

    // Trigger Mix it Up
   window.mixitup('.container-fluid');

  

    $cell.find('.expand__close').click(function(e) {
        e.preventDefault();
        var $thisCell = $(this).closest('.image__cell');
        $thisCell.removeClass('is-expanded').addClass('is-collapsed');
    });

   

    // Trigger WOW js
    new WOW().init();

    // trigger Nice Scroll
    $('body').niceScroll({
        cursorcolor: '#2EA1C7',
        cursorwidth: '7px',
        cursorborder: '1px solid #2EA1C7',
        cursorminheight: 60
    });

    $(window).on('load', function () {
        $('.loading').fadeOut(500);
    });
});