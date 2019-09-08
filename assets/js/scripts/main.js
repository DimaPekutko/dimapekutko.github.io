 
// ! Don't remove slick-theme.css lib, it's changed for custom dots

$(document).ready(function() {

    $('.main_wrap').dataTable( {
        "scrollX": false
    } );

    $('.slider_left_slider').show();
    $('.slider_right').show();

    //first section sliders

    var slider_speed = 8000;

    $(".slider_left_carousel").slick({
    	infinite: true,
    	dots: true,
        appendDots: $('.slider_left_nav_panel'),
        arrows: false,
    });

    $(".slider_right_slider").slick({
    	infinite: true,
    	dots: false,
    	arrows: true,
    	prevArrow: $('#prev_slider_arrow'),
    	nextArrow: $('#next_slider_arrow'),
    });

    //first section sliders are sync 

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

   //second section slider (only in mobile).

   if($(document).width() < 768) {
    $('.second_slider').slick({
        infinite: true,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 2000,
    });

}

   //accordion

   var accord_btns = $('.accord_btn');
   var accord_els = $('.accord_el');
   var accord_sub_texts = $('.accord_sub_text');
   var accord_texts = $('.accord_text');

   for(var i = 0; i < accord_btns.length; i++) { 
    var accord_btn = $(accord_btns[i]);
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

    accord_btns[0].click(); // just to show first


    //seventh section slider

    $(".seventh_slider").slick({
        infinite: true,
        dots: true,
        appendDots: $('.seventh_slider_dots'),
        arrows: true,
        prevArrow: $('#seventh_s_left_arrow'),
        nextArrow: $('#seventh_s_right_arrow'),
    });

    //ninth section news hover

    if($(document).width() > 768) {

        var newsposts = $('.newsblog_post');
        var newsposts_images = $('.newsblog_post img');

        for(var i = 0; i < newsposts.length; i++) {
            var newpost = $(newsposts[i]);
            newpost.mouseenter({'i': i}, ninthMouseenter);
            newpost.mouseleave({'i': i}, ninthMouseleave);
        }

        function ninthMouseenter(e) {
            var i = e.data.i;
            $(newsposts_images[i]).css("opacity", "0.8");
            $(newsposts[i]).find('.newsblog_share_button').show();
        }

        function ninthMouseleave(e) {
            var i = e.data.i;
            $(newsposts_images[i]).css("opacity", "1");
            $(newsposts[i]).find('.newsblog_share_button').hide();
        }

    }

});