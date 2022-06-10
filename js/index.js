$(document).ready(function() {
    console.log("kevin boy")
    $(".dropdown").hover(function() {
        var dropdownMenu = $(this).children(".dropdown-menu");
        if (dropdownMenu.is(":visible")) {
            dropdownMenu.parent().toggleClass("open");
        }
    });
});

$(document).scroll(function() {
    const topButton = $("#backTop"),
        header = $("header"),
        work = $("#researchSection"),
        skills = $("#skillsHeader"),
        about = $("main"),
        contact = $("#contactHeader"),
        scroll = $(document).scrollTop(),
        buffer = 100;

    if (scroll < 147) {
        topButton.addClass("dNone");

    } else {
        topButton.removeClass("dNone");
    }

});

$("#backTop img").click(function() {

    $([document.documentElement, document.body]).animate({
        scrollTop: $("main").offset().top - $("header").height()
    }, 1000);
});