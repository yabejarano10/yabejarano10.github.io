$(document).ready(function () {

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    $("footer").on('click', function play() {
        var audio = document.getElementById("audio");
        audio.play();
        $(".round-image.profile").attr("src", "images/face.jpg");
    });

    //Animation for timeline
    var $element = $('.each-event, .title');
    var $window = $(window);
    $window.on('scroll resize', check_for_fade);
    $window.trigger('scroll');

    function check_for_fade() {
        var window_height = $window.height();

        $.each($element, function (event) {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_offset = $element.offset().top;
            space = window_height - (element_height + element_offset - $(window).scrollTop());
            if (space < 60) {
                $element.addClass("non-focus");
            } else {
                $element.removeClass("non-focus");
            }

        });
    };

});