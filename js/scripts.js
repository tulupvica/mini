$( document ).ready(function() {
    // activ-nav__link
    $('.nav__link').click(function () {
        $('.nav__link:first').addClass('active');
        $('.nav__link').removeClass('active');
        $(this).addClass('active');
    });

    $('.nav__link').click(function () {
        $('.header .nav').removeClass('active');
        $('.menu-toggle').removeClass('active')
    });

    // menu-toogle
    var $menuToogle = $('.menu-toggle');
    // делает крестик
    $menuToogle.click(function () {
        $('.menu-toggle').toggleClass('active')
    });

    $menuToogle.click(function () {
        $('.header .nav').toggleClass('active');
    });

    // bunner-slider
    $('.bunner-slider, .testimonial-slider').slick({
        arrows:false,
        dots:true
    });


    // progress-bars
    $('.bar').each(function () {
        $(this).find('.bar-line__progress').animate({
            width:$(this).attr('data-percent')
        },5000);
    });

    // // counter
    $('.facts-list__counter').each(function () {
        $(this).prop('Counter',0).animate({
            Counter:$(this).text()
        },{
            duration: 4000,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
         });
    });

    // pricing-item
    $('.box-pricing__item').hover(function () {
        $(this).toggleClass('box-pricing__item_active');
    });

    // tabs
    $('.tabs a').click(function () {
       $(this).parents('.tab-wrap').find('.tab-cont').addClass('hide') ;
        $(this).parent().siblings().removeClass('active') ;
        var id = $(this).attr('href');
        $(id).removeClass('hide');
        $(this).parent().addClass('active');
        return false
    });


    // portfolio-sider
    $('.portfolio-slider__footer').slick({
        arrows: false,
        fade:true
    });
    $('.portfolio-slider').slick({
        dots:true,
        fade:true,
        appendArrows: '.portfolio-slider__arrows',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        asNavFor: '.portfolio-slider__footer'
    });

    // tabs-slider
    $nav_tabs_slider = $('.nav-tab-list');
    settings = {
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        infinite: false
    };

    $nav_tabs_slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
        $(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
        $(this).find('.slick-current').siblings().removeClass('active');
        var id = $(this).find('.slick-current a').attr('href');
        $(id).removeClass('hide');
        $(this).find('.slick-current').addClass('active');
        return false
    });


    $(window).on('resize load', function(){
        if($(window).width() > 669) {
            if($nav_tabs_slider.hasClass('slick-initialized')) {
                $nav_tabs_slider.slick('unslick')
            }
            return
        }
        if(!$nav_tabs_slider.hasClass('slick-initialized')) {
            return $nav_tabs_slider.slick(settings)
        }
    });

    // scroll
    $("#main-nav, .about-btn").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

         //узнаем высоту от начала страницы до блока на который ссылается якорь
         top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body, html').animate({scrollTop: top}, 1000);

    });

    // button to top
    var $btnTop = $('.btn-to-top');
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100){
            $btnTop.fadeIn(500);
        } else {
            $btnTop.fadeOut(500);
        }
    });


    $btnTop.click(function () {
        $('body, html').animate({scrollTop: 0}, 800);
    });


});


