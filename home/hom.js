$(document).ready(function () {
    "use strict";
    // Adjust Height For Slider
    var winH = $(window).height(),
        navH = $('nav').innerHeight(),
        barH = $('.bar').innerHeight();

    $('.slider, .carousel-item').height( winH - (navH + barH));

    // Carousel Option
    // $('.carousel').carousel({
    //     pause: 'hover',
    //     interval: 8000
        
    // });

    // Add Active
    $('.navbar .navbar-nav .nav-item, .gallery .list-unstyled li').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });

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

    // Hover H4
    $('.feature .ser-box .media .media-body h5').mouseenter(function () {
        $(this).parent().siblings('i').css({
            color: '#FFF',
            backgroundColor: '#2EA1C7',
            boxShadow: 'none',
            borderColor: '#2EA1C7'
        });
    });

    $('.feature .ser-box .media .media-body h5').mouseleave(function () {
        $(this).parent().siblings('i').css({
            color: '#2EA1C7',
            backgroundColor: '#FFF',
            boxShadow: 'inset 0 0 0 5px #F2F2F2',
            borderColor: '#FFF'
        });
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









