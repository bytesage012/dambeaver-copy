$(document).ready(function () {
    $('.loader-wrapper').fadeOut("slow");
    // Toggle Mobile Menu
    $(function () {
        $(".navbar-toggler").on("click", function (a) {
            $("#navbar-right").toggleClass("open");
            a.stopPropagation()
        });
        $(document).on("click", function (a) {
            if ($(a.target).is("#navbar-right") === false) {
                $("#navbar-right").removeClass("open");
            }
        });
    });
    $(".nav-link").click(function () {
        if (!$(this).hasClass('active')) {
            $(".nav-link.active").removeClass("active");
            $(this).addClass("active");
        }
    });
    $(function () {
        var pageScroll = 100;
        $(window).scroll(function () {
            var scroll = getCurrentScroll();
            if (scroll >= pageScroll) {
                $('header').addClass('fixed');
            }
            else {
                $('header').removeClass('fixed');
            }
        });
        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
    });
});
