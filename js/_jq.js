document.addEventListener("DOMContentLoaded", function() {

	//scroll by #
		$("a.scrollto").click(function () {
			elementClick = $(this).attr("href");
			console.log(elementClick)
			destination = $(elementClick).offset().top;
			$("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
			return false;
		});

	//menu

		$("#navToggle").click(function() {
			$(this).toggleClass("active");
			$(".menu").toggleClass("active");
			$("html").toggleClass("modal-is-locked");
		});
		$('#navToggle').click(function() {
			$('.menu').slideToggle(500);
		});//end slide toggle
		$(window).resize(function() {   
			if (  $(window).width() > 768 ) {     
			$('.menu').removeAttr('style');
			}
		});//end resize

	$('.who-uses__slider').slick({
		lazyLoad: 'ondemand',
		dots: true,
		infinite: false,
		speed: 300,
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 810,
			  settings: {
			    slidesToShow: 2,
			    slidesToScroll: 1,
			    infinite: false,
			    dots: true
			  }
			},
			{
			  breakpoint: 500,
			  settings: {
			    slidesToShow: 1,
			    arrows: false,
			    slidesToScroll: 1
			  }
			}
		]
	});
	$('.reviews__slider').slick({
		lazyLoad: 'ondemand',
		dots: true,
		infinite: true,
		speed: 300,
		arrows: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 810,
			  settings: {
			    slidesToShow: 1
			  }
			},
			{
			  breakpoint: 500,
			  settings: {
			    arrows: false,
			    slidesToShow: 1
			  }
			}
		]
	});

});