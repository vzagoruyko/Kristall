$(window).on('load', function() {
    $('.preloader').fadeOut(2000);
});

$(document).ready(function(){
    $(".progress-bar").animate({
        width: "100%"
    }, 2000);

    $('.carousel').carousel({
        interval: 4000,
        cycle: true,
        pause: "null"
    });

    jQuery('.counter-item').appear(function() {
        jQuery('.counter-number').countTo();
        jQuery(this).addClass('funcionando');
    });

    new WOW().init();

    $("a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 800, function(){

        window.location.hash = hash;
        });
    }
    });

    $('img[src$=".svg"]').each(function() {
        var $img = jQuery(this);
        var imgURL = $img.attr('src');
        var attributes = $img.prop("attributes");

        $.get(imgURL, function(data) {
            var $svg = jQuery(data).find('svg');

            $svg = $svg.removeAttr('xmlns:a');

            $.each(attributes, function() {
                $svg.attr(this.name, this.value);
            });

            $img.replaceWith($svg);
        }, 'xml');
    });
});