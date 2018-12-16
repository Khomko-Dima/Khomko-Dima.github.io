$(function() {

     $('a.hamburger').click(function() {
        if ($('a.hamburger').hasClass('menu-close')) {
            $('a.hamburger').removeClass('menu-close');
            $('.top_nav-menu').animate({right: '0px'}, 200);
            $('.hamburger').addClass('is-active');
            $('body').animate({right: '400px'}, 200);
            $('.top_nav').animate({left: '-400px'}, 200); 
        } else {
            $('.top_nav-menu').animate({right: '-400px'}, 200);
            $('.hamburger').removeClass('is-active');
            $('a.hamburger').addClass('menu-close');
            $('body').animate({right: '0px'}, 200);
            $('.top_nav').animate({left: '0'}, 200);
            }
        });



     $('.partners-galery').owlCarousel({
        loop: true,
        smartSpeed: 700,
        dots: false,
        nav: true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsiveClass: true,
        responsive:{
        0:{
            items:2
        },
        500:{
            items:2
        },
        576:{
            items:3
        },
        768:{
            items:4
        },
        992:{
            items:5
        }
        }
    });



     $(window).scroll(function() {
        if ($(this).scrollTop() > 100){
        $('.top_nav').addClass("scrol");
        }
        else{
        $('.top_nav').removeClass("scrol");
        }
        });

	$(document.body).ready(function() {
		$(".preloader").fadeOut("slow");
	});
	
});
