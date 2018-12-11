$(function() {

      $("#my-menu").mmenu({
        extensions: [ 'widescreen', 'theme-black', 'fx-listitems-slide', 'position-right' ],
        navbar: {
            title: '<p><span>Электромонтаж</span> Гродно</p>'
        },
        onClick: {
            close: true,
            preventDefault: false,
        },
      });

    var api1 = $('#my-menu').data('mmenu');
    api1.bind('open:finish', function() {
        $('.hamburger').addClass('is-active');
    }).bind('close:finish', function() {
        $('.hamburger').removeClass('is-active');
    });
    // $('.mm-listitem__text').click(function() {
    //     $('.hamburger').removeClass('is-active');
    //     $('#my-menu').removeClass('mm-menu_opened');
    // });

    $('.partners-galery').owlCarousel({
        loop: true,
        smartSpeed: 700,
        dots: false,
        nav: true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsiveClass: true,
        responsive:{
        0:{
            items:1
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

	$(document.body).ready(function() {
		$(".preloader").fadeOut("slow");
	});
	
});
