$(".button-collapse").sideNav();

$(".collapsible").click(function () {
    if ($(".collapsible-header").hasClass("active")) {
        $(".collapsible-icon").addClass("move-up-icon");
    } else {
        $(".collapsible-icon").removeClass("move-up-icon");
    }
});
