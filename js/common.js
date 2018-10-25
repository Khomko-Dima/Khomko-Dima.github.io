$(function() {
	// Custom JS
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
	new WOW().init();
});
