// Navbar Scroll Function
$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
    } else {
        $('.nav').removeClass('affix');
    }
});

// Toggles the Responseive Navbar
$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    $("#navList").toggleClass("show_list");
    $("#navList").fadeIn();
});
