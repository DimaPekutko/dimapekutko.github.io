$(document).ready(function() {

    //slider

    var slider_speed = 8000;

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

    //accordion

    var accord_btns = $('.accord_btn');
    var accord_els = $('.accord_el');
    var accord_sub_texts = $('.accord_sub_text');
    var accord_texts = $('.accord_text');
 
    for(var i = 0; i < accord_btns.length; i++) { 
        var accord_btn = $(accord_btns[i]);
        var count = i;
        accord_btn.click({'i': i}, accordion);     
    }

    function accordion(e) {
            var i = e.data.i;
            var accord_el = $(accord_els[i]);
            var accord_sub_text = $(accord_sub_texts[i]);
            var accord_text = $(this.nextElementSibling);

            if(accord_text.css('display') == 'block') {
                accord_text.hide(300);
                accord_el.css('color', '#FFFFFF');
                accord_el.css('background', 'url(assets/images/accord_disabled_el.png)');
                accord_sub_text.css('color', '#86C2FF');
            }
            else if(accord_text.css('display') == 'none') {
                accord_els.css('color', '#FFFFFF');
                accord_els.css('background', 'url(assets/images/accord_disabled_el.png)');
                accord_sub_texts.css('color', '#86C2FF');
                accord_texts.hide(300);

                accord_text.show(300);
                accord_el.css('color', '#0063FF');
                accord_el.css('background', 'url(assets/images/accord_enabled_el.png)');
                accord_sub_text.css('color', '#FFFFFF');

            }  
    }

});