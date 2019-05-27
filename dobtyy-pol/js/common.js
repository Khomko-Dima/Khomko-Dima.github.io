$(function() {
    //проверка устройства
    if ($("html").hasClass("desktop")) {
        $(".viber-pk").css("display", "block");
    } else {
        $(".viber-mb").css("display", "block");
    }
    //Выезжающее меню
    $('.openButton').click(function() {
        if(!$('.openButton').hasClass('openDone'))
        {
            $('.openButton').addClass('openDone');
            $('.hamburger').addClass('is-active');
            $('.menu-dop').css("right", "0px");
            $('.slogan').css("filter", "blur(10px)");
        }
        else
        {
            $('.openButton').removeClass('openDone');
            $('.hamburger').removeClass('is-active');
            $('.menu-dop').css("right", "-999px");
            $('.slogan').css("filter", "blur(0)");
        }
    });
    $('#aniimated-thumbnials').lightGallery({
    thumbnail:true
    });
    //Плавная анимация при переходе по а к блоку
    $("a.scrollto").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
        $('.slogan').css("filter", "blur(0)");
        $('.menu-dop').css("right", "-999px");
        $('.openButton').removeClass('openDone');
        $('.hamburger').removeClass('is-active');
        return false;
    });


    $(window).resize(function() {     
        if ($(window).width() > 882)
            {
            $('.menu-dop').css("right", "-999px");
            $('.openButton').removeClass('openDone');
            $('.hamburger').removeClass('is-active');
            $('.slogan').css("filter", "blur(0)");
            }
    });
    new WOW().init();
    //прелодер
	$(document.body).ready(function() {
		$(".preloader").fadeOut("slow");
	});

    //кнопка наверх
	$(function() {
        $(window).scroll(function() { 
            if($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            }  
            else {
                $('#toTop').fadeOut();
            }
            });
        $('#toTop').click(function() {
            $('body,html').animate({scrollTop:0},800);
        });
    });
    
});
