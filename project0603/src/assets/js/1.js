
(function ($) {
    setInterval(function () {
        if ($(".animated-circles").hasClass("animated")) {
            $(".animated-circles").removeClass("animated");
        } else {
            $(".animated-circles").addClass("animated");
        }
    }, 3000);
    var wait = setInterval(function () {
        $(".livechat-hint")
            .removeClass("show_hint")
            .addClass("hide_hint");
        clearInterval(wait);
    }, 4500);
    $(".livechat-girl")
        .hover(
            function () {
                clearInterval(wait);
                $(".livechat-hint")
                    .removeClass("hide_hint")
                    .addClass("show_hint");
            },
            function () {
                $(".livechat-hint")
                    .removeClass("show_hint")
                    .addClass("hide_hint");
            }
        )
        .click(function () {
            if (isMobile) {
                window.location.href = "http://www.baidu.com";
            } else {
                var oWidth = 606,
                    oHeight = 630,
                    top = $(window).height() / 2 - oHeight / 2,
                    left = $(window).width() / 2 - oWidth / 2;
                window.open(
                    "http://www.baidu.com",
                    "",
                    "width=" +
                    oWidth +
                    ",height=" +
                    oHeight +
                    ",scrollbars=yes,top=" +
                    top +
                    ",left=" +
                    left +
                    ",resizable=yes"
                );
            }
        });
})(jQuery);