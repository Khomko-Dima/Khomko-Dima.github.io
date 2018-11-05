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
        }
        else
        {
            $('.openButton').removeClass('openDone');
            $('.hamburger').removeClass('is-active');
            $('.menu-dop').css("right", "-999px");
        }
    });

    //Плавная анимация при переходе по а к блоку
    $("a.scrollto").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
        return false;
    });

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
	
    $(document).ready(function() {

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});
    
});
