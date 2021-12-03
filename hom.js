$(document).ready(function () {
    "use strict";
    // Adjust Height For Slider
    var winH = $(window).height(),
        navH = $('nav').innerHeight(),
        barH = $('.bar').innerHeight();

    $('.slider, .carousel-item').height( winH - (navH + barH));

    // Carousel Option
    $('.carousel').carousel({
        pause: 'hover',
        interval: 8000
        
    });

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

   // Custom Accordion
    $(' .skills .custom-accordion h5').first().next().css('display', 'block');

    $('.skills .custom-accordion h5').on('click', function () {
        $(this).next().slideToggle(500);
        $('.skills .custom-accordion p').not($(this).next()).slideUp(500);
    });


    var $cell = $('.image__cell');

    $cell.find('.image--basic').click(function(e) {
        e.preventDefault();
        var $thisCell = $(this).closest('.image__cell');

        if ($thisCell.hasClass('is-collapsed')) {
            $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed');
            $thisCell.removeClass('is-collapsed').addClass('is-expanded');
        } else {
            $thisCell.removeClass('is-expanded').addClass('is-collapsed');
        }
    });

    $cell.find('.expand__close').click(function(e) {
        e.preventDefault();
        var $thisCell = $(this).closest('.image__cell');
        $thisCell.removeClass('is-expanded').addClass('is-collapsed');
    });

    // Camera
     $('.gallery .list-unstyled .camera').on('click', function () {

         $('.gallery .row .col-sm-6:nth-child(3) .image--expand').css({
             marginLeft: '-13px'
         });

         $('.gallery .row .col-sm-6:nth-child(5) .image--expand').css({
             marginLeft: '-342px'
         });

         $('.gallery .row .col-sm-6:nth-child(10) .image--expand').css({
             marginLeft: '-672px'
         });
     });

    $('.gallery .list-unstyled > .mob, .gallery .list-unstyled > .lap, ' +
        '.gallery .list-unstyled > .mouse, .gallery .list-unstyled > .all').on('click', function () {

        $('.gallery .row .col-sm-6:nth-child(3) .image--expand').css({
            marginLeft: '-672px'
        });

        $('.gallery .row .col-sm-6:nth-child(5) .image--expand').css({
            marginLeft: '-13px'
        });

        $('.gallery .row .col-sm-6:nth-child(10) .image--expand').css({
            marginLeft: '-342px'
        });
    });

    // Lap
    $('.gallery .list-unstyled .lap').on('click', function () {

        $('.gallery .row .col-sm-6:nth-child(2) .image--expand').css({
            marginLeft: '-13px'
        });

        $('.gallery .row .col-sm-6:nth-child(7) .image--expand').css({
            marginLeft: '-342px'
        });

        $('.gallery .row .col-sm-6:nth-child(9) .image--expand').css({
            marginLeft: '-672px'
        });
    });

    $('.gallery .list-unstyled > .mob, .gallery .list-unstyled > .camera, ' +
        '.gallery .list-unstyled > .mouse, .gallery .list-unstyled > .all').on('click', function () {

        $('.gallery .row .col-sm-6:nth-child(2) .image--expand').css({
            marginLeft: '-342px'
        });

        $('.gallery .row .col-sm-6:nth-child(7) .image--expand').css({
            marginLeft: '-672px'
        });

        $('.gallery .row .col-sm-6:nth-child(9) .image--expand').css({
            marginLeft: '-13px'
        });
    });

    // Mobile
    $('.gallery .list-unstyled .mob').on('click', function () {

        $('.gallery .row .col-sm-6:nth-child(2) .image--expand').css({
            marginLeft: '-13px'
        });

        $('.gallery .row .col-sm-6:nth-child(8) .image--expand').css({
            marginLeft: '-342px'
        });

        $('.gallery .row .col-sm-6:nth-child(11) .image--expand').css({
            marginLeft: '-672px'
        });
    });

    $('.gallery .list-unstyled > .lap, .gallery .list-unstyled > .camera, ' +
        '.gallery .list-unstyled > .mouse, .gallery .list-unstyled > .all').on('click', function () {

        $('.gallery .row .col-sm-6:nth-child(8) .image--expand').css({
            marginLeft: '-1000px'
        });
    });

    // mouse
    $('.gallery .list-unstyled .mouse').on('click', function () {

        $('.gallery .row .col-sm-6:nth-child(4) .image--expand').css({
            marginLeft: '-13px'
        });

        $('.gallery .row .col-sm-6:nth-child(6) .image--expand').css({
            marginLeft: '-342px'
        });

        $('.gallery .row .col-sm-6:nth-child(12) .image--expand').css({
            marginLeft: '-672px'
        });
    });

    $('.gallery .list-unstyled > .lap, .gallery .list-unstyled > .camera, ' +
        '.gallery .list-unstyled > .mob, .gallery .list-unstyled > .all').on('click', function () {

        $('.gallery .row .col-sm-6:nth-child(4) .image--expand,' +
            '.gallery .row .col-sm-6:nth-child(12) .image--expand').css({
            marginLeft: '-1000px'
        });

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









