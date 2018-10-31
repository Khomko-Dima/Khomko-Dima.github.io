$(function() {

	$('#aniimated-thumbnials').lightGallery({
    thumbnail:true
    }); 

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
