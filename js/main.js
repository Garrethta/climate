$(function () {
    $('.header__slider-text__wrapper').slick({
        arrows: true,
        dotsClass: 'header__dots',
        dots: true,
        prevArrow: '<div class="slider__arrow-prev"></div>',
        nextArrow: '<div class="slider__arrow-next"></div>',
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.header__slider-img__wrapper',
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
    });
    $('.header__slider-img__wrapper').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.header__slider-text__wrapper'
    });
    $('.item1').hover(function () {
        $('.text1').slideToggle();
    });
    $('.item2').hover(function () {
        $('.text2').slideToggle();

    });
    $('.item3').hover(function () {
        $('.text3').slideToggle();

    });
    $('.item4').hover(function () {
        $('.text4').slideToggle();

    });
    $('.item5').hover(function () {
        $('.text5').slideToggle();

    });
    $('#steps_1').on('click', function () {
        $('.steps__slider-inner').removeClass('visible'),
            $('#steps__slide_1').addClass('visible')
    })
    $('#steps_2').on('click', function () {
        $('.steps__slider-inner').removeClass('visible'),
            $('#steps__slide_2').addClass('visible')
    })
    $('#steps_3').on('click', function () {
        $('.steps__slider-inner').removeClass('visible'),
            $('#steps__slide_3').addClass('visible')
    })
    $('#steps_4').on('click', function () {
        $('.steps__slider-inner').removeClass('visible'),
            $('#steps__slide_4').addClass('visible')
    })
    $('#steps_5').on('click', function () {
        $('.steps__slider-inner').removeClass('visible'),
            $('#steps__slide_5').addClass('visible')
    })
    $('.module').magnificPopup({
        type: 'inline',
    });
    $('.header__adaptive-btn').on('click', function () {
        $('.header__adaptive-aside').toggleClass('visible')
    });
    $('#steps_adaptive_1').on('click', function () {
        $('#steps__adaptive-slide_1').slideToggle();
    });
    $('#steps_adaptive_2').on('click', function () {
        $('#steps__adaptive-slide_2').slideToggle();
    });
    $('#steps_adaptive_3').on('click', function () {
        $('#steps__adaptive-slide_3').slideToggle();
    });
    $('#steps_adaptive_4').on('click', function () {
        $('#steps__adaptive-slide_4').slideToggle();
    });
    $('#steps_adaptive_5').on('click', function () {
        $('#steps__adaptive-slide_5').slideToggle();
    });
})