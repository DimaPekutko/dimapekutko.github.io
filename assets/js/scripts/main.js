$(document).ready(function() {

    //slider

    var slider_speed = 4000;

    $(".slider_left_carousel").slick({
    	infinite: true,
    	dots: true,
    	arrows: false,
    	appendDots: $('.slider_left_nav_panel')
    });

    $(".slider_right_slider").slick({
    	infinite: true,
    	dots: false,
    	arrows: true,
    	prevArrow: $('#prev_slider_arrow'),
    	nextArrow: $('#next_slider_arrow'),
    });

    //sync sliders 

    $(".slider_left_carousel").on("afterChange", function (event, slick, currentSlide, nextSlide){
    	 $('.slider_right_slider').slick('slickGoTo', currentSlide);
    });

     $(".slider_right_slider").on("afterChange", function (event, slick, currentSlide, nextSlide){
    	 $('.slider_left_carousel').slick('slickGoTo', currentSlide);
    });

    //without slick's autoplay, because sliders are syncs

    var slider_interval = setInterval(sliderAutoPlay, slider_speed);

	    function sliderAutoPlay() {
	        $('#next_slider_arrow').click()
	    }
});