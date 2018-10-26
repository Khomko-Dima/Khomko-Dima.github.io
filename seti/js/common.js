$(function() {

      $("#my-menu").mmenu({
        extensions: [ 'widescreen', 'theme-black', 'fx-listitems-slide', 'position-right' ],
        navbar: {
            title: '<p><span>Электромонтаж</span> Гродно</p>'
        },
      });

    var api1 = $('#my-menu').data('mmenu');
    api1.bind('open:finish', function() {
        $('.hamburger').addClass('is-active');
    }).bind('close:finish', function() {
        $('.hamburger').removeClass('is-active');
    });


 

	$(document.body).ready(function() {
		$(".preloader").fadeOut("slow");
	});
	
});
