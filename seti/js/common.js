$(function() {

    var main = function() { //главная функция
 
    $('.icon-menu').click(function() { /* выбираем класс icon-menu и
               добавляем метод click с функцией, вызываемой при клике */
            $('.icon-close').css("right", "0px")
            $('.icon-menu').css("right", "-999px")
        $('.menu').animate({ //выбираем класс menu и метод animate
 
            right: '0px' /* теперь при клике по иконке, меню, скрытое за
               левой границей на 285px, изменит свое положение на 0px и станет видимым */
 
        }, 200); //скорость движения меню в мс
         
        $('body').animate({ //выбираем тег body и метод animate
 
            right: '285px' /* чтобы всё содержимое также сдвигалось вправо
               при открытии меню, установим ему положение 285px */
 
        }, 200); //скорость движения меню в мс
    });
 
 
/* Закрытие меню */
 
    $('.icon-close').click(function() { //выбираем класс icon-close и метод click
            $('.icon-close').css("right", "-999px")
            $('.icon-menu').css("right", "0px")
        $('.menu').animate({ //выбираем класс menu и метод animate
 
            right: '-285px' /* при клике на крестик меню вернется назад в свое
               положение и скроется */
 
        }, 200); //скорость движения меню в мс
         
    $('body').animate({ //выбираем тег body и метод animate
 
            right: '0px' //а содержимое страницы снова вернется в положение 0px
 
        }, 200); //скорость движения меню в мс
    });
};
 
$(document).ready(main); /* как только страница полностью загрузится, будет
               вызвана функция main, отвечающая за работу меню */
	
	$(document).ready(function() {
  		$("a.scrollto").click(function () {
    	elementClick = $(this).attr("href");
    	destination = $(elementClick).offset().top;
    	$("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    	return false;
  		});
	});
	$(document.body).ready(function() {
		$(".preloader").fadeOut("slow");
	});
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
